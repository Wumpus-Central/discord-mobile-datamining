// discord_app/modules/billing/native/subscription/useCreateSubscriptionParams.tsx
import noop from "noop";
import { useToggleOnIAPSuccess } from "useToggleOnIAPSuccess.tsx";

const require = arg1;
const result = require("v1").fileFinishedImporting("modules/billing/native/subscription/useCreateSubscriptionParams.tsx");

export default function useCreateSubscriptionParams(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const tmp = useToggleOnIAPSuccess();
  const dependencyMap = tmp;
  let items = [arg0, arg1, tmp];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != callback) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = null;
        if (null != tmp) {
          let obj = { requestIdentifier: null, items: null, countryCode: null, currency: null };
          obj[0] = callback(tmp[2]).v4();
          obj = { planId: null, quantity: 1 };
          obj[0] = tmp.id;
          const items = [obj];
          obj[1] = items;
          ({ country: obj[2], currency: obj[3] } = tmp3);
          tmp2 = obj;
          const obj2 = callback(tmp[2]);
        }
      }
      tmp3 = closure_1;
    }
    return tmp2;
  }, items);
};