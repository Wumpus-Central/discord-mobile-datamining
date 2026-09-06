// discord_app/modules/autocompleter/native/UserSearch.worker.tsx
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const UserSearchWorkerManager = get_ActivityIndicator.NativeModules.UserSearchWorkerManager;
class UserSearchWorker extends NativeEventEmitter {
  constructor() {
    tmp = new tmp(UserSearchWorkerManager, new.target, tmp);
    closure_0 = tmp;
    set = new Set();
    tmp.handlers = set;
    tmp.subscription = null;
    tmp.handleCallback = function handleCallback(data) {
      handlers = data;
      handlers = handlers.handlers;
      const item = handlers.forEach((fn) => fn({ data }));
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
let closure_129_0 = tmp;
tmp.handlers = new Set();
tmp.subscription = null;
tmp.handleCallback = function handleCallback(data) {
  handlers = data;
  handlers = handlers.handlers;
  const item = handlers.forEach((fn) => fn({ data }));
};
const result = size.fileFinishedImporting("modules/autocompleter/native/UserSearch.worker.tsx");

export default tmp;
