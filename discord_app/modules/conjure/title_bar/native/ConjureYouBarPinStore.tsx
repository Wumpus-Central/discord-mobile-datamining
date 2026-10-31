// === Module 9675: ConjureYouBarPinStore ===

// Module 9675 (ConjureYouBarPinStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

let obj = { pinnedUserIds: [] };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ConjureYouBarPinStore extends DeviceSettingsStore {
}
const prototype = ConjureYouBarPinStore.prototype;
prototype["initialize"] = function initialize(pinnedUserIds) {
  this.waitFor(AuthenticationStore);
  pinnedUserIds = undefined;
  if (pinnedUserIds != null) {
    pinnedUserIds = pinnedUserIds.pinnedUserIds;
  }
  if (pinnedUserIds == null) {
    pinnedUserIds = [];
  }
};
prototype["isPinned"] = function isPinned() {
  const id = AuthenticationStore.getId();
  let hasItem = null != id;
  if (hasItem) {
    const pinnedUserIds = obj.pinnedUserIds;
    hasItem = pinnedUserIds.includes(id);
  }
  return hasItem;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
ConjureYouBarPinStore.displayName = "ConjureYouBarPinStore";
ConjureYouBarPinStore.persistKey = "ConjureYouBarPinStore";
obj = {
  CONJURE_YOU_BAR_PIN_SET: function handleSet(pinned) {
    pinned = pinned.pinned;
    const id = AuthenticationStore.getId();
    if (null != id) {
      const pinnedUserIds = obj.pinnedUserIds;
      if (pinnedUserIds.includes(id) !== pinned) {
        const pinnedUserIds1 = obj.pinnedUserIds;
        if (pinned) {
          const items = [];
          items[HermesBuiltin.arraySpread(pinnedUserIds1, 0)] = id;
          let found = items;
        } else {
          found = pinnedUserIds1.filter((item) => item !== id);
        }
        obj = { pinnedUserIds: found };
      }
    }
    return false;
  }
};
const conjureYouBarPinStore = new ConjureYouBarPinStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarPinStore.tsx");

export default conjureYouBarPinStore;