// === Module 14621: CONNECTION_BANNER_HEIGHT ===

// Module 14621 (CONNECTION_BANNER_HEIGHT)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import roundToNearestPixelResult from "module_14" /* 14 */;

const PixelRatio = get_ActivityIndicator.PixelRatio;
const PX_12 = ThemesDefault.space.PX_12;
const result = 2 * PX_12;
const obj = { top: ThemesDefault.space.PX_16, bottom: ThemesDefault.space.PX_16, left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16 };
const REFRESH_MEDIUM_32 = Button.AvatarSizes.REFRESH_MEDIUM_32;
const NORMAL = Button.AvatarSizes.NORMAL;
const YOUBAR_60 = Button.AvatarSizes.YOUBAR_60;
const sum = Button.AVATAR_SIZE_MAP[YOUBAR_60] + 12;
const diff = sum - (Button.AVATAR_SIZE_MAP[REFRESH_MEDIUM_32] + PX_12);
const sum1 = Button.AVATAR_SIZE_MAP[NORMAL] + 8;
const diff1 = sum1 + 8 - (Button.AVATAR_SIZE_MAP[REFRESH_MEDIUM_32] + PX_12);
const result1 = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarConstants.tsx");

export const CONNECTION_BANNER_HEIGHT = 48;
export const YOU_BAR_SPRING_CONFIG = { damping: 20, stiffness: 300, mass: 1.5, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
export const YOU_BAR_PADDING = PX_12;
export const YOU_BAR_HEIGHT = 32 + result;
export const YOU_BAR_MARGIN = ThemesDefault.space.PX_16;
export const YOU_BAR_MARGIN_IOS = ThemesDefault.space.PX_24;
export const YOU_BAR_LEFT_INSET = ThemesDefault.space.PX_16;
export const YOU_BAR_FLOATING_OFFSET_MINIMUM = ThemesDefault.space.PX_16;
export const YOU_BAR_GRADIENT_EXTRA_HEIGHT = ThemesDefault.space.PX_16;
export const YOU_BAR_BUTTON_HIT_SLOP = obj;
export const YOU_BAR_STATUS_INSET = -3;
export const YOU_BAR_LARGE_STATUS_SIZE = roundToNearestPixelResult;
export const YOU_BAR_STATUS_OFFSET = -2;
export const YOU_BAR_AVATAR_PLACEHOLDER_SIZE = REFRESH_MEDIUM_32;
export const YOU_BAR_AVATAR_SIZE = NORMAL;
export const YOU_BAR_AVATAR_LARGE_SIZE = YOUBAR_60;
export const YOU_BAR_AVATAR_LARGE_PX = Button.AVATAR_SIZE_MAP[YOUBAR_60];
export const YOU_BAR_LARGE_AVATAR_NAME_MARGIN = diff;
export const YOU_BAR_SMALL_AVATAR_NAME_MARGIN = diff1;
export const YOU_BAR_BUTTON_ICON_SIZE = 18;