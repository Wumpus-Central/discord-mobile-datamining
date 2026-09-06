// === Module 9890: ImageButton ===

// Module 9890 (ImageButton)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import ButtonConstants from "ButtonConstants" /* 4980 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(4980).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(4980).MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const buttonBorderRadius = ButtonConstants.getButtonBorderRadius(arg0);
  let obj = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: null };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  obj = { labelPressable: obj, pill: null, imageWrapper: null, image: null, imageDim: null, flexGrow: num };
  const tmpResult = ButtonConstants;
  obj.pill = { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH, outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" };
  obj.imageWrapper = { width: sum, height: sum, position: "relative" };
  obj.image = { width: sum, height: sum };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: tmp5(576).colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  obj.imageDim = rect;
  return obj;
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
  let obj = onPressIn(sharedValue[6]);
  const tmp4 = closure_8(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  let obj1 = onPressIn(sharedValue[7]);
  sharedValue = obj1.useSharedValue(0);
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
  let obj2 = onPressIn(sharedValue[7]);
  class B {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[8]);
      num = 0;
      if (1 === closure_2.get()) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp(tmp2[9]).ON_PRESS_SPRING, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: onPressIn(sharedValue[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[9]).ON_PRESS_SPRING };
  B.__closure = obj;
  B.__workletHash = 17257158773379;
  B.__initData = __initData;
  obj = { style: tmp4.imageWrapper, children: null };
  obj1 = { source: image, style: tmp4.image };
  const animatedStyle = obj2.useAnimatedStyle(B);
  const items2 = [closure_6(closure_5, obj1), ];
  obj2 = { style: null };
  const items3 = [tmp4.imageDim, animatedStyle];
  obj2.style = items3;
  items2[1] = closure_6(onPressOut(sharedValue[7]).View, obj2);
  obj.children = items2;
  const tmp11 = closure_7(closure_4, obj);
  if (null != label) {
    const obj3 = { style: tmp4.labelPressable };
    const merged1 = Object.assign(merged);
    obj3.variant = "none";
    obj3.accessibilityLabel = accessibilityLabel;
    const obj4 = { ref };
    const merged2 = Object.assign(merged);
    obj4.icon = tmp11;
    obj4.accessibilityRole = "none";
    obj4.accessibilityLabel = "";
    obj4.size = "lg";
    obj4.pillStyle = tmp4.pill;
    obj4.variant = "secondary";
    obj4.onPressIn = callback;
    obj4.onPressOut = callback1;
    obj4.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items4 = [tmp10(tmp2(tmp3[11]).BaseIconButton, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = tmp10(tmp2(tmp3[12]).Text, obj5);
    obj3.children = items4;
    let tmp10Result = closure_7(tmp2(tmp3[10]).BaseButton, obj3);
  } else {
    const obj6 = { ref };
    const merged3 = Object.assign(merged);
    obj6.size = str;
    obj6.icon = tmp11;
    obj6.accessibilityLabel = accessibilityLabel;
    obj6.pillStyle = tmp4.pill;
    obj6.variant = "secondary";
    obj6.onPressIn = callback;
    obj6.onPressOut = callback1;
    tmp10Result = tmp10(tmp2(tmp3[11]).BaseIconButton, obj6);
  }
  return tmp10Result;
});