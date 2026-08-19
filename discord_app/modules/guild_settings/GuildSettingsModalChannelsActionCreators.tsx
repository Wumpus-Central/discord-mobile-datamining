// === Module 15405: dispatcher ===

// Module 15405 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx");

export default {
  terminate() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE" });
  },
  startReordering() {
    const items = [...arguments];
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER", sortingType: items });
  },
  stopReordering() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER" });
  },
  localChannelUpdate(found) {
    const obj = { type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found };
    obj.dispatch(obj);
  }
};