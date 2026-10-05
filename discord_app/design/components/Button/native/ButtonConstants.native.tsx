// === Module 5600: ButtonConstants ===

// Module 5600 (ButtonConstants)
import nativeDefault from "native" /* 587 */;
import Icon_mod from "Icon" /* 5596 */;
import size from "module_2" /* 2 */;

let Icon;
const SMALL = Icon.IconSizes.SMALL;
const SMALL_20 = Icon.IconSizes.SMALL_20;
const MEDIUM = Icon.IconSizes.MEDIUM;
const MEDIUM2 = Icon.IconSizes.MEDIUM;
Icon = Icon_mod;
const diff = 32 - Icon.getIconSize(SMALL);
Icon = Icon_mod;
const diff1 = 40 - Icon.getIconSize(SMALL_20);
Icon = Icon_mod;
const diff2 = 48 - Icon.getIconSize(MEDIUM);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonConstants.native.tsx");

export const MINIMUM_HIT_AREA = 44;
export const SMALL_BUTTON_HEIGHT = 32;
export const MEDIUM_BUTTON_HEIGHT = 40;
export const LARGE_BUTTON_HEIGHT = 48;
export const FAB_BUTTON_SIZE = 56;
export const BUTTON_BORDER_WIDTH = 1;
export const DEFAULT_BUTTON_SIZE = "md";
export const SMALL_BUTTON_ICON_SIZE = SMALL;
export const MEDIUM_BUTTON_ICON_SIZE = SMALL_20;
export const LARGE_BUTTON_ICON_SIZE = MEDIUM;
export const FAB_BUTTON_ICON_SIZE = MEDIUM2;
export const SMALL_BUTTON_HORIZONTAL_PADDING = 12;
export const MEDIUM_BUTTON_HORIZONTAL_PADDING = 20;
export const LARGE_BUTTON_HORIZONTAL_PADDING = 24;
export const SMALL_BUTTON_PADDING = (diff - 2) / 2;
export const MEDIUM_BUTTON_PADDING = (diff1 - 2) / 2;
export const LARGE_BUTTON_PADDING = (diff2 - 2) / 2;
export const BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = 3;
export function getButtonDefaultTextVariant(size) {
  let str = "text-sm/semibold";
  if ("lg" === size) {
    str = "text-md/semibold";
  }
  return str;
}
export const getButtonPadding = function getButtonPadding(FAB_BUTTON_SIZE, FAB_BUTTON_ICON_SIZE) {
  const obj = Icon;
  return (FAB_BUTTON_SIZE - obj.getIconSize(FAB_BUTTON_ICON_SIZE) - 2) / 2;
};
export const getButtonBorderRadius = function getButtonBorderRadius(arg0) {
  let BORDER_RADIUS;
  if ("lg" === arg0) {
    BORDER_RADIUS = nativeDefault.modules.button.BORDER_RADIUS_LG;
  } else {
    BORDER_RADIUS = nativeDefault.modules.button.BORDER_RADIUS;
  }
  return BORDER_RADIUS;
};