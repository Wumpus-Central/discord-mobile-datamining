// discord_app/modules/notification_center/native/NotificationCenterPermissionNudge.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import apexExperimentDefault from "../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import EventActionType from "../../nuf/native/components/notification/NotificationPermissionConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useSelectedDismissibleContent } from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { _requestPushNotificationPermission } from "../../nuf/native/NotificationPermissionUtil.tsx";

const require = arg1;
function NotificationCenterBannerImpl(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  const tmp = callback6();
  callback3(() => {
    let obj = callback(698);
    obj = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  }, []);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "md", color: ThemesDefault.colors.ICON_STRONG };
  obj[1] = callback4(onDismiss(9887).BellSlashIcon, obj);
  const items = [callback4(View, obj), , ];
  obj1 = { style: tmp.contentContainer, children: null };
  const obj2 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = onDismiss(1236).intl;
  obj2[2] = intl.string(onDismiss(1236).t.G6YBna);
  const items1 = [callback4(onDismiss(4376).Text, obj2), , ];
  const obj3 = { variant: "text-md/medium", color: "text-muted", style: { marginTop: ThemesDefault.space.PX_4 }, children: null };
  const intl2 = onDismiss(1236).intl;
  obj3[3] = intl2.string(onDismiss(1236).t["9CoPDE"]);
  items1[1] = callback4(onDismiss(4376).Text, obj3);
  const obj5 = { style: tmp.ctaButton, children: null };
  const obj6 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = onDismiss(1236).intl;
  obj6[2] = intl3.string(onDismiss(1236).t.a4bgO0);
  obj6[3] = function onPress() {
    let obj = onDismiss(11975);
    const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_8);
    obj = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    callback(698).track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  };
  obj5[1] = callback4(onDismiss(4815).Button, obj6);
  items1[2] = callback4(View, obj5);
  obj1[1] = items1;
  items[1] = callback5(View, obj1);
  const obj7 = {
    onPress() {
      let obj = closure_1_1(closure_1_2[9]);
      obj = { action: closure_1_12.DISMISS, prompt_type: closure_1_13.NOTIFICATION_CENTER_BANNER };
      obj.track(closure_1_7.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl4 = onDismiss(1236).intl;
  obj7[3] = intl4.string(onDismiss(1236).t.WAI6xu);
  obj7[4] = callback4(onDismiss(5432).XSmallIcon, { size: "sm", color: "icon-strong" });
  items[2] = callback4(onDismiss(4949).PressableHighlight, obj7);
  obj[1] = items;
  return callback5(View, obj);
}
({ useCallback: c4, useEffect: c5 } = noop);
({ AnalyticEvents: error, NOOP: closure_8 } = ME);
({ EventActionType: c10, EventActionLocation: unpackModuleId, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: map1 } = EventActionType);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: null, contentContainer: null, iconContainer: null, ctaButton: null };
createCacheKey = { flexDirection: "row", paddingLeft: 24, paddingRight: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", borderBottomWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, gap: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { width: 48, height: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
let obj1 = { width: 48, height: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { alignSelf: "flex-start", marginTop: ThemesDefault.space.PX_12 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "flex-start", marginTop: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  let obj = apexExperimentDefault;
  const canSeePushNotificationNudge = require("../../nuf/native/NotificationPermissionUtil.tsx").useCanSeePushNotificationNudge();
  const obj2 = _requestPushNotificationPermission;
  let prop = null;
  if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp2(1377).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp5 = callback(require("../../dismissible_content/hooks/useSelectedDismissibleContent.tsx").useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 604800000 }), 2);
  _require = tmp6;
  const items = [tmp5[1]];
  const obj3 = useSelectedDismissibleContent;
  let tmp8 = null;
  if (tmp5[0] === require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    obj = { onDismiss: null };
    obj[0] = tmp7;
    tmp8 = callback4(NotificationCenterBannerImpl, obj);
  }
  return tmp8;
};