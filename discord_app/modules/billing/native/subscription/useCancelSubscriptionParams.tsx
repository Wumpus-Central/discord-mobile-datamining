// === Module 7702: useCancelSubscriptionParams ===

// Module 7702 (useCancelSubscriptionParams)
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess" /* 7701 */;
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/billing/native/subscription/useCancelSubscriptionParams.tsx");

export default function useCancelSubscriptionParams(arg0) {
  closure_0 = arg0;
  const tmp = useToggleOnIAPSuccessDefault();
  importDefault = tmp;
  const items = [arg0, tmp];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != callback) {
      tmp2 = null;
      if (null != closure_1) {
        const obj = { requestIdentifier: null, subscriptionId: null };
        obj[0] = callback(dependencyMap[2]).v4();
        obj[1] = tmp;
        tmp2 = obj;
        const obj2 = callback(dependencyMap[2]);
      }
    }
    return tmp2;
  }, items);
};