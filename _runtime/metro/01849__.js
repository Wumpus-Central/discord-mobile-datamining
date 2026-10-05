// === Module 1849: ? ===

// Module 1849
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1643 from "module_1643" /* 1643 */;
import react_mod from "react" /* 19 */;

let c3;
let closure_4;
let forwardRef;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, forwardRef } = react);
react = react_mod;
let View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = { x: 0, y: 0, width: 0, height: 0 };
let closure_9 = { code: "function pnpm_indexTsx1(){const{initialFrame,defaultLayout}=this.__closure;return initialFrame.value||defaultLayout;}" };
let closure_10 = { code: "function pnpm_indexTsx2(){const{screenHeight,keyboard,keyboardVerticalOffset,frame}=this.__closure;const keyboardY=screenHeight-keyboard.heightWhenOpened.value-keyboardVerticalOffset;return Math.max(frame.value.y+frame.value.height-keyboardY,0);}" };
let closure_11 = { code: "function pnpm_indexTsx3(value){const{interpolate,relativeKeyboardHeight}=this.__closure;return interpolate(value,[0,1],[0,relativeKeyboardHeight()]);}" };
let __initData = { code: "function pnpm_indexTsx4(layout){const{keyboard,initialFrame,behavior}=this.__closure;if(keyboard.isClosed.value||initialFrame.value===null||behavior!==\"height\"){initialFrame.value=layout;}}" };
let __initData2 = { code: "function pnpm_indexTsx5(){const{enabled,interpolateToRelativeKeyboardHeight,keyboard,translate,padding,frame,behavior}=this.__closure;if(!enabled){return{};}const bottom=interpolateToRelativeKeyboardHeight(keyboard.progress.value);const translateY=interpolateToRelativeKeyboardHeight(translate.value);const paddingBottom=interpolateToRelativeKeyboardHeight(padding.value);const height=frame.value.height-bottom;switch(behavior){case\"height\":if(!keyboard.isClosed.value&&height>0){return{height:height,flex:0};}return{};case\"position\":return{bottom:bottom};case\"padding\":return{paddingBottom:bottom};case\"translate-with-padding\":return{paddingTop:paddingBottom,transform:[{translateY:-translateY}]};default:return{};}}" };

export default forwardRef((behavior, arg1) => {
  let children;
  let closure_13;
  let enabled;
  let obj10;
  let onLayout;
  let style;
  let tmp17Result;
  behavior = behavior.behavior;
  ({ children, enabled } = behavior);
  let contentContainerStyle = behavior.contentContainerStyle;
  if (enabled === undefined) {
    enabled = true;
  }
  let num = behavior.keyboardVerticalOffset;
  if (num === undefined) {
    num = 0;
  }
  let flag = behavior.automaticOffset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, onLayout } = behavior);
  let merged = Object.assign(behavior, Object.assign({ behavior: 0, children: 0, contentContainerStyle: 0, enabled: 0, keyboardVerticalOffset: 0, automaticOffset: 0, style: 0, onLayout: 0 }));
  let derivedValue;
  let translate;
  let padding;
  let keyboardAnimation;
  let height;
  __initData = undefined;
  __initData2 = undefined;
  let closure_14;
  let animatedStyle;
  contentContainerStyle = undefined;
  let obj = behavior(num[3]);
  const sharedValue = obj.useSharedValue(null);
  const ref = sharedValue.useRef(null);
  let obj2 = behavior(num[3]);
  class K {
    constructor() {
      return sharedValue.value || closure_8;
    }
  }
  let obj3 = { initialFrame: sharedValue, defaultLayout: translate };
  K.__closure = obj3;
  K.__workletHash = 4703969179658;
  K.__initData = padding;
  derivedValue = obj2.useDerivedValue(K);
  const obj4 = behavior(num[4]);
  const translateAnimation = obj4.useTranslateAnimation();
  translate = translateAnimation.translate;
  padding = translateAnimation.padding;
  const obj5 = behavior(num[4]);
  keyboardAnimation = obj5.useKeyboardAnimation();
  const obj6 = behavior(num[5]);
  height = obj6.useWindowDimensions().height;
  class V {
    constructor() {
      return Math.max(derivedValue.value.y + derivedValue.value.height - (height - keyboardAnimation.heightWhenOpened.value - num), 0);
    }
  }
  V.__closure = { screenHeight: height, keyboard: keyboardAnimation, keyboardVerticalOffset: num, frame: derivedValue };
  V.__workletHash = 10539040422992;
  V.__initData = keyboardAnimation;
  let items = [height, num];
  const tmp8 = flag(V, items);
  __initData = tmp8;
  class C {
    constructor(arg0) {
      const interpolate = _mod1643.interpolate;
      const items = [0];
      _mod1643;
      items[1] = closure_12();
      return interpolate(arg0, [0, 1], items);
    }
  }
  C.__closure = { interpolate: behavior(num[3]).interpolate, relativeKeyboardHeight: tmp8 };
  C.__workletHash = 11482114301276;
  C.__initData = height;
  const items1 = [tmp8];
  ({ interpolate: behavior(num[3]).interpolate, relativeKeyboardHeight: tmp8 });
  const tmp9 = flag(C, items1);
  __initData2 = tmp9;
  class D {
    constructor(value) {
      value = keyboardAnimation.isClosed.value || null === sharedValue.value || "height" !== behavior;
      if (value) {
        sharedValue.value = value;
      }
    }
  }
  D.__closure = { keyboard: keyboardAnimation, initialFrame: sharedValue, behavior };
  D.__workletHash = 12256944793057;
  D.__initData = __initData;
  const items2 = [behavior];
  closure_14 = flag(D, items2);
  const items3 = [onLayout, flag];
  const tmp10 = flag((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    const layout = nativeEvent.nativeEvent.layout;
    if (flag) {
      let obj = behavior(num[6]);
      const findNodeHandleResult = obj.findNodeHandle(ref.current);
      if (null !== findNodeHandleResult) {
        const KeyboardControllerNative = behavior(num[7]).KeyboardControllerNative;
        const viewPositionInWindowResult = KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult);
        const nextPromise = viewPositionInWindowResult.then((result) => {
          const obj = _mod1643;
          const obj3 = {};
          const runOnUIResult = obj.runOnUI(closure_14);
          const merged = Object.assign(layout);
          ({ x: obj2.x, y: obj2.y } = result);
          runOnUIResult(obj3);
        });
        return nextPromise.catch(() => {
          const obj = _mod1643;
          obj.runOnUI(closure_14)(layout);
        });
      }
    }
    const obj2 = behavior(num[3]);
    return obj2.runOnUI(closure_14)(layout);
  }, items3);
  const obj8 = behavior(num[3]);
  class F {
    constructor() {
      let items;
      if (enabled) {
        const tmp4 = closure_13(keyboardAnimation.progress.value);
        const diff = derivedValue.value.height - tmp4;
        const tmp6 = closure_13(translate.value);
        if ("height" === behavior) {
          if (!keyboardAnimation.isClosed.value) {
            let obj2;
            if (diff > 0) {
              obj2 = { height: diff, flex: 0 };
            }
            return obj2;
          }
          obj2 = {};
        } else if ("position" === behavior) {
          return { bottom: tmp4 };
        } else if ("padding" === behavior) {
          return { paddingBottom: tmp4 };
        } else if ("translate-with-padding" === behavior) {
          const obj = { paddingTop: tmp8, transform: items };
          items = [{ translateY: -tmp6 }];
          return obj;
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
  }
  F.__closure = { enabled, interpolateToRelativeKeyboardHeight: tmp9, keyboard: keyboardAnimation, translate, padding, frame: derivedValue, behavior };
  F.__workletHash = 6440002265153;
  F.__initData = __initData2;
  const items4 = [behavior, enabled, tmp9];
  animatedStyle = obj8.useAnimatedStyle(F, items4);
  const tmp13 = enabled(num[8])(ref, arg1);
  let tmp15 = style;
  if ("position" === behavior) {
    tmp15 = contentContainerStyle;
  }
  contentContainerStyle = tmp15;
  const items5 = [tmp15, animatedStyle];
  const tmp16 = onLayout(() => {
    const items = [contentContainerStyle, animatedStyle];
    return items;
  }, items5);
  if ("position" === behavior) {
    const obj9 = { ref: tmp13, style, onLayout: tmp10, children: derivedValue(enabled(num[3]).View, obj10) };
    const merged1 = Object.assign(merged);
    obj10 = { style: tmp16, children };
    tmp17Result = tmp17(ref, obj9);
  } else {
    const obj11 = { ref: tmp13, style: tmp16, onLayout: tmp10, children };
    View = tmp12(tmp2[3]).View;
    const merged2 = Object.assign(merged);
    tmp17Result = tmp17(View, obj11);
  }
  return tmp17Result;
});