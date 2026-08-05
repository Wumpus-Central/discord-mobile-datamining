// discord_app/actions/ChannelCollapseActionCreators.tsx
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

let result = require("handleConnectionOpen").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = require("../Dispatcher.tsx");
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = require("../modules/user_settings/UserGuildSettingsManager.tsx");
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    require("../Dispatcher.tsx").dispatch(obj);
  }
};