// discord_app/modules/app_startup/ManagerRegistryShared.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function populateMap(actions) {
  actions = actions.actions;
  if (actions == null) {
    actions = [];
  }
  let obj = actions;
  if (tmp) {
    let tmp2 = actions;
    if (!actions.includes("POST_CONNECTION_OPEN")) {
      const items = [];
      items[HermesBuiltin.arraySpread(actions, 0)] = "POST_CONNECTION_OPEN";
      tmp2 = items;
    }
    obj = tmp2;
  }
  let tmp5 = obj;
  if (actions.loadRightBeforeConnectionOpen) {
    let tmp6 = obj;
    if (!obj.includes("CONNECTION_OPEN")) {
      const items1 = [];
      items1[HermesBuiltin.arraySpread(obj, 0)] = "CONNECTION_OPEN";
      tmp6 = items1;
    }
    tmp5 = tmp6;
  }
  for (const item10030 of tmp5) {
    let tmp9 = item10030;
    let tmp10 = closure_2;
    if (!(item10030 in closure_2)) {
      tmp10[tmp9] = [];
    }
    let arr4 = tmp10[tmp9];
    let arr = arr4.push(arg0);
    continue;
  }
}
function handleAction(type) {
  let tmp3 = "CONNECTION_OPEN" !== type.type;
  if (tmp3) {
    tmp3 = "OVERLAY_INITIALIZE" !== type.type;
  }
  if (!tmp3) {
    c3 = true;
  }
  if (type.type in closure_2) {
    const items = [];
    for (const item10018 of tmp5) {
      let obj = item10018;
      if (!c3) {
        if (obj.neverLoadBeforeConnectionOpen) {
          let arr = items.push(obj);
        }
        continue;
      }
      let inlineRequireResult = obj.inlineRequire();
      let initializeResult = inlineRequireResult.initialize();
    }
    if (items.length > 0) {
      closure_2[type.type] = items;
    } else {
      type = type.type;
      delete tmp2[tmp];
    }
  }
  return false;
}
new Set(["CHANNEL_SELECT", "CHANNEL_PRELOAD", "MESSAGE_CREATE"]);
let closure_2 = {};
let c3 = false;
const result = size.fileFinishedImporting("modules/app_startup/ManagerRegistryShared.tsx");

export const initialize = function initialize(obj) {
  for (const key10004 in arg0) {
    let tmp3 = arg0[key10004];
    let actions = tmp3.actions;
    let tmp5 = populateMap(tmp3);
    continue;
  }
  DispatcherDefault.addInterceptor(handleAction);
};
