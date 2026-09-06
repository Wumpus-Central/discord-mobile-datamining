// discord_app/modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4153 from "../../../../_runtime/metro/04153__.js";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  {
    getDueAt() {
      const obj = _modDef4153();
      return _modDef4153().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["OV8l/H"]);
    },
  },
  {
    getDueAt() {
      const obj = _modDef4153();
      return _modDef4153().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["zf0R+0"]);
    },
  },
  {
    getDueAt() {
      const obj = _modDef4153();
      return _modDef4153().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["5gztZN"]);
    },
  },
  {
    getDueAt() {
      const obj = _modDef4153();
      const addResult = _modDef4153().startOf("day").add(9, "hours");
      const startOfResult = _modDef4153().startOf("day");
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
    },
  },
  {
    getDueAt() {
      const dayResult = _modDef4153().day();
      if (0 === dayResult) {
        let num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = _modDef4153();
          _modDef4153().startOf("day").add(9, "hours");
          num3 = 8;
          const startOfResult = _modDef4153().startOf("day");
        }
      }
      const obj = _modDef4153();
      const obj5 = _modDef4153();
      const dayResult1 = _modDef4153().day(num3);
      const startOfResult1 = _modDef4153().day(num3).startOf("day");
      return _modDef4153().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["q+Ls05"]);
    },
  },
];
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;
