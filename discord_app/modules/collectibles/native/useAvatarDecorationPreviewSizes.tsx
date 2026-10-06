// === Module 10830: useAvatarDecorationPreviewSizes ===

// Module 10830 (useAvatarDecorationPreviewSizes)
import react from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8499 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(3);
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const result1 = result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio;
  if (cResult[0] === result) {
    let tmp4;
    if (cResult[1] === result1) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { avatarDecorationSize: result, avatarSize: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (() => {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = tmp2;