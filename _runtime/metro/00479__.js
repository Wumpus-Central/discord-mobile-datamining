// === Module 479: ? ===

// Module 479
import _modDef38 from "module_38" /* 38 */;
import _modDef209 from "module_209" /* 209 */;
import PushNotificationManagerDefault from "PushNotificationManager" /* 480 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let tmp3 = new _modDef209(null);
let closure_3 = tmp3;
const map = new Map();
class PushNotificationIOS {
  constructor(remote) {
    const self = this;
    let closure_0 = remote;
    _classCallCheck(this, PushNotificationIOS);
    this._data = {};
    this._remoteNotificationCompleteCallbackCalled = false;
    this._isRemote = remote.remote;
    if (this._isRemote) {
      self._notificationId = remote.notificationId;
    }
    if (remote.remote) {
      const _Object = Object;
      const keys = Object.keys(remote);
      const item = keys.forEach((item) => {
        if ("aps" === item) {
          ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, "content-available": obj._contentAvailable, "thread-id": obj._threadID } = closure_0[item]);
        } else {
          obj._data[item] = closure_0[item];
        }
      });
    } else {
      ({ applicationIconBadgeNumber: self._badgeCount, soundName: self._sound, alertBody: self._alert, userInfo: self._data, category: self._category } = remote);
    }
  }
}
const entry = {
  key: "finish",
  value: function finish(arg0) {
    const self = this;
    const tmp = this._isRemote && self._notificationId && !self._remoteNotificationCompleteCallbackCalled;
    if (tmp) {
      self._remoteNotificationCompleteCallbackCalled = true;
      const tmp5 = _modDef38;
      tmp5(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.onFinishRemoteNotification(self._notificationId, arg0);
    }
  }
};
const items = [
  entry,
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
const entry1 = {
  key: "presentLocalNotification",
  value: function presentLocalNotification(arg0) {
    const tmp = _modDef38;
    tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
    const obj = PushNotificationManagerDefault;
    const result = obj.presentLocalNotification(arg0);
  }
};
const items1 = [
  entry1,
  {
    key: "scheduleLocalNotification",
    value: function scheduleLocalNotification(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.scheduleLocalNotification(arg0);
    }
  },
  {
    key: "cancelAllLocalNotifications",
    value: function cancelAllLocalNotifications() {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.cancelAllLocalNotifications();
    }
  },
  {
    key: "removeAllDeliveredNotifications",
    value: function removeAllDeliveredNotifications() {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.removeAllDeliveredNotifications();
    }
  },
  {
    key: "getDeliveredNotifications",
    value: function getDeliveredNotifications(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const deliveredNotifications = obj.getDeliveredNotifications(arg0);
    }
  },
  {
    key: "removeDeliveredNotifications",
    value: function removeDeliveredNotifications(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.removeDeliveredNotifications(arg0);
    }
  },
  {
    key: "setApplicationIconBadgeNumber",
    value: function setApplicationIconBadgeNumber(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.setApplicationIconBadgeNumber(arg0);
    }
  },
  {
    key: "getApplicationIconBadgeNumber",
    value: function getApplicationIconBadgeNumber(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const applicationIconBadgeNumber = obj.getApplicationIconBadgeNumber(arg0);
    }
  },
  {
    key: "cancelLocalNotifications",
    value: function cancelLocalNotifications(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const result = obj.cancelLocalNotifications(arg0);
    }
  },
  {
    key: "getScheduledLocalNotifications",
    value: function getScheduledLocalNotifications(arg0) {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const scheduledLocalNotifications = obj.getScheduledLocalNotifications(arg0);
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      let addListenerResult;
      let closure_0 = arg1;
      const tmp2 = "notification" === arg0;
      let tmp3 = tmp2;
      let tmp = PushNotificationIOS(dependencyMap[3]);
      if (!tmp2) {
        tmp3 = "register" === arg0;
      }
      if (!tmp3) {
        tmp3 = "registrationError" === arg0;
      }
      if (!tmp3) {
        tmp3 = "localNotification" === arg0;
      }
      tmp(tmp3, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
      if (tmp2) {
        addListenerResult = closure_1_3.addListener("remoteNotificationReceived", (remote) => {
          const obj = Object.create(PushNotificationIOS.prototype);
          const tmp = closure_0;
          closure_0 = remote;
          closure_1_2(obj, PushNotificationIOS);
          obj._data = {};
          obj._remoteNotificationCompleteCallbackCalled = false;
          obj._isRemote = remote.remote;
          if (obj._isRemote) {
            obj._notificationId = remote.notificationId;
          }
          if (remote.remote) {
            const _Object = Object;
            const keys = Object.keys(remote);
            const item = keys.forEach((item) => {
              if ("aps" === item) {
                ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, "content-available": obj._contentAvailable, "thread-id": obj._threadID } = closure_0[item]);
              } else {
                obj._data[item] = closure_0[item];
              }
            });
          } else {
            ({ applicationIconBadgeNumber: tmp2._badgeCount, soundName: tmp2._sound, alertBody: tmp2._alert, userInfo: tmp2._data, category: tmp2._category } = remote);
          }
          tmp(obj);
        });
      } else if ("localNotification" === arg0) {
        addListenerResult = closure_1_3.addListener("localNotificationReceived", (remote) => {
          const obj = Object.create(PushNotificationIOS.prototype);
          const tmp = closure_0;
          closure_0 = remote;
          closure_1_2(obj, PushNotificationIOS);
          obj._data = {};
          obj._remoteNotificationCompleteCallbackCalled = false;
          obj._isRemote = remote.remote;
          if (obj._isRemote) {
            obj._notificationId = remote.notificationId;
          }
          if (remote.remote) {
            const _Object = Object;
            const keys = Object.keys(remote);
            const item = keys.forEach((item) => {
              if ("aps" === item) {
                ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, "content-available": obj._contentAvailable, "thread-id": obj._threadID } = closure_0[item]);
              } else {
                obj._data[item] = closure_0[item];
              }
            });
          } else {
            ({ applicationIconBadgeNumber: tmp2._badgeCount, soundName: tmp2._sound, alertBody: tmp2._alert, userInfo: tmp2._data, category: tmp2._category } = remote);
          }
          tmp(obj);
        });
      } else if ("register" === arg0) {
        addListenerResult = closure_1_3.addListener("remoteNotificationsRegistered", (deviceToken) => {
          closure_0(deviceToken.deviceToken);
        });
      } else if ("registrationError" === arg0) {
        addListenerResult = closure_1_3.addListener("remoteNotificationRegistrationError", (arg0) => {
          closure_0(arg0);
        });
      }
      const result = map.set(arg0, addListenerResult);
    }
  },
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0) {
      let tmp2 = "notification" === arg0;
      const tmp = _modDef38;
      if (!tmp2) {
        tmp2 = "register" === arg0;
      }
      if (!tmp2) {
        tmp2 = "registrationError" === arg0;
      }
      if (!tmp2) {
        tmp2 = "localNotification" === arg0;
      }
      tmp(tmp2, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
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
      const tmp2 = _modDef38;
      tmp2(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj2 = PushNotificationManagerDefault;
      return obj2.requestPermissions({ alert: true, badge: true, sound: true });
    }
  },
  {
    key: "abandonPermissions",
    value: function abandonPermissions() {
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      obj.abandonPermissions();
    }
  },
  {
    key: "checkPermissions",
    value: function checkPermissions(fn) {
      _modDef38(typeof fn === "function", "Must provide a valid callback");
      const tmp2 = _modDef38;
      tmp2(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      obj.checkPermissions(fn);
    }
  },
  {
    key: "getInitialNotification",
    value: function getInitialNotification() {
      let tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      let obj = PushNotificationManagerDefault;
      const initialNotification = obj.getInitialNotification();
      return initialNotification.then((remote) => {
        let tmp = remote;
        if (tmp) {
          const obj = Object.create(PushNotificationIOS.prototype);
          let closure_0 = remote;
          _classCallCheck(obj, PushNotificationIOS);
          obj._data = {};
          obj._remoteNotificationCompleteCallbackCalled = false;
          obj._isRemote = remote.remote;
          if (obj._isRemote) {
            obj._notificationId = remote.notificationId;
          }
          if (remote.remote) {
            const _Object = Object;
            const keys = Object.keys(remote);
            const item = keys.forEach((item) => {
              if ("aps" === item) {
                ({ alert: obj._alert, sound: obj._sound, badge: obj._badgeCount, category: obj._category, "content-available": obj._contentAvailable, "thread-id": obj._threadID } = closure_0[item]);
              } else {
                obj._data[item] = closure_0[item];
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
      const tmp = _modDef38;
      tmp(PushNotificationManagerDefault, "PushNotificationManager is not available.");
      const obj = PushNotificationManagerDefault;
      const authorizationStatus = obj.getAuthorizationStatus(arg0);
    }
  }
];
const importDefaultResultResult = _createClass(PushNotificationIOS, items, items1);
importDefaultResultResult.FetchResult = { NewData: "UIBackgroundFetchResultNewData", NoData: "UIBackgroundFetchResultNoData", ResultFailed: "UIBackgroundFetchResultFailed" };

export default importDefaultResultResult;