// === Module 13406: BuyNitroPlanSelectorTierToggle ===

// Module 13406 (BuyNitroPlanSelectorTierToggle)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import timing from "timing" /* 4561 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 4563 */;
import timingPresets from "timingPresets" /* 4564 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const PremiumConstants = fn(1373);
({ PREMIUM_TYPE_DISPLAY_NAME: closure_7, PremiumTypes: closure_8 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
[tmp7, tmp8] = _slicedToArray(fn(7432).Gradients.PREMIUM_TIER_2, 2);
let items = [tmp7, tmp8, tmp7, tmp8, tmp7];
const locations = [0, 0.25, 0.5, 0.75, 1];
fn(4560);
let createStyles = { pill: null, tab: null, indicator: null, gradientLayer: null, gradientTrack: null, gradientFill: null };
createStyles = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, padding: nativeDefault.space.PX_4 };
createStyles.pill = createStyles;
const importDefaultResultResult = _slicedToArray(fn(7432).Gradients.PREMIUM_TIER_2, 2);
createStyles.tab = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
createStyles.indicator = { position: "absolute", left: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.gradientLayer = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = undefined;
obj4.width = 240;
createStyles.gradientTrack = obj4;
createStyles.gradientFill = { flex: 1 };
let closure_13 = createStyles.createStyles(createStyles);
const __initData = { code: "function BuyNitroPlanSelectorTierToggleTsx1(){const{nitroProgress}=this.__closure;return{opacity:nitroProgress.get()};}" };
const __initData2 = { code: "function BuyNitroPlanSelectorTierToggleTsx2(){const{gradientFlowX}=this.__closure;return{transform:[{translateX:gradientFlowX.get()}]};}" };
const __initData3 = { code: "function BuyNitroPlanSelectorTierToggleTsx3(){const{indicatorX,indicatorWidth}=this.__closure;return{transform:[{translateX:indicatorX.get()}],width:indicatorWidth.get()};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelectorTierToggle.tsx");

export default function BuyNitroPlanSelectorTierToggle(selectedTier) {
  selectedTier = selectedTier.selectedTier;
  ({ setSelectedTier: importDefault, disabled: dependencyMap } = selectedTier);
  noop = undefined;
  let styles;
  let ref;
  let sharedValue2;
  let sharedValue3;
  let ref2;
  const tmp = closure_13();
  _slicedToArray = tmp;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_0 = tmp2;
  let obj = selectedTier(4296);
  let num = 0;
  if (selectedTier !== sharedValue2.TIER_0) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  closure_129_1 = sharedValue;
  items = [selectedTier !== sharedValue2.TIER_0, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (selectedTier) {
      num = 1;
    }
    const result = importDefault.set(timing.withTiming(num, timingPresets.timingStandard));
  }, items);
  let tmp3Result = tmp3(4296);
  const sharedValue1 = tmp3Result.useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items1 = [sharedValue1];
  const effect1 = noop.useEffect(() => {
    const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      const tmpResult = timing;
      const obj = { duration: 5000, easing: ReanimatedRexport.Easing.linear };
      const result = disabled.set(tmpResult.withRepeat(tmpResult.withTiming(-120, obj), -1, false));
      return () => selectedTier(disabled[8]).cancelAnimation(closure_1_2);
    }
  }, items1);
  tmp3Result = tmp3(4296);
  const fn = function s() {
    return { opacity: importDefault.get() };
  };
  fn.__closure = { nitroProgress: sharedValue };
  fn.__workletHash = 7392050192451;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  const fn2 = function c() {
    let obj = { transform: null };
    obj = { translateX: disabled.get() };
    items = [obj];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { gradientFlowX: sharedValue1 };
  fn2.__workletHash = 14545174926033;
  fn2.__initData = __initData2;
  const animatedStyle1 = selectedTier(4296).useAnimatedStyle(fn2);
  const tmp11 = _slicedToArray(noop.useState({}), 2);
  noop = tmp11[1];
  styles = tmp12;
  noop.useRef(null);
  const tmp3Result1 = selectedTier(4296);
  ref = noop.useRef(new Map());
  const map = new Map();
  sharedValue2 = selectedTier(4296).useSharedValue(0);
  const tmp3Result2 = selectedTier(4296);
  sharedValue3 = selectedTier(4296).useSharedValue(0);
  ref2 = noop.useRef(false);
  const layoutEffect = noop.useLayoutEffect(() => {
    let current = ref.current;
    if (null != current) {
      current = ref.current;
      const item = current.forEach((measureLayout, index) => {
        closure_0 = index;
        measureLayout.measureLayout(current, (x, y, width, height) => {
          closure_1_4((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            const size = { x, y, width, height };
            obj[x] = size;
            return obj;
          });
        });
      });
    }
  }, []);
  const items2 = [tmp11[0][selectedTier], sharedValue2, sharedValue3];
  const layoutEffect1 = noop.useLayoutEffect(() => {
    if (null != styles) {
      if (ref2.current) {
        const result = sharedValue2.set(timing.withTiming(styles.x, { duration: 220 }));
        const result1 = sharedValue3.set(timing.withTiming(styles.width, { duration: 220 }));
      } else {
        tmp12.current = true;
        const result2 = sharedValue2.set(styles.x);
        const result3 = sharedValue3.set(styles.width);
      }
    }
  }, items2);
  selectedTier(4296);
  const fn3 = function k() {
    let obj = { transform: null, width: null };
    obj = { translateX: sharedValue2.get() };
    items = [obj];
    obj.transform = items;
    obj.width = sharedValue3.get();
    return obj;
  };
  fn3.__closure = { indicatorX: sharedValue2, indicatorWidth: sharedValue3 };
  fn3.__workletHash = 16235876189557;
  fn3.__initData = __initData3;
  obj = { ref, style: tmp.pill, accessibilityRole: "tablist", children: null };
  let tmp23 = null != tmp12;
  if (tmp23) {
    obj = { pointerEvents: "none", style: null, children: null };
    const items3 = [tmp.indicator, , ];
    ({ y: obj9.top, height: obj9.height } = tmp12);
    items3[1] = { top: null, height: null };
    items3[2] = tmp20;
    obj.style = items3;
    let obj2 = { style: null, children: null };
    const items4 = [tmp.gradientLayer, animatedStyle];
    obj2.style = items4;
    const obj3 = { style: null, children: null };
    const items5 = [tmp.gradientTrack, animatedStyle1];
    obj3.style = items5;
    const obj4 = { colors: items, locations, start: tmp3(1093).HorizontalGradient.START, end: tmp3(1093).HorizontalGradient.END, style: tmp.gradientFill };
    obj3.children = sharedValue3(LinearGradientDefault, obj4);
    obj2.children = sharedValue3(ReanimatedRexportDefault.View, obj3);
    obj.children = sharedValue3(ReanimatedRexportDefault.View, obj2);
    tmp23 = sharedValue3(ReanimatedRexportDefault.View, obj);
    const obj1 = { top: null, height: null };
  }
  const items6 = [tmp23, ];
  const NITRO_PLAN_TIERS = tmp3(13358).NITRO_PLAN_TIERS;
  items6[1] = NITRO_PLAN_TIERS.map((item) => {
    closure_0 = item;
    let str = "text-muted";
    if (item === closure_0) {
      let str2 = "interactive-text-active";
      if (item !== tmp3) {
        str2 = "text-overlay-light";
      }
      str = str2;
    }
    let obj = {
      ref(arg0) {
        if (null != arg0) {
          const current = ref.current;
          const result = current.set(closure_0, arg0);
        }
      },
      style: tab.tab,
      disabled,
      onPress() {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.SELECTION);
        closure_2_1(closure_0);
      },
      accessibilityRole: "tab",
      accessibilityState: { selected: tmp, disabled },
      children: null
    };
    obj = { variant: "nitro-xs", color: str, children: null };
    const intl = selectedTier(disabled[18]).intl;
    if (item === sharedValue2.TIER_0) {
      let tUbSDK = selectedTier(disabled[18]).t.tUbSDK;
    } else {
      tUbSDK = ref[item];
    }
    obj.children = intl.string(tUbSDK);
    obj.children = sharedValue3(selectedTier(disabled[17]).Text, obj);
    return sharedValue3(closure_5, obj, item);
  });
  obj.children = items6;
  return ref2(ref, obj);
};