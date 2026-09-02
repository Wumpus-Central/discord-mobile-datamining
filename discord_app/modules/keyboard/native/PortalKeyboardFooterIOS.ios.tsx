// === Module 9138: PortalKeyboardFooterIOS ===

// Module 9138 (PortalKeyboardFooterIOS)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
createCacheKey = { keyboardStickyFooter: null };
createCacheKey = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let closure_6 = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

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
  dependencyMap = undefined;
  let bottom;
  let height;
  let progress;
  let keyboardTypeSharedValue;
  let animatedStyle;
  const tmp = progress();
  dependencyMap = tmp;
  bottom = flag(1627)().bottom;
  let obj = animatedSheetIndex(1641);
  const reanimatedKeyboardAnimation = obj.useReanimatedKeyboardAnimation();
  height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  keyboardTypeSharedValue = animatedSheetIndex(4342).useKeyboardTypeSharedValue();
  const obj2 = animatedSheetIndex(4342);
  class S {
    constructor() {
      tmp = animatedSheetIndex;
      tmp2 = closure_2;
      tmp3 = animatedSheetIndex(closure_2[7]);
      [0][1] = bottom;
      tmp4 = bottom;
      if (c1) {
        tmp8 = animatedSheetIndex;
        num = 0;
        if (animatedSheetIndex.get() >= 0) {
          obj = { transform: null };
          obj1 = { translateY: null };
          tmp10 = height;
          obj1[0] = height.get() + tmp5;
          items = [];
          items[0] = obj1;
          obj[0] = items;
        }
        return obj;
      } else {
        tmp6 = closure_6;
        value = closure_6.get();
      }
      obj = { transform: null };
      obj2 = { translateY: null };
      tmpResult = tmp(tmp2[7]);
      value1 = animatedSheetIndex.get();
      items1 = [, ];
      items1[0] = tmp(tmp2[9]).EXPRESSION_FOOTER_HEIGHT + tmp4;
      items1[1] = 0;
      obj2[0] = tmpResult.interpolate(value1, [-1, 0], items1, "clamp");
      items2 = [];
      items2[0] = obj2;
      obj[0] = items2;
      return;
    }
  }
  obj = { interpolate: animatedSheetIndex(4217).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1625).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(688).EXPRESSION_FOOTER_HEIGHT };
  S.__closure = obj;
  S.__workletHash = 9444646970651;
  S.__initData = keyboardTypeSharedValue;
  animatedStyle = animatedSheetIndex(4217).useAnimatedStyle(S);
  let items = [animatedStyle, tmp];
  const memo = bottom.useMemo(() => {
    const items = [keyboardStickyFooter.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  obj = { style: memo, children: height(animatedSheetIndex(4347).PortalHost, { name: str }) };
  return height(flag(4217).View, obj);
};