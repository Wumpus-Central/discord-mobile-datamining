// === Module 9071: usePipDimensions ===

// Module 9071 (usePipDimensions)
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import DeviceOrientation from "DeviceOrientation" /* 8008 */;
import useIsViewingActivity from "useIsViewingActivity" /* 9072 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c4 = 0.5625;
let c5 = 0.25;
let c6 = 0.5;
let c7 = 400;
let c8 = 300;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let forcedOrientation;
  let height;
  let tmp5;
  let width;
  const obj = react2;
  const cResult = obj.c(5);
  ({ channelId, forcedOrientation } = arg0);
  let tmp4 = null;
  if (undefined !== forcedOrientation) {
    tmp4 = forcedOrientation;
  }
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = useIsViewingActivity;
  const isViewingActivity = tmpResult.useIsViewingActivity(tmp5);
  ({ width, height } = useWindowDimensionsDefault());
  let tmp8 = width > height;
  useWindowDimensionsDefault();
  let tmp9 = tmp4 === DeviceOrientation.OrientationType.LANDSCAPE;
  if (!tmp9) {
    tmp9 = tmp8 && tmp4 !== DeviceOrientation.OrientationType.PORTRAIT;
    tmp8 && tmp4 !== DeviceOrientation.OrientationType.PORTRAIT;
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
    let tmp31;
    if (cResult[3] === num4) {
      tmp31 = cResult[4];
    }
    return tmp31;
  }
  size = { height: num3, width: num4 };
  cResult[2] = num3;
  cResult[3] = num4;
  cResult[4] = size;
  tmp31 = size;
}) : ((forcedOrientation) => {
  forcedOrientation = forcedOrientation.forcedOrientation;
  const channelId = forcedOrientation.channelId;
  if (forcedOrientation === undefined) {
    forcedOrientation = null;
  }
  let width;
  const obj = forcedOrientation(width[3]);
  const isViewingActivity = obj.useIsViewingActivity({ channelId });
  size = isViewingActivity(width[4])();
  width = size.width;
  let height = size.height;
  const items = [height, width, forcedOrientation, isViewingActivity];
  return height.useMemo(() => {
    let tmp3 = width > height;
    let tmp7 = forcedOrientation === DeviceOrientation.OrientationType.LANDSCAPE;
    if (!tmp7) {
      tmp7 = tmp3 && forcedOrientation !== DeviceOrientation.OrientationType.PORTRAIT;
      tmp3 && forcedOrientation !== DeviceOrientation.OrientationType.PORTRAIT;
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
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/usePipDimensions.tsx");

export default tmp2;