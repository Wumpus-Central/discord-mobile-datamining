// === Module 11473: RestrictedHoursWarningNotification ===

// Module 11473 (RestrictedHoursWarningNotification)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import openUserSettings from "openUserSettings" /* 7496 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10246 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const lineClamp = fn(10245).NOTIFICATION_PREVIEW_LINE_CLAMP;
const Constants = fn(1074);
({ InAppNotificationTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj = { iconContainer: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default noop.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const type = notification.type;
  let obj = { style: closure_9().iconContainer, children: jsx(notification(11474).ThemeDarkIcon, { size: "sm", color: type(576).colors.WHITE }) };
  const items = [notification.title];
  let obj2 = { size: "sm", color: type(576).colors.WHITE };
  const items1 = [type];
  const memo = noop.useMemo(() => ({ type: "simple", text: notification.title }), items);
  const callback = noop.useCallback(() => {
    if (type === constants.RESTRICTED_SCHEDULE_UPDATED) {
      ModalActionCreatorsDefault.popAll();
      InAppNotificationActionCreatorsDefault.clearNotification();
    }
    openUserSettings.openUserSettings({ screen: constants2.FAMILY_CENTER });
    const obj4 = { screen: constants2.FAMILY_CENTER };
  }, items1);
  let obj3 = { icon: <View style={closure_9().iconContainer}>{jsx(notification(11474).ThemeDarkIcon, { size: "sm", color: type(576).colors.WHITE })}</View>, header: memo, children: jsx(notification(4636).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification };
  return jsx(notification(10316).NotificationPressable, { icon: <View style={closure_9().iconContainer}>{jsx(notification(11474).ThemeDarkIcon, { size: "sm", color: type(576).colors.WHITE })}</View>, header: memo, children: jsx(notification(4636).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification });
});