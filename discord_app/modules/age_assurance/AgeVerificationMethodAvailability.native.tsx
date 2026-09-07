// === Module 8438: AgeVerificationMethodAvailability ===

// Module 8438 (AgeVerificationMethodAvailability)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 8439 */;
import GoogleWalletActionCreators from "GoogleWalletActionCreators" /* 8440 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function filterByAvailability(arr, arg1) {
  ({ googleWallet: require, appStoreSignal: dependencyMap } = arg1);
  return arr.filter((method) => {
    method = method.method;
    if (closure_0(first[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_0;
    } else if (closure_0(first[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_1;
    } else {
      return true;
    }
  });
}
function isAppStoreSignalAvailable() {
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    isIOSResult = AppStoreAgeSignalSupport.isAppStoreAgeSignalSupported();
    const tmpResult = AppStoreAgeSignalSupport;
  }
  return isIOSResult;
}
let closure_7 = async function _getAvailableMethodsV() {
  closure_3 = tmp2;
  noop = filterByAvailability;
  closure_2 = closure_0;
  closure_1 = {};
  await GoogleWalletActionCreators.checkGoogleWalletAvailable();
  closure_1.googleWallet = value;
  closure_1.appStoreSignal = closure_131_6();
  return noop(closure_2, closure_1);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodAvailability.native.tsx");

export const useAvailableMethodsV2 = function useAvailableMethodsV2(methods) {
  const tmp = memo(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  const effect = noop.useEffect(() => {
    c0 = false;
    const result = methods(first[6]).checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        closure_2(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  memo = noop.useMemo(() => {
    let isIOSResult = methods(first[4]).isIOS();
    if (isIOSResult) {
      isIOSResult = methods(first[5]).isAppStoreAgeSignalSupported();
      const tmpResult = methods(first[5]);
    }
    return isIOSResult;
  }, []);
  const items = [methods, first, memo];
  return noop.useMemo(() => {
    methods = first;
    closure_1 = memo;
    return methods.filter((method) => {
      method = method.method;
      if (closure_0(first[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
        return closure_0;
      } else if (closure_0(first[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
        return closure_1;
      } else {
        return true;
      }
    });
  }, items);
};
export const getAvailableMethodsV2 = function getAvailableMethodsV2() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};