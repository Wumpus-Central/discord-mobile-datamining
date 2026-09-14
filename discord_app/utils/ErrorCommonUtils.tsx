// discord_app/utils/ErrorCommonUtils.tsx
import LastFewActions from "../../discord_common/js/packages/flux/LastFewActions.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/ErrorCommonUtils.tsx");

export const getUpdatedOptions = function getUpdatedOptions(extra) {
  const obj = {};
  const merged = Object.assign(extra);
  extra = undefined;
  if (extra != null) {
    extra = extra.extra;
  }
  const merged1 = Object.assign(extra);
  if (null != DispatcherDefault._currentDispatchActionType) {
    const obj3 = { currentAction: DispatcherDefault._currentDispatchActionType };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const obj5 = {};
  const merged2 = Object.assign(obj4);
  const serializer = LastFewActions;
  obj5.lastFewActions = serializer.serialize();
  const merged3 = Object.assign(obj5);
  obj.extra = {};
  return obj;
};
