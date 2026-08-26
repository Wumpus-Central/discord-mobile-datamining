// === Module 11134: toggleUseActivityUrlOverride ===

// Module 11134 (toggleUseActivityUrlOverride)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export const toggleUseActivityUrlOverride = function toggleUseActivityUrlOverride() {
  dispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
};
export const setActivityUrlOverride = function setActivityUrlOverride(activityUrlOverride) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride };
  obj.dispatch(obj);
};
export const markActivityUsed = function markActivityUsed(id) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: new Date().getTime() };
  obj.dispatch(obj);
};
export const updateFilter = function updateFilter(filter) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter };
  obj.dispatch(obj);
};