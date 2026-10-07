// === Module 9186: PopoutMenu ===

// Module 9186 (PopoutMenu)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Patterns from "Patterns" /* 4863 */;
import timing from "timing" /* 4897 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import FormRowDefault from "FormRow" /* 6640 */;
import Form from "Form" /* 8924 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let c9 = 250;
const createStyles = fn(4896);
let obj = { container: { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm }, popoutMenuRow: { flex: 1 }, popoutMenuRowLabel: { width: "100%" } };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = c.c(13);
  ({ icon, text, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp4 = closure_10();
  if (cResult[0] === onClick) {
    if (cResult[1] === onClose) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== icon) {
      let tmp7 = null;
      if (null != icon) {
        const obj2 = { source: icon };
        tmp7 = timestampProducer(native.Icon, obj2);
      }
      cResult[3] = icon;
      cResult[4] = tmp7;
      let tmp6 = tmp7;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.popoutMenuRowLabel) {
      if (cResult[6] === text) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp4.popoutMenuRow) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp9) {
              let tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
      }
      const obj3 = { leading: tmp6, label: tmp9, style: tmp4.popoutMenuRow, onPress: tmp5 };
      const tmp15 = timestampProducer(FormRowDefault, obj3);
      cResult[8] = tmp5;
      cResult[9] = tmp4.popoutMenuRow;
      cResult[10] = tmp6;
      cResult[11] = tmp9;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
    const obj4 = { style: tmp4.popoutMenuRowLabel, text };
    const tmp11 = timestampProducer(Form.FormLabel, obj4);
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
}) : ((onClose) => {
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp = closure_10();
  const items = [onClick, onClose];
  const callback = noop.useCallback(() => {
    if (onClick != null) {
      tmp();
    }
    if (onClose != null) {
      tmp3();
    }
  }, items);
  let tmp3Result = null;
  if (null != icon) {
    const obj = { source: icon };
    tmp3Result = timestampProducer(native.Icon, obj);
  }
  const obj2 = { leading: tmp3Result, label: timestampProducer(Form.FormLabel, { style: tmp.popoutMenuRowLabel, text: onClose.text }), style: tmp.popoutMenuRow, onPress: callback };
  return timestampProducer(FormRowDefault, obj2);
});
let closure_12 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},\"respect-motion-settings\",function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let __initData = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_14 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_15 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
let __initData2 = { code: "function PopoutMenuTsx5(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_17 = { code: "function PopoutMenuTsx6(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_18 = { code: "function PopoutMenuTsx7(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_19 = { code: "function PopoutMenuTsx8(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
ReactCompilerGating = fn(558);
let obj3 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onClose, arg1) => {
  const cResult = onOpen(576).c(32);
  ({ disabled, title, trigger, rows, style, onOpen } = onClose);
  onClose = onClose.onClose;
  const tmp4 = closure_10();
  let obj = onOpen(576);
  const tmp5 = onClose;
  ({ width, height } = onClose(1484)());
  const tmp8 = first(noop.useState(0), 2);
  dependencyMap = tmp8[1];
  const tmp9 = first(noop.useState(false), 2);
  first = tmp9[0];
  let tmp11 = tmp9[1];
  noop = tmp11;
  const tmp12 = first(noop.useState(false), 2);
  const first1 = tmp12[0];
  closure_6 = tmp12[1];
  const tmp6 = onClose(1484)();
  const ref1 = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { top: 0, left: 0, width: 0, height: 0 };
    cResult[0] = size1;
    let first2 = size1;
  } else {
    first2 = cResult[0];
  }
  const ref = noop.useRef(null);
  [size, c9] = first(noop.useState(first2), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const size3 = { width: 0, height: 0 };
    cResult[1] = size3;
    let tmp18 = size3;
  } else {
    tmp18 = cResult[1];
  }
  const tmp7Result = first(noop.useState(first2), 2);
  [size2, closure_10] = first(noop.useState(tmp18), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function ne() {
      if (ref != null) {
        let current = ref.current;
        if (current != null) {
          current.measureInWindow((left, arg1, width, height) => {
            const size = { top: Math.max(arg1, 0), left, width, height };
            duration(size);
          });
        }
      }
      const timerId = setTimeout(() => {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.measureInWindow((arg0, arg1, width, height) => {
              const size = { width, height };
              closure_1_10(size);
            });
          }
        }
      });
    }
    cResult[2] = ne;
    let tmp20 = ne;
  } else {
    tmp20 = cResult[2];
  }
  closure_11 = tmp20;
  if (cResult[3] !== first1) {
    function ue() {
      let tmp = first1;
      if (first1) {
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
    let items = [first1];
    cResult[3] = first1;
    cResult[4] = ue;
    cResult[5] = items;
    let tmp22 = items;
    let tmp21 = ue;
  } else {
    tmp21 = cResult[4];
    tmp22 = cResult[5];
  }
  const effect = obj2.useEffect(tmp21, tmp22);
  let sum = -size2.height;
  if (size.top + size.height + size2.height + 8 + onClose(1618)().bottom < height) {
    sum = size.height + 16;
  }
  let num6 = 0;
  if (size.left + size2.width + 8 > width) {
    num6 = size.width - size2.width;
  }
  if (cResult[6] === num6) {
    if (cResult[7] === sum) {
      let tmp25 = cResult[8];
    }
    ({ top, left } = tmp25);
    if (cResult[9] === left) {
      if (cResult[10] === top) {
        let tmp26 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            obj = {
              close() {
                          closure_1_4(true);
                        }
            };
            return obj;
          }
        }
        const items1 = [tmp11];
        cResult[12] = Ae;
        cResult[13] = items1;
        let tmp28 = items1;
      } else {
        class Ae {
          constructor() {
            obj = {
              close() {
                          closure_1_4(true);
                        }
            };
            return obj;
          }
        }
        tmp28 = cResult[13];
      }
      const imperativeHandle = obj2.useImperativeHandle(arg1, Ae, tmp28);
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            obj = {
              close() {
                          closure_1_4(true);
                        }
            };
            return obj;
          }
        }
        let debounceResult = obj7.debounce((arg0) => {
          closure_2(arg0);
        }, 16);
        cResult[14] = debounceResult;
        const tmp31 = debounceResult;
      } else {
        class Ae {
          constructor() {
            obj = {
              close() {
                          closure_1_4(true);
                        }
            };
            return obj;
          }
        }
      }
      debounceResult = tmp31;
      __initData = tmp33;
      function handleClose() {
        if (first) {
          onClose();
          closure_6(false);
        }
      }
      class De {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[15]);
          num = 0;
          tmp3 = closure_13;
          if (closure_13) {
            num = 1;
          }
          obj1 = { opacity: null, transform: null };
          obj8 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: c9 };
          fn = function n(arg0) {
            if (arg0) {
              onOpen(dependencyMap[14]).runOnJS(handleClose)();
              const obj = onOpen(dependencyMap[14]);
            }
          };
          obj9 = { runOnJS: tmp(tmp2[14]).runOnJS, handleClose };
          tmp4 = c9;
          fn.__closure = obj9;
          fn.__workletHash = 7805688342878;
          fn.__initData = closure_13;
          obj1.opacity = obj.withTiming(num, obj8, "respect-motion-settings", fn);
          tmpResult = tmp(tmp2[15]);
          num2 = 0;
          if (tmp3) {
            num2 = -8;
          }
          obj10 = { translateY: null };
          obj11 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: tmp4 };
          obj10.translateY = tmpResult.withTiming(num2, obj11);
          items = [];
          items[0] = obj10;
          obj1.transform = items;
          return obj1;
        }
      }
      let obj3 = { withTiming: onOpen(4897).withTiming, animateIn: tmp8[0] > 0 && !first, STANDARD_EASING: onOpen(1188).STANDARD_EASING, ANIMATION_DURATION: v250, runOnJS: onOpen(4618).runOnJS, handleClose, EXTRA_PADDING: 8 };
      De.__closure = obj3;
      De.__workletHash = 4709130936628;
      De.__initData = debounceResult;
      const animatedStyle = onOpen(4618).useAnimatedStyle(De);
      const _Symbol3 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class Ie {
          constructor() {
            return closure_4(true);
          }
        }
        cResult[15] = Ie;
        const tmp37 = Ie;
      } else {
        class Ie {
          constructor() {
            return closure_4(true);
          }
        }
      }
      Ie = tmp37;
      if (cResult[16] !== onOpen) {
        class Oe {
          constructor() {
            tmp = closure_4(false);
            obj = closure_0(closure_2[16]);
            triggerResult = obj.trigger("impactHeavy");
            tmp3 = closure_6(true);
            tmp4 = onOpen();
            return;
          }
        }
        cResult[16] = onOpen;
        cResult[17] = Oe;
      } else {
        class Oe {
          constructor() {
            tmp = closure_4(false);
            obj = closure_0(closure_2[16]);
            triggerResult = obj.trigger("impactHeavy");
            tmp3 = closure_6(true);
            tmp4 = onOpen();
            return;
          }
        }
      }
      Oe = tmp38;
      if (cResult[18] !== tmp38) {
        class Oe {
          constructor() {
            tmp = closure_4(false);
            obj = closure_0(closure_2[16]);
            triggerResult = obj.trigger("impactHeavy");
            tmp3 = closure_6(true);
            tmp4 = onOpen();
            return;
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
          let obj4 = { runOnJS: onOpen(4618).runOnJS, _setClose: tmp11 };
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
          ReanimatedRexport.runOnJS(Oe)();
        }
        let obj5 = { runOnJS: onOpen(4618).runOnJS, handleLongPress: tmp38 };
        ve.__closure = obj5;
        ve.__workletHash = 1649917173815;
        tmp11 = handleClose;
        class De {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[15]);
            num = 0;
            tmp3 = closure_13;
            if (closure_13) {
              num = 1;
            }
            obj1 = { opacity: null, transform: null };
            obj8 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: c9 };
            fn = function n(arg0) {
              if (arg0) {
                onOpen(dependencyMap[14]).runOnJS(handleClose)();
                const obj = onOpen(dependencyMap[14]);
              }
            };
            obj9 = { runOnJS: tmp(tmp2[14]).runOnJS, handleClose };
            tmp4 = c9;
            fn.__closure = obj9;
            fn.__workletHash = 7805688342878;
            fn.__initData = closure_13;
            obj1.opacity = obj.withTiming(num, obj8, "respect-motion-settings", fn);
            tmpResult = tmp(tmp2[15]);
            num2 = 0;
            if (tmp3) {
              num2 = -8;
            }
            obj10 = { translateY: null };
            obj11 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: tmp4 };
            obj10.translateY = tmpResult.withTiming(num2, obj11);
            items = [];
            items[0] = obj10;
            obj1.transform = items;
            return obj1;
          }
        }
        const onStartResult = Gesture.LongPress().onBegin(PopoutMenuTsx4).onStart(ve);
        cResult[18] = tmp38;
        cResult[19] = onStartResult;
        const onBeginResult = Gesture.LongPress().onBegin(PopoutMenuTsx4);
      } else {
        class PopoutMenuTsx4 {
          constructor() {
            obj = closure_0(closure_2[14]);
            tmp = obj.runOnJS(closure_4)(true);
            return;
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
        let tmp46Result2 = trigger;
        if (!disabled) {
          class PopoutMenuTsx4 {
            constructor() {
              obj = closure_0(closure_2[14]);
              tmp = obj.runOnJS(closure_4)(true);
              return;
            }
          }
          const obj6 = { gesture: tmp39, children: null };
          const obj8 = { ref, children: trigger };
          obj6.children = closure_6(first1, obj8);
          const items2 = [closure_6(onOpen(6147).GestureDetector, obj6), ];
          let tmp46Result = null;
          if (first1) {
            class PopoutMenuTsx4 {
              constructor() {
                obj = closure_0(closure_2[14]);
                tmp = obj.runOnJS(closure_4)(true);
                return;
              }
            }
            tmp51[0] = ref1;
            const items3 = [tmp4.container, style, tmp26, animatedStyle];
            tmp51[1] = items3;
            tmp51[2] = function onLayout(nativeEvent) {
              debounceResult(nativeEvent.nativeEvent.layout.height);
            };
            let tmp48Result = null;
            if (null != title) {
              class PopoutMenuTsx4 {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  tmp = obj.runOnJS(closure_4)(true);
                  return;
                }
              }
              const obj9 = { text: title };
              tmp48Result = tmp48(closure_11, obj9);
            }
            const items4 = [tmp48Result, , ];
            class De {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[15]);
                num = 0;
                tmp3 = closure_13;
                if (closure_13) {
                  num = 1;
                }
                obj1 = { opacity: null, transform: null };
                obj8 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: c9 };
                fn = function n(arg0) {
                  if (arg0) {
                    onOpen(dependencyMap[14]).runOnJS(handleClose)();
                    const obj = onOpen(dependencyMap[14]);
                  }
                };
                obj9 = { runOnJS: tmp(tmp2[14]).runOnJS, handleClose };
                tmp4 = c9;
                fn.__closure = obj9;
                fn.__workletHash = 7805688342878;
                fn.__initData = closure_13;
                obj1.opacity = obj.withTiming(num, obj8, "respect-motion-settings", fn);
                tmpResult = tmp(tmp2[15]);
                num2 = 0;
                if (tmp3) {
                  num2 = -8;
                }
                obj10 = { translateY: null };
                obj11 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: tmp4 };
                obj10.translateY = tmpResult.withTiming(num2, obj11);
                items = [];
                items[0] = obj10;
                obj1.transform = items;
                return obj1;
              }
            }
            items4[1] = null;
            items4[2] = rows.map((item, index) => {
              const obj = {};
              const merged = Object.assign(item);
              obj.onClose = Ie;
              return timestampProducer(closure_11, obj, index);
            });
            tmp51[3] = items4;
            tmp46Result = tmp46(tmp5(4618).View, tmp51);
          }
          class De {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[15]);
              num = 0;
              tmp3 = closure_13;
              if (closure_13) {
                num = 1;
              }
              obj1 = { opacity: null, transform: null };
              obj8 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: c9 };
              fn = function n(arg0) {
                if (arg0) {
                  onOpen(dependencyMap[14]).runOnJS(handleClose)();
                  const obj = onOpen(dependencyMap[14]);
                }
              };
              obj9 = { runOnJS: tmp(tmp2[14]).runOnJS, handleClose };
              tmp4 = c9;
              fn.__closure = obj9;
              fn.__workletHash = 7805688342878;
              fn.__initData = closure_13;
              obj1.opacity = obj.withTiming(num, obj8, "respect-motion-settings", fn);
              tmpResult = tmp(tmp2[15]);
              num2 = 0;
              if (tmp3) {
                num2 = -8;
              }
              obj10 = { translateY: null };
              obj11 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: tmp4 };
              obj10.translateY = tmpResult.withTiming(num2, obj11);
              items = [];
              items[0] = obj10;
              obj1.transform = items;
              return obj1;
            }
          }
          items2[1] = tmp46Result;
          tmp54[0] = items2;
          tmp46Result2 = tmp46(ref1, tmp54);
          tmp48 = closure_6;
        }
        cResult[21] = animatedStyle;
        cResult[22] = disabled;
        cResult[23] = tmp39;
        cResult[24] = tmp26;
        cResult[25] = first1;
        class De {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[15]);
            num = 0;
            tmp3 = closure_13;
            if (closure_13) {
              num = 1;
            }
            obj1 = { opacity: null, transform: null };
            obj8 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: c9 };
            fn = function n(arg0) {
              if (arg0) {
                onOpen(dependencyMap[14]).runOnJS(handleClose)();
                const obj = onOpen(dependencyMap[14]);
              }
            };
            obj9 = { runOnJS: tmp(tmp2[14]).runOnJS, handleClose };
            tmp4 = c9;
            fn.__closure = obj9;
            fn.__workletHash = 7805688342878;
            fn.__initData = closure_13;
            obj1.opacity = obj.withTiming(num, obj8, "respect-motion-settings", fn);
            tmpResult = tmp(tmp2[15]);
            num2 = 0;
            if (tmp3) {
              num2 = -8;
            }
            obj10 = { translateY: null };
            obj11 = { easing: tmp(tmp2[8]).STANDARD_EASING, duration: tmp4 };
            obj10.translateY = tmpResult.withTiming(num2, obj11);
            items = [];
            items[0] = obj10;
            obj1.transform = items;
            return obj1;
          }
        }
        cResult[27] = style;
        cResult[28] = tmp4;
        cResult[29] = title;
        cResult[30] = trigger;
        cResult[31] = tmp46Result2;
      }
      let tmpResult = onOpen(4618);
    }
    const rect = { left, top };
    cResult[9] = left;
    cResult[10] = top;
    cResult[11] = rect;
    tmp26 = rect;
  }
  const rect1 = { top: sum, left: num6 };
  cResult[6] = num6;
  cResult[7] = sum;
  cResult[8] = rect1;
  tmp25 = rect1;
  const tmp7Result2 = first(noop.useState(tmp18), 2);
}) : ((onClose, arg1) => {
  ({ title, trigger, rows, onOpen } = onClose);
  onClose = onClose.onClose;
  let width;
  ({ disabled, style } = onClose);
  let size = onClose(width[11])();
  width = size.width;
  const height = size.height;
  const bottom = onClose(width[12])().bottom;
  const tmp4 = height(bottom.useState(0), 2);
  closure_5 = tmp5;
  const tmp6 = height(bottom.useState(false), 2);
  const first = tmp6[0];
  const _setClose = tmp8;
  const tmp9 = height(bottom.useState(false), 2);
  const first1 = tmp9[0];
  const v250 = tmp9[1];
  const ref = bottom.useRef(null);
  const ref1 = bottom.useRef(null);
  const tmp13 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first2 = tmp13[0];
  closure_13 = tmp13[1];
  const tmp15 = height(bottom.useState({ width: 0, height: 0 }), 2);
  const first3 = tmp15[0];
  closure_15 = tmp15[1];
  let items = [first1];
  const effect = bottom.useEffect(() => {
    let tmp = first1;
    if (first1) {
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
            const size = { top: Math.max(arg1, 0), left, width, height };
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
              const size = { width, height };
              closure_1_15(size);
            });
          }
        }
      });
    }
  }, items);
  const items1 = [first3, bottom, height, width, first2];
  const memo = bottom.useMemo(() => {
    let top = -first3.height;
    const size = first2;
    if (first2.top + first2.height + first3.height + 8 + bottom < height) {
      top = size.height + 16;
    }
    let left = 0;
    if (size.left + first3.width + 8 > width) {
      left = size.width - first3.width;
    }
    return { top, left };
  }, items1);
  const items2 = [tmp6[1]];
  ({ top, left } = memo);
  const imperativeHandle = bottom.useImperativeHandle(arg1, () => ({
    close() {
      _setClose(true);
    }
  }), items2);
  const items3 = [tmp4[1]];
  __initData2 = bottom.useMemo(() => _modDef12.debounce((arg0) => {
    closure_1_5(arg0);
  }, 16), items3);
  __initData = tmp20;
  const items4 = [first, onClose];
  const callback = obj.useCallback(() => {
    if (first) {
      onClose();
      duration(false);
    }
  }, items4);
  let tmp = ref();
  const tmp2 = onClose;
  function ie() {
    let num = 0;
    if (__initData) {
      num = 1;
    }
    const obj2 = { opacity: null, transform: null };
    let obj = timing;
    const fn = function n(arg0) {
      if (arg0) {
        onOpen(width[14]).runOnJS(__initData2)();
        const obj = onOpen(width[14]);
      }
    };
    const obj3 = { easing: native.STANDARD_EASING, duration };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose: callback };
    fn.__workletHash = 523589016154;
    fn.__initData = __initData;
    obj2.opacity = obj.withTiming(num, obj3, "respect-motion-settings", fn);
    const obj4 = { runOnJS: ReanimatedRexport.runOnJS, handleClose: callback };
    let num2 = 0;
    if (__initData) {
      num2 = -8;
    }
    const obj5 = { translateY: null };
    const tmpResult = timing;
    obj5.translateY = tmpResult.withTiming(num2, { easing: native.STANDARD_EASING, duration });
    const items = [obj5];
    obj2.transform = items;
    return obj2;
  }
  let obj2 = onOpen(width[14]);
  ie.__closure = { withTiming: onOpen(width[15]).withTiming, animateIn: tmp4[0] > 0 && !first, STANDARD_EASING: onOpen(width[8]).STANDARD_EASING, ANIMATION_DURATION: v250, runOnJS: onOpen(width[14]).runOnJS, handleClose: callback, EXTRA_PADDING: 8 };
  ie.__workletHash = 13033113644272;
  ie.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(ie);
  closure_19 = obj.useCallback(() => _setClose(true), []);
  const items5 = [onOpen];
  const callback1 = obj.useCallback(() => {
    _setClose(false);
    Patterns.trigger("impactHeavy");
    duration(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp27Result2 = trigger;
  if (!disabled) {
    let obj4 = { gesture: tmp25, children: null };
    let obj5 = { ref, children: trigger };
    obj4.children = first(closure_5, obj5);
    const items6 = [first(tmp22(tmp3[17]).GestureDetector, obj4), ];
    let tmp27Result = null;
    if (first1) {
      const obj6 = { ref: ref1, style: null, onLayout: null, children: null };
      const items7 = [tmp.container, style, , ];
      const rect = { left, top };
      items7[2] = rect;
      items7[3] = animatedStyle;
      obj6.style = items7;
      obj6.onLayout = function onLayout(nativeEvent) {
        closure_16(nativeEvent.nativeEvent.layout.height);
      };
      let tmp29Result = null;
      if (null != title) {
        const obj7 = { text: title };
        tmp29Result = tmp29(ref1, obj7);
      }
      const items8 = [tmp29Result, , ];
      let tmp29Result2 = null;
      if (null != title) {
        tmp29Result2 = tmp29(tmp22(tmp3[9]).FormDivider, {});
      }
      items8[1] = tmp29Result2;
      items8[2] = rows.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.onClose = onClose;
        return timestampProducer(closure_11, obj, index);
      });
      obj6.children = items8;
      tmp27Result = tmp27(tmp2(tmp3[14]).View, obj6);
    }
    const obj8 = { children: null };
    items6[1] = tmp27Result;
    obj8.children = items6;
    tmp27Result2 = tmp27(first1, obj8);
  }
  return tmp27Result2;
}));