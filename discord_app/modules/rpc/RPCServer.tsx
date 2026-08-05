// discord_app/modules/rpc/RPCServer.tsx
import prototype from "prototype";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { apply } from "../../../_runtime/00012_apply.js";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { transformUser } from "helpers/transformUser.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
({ AnalyticEvents: c4, RPCCloseCodes: c5, RPCCommands: closure_6, RPCErrors: error, RPCEvents: metroImportAll } = ME);
const RPC_STORE_WAIT = "RPC_STORE_WAIT";
let closure_10 = [];
let result = require("ME").fileFinishedImporting("modules/rpc/RPCServer.tsx");
class RPCServer {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = function getCurrentUser() {
      return null;
    };
    obj[1] = function onConnect() {

    };
    obj[2] = function onDisconnect() {

    };
    obj[3] = {};
    obj[4] = {};
    set = new Set();
    obj[5] = set;
    obj[6] = [];
    set1 = new Set();
    obj[7] = set1;
    obj.getJoi = global;
    return obj;
  }
}
const prototype = RPCServer.prototype;
prototype["registerTransport"] = function registerTransport(item10013) {
  const self = this;
  item10013.on("connect", (arg0) => self.handleConnect(arg0));
  item10013.on("request", (arg0, arg1) => self.handleRequest(arg0, arg1));
  item10013.on("disconnect", (arg0, arg1) => self.handleDisconnect(arg0, arg1));
};
prototype["handleConnect"] = function handleConnect(v) {
  const self = this;
  const sockets = this.sockets;
  sockets.add(v);
  this.onConnect(v);
  obj = { v: v.version, config: obj };
  obj = { cdn_host: window.GLOBAL_ENV.CDN_HOST, api_endpoint: window.GLOBAL_ENV.API_ENDPOINT, environment: "production" };
  if (v.transport === TransportTypes.IPC) {
    const currentUser = self.getCurrentUser();
    if (null == currentUser) {
      v.close(constants2.CLOSE_NORMAL, "User logged out");
    } else {
      obj.user = transformUser(currentUser);
    }
  }
  self.dispatch(v, null, constants3.DISPATCH, constants5.READY, obj);
};
prototype["handleDisconnect"] = function handleDisconnect(abortController) {
  abortController = abortController.abortController;
  abortController.abort("DISCONNECTED");
  this.removeSubscriptions(abortController);
  const sockets = this.sockets;
  sockets.delete(abortController);
  this.onDisconnect(abortController, arg1);
};
prototype["handleRequest"] = function handleRequest(arg0, arg1) {
  let self = this;
  let closure_1 = arg0;
  let prototype = arg1;
  self = this;
  const promise = new Promise((arg0) => {
    if (null != lib.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = self(authorization[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (self(authorization[6])(authorization.authorization.scopes, tmp25.scope)) {
          obj = { command: null, scope: null, application_id: null, socket_scope: null };
          obj[0] = cmd;
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj[1] = scope;
          obj[2] = tmp28.application.id;
          obj[3] = tmp28.authorization.scopes.toString();
          tmp29(tmp30[7]).track(outer1_4.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new self(authorization[5])({ errorCode: outer1_7.INVALID_PAYLOAD }, "Payload requires a nonce");
  });
  const nextPromise = new Promise((arg0) => {
    if (null != lib.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = self(authorization[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (self(authorization[6])(authorization.authorization.scopes, tmp25.scope)) {
          obj = { command: null, scope: null, application_id: null, socket_scope: null };
          obj[0] = cmd;
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj[1] = scope;
          obj[2] = tmp28.application.id;
          obj[3] = tmp28.authorization.scopes.toString();
          tmp29(tmp30[7]).track(outer1_4.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new self(authorization[5])({ errorCode: outer1_7.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((arg0) => {
    let closure_0 = arg0;
    closure_0 = undefined;
    closure_0 = lib((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c4 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp5;
                let prototype = tmp2;
                prototype = undefined;
                if (null != closure_0.validation) {
                  c4 = 1;
                  c5 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = closure_0.getJoi();
                  return obj1;
                } else {
                  tmp29(closure_0);
                  c5 = 3;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              prototype = arg1;
              self(table[8])(null != closure_0.validation, "command.validation must not be null");
              const args = outer2_2.args;
              prototype.validate(args, closure_0.validation(prototype), { convert: false }, (message) => {
                if (null == message) {
                  callback(callback);
                } else {
                  const obj = { errorCode: null };
                  obj[0] = outer3_7.INVALID_PAYLOAD;
                  const tmp8 = new callback(outer3_1[5])(obj, message.message);
                  callback2(tmp8);
                }
              });
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp9) {
            c5 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    return new Promise(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  });
  const nextPromise1 = new Promise((arg0) => {
    if (null != lib.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = self(authorization[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (self(authorization[6])(authorization.authorization.scopes, tmp25.scope)) {
          obj = { command: null, scope: null, application_id: null, socket_scope: null };
          obj[0] = cmd;
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj[1] = scope;
          obj[2] = tmp28.application.id;
          obj[3] = tmp28.authorization.scopes.toString();
          tmp29(tmp30[7]).track(outer1_4.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new self(authorization[5])({ errorCode: outer1_7.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((arg0) => {
    let closure_0 = arg0;
    closure_0 = undefined;
    closure_0 = lib((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c4 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp5;
                let prototype = tmp2;
                prototype = undefined;
                if (null != closure_0.validation) {
                  c4 = 1;
                  c5 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = closure_0.getJoi();
                  return obj1;
                } else {
                  tmp29(closure_0);
                  c5 = 3;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              prototype = arg1;
              self(table[8])(null != closure_0.validation, "command.validation must not be null");
              const args = outer2_2.args;
              prototype.validate(args, closure_0.validation(prototype), { convert: false }, (message) => {
                if (null == message) {
                  callback(callback);
                } else {
                  const obj = { errorCode: null };
                  obj[0] = outer3_7.INVALID_PAYLOAD;
                  const tmp8 = new callback(outer3_1[5])(obj, message.message);
                  callback2(tmp8);
                }
              });
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp9) {
            c5 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    return new Promise(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }).then((handler) => {
    const obj = { socket: closure_1, server: self, cmd: lib.cmd, evt: lib.evt, nonce: lib.nonce, args: null, isSocketConnected: null, signal: null };
    let args = lib.args;
    if (args == null) {
      args = {};
    }
    obj[5] = args;
    obj[6] = function isSocketConnected() {
      sockets = sockets.sockets;
      return sockets.has(closure_1);
    };
    obj[7] = closure_1.abortController.signal;
    return handler.handler(obj);
  });
  new Promise((arg0) => {
    if (null != lib.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = self(authorization[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (self(authorization[6])(authorization.authorization.scopes, tmp25.scope)) {
          obj = { command: null, scope: null, application_id: null, socket_scope: null };
          obj[0] = cmd;
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj[1] = scope;
          obj[2] = tmp28.application.id;
          obj[3] = tmp28.authorization.scopes.toString();
          tmp29(tmp30[7]).track(outer1_4.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_7.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new self(authorization[5])({ errorCode: outer1_7.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((arg0) => {
    let closure_0 = arg0;
    closure_0 = undefined;
    closure_0 = lib((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c4 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp5;
                let prototype = tmp2;
                prototype = undefined;
                if (null != closure_0.validation) {
                  c4 = 1;
                  c5 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = closure_0.getJoi();
                  return obj1;
                } else {
                  tmp29(closure_0);
                  c5 = 3;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              prototype = arg1;
              self(table[8])(null != closure_0.validation, "command.validation must not be null");
              const args = outer2_2.args;
              prototype.validate(args, closure_0.validation(prototype), { convert: false }, (message) => {
                if (null == message) {
                  callback(callback);
                } else {
                  const obj = { errorCode: null };
                  obj[0] = outer3_7.INVALID_PAYLOAD;
                  const tmp8 = new callback(outer3_1[5])(obj, message.message);
                  callback2(tmp8);
                }
              });
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp9) {
            c5 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    return new Promise(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }).then((handler) => {
    const obj = { socket: closure_1, server: self, cmd: lib.cmd, evt: lib.evt, nonce: lib.nonce, args: null, isSocketConnected: null, signal: null };
    let args = lib.args;
    if (args == null) {
      args = {};
    }
    obj[5] = args;
    obj[6] = function isSocketConnected() {
      sockets = sockets.sockets;
      return sockets.has(closure_1);
    };
    obj[7] = closure_1.abortController.signal;
    return handler.handler(obj);
  }).then((arg0) => self.dispatch(closure_1, lib.nonce, lib.cmd, null, arg0)).catch((code) => self.error(closure_1, lib.nonce, lib.cmd, code.code, code.message));
};
prototype["setCommandHandler"] = function setCommandHandler(arg0, arg1) {
  this.commands[arg0] = arg1;
};
prototype["setEventHandler"] = function setEventHandler(arg0, arg1) {
  this.events[arg0] = arg1;
};
prototype["dispatch"] = function dispatch(send) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let DISPATCH = arg2;
  if (arg2 === undefined) {
    DISPATCH = constants3.DISPATCH;
  }
  let tmp3 = arg3;
  if (arg3 === undefined) {
    tmp3 = null;
  }
  let tmp4 = arg4;
  if (arg4 === undefined) {
    tmp4 = null;
  }
  send.send({ cmd: DISPATCH, data: tmp4, evt: tmp3, nonce: tmp });
};
prototype["error"] = function error(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let DISPATCH = arg2;
  if (arg2 === undefined) {
    DISPATCH = constants3.DISPATCH;
  }
  let UNKNOWN_ERROR = arg3;
  if (arg3 === undefined) {
    UNKNOWN_ERROR = constants4.UNKNOWN_ERROR;
  }
  let str = arg4;
  if (arg4 === undefined) {
    str = "Unknown Error";
  }
  let obj = expandEventProperties;
  obj.track(constants.RPC_SERVER_ERROR_CAUGHT, { command: DISPATCH, code: UNKNOWN_ERROR, message: str });
  obj = { code: UNKNOWN_ERROR, message: str };
  this.dispatch(arg0, tmp, DISPATCH, constants5.ERROR, obj);
};
prototype["listenIsSubscribed"] = function listenIsSubscribed(arg0) {
  const self = this;
  let closure_0 = arg0;
  let isSubscribedListeners = this.isSubscribedListeners;
  isSubscribedListeners.add(arg0);
  return () => {
    const isSubscribedListeners = self.isSubscribedListeners;
    isSubscribedListeners.delete(closure_0);
  };
};
prototype["dispatchIsSubscribedUpdate"] = function dispatchIsSubscribedUpdate() {
  const prop = this.isSubscribedListeners;
  const item = prop.forEach((arg0) => arg0());
};
prototype["isSubscribed"] = function isSubscribed(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const subscriptions = this.subscriptions;
  return undefined !== subscriptions.find((socket) => {
    let tmp = socket.socket.application.id === closure_0;
    if (tmp) {
      tmp = socket.evt === closure_1;
    }
    return tmp;
  });
};
prototype["isChildSubscribed"] = function isChildSubscribed(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = null != arg0;
  if (tmp) {
    const self = this;
    const subscriptions = this.subscriptions;
    tmp = undefined !== subscriptions.find((socket) => {
      let tmp = socket.socket.application.parentId === closure_0;
      if (tmp) {
        tmp = socket.evt === closure_1;
      }
      return tmp;
    });
  }
  return tmp;
};
prototype["getSubscription"] = function getSubscription(closure_1, outer1_2, outer1_3) {
  let closure_0 = closure_1;
  closure_1 = outer1_2;
  let prototype = outer1_3;
  const subscriptions = this.subscriptions;
  return subscriptions.find((socket) => {
    let isEqualResult = socket.socket === callback;
    if (isEqualResult) {
      isEqualResult = socket.evt === outer1_2;
    }
    if (isEqualResult) {
      isEqualResult = callback(outer1_2[3]).isEqual(socket.args, prototype);
      const obj = callback(outer1_2[3]);
    }
    return isEqualResult;
  });
};
prototype["addSubscription"] = function addSubscription(closure_1, outer1_2, outer1_3, prototype) {
  let tmp = prototype;
  if (prototype === undefined) {
    tmp = null;
  }
  const self = this;
  const dispatch = this.dispatch;
  const bindResult = dispatch.bind(this, closure_1, null, constants3.DISPATCH, outer1_2);
  if (null == this.getSubscription(closure_1, outer1_2, outer1_3)) {
    const subscriptions = self.subscriptions;
    let obj = { update: null, dispatch: null, prevState: null, socket: null, evt: null, args: null };
    obj[0] = tmp;
    obj[1] = bindResult;
    let tmpResult = null;
    if (tmp) {
      obj = { prevState: null, dispatch: null };
      obj[1] = bindResult;
      tmpResult = tmp(obj);
    }
    obj[2] = tmpResult;
    obj[3] = closure_1;
    obj[4] = outer1_2;
    obj[5] = outer1_3;
    subscriptions.push(obj);
    const result = self.dispatchIsSubscribedUpdate();
  }
};
prototype["removeSubscription"] = function removeSubscription(arg0, arg1, arg2) {
  const importDefault = arg0;
  const dependencyMap = arg1;
  let prototype = arg2;
  apply.remove(this.subscriptions, (socket) => {
    let isEqualResult = socket.socket === callback;
    if (isEqualResult) {
      isEqualResult = socket.evt === table;
    }
    if (isEqualResult) {
      isEqualResult = callback(table[3]).isEqual(socket.args, prototype);
      const obj = callback(table[3]);
    }
    return isEqualResult;
  });
  const result = this.dispatchIsSubscribedUpdate();
};
prototype["removeSubscriptions"] = function removeSubscriptions(abortController) {
  const importDefault = abortController;
  apply.remove(this.subscriptions, (socket) => socket.socket === closure_0);
  const result = this.dispatchIsSubscribedUpdate();
};
prototype["dispatchToSubscriptions"] = function dispatchToSubscriptions(RELATIONSHIP_UPDATE, arg1, closure_3, combined) {
  const self = this;
  let closure_1 = RELATIONSHIP_UPDATE;
  let prototype = arg1;
  let closure_0 = closure_3;
  let tmp = null != combined;
  if (tmp) {
    tmp = "" !== combined;
  }
  if (tmp) {
    let arr = closure_10;
    let flag = closure_10.includes(combined);
    if (!flag) {
      arr = arr.unshift(combined);
      arr.splice(50);
      flag = false;
    }
    tmp = flag;
  }
  if (!tmp) {
    const subscriptions = this.subscriptions;
    const item = subscriptions.forEach((evt) => {
      if (evt.evt === RELATIONSHIP_UPDATE) {
        let tmp5 = typeof prototype === "function";
        if (typeof prototype === "function") {
          tmp5 = !tmp13(evt);
        }
        if (!tmp5) {
          let tmp = typeof tmp13 === "object";
          if (typeof tmp13 === "object") {
            let args = evt.args;
            if (args == null) {
              args = {};
            }
            const obj2 = callback(RELATIONSHIP_UPDATE[3]);
            const _Object = Object;
            tmp = !obj2.isEqual(tmp13, callback(RELATIONSHIP_UPDATE[3]).pick(args, Object.keys(tmp13)));
            const obj3 = callback(RELATIONSHIP_UPDATE[3]);
          }
          tmp5 = tmp;
        }
        if (!tmp5) {
          if (typeof callback === "function") {
            callback = tmp6(evt);
          }
          self.dispatch(evt.socket, null, outer1_6.DISPATCH, evt.evt, callback);
        }
      }
    });
  }
};
prototype["updateSubscriptions"] = function updateSubscriptions() {
  const subscriptions = this.subscriptions;
  const item = subscriptions.forEach((update) => {
    if (update.update) {
      update.prevState = update.update(update);
    }
  });
};
prototype["storeWait"] = function storeWait(socket, arg1, timeout) {
  const self = this;
  const dependencyMap = socket;
  let prototype = arg1;
  let closure_3 = timeout;
  let tmp = arg1();
  if (!tmp) {
    if (0 !== timeout) {
      let closure_4 = removeSubscription(12).uniqueId();
      removeSubscription = function removeSubscription(arg0) {

      };
      const promise = new Promise((arg0, closure_1) => {
        let closure_0 = arg0;
        const socket = closure_1;
        const timeout = setTimeout(() => {
          if (typeof closure_0 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          outer1_5.removeSubscription(callback2, outer1_9, { uniqueId: outer1_4 });
          const error = new Error("timeout");
          callback2(error);
        }, closure_3 * removeSubscription(socket[9]).Millis.SECOND);
        self.addSubscription(socket, outer1_9, { uniqueId: closure_4 }, () => {
          const tmp = callback3();
          if (tmp) {
            const _clearTimeout = clearTimeout;
            clearTimeout(callback3);
            callback(tmp);
          }
        });
      });
      return promise.then((arg0) => {
        if (typeof removeSubscription !== "function") {
          HermesBuiltin.throwTypeError();
        }
        self.removeSubscription(closure_1, outer1_9, { uniqueId: closure_4 });
        return arg0;
      });
    }
  }
  return Promise.resolve(tmp);
};

export default RPCServer;