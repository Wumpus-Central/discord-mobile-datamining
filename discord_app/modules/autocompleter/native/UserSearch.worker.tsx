import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
let UserSearchWorkerManager = get_ActivityIndicator.NativeModules.UserSearchWorkerManager;
class UserSearchWorker extends NativeEventEmitter {
  constructor() {
    tmp = new tmp(terminate, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    terminate = tmp;
    set = new Set();
    tmp.handlers = set;
    tmp.subscription = null;
    tmp.handleCallback = function handleCallback(arg0) {
      const handlers = arg0.handlers;
      const item = handlers.forEach((arg0) => arg0({ data: closure_0 }));
    };
    return tmp;
  }
}
const prototype = UserSearchWorker.prototype;
prototype["postMessage"] = function postMessage(arg0) {
  if (arg0) {
    const _JSON = JSON;
    UserSearchWorkerManager.onmessage(JSON.stringify(arg0));
  } else {
    const _Error = Error;
    const error = new Error("Invalid data");
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
  UserSearchWorkerManager.terminate();
};
tmp = new tmp(UserSearchWorkerManager, prototype, "terminate", UserSearchWorkerManager, UserSearchWorker);
// ThrowIfThisInitialized (0x7c)
UserSearchWorkerManager = tmp;
let set = new Set();
tmp.handlers = set;
tmp.subscription = null;
tmp.handleCallback = function handleCallback(arg0) {
  const handlers = arg0.handlers;
  const item = handlers.forEach((arg0) => arg0({ data: closure_0 }));
};
const result = set.fileFinishedImporting("modules/autocompleter/native/UserSearch.worker.tsx");

export default tmp;