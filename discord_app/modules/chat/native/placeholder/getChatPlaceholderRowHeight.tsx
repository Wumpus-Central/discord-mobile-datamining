// === Module 12640: PX_24 ===

// Module 12640 (PX_24)
import ThemesDefault from "Themes" /* 576 */;

const PX_24 = ThemesDefault.space.PX_24;
const tmp2 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
let closure_1 = tmp2;
const PX_16 = ThemesDefault.space.PX_16;
const PX_12 = ThemesDefault.space.PX_12;
const result = require("set").fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowHeight.tsx");

export default function getChatPlaceholderRowHeight(arg0) {
  return PX_24 + Math.max(closure_1, PX_16 + arg0 * (PX_16 + PX_12));
};
export const CHAT_PLACEHOLDER_ROW_MARGIN_TOP = PX_24;
export const CHAT_PLACEHOLDER_ROW_AVATAR_HEIGHT = tmp2;
export const CHAT_PLACEHOLDER_ROW_LINE_HEIGHT = PX_16;
export const CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP = PX_12;