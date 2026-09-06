// discord_app/actions/CategoryCollapseActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
