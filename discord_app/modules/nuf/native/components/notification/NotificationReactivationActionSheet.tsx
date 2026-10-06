// === Module 17641: NotificationReactivationActionSheet ===

// Module 17641 (NotificationReactivationActionSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12068 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12069 */;
import AssetRegistryDefault from "AssetRegistry" /* 17642 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const EventActionType = NotificationPermissionConstants.EventActionType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, image: obj3, title: { textAlign: "center" }, subtitle: obj4, buttons: obj5 };
obj2 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: nativeDefault.space.PX_24, height: 120 };
obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let _location;
  let items;
  let items1;
  let obj8;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp22;
  let tmp24;
  let tmp27;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = _location(576);
  const cResult = obj.c(28);
  _location = location.location;
  const tmp4 = closure_10();
  if (cResult[0] !== _location) {
    const fn = function n() {
      let obj = NotificationPermissionUtil;
      const pushNotificationPermission = obj.requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
        const obj = closure_1_1(closure_1_2[11]);
        obj.hideActionSheet();
      });
    };
    cResult[0] = _location;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== _location) {
    const fn2 = function y() {
      const SKIP_STEP = EventActionType.SKIP_STEP;
      const obj = AnalyticsUtilsDefault;
      const obj2 = { action_type: SKIP_STEP, action_location: _location, permission_granted: "Array" };
      obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    };
    cResult[2] = _location;
    cResult[3] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  const container = tmp4.container;
  if (cResult[4] !== tmp4.image) {
    let obj2 = { style: tmp4.image, source: AssetRegistryDefault, resizeMode: "contain" };
    const tmp11 = closure_8(closure_5, obj2);
    cResult[4] = tmp4.image;
    cResult[5] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[5];
  }
  const title = tmp4.title;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_location(1126).t.a4bgO0);
    cResult[6] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== tmp4.title) {
    let obj3 = { style: title, variant: "heading-xl/bold", accessibilityRole: "header", children: tmp12 };
    const tmp16 = closure_8(_location(4892).Text, obj3);
    cResult[7] = tmp4.title;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[8];
  }
  const subtitle = tmp4.subtitle;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(_location(1126).t["rW5gw/"]);
    cResult[9] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] !== tmp4.subtitle) {
    const obj4 = { style: subtitle, variant: "text-sm/medium", color: "text-default", children: tmp17 };
    const tmp21 = closure_8(_location(4892).Text, obj4);
    cResult[10] = tmp4.subtitle;
    cResult[11] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[11];
  }
  const buttons = tmp4.buttons;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(_location(1126).t.a4bgO0);
    cResult[12] = stringResult2;
    tmp22 = stringResult2;
  } else {
    tmp22 = cResult[12];
  }
  if (cResult[13] !== tmp5) {
    const obj5 = { text: tmp22, onPress: tmp5 };
    const tmp26 = closure_8(_location(5601).Button, obj5);
    cResult[13] = tmp5;
    cResult[14] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(_location(1126).t["/L3kom"]);
    cResult[15] = stringResult3;
    tmp27 = stringResult3;
  } else {
    tmp27 = cResult[15];
  }
  if (cResult[16] !== tmp6) {
    const obj6 = { text: tmp27, onPress: tmp6, variant: "secondary" };
    const tmp31 = closure_8(_location(5601).Button, obj6);
    cResult[16] = tmp6;
    cResult[17] = tmp31;
    tmp29 = tmp31;
  } else {
    tmp29 = cResult[17];
  }
  if (cResult[18] === tmp4.buttons) {
    if (cResult[19] === tmp24) {
      let tmp32;
      if (cResult[20] === tmp29) {
        tmp32 = cResult[21];
      }
      if (cResult[22] === tmp4.container) {
        if (cResult[23] === tmp19) {
          if (cResult[24] === tmp32) {
            if (cResult[25] === tmp7) {
              let tmp34;
              if (cResult[26] === tmp14) {
                tmp34 = cResult[27];
              }
              return tmp34;
            }
          }
        }
      }
      const obj7 = { children: closure_9(closure_4, obj8) };
      obj8 = { style: container, children: items };
      items = [tmp7, tmp14, tmp19, tmp32];
      BottomSheet = tmp(6652).BottomSheet;
      const tmp38 = closure_8(BottomSheet, obj7);
      cResult[22] = tmp4.container;
      cResult[23] = tmp19;
      cResult[24] = tmp32;
      cResult[25] = tmp7;
      cResult[26] = tmp14;
      cResult[27] = tmp38;
      tmp34 = tmp38;
    }
  }
  const obj9 = { style: buttons, children: items1 };
  items1 = [tmp24, tmp29];
  const tmp33 = closure_9(_location(5599).ButtonGroup, obj9);
  cResult[18] = tmp4.buttons;
  cResult[19] = tmp24;
  cResult[20] = tmp29;
  cResult[21] = tmp33;
  tmp32 = tmp33;
}) : ((location) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj2;
  const _location = location.location;
  const tmp = closure_10();
  const items = [_location];
  const items1 = [_location];
  const callback = react.useCallback(() => {
    let obj = NotificationPermissionUtil;
    const pushNotificationPermission = obj.requestPushNotificationPermission(EventActionType.ALLOW_TO_REQUEST, _location, () => {
      const obj = closure_1_1(closure_1_2[11]);
      obj.hideActionSheet();
    });
  }, items);
  const callback1 = react.useCallback(() => {
    const SKIP_STEP = EventActionType.SKIP_STEP;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action_type: SKIP_STEP, action_location: _location, permission_granted: "Array" };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items1);
  let obj = { children: closure_9(closure_4, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  let obj3 = { style: tmp.image, source: AssetRegistryDefault, resizeMode: "contain" };
  BottomSheet = _location(6652).BottomSheet;
  items2 = [closure_8(closure_5, obj3), , , ];
  const obj4 = { style: tmp.title, variant: "heading-xl/bold", accessibilityRole: "header", children: intl.string(_location(1126).t.a4bgO0) };
  const Text = _location(4892).Text;
  intl = _location(1126).intl;
  items2[1] = closure_8(Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(_location(1126).t["rW5gw/"]) };
  const Text2 = _location(4892).Text;
  intl2 = _location(1126).intl;
  items2[2] = closure_8(Text2, obj5);
  const obj6 = { style: tmp.buttons, children: items3 };
  const ButtonGroup = _location(5599).ButtonGroup;
  const obj7 = { text: intl3.string(_location(1126).t.a4bgO0), onPress: callback };
  const Button = _location(5601).Button;
  intl3 = _location(1126).intl;
  items3 = [closure_8(Button, obj7), ];
  const obj8 = { text: intl4.string(_location(1126).t["/L3kom"]), onPress: callback1, variant: "secondary" };
  const Button2 = _location(5601).Button;
  intl4 = _location(1126).intl;
  items3[1] = closure_8(Button2, obj8);
  items2[3] = closure_9(ButtonGroup, obj6);
  return closure_8(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/notification/NotificationReactivationActionSheet.tsx");

export default tmp5;