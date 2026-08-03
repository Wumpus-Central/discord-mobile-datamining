// === Module 7328: useResubscribeSubscriptionParams ===

// Module 7328 (useResubscribeSubscriptionParams)
import noop from "noop";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx");

export default function useResubscribeSubscriptionParams(arg0) {
  let closure_0 = arg0;
  const tmp = importDefault(7326)();
  importDefault = tmp;
  const items = [arg0, tmp];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != callback) {
      tmp2 = null;
      if (null != closure_1) {
        const obj = { requestIdentifier: null, subscriptionId: null };
        obj[0] = callback(outer1_2[2]).v4();
        obj[1] = tmp;
        tmp2 = obj;
        const obj2 = callback(outer1_2[2]);
      }
    }
    return tmp2;
  }, items);
};