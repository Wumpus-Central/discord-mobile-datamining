// === Module 11081: useAvatarDecorationPreviewSizes ===

// Module 11081 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8810 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};