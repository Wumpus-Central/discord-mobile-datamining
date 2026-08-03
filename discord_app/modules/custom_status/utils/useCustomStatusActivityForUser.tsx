// === Module 12072: useCustomStatusActivityForUser ===

// Module 12072 (useCustomStatusActivityForUser)
import fetchFingerprint from "fetchFingerprint";
import sortActivity from "sortActivity";
import { ActivityTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getId() === closure_0);
  const obj = _require(589);
  const customStatusActivity = _require(8415).useCustomStatusActivity();
  const obj2 = _require(8415);
  const items1 = [sortActivity];
  let stateFromStores1 = _require(589).useStateFromStores(items1, () => outer1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};