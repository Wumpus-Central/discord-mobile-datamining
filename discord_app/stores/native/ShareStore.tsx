// discord_app/stores/native/ShareStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import NativeShareManagerModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx";
import AuthenticationStore from "../AuthenticationStore.tsx";
import ChannelStore from "../ChannelStore.tsx";
import GuildStore from "../GuildStore.tsx";
import SelectedChannelStore from "../SelectedChannelStore.tsx";
import SelectedGuildStore from "../SelectedGuildStore.tsx";
import UserStore from "../UserStore.tsx";

require = fn;
function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
const AppStates = fn(1074).AppStates;
const Store = initializeDefault.Store;
class ShareStore extends Store {}
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;
