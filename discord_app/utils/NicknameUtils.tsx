// discord_app/utils/NicknameUtils.tsx
import getSystemLocale from "../intl/index.native.tsx";
import nameFromUserDefault from "UserUtils.tsx";
import closure_3 from "../stores/ChannelStore.tsx";
import closure_4 from "../stores/GuildMemberStore.tsx";
import closure_5 from "../stores/RelationshipStore.tsx";
import { initialize } from "../../discord_common/js/packages/flux/index.tsx";

require = arg1;
function getNickname(id, arg1, id) {
  if (null == id) {
    return null;
  } else if (null != id) {
    return store2.getNick(id, id.id);
  } else {
    if (null != arg1) {
      const channel = store.getChannel(arg1);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (isPrivateResult) {
        return store3.getNickname(id.id);
      }
    }
    return null;
  }
}
function getName(id, arg1, id) {
  if (null == id) {
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t.sKdZ6U);
  } else {
    stringResult = null;
    if (null != id) {
      if (null != id) {
        stringResult = store2.getNick(id, id.id);
      } else {
        stringResult = null;
        if (null != arg1) {
          const channel = store.getChannel(arg1);
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          stringResult = null;
          if (isPrivateResult) {
            stringResult = store3.getNickname(id.id);
          }
        }
      }
    }
    if (stringResult == null) {
      stringResult = nameFromUserDefault.getName(id);
      const obj2 = nameFromUserDefault;
    }
  }
  return stringResult;
}
function useName(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [closure_4, closure_3, closure_5];
  return _initialize.useStateFromStores(items, () => closure_1_6(closure_0, closure_1, closure_2));
}
const result = require("set").fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName };
export { getNickname };
export { getName };
export { useName };