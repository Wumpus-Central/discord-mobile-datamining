// === Module 10918: ChannelCollapseActionCreators ===

// Module 10918 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7248 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6739 */;

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