// === Module 14031: useGiftInventorySubscriptionsLoaded ===

// Module 14031 (useGiftInventorySubscriptionsLoaded)
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5806 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/gifting/hooks/useGiftInventorySubscriptionsLoaded.tsx");

export default function useGiftInventorySubscriptionsLoaded() {
  [tmp2, require] = noop.useState("loading");
  const effect = noop.useEffect(() => {
    closure_1 = async function _loadSubscriptions() {
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
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: actions_BillingActionCreators.fetchSubscriptions(), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
              closure_128_0 = "failed";
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = "succeeded";
              c2 = 0;
            }
            if (closure_129_0) {
              closure_0(closure_128_0);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp18;
          } else {
            c3 = tmp;
          }
        }
      }
    };
    c0 = true;
    (function loadSubscriptions() {
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
      c0 = false;
    };
  }, []);
  return { loaded: "loading" !== tmp2, succeeded: "succeeded" === tmp2 };
};