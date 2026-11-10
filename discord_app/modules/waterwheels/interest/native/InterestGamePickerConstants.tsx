// === Module 18794: InterestGamePickerConstants ===

// Module 18794 (InterestGamePickerConstants)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8, left: 0, right: 0 };
const tmp2 = -nativeDefault.space.PX_8;
const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(nativeDefault.space.PX_6 / 2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePickerConstants.tsx");

export const GRID_COLUMNS = 3;
export const GRID_GAP = nativeDefault.space.PX_12;
export const SCREEN_HORIZONTAL_PADDING = nativeDefault.space.PX_16;
export const TILE_ASPECT_RATIO = 0.75;
export const THUMBNAIL_WIDTH = 37;
export const THUMBNAIL_ASPECT_RATIO = 0.7708333333333334;
export const FOOTER_THUMBNAIL_GAP = tmp2;
export const THUMBNAIL_HIT_SLOP = rect;
export const FOOTER_BORDER_WIDTH = 1;
export const SELECTED_BORDER_WIDTH = 2;
export const GRID_SELECTED_BORDER_WIDTH = roundToNearestPixelResult;
export const GRID_SELECTED_GAP_WIDTH = PixelRatio.roundToNearestPixel(nativeDefault.space.PX_6 / 2);
export const MAX_SELECTIONS = 10;
export const GRID_COVER_HAIRLINE_WIDTH = 1;
export const MIN_SELECTIONS = 1;
export const TRAY_ENTER_MS = 300;
export const TRAY_EXIT_MS = 300;