// === Module 18659: useFrameLifecycle ===

// Module 18659 (useFrameLifecycle)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
const FramesConstants = fn(6847);
({ isLaunched: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const FrameLifecycleState = { Loading: "loading", AwaitingLaunch: "awaiting-launch", Launched: "launched", RenderingElsewhere: "rendering-elsewhere", NoApplication: "no-application", DoesNotSupportSurface: "does-not-support-surface", Error: "error" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/useFrameLifecycle.tsx");

export default function useFrameLifecycle(applicationId) {
  applicationId = applicationId.applicationId;
  const surface = applicationId.surface;
  let callback;
  let state;
  closure_129_0 = applicationId;
  closure_129_1 = surface;
  const items = [applicationId, surface];
  const memo = noop.useMemo(() => React5(applicationId, memo1), items);
  closure_129_2 = memo;
  const items1 = [memo];
  const memo1 = noop.useMemo(() => memo1, items1);
  const tmp3 = memo1(callback[5])(memo);
  const tmp4 = memo1(callback[6])(memo);
  const application = applicationId(callback[7]).useApplication(applicationId);
  ({ data, isLoading } = application);
  const obj2 = applicationId(callback[7]);
  const result = applicationId(callback[8]).isEmbeddedApplication(data);
  const obj3 = applicationId(callback[8]);
  const tmp8 = state(noop.useState(null), 2);
  closure_129_3 = tmp8[1];
  const items2 = [memo];
  callback = noop.useCallback(() => state(callback), items2);
  if (closure_6(tmp3)) {
    if (tmp4) {
      const obj4 = { state: noop.RenderingElsewhere };
    } else {
      const obj5 = { state: noop.Launched, frame: tmp3 };
    }
  } else {
    if (tmp8[0] === memo) {
      const obj6 = { state: noop.Error };
      let obj10 = obj6;
    } else {
      let state1;
      if (tmp3 != null) {
        state1 = tmp3.state;
      }
      if ("loading" === state1) {
        const obj7 = { state: noop.Loading, frame: tmp3 };
        obj10 = obj7;
      } else if (isLoading) {
        const obj8 = { state: noop.Loading, frame: "a" };
        obj10 = obj8;
      } else {
        if (null != data) {
          if (tmp7) {
            const obj9 = { state: null };
            let AwaitingLaunch = noop;
            if (result) {
              AwaitingLaunch = AwaitingLaunch.AwaitingLaunch;
              obj9.state = AwaitingLaunch;
            } else {
              obj9.state = AwaitingLaunch.DoesNotSupportSurface;
            }
          }
        }
        obj10 = { state: noop.NoApplication };
      }
    }
    state = obj10.state;
    const items3 = [state, applicationId, memo1, callback];
    const effect = noop.useEffect(() => {
      closure_0 = async function _launch() {
        applicationId = tmp3;
        let v0 = 1;
        await closure_2_1(closure_2_2[4]).launchFrame({ applicationId, surface });
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
    }, items3);
    return obj10;
  }
  tmp7 = null != memo1(callback[9])(applicationId);
};
export { FrameLifecycleState };