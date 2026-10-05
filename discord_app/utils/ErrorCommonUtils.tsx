// discord_app/utils/ErrorCommonUtils.tsx
import LastFewActions from "../../discord_common/js/packages/flux/LastFewActions.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/ErrorCommonUtils.tsx");

export const getUpdatedOptions = function getUpdatedOptions(extra) {
  let obj2;
  let obj4;
  let serializer;
  const obj = { extra: obj2 };
  const merged = Object.assign(extra);
  extra = undefined;
  if (extra != null) {
    extra = extra.extra;
  }
  obj2 = {};
  const merged1 = Object.assign(extra);
  if (null != DispatcherDefault._currentDispatchActionType) {
    obj4 = { currentAction: DispatcherDefault._currentDispatchActionType };
    const obj3 = { currentAction: DispatcherDefault._currentDispatchActionType };
  } else {
    obj4 = {};
  }
  const obj5 = { lastFewActions: serializer.serialize() };
  const merged2 = Object.assign(obj4);
  serializer = LastFewActions;
  const merged3 = Object.assign(obj5);
  return obj;
};
