// === Module 9871: _computeNativeDisplayPair ===

// Module 9871 (_computeNativeDisplayPair)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "fetchFingerprint" /* 1215 */;
import closure_7 from "_detectH265HardwareDecode" /* 4529 */;
import closure_8 from "createRTCConnection" /* 4554 */;
import { SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION as closure_9 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY" /* 9867 */;
import { Features } from "DesktopSources" /* 4542 */;

const require = arg1;
function _computeNativeDisplayPair() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === closure_3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let rTCConnection = tmp4;
              let secureFramesRosterMapEntry = 0;
              secureFramesRosterMapEntry = undefined;
              rTCConnection = undefined;
              closure_3 = undefined;
              secureFramesRosterMapEntry = closure_1_8.getSecureFramesRosterMapEntry(closure_0);
              rTCConnection = closure_1_8.getRTCConnection();
              if (null != secureFramesRosterMapEntry) {
                if (null != rTCConnection) {
                  const promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    const mLSPairwiseFingerprint = rTCConnection.getMLSPairwiseFingerprint(closure_1_9, closure_0, (arg0) => {
                      const uint8Array = new Uint8Array(arg0);
                      return callback(uint8Array);
                    });
                  });
                  closure_3 = 1;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = promise;
                  return obj1;
                }
              }
              c4 = 3;
              return { value: null, done: true };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_3 = arg1;
            obj = { fingerprint: null, fingerprintUserKey: null };
            obj1 = secureFramesRosterMapEntry(rTCConnection[8]);
            obj[0] = obj1.fromByteArray(closure_3);
            obj[1] = secureFramesRosterMapEntry;
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = obj;
            return obj3;
          }
        } catch (tmp16) {
          c4 = tmp;
          throw tmp16;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = { FROZEN: "frozen", LIVE: "live" };
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export const SecureFramesPairwiseFingerprintMode = obj;
export const useSecureFramesPairwiseFingerprint = function useSecureFramesPairwiseFingerprint(userId) {
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (FROZEN === undefined) {
    FROZEN = obj.FROZEN;
  }
  let stateFromStores;
  let first;
  let callback;
  let first1;
  closure_6 = undefined;
  let stateFromStores1;
  let stateFromStores2;
  callback = undefined;
  closure_10 = undefined;
  obj = undefined;
  closure_12 = undefined;
  obj = userId(stateFromStores[9]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  FROZEN(stateFromStores[10])(stateFromStores !== userId, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  const tmp4 = first(first1.useState(null), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const tmp6 = first(first1.useState(false), 2);
  first1 = tmp6[0];
  closure_6 = tmp6[1];
  const items1 = [stateFromStores2];
  stateFromStores1 = userId(stateFromStores[9]).useStateFromStores(items1, () => stateFromStores2.getSecureFramesRosterMapEntry(userId));
  let obj2 = userId(stateFromStores[9]);
  const items2 = [stateFromStores2];
  stateFromStores2 = userId(stateFromStores[9]).useStateFromStores(items2, () => stateFromStores2.getSecureFramesRosterMapEntry(stateFromStores));
  const items3 = [userId];
  callback = first1.useCallback(callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (closure_1_7.supports(closure_1_10.MLS_PAIRWISE_FINGERPRINTS)) {
            c1 = 2;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = (function computeNativeDisplayPair(c0) {
              const self = this;
              const apply = closure_12.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(v0);
            return obj1;
          } else {
            let obj3 = v0(closure_1_2[11]);
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj3.computeBoundPairwiseFingerprint(v0);
            return obj2;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        }
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  }), items3);
  closure_10 = first1.useRef(0);
  obj = first1.useRef(null);
  closure_12 = first1.useRef(false);
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
            closure_1_6(true);
            closure_1_9().then((arg0) => {
              if (closure_0 === closure_1_10.current) {
                if (null != arg0) {
                  closure_1_4(arg0);
                }
                closure_1_6(false);
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
      fingerprint = tmp.fingerprint;
    }
    if (fingerprint == null) {
      fingerprint = null;
    }
    obj = { fingerprint, fingerprintUserKey: null, loading: null };
    let fingerprintUserKey;
    if (first != null) {
      fingerprintUserKey = tmp.fingerprintUserKey;
    }
    if (fingerprintUserKey == null) {
      fingerprintUserKey = null;
    }
    obj[1] = fingerprintUserKey;
    obj[2] = first1;
    return obj;
  }, items5);
};