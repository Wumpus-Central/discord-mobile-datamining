// === Module 9868: _computeBoundPairwiseFingerprint ===

// Module 9868 (_computeBoundPairwiseFingerprint)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import closure_5 from "createRTCConnection" /* 4554 */;
import { SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION as closure_6 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY" /* 9863 */;

const require = arg1;
function _computeBoundPairwiseFingerprint() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let secureFramesRosterMapEntry;
              closure_1 = undefined;
              const id = closure_1_4.getId();
              secureFramesRosterMapEntry = closure_1_5.getSecureFramesRosterMapEntry(secureFramesRosterMapEntry);
              const secureFramesRosterMapEntry1 = closure_1_5.getSecureFramesRosterMapEntry(id);
              if (null != secureFramesRosterMapEntry) {
                if (null != secureFramesRosterMapEntry1) {
                  c2 = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = (function memoizedPairwiseFingerprint(id, secureFramesRosterMapEntry1, arg2, secureFramesRosterMapEntry) {
                    const items = [closure_6, id, , , ];
                    const uint8Array = new Uint8Array(secureFramesRosterMapEntry1);
                    items[2] = callback(206).fromByteArray(uint8Array);
                    items[3] = arg2;
                    const obj = callback(206);
                    const uint8Array1 = new Uint8Array(secureFramesRosterMapEntry);
                    items[4] = callback(206).fromByteArray(uint8Array1);
                    const joined = items.join(":");
                    let value = closure_7.get(joined);
                    if (null != value) {
                      return value;
                    } else {
                      const obj4 = joined(9846);
                      const _Uint8Array = Uint8Array;
                      const uint8Array2 = new Uint8Array(secureFramesRosterMapEntry1);
                      const _Uint8Array2 = Uint8Array;
                      const uint8Array3 = new Uint8Array(secureFramesRosterMapEntry);
                      const pairwiseFingerprint = obj4.generatePairwiseFingerprint(tmp, uint8Array2, id, uint8Array3, arg2);
                      const nextPromise = pairwiseFingerprint.then((arg0) => callback(table[4]).fromByteArray(arg0));
                      if (obj3.size >= 16) {
                        value = obj3.keys().next().value;
                        if (null != value) {
                          obj3.delete(value);
                        }
                        const iter = obj3.keys();
                      }
                      const result = obj3.set(joined, nextPromise);
                      nextPromise.catch(() => closure_1_7.delete(joined));
                      return nextPromise;
                    }
                    const obj2 = callback(206);
                  })(id, secureFramesRosterMapEntry1, tmp19, secureFramesRosterMapEntry);
                  return obj1;
                }
              }
              c3 = 3;
              return { value: null, done: true };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            obj = { fingerprint: null, fingerprintUserKey: null };
            obj[0] = closure_1;
            obj[1] = secureFramesRosterMapEntry;
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = obj;
            return obj3;
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const map = new Map();
let result = require("set").fileFinishedImporting("modules/rtc/SecureFramesBoundPairwiseFingerprint.tsx");

export const computeBoundPairwiseFingerprint = function computeBoundPairwiseFingerprint(c0) {
  const self = this;
  const apply = _computeBoundPairwiseFingerprint.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};