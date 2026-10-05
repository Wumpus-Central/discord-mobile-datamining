// discord_app/modules/frames/useFrameLifecycle.tsx
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import FramesConstants from "FramesConstants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;

let metroImportDefault;
let metroRequire;
function useFrameLifecycleState(applicationId) {
  let closure_3;
  let data;
  let first;
  let isLoading;
  let items2;
  let obj10;
  applicationId = applicationId.applicationId;
  const surface = applicationId.surface;
  _slicedToArray = undefined;
  const items = [applicationId, surface];
  const memo = react.useMemo(() => metroImportDefault(applicationId, surface), items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => surface, items1);
  const tmp3 = surface(memo[7])(memo);
  const tmp4 = surface(memo[8])(memo);
  const obj = applicationId(memo[9]);
  const application = obj.useApplication(applicationId);
  ({ data, isLoading } = application);
  const obj2 = applicationId(memo[10]);
  const result = obj2.isEmbeddedApplication(data);
  const tmp7 = null != surface(memo[11])(applicationId);
  [first, _slicedToArray] = react.useState(null);
  const obj3 = { surface: memo1, setFailed: react.useCallback(() => closure_3(memo), items2), lifecycle: obj10 };
  items2 = [memo];
  if (closure_6(tmp3)) {
    let obj5;
    if (tmp4) {
      obj5 = { state: obj.RenderingElsewhere };
      const obj4 = { state: obj.RenderingElsewhere };
    } else {
      obj5 = { state: obj.Launched, frame: tmp3 };
    }
    obj10 = obj5;
  } else if (first === memo) {
    obj10 = { state: obj.Error };
    const obj6 = { state: obj.Error };
  } else {
    let state;
    if (tmp3 != null) {
      state = tmp3.state;
    }
    if ("loading" === state) {
      obj10 = { state: obj.Loading, frame: tmp3 };
      const obj7 = { state: obj.Loading, frame: tmp3 };
    } else if (isLoading) {
      obj10 = { state: obj.Loading, frame: "r" };
      const obj8 = { state: obj.Loading, frame: "r" };
    } else {
      if (null != data) {
        if (tmp7) {
          let tmp13;
          const obj9 = { state: null };
          if (result) {
            obj9.state = obj.AwaitingLaunch;
            tmp13 = obj9;
          } else {
            obj9.state = obj.DoesNotSupportSurface;
            tmp13 = obj9;
          }
          obj10 = tmp13;
        }
      }
      obj10 = { state: obj.NoApplication };
    }
  }
  return obj3;
}
let _slicedToArray = _slicedToArray_mod;
({ isLaunched: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
const FrameLifecycleState = {
  Loading: "loading",
  AwaitingLaunch: "awaiting-launch",
  Launched: "launched",
  RenderingElsewhere: "rendering-elsewhere",
  NoApplication: "no-application",
  DoesNotSupportSurface: "does-not-support-surface",
  Error: "error",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let AwaitingLaunch;
      let setFailed;
      let obj = applicationId(setFailed[5]);
      const cResult = obj.c(9);
      applicationId = applicationId.applicationId;
      let surface = applicationId.surface;
      if (cResult[0] === surface) {
        let tmp2;
        if (cResult[1] === applicationId) {
          tmp2 = cResult[2];
        }
        const tmp4 = useFrameLifecycleState(tmp2);
        const surface2 = tmp4.surface;
        setFailed = tmp4.setFailed;
        const lifecycle = tmp4.lifecycle;
        const state = lifecycle.state;
        if (cResult[3] === applicationId) {
          if (cResult[4] === setFailed) {
            if (cResult[5] === state) {
              let tmp5;
              let tmp6;
              if (cResult[6] === surface2) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
              }
              const effect = react.useEffect(tmp5, tmp6);
              return lifecycle;
            }
          }
        }
        const fn = function p() {
          function launch() {
            return closure_0(...arguments);
          }
          if (state === AwaitingLaunch.AwaitingLaunch) {
            let closure_0 = _asyncToGenerator(async () => {
              let obj2;
              let surface;
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                let v0;
                try {
                  c3 = 2;
                  if (0 === surface) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      applicationId = tmp;
                      v0 = 1;
                      const obj5 = { applicationId, surface };
                      surface = 2;
                      c3 = 1;
                      const obj6 = { value: obj2.launchFrame(obj5), done: false };
                      obj2 = surface2(setFailed[6]);
                      return obj6;
                    }
                  } else {
                    if (1 === tmp4) {
                      v0 = 0;
                      v0();
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      v0 = 0;
                      c3 = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      v0 = 0;
                    }
                    c3 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp12) {
                  if (0 === v0) {
                    c3 = 3;
                    throw tmp12;
                  } else {
                    surface = 1;
                  }
                }
              }
            });
            launch();
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
      let obj2 = { applicationId, surface };
      cResult[0] = surface;
      cResult[1] = applicationId;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : (applicationId) => {
      let AwaitingLaunch;
      applicationId = applicationId.applicationId;
      let obj = { applicationId, surface: applicationId.surface };
      let tmp = useFrameLifecycleState(obj);
      let surface = tmp.surface;
      const setFailed = tmp.setFailed;
      const lifecycle = tmp.lifecycle;
      const state = lifecycle.state;
      const items = [state, applicationId, surface, setFailed];
      const effect = react.useEffect(() => {
        function launch() {
          return obj(...arguments);
        }
        let obj = function _launch2() {
          obj = _asyncToGenerator(async () => {
            let obj2;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let v0;
              try {
                c3 = 2;
                if (0 === surface) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    applicationId = tmp;
                    v0 = 1;
                    const obj5 = { applicationId, surface };
                    surface = 2;
                    c3 = 1;
                    const obj6 = { value: obj2.launchFrame(obj5), done: false };
                    obj2 = closure_2_1(setFailed[6]);
                    return obj6;
                  }
                } else {
                  if (1 === tmp4) {
                    v0 = 0;
                    v0();
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    v0 = 0;
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                if (0 === v0) {
                  c3 = 3;
                  throw tmp12;
                } else {
                  surface = 1;
                }
              }
            }
          });
          return obj(...arguments);
        };
        if (state === AwaitingLaunch.AwaitingLaunch) {
          const tmp = launch();
        }
      }, items);
      return lifecycle;
    };
let result = size.fileFinishedImporting("modules/frames/useFrameLifecycle.tsx");

export default tmp3;
export { FrameLifecycleState };
