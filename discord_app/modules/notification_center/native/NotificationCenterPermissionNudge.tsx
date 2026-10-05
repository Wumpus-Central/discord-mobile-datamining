// === Module 16352: NotificationCenterPermissionNudge ===

// Module 16352 (NotificationCenterPermissionNudge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15306 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12053 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onDismiss;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let unpackModuleId;
({ useCallback: closure_4, useEffect: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, NOOP: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ EventActionType: c10, EventActionLocation: unpackModuleId, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: map1 } = NotificationPermissionConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let c16 = 604800000;
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flex: 1 }, iconContainer: size, ctaButton: obj3 };
obj2 = { flexDirection: "row", paddingLeft: 24, paddingRight: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: 16 };
createStyles = createStyles.createStyles;
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
obj3 = { alignSelf: "flex-start", marginTop: nativeDefault.space.PX_12 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((onDismiss) => {
  let constants4;
  let constants5;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj6;
  let tmp10;
  let tmp14;
  let tmp18;
  let tmp21;
  let tmp25;
  let tmp28;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = onDismiss(576);
  const cResult = obj.c(25);
  onDismiss = onDismiss.onDismiss;
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
      obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  closure_5(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      const obj = onDismiss(dependencyMap[12]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_1_8);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
      obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onDismiss) {
    const fn3 = function f() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { action: constants4.DISMISS, prompt_type: map1.NOTIFICATION_CENTER_BANNER };
      obj.track(metroImportDefault.CONTEXTUAL_REMINDER_ACTION, obj2);
      onDismiss();
    };
    cResult[3] = onDismiss;
    cResult[4] = fn3;
    tmp9 = fn3;
  } else {
    tmp9 = cResult[4];
  }
  const container = tmp4.container;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
    const BellSlashIcon = tmp(9813).BellSlashIcon;
    const tmp13 = closure_14(BellSlashIcon, obj2);
    cResult[5] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== tmp4.iconContainer) {
    let obj3 = { style: tmp4.iconContainer, children: tmp10 };
    const tmp17 = closure_14(View, obj3);
    cResult[6] = tmp4.iconContainer;
    cResult[7] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: intl.string(onDismiss(1126).t.G6YBna) };
    const Text = tmp(4886).Text;
    intl = tmp(1126).intl;
    const tmp20 = closure_14(Text, obj4);
    cResult[8] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-md/medium", color: "text-muted", style: obj6, children: intl2.string(onDismiss(1126).t["9CoPDE"]) };
    obj6 = { marginTop: nativeDefault.space.PX_4 };
    const Text2 = tmp(4886).Text;
    intl2 = tmp(1126).intl;
    const tmp24 = closure_14(Text2, obj5);
    cResult[9] = tmp24;
    tmp21 = tmp24;
  } else {
    tmp21 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { variant: "primary", size: "md", text: intl3.string(onDismiss(1126).t.a4bgO0), onPress: tmp8 };
    const Button = tmp(5594).Button;
    intl3 = tmp(1126).intl;
    const tmp27 = closure_14(Button, obj7);
    cResult[10] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] !== tmp4.ctaButton) {
    const obj8 = { style: tmp4.ctaButton, children: tmp25 };
    const tmp31 = closure_14(View, obj8);
    cResult[11] = tmp4.ctaButton;
    cResult[12] = tmp31;
    tmp28 = tmp31;
  } else {
    tmp28 = cResult[12];
  }
  if (cResult[13] === tmp4.contentContainer) {
    let tmp32;
    let tmp35;
    let tmp34;
    let tmp39;
    if (cResult[14] === tmp28) {
      tmp32 = cResult[15];
    }
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult = intl4.string(onDismiss(1126).t.WAI6xu);
      const tmp38 = closure_14(onDismiss(6017).XSmallIcon, { size: "sm", color: "icon-strong" });
      cResult[16] = stringResult;
      cResult[17] = tmp38;
      tmp35 = tmp38;
      tmp34 = stringResult;
    } else {
      tmp34 = cResult[16];
      tmp35 = cResult[17];
    }
    if (cResult[18] !== tmp9) {
      const obj9 = { onPress: tmp9, hitSlop: 8, accessibilityRole: "button", accessibilityLabel: tmp34, children: tmp35 };
      const tmp41 = closure_14(onDismiss(5909).PressableHighlight, obj9);
      cResult[18] = tmp9;
      cResult[19] = tmp41;
      tmp39 = tmp41;
    } else {
      tmp39 = cResult[19];
    }
    if (cResult[20] === tmp4.container) {
      if (cResult[21] === tmp32) {
        if (cResult[22] === tmp39) {
          let tmp42;
          if (cResult[23] === tmp14) {
            tmp42 = cResult[24];
          }
          return tmp42;
        }
      }
    }
    const obj10 = { style: container, children: items1 };
    items1 = [tmp14, tmp32, tmp39];
    const tmp45 = closure_15(View, obj10);
    cResult[20] = tmp4.container;
    cResult[21] = tmp32;
    cResult[22] = tmp39;
    cResult[23] = tmp14;
    cResult[24] = tmp45;
    tmp42 = tmp45;
  }
  const obj11 = { style: tmp4.contentContainer, children: items2 };
  items2 = [tmp18, tmp21, tmp28];
  const tmp33 = closure_15(View, obj11);
  cResult[13] = tmp4.contentContainer;
  cResult[14] = tmp28;
  cResult[15] = tmp33;
  tmp32 = tmp33;
}) : ((onDismiss) => {
  let BellSlashIcon;
  let Button;
  let constants4;
  let constants5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj3;
  let obj7;
  let obj9;
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_17();
  closure_5(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
  }, []);
  let obj = { style: tmp.container, children: items };
  let obj2 = { style: tmp.iconContainer, children: closure_14(BellSlashIcon, obj3) };
  obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  BellSlashIcon = onDismiss(9813).BellSlashIcon;
  items = [closure_14(View, obj2), , ];
  const obj4 = { style: tmp.contentContainer, children: items1 };
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: intl.string(onDismiss(1126).t.G6YBna) };
  const Text = onDismiss(4886).Text;
  intl = onDismiss(1126).intl;
  items1 = [closure_14(Text, obj5), , ];
  const obj6 = { variant: "text-md/medium", color: "text-muted", style: obj7, children: intl2.string(onDismiss(1126).t["9CoPDE"]) };
  obj7 = { marginTop: nativeDefault.space.PX_4 };
  const Text2 = onDismiss(4886).Text;
  intl2 = onDismiss(1126).intl;
  items1[1] = closure_14(Text2, obj6);
  const obj8 = { style: tmp.ctaButton, children: closure_14(Button, obj9) };
  obj9 = {
    variant: "primary",
    size: "md",
    text: intl3.string(onDismiss(1126).t.a4bgO0),
    onPress() {
      const obj = onDismiss(dependencyMap[12]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_1_8);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
      obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
    }
  };
  Button = onDismiss(5594).Button;
  intl3 = onDismiss(1126).intl;
  items1[2] = closure_14(View, obj8);
  items[1] = closure_15(View, obj4);
  const obj10 = {
    onPress() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { action: constants4.DISMISS, prompt_type: map1.NOTIFICATION_CENTER_BANNER };
      obj.track(metroImportDefault.CONTEXTUAL_REMINDER_ACTION, obj2);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: intl4.string(onDismiss(1126).t.WAI6xu),
    children: closure_14(onDismiss(6017).XSmallIcon, { size: "sm", color: "icon-strong" })
  };
  const PressableHighlight = onDismiss(5909).PressableHighlight;
  intl4 = onDismiss(1126).intl;
  items[2] = closure_14(PressableHighlight, obj10);
  return closure_15(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "NotificationCenterPermissionNudge" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj3.useConfig(first).inHoldout;
  const tmpResult = require("NotificationPermissionUtil");
  const canSeePushNotificationNudge = tmpResult.useCanSeePushNotificationNudge();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { cooldownDurationMs };
    cResult[1] = obj4;
    tmp6 = obj4;
  } else {
    tmp6 = cResult[1];
  }
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent;
  require("useSelectedDismissibleContent");
  if (!inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp(2036).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp10 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, tmp6), 2);
  _require = tmp12;
  const first1 = tmp10[0];
  if (cResult[2] !== tmp10[1]) {
    class N {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[2] = tmp10[1];
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  let tmp14 = null;
  if (first1 === require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    class N {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp14 = tmp15;
  }
  return tmp14;
}) : (() => {
  let closure_0;
  const obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout;
  const obj2 = require("NotificationPermissionUtil");
  const canSeePushNotificationNudge = obj2.useCanSeePushNotificationNudge();
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent;
  require("useSelectedDismissibleContent");
  if (!inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp2(2036).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const obj3 = { cooldownDurationMs };
  const tmp6 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj3), 2);
  _require = tmp8;
  const items = [tmp6[1]];
  const first = tmp6[0];
  let tmp10 = null;
  const tmp9 = closure_4(() => closure_0(ContentDismissActionType.USER_DISMISS), items);
  if (first === require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    const obj4 = { onDismiss: tmp9 };
    tmp10 = closure_14(closure_18, obj4);
  }
  return tmp10;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default tmp7;