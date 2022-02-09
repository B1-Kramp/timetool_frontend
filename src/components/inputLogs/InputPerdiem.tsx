import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  alertShownInInputState,
  editTimelogState,
  perdiemModelsState,
} from "../../atom";

export default function InputPerdiem(props: {
  setUuidLog(uuid: string | null): void;
  uuidProject: string;
  perdiemModels: string[];
  model: string;
  setModel(model: string): void;
  setTypeOfPerdiem(type: number): void;
  setLogMsg(msg: string): void;
  logMsg: string;
}) {
  const perdiemModels = useRecoilValue(perdiemModelsState);
  const [modelSelected, setModelSelected] = useState(props.model);
  const { t } = useTranslation();
  const setAlertShownInInput = useSetRecoilState(alertShownInInputState);
  const [editTimelog, setEditTimelog] = useRecoilState(editTimelogState);
  const projectPerdiem = perdiemModels.get(props.uuidProject);

  if (!projectPerdiem) {
    setAlertShownInInput(true);
    return (
      <Container>
        <Box sx={{ mx: "auto", textAlign: "center", p: 5 }}>
          <Alert severity="info" sx={{ textAlign: "center" }}>
            {t("no_perdiems_in_this_project")}
          </Alert>
        </Box>
      </Container>
    );
  }

  setAlertShownInInput(false);

  return (
    <>
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="select-label-modelState">{t("model")}</InputLabel>
          <Select
            labelId="select-label-model"
            required={true}
            id="demo-simple-select-model"
            value={modelSelected}
            label={t("model")}
            onChange={(e) => {
              props.setTypeOfPerdiem(parseInt(e.target.value));
              setModelSelected(e.target.value);
            }}
          >
            {Object.entries(projectPerdiem).map(([key, perdiemModel]) => (
              <MenuItem key={key} value={key}>
                {perdiemModel}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={7} md={6} lg={4}>
        <TextField
          fullWidth
          label={t("comment")}
          required={true}
          value={props.logMsg}
          onChange={(e) => props.setLogMsg(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2} sx={{ mt: 1 }}>
        {editTimelog && (
          <Button
            color="warning"
            fullWidth
            size="large"
            onClick={() => {
              setEditTimelog(null);
              props.setLogMsg("");
              props.setUuidLog(null);
            }}
            variant="contained"
            data-testid={`InputPerdiem_cancel_edit-warning-btn`}
            startIcon={<DoDisturbIcon />}
          >
            {t("cancel_edit")}
          </Button>
        )}
      </Grid>
    </>
  );
}
