// discord_app/modules/saved_messages/SavedMessageUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef2166 from "../../../_runtime/metro/02166__.js";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_12 = async function _savedMessageJumpToMessage(arg0, arg1) {
  let saveData = arg0;
  closure_1 = arg1;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            closure_130_0 = saveData;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            if (null == saveData.saveData.guildId) {
              if (null == channel.getChannel(saveData.saveData.channelId)) {
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj7 = {
                  value: ChannelActionCreatorsDefault.fetchChannel(saveData.saveData.channelId),
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
              return { value: "HermesInternal", done: null };
            } else if (closure_130_2.recipients.length > 1) {
              c5 = 0;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const recipients = closure_130_2.recipients;
              c6 = 3;
              c7 = 1;
              const obj9 = {
                value: closure_131_1(closure_131_2[9]).ensurePrivateChannel(recipients.map((id) => id.id)),
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
        closure_131_1(closure_131_2[10])(
          closure_131_10.CHANNEL(guildId, closure_130_0.saveData.channelId, closure_130_0.saveData.messageId),
          { openChannel: true },
        );
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp29) {
        closure_4 = tmp29;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp29;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const ChannelRecord = fn(4993);
({ PrivateChannelRecord: hasOwnProperty, UnknownChannelRecord: closure_6 } = ChannelRecord);
const Constants = fn(1072);
({ ChannelTypes: closure_9, Routes: closure_10 } = Constants);
const DueInStringTypes = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export { DueInStringTypes };
export function useDueInString(arg0) {
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
      let haia16 = tmp(1113).t.haia16;
    } else {
      haia16 = tmp(1113).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = haia16;
    }
    obj = { dueInText: null, isOverdue: null };
    const intl = tmp(1113).intl;
    const obj2 = { duration: null };
    const time = dueAt.getTime();
    tmp9 = obj;
    obj2.duration = _modDef2166.duration(time - now.getTime(), "millisecond").humanize();
    obj.dueInText = intl.formatToPlainString(H4gnX9, obj2);
    obj.isOverdue = now > dueAt;
    return obj;
  }
}
export function useSavedMessageChannel(savedMessage) {
  _require = savedMessage;
  items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ChannelStore.getChannel(savedMessage.saveData.channelId),
  );
  let obj = require("initialize");
  const items1 = [AuthenticationStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => id.getId());
  const items2 = [stateFromStores, savedMessage, stateFromStores1];
  return noop.useMemo(() => {
    if (null != stateFromStores) {
      return stateFromStores;
    } else {
      ({ message, saveData } = closure_0);
      if (null != message) {
        if (null != saveData.guildId) {
          const obj = { id: null, guild_id: null, type: null, name: null };
          ({ channelId: obj.id, guildId: obj.guild_id } = saveData);
          obj.type = constants.UNKNOWN;
          const intl = util.intl;
          obj.name = intl.string(util.t.J90oLW);
          let tmp9 = new timestampProducer(obj);
        }
        const obj2 = { id: null, type: null, name: "", guild_id: null, recipients: null };
        saveData = saveData.channelId;
        obj2.id = saveData;
        obj2.type = constants.DM;
        items = [message.author.id];
        obj2.recipients = items;
        message = new.target;
        tmp9 = new hasOwnProperty(obj2);
      }
    }
  }, items2);
}
export function savedMessageJumpToMessage() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
