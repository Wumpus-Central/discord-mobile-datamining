// === Module 7559: useCreateSubscriptionParams ===

// Module 7559 (useCreateSubscriptionParams)
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess" /* 7560 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/billing/native/subscription/useCreateSubscriptionParams.tsx");

export default function useCreateSubscriptionParams(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = useToggleOnIAPSuccessDefault();
  dependencyMap = tmp;
  let items = [arg0, arg1, tmp];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != callback) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = null;
        if (null != table) {
          let obj = { requestIdentifier: null, items: null, countryCode: null, currency: null };
          obj[0] = callback(table[2]).v4();
          obj = { planId: null, quantity: 1 };
          obj[0] = tmp.id;
          const items = [obj];
          obj[1] = items;
          ({ country: obj[2], currency: obj[3] } = tmp3);
          tmp2 = obj;
          const obj2 = callback(table[2]);
        }
      }
      tmp3 = closure_1;
    }
    return tmp2;
  }, items);
};