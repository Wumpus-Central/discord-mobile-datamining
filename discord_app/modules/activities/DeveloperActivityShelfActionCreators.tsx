// === Module 11854: DeveloperActivityShelfActionCreators ===

// Module 11854 (DeveloperActivityShelfActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export const toggleUseActivityUrlOverride = function toggleUseActivityUrlOverride() {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
};
export const setActivityUrlOverride = function setActivityUrlOverride(activityUrlOverride) {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride });
};
export const markActivityUsed = function markActivityUsed(id) {
  const obj2 = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: null };
  const obj = DispatcherDefault;
  obj2.timestamp = new Date().getTime();
  obj.dispatch(obj2);
};
export const updateFilter = function updateFilter(filter) {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter });
};