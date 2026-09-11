// === Module 11805: MessageRemindersTypes ===

// Module 11805 (MessageRemindersTypes)
import util from "util" /* 1114 */;
import _modDef4198 from "module_4198" /* 4198 */;
import size from "module_2" /* 2 */;

const items = [
  {
    getDueAt() {
      const obj = _modDef4198();
      return _modDef4198().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["OV8l/H"]);
    }
  },
  {
    getDueAt() {
      const obj = _modDef4198();
      return _modDef4198().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = _modDef4198();
      return _modDef4198().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      const obj = _modDef4198();
      const addResult = _modDef4198().startOf("day").add(9, "hours");
      const startOfResult = _modDef4198().startOf("day");
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
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t["7MKr2P"]);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      const dayResult = _modDef4198().day();
      if (0 === dayResult) {
        let num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = _modDef4198();
          _modDef4198().startOf("day").add(9, "hours");
          num3 = 8;
          const startOfResult = _modDef4198().startOf("day");
        }
      }
      const obj = _modDef4198();
      const obj5 = _modDef4198();
      const dayResult1 = _modDef4198().day(num3);
      const startOfResult1 = _modDef4198().day(num3).startOf("day");
      return _modDef4198().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["q+Ls05"]);
    }
  }
];
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;