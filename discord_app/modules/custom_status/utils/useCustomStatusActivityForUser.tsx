// === Module 9449: useCustomStatusActivityForUser ===

// Module 9449 (useCustomStatusActivityForUser)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import sortActivity from "sortActivity" /* 4559 */;
import { ActivityTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getId() === closure_0);
  const obj = _require(589);
  const customStatusActivity = _require(7256).useCustomStatusActivity();
  const obj2 = _require(7256);
  const items1 = [closure_3];
  let stateFromStores1 = _require(589).useStateFromStores(items1, () => closure_1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};