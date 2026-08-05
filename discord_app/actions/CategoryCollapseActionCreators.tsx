// discord_app/actions/CategoryCollapseActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "CATEGORY_COLLAPSE", id };
  obj.dispatch(obj);
};
export const categoryExpand = function categoryExpand(id) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "CATEGORY_EXPAND", id };
  obj.dispatch(obj);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj);
};