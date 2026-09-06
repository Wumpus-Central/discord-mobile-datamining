// === Module 10806: useCreateSubscriptionParams ===

// Module 10806 (useCreateSubscriptionParams)
import v1 from "v1" /* 1256 */;
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess" /* 10807 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useCreateSubscriptionParams.tsx");

export default function useCreateSubscriptionParams(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = useToggleOnIAPSuccessDefault();
  dependencyMap = tmp;
  let items = [arg0, arg1, tmp];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = null;
        if (null != closure_2) {
          let obj = { requestIdentifier: v1.v4(), items: null, countryCode: null, currency: null };
          obj = { planId: tmp.id, quantity: 1 };
          const items = [obj];
          obj.items = items;
          ({ country: obj.countryCode, currency: obj.currency } = tmp3);
          tmp2 = obj;
        }
      }
      tmp3 = closure_1;
    }
    return tmp2;
  }, items);
};