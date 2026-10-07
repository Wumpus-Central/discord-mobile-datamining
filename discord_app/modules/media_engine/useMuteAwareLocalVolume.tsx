// === Module 9714: useMuteAwareLocalVolume ===

// Module 9714 (useMuteAwareLocalVolume)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 8079 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
    if (cResult[4] === arg1) {
      if (cResult[5] === arg0) {
        let tmp8 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === tmp8) {
          let tmp9 = cResult[9];
        }
        return tmp9;
      }
      let obj2 = { effectiveVolume: stateFromStores, handleVolumeChange: tmp8 };
      cResult[7] = stateFromStores;
      cResult[8] = tmp8;
      cResult[9] = obj2;
      tmp9 = obj2;
    }
    const fn2 = function s(arg0) {
      if (null != closure_0) {
        let isLocalMuteResult = arg0 > 0;
        if (isLocalMuteResult) {
          isLocalMuteResult = MediaEngineStore.isLocalMute(closure_0, closure_1);
        }
        if (isLocalMuteResult) {
          AudioActionCreatorsDefault.toggleLocalMute(closure_0, closure_1);
        }
        AudioActionCreatorsDefault.setLocalVolume(closure_0, arg0, closure_1);
      }
    };
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = fn2;
    tmp8 = fn2;
    const tmpResult = tmp(504);
  }
  const fn = function c() {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!MediaEngineStore.isLocalMute(closure_0, closure_1)) {
        num = MediaEngineStore.getLocalVolume(closure_0, closure_1);
      }
    }
    return num;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let obj = { effectiveVolume: null, handleVolumeChange: null };
  const items = [MediaEngineStore];
  obj.effectiveVolume = require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (!MediaEngineStore.isLocalMute(closure_0, closure_1)) {
        num = MediaEngineStore.getLocalVolume(closure_0, closure_1);
      }
    }
    return num;
  });
  const items1 = [arg0, arg1];
  obj.handleVolumeChange = noop.useCallback((arg0) => {
    if (null != closure_0) {
      let isLocalMuteResult = arg0 > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = MediaEngineStore.isLocalMute(closure_0, closure_1);
      }
      if (isLocalMuteResult) {
        AudioActionCreatorsDefault.toggleLocalMute(closure_0, closure_1);
      }
      AudioActionCreatorsDefault.setLocalVolume(closure_0, arg0, closure_1);
    }
  }, items1);
  return obj;
});