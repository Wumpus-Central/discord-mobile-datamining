// discord_app/modules/activities/DeveloperActivityShelfActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/activities/DeveloperActivityShelfActionCreators.tsx");

export const toggleUseActivityUrlOverride = function toggleUseActivityUrlOverride() {
  importDefault(709).dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
};
export const setActivityUrlOverride = function setActivityUrlOverride(activityUrlOverride) {
  let obj = importDefault(709);
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride };
  obj.dispatch(obj);
};
export const markActivityUsed = function markActivityUsed(id) {
  let obj = importDefault(709);
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED", applicationId: id, timestamp: null };
  obj[2] = new Date().getTime();
  obj.dispatch(obj);
};
export const updateFilter = function updateFilter(filter) {
  let obj = importDefault(709);
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter };
  obj.dispatch(obj);
};