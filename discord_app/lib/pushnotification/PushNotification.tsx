// discord_app/lib/pushnotification/PushNotification.tsx
import RNCPushNotificationIOSDefault from "../../../_runtime/09688_RNCPushNotificationIOS.js";
import NativePushNotificationMonitorModule from "../../../discord_common/js/packages/rtn-codegen/js/NativePushNotificationMonitorModule.tsx";
import openNotificationSettingsDefault from "../../modules/native_permissions/mobile/openNotificationSettings.native.tsx";
import get_ActivityIndicator from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

const NativeModules = get_ActivityIndicator.NativeModules;
const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
let tmp3 = null;
if (null != PushNotificationAndroid) {
  tmp3 = new tmp3(NativeModules.PushNotificationAndroid);
}
let closure_5 = tmp3;
let result = size.fileFinishedImporting("lib/pushnotification/PushNotification.tsx");

export default {
  getInitialNotification() {
    if (obj.isAndroid()) {
      let initialNotification = new Promise((arg0) => {
        closure_0 = arg0;
        initialNotification = initialNotification.getInitialNotification();
        initialNotification.then((result) => {
          const message = result;
          let tmp2 = null;
          if (null != result) {
            let obj = {
              getData() {
                const obj = {};
                const merged = Object.assign(message);
                let parsed = null;
                if (null != message.message) {
                  const _JSON = JSON;
                  parsed = JSON.parse(message.message);
                }
                obj.message = parsed;
                return obj;
              },
              getMessage() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getSound() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getCategory() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getAlert() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getContentAvailable() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getBadgeCount() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              finish(arg0) {
                const error = new Error("Not implemented on Android: " + arg0);
                throw error;
              },
            };
            tmp2 = obj;
          }
          message(tmp2);
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
  },
  setMultiAccountUsers(arg0) {
    const json = JSON.stringify(arg0);
    if (obj.isAndroid()) {
      if (PushNotificationAndroid != null) {
        const setMultiAccountUsernames = tmp5.setMultiAccountUsernames;
        if (setMultiAccountUsernames != null) {
          const result = setMultiAccountUsernames(json);
        }
      }
      tmp5 = PushNotificationAndroid;
    } else {
      const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
      if (NSUserDefaultsBridge != null) {
        const setMultiAccountUsersJSONString = NSUserDefaultsBridge.setMultiAccountUsersJSONString;
        if (setMultiAccountUsersJSONString != null) {
          const result1 = setMultiAccountUsersJSONString(json);
        }
      }
    }
  },
  clearPushNotificationLogs() {
    if (obj.isAndroid()) {
      NativePushNotificationMonitorModule.default.clearLogs();
      const _default = NativePushNotificationMonitorModule.default;
    }
  },
  setApplicationIconBadgeNumber(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.setApplicationIconBadgeNumber(arg0);
    }
  },
  clearAllNotifications() {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.clearAllNotifications();
    } else {
      const result1 = RNCPushNotificationIOSDefault.setApplicationIconBadgeNumber(0);
    }
  },
  presentLocalNotification(arg0) {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.presentLocalNotification(arg0);
    } else {
      const result1 = RNCPushNotificationIOSDefault.presentLocalNotification(arg0);
    }
  },
  getDeliveredNotifications() {
    if (obj.isAndroid()) {
      let resolveResult = _Promise.resolve([]);
    } else {
      resolveResult = new _Promise((arg0) => {
        const deliveredNotifications = RNCPushNotificationIOSDefault.getDeliveredNotifications(arg0);
      });
    }
    return resolveResult;
  },
  removeDeliveredNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.removeDeliveredNotifications(arg0);
    }
  },
  scheduleLocalNotification(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.scheduleLocalNotification(arg0);
    }
  },
  getScheduledLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const scheduledLocalNotifications = RNCPushNotificationIOSDefault.getScheduledLocalNotifications(arg0);
    }
  },
  cancelLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.cancelLocalNotifications(arg0);
    }
  },
  cancelAllLocalNotifications() {
    if (!obj.isAndroid()) {
      const result = RNCPushNotificationIOSDefault.cancelAllLocalNotifications();
    }
  },
  checkPermissions(fn) {
    if (obj.isAndroid()) {
      fn({});
    } else {
      RNCPushNotificationIOSDefault.checkPermissions(fn);
    }
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
    _require = handleLocalNotification;
    if (obj.isAndroid()) {
      if ("notification" === localNotification) {
        closure_5.addListener("notification", (arg0) => {
          handleLocalNotification = arg0;
          let tmp = null;
          if (null != arg0) {
            const obj = {
              getData() {
                const obj = {};
                const merged = Object.assign(message);
                let parsed = null;
                if (null != message.message) {
                  const _JSON = JSON;
                  parsed = JSON.parse(message.message);
                }
                obj.message = parsed;
                return obj;
              },
              getMessage() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getSound() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getCategory() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getAlert() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getContentAvailable() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getBadgeCount() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              finish(arg0) {
                const error = new Error("Not implemented on Android: " + arg0);
                throw error;
              },
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
            const obj = {
              getData() {
                const obj = {};
                const merged = Object.assign(message);
                let parsed = null;
                if (null != message.message) {
                  const _JSON = JSON;
                  parsed = JSON.parse(message.message);
                }
                obj.message = parsed;
                return obj;
              },
              getMessage() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getSound() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getCategory() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getAlert() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getContentAvailable() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              getBadgeCount() {
                const error = new Error("TODO: Implement on Android");
                throw error;
              },
              finish(arg0) {
                const error = new Error("Not implemented on Android: " + arg0);
                throw error;
              },
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
  },
  addRegisterEventListener(handleToken) {
    if (obj.isAndroid()) {
      closure_5.addListener("register", (token) => {
        handleToken(token.token);
      });
      const result = PushNotificationAndroid.registerEventListener("register");
    } else {
      const listener = RNCPushNotificationIOSDefault.addEventListener("register", handleToken);
    }
  },
  getSoundsEnabled() {
    return new Promise((fn) => {
      closure_0 = fn;
      if (obj.isAndroid()) {
        soundsEnabled = soundsEnabled.getSoundsEnabled();
        soundsEnabled.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
  },
  getVibrationsEnabled() {
    return new Promise((fn) => {
      closure_0 = fn;
      if (obj.isAndroid()) {
        vibrationsEnabled = vibrationsEnabled.getVibrationsEnabled();
        vibrationsEnabled.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
  },
  getLightsEnabled() {
    return new Promise((fn) => {
      closure_0 = fn;
      if (obj.isAndroid()) {
        lightsEnabled = lightsEnabled.getLightsEnabled();
        lightsEnabled.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
  },
  setSoundsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setSoundsEnabled(arg0);
    }
  },
  setVibrationsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setVibrationsEnabled(arg0);
    }
  },
  setLightsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setLightsEnabled(arg0);
    }
  },
  setAndroidNotifyEveryTime(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setNotifyEveryTime(arg0);
    }
  },
  shouldAndroidNotifyEveryTime() {
    return new Promise((fn) => {
      closure_0 = fn;
      if (obj.isAndroid()) {
        const result = PushNotificationAndroid.shouldNotifyEveryTime();
        result.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
  },
};
