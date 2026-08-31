// === Module 16823: updateDynamicSuperProperties ===

// Module 16823 (updateDynamicSuperProperties)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackHeartbeat from "trackHeartbeat" /* 7175 */;
import _modDef10899 from "module_10899" /* 10899 */;

let result = set.fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = trackHeartbeat;
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const superProperties = encodeProperties.getSuperProperties();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  let prop;
  if (superProperties != null) {
    prop = superProperties.client_heartbeat_session_id;
  }
  obj = {};
  if (uuid !== prop) {
    obj.client_heartbeat_session_id = uuid;
  }
  const obj2 = encodeProperties;
  const tmp = require;
  const state = _modDef10899.getState();
  let client_app_state;
  if (superProperties != null) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj.client_app_state = state;
  }
  if (Object.keys(obj).length > 0) {
    const result = encodeProperties.extendSuperProperties(obj);
    const tmpResult = encodeProperties;
  }
};