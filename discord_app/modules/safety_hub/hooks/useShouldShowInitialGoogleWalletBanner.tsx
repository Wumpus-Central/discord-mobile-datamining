// === Module 15045: useShouldShowInitialGoogleWalletBanner ===

// Module 15045 (useShouldShowInitialGoogleWalletBanner)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8702 */;

const require = globalThis.__r;

const require = fn;
const AgeCheckStatus = fn(8691).AgeCheckStatus;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useShouldShowInitialGoogleWalletBanner.tsx");

export const useShouldShowInitialGoogleWalletBanner = function useShouldShowInitialGoogleWalletBanner() {
  const items = [SafetyHubStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => SafetyHubStore.getAgeCheckStatus() === constants.NONE);
  let obj = require("initialize");
  const items1 = [SafetyHubStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => SafetyHubStore.getIsManualReviewFallbackEnabled());
  const obj2 = require("initialize");
  [tmp6, require] = noop.useState(false);
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = require("PlatformUtils").isAndroid();
    const tmpResult = require("PlatformUtils");
  }
  if (stateFromStores) {
    stateFromStores = require("SafetyHubUtils").isCurrentUserSuspended();
    const tmpResult2 = require("SafetyHubUtils");
  }
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    closure_1 = function _resolveGoogleWalletOnly() {
      const self = this;
      const tmp = asyncGeneratorStep(async () => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
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
                closure_1 = tmp3;
                closure_0 = tmp7;
                let methods;
                closure_128_1 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj6 = { value: _true(8709).fetchAgeVerificationMethodsV2SuspendedUser(), done: false };
                return obj6;
              }
            } else {
              if (1 === tmp7) {
                c2 = 0;
                if (!closure_129_0) {
                  closure_0(false);
                }
                c4 = 3;
              } else {
                if (2 === tmp7) {
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
                    let everyResult = methods.length > 0;
                    if (everyResult) {
                      everyResult = methods.every((method) => method.method === closure_1_0(closure_1_1[9]).AgeAssuranceMethod.GOOGLE_WALLET);
                    }
                    let tmp8 = everyResult;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else {
                  tmp8 = value;
                  if (arg0 === 2) {
                    c2 = 0;
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                }
                closure_128_1 = tmp8;
                if (!closure_129_0) {
                  closure_0(closure_128_1);
                }
                c2 = 0;
              }
              c3 = 3;
              c4 = 1;
              const obj8 = { value: _true(8712).checkGoogleWalletAvailable(), done: false };
              return obj8;
            }
          } catch (tmp27) {
            if (tmp4 === c2) {
              c4 = tmp2;
              throw tmp27;
            } else {
              c3 = tmp;
            }
          }
        }
      });
      dependencyMap = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    if (closure_1) {
      c0 = false;
      (function resolveGoogleWalletOnly() {
        const self = this;
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c0 = true;
      };
    }
  }, items2);
  if (stateFromStores) {
    stateFromStores = tmp6;
  }
  return stateFromStores;
};