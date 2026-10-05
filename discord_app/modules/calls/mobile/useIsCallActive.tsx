// discord_app/modules/calls/mobile/useIsCallActive.tsx
import CallConstants from "../CallConstants.tsx";
import CallStore from "../../../stores/CallStore.tsx";
import ChannelRTCStore from "../ChannelRTCStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const f95343 = (type) => type.type === constants.USER && !type.ringing;
const ParticipantTypes = CallConstants.ParticipantTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CallStore, ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        let tmp8;
        if (cResult[2] === arg1) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      const fn = function o() {
        let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
        if (isCallActiveResult) {
          const participants = ChannelRTCStore.getParticipants(closure_0);
          isCallActiveResult = participants.some(f95343);
        }
        return isCallActiveResult;
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [CallStore, ChannelRTCStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
          if (isCallActiveResult) {
            const participants = ChannelRTCStore.getParticipants(closure_0);
            isCallActiveResult = participants.some(f95343);
          }
          return isCallActiveResult;
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
function checkIsCallActive(channelId, id) {
  let isCallActiveResult = CallStore.isCallActive(channelId, id);
  if (isCallActiveResult) {
    const participants = ChannelRTCStore.getParticipants(channelId);
    isCallActiveResult = participants.some(f95343);
  }
  return isCallActiveResult;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      let tmp2 = dependencyMap;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CallStore, ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        let tmp8;
        if (cResult[2] === arg1) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      const fn = function o() {
        let tmp2 = null != closure_0;
        if (tmp2) {
          let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
          if (isCallActiveResult) {
            const participants = ChannelRTCStore.getParticipants(closure_0);
            isCallActiveResult = participants.some(f95343);
          }
          tmp2 = isCallActiveResult;
        }
        return tmp2;
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [CallStore, ChannelRTCStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          let tmp2 = null != closure_0;
          if (tmp2) {
            let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
            if (isCallActiveResult) {
              const participants = ChannelRTCStore.getParticipants(closure_0);
              isCallActiveResult = participants.some(f95343);
            }
            tmp2 = isCallActiveResult;
          }
          return tmp2;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default tmp2;
export { checkIsCallActive };
export const useIsCallActiveNullable = tmp3;
