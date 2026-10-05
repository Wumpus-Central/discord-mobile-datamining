// === Module 17356: useHideSelfVideo ===

// Module 17356 (useHideSelfVideo)
import Constants2 from "Constants" /* 1085 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Constants from "Constants" /* 4915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const VideoToggleState = Constants2.VideoToggleState;
({ MediaEngineContextTypes: metroRequire, Features: metroImportDefault } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let id;
  let tmp10;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  let DEFAULT = arg1;
  let obj = DEFAULT(576);
  const cResult = obj.c(16);
  if (undefined === arg1) {
    DEFAULT = constants.DEFAULT;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class D {
      constructor() {
        return id.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = D;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = DEFAULT(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, D);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    class D {
      constructor() {
        return id.getId();
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp12;
    tmp10 = tmp12;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = DEFAULT(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [MediaEngineStore];
    class D {
      constructor() {
        return id.getId();
      }
    }
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === stateFromStores) {
    let tmp16;
    let tmp17;
    if (cResult[6] === DEFAULT) {
      tmp16 = cResult[7];
      tmp17 = cResult[8];
    }
    const tmpResult4 = DEFAULT(504);
    const stateFromStores2 = tmpResult4.useStateFromStores(tmp14, tmp16, tmp17);
    class D {
      constructor() {
        return id.getId();
      }
    }
    const fn = function p(arg0) {
      const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
      const obj = AudioActionCreatorsDefault;
      obj.setDisableLocalVideo(stateFromStores, tmp2, DEFAULT);
    };
    cResult[9] = stateFromStores;
    cResult[10] = DEFAULT;
    cResult[11] = fn;
  }
  class F {
    constructor() {
      return MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT);
    }
  }
  const items3 = [stateFromStores, DEFAULT];
  cResult[5] = stateFromStores;
  cResult[6] = DEFAULT;
  cResult[7] = F;
  cResult[8] = items3;
  tmp17 = items3;
  tmp16 = F;
}) : ((arg0) => {
  let id;
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let obj = DEFAULT(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const items1 = [MediaEngineStore];
  const obj2 = DEFAULT(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.supports(constants.DISABLE_VIDEO));
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const obj3 = DEFAULT(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
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
      const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
      const obj = AudioActionCreatorsDefault;
      obj.setDisableLocalVideo(stateFromStores, tmp2, DEFAULT);
    }
  ];
  return items4;
});
const result = size.fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default tmp3;