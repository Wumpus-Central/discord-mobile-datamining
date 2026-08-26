// === Module 11348: _savedMessageJumpToMessage ===

// Module 11348 (_savedMessageJumpToMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hooksDefault from "hooks" /* 4043 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { UnknownChannelRecord } from "createChannelRecord" /* 1395 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

require = arg1;
function _savedMessageJumpToMessage() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp5;
              closure_2 = undefined;
              let type;
              if (lib != null) {
                type = lib.type;
              }
              if (type === constants.UNKNOWN) {
                if (null == tmp43.saveData.guildId) {
                  c5 = 1;
                  c6 = 2;
                  constants = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = lib(closure_1_2[8]).fetchChannel(tmp43.saveData.channelId);
                  return obj1;
                }
              }
            }
          } else if (1 === tmp8) {
            c5 = 0;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              constants = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_2 = arg1;
              if (null == closure_2.recipients) {
                c5 = 0;
                constants = 3;
                return { value: "HermesInternal", done: null };
              } else if (closure_2.recipients.length > 1) {
                c5 = 0;
                constants = 3;
                return { value: "HermesInternal", done: null };
              } else {
                obj1 = lib(closure_2[8]);
                const recipients = closure_2.recipients;
                c6 = 3;
                constants = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj1.ensurePrivateChannel(recipients.map((id) => id.id));
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 0;
          }
          let guildId;
          if (lib != null) {
            guildId = lib.getGuildId();
          }
          lib(closure_2[9])(closure_8.CHANNEL(guildId, closure_0.saveData.channelId, closure_0.saveData.messageId), { openChannel: true });
          constants = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp30) {
          closure_4 = tmp30;
          if (tmp4 === c5) {
            constants = tmp2;
            throw tmp30;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelTypes: error, Routes: closure_8 } = ME);
let obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const result = require("set").fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export const useDueInString = function useDueInString(arg0) {
  ({ dueAt, now, type } = arg0);
  if (null == dueAt) {
    return { string: "", isOverdue: false };
  } else {
    if (type === obj.LONG) {
      let H4gnX9 = getSystemLocale.t.TjNWNF;
      let tmp = require;
    } else {
      tmp = require;
      H4gnX9 = getSystemLocale.t.H4gnX9;
    }
    if (type === tmp8.LONG) {
      Uq7Y_7 = tmp(1236).t.haia16;
    } else {
      Uq7Y_7 = tmp(1236).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = Uq7Y_7;
    }
    obj = { dueInText: null, isOverdue: null };
    const intl = tmp(1236).intl;
    obj = { duration: null };
    const time = dueAt.getTime();
    const obj3 = hooksDefault;
    tmp8 = obj;
    obj[0] = hooksDefault.duration(time - now.getTime(), "millisecond").humanize();
    obj[0] = intl.formatToPlainString(H4gnX9, obj);
    obj[1] = now > dueAt;
    return obj;
  }
};
export const useSavedMessageChannel = function useSavedMessageChannel(savedMessage) {
  const _require = savedMessage;
  const items = [closure_6];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_6.getChannel(savedMessage.saveData.channelId));
  const items1 = [stateFromStores, savedMessage];
  return React.useMemo(() => {
    let tmp = stateFromStores;
    if (null == stateFromStores) {
      let tmp9;
      if (null != savedMessage.message) {
        obj = { id: null, guild_id: null, type: null, name: null };
        obj[0] = tmp10.saveData.channelId;
        obj[1] = tmp10.saveData.guildId;
        obj[2] = closure_1_7.UNKNOWN;
        const intl = savedMessage(closure_1_2[5]).intl;
        obj[3] = intl.string(savedMessage(closure_1_2[5]).t.J90oLW);
        tmp9 = new closure_1_5(obj);
      }
      tmp = tmp9;
    }
    return tmp;
  }, items1);
};
export const savedMessageJumpToMessage = function savedMessageJumpToMessage(closure_1_0, c1) {
  const self = this;
  const apply = _savedMessageJumpToMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};