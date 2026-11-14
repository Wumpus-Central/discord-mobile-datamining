// === Module 11944: RestrictedHoursWarningNotification ===

// Module 11944 (RestrictedHoursWarningNotification)
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 11027 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const lineClamp = fn(11026).NOTIFICATION_PREVIEW_LINE_CLAMP;
const Constants = fn(1072);
({ InAppNotificationTypes: closure_6, UserSettingsSections: metroImportDefault } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = { iconContainer: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default noop.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const type = notification.type;
  let obj = { style: closure_9().iconContainer, children: jsx(notification(11945).ThemeDarkIcon, { size: "sm", color: type(575).colors.WHITE }) };
  items = [notification.title];
  let obj2 = { size: "sm", color: type(575).colors.WHITE };
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
  let obj3 = { icon: <View style={closure_9().iconContainer}>{jsx(notification(11945).ThemeDarkIcon, { size: "sm", color: type(575).colors.WHITE })}</View>, header: memo, children: jsx(notification(5929).Text, { variant: "heading-sm/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification };
  return jsx(notification(11087).NotificationPressable, { icon: <View style={closure_9().iconContainer}>{jsx(notification(11945).ThemeDarkIcon, { size: "sm", color: type(575).colors.WHITE })}</View>, header: memo, children: jsx(notification(5929).Text, { variant: "heading-sm/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification });
});