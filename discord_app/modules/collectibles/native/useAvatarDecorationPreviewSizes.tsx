// === Module 11048: useAvatarDecorationPreviewSizes ===

// Module 11048 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8532 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};