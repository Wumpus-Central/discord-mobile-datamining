// discord_app/modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
import { t } from "../../../../_runtime/03867_t.js";
import { getSystemLocale } from "../../../intl/index.native.tsx";
const items = [
  {
    getDueAt() {
      const obj = t();
      return t().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["OV8l/H"]);
    }
  },
  {
    getDueAt() {
      const obj = t();
      return t().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = t();
      return t().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      const obj = t();
      const addResult = t().startOf("day").add(9, "hours");
      const startOfResult = t().startOf("day");
      if (obj4.hour() >= 9) {
        let toDateResult = addResult.add(1, "day").toDate();
        const addResult1 = addResult.add(1, "day");
      } else {
        toDateResult = addResult.toDate();
      }
      return toDateResult;
    },
    getLabel() {
      if (obj.hour() >= 9) {
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t["7MKr2P"]);
      } else {
        const intl = getSystemLocale.intl;
        stringResult = intl.string(getSystemLocale.t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      const dayResult = t().day();
      if (0 === dayResult) {
        let num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = tmp(3867)();
          const startOfResult = tmp(3867)().startOf("day");
          num3 = 8;
          const addResult = tmp(3867)().startOf("day").add(9, "hours");
        }
      }
      const obj = t();
      const obj5 = t();
      const dayResult1 = t().day(num3);
      const startOfResult1 = t().day(num3).startOf("day");
      return t().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["q+Ls05"]);
    }
  }
];
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;