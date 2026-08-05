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
    require("../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx").setSelectedChannel(null, null);
    const obj = require("../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");
    const obj2 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");
    const result = obj2.setAuthenticationToken(null, require("../../utils/AnalyticsUtils.tsx").getSuperPropertiesBase64());
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
          obj.recipients = mapped.filter(require("../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */.isNotNullish);
          json1 = JSON.stringify(obj);
        }
        require("../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx").setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
        const obj3 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");
      }
    }
    if (null != c5) {
      obj = { client_app_state: null };
      obj[0] = state;
      const result = require("../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.extendSuperProperties(obj);
      const obj4 = require("../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */;
      const obj6 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");
      const result1 = obj6.setAuthenticationToken(c5, require("../../utils/AnalyticsUtils.tsx").getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        c5 = null;
      }
      const obj7 = require("../../utils/AnalyticsUtils.tsx");
    }
    return false;
  }
});
let result = require("createGuildRecordFromRust").fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;