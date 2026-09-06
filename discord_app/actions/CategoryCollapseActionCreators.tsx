// === Module 11558: CategoryCollapseActionCreators ===

// Module 11558 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(channel) {
  const obj = { type: "CATEGORY_COLLAPSE", id: channel };
  obj.dispatch(obj);
};
export const categoryExpand = function categoryExpand(channel) {
  const obj = { type: "CATEGORY_EXPAND", id: channel };
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