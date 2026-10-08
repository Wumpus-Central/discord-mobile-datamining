// === Module 10681: usePipDimensions ===

// Module 10681 (usePipDimensions)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import DeviceOrientation from "DeviceOrientation" /* 8426 */;
import useIsViewingActivity from "useIsViewingActivity" /* 10682 */;
import noop from "module_19" /* 19 */;

require = fn;
let c4 = 0.5625;
let c5 = 0.25;
let c6 = 0.5;
let c7 = 400;
let c8 = 300;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/usePipDimensions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePipDimensions(arg0) {
  const cResult = c.c(5);
  ({ channelId, forcedOrientation } = arg0);
  let tmp4 = null;
  if (undefined !== forcedOrientation) {
    tmp4 = forcedOrientation;
  }
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const isViewingActivity = useIsViewingActivity.useIsViewingActivity(tmp5);
  const tmpResult = useIsViewingActivity;
  ({ width, height } = useWindowDimensionsDefault());
  let tmp8 = width > height;
  let tmp9 = tmp4 === DeviceOrientation.OrientationType.LANDSCAPE;
  if (!tmp9) {
    let tmp10 = tmp8;
    if (tmp8) {
      tmp10 = tmp4 !== DeviceOrientation.OrientationType.PORTRAIT;
    }
    tmp9 = tmp10;
  }
  let num3 = 96;
  let num4 = 96;
  if (!isViewingActivity) {
    if (!tmp8) {
      if (!tmp9) {
        const _Math = Math;
        const bound = Math.min(height * c5, c8);
        num4 = bound * c4;
        num3 = bound;
      }
    }
    if (!tmp8) {
      if (tmp9) {
        const _Math2 = Math;
        const bound1 = Math.min(width * c6, c7);
        num3 = bound1 * c4;
        num4 = bound1;
      }
    }
    if (tmp8) {
      if (tmp9) {
        const _Math4 = Math;
        const bound2 = Math.min(width * c5, c7);
        num3 = bound2 * c4;
        num4 = bound2;
      }
    }
    if (tmp8) {
      tmp8 = !tmp9;
    }
    num3 = 1;
    num4 = 1;
    if (tmp8) {
      const _Math3 = Math;
      const bound3 = Math.min(height * c6, c8);
      num4 = bound3 * c4;
      num3 = bound3;
    }
  }
  if (cResult[2] === num3) {
    if (cResult[3] === num4) {
      let tmp31 = cResult[4];
    }
    return tmp31;
  }
  const size = { height: num3, width: num4 };
  cResult[2] = num3;
  cResult[3] = num4;
  cResult[4] = size;
  tmp31 = size;
  const tmp7 = useWindowDimensionsDefault();
}) : (function usePipDimensions(channelId) {
  let forcedOrientation = channelId.forcedOrientation;
  if (forcedOrientation === undefined) {
    forcedOrientation = null;
  }
  let width;
  const isViewingActivity = forcedOrientation(width[3]).useIsViewingActivity({ channelId: channelId.channelId });
  const size = isViewingActivity(width[4])();
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
          const bound = Math.min(tmp2 * c5, c8);
          width = bound * c4;
          height = bound;
        }
      }
      if (!tmp3) {
        if (tmp7) {
          const _Math2 = Math;
          const bound1 = Math.min(tmp * c6, c7);
          height = bound1 * c4;
          width = bound1;
        }
      }
      if (tmp3) {
        if (tmp7) {
          const _Math4 = Math;
          const bound2 = Math.min(tmp * c5, c7);
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
        const bound3 = Math.min(tmp2 * c6, c8);
        width = bound3 * c4;
        height = bound3;
      }
    }
    return { height, width };
  }, items);
});