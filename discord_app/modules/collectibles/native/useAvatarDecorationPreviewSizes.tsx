// discord_app/modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2.tsx";

let result = obj132.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};