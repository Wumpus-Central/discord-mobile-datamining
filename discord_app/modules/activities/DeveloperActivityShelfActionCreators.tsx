// === Module 12332: DeveloperActivityShelfActionCreators ===

// Module 12332 (DeveloperActivityShelfActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export function toggleUseActivityUrlOverride() {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
}
export function setActivityUrlOverride(activityUrlOverride) {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride });
}
export function markActivityUsed(id) {
  const obj2 = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: null };
  const obj = DispatcherDefault;
  obj2.timestamp = new Date().getTime();
  obj.dispatch(obj2);
}
export function updateFilter(filter) {
  DispatcherDefault.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter });
}