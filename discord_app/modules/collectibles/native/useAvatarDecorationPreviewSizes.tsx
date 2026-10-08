// === Module 11179: useAvatarDecorationPreviewSizes ===

// Module 11179 (useAvatarDecorationPreviewSizes)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8983 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvatarDecorationPreviewSizes() {
  const cResult = c.c(3);
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const result1 = result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio;
  if (cResult[0] === result) {
    if (cResult[1] === result1) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { avatarDecorationSize: result, avatarSize: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
});