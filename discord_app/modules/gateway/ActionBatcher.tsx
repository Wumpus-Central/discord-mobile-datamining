// === Module 13203: flush ===

// Module 13203 (flush)
import set from "set" /* 2 */;

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
      obj.action = callback(obj.action, arg0);
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
        let tmp4 = nextResult;
        shouldFlushResult = obj.shouldFlush(arg0, arg1);
      }
      tmp2 = shouldFlushResult;
    }
    if (tmp2) {
      let tmp5 = nextResult;
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
    const obj = action(self[0]);
    action(self[0]).dispatch(action).catch((error) => {
      const socket = self.socket;
      return socket.resetSocketAndClearCacheOnError({ error, action: action.type });
    });
    const dispatchResult = action(self[0]).dispatch(action);
  }
};
ActionBatcher.batchers = [];
const result = set.fileFinishedImporting("modules/gateway/ActionBatcher.tsx");

export default ActionBatcher;