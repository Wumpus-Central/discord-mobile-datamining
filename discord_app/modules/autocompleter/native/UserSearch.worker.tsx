// === Module 9867: UserSearchWorkerManager ===

// Module 9867 (UserSearchWorkerManager)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 2 */;

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const UserSearchWorkerManager = get_ActivityIndicator.NativeModules.UserSearchWorkerManager;
let closure_0 = UserSearchWorkerManager;
class UserSearchWorker extends NativeEventEmitter {
  constructor() {
    tmp = new tmp(closure_0, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    set = new Set();
    tmp.handlers = set;
    tmp.subscription = null;
    tmp.handleCallback = function handleCallback(arg0) {
      let handlers = arg0;
      handlers = handlers.handlers;
      const item = handlers.forEach((arg0) => arg0({ data: closure_0 }));
    };
    return tmp;
  }
}
const prototype = UserSearchWorker.prototype;
prototype["postMessage"] = function postMessage(arg0) {
  if (arg0) {
    const _JSON = JSON;
    closure_0.onmessage(JSON.stringify(arg0));
  } else {
    const _Error = Error;
    error = new Error("Invalid data");
    throw error;
  }
};
prototype["addEventListener"] = function addEventListener(arg0, arg1) {
  if ("message" === arg0) {
    const self = this;
    if (null == this.subscription) {
      self.subscription = self.addListener("ReturnResults", self.handleCallback);
    }
    const handlers = self.handlers;
    handlers.add(arg1);
  }
};
prototype["removeEventListener"] = function removeEventListener(arg0, arg1) {
  if ("message" === arg0) {
    const self = this;
    const handlers = this.handlers;
    handlers.delete(arg1);
    if (0 === this.handlers.size) {
      const subscription = self.subscription;
      if (subscription != null) {
        subscription.remove();
      }
      self.subscription = null;
    }
  }
};
prototype["terminate"] = function terminate() {
  closure_0.terminate();
};
tmp = new tmp(UserSearchWorkerManager, prototype, "terminate", UserSearchWorkerManager, UserSearchWorker);
// ThrowIfThisInitialized (0x7c)
closure_0 = tmp;
let set = new Set();
tmp.handlers = set;
tmp.subscription = null;
tmp.handleCallback = function handleCallback(arg0) {
  let handlers = arg0;
  handlers = handlers.handlers;
  const item = handlers.forEach((arg0) => arg0({ data: closure_0 }));
};
const result = set.fileFinishedImporting("modules/autocompleter/native/UserSearch.worker.tsx");

export default tmp;