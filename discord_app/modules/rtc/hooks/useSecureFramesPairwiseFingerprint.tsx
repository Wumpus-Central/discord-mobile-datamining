// discord_app/modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

const require = fn;
let closure_12 = async function _computeNativeDisplayPair(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      value = { value: null, done: true };
      value.value = value;
      return value;
    } else {
      return { value: "HermesInternal", done: null };
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
          value = { value: null, done: true };
          value.value = value;
          return value;
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
                mLSPairwiseFingerprint = mLSPairwiseFingerprint.getMLSPairwiseFingerprint(
                  closure_2_9,
                  closure_1_0,
                  (arg0) => {
                    const uint8Array = new Uint8Array(arg0);
                    return closure_0(uint8Array);
                  },
                );
              });
              c3 = 1;
              c4 = 1;
              let obj1 = { value: promise, done: false };
              return obj1;
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_129_3 = value;
        value = { fingerprint: null, fingerprintUserKey: null };
        obj1 = closure_130_1(closure_130_2[8]);
        value.fingerprint = obj1.fromByteArray(closure_129_3);
        value.fingerprintUserKey = closure_129_1;
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
};
let closure_9 = fn(9152).SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const Features = fn(4585).Features;
const SecureFramesPairwiseFingerprintMode = { FROZEN: "frozen", LIVE: "live" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export { SecureFramesPairwiseFingerprintMode };
export const useSecureFramesPairwiseFingerprint = function useSecureFramesPairwiseFingerprint(userId) {
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
  stateFromStores = userId(stateFromStores[9]).useStateFromStores(items, () => id.getId());
  FROZEN(stateFromStores[10])(
    stateFromStores !== userId,
    "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
  );
  const tmp4 = first(first1.useState(null), 2);
  first = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  const tmp6 = first(first1.useState(false), 2);
  first1 = tmp6[0];
  id = tmp6[1];
  obj = userId(stateFromStores[9]);
  const items1 = [stateFromStores2];
  const stateFromStores1 = userId(stateFromStores[9]).useStateFromStores(items1, () =>
    RTCConnectionStore.getSecureFramesRosterMapEntry(userId),
  );
  let obj2 = userId(stateFromStores[9]);
  const items2 = [stateFromStores2];
  stateFromStores2 = userId(stateFromStores[9]).useStateFromStores(items2, () =>
    RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores),
  );
  const items3 = [userId];
  const callback = first1.useCallback(
    asyncGeneratorStep(async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else if (stateFromStores1.supports(constants.MLS_PAIRWISE_FINGERPRINTS)) {
              c1 = 2;
              v3 = 1;
              const obj1 = {
                value: (function computeNativeDisplayPair() {
                  const self = this;
                  const apply = closure_1_12.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(userId),
                done: false,
              };
              return obj1;
            } else {
              let obj3 = v3(stateFromStores[11]);
              c1 = 1;
              v3 = 1;
              const obj2 = { value: obj3.computeBoundPairwiseFingerprint(userId), done: false };
              return obj2;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                obj3 = { value, done: true };
                return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          }
        } catch (tmp9) {
          v3 = tmp;
          throw tmp9;
        }
      }
    }),
    items3,
  );
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
  const effect1 = first1.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    },
    [],
  );
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
};
