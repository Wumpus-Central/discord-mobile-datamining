// === Module 8024: AppStoreAgeSignalAttestation ===

// Module 8024 (AppStoreAgeSignalAttestation)
import Storage3 from "Storage" /* 510 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import TimeUtils from "TimeUtils" /* 4865 */;
import AppStoreAgeSignalActionCreators from "AppStoreAgeSignalActionCreators" /* 8025 */;
import NativeAppAttestModuleDefault from "NativeAppAttestModule" /* 8026 */;
import NativePlayIntegrityModuleDefault from "NativePlayIntegrityModule" /* 8027 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;

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
function buildIOSClientDataPayload(arg0, platform, arg2) {
  const items = [arg0, platform.platform, , , , ];
  let str = "";
  let str2 = "";
  if (null != platform.ageLower) {
    const _String = String;
    str2 = String(platform.ageLower);
  }
  items[2] = str2;
  let StringResult = str;
  if (null != platform.ageUpper) {
    const _String2 = String;
    StringResult = String(platform.ageUpper);
  }
  items[3] = StringResult;
  let appleVerifiedMethod = platform.appleVerifiedMethod;
  if (appleVerifiedMethod == null) {
    appleVerifiedMethod = str;
  }
  items[4] = appleVerifiedMethod;
  if (null != arg2) {
    const _String3 = String;
    str = String(arg2);
  }
  items[5] = str;
  return items.join("|");
}
function requestIOSChallenge() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _requestIOSChallenge() {
  await AppStoreAgeSignalActionCreators.requestAgeSignalChallenge("ios", closure_0);
  await "HermesInternal";
  return value;
};
function setStoredAttestKeyId(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AppStoreAgeSignalAttestKey_" + id;
  }
  if (null != combined) {
    if (null != arg0) {
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(combined, arg0);
    } else {
      const Storage = Storage3.Storage;
      Storage.remove(combined);
    }
  }
}
let closure_11 = async function _registerAttestKey(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let keyId;
          let attestation;
          if (null != NativeAppAttestModuleDefault) {
            c3 = 1;
            c4 = 1;
            const obj5 = { value: NativeAppAttestModuleDefault.generateAndAttestKey(closure_0), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_0 = value;
          keyId = closure_129_0.keyId;
          attestation = closure_129_0.attestation;
          c3 = 2;
          c4 = 1;
          const obj7 = { value: closure_130_0(closure_130_2[2]).registerAgeSignalAttestKey(keyId, attestation), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else if (value) {
        closure_130_10(keyId);
        c4 = 3;
        const obj = { value: keyId, done: true };
        return obj;
      }
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp20) {
      c4 = tmp;
      throw tmp20;
    }
  }
};
let closure_12 = async function _getAppStoreAgeSignalAssertion(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp3;
          closure_5 = tmp48;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          let nonce;
          closure_133_6 = undefined;
          if (obj14.isIOS()) {
            if (null != NativeAppAttestModuleDefault) {
              if (obj10.isSupported()) {
                c7 = 1;
                const tmp44 = (function getStoredAttestKeyId() {
                  currentUser = currentUser.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  let combined = null;
                  if (null != id) {
                    const _HermesInternal = HermesInternal;
                    combined = "AppStoreAgeSignalAttestKey_" + id;
                  }
                  if (null == combined) {
                    return null;
                  } else {
                    const Storage = closure_1_0(closure_1_2[3]).Storage;
                    value = Storage.get(combined);
                    let tmp7 = null;
                    if (typeof value === "string") {
                      tmp7 = null;
                      if (value.length > 0) {
                        tmp7 = value;
                      }
                    }
                    return tmp7;
                  }
                })();
                closure_133_2 = tmp44;
                c2 = tmp44;
                if (tmp44 == null) {
                  c2 = undefined;
                }
                c8 = 2;
                c9 = 1;
                const obj4 = { value: requestIOSChallenge(c2), done: false };
                return obj4;
              }
              obj10 = NativeAppAttestModuleDefault;
            }
          }
          c9 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_134_10(null);
        c9 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        if (2 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_133_3 = value;
            if (null == closure_133_3) {
              c7 = 0;
              c9 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              closure_133_4 = closure_133_2;
              nonce = closure_133_3.nonce;
              if (null != closure_133_4) {
                if (closure_133_3.attestKeyRegistered) {
                  const obj6 = { keyId: closure_133_4 };
                  const assertion = closure_134_1(closure_134_2[4]).generateAssertion(closure_133_4, closure_134_7(nonce, closure_133_0, closure_133_1));
                  c8 = 4;
                  c9 = 1;
                  const obj7 = closure_134_1(closure_134_2[4]);
                }
              }
              closure_134_10(null);
              c8 = 3;
              c9 = 1;
              const obj8 = {
                value: (function registerAttestKey() {
                              const self = this;
                              const apply = closure_1_11.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_133_3.nonce),
                done: false
              };
              return obj8;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c3 = value;
            if (value == null) {
              c3 = null;
            }
            closure_133_4 = c3;
            if (null == closure_133_4) {
              c7 = 0;
              c9 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c8 = 5;
              c9 = 1;
              const obj11 = { value: closure_134_8(closure_133_4), done: false };
              return obj11;
            }
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            obj6.assertion = value;
            c7 = 0;
            c9 = 3;
            const obj13 = { value: obj6, done: true };
            return obj13;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_133_6 = value;
          if (null != closure_133_6) {
            nonce = closure_133_6.nonce;
          }
        }
        c7 = 0;
        c9 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp47) {
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp47;
      } else {
        c8 = tmp;
      }
      tmp48 = c7;
    }
  }
};
let closure_13 = async function _requestPlayIntegrityToken() {
  const tmp20 = getPlayIntegrityCloudProjectNumber();
  if (null != tmp20) {
    if (null != NativePlayIntegrityModuleDefault) {
      c3 = 1;
      const items = [NativePlayIntegrityModuleDefault.requestIntegrityToken(closure_0, tmp20), ];
      NativePlayIntegrityModuleDefault;
      TimeUtils;
      items[1] = TimeUtils.sleep(15000).then(() => {

      });
      c2 = 2;
      c1 = 1;
      return { value: Promise.race(items), done: false };
    }
  }
  await "HermesInternal";
  await "HermesInternal";
  return value;
};
let closure_14 = async function _getAgeSignalChallenge() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (obj3.isAndroid()) {
            c2 = 1;
            c1 = 2;
            c0 = 1;
            const obj5 = { value: AppStoreAgeSignalActionCreators.requestAgeSignalChallenge("android"), done: false };
            return obj5;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
          obj3 = PlatformUtils;
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
        const obj6 = { value, done: true };
        return obj6;
      } else {
        let nonce;
        if (value != null) {
          nonce = value.nonce;
        }
        c2 = 0;
        c0 = 3;
        const obj = { value: nonce, done: true };
        return obj;
      }
    } catch (tmp10) {
      if (tmp3 === c2) {
        c0 = tmp2;
        throw tmp10;
      } else {
        c1 = tmp;
      }
    }
  }
};
let closure_15 = async function _getAgeSignalIntegrityToken(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else if (null != closure_0) {
          c3 = 1;
          c2 = 1;
          const obj4 = {
            value: (function requestPlayIntegrityToken() {
                      const self = this;
                      const apply = closure_1_13.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(buildRequestHashPayload(tmp5, tmp6)),
            done: false
          };
          return obj4;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c2 = 3;
        const obj = { value, done: true };
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
export { buildIOSClientDataPayload };
export const getAppStoreAgeSignalAssertion = function getAppStoreAgeSignalAssertion() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
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
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getAgeSignalIntegrityToken = function getAgeSignalIntegrityToken() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};