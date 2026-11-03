// discord_app/modules/conjure/preview/native/ConjureNativeControlOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _modDef3995 from "../../intl/ConjureUntranslated.messages.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import useConjureControlBar from "../useConjureControlBar.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  root: { flex: 1 },
  content: { flex: 1 },
  block: null,
  border: null,
  glow: null,
  barArea: null,
  bar: null,
  title: null,
  actions: null,
};
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
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.bar = rect;
obj2.title = { flexGrow: 1, flexShrink: 1 };
obj2.actions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function ConjureNativeControlOverlayTsx1(){let[shown,barHeight]=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};})",
};
let closure_11 = {
  code: "(function ConjureNativeControlOverlayTsx2(){let[shown,barHeight]=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};})",
};
let closure_12 = {
  code: "(function ConjureNativeControlOverlayTsx3(){let[pulse]=this.__closure;return{opacity:pulse.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default function ConjureNativeControlOverlay(arg0) {
  ({ projectId, visible } = arg0);
  _require = undefined;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ active, children } = arg0);
  const tmp = closure_9();
  const conjureControlPhase = require("useConjureControlBar").useConjureControlPhase(active);
  _require = conjureControlPhase;
  let obj = require("useConjureControlBar");
  const conjureControlStop = require("useConjureControlBar").useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  let obj2 = require("useConjureControlBar");
  const conjureControlTuning = require("conjurePreviewControlLease").useConjureControlTuning(projectId);
  let obj3 = require("conjurePreviewControlLease");
  items = [sharedValue2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => sharedValue2.useReducedMotion);
  importDefault = stateFromStores;
  let tmp8 = visible;
  if (visible) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  let obj4 = require("initialize");
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    if ("controlling" === c0) {
      let num5 = 1;
      if (!c1) {
        num5 = spring_spring.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      const result = sharedValue1.set(num5);
    } else if ("handoff" === tmp) {
      let num2 = 280;
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - 280;
      const obj = _mod1652;
      if (c1) {
        num2 = 0;
      }
      const obj3 = { duration: num2, easing: null };
      const Easing = _mod1652.Easing;
      obj3.easing = Easing.in(_mod1652.Easing.ease);
      const result1 = sharedValue1.set(obj.withDelay(diff, timing_timing.withTiming(0, obj3)));
    } else {
      const result2 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result6 = require("../../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0.5);
  const items2 = [tmp8, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    if (closure_2) {
      if (!c1) {
        const result = sharedValue2.set(0.2);
        const obj = _mod1652;
        const obj3 = { duration: 1200, easing: null };
        const Easing = _mod1652.Easing;
        obj3.easing = Easing.inOut(_mod1652.Easing.ease);
        const result1 = sharedValue2.set(obj.withRepeat(timing_timing.withTiming(0.7, obj3), -1, true));
        const fn = () => c0(closure_2[9]).cancelAnimation(sharedValue2);
      }
      return fn;
    }
    _mod1652.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result7 = require("../../../../../_runtime/metro/01652__.js");
  const items3 = [closure_10, sharedValue1, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp14, tmp15, tmp16] = items3;
  class ConjureNativeControlOverlayTsx1 {
    constructor() {
      obj = { height: null };
      bound = Math.max(0, closure_0.get());
      obj.height = bound * closure_1.get();
      return obj;
    }
  }
  const items4 = [tmp15, tmp16];
  ConjureNativeControlOverlayTsx1.__closure = items4;
  ConjureNativeControlOverlayTsx1.__workletHash = 2210719149660;
  ConjureNativeControlOverlayTsx1.__initData = tmp14;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ConjureNativeControlOverlayTsx1,
  );
  const tmp2Result8 = require("../../../../../_runtime/metro/01652__.js");
  const items5 = [closure_11, sharedValue1, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items5;
  class ConjureNativeControlOverlayTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      diff = closure_0.get() - 1;
      obj1.translateY = diff * closure_1.get();
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items6 = [tmp19, tmp20];
  ConjureNativeControlOverlayTsx2.__closure = items6;
  ConjureNativeControlOverlayTsx2.__workletHash = 12257928691075;
  ConjureNativeControlOverlayTsx2.__initData = tmp18;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ConjureNativeControlOverlayTsx2,
  );
  const tmp2Result9 = require("../../../../../_runtime/metro/01652__.js");
  const items7 = [closure_12, sharedValue2];
  _require = undefined;
  [tmp22, tmp23] = items7;
  class ConjureNativeControlOverlayTsx3 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items8 = [tmp23];
  ConjureNativeControlOverlayTsx3.__closure = items8;
  ConjureNativeControlOverlayTsx3.__workletHash = 14753805314992;
  ConjureNativeControlOverlayTsx3.__initData = tmp22;
  const animatedStyle2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ConjureNativeControlOverlayTsx3,
  );
  const intl = tmp2(1113).intl;
  const tmp26 = _modDef3995;
  if (tmp8) {
    if (conjureControlTuning) {
      let prop = tmp26["VJW/5P"];
    } else {
      prop = tmp26["+hD2Iz"];
    }
  } else {
    const stringResult = intl.string(tmp26["h+i1r9"]);
    const obj5 = { style: tmp.root, children: null };
    let tmp46Result4 = null;
    if (visible) {
      tmp46Result4 = null;
      if ("idle" !== conjureControlPhase) {
        const obj6 = { style: null, children: null };
        const items9 = [tmp.barArea, animatedStyle];
        obj6.style = items9;
        const obj7 = { style: null, onLayout: null, accessibilityLiveRegion: "polite", children: null };
        const items10 = [tmp.bar, animatedStyle1];
        obj7.style = items10;
        obj7.onLayout = function onLayout(nativeEvent) {
          return sharedValue.set(nativeEvent.nativeEvent.layout.height);
        };
        if (tmp8) {
          let tmp46Result = closure_6(tmp2(12380).AILoader, { size: 12, color: "text-overlay-light" });
        } else {
          const obj8 = { size: "sm", color: tmp25(575).colors.TEXT_OVERLAY_LIGHT };
          tmp46Result = closure_6(tmp2(12384).SparklesIcon, obj8);
        }
        const items11 = [tmp46Result, ,];
        const obj9 = {
          variant: "text-sm/semibold",
          color: "text-overlay-light",
          lineClamp: 1,
          style: tmp.title,
          accessibilityLabel: null,
          children: null,
        };
        let combined = stringResult;
        if (tmp8) {
          const intl2 = tmp2(1113).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + stringResult + ". " + intl2.string(tmp25(3995).fg1sor);
        }
        obj9.accessibilityLabel = combined;
        obj9.children = stringResult;
        items11[1] = closure_6(tmp2(5747).Text, obj9);
        let tmp46Result3 = null;
        if (tmp8) {
          tmp46Result3 = null;
          if (null != stop) {
            const obj10 = { style: tmp.actions, children: null };
            const obj11 = { variant: "primary-overlay", size: "sm", text: null, loading: null, onPress: null };
            const intl3 = tmp2(1113).intl;
            obj11.text = intl3.string(tmp25(3995).oU59sU);
            obj11.loading = stopping;
            obj11.onPress = stop;
            obj10.children = closure_6(tmp2(5754).Button, obj11);
            tmp46Result3 = closure_6(tmp34, obj10);
          }
        }
        items11[2] = tmp46Result3;
        obj7.children = items11;
        obj6.children = closure_7(tmp25(1652).View, obj7);
        tmp46Result4 = closure_6(tmp25(1652).View, obj6);
      }
    }
    const items12 = [tmp46Result4, ,];
    const obj12 = { style: tmp.content, children: null };
    const items13 = [children];
    let tmp41 = null;
    if (tmp8) {
      const obj13 = { style: tmp.block, pointerEvents: "box-only" };
      tmp41 = closure_6(tmp34, obj13);
    }
    items13[1] = tmp41;
    obj12.children = items13;
    items12[1] = closure_7(sharedValue1, obj12);
    let tmp33Result = null;
    if (tmp8) {
      const obj14 = { children: null };
      const obj15 = { style: null, pointerEvents: "none" };
      const items14 = [tmp.glow, animatedStyle2];
      obj15.style = items14;
      const items15 = [closure_6(tmp25(1652).View, obj15)];
      const obj16 = { style: tmp.border, pointerEvents: "none" };
      items15[1] = closure_6(tmp34, obj16);
      obj14.children = items15;
      tmp33Result = closure_7(closure_8, obj14);
    }
    items12[2] = tmp33Result;
    obj5.children = items12;
    return closure_7(sharedValue1, obj5);
  }
  const tmp2Result10 = require("../../../../../_runtime/metro/01652__.js");
}
