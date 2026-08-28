// === Module 10766: useAvatarDecorationPreviewSizes ===

// Module 10766 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8465 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};