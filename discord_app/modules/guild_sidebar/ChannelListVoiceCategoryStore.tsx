// === Module 7533: handleChange ===

// Module 7533 (handleChange)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;

function handleChange(expand) {
  if (expand.expand) {
    tmp4[tmp3] = true;
  } else {
    delete tmp[tmp2];
  }
}
let closure_0 = {};
const PersistedStore = initializeDefault.PersistedStore;
class ChannelListVoiceCategoryStore extends PersistedStore {
}
const prototype = ChannelListVoiceCategoryStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
};
prototype["isVoiceCategoryExpanded"] = function isVoiceCategoryExpanded(id) {
  let flag = null != id;
  if (flag) {
    flag = table[id];
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
  return closure_0;
};
ChannelListVoiceCategoryStore.displayName = "ChannelListVoiceCategoryStore";
ChannelListVoiceCategoryStore.persistKey = "ChannelListVoiceCategoryStore";
const channelListVoiceCategoryStore = new ChannelListVoiceCategoryStore(dispatcherDefault, { VOICE_CATEGORY_COLLAPSE: handleChange, VOICE_CATEGORY_EXPAND: handleChange });
const result = require("set").fileFinishedImporting("modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx");

export default channelListVoiceCategoryStore;