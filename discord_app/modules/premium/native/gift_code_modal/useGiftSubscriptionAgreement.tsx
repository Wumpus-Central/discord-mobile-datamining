// === Module 11872: useGiftSubscriptionAgreement ===

// Module 11872 (useGiftSubscriptionAgreement)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftSubscriptionAgreement.tsx");

export default function useGiftSubscriptionAgreement(code) {
  code = code.code;
  let isResolvingAgreement = code.isSubscription;
  if (isResolvingAgreement) {
    isResolvingAgreement = undefined === code.giftSubscriptionAgreement;
  }
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  items = [code, isResolvingAgreement];
  const effect = noop.useEffect(() => {
    closure_0 = async function _lookUpOnOpen() {
      closure_1 = tmp3;
      await closure_2_0(11866).resolveGiftCode(closure_0, { withSubscriptionPlan: true, withGiftSubscriptionAgreement: true });
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp22;
        const result = code(11866).reportUnexpectedGiftCodeError(closure_128_0);
        tmp22(true);
        c5 = 3;
        code(11866);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
    };
    if (isResolvingAgreement) {
      (function lookUpOnOpen() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items);
  if (isResolvingAgreement) {
    isResolvingAgreement = !tmp[0];
  }
  return { isResolvingAgreement };
};
export function needsGiftSubscriptionAgreement(isSubscription) {
  isSubscription = isSubscription.isSubscription;
  if (isSubscription) {
    isSubscription = undefined === isSubscription.giftSubscriptionAgreement;
  }
  return isSubscription;
}