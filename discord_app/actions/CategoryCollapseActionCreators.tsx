// discord_app/actions/CategoryCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
