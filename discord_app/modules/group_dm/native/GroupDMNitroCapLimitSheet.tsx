// discord_app/modules/group_dm/native/GroupDMNitroCapLimitSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import PremiumMarketingUtil from "../../premium/PremiumMarketingUtil.tsx";
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const number = fn(11088).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1074);
({
  AnalyticEvents: closure_7,
  AnalyticsObjects: closure_8,
  AnalyticsPages: closure_9,
  MAX_GROUP_DM_PARTICIPANTS: c10,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  container: {
    alignItems: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
  },
  title: null,
  body: null,
  buttons: null,
  nitroWheelIcon: null,
};
let obj3 = {
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.title = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.body = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj2.buttons = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
obj2.nitroWheelIcon = { bottom: -1, width: 22, height: 16 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapLimitSheet.tsx");

export default function GroupDMNitroCapLimitSheet(location) {
  const _location = location.location;
  dependencyMap = undefined;
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const stateFromStores = _location(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = _location(504);
  const groupDMNitroAudience = _location(11086).useGroupDMNitroAudience();
  importDefault = tmp6;
  const items1 = [_location];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, {
      location: _location,
      location_object: constants2.BUTTON_CTA,
    });
    const obj2 = { location: _location, location_object: constants2.BUTTON_CTA };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = PremiumMarketingUtil.navigateToPremiumHomePage();
  }, items1);
  const tmp9 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants3.IN_APP);
  let loading = "acquire" === groupDMNitroAudience;
  if (loading) {
    loading = tmp9.loading;
  }
  const obj4 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null, onCheckout: null };
  let obj2 = _location(11086);
  obj4.acquisitionStrategy = _location(11086).GroupDMNitroAcquisitionStrategy.CHECKOUT;
  obj4.onCheckout = tmp9.onPress;
  const tmp8ResultResult = useGroupDMNitroUpsellActionDefault(obj4);
  dependencyMap = tmp8ResultResult;
  const items2 = ["upgrade" === groupDMNitroAudience, tmp8ResultResult];
  const callback1 = noop.useCallback(() => {
    if (closure_1) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    closure_2();
  }, items2);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = {
    style: tmp.title,
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp2(1115).intl;
  obj6.children = intl.formatToPlainString(_location(1115).t.IyBYPN, { number: number2 });
  const items3 = [closure_11(_location(4832).Text, obj6), ,];
  const obj8 = { style: tmp.body, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = tmp2(1115).intl;
  obj8.children = intl2.formatToPlainString(_location(1115).t["Ae97n/"], { number });
  items3[1] = closure_11(_location(4832).Text, obj8);
  const obj10 = { style: tmp.buttons, children: null };
  const obj11 = {
    text: null,
    size: "lg",
    variant: "experimental_premium-primary",
    icon: null,
    iconPosition: "start",
    shiny: null,
    loading: null,
    onPress: null,
    grow: true,
  };
  const intl3 = tmp2(1115).intl;
  const obj7 = { number: number2 };
  const obj9 = { number };
  const tmp8Result = useGroupDMNitroUpsellActionDefault;
  obj11.text = intl3.string(_location(11086).getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  const tmp2Result = _location(11086);
  obj11.icon = closure_11(_location(8122).NitroWheelIcon, {
    style: tmp.nitroWheelIcon,
    color: nativeDefault.unsafe_rawColors.WHITE,
    size: "custom",
  });
  obj11.shiny = !stateFromStores;
  obj11.loading = loading;
  let tmp16 = null;
  if (!loading) {
    tmp16 = callback1;
  }
  const obj13 = { children: null };
  obj11.onPress = tmp16;
  const items4 = [closure_11(_location(5281).Button, obj11)];
  const obj14 = { text: null, size: "lg", variant: "secondary", onPress: null, grow: true };
  const intl4 = tmp2(1115).intl;
  obj14.text = intl4.string(_location(1115).t.PUZmk4);
  obj14.onPress = callback;
  items4[1] = closure_11(_location(5281).Button, obj14);
  obj10.children = items4;
  items3[2] = closure_12(View, obj10);
  obj5.children = items3;
  obj13.children = closure_12(View, obj5);
  return closure_11(_location(6571).BottomSheet, obj13);
}
