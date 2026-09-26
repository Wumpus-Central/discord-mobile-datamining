// === Module 10427: ChannelCollapseActionCreators ===

// Module 10427 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 6537 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    DispatcherDefault.dispatch({ type: "CHANNEL_COLLAPSE", channelId });
  },
  toggleCollapseGuild(id) {
    const obj = UserGuildSettingsManagerDefault;
    const result = obj.saveUserGuildSettings(id, { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) });
    const obj2 = { hide_muted_channels: !UserGuildSettingsStore.isGuildCollapsed(id) };
    DispatcherDefault.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id });
  }
};