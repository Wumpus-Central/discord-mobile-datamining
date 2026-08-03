// === Module 4445: getNickname ===

// Module 4445 (getNickname)
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import upsertRelationship from "upsertRelationship";

const require = arg1;
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
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.sKdZ6U);
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
      stringResult = importDefault(4094).getName(id);
      const obj2 = importDefault(4094);
    }
  }
  return stringResult;
}
function useName(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [trackCommunicationDisabled, ensureGuildLoaded, upsertRelationship];
  return _require(589).useStateFromStores(items, () => outer1_6(closure_0, closure_1, closure_2));
}
const result = require("upsertRelationship").fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName };
export { getNickname };
export { getName };
export { useName };