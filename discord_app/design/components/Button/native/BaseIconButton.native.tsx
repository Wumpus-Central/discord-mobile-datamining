// === Module 8098: BaseIconButton ===

// Module 8098 (BaseIconButton)
import ReanimatedRexport2 from "ReanimatedRexport" /* 4296 */;
import IconDefault from "Icon" /* 4977 */;
import ButtonConstants from "ButtonConstants" /* 4980 */;
import ButtonHooks from "ButtonHooks" /* 4981 */;
import Button_BaseButton from "Button/BaseButton" /* 4983 */;
import ButtonPill from "ButtonPill" /* 4985 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    let obj = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
  } else if ("md" === arg1) {
    obj = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj1 = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
      obj = obj1;
    }
  }
  const obj2 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: null };
  const merged = Object.assign(obj);
  obj2.pill = {};
  return obj2;
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
  let obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  let obj1 = ButtonHooks;
  const iconTintStyles = obj1.useIconTintStyles(str);
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp4(4980).SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp4(4980).MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((tmp4(4980).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  obj = {};
  const merged = Object.assign(variant);
  obj.ref = ref;
  const items = [tmp3.button, style];
  obj.style = items;
  obj.pressed = sharedValue;
  obj.scaleAmountInPx = num;
  obj.hitSlop = bound;
  obj = { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null };
  const items1 = [tmp3.pill, pillStyle];
  obj.style = items1;
  let str3 = "xs";
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  obj.loaderSize = str3;
  obj.pressed = sharedValue;
  let tmp10Result = icon;
  if (!noop.isValidElement(icon)) {
    obj1 = { source: icon, style: null };
    const items2 = [iconTintStyles, iconSizeStyles];
    obj1.style = items2;
    tmp10Result = tmp10(Icon, obj1);
  }
  obj.children = tmp10Result;
  obj.children = jsx(ButtonPill.ButtonPill, { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null });
  return jsx(Button_BaseButton.BaseButton, { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null });
});