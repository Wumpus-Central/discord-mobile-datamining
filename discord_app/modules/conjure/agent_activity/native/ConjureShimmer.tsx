// === Module 12851: ConjureShimmer ===

// Module 12851 (ConjureShimmer)
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import LinearGradientDefault from "LinearGradient" /* 5725 */;
import _modDef7182 from "module_7182" /* 7182 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const createStyles = fn(5143);
let closure_13 = createStyles.createStyles({ root: { position: "relative" }, band: { position: "absolute", top: 0, bottom: 0 }, fill: { flex: 1 } });
let closure_14 = { code: "(function ConjureShimmerTsx1(){let[bandWidth,progress,width]=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default function ConjureShimmer(epoch) {
  ({ renderFace, live, tint } = epoch);
  _require = tint;
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  importDefault = undefined;
  live = undefined;
  let tmp = closure_13();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const tmp2 = _require;
  [tmp6, c1] = live(noop.useState(0), 2);
  const tmp5 = live(noop.useState(0), 2);
  const sharedValue = require("module_1652").useSharedValue(0);
  dependencyMap = sharedValue;
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = tmp6 > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = noop.useEffect(() => {
    if (live) {
      const result = _undefined2.set(0);
      const obj2 = _mod1652;
      const obj4 = { duration: 2000, easing: _mod1652.Easing.linear };
      const result1 = _undefined2.set(obj2.withRepeat(timing_timing.withTiming(1, obj4), -1, false));
      const fn = () => c0(c2[7]).cancelAnimation(_undefined2);
    } else {
      _mod1652.cancelAnimation(_undefined2);
      const result2 = _undefined2.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * tmp6;
  const memo = noop.useMemo(() => {
    const obj = _modDef671(c0);
    const cssResult = obj.alpha(0).css();
    items = [cssResult, cssResult, , , ];
    const alphaResult = obj.alpha(0);
    items[2] = obj.alpha(1).css();
    items[3] = cssResult;
    items[4] = cssResult;
    return items;
  }, items2);
  let obj3 = require("module_1652");
  const items3 = [closure_14, result, sharedValue, tmp6];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items3;
  class ConjureShimmerTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: null };
      tmp = -closure_0;
      obj1.translateX = tmp + closure_1.get() * (closure_0 + closure_2);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items4 = [tmp12, tmp13, tmp14];
  ConjureShimmerTsx1.__closure = items4;
  ConjureShimmerTsx1.__workletHash = 6512928925171;
  ConjureShimmerTsx1.__initData = tmp11;
  const animatedStyle = tmp2(1652).useAnimatedStyle(ConjureShimmerTsx1);
  let obj4 = {
    style: tmp.root,
    onLayout: noop.useCallback((nativeEvent) => {
      closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      _undefined((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: null
  };
  const items5 = [renderFace(), ];
  let tmp18 = null;
  if (live) {
    const obj5 = { style: closure_5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj6 = { style: closure_5.absoluteFill, androidRenderingMode: "software", maskElement: null, children: null };
    const obj7 = { children: renderFace() };
    obj6.maskElement = closure_8(closure_6, obj7);
    const obj8 = { style: null, children: null };
    const items6 = [tmp.band, , ];
    const obj9 = { width: result };
    items6[1] = obj9;
    items6[2] = animatedStyle;
    obj8.style = items6;
    const obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    obj8.children = closure_8(LinearGradientDefault, obj10);
    obj6.children = closure_8(_modDef1652.View, obj8);
    obj5.children = closure_8(_modDef7182, obj6);
    tmp18 = closure_8(closure_6, obj5);
  }
  items5[1] = tmp18;
  obj4.children = items5;
  return closure_9(closure_6, obj4);
};