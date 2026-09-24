// === Module 10237: ImageButton ===

// Module 10237 (ImageButton)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5272 */;
import springPresets from "springPresets" /* 5276 */;
import ButtonConstants from "ButtonConstants" /* 5278 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
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
const __initData = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = noop.forwardRef((size, ref) => {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  const onPressOut = size.onPressOut;
  ({ grow, image } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0 }));
  let sharedValue;
  const tmp4 = closure_8(str, onPressIn(sharedValue[6]).useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  let obj = onPressIn(sharedValue[6]);
  sharedValue = onPressIn(sharedValue[7]).useSharedValue(0);
  const items = [sharedValue, onPressIn];
  const callback = noop.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  const callback1 = noop.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const obj2 = onPressIn(sharedValue[7]);
  class B {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[8]);
      num = 0;
      if (1 === closure_2.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, tmp(tmp2[9]).ON_PRESS_SPRING, "animate-always") };
      return obj1;
    }
  }
  const obj3 = onPressIn(sharedValue[7]);
  B.__closure = { withSpring: onPressIn(sharedValue[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[9]).ON_PRESS_SPRING };
  B.__workletHash = 17257158773379;
  B.__initData = __initData;
  const obj5 = { style: tmp4.imageWrapper, children: null };
  const animatedStyle = obj3.useAnimatedStyle(B);
  const items2 = [closure_6(closure_5, { source: image, style: tmp4.image }), ];
  const obj7 = { style: null };
  const items3 = [tmp4.imageDim, animatedStyle];
  obj7.style = items3;
  items2[1] = closure_6(onPressOut(sharedValue[7]).View, obj7);
  obj5.children = items2;
  const tmp11 = closure_7(closure_4, obj5);
  if (null != label) {
    const obj8 = { style: tmp4.labelPressable };
    const merged1 = Object.assign(merged);
    obj8.variant = "none";
    obj8.accessibilityLabel = accessibilityLabel;
    const obj9 = { ref };
    const merged2 = Object.assign(merged);
    obj9.icon = tmp11;
    obj9.accessibilityRole = "none";
    obj9.accessibilityLabel = "";
    obj9.size = "lg";
    obj9.pillStyle = tmp4.pill;
    obj9.variant = "secondary";
    obj9.onPressIn = callback;
    obj9.onPressOut = callback1;
    obj9.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items4 = [closure_6(onPressIn(tmp3[11]).BaseIconButton, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = closure_6(onPressIn(tmp3[12]).Text, obj10);
    obj8.children = items4;
    let tmp10Result = closure_7(onPressIn(tmp3[10]).BaseButton, obj8);
  } else {
    const obj11 = { ref };
    const merged3 = Object.assign(merged);
    obj11.size = str;
    obj11.icon = tmp11;
    obj11.accessibilityLabel = accessibilityLabel;
    obj11.pillStyle = tmp4.pill;
    obj11.variant = "secondary";
    obj11.onPressIn = callback;
    obj11.onPressOut = callback1;
    tmp10Result = closure_6(onPressIn(tmp3[11]).BaseIconButton, obj11);
  }
  return tmp10Result;
});