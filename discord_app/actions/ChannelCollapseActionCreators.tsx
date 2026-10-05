// discord_app/actions/ChannelCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import UserGuildSettingsManagerDefault from "../modules/user_settings/UserGuildSettingsManager.tsx";
import UserGuildSettingsStore from "../stores/UserGuildSettingsStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let obj = {
  update(channelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj2);
  },
  toggleCollapseGuild(id) {
    const obj = UserGuildSettingsManagerDefault;
    const obj2 = { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    obj3.dispatch(obj4);
  },
};
let result = size.fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default obj;
