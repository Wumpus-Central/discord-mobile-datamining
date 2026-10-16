// === Module 12084: ConjureShimmer ===

// Module 12084 (ConjureShimmer)
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4909 */;
import timing from "timing" /* 5154 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const createStyles = fn(5153);
let closure_13 = createStyles.createStyles({ root: { position: "relative" }, band: { position: "absolute", top: 0, bottom: 0 }, fill: { flex: 1 } });
const __initData = { code: "function ConjureShimmerTsx1(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
const __initData2 = { code: "function ConjureShimmerTsx2(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureShimmer(arg0) {
  const cResult = width(sharedValue[7]).c(34);
  ({ renderFace, live, tint, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = width(sharedValue[7]);
  const stateFromStores = width(sharedValue[8]).useStateFromStores(tmp5, tmp6);
  const tmp9 = live(noop.useState(0), 2);
  width = tmp9[0];
  importDefault = tmp9[1];
  let obj3 = noop;
  const tmpResult = width(sharedValue[8]);
  sharedValue = width(sharedValue[9]).useSharedValue(0);
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  if (cResult[2] === live) {
    if (cResult[3] === sharedValue) {
      let tmp12 = cResult[4];
    }
    if (cResult[5] === live) {
      if (cResult[6] === num) {
        if (cResult[7] === sharedValue) {
          let tmp13 = cResult[8];
        }
        const effect = obj3.useEffect(tmp12, tmp13);
        if (cResult[9] !== tint) {
          const obj5 = require("module_683")(tint);
          const cssResult = obj5.alpha(0).css();
          const alphaResult = obj5.alpha(0);
          const cssResult1 = obj5.alpha(1).css();
          cResult[9] = tint;
          cResult[10] = cssResult;
          cResult[11] = cssResult;
          cResult[12] = cssResult;
          cResult[13] = cssResult1;
          let tmp18 = cssResult1;
          let tmp17 = cssResult;
          let tmp16 = cssResult;
          let tmp15 = cssResult;
          const alphaResult1 = obj5.alpha(1);
        } else {
          tmp15 = cResult[10];
          tmp16 = cResult[11];
          tmp17 = cResult[12];
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp15) {
          if (cResult[15] === tmp16) {
            if (cResult[16] === tmp17) {
              if (cResult[17] === tmp18) {
                let tmp22 = cResult[18];
              }
              let result = 4 * width;
              noop = result;
              class B {
                constructor() {
                  obj = { transform: null };
                  obj1 = { translateX: -closure_4 + closure_2.get() * (closure_4 + closure_0) };
                  items = [];
                  items[0] = obj1;
                  obj.transform = items;
                  return obj;
                }
              }
              let obj2 = { bandWidth: result, progress: sharedValue, width };
              B.__closure = obj2;
              B.__workletHash = 5317727670570;
              B.__initData = __initData;
              const animatedStyle = tmp(tmp2[9]).useAnimatedStyle(B);
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
                cResult[19] = G;
              } else {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
              }
              const root = tmp4.root;
              if (cResult[20] !== renderFace) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
                cResult[20] = renderFace;
                cResult[21] = tmp27;
                class B {
                  constructor() {
                    obj = { transform: null };
                    obj1 = { translateX: -closure_4 + closure_2.get() * (closure_4 + closure_0) };
                    items = [];
                    items[0] = obj1;
                    obj.transform = items;
                    return obj;
                  }
                }
              } else {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
              }
              if (cResult[22] === live) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
              }
              let tmp29 = null;
              if (live) {
                class G {
                  constructor(arg0) {
                    closure_0 = Math.round(arg0.nativeEvent.layout.width);
                    tmp = closure_1((arg0) => {
                      let tmp = closure_0;
                      if (arg0 === closure_0) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    return;
                  }
                }
                let obj4 = { style: closure_5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
                class B {
                  constructor() {
                    obj = { transform: null };
                    obj1 = { translateX: -closure_4 + closure_2.get() * (closure_4 + closure_0) };
                    items = [];
                    items[0] = obj1;
                    obj.transform = items;
                    return obj;
                  }
                }
                const obj6 = { style: closure_5.absoluteFill, androidRenderingMode: "software", maskElement: null, children: null };
                const obj7 = { children: renderFace() };
                obj6.maskElement = closure_8(closure_6, obj7);
                const obj8 = { style: null, children: null };
                const items1 = [tmp4.band, , ];
                const obj9 = { width: result };
                items1[1] = obj9;
                items1[2] = animatedStyle;
                obj8.style = items1;
                const obj10 = { style: tmp4.fill, start, end, colors: tmp22, locations };
                obj8.children = closure_8(require("LinearGradient"), obj10);
                obj6.children = closure_8(require("ReanimatedRexport").View, obj8);
                obj4.children = closure_8(require("module_6465"), obj6);
                tmp29 = closure_8(closure_6, obj4);
                const tmp32 = require("module_6465");
              }
              cResult[22] = live;
              cResult[23] = tmp22;
              cResult[24] = animatedStyle;
              cResult[25] = result;
              cResult[26] = renderFace;
              cResult[27] = tmp4.band;
              class W {
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
              cResult[29] = tmp29;
              const tmpResult4 = tmp(tmp2[9]);
            }
          }
        }
        const items2 = [, tmp17, tmp18, tmp15, tmp15];
        cResult[14] = tmp15;
        cResult[15] = tmp16;
        cResult[16] = tmp17;
        cResult[17] = tmp18;
        cResult[18] = items2;
        tmp22 = items2;
      }
    }
    const items3 = [live, num, ];
    cResult[5] = live;
    cResult[6] = num;
    cResult[7] = sharedValue;
    cResult[8] = items3;
    tmp13 = items3;
  }
  class W {
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
  cResult[2] = live;
  cResult[3] = sharedValue;
  cResult[4] = W;
  tmp12 = W;
  const tmpResult3 = width(sharedValue[9]);
}) : (function ConjureShimmer(epoch) {
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
  sharedValue = tint(4909).useSharedValue(0);
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
  let obj3 = tint(4909);
  class R {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: -closure_5 + closure_3.get() * (closure_5 + closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  R.__closure = { bandWidth: result, progress: sharedValue, width };
  R.__workletHash = 8820828976937;
  R.__initData = __initData2;
  const animatedStyle = tint(4909).useAnimatedStyle(R);
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
    obj8.children = closure_8(width(5453), obj10);
    obj6.children = closure_8(width(4909).View, obj8);
    obj5.children = closure_8(width(6465), obj6);
    tmp14 = closure_8(closure_6, obj5);
    const tmp18 = width(6465);
  }
  items3[1] = tmp14;
  obj4.children = items3;
  return closure_9(closure_6, obj4);
});