// === Module 10811: useResubscribeSubscriptionParams ===

// Module 10811 (useResubscribeSubscriptionParams)
import v1 from "v1" /* 1256 */;
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess" /* 10807 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx");

export default function useResubscribeSubscriptionParams(arg0) {
  closure_0 = arg0;
  const tmp = useToggleOnIAPSuccessDefault();
  importDefault = tmp;
  const items = [arg0, tmp];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != closure_1) {
        const obj = { requestIdentifier: v1.v4(), subscriptionId: tmp };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items);
};