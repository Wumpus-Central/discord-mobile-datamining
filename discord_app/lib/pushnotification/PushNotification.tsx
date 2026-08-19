// discord_app/lib/pushnotification/PushNotification.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import obj1322 from "../../utils/PlatformUtils.tsx";
import enforcing from "../../../discord_common/js/packages/rtn-codegen/js/NativePushNotificationMonitorModule.tsx";
import RNCPushNotificationIOSDefault from "../../../_runtime/11580_RNCPushNotificationIOS.js";
import openNotificationSettingsDefault from "../../modules/native_permissions/mobile/openNotificationSettings.native.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { obj132 } from "../../utils/PlatformUtils.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
let tmp3 = null;
if (null != PushNotificationAndroid) {
  tmp3 = new tmp3(NativeModules.PushNotificationAndroid);
}
let closure_5 = tmp3;
let result = obj132.fileFinishedImporting("lib/pushnotification/PushNotification.tsx");

export default {
  getInitialNotification() {
    if (obj.isAndroid()) {
      let initialNotification = new Promise((arg0) => {
        closure_0 = arg0;
        initialNotification = initialNotification.getInitialNotification();
        initialNotification.then((result) => {
          closure_0 = result;
          let tmp2 = null;
          if (null != result) {
            let obj = { getData: null, getMessage: null, getSound: null, getCategory: null, getAlert: null, getContentAvailable: null, getBadgeCount: null, finish: null };
            obj[0] = function getData() {
              const obj = {};
              const merged = Object.assign(message);
              let parsed = null;
              if (null != message.message) {
                const _JSON = JSON;
                parsed = JSON.parse(message.message);
              }
              obj.message = parsed;
              return obj;
            };
            obj[1] = function getMessage() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[2] = function getSound() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[3] = function getCategory() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[4] = function getAlert() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[5] = function getContentAvailable() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[6] = function getBadgeCount() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[7] = function finish(arg0) {
              error = new Error("Not implemented on Android: " + arg0);
              throw error;
            };
            tmp2 = obj;
          }
          closure_0(tmp2);
        });
      });
    } else {
      initialNotification = RNCPushNotificationIOSDefault.getInitialNotification();
    }
    return initialNotification;
  },
  setCurrentUser(username, id) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setCurrentUser(username, id);
    }
    obj = obj1322;
  },
  setMultiAccountUsers(arg0) {
    const json = JSON.stringify(arg0);
    if (obj.isAndroid()) {
      if (PushNotificationAndroid != null) {
        const setMultiAccountUsernames = PushNotificationAndroid.setMultiAccountUsernames;
        if (setMultiAccountUsernames != null) {
          const result = setMultiAccountUsernames(json);
        }
      }
    } else {
      const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
      if (NSUserDefaultsBridge != null) {
        const setMultiAccountUsersJSONString = NSUserDefaultsBridge.setMultiAccountUsersJSONString;
        if (setMultiAccountUsersJSONString != null) {
          const result1 = setMultiAccountUsersJSONString(json);
        }
      }
    }
    obj = obj1322;
  },
  clearPushNotificationLogs() {
    if (obj.isAndroid()) {
      enforcing.default.clearLogs();
      const _default = enforcing.default;
    }
    obj = obj1322;
  },
  setApplicationIconBadgeNumber(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.setApplicationIconBadgeNumber(arg0);
    }
    obj = obj1322;
  },
  clearAllNotifications() {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.clearAllNotifications();
    } else {
      const result1 = RNCPushNotificationIOSDefault.setApplicationIconBadgeNumber(0);
    }
    obj = obj1322;
  },
  presentLocalNotification(arg0) {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.presentLocalNotification(arg0);
    } else {
      const result1 = RNCPushNotificationIOSDefault.presentLocalNotification(arg0);
    }
    obj = obj1322;
  },
  getDeliveredNotifications() {
    if (obj.isAndroid()) {
      let resolveResult = _Promise.resolve([]);
    } else {
      resolveResult = new _Promise((arg0) => {
        const deliveredNotifications = callback(table[2]).getDeliveredNotifications(arg0);
      });
    }
    return resolveResult;
  },
  removeDeliveredNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.removeDeliveredNotifications(arg0);
    }
    obj = obj1322;
  },
  scheduleLocalNotification(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.scheduleLocalNotification(arg0);
    }
    obj = obj1322;
  },
  getScheduledLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const scheduledLocalNotifications = RNCPushNotificationIOSDefault.getScheduledLocalNotifications(arg0);
    }
    obj = obj1322;
  },
  cancelLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.cancelLocalNotifications(arg0);
    }
    obj = obj1322;
  },
  cancelAllLocalNotifications() {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.cancelAllLocalNotifications();
    }
    obj = obj1322;
  },
  checkPermissions(fn) {
    if (obj.isAndroid()) {
      fn({});
    } else {
      RNCPushNotificationIOSDefault.checkPermissions(fn);
    }
    obj = obj1322;
  },
  requestPermissions(arg0) {
    if (obj.isAndroid()) {
      let permissions = new Promise((fn) => fn({}));
    } else {
      permissions = RNCPushNotificationIOSDefault.requestPermissions(arg0);
    }
    return permissions;
  },
  openNotificationSettings() {
    openNotificationSettingsDefault();
  },
  addNotificationEventListener(localNotification, handleLocalNotification) {
    const _require = handleLocalNotification;
    if (obj.isAndroid()) {
      if ("notification" === localNotification) {
        closure_5.addListener("notification", (arg0) => {
          handleLocalNotification = arg0;
          let tmp = null;
          if (null != arg0) {
            const obj = { getData: null, getMessage: null, getSound: null, getCategory: null, getAlert: null, getContentAvailable: null, getBadgeCount: null, finish: null };
            obj[0] = function getData() {
              const obj = {};
              const merged = Object.assign(message);
              let parsed = null;
              if (null != message.message) {
                const _JSON = JSON;
                parsed = JSON.parse(message.message);
              }
              obj.message = parsed;
              return obj;
            };
            obj[1] = function getMessage() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[2] = function getSound() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[3] = function getCategory() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[4] = function getAlert() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[5] = function getContentAvailable() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[6] = function getBadgeCount() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[7] = function finish(arg0) {
              error = new Error("Not implemented on Android: " + arg0);
              throw error;
            };
            tmp = obj;
          }
          if (null != tmp) {
            handleLocalNotification(tmp);
          }
        });
      }
      if ("localNotification" === localNotification) {
        closure_5.addListener("localNotification", (arg0) => {
          handleLocalNotification = arg0;
          let tmp = null;
          if (null != arg0) {
            const obj = { getData: null, getMessage: null, getSound: null, getCategory: null, getAlert: null, getContentAvailable: null, getBadgeCount: null, finish: null };
            obj[0] = function getData() {
              const obj = {};
              const merged = Object.assign(message);
              let parsed = null;
              if (null != message.message) {
                const _JSON = JSON;
                parsed = JSON.parse(message.message);
              }
              obj.message = parsed;
              return obj;
            };
            obj[1] = function getMessage() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[2] = function getSound() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[3] = function getCategory() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[4] = function getAlert() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[5] = function getContentAvailable() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[6] = function getBadgeCount() {
              error = new Error("TODO: Implement on Android");
              throw error;
            };
            obj[7] = function finish(arg0) {
              error = new Error("Not implemented on Android: " + arg0);
              throw error;
            };
            tmp = obj;
          }
          if (null != tmp) {
            handleLocalNotification(tmp);
          }
        });
      }
      const result = PushNotificationAndroid.registerEventListener(localNotification);
    } else {
      const listener = RNCPushNotificationIOSDefault.addEventListener(localNotification, handleLocalNotification);
    }
    obj = obj132;
  },
  addRegisterEventListener(handleToken) {
    const _require = handleToken;
    if (obj.isAndroid()) {
      closure_5.addListener("register", (token) => {
        handleToken(token.token);
      });
      const result = PushNotificationAndroid.registerEventListener("register");
    } else {
      const listener = RNCPushNotificationIOSDefault.addEventListener("register", handleToken);
    }
    obj = obj132;
  },
  getSoundsEnabled() {
    return new Promise((fn) => {
      const callback = fn;
      if (obj.isAndroid()) {
        soundsEnabled = soundsEnabled.getSoundsEnabled();
        soundsEnabled.then((result) => callback(result));
      } else {
        fn(false);
      }
    });
  },
  getVibrationsEnabled() {
    return new Promise((fn) => {
      const callback = fn;
      if (obj.isAndroid()) {
        vibrationsEnabled = vibrationsEnabled.getVibrationsEnabled();
        vibrationsEnabled.then((result) => callback(result));
      } else {
        fn(false);
      }
    });
  },
  getLightsEnabled() {
    return new Promise((fn) => {
      const callback = fn;
      if (obj.isAndroid()) {
        lightsEnabled = lightsEnabled.getLightsEnabled();
        lightsEnabled.then((result) => callback(result));
      } else {
        fn(false);
      }
    });
  },
  setSoundsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setSoundsEnabled(arg0);
    }
    obj = obj1322;
  },
  setVibrationsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setVibrationsEnabled(arg0);
    }
    obj = obj1322;
  },
  setLightsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setLightsEnabled(arg0);
    }
    obj = obj1322;
  },
  setAndroidNotifyEveryTime(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setNotifyEveryTime(arg0);
    }
    obj = obj1322;
  },
  shouldAndroidNotifyEveryTime() {
    return new Promise((fn) => {
      const callback = fn;
      if (obj.isAndroid()) {
        const result = closure_4.shouldNotifyEveryTime();
        result.then((result) => callback(result));
      } else {
        fn(false);
      }
      obj = callback(table[1]);
    });
  }
};