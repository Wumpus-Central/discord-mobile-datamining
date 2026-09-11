// === Module 11413: RestrictedHoursWarningNotification ===

// Module 11413 (RestrictedHoursWarningNotification)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import openUserSettings from "openUserSettings" /* 7455 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10186 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const lineClamp = fn(10185).NOTIFICATION_PREVIEW_LINE_CLAMP;
const Constants = fn(1074);
({ InAppNotificationTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let obj = { iconContainer: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default noop.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const type = notification.type;
  let obj = { style: closure_9().iconContainer, children: null };
  obj = { size: "sm", color: type(576).colors.WHITE };
  obj.children = jsx(notification(11414).ThemeDarkIcon, { size: "sm", color: type(576).colors.WHITE });
  const items = [notification.title];
  const items1 = [type];
  const memo = noop.useMemo(() => ({ type: "simple", text: notification.title }), items);
  const callback = noop.useCallback(() => {
    if (type === constants.RESTRICTED_SCHEDULE_UPDATED) {
      let obj = ModalActionCreatorsDefault;
      obj.popAll();
      InAppNotificationActionCreatorsDefault.clearNotification();
    }
    obj = { screen: constants2.FAMILY_CENTER };
    openUserSettings.openUserSettings(obj);
  }, items1);
  obj = { icon: <View size="sm" color={type(576).colors.WHITE} />, header: memo, children: jsx(notification(4602).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification };
  return jsx(notification(10259).NotificationPressable, { icon: <View size="sm" color={type(576).colors.WHITE} />, header: memo, children: jsx(notification(4602).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification });
});