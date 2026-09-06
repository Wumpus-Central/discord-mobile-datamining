// discord_app/modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx
import NativePlayIntegrityModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePlayIntegrityModule.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function getPlayIntegrityCloudProjectNumber() {
  if ("production" === PROJECT_ENV) {
    return 179099419678;
  } else if ("staging" === PROJECT_ENV) {
    return 976935287357;
  } else {
    return null;
  }
}
function buildRequestHashPayload(arg0, platform) {
  const items = [arg0, platform.platform, , , , ,];
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
  let str3 = platform.googleAgeSignalsStatus;
  if (str3 == null) {
    str3 = "";
  }
  items[4] = str3;
  let str4 = platform.googleAgeRangeSource;
  if (str4 == null) {
    str4 = "";
  }
  items[5] = str4;
  let str5 = platform.googleSignificantChangeStatus;
  if (str5 == null) {
    str5 = "";
  }
  items[6] = str5;
  return items.join("|");
}
function _requestPlayIntegrityToken() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c3 = 0;
    return (function* (arg0) {
      const tmp9 = closure_1_4();
      if (null != tmp9) {
        if (null != v0(table[1])) {
          c3 = 1;
          table = 2;
          v0 = 1;
          obj1 = { value: null, done: false };
          obj1[0] = tmp10(tmp11[1]).requestIntegrityToken(closure_0, tmp9);
          return obj1;
        }
        tmp10 = v0;
        tmp11 = table;
      }
      yield "HermesInternal";
      c3 = 0;
      yield "HermesInternal";
      c3 = 0;
      return arg1;
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAgeSignalChallenge() {
  const self = this;
  const tmp = callback(function* () {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
          } else {
            let obj2 = v0(table[2]);
            if (obj2.isAndroid()) {
              table = 1;
              c1 = 2;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp7(tmp8[3]).requestAgeSignalChallenge();
              return obj1;
            } else {
              v0 = 3;
              return { value: "HermesInternal", done: null };
            }
            tmp7 = v0;
            tmp8 = table;
          }
        } else if (1 === tmp6) {
          table = 0;
          v0 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 0;
          v0 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          table = 0;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp9) {
        if (tmp3 === table) {
          v0 = tmp2;
          throw tmp9;
        } else {
          c1 = tmp;
        }
      }
    }
  });
  closure_7 = tmp;
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
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function* (arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (null != closure_0) {
              c3 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = (function requestPlayIntegrityToken(arg0) {
                const self = this;
                const apply = closure_6.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_1_5(tmp5, tmp6));
              return obj1;
            } else {
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp9) {
          c2 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_8 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

export { buildRequestHashPayload };
export const warmAgeSignalAttestation = function warmAgeSignalAttestation() {
  if ("production" === PROJECT_ENV) {
    let tmp = 179099419678;
  } else {
    tmp = 976935287357;
    if ("staging" !== PROJECT_ENV) {
      tmp = null;
    }
  }
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = null != NativePlayIntegrityModuleDefault;
  }
  if (tmp2) {
    const result = NativePlayIntegrityModuleDefault.prepareIntegrityToken(tmp);
    result.catch(() => {});
    const obj = NativePlayIntegrityModuleDefault;
  }
};
export const getAgeSignalChallenge = function getAgeSignalChallenge() {
  const self = this;
  const apply = _getAgeSignalChallenge.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getAgeSignalIntegrityToken = function getAgeSignalIntegrityToken(c4, closure_2) {
  const self = this;
  const apply = _getAgeSignalIntegrityToken.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
