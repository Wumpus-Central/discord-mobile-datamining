// === Module 8411: AgeVerificationActionCreators ===

// Module 8411 (AgeVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import LinkingDefault from "Linking" /* 4255 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8404 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import ManualReviewDecidedTeenAlertModalDefault from "ManualReviewDecidedTeenAlertModal" /* 8587 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
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
        const _HermesInternal = HermesInternal;
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_10;
      }
      str3 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    (async () => {
      closure_0 = tmp3;
      await tmp3(5139).requestPermission(constants.CAMERA, { showAuthorizationError: true });
      if (1 === tmp7) {
        dependencyMap = 0;
        tmp3(8404).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
        closure_129_0();
        c4 = 3;
        tmp3(8404);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c4 = 3;
          return { value, done: true };
        } else {
          const v3 = 3;
          c4 = 1;
          tmp3(4763);
          return {
            value: tmp3(4763).pushLazy(v3(async () => {
                  await tmp2(paths[10])(paths[9], paths.paths);
                  closure_128_0 = value.default;
                  return () => closure_3_13(closure_1_0, { webviewUrl, onClose, onComplete });
                }), {}, closure_1_5),
            done: false
          };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        dependencyMap = 0;
      }
      return value;
    })();
    flag = true;
  }
  return flag;
}
function showAgeVerification(onClose) {
  onClose = onClose.onClose;
  if (onClose === undefined) {
    onClose = function n() {

    };
  }
  ({ shouldShowExpressiveModal, externalWindow, webviewUrl } = onClose);
  ({ method, verificationVendorName } = onClose);
  let merged = Object.assign(onClose, Object.assign({ onClose: 0, shouldShowExpressiveModal: 0, method: 0, externalWindow: 0, webviewUrl: 0, verificationVendorName: 0, incodeParameters: 0 }));
  let obj = onClose(merged[14]);
  if (obj.isMetaQuest()) {
    let tmp2Result = tmp2(tmp3[15]);
    tmp2Result.openAlert(closure_7, jsx(webviewUrl(tmp3[16]), {}), onClose);
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
            closure_130_0 = onClose;
            const result = tmp2(tmp3[12]).openAgeVerificationCustomTab(webviewUrl, externalWindow);
            const tmp2Result1 = tmp2(tmp3[12]);
            result.then((result) => {
              if (!result) {
                SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                fn();
              }
            }).catch(() => {
              SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
              fn();
            });
            return true;
          } else {
            if (tmp2Result2.isIOS()) {
              closure_129_0 = onClose;
              const result1 = tmp2(tmp3[13]).openAgeVerificationAuthSession(webviewUrl);
              const tmp2Result3 = tmp2(tmp3[13]);
              result1.then((result) => {
                if (!result) {
                  SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                  fn();
                }
              }).catch(() => {
                SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
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
        obj = { onClose, onComplete: merged.onComplete };
        let flag = openIncodeAgeVerificationModal(obj);
      }
      return flag;
    }
    flag = null != webviewUrl;
    if (flag) {
      webviewUrl(tmp3[8]).pushLazy(asyncGeneratorStep(async () => {
        await tmp2(paths[10])(paths[20], paths.paths);
        closure_128_0 = value.default;
        return () => {
          merged = Object.assign(c2);
          return <closure_1_0 webviewUrl={webviewUrl} onClose={onClose} />;
        };
      }), {}, closure_5);
      flag = true;
      const obj5 = webviewUrl(tmp3[8]);
    }
  }
}
const AgeVerificationConstants = fn(8412);
({ AGE_VERIFICATION_MODAL_KEY: hasOwnProperty, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: metroRequire, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: closure_7, MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY: closure_8, VerificationVendorName: closure_9 } = AgeVerificationConstants);
let closure_10 = fn(8414).AGE_VERIFICATION_INCODE_PATH;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
const SafetyToastType = fn(8399).SafetyToastType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default {
  showAgeVerification,
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    const onClose = entryPoint.onClose;
    dependencyMap = undefined;
    let prop;
    UserStore = undefined;
    let obj = entryPoint(1608);
    if (obj.isMetaQuest()) {
      let tmpResult = tmp(4906);
      tmpResult.openAlert(closure_7, jsx(onClose(8426), {}), onClose);
    } else {
      tmpResult = tmp(4773);
      let isAgeVerifiedResult = tmpResult.isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = tmp(5423).hasAgeGatedFeatures();
        const tmpResult1 = tmp(5423);
      }
      dependencyMap = isAgeVerifiedResult;
      if (tmpResult2.isAgeVerificationIncodeEnabled(entryPoint)) {
        const currentUser = UserStore.getCurrentUser();
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          const obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          obj.dispatch(obj);
          if (onClose != null) {
            onClose();
          }
        }
        onClose(573).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        obj = {
          onClose: handleClose,
          onComplete() {

              }
        };
        if (!openIncodeAgeVerificationModal(obj)) {
          obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          tmp16(573).dispatch(obj);
          if (onClose != null) {
            onClose();
          }
          const tmp16Result = tmp16(573);
        }
        const obj9 = onClose(573);
        tmp16 = onClose;
      } else {
        if (tmpResult3.isExpressiveModalV2Enabled(entryPoint)) {
          onClose(4763).pushLazy(prop(function*() {
            yield tmp2(paths[10])(paths[25], paths.paths);
            closure_128_0 = value.default;
            return () => <closure_1_0 entryPoint={entryPoint} onClose={function onClose() {
              let tmp;
              if (closure_1_1 != null) {
                tmp = closure_1_1();
              }
              return tmp;
            }} />;
          }), {}, closure_6);
          const obj8 = onClose(4763);
        } else {
          UserStore = tmp(8575).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
          const tmpResult4 = tmp(8575);
          onClose(4763).pushLazy(prop(function*() {
            yield tmp2(paths[10])(paths[27], paths.paths);
            closure_128_0 = value.default;
            return () => <closure_1_0 entryPoint={entryPoint} isRetry={isRetry} useEmbeddedMethods={useEmbeddedMethods} />;
          }), {}, closure_6);
          const obj7 = onClose(4763);
        }
        tmpResult3 = tmp(8429);
      }
      tmpResult2 = tmp(8427);
    }
  },
  showManualReviewWebview(verification_webview_url) {
    return showAgeVerification({
      webviewUrl: verification_webview_url,
      verificationVendorName: constants.K_ID,
      entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SYSTEM_DM_MANUAL_REVIEW,
      onComplete() {

      }
    });
  },
  showManualReviewDecidedTeenModal() {
    useAlertStore.openAlert(React6, jsx(ManualReviewDecidedTeenAlertModalDefault, {}));
  },
  openUrl(arg0) {
    LinkingDefault.openURL(arg0);
  }
};