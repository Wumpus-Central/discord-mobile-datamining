// discord_app/modules/stickers/native/StickerPickerConstants.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import StickerFormat from "../StickersTypes.tsx";
import ExpressionPickerViewType from "../../expression_picker/ExpressionPickerConstants.tsx";

const PADDING_VERTICAL = ExpressionPickerViewType.PADDING_VERTICAL;
({ PADDING_HORIZONTAL, MIN_MARGIN } = ExpressionPickerViewType);
const result = 2 * PADDING_VERTICAL;
const items = [StickerFormat.StickerFormat.GIF, StickerFormat.StickerFormat.PNG, StickerFormat.StickerFormat.APNG];
const result1 = obj132.fileFinishedImporting("modules/stickers/native/StickerPickerConstants.tsx");

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