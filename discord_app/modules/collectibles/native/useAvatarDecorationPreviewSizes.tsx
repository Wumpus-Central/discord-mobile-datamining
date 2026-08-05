import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";
import { AvatarDecorationSampleV2 } from "AvatarDecorationSampleV2.tsx";
// discord_app/modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensions();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2 /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};