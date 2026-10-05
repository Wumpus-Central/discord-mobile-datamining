// === Module 5042: NicknameUtils ===

// Module 5042 (NicknameUtils)
import intl2 from "intl" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getName(guildId, arg1, id) {
  let stringResult;
  if (null == id) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.sKdZ6U);
  } else {
    stringResult = null;
    if (null != id) {
      if (null != guildId) {
        stringResult = GuildMemberStore.getNick(guildId, id.id);
      } else {
        stringResult = null;
        if (null != arg1) {
          const channel = ChannelStore.getChannel(arg1);
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          stringResult = null;
          if (isPrivateResult) {
            stringResult = RelationshipStore.getNickname(id.id);
          }
        }
      }
    }
    if (stringResult == null) {
      const obj2 = UserUtilsDefault;
      stringResult = obj2.getName(id);
    }
  }
  return stringResult;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, ChannelStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp8;
      if (cResult[3] === arg2) {
        tmp8 = cResult[4];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp8);
    }
  }
  const fn = function o() {
    return getName(closure_0, closure_1, closure_2);
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = arg2;
  cResult[4] = fn;
  tmp8 = fn;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const items = [GuildMemberStore, ChannelStore, RelationshipStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => getName(closure_0, closure_1, closure_2));
});
function getNickname(guildId, channelId, id) {
  if (null == id) {
    return null;
  } else if (null != guildId) {
    return GuildMemberStore.getNick(guildId, id.id);
  } else {
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (isPrivateResult) {
        return RelationshipStore.getNickname(id.id);
      }
    }
    return null;
  }
}
const result = size.fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName: tmp2 };
export { getNickname };
export { getName };
export const useName = tmp2;