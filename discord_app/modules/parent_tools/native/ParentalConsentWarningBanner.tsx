// === Module 17564: ParentalConsentWarningBanner ===

// Module 17564 (ParentalConsentWarningBanner)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4825 */;
import openUserSettings from "openUserSettings" /* 7712 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7869 */;
import tinycolorDefault from "tinycolor" /* 7882 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const FamilyCenterSubPages = fn(7868).FamilyCenterSubPages;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = 28 + nativeDefault.space.PX_16;
const locations = [0.5875, 1];
const createStyles = fn(4829);
let obj2 = { strip: null, pressable: null, label: null, link: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.strip = rect;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flexDirection = "row";
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.paddingHorizontal = nativeDefault.space.PX_12;
obj3.paddingBottom = nativeDefault.space.PX_16;
obj2.pressable = obj3;
obj2.label = { paddingRight: nativeDefault.space.PX_8 };
obj2.link = { textDecorationLine: "underline" };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default function ParentalConsentWarningBanner(children) {
  let token;
  let daysRemaining;
  const tmp = closure_16();
  _require = tmp;
  let Gfqlpa = token;
  let obj = daysRemaining;
  const tmp2 = token(daysRemaining[7])();
  let intl = _require;
  const parentalConsentWarning = require("useParentalConsentWarning").useParentalConsentWarning();
  let obj2 = require("useParentalConsentWarning");
  const isParentalConsentBannerActive = require("useIsParentalConsentBannerActive").useIsParentalConsentBannerActive();
  let obj3 = require("useIsParentalConsentBannerActive");
  let isOnMainSurface = require("useIsOnMainSurface").useIsOnMainSurface();
  const obj4 = require("useIsOnMainSurface");
  const obj5 = require("useGlobalStatusIndicatorState");
  token = require("useToken").useToken(token(daysRemaining[5]).colors.BACKGROUND_FEEDBACK_WARNING);
  let items = [token];
  daysRemaining = undefined;
  const memo = noop.useMemo(() => {
    const items = [token, ];
    const obj = tinycolorDefault(token);
    items[1] = tinycolorDefault(token).setAlpha(0).toRgbString();
    return items;
  }, items);
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  if (isOnMainSurface) {
    isOnMainSurface = isParentalConsentBannerActive;
  }
  if (isOnMainSurface) {
    isOnMainSurface = !obj5.useGlobalStatusIndicatorState().isVisible;
  }
  if (isOnMainSurface) {
    isOnMainSurface = null != daysRemaining;
  }
  if (isOnMainSurface) {
    isOnMainSurface = daysRemaining >= 0;
  }
  const items1 = [daysRemaining];
  const sum = tmp2.top + closure_14;
  const items2 = [tmp.link];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: daysRemaining });
    const obj2 = { days_remaining: daysRemaining };
    const tab = FamilyCenterActionCreatorsDefault.selectTab(FamilyCenterSubPages.REQUESTS);
    openUserSettings.openUserSettings({ screen: constants2.FAMILY_CENTER });
  }, items1);
  const callback1 = noop.useCallback((children, arg1) => closure_2_11(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, children }, arg1), items2);
  const items3 = [StyleSheet.absoluteFill, ];
  let num2 = 0;
  if (isOnMainSurface) {
    num2 = closure_14;
  }
  items3[1] = { marginTop: num2 };
  children = [, ];
  children[0] = closure_11(View, { style: items3, children: children.children });
  let tmp18 = null;
  if (isOnMainSurface) {
    tmp18 = null;
    if (null != daysRemaining) {
      const obj8 = { style: null, pointerEvents: "box-none", children: null };
      const items5 = [tmp.strip, ];
      const obj9 = { height: sum };
      items5[1] = obj9;
      obj8.style = items5;
      const obj11 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: memo, locations, start: null, end: null };
      ({ START: obj10.start, END: obj10.end } = closure_10);
      const items6 = [closure_11(Gfqlpa(obj[18]), obj11), ];
      let obj12 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, style: null, children: null };
      const intl2 = intl(obj[19]).intl;
      obj12.accessibilityHint = intl2.string(Gfqlpa(obj[20]).O2HKdA);
      obj12.onPress = callback;
      const items7 = [tmp.pressable, ];
      const obj13 = { paddingTop: tmp2.top + 8 };
      items7[1] = obj13;
      obj12.style = items7;
      let obj14 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp.label, children: null };
      if (0 === daysRemaining) {
        intl = intl(obj[19]).intl;
        Gfqlpa = Gfqlpa(obj[20]).Gfqlpa;
        obj = { connectHook: callback1 };
        let formatResult = intl.format(Gfqlpa, obj);
      } else {
        const intl3 = intl(obj[19]).intl;
        const obj21 = { count: daysRemaining, connectHook: callback1 };
        formatResult = intl3.format(Gfqlpa(obj[20]).ZBK5mM, obj21);
      }
      obj14.children = formatResult;
      obj14 = closure_11(intl(obj[17]).Text, obj14);
      obj12.children = obj14;
      obj12 = closure_11(closure_4, obj12);
      items6[1] = obj12;
      obj8.children = items6;
      closure_12(View, obj8);
    }
  }
  children[1] = tmp18;
  return closure_12(closure_13, { children });
};