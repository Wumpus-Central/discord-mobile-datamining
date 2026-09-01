// discord_app/actions/ChannelCollapseActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import handleConnectionOpenDefault from "../modules/user_settings/UserGuildSettingsManager.tsx";
import closure_2 from "../stores/UserGuildSettingsStore.tsx";

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
  },
};
