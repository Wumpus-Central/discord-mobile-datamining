// discord_app/modules/media_engine/useMuteAwareLocalVolume.tsx
import AudioActionCreatorsDefault from "../../actions/AudioActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(10);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp6;
        if (cResult[2] === arg0) {
          tmp6 = cResult[3];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        if (cResult[4] === arg1) {
          let tmp8;
          if (cResult[5] === arg0) {
            tmp8 = cResult[6];
          }
          if (cResult[7] === stateFromStores) {
            let tmp9;
            if (cResult[8] === tmp8) {
              tmp9 = cResult[9];
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
            const isLocalMuteResult = arg0 > 0 && MediaEngineStore.isLocalMute(closure_0, closure_1);
            if (isLocalMuteResult) {
              const obj = AudioActionCreatorsDefault;
              obj.toggleLocalMute(closure_0, closure_1);
            }
            const obj2 = AudioActionCreatorsDefault;
            obj2.setLocalVolume(closure_0, arg0, closure_1);
          }
        };
        cResult[4] = arg1;
        cResult[5] = arg0;
        cResult[6] = fn2;
        tmp8 = fn2;
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
    }
  : (arg0, arg1) => {
      let closure_0;
      let items;
      let items1;
      let obj2;
      _require = arg0;
      let closure_1 = arg1;
      let obj = {
        effectiveVolume: obj2.useStateFromStores(items, () => {
          let num = 0;
          if (null != closure_0) {
            num = 0;
            if (!MediaEngineStore.isLocalMute(closure_0, closure_1)) {
              num = MediaEngineStore.getLocalVolume(closure_0, closure_1);
            }
          }
          return num;
        }),
        handleVolumeChange: react.useCallback((arg0) => {
          if (null != closure_0) {
            const isLocalMuteResult = arg0 > 0 && MediaEngineStore.isLocalMute(closure_0, closure_1);
            if (isLocalMuteResult) {
              const obj = AudioActionCreatorsDefault;
              obj.toggleLocalMute(closure_0, closure_1);
            }
            const obj2 = AudioActionCreatorsDefault;
            obj2.setLocalVolume(closure_0, arg0, closure_1);
          }
        }, items1),
      };
      obj2 = require("get initialized");
      items = [MediaEngineStore];
      items1 = [arg0, arg1];
      return obj;
    };
const result = size.fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default tmp2;
