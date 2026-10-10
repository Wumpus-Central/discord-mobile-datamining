// === Module 15764: SystemNotificationsSetting ===

// Module 15764 (SystemNotificationsSetting)
import util from "util" /* 1126 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7505 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_8 = async function _handleEnableSystemNotification() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp3;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj7 = { value: NativePermissionManagerModuleDefault.getNotificationAuthorizationStatus(), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_128_0 = value;
        if (closure_128_0 === closure_129_5.UNDETERMINED) {
          const permission = closure_129_1(closure_129_2[6]).requestPermission((permission_granted) => {
            closure_1_1(dependencyMap[7]).track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: constants2.ALLOW_TO_REQUEST, action_location: constants3.NOTIFICATION_SETTING, permission_granted });
            if (!permission_granted) {
              const result = closure_1_1(dependencyMap[8]).openNotificationSettings();
              const tmpResult = closure_1_1(dependencyMap[8]);
            }
            const obj = closure_1_1(dependencyMap[7]);
            const obj2 = { action_type: constants2.ALLOW_TO_REQUEST, action_location: constants3.NOTIFICATION_SETTING, permission_granted };
          });
          const obj4 = closure_129_1(closure_129_2[6]);
        } else {
          let num3 = 0;
          if (closure_128_0 === closure_129_5.AUTHORIZED) {
            num3 = 1;
          }
          const obj9 = { setting_type: "os", current_status: num3 };
          closure_129_1(closure_129_2[7]).track(closure_129_4.NOTIFICATION_SETTINGS_CLICKED, obj9);
          let obj = closure_129_1(closure_129_2[7]);
          let result = closure_129_1(closure_129_2[8]).openNotificationSettings();
          const obj3 = closure_129_1(closure_129_2[8]);
        }
        c3 = 3;
      }
    } catch (tmp26) {
      c3 = tmp;
      throw tmp26;
    }
  }
};
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_5 = fn(7482).NotificationAuthorizationStatus;
const NotificationPermissionConstants = fn(12122);
({ EventActionType: metroRequire, EventActionLocation: closure_7 } = NotificationPermissionConstants);
const SettingBuilders = fn(10663);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nl2Dqx);
  },
  parent: fn(7992).MobileUserSettings.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  withArrow: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default pressable;