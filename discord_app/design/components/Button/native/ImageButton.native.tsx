// discord_app/design/components/Button/native/ImageButton.native.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { MINIMUM_HIT_AREA } from "ButtonConstants.native.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = MINIMUM_HIT_AREA.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(4749).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(4749).MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const buttonBorderRadius = MINIMUM_HIT_AREA.getButtonBorderRadius(arg0);
  let obj = { paddingBottom: Themes.space.PX_4, gap: Themes.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: null };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  obj = { labelPressable: obj, pill: null, imageWrapper: null, image: null, imageDim: null };
  obj[4] = num;
  const tmpResult = MINIMUM_HIT_AREA;
  obj[1] = { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: MINIMUM_HIT_AREA.BUTTON_BORDER_WIDTH, outlineColor: Themes.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" };
  obj[2] = { width: sum, height: sum, position: "relative" };
  obj[3] = { width: sum, height: sum };
  const obj1 = { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: MINIMUM_HIT_AREA.BUTTON_BORDER_WIDTH, outlineColor: Themes.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" };
  obj[4] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: Themes.colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  return obj;
});
let closure_9 = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
const forwardRefResult = importAllResult.forwardRef((size) => {
  let accessibilityLabel;
  let grow;
  let image;
  let label;
  let maxFontSizeMultiplier;
  let onPressIn;
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  const onPressOut = size.onPressOut;
  ({ grow, image } = size);
  const merged = Object.assign(size, Object.create(null));
  let sharedValue;
  let obj = onPressIn(sharedValue[6]);
  const tmp4 = callback3(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  let obj1 = onPressIn(sharedValue[7]);
  sharedValue = obj1.useSharedValue(0);
  const items = [sharedValue, onPressIn];
  const callback = importAllResult.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  const callback1 = importAllResult.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  let obj2 = onPressIn(sharedValue[7]);
  class B {
    constructor() {
      tmp = onPressIn;
      tmp2 = c2;
      obj = onPressIn(c2[8]);
      num = 0;
      if (1 === c2.get()) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp(tmp2[9]).ON_PRESS_SPRING, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: onPressIn(sharedValue[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[9]).ON_PRESS_SPRING };
  B.__closure = obj;
  B.__workletHash = 17257158773379;
  B.__initData = closure_9;
  obj = { style: tmp4.imageWrapper, children: null };
  obj1 = { source: image, style: tmp4.image };
  const animatedStyle = obj2.useAnimatedStyle(B);
  const items2 = [callback(closure_5, obj1), ];
  const items3 = [tmp4.imageDim, animatedStyle];
  items2[1] = callback(onPressOut(sharedValue[7]).View, { style: items3 });
  obj[1] = items2;
  const tmp11 = callback2(closure_4, obj);
  if (null != label) {
    obj2 = { style: null };
    obj2[0] = tmp4.labelPressable;
    const merged1 = Object.assign(merged);
    obj2.variant = "none";
    obj2.accessibilityLabel = accessibilityLabel;
    const obj3 = { ref: null };
    obj3[0] = arg1;
    const merged2 = Object.assign(merged);
    obj3.icon = tmp11;
    obj3.accessibilityRole = "none";
    obj3.accessibilityLabel = "";
    obj3.size = "lg";
    obj3.pillStyle = tmp4.pill;
    obj3.variant = "secondary";
    obj3.onPressIn = callback;
    obj3.onPressOut = callback1;
    obj3.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items4 = [tmp10(tmp2(tmp3[11]).BaseIconButton, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: null, children: null };
    obj4[2] = maxFontSizeMultiplier;
    obj4[3] = label;
    items4[1] = tmp10(tmp2(tmp3[12]).Text, obj4);
    obj2.children = items4;
    let tmp10Result = callback2(tmp2(tmp3[10]).BaseButton, obj2);
  } else {
    const obj5 = { ref: null };
    obj5[0] = arg1;
    const merged3 = Object.assign(merged);
    obj5.size = str;
    obj5.icon = tmp11;
    obj5.accessibilityLabel = accessibilityLabel;
    obj5.pillStyle = tmp4.pill;
    obj5.variant = "secondary";
    obj5.onPressIn = callback;
    obj5.onPressOut = callback1;
    tmp10Result = tmp10(tmp2(tmp3[11]).BaseIconButton, obj5);
  }
  return tmp10Result;
});
let result = require("jsxProd").fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = forwardRefResult;