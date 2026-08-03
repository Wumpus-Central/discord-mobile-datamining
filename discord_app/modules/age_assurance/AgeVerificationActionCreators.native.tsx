import SafetyToastType from "SafetyToastType";
import mergeGuildAvatar from "mergeGuildAvatar";
import set from "set";
import { AGE_VERIFICATION_INCODE_PATH as closure_9 } from "AGE_VERIFICATION_INCODE_PATH";
import { NativePermissionTypes } from "NativePermissionStatus";
import { SafetyToastType } from "SafetyToastType";
import { jsx } from "MethodsScreen";
import set from "set";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function openIncodeAgeVerificationModal(arg0) {
  let importDefault;
  let require;
  ({ onClose: require, onComplete: importDefault } = arg0);
  let combined;
  let WEBAPP_ENDPOINT;
  if (GLOBAL_ENV != null) {
    WEBAPP_ENDPOINT = GLOBAL_ENV.WEBAPP_ENDPOINT;
  }
  combined = null;
  if (null != WEBAPP_ENDPOINT) {
    combined = null;
    if ("" !== WEBAPP_ENDPOINT) {
      const _URL = URL;
      const _HermesInternal2 = HermesInternal;
      let str3 = "https:";
      const uRL = new URL("https:" + WEBAPP_ENDPOINT);
      const hostname = uRL.hostname;
      if ("localhost" !== hostname) {
        if ("127.0.0.1" !== hostname) {
          let obj = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_9;
      }
      str3 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    callback(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let closure_1 = tmp3;
              let closure_0 = tmp3;
              let dependencyMap = 1;
              v0 = 2;
              c4 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_1(4736).requestPermission(outer1_10.CAMERA, { showAuthorizationError: true });
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              outer1_1(6724).showFailedToast(outer1_11.TIGGER_PAWTECT_ERROR);
              outer1_0();
              c4 = 3;
              const obj5 = outer1_1(6724);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c4 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                obj1 = outer1_1(4399);
                v0 = 3;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj1.pushLazy(v0(function*() {
                  if (paths === 2) {
                    paths = 3;
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
                      paths = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          paths = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          paths = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          let closure_0 = tmp2;
                          closure_0 = undefined;
                          c1 = 1;
                          paths = 1;
                          const obj1 = { value: null, done: false };
                          obj1[0] = outer1_0(paths[10])(paths[9], paths.paths);
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        paths = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        paths = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = arg1;
                        return obj2;
                      } else {
                        closure_0 = arg1.default;
                        paths = 3;
                        obj = { value: null, done: true };
                        obj[0] = () => outer2_12(closure_0, { webviewUrl: c2, onClose: closure_0, onComplete: c1 });
                        return obj;
                      }
                    } catch (tmp9) {
                      paths = tmp;
                      throw tmp9;
                    }
                  }
                }), {}, outer1_5);
                return obj3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp24) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp24;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
    flag = true;
  }
  return flag;
}
({ AGE_VERIFICATION_MODAL_KEY: c5, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: closure_6, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: error, VerificationVendorName: metroImportAll } = set);
const result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default {
  showAgeVerification(onClose) {
    let shouldShowExpressiveModal;
    let webviewUrl;
    let fn = onClose.onClose;
    if (fn === undefined) {
      fn = function o(arg0) {

      };
    }
    ({ shouldShowExpressiveModal, webviewUrl } = onClose);
    let merged = Object.assign(onClose, Object.create(null));
    let obj = fn(merged[12]);
    if (obj.isMetaQuest()) {
      let tmp2Result = tmp2(tmp3[13]);
      tmp2Result.openAlert(closure_7, jsx(webviewUrl(tmp3[14]), {}), fn);
      let flag = true;
    } else {
      if (onClose.verificationVendorName === constants.INCODE) {
        tmp2Result = tmp2(tmp3[15]);
        if (tmp2Result.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
          obj = { onClose: null, onComplete: null };
          obj[0] = fn;
          obj[1] = merged.onComplete;
          flag = openIncodeAgeVerificationModal(obj);
        }
      }
      flag = null != webviewUrl;
      if (flag) {
        webviewUrl(tmp3[8]).pushLazy(callback(function*() {
          if (paths === 2) {
            paths = 3;
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
              paths = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  paths = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  paths = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_0 = tmp2;
                  closure_0 = undefined;
                  c1 = 1;
                  paths = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_0(paths[10])(paths[16], paths.paths);
                  return obj1;
                }
              } else if (arg0 === 1) {
                paths = 3;
                throw arg1;
              } else if (arg0 === 2) {
                paths = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_0 = arg1.default;
                paths = 3;
                obj = { value: null, done: true };
                obj[0] = () => {
                  const merged = Object.assign(c2);
                  return outer2_12(closure_0, { webviewUrl: c1, onClose: closure_0 });
                };
                return obj;
              }
            } catch (tmp9) {
              paths = tmp;
              throw tmp9;
            }
          }
        }), {}, closure_5);
        flag = true;
        const obj3 = webviewUrl(tmp3[8]);
      }
    }
    return flag;
  },
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    const onClose = entryPoint.onClose;
    let dependencyMap;
    let prop;
    let currentUser;
    let obj = entryPoint(1577);
    if (obj.isMetaQuest()) {
      let tmpResult = tmp(4534);
      tmpResult.openAlert(closure_7, jsx(onClose(6770), {}), onClose);
    } else {
      tmpResult = tmp(4409);
      let isAgeVerifiedResult = tmpResult.isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = tmp(3872).hasAgeGatedFeatures();
        const tmpResult1 = tmp(3872);
      }
      dependencyMap = isAgeVerifiedResult;
      if (tmpResult2.isAgeVerificationIncodeEnabled(entryPoint)) {
        currentUser = currentUser.getCurrentUser();
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          let obj = onClose(_undefined[19]);
          obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          obj.dispatch(obj);
          if (onClose != null) {
            onClose();
          }
        }
        onClose(709).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        obj = { onClose: null, onComplete: null };
        obj[0] = handleClose;
        obj[1] = function onComplete() {

        };
        if (!openIncodeAgeVerificationModal(obj)) {
          obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: null };
          obj[1] = prop;
          onClose(709).dispatch(obj);
          if (onClose != null) {
            onClose();
          }
          const tmp16Result = onClose(709);
        }
      } else {
        if (tmpResult3.isExpressiveModalV2Enabled(entryPoint)) {
          onClose(4399).pushLazy(prop(function*() {
            if (paths === 2) {
              paths = 3;
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
                paths = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    paths = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    paths = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let closure_0 = tmp2;
                    closure_0 = undefined;
                    c1 = 1;
                    paths = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_0(paths[10])(paths[21], paths.paths);
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  paths = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  paths = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_0 = arg1.default;
                  paths = 3;
                  obj = { value: null, done: true };
                  obj[0] = () => outer2_12(closure_0, {
                    entryPoint: closure_0,
                    onClose() {
                      let tmp;
                      if (callback != null) {
                        tmp = callback();
                      }
                      return tmp;
                    }
                  });
                  return obj;
                }
              } catch (tmp9) {
                paths = tmp;
                throw tmp9;
              }
            }
          }), {}, closure_6);
          const obj8 = onClose(4399);
        } else {
          currentUser = tmp(7622).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
          const tmpResult4 = tmp(7622);
          onClose(4399).pushLazy(prop(function*() {
            if (paths === 2) {
              paths = 3;
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
                paths = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    paths = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    paths = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let closure_0 = tmp2;
                    closure_0 = undefined;
                    c1 = 1;
                    paths = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_0(paths[10])(paths[23], paths.paths);
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  paths = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  paths = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_0 = arg1.default;
                  paths = 3;
                  obj = { value: null, done: true };
                  obj[0] = () => outer2_12(closure_0, { entryPoint: closure_0, isRetry: c2, useEmbeddedMethods: outer1_4 });
                  return obj;
                }
              } catch (tmp9) {
                paths = tmp;
                throw tmp9;
              }
            }
          }), {}, closure_6);
          const obj7 = onClose(4399);
        }
        tmpResult3 = tmp(6773);
      }
      tmpResult2 = tmp(6771);
    }
  },
  openUrl(arg0) {
    importDefault(3890).openURL(arg0);
  }
};