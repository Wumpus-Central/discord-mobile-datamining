// discord_app/actions/CategoryCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
