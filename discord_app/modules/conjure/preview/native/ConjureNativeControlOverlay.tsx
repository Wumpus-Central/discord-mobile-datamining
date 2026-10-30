// === Module 12060: ConjureNativeControlOverlay ===

// Module 12060 (ConjureNativeControlOverlay)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import spring from "spring" /* 5632 */;
import springPresets from "springPresets" /* 5633 */;
import useConjureControlBar from "useConjureControlBar" /* 12061 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { root: { flex: 1 }, content: { flex: 1 }, block: null, border: null, glow: null, barArea: null, bar: null, title: null, actions: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.block = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderWidth = 2;
obj4.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
obj2.border = obj4;
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.borderWidth = nativeDefault.space.PX_8;
obj5.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
obj2.glow = obj5;
obj2.barArea = { overflow: "hidden" };
const rect = { position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.bar = rect;
obj2.title = { flexGrow: 1, flexShrink: 1 };
obj2.actions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function ConjureNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function ConjureNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default function ConjureNativeControlOverlay(arg0) {
  ({ projectId, visible } = arg0);
  let conjureControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ active, children } = arg0);
  const tmp = closure_9();
  conjureControlPhase = conjureControlPhase(12061).useConjureControlPhase(active);
  let obj = conjureControlPhase(12061);
  const conjureControlStop = conjureControlPhase(12061).useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  let obj2 = conjureControlPhase(12061);
  const conjureControlTuning = conjureControlPhase(10898).useConjureControlTuning(projectId);
  let obj3 = conjureControlPhase(10898);
  let items = [sharedValue2];
  const stateFromStores = conjureControlPhase(504).useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp8 = visible;
  if (visible) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  let obj4 = conjureControlPhase(504);
  sharedValue = conjureControlPhase(5090).useSharedValue(0);
  const tmp2Result = conjureControlPhase(5090);
  sharedValue1 = conjureControlPhase(5090).useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    if ("controlling" === conjureControlPhase) {
      let num5 = 1;
      if (!stateFromStores) {
        num5 = spring.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      const result = sharedValue1.set(num5);
    } else if ("handoff" === tmp) {
      let num2 = 280;
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - 280;
      const obj = ReanimatedRexport;
      if (stateFromStores) {
        num2 = 0;
      }
      const obj3 = { duration: num2, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
      const result1 = sharedValue1.set(obj.withDelay(diff, timing.withTiming(0, obj3)));
    } else {
      const result2 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result6 = conjureControlPhase(5090);
  sharedValue2 = conjureControlPhase(5090).useSharedValue(0.5);
  const items2 = [tmp8, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    if (closure_2) {
      if (!stateFromStores) {
        const result = sharedValue2.set(0.2);
        const obj = ReanimatedRexport;
        const obj3 = { duration: 1200, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
        const result1 = sharedValue2.set(obj.withRepeat(timing.withTiming(0.7, obj3), -1, true));
        const fn = () => conjureControlPhase(closure_2[9]).cancelAnimation(sharedValue2);
      }
      return fn;
    }
    ReanimatedRexport.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result7 = conjureControlPhase(5090);
  class H {
    constructor() {
      obj = { height: null };
      bound = Math.max(0, closure_4.get());
      obj.height = bound * closure_3.get();
      return obj;
    }
  }
  H.__closure = { shown: sharedValue1, barHeight: sharedValue };
  H.__workletHash = 5735939888549;
  H.__initData = __initData;
  const animatedStyle = conjureControlPhase(5090).useAnimatedStyle(H);
  const tmp2Result8 = conjureControlPhase(5090);
  class T {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      diff = closure_4.get() - 1;
      obj1.translateY = diff * closure_3.get();
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  T.__closure = { shown: sharedValue1, barHeight: sharedValue };
  T.__workletHash = 11424550793114;
  T.__initData = __initData2;
  const animatedStyle1 = conjureControlPhase(5090).useAnimatedStyle(T);
  const tmp2Result9 = conjureControlPhase(5090);
  class P {
    constructor() {
      obj = { opacity: closure_5.get() };
      return obj;
    }
  }
  P.__closure = { pulse: sharedValue2 };
  P.__workletHash = 3342596553897;
  P.__initData = __initData3;
  const animatedStyle2 = conjureControlPhase(5090).useAnimatedStyle(P);
  const intl = tmp2(1114).intl;
  const tmp18 = stateFromStores(3865);
  if (tmp8) {
    if (conjureControlTuning) {
      let prop = tmp18["VJW/5P"];
    } else {
      prop = tmp18["+hD2Iz"];
    }
  } else {
    const stringResult = intl.string(tmp18["h+i1r9"]);
    const obj5 = { style: tmp.root, children: null };
    let tmp38Result4 = null;
    if (visible) {
      tmp38Result4 = null;
      if ("idle" !== conjureControlPhase) {
        const obj6 = { style: null, children: null };
        const items3 = [tmp.barArea, animatedStyle];
        obj6.style = items3;
        const obj7 = { style: null, onLayout: null, accessibilityLiveRegion: "polite", children: null };
        const items4 = [tmp.bar, animatedStyle1];
        obj7.style = items4;
        obj7.onLayout = function onLayout(nativeEvent) {
          return sharedValue.set(nativeEvent.nativeEvent.layout.height);
        };
        if (tmp8) {
          let tmp38Result = closure_6(tmp2(12062).AILoader, { size: 12, color: "text-overlay-light" });
        } else {
          const obj8 = { size: "sm", color: tmp17(575).colors.TEXT_OVERLAY_LIGHT };
          tmp38Result = closure_6(tmp2(12066).SparklesIcon, obj8);
        }
        const items5 = [tmp38Result, , ];
        const obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: null, children: null };
        let combined = stringResult;
        if (tmp8) {
          const intl2 = tmp2(1114).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + stringResult + ". " + intl2.string(tmp17(3865).fg1sor);
        }
        obj9.accessibilityLabel = combined;
        obj9.children = stringResult;
        items5[1] = closure_6(tmp2(5619).Text, obj9);
        let tmp38Result3 = null;
        if (tmp8) {
          tmp38Result3 = null;
          if (null != stop) {
            const obj10 = { style: tmp.actions, children: null };
            const obj11 = { variant: "primary-overlay", size: "sm", text: null, loading: null, onPress: null };
            const intl3 = tmp2(1114).intl;
            obj11.text = intl3.string(tmp17(3865).oU59sU);
            obj11.loading = stopping;
            obj11.onPress = stop;
            obj10.children = closure_6(tmp2(5629).Button, obj11);
            tmp38Result3 = closure_6(tmp26, obj10);
          }
        }
        items5[2] = tmp38Result3;
        obj7.children = items5;
        obj6.children = closure_7(tmp17(5090).View, obj7);
        tmp38Result4 = closure_6(tmp17(5090).View, obj6);
      }
    }
    const items6 = [tmp38Result4, , ];
    const obj12 = { style: tmp.content, children: null };
    const items7 = [children, ];
    let tmp33 = null;
    if (tmp8) {
      const obj13 = { style: tmp.block, pointerEvents: "box-only" };
      tmp33 = closure_6(tmp26, obj13);
    }
    items7[1] = tmp33;
    obj12.children = items7;
    items6[1] = closure_7(sharedValue1, obj12);
    let tmp25Result = null;
    if (tmp8) {
      const obj14 = { children: null };
      const obj15 = { style: null, pointerEvents: "none" };
      const items8 = [tmp.glow, animatedStyle2];
      obj15.style = items8;
      const items9 = [closure_6(tmp17(5090).View, obj15), ];
      const obj16 = { style: tmp.border, pointerEvents: "none" };
      items9[1] = closure_6(tmp26, obj16);
      obj14.children = items9;
      tmp25Result = closure_7(closure_8, obj14);
    }
    items6[2] = tmp25Result;
    obj5.children = items6;
    return closure_7(sharedValue1, obj5);
  }
  const tmp2Result10 = conjureControlPhase(5090);
};