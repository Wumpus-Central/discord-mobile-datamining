// discord_app/utils/ErrorCommonUtils.tsx
import LastFewActions from "../../discord_common/js/packages/flux/LastFewActions.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/ErrorCommonUtils.tsx");

export const getUpdatedOptions = function getUpdatedOptions(extra) {
  let obj = {};
  const merged = Object.assign(extra);
  extra = undefined;
  if (extra != null) {
    extra = extra.extra;
  }
  obj = {};
  const merged1 = Object.assign(extra);
  if (null != DispatcherDefault._currentDispatchActionType) {
    obj = { currentAction: DispatcherDefault._currentDispatchActionType };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const obj2 = {};
  const merged2 = Object.assign(obj1);
  const serializer = LastFewActions;
  obj2.lastFewActions = serializer.serialize();
  const merged3 = Object.assign(obj2);
  obj.extra = obj;
  return obj;
};
