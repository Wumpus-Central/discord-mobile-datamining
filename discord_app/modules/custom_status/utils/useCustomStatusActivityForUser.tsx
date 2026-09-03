// === Module 9072: useCustomStatusActivityForUser ===

// Module 9072 (useCustomStatusActivityForUser)
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "sortActivity" /* 4569 */;
import { ActivityTypes } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_2.getId() === closure_0);
  const obj = _require(586);
  const customStatusActivity = _require(8548).useCustomStatusActivity();
  const obj2 = _require(8548);
  const items1 = [closure_3];
  let stateFromStores1 = _require(586).useStateFromStores(items1, () => closure_1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};