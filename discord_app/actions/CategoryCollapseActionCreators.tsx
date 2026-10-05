// discord_app/actions/CategoryCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_COLLAPSE", id };
  obj.dispatch(obj2);
};
export const categoryExpand = function categoryExpand(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_EXPAND", id };
  obj.dispatch(obj2);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj2);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj2);
};
