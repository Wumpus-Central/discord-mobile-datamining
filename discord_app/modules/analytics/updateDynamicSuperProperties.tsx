// discord_app/modules/analytics/updateDynamicSuperProperties.tsx
import { encodeProperties } from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { trackHeartbeat } from "../analytics_sessions/SessionHeartbeatScheduler.tsx";
import { DiscordAppState.native } from "../app_state/DiscordAppState.native.tsx";
let result = require("module_10403").fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

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
  const state = DiscordAppState.native.getState();
  let client_app_state;
  if (superProperties != null) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj.client_app_state = state;
  }
  if (Object.keys(obj).length > 0) {
    const result = tmp(503).extendSuperProperties(obj);
    const tmpResult = tmp(503);
  }
};