// === Module 14237: useOnNewPendingRequest ===

// Module 14237 (useOnNewPendingRequest)
import noop from "noop" /* 19 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(stateFromStores) {
  const _require = stateFromStores;
  const pendingRequestCount = _require(stateFromStores[2]).usePendingRequestCount();
  let obj = _require(stateFromStores[2]);
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
  pendingRequestCount(stateFromStores[4])(() => {
    if (!ref2.getAreLinkedUsersProcessed()) {
      const linkedUsers = pendingRequestCount(stateFromStores[5]).fetchLinkedUsers();
      linkedUsers.catch((error) => {

      });
      const obj = pendingRequestCount(stateFromStores[5]);
    }
  });
  React = React.useRef(stateFromStores);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    closure_3.current = closure_0;
  }, items1);
  closure_4 = React.useRef(null);
  const items2 = [stateFromStores, pendingRequestCount];
  const effect1 = React.useEffect(() => {
    if (stateFromStores) {
      if (null != ref2.current) {
        ref2.current = pendingRequestCount;
        if (pendingRequestCount > ref2.current) {
          ref.current();
        }
      } else {
        ref2.current = pendingRequestCount;
      }
    }
  }, items2);
};