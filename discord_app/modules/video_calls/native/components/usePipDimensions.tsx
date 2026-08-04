// discord_app/modules/video_calls/native/components/usePipDimensions.tsx
import noop from "noop";

const require = arg1;
let c4 = 0.5625;
const result = require("useWindowDimensions").fileFinishedImporting("modules/video_calls/native/components/usePipDimensions.tsx");

export default function usePipDimensions(channelId) {
  let forcedOrientation = channelId.forcedOrientation;
  if (forcedOrientation === undefined) {
    forcedOrientation = null;
  }
  let isViewingActivity;
  let width;
  let height;
  isViewingActivity = forcedOrientation(width[1]).useIsViewingActivity({ channelId: channelId.channelId });
  const size = isViewingActivity(width[2])();
  width = size.width;
  height = size.height;
  const items = [height, width, forcedOrientation, isViewingActivity];
  return height.useMemo(() => {
    let tmp3 = width > height;
    let tmp7 = forcedOrientation === forcedOrientation(width[3]).OrientationType.LANDSCAPE;
    if (!tmp7) {
      let tmp8 = tmp3;
      if (tmp3) {
        tmp8 = forcedOrientation !== forcedOrientation(width[3]).OrientationType.PORTRAIT;
      }
      tmp7 = tmp8;
    }
    height = 96;
    width = 96;
    if (!isViewingActivity) {
      if (!tmp3) {
        if (!tmp7) {
          const _Math = Math;
          const bound = Math.min(0.25 * tmp2, 300);
          width = bound * outer1_4;
          height = bound;
        }
      }
      if (!tmp3) {
        if (tmp7) {
          const _Math2 = Math;
          const bound1 = Math.min(0.5 * tmp, 400);
          height = bound1 * outer1_4;
          width = bound1;
        }
      }
      if (tmp3) {
        if (tmp7) {
          const _Math4 = Math;
          const bound2 = Math.min(0.25 * tmp, 400);
          height = bound2 * outer1_4;
          width = bound2;
        }
      }
      if (tmp3) {
        tmp3 = !tmp7;
      }
      height = 1;
      width = 1;
      if (tmp3) {
        const _Math3 = Math;
        const bound3 = Math.min(0.5 * tmp2, 300);
        width = bound3 * outer1_4;
        height = bound3;
      }
    }
    return { height, width };
  }, items);
};