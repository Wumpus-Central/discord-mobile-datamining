// discord_app/modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx
import set from "../../../../_runtime/00002_set.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2.tsx";

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = (2 * Math.min(size.width, size.height)) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
