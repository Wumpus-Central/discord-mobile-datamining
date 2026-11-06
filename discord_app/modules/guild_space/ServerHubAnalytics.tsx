// === Module 19986: ServerHubAnalytics ===

// Module 19986 (ServerHubAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_space/ServerHubAnalytics.tsx");

export const ServerHubSettingType = { ALL_SYSTEM_MESSAGES: "all_system_messages", LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages", WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages", MUSIC_SYSTEM_MESSAGES: "music_system_messages" };
export const ServerHubVisitSource = { CHANNEL_LIST: "channel_list", COACHMARK: "coachmark", WINNER_BADGE: "winner_badge", LEADER_BADGE: "leader_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message", MUSIC_SYSTEM_MESSAGE: "music_system_message" };
export const ServerHubEditCancelReason = { USER: "user", PERMISSION_LOST: "permission_lost" };
export function trackServerHubToggleSetting(id, ALL_SYSTEM_MESSAGES, value) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, { guild_id: id, type: ALL_SYSTEM_MESSAGES, value });
}
export function trackServerHubVisit(guild_id, source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_VISIT, { guild_id, source });
}
export function trackServerHubWidgetEditClicked(guild_id, widget_type, widget_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, widget_type };
  if (obj3.isDraftWidgetId(widget_id)) {
    let obj4 = {};
  } else {
    obj4 = { widget_id };
  }
  const merged = Object.assign(obj4);
  obj.track(AnalyticEvents.SERVER_HUB_WIDGET_EDIT_CLICKED, obj2);
}
export function trackServerHubEditStarted(guild_id, edit_session_id, arg2) {
  ({ widgetCount, isNewHub } = arg2);
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_EDIT_STARTED, { guild_id, edit_session_id, widget_count: widgetCount, is_new_hub: isNewHub });
}
export function trackServerHubEditWidgetAdded(guild_id, edit_session_id, widget) {
  widget = widget.widget;
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_EDIT_WIDGET_ADDED, { guild_id, edit_session_id, widget_type: widget.type, column_index: widget.position.column, order_index: widget.position.order, widget_count: widget.widgetCount });
}
export function trackServerHubEditWidgetMoved(guild_id, edit_session_id, arg2) {
  ({ widget, from, to } = arg2);
  const id = widget.id;
  const obj = AnalyticsUtilsDefault;
  const obj4 = { guild_id, edit_session_id, widget_type: widget.type };
  if (obj3.isDraftWidgetId(id)) {
    let obj6 = { is_new_widget: true };
  } else {
    obj6 = { is_new_widget: false, widget_id: id };
  }
  const merged = Object.assign(obj6);
  ({ column: obj2.from_column_index, order: obj2.from_order_index } = from);
  ({ column: obj2.to_column_index, order: obj2.to_order_index } = to);
  obj.track(AnalyticEvents.SERVER_HUB_EDIT_WIDGET_MOVED, obj4);
}
export function trackServerHubEditWidgetDeleted(guild_id, edit_session_id, widget) {
  widget = widget.widget;
  const obj2 = { guild_id, edit_session_id, widget_type: widget.type };
  const id = widget.id;
  const obj = AnalyticsUtilsDefault;
  if (obj3.isDraftWidgetId(id)) {
    let obj4 = { is_new_widget: true };
  } else {
    obj4 = { is_new_widget: false, widget_id: id };
  }
  const merged = Object.assign(obj4);
  obj2.column_index = widget.position.column;
  obj2.order_index = widget.position.order;
  obj2.widget_count = widget.widgetCount;
  obj.track(AnalyticEvents.SERVER_HUB_EDIT_WIDGET_DELETED, obj2);
}
export function trackServerHubEditSaved(guild_id, edit_session_id, arg2) {
  ({ widgetCount, addedWidgetCount, deletedWidgetCount, bannerChanged } = arg2);
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_EDIT_SAVED, { guild_id, edit_session_id, widget_count: widgetCount, added_widget_count: addedWidgetCount, deleted_widget_count: deletedWidgetCount, banner_changed: bannerChanged });
}
export function trackServerHubEditCanceled(guild_id, edit_session_id, arg2) {
  ({ reason, hadChanges, widgetCount } = arg2);
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_EDIT_CANCELED, { guild_id, edit_session_id, reason, had_changes: hadChanges, widget_count: widgetCount });
}