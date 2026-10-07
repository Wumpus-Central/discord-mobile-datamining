// === Module 9906: PortalKeyboardFooterIOS ===

// Module 9906 (PortalKeyboardFooterIOS)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { keyboardStickyFooter: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.keyboardStickyFooter = rect;
let closure_5 = createStyles.createStyles(obj2);
const __initData = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],\"clamp\")}]};}" };
let closure_7 = { code: "function PortalKeyboardFooterIOSIosTsx2(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((animatedSheetIndex) => {
  const cResult = animatedSheetIndex(bottom[5]).c(8);
  animatedSheetIndex = animatedSheetIndex.animatedSheetIndex;
  ({ portalHostName, followSystemKeyboard } = animatedSheetIndex);
  let str = "expression-footer";
  if (undefined !== portalHostName) {
    str = portalHostName;
  }
  importDefault = tmp4;
  const tmp5 = keyboardTypeSharedValue();
  bottom = require("useSafeAreaInsets")().bottom;
  let obj = animatedSheetIndex(bottom[5]);
  const tmp6 = importDefault;
  const reanimatedKeyboardAnimation = animatedSheetIndex(bottom[7]).useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  const progress = reanimatedKeyboardAnimation.progress;
  let tmpResult = animatedSheetIndex(bottom[7]);
  keyboardTypeSharedValue = animatedSheetIndex(bottom[8]).useKeyboardTypeSharedValue();
  const tmpResult3 = animatedSheetIndex(bottom[8]);
  const fn = function l() {
    ReanimatedRexport;
    [0][1] = bottom;
    if (closure_1) {
      if (animatedSheetIndex.get() >= 0) {
        const obj2 = { transform: null };
        const obj3 = { translateY: height.get() + tmp5 };
        const items = [obj3];
        obj2.transform = items;
        let obj = obj2;
      }
      return obj;
    } else {
      value = keyboardTypeSharedValue.get();
    }
    obj = { transform: null };
    const obj4 = { translateY: null };
    value2 = animatedSheetIndex.get();
    const items1 = [ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom, 0];
    obj4.translateY = ReanimatedRexport.interpolate(value2, [-1, 0], items1, "clamp");
    const items2 = [obj4];
    obj.transform = items2;
    const tmpResult = ReanimatedRexport;
  };
  const tmpResult4 = animatedSheetIndex(bottom[9]);
  fn.__closure = { interpolate: animatedSheetIndex(bottom[9]).interpolate, progress, bottom, followSystemKeyboard: undefined !== followSystemKeyboard && followSystemKeyboard, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(bottom[10]).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(bottom[11]).EXPRESSION_FOOTER_HEIGHT };
  fn.__workletHash = 886510056219;
  fn.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp5.keyboardStickyFooter) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] !== str) {
      let obj3 = { name: str };
      const tmp13 = progress(tmp(tmp2[12]).PortalHost, obj3);
      cResult[3] = str;
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp10) {
      if (cResult[6] === tmp11) {
        let tmp14 = cResult[7];
      }
      return tmp14;
    }
    let obj4 = { style: tmp10, children: tmp11 };
    const tmp16 = progress(tmp6(tmp2[9]).View, obj4);
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
  const reanimatedKeyboardAnimation = animatedSheetIndex(1632).useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  let obj = animatedSheetIndex(1632);
  const keyboardTypeSharedValue = animatedSheetIndex(4753).useKeyboardTypeSharedValue();
  let obj2 = animatedSheetIndex(4753);
  const fn = function b() {
    ReanimatedRexport;
    [0][1] = bottom;
    if (flag) {
      if (animatedSheetIndex.get() >= 0) {
        const obj2 = { transform: null };
        const obj3 = { translateY: height.get() + tmp5 };
        const items = [obj3];
        obj2.transform = items;
        let obj = obj2;
      }
      return obj;
    } else {
      value = keyboardTypeSharedValue.get();
    }
    obj = { transform: null };
    const obj4 = { translateY: null };
    value2 = animatedSheetIndex.get();
    const items1 = [ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom, 0];
    obj4.translateY = ReanimatedRexport.interpolate(value2, [-1, 0], items1, "clamp");
    const items2 = [obj4];
    obj.transform = items2;
    const tmpResult = ReanimatedRexport;
  };
  let obj3 = animatedSheetIndex(4618);
  fn.__closure = { interpolate: animatedSheetIndex(4618).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1616).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(1105).EXPRESSION_FOOTER_HEIGHT };
  fn.__workletHash = 13852594478360;
  fn.__initData = animatedStyle;
  animatedStyle = obj3.useAnimatedStyle(fn);
  let items = [animatedStyle, tmp];
  const memo = bottom.useMemo(() => {
    const items = [keyboardStickyFooter.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  let obj4 = { interpolate: animatedSheetIndex(4618).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1616).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(1105).EXPRESSION_FOOTER_HEIGHT };
  return height(flag(4618).View, { style: memo, children: height(animatedSheetIndex(4758).PortalHost, { name: str }) });
});