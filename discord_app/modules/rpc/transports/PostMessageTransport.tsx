// === Module 9578: PostMessageTransport ===

// Module 9578 (PostMessageTransport)
import DurationsDefault from "Durations" /* 1091 */;
import RPCOpcodesDefault from "RPCOpcodes" /* 9579 */;
import RPCErrorDefault from "RPCError" /* 9580 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;

const require = fn;
const RPC_EMBEDDED_APP_SCOPE = fn(4660).RPC_EMBEDDED_APP_SCOPE;
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
          const obj2 = { application_id: tmp, channel_id: null, guild_id: null, timeout_ms: null };
          const obj = closure_1_1(1241);
          obj2.channel_id = closure_1_0(4385).getEmbeddedActivityLocationChannelId(tmp2.location);
          const obj3 = closure_1_0(4385);
          obj2.guild_id = closure_1_0(4385).getEmbeddedActivityLocationGuildId(tmp2.location);
          obj2.timeout_ms = timeout_ms;
          obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj2);
        });
      }, closure_11);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      id = id.id;
      set.delete(id);
      let found = Array.from(map.entries()).find((item) => {
        [, tmp] = item;
        return tmp.source.iframeId === id;
      });
      if (found == null) {
        found = [null, null];
      }
      const arr = Array.from(map.entries());
      [tmp3, tmp4] = found;
      if (tmp5) {
        const obj2 = { code: constants2.CLOSE_NORMAL, message: "iFrame gone" };
        closure_0.disconnectSocket(tmp4, obj2, true);
        map.delete(tmp3);
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
          ({ code: obj2.code, message: obj2.message } = tmp12);
          closure_0.disconnectSocket(tmp, { code: null, message: null }, true);
          const obj3 = { code: null, message: null };
        } else {
          const obj = { code: null, message: null };
          ({ code: obj.code, message: obj.message } = tmp12);
          postClose(tmp3, obj, tmp2);
        }
      }
    };
    tmp4.handleFrame = function handleFrame(origin, source, str) {
      if (origin.origin !== source.source.origin) {
        const obj2 = { closeCode: constants2.INVALID_ORIGIN };
        const tmp24 = new RPCErrorDefault(obj2, "Origin has changed");
        throw tmp24;
      } else {
        try {
          let parsed = str;
          if (typeof str === "string") {
            const _JSON = JSON;
            parsed = JSON.parse(str);
          }
          const onFrameHandled = closure_0.onFrameHandled;
          if (onFrameHandled != null) {
            onFrameHandled(tmp4, closure_0.logger, source);
          }
          closure_0.emit("request", source, parsed);
        } catch (err) {
          const obj3 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp16 = new RPCErrorDefault(obj3, "Payload not recognized encoding");
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
            const obj2 = { value, done: true };
            return obj2;
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
                const obj3 = { value, done: true };
                return obj3;
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
                const obj5 = { value: closure_0(paths[13])(paths[12], paths.paths), done: false };
                return obj5;
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                constants2 = 3;
                throw value;
              } else if (arg0 === 2) {
                constants2 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_132_3 = value.default;
                constants = 1;
                const obj13 = closure_1(paths[14])(closure_132_3);
                const obj7 = { v: null, encoding: null, client_id: null, frame_id: null, sdk_version: null };
                const requiredResult = closure_1(paths[14])(closure_132_3).required();
                const numberResult = closure_132_3.number();
                const minResult = closure_132_3.number().min(1);
                obj7.v = closure_132_3.number().min(1).max(1).required();
                const maxResult = closure_132_3.number().min(1).max(1);
                const stringResult = closure_132_3.string();
                obj7.encoding = closure_132_3.string().equal("json").optional();
                const equalResult = closure_132_3.string().equal("json");
                obj7.client_id = closure_132_3.string().required();
                const stringResult1 = closure_132_3.string();
                obj7.frame_id = closure_132_3.string().required();
                const stringResult2 = closure_132_3.string();
                obj7.sdk_version = closure_132_3.string().optional();
                closure_132_3.assert(closure_132_1, requiredResult.keys(obj7));
                constants = 0;
                closure_132_5 = closure_132_1;
                frame_id = closure_132_5.frame_id;
                if (frame_id === closure_132_0.iframeId) {
                  if (set.has(closure_132_0.iframeId)) {
                    if (null != closure_132_5.sdk_version) {
                      const obj8 = { application_id: closure_132_5.client_id, sdk_version: closure_132_5.sdk_version };
                      closure_1(paths[9]).track(constants.ACTIVITY_HANDSHAKE, obj8);
                      const obj4 = closure_1(paths[9]);
                    }
                    constants = 2;
                    const obj9 = { source: closure_132_0, postMessageToRPCClient: closure_132_2, version: null, logger: null, postClose: null, encoding: null };
                    const _Number = Number;
                    obj9.version = Number(closure_132_5.v);
                    obj9.logger = closure_133_1.logger;
                    obj9.postClose = postClose;
                    const encoding = closure_132_5.encoding;
                    json = encoding;
                    if (encoding == null) {
                      json = "json";
                    }
                    obj9.encoding = json;
                    closure_132_4 = closure_133_1.createPostMessageProxySocket(obj9);
                    constants = 0;
                    const logger5 = closure_133_1.logger;
                    const _HermesInternal6 = HermesInternal;
                    logger5.info("Socket Opened: " + closure_132_4.id);
                    constants = 3;
                    c8 = 5;
                    constants2 = 1;
                    const obj10 = { value: closure_133_1.validateSocketClient(closure_132_4, closure_132_0.origin, closure_132_5.client_id), done: false };
                    return obj10;
                  }
                }
                const logger6 = closure_133_1.logger;
                const _HermesInternal7 = HermesInternal;
                logger6.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + closure_132_0.iframeId);
                const obj11 = { closeCode: constants2.CLOSE_UNSUPPORTED };
                const _HermesInternal8 = HermesInternal;
                const stringResult3 = closure_132_3.string();
                const tmp1092 = new closure_1(paths[11])(obj11, "Unrecognized iframe ID " + frame_id);
                throw tmp1092;
              }
            } else if (2 === tmp9) {
              constants = 0;
              closure_132_7 = closure_6;
              const obj12 = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const tmp67 = new closure_1(paths[11])(obj12, closure_132_7.message);
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
              const obj14 = { value, done: true };
              return obj14;
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
              const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const _HermesInternal2 = HermesInternal;
              const tmp151 = new closure_1(paths[11])(obj, "Unrecognized iframe ID " + closure_132_0.iframeId);
              throw tmp151;
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp3;
              const paths = tmp7;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: closure_0(paths[13])(paths[12], paths.paths), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_130_2 = value.default;
              c5 = 1;
              const obj6 = closure_1(paths[14])(closure_130_2);
              const obj7 = { code: null, message: null };
              const requiredResult = closure_1(paths[14])(closure_130_2).required();
              const _Object = Object;
              const numberResult = closure_130_2.number();
              obj7.code = closure_130_2.number().valid(Object.values(constants)).required();
              const validResult = closure_130_2.number().valid(Object.values(constants));
              obj7.message = closure_130_2.string().optional();
              closure_130_2.assert(closure_130_1, requiredResult.keys(obj7));
              c5 = 0;
              closure_131_1.disconnectSocket(closure_130_0, closure_130_1);
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            c5 = 0;
            closure_130_3 = closure_4;
            const obj = { closeCode: constants.CLOSE_UNSUPPORTED };
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
    [tmp5, tmp6] = arg2;
    if (RPCOpcodesDefault.HANDSHAKE === tmp5) {
      if (null != value) {
        const obj2 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp35 = new RPCErrorDefault(obj2, "Already connected");
        throw tmp35;
      } else {
        return self.handleHandshake(iframeId, tmp6, arg3);
      }
    } else if (RPCOpcodesDefault.FRAME === tmp5) {
      if (null == value) {
        const obj3 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp27 = new RPCErrorDefault(obj3, "Not connected");
        throw tmp27;
      } else {
        return self.handleFrame(iframeId, value, tmp6);
      }
    } else if (RPCOpcodesDefault.CLOSE === tmp5) {
      if (null == value) {
        const obj4 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp20 = new RPCErrorDefault(obj4, "Not connected");
        throw tmp20;
      } else {
        return self.handleClose(value, tmp6);
      }
    } else {
      const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
      const tmp13 = new RPCErrorDefault(obj, "Invalid opcode");
      throw tmp13;
    }
    const tmp4 = _slicedToArray(arg2, 2);
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;