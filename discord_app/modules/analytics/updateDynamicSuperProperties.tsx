// === Module 17027: updateDynamicSuperProperties ===

// Module 17027 (updateDynamicSuperProperties)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 6876 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10691 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/analytics/updateDynamicSuperProperties.tsx");

export const updateDynamicSuperProperties = function updateDynamicSuperProperties() {
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  const superProperties = discord_common_AnalyticsUtils.getSuperProperties();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  let prop;
  if (superProperties != null) {
    prop = superProperties.client_heartbeat_session_id;
  }
  const obj3 = {};
  if (uuid !== prop) {
    obj3.client_heartbeat_session_id = uuid;
  }
  const state = DiscordAppStateDefault.getState();
  let client_app_state;
  if (superProperties != null) {
    client_app_state = superProperties.client_app_state;
  }
  if (state !== client_app_state) {
    obj3.client_app_state = state;
  }
  if (Object.keys(obj3).length > 0) {
    const result = discord_common_AnalyticsUtils.extendSuperProperties(obj3);
    const tmpResult = discord_common_AnalyticsUtils;
  }
};