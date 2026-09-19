// discord_app/modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import _modDef13607 from "../../../../../_runtime/metro/13607__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_10 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  background: StyleSheet.absoluteFillObject,
  loading: null,
  main: null,
  header: null,
  body: null,
  orbGraphic: null,
  title: null,
  description: null,
  footer: null,
};
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.loading = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.main = { flex: 1 };
let obj4 = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.header = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
let size = { width: 280, height: 157.5, marginBottom: nativeDefault.space.PX_32 };
obj2.orbGraphic = size;
let obj6 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.description = { textAlign: "center" };
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.footer = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
};
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default function NitroOrbsDeliveredModal(arg0) {
  ({ orbsAmount, onClose } = arg0);
  importDefault = undefined;
  const tmp = closure_13();
  const items = [onClose];
  const items1 = [onClose];
  const callback = noop.useCallback(() => {
    onClose();
    const obj = CollectiblesActionCreators;
    const result = obj.openCollectiblesShopMobile({
      screen: constants.ORBS,
      analyticsLocations: [],
      analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING,
    });
  }, items);
  const callback1 = noop.useCallback(() => {
    onClose();
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
  }, items1);
  [tmp5, c1] = noop.useState(false);
  let obj = { style: tmp.root, children: null };
  const obj2 = {
    style: StyleSheet.absoluteFill,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const callback2 = noop.useCallback(() => _undefined(true), []);
  obj2.children = closure_11(onClose(12035).OrbsRewardBackground, { style: tmp.background, onReady: callback2 });
  const items2 = [closure_11(View, obj2), ,];
  let tmp9Result = !tmp7Result;
  if (!tmp7Result) {
    const obj4 = { style: tmp.loading, children: closure_11(closure_5, { animating: true }) };
    tmp9Result = closure_11(View, obj4);
  }
  items2[1] = tmp9Result;
  if (tmp7Result) {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    const obj5 = { style: tmp.header, children: null };
    const obj6 = { onPress: onClose, variant: "overlay" };
    obj5.children = closure_11(onClose(7438).ActionSheetCloseButton, obj6);
    const items3 = [closure_11(View, obj5), ,];
    const obj7 = { style: tmp.body, children: null };
    const obj8 = { source: _modDef13607, style: tmp.orbGraphic, resizeMode: "contain" };
    const items4 = [closure_11(closure_6, obj8)];
    const obj9 = { children: null };
    const obj10 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp.title, children: null };
    const intl = onClose(1115).intl;
    const obj11 = { orbAmount: orbsAmount };
    obj10.children = intl.formatToPlainString(onClose(1115).t["O2/Bj8"], obj11);
    const items5 = [closure_11(onClose(4752).Text, obj10)];
    const obj12 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.description, children: null };
    const intl2 = onClose(1115).intl;
    const obj13 = { orbAmount: orbsAmount };
    obj12.children = intl2.format(onClose(1115).t.qiZPb6, obj13);
    items5[1] = closure_11(onClose(4752).Text, obj12);
    obj9.children = items5;
    items4[1] = closure_12(View, obj9);
    obj7.children = items4;
    items3[1] = closure_12(View, obj7);
    const obj14 = { style: tmp.footer, children: null };
    const obj15 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = onClose(1115).intl;
    obj15.text = intl3.string(onClose(1115).t.OhOWfI);
    obj15.onPress = callback;
    const items6 = [closure_11(onClose(5186).Button, obj15)];
    const obj16 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
    const intl4 = onClose(1115).intl;
    obj16.text = intl4.string(onClose(1115).t.CvXwDY);
    obj16.onPress = callback1;
    items6[1] = closure_11(onClose(5186).Button, obj16);
    obj14.children = items6;
    items3[2] = closure_12(View, obj14);
    rect.children = items3;
    tmp7Result = closure_12(onClose(7363).SafeAreaPaddingView, rect);
  }
  items2[2] = tmp7Result;
  obj.children = items2;
  return closure_12(View, obj);
}
