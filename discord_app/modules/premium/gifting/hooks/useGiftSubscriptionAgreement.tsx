// discord_app/modules/premium/gifting/hooks/useGiftSubscriptionAgreement.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftSubscriptionAgreement.tsx");

export default function useGiftSubscriptionAgreement(code) {
  code = undefined;
  if (code != null) {
    code = code.code;
  }
  let isResolvingAgreement = code(11941).needsGiftSubscriptionAgreement(code);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp3[1];
  items = [code, isResolvingAgreement];
  const effect = noop.useEffect(() => {
    closure_0 = async function _lookUpOnOpen(arg0) {
      await closure_2_1(11936).resolveGiftCode(closure_0, {
        withSubscriptionPlan: true,
        withGiftSubscriptionAgreement: true,
      });
      if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        const result = isResolvingAgreement(11936).reportUnexpectedGiftCodeError(closure_129_0);
        tmp3(true);
        c6 = 3;
        isResolvingAgreement(11936);
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      return value;
    };
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = isResolvingAgreement;
    }
    if (tmp2) {
      (function lookUpOnOpen(arg0) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0);
    }
  }, items);
  if (isResolvingAgreement) {
    isResolvingAgreement = !tmp3[0];
  }
  return { isResolvingAgreement };
}
