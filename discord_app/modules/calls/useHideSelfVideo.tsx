// === Module 17356: useHideSelfVideo ===

// Module 17356 (useHideSelfVideo)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;

const require = fn;
const VideoToggleState = fn(1085).VideoToggleState;
const Constants = fn(4915);
({ MediaEngineContextTypes: metroRequire, Features: closure_7 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let DEFAULT = arg1;
  const cResult = DEFAULT(576).c(16);
  if (undefined === arg1) {
    DEFAULT = constants.DEFAULT;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class D {
      constructor() {
        return closure_1_3.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = D;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = DEFAULT(576);
  const stateFromStores = DEFAULT(504).useStateFromStores(tmp5, D);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    class D {
      constructor() {
        return closure_1_3.getId();
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = DEFAULT(504);
  const stateFromStores1 = DEFAULT(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [MediaEngineStore];
    class D {
      constructor() {
        return closure_1_3.getId();
      }
    }
    cResult[4] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === stateFromStores) {
    if (cResult[6] === DEFAULT) {
      let tmp16 = cResult[7];
      let tmp17 = cResult[8];
    }
    const stateFromStores2 = tmp(504).useStateFromStores(tmp14, tmp16, tmp17);
    class D {
      constructor() {
        return closure_1_3.getId();
      }
    }
    const fn = function p(arg0) {
      AudioActionCreatorsDefault.setDisableLocalVideo(stateFromStores, arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED, DEFAULT);
      const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
    };
    cResult[9] = stateFromStores;
    cResult[10] = DEFAULT;
    cResult[11] = fn;
    const tmpResult4 = tmp(504);
  }
  class F {
    constructor() {
      return closure_4.isLocalVideoDisabled(closure_1, DEFAULT);
    }
  }
  const items3 = [stateFromStores, DEFAULT];
  cResult[5] = stateFromStores;
  cResult[6] = DEFAULT;
  cResult[7] = F;
  cResult[8] = items3;
  tmp17 = items3;
  tmp16 = F;
  const tmpResult3 = DEFAULT(504);
}) : ((arg0) => {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const items = [AuthenticationStore];
  const stateFromStores = DEFAULT(504).useStateFromStores(items, () => id.getId());
  let obj = DEFAULT(504);
  const items1 = [MediaEngineStore];
  const stateFromStores1 = DEFAULT(504).useStateFromStores(items1, () => MediaEngineStore.supports(constants.DISABLE_VIDEO));
  const obj2 = DEFAULT(504);
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const stateFromStores2 = DEFAULT(504).useStateFromStores(items2, () => MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
  if (!tmp5) {
    tmp5 = arg0 === stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores1;
  }
  const items4 = [
    tmp5,
    stateFromStores2,
    (arg0) => {
      AudioActionCreatorsDefault.setDisableLocalVideo(stateFromStores, arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED, DEFAULT);
      const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
    }
  ];
  return items4;
});