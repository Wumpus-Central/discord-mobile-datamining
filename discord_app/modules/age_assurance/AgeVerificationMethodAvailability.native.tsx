// === Module 8114: AgeVerificationMethodAvailability ===

// Module 8114 (AgeVerificationMethodAvailability)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 8115 */;
import GoogleWalletActionCreators from "GoogleWalletActionCreators" /* 8116 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, method;

function filterByAvailability(arr, arg1) {
  ({ googleWallet: require, appStoreSignal: dependencyMap } = arg1);
  return arr.filter((method) => {
    method = method.method;
    if (first(memo[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_0;
    } else if (first(memo[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_1;
    } else {
      return true;
    }
  });
}
function isAppStoreSignalAvailable() {
  obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const tmpResult = AppStoreAgeSignalSupport;
    isIOSResult = tmpResult.isAppStoreAgeSignalSupported();
  }
  return isIOSResult;
}
let obj = function _getAvailableMethodsV() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
        let closure_4;
        let closure_2;
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_4 = filterByAvailability;
            closure_2 = closure_0;
            closure_1 = {};
            c5 = 1;
            c6 = 1;
            const obj5 = { value: obj3.checkGoogleWalletAvailable(), done: false };
            obj3 = GoogleWalletActionCreators;
            return obj5;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1.googleWallet = value;
          closure_1.appStoreSignal = closure_131_6();
          c6 = 3;
          obj = { value: closure_4(closure_2, closure_1), done: true };
          return obj;
        }
      } catch (tmp14) {
        c6 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  obj = react2;
  const cResult = obj.c(6);
  [tmp5, require] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      let c0 = false;
      obj = GoogleWalletActionCreators;
      const result = obj.checkGoogleWalletAvailable();
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
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = PlatformUtils;
    let isIOSResult = tmpResult.isIOS();
    if (isIOSResult) {
      const tmpResult2 = AppStoreAgeSignalSupport;
      isIOSResult = tmpResult2.isAppStoreAgeSignalSupported();
    }
    cResult[2] = isIOSResult;
    tmp9 = isIOSResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    let tmp11;
    if (cResult[4] === arr) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  let closure_0 = tmp5;
  let closure_1 = tmp9;
  const found = arr.filter((method) => {
    method = method.method;
    if (first(memo[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_0;
    } else if (first(memo[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_1;
    } else {
      return true;
    }
  });
  cResult[3] = tmp5;
  cResult[4] = arr;
  cResult[5] = found;
  tmp11 = found;
}) : ((arg0) => {
  let memo;
  let closure_0 = arg0;
  const tmp = memo(react.useState(false), 2);
  let first = tmp[0];
  let closure_2 = tmp[1];
  const effect = react.useEffect(() => {
    let c0 = false;
    obj = closure_0(first[8]);
    const result = obj.checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        closure_2(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  memo = react.useMemo(() => {
    obj = closure_0(first[4]);
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      const tmpResult = closure_0(first[5]);
      isIOSResult = tmpResult.isAppStoreAgeSignalSupported();
    }
    return isIOSResult;
  }, []);
  const items = [arg0, first, memo];
  return react.useMemo(() => first.filter((method) => {
    method = method.method;
    if (first(memo[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_0;
    } else if (first(memo[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_1;
    } else {
      return true;
    }
  }), items);
});
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodAvailability.native.tsx");

export const useAvailableMethodsV2 = tmp2;
export const getAvailableMethodsV2 = function getAvailableMethodsV2() {
  return obj(...arguments);
};