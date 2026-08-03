// === Module 14972: useHasExpired ===

// Module 14972 (useHasExpired)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";

const require = arg1;
let c4 = importAllResult;
let closure_7 = 2 * Math.PI * 6;
let obj = { duration: 1000, easing: require("module_4054").Easing.linear };
let closure_9 = require("module_4054").createAnimatedComponent(require("inlineStyles").Circle);
obj = { outerRing: null, innerFill: null, progressRing: null };
obj[0] = { borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -require("Button").BADGE_PADDING, right: -require("Button").BADGE_PADDING, padding: require("Button").BADGE_PADDING, height: 22, width: 22, alignItems: "center", justifyContent: "center" };
let obj1 = { borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -require("Button").BADGE_PADDING, right: -require("Button").BADGE_PADDING, padding: require("Button").BADGE_PADDING, height: 22, width: 22, alignItems: "center", justifyContent: "center" };
obj[1] = { borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, height: 16, width: 16, alignItems: "center", justifyContent: "center" };
let items = [{ rotate: "90deg" }, { scaleX: -1 }];
obj[2] = { position: "absolute", transform: items };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function LurkerPreviewCooldownBadgeTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE*(1-animatedProgress.get())};}" };
let obj2 = { borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, height: 16, width: 16, alignItems: "center", justifyContent: "center" };
const memoResult = importAllResult.memo(function LurkerPreviewCooldownBadge(expiresAt) {
  expiresAt = expiresAt.expiresAt;
  let LURKER_PREVIEW_PERSIST_MS = expiresAt.totalDurationMs;
  if (LURKER_PREVIEW_PERSIST_MS === undefined) {
    LURKER_PREVIEW_PERSIST_MS = expiresAt(callback[9]).LURKER_PREVIEW_PERSIST_MS;
  }
  callback = undefined;
  let sharedValue;
  const tmp3 = callback2();
  let obj = expiresAt(callback[10]);
  const items = [expiresAt, LURKER_PREVIEW_PERSIST_MS];
  const token = obj.useToken(LURKER_PREVIEW_PERSIST_MS(callback[7]).colors.BACKGROUND_BRAND);
  callback = importAllResult.useCallback(() => {
    const result = (expiresAt - Date.now()) / LURKER_PREVIEW_PERSIST_MS;
    let num = 0;
    if (result >= 0) {
      let num2 = 1;
      if (result <= 1) {
        num2 = result;
      }
      num = num2;
    }
    return 0.9 * num;
  }, items);
  let obj1 = expiresAt(callback[4]);
  sharedValue = obj1.useSharedValue(callback());
  const items1 = [sharedValue, callback];
  const effect = importAllResult.useEffect(() => {
    let result = sharedValue.set(expiresAt(callback[11]).withTiming(callback(), outer1_8, "animate-always"));
    const interval = setInterval(() => {
      const result = _slicedToArray.set(callback(outer1_2[11]).withTiming(callback2(), outer1_8, "animate-always"));
    }, 1000);
    return () => {
      clearInterval(closure_0);
    };
  }, items1);
  let obj2 = expiresAt(callback[4]);
  const fn = function p() {
    return { strokeDashoffset: outer1_7 * (1 - sharedValue.get()) };
  };
  obj = { PROGRESS_CIRCUMFERENCE: closure_7, animatedProgress: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7162520447613;
  fn.__initData = closure_11;
  obj = { style: items2, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items2 = [tmp3.outerRing, expiresAt.style];
  obj1 = { style: tmp3.innerFill, children: null };
  const animatedProps = obj2.useAnimatedProps(fn);
  obj2 = { width: 16, height: 16, style: tmp3.progressRing, children: null };
  obj2[3] = <closure_9 cx={8} cy={8} r={6} fill="none" stroke={token} strokeWidth={4} strokeDasharray={closure_7} strokeLinecap="butt" animatedProps={animatedProps} />;
  obj1[1] = jsx(LURKER_PREVIEW_PERSIST_MS(callback[5]), { width: 16, height: 16, style: tmp3.progressRing, children: null });
  obj[4] = <View style={tmp3.innerFill}>{null}</View>;
  return <View style={items2} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/lurker_mode/native/LurkerPreviewCooldownBadge.tsx");

export default memoResult;
export const useHasExpired = function useHasExpired(prop) {
  let closure_0 = prop;
  const tmp = callback(importAllResult.useState(null), 2);
  let closure_1 = tmp[1];
  const items = [prop];
  const effect = importAllResult.useEffect(() => {
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => callback(closure_0), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items);
  return null != prop && tmp[0] === prop;
};