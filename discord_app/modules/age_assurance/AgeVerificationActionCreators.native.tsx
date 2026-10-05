// === Module 8084: AgeVerificationActionCreators ===

// Module 8084 (AgeVerificationActionCreators)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LinkingDefault from "Linking" /* 4565 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import Constants from "Constants" /* 8075 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import AgeVerificationIncodeWebViewConstants from "AgeVerificationIncodeWebViewConstants" /* 8088 */;
import ManualReviewDecidedTeenAlertModalDefault from "ManualReviewDecidedTeenAlertModal" /* 8270 */;
import ManualReviewPendingAlertModalDefault from "ManualReviewPendingAlertModal" /* 8272 */;
import ManualReviewFallbackAlertModalDefault from "ManualReviewFallbackAlertModal" /* 8273 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore_mod from "UserStore" /* 1377 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, _undefined, c4, dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function openIncodeAgeVerificationModal(arg0) {
  let require;
  ({ onClose: require, onComplete: importDefault } = arg0);
  let combined;
  let WEBAPP_ENDPOINT;
  if (GLOBAL_ENV != null) {
    WEBAPP_ENDPOINT = GLOBAL_ENV.WEBAPP_ENDPOINT;
  }
  combined = null;
  if (null != WEBAPP_ENDPOINT) {
    let str = "";
    combined = null;
    if ("" !== WEBAPP_ENDPOINT) {
      const _URL = URL;
      const _HermesInternal2 = HermesInternal;
      let str3 = "https:";
      const self = this;
      const self2 = this;
      const uRL = new URL("https:" + WEBAPP_ENDPOINT);
      const hostname = uRL.hostname;
      if ("localhost" !== hostname) {
        if ("127.0.0.1" !== hostname) {
          let obj = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_12;
      }
      str3 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    let tmp5 = (async () => {
      let c2;
      let closure_1;
      let obj6;
      let tmp;
      let v1;
      if (c4 === 2) {
        c4 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          const tmp4 = v1;
          if (0 === v1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              combined = 1;
              v1 = 2;
              c4 = 1;
              const obj7 = { value: obj6.requestPermission(constants.CAMERA, { showAuthorizationError: true }), done: false };
              obj6 = tmp(combined[7]);
              return obj7;
            }
          } else {
            if (1 === tmp4) {
              combined = 0;
              const obj5 = tmp(combined[11]);
              obj5.showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
              closure_129_0();
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                combined = 0;
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                const obj2 = tmp(combined[8]);
                v1 = 3;
                c4 = 1;
                const obj9 = {
                  value: obj2.pushLazy(v1(async () => {
                              let c1;
                              let tmp;
                              await tmp(paths[10])(paths[9], paths.paths);
                              tmp = value.default;
                              return () => {
                                const obj = { webviewUrl, onClose, onComplete };
                                return closure_3_15(closure_1_0, obj);
                              };
                            }), {}, closure_1_5),
                  done: false
                };
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              combined = 0;
              c4 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              combined = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          if (0 === combined) {
            c4 = 3;
            throw tmp21;
          } else {
            v1 = 1;
          }
        }
      }
    })();
    flag = true;
  }
  return flag;
}
function showAgeVerification(onClose) {
  let externalWindow;
  let method;
  let verificationVendorName;
  let webviewUrl;
  onClose = onClose.onClose;
  if (onClose === undefined) {
    onClose = function n() {

    };
  }
  let flag = onClose.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ externalWindow, webviewUrl } = onClose);
  ({ method, verificationVendorName } = onClose);
  let merged = Object.assign(onClose, Object.assign({ onClose: 0, shouldShowExpressiveModal: 0, method: 0, externalWindow: 0, webviewUrl: 0, verificationVendorName: 0, incodeParameters: 0 }));
  let obj = onClose(webviewUrl[14]);
  if (obj.isMetaQuest()) {
    const tmp2Result = onClose(webviewUrl[15]);
    tmp2Result.openAlert(closure_7, jsx(flag(webviewUrl[16]), {}), onClose);
    return true;
  } else {
    let flag2;
    if (method === onClose(webviewUrl[17]).AgeAssuranceMethod.NEW_METHOD) {
      if (null != webviewUrl) {
        if ("" !== webviewUrl) {
          const tmp2Result6 = onClose(webviewUrl[18]);
          if (tmp2Result6.isAndroid()) {
            if (externalWindow == null) {
              externalWindow = null;
            }
            const tmp2Result7 = onClose(webviewUrl[12]);
            const result = tmp2Result7.openAgeVerificationCustomTab(webviewUrl, externalWindow);
            const nextPromise = result.then((result) => {
              const tmp = result;
              if (!tmp) {
                const obj = flag(webviewUrl[11]);
                obj.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
                fn();
              }
            });
            nextPromise.catch(() => {
              const obj = flag(webviewUrl[11]);
              obj.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
              fn();
            });
            return true;
          } else {
            const tmp2Result8 = onClose(webviewUrl[18]);
            if (tmp2Result8.isIOS()) {
              const tmp2Result9 = onClose(webviewUrl[13]);
              const result1 = tmp2Result9.openAgeVerificationAuthSession(webviewUrl);
              const nextPromise1 = result1.then((result) => {
                const tmp = result;
                if (!tmp) {
                  const obj = flag(webviewUrl[11]);
                  obj.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
                  fn();
                }
              });
              nextPromise1.catch(() => {
                const obj = flag(webviewUrl[11]);
                obj.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
                fn();
              });
              return true;
            }
          }
        }
      }
    }
    if (verificationVendorName === constants.INCODE) {
      const tmp2Result10 = onClose(webviewUrl[19]);
      if (tmp2Result10.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
        const obj2 = { onClose, onComplete: merged.onComplete };
        flag2 = openIncodeAgeVerificationModal(obj2);
      }
      return flag2;
    }
    flag2 = null != webviewUrl;
    if (flag2) {
      const obj5 = flag(webviewUrl[8]);
      obj5.pushLazy(merged(function*() {
        let c1;
        let closure_0;
        let tmp;
        yield tmp(paths[10])(paths[20], paths.paths);
        tmp = value.default;
        return () => {
          merged = Object.assign(merged);
          return <closure_1_0 webviewUrl={webviewUrl} onClose={onClose} isExpressiveModalV2={isExpressiveModalV2} />;
        };
      }), {}, closure_5);
      flag2 = true;
    }
  }
}
function showManualReviewFallbackModal(AUTOMATED_UNDERAGE_APPEALS, arg1) {
  let closure_0;
  _require = arg1;
  const tmp = c18;
  if (!tmp) {
    c18 = true;
    const obj = require("useAlertStore");
    obj.openAlert(closure_9, jsx(ManualReviewFallbackAlertModalDefault, {}), () => {
      c18 = false;
      if (closure_0 != null) {
        tmp();
      }
    });
  }
}
let UserStore = UserStore_mod;
({ AGE_VERIFICATION_MODAL_KEY: hasOwnProperty, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: metroRequire, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: metroImportDefault, MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY: metroImportAll, MANUAL_REVIEW_FALLBACK_ALERT_KEY: c9, MANUAL_REVIEW_PENDING_ALERT_KEY: c10, VerificationVendorName: unpackModuleId } = AgeVerificationConstants);
let closure_12 = AgeVerificationIncodeWebViewConstants.AGE_VERIFICATION_INCODE_PATH;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const SafetyToastType = Constants.SafetyToastType;
const jsx = Fragment.jsx;
let c18 = false;
let obj = {
  showAgeVerification,
  showAgeVerificationGetStartedModal(entryPoint) {
    let closure_4;
    entryPoint = entryPoint.entryPoint;
    let onClose = entryPoint.onClose;
    dependencyMap = undefined;
    let prop;
    UserStore = undefined;
    let tmp = entryPoint;
    const tmp2 = dependencyMap;
    let obj = entryPoint(1615);
    if (obj.isMetaQuest()) {
      const tmpResult = tmp(5709);
      tmpResult.openAlert(closure_7, jsx(onClose(8102), {}), onClose);
    } else {
      const tmpResult6 = tmp(5102);
      let isAgeVerifiedResult = tmpResult6.isAgeVerified();
      if (isAgeVerifiedResult) {
        const tmpResult7 = tmp(5580);
        isAgeVerifiedResult = tmpResult7.hasAgeGatedFeatures();
      }
      dependencyMap = isAgeVerifiedResult;
      const tmpResult8 = tmp(8103);
      if (tmpResult8.isAgeVerificationIncodeEnabled(entryPoint)) {
        const currentUser = UserStore.getCurrentUser();
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          const obj = DispatcherDefault;
          const obj2 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          obj.dispatch(obj2);
          if (onClose != null) {
            onClose();
          }
        }
        const obj8 = onClose(584);
        obj8.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        let obj2 = {
          onClose: handleClose,
          onComplete() {

              }
        };
        let num = 0;
        const tmp14 = onClose;
        if (!openIncodeAgeVerificationModal(obj2)) {
          let obj3 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          const tmp14Result = tmp14(584);
          tmp14Result.dispatch(obj3);
          if (onClose != null) {
            onClose();
          }
        }
      } else {
        const tmpResult9 = tmp(8105);
        if (tmpResult9.isExpressiveModalV2Enabled(entryPoint)) {
          let tmp8 = prop;
          prop(function*() {
            let c2;
            let closure_0;
            let closure_1;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              const str = "Generator functions may not be called on executing generators";
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
                v3 = 2;
                const tmp3 = _undefined;
                if (0 === _undefined) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    onClose = tmp3;
                    entryPoint = tmp3;
                    const obj3 = entryPoint(_undefined[25]);
                    _undefined = 1;
                    v3 = 1;
                    const obj5 = { value: obj3.shouldShowManualReviewFallback(entryPoint), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  if (value) {
                    showManualReviewFallbackModal(closure_129_0, closure_129_1);
                  } else {
                    let obj = onClose(_undefined[8]);
                    obj.pushLazy(v3(function*() {
                      let c1;
                      let tmp;
                      yield tmp(paths[10])(paths[26], paths.paths);
                      tmp = value.default;
                      return () => {
                        const obj = {
                          entryPoint,
                          onClose() {
                            let tmp;
                            if (closure_1_1 != null) {
                              tmp = closure_1_1();
                            }
                            return tmp;
                          }
                        };
                        return closure_3_15(closure_1_0, obj);
                      };
                    }), {}, closure_1_6);
                  }
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp19) {
                v3 = 3;
                throw tmp19;
              }
            }
          })();
        } else {
          const tmpResult10 = tmp(8259);
          UserStore = tmpResult10.isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
          let tmp4 = onClose;
          let tmp5 = prop;
          const obj7 = onClose(5093);
          obj7.pushLazy(prop(function*() {
            let c1;
            let closure_0;
            let tmp;
            let useEmbeddedMethods;
            yield tmp(paths[10])(paths[28], paths.paths);
            tmp = value.default;
            return () => <closure_1_0 entryPoint={entryPoint} isRetry={isRetry} useEmbeddedMethods={useEmbeddedMethods} />;
          }), {}, closure_6);
        }
      }
    }
  },
  showManualReviewWebview(verification_webview_url, onClose) {
    const obj = {
      webviewUrl: verification_webview_url,
      verificationVendorName: unpackModuleId.K_ID,
      entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MANUAL_REVIEW,
      onComplete() {

      },
      onClose
    };
    return showAgeVerification(obj);
  },
  showManualReviewDecidedTeenModal(teen_age_range) {
    const obj = useAlertStore;
    obj.openAlert(metroImportAll, jsx(ManualReviewDecidedTeenAlertModalDefault, { teenAgeRange: teen_age_range }));
  },
  showManualReviewPendingModal() {
    const obj = useAlertStore;
    obj.openAlert(authStore, jsx(ManualReviewPendingAlertModalDefault, {}));
  },
  showManualReviewFallbackModal,
  openUrl(arg0) {
    const obj = LinkingDefault;
    obj.openURL(arg0);
  }
};
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default obj;