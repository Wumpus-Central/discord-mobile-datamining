// discord_app/modules/parent_tools/hooks/useOnNewPendingRequest.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default function useOnNewPendingRequest(current) {
  _require = current;
  const pendingRequestCount = require("useUserLinks").usePendingRequestCount();
  let obj = require("useUserLinks");
  const items = [ref2];
  stateFromStores = require("initialize").useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
  pendingRequestCount(stateFromStores[4])(() => {
    if (!ref2.getAreLinkedUsersProcessed()) {
      const linkedUsers = pendingRequestCount(stateFromStores[5]).fetchLinkedUsers();
      linkedUsers.catch(() => {});
      const obj = pendingRequestCount(stateFromStores[5]);
    }
  });
  noop = noop.useRef(current);
  const items1 = [current];
  const effect = noop.useEffect(() => {
    closure_3.current = current;
  }, items1);
  const obj2 = require("initialize");
  const items2 = [stateFromStores, pendingRequestCount];
  const effect1 = noop.useEffect(() => {
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
}
