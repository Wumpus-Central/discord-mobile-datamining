// discord_app/modules/gateway/ActionBatcher.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

class ActionBatcher {
  constructor(socket, arg1, shouldFlush) {
    let closure_0 = arg1;
    const obj = Object.create(new.target.prototype);
    obj.action = null;
    obj.socket = socket;
    obj.shouldFlush = shouldFlush;
    obj.add = (arg0) => {
      obj.action = closure_0(obj.action, arg0);
    };
    const batchers = ActionBatcher.batchers;
    batchers.push(obj);
    return obj;
  }
  static flush(arg0, arg1) {
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
  }
  flush() {
    const self = this;
    const action = this.action;
    this.action = null;
    if (null != action) {
      let obj = DispatcherDefault;
      const dispatchResult = obj.dispatch(action);
      dispatchResult.catch((error) => {
        const socket = self.socket;
        const obj = { error, action: action.type };
        return socket.resetSocketAndClearCacheOnError(obj);
      });
    }
  }
}
const prototype = ActionBatcher.prototype;
ActionBatcher.batchers = [];
const result = size.fileFinishedImporting("modules/gateway/ActionBatcher.tsx");

export default ActionBatcher;
