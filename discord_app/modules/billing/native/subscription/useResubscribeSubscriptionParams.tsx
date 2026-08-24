// discord_app/modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx");

export default function useResubscribeSubscriptionParams(arg0) {
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
        obj[0] = callback(closure_1_2[2]).v4();
        obj[1] = tmp;
        tmp2 = obj;
        const obj2 = callback(closure_1_2[2]);
      }
    }
    return tmp2;
  }, items);
};