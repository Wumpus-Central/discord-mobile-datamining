// === Module 16409: RESTRICTED_AVATAR_SIZE ===

// Module 16409 (RESTRICTED_AVATAR_SIZE)
import set from "set" /* 2 */;
import Button from "Button" /* 1297 */;

const tmp2 = Button.AVATAR_SIZE_MAP[Button.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = set.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;