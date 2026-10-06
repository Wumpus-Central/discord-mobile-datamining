// === Module 11779: useLaunchingActivityButtonState ===

// Module 11779 (useLaunchingActivityButtonState)
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import FramesStore from "FramesStore" /* 9000 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let applicationId;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let first;
  let onSubmissionComplete;
  let tmp = applicationId;
  const tmp2 = onSubmissionComplete;
  const obj = applicationId(onSubmissionComplete[4]);
  const cResult = obj.c(16);
  applicationId = applicationId.applicationId;
  const context = applicationId.context;
  onSubmissionComplete = applicationId.onSubmissionComplete;
  const launchingComponentId = applicationId.launchingComponentId;
  const obj2 = applicationId(onSubmissionComplete[5]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(applicationId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationId) {
    if (cResult[2] === context.channel) {
      let tmp7;
      let tmp9;
      let tmp11;
      if (cResult[3] === context.type) {
        tmp7 = cResult[4];
      }
      const tmpResult = tmp(tmp2[6]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FramesStore];
        cResult[5] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== applicationId) {
        const fn2 = function b() {
          const mainFrame = FramesStore.getMainFrame();
          let state;
          if (mainFrame != null) {
            state = mainFrame.state;
          }
          return "loading" === state && mainFrame.applicationId === applicationId;
        };
        cResult[6] = applicationId;
        cResult[7] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[7];
      }
      const tmpResult3 = tmp(tmp2[6]);
      let stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11);
      if (null == getOrFetchApplication) {
        stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === launchingComponentId;
      } else {
        tmp(tmp2[7]);
      }
      const tmp16 = context(tmp2[8])(stateFromStores1);
      closure_4 = tmp16;
      if (cResult[8] === onSubmissionComplete) {
        if (cResult[9] === stateFromStores1) {
          let tmp17;
          let tmp18;
          if (cResult[10] === tmp16) {
            tmp17 = cResult[11];
            tmp18 = cResult[12];
          }
          const effect = stateFromStores1.useEffect(tmp17, tmp18);
          let tmp21 = tmp16;
          if (tmp16 == null) {
            tmp21 = null;
          }
          if (cResult[13] === stateFromStores1) {
            let tmp22;
            if (cResult[14] === tmp21) {
              tmp22 = cResult[15];
            }
            return tmp22;
          }
          const obj3 = { submitting: stateFromStores1, wasSubmitting: tmp21 };
          cResult[13] = stateFromStores1;
          cResult[14] = tmp21;
          cResult[15] = obj3;
          tmp22 = obj3;
        }
      }
      const fn3 = function _() {
        const tmp = !stateFromStores1 && closure_4;
        if (tmp) {
          if (onSubmissionComplete != null) {
            tmp2();
          }
        }
      };
      const items2 = [stateFromStores1, tmp16, onSubmissionComplete];
      cResult[8] = onSubmissionComplete;
      cResult[9] = stateFromStores1;
      cResult[10] = tmp16;
      cResult[11] = fn3;
      cResult[12] = items2;
      tmp18 = items2;
      tmp17 = fn3;
    }
  }
  const fn = function u() {
    let id;
    const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    return getLaunchState(applicationId, id);
  };
  cResult[1] = applicationId;
  cResult[2] = context.channel;
  cResult[3] = context.type;
  cResult[4] = fn;
  tmp7 = fn;
}) : ((applicationId) => {
  let onSubmissionComplete;
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  let closure_4;
  const tmp2 = onSubmissionComplete;
  const launchingComponentId = applicationId.launchingComponentId;
  let tmp = applicationId;
  const obj = applicationId(onSubmissionComplete[5]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [closure_4];
  const obj2 = applicationId(onSubmissionComplete[6]);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
    if ("channel" === importDefault.type) {
      id = importDefault.channel.id;
    }
    return getLaunchState(applicationId, id);
  });
  const items1 = [FramesStore];
  const obj3 = applicationId(onSubmissionComplete[6]);
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const mainFrame = FramesStore.getMainFrame();
    let state;
    if (mainFrame != null) {
      state = mainFrame.state;
    }
    return "loading" === state && mainFrame.applicationId === applicationId;
  });
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === launchingComponentId;
  } else {
    tmp(tmp2[7]);
  }
  let tmp7 = require("usePrevious")(stateFromStores1);
  closure_4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = stateFromStores1.useEffect(() => {
    const tmp = !stateFromStores1 && closure_4;
    if (tmp) {
      if (onSubmissionComplete != null) {
        tmp2();
      }
    }
  }, items2);
  const obj4 = { submitting: stateFromStores1, wasSubmitting: tmp7 };
  if (tmp7 == null) {
    tmp7 = null;
  }
  return obj4;
});
const result = size.fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default tmp2;