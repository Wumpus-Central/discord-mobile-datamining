// discord_app/modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx
import set from "../../../../../_runtime/00002_set.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ARBITRARY_LARGE_OFFSET from "../../native/Constants.tsx";

const BANNER_ASPECT_RATIO = ARBITRARY_LARGE_OFFSET.BANNER_ASPECT_RATIO;
const result = set.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
}
