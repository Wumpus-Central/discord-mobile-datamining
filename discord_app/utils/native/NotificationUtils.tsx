// === Module 11590: ? ===

// Module 11590
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import createSoundForPack from "createSoundForPack" /* 10040 */;
import NativeModulesDefault from "NativeModules" /* 11579 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import { PermissionStateType } from "set" /* 11578 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
let result = require("obj132").fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default {
  hasPermission() {
    return NativeModulesDefault.requestPermissions((badge) => {
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
    let result = _require(11584).setPushPermissionState(PermissionStateType.REQUESTED);
    let obj = _require(11584);
    expandEventPropertiesDefault.track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const permissions = NativeModulesDefault.requestPermissions();
    permissions.then((result) => {
      ({ alert: _alert, badge } = result);
      if (!_alert) {
        _alert = result.sound;
      }
      if (!_alert) {
        _alert = badge;
      }
      let str = "denied";
      if (_alert) {
        str = "accepted";
      }
      expandEventPropertiesDefault.track(AnalyticEvents.PERMISSIONS_ACKED, { type: "notification", action: str });
      const NativePermissionManager = NativeModules.NativePermissionManager;
      const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          result = callback(table[4]).updateNotificationAuthorizationStatus(result);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
    createSoundForPack.playSound(arg0, num, undefined, arg2);
  }
};