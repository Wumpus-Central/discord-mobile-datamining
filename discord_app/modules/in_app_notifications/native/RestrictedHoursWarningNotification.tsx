// === Module 12543: RestrictedHoursWarningNotification ===

// Module 12543 (RestrictedHoursWarningNotification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 12478 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12479 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let notification;

let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const lineClamp = InAppNotificationConstants.NOTIFICATION_PREVIEW_LINE_CLAMP;
({ InAppNotificationTypes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let obj = { iconContainer: size };
size = { width: 48, height: 48, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((notification) => {
  let first;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp9;
  let type;
  let obj = type(576);
  const cResult = obj.c(15);
  notification = notification.notification;
  const tmp4 = closure_9();
  type = notification.type;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const ThemeDarkIcon = tmp(12544).ThemeDarkIcon;
    const tmp8 = <ThemeDarkIcon size="sm" color={nativeDefault.colors.WHITE} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconContainer) {
    const tmp12 = <View style={tmp4.iconContainer}>{first}</View>;
    cResult[1] = tmp4.iconContainer;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== notification.title) {
    let obj4 = { type: "simple", text: notification.title };
    cResult[3] = notification.title;
    cResult[4] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== type) {
    const fn = function b() {
      if (type === metroRequire.RESTRICTED_SCHEDULE_UPDATED) {
        const obj = ModalActionCreatorsDefault;
        obj.popAll();
        const obj2 = InAppNotificationActionCreatorsDefault;
        obj2.clearNotification();
      }
      const obj3 = openUserSettings;
      const obj4 = { screen: metroImportDefault.FAMILY_CENTER };
      obj3.openUserSettings(obj4);
    };
    cResult[5] = type;
    cResult[6] = fn;
    tmp14 = fn;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== notification.subtitle) {
    const tmp18 = jsx(type(4886).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle });
    cResult[7] = notification.subtitle;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] === tmp13) {
    if (cResult[10] === tmp9) {
      if (cResult[11] === notification) {
        if (cResult[12] === tmp14) {
          let tmp19;
          if (cResult[13] === tmp15) {
            tmp19 = cResult[14];
          }
          return tmp19;
        }
      }
    }
  }
  const tmp20 = jsx(type(12516).NotificationPressable, { icon: tmp9, header: tmp13, children: tmp15, onPress: tmp14, notification });
  cResult[9] = tmp13;
  cResult[10] = tmp9;
  cResult[11] = notification;
  cResult[12] = tmp14;
  cResult[13] = tmp15;
  cResult[14] = tmp20;
  tmp19 = tmp20;
}) : ((notification) => {
  notification = notification.notification;
  const type = notification.type;
  let obj2 = { size: "sm", color: type(587).colors.WHITE };
  const ThemeDarkIcon = notification(12544).ThemeDarkIcon;
  const items = [notification.title];
  const items1 = [type];
  const tmp = <View style={closure_9().iconContainer}>{null}</View>;
  const memo = react.useMemo(() => ({ type: "simple", text: notification.title }), items);
  const callback = react.useCallback(() => {
    if (type === metroRequire.RESTRICTED_SCHEDULE_UPDATED) {
      const obj = ModalActionCreatorsDefault;
      obj.popAll();
      const obj2 = InAppNotificationActionCreatorsDefault;
      obj2.clearNotification();
    }
    const obj3 = openUserSettings;
    const obj4 = { screen: metroImportDefault.FAMILY_CENTER };
    obj3.openUserSettings(obj4);
  }, items1);
  const NotificationPressable = notification(12516).NotificationPressable;
  let obj4 = { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle };
  return <NotificationPressable icon={tmp} header={memo} onPress={callback} notification={notification}>{null}</NotificationPressable>;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;