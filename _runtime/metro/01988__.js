// === Module 1988: ? ===

// Module 1988
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import _modDef1990 from "module_1990" /* 1990 */;
import noop_mod from "module_19" /* 19 */;

const require = globalThis.__r;

let noop = noop_mod;
({ useCallback: c3, useMemo: closure_4, forwardRef } = noop);
let noop = noop_mod;
const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_8 = { x: 0, y: 0, width: 0, height: 0 };
let closure_9 = { code: "(function pnpm_indexTsx1(){let[initialFrame,defaultLayout]=this.__closure;return initialFrame.value||defaultLayout;})" };
let closure_10 = { code: "(function pnpm_indexTsx2(){let[screenHeight,keyboard,keyboardVerticalOffset,frame]=this.__closure;const keyboardY=screenHeight-keyboard.heightWhenOpened.value-keyboardVerticalOffset;return Math.max(frame.value.y+frame.value.height-keyboardY,0);})" };
let closure_11 = { code: "(function pnpm_indexTsx3(value){let[interpolate,relativeKeyboardHeight]=this.__closure;return interpolate(value,[0,1],[0,relativeKeyboardHeight()]);})" };
let closure_12 = { code: "(function pnpm_indexTsx4(layout){let[keyboard,initialFrame,behavior]=this.__closure;if(keyboard.isClosed.value||initialFrame.value===null||behavior!==\"height\"){initialFrame.value=layout;}})" };
let closure_13 = { code: "(function pnpm_indexTsx5(){let[enabled,interpolateToRelativeKeyboardHeight,keyboard,translate,padding,frame,behavior]=this.__closure;if(!enabled){return{};}const bottom=interpolateToRelativeKeyboardHeight(keyboard.progress.value);const translateY=interpolateToRelativeKeyboardHeight(translate.value);const paddingBottom=interpolateToRelativeKeyboardHeight(padding.value);const height=frame.value.height-bottom;switch(behavior){case\"height\":if(!keyboard.isClosed.value&&height>0){return{height:height,flex:0};}return{};case\"position\":return{bottom:bottom};case\"padding\":return{paddingBottom:bottom};case\"translate-with-padding\":return{paddingTop:paddingBottom,transform:[{translateY:-translateY}]};default:return{};}})" };

export default forwardRef((keyboardVerticalOffset, arg1) => {
  ({ behavior, children, enabled } = keyboardVerticalOffset);
  if (enabled === undefined) {
    enabled = true;
  }
  let num = keyboardVerticalOffset.keyboardVerticalOffset;
  if (num === undefined) {
    num = 0;
  }
  let flag = keyboardVerticalOffset.automaticOffset;
  if (flag === undefined) {
    flag = false;
  }
  _require = flag;
  ({ style, onLayout } = keyboardVerticalOffset);
  let merged = Object.assign(keyboardVerticalOffset, Object.assign({ behavior: 0, children: 0, contentContainerStyle: 0, enabled: 0, keyboardVerticalOffset: 0, automaticOffset: 0, style: 0, onLayout: 0 }));
  let contentContainerStyle;
  const sharedValue = require("module_1655").useSharedValue(null);
  const ref = contentContainerStyle.useRef(null);
  let obj = require("module_1655");
  items = [closure_9, sharedValue, closure_8];
  _require = undefined;
  [tmp6, tmp7, tmp8] = items;
  function pnpm_indexTsx1() {
    return _undefined.value || c1;
  }
  const items1 = [tmp7, tmp8];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 4134304805971;
  pnpm_indexTsx1.__initData = tmp6;
  const derivedValue = require("module_1655").useDerivedValue(pnpm_indexTsx1);
  let obj2 = require("module_1655");
  const translateAnimation = require("hooks").useTranslateAnimation();
  ({ translate, padding } = translateAnimation);
  const tmp2Result = require("hooks");
  const keyboardAnimation = require("hooks").useKeyboardAnimation();
  const tmp2Result4 = require("hooks");
  const height = require("module_1976").useWindowDimensions().height;
  const items2 = [closure_10, height, keyboardAnimation, num, derivedValue];
  _require = undefined;
  c3 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  function pnpm_indexTsx2() {
    return Math.max(_undefined4.value.y + _undefined4.value.height - (c0 - _undefined2.heightWhenOpened.value - c2), 0);
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17];
  pnpm_indexTsx2.__closure = items3;
  pnpm_indexTsx2.__workletHash = 8655445807337;
  pnpm_indexTsx2.__initData = tmp13;
  const items4 = [height, num];
  const tmp12Result = c3(pnpm_indexTsx2, items4);
  const items5 = [closure_11, require("module_1655").interpolate, tmp12Result];
  [tmp19, tmp20, tmp21] = items5;
  function pnpm_indexTsx3(arg0) {
    items = [0, _undefined2()];
    return _undefined(arg0, [0, 1], items);
  }
  const items6 = [tmp20, tmp21];
  pnpm_indexTsx3.__closure = items6;
  pnpm_indexTsx3.__workletHash = 8511069457637;
  pnpm_indexTsx3.__initData = tmp19;
  const items7 = [tmp12Result];
  const tmp12Result3 = c3(pnpm_indexTsx3, items7);
  const items8 = [closure_12, keyboardAnimation, sharedValue, behavior];
  _require = undefined;
  [tmp23, tmp24, tmp25, tmp26] = items8;
  function pnpm_indexTsx4(value) {
    value = _undefined.isClosed.value;
    if (!value) {
      value = null === _undefined2.value;
    }
    if (!value) {
      value = "height" !== c2;
    }
    if (value) {
      _undefined2.value = value;
    }
  }
  const items9 = [tmp24, tmp25, tmp26];
  pnpm_indexTsx4.__closure = items9;
  pnpm_indexTsx4.__workletHash = 7686210950232;
  pnpm_indexTsx4.__initData = tmp23;
  const items10 = [behavior];
  c3 = tmp12(pnpm_indexTsx4, items10);
  const items11 = [onLayout, flag];
  const tmp12Result4 = c3((nativeEvent) => {
    if (c1 != null) {
      tmp(nativeEvent);
    }
    const layout = nativeEvent.nativeEvent.layout;
    if (layout) {
      const findNodeHandleResult = _undefined(_undefined3[6]).findNodeHandle(_undefined3.current);
      if (null !== findNodeHandleResult) {
        const KeyboardControllerNative = _undefined(_undefined3[7]).KeyboardControllerNative;
        const viewPositionInWindowResult = KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult);
        return KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult).then((result) => {
          const obj3 = {};
          const merged = Object.assign(layout);
          ({ x: obj2.x, y: obj2.y } = result);
          _mod1655.runOnUI(c3)(obj3);
        }).catch(() => {
          _mod1655.runOnUI(c3)(layout);
        });
      }
      let obj = _undefined(_undefined3[6]);
    }
    return _undefined(_undefined3[3]).runOnUI(c3)(layout);
  }, items11);
  const tmp2Result5 = require("module_1976");
  const items12 = [closure_13, enabled, tmp12Result3, keyboardAnimation, translate, padding, derivedValue, behavior];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c6 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items12;
  function pnpm_indexTsx5() {
    if (c0) {
      const tmp3 = _undefined2(_undefined3.progress.value);
      const diff = contentContainerStyle.value.height - tmp3;
      if ("height" === c6) {
        if (!_undefined3.isClosed.value) {
          if (diff > 0) {
            let obj2 = { height: diff, flex: 0 };
          }
          return obj2;
        }
        obj2 = {};
      } else if ("position" === c6) {
        const obj3 = { bottom: tmp3 };
        return obj3;
      } else if ("padding" === c6) {
        const obj4 = { paddingBottom: tmp3 };
        return obj4;
      } else if ("translate-with-padding" === c6) {
        const obj = { paddingTop: tmp7, transform: null };
        const obj5 = { translateY: -tmp5 };
        items = [obj5];
        obj.transform = items;
        return obj;
      } else {
        return {};
      }
      tmp5 = _undefined2(_undefined4.value);
    } else {
      return {};
    }
  }
  const items13 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  pnpm_indexTsx5.__closure = items13;
  pnpm_indexTsx5.__workletHash = 7384178893176;
  pnpm_indexTsx5.__initData = tmp28;
  const items14 = [behavior, enabled, tmp12Result3];
  const animatedStyle = require("module_1655").useAnimatedStyle(pnpm_indexTsx5, items14);
  const tmp38 = _modDef1990(ref, arg1);
  contentContainerStyle = style;
  if ("position" === behavior) {
    contentContainerStyle = keyboardVerticalOffset.contentContainerStyle;
  }
  const items15 = [contentContainerStyle, animatedStyle];
  const tmp40 = animatedStyle(() => {
    items = [contentContainerStyle, animatedStyle];
    return items;
  }, items15);
  if ("position" === behavior) {
    let obj3 = { ref: tmp38, style, onLayout: tmp12Result4 };
    const merged1 = Object.assign(merged);
    let obj4 = { style: tmp40, children };
    obj3.children = jsx(tmp37(1655).View, { style: tmp40, children });
    let tmp41Result = <c6 ref={tmp38} style={style} onLayout={tmp12Result4} />;
  } else {
    let obj5 = { ref: tmp38, style: tmp40, onLayout: tmp12Result4 };
    const merged2 = Object.assign(merged);
    obj5.children = children;
    tmp41Result = jsx(tmp37(1655).View, { ref: tmp38, style: tmp40, onLayout: tmp12Result4 });
  }
  return tmp41Result;
});