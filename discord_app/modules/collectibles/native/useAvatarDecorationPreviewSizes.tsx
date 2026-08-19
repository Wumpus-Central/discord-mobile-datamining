// === Module 10393: useAvatarDecorationPreviewSizes ===

// Module 10393 (useAvatarDecorationPreviewSizes)
import obj132 from "obj132" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9218 */;

let result = obj132.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};