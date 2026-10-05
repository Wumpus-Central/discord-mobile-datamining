// discord_app/modules/app_startup/ManagerRegistryShared.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function populateMap(actions) {
  actions = actions.actions;
  if (actions == null) {
    actions = [];
  }
  let obj = actions;
  const tmp2 = actions.hasStoreChangeListeners || actions.loadAfterConnectionOpen;
  if (tmp2) {
    let tmp3 = actions;
    if (!actions.includes("POST_CONNECTION_OPEN")) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, actions, 0)] = "POST_CONNECTION_OPEN";
      tmp3 = items;
    }
    obj = tmp3;
  }
  let tmp6 = obj;
  if (actions.loadRightBeforeConnectionOpen) {
    let tmp7 = obj;
    if (!obj.includes("CONNECTION_OPEN")) {
      const items1 = [];
      items1[HermesBuiltin.arraySpread(items1, obj, 0)] = "CONNECTION_OPEN";
      tmp7 = items1;
    }
    tmp6 = tmp7;
  }
  for (const item10030 of tmp6) {
    if (!(item10030 in closure_2)) {
      closure_2[item10030] = [];
    }
    let arr4 = closure_2[item10030];
    let arr = arr4.push(actions);
    continue;
  }
}
function handleAction(type) {
  const tmp = "CONNECTION_OPEN" !== type.type && "OVERLAY_INITIALIZE" !== type.type;
  if (!tmp) {
    c3 = true;
  }
  if (type.type in closure_2) {
    const items = [];
    for (const item10018 of tmp3) {
      let tmp6 = c3;
      if (!tmp6) {
        if (item10018.neverLoadBeforeConnectionOpen) {
          let arr = items.push(item10018);
        }
        continue;
      }
      let inlineRequireResult = item10018.inlineRequire();
      let initializeResult = inlineRequireResult.initialize();
    }
    if (items.length > 0) {
      closure_2[type.type] = items;
    } else {
      delete closure_2[type.type];
    }
  }
  return false;
}
new Set(["CHANNEL_SELECT", "CHANNEL_PRELOAD", "MESSAGE_CREATE"]);
let closure_2 = {};
let c3 = false;
const result = size.fileFinishedImporting("modules/app_startup/ManagerRegistryShared.tsx");

export const initialize = function initialize(actions) {
  for (const key10004 in actions) {
    let tmp3 = actions[key10004];
    actions = tmp3.actions;
    let tmp5 = populateMap(tmp3);
    continue;
  }
  const obj = DispatcherDefault;
  obj.addInterceptor(handleAction);
};
