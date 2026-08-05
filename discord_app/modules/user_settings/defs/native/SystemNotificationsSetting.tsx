// discord_app/modules/user_settings/defs/native/SystemNotificationsSetting.tsx
import closure_3 from "EventActionType";
import { NativeModules } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { NotificationAuthorizationStatus as closure_6 } from "NativePermissionStatus";
import EventActionType from "EventActionType";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let error;
let metroImportAll;
const require = arg1;
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp3;
            closure_0 = undefined;
            const NativePermissionManager = outer1_4.NativePermissionManager;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
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
            let obj3 = callback(11699);
            const permission = obj3.requestPermission((permission_granted) => {
              let obj = tmp2(table[7]);
              obj = { action_type: constants2.ALLOW_TO_REQUEST, action_location: constants3.NOTIFICATION_SETTING, permission_granted };
              obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
              if (!permission_granted) {
                const result = tmp2(tmp2[8]).openNotificationSettings();
                const tmpResult = tmp2(tmp2[8]);
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
            obj2 = callback(10668);
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
  const _handleEnableSystemNotification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ EventActionType: error, EventActionLocation: metroImportAll } = EventActionType);
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.nl2Dqx);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
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
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default createToggle;