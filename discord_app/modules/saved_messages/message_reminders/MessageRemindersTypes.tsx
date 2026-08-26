// discord_app/modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import hooksDefault from "../../../../_runtime/04043_hooks.js";

const items = [
  {
    getDueAt() {
      const obj = hooksDefault();
      return hooksDefault().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["OV8l/H"]);
    }
  },
  {
    getDueAt() {
      const obj = hooksDefault();
      return hooksDefault().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = hooksDefault();
      return hooksDefault().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      const obj = hooksDefault();
      const addResult = hooksDefault().startOf("day").add(9, "hours");
      const startOfResult = hooksDefault().startOf("day");
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
      const dayResult = hooksDefault().day();
      if (0 === dayResult) {
        let num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = tmp(4043)();
          const startOfResult = tmp(4043)().startOf("day");
          num3 = 8;
          const addResult = tmp(4043)().startOf("day").add(9, "hours");
        }
      }
      const obj = hooksDefault();
      const obj5 = hooksDefault();
      const dayResult1 = hooksDefault().day(num3);
      const startOfResult1 = hooksDefault().day(num3).startOf("day");
      return hooksDefault().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["q+Ls05"]);
    }
  }
];
const result = set.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;