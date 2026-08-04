// discord_app/modules/parent_tools/hooks/useOnNewPendingRequest.tsx
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("useUserIdsForLinkStatus").fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(stateFromStores) {
  const _require = stateFromStores;
  const pendingRequestCount = _require(stateFromStores[2]).usePendingRequestCount();
  let obj = _require(stateFromStores[2]);
  const items = [freshTeenActivityWithMap];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
  pendingRequestCount(stateFromStores[4])(() => {
    if (!ref2.getAreLinkedUsersProcessed()) {
      const linkedUsers = pendingRequestCount(stateFromStores[5]).fetchLinkedUsers();
      linkedUsers.catch(() => {

      });
      const obj = pendingRequestCount(stateFromStores[5]);
    }
  });
  React = React.useRef(stateFromStores);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    noop.current = closure_0;
  }, items1);
  freshTeenActivityWithMap = React.useRef(null);
  const items2 = [stateFromStores, pendingRequestCount];
  const effect1 = React.useEffect(() => {
    if (stateFromStores) {
      if (null != ref2.current) {
        tmp.current = pendingRequestCount;
        if (pendingRequestCount > tmp.current) {
          ref.current();
        }
      } else {
        tmp.current = pendingRequestCount;
      }
    }
  }, items2);
};