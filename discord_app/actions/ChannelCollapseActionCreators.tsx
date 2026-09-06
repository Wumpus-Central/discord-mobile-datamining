// === Module 10964: ? ===

// Module 10964
import dispatcherDefault from "dispatcher" /* 573 */;
import handleConnectionOpenDefault from "handleConnectionOpen" /* 7116 */;
import closure_2 from "updateUserGuildSettingsInternal" /* 4741 */;

let result = require("set").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = handleConnectionOpenDefault;
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    dispatcherDefault.dispatch(obj);
  }
};