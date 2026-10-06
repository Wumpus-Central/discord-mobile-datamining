// === Module 14569: useShouldShowInitialGoogleWalletBanner ===

// Module 14569 (useShouldShowInitialGoogleWalletBanner)
import SafetyHubConstants from "SafetyHubConstants" /* 8126 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8139 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, c4;

const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useShouldShowInitialGoogleWalletBanner.tsx");

export const useShouldShowInitialGoogleWalletBanner = function useShouldShowInitialGoogleWalletBanner() {
  let stateFromStores;
  let tmp6;
  let obj = require("get initialized");
  const items = [SafetyHubStore];
  stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAgeCheckStatus() === constants.NONE);
  let obj2 = require("get initialized");
  const items1 = [SafetyHubStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SafetyHubStore.getIsManualReviewFallbackEnabled());
  let tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, require] = tmp5;
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    const tmpResult = require("PlatformUtils");
    stateFromStores = tmpResult.isAndroid();
  }
  if (stateFromStores) {
    const tmpResult2 = require("SafetyHubUtils");
    stateFromStores = tmpResult2.isCurrentUserSuspended();
  }
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    let _true;
    function resolveGoogleWalletOnly() {
      return obj(...arguments);
    }
    let obj = function _resolveGoogleWalletOnly() {
      obj = _asyncToGenerator(async () => {
        let obj2;
        let obj5;
        if (c4 === 2) {
          c4 = 3;
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
          let c2;
          try {
            let closure_0;
            let methods;
            let closure_1;
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
                closure_0 = tmp4;
                methods = undefined;
                closure_1 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj6 = { value: obj5.fetchAgeVerificationMethodsV2SuspendedUser(), done: false };
                obj5 = _true(closure_2_1[8]);
                return obj6;
              }
            } else {
              if (1 === c3) {
                c2 = 0;
                if (!closure_129_0) {
                  closure_0(false);
                }
              } else {
                let tmp5;
                if (2 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 0;
                    c4 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    methods = value.methods;
                    const everyResult = methods.length > 0 && methods.every((method) => method.method === closure_1_0(closure_1_1[9]).AgeAssuranceMethod.GOOGLE_WALLET);
                    tmp5 = everyResult;
                    if (tmp5) {
                      c3 = 3;
                      c4 = 1;
                      const obj8 = { value: obj2.checkGoogleWalletAvailable(), done: false };
                      obj2 = _true(closure_2_1[10]);
                      return obj8;
                    }
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else {
                  tmp5 = value;
                  if (arg0 === 2) {
                    c2 = 0;
                    c4 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                }
                closure_1 = tmp5;
                if (!closure_129_0) {
                  closure_0(closure_1);
                }
                c2 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp24) {
            if (0 === c2) {
              c4 = 3;
              throw tmp24;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (obj) {
      let c0 = false;
      const tmp = resolveGoogleWalletOnly();
      return () => {
        let c0 = true;
      };
    }
  }, items2);
  if (stateFromStores) {
    stateFromStores = tmp6;
  }
  return stateFromStores;
};