// discord_app/modules/collectibles/native/ExpressiveNitroUpsell.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02120_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import LinearGradientDefault from "../../../../_runtime/05598_LinearGradient.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const ShopCtaEnum = fn(1073).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  nitroUpsellPill: {
    alignSelf: "stretch",
    marginTop: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: nativeDefault.radii.round,
    overflow: "hidden",
    paddingHorizontal: nativeDefault.space.PX_12,
    paddingVertical: nativeDefault.space.PX_4,
  },
  nitroUpsellGradient: null,
  nitroUpsellSavings: null,
  nitroUpsellCta: null,
  nitroUpsellIcon: null,
  nitroUpsellChevron: null,
  strikedPrice: null,
  androidTextPadding: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.opacity = 0.6;
obj2.nitroUpsellGradient = obj4;
let obj3 = {
  alignSelf: "stretch",
  marginTop: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: nativeDefault.radii.round,
  overflow: "hidden",
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
};
obj2.nitroUpsellSavings = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj2.nitroUpsellCta = { flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj2.nitroUpsellIcon = { width: 16, height: 16, marginRight: 4 };
obj2.nitroUpsellChevron = { marginLeft: 2 };
obj2.strikedPrice = { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 };
obj2.androidTextPadding = { paddingBottom: 2 };
let closure_9 = createStyles.createStyles(obj2);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ExpressiveNitroUpsell.tsx");

export default function _default(onTrackPress) {
  onTrackPress = onTrackPress.onTrackPress;
  ({ defaultPriceFormatted, premiumPriceFormatted } = onTrackPress);
  const tmp = closure_9();
  importDefault = tmp;
  let tmp4 = _modDef671;
  let obj = onTrackPress(5607);
  const tmp4Result = tmp4(onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
  const alphaResult = tmp4(
    onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START),
  ).alpha(0.4);
  const hexResult = tmp4(onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START))
    .alpha(0.4)
    .hex();
  const tmp7 = _modDef671;
  const obj4 = onTrackPress(5607);
  const tmp7Result = tmp7(onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
  items = [onTrackPress];
  const alphaResult1 = tmp7(onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(
    0.4,
  );
  const items1 = [tmp.strikedPrice];
  const callback = noop.useCallback(() => {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.SUBSCRIBE_NOW);
    }
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { analyticsLocations: null, title: null, description: null };
    items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP_DETAILS_MODAL];
    obj2.analyticsLocations = items;
    const intl = util.intl;
    obj2.title = intl.string(util.t.XcOMLu);
    const intl2 = util.intl;
    obj2.description = intl2.string(util.t.JhE8nA);
    obj.openLazy(asyncRequireImpl(11300, dependencyMap.paths), "ShopNitroUpsellPromoSheet", obj2, "stack");
    const tmp4 = asyncRequireImpl(11300, dependencyMap.paths);
  }, items);
  const callback1 = noop.useCallback(
    (children, id) =>
      metroImportDefault(
        Text_Text.Text,
        { variant: "body-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children },
        id,
      ),
    items1,
  );
  let obj2 = { onPress: callback, style: tmp.nitroUpsellPill, accessibilityRole: "button", children: null };
  const callback2 = noop.useCallback(
    (children, arg1) =>
      closure_1_7(
        onTrackPress(dependencyMap[13]).Text,
        { variant: "body-sm/semibold", color: "interactive-text-active", children },
        arg1,
      ),
    [],
  );
  const obj3 = { style: tmp.nitroUpsellGradient, colors: null, start, end, pointerEvents: "none" };
  const items2 = [
    hexResult,
    tmp7(onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4).hex(),
  ];
  obj3.colors = items2;
  const items3 = [closure_7(LinearGradientDefault, obj3), ,];
  const items4 = [tmp.nitroUpsellSavings];
  const hexResult1 = tmp7(onTrackPress(5607).useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END))
    .alpha(0.4)
    .hex();
  let androidTextPadding;
  if (obj9.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  const obj5 = { variant: "body-sm/medium", color: "text-subtle", style: items4, children: null };
  items4[1] = androidTextPadding;
  let intl = tmp5(1112).intl;
  obj5.children = intl.format(onTrackPress(1112).t.TWtV8E, {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook: callback1,
    premiumPriceHook: callback2,
  });
  items3[1] = closure_7(onTrackPress(5634).Text, obj5);
  const obj6 = { style: tmp.nitroUpsellCta, children: null };
  obj9 = onTrackPress(1379);
  const items5 = [
    closure_7(onTrackPress(9637).NitroWheelIcon, {
      color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
      size: "sm",
      style: tmp.nitroUpsellIcon,
    }),
    ,
  ];
  const obj7 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon };
  let androidTextPadding1;
  if (tmp5Result.isAndroid()) {
    androidTextPadding1 = tmp.androidTextPadding;
  }
  const obj8 = {
    variant: "body-sm/medium",
    color: "interactive-text-active",
    style: androidTextPadding1,
    children: null,
  };
  let intl2 = tmp5(1112).intl;
  obj8.children = intl2.string(onTrackPress(1112).t["8x0jKT"]);
  items5[1] = closure_7(onTrackPress(5634).Text, obj8);
  tmp5Result = onTrackPress(1379);
  items5[2] = closure_7(onTrackPress(7558).ChevronSmallRightIcon, {
    color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
    size: "xs",
    style: tmp.nitroUpsellChevron,
  });
  obj6.children = items5;
  items3[2] = closure_8(closure_5, obj6);
  obj2.children = items3;
  return closure_8(closure_4, obj2);
}
