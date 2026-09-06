// === Module 1842: ? ===

// Module 1842
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import cancelAnimation from "cancelAnimation" /* 1636 */;
import noop from "module_19" /* 19 */;

({ useCallback: c3, useMemo: closure_4, forwardRef } = noop);
const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_8 = { x: 0, y: 0, width: 0, height: 0 };
let closure_9 = { code: "function pnpm_indexTsx1(){const{initialFrame,defaultLayout}=this.__closure;return initialFrame.value||defaultLayout;}" };
let closure_10 = { code: "function pnpm_indexTsx2(){const{screenHeight,keyboard,keyboardVerticalOffset,frame}=this.__closure;const keyboardY=screenHeight-keyboard.heightWhenOpened.value-keyboardVerticalOffset;return Math.max(frame.value.y+frame.value.height-keyboardY,0);}" };
let closure_11 = { code: "function pnpm_indexTsx3(value){const{interpolate,relativeKeyboardHeight}=this.__closure;return interpolate(value,[0,1],[0,relativeKeyboardHeight()]);}" };
let __initData = { code: "function pnpm_indexTsx4(layout){const{keyboard,initialFrame,behavior}=this.__closure;if(keyboard.isClosed.value||initialFrame.value===null||behavior!==\"height\"){initialFrame.value=layout;}}" };
let __initData2 = { code: "function pnpm_indexTsx5(){const{enabled,interpolateToRelativeKeyboardHeight,keyboard,translate,padding,frame,behavior}=this.__closure;if(!enabled){return{};}const bottom=interpolateToRelativeKeyboardHeight(keyboard.progress.value);const translateY=interpolateToRelativeKeyboardHeight(translate.value);const paddingBottom=interpolateToRelativeKeyboardHeight(padding.value);const height=frame.value.height-bottom;switch(behavior){case\"height\":if(!keyboard.isClosed.value&&height>0){return{height:height,flex:0};}return{};case\"position\":return{bottom:bottom};case\"padding\":return{paddingBottom:bottom};case\"translate-with-padding\":return{paddingTop:paddingBottom,transform:[{translateY:-translateY}]};default:return{};}}" };

export default forwardRef((behavior, arg1) => {
  behavior = behavior.behavior;
  ({ children, enabled } = behavior);
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
  closure_14 = undefined;
  let animatedStyle;
  let contentContainerStyle;
  let obj = behavior(num[3]);
  const sharedValue = obj.useSharedValue(null);
  const ref = sharedValue.useRef(null);
  let obj1 = behavior(num[3]);
  class K {
    constructor() {
      tmp = closure_5.value || closure_8;
      return tmp;
    }
  }
  obj = { initialFrame: sharedValue, defaultLayout: translate };
  K.__closure = obj;
  K.__workletHash = 4703969179658;
  K.__initData = padding;
  derivedValue = obj1.useDerivedValue(K);
  let obj3 = behavior(num[4]);
  const translateAnimation = obj3.useTranslateAnimation();
  translate = translateAnimation.translate;
  padding = translateAnimation.padding;
  keyboardAnimation = behavior(num[4]).useKeyboardAnimation();
  const obj5 = behavior(num[4]);
  height = behavior(num[5]).useWindowDimensions().height;
  class V {
    constructor() {
      return Math.max(closure_7.value.y + closure_7.value.height - (height - closure_10.heightWhenOpened.value - c2), 0);
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
      obj = closure_0(closure_2[3]);
      items = [0];
      items[1] = closure_12();
      return obj.interpolate(behavior, [0, 1], items);
    }
  }
  obj = { interpolate: behavior(num[3]).interpolate, relativeKeyboardHeight: tmp8 };
  C.__closure = obj;
  C.__workletHash = 11482114301276;
  C.__initData = height;
  const items1 = [tmp8];
  const tmp9 = flag(C, items1);
  __initData2 = tmp9;
  class D {
    constructor(arg0) {
      value = closure_10.isClosed.value;
      if (!value) {
        tmp = closure_5;
        tmp2 = null;
        value = null === closure_5.value;
      }
      if (!value) {
        tmp3 = behavior;
        str = "height";
        value = "height" !== behavior;
      }
      if (value) {
        tmp4 = behavior;
        tmp5 = closure_5;
        closure_5.value = behavior;
      }
      return;
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
      const findNodeHandleResult = behavior(num[6]).findNodeHandle(ref.current);
      if (null !== findNodeHandleResult) {
        const KeyboardControllerNative = behavior(num[7]).KeyboardControllerNative;
        const viewPositionInWindowResult = KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult);
        return KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult).then((result) => {
          const obj = {};
          const merged = Object.assign(layout);
          ({ x: obj2.x, y: obj2.y } = result);
          obj.runOnUI(closure_14)(obj);
        }).catch(() => {
          cancelAnimation.runOnUI(closure_14)(layout);
        });
      }
      let obj = behavior(num[6]);
    }
    return behavior(num[3]).runOnUI(closure_14)(layout);
  }, items3);
  const obj6 = behavior(num[5]);
  class F {
    constructor() {
      if (c1) {
        tmp = closure_13;
        tmp2 = closure_10;
        tmp3 = closure_13(closure_10.progress.value);
        tmp4 = translate;
        tmp6 = padding;
        tmp5 = closure_13(translate.value);
        tmp8 = closure_7;
        diff = closure_7.value.height - tmp3;
        tmp10 = behavior;
        str = "height";
        if ("height" === behavior) {
          if (!tmp2.isClosed.value) {
            num = 0;
            if (diff > 0) {
              obj = { height: null, flex: 0 };
              obj.height = diff;
            }
            return obj;
          }
          obj = {};
        } else {
          str2 = "position";
          if ("position" === tmp10) {
            obj1 = { bottom: null };
            obj1.bottom = tmp3;
            return obj1;
          } else {
            str3 = "padding";
            if ("padding" === tmp10) {
              obj2 = { paddingBottom: null };
              obj2.paddingBottom = tmp3;
              return obj2;
            } else {
              str4 = "translate-with-padding";
              if ("translate-with-padding" === tmp10) {
                obj = { paddingTop: null, transform: null };
                obj.paddingTop = tmp7;
                obj3 = { translateY: null };
                obj3.translateY = -tmp5;
                items = [];
                items[0] = obj3;
                obj.transform = items;
                return obj;
              } else {
                return {};
              }
            }
          }
        }
      } else {
        return {};
      }
      return;
    }
  }
  F.__closure = { enabled, interpolateToRelativeKeyboardHeight: tmp9, keyboard: keyboardAnimation, translate, padding, frame: derivedValue, behavior };
  F.__workletHash = 6440002265153;
  F.__initData = __initData2;
  const items4 = [behavior, enabled, tmp9];
  animatedStyle = behavior(num[3]).useAnimatedStyle(F, items4);
  const tmp13 = enabled(num[8])(ref, arg1);
  contentContainerStyle = style;
  if ("position" === behavior) {
    contentContainerStyle = behavior.contentContainerStyle;
  }
  const items5 = [contentContainerStyle, animatedStyle];
  const tmp15 = onLayout(() => {
    const items = [contentContainerStyle, animatedStyle];
    return items;
  }, items5);
  if ("position" === behavior) {
    obj1 = { ref: tmp13, style, onLayout: tmp10 };
    const merged1 = Object.assign(merged);
    let obj2 = { style: tmp15, children };
    obj1.children = tmp16(tmp12(tmp2[3]).View, obj2);
    let tmp16Result = tmp16(ref, obj1);
  } else {
    obj3 = { ref: tmp13, style: tmp15, onLayout: tmp10 };
    const merged2 = Object.assign(merged);
    obj3.children = children;
    tmp16Result = tmp16(tmp12(tmp2[3]).View, obj3);
  }
  return tmp16Result;
});