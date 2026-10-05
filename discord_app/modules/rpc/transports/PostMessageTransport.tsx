// discord_app/modules/rpc/transports/PostMessageTransport.tsx
import _mod580 from "../../../../_runtime/metro/00580__.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import Constants2 from "../Constants.tsx";
import RPCOpcodesDefault from "../RPCOpcodes.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c6, closure_0, closure_4, closure_6, json_str, selfEmbeddedActivities, user;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
({
  AnalyticEvents: metroImportDefault,
  ComponentActions: metroImportAll,
  RPCCloseCodes: c9,
  RPCErrors: c10,
} = Constants);
let closure_11 = 10 * DurationsDefault.Millis.SECOND;
const map = new Map();
const set = new Set();
function postClose(source, arg1, postMessageToRPCClient) {
  const items = [RPCOpcodesDefault.CLOSE, arg1];
  postMessageToRPCClient(items, source.origin);
}
const EventEmitter = _mod580.EventEmitter;
class PostMessageTransport extends EventEmitter {
  constructor(validateSocketClient, logger, createPostMessageProxySocket, onFrameHandled) {
    let tmp;
    let tmp2;
    const tmp4 = new PostMessageTransport(tmp3, tmp2, tmp);
    tmp4.disconnectSocket = function disconnectSocket(value, message, arg2) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let tmp2;
      const emit = closure_0.emit;
      if (!flag) {
        tmp2 = message;
      }
      emit("disconnect", value, tmp2);
      if (!flag) {
        let str = message.message;
        const close = value.close;
        const code = message.code;
        if (str == null) {
          str = "Unknown";
        }
        close(code, str);
      }
      map.delete(value.source.iframeId);
    };
    tmp4.handleIFrameMount = function handleIFrameMount(id) {
      set.add(id.id);
      closure_0.handshakeFailureTimeoutId = setTimeout(() => {
        let timeout_ms;
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        const fromResult = from(selfEmbeddedActivities.entries());
        const item = fromResult.forEach((item) => {
          let obj2;
          let obj3;
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj = {
            application_id: tmp,
            channel_id: obj2.getEmbeddedActivityLocationChannelId(tmp2.location),
            guild_id: obj3.getEmbeddedActivityLocationGuildId(tmp2.location),
            timeout_ms,
          };
          const track = closure_1_1(closure_1_2[9]).track;
          const ACTIVITY_HANDSHAKE_TIMED_OUT = constants.ACTIVITY_HANDSHAKE_TIMED_OUT;
          closure_1_1(closure_1_2[9]);
          obj2 = closure_1_0(closure_1_2[10]);
          obj3 = closure_1_0(closure_1_2[10]);
          track(ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
        });
      }, closure_11);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      id = id.id;
      set.delete(id);
      const value = map.get(id);
      if (null != value) {
        const obj = { code: constants.CLOSE_NORMAL, message: "iFrame gone" };
        closure_0.disconnectSocket(value, obj, true);
      }
    };
    tmp4.handleMessage = function handleMessage(arg0, iframeId, postMessageToRPCClient) {
      const value = map.get(iframeId.iframeId);
      try {
        closure_0.routeEvent(value, iframeId, arg0, postMessageToRPCClient);
      } catch (tmp9) {
        if (tmp9 instanceof RPCErrorDefault) {
          if (tmp9.errorCode === constants2.INVALID_PAYLOAD) {
            throw tmp9;
          }
        }
        if (null != value) {
          const obj3 = { code: null, message: null };
          ({ code: obj2.code, message: obj2.message } = tmp9);
          closure_0.disconnectSocket(value, obj3, true);
        } else {
          const obj = { code: null, message: null };
          ({ code: obj.code, message: obj.message } = tmp9);
          postClose(iframeId, obj, postMessageToRPCClient);
        }
      }
    };
    tmp4.handleFrame = function handleFrame(origin, source, str) {
      if (origin.origin !== source.source.origin) {
        const self3 = this;
        const self4 = this;
        const obj2 = { closeCode: constants.INVALID_ORIGIN };
        const tmp19 = new RPCErrorDefault(obj2, "Origin has changed");
        throw tmp19;
      } else {
        try {
          let parsed = str;
          if (typeof str === "string") {
            const _JSON = JSON;
            parsed = JSON.parse(str);
          }
          const onFrameHandled = closure_0.onFrameHandled;
          if (onFrameHandled != null) {
            onFrameHandled(parsed, closure_0.logger, source);
          }
          closure_0.emit("request", source, parsed);
        } catch (err) {
          const self = this;
          const self2 = this;
          const obj3 = { closeCode: constants.CLOSE_UNSUPPORTED };
          const tmp13 = new RPCErrorDefault(obj3, "Payload not recognized encoding");
          throw tmp13;
        }
      }
    };
    _asyncToGenerator(async (source, arg1, postMessageToRPCClient) => {
      let closure_5;
      closure_1 = arg1;
      let c8 = 0;
      let c9 = 0;
      let c7 = 0;
      return (async function (arg0, value, arg2) {
        let equalResult;
        let maxResult;
        let stringResult1;
        let stringResult2;
        let stringResult3;
        if (c9 === 2) {
          c9 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp;
            let frame_id;
            c9 = 2;
            if (0 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                json_str = undefined;
                user = undefined;
                tmp = undefined;
                frame_id = undefined;
                if (null != closure_1.handshakeFailureTimeoutId) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(closure_1.handshakeFailureTimeoutId);
                }
                c8 = 1;
                c9 = 1;
                const obj5 = {
                  value: source(postMessageToRPCClient[13])(postMessageToRPCClient[12], postMessageToRPCClient.paths),
                  done: false,
                };
                return obj5;
              }
            } else if (1 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                json_str = value.default;
                const assert = json_str.assert;
                const obj13 = closure_1(postMessageToRPCClient[14])(json_str);
                const obj7 = {
                  v: maxResult.required(),
                  encoding: equalResult.optional(),
                  client_id: stringResult1.required(),
                  frame_id: stringResult2.required(),
                  sdk_version: stringResult3.optional(),
                };
                const keys = obj13.required().keys;
                obj13.required();
                const numberResult = json_str.number();
                const minResult = numberResult.min(1);
                maxResult = minResult.max(1);
                const stringResult = json_str.string();
                equalResult = stringResult.equal("json");
                stringResult1 = json_str.string();
                stringResult2 = json_str.string();
                stringResult3 = json_str.string();
                assert(closure_1, keys(obj7));
                c7 = 0;
                tmp = closure_1;
                frame_id = tmp.frame_id;
                if (frame_id === source.iframeId) {
                  if (set.has(source.iframeId)) {
                    if (null != tmp.sdk_version) {
                      const obj8 = { application_id: tmp.client_id, sdk_version: tmp.sdk_version };
                      const obj4 = closure_1(postMessageToRPCClient[9]);
                      obj4.track(c7.ACTIVITY_HANDSHAKE, obj8);
                    }
                    c7 = 2;
                    const _Number = Number;
                    const createPostMessageProxySocket = closure_133_1.createPostMessageProxySocket;
                    const encoding = tmp.encoding;
                    const obj9 = {
                      source,
                      postMessageToRPCClient,
                      version: Number(tmp.v),
                      logger: closure_133_1.logger,
                      postClose,
                      encoding: json_str,
                    };
                    json_str = encoding;
                    if (encoding == null) {
                      json_str = "json";
                    }
                    user = createPostMessageProxySocket(obj9);
                    const logger5 = closure_133_1.logger;
                    const _HermesInternal6 = HermesInternal;
                    logger5.info("Socket Opened: " + user.id);
                    c7 = 3;
                    c8 = 5;
                    c9 = 1;
                    const obj10 = {
                      value: closure_133_1.validateSocketClient(user, source.origin, tmp.client_id),
                      done: false,
                    };
                    return obj10;
                  }
                }
                const logger6 = closure_133_1.logger;
                const _HermesInternal7 = HermesInternal;
                logger6.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + source.iframeId);
                const _HermesInternal8 = HermesInternal;
                const self5 = this;
                const self6 = this;
                const obj11 = { closeCode: c9.CLOSE_UNSUPPORTED };
                const tmp100 = closure_1(postMessageToRPCClient[11]);
                const tmp1002 = new tmp100(obj11, "Unrecognized iframe ID " + frame_id);
                throw tmp1002;
              }
            } else if (2 === c8) {
              c7 = 0;
              let closure_7 = closure_6;
              const self3 = this;
              const self4 = this;
              const obj12 = { closeCode: c9.CLOSE_UNSUPPORTED };
              const tmp58 = new closure_1(postMessageToRPCClient[11])(obj12, closure_7.message);
              throw tmp58;
            } else if (3 === c8) {
              c7 = 0;
              let closure_8 = closure_6;
              const logger4 = closure_133_1.logger;
              const _HermesInternal5 = HermesInternal;
              logger4.error("Error opening window socket " + closure_8);
              throw closure_8;
            } else if (4 === c8) {
              c7 = 0;
              let closure_9 = closure_6;
              const logger3 = closure_133_1.logger;
              const _HermesInternal4 = HermesInternal;
              logger3.info("Socket Closed: " + user.id + ", " + closure_9.message);
              throw closure_9;
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else if (set.has(source.iframeId)) {
              const result = closure_1_12.set(source.iframeId, user);
              set.delete(source.iframeId);
              const scopes = user.authorization.scopes;
              scopes.push(closure_6);
              closure_133_1.emit("connect", user);
              const logger2 = closure_133_1.logger;
              const _HermesInternal3 = HermesInternal;
              logger2.info("Socket Validated: " + user.id);
              c7 = 0;
              c9 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const logger = closure_133_1.logger;
              const _HermesInternal = HermesInternal;
              logger.error("Iframe ID " + source.iframeId + " no longer exists");
              const _HermesInternal2 = HermesInternal;
              const self = this;
              const self2 = this;
              const obj = { closeCode: c9.CLOSE_UNSUPPORTED };
              const tmp10 = closure_1(postMessageToRPCClient[11]);
              const tmp104 = new tmp10(obj, "Unrecognized iframe ID " + source.iframeId);
              throw tmp104;
            }
          } catch (tmp112) {
            closure_6 = tmp112;
            if (0 === c7) {
              c9 = 3;
              throw tmp112;
            } else if (1 === c7) {
              c8 = 2;
            } else if (2 === c7) {
              c8 = 3;
            } else {
              c8 = 4;
            }
          }
        }
      })();
    });
    tmp4.handleHandshake = function () {
      return closure_0(...arguments);
    };
    let closure_1 = tmp4;
    _require = _asyncToGenerator(async function (arg0, arg1) {
      let stringResult;
      let validResult;
      closure_0 = arg0;
      closure_1 = arg1;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let message;
          let closure_2;
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
              message = tmp;
              closure_2 = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: closure_0(closure_2[13])(closure_2[12], closure_2.paths), done: false };
              return obj4;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = value.default;
              const assert = closure_2.assert;
              const obj6 = closure_1(closure_2[14])(closure_2);
              const obj7 = { code: validResult.required(), message: stringResult.optional() };
              const keys = obj6.required().keys;
              const requiredResult = obj6.required();
              const _Object = Object;
              const numberResult = closure_2.number();
              validResult = numberResult.valid(Object.values(constants));
              stringResult = closure_2.string();
              assert(closure_1, keys(obj7));
              c5 = 0;
              closure_131_1.disconnectSocket(closure_0, closure_1);
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } else {
            c5 = 0;
            message = closure_4;
            const obj = { closeCode: constants.CLOSE_UNSUPPORTED };
            const self = this;
            const self2 = this;
            const tmp14 = new closure_1(closure_2[11])(obj, message.message);
            throw tmp14;
          }
        } catch (tmp22) {
          closure_4 = tmp22;
          if (0 === c5) {
            c7 = 3;
            throw tmp22;
          } else {
            c6 = 2;
          }
        }
      }
    });
    tmp4.handleClose = function () {
      return closure_0(...arguments);
    };
    const ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.IFRAME_MOUNT, tmp4.handleIFrameMount);
    const ComponentDispatch2 = require("ComponentDispatchUtils").ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.IFRAME_UNMOUNT, tmp4.handleIFrameUnmount);
    tmp4.validateSocketClient = validateSocketClient;
    tmp4.logger = logger;
    tmp4.createPostMessageProxySocket = createPostMessageProxySocket;
    tmp4.onFrameHandled = onFrameHandled;
    return tmp4;
  }
  routeEvent(value, iframeId, arg2, postMessageToRPCClient) {
    let tmp5;
    let tmp6;
    if (Array.isArray(arg2)) {
      const self = this;
      [tmp5, tmp6] = arg2;
      _slicedToArray(arg2, 2);
      if (RPCOpcodesDefault.HANDSHAKE === tmp5) {
        if (null != value) {
          const self8 = this;
          const self9 = this;
          const obj2 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp27 = new RPCErrorDefault(obj2, "Already connected");
          throw tmp27;
        } else {
          return self.handleHandshake(iframeId, tmp6, postMessageToRPCClient);
        }
      } else if (RPCOpcodesDefault.FRAME === tmp5) {
        if (null == value) {
          const self6 = this;
          const self7 = this;
          const obj3 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp21 = new RPCErrorDefault(obj3, "Not connected");
          throw tmp21;
        } else {
          return self.handleFrame(iframeId, value, tmp6);
        }
      } else if (RPCOpcodesDefault.CLOSE === tmp5) {
        if (null == value) {
          const self4 = this;
          const self5 = this;
          const obj4 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp16 = new RPCErrorDefault(obj4, "Not connected");
          throw tmp16;
        } else {
          return self.handleClose(value, tmp6);
        }
      } else {
        const self2 = this;
        const self3 = this;
        const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp11 = new RPCErrorDefault(obj, "Invalid opcode");
        throw tmp11;
      }
    }
  }
}
const prototype = PostMessageTransport.prototype;
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;
