// discord_app/modules/guild_settings/GuildSettingsModalChannelsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const obj = { type: "GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE", updates: found };
    obj.dispatch(obj);
  },
};
