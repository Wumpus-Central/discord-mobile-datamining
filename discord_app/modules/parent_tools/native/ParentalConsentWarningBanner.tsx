// discord_app/modules/parent_tools/native/ParentalConsentWarningBanner.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { FamilyCenterSubPages } from "../FamilyCenterConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ Pressable: c4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ AnalyticEvents: closure_8, UserSettingsSections: c9, VerticalGradient: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = 28 + ThemesDefault.space.PX_16;
let closure_15 = [0.5875, 1];
const createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.flexDirection = "row";
obj1.alignItems = "center";
obj1.justifyContent = "center";
obj1.paddingHorizontal = ThemesDefault.space.PX_12;
obj1.paddingBottom = ThemesDefault.space.PX_16;
createCacheKey[1] = obj1;
createCacheKey[2] = { paddingRight: ThemesDefault.space.PX_8 };
createCacheKey[3] = { textDecorationLine: "underline" };
let closure_16 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default function ParentalConsentWarningBanner(children) {
  let token;
  let daysRemaining;
  const tmp = callback();
  const _require = tmp;
  let Gfqlpa = token;
  let obj = daysRemaining;
  const tmp2 = token(daysRemaining[7])();
  let intl = _require;
  obj1 = _require(daysRemaining[8]);
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let obj2 = _require(daysRemaining[9]);
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  let obj3 = _require(daysRemaining[10]);
  let isOnMainSurface = obj3.useIsOnMainSurface();
  let obj4 = _require(daysRemaining[11]);
  let obj5 = _require(daysRemaining[12]);
  token = obj5.useToken(token(daysRemaining[5]).colors.BACKGROUND_FEEDBACK_WARNING);
  let items = [token];
  daysRemaining = undefined;
  const memo = React.useMemo(() => {
    const items = [token, ];
    const obj = token(daysRemaining[13])(token);
    items[1] = token(daysRemaining[13])(token).setAlpha(0).toRgbString();
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
  callback = React.useCallback(() => {
    token(daysRemaining[14]);
    let obj = { days_remaining: daysRemaining };
    obj.track(closure_1_8.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj);
    const tab = token(daysRemaining[15]).selectTab(FamilyCenterSubPages.REQUESTS);
    const obj3 = token(daysRemaining[15]);
    obj = { screen: closure_1_9.FAMILY_CENTER };
    lib(daysRemaining[16]).openUserSettings(obj);
  }, items1);
  const callback1 = React.useCallback((children) => closure_1_11(lib(daysRemaining[17]).Text, { variant: "text-sm/medium", color: "text-strong", style: lib.link, children }, arg1), items2);
  const items3 = [StyleSheet.absoluteFill, ];
  let num2 = 0;
  if (isOnMainSurface) {
    num2 = closure_14;
  }
  items3[1] = { marginTop: num2 };
  children = [, ];
  children[0] = callback(View, { style: items3, children: children.children });
  let tmp18 = null;
  if (isOnMainSurface) {
    tmp18 = null;
    if (null != daysRemaining) {
      const items5 = [tmp.strip, ];
      obj = { height: null };
      obj[0] = sum;
      items5[1] = obj;
      obj[0] = items5;
      obj1 = { pointerEvents: "none", style: null, colors: null, locations: null, start: null, end: null };
      obj1[1] = StyleSheet.absoluteFill;
      obj1[2] = memo;
      obj1[3] = closure_15;
      ({ START: obj10[4], END: obj10[5] } = closure_10);
      const items6 = [callback(Gfqlpa(obj[18]), obj1), ];
      obj2 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, style: null, children: null };
      const intl2 = intl(obj[19]).intl;
      obj2[1] = intl2.string(Gfqlpa(obj[20]).O2HKdA);
      obj2[2] = callback;
      const items7 = [tmp.pressable, ];
      obj3 = { paddingTop: null };
      obj3[0] = tmp2.top + 8;
      items7[1] = obj3;
      obj2[3] = items7;
      obj4 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: null, children: null };
      obj4[3] = tmp.label;
      if (0 === daysRemaining) {
        intl = intl(obj[19]).intl;
        Gfqlpa = Gfqlpa(obj[20]).Gfqlpa;
        obj = { connectHook: null };
        obj[0] = callback1;
        let formatResult = intl.format(Gfqlpa, obj);
      } else {
        const intl3 = intl(obj[19]).intl;
        obj5 = { count: null, connectHook: null };
        obj5[0] = daysRemaining;
        obj5[1] = callback1;
        formatResult = intl3.format(Gfqlpa(obj[20]).ZBK5mM, obj5);
      }
      obj4[4] = formatResult;
      obj4 = callback(intl(obj[17]).Text, obj4);
      obj2[4] = obj4;
      obj2 = callback(closure_4, obj2);
      items6[1] = obj2;
      obj[2] = items6;
      callback2(View, obj);
    }
  }
  children[1] = tmp18;
  return callback2(closure_13, { children });
};