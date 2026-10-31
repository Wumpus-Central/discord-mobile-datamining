// discord_app/modules/app_channels/useAppChannelClosed.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const FramesConstants = fn(6847);
({ isLaunched: closure_4, makeFrameId: hasOwnProperty } = FramesConstants);
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelClosed.tsx");

export default function useAppChannelClosed(shouldStartClosed) {
  ({ applicationId, surface } = shouldStartClosed);
  first = undefined;
  let tmp = closure_5(applicationId, surface);
  const tmp2 = first(12095)(applicationId, surface);
  [first] = noop.useState(null);
  dependencyMap = tmp5;
  let frameId;
  if (first != null) {
    frameId = first.frameId;
  }
  if (frameId !== tmp) {
    const obj2 = { frameId: tmp, hasLaunched: false, isClosed: null };
    let tmp17 = null == tmp2;
    if (tmp17) {
      tmp17 = set.has(tmp) || shouldStartClosed.shouldStartClosed();
      const tmp19 = set.has(tmp) || shouldStartClosed.shouldStartClosed();
    }
    obj2.isClosed = tmp17;
    tmp5(obj2);
  } else {
    if (closure_4(tmp2)) {
      if (!first.hasLaunched) {
        const obj3 = {};
        let merged = Object.assign(first);
        obj3.hasLaunched = true;
        tmp5(obj3);
      }
    }
    if (tmp12) {
      const obj4 = {};
      const merged1 = Object.assign(first);
      obj4.isClosed = true;
      tmp5(obj4);
    }
    tmp12 = null == tmp2 && first.hasLaunched && !first.isClosed;
  }
  const items = [first];
  const effect = noop.useEffect(() => {
    let hasLaunched;
    if (first != null) {
      hasLaunched = first.hasLaunched;
    }
    if (true === hasLaunched) {
      if (first.isClosed) {
        set.add(first.frameId);
      } else {
        set.delete(first.frameId);
      }
    }
  }, items);
  let frameId1;
  if (first != null) {
    frameId1 = first.frameId;
  }
  return {
    isClosed: frameId1 === tmp && first.isClosed,
    launch() {
      closure_1((arg0) => {
        let tmp = arg0;
        if (null != arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.hasLaunched = false;
          obj.isClosed = false;
          tmp = obj;
        }
        return tmp;
      });
    },
  };
}
