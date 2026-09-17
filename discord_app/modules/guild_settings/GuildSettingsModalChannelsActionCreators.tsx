// === Module 16304: GuildSettingsModalChannelsActionCreators ===

// Module 16304 (GuildSettingsModalChannelsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx");

export default {
  terminate() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE" });
  },
  startReordering() {
    const items = [...arguments];
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER", sortingType: items });
  },
  stopReordering() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER" });
  },
  localChannelUpdate(found) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found });
  }
};