// === Module 9370: useSecureFramesPairwiseFingerprint ===

// Module 9370 (useSecureFramesPairwiseFingerprint)
import Constants from "Constants" /* 4915 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9366 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore_mod from "RTCConnectionStore" /* 4913 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c3, c4, constants, flag, num, num2, obj, tmp8, userId;

function computeNativeDisplayPair() {
  return obj(...arguments);
}
let SecureFramesPairwiseFingerprintMode = function _computeNativeDisplayPair() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj2;
    let value;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_3;
        let secureFramesRosterMapEntry;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp3;
            let c1 = 0;
            closure_3 = undefined;
            secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
            const rTCConnection = RTCConnectionStore.getRTCConnection();
            if (null != secureFramesRosterMapEntry) {
              if (null != rTCConnection) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => {
                  closure_0 = arg0;
                  const mLSPairwiseFingerprint = rTCConnection.getMLSPairwiseFingerprint(closure_2_9, closure_0, (arg0) => {
                    const uint8Array = new Uint8Array(arg0);
                    return closure_0(uint8Array);
                  });
                });
                c3 = 1;
                c4 = 1;
                const obj5 = { value: promise, done: false };
                return obj5;
              }
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_3 = value;
          value = { fingerprint: obj2.fromByteArray(closure_3), fingerprintUserKey: secureFramesRosterMapEntry };
          obj2 = closure_130_1(closure_130_2[8]);
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let RTCConnectionStore = RTCConnectionStore_mod;
let closure_9 = SecureFramesConstants.SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
let Features = Constants.Features;
SecureFramesPairwiseFingerprintMode = { FROZEN: "frozen", LIVE: "live" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let ref;
  let ref2;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let tmp12;
  let tmp16;
  let tmp5;
  let tmp6;
  const tmp = userId;
  const tmp2 = stateFromStores;
  obj = userId(stateFromStores[10]);
  const cResult = obj.c(22);
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (undefined === FROZEN) {
    FROZEN = obj.FROZEN;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores2];
    class F {
      constructor() {
        return stateFromStores2.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = F;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, F);
  const tmp9 = FROZEN(tmp2[12])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  let obj3 = stateFromStores1;
  const tmp10 = _slicedToArray(stateFromStores1.useState(null), 2);
  [r10042, _slicedToArray] = tmp10;
  [r10048, _asyncToGenerator] = _slicedToArray(stateFromStores1.useState(false), 2);
  const tmp11 = _slicedToArray(stateFromStores1.useState(false), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RTCConnectionStore];
    class F {
      constructor() {
        return stateFromStores2.getId();
      }
    }
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== userId) {
    class N {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(userId);
      }
    }
    cResult[3] = userId;
    class F {
      constructor() {
        return stateFromStores2.getId();
      }
    }
    cResult[4] = N;
  } else {
    class N {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(userId);
      }
    }
  }
  const tmpResult3 = tmp(tmp2[11]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp12, N);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(userId);
      }
    }
    const items2 = [RTCConnectionStore];
    class F {
      constructor() {
        return stateFromStores2.getId();
      }
    }
    cResult[5] = items2;
    tmp16 = items2;
  } else {
    class N {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(userId);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class D {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores);
      }
    }
    cResult[6] = stateFromStores;
    class F {
      constructor() {
        return stateFromStores2.getId();
      }
    }
    cResult[7] = D;
  } else {
    class D {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores);
      }
    }
  }
  const tmpResult4 = tmp(tmp2[11]);
  stateFromStores2 = tmpResult4.useStateFromStores(tmp16, D);
  if (cResult[8] !== userId) {
    class D {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores);
      }
    }
    let closure_0 = _asyncToGenerator(async () => {
      let obj4;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (fn.supports(constants.MLS_PAIRWISE_FINGERPRINTS)) {
              c1 = 2;
              c0 = 1;
              const obj5 = { value: computeNativeDisplayPair(c0), done: false };
              return obj5;
            } else {
              c1 = 1;
              c0 = 1;
              const obj6 = { value: obj4.computeBoundPairwiseFingerprint(c0), done: false };
              obj4 = v3(stateFromStores[13]);
              return obj6;
            }
          } else {
            if (1 === tmp3) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } catch (tmp9) {
          c0 = 3;
          throw tmp9;
        }
      }
    });
    let fn = function() {
      return closure_0(...arguments);
    };
    class F {
      constructor() {
        return stateFromStores2.getId();
      }
    }
    cResult[8] = userId;
    cResult[9] = fn;
  } else {
    class D {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores);
      }
    }
  }
  fn = tmp19;
  RTCConnectionStore = obj3.useRef(0);
  closure_9 = obj3.useRef(null);
  Features = obj3.useRef(false);
  if (cResult[10] === tmp19) {
    class D {
      constructor() {
        return RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores);
      }
    }
  }
  class L {
    constructor() {
      if (null != closure_5) {
        tmp = closure_6;
        if (null != closure_6) {
          tmp2 = FROZEN;
          tmp3 = closure_1_11;
          if (FROZEN !== closure_1_11.FROZEN) {
            tmp5 = closure_10;
            flag = true;
            closure_10.current = true;
            tmp6 = closure_8;
            num = 1;
            sum = closure_8.current + 1;
            closure_8.current = sum;
            closure_0 = sum;
            tmp8 = closure_9;
            tmp9 = globalThis;
            _setTimeout = setTimeout;
            num2 = 0;
            closure_9.current = setTimeout(() => {
              _asyncToGenerator(true);
              const promise = fn();
              promise.then(() => { /* body not rendered: F152065 */ });
            }, 0);
          } else {
            tmp4 = closure_10;
          }
        }
      }
      return;
    }
  }
  const items3 = [FROZEN, tmp19, stateFromStores1, stateFromStores2];
  cResult[10] = tmp19;
  cResult[11] = stateFromStores2;
  cResult[12] = FROZEN;
  cResult[13] = stateFromStores1;
  cResult[14] = items3;
  cResult[15] = L;
}) : ((userId) => {
  let closure_4;
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (FROZEN === undefined) {
    const tmp = constants;
    FROZEN = constants.FROZEN;
  }
  let stateFromStores;
  let first;
  let first1;
  let id;
  let stateFromStores2;
  obj = userId(stateFromStores[11]);
  const items = [id];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp3 = FROZEN(stateFromStores[12])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp4 = first(first1.useState(null), 2);
  first = tmp4[0];
  _asyncToGenerator = tmp4[1];
  const tmp6 = first(first1.useState(false), 2);
  first1 = tmp6[0];
  id = tmp6[1];
  let obj2 = userId(stateFromStores[11]);
  const items1 = [stateFromStores2];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => RTCConnectionStore.getSecureFramesRosterMapEntry(userId));
  let obj3 = userId(stateFromStores[11]);
  const items2 = [stateFromStores2];
  stateFromStores2 = obj3.useStateFromStores(items2, () => RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores));
  const items3 = [userId];
  const callback = first1.useCallback(_asyncToGenerator(async () => {
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (stateFromStores1.supports(constants.MLS_PAIRWISE_FINGERPRINTS)) {
            c1 = 2;
            v3 = 1;
            const obj5 = { value: ref2(userId), done: false };
            return obj5;
          } else {
            c1 = 1;
            const obj4 = v3(stateFromStores[13]);
            v3 = 1;
            const obj6 = { value: obj4.computeBoundPairwiseFingerprint(userId), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp3) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp9) {
        v3 = 3;
        throw tmp9;
      }
    }
  }), items3);
  const ref = first1.useRef(0);
  constants = first1.useRef(null);
  const ref2 = first1.useRef(false);
  const items4 = [FROZEN, callback, stateFromStores1, stateFromStores2];
  const effect = first1.useEffect(() => {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        if (FROZEN !== constants.FROZEN) {
          ref2.current = true;
          const sum = ref.current + 1;
          ref.current = sum;
          userId = sum;
          const _setTimeout = setTimeout;
          constants.current = setTimeout(() => {
            id(true);
            const promise = callback();
            promise.then((result) => {
              if (closure_1_0 === ref.current) {
                if (null != result) {
                  closure_2_4(result);
                }
                id(false);
              }
            });
          }, 0);
        }
      }
    }
  }, items4);
  const effect1 = first1.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
  }, []);
  const items5 = [first, first1];
  return first1.useMemo(() => {
    let fingerprintUserKey;
    let fingerprint;
    if (first != null) {
      fingerprint = first.fingerprint;
    }
    if (fingerprint == null) {
      fingerprint = null;
    }
    obj = { fingerprint, fingerprintUserKey, loading: first1 };
    fingerprintUserKey = undefined;
    if (first != null) {
      fingerprintUserKey = first.fingerprintUserKey;
    }
    if (fingerprintUserKey == null) {
      fingerprintUserKey = null;
    }
    return obj;
  }, items5);
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export { SecureFramesPairwiseFingerprintMode };
export const useSecureFramesPairwiseFingerprint = tmp2;