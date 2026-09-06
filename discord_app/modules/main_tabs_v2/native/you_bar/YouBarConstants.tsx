// === Module 15098: YouBarConstants ===

// Module 15098 (YouBarConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const PX_12 = nativeDefault.space.PX_12;
const result = 2 * PX_12;
const rect = { top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
const REFRESH_MEDIUM_32 = native.AvatarSizes.REFRESH_MEDIUM_32;
const NORMAL = native.AvatarSizes.NORMAL;
const YOUBAR_60 = native.AvatarSizes.YOUBAR_60;
const sum = native.AVATAR_SIZE_MAP[YOUBAR_60] + 12;
const diff = sum - (native.AVATAR_SIZE_MAP[REFRESH_MEDIUM_32] + PX_12);
const sum1 = native.AVATAR_SIZE_MAP[NORMAL] + 8;
const diff1 = sum1 + 8 - (native.AVATAR_SIZE_MAP[REFRESH_MEDIUM_32] + PX_12);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarConstants.tsx");

export const CONNECTION_BANNER_HEIGHT = 48;
export const YOU_BAR_SPRING_CONFIG = { damping: 20, stiffness: 300, mass: 1.5, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
export const YOU_BAR_PADDING = PX_12;
export const YOU_BAR_HEIGHT = 32 + result;
export const YOU_BAR_MARGIN = nativeDefault.space.PX_16;
export const YOU_BAR_MARGIN_IOS = nativeDefault.space.PX_24;
export const YOU_BAR_LEFT_INSET = nativeDefault.space.PX_16;
export const YOU_BAR_FLOATING_OFFSET_MINIMUM = nativeDefault.space.PX_16;
export const YOU_BAR_GRADIENT_EXTRA_HEIGHT = nativeDefault.space.PX_16;
export const YOU_BAR_BUTTON_HIT_SLOP = rect;
export const YOU_BAR_STATUS_INSET = -3;
export const YOU_BAR_LARGE_STATUS_SIZE = PixelRatio.roundToNearestPixel(14);
export const YOU_BAR_STATUS_OFFSET = -2;
export const YOU_BAR_AVATAR_PLACEHOLDER_SIZE = REFRESH_MEDIUM_32;
export const YOU_BAR_AVATAR_SIZE = NORMAL;
export const YOU_BAR_AVATAR_LARGE_SIZE = YOUBAR_60;
export const YOU_BAR_AVATAR_LARGE_PX = native.AVATAR_SIZE_MAP[YOUBAR_60];
export const YOU_BAR_LARGE_AVATAR_NAME_MARGIN = diff;
export const YOU_BAR_SMALL_AVATAR_NAME_MARGIN = diff1;
export const YOU_BAR_BUTTON_ICON_SIZE = 18;