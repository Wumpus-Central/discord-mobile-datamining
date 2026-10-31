// === Module 11410: useCustomStatusActivityForUser ===

// Module 11410 (useCustomStatusActivityForUser)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5761 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  _require = arg0;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const obj = require("initialize");
  const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
  const obj2 = require("userSettingToActivity");
  const items1 = [PresenceStore];
  let stateFromStores1 = require("initialize").useStateFromStores(items1, () => PresenceStore.findActivity(closure_0, (type) => type.type === closure_1_0(closure_1_1[4]).ActivityTypes.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};