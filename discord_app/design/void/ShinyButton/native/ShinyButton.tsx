// === Module 13898: ShinyButton/ShinyButton ===

// Module 13898 (ShinyButton/ShinyButton)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let closure_3 = ["style", "disabled", "submitting", "shineDisabled", "shineStyle", "shineInnerStyle"];
const AppState = fn(17).AppState;
let jsx = fn(21).jsx;
let c10 = 2000;
let c11 = 750;
let c12 = 100;
const createStyles = fn(4890);
let obj2 = { shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: null, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } };
let size = { width: 56, height: "500%", transform: null, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
let items = [{ rotate: "30deg" }];
size.transform = items;
obj2.shine = size;
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},\"animate-always\"),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},\"animate-always\"))),-1)}]};}" };
const __initData2 = { code: "function ShinyButtonTsx2(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((shineInnerStyle) => {
  const cResult = require("c").c(30);
  if (cResult[0] !== shineInnerStyle) {
    ({ style, disabled, submitting, shineDisabled, shineStyle } = shineInnerStyle);
    importDefault = shineStyle;
    shineInnerStyle = shineInnerStyle.shineInnerStyle;
    _require = shineInnerStyle;
    const tmp13 = _objectWithoutProperties(shineInnerStyle, width);
    cResult[0] = shineInnerStyle;
    cResult[1] = disabled;
    cResult[2] = tmp13;
    cResult[3] = shineInnerStyle;
    cResult[4] = shineStyle;
    cResult[5] = style;
    cResult[6] = submitting;
    cResult[7] = shineDisabled;
    let tmp10 = shineDisabled;
    let tmp9 = submitting;
    let tmp4 = disabled;
    const tmp6 = shineInnerStyle;
  } else {
    tmp4 = cResult[1];
    _require = cResult[3];
    importDefault = cResult[4];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp15 = closure_13();
  dependencyMap = tmp15;
  [width, _slicedToArray] = first1.useState(null);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class R {
      constructor() {
        return closure_8.useReducedMotion;
      }
    }
    let items1 = [];
    cResult[8] = items;
    cResult[9] = R;
    cResult[10] = items1;
    let tmp21 = items1;
    let tmp20 = R;
    let tmp19 = items;
  } else {
    tmp19 = cResult[8];
    tmp20 = cResult[9];
    tmp21 = cResult[10];
  }
  let obj = require("c");
  const tmp14 = undefined !== tmp10 && tmp10;
  const tmp16 = _slicedToArray;
  const stateFromStores = require("initialize").useStateFromStores(tmp19, tmp20, tmp21);
  const tmp16Result = tmp16(first1.useState("active" === animatedStyle.currentState), 2);
  _objectWithoutProperties = tmp16Result[1];
  first1 = !tmp4;
  if (!tmp4) {
    first1 = !tmp9;
  }
  if (first1) {
    first1 = !stateFromStores;
  }
  if (first1) {
    first1 = !tmp14;
  }
  if (first1) {
    first1 = tmp16Result[0];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        closure_0 = closure_7.addEventListener("change", () => { ... });
        return () => { ... };
      }
    }
    let items2 = [];
    class R {
      constructor() {
        return closure_8.useReducedMotion;
      }
    }
    cResult[12] = items2;
    let tmp27 = items2;
  } else {
    class B {
      constructor() {
        closure_0 = closure_7.addEventListener("change", () => { ... });
        return () => { ... };
      }
    }
    tmp27 = cResult[12];
  }
  const effect = obj2.useEffect(B, tmp27);
  const tmpResult = require("initialize");
  class H {
    constructor() {
      if (null == closure_3) {
        obj = { transform: null };
        items = [];
        items[0] = { translateX: -100 };
        obj.transform = items;
        obj1 = obj;
      } else {
        obj1 = { transform: null };
        obj10 = { translateX: null };
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj4 = closure_0(closure_2[10]);
        obj5 = closure_0(closure_2[10]);
        obj6 = closure_0(closure_2[11]);
        str = "animate-always";
        num = -100;
        withTimingResult = obj6.withTiming(-100, { duration: 0 }, "animate-always");
        obj7 = closure_0(closure_2[10]);
        tmp5 = c11;
        obj8 = closure_0(closure_2[11]);
        tmp6 = c12;
        obj11 = { duration: null };
        tmp7 = c10;
        obj11.duration = c10;
        num2 = -1;
        obj10.translateX = obj4.withRepeat(obj5.withSequence(withTimingResult, obj7.withDelay(c11, obj8.withTiming(tmp + c12, obj11, "animate-always"))), -1);
        items1 = [];
        items1[0] = obj10;
        obj1.transform = items1;
      }
      return obj1;
    }
  }
  const tmpResult2 = require("ReanimatedRexport");
  H.__closure = { width, OFFSCREEN_OFFSET, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, INITIAL_ANIMATION_DELAY, ANIMATION_DURATION: v2000 };
  H.__workletHash = 3002595774498;
  H.__initData = __initData;
  animatedStyle = tmpResult2.useAnimatedStyle(H);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        tmp = closure_4(shineInnerStyle.nativeEvent.layout.width);
        return;
      }
    }
    cResult[13] = P;
    class R {
      constructor() {
        return closure_8.useReducedMotion;
      }
    }
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_4(shineInnerStyle.nativeEvent.layout.width);
        return;
      }
    }
  }
  AccessibilityStore = tmp30;
  if (cResult[14] === animatedStyle) {
    class P {
      constructor(arg0) {
        tmp = closure_4(shineInnerStyle.nativeEvent.layout.width);
        return;
      }
    }
  }
  class G {
    constructor() {
      tmp = null;
      if (closure_6) {
        tmp2 = jsx;
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = { onLayout: null, style: null, children: null };
        tmp5 = closure_8;
        obj.onLayout = closure_8;
        tmp6 = closure_2;
        items = [, ];
        items[0] = closure_2.shineContainer;
        tmp7 = closure_7;
        items[1] = closure_7;
        obj.style = items;
        obj1 = { style: null, children: null };
        items1 = [, ];
        items1[0] = closure_2.shine;
        tmp8 = closure_1;
        items1[1] = closure_1;
        obj1.style = items1;
        obj4 = { style: null };
        items2 = [, ];
        items2[0] = closure_2.shineInner;
        tmp9 = closure_0;
        items2[1] = closure_0;
        obj4.style = items2;
        obj1.children = jsx(closure_1(closure_2[10]).View, obj4);
        obj.children = jsx(closure_1(closure_2[10]).View, obj1);
        tmp = jsx(closure_1(closure_2[10]).View, obj);
      }
      return tmp;
    }
  }
  cResult[14] = animatedStyle;
  cResult[15] = tmp6;
  cResult[16] = shineStyle;
  cResult[17] = first1;
  cResult[18] = tmp15.shine;
  cResult[19] = tmp15.shineContainer;
  cResult[20] = tmp15.shineInner;
  cResult[21] = G;
  let obj3 = { width, OFFSCREEN_OFFSET, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, INITIAL_ANIMATION_DELAY, ANIMATION_DURATION: v2000 };
}) : ((disabled) => {
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: closure_3, shineInnerStyle: _slicedToArray } = disabled);
  const merged = Object.assign(disabled, Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }));
  width = undefined;
  AppState = undefined;
  let useReducedMotion;
  jsx = undefined;
  let v2000;
  INITIAL_ANIMATION_DELAY = undefined;
  function handleLayout(nativeEvent) {
    closure_7(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = closure_13();
  closure_5 = tmp2;
  [width, AppState] = width.useState(null);
  let items = [useReducedMotion];
  useReducedMotion = disabled(shineDisabled[9]).useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  let obj = disabled(shineDisabled[9]);
  [c9, c10] = width.useState("active" === AppState.currentState);
  const effect = width.useEffect(() => {
    closure_0 = closure_7.addEventListener("change", (event) => {
      duration("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const tmp5 = _slicedToArray(width.useState("active" === AppState.currentState), 2);
  const fn = function p() {
    if (null == first) {
      const obj = { transform: null };
      const items = [{ translateX: -100 }];
      obj.transform = items;
      let obj2 = obj;
    } else {
      obj2 = { transform: null };
      const obj3 = { translateX: null };
      const obj4 = ReanimatedRexport;
      const obj5 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(-100, { duration: 0 }, "animate-always");
      const obj7 = ReanimatedRexport;
      const obj9 = { duration };
      obj3.translateX = obj4.withRepeat(obj5.withSequence(withTimingResult, obj7.withDelay(c11, timing.withTiming(tmp + c12, obj9, "animate-always"))), -1);
      const items1 = [obj3];
      obj2.transform = items1;
    }
    return obj2;
  };
  let obj2 = disabled(shineDisabled[10]);
  fn.__closure = { width, OFFSCREEN_OFFSET: handleLayout, withRepeat: disabled(shineDisabled[10]).withRepeat, withSequence: disabled(shineDisabled[10]).withSequence, withTiming: disabled(shineDisabled[11]).withTiming, withDelay: disabled(shineDisabled[10]).withDelay, INITIAL_ANIMATION_DELAY, ANIMATION_DURATION: v2000 };
  fn.__workletHash = 14318156259457;
  fn.__initData = __initData2;
  INITIAL_ANIMATION_DELAY = obj2.useAnimatedStyle(fn);
  let obj4 = {};
  let obj3 = { width, OFFSCREEN_OFFSET: handleLayout, withRepeat: disabled(shineDisabled[10]).withRepeat, withSequence: disabled(shineDisabled[10]).withSequence, withTiming: disabled(shineDisabled[11]).withTiming, withDelay: disabled(shineDisabled[10]).withDelay, INITIAL_ANIMATION_DELAY, ANIMATION_DURATION: v2000 };
  const merged1 = Object.assign(merged);
  let items1 = [disabled.style, tmp2.shinyButton];
  obj4.style = items1;
  obj4.disabled = disabled;
  obj4.renderShine = function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!closure_1_1) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              const obj = { onLayout: handleLayout, style: null, children: null };
              const items = [closure_5.shineContainer, closure_11];
              obj.style = items;
              const obj2 = { style: null, children: null };
              const items1 = [closure_5.shine, closure_1_3];
              obj2.style = items1;
              const obj3 = { style: null };
              const items2 = [closure_5.shineInner, _slicedToArray];
              obj3.style = items2;
              obj2.children = jsx(ReanimatedRexportDefault.View, { style: null });
              obj.children = jsx(ReanimatedRexportDefault.View, { style: null, children: null });
              tmp = jsx(ReanimatedRexportDefault.View, { onLayout: handleLayout, style: null, children: null });
            }
          }
        }
      }
    }
    return tmp;
  };
  return jsx(require("Button/Button"), {});
});