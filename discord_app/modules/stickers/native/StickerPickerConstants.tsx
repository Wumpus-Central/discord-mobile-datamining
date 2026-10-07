// discord_app/modules/stickers/native/StickerPickerConstants.tsx
import StickersTypes from "../StickersTypes.tsx";
import ExpressionPickerConstants from "../../expression_picker/ExpressionPickerConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ PADDING_HORIZONTAL, MIN_MARGIN } = ExpressionPickerConstants);
const result = 2 * PADDING_VERTICAL;
const items = [StickersTypes.StickerFormat.GIF, StickersTypes.StickerFormat.PNG, StickersTypes.StickerFormat.APNG];
const result1 = size.fileFinishedImporting("modules/stickers/native/StickerPickerConstants.tsx");

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
