// discord_app/modules/app_channels/useAppChannelClosed.tsx
import useFrameBySurfaceDefault from "../frames/utils/useFrameBySurface.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const FramesConstants = fn(6841);
({ isLaunched: closure_4, makeFrameId: hasOwnProperty } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelClosed.tsx");

export default function useAppChannelClosed(shouldStartClosed) {
  ({ applicationId, surface } = shouldStartClosed);
  let tmp = hasOwnProperty(applicationId, surface);
  const tmp2 = useFrameBySurfaceDefault(applicationId, surface);
  [tmp4, tmp5] = noop.useState(null);
  c0 = tmp5;
  let frameId;
  if (tmp4 != null) {
    frameId = tmp4.frameId;
  }
  if (frameId !== tmp) {
    const obj2 = { frameId: tmp, hasLaunched: false, isClosed: null == tmp2 && shouldStartClosed.shouldStartClosed() };
    tmp5(obj2);
    const tmp14 = null == tmp2 && shouldStartClosed.shouldStartClosed();
  } else {
    if (React4(tmp2)) {
      if (!tmp4.hasLaunched) {
        const obj3 = {};
        let merged = Object.assign(tmp4);
        obj3.hasLaunched = true;
        tmp5(obj3);
      }
    }
    if (tmp12) {
      const obj4 = { frameId: tmp, hasLaunched: false, isClosed: true };
      tmp5(obj4);
    }
    tmp12 = null == tmp2 && tmp4.hasLaunched;
  }
  let frameId1;
  const launch = noop.useCallback(
    () =>
      _undefined((arg0) => {
        let tmp = arg0;
        if (null != arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.isClosed = false;
          tmp = obj;
        }
        return tmp;
      }),
    [],
  );
  if (tmp4 != null) {
    frameId1 = tmp4.frameId;
  }
  const isClosed = frameId1 === tmp && tmp4.isClosed;
  return { isClosed, launch };
}
