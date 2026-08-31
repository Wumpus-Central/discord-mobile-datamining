// discord_app/modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOTIFICATION_PREVIEW_LINE_CLAMP as closure_5 } from "InAppNotificationConstants.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  obj[1] = jsx(notification(10919).ThemeDarkIcon, { size: "sm", color: type(712).colors.WHITE });
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
  obj = { icon: <View size="sm" color={type(712).colors.WHITE} />, header: memo, children: jsx(notification(4444).Text, obj1), onPress: callback, notification };
  return jsx(notification(10216).NotificationPressable, { icon: <View size="sm" color={type(712).colors.WHITE} />, header: memo, children: jsx(notification(4444).Text, obj1), onPress: callback, notification });
});
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;