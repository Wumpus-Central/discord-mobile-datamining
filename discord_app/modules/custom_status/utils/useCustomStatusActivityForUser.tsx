// === Module 11150: useCustomStatusActivityForUser ===

// Module 11150 (useCustomStatusActivityForUser)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4600 */;

const require = fn;
const ActivityTypes = fn(1074).ActivityTypes;
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
  let stateFromStores1 = require("initialize").useStateFromStores(items1, () => PresenceStore.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};