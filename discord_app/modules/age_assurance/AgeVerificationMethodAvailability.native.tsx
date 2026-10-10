// === Module 7544: AgeVerificationMethodAvailability ===

// Module 7544 (AgeVerificationMethodAvailability)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 7545 */;
import GoogleWalletActionCreators from "GoogleWalletActionCreators" /* 7546 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodAvailability.native.tsx");

export const useAvailableMethodsV2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvailableMethodsV2(arr) {
  const cResult = c.c(6);
  [tmp5, require] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      c0 = false;
      const result = GoogleWalletActionCreators.checkGoogleWalletAvailable();
      result.then((result) => {
        if (!c0) {
          require(result);
        }
      });
      return () => {
        c0 = true;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = AppStoreAgeSignalSupport.isAppStoreAgeSignalSupported();
      const tmpResult2 = AppStoreAgeSignalSupport;
    }
    cResult[2] = isIOSResult;
    let tmp9 = isIOSResult;
    const tmpResult = PlatformUtils;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === arr) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  closure_129_0 = tmp5;
  closure_129_1 = tmp9;
  const found = arr.filter((method) => {
    method = method.method;
    if (closure_0(first[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_0;
    } else if (closure_0(first[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_1;
    } else {
      return true;
    }
  });
  cResult[3] = tmp5;
  cResult[4] = arr;
  cResult[5] = found;
  tmp11 = found;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : (function useAvailableMethodsV2(arg0) {
  closure_0 = arg0;
  const tmp = memo(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  const effect = noop.useEffect(() => {
    c0 = false;
    const result = closure_0(first[8]).checkGoogleWalletAvailable();
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
    let isIOSResult = closure_0(first[4]).isIOS();
    if (isIOSResult) {
      isIOSResult = closure_0(first[5]).isAppStoreAgeSignalSupported();
      const tmpResult = closure_0(first[5]);
    }
    return isIOSResult;
  }, []);
  const items = [arg0, first, memo];
  return noop.useMemo(() => {
    closure_0 = first;
    closure_1 = memo;
    return closure_0.filter((method) => {
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
});
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