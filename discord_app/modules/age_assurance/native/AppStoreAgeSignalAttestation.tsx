// discord_app/modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;

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
function _requestPlayIntegrityToken() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c3 = 0;
    return (function*(arg0) {
      const tmp8 = (function getPlayIntegrityCloudProjectNumber() {
        if ("production" === PROJECT_ENV) {
          return 179099419678;
        } else if ("staging" === PROJECT_ENV) {
          return 976935287357;
        } else {
          return null;
        }
      })();
      if (null != tmp8) {
        if (null != v0(table[1])) {
          c3 = 1;
          table = 2;
          v0 = 1;
          obj1 = { value: null, done: false };
          obj1[0] = tmp9(tmp10[1]).requestIntegrityToken(closure_0, tmp8);
          return obj1;
        }
        tmp10 = table;
        tmp9 = v0;
      }
      yield "HermesInternal";
      c3 = 0;
      yield "HermesInternal";
      c3 = 0;
      return arg1;
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAgeSignalIntegrityToken() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_1 = undefined;
              if (obj9.isAndroid()) {
                c3 = 1;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp21(tmp22[3]).requestAgeSignalChallenge();
                return obj1;
              }
              obj9 = callback(closure_1_2[2]);
              tmp21 = callback;
              tmp22 = closure_1_2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_1 = arg1;
              if (null != closure_1) {
                c3 = 2;
                v0 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = (function requestPlayIntegrityToken(arg0) {
                  const self = this;
                  const apply = closure_5.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(v0(closure_1, callback));
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp9) {
          v0 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_6 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

export { buildRequestHashPayload };
export const getAgeSignalIntegrityToken = function getAgeSignalIntegrityToken(closure_0) {
  const self = this;
  const apply = _getAgeSignalIntegrityToken.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};