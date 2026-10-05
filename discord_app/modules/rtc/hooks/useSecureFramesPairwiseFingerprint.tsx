// === Module 9370: useSecureFramesPairwiseFingerprint ===

// Module 9370 (useSecureFramesPairwiseFingerprint)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;

const require = globalThis.__r;

const require = fn;
function computeNativeDisplayPair() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _computeNativeDisplayPair(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
          let mLSPairwiseFingerprint = tmp4;
          c1 = 0;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          const secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
          closure_129_1 = secureFramesRosterMapEntry;
          const rTCConnection = RTCConnectionStore.getRTCConnection();
          closure_129_2 = rTCConnection;
          if (null != secureFramesRosterMapEntry) {
            if (null != rTCConnection) {
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                mLSPairwiseFingerprint = mLSPairwiseFingerprint.getMLSPairwiseFingerprint(closure_2_9, closure_1_0, (arg0) => {
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
        closure_129_3 = value;
        value = { fingerprint: closure_130_1(closure_130_2[8]).fromByteArray(closure_129_3), fingerprintUserKey: closure_129_1 };
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
};
let closure_9 = fn(9366).SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
let Features = fn(4915).Features;
const SecureFramesPairwiseFingerprintMode = { FROZEN: "frozen", LIVE: "live" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export { SecureFramesPairwiseFingerprintMode };
export const useSecureFramesPairwiseFingerprint = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  obj = require("c");
  const cResult = obj.c(22);
  userId = userId.userId;
  _require = userId;
  let FROZEN = userId.mode;
  if (undefined === FROZEN) {
    FROZEN = obj.FROZEN;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores2];
    class F {
      constructor() {
        return closure_6.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = F;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  stateFromStores = require("initialize").useStateFromStores(tmp5, F);
  FROZEN(stateFromStores[12])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmpResult = require("initialize");
  [r10042, _slicedToArray] = stateFromStores1.useState(null);
  const tmp10 = _slicedToArray(stateFromStores1.useState(null), 2);
  [r10048, asyncGeneratorStep] = stateFromStores1.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RTCConnectionStore];
    class F {
      constructor() {
        return closure_6.getId();
      }
    }
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== userId) {
    class N {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_0);
      }
    }
    cResult[3] = userId;
    class F {
      constructor() {
        return closure_6.getId();
      }
    }
    cResult[4] = N;
  } else {
    class N {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_0);
      }
    }
  }
  const tmp11 = _slicedToArray(stateFromStores1.useState(false), 2);
  stateFromStores1 = require("initialize").useStateFromStores(tmp12, N);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_0);
      }
    }
    const items2 = [RTCConnectionStore];
    class F {
      constructor() {
        return closure_6.getId();
      }
    }
    cResult[5] = items2;
    const tmp16 = items2;
  } else {
    class N {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_0);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class D {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_2);
      }
    }
    cResult[6] = stateFromStores;
    class F {
      constructor() {
        return closure_6.getId();
      }
    }
    cResult[7] = D;
  } else {
    class D {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_2);
      }
    }
  }
  const tmpResult3 = require("initialize");
  stateFromStores2 = require("initialize").useStateFromStores(tmp16, D);
  if (cResult[8] !== userId) {
    class D {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_2);
      }
    }
    _require = asyncGeneratorStep(async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              const obj6 = { value: v3(stateFromStores[13]).computeBoundPairwiseFingerprint(c0), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp4) {
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
        } catch (tmp10) {
          c0 = tmp;
          throw tmp10;
        }
      }
    });
    let fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    class F {
      constructor() {
        return closure_6.getId();
      }
    }
    cResult[8] = userId;
    cResult[9] = fn;
  } else {
    class D {
      constructor() {
        return closure_8.getSecureFramesRosterMapEntry(closure_2);
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
        return closure_8.getSecureFramesRosterMapEntry(closure_2);
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
              asyncGeneratorStep(true);
              fn().then(() => { ... });
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
  const tmpResult4 = require("initialize");
}) : ((userId) => {
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (FROZEN === undefined) {
    FROZEN = constants.FROZEN;
  }
  let stateFromStores;
  let first;
  let first1;
  let id;
  let stateFromStores2;
  const items = [id];
  stateFromStores = userId(stateFromStores[11]).useStateFromStores(items, () => id.getId());
  FROZEN(stateFromStores[12])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp4 = first(first1.useState(null), 2);
  first = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  const tmp6 = first(first1.useState(false), 2);
  first1 = tmp6[0];
  id = tmp6[1];
  obj = userId(stateFromStores[11]);
  const items1 = [stateFromStores2];
  const stateFromStores1 = userId(stateFromStores[11]).useStateFromStores(items1, () => RTCConnectionStore.getSecureFramesRosterMapEntry(userId));
  let obj2 = userId(stateFromStores[11]);
  const items2 = [stateFromStores2];
  stateFromStores2 = userId(stateFromStores[11]).useStateFromStores(items2, () => RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores));
  const items3 = [userId];
  const callback = first1.useCallback(asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            v3 = 1;
            const obj6 = { value: v3(stateFromStores[13]).computeBoundPairwiseFingerprint(userId), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp4) {
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
      } catch (tmp10) {
        v3 = tmp;
        throw tmp10;
      }
    }
  }), items3);
  first1.useRef(0);
  constants = first1.useRef(null);
  first1.useRef(false);
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
            closure_6(true);
            callback().then((result) => {
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
    let fingerprint;
    if (first != null) {
      fingerprint = first.fingerprint;
    }
    if (fingerprint == null) {
      fingerprint = null;
    }
    obj = { fingerprint, fingerprintUserKey: null, loading: null };
    let fingerprintUserKey;
    if (first != null) {
      fingerprintUserKey = first.fingerprintUserKey;
    }
    if (fingerprintUserKey == null) {
      fingerprintUserKey = null;
    }
    obj.fingerprintUserKey = fingerprintUserKey;
    obj.loading = first1;
    return obj;
  }, items5);
});