// === Module 16671: ConjureShimmer ===

// Module 16671 (ConjureShimmer)
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const createStyles = fn(4896);
let closure_13 = createStyles.createStyles({ root: { position: "relative" }, band: { position: "absolute", top: 0, bottom: 0 }, fill: { flex: 1 } });
let closure_14 = { code: "function ConjureShimmerTsx1(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
const __initData = { code: "function ConjureShimmerTsx2(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
const ReactCompilerGating = fn(558);
function shouldSweep(reducedMotion) {
  ({ live, width } = reducedMotion);
  if (live) {
    live = !reducedMotion.reducedMotion;
  }
  if (live) {
    live = width > 0;
  }
  return live;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = first(sharedValue[7]).c(38);
  ({ renderFace, live, tint, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = first(sharedValue[7]);
  const stateFromStores = first(sharedValue[8]).useStateFromStores(tmp5, tmp6);
  [first, importDefault] = noop.useState(0);
  const tmpResult = first(sharedValue[8]);
  sharedValue = first(sharedValue[9]).useSharedValue(0);
  if (cResult[2] === live) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === first) {
        let tmp12 = cResult[5];
      }
      _slicedToArray = tmp12;
      if (cResult[6] === tmp12) {
        if (cResult[7] === sharedValue) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          if (cResult[10] === num) {
            if (cResult[11] === sharedValue) {
              let tmp15 = cResult[12];
            }
            const effect = noop.useEffect(tmp14, tmp15);
            if (cResult[13] !== tint) {
              const obj5 = require("module_683")(tint);
              obj5.alpha(0);
              class X {
                constructor() {
                  if (closure_3) {
                    tmp6 = closure_2;
                    num2 = 0;
                    result = closure_2.set(0);
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj2 = closure_0(closure_2[9]);
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[10]);
                    obj1 = { duration: 2000, easing: null };
                    tmp12 = closure_0;
                    tmp13 = closure_2;
                    obj1.easing = closure_0(closure_2[9]).Easing.linear;
                    num3 = 1;
                    flag = false;
                    num4 = -1;
                    result1 = closure_2.set(obj2.withRepeat(obj3.withTiming(1, obj1), -1, false));
                    fn = () => first(sharedValue[9]).cancelAnimation(closure_1_2);
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp3 = closure_2;
                    cancelAnimationResult = obj.cancelAnimation(closure_2);
                    num = 0;
                    result2 = closure_2.set(0);
                  }
                  return fn;
                }
              }
              const cssResult = obj5.alpha(1).css();
              cResult[13] = tint;
              cResult[14] = tmp23;
              cResult[15] = tmp23;
              cResult[16] = tmp23;
              cResult[17] = cssResult;
              let tmp19 = tmp23;
              let tmp18 = tmp23;
              let tmp17 = tmp23;
              const alphaResult1 = obj5.alpha(1);
            } else {
              tmp17 = cResult[14];
              tmp18 = cResult[15];
              tmp19 = cResult[16];
              class X {
                constructor() {
                  if (closure_3) {
                    tmp6 = closure_2;
                    num2 = 0;
                    result = closure_2.set(0);
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj2 = closure_0(closure_2[9]);
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[10]);
                    obj1 = { duration: 2000, easing: null };
                    tmp12 = closure_0;
                    tmp13 = closure_2;
                    obj1.easing = closure_0(closure_2[9]).Easing.linear;
                    num3 = 1;
                    flag = false;
                    num4 = -1;
                    result1 = closure_2.set(obj2.withRepeat(obj3.withTiming(1, obj1), -1, false));
                    fn = () => first(sharedValue[9]).cancelAnimation(closure_1_2);
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp3 = closure_2;
                    cancelAnimationResult = obj.cancelAnimation(closure_2);
                    num = 0;
                    result2 = closure_2.set(0);
                  }
                  return fn;
                }
              }
            }
            class X {
              constructor() {
                if (closure_3) {
                  tmp6 = closure_2;
                  num2 = 0;
                  result = closure_2.set(0);
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  obj2 = closure_0(closure_2[9]);
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj3 = closure_0(closure_2[10]);
                  obj1 = { duration: 2000, easing: null };
                  tmp12 = closure_0;
                  tmp13 = closure_2;
                  obj1.easing = closure_0(closure_2[9]).Easing.linear;
                  num3 = 1;
                  flag = false;
                  num4 = -1;
                  result1 = closure_2.set(obj2.withRepeat(obj3.withTiming(1, obj1), -1, false));
                  fn = () => first(sharedValue[9]).cancelAnimation(closure_1_2);
                } else {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp3 = closure_2;
                  cancelAnimationResult = obj.cancelAnimation(closure_2);
                  num = 0;
                  result2 = closure_2.set(0);
                }
                return fn;
              }
            }
            const items1 = [tmp18, tmp19, tmp20, tmp17, tmp17];
            cResult[18] = tmp17;
            cResult[19] = tmp18;
            cResult[20] = tmp19;
            cResult[21] = tmp20;
            cResult[22] = items1;
          }
        }
        const items2 = [, , ];
        class X {
          constructor() {
            if (closure_3) {
              tmp6 = closure_2;
              num2 = 0;
              result = closure_2.set(0);
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj2 = closure_0(closure_2[9]);
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj3 = closure_0(closure_2[10]);
              obj1 = { duration: 2000, easing: null };
              tmp12 = closure_0;
              tmp13 = closure_2;
              obj1.easing = closure_0(closure_2[9]).Easing.linear;
              num3 = 1;
              flag = false;
              num4 = -1;
              result1 = closure_2.set(obj2.withRepeat(obj3.withTiming(1, obj1), -1, false));
              fn = () => first(sharedValue[9]).cancelAnimation(closure_1_2);
            } else {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp3 = closure_2;
              cancelAnimationResult = obj.cancelAnimation(closure_2);
              num = 0;
              result2 = closure_2.set(0);
            }
            return fn;
          }
        }
        items2[1] = num;
        items2[2] = sharedValue;
        cResult[9] = tmp12;
        cResult[10] = num;
        cResult[11] = sharedValue;
        cResult[12] = items2;
        tmp15 = items2;
      }
      class X {
        constructor() {
          if (closure_3) {
            tmp6 = closure_2;
            num2 = 0;
            result = closure_2.set(0);
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj2 = closure_0(closure_2[9]);
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[10]);
            obj1 = { duration: 2000, easing: null };
            tmp12 = closure_0;
            tmp13 = closure_2;
            obj1.easing = closure_0(closure_2[9]).Easing.linear;
            num3 = 1;
            flag = false;
            num4 = -1;
            result1 = closure_2.set(obj2.withRepeat(obj3.withTiming(1, obj1), -1, false));
            fn = () => first(sharedValue[9]).cancelAnimation(closure_1_2);
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[9]);
            tmp3 = closure_2;
            cancelAnimationResult = obj.cancelAnimation(closure_2);
            num = 0;
            result2 = closure_2.set(0);
          }
          return fn;
        }
      }
      cResult[6] = tmp12;
      cResult[7] = sharedValue;
      cResult[8] = X;
      tmp14 = X;
    }
  }
  let tmp13 = live;
  if (live) {
    tmp13 = !stateFromStores;
  }
  if (tmp13) {
    tmp13 = first > 0;
  }
  cResult[2] = live;
  cResult[3] = stateFromStores;
  cResult[4] = first;
  cResult[5] = tmp13;
  tmp12 = tmp13;
  const tmpResult2 = first(sharedValue[9]);
}) : ((epoch) => {
  ({ renderFace, live, tint } = epoch);
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  live = undefined;
  c5 = undefined;
  let tmp = closure_13();
  let items = [AccessibilityStore];
  const stateFromStores = tint(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = sharedValue(live.useState(0), 2);
  const width = tmp5[0];
  dependencyMap = tmp5[1];
  let obj = tint(504);
  sharedValue = tint(4618).useSharedValue(0);
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = obj2.useEffect(() => {
    if (live) {
      const result = sharedValue.set(0);
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 2000, easing: ReanimatedRexport.Easing.linear };
      const result1 = sharedValue.set(obj2.withRepeat(timing.withTiming(1, obj4), -1, false));
      const fn = () => tint(closure_2[9]).cancelAnimation(sharedValue);
    } else {
      ReanimatedRexport.cancelAnimation(sharedValue);
      const result2 = sharedValue.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * width;
  c5 = result;
  const memo = obj2.useMemo(() => {
    const obj = _modDef683(tint);
    const cssResult = obj.alpha(0).css();
    const items = [cssResult, cssResult, , , ];
    const alphaResult = obj.alpha(0);
    items[2] = obj.alpha(1).css();
    items[3] = cssResult;
    items[4] = cssResult;
    return items;
  }, items2);
  let obj3 = tint(4618);
  let fn = function k() {
    const obj = { transform: null };
    const items = [{ translateX: -c5 + sharedValue.get() * (c5 + first) }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { bandWidth: result, progress: sharedValue, width };
  fn.__workletHash = 8820828976937;
  fn.__initData = __initData;
  const animatedStyle = tint(4618).useAnimatedStyle(fn);
  let obj4 = {
    style: tmp.root,
    onLayout: live.useCallback((nativeEvent) => {
      closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      closure_2((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: null
  };
  const items3 = [renderFace(), ];
  let tmp14 = null;
  if (live) {
    const obj5 = { style: c5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj6 = { style: c5.absoluteFill, androidRenderingMode: "software", maskElement: null, children: null };
    const obj7 = { children: renderFace() };
    obj6.maskElement = closure_8(closure_6, obj7);
    const obj8 = { style: null, children: null };
    const items4 = [tmp.band, , ];
    const obj9 = { width: result };
    items4[1] = obj9;
    items4[2] = animatedStyle;
    obj8.style = items4;
    const obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    obj8.children = closure_8(width(5612), obj10);
    obj6.children = closure_8(width(4618).View, obj8);
    obj5.children = closure_8(width(6059), obj6);
    tmp14 = closure_8(closure_6, obj5);
    const tmp18 = width(6059);
  }
  items3[1] = tmp14;
  obj4.children = items3;
  return closure_9(closure_6, obj4);
});
export { shouldSweep };