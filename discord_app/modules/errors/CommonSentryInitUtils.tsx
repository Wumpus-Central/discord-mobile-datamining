// === Module 13276: IGNORE_ANALYTICS_BREADCRUMB_EVENTS ===

// Module 13276 (IGNORE_ANALYTICS_BREADCRUMB_EVENTS)
const result = require("set").fileFinishedImporting("modules/errors/CommonSentryInitUtils.tsx");

export const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = ["notification_clicked", "experiment_user_triggered", "experiment_dm_triggered", "experiment_guild_triggered", "device_event", "react_soft_exception", "network_capabilities_changed", "foreground_service", "app_lifecycle", "ui_lifecycle", "touch_event", "http_request", "websocket_message_received"];
export const filterThrottle = function filterThrottle(arg0) {
  let closure_0;
  let closure_1;
  ({ maxBudgetMinute: closure_0, maxBudgetHour: closure_1 } = arg0);
  let closure_2 = { minute: { slot: 0, budgetUsed: 0 }, hour: { slot: 0, budgetUsed: 0 } };
  return () => {
    const timestamp = Date.now();
    const rounded = Math.round(timestamp / 1000 / 60);
    const rounded1 = Math.round(timestamp / 1000 / 60 / 60);
    if (minute.minute.slot !== rounded) {
      tmp4.minute.slot = rounded;
      tmp4.minute.budgetUsed = 0;
    }
    if (minute.hour.slot !== rounded1) {
      tmp4.hour.slot = rounded1;
      tmp4.hour.budgetUsed = 0;
    }
    let flag = tmp4.minute.budgetUsed < closure_0;
    if (flag) {
      minute = tmp4.minute;
      minute.budgetUsed = minute.budgetUsed + 1;
      flag = tmp4.hour.budgetUsed < closure_1;
    }
    if (flag) {
      const hour = tmp4.hour;
      hour.budgetUsed = hour.budgetUsed + 1;
      flag = true;
    }
    return flag;
  };
};