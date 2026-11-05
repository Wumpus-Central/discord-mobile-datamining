// === Module 10153: PortalKeyboardFooterIOS ===

// Module 10153 (PortalKeyboardFooterIOS)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import _mod1652 from "module_1652" /* 1652 */;
import useKeyboardType from "useKeyboardType" /* 5335 */;
import Portal from "Portal" /* 5340 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5398 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { keyboardStickyFooter: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.keyboardStickyFooter = rect;
const constants = createStyles.createStyles(obj2);
let closure_6 = { code: "(function PortalKeyboardFooterIOSIosTsx1(){let[interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT]=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default function PortalKeyboardFooterIOS(portalHostName) {
  let str = portalHostName.portalHostName;
  if (str === undefined) {
    str = "expression-footer";
  }
  let flag = portalHostName.followSystemKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = portalHostName.constrainToActionSheet;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp = _undefined3();
  const bottomSheetContainerStyle = Sheet_BottomSheet.useBottomSheetContainerStyle(useWindowDimensionsDefault({ ignoreKeyboard: true }));
  const reanimatedKeyboardAnimation = KeyboardChatScrollView.useReanimatedKeyboardAnimation();
  ({ height, progress } = reanimatedKeyboardAnimation);
  const keyboardTypeSharedValue = useKeyboardType.useKeyboardTypeSharedValue();
  items = [_undefined4, _mod1652.interpolate, progress, useSafeAreaInsetsDefault().bottom, flag, keyboardTypeSharedValue, KeyboardTypes.KeyboardTypes, portalHostName.animatedSheetIndex, height, ConstantsIOS.EXPRESSION_FOOTER_HEIGHT];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let animatedStyle;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  class PortalKeyboardFooterIOSIosTsx1 {
    constructor() {
      tmp = closure_0;
      [0][1] = closure_2;
      tmp2 = closure_2;
      if (closure_3) {
        tmp6 = closure_6;
        num = 0;
        if (closure_6.get() >= 0) {
          obj1 = { transform: null };
          obj5 = { translateY: null };
          tmp7 = closure_7;
          obj5.translateY = closure_7.get() + tmp3;
          items = [];
          items[0] = obj5;
          obj1.transform = items;
          obj = obj1;
        }
        return obj;
      } else {
        tmp4 = closure_4;
        tmp5 = closure_5;
      }
      obj = { transform: null };
      obj6 = { translateY: null };
      items1 = [, ];
      items1[0] = closure_8 + tmp2;
      items1[1] = 0;
      obj6.translateY = tmp(closure_6.get(), [-1, 0], items1, "clamp");
      items2 = [];
      items2[0] = obj6;
      obj.transform = items2;
      return;
    }
  }
  let items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  PortalKeyboardFooterIOSIosTsx1.__closure = items1;
  PortalKeyboardFooterIOSIosTsx1.__workletHash = 5822849225954;
  PortalKeyboardFooterIOSIosTsx1.__initData = tmp8;
  animatedStyle = _mod1652.useAnimatedStyle(PortalKeyboardFooterIOSIosTsx1);
  let items2 = [animatedStyle, tmp, flag2, bottomSheetContainerStyle];
  const memo = noop.useMemo(() => {
    items = [_undefined.keyboardStickyFooter, animatedStyle, ];
    let tmp = c0;
    if (c0) {
      tmp = c2;
    }
    items[2] = tmp;
    return items;
  }, items2);
  return jsx(_modDef1652.View, { style: memo, children: jsx(Portal.PortalHost, { name: str }) });
};