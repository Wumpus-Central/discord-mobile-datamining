// === Module 11057: ChannelCollapseActionCreators ===

// Module 11057 (ChannelCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 7189 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4787 */;

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
  }
};