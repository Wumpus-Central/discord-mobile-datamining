import { dispatcher } from "../Dispatcher.tsx";
import { handleConnectionOpen } from "../modules/user_settings/UserGuildSettingsManager.tsx";
// discord_app/actions/ChannelCollapseActionCreators.tsx
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

let result = require("handleConnectionOpen").fileFinishedImporting("actions/ChannelCollapseActionCreators.tsx");

export default {
  update(channelId) {
    let obj = dispatcher;
    obj = { type: "CHANNEL_COLLAPSE", channelId };
    obj.dispatch(obj);
  },
  toggleCollapseGuild(id) {
    let obj = handleConnectionOpen;
    obj = { hide_muted_channels: !guildCollapsed.isGuildCollapsed(id) };
    const result = obj.saveUserGuildSettings(id, obj);
    obj = { type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: id };
    dispatcher.dispatch(obj);
  }
};