// === Module 9157: SecureFramesBoundPairwiseFingerprint ===

// Module 9157 (SecureFramesBoundPairwiseFingerprint)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

const require = fn;
let closure_8 = async function _computeBoundPairwiseFingerprint(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          id = id.getId();
          const secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
          closure_129_0 = secureFramesRosterMapEntry;
          const secureFramesRosterMapEntry1 = RTCConnectionStore.getSecureFramesRosterMapEntry(id);
          if (null != secureFramesRosterMapEntry) {
            if (null != secureFramesRosterMapEntry1) {
              c2 = 1;
              c3 = 1;
              const obj1 = {
                value: (function memoizedPairwiseFingerprint(id, secureFramesRosterMapEntry1, arg2, secureFramesRosterMapEntry) {
                              const items = [closure_6, id, , , ];
                              const uint8Array = new Uint8Array(secureFramesRosterMapEntry1);
                              items[2] = closure_1(206).fromByteArray(uint8Array);
                              items[3] = arg2;
                              const obj = closure_1(206);
                              const uint8Array1 = new Uint8Array(secureFramesRosterMapEntry);
                              items[4] = closure_1(206).fromByteArray(uint8Array1);
                              const joined = items.join(":");
                              value = map.get(joined);
                              if (null != value) {
                                return value;
                              } else {
                                const obj4 = joined(9135);
                                const _Uint8Array = Uint8Array;
                                const uint8Array2 = new Uint8Array(secureFramesRosterMapEntry1);
                                const _Uint8Array2 = Uint8Array;
                                const uint8Array3 = new Uint8Array(secureFramesRosterMapEntry);
                                const pairwiseFingerprint = obj4.generatePairwiseFingerprint(closure_6, uint8Array2, id, uint8Array3, arg2);
                                const nextPromise = pairwiseFingerprint.then((result) => closure_1_1(dependencyMap[4]).fromByteArray(result));
                                if (map.size >= 16) {
                                  value = map.keys().next().value;
                                  if (null != value) {
                                    map.delete(value);
                                  }
                                  const iter = map.keys();
                                }
                                const result = map.set(joined, nextPromise);
                                nextPromise.catch(() => map.delete(joined));
                                return nextPromise;
                              }
                              const obj2 = closure_1(206);
                            })(id, secureFramesRosterMapEntry1, closure_0, secureFramesRosterMapEntry),
                done: false
              };
              return obj1;
            }
          }
          c3 = 3;
          return { value: null, done: true };
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_129_1 = value;
        obj = { fingerprint: closure_129_1, fingerprintUserKey: closure_129_0 };
        c3 = 3;
        const obj3 = { value: obj, done: true };
        return obj3;
      }
    } catch (tmp13) {
      c3 = tmp;
      throw tmp13;
    }
  }
};
let closure_6 = fn(9152).SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesBoundPairwiseFingerprint.tsx");

export const computeBoundPairwiseFingerprint = function computeBoundPairwiseFingerprint() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};