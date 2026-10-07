// === Module 5048: NicknameUtils ===

// Module 5048 (NicknameUtils)
import util from "util" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;

require = fn;
function getName(guildId, arg1, id) {
  if (null == id) {
    const intl = util.intl;
    let stringResult = intl.string(util.t.sKdZ6U);
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
      stringResult = UserUtilsDefault.getName(id);
    }
  }
  return stringResult;
}
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, ChannelStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === arg2) {
        let tmp8 = cResult[4];
      }
      return tmp(504).useStateFromStores(first, tmp8);
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
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1, arg2) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [GuildMemberStore, ChannelStore, RelationshipStore];
  return require("initialize").useStateFromStores(items, () => getName(closure_0, closure_1, closure_2));
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
const size = fn(2);
const result = size.fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName: tmp2 };
export { getNickname };
export { getName };
export const useName = tmp2;