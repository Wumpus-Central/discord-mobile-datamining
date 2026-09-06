// === Module 9552: PostMessageTransport ===

// Module 9552 (PostMessageTransport)
import DurationsDefault from "Durations" /* 1090 */;
import RPCOpcodesDefault from "RPCOpcodes" /* 9553 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

const require = fn;
const RPC_EMBEDDED_APP_SCOPE = fn(4465).RPC_EMBEDDED_APP_SCOPE;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, ComponentActions: closure_8, RPCCloseCodes: closure_9, RPCErrors: c10 } = Constants);
let closure_11 = 10 * DurationsDefault.Millis.SECOND;
const map = new Map();
const set = new Set();
function postClose(source, arg1, postMessageToRPCClient) {
  const items = [RPCOpcodesDefault.CLOSE, arg1];
  postMessageToRPCClient(items, source.origin);
}
const EventEmitter = fn(568).EventEmitter;
class PostMessageTransport extends EventEmitter {
  constructor(arg0, arg1, arg2, arg3) {
    tmp4 = new PostMessageTransport(tmp3, tmp2, tmp);
    closure_0 = tmp4;
    tmp4.disconnectSocket = function disconnectSocket(close, message, arg2) {
      closure_0 = close;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let tmp2;
      if (!flag) {
        tmp2 = message;
      }
      closure_0.emit("disconnect", close, tmp2);
      let str = message.message;
      if (str == null) {
        str = "Unknown";
      }
      close.close(message.code, str);
      let found = Array.from(map.entries()).find((item) => {
        [, tmp] = item;
        return tmp === closure_0;
      });
      if (found == null) {
        found = [null, null];
      }
      const first = _slicedToArray(found, 1)[0];
      if (null != first) {
        map.delete(first);
      }
      const arr = Array.from(map.entries());
    };
    tmp4.handleIFrameMount = function handleIFrameMount(id) {
      set.add(id.id);
      closure_0.handshakeFailureTimeoutId = setTimeout(() => {
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        const item = Array.from(selfEmbeddedActivities.entries()).forEach((item) => {
          [tmp, tmp2] = item;
          closure_1_1(1242);
          const obj = { application_id: tmp, channel_id: closure_1_0(4189).getEmbeddedActivityLocationChannelId(tmp2.location), guild_id: null, timeout_ms: null };
          const obj3 = closure_1_0(4189);
          obj.guild_id = closure_1_0(4189).getEmbeddedActivityLocationGuildId(tmp2.location);
          obj.timeout_ms = timeout_ms;
          obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
        });
      }, closure_11);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      id = id.id;
      set.delete(id);
      let obj = map;
      let found = Array.from(map.entries()).find((item) => {
        [, tmp] = item;
        return tmp.source.iframeId === id;
      });
      if (found == null) {
        found = [null, null];
      }
      const arr = Array.from(map.entries());
      [tmp3, tmp4] = _slicedToArray(found, 2);
      if (tmp5) {
        obj = { code: constants2.CLOSE_NORMAL, message: "iFrame gone" };
        closure_0.disconnectSocket(tmp4, obj, true);
        obj.delete(tmp3);
      }
      const tmp2 = _slicedToArray(found, 2);
      tmp5 = null != tmp4 && null != tmp3;
    };
    tmp4.handleMessage = function handleMessage(arg0, iframeId, arg2) {
      value = map.get(iframeId.iframeId);
      try {
        closure_0.routeEvent(value, iframeId, arg0, arg2);
      } catch (tmp12) {
        if (tmp12 instanceof RPCErrorDefault) {
          if (tmp12.errorCode === constants3.INVALID_PAYLOAD) {
            throw tmp12;
          }
        }
        if (null != tmp) {
          let obj = { code: null, message: null };
          ({ code: obj2.code, message: obj2.message } = tmp12);
          closure_0.disconnectSocket(tmp, obj, true);
        } else {
          obj = { code: null, message: null };
          ({ code: obj.code, message: obj.message } = tmp12);
          postClose(tmp3, obj, tmp2);
        }
      }
    };
    tmp4.handleFrame = function handleFrame(origin, source, str) {
      if (origin.origin !== source.source.origin) {
        let obj = { closeCode: constants2.INVALID_ORIGIN };
        const tmp24 = new RPCErrorDefault(obj, "Origin has changed");
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
          obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp16 = new RPCErrorDefault(obj, "Payload not recognized encoding");
          throw tmp16;
        }
      }
    };
    closure_129_0 = undefined;
    closure_129_1 = tmp4;
    closure_129_0 = closure_3(async (arg0, arg1, arg2) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const paths = arg2;
      c8 = 0;
      c9 = 0;
      c7 = 0;
      return (async (arg0, value, arg2) => {
        if (constants2 === 2) {
          constants2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
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
            constants2 = 2;
            if (0 === c8) {
              if (arg0 === 1) {
                constants2 = 3;
                throw value;
              } else if (arg0 === 2) {
                constants2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_5 = tmp4;
                closure_4 = tmp9;
                closure_132_0 = closure_0;
                closure_132_1 = closure_1;
                closure_132_2 = paths;
                closure_132_3 = undefined;
                closure_132_4 = undefined;
                closure_132_5 = undefined;
                let frame_id;
                if (null != importDefault.handshakeFailureTimeoutId) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(importDefault.handshakeFailureTimeoutId);
                }
                c8 = 1;
                constants2 = 1;
                const obj1 = { value: closure_0(paths[13])(paths[12], paths.paths), done: false };
                return obj1;
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                constants2 = 3;
                throw value;
              } else if (arg0 === 2) {
                constants2 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_132_3 = value.default;
                constants = 1;
                const obj13 = closure_1(paths[14])(closure_132_3);
                let obj3 = { v: null, encoding: null, client_id: null, frame_id: null, sdk_version: null };
                const requiredResult = closure_1(paths[14])(closure_132_3).required();
                const numberResult = closure_132_3.number();
                const minResult = closure_132_3.number().min(1);
                obj3.v = closure_132_3.number().min(1).max(1).required();
                const maxResult = closure_132_3.number().min(1).max(1);
                const stringResult = closure_132_3.string();
                obj3.encoding = closure_132_3.string().equal("json").optional();
                const equalResult = closure_132_3.string().equal("json");
                obj3.client_id = closure_132_3.string().required();
                const stringResult1 = closure_132_3.string();
                obj3.frame_id = closure_132_3.string().required();
                const stringResult2 = closure_132_3.string();
                obj3.sdk_version = closure_132_3.string().optional();
                closure_132_3.assert(closure_132_1, requiredResult.keys(obj3));
                constants = 0;
                closure_132_5 = closure_132_1;
                frame_id = closure_132_5.frame_id;
                if (frame_id === closure_132_0.iframeId) {
                  if (set.has(closure_132_0.iframeId)) {
                    if (null != closure_132_5.sdk_version) {
                      obj3 = closure_1(paths[9]);
                      const obj4 = { application_id: closure_132_5.client_id, sdk_version: closure_132_5.sdk_version };
                      obj3.track(constants.ACTIVITY_HANDSHAKE, obj4);
                    }
                    constants = 2;
                    const obj5 = { source: closure_132_0, postMessageToRPCClient: closure_132_2, version: null, logger: null, postClose: null, encoding: null };
                    const _Number = Number;
                    obj5.version = Number(closure_132_5.v);
                    obj5.logger = closure_133_1.logger;
                    obj5.postClose = postClose;
                    const encoding = closure_132_5.encoding;
                    json = encoding;
                    if (encoding == null) {
                      json = "json";
                    }
                    obj5.encoding = json;
                    closure_132_4 = closure_133_1.createPostMessageProxySocket(obj5);
                    constants = 0;
                    const logger5 = closure_133_1.logger;
                    const _HermesInternal6 = HermesInternal;
                    logger5.info("Socket Opened: " + closure_132_4.id);
                    constants = 3;
                    c8 = 5;
                    constants2 = 1;
                    const obj6 = { value: closure_133_1.validateSocketClient(closure_132_4, closure_132_0.origin, closure_132_5.client_id), done: false };
                    return obj6;
                  }
                }
                const logger6 = closure_133_1.logger;
                const _HermesInternal7 = HermesInternal;
                logger6.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + closure_132_0.iframeId);
                const obj7 = { closeCode: constants2.CLOSE_UNSUPPORTED };
                const _HermesInternal8 = HermesInternal;
                let tmp109 = closure_1(paths[11]);
                tmp109 = new tmp109(obj7, "Unrecognized iframe ID " + frame_id);
                throw tmp109;
              }
            } else if (2 === tmp9) {
              constants = 0;
              closure_132_7 = closure_6;
              const obj8 = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const tmp67 = new closure_1(paths[11])(obj8, closure_132_7.message);
              throw tmp67;
            } else if (3 === tmp9) {
              constants = 0;
              closure_132_8 = closure_6;
              const logger4 = closure_133_1.logger;
              const _HermesInternal5 = HermesInternal;
              logger4.error("Error opening window socket " + closure_132_8);
              throw closure_132_8;
            } else if (4 === tmp9) {
              constants = 0;
              closure_132_9 = closure_6;
              const logger3 = closure_133_1.logger;
              const _HermesInternal4 = HermesInternal;
              logger3.info("Socket Closed: " + closure_132_4.id + ", " + closure_132_9.message);
              throw closure_132_9;
            } else if (arg0 === 1) {
              constants2 = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 0;
              constants2 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else if (set.has(closure_132_0.iframeId)) {
              const result = closure_1_12.set(closure_132_0.iframeId, closure_132_4);
              set.delete(closure_132_0.iframeId);
              const scopes = closure_132_4.authorization.scopes;
              scopes.push(closure_6);
              closure_133_1.emit("connect", closure_132_4);
              const logger2 = closure_133_1.logger;
              const _HermesInternal3 = HermesInternal;
              logger2.info("Socket Validated: " + closure_132_4.id);
              constants = 0;
              constants2 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const logger = closure_133_1.logger;
              const _HermesInternal = HermesInternal;
              logger.error("Iframe ID " + closure_132_0.iframeId + " no longer exists");
              obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const _HermesInternal2 = HermesInternal;
              let tmp15 = closure_1(paths[11]);
              tmp15 = new tmp15(obj, "Unrecognized iframe ID " + closure_132_0.iframeId);
              throw tmp15;
            }
          } catch (tmp123) {
            closure_6 = tmp123;
            if (tmp5 === constants) {
              constants2 = tmp3;
              throw tmp123;
            } else if (tmp2 === tmp125) {
              c8 = tmp;
            } else if (tmp === tmp125) {
              c8 = tmp3;
            } else {
              c8 = tmp6;
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
    closure_130_0 = undefined;
    closure_130_1 = tmp4;
    closure_130_0 = closure_3(async (arg0, arg1) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              const paths = tmp7;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              c6 = 1;
              c7 = 1;
              const obj1 = { value: closure_0(paths[13])(paths[12], paths.paths), done: false };
              return obj1;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_130_2 = value.default;
              c5 = 1;
              const obj6 = closure_1(paths[14])(closure_130_2);
              const obj3 = { code: null, message: null };
              const requiredResult = closure_1(paths[14])(closure_130_2).required();
              const _Object = Object;
              const numberResult = closure_130_2.number();
              obj3.code = closure_130_2.number().valid(Object.values(constants)).required();
              const validResult = closure_130_2.number().valid(Object.values(constants));
              obj3.message = closure_130_2.string().optional();
              closure_130_2.assert(closure_130_1, requiredResult.keys(obj3));
              c5 = 0;
              closure_131_1.disconnectSocket(closure_130_0, closure_130_1);
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            c5 = 0;
            closure_130_3 = closure_4;
            obj = { closeCode: constants.CLOSE_UNSUPPORTED };
            const tmp19 = new closure_1(paths[11])(obj, closure_130_3.message);
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
    ComponentDispatch = closure_0(closure_2[8]).ComponentDispatch;
    subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_MOUNT, tmp4.handleIFrameMount);
    ComponentDispatch2 = closure_0(closure_2[8]).ComponentDispatch;
    subscription1 = ComponentDispatch2.subscribe(ComponentActions.IFRAME_UNMOUNT, tmp4.handleIFrameUnmount);
    tmp4.validateSocketClient = global;
    tmp4.logger = fn;
    tmp4.createPostMessageProxySocket = importDefault;
    tmp4.onFrameHandled = importAll;
    return tmp4;
  }
}
PostMessageTransport.prototype["routeEvent"] = function routeEvent(value, iframeId, arg2, arg3) {
  if (Array.isArray(arg2)) {
    const self = this;
    [tmp5, tmp6] = _slicedToArray(arg2, 2);
    if (RPCOpcodesDefault.HANDSHAKE === tmp5) {
      if (null != value) {
        let obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp35 = new RPCErrorDefault(obj, "Already connected");
        throw tmp35;
      } else {
        return self.handleHandshake(iframeId, tmp6, arg3);
      }
    } else if (RPCOpcodesDefault.FRAME === tmp5) {
      if (null == value) {
        obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp27 = new RPCErrorDefault(obj, "Not connected");
        throw tmp27;
      } else {
        return self.handleFrame(iframeId, value, tmp6);
      }
    } else if (RPCOpcodesDefault.CLOSE === tmp5) {
      if (null == value) {
        const obj1 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp20 = new RPCErrorDefault(obj1, "Not connected");
        throw tmp20;
      } else {
        return self.handleClose(value, tmp6);
      }
    } else {
      obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
      const tmp13 = new RPCErrorDefault(obj, "Invalid opcode");
      throw tmp13;
    }
    const tmp4 = _slicedToArray(arg2, 2);
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;