// discord_app/modules/age_assurance/AgeVerificationActionCreators.native.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import SafetyToastsActionCreatorsDefault from "../safety_common/SafetyToastsActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils.tsx";
import ManualReviewDecidedTeenAlertModalDefault from "native/ManualReviewDecidedTeenAlertModal.tsx";
import ManualReviewPendingAlertModalDefault from "native/ManualReviewPendingAlertModal.tsx";
import ManualReviewFallbackAlertModalDefault from "native/ManualReviewFallbackAlertModal.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../stores/UserStore.tsx";

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
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_12;
      }
      str3 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    (async () => {
      closure_0 = tmp3;
      await tmp3(5357).requestPermission(constants.CAMERA, { showAuthorizationError: true });
      if (1 === tmp7) {
        dependencyMap = 0;
        tmp3(8679).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
        closure_129_0();
        c4 = 3;
        tmp3(8679);
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
          return {
            value: tmp3(4960).pushLazy(
              v3(async () => {
                await tmp2(paths[10])(paths[9], paths.paths);
                closure_128_0 = value.default;
                return () => closure_3_15(closure_1_0, { webviewUrl, onClose, onComplete });
              }),
              {},
              closure_1_5,
            ),
            done: false,
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
    onClose = function n() {};
  }
  ({ shouldShowExpressiveModal, externalWindow, webviewUrl } = onClose);
  ({ method, verificationVendorName } = onClose);
  let merged = Object.assign(
    onClose,
    Object.assign({
      onClose: 0,
      shouldShowExpressiveModal: 0,
      method: 0,
      externalWindow: 0,
      webviewUrl: 0,
      verificationVendorName: 0,
      incodeParameters: 0,
    }),
  );
  if (obj.isMetaQuest()) {
    tmp2(tmp3[15]).openAlert(closure_7, jsx(webviewUrl(tmp3[16]), {}), onClose);
    return true;
  } else {
    if (method === tmp2(tmp3[17]).AgeAssuranceMethod.NEW_METHOD) {
      if (null != webviewUrl) {
        if ("" !== webviewUrl) {
          if (tmp2Result6.isAndroid()) {
            if (externalWindow == null) {
              externalWindow = null;
            }
            closure_130_0 = onClose;
            const result = tmp2(tmp3[12]).openAgeVerificationCustomTab(webviewUrl, externalWindow);
            const tmp2Result7 = tmp2(tmp3[12]);
            result
              .then((result) => {
                if (!result) {
                  SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                  fn();
                }
              })
              .catch(() => {
                SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                fn();
              });
            return true;
          } else {
            if (tmp2Result8.isIOS()) {
              closure_129_0 = onClose;
              const result1 = tmp2(tmp3[13]).openAgeVerificationAuthSession(webviewUrl);
              const tmp2Result9 = tmp2(tmp3[13]);
              result1
                .then((result) => {
                  if (!result) {
                    SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                    fn();
                  }
                })
                .catch(() => {
                  SafetyToastsActionCreatorsDefault.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                  fn();
                });
              return true;
            }
            tmp2Result8 = tmp2(tmp3[18]);
          }
          tmp2Result6 = tmp2(tmp3[18]);
        }
      }
    }
    if (verificationVendorName === constants.INCODE) {
      if (tmp2Result10.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
        const obj2 = { onClose, onComplete: merged.onComplete };
        let flag = openIncodeAgeVerificationModal(obj2);
      }
      return flag;
    }
    flag = null != webviewUrl;
    if (flag) {
      webviewUrl(tmp3[8]).pushLazy(
        asyncGeneratorStep(async () => {
          await tmp2(paths[10])(paths[20], paths.paths);
          closure_128_0 = value.default;
          return () => {
            merged = Object.assign(c2);
            return <closure_1_0 webviewUrl={webviewUrl} onClose={onClose} />;
          };
        }),
        {},
        closure_5,
      );
      flag = true;
      const obj5 = webviewUrl(tmp3[8]);
    }
  }
  obj = onClose(merged[14]);
}
function showManualReviewFallbackModal(AUTOMATED_UNDERAGE_APPEALS, arg1) {
  _require = arg1;
  if (!c18) {
    c18 = true;
    require("useAlertStore").openAlert(closure_9, jsx(ManualReviewFallbackAlertModalDefault, {}), () => {
      c18 = false;
      if (closure_0 != null) {
        tmp();
      }
    });
    const obj = require("useAlertStore");
  }
}
const AgeVerificationConstants = fn(8687);
({
  AGE_VERIFICATION_MODAL_KEY: hasOwnProperty,
  AGE_VERIFICATION_GET_STARTED_MODAL_KEY: metroRequire,
  AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: closure_7,
  MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY: closure_8,
  MANUAL_REVIEW_FALLBACK_ALERT_KEY: closure_9,
  MANUAL_REVIEW_PENDING_ALERT_KEY: c10,
  VerificationVendorName: closure_11,
} = AgeVerificationConstants);
let closure_12 = fn(8690).AGE_VERIFICATION_INCODE_PATH;
const NativePermissionTypes = fn(4966).NativePermissionTypes;
const SafetyToastType = fn(8674).SafetyToastType;
const jsx = fn(21).jsx;
let c18 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default {
  showAgeVerification,
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    let onClose = entryPoint.onClose;
    dependencyMap = undefined;
    let prop;
    UserStore = undefined;
    if (obj.isMetaQuest()) {
      tmp(5111).openAlert(closure_7, jsx(onClose(8702), {}), onClose);
      const tmpResult = tmp(5111);
    } else {
      let isAgeVerifiedResult = tmp(4969).isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = tmp(5642).hasAgeGatedFeatures();
        const tmpResult7 = tmp(5642);
      }
      dependencyMap = isAgeVerifiedResult;
      const tmpResult6 = tmp(4969);
      if (tmpResult8.isAgeVerificationIncodeEnabled(entryPoint)) {
        const currentUser = UserStore.getCurrentUser();
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          DispatcherDefault.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop });
          if (onClose != null) {
            onClose();
          }
        }
        onClose(573).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        let obj2 = {
          onClose: handleClose,
          onComplete() {},
        };
        if (!openIncodeAgeVerificationModal(obj2)) {
          const obj3 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          tmp14(573).dispatch(obj3);
          if (onClose != null) {
            onClose();
          }
          const tmp14Result = tmp14(573);
        }
        const obj8 = onClose(573);
        tmp14 = onClose;
      } else {
        if (tmpResult9.isExpressiveModalV2Enabled(entryPoint)) {
          prop(function* () {
            if (v3 === 2) {
              v3 = 3;
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
                v3 = 2;
                if (0 === dependencyMap) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    onClose = tmp4;
                    entryPoint = tmp4;
                    dependencyMap = 1;
                    v3 = 1;
                    const obj5 = { value: entryPoint(8711).shouldShowManualReviewFallback(entryPoint), done: false };
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
                    onClose(4960).pushLazy(
                      v3(function* () {
                        yield tmp2(paths[10])(paths[26], paths.paths);
                        closure_128_0 = value.default;
                        return () =>
                          closure_3_15(closure_1_0, {
                            entryPoint,
                            onClose() {
                              let tmp;
                              if (closure_1_1 != null) {
                                tmp = closure_1_1();
                              }
                              return tmp;
                            },
                          });
                      }),
                      {},
                      closure_1_6,
                    );
                    const obj = onClose(4960);
                  }
                  v3 = 3;
                }
              } catch (tmp20) {
                v3 = tmp;
                throw tmp20;
              }
            }
          })();
        } else {
          UserStore = tmp(8855).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
          const tmpResult10 = tmp(8855);
          onClose(4960).pushLazy(
            prop(function* () {
              yield tmp2(paths[10])(paths[28], paths.paths);
              closure_128_0 = value.default;
              return () => (
                <closure_1_0 entryPoint={entryPoint} isRetry={isRetry} useEmbeddedMethods={useEmbeddedMethods} />
              );
            }),
            {},
            closure_6,
          );
          const obj7 = onClose(4960);
        }
        tmpResult9 = tmp(8705);
      }
      tmpResult8 = tmp(8703);
    }
    obj = entryPoint(1609);
  },
  showManualReviewWebview(verification_webview_url, onClose) {
    return showAgeVerification({
      webviewUrl: verification_webview_url,
      verificationVendorName: constants.K_ID,
      entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MANUAL_REVIEW,
      onComplete() {},
      onClose,
    });
  },
  showManualReviewDecidedTeenModal(teen_age_range) {
    useAlertStore.openAlert(React6, jsx(ManualReviewDecidedTeenAlertModalDefault, { teenAgeRange: teen_age_range }));
  },
  showManualReviewPendingModal() {
    useAlertStore.openAlert(closure_1_10, jsx(ManualReviewPendingAlertModalDefault, {}));
  },
  showManualReviewFallbackModal,
  openUrl(arg0) {
    LinkingDefault.openURL(arg0);
  },
};
