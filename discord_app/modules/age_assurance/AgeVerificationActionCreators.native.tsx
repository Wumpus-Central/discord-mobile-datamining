// discord_app/modules/age_assurance/AgeVerificationActionCreators.native.tsx
import _modDef4090 from "../../lib/native/Linking.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { AGE_VERIFICATION_INCODE_PATH as closure_9 } from "AgeVerificationIncodeWebViewConstants.tsx";
import { NativePermissionTypes } from "../native_permissions/NativePermissionConstants.tsx";
import { SafetyToastType } from "../safety_common/Constants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import set from "AgeVerificationConstants.tsx";

const require = fn;
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
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_9;
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
      yield closure_1_1(4840).requestPermission(closure_1_10.CAMERA, { showAuthorizationError: true });
      if (1 === tmp7) {
        dependencyMap = 0;
        closure_1_1(6553).showFailedToast(closure_1_11.TIGGER_PAWTECT_ERROR);
        closure_1_0();
        c4 = 3;
        const obj5 = closure_1_1(6553);
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
          obj1 = closure_1_1(5260);
          const v0 = 3;
          c4 = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = obj1.pushLazy(v0(function*() {
            yield closure_1_0(paths[10])(paths[9], paths.paths);
            closure_0 = arg1.default;
            return () => closure_2_12(closure_0, { webviewUrl: c2, onClose: closure_0, onComplete: c1 });
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
({ AGE_VERIFICATION_MODAL_KEY: c5, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: closure_6, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: error, VerificationVendorName: closure_8 } = require("set"));
let obj = {
  showAgeVerification(onClose) {
    let fn = onClose.onClose;
    if (fn === undefined) {
      fn = function o(merged) {

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
          yield fn(paths[10])(paths[16], paths.paths);
          closure_0 = arg1.default;
          return () => {
            merged = Object.assign(c2);
            return closure_2_12(closure_0, { webviewUrl: c1, onClose: closure_0 });
          };
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
    dependencyMap = undefined;
    let prop;
    let currentUser;
    let obj = entryPoint(1625);
    if (obj.isMetaQuest()) {
      let tmpResult = tmp(4657);
      tmpResult.openAlert(closure_7, jsx(onClose(6555), {}), onClose);
    } else {
      tmpResult = tmp(4992);
      let isAgeVerifiedResult = tmpResult.isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = tmp(4072).hasAgeGatedFeatures();
        const tmpResult1 = tmp(4072);
      }
      dependencyMap = isAgeVerifiedResult;
      if (tmpResult2.isAgeVerificationIncodeEnabled(entryPoint)) {
        currentUser = currentUser.getCurrentUser();
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          onClose(_undefined[19]);
          const obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
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
          tmp16(709).dispatch(obj);
          if (onClose != null) {
            onClose();
          }
          const tmp16Result = tmp16(709);
        }
        const obj9 = onClose(709);
        tmp16 = onClose;
      } else {
        if (tmpResult3.isExpressiveModalV2Enabled(entryPoint)) {
          onClose(5260).pushLazy(prop(function*() {
            yield entryPoint(paths[10])(paths[21], paths.paths);
            closure_0 = arg1.default;
            return () => closure_2_12(closure_0, {
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
          const obj8 = onClose(5260);
        } else {
          currentUser = tmp(6688).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
          const tmpResult4 = tmp(6688);
          onClose(5260).pushLazy(prop(function*() {
            yield entryPoint(paths[10])(paths[23], paths.paths);
            closure_0 = arg1.default;
            return () => closure_2_12(closure_0, { entryPoint: closure_0, isRetry: c2, useEmbeddedMethods: closure_1_4 });
          }), {}, closure_6);
          const obj7 = onClose(5260);
        }
        tmpResult3 = tmp(6558);
      }
      tmpResult2 = tmp(6556);
    }
  },
  openUrl(arg0) {
    _modDef4090.openURL(arg0);
  }
};
const result = require("obj132").fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default obj;