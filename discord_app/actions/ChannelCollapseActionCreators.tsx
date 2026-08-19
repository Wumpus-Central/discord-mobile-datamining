// === Module 10007: ? ===

// Module 10007
import dispatcherDefault from "dispatcher" /* 709 */;
import handleConnectionOpenDefault from "handleConnectionOpen" /* 6797 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;

let result = require("obj132").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    const obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    dispatcherDefault.dispatch(obj);
  }
};