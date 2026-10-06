// discord_app/modules/video_calls/native/components/PopoutMenu.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Patterns from "../../../../../_runtime/04863_Patterns.js";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import FormRowDefault from "../../../../design/void/Form/native/FormRow.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, onClose;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let c9 = 250;
let obj = { container: obj2, popoutMenuRow: { flex: 1 }, popoutMenuRowLabel: { width: "100%" } };
obj2 = {
  position: "absolute",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
};
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let icon;
      let onClick;
      let text;
      const obj = react2;
      const cResult = obj.c(13);
      ({ icon, text, onClick } = onClose);
      onClose = onClose.onClose;
      const tmp4 = closure_10();
      if (cResult[0] === onClick) {
        let tmp5;
        let tmp6;
        if (cResult[1] === onClose) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== icon) {
          let tmp7 = null;
          if (null != icon) {
            const obj2 = { source: icon };
            tmp7 = metroRequire(native.Icon, obj2);
          }
          cResult[3] = icon;
          cResult[4] = tmp7;
          tmp6 = tmp7;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp4.popoutMenuRowLabel) {
          let tmp9;
          if (cResult[6] === text) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp4.popoutMenuRow) {
              if (cResult[10] === tmp6) {
                let tmp12;
                if (cResult[11] === tmp9) {
                  tmp12 = cResult[12];
                }
                return tmp12;
              }
            }
          }
          const obj3 = { leading: tmp6, label: tmp9, style: tmp4.popoutMenuRow, onPress: tmp5 };
          const tmp15 = metroRequire(FormRowDefault, obj3);
          cResult[8] = tmp5;
          cResult[9] = tmp4.popoutMenuRow;
          cResult[10] = tmp6;
          cResult[11] = tmp9;
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
        const obj4 = { style: tmp4.popoutMenuRowLabel, text };
        const tmp11 = metroRequire(Form.FormLabel, obj4);
        cResult[5] = tmp4.popoutMenuRowLabel;
        cResult[6] = text;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      }
      const fn = function t() {
        if (onClick != null) {
          tmp();
        }
        if (onClose != null) {
          tmp3();
        }
      };
      cResult[0] = onClick;
      cResult[1] = onClose;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (onClose) => {
      let icon;
      let obj3;
      let onClick;
      ({ icon, onClick } = onClose);
      onClose = onClose.onClose;
      const text = onClose.text;
      const tmp = closure_10();
      const items = [onClick, onClose];
      const callback = react.useCallback(() => {
        if (onClick != null) {
          tmp();
        }
        if (onClose != null) {
          tmp3();
        }
      }, items);
      let tmp3Result = null;
      const tmp5 = FormRowDefault;
      if (null != icon) {
        const obj = { source: icon };
        tmp3Result = metroRequire(native.Icon, obj);
      }
      const obj2 = {
        leading: tmp3Result,
        label: metroRequire(Form.FormLabel, obj3),
        style: tmp.popoutMenuRow,
        onPress: callback,
      };
      obj3 = { style: tmp.popoutMenuRowLabel, text };
      return metroRequire(tmp5, obj2);
    };
let closure_12 = {
  code: 'function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},"respect-motion-settings",function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}',
};
let __initData = {
  code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}",
};
let closure_14 = {
  code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}",
};
let closure_15 = {
  code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}",
};
let __initData2 = {
  code: "function PopoutMenuTsx5(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}",
};
let closure_17 = {
  code: "function PopoutMenuTsx6(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}",
};
let closure_18 = {
  code: "function PopoutMenuTsx7(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}",
};
let closure_19 = {
  code: "function PopoutMenuTsx8(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onClose, arg1) => {
        let c9;
        let closure_2;
        let closure_4;
        let disabled;
        let first1;
        let first3;
        let height;
        let left;
        let obj8;
        let onOpen;
        let rows;
        let size2;
        let style;
        let title;
        let tmp19;
        let tmp21;
        let tmp22;
        let tmp23;
        let top;
        let trigger;
        let width;
        let obj = onOpen(576);
        const cResult = obj.c(32);
        ({ disabled, title, trigger, rows, style, onOpen } = onClose);
        onClose = onClose.onClose;
        const tmp4 = closure_10();
        ({ width, height } = onClose(1484)());
        let obj2 = react;
        onClose(1484)();
        const bottom = onClose(1618)().bottom;
        const tmp8 = first1(react.useState(0), 2);
        dependencyMap = tmp8[1];
        const first = tmp8[0];
        const tmp10 = first1(react.useState(false), 2);
        first1 = tmp10[0];
        react = tmp12;
        const tmp13 = first1(react.useState(false), 2);
        const first2 = tmp13[0];
        let closure_6 = tmp13[1];
        const ref = react.useRef(null);
        const ref1 = react.useRef(null);
        const tmp5 = onClose;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const size1 = { top: 0, left: 0, width: 0, height: 0 };
          cResult[0] = size1;
          first3 = size1;
        } else {
          first3 = cResult[0];
        }
        [size, c9] = first1(obj2.useState(first3), 2);
        first1(obj2.useState(first3), 2);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const size3 = { width: 0, height: 0 };
          let num = 1;
          cResult[1] = size3;
          tmp19 = size3;
        } else {
          tmp19 = cResult[1];
        }
        [size2, closure_10] = first1(obj2.useState(tmp19), 2);
        first1(obj2.useState(tmp19), 2);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          function ne() {
            if (ref != null) {
              let current = ref.current;
              if (current != null) {
                current.measureInWindow((left, arg1, width, height) => {
                  size = { top: Math.max(arg1, 0), left, width, height };
                  duration(size);
                });
              }
            }
            const timerId = setTimeout(() => {
              if (ref != null) {
                const current = ref.current;
                if (current != null) {
                  current.measureInWindow((arg0, arg1, width, height) => {
                    size = { width, height };
                    closure_1_10(size);
                  });
                }
              }
            });
          }
          cResult[2] = ne;
          tmp21 = ne;
        } else {
          tmp21 = cResult[2];
        }
        closure_11 = tmp21;
        if (cResult[3] !== first2) {
          function ue() {
            let tmp = first2;
            if (tmp) {
              let current;
              if (ref != null) {
                current = ref.current;
              }
              tmp = null != current;
            }
            if (tmp) {
              closure_11();
            }
          }
          let items = [first2];
          let num2 = 3;
          cResult[3] = first2;
          cResult[4] = ue;
          cResult[5] = items;
          tmp23 = items;
          tmp22 = ue;
        } else {
          tmp22 = cResult[4];
          tmp23 = cResult[5];
        }
        const effect = obj2.useEffect(tmp22, tmp23);
        let sum = -size2.height;
        if (size.top + size.height + size2.height + 8 + bottom < height) {
          sum = size.height + 16;
        }
        let num6 = 0;
        if (size.left + size2.width + 8 > width) {
          num6 = size.width - size2.width;
        }
        if (cResult[6] === num6) {
          let tmp26;
          if (cResult[7] === sum) {
            tmp26 = cResult[8];
          }
          ({ top, left } = tmp26);
          if (cResult[9] === left) {
            let tmp27;
            let tmp29;
            let debounceResult;
            let tmp32;
            let tmp39;
            if (cResult[10] === top) {
              tmp27 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              class Ae {
                constructor() {
                  return {
                    close() {
                      closure_1_4(true);
                    },
                  };
                }
              }
              const items1 = [tmp10[1]];
              cResult[12] = Ae;
              cResult[13] = items1;
              tmp29 = items1;
            } else {
              class Ae {
                constructor() {
                  return {
                    close() {
                      closure_1_4(true);
                    },
                  };
                }
              }
              tmp29 = cResult[13];
            }
            const imperativeHandle = obj2.useImperativeHandle(arg1, Ae, tmp29);
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class Ae {
                constructor() {
                  return {
                    close() {
                      closure_1_4(true);
                    },
                  };
                }
              }
              debounceResult = obj7.debounce((arg0) => {
                closure_2(arg0);
              }, 16);
              cResult[14] = debounceResult;
              tmp32 = debounceResult;
            } else {
              class Ae {
                constructor() {
                  return {
                    close() {
                      closure_1_4(true);
                    },
                  };
                }
              }
            }
            debounceResult = tmp32;
            __initData = tmp34;
            function handleClose() {
              if (first1) {
                onClose();
                closure_6(false);
              }
            }
            const tmpResult = onOpen(4618);
            class De {
              constructor() {
                let fn;
                let items;
                let obj2;
                let obj5;
                let num = 0;
                const withTiming = timing.withTiming;
                timing;
                if (__initData) {
                  num = 1;
                }
                let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
                fn = function n(arg0) {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = onOpen(closure_2[14]);
                    obj.runOnJS(handleClose)();
                  }
                };
                obj2 = { easing: native.STANDARD_EASING, duration };
                fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
                fn.__workletHash = 7805688342878;
                fn.__initData = __initData;
                ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
                let num2 = 0;
                const withTiming2 = timing.withTiming;
                timing;
                if (__initData) {
                  num2 = -8;
                }
                const obj4 = { translateY: withTiming2(num2, obj5) };
                items = [obj4];
                obj5 = { easing: native.STANDARD_EASING, duration };
                return obj;
              }
            }
            const obj3 = {
              withTiming: onOpen(4897).withTiming,
              animateIn: first > 0 && !first1,
              STANDARD_EASING: onOpen(1188).STANDARD_EASING,
              ANIMATION_DURATION: v250,
              runOnJS: onOpen(4618).runOnJS,
              handleClose,
              EXTRA_PADDING: 8,
            };
            const useAnimatedStyle = tmpResult.useAnimatedStyle;
            De.__closure = obj3;
            De.__workletHash = 4709130936628;
            De.__initData = debounceResult;
            const animatedStyle = useAnimatedStyle(De);
            const _Symbol3 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class Ie {
                constructor() {
                  return closure_4(true);
                }
              }
              cResult[15] = Ie;
              tmp39 = Ie;
            } else {
              class Ie {
                constructor() {
                  return closure_4(true);
                }
              }
            }
            Ie = tmp39;
            if (cResult[16] !== onOpen) {
              class Oe {
                constructor() {
                  closure_4(false);
                  const obj = Patterns;
                  obj.trigger("impactHeavy");
                  closure_6(true);
                  onOpen();
                }
              }
              cResult[16] = onOpen;
              cResult[17] = Oe;
            } else {
              class Oe {
                constructor() {
                  closure_4(false);
                  const obj = Patterns;
                  obj.trigger("impactHeavy");
                  closure_6(true);
                  onOpen();
                }
              }
            }
            Oe = tmp40;
            if (cResult[18] !== tmp40) {
              class Oe {
                constructor() {
                  closure_4(false);
                  const obj = Patterns;
                  obj.trigger("impactHeavy");
                  closure_6(true);
                  onOpen();
                }
              }
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class PopoutMenuTsx4 {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    tmp = obj.runOnJS(closure_4)(true);
                    return;
                  }
                }
                let obj4 = { runOnJS: onOpen(4618).runOnJS, _setClose: tmp10[1] };
                PopoutMenuTsx4.__closure = obj4;
                PopoutMenuTsx4.__workletHash = 15929711498886;
                PopoutMenuTsx4.__initData = Ie;
                cResult[20] = PopoutMenuTsx4;
              } else {
                class PopoutMenuTsx4 {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    tmp = obj.runOnJS(closure_4)(true);
                    return;
                  }
                }
              }
              const Gesture = onOpen(6147).Gesture;
              const LongPressResult = Gesture.LongPress();
              function ve() {
                const obj = ReanimatedRexport;
                obj.runOnJS(Oe)();
              }
              let obj5 = { runOnJS: onOpen(4618).runOnJS, handleLongPress: tmp40 };
              const onStart = LongPressResult.onBegin(PopoutMenuTsx4).onStart;
              LongPressResult.onBegin(PopoutMenuTsx4);
              ve.__closure = obj5;
              ve.__workletHash = 1649917173815;
              class De {
                constructor() {
                  let fn;
                  let items;
                  let obj2;
                  let obj5;
                  let num = 0;
                  const withTiming = timing.withTiming;
                  timing;
                  if (__initData) {
                    num = 1;
                  }
                  let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
                  fn = function n(arg0) {
                    const tmp = arg0;
                    if (tmp) {
                      const obj = onOpen(closure_2[14]);
                      obj.runOnJS(handleClose)();
                    }
                  };
                  obj2 = { easing: native.STANDARD_EASING, duration };
                  fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
                  fn.__workletHash = 7805688342878;
                  fn.__initData = __initData;
                  ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
                  let num2 = 0;
                  const withTiming2 = timing.withTiming;
                  timing;
                  if (__initData) {
                    num2 = -8;
                  }
                  const obj4 = { translateY: withTiming2(num2, obj5) };
                  items = [obj4];
                  obj5 = { easing: native.STANDARD_EASING, duration };
                  return obj;
                }
              }
              cResult[18] = tmp40;
              cResult[19] = onStart(ve);
              const onStartResult = onStart(ve);
            } else {
              class PopoutMenuTsx4 {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  tmp = obj.runOnJS(closure_4)(true);
                  return;
                }
              }
            }
            if (cResult[21] === animatedStyle) {
              class PopoutMenuTsx4 {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  tmp = obj.runOnJS(closure_4)(true);
                  return;
                }
              }
            }
            let tmp49Result2 = trigger;
            if (!disabled) {
              class PopoutMenuTsx4 {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  tmp = obj.runOnJS(closure_4)(true);
                  return;
                }
              }
              const obj6 = { gesture: tmp41, children: closure_6(first2, obj8) };
              obj8 = { ref, children: trigger };
              const GestureDetector = onOpen(6147).GestureDetector;
              const items2 = [closure_6(GestureDetector, obj6)];
              let tmp49Result = null;
              const tmp50 = ref1;
              const tmp51 = closure_6;
              if (first2) {
                class PopoutMenuTsx4 {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    tmp = obj.runOnJS(closure_4)(true);
                    return;
                  }
                }
                tmp54[0] = ref1;
                const items3 = [tmp4.container, style, tmp27, animatedStyle];
                tmp54[1] = items3;
                tmp54[2] = function onLayout(nativeEvent) {
                  debounceResult(nativeEvent.nativeEvent.layout.height);
                };
                let tmp51Result = null;
                View = tmp5(4618).View;
                if (null != title) {
                  class PopoutMenuTsx4 {
                    constructor() {
                      obj = closure_0(closure_2[14]);
                      tmp = obj.runOnJS(closure_4)(true);
                      return;
                    }
                  }
                  const obj9 = { text: title };
                  tmp51Result = tmp51(closure_11, obj9);
                }
                const items4 = [tmp51Result, ,];
                class De {
                  constructor() {
                    let fn;
                    let items;
                    let obj2;
                    let obj5;
                    let num = 0;
                    const withTiming = timing.withTiming;
                    timing;
                    if (__initData) {
                      num = 1;
                    }
                    let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
                    fn = function n(arg0) {
                      const tmp = arg0;
                      if (tmp) {
                        const obj = onOpen(closure_2[14]);
                        obj.runOnJS(handleClose)();
                      }
                    };
                    obj2 = { easing: native.STANDARD_EASING, duration };
                    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
                    fn.__workletHash = 7805688342878;
                    fn.__initData = __initData;
                    ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
                    let num2 = 0;
                    const withTiming2 = timing.withTiming;
                    timing;
                    if (__initData) {
                      num2 = -8;
                    }
                    const obj4 = { translateY: withTiming2(num2, obj5) };
                    items = [obj4];
                    obj5 = { easing: native.STANDARD_EASING, duration };
                    return obj;
                  }
                }
                items4[1] = null;
                items4[2] = rows.map((item, index) => {
                  const obj = { onClose: Ie };
                  const merged = Object.assign(item);
                  return metroRequire(closure_11, obj, index);
                });
                tmp54[3] = items4;
                tmp49Result = tmp49(View, tmp54);
              }
              class De {
                constructor() {
                  let fn;
                  let items;
                  let obj2;
                  let obj5;
                  let num = 0;
                  const withTiming = timing.withTiming;
                  timing;
                  if (__initData) {
                    num = 1;
                  }
                  let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
                  fn = function n(arg0) {
                    const tmp = arg0;
                    if (tmp) {
                      const obj = onOpen(closure_2[14]);
                      obj.runOnJS(handleClose)();
                    }
                  };
                  obj2 = { easing: native.STANDARD_EASING, duration };
                  fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
                  fn.__workletHash = 7805688342878;
                  fn.__initData = __initData;
                  ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
                  let num2 = 0;
                  const withTiming2 = timing.withTiming;
                  timing;
                  if (__initData) {
                    num2 = -8;
                  }
                  const obj4 = { translateY: withTiming2(num2, obj5) };
                  items = [obj4];
                  obj5 = { easing: native.STANDARD_EASING, duration };
                  return obj;
                }
              }
              items2[1] = tmp49Result;
              tmp57[0] = items2;
              tmp49Result2 = tmp49(tmp50, tmp57);
            }
            cResult[21] = animatedStyle;
            cResult[22] = disabled;
            cResult[23] = tmp41;
            cResult[24] = tmp27;
            cResult[25] = first2;
            cResult[26] = rows;
            cResult[27] = style;
            cResult[28] = tmp4;
            cResult[29] = title;
            cResult[30] = trigger;
            cResult[31] = tmp49Result2;
          }
          const rect = { left, top };
          cResult[9] = left;
          cResult[10] = top;
          cResult[11] = rect;
          tmp27 = rect;
        }
        const rect1 = { top: sum, left: num6 };
        cResult[6] = num6;
        cResult[7] = sum;
        cResult[8] = rect1;
        tmp26 = rect1;
      }
    : (onClose, arg1) => {
        let closure_16;
        let disabled;
        let items7;
        let items8;
        let left;
        let obj5;
        let onOpen;
        let rows;
        let style;
        let title;
        let top;
        let trigger;
        ({ title, trigger, rows, onOpen } = onClose);
        onClose = onClose.onClose;
        let width;
        let ref;
        ({ disabled, style } = onClose);
        const tmp3 = width;
        let tmp = ref();
        size = onClose(width[11])();
        width = size.width;
        const height = size.height;
        const bottom = onClose(width[12])().bottom;
        let obj = bottom;
        const tmp4 = height(bottom.useState(0), 2);
        let closure_5 = tmp6;
        const first = tmp4[0];
        const tmp7 = height(bottom.useState(false), 2);
        const first1 = tmp7[0];
        const _setClose = tmp9;
        const tmp10 = height(bottom.useState(false), 2);
        const first2 = tmp10[0];
        const v250 = tmp10[1];
        ref = bottom.useRef(null);
        const ref1 = bottom.useRef(null);
        const tmp14 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
        const first3 = tmp14[0];
        let closure_13 = tmp14[1];
        const tmp16 = height(bottom.useState({ width: 0, height: 0 }), 2);
        const first4 = tmp16[0];
        closure_15 = tmp16[1];
        let items = [first2];
        const effect = bottom.useEffect(() => {
          let tmp = first2;
          if (tmp) {
            let current1;
            if (ref != null) {
              current1 = ref.current;
            }
            tmp = null != current1;
          }
          if (tmp) {
            if (ref != null) {
              let current = ref.current;
              if (current != null) {
                current.measureInWindow((left, arg1, width, height) => {
                  size = { top: Math.max(arg1, 0), left, width, height };
                  closure_1_13(size);
                });
              }
            }
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              if (ref != null) {
                const current = ref.current;
                if (current != null) {
                  current.measureInWindow((arg0, arg1, width, height) => {
                    size = { width, height };
                    closure_1_15(size);
                  });
                }
              }
            });
          }
        }, items);
        const items1 = [first4, bottom, height, width, first3];
        const memo = bottom.useMemo(() => {
          let top = -first4.height;
          size = first3;
          if (first3.top + first3.height + first4.height + 8 + bottom < height) {
            top = size.height + 16;
          }
          let left = 0;
          if (size.left + first4.width + 8 > width) {
            left = size.width - first4.width;
          }
          return { top, left };
        }, items1);
        const items2 = [tmp7[1]];
        ({ top, left } = memo);
        const imperativeHandle = bottom.useImperativeHandle(
          arg1,
          () => ({
            close() {
              _setClose(true);
            },
          }),
          items2,
        );
        const items3 = [tmp6];
        __initData2 = bottom.useMemo(() => {
          const obj = _modDef12;
          return obj.debounce((arg0) => {
            closure_1_5(arg0);
          }, 16);
        }, items3);
        __initData = tmp21;
        const items4 = [first1, onClose];
        const callback = obj.useCallback(() => {
          if (first1) {
            onClose();
            duration(false);
          }
        }, items4);
        let obj2 = onOpen(tmp3[14]);
        function ie() {
          let fn;
          let items;
          let obj2;
          let obj5;
          let num = 0;
          const withTiming = timing.withTiming;
          timing;
          if (__initData) {
            num = 1;
          }
          let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
          fn = function n(arg0) {
            const tmp = arg0;
            if (tmp) {
              const obj = onOpen(width[14]);
              obj.runOnJS(__initData2)();
            }
          };
          obj2 = { easing: native.STANDARD_EASING, duration };
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose: callback };
          fn.__workletHash = 523589016154;
          fn.__initData = __initData;
          ({ runOnJS: ReanimatedRexport.runOnJS, handleClose: callback });
          let num2 = 0;
          const withTiming2 = timing.withTiming;
          timing;
          if (__initData) {
            num2 = -8;
          }
          const obj4 = { translateY: withTiming2(num2, obj5) };
          items = [obj4];
          obj5 = { easing: native.STANDARD_EASING, duration };
          return obj;
        }
        const obj3 = {
          withTiming: onOpen(tmp3[15]).withTiming,
          animateIn: tmp21,
          STANDARD_EASING: onOpen(tmp3[8]).STANDARD_EASING,
          ANIMATION_DURATION: v250,
          runOnJS: onOpen(tmp3[14]).runOnJS,
          handleClose: callback,
          EXTRA_PADDING: 8,
        };
        ie.__closure = obj3;
        ie.__workletHash = 13033113644272;
        ie.__initData = __initData2;
        const animatedStyle = obj2.useAnimatedStyle(ie);
        closure_19 = obj.useCallback(() => _setClose(true), []);
        const items5 = [onOpen];
        const callback1 = obj.useCallback(() => {
          _setClose(false);
          const obj = Patterns;
          obj.trigger("impactHeavy");
          duration(true);
          onOpen();
        }, items5);
        [][0] = callback1;
        let tmp28Result2 = trigger;
        const tmp2 = onClose;
        if (!disabled) {
          let obj4 = { gesture: tmp26, children: first1(closure_5, obj5) };
          obj5 = { ref, children: trigger };
          const GestureDetector = tmp23(tmp3[17]).GestureDetector;
          const items6 = [first1(GestureDetector, obj4)];
          let tmp28Result = null;
          if (first2) {
            const obj6 = {
              ref: ref1,
              style: items7,
              onLayout(nativeEvent) {
                closure_16(nativeEvent.nativeEvent.layout.height);
              },
              children: items8,
            };
            items7 = [tmp.container, style, ,];
            const rect = { left, top };
            items7[2] = rect;
            items7[3] = animatedStyle;
            let tmp30Result = null;
            View = tmp2(tmp3[14]).View;
            if (null != title) {
              const obj7 = { text: title };
              tmp30Result = tmp30(ref1, obj7);
            }
            items8 = [tmp30Result, ,];
            let tmp30Result2 = null;
            if (null != title) {
              tmp30Result2 = tmp30(tmp23(tmp3[9]).FormDivider, {});
            }
            items8[1] = tmp30Result2;
            items8[2] = rows.map((item, index) => {
              const obj = { onClose };
              const merged = Object.assign(item);
              return metroRequire(closure_11, obj, index);
            });
            tmp28Result = tmp28(View, obj6);
          }
          const obj8 = { children: items6 };
          items6[1] = tmp28Result;
          tmp28Result2 = tmp28(tmp29, obj8);
        }
        return tmp28Result2;
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default forwardRefResult;
