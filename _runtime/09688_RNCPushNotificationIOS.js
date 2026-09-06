// === Module 9688: RNCPushNotificationIOS ===

// Module 9688 (RNCPushNotificationIOS)
import _createClassDefault from "_createClass" /* 42 */;
import closure_2 from "_classCallCheck" /* 41 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const PushNotificationIOS = importDefault;
const RNCPushNotificationIOS = get_ActivityIndicator.NativeModules.RNCPushNotificationIOS;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(RNCPushNotificationIOS);
const map = new Map();
class PushNotificationIOS {
  constructor(arg0) {
    self = this;
    self = this;
    closure_0 = global;
    tmp = closure_2(this, closure_0);
    this._data = {};
    this._remoteNotificationCompleteCallbackCalled = false;
    this._isRemote = global.remote;
    if (this._isRemote) {
      self._notificationId = global.notificationId;
    }
    if (global.remote) {
      tmp2 = globalThis;
      _Object = Object;
      keys = Object.keys(global);
      item = keys.forEach((arg0) => {
        if ("aps" === arg0) {
          ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, content-available: obj._contentAvailable, thread-id: obj._threadID } = tmp);
        } else {
          obj._data[arg0] = tmp;
        }
      });
    } else {
      ({ applicationIconBadgeNumber: self._badgeCount, soundName: self._sound, alertBody: self._alert, userInfo: self._data, category: self._category } = global);
    }
    return;
  }
}
let obj = {
  key: "finish",
  value: function finish(arg0) {
    const self = this;
    if (tmp) {
      self._remoteNotificationCompleteCallbackCalled = true;
      const result = RNCPushNotificationIOS.onFinishRemoteNotification(self._notificationId, arg0);
    }
  }
};
const items = [
  obj,
  {
    key: "getMessage",
    value: function getMessage() {
      return this._alert;
    }
  },
  {
    key: "getSound",
    value: function getSound() {
      return this._sound;
    }
  },
  {
    key: "getCategory",
    value: function getCategory() {
      return this._category;
    }
  },
  {
    key: "getAlert",
    value: function getAlert() {
      return this._alert;
    }
  },
  {
    key: "getContentAvailable",
    value: function getContentAvailable() {
      return this._contentAvailable;
    }
  },
  {
    key: "getBadgeCount",
    value: function getBadgeCount() {
      return this._badgeCount;
    }
  },
  {
    key: "getData",
    value: function getData() {
      return this._data;
    }
  },
  {
    key: "getThreadID",
    value: function getThreadID() {
      return this._threadID;
    }
  }
];
obj = {
  key: "presentLocalNotification",
  value: function presentLocalNotification(arg0) {
    const result = RNCPushNotificationIOS.presentLocalNotification(arg0);
  }
};
const items1 = [
  obj,
  {
    key: "scheduleLocalNotification",
    value: function scheduleLocalNotification(arg0) {
      const result = RNCPushNotificationIOS.scheduleLocalNotification(arg0);
    }
  },
  {
    key: "cancelAllLocalNotifications",
    value: function cancelAllLocalNotifications() {
      const result = RNCPushNotificationIOS.cancelAllLocalNotifications();
    }
  },
  {
    key: "removeAllDeliveredNotifications",
    value: function removeAllDeliveredNotifications() {
      const result = RNCPushNotificationIOS.removeAllDeliveredNotifications();
    }
  },
  {
    key: "getDeliveredNotifications",
    value: function getDeliveredNotifications(arg0) {
      const deliveredNotifications = RNCPushNotificationIOS.getDeliveredNotifications(arg0);
    }
  },
  {
    key: "removeDeliveredNotifications",
    value: function removeDeliveredNotifications(arg0) {
      const result = RNCPushNotificationIOS.removeDeliveredNotifications(arg0);
    }
  },
  {
    key: "setApplicationIconBadgeNumber",
    value: function setApplicationIconBadgeNumber(arg0) {
      const result = RNCPushNotificationIOS.setApplicationIconBadgeNumber(arg0);
    }
  },
  {
    key: "getApplicationIconBadgeNumber",
    value: function getApplicationIconBadgeNumber(arg0) {
      const applicationIconBadgeNumber = RNCPushNotificationIOS.getApplicationIconBadgeNumber(arg0);
    }
  },
  {
    key: "cancelLocalNotifications",
    value: function cancelLocalNotifications(arg0) {
      const result = RNCPushNotificationIOS.cancelLocalNotifications(arg0);
    }
  },
  {
    key: "getScheduledLocalNotifications",
    value: function getScheduledLocalNotifications(arg0) {
      const scheduledLocalNotifications = RNCPushNotificationIOS.getScheduledLocalNotifications(arg0);
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      closure_0 = arg1;
      let tmp3 = tmp2;
      if ("notification" !== arg0) {
        tmp3 = "register" === arg0;
      }
      if (!tmp3) {
        tmp3 = "registrationError" === arg0;
      }
      if (!tmp3) {
        tmp3 = "localNotification" === arg0;
      }
      PushNotificationIOS(38)(tmp3, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
      if ("notification" === arg0) {
        let addListenerResult = nativeEventEmitter.addListener("remoteNotificationReceived", (remote) => {
          const obj = Object.create(lib.prototype);
          lib = remote;
          closure_1_2(obj, lib);
          obj._data = {};
          obj._remoteNotificationCompleteCallbackCalled = false;
          obj._isRemote = remote.remote;
          if (obj._isRemote) {
            obj._notificationId = remote.notificationId;
          }
          if (remote.remote) {
            const _Object = Object;
            const keys = Object.keys(remote);
            const item = keys.forEach((arg0) => {
              if ("aps" === arg0) {
                ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, content-available: obj._contentAvailable, thread-id: obj._threadID } = tmp);
              } else {
                obj._data[arg0] = tmp;
              }
            });
          } else {
            ({ applicationIconBadgeNumber: tmp2._badgeCount, soundName: tmp2._sound, alertBody: tmp2._alert, userInfo: tmp2._data, category: tmp2._category } = remote);
          }
          lib(obj);
        });
      } else if ("localNotification" === arg0) {
        addListenerResult = nativeEventEmitter.addListener("localNotificationReceived", (remote) => {
          const obj = Object.create(lib.prototype);
          lib = remote;
          closure_1_2(obj, lib);
          obj._data = {};
          obj._remoteNotificationCompleteCallbackCalled = false;
          obj._isRemote = remote.remote;
          if (obj._isRemote) {
            obj._notificationId = remote.notificationId;
          }
          if (remote.remote) {
            const _Object = Object;
            const keys = Object.keys(remote);
            const item = keys.forEach((arg0) => {
              if ("aps" === arg0) {
                ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, content-available: obj._contentAvailable, thread-id: obj._threadID } = tmp);
              } else {
                obj._data[arg0] = tmp;
              }
            });
          } else {
            ({ applicationIconBadgeNumber: tmp2._badgeCount, soundName: tmp2._sound, alertBody: tmp2._alert, userInfo: tmp2._data, category: tmp2._category } = remote);
          }
          lib(obj);
        });
      } else if ("register" === arg0) {
        addListenerResult = nativeEventEmitter.addListener("remoteNotificationsRegistered", (deviceToken) => {
          lib(deviceToken.deviceToken);
        });
      } else if ("registrationError" === arg0) {
        addListenerResult = nativeEventEmitter.addListener("remoteNotificationRegistrationError", (arg0) => {
          lib(arg0);
        });
      }
      const result = map.set(arg0, addListenerResult);
    }
  },
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0, arg1) {
      let tmp2 = "notification" === arg0;
      if (!tmp2) {
        tmp2 = "register" === arg0;
      }
      if (!tmp2) {
        tmp2 = "registrationError" === arg0;
      }
      if (!tmp2) {
        tmp2 = "localNotification" === arg0;
      }
      PushNotificationIOS(38)(tmp2, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
      const value = map.get(arg0);
      if (value) {
        value.remove();
        map.delete(arg0);
      }
    }
  },
  {
    key: "requestPermissions",
    value: function requestPermissions(alert) {
      if (alert) {
        let obj = { alert: null, badge: null, sound: null };
        obj[0] = alert.alert;
        obj[1] = alert.badge;
        obj[2] = alert.sound;
      } else {
        obj = { alert: true, badge: true, sound: true };
      }
      return RNCPushNotificationIOS.requestPermissions(obj);
    }
  },
  {
    key: "abandonPermissions",
    value: function abandonPermissions() {
      RNCPushNotificationIOS.abandonPermissions();
    }
  },
  {
    key: "checkPermissions",
    value: function checkPermissions(fn) {
      PushNotificationIOS(38)(typeof fn === "function", "Must provide a valid callback");
      RNCPushNotificationIOS.checkPermissions(fn);
    }
  },
  {
    key: "getInitialNotification",
    value: function getInitialNotification() {
      const initialNotification = RNCPushNotificationIOS.getInitialNotification();
      return initialNotification.then((remote) => {
        let tmp = remote;
        if (remote) {
          const obj = Object.create(ctor.prototype);
          ctor = remote;
          closure_1_2(obj, ctor);
          obj._data = {};
          obj._remoteNotificationCompleteCallbackCalled = false;
          obj._isRemote = remote.remote;
          if (obj._isRemote) {
            obj._notificationId = remote.notificationId;
          }
          if (remote.remote) {
            const _Object = Object;
            const keys = Object.keys(remote);
            const item = keys.forEach((arg0) => {
              if ("aps" === arg0) {
                ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, content-available: obj._contentAvailable, thread-id: obj._threadID } = tmp);
              } else {
                obj._data[arg0] = tmp;
              }
            });
            tmp = obj;
          } else {
            ({ applicationIconBadgeNumber: tmp3._badgeCount, soundName: tmp3._sound, alertBody: tmp3._alert, userInfo: tmp3._data, category: tmp3._category } = remote);
            tmp = obj;
          }
        }
        return tmp;
      });
    }
  }
];
const importDefaultResultResult = _createClassDefault(PushNotificationIOS, items, items1);
importDefaultResultResult.FetchResult = { NewData: "UIBackgroundFetchResultNewData", NoData: "UIBackgroundFetchResultNoData", ResultFailed: "UIBackgroundFetchResultFailed" };

export default importDefaultResultResult;