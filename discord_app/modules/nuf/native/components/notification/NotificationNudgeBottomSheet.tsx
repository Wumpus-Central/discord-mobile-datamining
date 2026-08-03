// === Module 15484: NotificationNudgeBottomSheet ===

// Module 15484 (NotificationNudgeBottomSheet)
import noop from "noop";
import { View } from "set";
import EventActionType from "EventActionType";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
({ EventActionType: c5, NotificationNudgeAnalyticsAction: closure_6 } = EventActionType);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, illustration: null, title: null, body: null, buttonsContainer: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_24, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: require("Themes").space.PX_24 };
createCacheKey[2] = { textAlign: "center" };
const obj1 = { marginVertical: require("Themes").space.PX_24 };
createCacheKey[3] = { textAlign: "center", marginTop: require("Themes").space.PX_8 };
const obj2 = { textAlign: "center", marginTop: require("Themes").space.PX_8 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_8, width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: require("Themes").space.PX_8, width: "100%" };
const result = require("EventActionType").fileFinishedImporting("modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx");

export default function NotificationNudgeBottomSheet(actionLocation) {
  let body;
  let title;
  actionLocation = actionLocation.actionLocation;
  const surface = actionLocation.surface;
  const markAsDismissed = actionLocation.markAsDismissed;
  const onHide = actionLocation.onHide;
  let callback;
  ({ title, body } = actionLocation);
  const tmp = createCacheKey();
  const items = [surface];
  const effect = onHide.useEffect(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: outer1_6.IMPRESSION, prompt_type: surface };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  const items1 = [onHide];
  callback = onHide.useCallback(() => {
    surface(markAsDismissed[9]).hideActionSheet();
    if (onHide != null) {
      onHide();
    }
  }, items1);
  const items2 = [surface, actionLocation, callback, markAsDismissed];
  const items3 = [surface, callback, markAsDismissed];
  const callback1 = onHide.useCallback(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: outer1_6.ACCEPT, prompt_type: surface };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(outer1_8.USER_DISMISS);
    const pushNotificationPermission = actionLocation(markAsDismissed[10]).requestPushNotificationPermission(outer1_5.ALLOW_TO_REQUEST, actionLocation, callback);
  }, items2);
  const callback2 = onHide.useCallback(() => {
    let obj = surface(markAsDismissed[8]);
    obj = { action: outer1_6.DISMISS, prompt_type: surface };
    obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
    markAsDismissed(outer1_8.USER_DISMISS);
    callback();
  }, items3);
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.illustration, children: null };
  obj[1] = callback(actionLocation(markAsDismissed[12]).BellSpotIllustration, { scale: 0.8 });
  const items4 = [callback(callback, obj), callback(actionLocation(markAsDismissed[13]).Text, { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: title }), callback(actionLocation(markAsDismissed[13]).Text, { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: body }), ];
  const obj3 = { style: tmp.buttonsContainer, children: null };
  const obj4 = { children: null };
  const obj5 = { text: null, onPress: null };
  const intl = actionLocation(markAsDismissed[16]).intl;
  obj5[0] = intl.string(actionLocation(markAsDismissed[16]).t["+7MDbQ"]);
  obj5[1] = callback1;
  const items5 = [callback(actionLocation(markAsDismissed[15]).Button, obj5), ];
  const obj6 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = actionLocation(markAsDismissed[16]).intl;
  obj6[0] = intl2.string(actionLocation(markAsDismissed[16]).t.L5eIZ2);
  obj6[1] = callback2;
  items5[1] = callback(actionLocation(markAsDismissed[15]).Button, obj6);
  obj4[0] = items5;
  obj3[1] = callback2(actionLocation(markAsDismissed[14]).ButtonGroup, obj4);
  items4[3] = callback(callback, obj3);
  obj[1] = items4;
  obj[0] = callback2(callback, obj);
  return callback(actionLocation(markAsDismissed[11]).BottomSheet, obj);
};