// === Module 9462: map ===

// Module 9462 (map)
import setDefault from "set" /* 687 */;
import HANDSHAKEDefault from "HANDSHAKE" /* 9463 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "participantFromServer" /* 1386 */;
import { RPC_EMBEDDED_APP_SCOPE } from "RPC_SCOPE_CONFIG" /* 4350 */;
import ME from "ME" /* 676 */;
import { EventEmitter } from "EventEmitter" /* 652 */;
import set from "set" /* 2 */;

const require = arg1;
({ AnalyticEvents: error, ComponentActions: closure_8, RPCCloseCodes: c9, RPCErrors: c10 } = ME);
let closure_11 = 10 * setDefault.Millis.SECOND;
const map = new Map();
let set = new Set();
function postClose(source, arg1, postMessageToRPCClient) {
  const items = [HANDSHAKEDefault.CLOSE, arg1];
  postMessageToRPCClient(items, source.origin);
}
class PostMessageTransport extends EventEmitter {
  constructor(arg0, arg1, arg2, arg3) {
    tmp4 = new PostMessageTransport(tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp4;
    tmp4.disconnectSocket = function disconnectSocket(closure_0, closure_1, arg2) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let tmp2;
      if (!flag) {
        tmp2 = closure_1;
      }
      closure_0.emit("disconnect", closure_0, tmp2);
      let str = closure_1.message;
      if (str == null) {
        str = "Unknown";
      }
      closure_0.close(closure_1.code, str);
      let found = Array.from(closure_1_12.entries()).find((arg0) => {
        [, tmp] = arg0;
        return tmp === closure_0;
      });
      if (found == null) {
        found = [null, null];
      }
      const first = closure_1_4(found, 1)[0];
      if (null != first) {
        closure_1_12.delete(first);
      }
    };
    tmp4.handleIFrameMount = function handleIFrameMount(id) {
      closure_1_13.add(id.id);
      closure_0.handshakeFailureTimeoutId = setTimeout(() => {
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        const item = Array.from(selfEmbeddedActivities.entries()).forEach((arg0) => {
          [tmp, tmp2] = arg0;
          let obj = callback2(698);
          obj = { application_id: tmp, channel_id: callback(4081).getEmbeddedActivityLocationChannelId(tmp2.location), guild_id: null, timeout_ms: null };
          const obj3 = callback(4081);
          obj[2] = callback(4081).getEmbeddedActivityLocationGuildId(tmp2.location);
          obj[3] = closure_11;
          obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
        });
      }, closure_1_11);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      id = id.id;
      closure_1_13.delete(id);
      let obj = closure_1_12;
      let found = Array.from(closure_1_12.entries()).find((arg0) => {
        [, tmp] = arg0;
        return tmp.source.iframeId === id;
      });
      if (found == null) {
        found = [null, null];
      }
      const arr = Array.from(closure_1_12.entries());
      [tmp3, tmp4] = closure_1_4(found, 2);
      if (tmp5) {
        obj = { code: null, message: "iFrame gone" };
        obj[0] = closure_1_9.CLOSE_NORMAL;
        id.disconnectSocket(tmp4, obj, true);
        obj.delete(tmp3);
      }
    };
    tmp4.handleMessage = function handleMessage(arg0, iframeId) {
      const value = closure_1_12.get(iframeId.iframeId);
      try {
        closure_0.routeEvent(value, iframeId, arg0, arg2);
      } catch (tmp12) {
        if (tmp12 instanceof callback(closure_1_2[11])) {
          if (tmp12.errorCode === closure_1_10.INVALID_PAYLOAD) {
            throw tmp12;
          }
        }
        if (null != tmp) {
          let obj = { code: null, message: null };
          ({ code: obj2[0], message: obj2[1] } = tmp12);
          closure_0.disconnectSocket(tmp, obj, true);
        } else {
          obj = { code: null, message: null };
          ({ code: obj[0], message: obj[1] } = tmp12);
          closure_1_14(tmp3, obj, tmp2);
        }
      }
    };
    tmp4.handleFrame = function handleFrame(origin, source, str) {
      if (origin.origin !== source.source.origin) {
        let obj = { closeCode: null };
        obj[0] = closure_1_9.INVALID_ORIGIN;
        const tmp24 = new callback(closure_1_2[11])(obj, "Origin has changed");
        throw tmp24;
      } else {
        try {
          let parsed = str;
          if (typeof str === "string") {
            const _JSON = JSON;
            parsed = JSON.parse(str);
          }
          obj = closure_0;
          const onFrameHandled = closure_0.onFrameHandled;
          if (onFrameHandled != null) {
            onFrameHandled(tmp4, obj.logger, source);
          }
          obj.emit("request", source, parsed);
        } catch (err) {
          obj = { closeCode: null };
          obj[0] = closure_1_9.CLOSE_UNSUPPORTED;
          const tmp16 = new callback(closure_1_2[11])(obj, "Payload not recognized encoding");
          throw tmp16;
        }
      }
    };
    closure_0 = undefined;
    closure_1 = tmp4;
    closure_0 = closure_3((arg0, arg1, arg2) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      c8 = 0;
      c9 = 0;
      c7 = 0;
      return (function*(arg0, arg1, arg2) {
        if (c9 === 2) {
          c9 = 3;
          let throwTypeErrorResult = HermesBuiltin.throwTypeError();
        } else {
          throwTypeErrorResult = arg1;
          throwTypeErrorResult = arg0;
          throwTypeErrorResult = tmp7;
          throwTypeErrorResult = globalThis;
          throwTypeErrorResult = null;
          if (tmp8 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c9 = 2;
              if (0 === c8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c5 = tmp4;
                  let user = tmp9;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = lib2;
                  throwTypeErrorResult = paths;
                  let json;
                  user = undefined;
                  c5 = undefined;
                  c6 = undefined;
                  throwTypeErrorResult = lib2;
                  if (null != lib2.handshakeFailureTimeoutId) {
                    const _clearTimeout = clearTimeout;
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = clearTimeout(lib2.handshakeFailureTimeoutId);
                  }
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = paths;
                  throwTypeErrorResult = paths;
                  throwTypeErrorResult = paths;
                  c8 = 1;
                  c9 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = lib(paths[13])(paths[12], paths.paths);
                  return obj1;
                }
              } else if (1 === tmp9) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c9 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  throwTypeErrorResult = user;
                  closure_3 = arg1.default;
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = c5;
                  c7 = 1;
                  throwTypeErrorResult = json;
                  throwTypeErrorResult = lib2;
                  throwTypeErrorResult = lib2;
                  throwTypeErrorResult = paths;
                  throwTypeErrorResult = json;
                  const obj13 = lib2(paths[14])(json);
                  let obj3 = { v: null, encoding: null, client_id: null, frame_id: null, sdk_version: null };
                  throwTypeErrorResult = json;
                  const requiredResult = lib2(paths[14])(json).required();
                  const numberResult = json.number();
                  const minResult = json.number().min(1);
                  obj3[0] = json.number().min(1).max(1).required();
                  throwTypeErrorResult = json;
                  const maxResult = json.number().min(1).max(1);
                  const stringResult = json.string();
                  obj3[1] = json.string().equal("json").optional();
                  throwTypeErrorResult = json;
                  const equalResult = json.string().equal("json");
                  obj3[2] = json.string().required();
                  throwTypeErrorResult = json;
                  const stringResult1 = json.string();
                  obj3[3] = json.string().required();
                  throwTypeErrorResult = json;
                  const stringResult2 = json.string();
                  obj3[4] = json.string().optional();
                  throwTypeErrorResult = json.assert(lib2, requiredResult.keys(obj3));
                  c7 = 0;
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = lib2;
                  closure_5 = lib2;
                  throwTypeErrorResult = closure_5;
                  frame_id = closure_5.frame_id;
                  throwTypeErrorResult = frame_id;
                  throwTypeErrorResult = lib;
                  if (frame_id === lib.iframeId) {
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = c5;
                    throwTypeErrorResult = closure_1_13;
                    throwTypeErrorResult = lib;
                    if (closure_1_13.has(lib.iframeId)) {
                      if (null != closure_5.sdk_version) {
                        obj3 = lib2(paths[9]);
                        const obj4 = { application_id: null, sdk_version: null };
                        obj4[0] = c5.client_id;
                        obj4[1] = c5.sdk_version;
                        obj3.track(c7.ACTIVITY_HANDSHAKE, obj4);
                      }
                      c7 = 2;
                      const obj5 = { source: null, postMessageToRPCClient: null, version: null, logger: null, postClose: null, encoding: null };
                      obj5[0] = lib;
                      obj5[1] = paths;
                      const _Number = Number;
                      obj5[2] = Number(closure_5.v);
                      obj5[3] = lib2.logger;
                      obj5[4] = closure_1_14;
                      const encoding = closure_5.encoding;
                      json = encoding;
                      if (encoding == null) {
                        json = "json";
                      }
                      obj5[5] = json;
                      user = lib2.createPostMessageProxySocket(obj5);
                      c7 = 0;
                      const logger5 = lib2.logger;
                      const _HermesInternal6 = HermesInternal;
                      logger5.info("Socket Opened: " + user.id);
                      c7 = 3;
                      throwTypeErrorResult = closure_5;
                      c8 = 5;
                      c9 = 1;
                      const obj6 = { value: null, done: false };
                      obj6[0] = lib2.validateSocketClient(user, lib.origin, closure_5.client_id);
                      return obj6;
                    }
                  }
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = lib2;
                  const logger6 = lib2.logger;
                  throwTypeErrorResult = frame_id;
                  throwTypeErrorResult = lib;
                  const _HermesInternal7 = HermesInternal;
                  throwTypeErrorResult = logger6.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + lib.iframeId);
                  throwTypeErrorResult = lib2;
                  throwTypeErrorResult = paths;
                  const obj7 = { closeCode: null };
                  throwTypeErrorResult = c9;
                  obj7[0] = c9.CLOSE_UNSUPPORTED;
                  throwTypeErrorResult = frame_id;
                  const _HermesInternal8 = HermesInternal;
                  throwTypeErrorResult = lib2(paths[11]);
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = obj7;
                  throwTypeErrorResult = new throwTypeErrorResult(obj7, "Unrecognized iframe ID " + frame_id);
                  throw throwTypeErrorResult;
                }
              } else if (2 === tmp9) {
                c7 = 0;
                c7 = c6;
                const obj8 = { closeCode: null };
                obj8[0] = c9.CLOSE_UNSUPPORTED;
                const tmp67 = new lib2(paths[11])(obj8, c7.message);
                throw tmp67;
              } else if (3 === tmp9) {
                c7 = 0;
                c8 = c6;
                const logger4 = lib2.logger;
                const _HermesInternal5 = HermesInternal;
                logger4.error("Error opening window socket " + c8);
                throw c8;
              } else if (4 === tmp9) {
                c7 = 0;
                c9 = c6;
                const logger3 = lib2.logger;
                const _HermesInternal4 = HermesInternal;
                logger3.info("Socket Closed: " + user.id + ", " + c9.message);
                throw c9;
              } else if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                throwTypeErrorResult = user;
                throwTypeErrorResult = c5;
                throwTypeErrorResult = closure_1_13;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = user;
                throwTypeErrorResult = c5;
                if (closure_1_13.has(lib.iframeId)) {
                  const result = closure_1_12.set(lib.iframeId, user);
                  closure_1_13.delete(lib.iframeId);
                  const scopes = user.authorization.scopes;
                  scopes.push(frame_id);
                  lib2.emit("connect", user);
                  const logger2 = lib2.logger;
                  const _HermesInternal3 = HermesInternal;
                  logger2.info("Socket Validated: " + user.id);
                  c7 = 0;
                  c9 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  const logger = lib2.logger;
                  const _HermesInternal = HermesInternal;
                  logger.error("Iframe ID " + lib.iframeId + " no longer exists");
                  obj = { closeCode: null };
                  obj[0] = c9.CLOSE_UNSUPPORTED;
                  const _HermesInternal2 = HermesInternal;
                  let tmp15 = lib2(paths[11]);
                  tmp15 = new tmp15(obj, "Unrecognized iframe ID " + lib.iframeId);
                  throw tmp15;
                }
              }
            } catch (throwTypeErrorResult) {
              c6 = throwTypeErrorResult;
              throwTypeErrorResult = c7;
              if (tmp5 === c7) {
                throwTypeErrorResult = tmp3;
                c9 = tmp3;
                throw throwTypeErrorResult;
              } else if (tmp2 === throwTypeErrorResult) {
                c8 = throwTypeErrorResult;
              } else if (throwTypeErrorResult === throwTypeErrorResult) {
                c8 = tmp3;
              } else {
                c8 = tmp6;
              }
            }
          }
        }
      })();
    });
    tmp4.handleHandshake = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = undefined;
    closure_1 = tmp4;
    closure_0 = closure_3((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c6 = 0;
      c7 = 0;
      c5 = 0;
      return (function*(arg0, arg1) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let message = tmp3;
                c2 = tmp7;
                c2 = undefined;
                c6 = 1;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = callback(closure_2[13])(closure_2[12], closure_2.paths);
                return obj1;
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_2 = arg1.default;
                c5 = 1;
                const obj6 = lib(closure_2[14])(c2);
                const obj3 = { code: null, message: null };
                const requiredResult = lib(closure_2[14])(c2).required();
                const _Object = Object;
                const numberResult = c2.number();
                obj3[0] = c2.number().valid(Object.values(closure_1_9)).required();
                const validResult = c2.number().valid(Object.values(closure_1_9));
                obj3[1] = c2.string().optional();
                c2.assert(lib, requiredResult.keys(obj3));
                c5 = 0;
                lib.disconnectSocket(callback, lib);
                c7 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              c5 = 0;
              message = closure_4;
              obj = { closeCode: null };
              obj[0] = closure_1_9.CLOSE_UNSUPPORTED;
              const tmp19 = new lib(closure_2[11])(obj, message.message);
              throw tmp19;
            }
          } catch (tmp27) {
            closure_4 = tmp27;
            if (tmp4 === c5) {
              c7 = tmp2;
              throw tmp27;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
    });
    tmp4.handleClose = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    ComponentDispatch = require("ComponentDispatcher").ComponentDispatch;
    subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_MOUNT, tmp4.handleIFrameMount);
    ComponentDispatch2 = require("ComponentDispatcher").ComponentDispatch;
    subscription1 = ComponentDispatch2.subscribe(ComponentActions.IFRAME_UNMOUNT, tmp4.handleIFrameUnmount);
    tmp4.validateSocketClient = global;
    tmp4.logger = arg1;
    tmp4.createPostMessageProxySocket = importDefault;
    tmp4.onFrameHandled = importAll;
    return tmp4;
  }
}
PostMessageTransport.prototype["routeEvent"] = function routeEvent(value, iframeId, arg2, arg3) {
  if (Array.isArray(arg2)) {
    const self = this;
    [tmp5, tmp6] = callback2(arg2, 2);
    if (HANDSHAKEDefault.HANDSHAKE === tmp5) {
      if (null != value) {
        let obj = { closeCode: null };
        obj[0] = constants2.CLOSE_UNSUPPORTED;
        const tmp35 = new tmp7(9464)(obj, "Already connected");
        throw tmp35;
      } else {
        return self.handleHandshake(iframeId, tmp6, arg3);
      }
    } else if (tmp7(9463).FRAME === tmp5) {
      if (null == value) {
        obj = { closeCode: null };
        obj[0] = constants2.CLOSE_UNSUPPORTED;
        const tmp27 = new tmp7(9464)(obj, "Not connected");
        throw tmp27;
      } else {
        return self.handleFrame(iframeId, value, tmp6);
      }
    } else if (tmp7(9463).CLOSE === tmp5) {
      if (null == value) {
        obj1 = { closeCode: null };
        obj1[0] = constants2.CLOSE_UNSUPPORTED;
        const tmp20 = new tmp7(9464)(obj1, "Not connected");
        throw tmp20;
      } else {
        return self.handleClose(value, tmp6);
      }
    } else {
      obj = { closeCode: null };
      obj[0] = constants2.CLOSE_UNSUPPORTED;
      const tmp13 = new tmp7(9464)(obj, "Invalid opcode");
      throw tmp13;
    }
    const tmp4 = callback2(arg2, 2);
  }
};
let result = set.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;