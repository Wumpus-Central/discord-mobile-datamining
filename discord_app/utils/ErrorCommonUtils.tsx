// === Module 14083: ErrorCommonUtils ===

// Module 14083 (ErrorCommonUtils)
import LastFewActions from "LastFewActions" /* 509 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

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