// === Module 1436: DECORATION_TO_AVATAR_RATIO ===

// Module 1436 (DECORATION_TO_AVATAR_RATIO)
import set from "set" /* 2 */;
import frozen from "frozen" /* 1437 */;

const AvatarSizes = frozen.AvatarSizes;
const result = set.fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationConstants.tsx");

export const DECORATION_TO_AVATAR_RATIO = 1.2;
export const AvatarDecorationBorderSizes = { [AvatarSizes.SIZE_56]: 4, [AvatarSizes.SIZE_80]: 6, [AvatarSizes.SIZE_120]: 8 };
export const AVATAR_DECORATION_SIZE = 70;