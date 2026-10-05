// === Module 12060: NotificationUtils ===

// Module 12060 (NotificationUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react_nativeDefault from "react-native" /* 7282 */;
import PushNotificationDefault from "PushNotification" /* 8966 */;
import SoundUtils from "SoundUtils" /* 9562 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12052 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  hasPermission() {
    const obj = PushNotificationDefault;
    return obj.requestPermissions((badge) => {
      let _alert;
      let sound;
      ({ alert: _alert, sound } = badge);
      if (!_alert) {
        _alert = badge.badge;
      }
      if (!_alert) {
        _alert = sound;
      }
      return _alert;
    });
  },
  requestPermission(arg0) {
    let closure_0;
    _require = arg0;
    let obj = require("PushNotificationActionCreators");
    let result = obj.setPushPermissionState(PermissionStateType.REQUESTED);
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const obj3 = PushNotificationDefault;
    const permissions = obj3.requestPermissions();
    permissions.then((sound) => {
      let _alert;
      let badge;
      ({ alert: _alert, badge } = sound);
      if (!_alert) {
        _alert = sound.sound;
      }
      if (!_alert) {
        _alert = badge;
      }
      let str = "denied";
      const track = AnalyticsUtilsDefault.track;
      const PERMISSIONS_ACKED = AnalyticEvents.PERMISSIONS_ACKED;
      AnalyticsUtilsDefault;
      if (_alert) {
        str = "accepted";
      }
      track(PERMISSIONS_ACKED, { type: "notification", action: str });
      const tmpResult = react_nativeDefault;
      const notificationAuthorizationStatus = tmpResult.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          const obj = closure_1_0(closure_1_2[3]);
          result = obj.updateNotificationAuthorizationStatus(result);
        }
      });
      if (null != _alert) {
        if (closure_0 != null) {
          closure_0(_alert);
        }
      }
    });
  },
  showNotification() {
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp3) {
          c0 = 3;
          throw tmp3;
        }
      }
    })();
  },
  shouldRequestNotification: true,
  playNotificationSound(bit_message1, arg1) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const obj = SoundUtils;
    obj.playSound(bit_message1, num, undefined, soundpack);
  }
};
let result = size.fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default obj;