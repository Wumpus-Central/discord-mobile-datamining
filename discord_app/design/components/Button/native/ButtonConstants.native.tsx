// discord_app/design/components/Button/native/ButtonConstants.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SMALL = Icon.IconSizes.SMALL;
const SMALL_20 = Icon.IconSizes.SMALL_20;
const MEDIUM = Icon.IconSizes.MEDIUM;
const diff = 32 - Icon.getIconSize(SMALL);
const diff1 = 40 - Icon.getIconSize(SMALL_20);
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
export const FAB_BUTTON_ICON_SIZE = Icon.IconSizes.MEDIUM;
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
  return (FAB_BUTTON_SIZE - Icon.getIconSize(FAB_BUTTON_ICON_SIZE) - 2) / 2;
};
export const getButtonBorderRadius = function getButtonBorderRadius(arg0) {
  if ("lg" === arg0) {
    let BORDER_RADIUS = nativeDefault.modules.button.BORDER_RADIUS_LG;
  } else {
    BORDER_RADIUS = nativeDefault.modules.button.BORDER_RADIUS;
  }
  return BORDER_RADIUS;
};
