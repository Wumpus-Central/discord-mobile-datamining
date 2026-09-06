// === Module 11596: GroupDMNitroCapLimitSheet ===

// Module 11596 (GroupDMNitroCapLimitSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9967 */;
import PremiumMarketingUtil from "PremiumMarketingUtil" /* 11597 */;
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction" /* 11598 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const number = fn(11593).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, body: null, buttons: null, nitroWheelIcon: null };
createStyles = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.title = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj1 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.body = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
let obj2 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
createStyles.buttons = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
createStyles.nitroWheelIcon = { bottom: -1, width: 22, height: 16 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapLimitSheet.tsx");

export default function GroupDMNitroCapLimitSheet(location) {
  const _location = location.location;
  dependencyMap = undefined;
  const tmp = closure_13();
  let obj = _location(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = _location(11591);
  const groupDMNitroAudience = obj1.useGroupDMNitroAudience();
  importDefault = tmp6;
  let obj2 = noop;
  const items1 = [_location];
  const callback = noop.useCallback(() => {
    const obj = { location: _location, location_object: constants2.BUTTON_CTA };
    obj.track(constants.PREMIUM_PROMOTION_OPENED, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = PremiumMarketingUtil.navigateToPremiumHomePage();
  }, items1);
  const tmp9 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants3.IN_APP);
  let loading = "acquire" === groupDMNitroAudience;
  if (loading) {
    loading = tmp9.loading;
  }
  obj = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: _location(11591).GroupDMNitroAcquisitionStrategy.CHECKOUT, onCheckout: tmp9.onPress };
  const tmp8ResultResult = useGroupDMNitroUpsellActionDefault(obj);
  dependencyMap = tmp8ResultResult;
  const items2 = ["upgrade" === groupDMNitroAudience, tmp8ResultResult];
  const callback1 = obj2.useCallback(() => {
    if (closure_1) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    closure_2();
  }, items2);
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1114).intl;
  obj2 = { number: number2 };
  obj1.children = intl.formatToPlainString(_location(1114).t.IyBYPN, obj2);
  const items3 = [closure_11(_location(4556).Text, obj1), , ];
  let obj3 = { style: tmp.body, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = tmp2(1114).intl;
  obj3.children = intl2.formatToPlainString(_location(1114).t["Ae97n/"], { number });
  items3[1] = closure_11(_location(4556).Text, obj3);
  const obj5 = { style: tmp.buttons, children: null };
  const obj6 = { text: null, size: "lg", variant: "experimental_premium-primary", icon: null, iconPosition: "start", shiny: null, loading: null, onPress: null, grow: true };
  const intl3 = tmp2(1114).intl;
  const obj4 = { number };
  const tmp8Result = useGroupDMNitroUpsellActionDefault;
  obj6.text = intl3.string(_location(11591).getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  const tmp2Result = _location(11591);
  obj6.icon = closure_11(_location(8662).NitroWheelIcon, { style: tmp.nitroWheelIcon, color: nativeDefault.unsafe_rawColors.WHITE, size: "custom" });
  obj6.shiny = !stateFromStores;
  obj6.loading = loading;
  let tmp16 = null;
  if (!loading) {
    tmp16 = callback1;
  }
  const obj8 = { children: null };
  obj6.onPress = tmp16;
  const items4 = [closure_11(_location(4975).Button, obj6), ];
  const obj9 = { text: null, size: "lg", variant: "secondary", onPress: null, grow: true };
  const intl4 = tmp2(1114).intl;
  obj9.text = intl4.string(_location(1114).t.PUZmk4);
  obj9.onPress = callback;
  items4[1] = closure_11(_location(4975).Button, obj9);
  obj5.children = items4;
  items3[2] = closure_12(View, obj5);
  obj.children = items3;
  obj8.children = closure_12(View, obj);
  return closure_11(_location(7150).BottomSheet, obj8);
};