// === Module 14794: _handleEnableSystemNotification ===

// Module 14794 (_handleEnableSystemNotification)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { NotificationAuthorizationStatus as closure_6 } from "NativePermissionStatus" /* 4839 */;
import EventActionType from "EventActionType" /* 11582 */;
import "createToggle";

require = fn;
function _handleEnableSystemNotification() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            closure_0 = tmp3;
            closure_0 = undefined;
            const NativePermissionManager = closure_1_4.NativePermissionManager;
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          if (closure_0 === constants2.UNDETERMINED) {
            let obj3 = callback(11590);
            const permission = obj3.requestPermission((permission_granted) => {
              table(table[7]);
              const obj = { action_type: constants2.ALLOW_TO_REQUEST, action_location: constants3.NOTIFICATION_SETTING, permission_granted };
              obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
              if (!permission_granted) {
                const result = table(table[8]).openNotificationSettings();
                const tmpResult = table(table[8]);
              }
            });
          } else {
            obj = callback(698);
            let num3 = 0;
            if (closure_0 === constants2.AUTHORIZED) {
              num3 = 1;
            }
            obj3 = { setting_type: "os", current_status: null };
            obj3[1] = num3;
            obj.track(constants.NOTIFICATION_SETTINGS_CLICKED, obj3);
            obj2 = callback(11579);
            let result = obj2.openNotificationSettings();
          }
          c3 = 3;
        }
      } catch (tmp25) {
        c3 = tmp;
        throw tmp25;
      }
    }
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ EventActionType: error, EventActionLocation: closure_8 } = EventActionType);
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nl2Dqx);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    const self = this;
    const apply = _handleEnableSystemNotification.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default createToggle;