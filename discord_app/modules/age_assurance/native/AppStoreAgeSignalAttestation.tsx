// === Module 8568: AppStoreAgeSignalAttestation ===

// Module 8568 (AppStoreAgeSignalAttestation)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativePlayIntegrityModuleDefault from "NativePlayIntegrityModule" /* 8569 */;
import AppStoreAgeSignalActionCreators from "AppStoreAgeSignalActionCreators" /* 8570 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
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
  const items = [arg0, platform.platform, , , , , ];
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
let closure_6 = async function _requestPlayIntegrityToken() {
  const tmp9 = getPlayIntegrityCloudProjectNumber();
  if (null != tmp9) {
    if (null != NativePlayIntegrityModuleDefault) {
      c3 = 1;
      c2 = 2;
      c1 = 1;
      return { value: NativePlayIntegrityModuleDefault.requestIntegrityToken(closure_0, tmp9), done: false };
    }
  }
  await "HermesInternal";
  await "HermesInternal";
  return value;
};
let closure_7 = async function _getAgeSignalChallenge() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj2 = PlatformUtils;
          if (obj2.isAndroid()) {
            c2 = 1;
            c1 = 2;
            c0 = 1;
            const obj1 = { value: AppStoreAgeSignalActionCreators.requestAgeSignalChallenge(), done: false };
            return obj1;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } else if (1 === tmp6) {
        c2 = 0;
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 0;
        c0 = 3;
        obj2 = { value, done: true };
        return obj2;
      } else {
        c2 = 0;
        c0 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp9) {
      if (tmp3 === c2) {
        c0 = tmp2;
        throw tmp9;
      } else {
        c1 = tmp;
      }
    }
  }
};
let closure_8 = async function _getAgeSignalIntegrityToken(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null != closure_0) {
          c3 = 1;
          c2 = 1;
          const obj1 = {
            value: (function requestPlayIntegrityToken() {
                      const self = this;
                      const apply = closure_1_6.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(buildRequestHashPayload(tmp5, tmp6)),
            done: false
          };
          return obj1;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp9) {
      c2 = tmp;
      throw tmp9;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

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
    result.catch(() => {

    });
  }
};
export const getAgeSignalChallenge = function getAgeSignalChallenge() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getAgeSignalIntegrityToken = function getAgeSignalIntegrityToken() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};