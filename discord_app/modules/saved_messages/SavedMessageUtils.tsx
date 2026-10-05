// === Module 11341: SavedMessageUtils ===

// Module 11341 (SavedMessageUtils)
import intl2 from "intl" /* 1126 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import _modDef4461 from "module_4461" /* 4461 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_3, closure_4, type2;

let metroImportAll;
let metroImportDefault;
let obj = function _savedMessageJumpToMessage() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let type = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              type2 = undefined;
              type = undefined;
              if (type != null) {
                type = type.type;
              }
              if (type === constants.UNKNOWN) {
                if (null == closure_0.saveData.guildId) {
                  c5 = 1;
                  type = ChannelActionCreatorsDefault;
                  c6 = 2;
                  c7 = 1;
                  const obj4 = { value: type.fetchChannel(closure_0.saveData.channelId), done: false };
                  return obj4;
                }
              }
            }
          } else if (1 === c6) {
            c5 = 0;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              type2 = value;
              if (null == type2.recipients) {
                c5 = 0;
                c7 = 3;
                return { value: "IconComponent", done: null };
              } else if (type2.recipients.length > 1) {
                c5 = 0;
                c7 = 3;
                return { value: "IconComponent", done: null };
              } else {
                type = closure_131_1(closure_131_2[10]);
                const recipients = type2.recipients;
                c6 = 3;
                c7 = 1;
                const obj6 = { value: type.ensurePrivateChannel(recipients.map((id) => id.id)), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
          }
          let guildId;
          const CHANNEL = closure_131_8.CHANNEL;
          const tmp17 = closure_131_1(closure_131_2[11]);
          if (type != null) {
            guildId = type.getGuildId();
          }
          type = CHANNEL(guildId, closure_0.saveData.channelId, closure_0.saveData.messageId);
          tmp17(type, { openChannel: true });
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp26) {
          closure_4 = tmp26;
          if (0 === c5) {
            c7 = 3;
            throw tmp26;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const UnknownChannelRecord = ChannelRecord.UnknownChannelRecord;
({ ChannelTypes: metroImportDefault, Routes: metroImportAll } = Constants);
obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(saveData) {
  let first;
  let intl;
  let tmp6;
  _require = saveData;
  obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== saveData.saveData.channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(saveData.saveData.channelId);
    };
    cResult[1] = saveData.saveData.channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  let stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    if (null != saveData.message) {
      const guildId = saveData.saveData.guildId;
      if (cResult[3] === saveData.saveData.channelId) {
        let tmp8;
        if (cResult[4] === guildId) {
          tmp8 = cResult[5];
        }
        stateFromStores = tmp8;
      }
      const obj2 = { id: saveData.saveData.channelId, guild_id: guildId, type: constants.UNKNOWN, name: intl.string(require("intl").t.J90oLW) };
      intl = tmp(1126).intl;
      const self = this;
      const self2 = this;
      const tmp12 = new UnknownChannelRecord(obj2);
      cResult[3] = saveData.saveData.channelId;
      cResult[4] = guildId;
      cResult[5] = tmp12;
      tmp8 = tmp12;
    }
  }
  return stateFromStores;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  obj = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0.saveData.channelId));
  const items1 = [stateFromStores, arg0];
  return react.useMemo(function() {
    let intl;
    let tmp = stateFromStores;
    if (null == stateFromStores) {
      let tmp7;
      if (null != closure_0.message) {
        obj = { id: closure_0.saveData.channelId, guild_id: closure_0.saveData.guildId, type: metroImportDefault.UNKNOWN, name: intl.string(intl2.t.J90oLW) };
        intl = intl2.intl;
        const self = this;
        const self2 = this;
        tmp7 = new UnknownChannelRecord(obj);
      }
      tmp = tmp7;
    }
    return tmp;
  }, items1);
});
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export const useDueInString = function useDueInString(arg0) {
  let dueAt;
  let durationResult;
  let formatToPlainString;
  let now;
  let obj2;
  let type;
  ({ dueAt, now, type } = arg0);
  if (null == dueAt) {
    return { string: "", isOverdue: false };
  } else {
    let H4gnX9;
    let tmp;
    let haia16;
    const tmp10 = obj;
    if (type === obj.LONG) {
      H4gnX9 = intl2.t.TjNWNF;
      tmp = require;
    } else {
      tmp = require;
      H4gnX9 = intl2.t.H4gnX9;
    }
    if (type === tmp10.LONG) {
      haia16 = tmp(1126).t.haia16;
    } else {
      haia16 = tmp(1126).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = haia16;
    }
    obj = { dueInText: formatToPlainString(H4gnX9, obj2), isOverdue: now > dueAt };
    const intl = tmp(1126).intl;
    formatToPlainString = intl.formatToPlainString;
    obj2 = { duration: durationResult.humanize() };
    const duration = _modDef4461.duration;
    _modDef4461;
    const time = dueAt.getTime();
    durationResult = duration(time - now.getTime(), "millisecond");
    return obj;
  }
};
export const useSavedMessageChannel = tmp3;
export const savedMessageJumpToMessage = function savedMessageJumpToMessage() {
  return obj(...arguments);
};