// discord_app/modules/saved_messages/SavedMessageUtils.tsx
import getSystemLocale from "getSystemLocale";
import noop from "noop";
import { UnknownChannelRecord } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import { t } from "../../../_runtime/03883_t.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";

let error;
let metroImportAll;
const require = arg1;
function _savedMessageJumpToMessage() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
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
              let getSystemLocale = tmp3;
              let closure_2 = tmp5;
              closure_2 = undefined;
              let type;
              if (lib != null) {
                type = lib.type;
              }
              if (type === constants.UNKNOWN) {
                if (null == tmp43.saveData.guildId) {
                  let c5 = 1;
                  c6 = 2;
                  constants = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = lib(outer1_2[8]).fetchChannel(tmp43.saveData.channelId);
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
                return { value: "T", done: null };
              } else if (closure_2.recipients.length > 1) {
                c5 = 0;
                constants = 3;
                return { value: "T", done: null };
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
          return { value: "T", done: null };
        } catch (tmp30) {
          let noop = tmp30;
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
  const _savedMessageJumpToMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelTypes: error, Routes: metroImportAll } = ME);
let obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const result = require("createChannelRecord").fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export const useDueInString = function useDueInString(arg0) {
  let dueAt;
  let now;
  let type;
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
    const obj3 = t;
    tmp8 = obj;
    obj[0] = t.duration(time - now.getTime(), "millisecond").humanize();
    obj[0] = intl.formatToPlainString(H4gnX9, obj);
    obj[1] = now > dueAt;
    return obj;
  }
};
export const useSavedMessageChannel = function useSavedMessageChannel(savedMessage) {
  const _require = savedMessage;
  const items = [ensureGuildLoaded];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_6.getChannel(savedMessage.saveData.channelId));
  const items1 = [stateFromStores, savedMessage];
  return React.useMemo(() => {
    let tmp = stateFromStores;
    if (null == stateFromStores) {
      let tmp9;
      if (null != savedMessage.message) {
        const obj = { id: null, guild_id: null, type: null, name: null };
        obj[0] = tmp10.saveData.channelId;
        obj[1] = tmp10.saveData.guildId;
        obj[2] = outer1_7.UNKNOWN;
        const intl = savedMessage(outer1_2[5]).intl;
        obj[3] = intl.string(savedMessage(outer1_2[5]).t.J90oLW);
        tmp9 = new outer1_5(obj);
      }
      tmp = tmp9;
    }
    return tmp;
  }, items1);
};
export const savedMessageJumpToMessage = function savedMessageJumpToMessage(outer1_0, c1) {
  const self = this;
  const apply = _savedMessageJumpToMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};