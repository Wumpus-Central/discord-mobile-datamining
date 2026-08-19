// === Module 13771: handleTokenUpdated ===

// Module 13771 (handleTokenUpdated)
import encodeProperties from "encodeProperties" /* 503 */;
import initializeDefault from "initialize" /* 589 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import enforcingDefault from "enforcing" /* 9068 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { AppStates } from "ME" /* 676 */;

require = fn;
function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
const Store = initializeDefault.Store;
class ShareStore extends Store {
}
ShareStore.prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_7, closure_8, closure_9, closure_10, closure_11);
};
ShareStore.displayName = "ShareStore";
const shareStore = new ShareStore(dispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId: closure_3, channelId: closure_4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    enforcingDefault.setSelectedChannel(null, null);
    const obj2 = enforcingDefault;
    const result = obj2.setAuthenticationToken(null, expandEventPropertiesDefault.getSuperPropertiesBase64());
    c5 = null;
    return false;
  },
  REGISTER_SUCCESS: handleTokenUpdated,
  LOGIN_SUCCESS: handleTokenUpdated,
  UPDATE_TOKEN: handleTokenUpdated,
  START_SESSION: function handleStartSession() {
    const token2 = token.getToken();
    return false;
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    state = state.state;
    if (state === AppStates.INACTIVE) {
      if (null != c4) {
        guild = guild.getGuild(c3);
        let json = null;
        if (null != guild) {
          const _JSON = JSON;
          json = JSON.stringify(guild);
        }
        channel = channel.getChannel(channelId.getChannelId());
        let json1 = null;
        if (null != channel) {
          let obj = {};
          const merged = Object.assign(channel.toJS());
          let recipients = channel.recipients;
          if (recipients == null) {
            recipients = [];
          }
          const mapped = recipients.map(getUser.getUser);
          obj.recipients = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
          json1 = JSON.stringify(obj);
        }
        enforcingDefault.setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
      }
    }
    if (null != c5) {
      obj = { client_app_state: null };
      obj[0] = state;
      const result = encodeProperties.extendSuperProperties(obj);
      const obj6 = enforcingDefault;
      const result1 = obj6.setAuthenticationToken(c5, expandEventPropertiesDefault.getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        c5 = null;
      }
    }
    return false;
  }
});
let result = require("obj132").fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;