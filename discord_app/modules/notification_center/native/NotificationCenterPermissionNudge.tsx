// === Module 16410: NotificationCenterPermissionNudge ===

// Module 16410 (NotificationCenterPermissionNudge)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15481 */;
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
function NotificationCenterBannerImpl(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_16();
  closure_5(() => {
    const obj = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  }, []);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  obj.children = closure_14(onDismiss(9059).BellSlashIcon, obj);
  const items = [closure_14(View, obj), , ];
  const obj1 = { style: tmp.contentContainer, children: null };
  const obj2 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = onDismiss(1114).intl;
  obj2.children = intl.string(onDismiss(1114).t.G6YBna);
  const items1 = [closure_14(onDismiss(4556).Text, obj2), , ];
  const obj3 = { variant: "text-md/medium", color: "text-muted", style: { marginTop: nativeDefault.space.PX_4 }, children: null };
  const intl2 = onDismiss(1114).intl;
  obj3.children = intl2.string(onDismiss(1114).t["9CoPDE"]);
  items1[1] = closure_14(onDismiss(4556).Text, obj3);
  const obj5 = { style: tmp.ctaButton, children: null };
  const obj6 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = onDismiss(1114).intl;
  obj6.text = intl3.string(onDismiss(1114).t.a4bgO0);
  obj6.onPress = function onPress() {
    let obj = onDismiss(12411);
    const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_1_8);
    obj = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  };
  obj5.children = closure_14(onDismiss(4975).Button, obj6);
  items1[2] = closure_14(View, obj5);
  obj1.children = items1;
  items[1] = closure_15(View, obj1);
  const obj7 = {
    onPress() {
      const obj = { action: constants2.DISMISS, prompt_type: constants3.NOTIFICATION_CENTER_BANNER };
      obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl4 = onDismiss(1114).intl;
  obj7.accessibilityLabel = intl4.string(onDismiss(1114).t.WAI6xu);
  obj7.children = closure_14(onDismiss(5680).XSmallIcon, { size: "sm", color: "icon-strong" });
  items[2] = closure_14(onDismiss(5123).PressableHighlight, obj7);
  obj.children = items;
  return closure_15(View, obj);
}
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, NOOP: closure_8 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const NotificationPermissionConstants = fn(12410);
({ EventActionType: c10, EventActionLocation: closure_11, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: map1 } = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: null, contentContainer: null, iconContainer: null, ctaButton: null };
createStyles = { flexDirection: "row", paddingLeft: 24, paddingRight: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: 16 };
createStyles.container = createStyles;
createStyles.contentContainer = { flex: 1 };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
createStyles.iconContainer = size;
createStyles.ctaButton = { alignSelf: "flex-start", marginTop: nativeDefault.space.PX_12 };
let closure_16 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  let obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const canSeePushNotificationNudge = require("NotificationPermissionUtil").useCanSeePushNotificationNudge();
  const obj2 = require("NotificationPermissionUtil");
  let prop = null;
  if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp2(1943).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp5 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 604800000 }), 2);
  _require = tmp6;
  const items = [tmp5[1]];
  const obj3 = require("useSelectedDismissibleContent");
  let tmp8 = null;
  if (tmp5[0] === require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    obj = { onDismiss: tmp7 };
    tmp8 = closure_14(NotificationCenterBannerImpl, obj);
  }
  return tmp8;
};