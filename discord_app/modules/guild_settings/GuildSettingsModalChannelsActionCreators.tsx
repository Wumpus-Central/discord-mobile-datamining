// discord_app/modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx");

export default {
  terminate() {
    require("../../Dispatcher.tsx").dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE" });
  },
  startReordering() {
    const items = [...arguments];
    require("../../Dispatcher.tsx").dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER", sortingType: items });
  },
  stopReordering() {
    require("../../Dispatcher.tsx").dispatch({ type: "GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER" });
  },
  localChannelUpdate(found) {
    let obj = require("../../Dispatcher.tsx");
    obj = { type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found };
    obj.dispatch(obj);
  }
};