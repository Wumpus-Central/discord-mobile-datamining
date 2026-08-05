// discord_app/modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
const items = [
  {
    getDueAt() {
      const obj = importDefault(3867)();
      return importDefault(3867)().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["OV8l/H"]);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(3867)();
      return importDefault(3867)().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(3867)();
      return importDefault(3867)().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(3867)();
      const addResult = importDefault(3867)().startOf("day").add(9, "hours");
      const startOfResult = importDefault(3867)().startOf("day");
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
        const intl2 = require(1236) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1236) /* getSystemLocale */.t["7MKr2P"]);
      } else {
        const intl = require(1236) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1236) /* getSystemLocale */.t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      const dayResult = importDefault(3867)().day();
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
      const obj = importDefault(3867)();
      const obj5 = importDefault(3867)();
      const dayResult1 = importDefault(3867)().day(num3);
      const startOfResult1 = importDefault(3867)().day(num3).startOf("day");
      return importDefault(3867)().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["q+Ls05"]);
    }
  }
];
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;