// === Module 9549: DeveloperActivityShelfActionCreators ===

// Module 9549 (DeveloperActivityShelfActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export const toggleUseActivityUrlOverride = function toggleUseActivityUrlOverride() {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
};
export const setActivityUrlOverride = function setActivityUrlOverride(activityUrlOverride) {
  const obj = { type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride };
  obj.dispatch(obj);
};
export const markActivityUsed = function markActivityUsed(id) {
  const obj = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: new Date().getTime() };
  obj.dispatch(obj);
};
export const updateFilter = function updateFilter(filter) {
  const obj = { type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter };
  obj.dispatch(obj);
};