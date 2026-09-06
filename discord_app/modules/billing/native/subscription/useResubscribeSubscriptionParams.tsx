// discord_app/modules/billing/native/subscription/useResubscribeSubscriptionParams.tsx
import v1 from "../../../../../_runtime/01256_v1.js";
import useToggleOnIAPSuccessDefault from "useToggleOnIAPSuccess.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
}
