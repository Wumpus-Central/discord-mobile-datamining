// discord_app/modules/chat/native/placeholder/getChatPlaceholderRowHeight.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";

const PX_24 = nativeDefault.space.PX_24;
const tmp2 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL];
let closure_1 = tmp2;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowHeight.tsx");

export default function getChatPlaceholderRowHeight(arg0) {
  return PX_24 + Math.max(closure_1, PX_16 + arg0 * (PX_16 + PX_12));
}
export const CHAT_PLACEHOLDER_ROW_MARGIN_TOP = PX_24;
export const CHAT_PLACEHOLDER_ROW_AVATAR_HEIGHT = tmp2;
export const CHAT_PLACEHOLDER_ROW_LINE_HEIGHT = PX_16;
export const CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP = PX_12;
