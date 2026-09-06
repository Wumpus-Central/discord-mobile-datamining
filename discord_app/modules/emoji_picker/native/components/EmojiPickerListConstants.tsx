// discord_app/modules/emoji_picker/native/components/EmojiPickerListConstants.tsx
import ExpressionPickerConstants from "../../../expression_picker/ExpressionPickerConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = 2 * ExpressionPickerConstants.PADDING_VERTICAL;
const result1 = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListConstants.tsx");

export const IMAGE_SIZE = 33;
export const LABEL_TOP_PADDING = 8;
export const LABEL_HEIGHT = 16;
export const LABEL_BOTTOM_PADDING = 4;
export const ROW_HEIGHT = 33 + result;
export const EmojiPickerRenderingDataType = {
  EMOJI: 0,
  [0]: "EMOJI",
  NSFW: 1,
  [1]: "NSFW",
  NATIVE_SECTION: 2,
  [2]: "NATIVE_SECTION",
};
export const NSFW_ROW_HEIGHT = 40;
export const EmojiPickerSource = { NOTIFICATION: "notification" };
