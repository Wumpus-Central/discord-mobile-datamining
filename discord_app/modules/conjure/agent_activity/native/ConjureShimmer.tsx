// === Module 16671: ConjureShimmer ===

// Module 16671 (ConjureShimmer)
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let cancelAnimationResult, dependencyMap, flag, num2, num3, num4, obj1, set, tmp10, tmp11, tmp13, tmp16, tmp2, tmp3, tmp7, tmp9;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
let closure_13 = createStyles.createStyles({ root: { position: "relative" }, band: { position: "absolute", top: 0, bottom: 0 }, fill: { flex: 1 } });
let closure_14 = { code: "function ConjureShimmerTsx1(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
const __initData = { code: "function ConjureShimmerTsx2(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
function shouldSweep(reducedMotion) {
  let live;
  let width;
  ({ live, width } = reducedMotion);
  if (live) {
    live = !reducedMotion.reducedMotion;
  }
  if (live) {
    live = width > 0;
  }
  return live;
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let closure_3;
  let epoch;
  let first;
  let live;
  let renderFace;
  let sharedValue;
  let tint;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let tmp = first;
  let obj = first(sharedValue[7]);
  const cResult = obj.c(38);
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
  const tmpResult = tmp(sharedValue[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  [first, importDefault] = react.useState(0);
  const tmpResult2 = tmp(sharedValue[9]);
  sharedValue = tmpResult2.useSharedValue(0);
  if (cResult[2] === live) {
    if (cResult[3] === stateFromStores) {
      let tmp12;
      if (cResult[4] === first) {
        tmp12 = cResult[5];
      }
      _slicedToArray = tmp12;
      if (cResult[6] === tmp12) {
        let tmp14;
        if (cResult[7] === sharedValue) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          if (cResult[10] === num) {
            let tmp15;
            let tmp19;
            let tmp18;
            let tmp17;
            if (cResult[11] === sharedValue) {
              tmp15 = cResult[12];
            }
            const effect = react.useEffect(tmp14, tmp15);
            if (cResult[13] !== tint) {
              const obj5 = require("module_683")(tint);
              obj5.alpha(0);
              class X {
                constructor() {
                  tmp = closure_3;
                  if (tmp) {
                    tmp7 = closure_2;
                    num2 = 0;
                    result = closure_2.set(0);
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    set = closure_2.set;
                    tmp11 = closure_0(closure_2[9]);
                    tmp12 = closure_0;
                    tmp13 = closure_2;
                    withRepeat = tmp11.withRepeat;
                    tmp14 = closure_0(closure_2[10]);
                    obj1 = { duration: 2000, easing: null };
                    tmp15 = closure_0;
                    tmp16 = closure_2;
                    withTiming = tmp14.withTiming;
                    obj1.easing = closure_0(closure_2[9]).Easing.linear;
                    num3 = 1;
                    flag = false;
                    num4 = -1;
                    result1 = set(withRepeat(withTiming(1, obj1), -1, false));
                    fn = () => {
                      const obj = first(sharedValue[9]);
                      return obj.cancelAnimation(closure_1_2);
                    };
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp4 = closure_2;
                    cancelAnimationResult = obj.cancelAnimation(closure_2);
                    num = 0;
                    result2 = closure_2.set(0);
                  }
                  return fn;
                }
              }
              const alphaResult1 = obj5.alpha(1);
              cResult[13] = tint;
              cResult[14] = tmp23;
              cResult[15] = tmp23;
              cResult[16] = tmp23;
              cResult[17] = alphaResult1.css();
              tmp19 = tmp23;
              tmp18 = tmp23;
              tmp17 = tmp23;
              const cssResult = alphaResult1.css();
            } else {
              tmp17 = cResult[14];
              tmp18 = cResult[15];
              tmp19 = cResult[16];
              class X {
                constructor() {
                  tmp = closure_3;
                  if (tmp) {
                    tmp7 = closure_2;
                    num2 = 0;
                    result = closure_2.set(0);
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    set = closure_2.set;
                    tmp11 = closure_0(closure_2[9]);
                    tmp12 = closure_0;
                    tmp13 = closure_2;
                    withRepeat = tmp11.withRepeat;
                    tmp14 = closure_0(closure_2[10]);
                    obj1 = { duration: 2000, easing: null };
                    tmp15 = closure_0;
                    tmp16 = closure_2;
                    withTiming = tmp14.withTiming;
                    obj1.easing = closure_0(closure_2[9]).Easing.linear;
                    num3 = 1;
                    flag = false;
                    num4 = -1;
                    result1 = set(withRepeat(withTiming(1, obj1), -1, false));
                    fn = () => {
                      const obj = first(sharedValue[9]);
                      return obj.cancelAnimation(closure_1_2);
                    };
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp4 = closure_2;
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
                tmp = closure_3;
                if (tmp) {
                  tmp7 = closure_2;
                  num2 = 0;
                  result = closure_2.set(0);
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  set = closure_2.set;
                  tmp11 = closure_0(closure_2[9]);
                  tmp12 = closure_0;
                  tmp13 = closure_2;
                  withRepeat = tmp11.withRepeat;
                  tmp14 = closure_0(closure_2[10]);
                  obj1 = { duration: 2000, easing: null };
                  tmp15 = closure_0;
                  tmp16 = closure_2;
                  withTiming = tmp14.withTiming;
                  obj1.easing = closure_0(closure_2[9]).Easing.linear;
                  num3 = 1;
                  flag = false;
                  num4 = -1;
                  result1 = set(withRepeat(withTiming(1, obj1), -1, false));
                  fn = () => {
                    const obj = first(sharedValue[9]);
                    return obj.cancelAnimation(closure_1_2);
                  };
                } else {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp4 = closure_2;
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
            tmp = closure_3;
            if (tmp) {
              tmp7 = closure_2;
              num2 = 0;
              result = closure_2.set(0);
              tmp9 = closure_0;
              tmp10 = closure_2;
              set = closure_2.set;
              tmp11 = closure_0(closure_2[9]);
              tmp12 = closure_0;
              tmp13 = closure_2;
              withRepeat = tmp11.withRepeat;
              tmp14 = closure_0(closure_2[10]);
              obj1 = { duration: 2000, easing: null };
              tmp15 = closure_0;
              tmp16 = closure_2;
              withTiming = tmp14.withTiming;
              obj1.easing = closure_0(closure_2[9]).Easing.linear;
              num3 = 1;
              flag = false;
              num4 = -1;
              result1 = set(withRepeat(withTiming(1, obj1), -1, false));
              fn = () => {
                const obj = first(sharedValue[9]);
                return obj.cancelAnimation(closure_1_2);
              };
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp4 = closure_2;
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
          tmp = closure_3;
          if (tmp) {
            tmp7 = closure_2;
            num2 = 0;
            result = closure_2.set(0);
            tmp9 = closure_0;
            tmp10 = closure_2;
            set = closure_2.set;
            tmp11 = closure_0(closure_2[9]);
            tmp12 = closure_0;
            tmp13 = closure_2;
            withRepeat = tmp11.withRepeat;
            tmp14 = closure_0(closure_2[10]);
            obj1 = { duration: 2000, easing: null };
            tmp15 = closure_0;
            tmp16 = closure_2;
            withTiming = tmp14.withTiming;
            obj1.easing = closure_0(closure_2[9]).Easing.linear;
            num3 = 1;
            flag = false;
            num4 = -1;
            result1 = set(withRepeat(withTiming(1, obj1), -1, false));
            fn = () => {
              const obj = first(sharedValue[9]);
              return obj.cancelAnimation(closure_1_2);
            };
          } else {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            tmp4 = closure_2;
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
  cResult[2] = live;
  cResult[3] = stateFromStores;
  cResult[4] = first;
  cResult[5] = live && !stateFromStores && first > 0;
  tmp12 = tmp13;
}) : ((epoch) => {
  let View;
  let closure_2;
  let items3;
  let items4;
  let live;
  let obj10;
  let obj6;
  let obj7;
  let obj8;
  let renderFace;
  let tint;
  let tmp18;
  let useReducedMotion;
  ({ renderFace, live, tint } = epoch);
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  live = undefined;
  let c5;
  let tmp = closure_13();
  let obj = tint(504);
  let items = [AccessibilityStore];
  let obj2 = live;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = sharedValue(live.useState(0), 2);
  const width = tmp5[0];
  dependencyMap = tmp5[1];
  const obj3 = tint(4618);
  sharedValue = obj3.useSharedValue(0);
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = obj2.useEffect(() => {
    let fn;
    if (live) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj2 = { duration: 2000, easing: ReanimatedRexport.Easing.linear };
      const withTiming = timing.withTiming;
      timing;
      const result1 = set(withRepeat(withTiming(1, obj2), -1, false));
      fn = () => {
        const obj = tint(closure_2[9]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = ReanimatedRexport;
      obj.cancelAnimation(sharedValue);
      const result2 = sharedValue.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * width;
  c5 = result;
  const memo = obj2.useMemo(() => {
    const obj = _modDef683(tint);
    const alphaResult = obj.alpha(0);
    const cssResult = alphaResult.css();
    const items = [cssResult, cssResult, , , ];
    const alphaResult1 = obj.alpha(1);
    items[2] = alphaResult1.css();
    items[3] = cssResult;
    items[4] = cssResult;
    return items;
  }, items2);
  let fn = function k() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: -c5 + sharedValue.get() * (c5 + first) }];
    ({ translateX: -c5 + sharedValue.get() * (c5 + first) });
    return obj;
  };
  fn.__closure = { bandWidth: result, progress: sharedValue, width };
  fn.__workletHash = 8820828976937;
  fn.__initData = __initData;
  const tmp2Result = tint(4618);
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const obj4 = {
    style: tmp.root,
    onLayout: obj2.useCallback((nativeEvent) => {
      let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      let tmp = closure_2((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: items3
  };
  items3 = [renderFace(), ];
  let tmp14 = null;
  if (live) {
    const obj5 = { style: c5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp18, obj6) };
    obj6 = { style: c5.absoluteFill, androidRenderingMode: "software", maskElement: closure_8(closure_6, obj7), children: closure_8(View, obj8) };
    obj7 = { children: renderFace() };
    tmp18 = width(6059);
    obj8 = { style: items4, children: closure_8(width(5612), obj10) };
    items4 = [tmp.band, , ];
    const obj9 = { width: result };
    items4[1] = obj9;
    items4[2] = animatedStyle;
    View = width(4618).View;
    obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    tmp14 = closure_8(closure_6, obj5);
  }
  items3[1] = tmp14;
  return closure_9(closure_6, obj4);
});
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default tmp4;
export { shouldSweep };