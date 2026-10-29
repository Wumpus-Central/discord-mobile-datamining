// === Module 11346: CategoryCollapseActionCreators ===

// Module 11346 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export function categoryCollapse(id) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE", id });
}
export function categoryExpand(id) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND", id });
}
export function categoryCollapseAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId });
}
export function categoryExpandAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId });
}