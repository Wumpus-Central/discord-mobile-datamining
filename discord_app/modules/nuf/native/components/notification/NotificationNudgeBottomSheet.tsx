// discord_app/modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationPermissionUtil from "../../NotificationPermissionUtil.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const NotificationPermissionConstants = fn(12410);
({ EventActionType: hasOwnProperty, NotificationNudgeAnalyticsAction: metroRequire } = NotificationPermissionConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, illustration: null, title: null, body: null, buttonsContainer: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles.container = createStyles;
createStyles.illustration = { marginVertical: nativeDefault.space.PX_24 };
createStyles.title = { textAlign: "center" };
const obj1 = { marginVertical: nativeDefault.space.PX_24 };
createStyles.body = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
const obj2 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
createStyles.buttonsContainer = { marginTop: nativeDefault.space.PX_8, width: "100%" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx",
);

export default function NotificationNudgeBottomSheet(actionLocation) {
  actionLocation = actionLocation.actionLocation;
  const surface = actionLocation.surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const onHide = actionLocation.onHide;
  ({ title, body } = actionLocation);
  const tmp = closure_11();
  const items = [surface];
  const effect = onHide.useEffect(() => {
    const obj = { action: constants2.IMPRESSION, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  const items1 = [onHide];
  const callback = onHide.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (onHide != null) {
      onHide();
    }
  }, items1);
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = onHide.useCallback(() => {
    const obj = { action: constants2.ACCEPT, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
      constants.ALLOW_TO_REQUEST,
      actionLocation,
      callback,
    );
  }, items2);
  const callback2 = onHide.useCallback(() => {
    const obj = { action: constants2.DISMISS, prompt_type: surface };
    obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
    callback();
  }, items3);
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = {
    style: tmp.illustration,
    children: closure_9(actionLocation(markAsDismissed[12]).BellSpotIllustration, { scale: 0.8 }),
  };
  const items4 = [
    closure_9(callback, obj),
    closure_9(actionLocation(markAsDismissed[13]).Text, {
      style: tmp.title,
      variant: "heading-xl/bold",
      accessibilityRole: "header",
      children: title,
    }),
    closure_9(actionLocation(markAsDismissed[13]).Text, {
      style: tmp.body,
      variant: "text-sm/medium",
      color: "text-default",
      children: body,
    }),
  ];
  const obj3 = { style: tmp.buttonsContainer, children: null };
  const obj4 = { children: null };
  const obj5 = { text: null, onPress: null };
  const intl = actionLocation(markAsDismissed[16]).intl;
  obj5.text = intl.string(actionLocation(markAsDismissed[16]).t["+7MDbQ"]);
  obj5.onPress = callback1;
  const items5 = [closure_9(actionLocation(markAsDismissed[15]).Button, obj5)];
  const obj6 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = actionLocation(markAsDismissed[16]).intl;
  obj6.text = intl2.string(actionLocation(markAsDismissed[16]).t.L5eIZ2);
  obj6.onPress = callback2;
  items5[1] = closure_9(actionLocation(markAsDismissed[15]).Button, obj6);
  obj4.children = items5;
  obj3.children = closure_10(actionLocation(markAsDismissed[14]).ButtonGroup, obj4);
  items4[3] = closure_9(callback, obj3);
  obj.children = items4;
  obj.children = closure_10(callback, obj);
  return closure_9(actionLocation(markAsDismissed[11]).BottomSheet, obj);
}
