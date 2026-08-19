// === Module 10750: categoryCollapse ===

// Module 10750 (categoryCollapse)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  const obj = { type: "CATEGORY_COLLAPSE", id };
  obj.dispatch(obj);
};
export const categoryExpand = function categoryExpand(id) {
  const obj = { type: "CATEGORY_EXPAND", id };
  obj.dispatch(obj);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  const obj = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  const obj = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj);
};