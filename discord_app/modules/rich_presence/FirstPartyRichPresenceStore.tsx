// discord_app/modules/rich_presence/FirstPartyRichPresenceStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _modDef1332 from "../../../_runtime/metro/01332__.js";
import StageChannelSelfRichPresenceStoreDefault from "../stage_channels/StageChannelSelfRichPresenceStore.tsx";

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
  const tmp6 = _modDef1332(items, items);
  let flag = !tmp6;
  if (!tmp6) {
    flag = true;
  }
  return flag;
}
let items = [StageChannelSelfRichPresenceStoreDefault];
items = [];
const Store = initializeDefault.Store;
class FirstPartyRichPresenceStore extends Store {}
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
