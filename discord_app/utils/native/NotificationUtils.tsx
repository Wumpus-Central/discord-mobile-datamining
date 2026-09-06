// discord_app/utils/native/NotificationUtils.tsx
import AnalyticsUtilsDefault from "../AnalyticsUtils.tsx";
import PushNotificationDefault from "../../lib/pushnotification/PushNotification.tsx";
import SoundUtils from "../../modules/sound_playback/SoundUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const NativeModules = fn(17).NativeModules;
const PermissionStateType = fn(12409).PermissionStateType;
const AnalyticEvents = fn(1074).AnalyticEvents;
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
      const NativePermissionManager = NativeModules.NativePermissionManager;
      const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          result = closure_1_0(dependencyMap[4]).updateNotificationAuthorizationStatus(result);
          const obj = closure_1_0(dependencyMap[4]);
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
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
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
    SoundUtils.playSound(arg0, num, undefined, arg2);
  },
};
