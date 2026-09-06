// === Module 11150: useCustomStatusActivityForUser ===

// Module 11150 (useCustomStatusActivityForUser)
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "sortActivity" /* 4600 */;
import { ActivityTypes } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(504).useStateFromStores(items, () => closure_1_2.getId() === closure_0);
  const obj = _require(504);
  const customStatusActivity = _require(11110).useCustomStatusActivity();
  const obj2 = _require(11110);
  const items1 = [closure_3];
  let stateFromStores1 = _require(504).useStateFromStores(items1, () => closure_1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};