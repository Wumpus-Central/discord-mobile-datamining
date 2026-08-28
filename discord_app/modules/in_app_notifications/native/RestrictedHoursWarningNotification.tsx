// === Module 10894: ? ===

// Module 10894
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { NOTIFICATION_PREVIEW_LINE_CLAMP as closure_5 } from "set" /* 10116 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c3 = importAllResult;
({ InAppNotificationTypes: closure_6, UserSettingsSections: error } = ME);
let obj = { iconContainer: null };
obj = { width: 48, height: 48, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  let type;
  type = notification.type;
  let obj = { style: callback().iconContainer, children: null };
  obj = { size: "sm", color: type(712).colors.WHITE };
  obj[1] = jsx(notification(10895).ThemeDarkIcon, { size: "sm", color: type(712).colors.WHITE });
  const items = [notification.title];
  const items1 = [type];
  const memo = importAllResult.useMemo(() => ({ type: "simple", text: notification.title }), items);
  callback = importAllResult.useCallback(() => {
    if (type === closure_1_6.RESTRICTED_SCHEDULE_UPDATED) {
      let obj = type(closure_1_2[8]);
      obj.popAll();
      type(closure_1_2[9]).clearNotification();
      const obj2 = type(closure_1_2[9]);
    }
    obj = { screen: closure_1_7.FAMILY_CENTER };
    notification(closure_1_2[10]).openUserSettings(obj);
  }, items1);
  obj = { icon: <View size="sm" color={type(712).colors.WHITE} />, header: memo, children: jsx(notification(4442).Text, obj1), onPress: callback, notification };
  return jsx(notification(10193).NotificationPressable, { icon: <View size="sm" color={type(712).colors.WHITE} />, header: memo, children: jsx(notification(4442).Text, obj1), onPress: callback, notification });
});
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;