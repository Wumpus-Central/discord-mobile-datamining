// === Module 12149: NotificationUtils ===

// Module 12149 (NotificationUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7500 */;
import SoundUtils from "SoundUtils" /* 10770 */;
import PushNotificationDefault from "PushNotification" /* 10820 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
const PermissionStateType = fn(12140).PermissionStateType;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default {
  hasPermission() {
    return PushNotificationDefault.requestPermissions((badge) => {
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
    _require = arg0;
    let result = require("PushNotificationActionCreators").setPushPermissionState(PermissionStateType.REQUESTED);
    let obj = require("PushNotificationActionCreators");
    AnalyticsUtilsDefault.track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const permissions = PushNotificationDefault.requestPermissions();
    permissions.then((sound) => {
      ({ alert: _alert, badge } = sound);
      if (!_alert) {
        _alert = sound.sound;
      }
      if (!_alert) {
        _alert = badge;
      }
      let str = "denied";
      if (_alert) {
        str = "accepted";
      }
      AnalyticsUtilsDefault.track(AnalyticEvents.PERMISSIONS_ACKED, { type: "notification", action: str });
      const notificationAuthorizationStatus = NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          result = closure_1_0(dependencyMap[3]).updateNotificationAuthorizationStatus(result);
          const obj = closure_1_0(dependencyMap[3]);
        }
      });
      if (null != _alert) {
        if (closure_0 != null) {
          closure_0(_alert);
        }
      }
      const tmpResult = NativePermissionManagerModuleDefault;
    });
  },
  showNotification() {
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
        } catch (tmp4) {
          c0 = tmp;
          throw tmp4;
        }
      }
    })();
  },
  shouldRequestNotification: true,
  playNotificationSound(bit_message1) {
    let num = _volume;
    if (_volume === undefined) {
      num = 1;
    }
    SoundUtils.playSound(bit_message1, num, undefined, soundpack);
  }
};