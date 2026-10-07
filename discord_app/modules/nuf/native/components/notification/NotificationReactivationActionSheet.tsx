// === Module 17641: NotificationReactivationActionSheet ===

// Module 17641 (NotificationReactivationActionSheet)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12069 */;
import _modDef17642 from "module_17642" /* 17642 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const EventActionType = fn(12068).EventActionType;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" }, image: null, title: null, subtitle: null, buttons: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
obj2.image = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj2.title = { textAlign: "center" };
let obj4 = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj2.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj2.buttons = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = _location(576).c(28);
  _location = location.location;
  const tmp4 = closure_10();
  if (cResult[0] !== _location) {
    const fn = function n() {
      const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
        closure_1_1(closure_1_2[11]).hideActionSheet();
      });
    };
    cResult[0] = _location;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== _location) {
    const fn2 = function y() {
      AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "Array" });
      const obj2 = { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "Array" };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[2] = _location;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp4.image) {
    let obj2 = { style: tmp4.image, source: _modDef17642, resizeMode: "contain" };
    const tmp11 = closure_8(closure_5, obj2);
    cResult[4] = tmp4.image;
    cResult[5] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.a4bgO0);
    cResult[6] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== tmp4.title) {
    const obj3 = { style: tmp4.title, variant: "heading-xl/bold", accessibilityRole: "header", children: tmp12 };
    const tmp16 = closure_8(tmp(4892).Text, obj3);
    cResult[7] = tmp4.title;
    cResult[8] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["rW5gw/"]);
    cResult[9] = stringResult1;
    let tmp17 = stringResult1;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] !== tmp4.subtitle) {
    const obj4 = { style: tmp4.subtitle, variant: "text-sm/medium", color: "text-default", children: tmp17 };
    const tmp21 = closure_8(tmp(4892).Text, obj4);
    cResult[10] = tmp4.subtitle;
    cResult[11] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.a4bgO0);
    cResult[12] = stringResult2;
    let tmp22 = stringResult2;
  } else {
    tmp22 = cResult[12];
  }
  if (cResult[13] !== tmp5) {
    const obj5 = { text: tmp22, onPress: tmp5 };
    const tmp26 = closure_8(tmp(5601).Button, obj5);
    cResult[13] = tmp5;
    cResult[14] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(tmp(1126).t["/L3kom"]);
    cResult[15] = stringResult3;
    let tmp27 = stringResult3;
  } else {
    tmp27 = cResult[15];
  }
  if (cResult[16] !== tmp6) {
    const obj6 = { text: tmp27, onPress: tmp6, variant: "secondary" };
    const tmp31 = closure_8(tmp(5601).Button, obj6);
    cResult[16] = tmp6;
    cResult[17] = tmp31;
    let tmp29 = tmp31;
  } else {
    tmp29 = cResult[17];
  }
  if (cResult[18] === tmp4.buttons) {
    if (cResult[19] === tmp24) {
      if (cResult[20] === tmp29) {
        let tmp32 = cResult[21];
      }
      if (cResult[22] === tmp4.container) {
        if (cResult[23] === tmp19) {
          if (cResult[24] === tmp32) {
            if (cResult[25] === tmp7) {
              if (cResult[26] === tmp14) {
                let tmp34 = cResult[27];
              }
              return tmp34;
            }
          }
        }
      }
      const obj7 = { children: null };
      const obj8 = { style: tmp4.container, children: null };
      const items = [tmp7, tmp14, tmp19, tmp32];
      obj8.children = items;
      obj7.children = closure_9(closure_4, obj8);
      const tmp38 = closure_8(tmp(6652).BottomSheet, obj7);
      cResult[22] = tmp4.container;
      cResult[23] = tmp19;
      cResult[24] = tmp32;
      cResult[25] = tmp7;
      cResult[26] = tmp14;
      cResult[27] = tmp38;
      tmp34 = tmp38;
    }
  }
  const obj9 = { style: tmp4.buttons, children: null };
  const items1 = [tmp24, tmp29];
  obj9.children = items1;
  const tmp33 = closure_9(_location(5599).ButtonGroup, obj9);
  cResult[18] = tmp4.buttons;
  cResult[19] = tmp24;
  cResult[20] = tmp29;
  cResult[21] = tmp33;
  tmp32 = tmp33;
  let obj = _location(576);
}) : ((location) => {
  const _location = location.location;
  const tmp = closure_10();
  const items = [_location];
  const items1 = [_location];
  const callback = noop.useCallback(() => {
    const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
      closure_1_1(closure_1_2[11]).hideActionSheet();
    });
  }, items);
  const callback1 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "Array" });
    const obj2 = { action_type: EventActionType.SKIP_STEP, action_location: _location, permission_granted: "Array" };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.container, children: null };
  const items2 = [closure_8(closure_5, { style: tmp.image, source: _modDef17642, resizeMode: "contain" }), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: null };
  const intl = _location(1126).intl;
  obj4.children = intl.string(_location(1126).t.a4bgO0);
  items2[1] = closure_8(_location(4892).Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _location(1126).intl;
  obj5.children = intl2.string(_location(1126).t["rW5gw/"]);
  items2[2] = closure_8(_location(4892).Text, obj5);
  const obj6 = { style: tmp.buttons, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = _location(1126).intl;
  obj7.text = intl3.string(_location(1126).t.a4bgO0);
  obj7.onPress = callback;
  const items3 = [closure_8(_location(5601).Button, obj7), ];
  const obj8 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = _location(1126).intl;
  obj8.text = intl4.string(_location(1126).t["/L3kom"]);
  obj8.onPress = callback1;
  items3[1] = closure_8(_location(5601).Button, obj8);
  obj6.children = items3;
  items2[3] = closure_9(_location(5599).ButtonGroup, obj6);
  obj2.children = items2;
  obj.children = closure_9(closure_4, obj2);
  return closure_8(_location(6652).BottomSheet, obj);
});