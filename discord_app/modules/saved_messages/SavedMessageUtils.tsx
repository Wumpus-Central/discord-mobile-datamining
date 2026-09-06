// === Module 11711: SavedMessageUtils ===

// Module 11711 (SavedMessageUtils)
import util from "util" /* 1114 */;
import _modDef4153 from "module_4153" /* 4153 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
let closure_10 = async function _savedMessageJumpToMessage(arg0, arg1) {
  closure_0 = arg0;
  let type = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            closure_130_0 = closure_0;
            closure_130_1 = type;
            closure_130_2 = undefined;
            type = undefined;
            if (type != null) {
              type = type.type;
            }
            if (type === constants.UNKNOWN) {
              if (null == closure_0.saveData.guildId) {
                c5 = 1;
                c6 = 2;
                c7 = 1;
                let obj1 = { value: ChannelActionCreatorsDefault.fetchChannel(closure_0.saveData.channelId), done: false };
                return obj1;
              }
            }
          }
        } else if (1 === tmp8) {
          c5 = 0;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_130_2 = value;
            if (null == closure_130_2.recipients) {
              c5 = 0;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else if (closure_130_2.recipients.length > 1) {
              c5 = 0;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              obj1 = closure_131_1(closure_131_2[8]);
              const recipients = closure_130_2.recipients;
              c6 = 3;
              c7 = 1;
              const obj3 = { value: obj1.ensurePrivateChannel(recipients.map((id) => id.id)), done: false };
              return obj3;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
        }
        let guildId;
        if (closure_130_1 != null) {
          guildId = closure_130_1.getGuildId();
        }
        closure_131_1(closure_131_2[9])(closure_131_8.CHANNEL(guildId, closure_130_0.saveData.channelId, closure_130_0.saveData.messageId), { openChannel: true });
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp30) {
        closure_4 = tmp30;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp30;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const UnknownChannelRecord = fn(1961).UnknownChannelRecord;
const Constants = fn(1074);
({ ChannelTypes: closure_7, Routes: closure_8 } = Constants);
const DueInStringTypes = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export { DueInStringTypes };
export const useDueInString = function useDueInString(arg0) {
  ({ dueAt, now, type } = arg0);
  if (null == dueAt) {
    return { string: "", isOverdue: false };
  } else {
    if (type === obj.LONG) {
      let H4gnX9 = util.t.TjNWNF;
      let tmp = require;
    } else {
      tmp = require;
      H4gnX9 = util.t.H4gnX9;
    }
    if (type === tmp9.LONG) {
      let haia16 = tmp(1114).t.haia16;
    } else {
      haia16 = tmp(1114).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = haia16;
    }
    obj = { dueInText: null, isOverdue: null };
    const intl = tmp(1114).intl;
    obj = { duration: null };
    const time = dueAt.getTime();
    tmp9 = obj;
    obj.duration = _modDef4153.duration(time - now.getTime(), "millisecond").humanize();
    obj.dueInText = intl.formatToPlainString(H4gnX9, obj);
    obj.isOverdue = now > dueAt;
    return obj;
  }
};
export const useSavedMessageChannel = function useSavedMessageChannel(savedMessage) {
  _require = savedMessage;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(savedMessage.saveData.channelId));
  const items1 = [stateFromStores, savedMessage];
  return noop.useMemo(() => {
    let tmp = stateFromStores;
    if (null == stateFromStores) {
      let tmp9;
      if (null != savedMessage.message) {
        const obj = { id: savedMessage.saveData.channelId, guild_id: savedMessage.saveData.guildId, type: constants.UNKNOWN, name: null };
        const intl = util.intl;
        obj.name = intl.string(util.t.J90oLW);
        tmp9 = new UnknownChannelRecord(obj);
      }
      tmp = tmp9;
    }
    return tmp;
  }, items1);
};
export const savedMessageJumpToMessage = function savedMessageJumpToMessage() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};