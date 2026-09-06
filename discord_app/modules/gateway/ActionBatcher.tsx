// discord_app/modules/gateway/ActionBatcher.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ActionBatcher;
class ActionBatcher {
  constructor(arg0, arg1, arg2) {
    closure_0 = require;
    obj = Object.create(new.target.prototype);
    closure_1 = obj;
    obj.action = null;
    obj.socket = global;
    obj.shouldFlush = importDefault;
    obj.add = (arg0) => {
      obj.action = closure_0(obj.action, arg0);
    };
    batchers = ActionBatcher.batchers;
    arr = batchers.push(obj);
    return obj;
  }
}
ActionBatcher["flush"] = function flush(arg0, arg1) {
  const iter = ActionBatcher.batchers[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    let tmp2 = null != nextResult.action;
    if (tmp2) {
      let shouldFlushResult = null == arg0;
      if (!shouldFlushResult) {
        shouldFlushResult = obj.shouldFlush(arg0, arg1);
      }
      tmp2 = shouldFlushResult;
    }
    if (tmp2) {
      let flushResult = obj.flush();
    }
    continue;
  }
};
ActionBatcher.prototype["flush"] = function flush() {
  const self = this;
  const action = this.action;
  this.action = null;
  if (null != action) {
    DispatcherDefault.dispatch(action).catch((error) => {
      const socket = self.socket;
      return socket.resetSocketAndClearCacheOnError({ error, action: action.type });
    });
    const dispatchResult = DispatcherDefault.dispatch(action);
  }
};
ActionBatcher.batchers = [];
const result = size.fileFinishedImporting("modules/gateway/ActionBatcher.tsx");

export default ActionBatcher;
