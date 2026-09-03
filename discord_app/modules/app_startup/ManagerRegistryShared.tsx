// === Module 17734: populateMap ===

// Module 17734 (populateMap)
import dispatcherDefault from "dispatcher" /* 706 */;
import set from "set" /* 2 */;

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
      let tmp11 = item10030;
      tmp10[tmp9] = [];
    }
    let tmp12 = item10030;
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
      let tmp8 = c3;
      if (!c3) {
        let tmp9 = item10018;
        if (obj.neverLoadBeforeConnectionOpen) {
          let tmp10 = item10018;
          let arr = items.push(obj);
        }
        continue;
      }
      let tmp12 = item10018;
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
let set = new Set(["CHANNEL_SELECT", "CHANNEL_PRELOAD", "MESSAGE_CREATE"]);
let closure_2 = {};
let c3 = false;
const result = set.fileFinishedImporting("modules/app_startup/ManagerRegistryShared.tsx");

export const initialize = function initialize(obj) {
  for (const key10004 in arg0) {
    let tmp2 = key10004;
    let tmp3 = arg0[key10004];
    let actions = tmp3.actions;
    let tmp4 = populateMap;
    let tmp5 = populateMap(tmp3);
    continue;
  }
  dispatcherDefault.addInterceptor(handleAction);
};