//data to simulate backend responses
import { Logs, Project } from "../models";

export const _dummy_projects: Project[] = [
  {
    uuid: "618e867e-8e0c-4465-b376-86516d67120b",
    name: "Onsite",
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        8: "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
  {
    uuid: "618e867e-9334-4800-b192-86516d67120b",
    name: "Entwicklung",
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        8: "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
  {
    uuid: "618e867e-a8c4-4a33-a03e-86516d67120b",
    name: "Consulting",
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        8: "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
  {
    uuid: "618e867e-b58c-4cd2-b343-86516d67120b",
    name: "Training",
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        8: "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
  {
    uuid: "618e8680-9670-4ecd-974f-86516d67120b",
    name: "SP - By Design",
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        "8": "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
  {
    uuid: "618e8685-ba30-4b3b-8f31-86516d67120b",
    name: 'IS - Erweiterung "Reseller"',
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        8: "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
  {
    uuid: "618e8687-43b0-45a6-addd-86516d67120b",
    name: "ek - SUSE Manager",
    worktypes: {
      perdiem: {
        4: "VMA Ausland",
        5: "32 \u20ac 24h ab 3 Mon",
        6: "16 \u20ac Anreise ab 3 Mon",
        7: "14 \u20ac VMA Anreise",
        8: "28 \u20ac VMA 24h",
      },
      timelog: {
        timelog: "timelog",
      },
      shift: {
        morning: "Fr\u00fchschicht",
        afternoon: "Nachmittag",
        night: "Nachtschicht",
      },
    },
  },
];

export const _dummy_old_logs_1: Logs = {
  timelogs: [
    {
      //e.g. default
      uuid: "12345-c33c-4751-8feb-2d0f2068c51e",
      employee_uuid: "61b846c6-2d44-42c4-83ba-2d0f2068c51e",
      project_uuid: "618e86a1-dfc0-4025-84f8-86516d67120b",
      project_name: "test2 - default",
      start_dt: 1625119200,
      end_dt: 1625151600,
      type: "default",
      breaklength: 3600,
      travel: "0",
      comment: "SAP Unicorn - Telefonica",
      onsite: "onsite",
    },
    {
      //e.g. default
      uuid: "123-c33c-4751-8feb-2d0f2068c51e",
      employee_uuid: "61b846c6-2d44-42c4-83ba-2d0f2068c51e",
      project_uuid: "618e86a1-dfc0-4025-84f8-86516d67120b",
      project_name: "test2 - default",
      start_dt: 1625119200,
      end_dt: 1625151600,
      type: "default",
      breaklength: 3600,
      travel: "0",
      comment:
        "SAP Unicorn - Megha viel text- Telefonica- asdijhasghdasdfpiouasidfhj  aisudfh ioahnsdiofu iuoashndf ouhn",
      onsite: "remote",
    },
    {
      //e.g. default
      uuid: "61b846d5-c33c-4751-8feb-2d0f2068c51e",
      employee_uuid: "61b846c6-2d44-42c4-83ba-2d0f2068c51e",
      project_uuid: "618e86a1-dfc0-4025-84f8-86516d67120b",
      project_name: "test2 - default",
      start_dt: 1625119200,
      end_dt: 1625151600,
      type: "default",
      breaklength: 3600,
      travel: "0",
      comment: "SAP Unicorn - Telefonica",
      onsite: "onsite",
    },
    {
      //e.g. default
      uuid: "61c846d5-c33c-4751-8feb-2d0f2068c52e",
      employee_uuid: "61b846c6-2d44-42c4-83ba-2f0f2068c51e",
      project_uuid: "618e86a1-dfc0-4025-84f8-86616d67120b",
      project_name: "test2 - shift",
      start_dt: 1625110200,
      end_dt: 1625150600,
      type: "shift",
      incidents: [
        {
          start_dt: 123,
          end_dt: 123666,
          comment: "mitteilung1",
        },
        {
          start_dt: 123234,
          end_dt: 123234666,
          comment: "mitteilung1",
        },
        {
          start_dt: 1232345,
          end_dt: 123234666,
          comment: "mitteilung1",
        },
      ],
      shift_model: "morning",
    },
    {
      //e.g. default
      uuid: "61d846d5-c33c-4751-8feb-2d0f2068c52e",
      employee_uuid: "61b846c6-2d44-42c4-83ba-2f0f2068c51e",
      project_uuid: "618e86a1-dfc0-4025-84f8-86616d67120b",
      project_name: "test1  - shift - no inc",
      start_dt: 1625110200,
      end_dt: 1625150600,
      type: "shift",
      shift_model: "morning",
    },
    {
      //e.g. default
      uuid: "61g846d5-c33c-4751-8feb-2d0f2068c52e",
      employee_uuid: "61b846c6-2d44-42c4-83ba-2f0f2068c51e",
      project_uuid: "618e86a1-dfc0-4025-84f8-86616d67120b",
      project_name: "test2 - shift - incidents: [],",
      start_dt: 1625110200,
      end_dt: 1625150600,
      type: "shift",
      incidents: [],
      shift_model: "morning",
    },
  ],
  perdiems: [
    {
      //e.g. perdiem
      uuid: "a41cdbe1-e271-45f4-8644-07ed650d7a50",
      project_name: "Test2 perdiem",
      start_dt: 1626566400,
      employee_uuid: "61b846c6-2d44-42c4-83ba-2d0f2068c51e",
      type: 7,
      project_uuid: "618e86a1-dfc0-4025-84f8-86516d67120b",
      comment: "Dresden - Unicorn Meetings - Anreise",
    },
  ],
};

export const _dummy_old_logs_2: Logs = {
  timelogs: [
    {
      uuid: "61b846f5-c33c-4211-8feb-2d0f2068c52e",
      employee_uuid: "61b846s6-2d44-42c4-83ba-2f0f2068c51e",
      project_uuid: "123g86a1-dfc0-4025-84f8-86616d67120b",
      project_name: "test1 - shift",
      start_dt: 1100500600,
      end_dt: 1725150600,
      type: "shift",
      incidents: [
        {
          start_dt: 1625110200,
          end_dt: 1625110300,
          comment: "mitteilung1",
        },
        {
          start_dt: 1625110350,
          end_dt: 1625110400,
          comment: "mitteilung1",
        },
        {
          start_dt: 1625110300,
          end_dt: 1625110400,
          comment: "mitteilung1",
        },
      ],
      shift_model: "morning",
    },
    {
      uuid: "21y846d5-g13c-4751-8feb-2d0f2068c52e",
      employee_uuid: "31b846c6-2d44-42c4-83ba-2f0f2068c51e",
      project_uuid: "123g86a1-dfc0-4025-84f8-86616d67120b",
      project_name: "test1 - shift",
      start_dt: 1425110200,
      end_dt: 1425150600,
      type: "shift",
      incidents: [
        {
          start_dt: 123,
          end_dt: 123666,
          comment: "mitteilung1",
        },
        {
          start_dt: 123234,
          end_dt: 123234666,
          comment: "mitteilung1",
        },
        {
          start_dt: 1232345,
          end_dt: 123234666,
          comment: "mitteilung1",
        },
      ],
      shift_model: "afternoon",
    },
    {
      uuid: "21y826h5-c33c-4751-8feb-2d0f2068c52e",
      employee_uuid: "31b846c6-2d44-42c4-83ba-2f0f2068c51e",
      project_uuid: "123g86a1-dfc0-4025-84f8-86616d67120b",
      project_name: "test1 - shift",
      start_dt: 1425110200,
      end_dt: 1425150600,
      type: "shift",
      incidents: [
        {
          start_dt: 123,
          end_dt: 123666,
          comment: "mitteilung1",
        },
        {
          start_dt: 123234,
          end_dt: 123234666,
          comment: "mitteilung1",
        },
        {
          start_dt: 1232345,
          end_dt: 123234666,
          comment: "mitteilung1",
        },
      ],
      shift_model: "night",
    },
  ],
  perdiems: [
    {
      uuid: "a41cdbe1-e273-45f4-8644-07ed650d7a50",
      project_name: "Test2 perdiem",
      start_dt: 1626566400,
      employee_uuid: "61b846c6-2d44-42c4-83ba-2d0f2068c51e",
      type: 1,
      project_uuid: "618e56a1-dfc0-4025-84f8-86516d67120b",
      comment: "Dresden - Unicorn Meetings - Anreise",
    },
    {
      uuid: "a51cdbe1-e2671-45f4-8644-07ed650d7a50",
      project_name: "Test2 perdiem",
      start_dt: 1676566400,
      employee_uuid: "61b946c6-2d44-42c4-83ba-2d0f2068c51e",
      type: 2,
      project_uuid: "618e56a1-dfc0-4025-84f8-86516d67120b",
      comment: "Dresden - Unicorn Meetings - Anreise",
    },
    {
      uuid: "a51cdbe1-e224-45f4-8644-07ed650d7a50",
      project_name: "Test2 perdiem",
      start_dt: 1676566400,
      employee_uuid: "61b946c6-2d44-42c4-83ba-2d0f2068c51e",
      type: 3,
      project_uuid: "618e56a1-dfc0-4025-84f8-86516d67120b",
      comment: "Dresden - Unicorn Meetings - Anreise",
    },
  ],
};