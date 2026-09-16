// === Module 11700: CategoryCollapseActionCreators ===

// Module 11700 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(channel) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE", id: channel });
};
export const categoryExpand = function categoryExpand(channel) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND", id: channel });
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId });
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId });
};