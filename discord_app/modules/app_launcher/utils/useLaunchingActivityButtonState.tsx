// === Module 11779: useLaunchingActivityButtonState ===

// Module 11779 (useLaunchingActivityButtonState)
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import FramesStore from "FramesStore" /* 9000 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(onSubmissionComplete[4]).c(16);
  applicationId = applicationId.applicationId;
  const context = applicationId.context;
  onSubmissionComplete = applicationId.onSubmissionComplete;
  const obj = applicationId(onSubmissionComplete[4]);
  const getOrFetchApplication = applicationId(onSubmissionComplete[5]).useGetOrFetchApplication(applicationId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationId) {
    if (cResult[2] === context.channel) {
      if (cResult[3] === context.type) {
        let tmp7 = cResult[4];
      }
      const stateFromStores = tmp(tmp2[6]).useStateFromStores(first, tmp7);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FramesStore];
        cResult[5] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== applicationId) {
        const fn2 = function b() {
          const mainFrame = FramesStore.getMainFrame();
          state = undefined;
          if (mainFrame != null) {
            state = mainFrame.state;
          }
          let tmp3 = "loading" === state;
          if (tmp3) {
            tmp3 = mainFrame.applicationId === applicationId;
          }
          return tmp3;
        };
        cResult[6] = applicationId;
        cResult[7] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[7];
      }
      const tmpResult = tmp(tmp2[6]);
      let stateFromStores1 = tmp(tmp2[6]).useStateFromStores(tmp9, tmp11);
      if (null == getOrFetchApplication) {
        stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
        const tmp14 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
      } else {
        tmp(tmp2[7]);
      }
      const tmp16 = context(tmp2[8])(stateFromStores1);
      closure_4 = tmp16;
      if (cResult[8] === onSubmissionComplete) {
        if (cResult[9] === stateFromStores1) {
          if (cResult[10] === tmp16) {
            let tmp17 = cResult[11];
            let tmp18 = cResult[12];
          }
          const effect = stateFromStores1.useEffect(tmp17, tmp18);
          let tmp21 = tmp16;
          if (tmp16 == null) {
            tmp21 = null;
          }
          if (cResult[13] === stateFromStores1) {
            if (cResult[14] === tmp21) {
              let tmp22 = cResult[15];
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
        let tmp = !stateFromStores1;
        if (!stateFromStores1) {
          tmp = closure_4;
        }
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
      const tmpResult3 = tmp(tmp2[6]);
    }
  }
  const fn = function u() {
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    return EmbeddedActivitiesStore.getLaunchState(applicationId, id);
  };
  cResult[1] = applicationId;
  cResult[2] = context.channel;
  cResult[3] = context.type;
  cResult[4] = fn;
  tmp7 = fn;
  const obj2 = applicationId(onSubmissionComplete[5]);
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  closure_4 = undefined;
  const getOrFetchApplication = applicationId(onSubmissionComplete[5]).useGetOrFetchApplication(applicationId);
  const obj = applicationId(onSubmissionComplete[5]);
  let tmp = applicationId;
  const items = [closure_4];
  const stateFromStores = applicationId(onSubmissionComplete[6]).useStateFromStores(items, () => {
    let id;
    if ("channel" === importDefault.type) {
      id = importDefault.channel.id;
    }
    return EmbeddedActivitiesStore.getLaunchState(applicationId, id);
  });
  const obj2 = applicationId(onSubmissionComplete[6]);
  const items1 = [FramesStore];
  let stateFromStores1 = applicationId(onSubmissionComplete[6]).useStateFromStores(items1, () => {
    const mainFrame = FramesStore.getMainFrame();
    state = undefined;
    if (mainFrame != null) {
      state = mainFrame.state;
    }
    let tmp3 = "loading" === state;
    if (tmp3) {
      tmp3 = mainFrame.applicationId === applicationId;
    }
    return tmp3;
  });
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
    const tmp6 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
  } else {
    const tmpResult = tmp(tmp2[7]);
  }
  let tmp7 = require("usePrevious")(stateFromStores1);
  closure_4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = stateFromStores1.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = closure_4;
    }
    if (tmp) {
      if (onSubmissionComplete != null) {
        tmp2();
      }
    }
  }, items2);
  const obj4 = { submitting: stateFromStores1, wasSubmitting: null };
  if (tmp7 == null) {
    tmp7 = null;
  }
  obj4.wasSubmitting = tmp7;
  return obj4;
});