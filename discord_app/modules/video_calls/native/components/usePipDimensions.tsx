// discord_app/modules/video_calls/native/components/usePipDimensions.tsx
import DeviceOrientation from "../../../device/native/DeviceOrientation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let c4 = 0.5625;
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/usePipDimensions.tsx");

export default function usePipDimensions(channelId) {
  let forcedOrientation = channelId.forcedOrientation;
  if (forcedOrientation === undefined) {
    forcedOrientation = null;
  }
  let width;
  const isViewingActivity = forcedOrientation(width[1]).useIsViewingActivity({ channelId: channelId.channelId });
  const size = isViewingActivity(width[2])();
  width = size.width;
  let height = size.height;
  const items = [height, width, forcedOrientation, isViewingActivity];
  return height.useMemo(() => {
    let tmp3 = width > height;
    let tmp7 = forcedOrientation === DeviceOrientation.OrientationType.LANDSCAPE;
    if (!tmp7) {
      let tmp8 = tmp3;
      if (tmp3) {
        tmp8 = forcedOrientation !== DeviceOrientation.OrientationType.PORTRAIT;
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
          width = bound * c4;
          height = bound;
        }
      }
      if (!tmp3) {
        if (tmp7) {
          const _Math2 = Math;
          const bound1 = Math.min(0.5 * tmp, 400);
          height = bound1 * c4;
          width = bound1;
        }
      }
      if (tmp3) {
        if (tmp7) {
          const _Math4 = Math;
          const bound2 = Math.min(0.25 * tmp, 400);
          height = bound2 * c4;
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
        width = bound3 * c4;
        height = bound3;
      }
    }
    return { height, width };
  }, items);
}
