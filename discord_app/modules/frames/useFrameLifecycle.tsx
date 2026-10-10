// === Module 17296: useFrameLifecycle ===

// Module 17296 (useFrameLifecycle)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
function useFrameLifecycleState(applicationId) {
  applicationId = applicationId.applicationId;
  const surface = applicationId.surface;
  _slicedToArray = undefined;
  const items = [applicationId, surface];
  const memo = noop.useMemo(() => React5(applicationId, surface), items);
  const items1 = [memo];
  const memo1 = noop.useMemo(() => surface, items1);
  const tmp3 = surface(memo[7])(memo);
  const obj = applicationId(memo[9]);
  const application = obj.useApplication(applicationId);
  ({ data, isLoading } = application);
  const tmp4 = surface(memo[8])(memo);
  const result = applicationId(memo[10]).isEmbeddedApplication(data);
  const obj2 = applicationId(memo[10]);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp8[1];
  const obj3 = { surface: memo1, setFailed: null, lifecycle: null };
  const items2 = [memo];
  obj3.setFailed = noop.useCallback(() => closure_3(memo), items2);
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
        const obj8 = { state: obj.Loading, frame: "Array" };
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
const FramesConstants = fn(10802);
({ isLaunched: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const FrameLifecycleState = { Loading: "loading", AwaitingLaunch: "awaiting-launch", Launched: "launched", RenderingElsewhere: "rendering-elsewhere", NoApplication: "no-application", DoesNotSupportSurface: "does-not-support-surface", Error: "error" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/useFrameLifecycle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFrameLifecycle(applicationId) {
  const cResult = applicationId(setFailed[5]).c(9);
  applicationId = applicationId.applicationId;
  const surface = applicationId.surface;
  if (cResult[0] === surface) {
    if (cResult[1] === applicationId) {
      let tmp2 = cResult[2];
    }
    const tmp4 = useFrameLifecycleState(tmp2);
    const surface2 = tmp4.surface;
    setFailed = tmp4.setFailed;
    const lifecycle = tmp4.lifecycle;
    const state = lifecycle.state;
    if (cResult[3] === applicationId) {
      if (cResult[4] === setFailed) {
        if (cResult[5] === state) {
          if (cResult[6] === surface2) {
            let tmp5 = cResult[7];
            let tmp6 = cResult[8];
          }
          const effect = noop.useEffect(tmp5, tmp6);
          return lifecycle;
        }
      }
    }
    const fn = function p() {
      if (state === AwaitingLaunch.AwaitingLaunch) {
        closure_0 = asyncGeneratorStep(async () => {
          applicationId = tmp3;
          let v0 = 1;
          await surface2(setFailed[6]).launchFrame({ applicationId, surface });
          if (1 === tmp7) {
            v0 = 0;
            v0();
            c3 = 3;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            v0 = 0;
          }
          v0 = 0;
          return value;
        });
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
    };
    const items = [state, applicationId, surface2, setFailed];
    cResult[3] = applicationId;
    cResult[4] = setFailed;
    cResult[5] = state;
    cResult[6] = surface2;
    cResult[7] = fn;
    cResult[8] = items;
    tmp6 = items;
    tmp5 = fn;
  }
  const obj2 = { applicationId, surface };
  cResult[0] = surface;
  cResult[1] = applicationId;
  cResult[2] = obj2;
  tmp2 = obj2;
  const obj = applicationId(setFailed[5]);
}) : (function useFrameLifecycle(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = useFrameLifecycleState({ applicationId, surface: applicationId.surface });
  const surface = tmp.surface;
  const setFailed = tmp.setFailed;
  const lifecycle = tmp.lifecycle;
  const state = lifecycle.state;
  const items = [state, applicationId, surface, setFailed];
  const effect = noop.useEffect(() => {
    closure_0 = async function _launch2() {
      applicationId = tmp3;
      let v0 = 1;
      await closure_2_1(closure_2_2[6]).launchFrame({ applicationId, surface });
      if (1 === tmp7) {
        v0 = 0;
        v0();
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        v0 = 0;
      }
      v0 = 0;
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
  }, items);
  return lifecycle;
});
export { FrameLifecycleState };