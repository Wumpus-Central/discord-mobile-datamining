// === Module 11218: GroupDMNitroCapLimitSheet ===

// Module 11218 (GroupDMNitroCapLimitSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9645 */;
import GroupDMConstants from "GroupDMConstants" /* 11215 */;
import PremiumMarketingUtil from "PremiumMarketingUtil" /* 11219 */;
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction" /* 11220 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
const View = react_native.View;
const number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ AnalyticEvents: metroImportDefault, AnalyticsObjects: metroImportAll, AnalyticsPages: c9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, body: obj4, buttons: obj5, nitroWheelIcon: { bottom: -1, width: 22, height: 16 } };
obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj4 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj5 = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let _location;
  let closure_1;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = _location(576);
  const cResult = obj.c(39);
  _location = location.location;
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = _location(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult2 = _location(11213);
  const groupDMNitroAudience = tmpResult2.useGroupDMNitroAudience();
  importDefault = "upgrade" === groupDMNitroAudience;
  if (cResult[2] !== _location) {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { location: _location, location_object: metroImportAll.BUTTON_CTA };
        obj.track(metroImportDefault.PREMIUM_PROMOTION_OPENED, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = PremiumMarketingUtil;
        const result = obj4.navigateToPremiumHomePage();
      }
    }
    cResult[2] = _location;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { location: _location, location_object: metroImportAll.BUTTON_CTA };
        obj.track(metroImportDefault.PREMIUM_PROMOTION_OPENED, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = PremiumMarketingUtil;
        const result = obj4.navigateToPremiumHomePage();
      }
    }
  }
  const onPress = usePremiumFeatureUpsellGetNitroDefault(false, I, constants3.IN_APP).onPress;
  usePremiumFeatureUpsellGetNitroDefault(false, I, constants3.IN_APP);
  if (cResult[4] === groupDMNitroAudience) {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { location: _location, location_object: metroImportAll.BUTTON_CTA };
        obj.track(metroImportDefault.PREMIUM_PROMOTION_OPENED, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = PremiumMarketingUtil;
        const result = obj4.navigateToPremiumHomePage();
      }
    }
  }
  let obj2 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: tmp(11213).GroupDMNitroAcquisitionStrategy.CHECKOUT, onCheckout: onPress };
  cResult[4] = groupDMNitroAudience;
  cResult[5] = onPress;
  cResult[6] = _location;
  cResult[7] = obj2;
}) : ((location) => {
  let NitroWheelIcon;
  let closure_1;
  let closure_2;
  let intl;
  let intl2;
  let intl4;
  let items3;
  let items4;
  let obj12;
  let obj7;
  let obj9;
  let string;
  let tmp16;
  let tmp2Result;
  let useReducedMotion;
  const _location = location.location;
  dependencyMap = undefined;
  const tmp = closure_13();
  let obj = _location(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = _location(11213);
  const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
  importDefault = tmp6;
  const items1 = [_location];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { location: _location, location_object: metroImportAll.BUTTON_CTA };
    obj.track(metroImportDefault.PREMIUM_PROMOTION_OPENED, obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
    const obj4 = PremiumMarketingUtil;
    const result = obj4.navigateToPremiumHomePage();
  }, items1);
  const tmp9 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants3.IN_APP);
  let loading = "acquire" === groupDMNitroAudience;
  const onPress = tmp9.onPress;
  if (loading) {
    loading = tmp9.loading;
  }
  let obj4 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: _location(11213).GroupDMNitroAcquisitionStrategy.CHECKOUT, onCheckout: onPress };
  const tmp8Result = useGroupDMNitroUpsellActionDefault;
  const tmp8ResultResult = tmp8Result(obj4);
  dependencyMap = tmp8ResultResult;
  const items2 = ["upgrade" === groupDMNitroAudience, tmp8ResultResult];
  const callback1 = react.useCallback(() => {
    if (closure_1) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
    closure_2();
  }, items2);
  const obj5 = { style: tmp.container, children: items3 };
  BottomSheet = tmp2(6645).BottomSheet;
  const obj6 = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.formatToPlainString(_location(1126).t.IyBYPN, obj7) };
  const Text = tmp2(4886).Text;
  intl = tmp2(1126).intl;
  obj7 = { number: number2 };
  items3 = [closure_11(Text, obj6), , ];
  const obj8 = { style: tmp.body, variant: "text-md/medium", color: "text-subtle", children: intl2.formatToPlainString(_location(1126).t["Ae97n/"], obj9) };
  const Text2 = tmp2(4886).Text;
  intl2 = tmp2(1126).intl;
  obj9 = { number };
  items3[1] = closure_11(Text2, obj8);
  const obj10 = { style: tmp.buttons, children: items4 };
  const obj11 = { text: string(tmp2Result.getGroupDMNitroCapCTAMessage(groupDMNitroAudience)), size: "lg", variant: "experimental_premium-primary", icon: closure_11(NitroWheelIcon, obj12), iconPosition: "start", shiny: !stateFromStores, loading, onPress: tmp16, grow: true };
  const Button = tmp2(5594).Button;
  const intl3 = tmp2(1126).intl;
  string = intl3.string;
  tmp2Result = _location(11213);
  obj12 = { style: tmp.nitroWheelIcon, color: nativeDefault.unsafe_rawColors.WHITE, size: "custom" };
  NitroWheelIcon = tmp2(8313).NitroWheelIcon;
  tmp16 = null;
  if (!loading) {
    tmp16 = callback1;
  }
  const obj13 = { children: closure_12(View, obj5) };
  items4 = [closure_11(Button, obj11), ];
  const obj14 = { text: intl4.string(_location(1126).t.PUZmk4), size: "lg", variant: "secondary", onPress: callback, grow: true };
  const Button2 = tmp2(5594).Button;
  intl4 = tmp2(1126).intl;
  items4[1] = closure_11(Button2, obj14);
  items3[2] = closure_12(View, obj10);
  return closure_11(BottomSheet, obj13);
});
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapLimitSheet.tsx");

export default tmp5;