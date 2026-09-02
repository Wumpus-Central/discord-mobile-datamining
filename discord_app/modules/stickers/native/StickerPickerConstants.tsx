// === Module 10372: PADDING_HORIZONTAL ===

// Module 10372 (PADDING_HORIZONTAL)
import set from "set" /* 2 */;
import StickerFormat from "StickerFormat" /* 5220 */;
import ExpressionPickerViewType from "ExpressionPickerViewType" /* 1337 */;

const PADDING_VERTICAL = ExpressionPickerViewType.PADDING_VERTICAL;
({ PADDING_HORIZONTAL, MIN_MARGIN } = ExpressionPickerViewType);
const result = 2 * PADDING_VERTICAL;
const items = [StickerFormat.StickerFormat.GIF, StickerFormat.StickerFormat.PNG, StickerFormat.StickerFormat.APNG];
const result1 = set.fileFinishedImporting("modules/stickers/native/StickerPickerConstants.tsx");

export { PADDING_HORIZONTAL };
export { PADDING_VERTICAL };
export { MIN_MARGIN };
export const STICKER_SIZE = 64;
export const LABEL_HEIGHT = 16;
export const BUTTON_HEIGHT = 32;
export const ROW_HEIGHT = 64 + result;
export const STICKER_NUDGE_RESULTS_CAP = 4;
export const STICKER_PICKER_PADDING = 100;
export const STICKER_SCROLL_LOAD_DELAY_MS = 250;
export const STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS = 750;
export const STICKER_FORMATS = items;