// === Module 15312: SystemNotificationsSetting ===

// Module 15312 (SystemNotificationsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import react_nativeDefault from "react-native" /* 7282 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12053 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let c2, c3;

let metroImportDefault;
let metroRequire;
let obj = function _handleEnableSystemNotification() {
  obj = _asyncToGenerator(async () => {
    let obj5;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj7 = { value: obj5.getNotificationAuthorizationStatus(), done: false };
            obj5 = react_nativeDefault;
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
          closure_0 = value;
          if (closure_0 === closure_129_5.UNDETERMINED) {
            const obj3 = closure_129_1(closure_129_2[6]);
            const permission = obj3.requestPermission((permission_granted) => {
              obj = closure_1_1(closure_1_2[7]);
              const obj2 = { action_type: constants2.ALLOW_TO_REQUEST, action_location: constants3.NOTIFICATION_SETTING, permission_granted };
              obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
              if (!permission_granted) {
                const tmpResult = closure_1_1(closure_1_2[8]);
                const result = tmpResult.openNotificationSettings();
              }
            });
          } else {
            let num3 = 0;
            const track = closure_129_1(closure_129_2[7]).track;
            const NOTIFICATION_SETTINGS_CLICKED = closure_129_4.NOTIFICATION_SETTINGS_CLICKED;
            const tmp10 = closure_129_1(closure_129_2[7]);
            if (closure_0 === closure_129_5.AUTHORIZED) {
              num3 = 1;
            }
            obj = { setting_type: "os", current_status: num3 };
            const trackResult = track(NOTIFICATION_SETTINGS_CLICKED, obj);
            let obj2 = closure_129_1(closure_129_2[8]);
            let result = obj2.openNotificationSettings();
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = NativePermissionConstants.NotificationAuthorizationStatus;
({ EventActionType: metroRequire, EventActionLocation: metroImportDefault } = NotificationPermissionConstants);
obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.nl2Dqx);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    return obj(...arguments);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default pressable;