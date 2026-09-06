// discord_app/modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = (2 * Math.min(size.width, size.height)) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
