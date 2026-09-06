// === Module 4712: NicknameUtils ===

// Module 4712 (NicknameUtils)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
function getNickname(id, arg1, id) {
  if (null == id) {
    return null;
  } else if (null != id) {
    return GuildMemberStore.getNick(id, id.id);
  } else {
    if (null != arg1) {
      const channel = ChannelStore.getChannel(arg1);
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
function getName(id, arg1, id) {
  if (null == id) {
    const intl = util.intl;
    let stringResult = intl.string(util.t.sKdZ6U);
  } else {
    stringResult = null;
    if (null != id) {
      if (null != id) {
        stringResult = GuildMemberStore.getNick(id, id.id);
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
function useName(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [GuildMemberStore, ChannelStore, RelationshipStore];
  return require("initialize").useStateFromStores(items, () => getName(closure_0, closure_1, closure_2));
}
const size = fn(2);
const result = size.fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName };
export { getNickname };
export { getName };
export { useName };