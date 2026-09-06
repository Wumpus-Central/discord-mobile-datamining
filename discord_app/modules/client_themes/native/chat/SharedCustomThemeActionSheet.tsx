// === Module 11947: SharedCustomThemeActionSheet ===

// Module 11947 (SharedCustomThemeActionSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1229 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4408 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7422 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 9358 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11948 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
function PrimaryActionButton(onPressApply) {
  const tmp = closure_14();
  _require = tmp;
  let obj = require("initialize");
  let items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    obj = { text: null, onPress: null, renderIcon: null, style: null };
    const intl2 = tmp2(1114).intl;
    obj.text = intl2.string(tmp2(1114).t.pj0XBN);
    obj.onPress = function onPressSubscribe() {
      const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
      const items = [AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj.analyticsLocations = items;
      obj.analyticsLocation = {};
      openPremiumPlanSelectionActionSheetDefault(obj);
    };
    obj.renderIcon = function renderIcon() {
      const obj = { style: null };
      const items = [nitroWheelButton.nitroWheelButton];
      obj.style = items;
      return closure_2_12(native.NitroWheel, obj);
    };
    obj.style = tmp.getNitroButton;
    let tmp6 = closure_12(tmp2(1178).ShinyButton, obj);
  } else {
    obj = { text: null, onPress: null, variant: "primary" };
    const intl = tmp2(1114).intl;
    obj.text = intl.string(tmp2(1114).t["1Qm822"]);
    obj.onPress = onPressApply.onPressApply;
    tmp6 = closure_12(tmp2(4975).Button, obj);
  }
  return tmp6;
}
const noop = fn(19);
({ useEffect: hasOwnProperty, useLayoutEffect: metroRequire, useRef: closure_7 } = noop);
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, getNitroButton: null };
createStyles = { borderRadius: nativeDefault.radii.round };
createStyles.getNitroButton = createStyles;
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default function _default(message) {
  const sharedClientTheme = message.message.sharedClientTheme;
  const tmp = closure_14();
  let tmp2 = closure_7(null);
  importDefault = tmp2;
  let obj = first1;
  let tmp4;
  if (undefined !== sharedClientTheme) {
    obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    let colors = sharedClientTheme.colors;
    obj.colors = colors.map((item) => "#" + item);
    obj.gradientColorStops = [];
    ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
    tmp4 = obj;
  }
  const tmp6 = _slicedToArray(first1.useState(tmp4), 2);
  const customTheme = tmp6[0];
  _slicedToArray = tmp6[1];
  let baseTheme;
  if (undefined !== sharedClientTheme) {
    let obj2 = sharedClientTheme(customTheme[24]);
    baseTheme = obj2.getBaseTheme(sharedClientTheme.base_theme);
  }
  let tmp5Result = tmp5(obj.useState(baseTheme), 2);
  first1 = tmp5Result[0];
  closure_5 = tmp5Result[1];
  tmp5Result = tmp5(obj.useState(false), 2);
  const first2 = tmp5Result[0];
  closure_7 = tmp5Result[1];
  const ref = obj.useRef(true);
  const items = [sharedClientTheme];
  closure_5(() => {
    let tmp4;
    if (undefined !== sharedClientTheme) {
      const obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      const colors = tmp2.colors;
      obj.colors = colors.map((item) => "#" + item);
      obj.gradientColorStops = [];
      ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = tmp2);
      tmp4 = obj;
    }
    closure_3(tmp4);
    let baseTheme;
    if (undefined !== sharedClientTheme) {
      baseTheme = ClientThemesUtils.getBaseTheme(tmp2.base_theme);
    }
    closure_5(baseTheme);
    AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [customTheme, first1];
  closure_5(() => {
    let tmp2 = undefined !== customTheme;
    if (tmp2) {
      tmp2 = undefined !== first1;
    }
    if (tmp2) {
      const obj = { baseTheme: first1, customTheme };
      obj.previewCustomTheme(obj);
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
  obj = { ref: tmp2, backdropOpacity: 0, children: null };
  const obj1 = { title: null };
  const intl = sharedClientTheme(customTheme[14]).intl;
  obj1.title = intl.string(require("module_2626")["3ej1LT"]);
  const items4 = [closure_12(sharedClientTheme(customTheme[13]).BottomSheetTitleHeader, obj1), , ];
  obj2 = { style: tmp.contentWrapper, children: null };
  let obj3 = { variant: "heading-md/medium", style: tmp.centeredText, children: null };
  const intl2 = sharedClientTheme(customTheme[14]).intl;
  obj3.children = intl2.string(require("module_2626").qZMUoL);
  obj2.children = closure_12(sharedClientTheme(customTheme[16]).Text, obj3);
  items4[1] = closure_12(ref, obj2);
  let obj4 = { style: tmp.ctaContainer, children: null };
  const items5 = [
    closure_12(PrimaryActionButton, {
      onPressApply() {
        let tmp2 = undefined !== first;
        if (tmp2) {
          tmp2 = undefined !== first1;
        }
        if (tmp2) {
          tmp2 = null !== ref.current;
        }
        if (tmp2) {
          closure_7(true);
          let obj = CustomThemeMobileActionCreators;
          obj.updateCustomTheme(tmp, first1);
          obj = { customUserThemeSettings: tmp, theme: first1 };
          UserSettingsActionCreators.saveClientTheme(obj);
          CustomThemeMobileActionCreators.clearPreviewTheme();
          AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
          const current = ref.current;
          current.closeActionSheet();
        }
      }
    }),

  ];
  const obj6 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = sharedClientTheme(customTheme[14]).intl;
  obj6.text = intl3.string(sharedClientTheme(customTheme[14]).t["13/7kX"]);
  obj6.onPress = function onPress() {
    if (null !== ref.current) {
      CustomThemeMobileActionCreators.clearPreviewTheme();
      ThemeActionCreators.refreshTheme();
      const current = tmp.current;
      current.closeActionSheet();
    }
  };
  items5[1] = closure_12(sharedClientTheme(customTheme[18]).Button, obj6);
  obj4.children = items5;
  items4[2] = closure_13(ref, obj4);
  obj.children = items4;
  return closure_13(sharedClientTheme(customTheme[12]).BottomSheet, obj);
};