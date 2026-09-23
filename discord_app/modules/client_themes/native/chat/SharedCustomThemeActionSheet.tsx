// === Module 12280: SharedCustomThemeActionSheet ===

// Module 12280 (SharedCustomThemeActionSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4675 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7513 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7750 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 9549 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 12281 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import SubscriptionStore from "SubscriptionStore" /* 4487 */;

const require = globalThis.__r;

require = fn;
function PrimaryActionButton(onPressApply) {
  const tmp = closure_14();
  _require = tmp;
  let items = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj = require("initialize");
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    const obj3 = { text: null, onPress: null, renderIcon: null, style: null };
    const intl2 = tmp2(1115).intl;
    obj3.text = intl2.string(tmp2(1115).t.pj0XBN);
    obj3.onPress = function onPressSubscribe() {
      const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
      const items = [AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj.analyticsLocations = items;
      obj.analyticsLocation = {};
      openPremiumPlanSelectionActionSheetDefault(obj);
    };
    obj3.renderIcon = function renderIcon() {
      const obj = { style: null };
      const items = [nitroWheelButton.nitroWheelButton];
      obj.style = items;
      return closure_2_12(native.NitroWheel, obj);
    };
    obj3.style = tmp.getNitroButton;
    let tmp6 = closure_12(tmp2(1177).ShinyButton, obj3);
  } else {
    const obj4 = { text: null, onPress: null, variant: "primary" };
    const intl = tmp2(1115).intl;
    obj4.text = intl.string(tmp2(1115).t["1Qm822"]);
    obj4.onPress = onPressApply.onPressApply;
    tmp6 = closure_12(tmp2(5271).Button, obj4);
  }
  return tmp6;
}
const noop = fn(19);
({ useEffect: hasOwnProperty, useLayoutEffect: metroRequire, useRef: closure_7 } = noop);
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, getNitroButton: { borderRadius: nativeDefault.radii.round } };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default function _default(message) {
  const sharedClientTheme = message.message.sharedClientTheme;
  const tmp = closure_14();
  let tmp2 = closure_7(null);
  importDefault = tmp2;
  let tmp4;
  if (undefined !== sharedClientTheme) {
    let obj4 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    let colors = sharedClientTheme.colors;
    obj4.colors = colors.map((item) => "#" + item);
    obj4.gradientColorStops = [];
    ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
    tmp4 = obj4;
  }
  [first, _slicedToArray] = first1.useState(tmp4);
  let baseTheme;
  if (undefined !== sharedClientTheme) {
    baseTheme = sharedClientTheme(first[24]).getBaseTheme(sharedClientTheme.base_theme);
    let obj3 = sharedClientTheme(first[24]);
  }
  [first1, closure_5] = first1.useState(baseTheme);
  [first2, closure_7] = first1.useState(false);
  const ref = obj.useRef(true);
  const items = [sharedClientTheme];
  closure_5(() => {
    let tmp4;
    if (undefined !== sharedClientTheme) {
      const obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      const colors = sharedClientTheme.colors;
      obj.colors = colors.map((item) => "#" + item);
      obj.gradientColorStops = [];
      ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
      tmp4 = obj;
    }
    closure_3(tmp4);
    let baseTheme;
    if (undefined !== sharedClientTheme) {
      baseTheme = ClientThemesUtils.getBaseTheme(sharedClientTheme.base_theme);
    }
    closure_5(baseTheme);
    AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [first, first1];
  closure_5(() => {
    let tmp2 = undefined !== customTheme;
    if (tmp2) {
      tmp2 = undefined !== first1;
    }
    if (tmp2) {
      const obj2 = { baseTheme: first1, customTheme };
      CustomThemeMobileActionCreators.previewCustomTheme(obj2);
      ThemeActionCreators.refreshTheme();
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  closure_5(() => () => {
    if (ref.current) {
      sharedClientTheme(first[10]).clearPreviewTheme();
      const obj = sharedClientTheme(first[10]);
      sharedClientTheme(first[11]).refreshTheme();
      const obj2 = sharedClientTheme(first[11]);
    }
  }, items3);
  let obj5 = { ref: tmp2, backdropOpacity: 0, children: null };
  const obj6 = { title: null };
  const intl = sharedClientTheme(first[14]).intl;
  obj6.title = intl.string(require("module_2714")["3ej1LT"]);
  const items4 = [closure_12(sharedClientTheme(first[13]).BottomSheetTitleHeader, obj6), , ];
  const obj7 = { style: tmp.contentWrapper, children: null };
  const obj8 = { variant: "heading-md/medium", style: tmp.centeredText, children: null };
  const intl2 = sharedClientTheme(first[14]).intl;
  obj8.children = intl2.string(require("module_2714").qZMUoL);
  obj7.children = closure_12(sharedClientTheme(first[16]).Text, obj8);
  items4[1] = closure_12(ref, obj7);
  const obj9 = { style: tmp.ctaContainer, children: null };
  const items5 = [
    closure_12(PrimaryActionButton, {
      onPressApply() {
        let tmp2 = undefined !== customUserThemeSettings;
        if (tmp2) {
          tmp2 = undefined !== first1;
        }
        if (tmp2) {
          tmp2 = null !== ref.current;
        }
        if (tmp2) {
          closure_7(true);
          CustomThemeMobileActionCreators.updateCustomTheme(customUserThemeSettings, first1);
          const obj3 = { customUserThemeSettings, theme: first1 };
          UserSettingsActionCreators.saveClientTheme(obj3);
          CustomThemeMobileActionCreators.clearPreviewTheme();
          AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
          const current = ref.current;
          current.closeActionSheet();
        }
      }
    }),

  ];
  const obj18 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = sharedClientTheme(first[14]).intl;
  obj18.text = intl3.string(sharedClientTheme(first[14]).t["13/7kX"]);
  obj18.onPress = function onPress() {
    if (null !== ref.current) {
      CustomThemeMobileActionCreators.clearPreviewTheme();
      ThemeActionCreators.refreshTheme();
      const current = tmp.current;
      current.closeActionSheet();
    }
  };
  items5[1] = closure_12(sharedClientTheme(first[18]).Button, obj18);
  obj9.children = items5;
  items4[2] = closure_13(ref, obj9);
  obj5.children = items4;
  return closure_13(sharedClientTheme(first[12]).BottomSheet, obj5);
};