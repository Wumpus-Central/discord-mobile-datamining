// === Module 8206: BaseIconButton ===

// Module 8206 (BaseIconButton)
import ReanimatedRexport2 from "ReanimatedRexport" /* 4376 */;
import IconDefault from "Icon" /* 5061 */;
import ButtonConstants from "ButtonConstants" /* 5064 */;
import ButtonHooks from "ButtonHooks" /* 5065 */;
import Button_BaseButton from "Button/BaseButton" /* 5067 */;
import ButtonPill from "ButtonPill" /* 5069 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_4 = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    const obj2 = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
    let obj = obj2;
  } else if ("md" === arg1) {
    const obj3 = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
    obj = obj3;
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj4 = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
      obj = obj4;
    }
  }
  const obj5 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: null };
  const merged = Object.assign(obj);
  obj5.pill = {};
  return obj5;
});
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = noop.forwardRef((variant, ref) => {
  variant = variant.variant;
  let str = "primary";
  ({ style, pillStyle } = variant);
  if (undefined !== variant) {
    str = variant;
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (undefined === DEFAULT_BUTTON_SIZE) {
    DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = variant);
  let num = 4;
  ({ maxFontSizeMultiplier, loading } = variant);
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp3 = closure_4(str, DEFAULT_BUTTON_SIZE);
  const sharedValue = ReanimatedRexport2.useSharedValue(0);
  const iconTintStyles = ButtonHooks.useIconTintStyles(str, sharedValue);
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  const obj4 = {};
  const merged = Object.assign(variant);
  obj4.ref = ref;
  const items = [tmp3.button, style];
  obj4.style = items;
  obj4.pressed = sharedValue;
  obj4.scaleAmountInPx = num;
  obj4.hitSlop = bound;
  const obj5 = { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null };
  const items1 = [tmp3.pill, pillStyle];
  obj5.style = items1;
  let str3 = "xs";
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  obj5.loaderSize = str3;
  obj5.pressed = sharedValue;
  let tmp10Result = icon;
  if (!noop.isValidElement(icon)) {
    const obj6 = { source: icon, style: null };
    const items2 = [iconTintStyles, iconSizeStyles];
    obj6.style = items2;
    tmp10Result = <Icon source={icon} style={null} />;
  }
  obj5.children = tmp10Result;
  obj4.children = jsx(ButtonPill.ButtonPill, { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null });
  return jsx(Button_BaseButton.BaseButton, {});
});