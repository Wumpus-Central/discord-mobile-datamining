// discord_app/utils/ErrorCommonUtils.tsx
const result = require("set").fileFinishedImporting("utils/ErrorCommonUtils.tsx");

export const getUpdatedOptions = function getUpdatedOptions(extra) {
  let obj = {};
  const merged = Object.assign(extra);
  extra = undefined;
  if (extra != null) {
    extra = extra.extra;
  }
  obj = {};
  const merged1 = Object.assign(extra);
  if (null != require("../Dispatcher.tsx")._currentDispatchActionType) {
    obj = { currentAction: null };
    obj[0] = require("../Dispatcher.tsx")._currentDispatchActionType;
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const obj2 = {};
  const merged2 = Object.assign(obj1);
  obj2.lastFewActions = require("../../discord_common/js/packages/flux/LastFewActions.tsx") /* add */.serialize();
  const merged3 = Object.assign(obj2);
  obj.extra = obj;
  return obj;
};