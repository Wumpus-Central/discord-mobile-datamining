// === Module 17778: useAppChannelClosed ===

// Module 17778 (useAppChannelClosed)
import c from "c" /* 576 */;
import useFrameBySurfaceDefault from "useFrameBySurface" /* 11737 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const FramesConstants = fn(6724);
({ isLaunched: hasOwnProperty, makeFrameId: metroRequire } = FramesConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelClosed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelClosed(arg0) {
  const cResult = c.c(9);
  ({ applicationId, surface, shouldStartClosed } = arg0);
  if (cResult[0] === applicationId) {
    if (cResult[1] === surface) {
      let tmp3 = cResult[2];
    }
    const tmp6 = useFrameBySurfaceDefault(applicationId, surface);
    [tmp11, tmp12] = noop.useState(null);
    const require = tmp12;
    let frameId;
    if (tmp11 != null) {
      frameId = tmp11.frameId;
    }
    if (frameId !== tmp3) {
      if (cResult[3] === tmp6) {
        if (cResult[4] === shouldStartClosed) {
          let tmp22 = cResult[5];
        }
        const obj2 = { frameId: tmp3, hasLaunched: false, isClosed: tmp22 };
        tmp12(obj2);
      }
      const tmp23 = null == tmp6 && shouldStartClosed();
      cResult[3] = tmp6;
      cResult[4] = shouldStartClosed;
      cResult[5] = tmp23;
      tmp22 = tmp23;
    } else {
      if (hasOwnProperty(tmp6)) {
        if (!tmp11.hasLaunched) {
          const obj3 = {};
          let merged = Object.assign(tmp11);
          obj3.hasLaunched = true;
          tmp12(obj3);
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              return closure_0(() => { ... });
            }
          }
          cResult[6] = I;
        } else {
          class I {
            constructor() {
              return closure_0(() => { ... });
            }
          }
        }
        if (tmp11 != null) {
          class I {
            constructor() {
              return closure_0(() => { ... });
            }
          }
        }
        if (cResult[7] !== (undefined === tmp3 && tmp11.isClosed)) {
          class I {
            constructor() {
              return closure_0(() => { ... });
            }
          }
          tmp30[0] = tmp28;
          tmp30[1] = I;
          cResult[7] = tmp28;
          cResult[8] = tmp30;
        } else {
          class I {
            constructor() {
              return closure_0(() => { ... });
            }
          }
        }
        return tmp30;
      }
      if (tmp19) {
        class I {
          constructor() {
            return closure_0(() => { ... });
          }
        }
        tmp20[0] = tmp3;
        tmp12(tmp20);
      }
      tmp19 = null == tmp6 && tmp11.hasLaunched;
    }
    const tmp10 = _slicedToArray(noop.useState(null), 2);
  }
  const tmp4 = timestampProducer(applicationId, surface);
  cResult[0] = applicationId;
  cResult[1] = surface;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function useAppChannelClosed(shouldStartClosed) {
  ({ applicationId, surface } = shouldStartClosed);
  let tmp = timestampProducer(applicationId, surface);
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
    if (hasOwnProperty(tmp2)) {
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
  const launch = noop.useCallback(() => _undefined((arg0) => {
    let tmp = arg0;
    if (null != arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.isClosed = false;
      tmp = obj;
    }
    return tmp;
  }), []);
  if (tmp4 != null) {
    frameId1 = tmp4.frameId;
  }
  const isClosed = frameId1 === tmp && tmp4.isClosed;
  return { isClosed, launch };
});