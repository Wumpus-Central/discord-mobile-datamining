// discord_app/modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelectorTierToggle.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import importDefaultResult from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import GuildFeatures from "../../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c3 = importDefaultResult;
({ Pressable: c5, StyleSheet, View: closure_6 } = get_ActivityIndicator);
({ PREMIUM_TYPE_DISPLAY_NAME: error, PremiumTypes: closure_8 } = GuildFeatures);
({ jsx: c9, jsxs: c10 } = jsxProd);
[tmp7, tmp8] = importDefaultResult(require("items").Gradients.PREMIUM_TIER_2, 2);
let items = [tmp7, tmp8, tmp7, tmp8, tmp7];
let closure_12 = [0, 0.25, 0.5, 0.75, 1];
const createCacheKey = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, padding: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
const importDefaultResultResult = importDefaultResult(require("items").Gradients.PREMIUM_TIER_2, 2);
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_4 };
createCacheKey[2] = { position: "absolute", left: 0, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[3] = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = undefined;
obj4.width = 240;
createCacheKey[4] = obj4;
createCacheKey[5] = { flex: 1 };
createCacheKey[6] = { fontStyle: "italic" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let closure_14 = { code: "function BuyNitroPlanSelectorTierToggleTsx1(){const{nitroProgress}=this.__closure;return{opacity:nitroProgress.get()};}" };
let closure_15 = { code: "function BuyNitroPlanSelectorTierToggleTsx2(){const{gradientFlowX}=this.__closure;return{transform:[{translateX:gradientFlowX.get()}]};}" };
let closure_16 = { code: "function BuyNitroPlanSelectorTierToggleTsx3(){const{indicatorX,indicatorWidth}=this.__closure;return{transform:[{translateX:indicatorX.get()}],width:indicatorWidth.get()};}" };
let result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelectorTierToggle.tsx");

export default function BuyNitroPlanSelectorTierToggle(selectedTier) {
  selectedTier = selectedTier.selectedTier;
  ({ setSelectedTier: sharedValue, disabled: sharedValue1 } = selectedTier);
  let React;
  closure_5 = undefined;
  let ref;
  closure_7 = undefined;
  let sharedValue2;
  let sharedValue3;
  closure_10 = undefined;
  const tmp = callback();
  importDefaultResult = tmp;
  sharedValue = undefined;
  sharedValue1 = undefined;
  const _require = tmp2;
  let obj = _require(sharedValue1[8]);
  let num = 0;
  if (selectedTier !== sharedValue2.TIER_0) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  items = [selectedTier !== sharedValue2.TIER_0, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (callback) {
      num = 1;
    }
    const result = sharedValue.set(callback(sharedValue1[9]).withTiming(num, callback(sharedValue1[10]).timingStandard));
    const obj = callback(sharedValue1[9]);
  }, items);
  let tmp3Result = tmp3(tmp4[8]);
  sharedValue1 = tmp3Result.useSharedValue(0);
  const items1 = [sharedValue1];
  const effect1 = React.useEffect(() => {
    const accessibilityPreferencesSharedValue = callback(sharedValue1[11]).accessibilityPreferencesSharedValue;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      callback(sharedValue1[8]);
      const tmpResult = callback(sharedValue1[9]);
      const obj = { duration: 5000, easing: null };
      obj[1] = callback(sharedValue1[8]).Easing.linear;
      const result = sharedValue1.set(tmpResult.withRepeat(tmpResult.withTiming(-120, obj), -1, false));
      return () => closure_1_0(sharedValue1[8]).cancelAnimation(closure_2);
    }
  }, items1);
  tmp3Result = tmp3(tmp4[8]);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { nitroProgress: sharedValue };
  fn.__workletHash = 7392050192451;
  fn.__initData = closure_14;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  const fn2 = function c() {
    const obj = { translateX: sharedValue1.get() };
    items = [obj];
    obj[0] = items;
    return obj;
  };
  fn2.__closure = { gradientFlowX: sharedValue1 };
  fn2.__workletHash = 14545174926033;
  fn2.__initData = closure_15;
  const animatedStyle1 = _require(sharedValue1[8]).useAnimatedStyle(fn2);
  const tmp11 = importDefaultResult(React.useState({}), 2);
  React = tmp11[1];
  closure_5 = tmp12;
  ref = React.useRef(null);
  const tmp3Result1 = _require(sharedValue1[8]);
  closure_7 = React.useRef(new Map());
  const map = new Map();
  sharedValue2 = _require(sharedValue1[8]).useSharedValue(0);
  const tmp3Result2 = _require(sharedValue1[8]);
  sharedValue3 = _require(sharedValue1[8]).useSharedValue(0);
  closure_10 = React.useRef(false);
  const layoutEffect = React.useLayoutEffect(() => {
    let current = ref.current;
    if (null != current) {
      current = ref.current;
      const item = current.forEach((item, index) => {
        closure_0 = index;
        item.measureLayout(closure_0, (arg0, arg1, arg2, arg3) => {
          closure_0 = arg0;
          closure_1 = arg1;
          closure_2 = arg2;
          closure_3 = arg3;
          closure_1_4((arg0) => {
            const merged = Object.assign(arg0);
            const obj = { x: closure_0, y: closure_1, width: closure_2, height: closure_3 };
            obj[closure_0] = obj;
            return obj;
          });
        });
      });
    }
  }, []);
  const items2 = [tmp11[0][selectedTier], sharedValue2, sharedValue3];
  const layoutEffect1 = React.useLayoutEffect(() => {
    if (null != styles) {
      if (ref2.current) {
        const result = sharedValue2.set(callback(sharedValue1[9]).withTiming(styles.x, { duration: 220 }));
        const obj = callback(sharedValue1[9]);
        const result1 = sharedValue3.set(callback(sharedValue1[9]).withTiming(styles.width, { duration: 220 }));
        const obj2 = callback(sharedValue1[9]);
      } else {
        tmp12.current = true;
        const result2 = sharedValue2.set(styles.x);
        const result3 = sharedValue3.set(styles.width);
      }
    }
  }, items2);
  _require(sharedValue1[8]);
  const fn3 = function k() {
    const obj = { translateX: sharedValue2.get() };
    items = [obj];
    obj[0] = items;
    obj[1] = sharedValue3.get();
    return obj;
  };
  fn3.__closure = { indicatorX: sharedValue2, indicatorWidth: sharedValue3 };
  fn3.__workletHash = 16235876189557;
  fn3.__initData = closure_16;
  obj = { ref, style: tmp.pill, accessibilityRole: "tablist", children: null };
  let tmp23 = null != tmp12;
  if (tmp23) {
    obj = { pointerEvents: "none", style: null, children: null };
    const items3 = [tmp.indicator, , ];
    ({ y: obj9[0], height: obj9[1] } = tmp12);
    items3[1] = { top: null, height: null };
    items3[2] = tmp20;
    obj[1] = items3;
    let obj2 = { style: null, children: null };
    const items4 = [tmp.gradientLayer, animatedStyle];
    obj2[0] = items4;
    const obj3 = { style: null, children: null };
    const items5 = [tmp.gradientTrack, animatedStyle1];
    obj3[0] = items5;
    const obj4 = { colors: null, locations: null, start: null, end: null, style: null };
    obj4[0] = items;
    obj4[1] = closure_12;
    obj4[2] = tmp3(tmp4[13]).HorizontalGradient.START;
    obj4[3] = tmp3(tmp4[13]).HorizontalGradient.END;
    obj4[4] = tmp.gradientFill;
    obj3[1] = sharedValue3(sharedValue(tmp4[12]), obj4);
    obj2[1] = sharedValue3(sharedValue(tmp4[8]).View, obj3);
    obj[2] = sharedValue3(sharedValue(tmp4[8]).View, obj2);
    tmp23 = sharedValue3(sharedValue(tmp4[8]).View, obj);
    const tmp26 = sharedValue(tmp4[12]);
  }
  const items6 = [tmp23, ];
  const NITRO_PLAN_TIERS = tmp3(tmp4[14]).NITRO_PLAN_TIERS;
  items6[1] = NITRO_PLAN_TIERS.map((item, index) => {
    const callback = item;
    let str = "text-muted";
    if (item === callback) {
      let str2 = "interactive-text-active";
      if (item !== tmp3) {
        str2 = "text-overlay-light";
      }
      str = str2;
    }
    const obj = { variant: "heading-sm/extrabold", color: str, style: closure_3.tabText, children: null };
    const intl = callback(sharedValue1[18]).intl;
    if (item === sharedValue2.TIER_0) {
      let tUbSDK = callback(sharedValue1[18]).t.tUbSDK;
    } else {
      tUbSDK = ref[item];
    }
    obj[3] = intl.string(tUbSDK).toUpperCase();
    obj[6] = sharedValue3(callback(sharedValue1[17]).Text, obj);
    return sharedValue3(closure_5, obj, item);
  });
  obj[3] = items6;
  return closure_10(ref, obj);
};