// === Module 8016: BaseIconButton ===

// Module 8016 (BaseIconButton)
import _mod4217 from "module_4217" /* 4217 */;
import IconSizesDefault from "IconSizes" /* 4930 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4933 */;
import styleProperties from "styleProperties" /* 4934 */;
import BaseButton from "BaseButton" /* 4936 */;
import PillWrapper from "PillWrapper" /* 4938 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "module_4217" /* 4217 */;

require = arg1;
let closure_4 = createCacheKey.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    let obj = { paddingHorizontal: null, paddingVertical: null };
    obj[0] = MINIMUM_HIT_AREA.SMALL_BUTTON_PADDING;
    obj[1] = MINIMUM_HIT_AREA.SMALL_BUTTON_PADDING;
  } else if ("md" === arg1) {
    obj = { paddingHorizontal: null, paddingVertical: null };
    obj[0] = MINIMUM_HIT_AREA.MEDIUM_BUTTON_PADDING;
    obj[1] = MINIMUM_HIT_AREA.MEDIUM_BUTTON_PADDING;
  } else {
    obj = {};
    if ("lg" === arg1) {
      obj1 = { paddingHorizontal: null, paddingVertical: null };
      obj1[0] = MINIMUM_HIT_AREA.LARGE_BUTTON_PADDING;
      obj1[1] = MINIMUM_HIT_AREA.LARGE_BUTTON_PADDING;
      obj = obj1;
    }
  }
  const obj2 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: null };
  const merged = Object.assign(obj);
  obj2[1] = {};
  return obj2;
});
let closure_5 = importDefaultResult.createAnimatedComponent(IconSizesDefault);
const forwardRefResult = importAllResult.forwardRef((variant, ref) => {
  variant = variant.variant;
  let str = "primary";
  ({ style, pillStyle } = variant);
  if (undefined !== variant) {
    str = variant;
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (undefined === DEFAULT_BUTTON_SIZE) {
    DEFAULT_BUTTON_SIZE = MINIMUM_HIT_AREA.DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = variant);
  let num = 4;
  ({ maxFontSizeMultiplier, loading } = variant);
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp3 = callback(str, DEFAULT_BUTTON_SIZE);
  let obj = _mod4217;
  const sharedValue = obj.useSharedValue(0);
  obj1 = styleProperties;
  const iconTintStyles = obj1.useIconTintStyles(str);
  const iconSizeStyles = styleProperties.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = MINIMUM_HIT_AREA.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp4(4933).SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp4(4933).MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((tmp4(4933).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  obj = {};
  const merged = Object.assign(variant);
  obj.ref = ref;
  const items = [tmp3.button, style];
  obj.style = items;
  obj.pressed = sharedValue;
  obj.scaleAmountInPx = num;
  obj.hitSlop = bound;
  obj = { style: items1, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null };
  items1 = [tmp3.pill, pillStyle];
  let str3 = "xs";
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  obj[4] = str3;
  obj[5] = sharedValue;
  let tmp10Result = icon;
  if (!importAllResult.isValidElement(icon)) {
    obj1 = { source: null, style: null };
    obj1[0] = icon;
    const items2 = [iconTintStyles, iconSizeStyles];
    obj1[1] = items2;
    tmp10Result = tmp10(closure_5, obj1);
  }
  obj[6] = tmp10Result;
  obj.children = jsx(PillWrapper.ButtonPill, { style: items1, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null });
  return jsx(BaseButton.BaseButton, { style: items1, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null });
});
const result = require("set").fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = forwardRefResult;