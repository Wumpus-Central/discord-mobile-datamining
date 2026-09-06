// === Module 17281: updateDynamicSuperProperties ===

// Module 17281 (updateDynamicSuperProperties)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7461 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11300 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  let obj = SessionHeartbeatScheduler;
  const activeSessionUnsafe = obj.getActiveSessionUnsafe();
  const superProperties = discord_common_AnalyticsUtils.getSuperProperties();
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
  const state = DiscordAppStateDefault.getState();
  let client_app_state;
  if (superProperties != null) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj.client_app_state = state;
  }
  if (Object.keys(obj).length > 0) {
    const result = discord_common_AnalyticsUtils.extendSuperProperties(obj);
    const tmpResult = discord_common_AnalyticsUtils;
  }
};