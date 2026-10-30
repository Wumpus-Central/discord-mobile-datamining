// === Module 19520: NotificationReactivationActionSheet ===

// Module 19520 (NotificationReactivationActionSheet)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import FastImageDefault from "FastImage" /* 5712 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13925 */;
import _modDef19521 from "module_19521" /* 19521 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const EventActionType = fn(13924).EventActionType;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" }, image: null, title: null, subtitle: null, buttons: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
obj2.image = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj2.title = { textAlign: "center" };
let obj4 = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj2.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj2.buttons = { marginTop: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default function NotificationReactivationActionSheet(location) {
  const _location = location.location;
  const tmp = closure_9();
  const items = [_location];
  const items1 = [_location];
  const callback = noop.useCallback(() => {
    const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
      closure_1_1(closure_1_2[9]).hideActionSheet();
    });
  }, items);
  const callback1 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "r" });
    const obj2 = { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "r" };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.image, source: _modDef19521, resizeMode: "contain" };
  const items2 = [closure_7(FastImageDefault, obj3), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: null };
  const intl = _location(1114).intl;
  obj4.children = intl.string(_location(1114).t.a4bgO0);
  items2[1] = closure_7(_location(5619).Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _location(1114).intl;
  obj5.children = intl2.string(_location(1114).t["rW5gw/"]);
  items2[2] = closure_7(_location(5619).Text, obj5);
  const obj6 = { style: tmp.buttons, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = _location(1114).intl;
  obj7.text = intl3.string(_location(1114).t.a4bgO0);
  obj7.onPress = callback;
  const items3 = [closure_7(_location(5629).Button, obj7), ];
  const obj8 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = _location(1114).intl;
  obj8.text = intl4.string(_location(1114).t["/L3kom"]);
  obj8.onPress = callback1;
  items3[1] = closure_7(_location(5629).Button, obj8);
  obj6.children = items3;
  items2[3] = closure_8(_location(6761).ButtonGroup, obj6);
  obj2.children = items2;
  obj.children = closure_8(View, obj2);
  return closure_7(_location(5267).BottomSheet, obj);
};