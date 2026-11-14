// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppConnector.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const _modDef1655 = _mod1655;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_12 = nativeDefault.space.PX_12;
const PX_6 = nativeDefault.space.PX_6;
let closure_8 = PX_40 - PX_6;
const createStyles = fn(5306);
let obj2 = {
  connector: { width: PX_40, height: PX_12, flexShrink: 0 },
  line: null,
  headStart: null,
  headEnd: null,
  packet: null,
};
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  top: PX_12 / 2,
  height: 2 * StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
};
obj2.line = rect;
const rect1 = { position: "absolute", top: 0, left: -nativeDefault.space.PX_4 };
obj2.headStart = rect1;
const rect2 = { position: "absolute", top: 0, right: -nativeDefault.space.PX_4 };
obj2.headEnd = rect2;
let size = {
  position: "absolute",
  top: (PX_12 - PX_6) / 2,
  left: 0,
  width: PX_6,
  height: PX_6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.ICON_BRAND,
};
obj2.packet = size;
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function ConjureLinkedAppConnectorTsx1(){let[progress,flow,interpolate,TRAVEL]=this.__closure;const value=progress.get();const along=flow==='gets'?1-value:value;return{opacity:interpolate(value,[0,0.2,0.8,1],[0,1,1,0]),transform:[{translateX:along*TRAVEL}]};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppConnector.tsx");

export default function ConjureLinkedAppConnector(flow) {
  flow = flow.flow;
  _require = flow;
  const tmp = closure_9();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const items1 = [flow, sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp2 = null == c0;
    if (!tmp2) {
      tmp2 = c1;
    }
    if (!tmp2) {
      const result = _undefined2.set(0);
      if ("both" === c0) {
        const obj = _mod1655;
        const withTimingResult = timing_timing.withTiming(1, timingPresets.timingSlow);
        let withSequenceResult = obj.withSequence(
          withTimingResult,
          timing_timing.withTiming(0, timingPresets.timingSlow),
        );
      } else {
        const obj4 = _mod1655;
        const withTimingResult1 = timing_timing.withTiming(1, timingPresets.timingSlow);
        const withTimingResult2 = timing_timing.withTiming(0, timingPresets.timingNone);
        withSequenceResult = obj4.withSequence(
          withTimingResult1,
          withTimingResult2,
          timing_timing.withTiming(1, timingPresets.timingSlow),
        );
      }
      const result1 = _undefined2.set(withSequenceResult);
    }
  }, items1);
  let obj2 = require("../../../../../_runtime/metro/01655__.js");
  const items2 = [
    closure_10,
    sharedValue,
    flow,
    require("../../../../../_runtime/metro/01655__.js").interpolate,
    closure_8,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items2;
  class ConjureLinkedAppConnectorTsx1 {
    constructor() {
      value = closure_0.get();
      diff = value;
      if ("gets" === closure_1) {
        num = 1;
        diff = 1 - value;
      }
      obj = { opacity: closure_2(value, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), transform: null };
      obj1 = { translateX: diff * closure_3 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11];
  ConjureLinkedAppConnectorTsx1.__closure = items3;
  ConjureLinkedAppConnectorTsx1.__workletHash = 358024267550;
  ConjureLinkedAppConnectorTsx1.__initData = tmp7;
  let obj4 = {
    style: tmp.connector,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(
    ConjureLinkedAppConnectorTsx1,
  );
  const items4 = [closure_6(closure_4, { style: tmp.line }), , ,];
  if ("gets" === flow) {
    let obj6 = { style: tmp.headStart, children: null };
    let obj7 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
    obj6.children = closure_6(tmp2(13254).ChevronSmallLeftIcon, obj7);
    let tmp15Result = closure_6(closure_4, obj6);
  } else {
    tmp15Result = null;
  }
  items4[1] = tmp15Result;
  if ("sends" === flow) {
    const obj8 = { style: tmp.headEnd, children: null };
    const obj9 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
    obj8.children = closure_6(tmp2(7963).ChevronSmallRightIcon, obj9);
    let tmp15Result3 = closure_6(closure_4, obj8);
  } else {
    tmp15Result3 = null;
  }
  items4[2] = tmp15Result3;
  let tmp15Result4 = null;
  if (null != flow) {
    tmp15Result4 = null;
    if (!stateFromStores) {
      const obj10 = { style: null };
      const items5 = [tmp.packet, animatedStyle];
      obj10.style = items5;
      tmp15Result4 = closure_6(_modDef1655.View, obj10);
    }
  }
  items4[3] = tmp15Result4;
  obj4.children = items4;
  return closure_7(closure_4, obj4);
}
