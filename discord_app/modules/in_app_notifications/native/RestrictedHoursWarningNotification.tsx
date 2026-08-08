// discord_app/modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { NOTIFICATION_PREVIEW_LINE_CLAMP as closure_5 } from "set";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ InAppNotificationTypes: closure_6, UserSettingsSections: error } = ME);
let obj = { iconContainer: null };
obj = { width: 48, height: 48, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center" };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  let type;
  type = notification.type;
  let obj = { style: callback().iconContainer, children: null };
  obj = { size: "sm", color: null };
  obj[1] = type(712).colors.WHITE;
  obj[1] = jsx(notification(10204).ThemeDarkIcon, { size: "sm", color: null });
  const items = [notification.title];
  const items1 = [type];
  const memo = importAllResult.useMemo(() => ({ type: "simple", text: notification.title }), items);
  callback = importAllResult.useCallback(() => {
    if (type === outer1_6.RESTRICTED_SCHEDULE_UPDATED) {
      let obj = type(outer1_2[8]);
      obj.popAll();
      type(outer1_2[9]).clearNotification();
      const obj2 = type(outer1_2[9]);
    }
    obj = { screen: outer1_7.FAMILY_CENTER };
    notification(outer1_2[10]).openUserSettings(obj);
  }, items1);
  obj = { icon: <View size="sm" color={null} />, header: memo, children: null, onPress: null, notification: null };
  obj[2] = jsx(notification(4299).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp: closure_5, children: notification.subtitle });
  obj[3] = callback;
  obj[4] = notification;
  return jsx(notification(9851).NotificationPressable, { icon: <View size="sm" color={null} />, header: memo, children: null, onPress: null, notification: null });
});
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;