// === Module 13877: _initialize ===

// Module 13877 (_initialize)
import set2 from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef1208 from "module_1208" /* 1208 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2630 */;
import initializeDefault from "initialize" /* 4726 */;
import NativeModulesDefault from "NativeModules" /* 11628 */;
import items2 from "items2" /* 13878 */;
import apexExperiment from "apexExperiment" /* 13881 */;
import inferImportanceFromBehaviorDefault from "inferImportanceFromBehavior" /* 13882 */;
import NativeNotifSettingsModuleDefault from "NativeNotifSettingsModule" /* 13883 */;
import closure_4 from "initialize" /* 1212 */;
import closure_5 from "initialize" /* 11634 */;
import closure_6 from "initialize" /* 13326 */;
import closure_7 from "fetchFingerprint" /* 1218 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const NOTIF_SETTINGS = items2.NOTIF_SETTINGS;
const AnalyticEvents = ME.AnalyticEvents;
initializeDefault;
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
        const DCDNotificationCategoryUtils = closure_1_3.DCDNotificationCategoryUtils;
        const intl = applyArgumentsResult(closure_1_2[13]).intl;
        const stringResult = intl.string(applyArgumentsResult(closure_1_2[13]).t.TBA5Xg);
        const intl2 = applyArgumentsResult(closure_1_2[13]).intl;
        const intl3 = applyArgumentsResult(closure_1_2[13]).intl;
        const result = DCDNotificationCategoryUtils.registerNotificationReplyCategories(stringResult, intl2.string(applyArgumentsResult(closure_1_2[13]).t.TXNS7S), intl3.string(applyArgumentsResult(closure_1_2[13]).t.TBA5Xg), () => {

        });
        if (closure_1_3.PushNotificationAndroid) {
          const PushNotificationAndroid = tmp5.PushNotificationAndroid;
          const result1 = PushNotificationAndroid.onRegisterNotificationToken();
        }
        const stringResult1 = intl2.string(applyArgumentsResult(closure_1_2[13]).t.TXNS7S);
        tmp5 = closure_1_3;
        const tmp7 = closure_1_2;
        closure_1_1(closure_1_2[18]).registerDevice(tmp.token);
        const obj = closure_1_1(closure_1_2[18]);
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
        canSync = !closure_1_5.canUseMultiAccountNotifications;
      }
      if (canSync) {
        applyArgumentsResult.registerToken();
      }
    };
    applyArgumentsResult.handleSyncWithMultiAccount = function handleSyncWithMultiAccount() {
      let canUseMultiAccountNotifications = applyArgumentsResult.canSync;
      if (canUseMultiAccountNotifications) {
        canUseMultiAccountNotifications = closure_1_5.canUseMultiAccountNotifications;
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
  closure_4.addChangeListener(self._handleExperimentsUpdated);
  self._experimentUnsubscribe = () => {
    closure_1_4.removeChangeListener(self._handleExperimentsUpdated);
  };
  const subscription = dispatcherDefault.subscribe("LOGIN_SUCCESS", self.handleSyncNoMultiAccountOnLoginSuccess);
  const obj = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("REGISTER_SUCCESS", self.handleSyncNoMultiAccountOnRegisterSuccess);
  const obj2 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", self.handleSyncNoMultiAccountOnPostConnectionOpen);
  const obj3 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", self.handleSyncWithMultiAccount);
  const obj4 = dispatcherDefault;
  const subscription4 = dispatcherDefault.subscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", self.handleSyncWithMultiAccount);
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  dispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleSyncNoMultiAccountOnLoginSuccess);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("REGISTER_SUCCESS", this.handleSyncNoMultiAccountOnRegisterSuccess);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handleSyncNoMultiAccountOnPostConnectionOpen);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handleSyncWithMultiAccount);
  const obj4 = dispatcherDefault;
  dispatcherDefault.unsubscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", this.handleSyncWithMultiAccount);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
};
prototype["registerListener"] = function registerListener() {
  const self = this;
  if (this.hasRegisterEventListener) {
    const _Error = Error;
    error = new Error("Device token listener already registered.");
    throw error;
  } else {
    self.hasRegisterEventListener = true;
    const result = NativeModulesDefault.addRegisterEventListener(self.handleToken);
  }
};
prototype["registerNotificationCategories"] = function registerNotificationCategories(arg0) {
  const declarativeNotifSettingsExperiment = apexExperiment.declarativeNotifSettingsExperiment;
  const config = declarativeNotifSettingsExperiment.getConfig({ location: "registerNotificationCategories" });
  let flag = false;
  try {
    if (config.enabled) {
      flag = inferImportanceFromBehaviorDefault.registerDeclarativeNotificationCategories();
      const obj = inferImportanceFromBehaviorDefault;
    }
    const self = this;
    if (flag) {
      const result = self.trackDisabledAndroidNotifChannels();
    } else {
      try {
        if (config.clearDeclarative) {
          _modDef1208.addBreadcrumb({ message: "Clearing declarative notification categories" });
          const obj3 = _modDef1208;
          inferImportanceFromBehaviorDefault.clear();
          const obj4 = inferImportanceFromBehaviorDefault;
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
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(messagesProxyDefault["IUH/Oe"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(messagesProxyDefault.VeBD1N);
    const intl3 = getSystemLocale.intl;
    obj[2] = intl3.string(messagesProxyDefault["4qWUAO"]);
    const intl4 = getSystemLocale.intl;
    obj[3] = intl4.string(messagesProxyDefault.NGdNZb);
    const intl5 = getSystemLocale.intl;
    obj[4] = intl5.string(messagesProxyDefault.NxgGZA);
    const intl6 = getSystemLocale.intl;
    obj[5] = intl6.string(messagesProxyDefault.MOjygY);
    const intl7 = getSystemLocale.intl;
    obj[6] = intl7.string(messagesProxyDefault["UzRF+8"]);
    const intl8 = getSystemLocale.intl;
    obj[7] = intl8.string(messagesProxyDefault["4n388K"]);
    const intl9 = getSystemLocale.intl;
    obj[8] = intl9.string(messagesProxyDefault["40TIqW"]);
    const intl10 = getSystemLocale.intl;
    obj[9] = intl10.string(getSystemLocale.t.p5jg9S);
    const intl11 = getSystemLocale.intl;
    obj[10] = intl11.string(messagesProxyDefault.HibKoy);
    const intl12 = getSystemLocale.intl;
    obj[11] = intl12.string(messagesProxyDefault.zJlwvV);
    const intl13 = getSystemLocale.intl;
    obj[12] = intl13.string(messagesProxyDefault.kIrLfg);
    const intl14 = getSystemLocale.intl;
    obj[13] = intl14.string(messagesProxyDefault["T+79Eo"]);
    const intl15 = getSystemLocale.intl;
    obj[14] = intl15.string(getSystemLocale.t.gHp0C4);
    obj = { realtime: null, social: null, server: null, other: null };
    const intl16 = getSystemLocale.intl;
    obj[0] = intl16.string(messagesProxyDefault.S5cB9e);
    const intl17 = getSystemLocale.intl;
    obj[1] = intl17.string(messagesProxyDefault["UzRF+8"]);
    const intl18 = getSystemLocale.intl;
    obj[2] = intl18.string(messagesProxyDefault.zRKbpz);
    const intl19 = getSystemLocale.intl;
    obj[3] = intl19.string(messagesProxyDefault.q5M7HV);
    const result = registerNotificationCategoriesAndGroups(obj, obj);
  } else if (null != registerNotificationCategories) {
    obj = { calls: null, mediaConnections: null, messages: null, directMessages: null, social: null, gameDetection: null, stageLive: null, guildEventLive: null, guildHighlights: null, forumThreadCreated: null, other: null, otherHighPriority: null };
    const intl20 = getSystemLocale.intl;
    obj[0] = intl20.string(getSystemLocale.t.JJogjm);
    const intl21 = getSystemLocale.intl;
    obj[1] = intl21.string(getSystemLocale.t.K3lovD);
    const intl22 = getSystemLocale.intl;
    obj[2] = intl22.string(getSystemLocale.t.OIgYlQ);
    const intl23 = getSystemLocale.intl;
    obj[3] = intl23.string(getSystemLocale.t.YUU0RF);
    const intl24 = getSystemLocale.intl;
    obj[4] = intl24.string(getSystemLocale.t.TdEu5X);
    const intl25 = getSystemLocale.intl;
    obj[5] = intl25.string(getSystemLocale.t["A/4saf"]);
    const intl26 = getSystemLocale.intl;
    obj[6] = intl26.string(getSystemLocale.t.qGRagm);
    const intl27 = getSystemLocale.intl;
    obj[7] = intl27.string(getSystemLocale.t.MfGr0a);
    const intl28 = getSystemLocale.intl;
    obj[8] = intl28.string(getSystemLocale.t.p5jg9S);
    const intl29 = getSystemLocale.intl;
    obj[9] = intl29.string(getSystemLocale.t.dl57ho);
    const intl30 = getSystemLocale.intl;
    obj[10] = intl30.string(getSystemLocale.t.BcZTKu);
    const intl31 = getSystemLocale.intl;
    obj[11] = intl31.string(getSystemLocale.t.bcv3rp);
    const result1 = registerNotificationCategories(obj);
  }
};
prototype["trackDisabledAndroidNotifChannels"] = function trackDisabledAndroidNotifChannels() {
  if (!this.hasTrackedDisabledAndroidNotifChannels) {
    tmp.hasTrackedDisabledAndroidNotifChannels = true;
    let obj = set(500);
    if (obj.isAndroid()) {
      const tmp5 = NativeNotifSettingsModuleDefault;
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
let result = set2.fileFinishedImporting("modules/notifications/native/NotificationTokenManager.tsx");

export default notificationTokenManager;