// discord_app/modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationPermissionUtil from "../../NotificationPermissionUtil.tsx";
import _modDef17458 from "../../../../../../_runtime/metro/17458__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const EventActionType = fn(12410).EventActionType;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, image: null, title: null, subtitle: null, buttons: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles.container = createStyles;
createStyles.image = { marginVertical: nativeDefault.space.PX_24, height: 120 };
createStyles.title = { textAlign: "center" };
let obj1 = { marginVertical: nativeDefault.space.PX_24, height: 120 };
createStyles.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let obj2 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
createStyles.buttons = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx",
);

export default function NotificationReactivationActionSheet(location) {
  const _location = location.location;
  const tmp = closure_10();
  const items = [_location];
  const items1 = [_location];
  const callback = noop.useCallback(() => {
    const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
      EventActionType.ALLOW_TO_REQUEST,
      _location,
      () => {
        closure_1_1(closure_1_2[9]).hideActionSheet();
      },
    );
  }, items);
  const callback1 = noop.useCallback(() => {
    const obj = { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "Array" };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.image, source: _modDef17458, resizeMode: "contain" };
  const items2 = [closure_8(closure_5, obj), , ,];
  const obj1 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: null };
  const intl = _location(1114).intl;
  obj1.children = intl.string(_location(1114).t.a4bgO0);
  items2[1] = closure_8(_location(4556).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _location(1114).intl;
  obj2.children = intl2.string(_location(1114).t["rW5gw/"]);
  items2[2] = closure_8(_location(4556).Text, obj2);
  const obj3 = { style: tmp.buttons, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = _location(1114).intl;
  obj4.text = intl3.string(_location(1114).t.a4bgO0);
  obj4.onPress = callback;
  const items3 = [closure_8(_location(4975).Button, obj4)];
  const obj5 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = _location(1114).intl;
  obj5.text = intl4.string(_location(1114).t["/L3kom"]);
  obj5.onPress = callback1;
  items3[1] = closure_8(_location(4975).Button, obj5);
  obj3.children = items3;
  items2[3] = closure_9(_location(5433).ButtonGroup, obj3);
  obj.children = items2;
  obj.children = closure_9(closure_4, obj);
  return closure_8(_location(7150).BottomSheet, obj);
}
