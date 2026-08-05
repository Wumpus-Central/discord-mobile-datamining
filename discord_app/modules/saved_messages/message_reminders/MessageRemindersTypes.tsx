// discord_app/modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
const items = [
  {
    getDueAt() {
      const obj = require("../../../../_runtime/03867_t.js")();
      return require("../../../../_runtime/03867_t.js")().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["OV8l/H"]);
    }
  },
  {
    getDueAt() {
      const obj = require("../../../../_runtime/03867_t.js")();
      return require("../../../../_runtime/03867_t.js")().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = require("../../../../_runtime/03867_t.js")();
      return require("../../../../_runtime/03867_t.js")().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      const obj = require("../../../../_runtime/03867_t.js")();
      const addResult = require("../../../../_runtime/03867_t.js")().startOf("day").add(9, "hours");
      const startOfResult = require("../../../../_runtime/03867_t.js")().startOf("day");
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
        const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        let stringResult = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["7MKr2P"]);
      } else {
        const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        stringResult = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      const dayResult = require("../../../../_runtime/03867_t.js")().day();
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
      const obj = require("../../../../_runtime/03867_t.js")();
      const obj5 = require("../../../../_runtime/03867_t.js")();
      const dayResult1 = require("../../../../_runtime/03867_t.js")().day(num3);
      const startOfResult1 = require("../../../../_runtime/03867_t.js")().day(num3).startOf("day");
      return require("../../../../_runtime/03867_t.js")().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["q+Ls05"]);
    }
  }
];
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;