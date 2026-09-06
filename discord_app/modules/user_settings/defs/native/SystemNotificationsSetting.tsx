// discord_app/modules/user_settings/defs/native/SystemNotificationsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_9 = async function _handleEnableSystemNotification(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp3;
          closure_128_0 = undefined;
          const NativePermissionManager = NativeModules.NativePermissionManager;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value;
        if (closure_128_0 === closure_129_6.UNDETERMINED) {
          let obj3 = closure_129_1(closure_129_2[6]);
          const permission = obj3.requestPermission((permission_granted) => {
            closure_1_1(dependencyMap[7]);
            const obj = {
              action_type: constants2.ALLOW_TO_REQUEST,
              action_location: constants3.NOTIFICATION_SETTING,
              permission_granted,
            };
            obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
            if (!permission_granted) {
              const result = closure_1_1(dependencyMap[8]).openNotificationSettings();
              const tmpResult = closure_1_1(dependencyMap[8]);
            }
          });
        } else {
          obj = closure_129_1(closure_129_2[7]);
          let num3 = 0;
          if (closure_128_0 === closure_129_6.AUTHORIZED) {
            num3 = 1;
          }
          obj3 = { setting_type: "os", current_status: num3 };
          obj.track(closure_129_5.NOTIFICATION_SETTINGS_CLICKED, obj3);
          obj2 = closure_129_1(closure_129_2[8]);
          let result = obj2.openNotificationSettings();
        }
        c3 = 3;
      }
    } catch (tmp25) {
      c3 = tmp;
      throw tmp25;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_6 = fn(4770).NotificationAuthorizationStatus;
const NotificationPermissionConstants = fn(12410);
({ EventActionType: closure_7, EventActionLocation: closure_8 } = NotificationPermissionConstants);
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nl2Dqx);
  },
  parent: fn(7975).MobileUserSettings.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default SettingBuilders;
