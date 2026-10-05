// === Module 7044: ChannelListVoiceCategoryStore ===

// Module 7044 (ChannelListVoiceCategoryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleChange(guildId) {
  guildId = guildId.guildId;
  if (guildId.expand) {
    obj[guildId] = true;
  } else {
    delete obj[guildId];
  }
}
let obj = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelListVoiceCategoryStore extends PersistedStore {
  initialize(arg0) {
    if (arg0 == null) {
      obj = {};
    }
  }
  isVoiceCategoryExpanded(id) {
    let flag = null != id && obj[id];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isVoiceCategoryCollapsed(id) {
    return !this.isVoiceCategoryExpanded(id);
  }
  getState() {
    return obj;
  }
}
const prototype = ChannelListVoiceCategoryStore.prototype;
ChannelListVoiceCategoryStore.displayName = "ChannelListVoiceCategoryStore";
ChannelListVoiceCategoryStore.persistKey = "ChannelListVoiceCategoryStore";
obj = { VOICE_CATEGORY_COLLAPSE: handleChange, VOICE_CATEGORY_EXPAND: handleChange };
const channelListVoiceCategoryStore = new ChannelListVoiceCategoryStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx");

export default channelListVoiceCategoryStore;