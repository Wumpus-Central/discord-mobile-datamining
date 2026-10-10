// === Module 10649: FirstPartyRichPresenceStore ===

// Module 10649 (FirstPartyRichPresenceStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1355 from "module_1355" /* 1355 */;
import StageChannelSelfRichPresenceStoreDefault from "StageChannelSelfRichPresenceStore" /* 10653 */;
import ConjureRichPresenceStore from "ConjureRichPresenceStore" /* 10650 */;

function updateActivities() {
  items = [];
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let activity = nextResult.getActivity();
    if (null != activity) {
      let arr = items.push(tmp3);
    }
    continue;
  }
  const tmp6 = _modDef1355(items, items);
  let flag = !tmp6;
  if (!tmp6) {
    flag = true;
  }
  return flag;
}
let items = [StageChannelSelfRichPresenceStoreDefault, ConjureRichPresenceStore];
items = [];
const Store = initializeDefault.Store;
class FirstPartyRichPresenceStore extends Store {
}
const prototype = FirstPartyRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.syncWith(items, updateActivities);
};
prototype["getActivities"] = function getActivities() {
  return items;
};
FirstPartyRichPresenceStore.displayName = "FirstPartyRichPresenceStore";
const firstPartyRichPresenceStore = new FirstPartyRichPresenceStore(DispatcherDefault);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rich_presence/FirstPartyRichPresenceStore.tsx");

export default firstPartyRichPresenceStore;