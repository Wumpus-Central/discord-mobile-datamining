// discord_app/modules/analytics/updateDynamicSuperProperties.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import encodeProperties from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import trackHeartbeat from "../analytics_sessions/SessionHeartbeatScheduler.tsx";
import _modDef10501 from "../app_state/DiscordAppState.native.tsx";

let result = obj132.fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

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
  const state = _modDef10501.getState();
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