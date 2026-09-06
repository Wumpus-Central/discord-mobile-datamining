// discord_app/actions/ChannelCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import UserGuildSettingsManagerDefault from "../modules/user_settings/UserGuildSettingsManager.tsx";
import UserGuildSettingsStore from "../stores/UserGuildSettingsStore.tsx";

const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    const obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    DispatcherDefault.dispatch(obj);
  },
};
