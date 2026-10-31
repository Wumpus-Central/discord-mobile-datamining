// === Module 8147: AppStoreAgeSignalAttestation ===

// Module 8147 (AppStoreAgeSignalAttestation)
import Storage3 from "Storage" /* 510 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import TimeUtils from "TimeUtils" /* 5772 */;
import AppStoreAgeSignalActionCreators from "AppStoreAgeSignalActionCreators" /* 8148 */;
import NativeAppAttestModuleDefault from "NativeAppAttestModule" /* 8149 */;
import NativePlayIntegrityModuleDefault from "NativePlayIntegrityModule" /* 8150 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
function getPlayIntegrityCloudProjectNumber() {
  if ("production" === PROJECT_ENV) {
    return c6;
  } else if ("staging" === PROJECT_ENV) {
    return c7;
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
function buildConsentReinstatementPayload(arg0, arg1) {
  const items = [arg0, Endpoints.APP_STORE_CONSENT_REINSTATE, arg1, "true"];
  return items.join("|");
}
function requestIOSChallenge() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _requestIOSChallenge() {
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
let closure_14 = async function _registerAttestKey(arg0) {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj7 = { value: closure_130_0(closure_130_2[3]).registerAgeSignalAttestKey(keyId, attestation), done: false };
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
        closure_130_13(keyId);
        c4 = 3;
        const obj = { value: keyId, done: true };
        return obj;
      }
      c4 = 3;
      return { value: "HermesInternal", done: "HermesInternal" };
    } catch (tmp20) {
      c4 = tmp;
      throw tmp20;
    }
  }
};
function getAppAttestAssertion() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _getAppAttestAssertion(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp3;
          let currentUser = tmp48;
          closure_132_0 = closure_0;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          let nonce;
          closure_132_5 = undefined;
          if (obj14.isIOS()) {
            if (null != NativeAppAttestModuleDefault) {
              if (obj10.isSupported()) {
                c6 = 1;
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
                    const Storage = closure_1_0(closure_1_2[4]).Storage;
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
                closure_132_1 = tmp44;
                c1 = tmp44;
                if (tmp44 == null) {
                  c1 = undefined;
                }
                c7 = 2;
                c8 = 1;
                const obj4 = { value: requestIOSChallenge(c1), done: false };
                return obj4;
              }
              obj10 = NativeAppAttestModuleDefault;
            }
          }
          c8 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_133_13(null);
        c8 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } else {
        if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_132_2 = value;
            if (null == closure_132_2) {
              c6 = 0;
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              closure_132_3 = closure_132_1;
              nonce = closure_132_2.nonce;
              if (null != closure_132_3) {
                if (closure_132_2.attestKeyRegistered) {
                  const obj6 = { keyId: closure_132_3 };
                  const assertion = closure_133_1(closure_133_2[5]).generateAssertion(closure_132_3, closure_132_0(nonce));
                  c7 = 4;
                  c8 = 1;
                  const obj7 = closure_133_1(closure_133_2[5]);
                }
              }
              closure_133_13(null);
              c7 = 3;
              c8 = 1;
              const obj8 = {
                value: (function registerAttestKey() {
                              const self = this;
                              const apply = closure_1_14.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_132_2.nonce),
                done: false
              };
              return obj8;
            }
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c2 = value;
            if (value == null) {
              c2 = null;
            }
            closure_132_3 = c2;
            if (null == closure_132_3) {
              c6 = 0;
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              c7 = 5;
              c8 = 1;
              const obj11 = { value: closure_133_11(closure_132_3), done: false };
              return obj11;
            }
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            obj6.assertion = value;
            c6 = 0;
            c8 = 3;
            const obj13 = { value: obj6, done: true };
            return obj13;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_132_5 = value;
          if (null != closure_132_5) {
            nonce = closure_132_5.nonce;
          }
        }
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp47) {
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp47;
      } else {
        c7 = tmp;
      }
      tmp48 = c6;
    }
  }
};
let closure_17 = async function _getAppStoreAgeSignalAssertion() {
  await getAppAttestAssertion((arg0) => {
    const items = [arg0, closure_0.platform, , , , ];
    let str = "";
    let str2 = "";
    if (null != closure_0.ageLower) {
      const _String = String;
      str2 = String(closure_0.ageLower);
    }
    items[2] = str2;
    let StringResult = str;
    if (null != closure_0.ageUpper) {
      const _String2 = String;
      StringResult = String(closure_0.ageUpper);
    }
    items[3] = StringResult;
    let appleVerifiedMethod = closure_0.appleVerifiedMethod;
    if (appleVerifiedMethod == null) {
      appleVerifiedMethod = str;
    }
    items[4] = appleVerifiedMethod;
    if (null != closure_1) {
      const _String3 = String;
      str = String(closure_1);
    }
    items[5] = str;
    return items.join("|");
  });
  return value;
};
let closure_18 = async function _getAppStoreConsentReinstatementProof() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          if (obj13.isIOS()) {
            c2 = 1;
            c3 = 1;
            const obj4 = {
              value: getAppAttestAssertion((arg0) => {
                          const items = [arg0, constants.APP_STORE_CONSENT_REINSTATE, "ios", "true"];
                          return items.join("|");
                        }),
              done: false
            };
            return obj4;
          } else {
            c2 = 2;
            c3 = 1;
            const obj5 = { value: getAgeSignalChallenge(), done: false };
            return obj5;
          }
          obj13 = PlatformUtils;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          if (null == closure_128_0) {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            const obj7 = { platform: "ios", attest_key_id: closure_128_0.keyId, attest_assertion: closure_128_0.assertion };
            c3 = 3;
            const obj8 = { value: obj7, done: true };
            return obj8;
          }
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_128_1 = value;
            if (null != closure_128_1) {
              c2 = 3;
              c3 = 1;
              const obj10 = { value: closure_129_19(closure_129_10(closure_128_1, "android")), done: false };
              return obj10;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_128_2 = value;
          if (null != closure_128_2) {
            const obj = { platform: "android", integrity_token: closure_128_2 };
            c3 = 3;
            const obj12 = { value: obj, done: true };
            return obj12;
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp27) {
      c3 = tmp;
      throw tmp27;
    }
  }
};
function requestPlayIntegrityToken() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _requestPlayIntegrityToken() {
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
function getAgeSignalChallenge() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _getAgeSignalChallenge() {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
          obj3 = PlatformUtils;
        }
      } else if (1 === tmp6) {
        c2 = 0;
        c0 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
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
let closure_23 = async function _getAgeSignalIntegrityToken(arg0) {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj4 = { value: requestPlayIntegrityToken(buildRequestHashPayload(tmp5, tmp6)), done: false };
          return obj4;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
const Endpoints = fn(1072).Endpoints;
let c6 = 179099419678;
let c7 = 976935287357;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

export const PLAY_INTEGRITY_CLOUD_PROJECT_NUMBER_PROD = 179099419678;
export const PLAY_INTEGRITY_CLOUD_PROJECT_NUMBER_STAGE = 976935287357;
export { buildRequestHashPayload };
export function buildIOSClientDataPayload(arg0, platform, arg2) {
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
export { buildConsentReinstatementPayload };
export function getAppStoreAgeSignalAssertion() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function getAppStoreConsentReinstatementProof() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function warmAgeSignalAttestation() {
  if ("production" === PROJECT_ENV) {
    let tmp = c6;
  } else {
    tmp = null;
    if ("staging" === PROJECT_ENV) {
      tmp = c7;
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
}
export { getAgeSignalChallenge };
export function getAgeSignalIntegrityToken() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}