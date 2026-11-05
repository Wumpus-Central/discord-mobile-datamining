// === Module 9347: ImageButton ===

// Module 9347 (ImageButton)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5763 */;
import spring_spring from "spring/spring" /* 5773 */;
import springPresets from "springPresets" /* 5774 */;
import ButtonConstants from "ButtonConstants" /* 5776 */;
import ButtonHooks from "ButtonHooks" /* 5777 */;
import Button_BaseButton from "Button/BaseButton" /* 5779 */;
import FastImageDefault from "FastImage" /* 5854 */;
import BaseIconButton from "BaseIconButton" /* 8174 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5143);
let closure_7 = createStyles.createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const buttonBorderRadius = ButtonConstants.getButtonBorderRadius(arg0);
  const obj = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: null };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  const obj2 = { labelPressable: obj, pill: null, imageWrapper: null, image: null, imageDim: null };
  obj.flexGrow = num;
  const tmpResult = ButtonConstants;
  obj2.pill = { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH, outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" };
  obj2.imageWrapper = { width: sum, height: sum, position: "relative" };
  obj2.image = { width: sum, height: sum };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  obj2.imageDim = rect;
  return obj2;
});
let closure_8 = { code: "(function ImageButtonNativeTsx1(){let[withSpring,pressed,ON_PRESS_SPRING]=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export function ImageButton(size) {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  const onPressOut = size.onPressOut;
  ({ grow, image } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0, ref: 0 }));
  const tmp4 = closure_7(str, ButtonHooks.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  const sharedValue = _mod1652.useSharedValue(0);
  items = [sharedValue, onPressIn];
  const callback = noop.useCallback((arg0) => {
    const result = _undefined2.set(1);
    if (c0 != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  const callback1 = noop.useCallback((arg0) => {
    const result = _undefined2.set(0);
    if (c1 != null) {
      tmp2(arg0);
    }
  }, items1);
  const items2 = [closure_8, spring_spring.withSpring, sharedValue, springPresets.ON_PRESS_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items2;
  class ImageButtonNativeTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (1 === closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always") };
      return obj;
    }
  }
  const items3 = [tmp9, tmp10, tmp11];
  ImageButtonNativeTsx1.__closure = items3;
  ImageButtonNativeTsx1.__workletHash = 4981315531162;
  ImageButtonNativeTsx1.__initData = tmp8;
  const obj4 = { style: tmp4.imageWrapper, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(ImageButtonNativeTsx1);
  const items4 = [hasOwnProperty(FastImageDefault, { source: image, style: tmp4.image }), ];
  const obj6 = { style: null };
  const items5 = [tmp4.imageDim, animatedStyle];
  obj6.style = items5;
  items4[1] = hasOwnProperty(_modDef1652.View, obj6);
  obj4.children = items4;
  const tmp15 = timestampProducer(View, obj4);
  if (null != label) {
    const obj7 = { style: tmp4.labelPressable };
    const merged1 = Object.assign(merged);
    obj7.variant = "none";
    obj7.accessibilityLabel = accessibilityLabel;
    const obj8 = { ref };
    const merged2 = Object.assign(merged);
    obj8.icon = tmp15;
    obj8.accessibilityRole = "none";
    obj8.accessibilityLabel = "";
    obj8.size = "lg";
    obj8.pillStyle = tmp4.pill;
    obj8.variant = "secondary";
    obj8.onPressIn = callback;
    obj8.onPressOut = callback1;
    obj8.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items6 = [hasOwnProperty(BaseIconButton.BaseIconButton, obj8), ];
    const obj9 = { variant: "body-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items6[1] = hasOwnProperty(Text_Text.Text, obj9);
    obj7.children = items6;
    let tmp14Result = timestampProducer(Button_BaseButton.BaseButton, obj7);
  } else {
    const obj10 = { ref };
    const merged3 = Object.assign(merged);
    obj10.size = str;
    obj10.icon = tmp15;
    obj10.accessibilityLabel = accessibilityLabel;
    obj10.pillStyle = tmp4.pill;
    obj10.variant = "secondary";
    obj10.onPressIn = callback;
    obj10.onPressOut = callback1;
    tmp14Result = hasOwnProperty(BaseIconButton.BaseIconButton, obj10);
  }
  return tmp14Result;
}