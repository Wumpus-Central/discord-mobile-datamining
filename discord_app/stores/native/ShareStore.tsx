// discord_app/stores/native/ShareStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx";
import AuthenticationStore from "../AuthenticationStore.tsx";
import ChannelStore from "../ChannelStore.tsx";
import GuildStore from "../GuildStore.tsx";
import SelectedChannelStore from "../SelectedChannelStore.tsx";
import SelectedGuildStore from "../SelectedGuildStore.tsx";
import UserStore from "../UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3, c4, c5;

function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
const AppStates = Constants.AppStates;
const Store = get_initializedDefault.Store;
class ShareStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, GuildStore, SelectedChannelStore, SelectedGuildStore, UserStore);
  }
}
const prototype = ShareStore.prototype;
ShareStore.displayName = "ShareStore";
let obj = {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId: c3, channelId: c4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    const obj = react_nativeDefault;
    obj.setSelectedChannel(null, null);
    const setAuthenticationToken = react_nativeDefault.setAuthenticationToken;
    react_nativeDefault;
    const obj2 = AnalyticsUtilsDefault;
    const result = setAuthenticationToken(null, obj2.getSuperPropertiesBase64());
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
    let mapped;
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
          const _JSON2 = JSON;
          const obj = { recipients: mapped.filter(GlobalUtils.isNotNullish) };
          const merged = Object.assign(channel.toJS());
          let recipients = channel.recipients;
          if (recipients == null) {
            recipients = [];
          }
          mapped = recipients.map(UserStore.getUser);
          json1 = stringify(obj);
        }
        const obj3 = react_nativeDefault;
        obj3.setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
      }
    }
    if (null != c5) {
      const obj2 = { client_app_state: state };
      const obj4 = discord_common_AnalyticsUtils;
      const result = obj4.extendSuperProperties(obj2);
      const setAuthenticationToken = react_nativeDefault.setAuthenticationToken;
      react_nativeDefault;
      const obj6 = AnalyticsUtilsDefault;
      const result1 = setAuthenticationToken(c5, obj6.getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        c5 = null;
      }
    }
    return false;
  },
};
const shareStore = new ShareStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;
