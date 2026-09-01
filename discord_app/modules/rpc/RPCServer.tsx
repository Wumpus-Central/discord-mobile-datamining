// === Module 14180: registerTransport ===

// Module 14180 (registerTransport)
import applyDefault from "apply" /* 12 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import transformUserDefault from "transformUser" /* 9509 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4380 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ AnalyticEvents: c5, RPCCloseCodes: closure_6, RPCCommands: error, RPCErrors: closure_8, RPCEvents: c9 } = ME);
const RPC_STORE_WAIT = "RPC_STORE_WAIT";
let closure_11 = [];
let result = require("set").fileFinishedImporting("modules/rpc/RPCServer.tsx");
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
      obj.user = transformUserDefault(currentUser);
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
  closure_1 = arg0;
  closure_2 = arg1;
  self = this;
  const promise = new Promise((arg0) => {
    if (null != closure_2.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = lib(closure_2[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (lib(closure_2[6])(lib.authorization.scopes, tmp25.scope)) {
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
          tmp29(tmp30[7]).track(closure_1_5.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new lib(closure_2[5])({ errorCode: closure_1_8.INVALID_PAYLOAD }, "Payload requires a nonce");
  });
  const nextPromise = new Promise((arg0) => {
    if (null != closure_2.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = lib(closure_2[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (lib(closure_2[6])(lib.authorization.scopes, tmp25.scope)) {
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
          tmp29(tmp30[7]).track(closure_1_5.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new lib(closure_2[5])({ errorCode: closure_1_8.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((arg0) => {
    closure_0 = arg0;
    closure_0 = undefined;
    closure_0 = self((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c4 = 0;
      c5 = 0;
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
            return { value: "HermesInternal", done: null };
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
                closure_3 = tmp5;
                closure_2 = tmp2;
                closure_2 = undefined;
                if (null != closure_0.validation) {
                  c4 = 1;
                  c5 = 1;
                  obj1 = { value: null, done: false };
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
              closure_2 = arg1;
              callback(closure_2[8])(null != closure_0.validation, "command.validation must not be null");
              const args = closure_2_2.args;
              closure_2.validate(args, closure_0.validation(closure_2), { convert: false }, (message) => {
                if (null == message) {
                  callback(callback);
                } else {
                  const obj = { errorCode: null };
                  obj[0] = closure_3_8.INVALID_PAYLOAD;
                  const tmp8 = new closure_3_1(closure_3_2[5])(obj, message.message);
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
  const nextPromise1 = new Promise((arg0) => {
    if (null != closure_2.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = lib(closure_2[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (lib(closure_2[6])(lib.authorization.scopes, tmp25.scope)) {
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
          tmp29(tmp30[7]).track(closure_1_5.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new lib(closure_2[5])({ errorCode: closure_1_8.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((arg0) => {
    closure_0 = arg0;
    closure_0 = undefined;
    closure_0 = self((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c4 = 0;
      c5 = 0;
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
            return { value: "HermesInternal", done: null };
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
                closure_3 = tmp5;
                closure_2 = tmp2;
                closure_2 = undefined;
                if (null != closure_0.validation) {
                  c4 = 1;
                  c5 = 1;
                  obj1 = { value: null, done: false };
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
              closure_2 = arg1;
              callback(closure_2[8])(null != closure_0.validation, "command.validation must not be null");
              const args = closure_2_2.args;
              closure_2.validate(args, closure_0.validation(closure_2), { convert: false }, (message) => {
                if (null == message) {
                  callback(callback);
                } else {
                  const obj = { errorCode: null };
                  obj[0] = closure_3_8.INVALID_PAYLOAD;
                  const tmp8 = new closure_3_1(closure_3_2[5])(obj, message.message);
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
    if (lib.source.type === closure_1_4.POST_MESSAGE) {
      let obj = self(closure_2[9]);
      obj = { cmd: null, iframeId: null, args: null };
      obj[0] = closure_2.cmd;
      obj[1] = tmp.source.iframeId;
      let args = closure_2.args;
      if (args == null) {
        args = {};
      }
      obj[2] = args;
      const interceptRpcCommandResult = obj.interceptRpcCommand(obj);
      if (null != interceptRpcCommandResult) {
        return interceptRpcCommandResult.result;
      }
    }
    obj = { socket: tmp, server: self, cmd: closure_2.cmd, evt: closure_2.evt, nonce: closure_2.nonce, args: null, isSocketConnected: null, signal: null };
    let args1 = closure_2.args;
    if (args1 == null) {
      args1 = {};
    }
    obj[5] = args1;
    obj[6] = function isSocketConnected() {
      sockets = sockets.sockets;
      return sockets.has(closure_1);
    };
    obj[7] = lib.abortController.signal;
    return handler.handler(obj);
  });
  new Promise((arg0) => {
    if (null != closure_2.nonce) {
      if ("" !== tmp.nonce) {
        const cmd = tmp.cmd;
        if (null == self.commands[cmd]) {
          let obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_COMMAND;
          const _HermesInternal = HermesInternal;
          let tmp15 = lib(closure_2[5]);
          tmp15 = new tmp15(obj, "Invalid command: " + tmp.cmd);
          throw tmp15;
        } else if (lib(closure_2[6])(lib.authorization.scopes, tmp25.scope)) {
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
          tmp29(tmp30[7]).track(closure_1_5.RPC_COMMAND_SENT, obj);
          arg0(tmp25);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_8.INVALID_PERMISSIONS;
          const tmp6 = new tmp29(tmp30[5])(obj, "Not authenticated or invalid scope");
          throw tmp6;
        }
      }
    }
    throw new lib(closure_2[5])({ errorCode: closure_1_8.INVALID_PAYLOAD }, "Payload requires a nonce");
  }).then((arg0) => {
    closure_0 = arg0;
    closure_0 = undefined;
    closure_0 = self((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c4 = 0;
      c5 = 0;
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
            return { value: "HermesInternal", done: null };
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
                closure_3 = tmp5;
                closure_2 = tmp2;
                closure_2 = undefined;
                if (null != closure_0.validation) {
                  c4 = 1;
                  c5 = 1;
                  obj1 = { value: null, done: false };
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
              closure_2 = arg1;
              callback(closure_2[8])(null != closure_0.validation, "command.validation must not be null");
              const args = closure_2_2.args;
              closure_2.validate(args, closure_0.validation(closure_2), { convert: false }, (message) => {
                if (null == message) {
                  callback(callback);
                } else {
                  const obj = { errorCode: null };
                  obj[0] = closure_3_8.INVALID_PAYLOAD;
                  const tmp8 = new closure_3_1(closure_3_2[5])(obj, message.message);
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
    if (lib.source.type === closure_1_4.POST_MESSAGE) {
      let obj = self(closure_2[9]);
      obj = { cmd: null, iframeId: null, args: null };
      obj[0] = closure_2.cmd;
      obj[1] = tmp.source.iframeId;
      let args = closure_2.args;
      if (args == null) {
        args = {};
      }
      obj[2] = args;
      const interceptRpcCommandResult = obj.interceptRpcCommand(obj);
      if (null != interceptRpcCommandResult) {
        return interceptRpcCommandResult.result;
      }
    }
    obj = { socket: tmp, server: self, cmd: closure_2.cmd, evt: closure_2.evt, nonce: closure_2.nonce, args: null, isSocketConnected: null, signal: null };
    let args1 = closure_2.args;
    if (args1 == null) {
      args1 = {};
    }
    obj[5] = args1;
    obj[6] = function isSocketConnected() {
      sockets = sockets.sockets;
      return sockets.has(closure_1);
    };
    obj[7] = lib.abortController.signal;
    return handler.handler(obj);
  }).then((arg0) => self.dispatch(closure_1, closure_2.nonce, closure_2.cmd, null, arg0)).catch((code) => self.error(closure_1, closure_2.nonce, closure_2.cmd, code.code, code.message));
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
  let obj = expandEventPropertiesDefault;
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
  const item = prop.forEach((arg0) => arg0());
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
prototype["getSubscription"] = function getSubscription(closure_1, closure_1_10, closure_1_3) {
  closure_0 = closure_1;
  closure_1 = closure_1_10;
  closure_2 = closure_1_3;
  const subscriptions = this.subscriptions;
  return subscriptions.find((socket) => {
    let isEqualResult = socket.socket === closure_0;
    if (isEqualResult) {
      isEqualResult = socket.evt === callback;
    }
    if (isEqualResult) {
      isEqualResult = callback(table[3]).isEqual(socket.args, table);
      const obj = callback(table[3]);
    }
    return isEqualResult;
  });
};
prototype["addSubscription"] = function addSubscription(closure_1, closure_1_10, closure_1_3, closure_2) {
  let tmp = closure_2;
  if (closure_2 === undefined) {
    tmp = null;
  }
  const self = this;
  const dispatch = this.dispatch;
  const bindResult = dispatch.bind(this, closure_1, null, constants3.DISPATCH, closure_1_10);
  if (null == this.getSubscription(closure_1, closure_1_10, closure_1_3)) {
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
    obj[4] = closure_1_10;
    obj[5] = closure_1_3;
    subscriptions.push(obj);
    const result = self.dispatchIsSubscribedUpdate();
  }
};
prototype["removeSubscription"] = function removeSubscription(arg0, arg1, arg2) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  applyDefault.remove(this.subscriptions, (socket) => {
    let isEqualResult = socket.socket === closure_0;
    if (isEqualResult) {
      isEqualResult = socket.evt === callback;
    }
    if (isEqualResult) {
      isEqualResult = callback(table[3]).isEqual(socket.args, table);
      const obj = callback(table[3]);
    }
    return isEqualResult;
  });
  const result = this.dispatchIsSubscribedUpdate();
};
prototype["removeSubscriptions"] = function removeSubscriptions(abortController) {
  closure_0 = abortController;
  applyDefault.remove(this.subscriptions, (socket) => socket.socket === closure_0);
  const result = this.dispatchIsSubscribedUpdate();
};
prototype["dispatchToSubscriptions"] = function dispatchToSubscriptions(RELATIONSHIP_UPDATE, targetsFrame, closure_3, combined) {
  const self = this;
  closure_1 = RELATIONSHIP_UPDATE;
  closure_2 = targetsFrame;
  closure_0 = closure_3;
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
      if (evt.evt === RELATIONSHIP_UPDATE) {
        let tmp5 = typeof targetsFrame === "function";
        if (typeof targetsFrame === "function") {
          tmp5 = !tmp13(evt);
        }
        if (!tmp5) {
          let tmp = typeof tmp13 === "object";
          if (typeof tmp13 === "object") {
            let args = evt.args;
            if (args == null) {
              args = {};
            }
            const obj2 = RELATIONSHIP_UPDATE(targetsFrame[3]);
            const _Object = Object;
            tmp = !obj2.isEqual(tmp13, RELATIONSHIP_UPDATE(targetsFrame[3]).pick(args, Object.keys(tmp13)));
            const obj3 = RELATIONSHIP_UPDATE(targetsFrame[3]);
          }
          tmp5 = tmp;
        }
        if (!tmp5) {
          if (typeof closure_0 === "function") {
            closure_0 = tmp6(evt);
          }
          self.dispatch(evt.socket, null, closure_1_7.DISPATCH, evt.evt, closure_0);
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
  importDefault = socket;
  dependencyMap = arg1;
  closure_3 = timeout;
  let tmp = arg1();
  if (!tmp) {
    if (0 !== timeout) {
      closure_4 = applyDefault.uniqueId();
      function removeSubscription() {

      }
      const promise = new Promise((arg0, closure_1) => {
        closure_0 = arg0;
        socket = closure_1;
        table = setTimeout(() => {
          if (typeof closure_0 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_1_5.removeSubscription(callback2, closure_1_10, { uniqueId: closure_1_4 });
          error = new Error("timeout");
          callback2(error);
        }, closure_3 * socket(table[10]).Millis.SECOND);
        self.addSubscription(socket, closure_1_10, { uniqueId: closure_4 }, () => {
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
        self.removeSubscription(closure_1, closure_1_10, { uniqueId: closure_4 });
        return arg0;
      });
    }
  }
  return Promise.resolve(tmp);
};

export default RPCServer;