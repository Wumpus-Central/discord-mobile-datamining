// === Module 8284: AppStoreAgeSignalAttestation ===

// Module 8284 (AppStoreAgeSignalAttestation)
import Storage3 from "Storage" /* 510 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import TimeUtils from "TimeUtils" /* 4925 */;
import AppStoreAgeSignalActionCreators from "AppStoreAgeSignalActionCreators" /* 8285 */;
import react_nativeDefault from "react-native" /* 8286 */;
import react_nativeDefault2 from "react-native" /* 8287 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let c0, c4, c8, c9;

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
  return obj(...arguments);
}
let obj = function _requestIOSChallenge() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: obj3.requestAgeSignalChallenge("ios", closure_0), done: false };
            obj3 = AppStoreAgeSignalActionCreators;
            return obj5;
          }
        } else if (1 === tmp3) {
          c3 = 0;
          c1 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        if (0 === c3) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
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
obj = function _registerAttestKey() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let tmp24Result;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let keyId;
        let attestation;
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
            closure_0 = undefined;
            keyId = undefined;
            attestation = undefined;
            const tmp23 = closure_0;
            if (null != react_nativeDefault) {
              c3 = 1;
              c4 = 1;
              const obj5 = { value: tmp24Result.generateAndAttestKey(tmp23), done: false };
              tmp24Result = react_nativeDefault;
              return obj5;
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            keyId = closure_0.keyId;
            attestation = closure_0.attestation;
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj3.registerAgeSignalAttestKey(keyId, attestation), done: false };
            obj3 = closure_130_0(closure_130_2[2]);
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
          obj = { value: keyId, done: true };
          return obj;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp19) {
        c4 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getAppStoreAgeSignalAssertion() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj13;
    let obj7;
    let tmp44;
    let value;
    function getStoredAttestKeyId() {
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
        const value = Storage.get(combined);
        let tmp7 = null;
        if (typeof value === "string") {
          tmp7 = null;
          if (value.length > 0) {
            tmp7 = value;
          }
        }
        return tmp7;
      }
    }
    function registerAttestKey() {
      return closure_1_11(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c9 === 2) {
      c9 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c7;
      try {
        let closure_5;
        let closure_2;
        let _null;
        let keyId;
        let nonce;
        c9 = 2;
        const tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp44;
            closure_2 = undefined;
            _null = undefined;
            keyId = undefined;
            nonce = undefined;
            const obj15 = PlatformUtils;
            if (obj15.isIOS()) {
              if (null != react_nativeDefault) {
                const obj11 = react_nativeDefault;
                if (obj11.isSupported()) {
                  c7 = 1;
                  const tmp40 = getStoredAttestKeyId();
                  closure_2 = tmp40;
                  let c2 = tmp40;
                  if (tmp40 == null) {
                    c2 = undefined;
                  }
                  c8 = 2;
                  c9 = 1;
                  const obj4 = { value: requestIOSChallenge(c2), done: false };
                  return obj4;
                }
              }
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp4) {
          c7 = 0;
          closure_134_10(null);
          c9 = 3;
          return { value: "IconComponent", done: null };
        } else {
          if (2 === tmp4) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _null = value;
              if (null == _null) {
                c7 = 0;
                c9 = 3;
                return { value: "IconComponent", done: null };
              } else {
                keyId = closure_2;
                nonce = _null.nonce;
                closure_134_10(null);
                c8 = 3;
                c9 = 1;
                const obj6 = { value: registerAttestKey(_null.nonce), done: false };
                return obj6;
              }
            }
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              let c3 = value;
              if (value == null) {
                c3 = null;
              }
              keyId = c3;
              if (null == keyId) {
                c7 = 0;
                c9 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c8 = 5;
                c9 = 1;
                const obj9 = { value: closure_134_8(keyId), done: false };
                return obj9;
              }
            }
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              obj13.assertion = value;
              c7 = 0;
              c9 = 3;
              const obj12 = { value: obj13, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            nonce = value;
            if (null == nonce) {
              c7 = 0;
              c9 = 3;
              return { value: "IconComponent", done: null };
            } else {
              let tmp7 = closure_5;
              nonce = nonce.nonce;
            }
          }
          obj13 = { keyId };
          c8 = 4;
          c9 = 1;
          const obj14 = { value: obj7.generateAssertion(keyId, closure_134_7(nonce, closure_0, closure_1)), done: false };
          obj7 = closure_134_1(closure_134_2[4]);
          return obj14;
        }
      } catch (tmp43) {
        tmp44 = c7;
        if (0 === c7) {
          c9 = 3;
          throw tmp43;
        } else {
          c8 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _requestPlayIntegrityToken() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    const tmp16 = getPlayIntegrityCloudProjectNumber();
    if (null != tmp16) {
      if (null != react_nativeDefault2) {
        let c3 = 1;
        const items = [, ];
        const tmp4Result = react_nativeDefault2;
        items[0] = tmp4Result.requestIntegrityToken(closure_0, tmp16);
        const obj4 = TimeUtils;
        const sleepResult = obj4.sleep(15000);
        items[1] = sleepResult.then(() => {

        });
        let c2 = 2;
        let c1 = 1;
        const obj5 = { value: race(items), done: false };
        return obj5;
      }
    }
    await "IconComponent";
    await "IconComponent";
    return value;
  });
  return obj(...arguments);
};
obj = function _getAgeSignalChallenge() {
  obj = _asyncToGenerator(async () => {
    let tmp5Result;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
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
            const obj3 = PlatformUtils;
            if (obj3.isAndroid()) {
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj5 = { value: tmp5Result.requestAgeSignalChallenge("android"), done: false };
              tmp5Result = AppStoreAgeSignalActionCreators;
              return obj5;
            } else {
              c0 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === tmp3) {
          c2 = 0;
          c0 = 3;
          return { value: "IconComponent", done: null };
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
          obj = { value: nonce, done: true };
          return obj;
        }
      } catch (tmp7) {
        if (0 === c2) {
          c0 = 3;
          throw tmp7;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getAgeSignalIntegrityToken() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_1;
    function requestPlayIntegrityToken() {
      return closure_1_13(...arguments);
    }
    let closure_0 = arg0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value: requestPlayIntegrityToken(buildRequestHashPayload(tmp4, tmp5)), done: false };
            return obj4;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
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
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

export { buildRequestHashPayload };
export { buildIOSClientDataPayload };
export const getAppStoreAgeSignalAssertion = function getAppStoreAgeSignalAssertion() {
  return obj(...arguments);
};
export const warmAgeSignalAttestation = function warmAgeSignalAttestation() {
  let tmp;
  if ("production" === PROJECT_ENV) {
    tmp = 179099419678;
  } else {
    tmp = 976935287357;
    if ("staging" !== PROJECT_ENV) {
      tmp = null;
    }
  }
  const tmp2 = null != tmp && null != react_nativeDefault2;
  if (tmp2) {
    obj = react_nativeDefault2;
    const result = obj.prepareIntegrityToken(tmp);
    result.catch(() => {

    });
  }
};
export const getAgeSignalChallenge = function getAgeSignalChallenge() {
  return obj(...arguments);
};
export const getAgeSignalIntegrityToken = function getAgeSignalIntegrityToken() {
  return obj(...arguments);
};