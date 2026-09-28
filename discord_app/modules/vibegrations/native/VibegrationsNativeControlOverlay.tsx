// discord_app/modules/vibegrations/native/VibegrationsNativeControlOverlay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import useVibegrationsControlBar from "../lib/useVibegrationsControlBar.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { block: null, border: null, glow: null, barArea: null, bar: null, status: null, copy: null, actions: null };
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
const obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.overflow = "hidden";
obj2.barArea = obj6;
obj2.bar = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let obj3 = {};
let obj7 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.status = {
  flexDirection: "row",
  flexWrap: "wrap",
  flexShrink: 1,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let obj8 = {
  flexDirection: "row",
  flexWrap: "wrap",
  flexShrink: 1,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.copy = {
  flexDirection: "row",
  flexWrap: "wrap",
  flexShrink: 1,
  alignItems: "baseline",
  columnGap: nativeDefault.space.PX_8,
};
let obj9 = {
  flexDirection: "row",
  flexWrap: "wrap",
  flexShrink: 1,
  alignItems: "baseline",
  columnGap: nativeDefault.space.PX_8,
};
obj2.actions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VibegrationsNativeControlOverlayTsx1(){const{barOffset}=this.__closure;return{transform:[{translateY:barOffset.get()}]};}",
};
const __initData2 = {
  code: "function VibegrationsNativeControlOverlayTsx2(){const{pulse}=this.__closure;return{opacity:pulse.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeControlOverlay.tsx");

export default function VibegrationsNativeControlOverlay(onOpenPublishedApp) {
  onOpenPublishedApp = onOpenPublishedApp.onOpenPublishedApp;
  let vibegrationsControlPhase;
  ({ projectId, active } = onOpenPublishedApp);
  const tmp = closure_9();
  vibegrationsControlPhase = vibegrationsControlPhase(16289).useVibegrationsControlPhase(active);
  let obj = vibegrationsControlPhase(16289);
  const vibegrationsControlStop = vibegrationsControlPhase(16289).useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  let obj2 = vibegrationsControlPhase(16289);
  let items = [AccessibilityStore];
  const stateFromStores = vibegrationsControlPhase(504).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  dependencyMap = tmp7;
  let obj3 = vibegrationsControlPhase(504);
  const sharedValue = vibegrationsControlPhase(4566).useSharedValue(-96);
  let obj4 = vibegrationsControlPhase(4566);
  const sharedValue1 = vibegrationsControlPhase(4566).useSharedValue(0.5);
  const items1 = [sharedValue, vibegrationsControlPhase];
  const effect = sharedValue.useEffect(() => {
    if ("controlling" === vibegrationsControlPhase) {
      const result = sharedValue.set(spring.withSpring(0, springPresets.SUBTLE_SPRING));
    } else if ("handoff" === tmp) {
      const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - 280;
      const obj = ReanimatedRexport;
      const obj3 = { duration: 280, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
      const result1 = sharedValue.set(obj.withDelay(diff, timing.withTiming(-96, obj3)));
    } else {
      const result2 = sharedValue.set(-96);
    }
  }, items1);
  const items2 = ["controlling" === vibegrationsControlPhase, sharedValue1, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    if (closure_2) {
      if (!stateFromStores) {
        const result = sharedValue1.set(0.2);
        const obj = ReanimatedRexport;
        const obj3 = { duration: 1200, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
        const result1 = sharedValue1.set(obj.withRepeat(timing.withTiming(0.7, obj3), -1, true));
        const fn = () => vibegrationsControlPhase(closure_2[8]).cancelAnimation(sharedValue1);
      }
      return fn;
    }
    ReanimatedRexport.cancelAnimation(sharedValue1);
    const result2 = sharedValue1.set(0.5);
  }, items2);
  const obj5 = vibegrationsControlPhase(4566);
  class C {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: closure_3.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  C.__closure = { barOffset: sharedValue };
  C.__workletHash = 4238220742706;
  C.__initData = __initData;
  const animatedStyle = vibegrationsControlPhase(4566).useAnimatedStyle(C);
  vibegrationsControlPhase(4566);
  class D {
    constructor() {
      obj = { opacity: closure_4.get() };
      return obj;
    }
  }
  D.__closure = { pulse: sharedValue1 };
  D.__workletHash = 7153982073121;
  D.__initData = __initData2;
  let tmp29Result4 = null;
  if ("idle" !== vibegrationsControlPhase) {
    let tmp29Result = null;
    if (tmp7) {
      const obj7 = { children: null };
      const obj8 = { style: tmp.block, pointerEvents: "box-only" };
      const items3 = [closure_6(sharedValue1, obj8), ,];
      const obj9 = { style: null, pointerEvents: "none" };
      const items4 = [tmp.glow, tmp14];
      obj9.style = items4;
      items3[1] = closure_6(stateFromStores(4566).View, obj9);
      const obj10 = { style: tmp.border, pointerEvents: "none" };
      items3[2] = closure_6(sharedValue1, obj10);
      obj7.children = items3;
      tmp29Result = closure_8(closure_7, obj7);
    }
    const items5 = [tmp29Result];
    const obj11 = { style: tmp.barArea, pointerEvents: "box-none", children: null };
    const obj12 = { style: null, accessibilityLiveRegion: "polite", children: null };
    const items6 = [tmp.bar, animatedStyle];
    obj12.style = items6;
    const obj13 = { style: tmp.status, children: null };
    const obj14 = { size: "sm", color: stateFromStores(576).colors.TEXT_OVERLAY_LIGHT };
    const items7 = [closure_6(tmp2(16290).SparklesIcon, obj14), ,];
    let tmp20Result = null;
    if (tmp7) {
      tmp20Result = closure_6(tmp2(13935).AILoader, { size: 12, color: "text-overlay-light" });
    }
    items7[1] = tmp20Result;
    const obj15 = { style: tmp.copy, children: null };
    const intl = tmp2(1115).intl;
    const tmp22Result = stateFromStores(3715);
    const obj16 = {
      variant: "text-sm/semibold",
      color: "text-overlay-light",
      children: intl.string(tmp7 ? tmp22Result.ydhvN1 : tmp22Result["7U6tIB"]),
    };
    const items8 = [closure_6(tmp2(4832).Text, obj16)];
    let tmp20Result4 = null;
    if (tmp7) {
      const obj17 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
      const intl2 = tmp2(1115).intl;
      obj17.children = intl2.string(tmp22(3715).NldIIG);
      tmp20Result4 = closure_6(tmp2(4832).Text, obj17);
    }
    items8[1] = tmp20Result4;
    obj15.children = items8;
    items7[2] = closure_8(sharedValue1, obj15);
    obj13.children = items7;
    const items9 = [closure_8(sharedValue1, obj13)];
    let tmp29Result3 = null;
    if (tmp7) {
      const obj18 = { style: tmp.actions, children: null };
      let tmp20Result5 = null;
      if (null != onOpenPublishedApp) {
        const obj19 = { variant: "secondary-overlay", size: "sm", text: null, onPress: null };
        const intl3 = tmp2(1115).intl;
        obj19.text = intl3.string(tmp22(3715).kj5epw);
        obj19.onPress = onOpenPublishedApp;
        tmp20Result5 = closure_6(tmp2(5281).Button, obj19);
      }
      const items10 = [tmp20Result5];
      let tmp20Result6 = null;
      if (null != stop) {
        const obj20 = { variant: "primary-overlay", size: "sm", text: null, loading: null, onPress: null };
        const intl4 = tmp2(1115).intl;
        obj20.text = intl4.string(tmp22(3715)["2HalWx"]);
        obj20.loading = stopping;
        obj20.onPress = stop;
        tmp20Result6 = closure_6(tmp2(5281).Button, obj20);
      }
      items10[1] = tmp20Result6;
      obj18.children = items10;
      tmp29Result3 = closure_8(tmp21, obj18);
    }
    const obj21 = { children: null };
    items9[1] = tmp29Result3;
    class C {
      constructor() {
        obj = { transform: null };
        obj1 = { translateY: closure_3.get() };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    obj11.children = closure_8(stateFromStores(4566).View, obj12);
    items5[1] = closure_6(sharedValue1, obj11);
    obj21.children = items5;
    tmp29Result4 = closure_8(closure_7, obj21);
  }
  return tmp29Result4;
}
