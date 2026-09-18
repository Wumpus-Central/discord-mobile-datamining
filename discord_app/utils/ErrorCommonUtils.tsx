// === Module 14291: ErrorCommonUtils ===

// Module 14291 (ErrorCommonUtils)
import LastFewActions from "LastFewActions" /* 509 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

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