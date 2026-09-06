// === Module 16997: ParentalConsentWarningBanner ===

// Module 16997 (ParentalConsentWarningBanner)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4556 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import tinycolorDefault from "tinycolor" /* 7552 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const FamilyCenterSubPages = fn(7538).FamilyCenterSubPages;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = 28 + nativeDefault.space.PX_16;
const locations = [0.5875, 1];
fn(4560);
let createStyles = { strip: null, pressable: null, label: null, link: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.strip = rect;
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flexDirection = "row";
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
createStyles.paddingHorizontal = nativeDefault.space.PX_12;
createStyles.paddingBottom = nativeDefault.space.PX_16;
createStyles.pressable = createStyles;
createStyles.label = { paddingRight: nativeDefault.space.PX_8 };
createStyles.link = { textDecorationLine: "underline" };
let closure_16 = createStyles.createStyles(createStyles);
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
  let obj1 = require("useParentalConsentWarning");
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let obj2 = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  let obj3 = require("useIsOnMainSurface");
  let isOnMainSurface = obj3.useIsOnMainSurface();
  let obj4 = require("useGlobalStatusIndicatorState");
  let obj5 = require("useToken");
  token = obj5.useToken(token(daysRemaining[5]).colors.BACKGROUND_FEEDBACK_WARNING);
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
    isOnMainSurface = !obj4.useGlobalStatusIndicatorState().isVisible;
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
  const callback = obj7.useCallback(() => {
    let obj = { days_remaining: daysRemaining };
    obj.track(constants.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj);
    const tab = FamilyCenterActionCreatorsDefault.selectTab(FamilyCenterSubPages.REQUESTS);
    obj = { screen: constants2.FAMILY_CENTER };
    openUserSettings.openUserSettings(obj);
  }, items1);
  const callback1 = obj7.useCallback((children, arg1) => closure_2_11(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, children }, arg1), items2);
  const items3 = [StyleSheet.absoluteFill, ];
  let num2 = 0;
  if (isOnMainSurface) {
    num2 = closure_14;
  }
  items3[1] = { marginTop: num2 };
  children = [closure_11(View, { style: items3, children: children.children }), ];
  let tmp18 = null;
  if (isOnMainSurface) {
    tmp18 = null;
    if (null != daysRemaining) {
      obj = { style: null, pointerEvents: "box-none", children: null };
      const items5 = [tmp.strip, ];
      obj = { height: sum };
      items5[1] = obj;
      obj.style = items5;
      obj1 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: memo, locations, start: null, end: null };
      ({ START: obj10.start, END: obj10.end } = closure_10);
      const items6 = [tmp15(Gfqlpa(obj[18]), obj1), ];
      obj2 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, style: null, children: null };
      const intl2 = intl(obj[19]).intl;
      obj2.accessibilityHint = intl2.string(Gfqlpa(obj[20]).O2HKdA);
      obj2.onPress = callback;
      const items7 = [tmp.pressable, ];
      obj3 = { paddingTop: tmp2.top + 8 };
      items7[1] = obj3;
      obj2.style = items7;
      obj4 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp.label, children: null };
      if (0 === daysRemaining) {
        intl = intl(obj[19]).intl;
        Gfqlpa = Gfqlpa(obj[20]).Gfqlpa;
        obj = { connectHook: callback1 };
        let formatResult = intl.format(Gfqlpa, obj);
      } else {
        const intl3 = intl(obj[19]).intl;
        obj5 = { count: daysRemaining, connectHook: callback1 };
        formatResult = intl3.format(Gfqlpa(obj[20]).ZBK5mM, obj5);
      }
      obj4.children = formatResult;
      obj4 = tmp15(intl(obj[17]).Text, obj4);
      obj2.children = obj4;
      obj2 = tmp15(closure_4, obj2);
      items6[1] = obj2;
      obj.children = items6;
      tmp13(tmp16, obj);
    }
  }
  children[1] = tmp18;
  return closure_12(closure_13, { children });
};