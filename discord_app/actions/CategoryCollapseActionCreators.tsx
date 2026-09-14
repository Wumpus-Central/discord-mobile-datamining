// discord_app/actions/CategoryCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
