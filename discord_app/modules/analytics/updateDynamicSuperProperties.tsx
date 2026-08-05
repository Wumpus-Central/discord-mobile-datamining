// discord_app/modules/analytics/updateDynamicSuperProperties.tsx
let result = require("module_10384").fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = require("../analytics_sessions/SessionHeartbeatScheduler.tsx") /* trackHeartbeat */;
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const superProperties = require("../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */.getSuperProperties();
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
  const obj2 = require("../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx") /* encodeProperties */;
  const tmp = require;
  const state = require("../app_state/DiscordAppState.native.tsx").getState();
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