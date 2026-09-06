// discord_app/modules/collectibles/avatar_decorations/AvatarDecorationConstants.tsx
import AvatarConstants from "../../../../discord_common/js/shared/constants/web/AvatarConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AvatarSizes = AvatarConstants.AvatarSizes;
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationConstants.tsx");

export const DECORATION_TO_AVATAR_RATIO = 1.2;
export const AvatarDecorationBorderSizes = {
  [AvatarSizes.SIZE_56]: 4,
  [AvatarSizes.SIZE_80]: 6,
  [AvatarSizes.SIZE_120]: 8,
};
export const AVATAR_DECORATION_SIZE = 70;
