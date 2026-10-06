// === Module 9906: PortalKeyboardFooterIOS ===

// Module 9906 (PortalKeyboardFooterIOS)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let rect;
const jsx = Fragment.jsx;
let obj = { keyboardStickyFooter: rect };
rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_5 = createStyles.createStyles(obj);
const __initData = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],\"clamp\")}]};}" };
let closure_7 = { code: "function PortalKeyboardFooterIOSIosTsx2(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedSheetIndex) => {
  let bottom;
  let closure_1;
  let followSystemKeyboard;
  let keyboardTypeSharedValue;
  let portalHostName;
  let obj = animatedSheetIndex(bottom[5]);
  const cResult = obj.c(8);
  animatedSheetIndex = animatedSheetIndex.animatedSheetIndex;
  ({ portalHostName, followSystemKeyboard } = animatedSheetIndex);
  let str = "expression-footer";
  if (undefined !== portalHostName) {
    str = portalHostName;
  }
  importDefault = tmp4;
  const tmp5 = keyboardTypeSharedValue();
  bottom = require("useSafeAreaInsets")().bottom;
  const tmpResult = tmp(tmp2[7]);
  const reanimatedKeyboardAnimation = tmpResult.useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  const progress = reanimatedKeyboardAnimation.progress;
  const tmpResult3 = animatedSheetIndex(bottom[8]);
  keyboardTypeSharedValue = tmpResult3.useKeyboardTypeSharedValue();
  const fn = function l() {
    let interpolate;
    let items;
    let items1;
    let items2;
    let value2;
    ReanimatedRexport;
    [0][1] = bottom;
    if (closure_1) {
      let obj;
      if (animatedSheetIndex.get() >= 0) {
        const obj2 = { transform: items };
        items = [{ translateY: height.get() + tmp5 }];
        obj = obj2;
        const obj3 = { translateY: height.get() + tmp5 };
      }
      return obj;
    } else {
      const value = keyboardTypeSharedValue.get();
    }
    obj = { transform: items2 };
    const obj4 = { translateY: interpolate(value2, [-1, 0], items1, "clamp") };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value2 = animatedSheetIndex.get();
    items1 = [ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom, 0];
    items2 = [obj4];
  };
  const tmpResult4 = animatedSheetIndex(bottom[9]);
  let obj2 = { interpolate: tmp(tmp2[9]).interpolate, progress, bottom, followSystemKeyboard: tmp4, keyboardType: keyboardTypeSharedValue, KeyboardTypes: tmp(tmp2[10]).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: tmp(tmp2[11]).EXPRESSION_FOOTER_HEIGHT };
  fn.__closure = obj2;
  fn.__workletHash = 886510056219;
  fn.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn);
  const tmp6 = importDefault;
  if (cResult[0] === animatedStyle) {
    let tmp10;
    let tmp11;
    if (cResult[1] === tmp5.keyboardStickyFooter) {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== str) {
      let obj3 = { name: str };
      const tmp13 = progress(animatedSheetIndex(bottom[12]).PortalHost, obj3);
      cResult[3] = str;
      cResult[4] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp10) {
      let tmp14;
      if (cResult[6] === tmp11) {
        tmp14 = cResult[7];
      }
      return tmp14;
    }
    let obj4 = { style: tmp10, children: tmp11 };
    const tmp16 = progress(tmp6(bottom[9]).View, obj4);
    cResult[5] = tmp10;
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
  let items = [tmp5.keyboardStickyFooter, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp5.keyboardStickyFooter;
  cResult[2] = items;
  tmp10 = items;
}) : ((animatedSheetIndex) => {
  let keyboardStickyFooter;
  animatedSheetIndex = animatedSheetIndex.animatedSheetIndex;
  let str = animatedSheetIndex.portalHostName;
  if (str === undefined) {
    str = "expression-footer";
  }
  let flag = animatedSheetIndex.followSystemKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let progress;
  let animatedStyle;
  const tmp = progress();
  dependencyMap = tmp;
  const bottom = flag(1618)().bottom;
  let obj = animatedSheetIndex(1632);
  const reanimatedKeyboardAnimation = obj.useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  let obj2 = animatedSheetIndex(4753);
  const keyboardTypeSharedValue = obj2.useKeyboardTypeSharedValue();
  let obj3 = animatedSheetIndex(4618);
  const fn = function b() {
    let interpolate;
    let items;
    let items1;
    let items2;
    let value2;
    ReanimatedRexport;
    [0][1] = bottom;
    if (flag) {
      let obj;
      if (animatedSheetIndex.get() >= 0) {
        const obj2 = { transform: items };
        items = [{ translateY: height.get() + tmp5 }];
        obj = obj2;
        const obj3 = { translateY: height.get() + tmp5 };
      }
      return obj;
    } else {
      const value = keyboardTypeSharedValue.get();
    }
    obj = { transform: items2 };
    const obj4 = { translateY: interpolate(value2, [-1, 0], items1, "clamp") };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value2 = animatedSheetIndex.get();
    items1 = [ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom, 0];
    items2 = [obj4];
  };
  let obj4 = { interpolate: animatedSheetIndex(4618).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1616).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(1105).EXPRESSION_FOOTER_HEIGHT };
  fn.__closure = obj4;
  fn.__workletHash = 13852594478360;
  fn.__initData = animatedStyle;
  animatedStyle = obj3.useAnimatedStyle(fn);
  let items = [animatedStyle, tmp];
  const memo = bottom.useMemo(() => {
    const items = [keyboardStickyFooter.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  const obj5 = { style: memo, children: height(animatedSheetIndex(4758).PortalHost, { name: str }) };
  const View = flag(4618).View;
  return height(View, obj5);
});
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default tmp2;