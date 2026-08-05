// discord_app/modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx
import { BANNER_ASPECT_RATIO } from "ARBITRARY_LARGE_OFFSET";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";

const result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensions().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
};