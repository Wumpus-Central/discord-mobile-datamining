// === Module 11585: CategoryCollapseActionCreators ===

// Module 11585 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export function categoryCollapse(channel) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE", id: channel });
}
export function categoryExpand(channel) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND", id: channel });
}
export function categoryCollapseAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId });
}
export function categoryExpandAll(guildId) {
  DispatcherDefault.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId });
}