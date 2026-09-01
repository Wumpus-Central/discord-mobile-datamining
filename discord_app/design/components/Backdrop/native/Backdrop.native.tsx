// discord_app/design/components/Backdrop/native/Backdrop.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef4217 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Pressable: c3, StyleSheet } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = {};
createCacheKey = {
  fill: StyleSheet.absoluteFillObject,
  backdrop: null,
  backdropOpaque: null,
  accessibilityDismiss: null,
};
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, height: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
const result = require("set").fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = function Backdrop(animatedProps) {
  animatedProps = animatedProps.animatedProps;
  ({ style, accessibleDismissStyle } = animatedProps);
  if (animatedProps === undefined) {
    animatedProps = closure_6;
  }
  let flag = animatedProps.opaque;
  if (flag === undefined) {
    flag = false;
  }
  let str = animatedProps.blur;
  if (str === undefined) {
    str = "none";
  }
  ({ onDismiss, accessibilityLabel } = animatedProps);
  if (accessibilityLabel === undefined) {
    const intl = getSystemLocale.intl;
    accessibilityLabel = intl.string(getSystemLocale.t.WAI6xu);
  }
  let backgroundColor = callback2();
  let obj = ManaContext;
  obj = { onPress: onDismiss, "aria-hidden": true };
  obj = { style: items, pointerEvents: "box-none", animatedProps, children: null };
  items = [backgroundColor.fill, style];
  let tmp4 = null != onDismiss;
  if (tmp4) {
    obj1 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, "aria-hidden": null };
    const items1 = [backgroundColor.accessibilityDismiss, ,];
    const obj2 = { top: null };
    obj2[0] = useSafeAreaInsetsDefault().top;
    items1[1] = obj2;
    items1[2] = accessibleDismissStyle;
    obj1[0] = items1;
    obj1[1] = onDismiss;
    obj1[3] = accessibilityLabel;
    obj1[4] = animatedProps["aria-hidden"];
    tmp4 = callback(closure_3, obj1);
  }
  const items2 = [tmp4];
  if ("none" !== str) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.style = backgroundColor.fill;
    if ("none" === str) {
      let num = 0;
      const obj4 = { blurAmount: null, style: null, blurTheme: null, tintColor: null, android_fallbackColor: null };
      obj4[0] = num;
      obj4[1] = backgroundColor.fill;
      obj4[2] = obj.useThemeContext().theme;
      obj4[3] = backgroundColor.backdrop.backgroundColor;
      backgroundColor = backgroundColor.backdrop.backgroundColor;
      obj4[4] = backgroundColor;
      obj3.children = tmp7(tmp15, obj4);
    } else if ("subtle" !== str) {
      num = 0.25;
    }
    num = 0.05;
  } else {
    const obj5 = {};
    const merged1 = Object.assign(obj);
    const items3 = [backgroundColor.fill, flag ? backgroundColor.backdropOpaque : backgroundColor.backdrop];
    obj5.style = items3;
    items2[1] = tmp7(tmp8, obj5);
    obj[3] = items2;
    return closure_5(_modDef4217.View, obj);
  }
};
