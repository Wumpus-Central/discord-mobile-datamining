// discord_app/modules/billing/native/subscription/useCreateSubscriptionParams.tsx
import v1 from "../../../../../_runtime/01256_v1.js";
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
}
