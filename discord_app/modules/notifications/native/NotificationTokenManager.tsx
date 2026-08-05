// discord_app/modules/notifications/native/NotificationTokenManager.tsx
import { NativeModules } from "expandEventProperties";
import initialize from "initialize";
import closure_5 from "initialize";
import closure_6 from "initialize";
import fetchFingerprint from "fetchFingerprint";
import { NOTIF_SETTINGS } from "items2";
import { AnalyticEvents } from "ME";
import "initialize";

class NotificationTokenManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._experimentUnsubscribe = null;
    applyArgumentsResult.token = null;
    applyArgumentsResult.hasRegisterEventListener = false;
    applyArgumentsResult.hasTrackedDisabledAndroidNotifChannels = false;
    applyArgumentsResult.postConnectionOpenTimeoutID = null;
    applyArgumentsResult._handleExperimentsUpdated = function _handleExperimentsUpdated() {
      return applyArgumentsResult.registerNotificationCategories();
    };
    applyArgumentsResult.handleToken = function handleToken(token) {
      applyArgumentsResult.token = token;
      if (applyArgumentsResult.canSync) {
        applyArgumentsResult.registerToken();
      }
    };
    applyArgumentsResult.registerToken = function registerToken() {
      if (null != applyArgumentsResult.token) {
        const DCDNotificationCategoryUtils = outer1_3.DCDNotificationCategoryUtils;
        const intl = applyArgumentsResult(outer1_2[13]).intl;
        const stringResult = intl.string(applyArgumentsResult(outer1_2[13]).t.TBA5Xg);
        const intl2 = applyArgumentsResult(outer1_2[13]).intl;
        const intl3 = applyArgumentsResult(outer1_2[13]).intl;
        const result = DCDNotificationCategoryUtils.registerNotificationReplyCategories(stringResult, intl2.string(applyArgumentsResult(outer1_2[13]).t.TXNS7S), intl3.string(applyArgumentsResult(outer1_2[13]).t.TBA5Xg), () => {

        });
        if (outer1_3.PushNotificationAndroid) {
          const PushNotificationAndroid = tmp5.PushNotificationAndroid;
          const result1 = PushNotificationAndroid.onRegisterNotificationToken();
        }
        const stringResult1 = intl2.string(applyArgumentsResult(outer1_2[13]).t.TXNS7S);
        tmp5 = outer1_3;
        const tmp7 = outer1_2;
        outer1_1(outer1_2[18]).registerDevice(tmp.token);
        const obj = outer1_1(outer1_2[18]);
      }
    };
    applyArgumentsResult.handleSyncNoMultiAccountOnLoginSuccess = function handleSyncNoMultiAccountOnLoginSuccess() {
      const result = applyArgumentsResult.handleSyncNoMultiAccount();
    };
    applyArgumentsResult.handleSyncNoMultiAccountOnRegisterSuccess = function handleSyncNoMultiAccountOnRegisterSuccess() {
      applyArgumentsResult.postConnectionOpenTimeoutID = setTimeout(applyArgumentsResult.handleSyncNoMultiAccountOnPostConnectionOpen, 5000);
    };
    applyArgumentsResult.handleSyncNoMultiAccountOnPostConnectionOpen = function handleSyncNoMultiAccountOnPostConnectionOpen() {
      if (null != applyArgumentsResult.postConnectionOpenTimeoutID) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.postConnectionOpenTimeoutID);
        obj.postConnectionOpenTimeoutID = null;
        const result = obj.handleSyncNoMultiAccount();
      }
    };
    applyArgumentsResult.handleSyncNoMultiAccount = function handleSyncNoMultiAccount() {
      let canSync = applyArgumentsResult.canSync;
      if (canSync) {
        canSync = !outer1_5.canUseMultiAccountNotifications;
      }
      if (canSync) {
        applyArgumentsResult.registerToken();
      }
    };
    applyArgumentsResult.handleSyncWithMultiAccount = function handleSyncWithMultiAccount() {
      let canUseMultiAccountNotifications = applyArgumentsResult.canSync;
      if (canUseMultiAccountNotifications) {
        canUseMultiAccountNotifications = outer1_5.canUseMultiAccountNotifications;
      }
      if (canUseMultiAccountNotifications) {
        applyArgumentsResult.registerToken();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = NotificationTokenManager.prototype;
prototype["_initialize"] = function _initialize() {
  let self = this;
  self = this;
  if (null != this.token) {
    self.handleToken(self.token);
  }
  initialize.addChangeListener(self._handleExperimentsUpdated);
  self._experimentUnsubscribe = () => {
    outer1_4.removeChangeListener(self._handleExperimentsUpdated);
  };
  const subscription = require("../../../Dispatcher.tsx").subscribe("LOGIN_SUCCESS", self.handleSyncNoMultiAccountOnLoginSuccess);
  const obj = require("../../../Dispatcher.tsx");
  const subscription1 = require("../../../Dispatcher.tsx").subscribe("REGISTER_SUCCESS", self.handleSyncNoMultiAccountOnRegisterSuccess);
  const obj2 = require("../../../Dispatcher.tsx");
  const subscription2 = require("../../../Dispatcher.tsx").subscribe("POST_CONNECTION_OPEN", self.handleSyncNoMultiAccountOnPostConnectionOpen);
  const obj3 = require("../../../Dispatcher.tsx");
  const subscription3 = require("../../../Dispatcher.tsx").subscribe("POST_CONNECTION_OPEN", self.handleSyncWithMultiAccount);
  const obj4 = require("../../../Dispatcher.tsx");
  const subscription4 = require("../../../Dispatcher.tsx").subscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", self.handleSyncWithMultiAccount);
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  require("../../../Dispatcher.tsx").unsubscribe("LOGIN_SUCCESS", this.handleSyncNoMultiAccountOnLoginSuccess);
  const obj = require("../../../Dispatcher.tsx");
  require("../../../Dispatcher.tsx").unsubscribe("REGISTER_SUCCESS", this.handleSyncNoMultiAccountOnRegisterSuccess);
  const obj2 = require("../../../Dispatcher.tsx");
  require("../../../Dispatcher.tsx").unsubscribe("POST_CONNECTION_OPEN", this.handleSyncNoMultiAccountOnPostConnectionOpen);
  const obj3 = require("../../../Dispatcher.tsx");
  require("../../../Dispatcher.tsx").unsubscribe("POST_CONNECTION_OPEN", this.handleSyncWithMultiAccount);
  const obj4 = require("../../../Dispatcher.tsx");
  require("../../../Dispatcher.tsx").unsubscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", this.handleSyncWithMultiAccount);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
};
prototype["registerListener"] = function registerListener() {
  const self = this;
  if (this.hasRegisterEventListener) {
    const _Error = Error;
    const error = new Error("Device token listener already registered.");
    throw error;
  } else {
    self.hasRegisterEventListener = true;
    const result = require("../../../lib/pushnotification/PushNotification.tsx").addRegisterEventListener(self.handleToken);
  }
};
prototype["registerNotificationCategories"] = function registerNotificationCategories(arg0) {
  const declarativeNotifSettingsExperiment = require("NotifSettingsExperiments.tsx") /* apexExperiment */.declarativeNotifSettingsExperiment;
  const config = declarativeNotifSettingsExperiment.getConfig({ location: "registerNotificationCategories" });
  let flag = false;
  try {
    if (config.enabled) {
      flag = require("NotifSettingsUtils.android.tsx").registerDeclarativeNotificationCategories();
      const obj = require("NotifSettingsUtils.android.tsx");
    }
    const self = this;
    if (flag) {
      const result = self.trackDisabledAndroidNotifChannels();
    } else {
      try {
        if (config.clearDeclarative) {
          require("../../../utils/SentryUtils.native.tsx").addBreadcrumb({ message: "Clearing declarative notification categories" });
          const obj3 = require("../../../utils/SentryUtils.native.tsx");
          require("NotifSettingsUtils.android.tsx").clear();
          const obj4 = require("NotifSettingsUtils.android.tsx");
        }
        const result1 = self.registerLegacyNotificationCategories();
      } catch (tmp12) {
        importDefault(result1[12]).captureException(tmp12);
        const obj5 = importDefault(result1[12]);
      }
    }
  } catch (tmp6) {
    importDefault(tmp2[12]).captureException(tmp6);
    const obj2 = importDefault(tmp2[12]);
  }
};
prototype["registerLegacyNotificationCategories"] = function registerLegacyNotificationCategories() {
  const registerNotificationCategories = NativeModules.DCDNotificationCategoryUtils.registerNotificationCategories;
  const registerNotificationCategoriesAndGroups = NativeModules.DCDNotificationCategoryUtils.registerNotificationCategoriesAndGroups;
  if (null != registerNotificationCategoriesAndGroups) {
    let obj = { calls: null, mediaConnections: null, messages: null, directMessages: null, friendRequests: null, polls: null, social: null, stageLive: null, guildEventLive: null, guildHighlights: null, forumThreadCreated: null, systemMessages: null, other: null, default: null, reactions: null };
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../NotificationSettings.messages.js")["IUH/Oe"]);
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../NotificationSettings.messages.js").VeBD1N);
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl3.string(require("../NotificationSettings.messages.js")["4qWUAO"]);
    const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[3] = intl4.string(require("../NotificationSettings.messages.js").NGdNZb);
    const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[4] = intl5.string(require("../NotificationSettings.messages.js").NxgGZA);
    const intl6 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[5] = intl6.string(require("../NotificationSettings.messages.js").MOjygY);
    const intl7 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[6] = intl7.string(require("../NotificationSettings.messages.js")["UzRF+8"]);
    const intl8 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[7] = intl8.string(require("../NotificationSettings.messages.js")["4n388K"]);
    const intl9 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[8] = intl9.string(require("../NotificationSettings.messages.js")["40TIqW"]);
    const intl10 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[9] = intl10.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.p5jg9S);
    const intl11 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[10] = intl11.string(require("../NotificationSettings.messages.js").HibKoy);
    const intl12 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[11] = intl12.string(require("../NotificationSettings.messages.js").zJlwvV);
    const intl13 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[12] = intl13.string(require("../NotificationSettings.messages.js").kIrLfg);
    const intl14 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[13] = intl14.string(require("../NotificationSettings.messages.js")["T+79Eo"]);
    const intl15 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[14] = intl15.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.gHp0C4);
    obj = { realtime: null, social: null, server: null, other: null };
    const intl16 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl16.string(require("../NotificationSettings.messages.js").S5cB9e);
    const intl17 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl17.string(require("../NotificationSettings.messages.js")["UzRF+8"]);
    const intl18 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl18.string(require("../NotificationSettings.messages.js").zRKbpz);
    const intl19 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[3] = intl19.string(require("../NotificationSettings.messages.js").q5M7HV);
    const result = registerNotificationCategoriesAndGroups(obj, obj);
  } else if (null != registerNotificationCategories) {
    obj = { calls: null, mediaConnections: null, messages: null, directMessages: null, social: null, gameDetection: null, stageLive: null, guildEventLive: null, guildHighlights: null, forumThreadCreated: null, other: null, otherHighPriority: null };
    const intl20 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl20.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.JJogjm);
    const intl21 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl21.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.K3lovD);
    const intl22 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl22.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.OIgYlQ);
    const intl23 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[3] = intl23.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.YUU0RF);
    const intl24 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[4] = intl24.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.TdEu5X);
    const intl25 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[5] = intl25.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["A/4saf"]);
    const intl26 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[6] = intl26.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.qGRagm);
    const intl27 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[7] = intl27.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.MfGr0a);
    const intl28 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[8] = intl28.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.p5jg9S);
    const intl29 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[9] = intl29.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.dl57ho);
    const intl30 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[10] = intl30.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.BcZTKu);
    const intl31 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[11] = intl31.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.bcv3rp);
    const result1 = registerNotificationCategories(obj);
  }
};
prototype["trackDisabledAndroidNotifChannels"] = function trackDisabledAndroidNotifChannels() {
  if (!this.hasTrackedDisabledAndroidNotifChannels) {
    tmp.hasTrackedDisabledAndroidNotifChannels = true;
    let obj = set(500);
    if (obj.isAndroid()) {
      const tmp5 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeNotifSettingsModule.tsx");
      let prop;
      if (tmp5 != null) {
        prop = tmp5.getAndroidNotifChannelStates;
      }
      if (null != prop) {
        const _Set = Set;
        set = new Set(NOTIF_SETTINGS.map((string_id) => string_id.string_id));
        const found = prop().filter((importance) => {
          let hasItem = 0 === importance.importance;
          if (hasItem) {
            hasItem = set.has(importance.channelId);
          }
          return hasItem;
        });
        const propResult = prop();
        obj = { disabled_channels: null };
        obj[0] = found.map((channelId) => channelId.channelId);
        tmp4(698).track(AnalyticEvents.ANDROID_NOTIFICATION_CHANNELS_SYNCED, obj);
        const tmp4Result = tmp4(698);
      }
      tmp4 = importDefault;
    }
  }
};
prototype["getToken"] = function getToken() {
  return this.token;
};
Object.defineProperty(prototype, "canSync", {
  get: function canSync() {
    let isInitialized = this.isInitialized;
    if (isInitialized) {
      isInitialized = authenticated.isAuthenticated();
    }
    if (isInitialized) {
      isInitialized = !isSwitchingAccount.getIsSwitchingAccount();
    }
    return isInitialized;
  },
  set: undefined
});
const notificationTokenManager = new NotificationTokenManager();
let result = require("initialize").fileFinishedImporting("modules/notifications/native/NotificationTokenManager.tsx");

export default notificationTokenManager;