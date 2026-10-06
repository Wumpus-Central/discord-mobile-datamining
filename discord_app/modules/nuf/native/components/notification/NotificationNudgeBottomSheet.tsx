// === Module 16507: NotificationNudgeBottomSheet ===

// Module 16507 (NotificationNudgeBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12069 */;
import react from "react" /* 19 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12068 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ EventActionType: hasOwnProperty, NotificationNudgeAnalyticsAction: metroRequire } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, illustration: obj3, title: { textAlign: "center" }, body: obj4, buttonsContainer: obj5 };
obj2 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_24 };
obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8, width: "100%" };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((surface) => {
  let actionLocation;
  let body;
  let markAsDismissed;
  let title;
  let tmp3;
  let tmp4;
  let obj = actionLocation(markAsDismissed[9]);
  const cResult = obj.c(41);
  ({ title, body, actionLocation } = surface);
  surface = surface.surface;
  markAsDismissed = surface.markAsDismissed;
  const onHide = surface.onHide;
  closure_11();
  if (cResult[0] !== surface) {
    const fn = function _() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { action: metroRequire.IMPRESSION, prompt_type: surface };
      obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
    };
    const items = [surface];
    cResult[0] = surface;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = onHide.useEffect(tmp3, tmp4);
  if (cResult[3] !== onHide) {
    class I {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (onHide != null) {
          onHide();
        }
      }
    }
    cResult[3] = onHide;
    cResult[4] = I;
  } else {
    class I {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (onHide != null) {
          onHide();
        }
      }
    }
  }
  I = tmp6;
  if (cResult[5] === actionLocation) {
    class I {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (onHide != null) {
          onHide();
        }
      }
    }
  }
  const fn2 = function x() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.ACCEPT, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    const obj3 = NotificationPermissionUtil;
    const pushNotificationPermission = obj3.requestPushNotificationPermission(hasOwnProperty.ALLOW_TO_REQUEST, actionLocation, I);
  };
  cResult[5] = actionLocation;
  cResult[6] = tmp6;
  cResult[7] = markAsDismissed;
  cResult[8] = surface;
  cResult[9] = fn2;
}) : ((actionLocation) => {
  let ButtonGroup;
  let body;
  let intl;
  let intl2;
  let items4;
  let items5;
  let obj2;
  let obj7;
  let title;
  actionLocation = actionLocation.actionLocation;
  const surface = actionLocation.surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const onHide = actionLocation.onHide;
  ({ title, body } = actionLocation);
  const tmp = closure_11();
  const items = [surface];
  const effect = onHide.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.IMPRESSION, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
  }, items);
  const items1 = [onHide];
  const callback = onHide.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (onHide != null) {
      onHide();
    }
  }, items1);
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = onHide.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.ACCEPT, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    const obj3 = NotificationPermissionUtil;
    const pushNotificationPermission = obj3.requestPushNotificationPermission(hasOwnProperty.ALLOW_TO_REQUEST, actionLocation, callback);
  }, items2);
  const callback2 = onHide.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: metroRequire.DISMISS, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj2);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    callback();
  }, items3);
  let obj = { children: closure_10(callback, obj2) };
  obj2 = { style: tmp.container, children: items4 };
  let obj3 = { style: tmp.illustration, children: closure_9(actionLocation(markAsDismissed[13]).BellSpotIllustration, { scale: 0.8 }) };
  BottomSheet = actionLocation(markAsDismissed[18]).BottomSheet;
  items4 = [closure_9(callback, obj3), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: title };
  items4[1] = closure_9(actionLocation(markAsDismissed[14]).Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: body };
  items4[2] = closure_9(actionLocation(markAsDismissed[14]).Text, obj5);
  const obj6 = { style: tmp.buttonsContainer, children: closure_10(ButtonGroup, obj7) };
  obj7 = { children: items5 };
  ButtonGroup = actionLocation(markAsDismissed[17]).ButtonGroup;
  const obj8 = { text: intl.string(actionLocation(markAsDismissed[15]).t["+7MDbQ"]), onPress: callback1 };
  const Button = actionLocation(markAsDismissed[16]).Button;
  intl = actionLocation(markAsDismissed[15]).intl;
  items5 = [closure_9(Button, obj8), ];
  const obj9 = { text: intl2.string(actionLocation(markAsDismissed[15]).t.L5eIZ2), onPress: callback2, variant: "secondary" };
  const Button2 = actionLocation(markAsDismissed[16]).Button;
  intl2 = actionLocation(markAsDismissed[15]).intl;
  items5[1] = closure_9(Button2, obj9);
  items4[3] = closure_9(callback, obj6);
  return closure_9(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx");

export default tmp5;