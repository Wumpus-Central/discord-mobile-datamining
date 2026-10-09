// discord_app/design/void/ShinyButton/native/ShinyButton.tsx
import Button_ButtonDefault from "../../Button/native/Button.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../modules/a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let closure_3 = ["style", "disabled", "submitting", "shineDisabled", "shineStyle", "shineInnerStyle"];
const AppState = fn(17).AppState;
let jsx = fn(21).jsx;
let c10 = 2000;
let c11 = 750;
let c12 = 100;
const createStyles = fn(5091);
let obj2 = {
  shinyButton: { overflow: "hidden" },
  shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" },
  shine: null,
  shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" },
};
let size = {
  width: 56,
  height: "500%",
  transform: null,
  backgroundColor: "rgba(255,255,255,0.1)",
  top: "-100%",
  alignItems: "center",
};
let items = [{ rotate: "30deg" }];
size.transform = items;
obj2.shine = size;
let closure_13 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},"animate-always"),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},"animate-always"))),-1)}]};}',
};
const __initData2 = {
  code: "function ShinyButtonTsx2(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}",
};
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ShinyButton(shineInnerStyle) {
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
        let tmp8 = style;
        let tmp5 = tmp13;
        let tmp4 = disabled;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
        importDefault = cResult[4];
        tmp8 = cResult[5];
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
        const fn = function q() {
          closure_0 = animatedStyle.addEventListener("change", (event) => {
            closure_1_5("active" === event);
          });
          return () => {
            closure_0.remove();
          };
        };
        let items2 = [];
        class R {
          constructor() {
            return closure_8.useReducedMotion;
          }
        }
        cResult[12] = items2;
        let tmp27 = items2;
        let tmp26 = fn;
      } else {
        tmp26 = cResult[11];
        tmp27 = cResult[12];
      }
      const effect = obj2.useEffect(tmp26, tmp27);
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
            obj10.translateX = obj4.withRepeat(
              obj5.withSequence(
                withTimingResult,
                obj7.withDelay(c11, obj8.withTiming(tmp + c12, obj11, "animate-always")),
              ),
              -1,
            );
            items1 = [];
            items1[0] = obj10;
            obj1.transform = items1;
          }
          return obj1;
        }
      }
      const tmpResult2 = require("ReanimatedRexport");
      H.__closure = {
        width,
        OFFSCREEN_OFFSET,
        withRepeat: require("ReanimatedRexport").withRepeat,
        withSequence: require("ReanimatedRexport").withSequence,
        withTiming: require("timing").withTiming,
        withDelay: require("ReanimatedRexport").withDelay,
        INITIAL_ANIMATION_DELAY,
        ANIMATION_DURATION: v2000,
      };
      H.__workletHash = 3002595774498;
      H.__initData = __initData;
      animatedStyle = tmpResult2.useAnimatedStyle(H);
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        function handleLayout(nativeEvent) {
          closure_4(nativeEvent.nativeEvent.layout.width);
        }
        cResult[13] = handleLayout;
        class R {
          constructor() {
            return closure_8.useReducedMotion;
          }
        }
      } else {
        const tmp30 = cResult[13];
      }
      AccessibilityStore = tmp30;
      if (cResult[14] === animatedStyle) {
        if (cResult[15] === tmp6) {
          if (cResult[16] === shineStyle) {
            if (cResult[17] === first1) {
              if (cResult[18] === tmp15.shine) {
                if (cResult[19] === tmp15.shineContainer) {
                  if (cResult[20] === tmp15.shineInner) {
                    let tmp31 = cResult[21];
                  }
                  if (cResult[22] === tmp8) {
                    if (cResult[23] === tmp15.shinyButton) {
                      let tmp32 = cResult[24];
                    }
                    if (cResult[25] === tmp4) {
                      if (cResult[26] === tmp5) {
                        if (cResult[27] === tmp31) {
                          if (cResult[28] === tmp32) {
                            let tmp33 = cResult[29];
                          }
                          return tmp33;
                        }
                      }
                    }
                    class R {
                      constructor() {
                        return closure_8.useReducedMotion;
                      }
                    }
                    let obj4 = {};
                    const merged = Object.assign(tmp5);
                    obj4.style = tmp32;
                    obj4.disabled = tmp4;
                    obj4.renderShine = tmp31;
                    const tmp39 = jsx(Button_ButtonDefault, {});
                    cResult[25] = tmp4;
                    cResult[26] = tmp5;
                    cResult[27] = tmp31;
                    cResult[28] = tmp32;
                    cResult[29] = tmp39;
                    tmp33 = tmp39;
                  }
                  const items3 = [,];
                  class R {
                    constructor() {
                      return closure_8.useReducedMotion;
                    }
                  }
                  items3[1] = tmp15.shinyButton;
                  cResult[22] = tmp8;
                  cResult[23] = tmp15.shinyButton;
                  cResult[24] = items3;
                  tmp32 = items3;
                }
              }
            }
          }
        }
      }
      function renderShine() {
        let tmp = null;
        if (first1) {
          const obj = { onLayout, style: null, children: null };
          const items = [closure_2.shineContainer, animatedStyle];
          obj.style = items;
          const obj2 = { style: null, children: null };
          const items1 = [closure_2.shine, closure_1];
          obj2.style = items1;
          const obj3 = { style: null };
          const items2 = [closure_2.shineInner, closure_0];
          obj3.style = items2;
          obj2.children = jsx(ReanimatedRexportDefault.View, { style: null });
          obj.children = jsx(ReanimatedRexportDefault.View, { style: null, children: null });
          tmp = jsx(ReanimatedRexportDefault.View, { onLayout, style: null, children: null });
        }
        return tmp;
      }
      cResult[14] = animatedStyle;
      cResult[15] = tmp6;
      cResult[16] = shineStyle;
      cResult[17] = first1;
      cResult[18] = tmp15.shine;
      cResult[19] = tmp15.shineContainer;
      cResult[20] = tmp15.shineInner;
      cResult[21] = renderShine;
      tmp31 = renderShine;
      let obj3 = {
        width,
        OFFSCREEN_OFFSET,
        withRepeat: require("ReanimatedRexport").withRepeat,
        withSequence: require("ReanimatedRexport").withSequence,
        withTiming: require("timing").withTiming,
        withDelay: require("ReanimatedRexport").withDelay,
        INITIAL_ANIMATION_DELAY,
        ANIMATION_DURATION: v2000,
      };
    }
  : function ShinyButton(disabled) {
      disabled = disabled.disabled;
      ({ submitting: importDefault, shineDisabled } = disabled);
      if (shineDisabled === undefined) {
        shineDisabled = false;
      }
      ({ shineStyle: closure_3, shineInnerStyle: _slicedToArray } = disabled);
      const merged = Object.assign(
        disabled,
        Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }),
      );
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
      useReducedMotion = disabled(shineDisabled[9]).useStateFromStores(
        items,
        () => useReducedMotion.useReducedMotion,
        [],
      );
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
          obj3.translateX = obj4.withRepeat(
            obj5.withSequence(
              withTimingResult,
              obj7.withDelay(c11, timing.withTiming(tmp + c12, obj9, "animate-always")),
            ),
            -1,
          );
          const items1 = [obj3];
          obj2.transform = items1;
        }
        return obj2;
      };
      let obj2 = disabled(shineDisabled[10]);
      fn.__closure = {
        width,
        OFFSCREEN_OFFSET: handleLayout,
        withRepeat: disabled(shineDisabled[10]).withRepeat,
        withSequence: disabled(shineDisabled[10]).withSequence,
        withTiming: disabled(shineDisabled[11]).withTiming,
        withDelay: disabled(shineDisabled[10]).withDelay,
        INITIAL_ANIMATION_DELAY,
        ANIMATION_DURATION: v2000,
      };
      fn.__workletHash = 14318156259457;
      fn.__initData = __initData2;
      INITIAL_ANIMATION_DELAY = obj2.useAnimatedStyle(fn);
      let obj4 = {};
      let obj3 = {
        width,
        OFFSCREEN_OFFSET: handleLayout,
        withRepeat: disabled(shineDisabled[10]).withRepeat,
        withSequence: disabled(shineDisabled[10]).withSequence,
        withTiming: disabled(shineDisabled[11]).withTiming,
        withDelay: disabled(shineDisabled[10]).withDelay,
        INITIAL_ANIMATION_DELAY,
        ANIMATION_DURATION: v2000,
      };
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
    };
