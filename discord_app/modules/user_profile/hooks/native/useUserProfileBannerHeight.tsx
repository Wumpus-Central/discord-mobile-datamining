// discord_app/modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import Constants from "../../native/Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const BANNER_ASPECT_RATIO = Constants.BANNER_ASPECT_RATIO;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
}
