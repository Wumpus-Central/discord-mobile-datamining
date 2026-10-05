// discord_app/modules/autocompleter/native/UserSearch.worker.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import size from "../../../../_runtime/metro/00002__.js";

function handleCallback(arg0) {
  handlers = arg0;
  handlers = handlers.handlers;
  const item = handlers.forEach((fn) => {
    const obj = { data };
    return fn(obj);
  });
}
const NativeEventEmitter = react_native.NativeEventEmitter;
const UserSearchWorkerManager = react_native.NativeModules.UserSearchWorkerManager;
class UserSearchWorker extends NativeEventEmitter {
  constructor() {
    const tmp2 = new tmp(UserSearchWorkerManager, new.target, tmp);
    let closure_0 = tmp2;
    tmp2.handlers = new Set();
    tmp2.subscription = null;
    tmp2.handleCallback = handleCallback;
    new Set();
    return tmp2;
  }
  postMessage(arg0) {
    if (arg0) {
      const _JSON = JSON;
      UserSearchWorkerManager.onmessage(JSON.stringify(arg0));
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid data");
      throw error;
    }
  }
  addEventListener(arg0, arg1) {
    if ("message" === arg0) {
      const self = this;
      if (null == this.subscription) {
        self.subscription = self.addListener("ReturnResults", self.handleCallback);
      }
      const handlers = self.handlers;
      handlers.add(arg1);
    }
  }
  removeEventListener(arg0, arg1) {
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
  }
  terminate() {
    UserSearchWorkerManager.terminate();
  }
}
let tmp2 = new tmp(
  UserSearchWorkerManager,
  UserSearchWorker.prototype,
  "terminate",
  UserSearchWorkerManager,
  UserSearchWorker,
);
let closure_0 = tmp2;
const set = new Set();
tmp2.handlers = set;
tmp2.subscription = null;
tmp2.handleCallback = handleCallback;
const result = size.fileFinishedImporting("modules/autocompleter/native/UserSearch.worker.tsx");

export default tmp2;
