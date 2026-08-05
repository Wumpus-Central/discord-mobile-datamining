// discord_app/utils/native/NotificationUtils.tsx
import expandEventProperties from "expandEventProperties";
import { NativeModules } from "get ActivityIndicator";
import { PermissionStateType } from "set";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("set").fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default {
  hasPermission() {
    return require("../../lib/pushnotification/PushNotification.tsx").requestPermissions((badge) => {
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
    const _require = arg0;
    let result = _require("../../actions/native/PushNotificationActionCreators.tsx").setPushPermissionState(PermissionStateType.REQUESTED);
    let obj = _require("../../actions/native/PushNotificationActionCreators.tsx");
    require("../AnalyticsUtils.tsx").track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const obj2 = require("../AnalyticsUtils.tsx");
    const permissions = require("../../lib/pushnotification/PushNotification.tsx").requestPermissions();
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
      if (_alert) {
        str = "accepted";
      }
      outer1_1(outer1_2[5]).track(outer1_6.PERMISSIONS_ACKED, { type: "notification", action: str });
      const NativePermissionManager = outer1_4.NativePermissionManager;
      const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((closure_0) => {
        if (null != closure_0) {
          const result = callback(table[4]).updateNotificationAuthorizationStatus(closure_0);
          const obj = callback(table[4]);
        }
      });
      if (null != _alert) {
        if (callback != null) {
          callback(_alert);
        }
      }
    });
  },
  showNotification() {
    return callback(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp4) {
          c0 = tmp;
          throw tmp4;
        }
      }
    })();
  },
  shouldRequestNotification: true,
  playNotificationSound(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    require("../../modules/sound_playback/SoundUtils.tsx") /* createSoundForPack */.playSound(arg0, num, undefined, arg2);
  }
};