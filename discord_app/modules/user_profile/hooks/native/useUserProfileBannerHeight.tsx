// discord_app/modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx
import react from "../../../../../_runtime/00576_react.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import Constants from "../../native/Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const BANNER_ASPECT_RATIO = Constants.BANNER_ASPECT_RATIO;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      const width = useWindowDimensionsDefault().width;
      let bound = width;
      if (null != arg0) {
        const _Math = Math;
        bound = Math.min(width, arg0);
      }
      if (cResult[0] !== bound) {
        const _Math2 = Math;
        const rounded = Math.round(bound / BANNER_ASPECT_RATIO);
        cResult[0] = bound;
        cResult[1] = rounded;
        tmp4 = rounded;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      const width = useWindowDimensionsDefault().width;
      let bound = width;
      if (null != arg0) {
        const _Math = Math;
        bound = Math.min(width, arg0);
      }
      return Math.round(bound / BANNER_ASPECT_RATIO);
    };
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default tmp2;
