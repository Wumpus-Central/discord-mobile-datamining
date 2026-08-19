// discord_app/utils/ErrorCommonUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import add from "../../discord_common/js/packages/flux/LastFewActions.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("utils/ErrorCommonUtils.tsx");

export const getUpdatedOptions = function getUpdatedOptions(extra) {
  let obj = {};
  const merged = Object.assign(extra);
  extra = undefined;
  if (extra != null) {
    extra = extra.extra;
  }
  obj = {};
  const merged1 = Object.assign(extra);
  if (null != dispatcherDefault._currentDispatchActionType) {
    obj = { currentAction: null };
    obj[0] = dispatcherDefault._currentDispatchActionType;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const obj2 = {};
  const merged2 = Object.assign(obj1);
  const serializer = add;
  obj2.lastFewActions = serializer.serialize();
  const merged3 = Object.assign(obj2);
  obj.extra = obj;
  return obj;
};