// === Module 16381: buildRequestHashPayload ===

// Module 16381 (buildRequestHashPayload)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function buildRequestHashPayload(arg0, platform) {
  const items = [arg0, platform.platform, , , ];
  let str = "";
  if (null != platform.ageLower) {
    const _String = String;
    str = String(platform.ageLower);
  }
  items[2] = str;
  let str2 = "";
  if (null != platform.ageUpper) {
    const _String2 = String;
    str2 = String(platform.ageUpper);
  }
  items[3] = str2;
  let str3 = platform.googleUserStatus;
  if (str3 == null) {
    str3 = "";
  }
  items[4] = str3;
  return items.join("|");
}
function _getAgeSignalIntegrityToken() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let asyncGeneratorStep = tmp4;
              let closure_1 = 0;
              closure_1 = undefined;
              if (obj9.isAndroid()) {
                v0 = 1;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = tmp21(tmp22[2]).requestAgeSignalChallenge();
                return obj1;
              }
              obj9 = callback(outer1_1[1]);
              tmp21 = callback;
              tmp22 = outer1_1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_1 = arg1;
              if (null != closure_1) {
                v0(closure_1, callback);
                v0 = 2;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = (function requestPlayIntegrityToken(arg0) {
                  return Promise.resolve(undefined);
                })(0);
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c4 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  const _getAgeSignalIntegrityToken = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("_requestAgeSignalChallenge").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

export { buildRequestHashPayload };
export const getAgeSignalIntegrityToken = function getAgeSignalIntegrityToken(outer1_0) {
  const self = this;
  const apply = _getAgeSignalIntegrityToken.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};