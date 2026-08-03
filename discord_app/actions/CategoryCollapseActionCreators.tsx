// === Module 10157: categoryCollapse ===

// Module 10157 (categoryCollapse)
const result = require("set").fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  let obj = importDefault(709);
  obj = { type: "CATEGORY_COLLAPSE", id };
  obj.dispatch(obj);
};
export const categoryExpand = function categoryExpand(id) {
  let obj = importDefault(709);
  obj = { type: "CATEGORY_EXPAND", id };
  obj.dispatch(obj);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  let obj = importDefault(709);
  obj = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  let obj = importDefault(709);
  obj = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj);
};