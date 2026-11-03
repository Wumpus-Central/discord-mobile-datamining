// discord_app/modules/custom_typing_indicator/native/FloatingApplyButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_5 = fn(1623).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = fn(21).jsx;
let closure_7 = {
  code: "(function FloatingApplyButtonTsx1(){let[visible]=this.__closure;return{pointerEvents:visible?'box-none':'none'};})",
};
let closure_8 = {
  code: "(function FloatingApplyButtonTsx2(){let[visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default function FloatingApplyButton(renderButton) {
  ({ visible, disabled, text, onPress } = renderButton);
  _require = onPress;
  renderButton = renderButton.renderButton;
  items = [c4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined4.useReducedMotion);
  const obj = require("initialize");
  const items1 = [closure_7, visible];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class FloatingApplyButtonTsx1 {
    constructor() {
      pointerEvents = "none";
      if (closure_0) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items2 = [tmp6];
  FloatingApplyButtonTsx1.__closure = items2;
  FloatingApplyButtonTsx1.__workletHash = 4329148887087;
  FloatingApplyButtonTsx1.__initData = tmp5;
  const animatedProps = require("../../../../_runtime/metro/01652__.js").useAnimatedProps(FloatingApplyButtonTsx1);
  const obj2 = require("../../../../_runtime/metro/01652__.js");
  const items3 = [closure_8, visible, nativeDefault, stateFromStores, require("spring/spring").withSpring, closure_5];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items3;
  class FloatingApplyButtonTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_0) {
        num = 1;
      }
      num2 = 60;
      if (tmp) {
        num2 = 0;
      }
      num3 = 0.9;
      if (tmp) {
        num3 = 1;
      }
      rect = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginHorizontal: closure_1.space.PX_16,
        flexDirection: "column",
        justifyContent: "flex-end",
        transform: null,
        opacity: null,
      };
      tmp2 = closure_2;
      tmp3 = num2;
      if (!closure_2) {
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp3 = closure_3(num2, closure_4);
      }
      items = [,];
      items[0] = { translateY: tmp3 };
      tmp6 = num3;
      if (!tmp2) {
        tmp7 = closure_3;
        tmp8 = closure_4;
        tmp6 = closure_3(num3, closure_4);
      }
      items[1] = { scale: tmp6 };
      rect.transform = items;
      tmp9 = num;
      if (!tmp2) {
        tmp10 = closure_3;
        tmp11 = closure_4;
        tmp9 = closure_3(num, closure_4);
      }
      rect.opacity = tmp9;
      return rect;
    }
  }
  const items4 = [tmp9, tmp10, tmp11, tmp12, tmp13];
  FloatingApplyButtonTsx2.__closure = items4;
  FloatingApplyButtonTsx2.__workletHash = 13112691757829;
  FloatingApplyButtonTsx2.__initData = tmp8;
  const items5 = [onPress];
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(FloatingApplyButtonTsx2);
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    _undefined();
  }, items5);
  const obj3 = { style: animatedStyle, children: null };
  const obj4 = { style: { marginBottom: useSafeAreaInsetsDefault().bottom }, animatedProps, children: null };
  let renderButtonResult;
  if (renderButton != null) {
    const obj5 = { text, disabled, onPress: callback };
    renderButtonResult = renderButton(obj5);
  }
  if (renderButtonResult == null) {
    const obj6 = { variant: "primary", size: "lg", disabled, onPress: callback, text, loading: renderButton.loading };
    renderButtonResult = jsx(tmp(5754).Button, {
      variant: "primary",
      size: "lg",
      disabled,
      onPress: callback,
      text,
      loading: renderButton.loading,
    });
  }
  obj4.children = renderButtonResult;
  obj3.children = jsx(_modDef1652.View, {
    style: { marginBottom: useSafeAreaInsetsDefault().bottom },
    animatedProps,
    children: null,
  });
  return jsx(_modDef1652.View, { style: animatedStyle, children: null });
}
