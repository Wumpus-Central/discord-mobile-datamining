// === Module 14526: RPCServer ===

// Module 14526 (RPCServer)
import _modDef12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import transformUserDefault from "transformUser" /* 9560 */;
import validateScopeDefault from "validateScope" /* 14502 */;
import RpcCommandInterception from "RpcCommandInterception" /* 14527 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const TransportTypes = fn(4465).TransportTypes;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, RPCCloseCodes: metroRequire, RPCCommands: closure_7, RPCErrors: closure_8, RPCEvents: closure_9 } = Constants);
const RPC_STORE_WAIT = "RPC_STORE_WAIT";
let closure_11 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/RPCServer.tsx");
class RPCServer {
  constructor(arg0) {
    merged = Object.assign({ getCurrentUser: null, onConnect: null, onDisconnect: null, events: null, commands: null, sockets: null, subscriptions: null, isSubscribedListeners: null });
    merged[0] = function getCurrentUser() {
      return null;
    };
    merged[1] = function onConnect() {

    };
    merged[2] = function onDisconnect() {

    };
    merged[3] = {};
    merged[4] = {};
    set = new Set();
    merged[5] = set;
    merged[6] = [];
    set1 = new Set();
    merged[7] = set1;
    merged.getJoi = global;
    return merged;
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
  let obj = { v: v.version, config: null };
  obj = { cdn_host: window.GLOBAL_ENV.CDN_HOST, api_endpoint: window.GLOBAL_ENV.API_ENDPOINT, environment: "production" };
  obj.config = obj;
  if (v.transport === TransportTypes.IPC) {
    const currentUser = self.getCurrentUser();
    if (null == currentUser) {
      v.close(constants2.CLOSE_NORMAL, "User logged out");
    } else {
      obj.user = transformUserDefault(currentUser);
    }
  }
  self.dispatch(v, null, constants3.DISPATCH, constants5.READY, obj);
};
prototype["handleDisconnect"] = function handleDisconnect(abortController, arg1) {
  abortController = abortController.abortController;
  abortController.abort("DISCONNECTED");
  this.removeSubscriptions(abortController);
  const sockets = this.sockets;
  sockets.delete(abortController);
  this.onDisconnect(abortController, arg1);
};
prototype["handleRequest"] = function handleRequest(socket, arg1) {
  closure_2 = arg1;
  let self = this;
  const promise = new Promise((fn) => {
    if (null != closure_2.nonce) {
      if ("" !== closure_2.nonce) {
        const cmd = closure_2.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: constants4.INVALID_COMMAND };
          const _HermesInternal = HermesInternal;
          let tmp15 = RPCErrorDefault;
          tmp15 = new tmp15(obj, "Invalid command: " + closure_2.cmd);
          throw tmp15;
        } else if (validateScopeDefault(socket.authorization.scopes, tmp25.scope)) {
          obj = { command: cmd, scope: null, application_id: null, socket_scope: null };
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj.scope = scope;
          obj.application_id = socket.application.id;
          obj.socket_scope = socket.authorization.scopes.toString();
          AnalyticsUtilsDefault.track(constants.RPC_COMMAND_SENT, obj);
          fn(tmp25);
          const tmp29Result = AnalyticsUtilsDefault;
        } else {
          obj = { errorCode: constants4.INVALID_PERMISSIONS };
          const tmp6 = new RPCErrorDefault(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new RPCErrorDefault({ errorCode: constants4.INVALID_PAYLOAD }, "Payload requires a nonce");
  });
  const nextPromise = new Promise((fn) => {
    if (null != closure_2.nonce) {
      if ("" !== closure_2.nonce) {
        const cmd = closure_2.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: constants4.INVALID_COMMAND };
          const _HermesInternal = HermesInternal;
          let tmp15 = RPCErrorDefault;
          tmp15 = new tmp15(obj, "Invalid command: " + closure_2.cmd);
          throw tmp15;
        } else if (validateScopeDefault(socket.authorization.scopes, tmp25.scope)) {
          obj = { command: cmd, scope: null, application_id: null, socket_scope: null };
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj.scope = scope;
          obj.application_id = socket.application.id;
          obj.socket_scope = socket.authorization.scopes.toString();
          AnalyticsUtilsDefault.track(constants.RPC_COMMAND_SENT, obj);
          fn(tmp25);
          const tmp29Result = AnalyticsUtilsDefault;
        } else {
          obj = { errorCode: constants4.INVALID_PERMISSIONS };
          const tmp6 = new RPCErrorDefault(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new RPCErrorDefault({ errorCode: constants4.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((result) => {
    closure_0 = self(function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp5;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              if (null != closure_0.validation) {
                c4 = 1;
                c5 = 1;
                const obj1 = { value: closure_0.getJoi(), done: false };
                return obj1;
              } else {
                tmp28(closure_0);
                c5 = 3;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_2 = value;
            closure_1(tmp2[8])(null != closure_0.validation, "command.validation must not be null");
            args = args.args;
            closure_130_2.validate(args, closure_0.validation(closure_130_2), { convert: false }, (message) => {
              if (null == message) {
                closure_1_0(closure_0);
              } else {
                const obj = { errorCode: constants.INVALID_PAYLOAD };
                const tmp8 = new closure_1(closure_2[5])(obj, message.message);
                closure_1_1(tmp8);
              }
            });
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp9) {
          c5 = tmp;
          throw tmp9;
        }
      }
    });
    return new Promise(function() {
      self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  });
  const nextPromise1 = new Promise((fn) => {
    if (null != closure_2.nonce) {
      if ("" !== closure_2.nonce) {
        const cmd = closure_2.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: constants4.INVALID_COMMAND };
          const _HermesInternal = HermesInternal;
          let tmp15 = RPCErrorDefault;
          tmp15 = new tmp15(obj, "Invalid command: " + closure_2.cmd);
          throw tmp15;
        } else if (validateScopeDefault(socket.authorization.scopes, tmp25.scope)) {
          obj = { command: cmd, scope: null, application_id: null, socket_scope: null };
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj.scope = scope;
          obj.application_id = socket.application.id;
          obj.socket_scope = socket.authorization.scopes.toString();
          AnalyticsUtilsDefault.track(constants.RPC_COMMAND_SENT, obj);
          fn(tmp25);
          const tmp29Result = AnalyticsUtilsDefault;
        } else {
          obj = { errorCode: constants4.INVALID_PERMISSIONS };
          const tmp6 = new RPCErrorDefault(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new RPCErrorDefault({ errorCode: constants4.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((result) => {
    closure_0 = self(function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp5;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              if (null != closure_0.validation) {
                c4 = 1;
                c5 = 1;
                const obj1 = { value: closure_0.getJoi(), done: false };
                return obj1;
              } else {
                tmp28(closure_0);
                c5 = 3;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_2 = value;
            closure_1(tmp2[8])(null != closure_0.validation, "command.validation must not be null");
            args = args.args;
            closure_130_2.validate(args, closure_0.validation(closure_130_2), { convert: false }, (message) => {
              if (null == message) {
                closure_1_0(closure_0);
              } else {
                const obj = { errorCode: constants.INVALID_PAYLOAD };
                const tmp8 = new closure_1(closure_2[5])(obj, message.message);
                closure_1_1(tmp8);
              }
            });
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp9) {
          c5 = tmp;
          throw tmp9;
        }
      }
    });
    return new Promise(function() {
      self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }).then((handler) => {
    if (socket.source.type === TransportTypes.POST_MESSAGE) {
      let obj = { cmd: closure_2.cmd, iframeId: socket.source.iframeId, args: null };
      let args = closure_2.args;
      if (args == null) {
        args = {};
      }
      obj.args = args;
      const interceptRpcCommandResult = obj.interceptRpcCommand(obj);
      if (null != interceptRpcCommandResult) {
        return interceptRpcCommandResult.result;
      }
    }
    obj = { socket, server: self, cmd: closure_2.cmd, evt: closure_2.evt, nonce: closure_2.nonce, args: null, isSocketConnected: null, signal: null };
    let args1 = closure_2.args;
    if (args1 == null) {
      args1 = {};
    }
    obj.args = args1;
    obj.isSocketConnected = function isSocketConnected() {
      sockets = sockets.sockets;
      return sockets.has(socket);
    };
    obj.signal = socket.abortController.signal;
    return handler.handler(obj);
  });
  new Promise((fn) => {
    if (null != closure_2.nonce) {
      if ("" !== closure_2.nonce) {
        const cmd = closure_2.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: constants4.INVALID_COMMAND };
          const _HermesInternal = HermesInternal;
          let tmp15 = RPCErrorDefault;
          tmp15 = new tmp15(obj, "Invalid command: " + closure_2.cmd);
          throw tmp15;
        } else if (validateScopeDefault(socket.authorization.scopes, tmp25.scope)) {
          obj = { command: cmd, scope: null, application_id: null, socket_scope: null };
          if (typeof tmp25.scope === "object") {
            const _JSON = JSON;
            let scope = JSON.stringify(tmp25.scope);
          } else {
            scope = tmp25.scope;
          }
          obj.scope = scope;
          obj.application_id = socket.application.id;
          obj.socket_scope = socket.authorization.scopes.toString();
          AnalyticsUtilsDefault.track(constants.RPC_COMMAND_SENT, obj);
          fn(tmp25);
          const tmp29Result = AnalyticsUtilsDefault;
        } else {
          obj = { errorCode: constants4.INVALID_PERMISSIONS };
          const tmp6 = new RPCErrorDefault(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new RPCErrorDefault({ errorCode: constants4.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((result) => {
    closure_0 = self(function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp5;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              if (null != closure_0.validation) {
                c4 = 1;
                c5 = 1;
                const obj1 = { value: closure_0.getJoi(), done: false };
                return obj1;
              } else {
                tmp28(closure_0);
                c5 = 3;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_2 = value;
            closure_1(tmp2[8])(null != closure_0.validation, "command.validation must not be null");
            args = args.args;
            closure_130_2.validate(args, closure_0.validation(closure_130_2), { convert: false }, (message) => {
              if (null == message) {
                closure_1_0(closure_0);
              } else {
                const obj = { errorCode: constants.INVALID_PAYLOAD };
                const tmp8 = new closure_1(closure_2[5])(obj, message.message);
                closure_1_1(tmp8);
              }
            });
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp9) {
          c5 = tmp;
          throw tmp9;
        }
      }
    });
    return new Promise(function() {
      self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }).then((handler) => {
    if (socket.source.type === TransportTypes.POST_MESSAGE) {
      let obj = { cmd: closure_2.cmd, iframeId: socket.source.iframeId, args: null };
      let args = closure_2.args;
      if (args == null) {
        args = {};
      }
      obj.args = args;
      const interceptRpcCommandResult = obj.interceptRpcCommand(obj);
      if (null != interceptRpcCommandResult) {
        return interceptRpcCommandResult.result;
      }
    }
    obj = { socket, server: self, cmd: closure_2.cmd, evt: closure_2.evt, nonce: closure_2.nonce, args: null, isSocketConnected: null, signal: null };
    let args1 = closure_2.args;
    if (args1 == null) {
      args1 = {};
    }
    obj.args = args1;
    obj.isSocketConnected = function isSocketConnected() {
      sockets = sockets.sockets;
      return sockets.has(socket);
    };
    obj.signal = socket.abortController.signal;
    return handler.handler(obj);
  }).then((result) => self.dispatch(closure_1, closure_2.nonce, closure_2.cmd, null, result)).catch((error) => self.error(closure_1, closure_2.nonce, closure_2.cmd, error.code, error.message));
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
  let obj = AnalyticsUtilsDefault;
  obj.track(constants.RPC_SERVER_ERROR_CAUGHT, { command: DISPATCH, code: UNKNOWN_ERROR, message: str });
  obj = { code: UNKNOWN_ERROR, message: str };
  this.dispatch(arg0, tmp, DISPATCH, constants5.ERROR, obj);
};
prototype["listenIsSubscribed"] = function listenIsSubscribed(arg0) {
  const self = this;
  closure_0 = arg0;
  let isSubscribedListeners = this.isSubscribedListeners;
  isSubscribedListeners.add(arg0);
  return () => {
    const isSubscribedListeners = self.isSubscribedListeners;
    isSubscribedListeners.delete(closure_0);
  };
};
prototype["dispatchIsSubscribedUpdate"] = function dispatchIsSubscribedUpdate() {
  const prop = this.isSubscribedListeners;
  const item = prop.forEach((fn) => fn());
};
prototype["isSubscribed"] = function isSubscribed(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
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
  closure_0 = arg0;
  closure_1 = arg1;
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
prototype["getSubscription"] = function getSubscription(socket, evt, args) {
  closure_0 = socket;
  closure_1 = evt;
  closure_2 = args;
  const subscriptions = this.subscriptions;
  return subscriptions.find((socket) => {
    let isEqualResult = socket.socket === closure_0;
    if (isEqualResult) {
      isEqualResult = socket.evt === closure_1;
    }
    if (isEqualResult) {
      isEqualResult = _modDef12.isEqual(socket.args, closure_2);
    }
    return isEqualResult;
  });
};
prototype["addSubscription"] = function addSubscription(socket, evt, args, arg3) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const self = this;
  const dispatch = this.dispatch;
  const bindResult = dispatch.bind(this, socket, null, constants3.DISPATCH, evt);
  if (null == this.getSubscription(socket, evt, args)) {
    const subscriptions = self.subscriptions;
    let obj = { update: tmp, dispatch: bindResult, prevState: null, socket: null, evt: null, args: null };
    let tmpResult = null;
    if (tmp) {
      obj = { prevState: null, dispatch: bindResult };
      tmpResult = tmp(obj);
    }
    obj.prevState = tmpResult;
    obj.socket = socket;
    obj.evt = evt;
    obj.args = args;
    subscriptions.push(obj);
    const result = self.dispatchIsSubscribedUpdate();
  }
};
prototype["removeSubscription"] = function removeSubscription(arg0, arg1, arg2) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  _modDef12.remove(this.subscriptions, (socket) => {
    let isEqualResult = socket.socket === closure_0;
    if (isEqualResult) {
      isEqualResult = socket.evt === closure_1;
    }
    if (isEqualResult) {
      isEqualResult = _modDef12.isEqual(socket.args, closure_2);
    }
    return isEqualResult;
  });
  const result = this.dispatchIsSubscribedUpdate();
};
prototype["removeSubscriptions"] = function removeSubscriptions(abortController) {
  closure_0 = abortController;
  _modDef12.remove(this.subscriptions, (socket) => socket.socket === closure_0);
  const result = this.dispatchIsSubscribedUpdate();
};
prototype["dispatchToSubscriptions"] = function dispatchToSubscriptions(RELATIONSHIP_UPDATE, targetsFrame, arg2, combined) {
  const self = this;
  closure_1 = RELATIONSHIP_UPDATE;
  closure_2 = targetsFrame;
  closure_0 = arg2;
  let tmp = null != combined;
  if (tmp) {
    tmp = "" !== combined;
  }
  if (tmp) {
    let arr = closure_11;
    let flag = closure_11.includes(combined);
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
      if (evt.evt === closure_1) {
        if (typeof closure_2 !== "function") {
          if (typeof closure_2 !== "object") {
            let tmp4Result = closure_0;
            if (typeof closure_0 === "function") {
              tmp4Result = tmp4(evt);
            }
            self.dispatch(evt.socket, null, constants3.DISPATCH, evt.evt, tmp4Result);
          } else {
            let args = evt.args;
            if (args == null) {
              args = {};
            }
            _modDef12;
            _modDef12;
            const _Object = Object;
          }
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
prototype["storeWait"] = function storeWait(socket, fn, timeout) {
  const self = this;
  importDefault = socket;
  dependencyMap = fn;
  closure_3 = timeout;
  let tmp = fn();
  if (!tmp) {
    if (0 !== timeout) {
      const uniqueId = _modDef12.uniqueId();
      function removeSubscription() {

      }
      const promise = new Promise((arg0, socket) => {
        closure_0 = arg0;
        timeout = setTimeout(() => {
          if (typeof removeSubscription === "function") {
            const obj = { uniqueId };
            self.removeSubscription(socket, closure_1_10, obj);
            const _Error = Error;
            const error = new Error("timeout");
            socket(error);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, closure_3 * socket(timeout[10]).Millis.SECOND);
        self.addSubscription(socket, RPC_STORE_WAIT, { uniqueId }, () => {
          const tmp = closure_2();
          if (tmp) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_0(tmp);
          }
        });
      });
      return promise.then((result) => {
        if (typeof removeSubscription === "function") {
          const obj = { uniqueId };
          self.removeSubscription(closure_1, RPC_STORE_WAIT, obj);
          return result;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
  }
  return Promise.resolve(tmp);
};

export default RPCServer;