// discord_app/modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx
import c from "../../../../_runtime/00576_c.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAvatarDecorationPreviewSizes() {
      const cResult = c.c(3);
      const size = useWindowDimensionsDefault();
      const result = (2 * Math.min(size.width, size.height)) / 3;
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
    }
  : function useAvatarDecorationPreviewSizes() {
      const size = useWindowDimensionsDefault();
      const result = (2 * Math.min(size.width, size.height)) / 3;
      return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
    };
