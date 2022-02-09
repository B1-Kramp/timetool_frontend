import DatePicker from "@mui/lab/DatePicker";
import {
  Autocomplete,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  dateFromState,
  editTimelogState,
  isMonthClosedState,
  monthState,
  projectsState,
} from "../atom";
import MonthEndDialog from "./MonthEndDialog";
import InputCard from "./inputLogs/InputCard";
import TimelogItemList from "./outputLogs/TimelogItemList";

/**
 * Main Component to bundle all cards
 */

export default function MainGrid() {
  const { t } = useTranslation();

  const [project, setProject] = useState<string>("");
  const [projectUuid, setProjectUuid] = useState<string>("");
  const [uuidLog, setUuidLog] = useState<string | null>(null);
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [endMonthOpen, setEndMonthOpen] = useState(false);
  const [projectShiftModels, setProjectShiftModels] = useState<string[]>([]);
  const [perdiemModels, setPerdiemModels] = useState<string[]>([]);

  const dateFrom = useRecoilValue(dateFromState);
  const availableProjects = useRecoilValue(projectsState);
  const editTimelog = useRecoilValue(editTimelogState);
  const [month, setMonth] = useRecoilState(monthState);
  const isMonthClosed = useRecoilValue(isMonthClosedState);

  /**
   * This useEffect checs if only one project is available and sets it.
   * It does the same for project types.
   */

  useEffect(() => {
    if (availableProjects.length === 1) {
      const str = availableProjects[0].name;
      if (str !== null) {
        if (project !== str) {
          const projectFiltered = availableProjects.filter(
            (project) => project.name === str,
          );
          setProject(str);
          setProjectUuid(projectFiltered[0].uuid);
          setProjectTypes(Object.keys(projectFiltered[0].worktypes));
          if (projectFiltered[0].worktypes.shift !== undefined) {
            setProjectShiftModels(Object.values(projectFiltered[0].worktypes.shift));
          }
          if (projectFiltered[0].worktypes.perdiem !== undefined) {
            setPerdiemModels(Object.values(projectFiltered[0].worktypes.perdiem));
          }
        }
      }
    }
  }, [availableProjects, project]);

  /**
   * This useEffect checks if edit Log and edit Perdiem is placeholder.
   * - if not -> checks if editLog is timelog or shift.
   * Than it sets all states in input Card, most important is setUuidLog
   * because this determines if a new Log is commit or an old one is changed
   */

  useEffect(() => {
    if (editTimelog) {
      setUuidLog(editTimelog.uuid);
      setProjectUuid(editTimelog.project_uuid);
      const projectFiltered = availableProjects.filter(
        (project) => project.uuid === editTimelog.project_uuid,
      );
      setProject(projectFiltered[0].name);
      if (editTimelog.type === "shift") {
        setProjectTypes(["shift"]);
        if (projectFiltered[0].worktypes.shift !== undefined) {
          setProjectShiftModels(Object.values(projectFiltered[0].worktypes.shift));
        }
      } else if (editTimelog.type === "timelog" || editTimelog.type === "default") {
        setProjectTypes(["timelog"]);
      } else if (editTimelog.end_dt === undefined) {
        setProjectTypes(["perdiem"]);
        if (projectFiltered[0].worktypes.perdiem !== undefined) {
          setPerdiemModels(Object.values(projectFiltered[0].worktypes.perdiem));
        }
      }
    }
  }, [availableProjects, editTimelog, dateFrom, isMonthClosed]);

  const monthEndHandler = () => {
    setEndMonthOpen(false);
  };

  const setProjectGetLogsHandler = (str: string | null) => {
    if (str !== null) {
      if (project !== str) {
        const projectFiltered = availableProjects.filter(
          (project) => project.name === str,
        );
        setProject(str);
        setProjectUuid(projectFiltered[0].uuid);
        setProjectTypes(Object.keys(projectFiltered[0].worktypes));
        if (projectFiltered[0].worktypes.shift !== undefined) {
          setProjectShiftModels(Object.values(projectFiltered[0].worktypes.shift));
        }
        if (projectFiltered[0].worktypes.perdiem !== undefined) {
          setPerdiemModels(Object.values(projectFiltered[0].worktypes.perdiem));
        }
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card elevation={0} sx={{ border: 1, borderColor: "grey.300", ml: 1, mr: 1 }}>
          {endMonthOpen && (
            <MonthEndDialog
              close={monthEndHandler}
              year={month.year}
              monthLong={month.monthLong}
            />
          )}
          <CardHeader></CardHeader>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={3} lg={2}>
                <FormControl fullWidth>
                  <DatePicker
                    data-testid={`MainGrid_year-and-month-DatPicker`}
                    views={["year", "month"]}
                    label={t("year_and_month")}
                    minDate={DateTime.fromISO("2000-01-01T00:00")}
                    maxDate={DateTime.fromISO("2100-01-01T00:00")}
                    value={month}
                    onChange={(newValue) => {
                      if (newValue) {
                        setMonth(newValue);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={7} md={6} lg={4}>
                <FormControl fullWidth>
                  <Autocomplete
                    id="select-label-projectState-autocomplete"
                    options={availableProjects.map((project) => project.name)}
                    renderInput={(params) => (
                      <TextField {...params} label={t("project")} />
                    )}
                    value={project}
                    onChange={(event, value) => setProjectGetLogsHandler(value)}
                    disabled={!dateFrom}
                  ></Autocomplete>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs={12} sm={6} md={3} lg={2}></Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <InputCard
          setUuidLog={setUuidLog}
          setProjectUuid={setProjectUuid}
          perdiemModels={perdiemModels}
          monthIsClosed={isMonthClosed}
          types={projectTypes}
          uuidProject={projectUuid}
          uuidLog={uuidLog}
          projectShiftModels={projectShiftModels}
        />
      </Grid>
      <Grid item xs={12}>
        <TimelogItemList
          monthIsClosed={isMonthClosed}
          setEndMonthOpen={setEndMonthOpen}
        />
      </Grid>
    </Grid>
  );
}
