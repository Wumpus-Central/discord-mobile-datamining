// discord_app/modules/saved_messages/SavedMessageUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef4702 from "../../../_runtime/metro/04702__.js";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = globalThis.__r;

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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
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
            const obj4 = { value, done: true };
            return obj4;
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
                const obj7 = {
                  value: ChannelActionCreatorsDefault.fetchChannel(closure_0.saveData.channelId),
                  done: false,
                };
                return obj7;
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
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_130_2 = value;
            if (null == closure_130_2.recipients) {
              c5 = 0;
              c7 = 3;
              return { value: "IconComponent", done: "+51" };
            } else if (closure_130_2.recipients.length > 1) {
              c5 = 0;
              c7 = 3;
              return { value: "IconComponent", done: "+51" };
            } else {
              const recipients = closure_130_2.recipients;
              c6 = 3;
              c7 = 1;
              const obj9 = {
                value: closure_131_1(closure_131_2[10]).ensurePrivateChannel(recipients.map((id) => id.id)),
                done: false,
              };
              return obj9;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
        }
        let guildId;
        if (closure_130_1 != null) {
          guildId = closure_130_1.getGuildId();
        }
        closure_131_1(closure_131_2[11])(
          closure_131_8.CHANNEL(guildId, closure_130_0.saveData.channelId, closure_130_0.saveData.messageId),
          { openChannel: true },
        );
        c7 = 3;
        return { value: "IconComponent", done: "+51" };
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
const UnknownChannelRecord = fn(2069).UnknownChannelRecord;
const Constants = fn(1085);
({ ChannelTypes: closure_7, Routes: closure_8 } = Constants);
const DueInStringTypes = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const ReactCompilerGating = fn(558);
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
      let haia16 = tmp(1126).t.haia16;
    } else {
      haia16 = tmp(1126).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = haia16;
    }
    obj = { dueInText: null, isOverdue: null };
    const intl = tmp(1126).intl;
    const obj2 = { duration: null };
    const time = dueAt.getTime();
    tmp9 = obj;
    obj2.duration = _modDef4702.duration(time - now.getTime(), "millisecond").humanize();
    obj.dueInText = intl.formatToPlainString(H4gnX9, obj2);
    obj.isOverdue = now > dueAt;
    return obj;
  }
};
export const useSavedMessageChannel = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSavedMessageChannel(arg0) {
      let channelId = arg0;
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId.saveData.channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(saveData.saveData.channelId);
        };
        cResult[1] = channelId.saveData.channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (null == stateFromStores) {
        if (null != channelId.message) {
          const guildId = channelId.saveData.guildId;
          if (cResult[3] === channelId.saveData.channelId) {
          }
          const obj2 = { id: channelId.saveData.channelId, guild_id: guildId, type: constants.UNKNOWN, name: null };
          const intl = tmp(1126).intl;
          obj2.name = intl.string(tmp(1126).t.J90oLW);
          const tmp13 = new UnknownChannelRecord(obj2);
          channelId = channelId.saveData.channelId;
          cResult[3] = channelId;
          cResult[4] = guildId;
          cResult[5] = tmp13;
        }
      }
      return stateFromStores;
    }
  : function useSavedMessageChannel(arg0) {
      _require = arg0;
      const items = [ChannelStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        ChannelStore.getChannel(closure_0.saveData.channelId),
      );
      const items1 = [stateFromStores, arg0];
      return noop.useMemo(() => {
        let tmp = stateFromStores;
        if (null == stateFromStores) {
          let tmp9;
          if (null != closure_0.message) {
            const obj = {
              id: closure_0.saveData.channelId,
              guild_id: closure_0.saveData.guildId,
              type: constants.UNKNOWN,
              name: null,
            };
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
