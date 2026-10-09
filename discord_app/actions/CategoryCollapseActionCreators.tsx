// === Module 10673: CategoryCollapseActionCreators ===

// Module 10673 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE", id });
};
export const categoryExpand = function categoryExpand(id) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND", id });
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId });
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId });
};