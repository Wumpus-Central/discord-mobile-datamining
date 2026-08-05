// _runtime/00479_map.js
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";

const PushNotificationIOS = importDefault;
let c3 = new require("NativeEventEmitter")(null);
const map = new Map();
class PushNotificationIOS {
  constructor(arg0) {
    self = this;
    self = this;
    closure_0 = global;
    tmp = outer1_2(this, closure_0);
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
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp5 = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).onFinishRemoteNotification(self._notificationId, arg0);
      const obj = PushNotificationIOS(480);
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
    PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
    const tmp = PushNotificationIOS(38);
    const result = PushNotificationIOS(480).presentLocalNotification(arg0);
  }
};
const items1 = [
  obj,
  {
    key: "scheduleLocalNotification",
    value: function scheduleLocalNotification(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).scheduleLocalNotification(arg0);
    }
  },
  {
    key: "cancelAllLocalNotifications",
    value: function cancelAllLocalNotifications() {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).cancelAllLocalNotifications();
    }
  },
  {
    key: "removeAllDeliveredNotifications",
    value: function removeAllDeliveredNotifications() {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).removeAllDeliveredNotifications();
    }
  },
  {
    key: "getDeliveredNotifications",
    value: function getDeliveredNotifications(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const deliveredNotifications = PushNotificationIOS(480).getDeliveredNotifications(arg0);
    }
  },
  {
    key: "removeDeliveredNotifications",
    value: function removeDeliveredNotifications(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).removeDeliveredNotifications(arg0);
    }
  },
  {
    key: "setApplicationIconBadgeNumber",
    value: function setApplicationIconBadgeNumber(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).setApplicationIconBadgeNumber(arg0);
    }
  },
  {
    key: "getApplicationIconBadgeNumber",
    value: function getApplicationIconBadgeNumber(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const applicationIconBadgeNumber = PushNotificationIOS(480).getApplicationIconBadgeNumber(arg0);
    }
  },
  {
    key: "cancelLocalNotifications",
    value: function cancelLocalNotifications(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const result = PushNotificationIOS(480).cancelLocalNotifications(arg0);
    }
  },
  {
    key: "getScheduledLocalNotifications",
    value: function getScheduledLocalNotifications(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const scheduledLocalNotifications = PushNotificationIOS(480).getScheduledLocalNotifications(arg0);
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      let closure_0 = arg1;
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
        let addListenerResult = tmp3.addListener("remoteNotificationReceived", (remote) => {
          const obj = Object.create(lib.prototype);
          lib = remote;
          outer1_2(obj, lib);
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
        addListenerResult = tmp3.addListener("localNotificationReceived", (remote) => {
          const obj = Object.create(lib.prototype);
          lib = remote;
          outer1_2(obj, lib);
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
        addListenerResult = tmp3.addListener("remoteNotificationsRegistered", (deviceToken) => {
          lib(deviceToken.deviceToken);
        });
      } else if ("registrationError" === arg0) {
        addListenerResult = tmp3.addListener("remoteNotificationRegistrationError", (arg0) => {
          lib(arg0);
        });
      }
      const result = map.set(arg0, addListenerResult);
    }
  },
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0) {
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
        const obj = { alert: null, badge: null, sound: null };
        obj[0] = alert.alert;
        obj[1] = alert.badge;
        obj[2] = alert.sound;
      }
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp2 = PushNotificationIOS(38);
      return PushNotificationIOS(480).requestPermissions({ alert: true, badge: true, sound: true });
    }
  },
  {
    key: "abandonPermissions",
    value: function abandonPermissions() {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      PushNotificationIOS(480).abandonPermissions();
    }
  },
  {
    key: "checkPermissions",
    value: function checkPermissions(fn) {
      PushNotificationIOS(38)(typeof fn === "function", "Must provide a valid callback");
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp2 = PushNotificationIOS(38);
      PushNotificationIOS(480).checkPermissions(fn);
    }
  },
  {
    key: "getInitialNotification",
    value: function getInitialNotification() {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      let tmp = PushNotificationIOS(38);
      const initialNotification = PushNotificationIOS(480).getInitialNotification();
      return initialNotification.then((remote) => {
        let tmp = remote;
        if (remote) {
          const obj = Object.create(ctor.prototype);
          ctor = remote;
          outer1_2(obj, ctor);
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
  },
  {
    key: "getAuthorizationStatus",
    value: function getAuthorizationStatus(arg0) {
      PushNotificationIOS(38)(PushNotificationIOS(480), "PushNotificationManager is not available.");
      const tmp = PushNotificationIOS(38);
      const authorizationStatus = PushNotificationIOS(480).getAuthorizationStatus(arg0);
    }
  }
];
const importDefaultResultResult = importDefaultResult(PushNotificationIOS, items, items1);
importDefaultResultResult.FetchResult = { NewData: "UIBackgroundFetchResultNewData", NoData: "UIBackgroundFetchResultNoData", ResultFailed: "UIBackgroundFetchResultFailed" };

export default importDefaultResultResult;