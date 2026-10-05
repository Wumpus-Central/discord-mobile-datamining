// discord_app/modules/video_calls/useIsStreamFocused.tsx
import CallConstants from "../calls/CallConstants.tsx";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const isStreamParticipant = CallConstants.isStreamParticipant;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let selectedParticipant = null;
          if (null != closure_0) {
            selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
          }
          return selectedParticipant;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const tmp10 = null != stateFromStores && isStreamParticipant(stateFromStores);
        cResult[3] = stateFromStores;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelRTCStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        let selectedParticipant = null;
        if (null != closure_0) {
          selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
        }
        return selectedParticipant;
      });
      const tmp2 = null != stateFromStores && isStreamParticipant(stateFromStores);
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = tmp2;
