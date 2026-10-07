// discord_app/modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function handleChange(expand) {
  if (expand.expand) {
    tmp4[tmp3] = true;
  } else {
    delete tmp[tmp2];
  }
}
let obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class ChannelListVoiceCategoryStore extends PersistedStore {}
const prototype = ChannelListVoiceCategoryStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (arg0 == null) {
    obj = {};
  }
};
prototype["isVoiceCategoryExpanded"] = function isVoiceCategoryExpanded(id) {
  let flag = null != id;
  if (flag) {
    flag = obj[id];
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isVoiceCategoryCollapsed"] = function isVoiceCategoryCollapsed(id) {
  return !this.isVoiceCategoryExpanded(id);
};
prototype["getState"] = function getState() {
  return obj;
};
ChannelListVoiceCategoryStore.displayName = "ChannelListVoiceCategoryStore";
ChannelListVoiceCategoryStore.persistKey = "ChannelListVoiceCategoryStore";
obj = { VOICE_CATEGORY_COLLAPSE: handleChange, VOICE_CATEGORY_EXPAND: handleChange };
const channelListVoiceCategoryStore = new ChannelListVoiceCategoryStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx");

export default channelListVoiceCategoryStore;
