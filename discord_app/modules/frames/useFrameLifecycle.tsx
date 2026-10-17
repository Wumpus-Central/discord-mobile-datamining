// === Module 17734: useFrameLifecycle ===

// Module 17734 (useFrameLifecycle)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11021 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13628 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function useFrameLifecycleState(applicationId) {
  applicationId = applicationId.applicationId;
  const surface = applicationId.surface;
  _slicedToArray = undefined;
  const items = [applicationId, surface];
  const memo = noop.useMemo(() => React5(applicationId, surface), items);
  const items1 = [memo];
  const memo1 = noop.useMemo(() => surface, items1);
  const tmp3 = surface(memo[8])(memo);
  const obj = applicationId(memo[10]);
  const application = obj.useApplication(applicationId);
  ({ data, isLoading } = application);
  const tmp4 = surface(memo[9])(memo);
  const result = applicationId(memo[11]).isEmbeddedApplication(data);
  const obj2 = applicationId(memo[11]);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp8[1];
  const items2 = [memo];
  const obj3 = { frameId: memo, hasFrame: null != tmp3, surface: memo1, setFailed: noop.useCallback(() => closure_3(memo), items2), lifecycle: null };
  if (closure_6(tmp3)) {
    if (tmp4) {
      const obj4 = { state: obj.RenderingElsewhere };
    } else {
      const obj5 = { state: obj.Launched, frame: tmp3 };
    }
  } else {
    if (tmp8[0] === memo) {
      const obj6 = { state: obj.Error };
      let obj10 = obj6;
    } else {
      let state;
      if (tmp3 != null) {
        state = tmp3.state;
      }
      if ("loading" === state) {
        const obj7 = { state: obj.Loading, frame: tmp3 };
        obj10 = obj7;
      } else if (isLoading) {
        const obj8 = { state: obj.Loading, frame: "a" };
        obj10 = obj8;
      } else {
        if (null != data) {
          if (tmp7) {
            const obj9 = { state: null };
            let AwaitingLaunch = obj;
            if (result) {
              AwaitingLaunch = AwaitingLaunch.AwaitingLaunch;
              obj9.state = AwaitingLaunch;
            } else {
              obj9.state = AwaitingLaunch.DoesNotSupportSurface;
            }
          }
        }
        obj10 = { state: obj.NoApplication };
      }
    }
    obj3.lifecycle = obj10;
    return obj3;
  }
}
const FramesConstants = fn(6296);
({ isLaunched: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const FrameLifecycleState = { Loading: "loading", AwaitingLaunch: "awaiting-launch", Launched: "launched", RenderingElsewhere: "rendering-elsewhere", NoApplication: "no-application", DoesNotSupportSurface: "does-not-support-surface", Error: "error" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/useFrameLifecycle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFrameLifecycle(applicationId) {
  const cResult = applicationId(hasFrame[5]).c(15);
  applicationId = applicationId.applicationId;
  let surface = applicationId.surface;
  if (cResult[0] === surface) {
    if (cResult[1] === applicationId) {
      let tmp2 = cResult[2];
    }
    const tmp4 = useFrameLifecycleState(tmp2);
    const frameId = tmp4.frameId;
    hasFrame = tmp4.hasFrame;
    const surface2 = tmp4.surface;
    const setFailed = tmp4.setFailed;
    const lifecycle = tmp4.lifecycle;
    const state = lifecycle.state;
    if (cResult[3] === applicationId) {
      if (cResult[4] === frameId) {
        if (cResult[5] === hasFrame) {
          if (cResult[6] === surface2) {
            let tmp5 = cResult[7];
            let tmp6 = cResult[8];
          }
          const effect = state.useEffect(tmp5, tmp6);
          if (cResult[9] === applicationId) {
            if (cResult[10] === setFailed) {
              if (cResult[11] === state) {
                if (cResult[12] === surface2) {
                  let tmp8 = cResult[13];
                  let tmp9 = cResult[14];
                }
                const effect1 = obj3.useEffect(tmp8, tmp9);
                return lifecycle;
              }
            }
          }
          class F {
            constructor() {
              if (state === closure_1_8.AwaitingLaunch) {
                tmp = setFailed;
                closure_0 = setFailed(function*() {
                  applicationId = tmp3;
                  yield frameId(hasFrame[7]).launchFrame({ applicationId, surface });
                  if (1 === tmp7) {
                    c2 = 0;
                    setFailed();
                    surface = 3;
                  } else if (arg0 === 1) {
                    surface = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c2 = 0;
                  }
                  return value;
                });
                tmp2 = (function launch() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
              }
              return;
            }
          }
          const items = [state, applicationId, surface2, setFailed];
          cResult[9] = applicationId;
          cResult[10] = setFailed;
          cResult[11] = state;
          cResult[12] = surface2;
          cResult[13] = F;
          cResult[14] = items;
          tmp9 = items;
          tmp8 = F;
          obj3 = state;
        }
      }
    }
    const fn = function p() {
      let claimPreloadedFrameResult = hasFrame;
      if (hasFrame) {
        claimPreloadedFrameResult = preloadChannelAppFrame.claimPreloadedFrame(frameId);
      }
      if (claimPreloadedFrameResult) {
        const obj3 = { applicationId, surface: surface2 };
        FramesActionCreatorsDefault.launchFrame(obj3);
      }
    };
    const items1 = [frameId, hasFrame, applicationId, surface2];
    cResult[3] = applicationId;
    cResult[4] = frameId;
    cResult[5] = hasFrame;
    cResult[6] = surface2;
    cResult[7] = fn;
    cResult[8] = items1;
    tmp6 = items1;
    tmp5 = fn;
  }
  let obj2 = { applicationId, surface };
  cResult[0] = surface;
  cResult[1] = applicationId;
  cResult[2] = obj2;
  tmp2 = obj2;
  let obj = applicationId(hasFrame[5]);
}) : (function useFrameLifecycle(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = useFrameLifecycleState({ applicationId, surface: applicationId.surface });
  const frameId = tmp.frameId;
  const hasFrame = tmp.hasFrame;
  let surface = tmp.surface;
  const setFailed = tmp.setFailed;
  const lifecycle = tmp.lifecycle;
  const state = lifecycle.state;
  const items = [frameId, hasFrame, applicationId, surface];
  const effect = state.useEffect(() => {
    let claimPreloadedFrameResult = hasFrame;
    if (hasFrame) {
      claimPreloadedFrameResult = preloadChannelAppFrame.claimPreloadedFrame(frameId);
    }
    if (claimPreloadedFrameResult) {
      const obj3 = { applicationId, surface };
      FramesActionCreatorsDefault.launchFrame(obj3);
    }
  }, items);
  const items1 = [state, applicationId, surface, setFailed];
  const effect1 = state.useEffect(() => {
    closure_0 = async function _launch2() {
      applicationId = tmp3;
      await closure_2_1(closure_2_2[7]).launchFrame({ applicationId, surface });
      if (1 === tmp7) {
        c2 = 0;
        setFailed();
        surface = 3;
      } else if (arg0 === 1) {
        surface = 3;
        throw value;
      } else if (arg0 !== 2) {
        c2 = 0;
      }
      return value;
    };
    if (state === AwaitingLaunch.AwaitingLaunch) {
      (function launch() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items1);
  return lifecycle;
});
export { FrameLifecycleState };