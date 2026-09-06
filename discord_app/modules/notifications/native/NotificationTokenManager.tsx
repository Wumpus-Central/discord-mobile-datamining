// === Module 14443: NotificationTokenManager ===

// Module 14443 (NotificationTokenManager)
import _mod17 from "module_17" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import _modDef2722 from "module_2722" /* 2722 */;
import PushNotificationDefault from "PushNotification" /* 9687 */;
import PushNotificationActionCreatorsDefault from "PushNotificationActionCreators" /* 12412 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 14444 */;
import NotifSettingsExperiments from "NotifSettingsExperiments" /* 14447 */;
import NotifSettingsUtilsDefault from "NotifSettingsUtils" /* 14448 */;
import NativeNotifSettingsModuleDefault from "NativeNotifSettingsModule" /* 14449 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;
import MultiAccountStore from "MultiAccountStore" /* 12413 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 13629 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
const AnalyticEvents = Constants.AnalyticEvents;
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
        const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
        const intl = util.intl;
        const stringResult = intl.string(util.t.TBA5Xg);
        const intl2 = util.intl;
        const intl3 = util.intl;
        const result = DCDNotificationCategoryUtils.registerNotificationReplyCategories(stringResult, intl2.string(util.t.TXNS7S), intl3.string(util.t.TBA5Xg), () => {

        });
        if (NativeModules.PushNotificationAndroid) {
          const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
          const result1 = PushNotificationAndroid.onRegisterNotificationToken();
        }
        const stringResult1 = intl2.string(util.t.TXNS7S);
        PushNotificationActionCreatorsDefault.registerDevice(tmp.token);
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
        clearTimeout(applyArgumentsResult.postConnectionOpenTimeoutID);
        applyArgumentsResult.postConnectionOpenTimeoutID = null;
        const result = applyArgumentsResult.handleSyncNoMultiAccount();
      }
    };
    applyArgumentsResult.handleSyncNoMultiAccount = function handleSyncNoMultiAccount() {
      let canSync = applyArgumentsResult.canSync;
      if (canSync) {
        canSync = !MultiAccountStore.canUseMultiAccountNotifications;
      }
      if (canSync) {
        applyArgumentsResult.registerToken();
      }
    };
    applyArgumentsResult.handleSyncWithMultiAccount = function handleSyncWithMultiAccount() {
      let canUseMultiAccountNotifications = applyArgumentsResult.canSync;
      if (canUseMultiAccountNotifications) {
        canUseMultiAccountNotifications = MultiAccountStore.canUseMultiAccountNotifications;
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
  const self = this;
  if (null != this.token) {
    self.handleToken(self.token);
  }
  ApexExperimentStore.addChangeListener(self._handleExperimentsUpdated);
  self._experimentUnsubscribe = () => {
    ApexExperimentStore.removeChangeListener(self._handleExperimentsUpdated);
  };
  const subscription = DispatcherDefault.subscribe("LOGIN_SUCCESS", self.handleSyncNoMultiAccountOnLoginSuccess);
  const subscription1 = DispatcherDefault.subscribe("REGISTER_SUCCESS", self.handleSyncNoMultiAccountOnRegisterSuccess);
  const subscription2 = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", self.handleSyncNoMultiAccountOnPostConnectionOpen);
  const subscription3 = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", self.handleSyncWithMultiAccount);
  const subscription4 = DispatcherDefault.subscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", self.handleSyncWithMultiAccount);
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  DispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleSyncNoMultiAccountOnLoginSuccess);
  DispatcherDefault.unsubscribe("REGISTER_SUCCESS", this.handleSyncNoMultiAccountOnRegisterSuccess);
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handleSyncNoMultiAccountOnPostConnectionOpen);
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handleSyncWithMultiAccount);
  DispatcherDefault.unsubscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", this.handleSyncWithMultiAccount);
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
    const result = PushNotificationDefault.addRegisterEventListener(self.handleToken);
  }
};
prototype["registerNotificationCategories"] = function registerNotificationCategories() {
  const declarativeNotifSettingsExperiment = NotifSettingsExperiments.declarativeNotifSettingsExperiment;
  const config = declarativeNotifSettingsExperiment.getConfig({ location: "registerNotificationCategories" });
  let flag = false;
  try {
    if (config.enabled) {
      flag = NotifSettingsUtilsDefault.registerDeclarativeNotificationCategories();
    }
    const self = this;
    if (flag) {
      const result = self.trackDisabledAndroidNotifChannels();
    } else {
      try {
        if (config.clearDeclarative) {
          SentryUtilsDefault.addBreadcrumb({ message: "Clearing declarative notification categories" });
          NotifSettingsUtilsDefault.clear();
        }
        const result1 = self.registerLegacyNotificationCategories();
      } catch (tmp12) {
        require("SentryUtils").captureException(tmp12);
        const obj5 = require("SentryUtils");
      }
    }
  } catch (tmp6) {
    require("SentryUtils").captureException(tmp6);
    const obj2 = require("SentryUtils");
  }
};
prototype["registerLegacyNotificationCategories"] = function registerLegacyNotificationCategories() {
  const registerNotificationCategories = NativeModules.DCDNotificationCategoryUtils.registerNotificationCategories;
  const registerNotificationCategoriesAndGroups = NativeModules.DCDNotificationCategoryUtils.registerNotificationCategoriesAndGroups;
  if (null != registerNotificationCategoriesAndGroups) {
    let obj = { calls: null, mediaConnections: null, messages: null, directMessages: null, friendRequests: null, polls: null, social: null, stageLive: null, guildEventLive: null, guildHighlights: null, forumThreadCreated: null, systemMessages: null, other: null, default: null, reactions: null };
    const intl = util.intl;
    obj.calls = intl.string(_modDef2722["IUH/Oe"]);
    const intl2 = util.intl;
    obj.mediaConnections = intl2.string(_modDef2722.VeBD1N);
    const intl3 = util.intl;
    obj.messages = intl3.string(_modDef2722["4qWUAO"]);
    const intl4 = util.intl;
    obj.directMessages = intl4.string(_modDef2722.NGdNZb);
    const intl5 = util.intl;
    obj.friendRequests = intl5.string(_modDef2722.NxgGZA);
    const intl6 = util.intl;
    obj.polls = intl6.string(_modDef2722.MOjygY);
    const intl7 = util.intl;
    obj.social = intl7.string(_modDef2722["UzRF+8"]);
    const intl8 = util.intl;
    obj.stageLive = intl8.string(_modDef2722["4n388K"]);
    const intl9 = util.intl;
    obj.guildEventLive = intl9.string(_modDef2722["40TIqW"]);
    const intl10 = util.intl;
    obj.guildHighlights = intl10.string(util.t.p5jg9S);
    const intl11 = util.intl;
    obj.forumThreadCreated = intl11.string(_modDef2722.HibKoy);
    const intl12 = util.intl;
    obj.systemMessages = intl12.string(_modDef2722.zJlwvV);
    const intl13 = util.intl;
    obj.other = intl13.string(_modDef2722.kIrLfg);
    const intl14 = util.intl;
    obj.default = intl14.string(_modDef2722["T+79Eo"]);
    const intl15 = util.intl;
    obj.reactions = intl15.string(util.t.gHp0C4);
    obj = { realtime: null, social: null, server: null, other: null };
    const intl16 = util.intl;
    obj.realtime = intl16.string(_modDef2722.S5cB9e);
    const intl17 = util.intl;
    obj.social = intl17.string(_modDef2722["UzRF+8"]);
    const intl18 = util.intl;
    obj.server = intl18.string(_modDef2722.zRKbpz);
    const intl19 = util.intl;
    obj.other = intl19.string(_modDef2722.q5M7HV);
    const result = registerNotificationCategoriesAndGroups(obj, obj);
  } else if (null != registerNotificationCategories) {
    obj = { calls: null, mediaConnections: null, messages: null, directMessages: null, social: null, gameDetection: null, stageLive: null, guildEventLive: null, guildHighlights: null, forumThreadCreated: null, other: null, otherHighPriority: null };
    const intl20 = util.intl;
    obj.calls = intl20.string(util.t.JJogjm);
    const intl21 = util.intl;
    obj.mediaConnections = intl21.string(util.t.K3lovD);
    const intl22 = util.intl;
    obj.messages = intl22.string(util.t.OIgYlQ);
    const intl23 = util.intl;
    obj.directMessages = intl23.string(util.t.YUU0RF);
    const intl24 = util.intl;
    obj.social = intl24.string(util.t.TdEu5X);
    const intl25 = util.intl;
    obj.gameDetection = intl25.string(util.t["A/4saf"]);
    const intl26 = util.intl;
    obj.stageLive = intl26.string(util.t.qGRagm);
    const intl27 = util.intl;
    obj.guildEventLive = intl27.string(util.t.MfGr0a);
    const intl28 = util.intl;
    obj.guildHighlights = intl28.string(util.t.p5jg9S);
    const intl29 = util.intl;
    obj.forumThreadCreated = intl29.string(util.t.dl57ho);
    const intl30 = util.intl;
    obj.other = intl30.string(util.t.BcZTKu);
    const intl31 = util.intl;
    obj.otherHighPriority = intl31.string(util.t.bcv3rp);
    const result1 = registerNotificationCategories(obj);
  }
};
prototype["trackDisabledAndroidNotifChannels"] = function trackDisabledAndroidNotifChannels() {
  if (!this.hasTrackedDisabledAndroidNotifChannels) {
    tmp.hasTrackedDisabledAndroidNotifChannels = true;
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      const tmp5 = NativeNotifSettingsModuleDefault;
      let prop;
      if (tmp5 != null) {
        prop = tmp5.getAndroidNotifChannelStates;
      }
      if (null != prop) {
        const _Set = Set;
        const propResult = prop();
        const found = propResult.filter((importance) => {
          let hasItem = 0 === importance.importance;
          if (hasItem) {
            hasItem = set.has(importance.channelId);
          }
          return hasItem;
        });
        const set = new Set(NOTIF_SETTINGS.map((string_id) => string_id.string_id));
        obj = { disabled_channels: found.map((channelId) => channelId.channelId) };
        AnalyticsUtilsDefault.track(AnalyticEvents.ANDROID_NOTIFICATION_CHANNELS_SYNCED, obj);
        const tmp4Result = AnalyticsUtilsDefault;
      }
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
      isInitialized = AuthenticationStore.isAuthenticated();
    }
    if (isInitialized) {
      isInitialized = !MultiAccountSwitchStore.getIsSwitchingAccount();
    }
    return isInitialized;
  },
  set: undefined
});
const notificationTokenManager = new NotificationTokenManager();
let result = size.fileFinishedImporting("modules/notifications/native/NotificationTokenManager.tsx");

export default notificationTokenManager;