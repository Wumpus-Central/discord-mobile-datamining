// === Module 14395: ShareStore ===

// Module 14395 (ShareStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import NativeShareManagerModuleDefault from "NativeShareManagerModule" /* 8362 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
const AppStates = fn(1074).AppStates;
const Store = initializeDefault.Store;
class ShareStore extends Store {
}
ShareStore.prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, GuildStore, SelectedChannelStore, SelectedGuildStore, UserStore);
};
ShareStore.displayName = "ShareStore";
const shareStore = new ShareStore(DispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId: c3, channelId: c4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    NativeShareManagerModuleDefault.setSelectedChannel(null, null);
    const obj2 = NativeShareManagerModuleDefault;
    const result = obj2.setAuthenticationToken(null, AnalyticsUtilsDefault.getSuperPropertiesBase64());
    c5 = null;
    return false;
  },
  REGISTER_SUCCESS: handleTokenUpdated,
  LOGIN_SUCCESS: handleTokenUpdated,
  UPDATE_TOKEN: handleTokenUpdated,
  START_SESSION: function handleStartSession() {
    const token = AuthenticationStore.getToken();
    return false;
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    state = state.state;
    if (state === AppStates.INACTIVE) {
      if (null != c4) {
        const guild = GuildStore.getGuild(c3);
        let json = null;
        if (null != guild) {
          const _JSON = JSON;
          json = JSON.stringify(guild);
        }
        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
        let json1 = null;
        if (null != channel) {
          let obj = {};
          const merged = Object.assign(channel.toJS());
          let recipients = channel.recipients;
          if (recipients == null) {
            recipients = [];
          }
          const mapped = recipients.map(UserStore.getUser);
          obj.recipients = mapped.filter(GlobalUtils.isNotNullish);
          json1 = JSON.stringify(obj);
        }
        NativeShareManagerModuleDefault.setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
      }
    }
    if (null != c5) {
      obj = { client_app_state: state };
      const result = discord_common_AnalyticsUtils.extendSuperProperties(obj);
      const obj6 = NativeShareManagerModuleDefault;
      const result1 = obj6.setAuthenticationToken(c5, AnalyticsUtilsDefault.getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        c5 = null;
      }
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;