// discord_app/modules/notification_center/native/NotificationCenterPermissionNudge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ContextualOptInNudgeHoldoutExperimentDefault from "../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

const require = fn;
function NotificationCenterBannerImpl(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_16();
  closure_5(() => {
    AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
      action: constants4.IMPRESSION,
      prompt_type: constants5.NOTIFICATION_CENTER_BANNER,
    });
  }, []);
  let obj = { style: tmp.container, children: null };
  const obj2 = {
    style: tmp.iconContainer,
    children: closure_14(onDismiss(10409).BellSlashIcon, { size: "md", color: nativeDefault.colors.ICON_STRONG }),
  };
  const items = [closure_14(View, obj2), ,];
  const obj4 = { style: tmp.contentContainer, children: null };
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = onDismiss(1115).intl;
  obj5.children = intl.string(onDismiss(1115).t.G6YBna);
  const items1 = [closure_14(onDismiss(4752).Text, obj5), ,];
  const obj6 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
  const obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  obj6.style = { marginTop: nativeDefault.space.PX_4 };
  const intl2 = onDismiss(1115).intl;
  obj6.children = intl2.string(onDismiss(1115).t["9CoPDE"]);
  items1[1] = closure_14(onDismiss(4752).Text, obj6);
  const obj8 = { style: tmp.ctaButton, children: null };
  const obj9 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = onDismiss(1115).intl;
  obj9.text = intl3.string(onDismiss(1115).t.a4bgO0);
  obj9.onPress = function onPress() {
    const pushNotificationPermission = onDismiss(12663).requestPushNotificationPermission(
      constants2.ALLOW_TO_REQUEST,
      constants3.NOTIFICATION_CENTER,
      closure_1_8,
    );
    const obj = onDismiss(12663);
    AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
      action: constants4.ACCEPT,
      prompt_type: constants5.NOTIFICATION_CENTER_BANNER,
    });
  };
  obj8.children = closure_14(onDismiss(5186).Button, obj9);
  items1[2] = closure_14(View, obj8);
  obj4.children = items1;
  items[1] = closure_15(View, obj4);
  const obj10 = {
    onPress() {
      AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
        action: constants2.DISMISS,
        prompt_type: constants3.NOTIFICATION_CENTER_BANNER,
      });
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl4 = onDismiss(1115).intl;
  obj10.accessibilityLabel = intl4.string(onDismiss(1115).t.WAI6xu);
  obj10.children = closure_14(onDismiss(5892).XSmallIcon, { size: "sm", color: "icon-strong" });
  items[2] = closure_14(onDismiss(5334).PressableHighlight, obj10);
  obj.children = items;
  return closure_15(View, obj);
}
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, NOOP: closure_8 } = Constants);
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const NotificationPermissionConstants = fn(12662);
({
  EventActionType: c10,
  EventActionLocation: closure_11,
  NotificationNudgeAnalyticsAction: closure_12,
  NotificationNudgeSurface: map1,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: nativeDefault.space.PX_12,
    paddingVertical: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    gap: 16,
  },
  contentContainer: { flex: 1 },
  iconContainer: null,
  ctaButton: null,
};
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  alignItems: "center",
  justifyContent: "center",
};
obj2.iconContainer = size;
let obj3 = {
  flexDirection: "row",
  paddingLeft: 24,
  paddingRight: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "flex-start",
  borderBottomWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 16,
};
obj2.ctaButton = { alignSelf: "flex-start", marginTop: nativeDefault.space.PX_12 };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  const obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const canSeePushNotificationNudge = require("NotificationPermissionUtil").useCanSeePushNotificationNudge();
  const obj2 = require("NotificationPermissionUtil");
  let prop = null;
  if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp2(2027).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp5 = _slicedToArray(
    require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent(prop, {
      cooldownDurationMs: 604800000,
    }),
    2,
  );
  _require = tmp6;
  const items = [tmp5[1]];
  const obj3 = require("useSelectedDismissibleContent");
  let tmp8 = null;
  if (tmp5[0] === require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    const obj4 = { onDismiss: tmp7 };
    tmp8 = closure_14(NotificationCenterBannerImpl, obj4);
  }
  return tmp8;
}
