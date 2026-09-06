// discord_app/modules/analytics/updateDynamicSuperProperties.tsx
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import SessionHeartbeatScheduler from "../analytics_sessions/SessionHeartbeatScheduler.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
