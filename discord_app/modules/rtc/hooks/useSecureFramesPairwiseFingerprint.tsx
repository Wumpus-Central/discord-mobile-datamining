// discord_app/modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import { SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION as closure_9 } from "../SecureFramesConstants.tsx";
import { Features } from "../../../../discord_common/js/packages/media-engine/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export const useSecureFramesPairwiseFingerprint = function useSecureFramesPairwiseFingerprint(userId) {
  userId = userId.userId;
  let _require = userId;
  let first;
  let first1;
  let React;
  let stateFromStores1;
  const items = [stateFromStores1];
  const stateFromStores = _require(first[8]).useStateFromStores(items, () => stateFromStores1.getId());
  stateFromStores(first[9])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp3 = first1(React.useState(null), 2);
  first = tmp3[0];
  let callback = tmp3[1];
  const tmp5 = first1(React.useState(false), 2);
  first1 = tmp5[0];
  React = tmp5[1];
  let obj = _require(first[8]);
  const items1 = [callback];
  stateFromStores1 = _require(first[8]).useStateFromStores(items1, () => callback.getSecureFramesRosterMapEntry(closure_0));
  const obj2 = _require(first[8]);
  const items2 = [callback];
  const stateFromStores2 = _require(first[8]).useStateFromStores(items2, () => callback.getSecureFramesRosterMapEntry(stateFromStores));
  callback = React.useCallback((arg0) => {
    callback(stateFromStores(first[10]).fromByteArray(arg0));
    callback2(false);
  }, []);
  _require = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp5;
              closure_4 = tmp2;
              callback = undefined;
              if (stateFromStores2.supports(constants.MLS_PAIRWISE_FINGERPRINTS)) {
                const rTCConnection = callback.getRTCConnection();
                if (rTCConnection != null) {
                  const mLSPairwiseFingerprint = rTCConnection.getMLSPairwiseFingerprint(callback1, closure_2, (arg0) => {
                    const uint8Array = new Uint8Array(arg0);
                    callback(uint8Array);
                  });
                }
                c7 = 3;
              } else {
                obj1 = callback(first[11]);
                const _Uint8Array = Uint8Array;
                let uint8Array = new Uint8Array(closure_1);
                const _Uint8Array2 = Uint8Array;
                const uint8Array1 = new Uint8Array(closure_3);
                c6 = 1;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.generatePairwiseFingerprint(callback1, uint8Array, tmp39, uint8Array1, closure_2);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback = arg1;
            closure_1_8(callback);
          }
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp33) {
          c7 = tmp;
          throw tmp33;
        }
      }
    })();
  });
  const items3 = [callback];
  const callback1 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  closure_10 = React.useRef(null);
  const items4 = [stateFromStores, stateFromStores2, callback1, userId, stateFromStores1];
  const effect = React.useEffect(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      tmp = null == ref.current;
    }
    if (tmp) {
      callback2(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => callback(closure_1, closure_7, current, closure_6), 0);
    }
    const current = ref.current;
    return () => {
      if (null != current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
    };
  }, items4);
  const items5 = [first, first1, stateFromStores1];
  return React.useMemo(() => ({ fingerprint: first, userKey: stateFromStores1, loading: first1 }), items5);
};