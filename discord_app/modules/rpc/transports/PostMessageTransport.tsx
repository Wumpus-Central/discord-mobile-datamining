// discord_app/modules/rpc/transports/PostMessageTransport.tsx
import closure_3 from "set";
import _slicedToArray from "_slicedToArray";
import participantFromServer from "participantFromServer";
import { RPC_EMBEDDED_APP_SCOPE } from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { EventEmitter } from "EventEmitter";
import set from "participantFromServer";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: error, ComponentActions: metroImportAll, RPCCloseCodes: c9, RPCErrors: c10 } = ME);
let closure_11 = 10 * require("set").Millis.SECOND;
const map = new Map();
let set = new Set();
function postClose(origin, arg1, postMessageToRPCClient) {
  const items = [importDefault(10639).CLOSE, arg1];
  postMessageToRPCClient(items, origin);
}
class PostMessageTransport extends EventEmitter {
  constructor(arg0, arg1, arg2, arg3) {
    tmp4 = new PostMessageTransport(tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    f107519 = tmp4;
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
      let found = Array.from(outer1_12.entries()).find((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp === closure_0;
      });
      if (found == null) {
        found = [null, null];
      }
      const first = outer1_4(found, 1)[0];
      if (null != first) {
        outer1_12.delete(first);
      }
    };
    tmp4.handleIFrameMount = function handleIFrameMount(id) {
      outer1_13.add(id.id);
      closure_0.handshakeFailureTimeoutId = setTimeout(() => {
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        const item = Array.from(selfEmbeddedActivities.entries()).forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          let obj = callback2(698);
          obj = { application_id: tmp, channel_id: null, guild_id: null, timeout_ms: null };
          obj[1] = callback(3811).getEmbeddedActivityLocationChannelId(tmp2.location);
          const obj3 = callback(3811);
          obj[2] = callback(3811).getEmbeddedActivityLocationGuildId(tmp2.location);
          obj[3] = closure_11;
          obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
        });
      }, outer1_11);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      let tmp3;
      let tmp4;
      id = id.id;
      outer1_13.delete(id);
      let obj = outer1_12;
      let found = Array.from(outer1_12.entries()).find((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp.frameId === id;
      });
      if (found == null) {
        found = [null, null];
      }
      const arr = Array.from(outer1_12.entries());
      [tmp3, tmp4] = outer1_4(found, 2);
      if (tmp5) {
        obj = { code: null, message: "iFrame gone" };
        obj[0] = outer1_9.CLOSE_NORMAL;
        id.disconnectSocket(tmp4, obj, true);
        obj.delete(tmp3);
      }
    };
    tmp4.handleMessage = function handleMessage(arg0, arg1, arg2) {
      const value = outer1_12.get(arg1);
      try {
        closure_0.routeEvent(value, arg1, arg0, arg2);
      } catch (tmp12) {
        if (tmp12 instanceof tmp4(outer1_2[11])) {
          if (tmp12.errorCode === outer1_10.INVALID_PAYLOAD) {
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
          outer1_14(tmp3, obj, tmp2);
        }
      }
    };
    tmp4.handleFrame = function handleFrame(arg0, origin, arg2) {
      if (arg0 !== origin.origin) {
        let obj = { closeCode: null };
        obj[0] = outer1_9.INVALID_ORIGIN;
        const tmp24 = new tmp4(outer1_2[11])(obj, "Origin has changed");
        throw tmp24;
      } else {
        try {
          let parsed = arg2;
          if (typeof arg2 !== "__FORMATJS_LISTFORMAT_DATA__") {
            const _JSON = JSON;
            parsed = JSON.parse(arg2);
          }
          obj = closure_0;
          const onFrameHandled = closure_0.onFrameHandled;
          if (onFrameHandled != null) {
            onFrameHandled(tmp4, obj.logger, origin);
          }
          obj.emit("request", origin, parsed);
        } catch (err) {
          obj = { closeCode: null };
          obj[0] = outer1_9.CLOSE_UNSUPPORTED;
          const tmp16 = new tmp4(outer1_2[11])(obj, "Payload not recognized encoding");
          throw tmp16;
        }
      }
    };
    f107519 = undefined;
    closure_1 = tmp4;
    f107519 = closure_3((arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let c8 = 0;
      let c9 = 0;
      let c7 = 0;
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
              return { value: "HermesInternal", done: null };
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
                  let c5 = tmp4;
                  let user = tmp9;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = paths;
                  let json;
                  user = undefined;
                  c5 = undefined;
                  let c6;
                  throwTypeErrorResult = lib;
                  if (null != lib.handshakeFailureTimeoutId) {
                    const _clearTimeout = clearTimeout;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = clearTimeout(lib.handshakeFailureTimeoutId);
                  }
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = paths;
                  throwTypeErrorResult = paths;
                  throwTypeErrorResult = paths;
                  c8 = 1;
                  c9 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = callback(paths[13])(paths[12], paths.paths);
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
                  const outer1_3 = arg1.default;
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = c5;
                  let c7 = 1;
                  throwTypeErrorResult = json;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = paths;
                  throwTypeErrorResult = json;
                  const obj13 = lib(paths[14])(json);
                  const obj3 = { v: null, encoding: null, client_id: null, frame_id: null, sdk_version: null };
                  throwTypeErrorResult = json;
                  const requiredResult = lib(paths[14])(json).required();
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
                  throwTypeErrorResult = json.assert(lib, requiredResult.keys(obj3));
                  c7 = 0;
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = c5;
                  throwTypeErrorResult = lib;
                  const outer1_5 = lib;
                  throwTypeErrorResult = outer1_5;
                  const outer1_6 = outer1_5.frame_id;
                  throwTypeErrorResult = outer1_13;
                  throwTypeErrorResult = outer1_6;
                  throwTypeErrorResult = user;
                  if (outer1_13.has(outer1_6)) {
                    if (null != outer1_5.sdk_version) {
                      let obj4 = lib(paths[9]);
                      obj4 = { application_id: null, sdk_version: null };
                      obj4[0] = c5.client_id;
                      obj4[1] = c5.sdk_version;
                      obj4.track(c7.ACTIVITY_HANDSHAKE, obj4);
                    }
                    c7 = 2;
                    const obj5 = { origin: null, postMessageToRPCClient: null, frameId: null, version: null, logger: null, postClose: null, encoding: null };
                    obj5[0] = callback;
                    obj5[1] = paths;
                    obj5[2] = outer1_6;
                    const _Number = Number;
                    obj5[3] = Number(outer1_5.v);
                    obj5[4] = lib.logger;
                    throwTypeErrorResult = outer1_14;
                    obj5[5] = outer1_14;
                    throwTypeErrorResult = outer1_5;
                    const encoding = outer1_5.encoding;
                    json = encoding;
                    if (encoding == null) {
                      json = "json";
                    }
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = json;
                    obj5[6] = json;
                    const outer1_4 = lib.createPostMessageProxySocket(obj5);
                    c7 = 0;
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = c5;
                    throwTypeErrorResult = lib;
                    const logger6 = lib.logger;
                    throwTypeErrorResult = outer1_4;
                    const _HermesInternal8 = HermesInternal;
                    throwTypeErrorResult = logger6.info("Socket Opened: " + outer1_4.id);
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = c5;
                    c7 = 3;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = outer1_4;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = outer1_5;
                    c8 = 5;
                    c9 = 1;
                    const obj6 = { value: null, done: false };
                    obj6[0] = lib.validateSocketClient(outer1_4, callback, outer1_5.client_id);
                    return obj6;
                  } else {
                    const logger5 = lib.logger;
                    const _HermesInternal6 = HermesInternal;
                    logger5.error("Unrecognized frame ID " + outer1_6);
                    const obj7 = { closeCode: null };
                    obj7[0] = c9.CLOSE_UNSUPPORTED;
                    const _HermesInternal7 = HermesInternal;
                    let tmp75 = lib(paths[11]);
                    tmp75 = new tmp75(obj7, "Unrecognized frame ID " + outer1_6);
                    throw tmp75;
                  }
                  const stringResult3 = json.string();
                }
              } else if (2 === tmp9) {
                c7 = 0;
                c7 = c6;
                const obj8 = { closeCode: null };
                obj8[0] = c9.CLOSE_UNSUPPORTED;
                const tmp67 = new lib(paths[11])(obj8, c7.message);
                throw tmp67;
              } else if (3 === tmp9) {
                c7 = 0;
                c8 = c6;
                const logger4 = lib.logger;
                const _HermesInternal5 = HermesInternal;
                logger4.error("Error opening window socket " + c8);
                throw c8;
              } else if (4 === tmp9) {
                c7 = 0;
                c9 = c6;
                const logger3 = lib.logger;
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
                throwTypeErrorResult = outer1_13;
                throwTypeErrorResult = c6;
                throwTypeErrorResult = user;
                throwTypeErrorResult = c5;
                if (outer1_13.has(c6)) {
                  const result = outer1_12.set(callback, user);
                  outer1_13.delete(c6);
                  const scopes = user.authorization.scopes;
                  scopes.push(outer1_6);
                  lib.emit("connect", user);
                  const logger2 = lib.logger;
                  const _HermesInternal3 = HermesInternal;
                  logger2.info("Socket Validated: " + user.id);
                  c7 = 0;
                  c9 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const logger = lib.logger;
                  const _HermesInternal = HermesInternal;
                  logger.error("Frame ID " + c6 + " no longer exists");
                  obj = { closeCode: null };
                  obj[0] = c9.CLOSE_UNSUPPORTED;
                  const _HermesInternal2 = HermesInternal;
                  let tmp15 = lib(paths[11]);
                  tmp15 = new tmp15(obj, "Unrecognized frame ID " + c6);
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
    f107519 = undefined;
    closure_1 = tmp4;
    f107519 = closure_3((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
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
            return { value: "HermesInternal", done: null };
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
                let c2 = tmp7;
                c2 = undefined;
                c6 = 1;
                c7 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = callback(outer1_2[13])(outer1_2[12], outer1_2.paths);
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
                outer1_2 = arg1.default;
                let c5 = 1;
                const obj6 = lib(outer1_2[14])(c2);
                const obj3 = { code: null, message: null };
                const requiredResult = lib(outer1_2[14])(c2).required();
                const _Object = Object;
                const numberResult = c2.number();
                obj3[0] = c2.number().valid(Object.values(outer1_9)).required();
                const validResult = c2.number().valid(Object.values(outer1_9));
                obj3[1] = c2.string().optional();
                c2.assert(lib, requiredResult.keys(obj3));
                c5 = 0;
                lib.disconnectSocket(callback, lib);
                c7 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else {
              c5 = 0;
              message = _slicedToArray;
              obj = { closeCode: null };
              obj[0] = outer1_9.CLOSE_UNSUPPORTED;
              const tmp19 = new lib(outer1_2[11])(obj, message.message);
              throw tmp19;
            }
          } catch (tmp27) {
            _slicedToArray = tmp27;
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
PostMessageTransport.prototype["routeEvent"] = function routeEvent(value, arg1, arg2, arg3) {
  let tmp5;
  let tmp6;
  if (Array.isArray(arg2)) {
    const self = this;
    [tmp5, tmp6] = callback2(arg2, 2);
    if (importDefault(10639).HANDSHAKE === tmp5) {
      if (null != value) {
        let obj = { closeCode: null };
        obj[0] = constants2.CLOSE_UNSUPPORTED;
        const tmp35 = new tmp7(10640)(obj, "Already connected");
        throw tmp35;
      } else {
        return self.handleHandshake(arg1, tmp6, arg3);
      }
    } else if (tmp7(10639).FRAME === tmp5) {
      if (null == value) {
        obj = { closeCode: null };
        obj[0] = constants2.CLOSE_UNSUPPORTED;
        const tmp27 = new tmp7(10640)(obj, "Not connected");
        throw tmp27;
      } else {
        return self.handleFrame(arg1, value, tmp6);
      }
    } else if (tmp7(10639).CLOSE === tmp5) {
      if (null == value) {
        const obj1 = { closeCode: null };
        obj1[0] = constants2.CLOSE_UNSUPPORTED;
        const tmp20 = new tmp7(10640)(obj1, "Not connected");
        throw tmp20;
      } else {
        return self.handleClose(value, tmp6);
      }
    } else {
      obj = { closeCode: null };
      obj[0] = constants2.CLOSE_UNSUPPORTED;
      const tmp13 = new tmp7(10640)(obj, "Invalid opcode");
      throw tmp13;
    }
    const tmp4 = callback2(arg2, 2);
  }
};
let result = set.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;