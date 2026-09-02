// === Module 8697: openIncodeAgeVerificationModal ===

// Module 8697 (openIncodeAgeVerificationModal)
import _modDef4190 from "module_4190" /* 4190 */;
import useAlertStore from "useAlertStore" /* 4859 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8699 */;
import ManualReviewDecidedTeenAlertModalDefault from "ManualReviewDecidedTeenAlertModal" /* 8750 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import set from "set" /* 8698 */;
import { AGE_VERIFICATION_INCODE_PATH as closure_10 } from "AGE_VERIFICATION_INCODE_PATH" /* 8700 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4730 */;
import { SafetyToastType } from "SafetyToastType" /* 8685 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function openIncodeAgeVerificationModal(arg0) {
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
          const obj = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_10;
      }
      str3 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    callback(function*() {
      closure_1 = tmp3;
      closure_0 = tmp3;
      dependencyMap = 1;
      yield closure_1_1(5091).requestPermission(closure_1_11.CAMERA, { showAuthorizationError: true });
      if (1 === tmp7) {
        dependencyMap = 0;
        closure_1_1(8690).showFailedToast(closure_1_12.TIGGER_PAWTECT_ERROR);
        closure_1_0();
        c4 = 3;
        const obj5 = closure_1_1(8690);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          obj1 = closure_1_1(4723);
          const v0 = 3;
          c4 = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = obj1.pushLazy(v0(function*() {
            closure_0 = tmp2;
            yield closure_1_0(paths[10])(paths[9], paths.paths);
            closure_0 = arg1.default;
            return () => closure_2_13(closure_0, { webviewUrl: c2, onClose: closure_0, onComplete: c1 });
          }), {}, closure_1_5);
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        dependencyMap = 0;
      }
      dependencyMap = 0;
      return arg1;
    })();
    flag = true;
  }
  return flag;
}
function showAgeVerification(onClose) {
  let fn = onClose.onClose;
  if (fn === undefined) {
    fn = function n(arg0) {

    };
  }
  ({ shouldShowExpressiveModal, externalWindow, webviewUrl } = onClose);
  ({ method, verificationVendorName } = onClose);
  let merged = Object.assign(onClose, Object.create(null));
  let obj = fn(merged[14]);
  if (obj.isMetaQuest()) {
    let tmp2Result = tmp2(tmp3[15]);
    tmp2Result.openAlert(closure_7, jsx(webviewUrl(tmp3[16]), {}), fn);
    return true;
  } else {
    if (method === tmp2(tmp3[17]).AgeAssuranceMethod.NEW_METHOD) {
      if (null != webviewUrl) {
        if ("" !== webviewUrl) {
          tmp2Result = tmp2(tmp3[18]);
          if (tmp2Result.isAndroid()) {
            if (externalWindow == null) {
              externalWindow = null;
            }
            const result = tmp2(tmp3[12]).openAgeVerificationCustomTab(webviewUrl, externalWindow);
            const tmp2Result1 = tmp2(tmp3[12]);
            result.then((arg0) => {
              if (!arg0) {
                webviewUrl(merged[11]).showFailedToast(closure_1_12.TIGGER_PAWTECT_ERROR);
                fn();
                const obj = webviewUrl(merged[11]);
              }
            }).catch(() => {
              webviewUrl(merged[11]).showFailedToast(closure_1_12.TIGGER_PAWTECT_ERROR);
              fn();
            });
            return true;
          } else {
            if (tmp2Result2.isIOS()) {
              const result1 = tmp2(tmp3[13]).openAgeVerificationAuthSession(webviewUrl);
              const tmp2Result3 = tmp2(tmp3[13]);
              result1.then((arg0) => {
                if (!arg0) {
                  webviewUrl(merged[11]).showFailedToast(closure_1_12.TIGGER_PAWTECT_ERROR);
                  fn();
                  const obj = webviewUrl(merged[11]);
                }
              }).catch(() => {
                webviewUrl(merged[11]).showFailedToast(closure_1_12.TIGGER_PAWTECT_ERROR);
                fn();
              });
              return true;
            }
            tmp2Result2 = tmp2(tmp3[18]);
          }
        }
      }
    }
    if (verificationVendorName === constants.INCODE) {
      if (tmp2Result4.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
        obj = { onClose: null, onComplete: null };
        obj[0] = fn;
        obj[1] = merged.onComplete;
        let flag = openIncodeAgeVerificationModal(obj);
      }
      return flag;
    }
    flag = null != webviewUrl;
    if (flag) {
      webviewUrl(tmp3[8]).pushLazy(callback(function*() {
        closure_0 = tmp2;
        yield closure_1_0(paths[10])(paths[20], paths.paths);
        closure_0 = arg1.default;
        return () => {
          merged = Object.assign(c2);
          return closure_2_13(closure_0, { webviewUrl: c1, onClose: closure_0 });
        };
      }), {}, closure_5);
      flag = true;
      const obj5 = webviewUrl(tmp3[8]);
    }
  }
}
({ AGE_VERIFICATION_MODAL_KEY: c5, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: closure_6, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: error, MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY: closure_8, VerificationVendorName: c9 } = set);
let result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default {
  showAgeVerification,
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    const onClose = entryPoint.onClose;
    dependencyMap = undefined;
    let prop;
    let currentUser;
    let obj = entryPoint(1623);
    if (obj.isMetaQuest()) {
      let tmpResult = tmp(4859);
      tmpResult.openAlert(closure_7, jsx(onClose(8712), {}), onClose);
    } else {
      tmpResult = tmp(4733);
      let isAgeVerifiedResult = tmpResult.isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = tmp(4172).hasAgeGatedFeatures();
        const tmpResult1 = tmp(4172);
      }
      dependencyMap = isAgeVerifiedResult;
      if (tmpResult2.isAgeVerificationIncodeEnabled(entryPoint)) {
        currentUser = currentUser.getCurrentUser();
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          let obj = onClose(_undefined[23]);
          obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          obj.dispatch(obj);
          if (onClose != null) {
            onClose();
          }
        }
        onClose(706).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        obj = { onClose: null, onComplete: null };
        obj[0] = handleClose;
        obj[1] = function onComplete() {

        };
        if (!openIncodeAgeVerificationModal(obj)) {
          obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: null };
          obj[1] = prop;
          onClose(706).dispatch(obj);
          if (onClose != null) {
            onClose();
          }
          const tmp16Result = onClose(706);
        }
      } else {
        if (tmpResult3.isExpressiveModalV2Enabled(entryPoint)) {
          onClose(4723).pushLazy(prop(function*() {
            closure_0 = tmp2;
            yield closure_1_0(paths[10])(paths[25], paths.paths);
            closure_0 = arg1.default;
            return () => closure_2_13(closure_0, {
              entryPoint: closure_0,
              onClose() {
                let tmp;
                if (callback != null) {
                  tmp = callback();
                }
                return tmp;
              }
            });
          }), {}, closure_6);
          const obj8 = onClose(4723);
        } else {
          currentUser = tmp(8738).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
          const tmpResult4 = tmp(8738);
          onClose(4723).pushLazy(prop(function*() {
            closure_0 = tmp2;
            yield closure_1_0(paths[10])(paths[27], paths.paths);
            closure_0 = arg1.default;
            return () => closure_2_13(closure_0, { entryPoint: closure_0, isRetry: c2, useEmbeddedMethods: closure_1_4 });
          }), {}, closure_6);
          const obj7 = onClose(4723);
        }
        tmpResult3 = tmp(8715);
      }
      tmpResult2 = tmp(8713);
    }
  },
  showManualReviewWebview(verification_webview_url) {
    return showAgeVerification({
      webviewUrl: verification_webview_url,
      verificationVendorName: constants.K_ID,
      entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.SYSTEM_DM_MANUAL_REVIEW,
      onComplete() {

      }
    });
  },
  showManualReviewDecidedTeenModal() {
    useAlertStore.openAlert(closure_8, jsx(ManualReviewDecidedTeenAlertModalDefault, {}));
  },
  openUrl(arg0) {
    _modDef4190.openURL(arg0);
  }
};