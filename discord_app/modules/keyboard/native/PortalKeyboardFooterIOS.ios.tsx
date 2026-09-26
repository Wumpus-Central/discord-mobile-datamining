// === Module 9738: PortalKeyboardFooterIOS ===

// Module 9738 (PortalKeyboardFooterIOS)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { keyboardStickyFooter: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.keyboardStickyFooter = rect;
let closure_5 = createStyles.createStyles(obj2);
let closure_6 = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default function PortalKeyboardFooterIOS(animatedSheetIndex) {
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
  const bottom = flag(1613)().bottom;
  const reanimatedKeyboardAnimation = animatedSheetIndex(1627).useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  let obj = animatedSheetIndex(1627);
  const keyboardTypeSharedValue = animatedSheetIndex(4703).useKeyboardTypeSharedValue();
  let obj2 = animatedSheetIndex(4703);
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[7]);
      [0][1] = bottom;
      tmp4 = bottom;
      if (c1) {
        tmp8 = animatedSheetIndex;
        num = 0;
        if (animatedSheetIndex.get() >= 0) {
          obj1 = { transform: null };
          obj6 = { translateY: null };
          tmp10 = height;
          obj6.translateY = height.get() + tmp5;
          items = [];
          items[0] = obj6;
          obj1.transform = items;
          obj = obj1;
        }
        return obj;
      } else {
        tmp6 = closure_6;
        value = closure_6.get();
      }
      obj = { transform: null };
      obj7 = { translateY: null };
      tmpResult = tmp(tmp2[7]);
      value1 = animatedSheetIndex.get();
      items1 = [, ];
      items1[0] = tmp(tmp2[9]).EXPRESSION_FOOTER_HEIGHT + tmp4;
      items1[1] = 0;
      obj7.translateY = tmpResult.interpolate(value1, [-1, 0], items1, "clamp");
      items2 = [];
      items2[0] = obj7;
      obj.transform = items2;
      return;
    }
  }
  let obj3 = animatedSheetIndex(4566);
  S.__closure = { interpolate: animatedSheetIndex(4566).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1611).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(1094).EXPRESSION_FOOTER_HEIGHT };
  S.__workletHash = 9444646970651;
  S.__initData = keyboardTypeSharedValue;
  animatedStyle = obj3.useAnimatedStyle(S);
  let items = [animatedStyle, tmp];
  const memo = bottom.useMemo(() => {
    const items = [keyboardStickyFooter.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  let obj4 = { interpolate: animatedSheetIndex(4566).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1611).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(1094).EXPRESSION_FOOTER_HEIGHT };
  return height(flag(4566).View, { style: memo, children: height(animatedSheetIndex(4708).PortalHost, { name: str }) });
};