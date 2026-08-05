import { encodeProperties } from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { isDiscordFrontendDevelopment } from "../../utils/GlobalUtils.tsx";
// discord_app/stores/native/ShareStore.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import closure_10 from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AppStates } from "ME";
import { Store } from "initialize";

const require = arg1;
function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
class ShareStore extends Store {
}
ShareStore.prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, createGuildRecordFromRust, handleConnectionOpen, closure_10, mergeGuildAvatar);
};
ShareStore.displayName = "ShareStore";
const shareStore = new ShareStore(require("dispatcher"), {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let closure_3;
    let closure_4;
    ({ guildId: closure_3, channelId: closure_4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    enforcing.setSelectedChannel(null, null);
    const obj = enforcing;
    const obj2 = enforcing;
    const result = obj2.setAuthenticationToken(null, expandEventProperties.getSuperPropertiesBase64());
    let c5 = null;
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
          obj.recipients = mapped.filter(isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isNotNullish);
          json1 = JSON.stringify(obj);
        }
        enforcing.setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
        const obj3 = enforcing;
      }
    }
    if (null != c5) {
      obj = { client_app_state: null };
      obj[0] = state;
      const result = encodeProperties /* encodeProperties */.extendSuperProperties(obj);
      const obj4 = encodeProperties /* encodeProperties */;
      const obj6 = enforcing;
      const result1 = obj6.setAuthenticationToken(c5, expandEventProperties.getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        c5 = null;
      }
      const obj7 = expandEventProperties;
    }
    return false;
  }
});
let result = require("createGuildRecordFromRust").fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;