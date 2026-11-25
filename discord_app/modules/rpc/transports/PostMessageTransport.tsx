// discord_app/modules/rpc/transports/PostMessageTransport.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import FrameLaunchTimingTypes from "../../frames/timing/FrameLaunchTimingTypes.tsx";
import FrameLaunchTimingManager from "../../frames/timing/FrameLaunchTimingManager.native.tsx";
import RPCOpcodesDefault from "../RPCOpcodes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";

require = fn;
let Constants = fn(5766);
({ MAX_POST_MESSAGE_STRING_LENGTH: metroImportDefault, RPC_EMBEDDED_APP_SCOPE: closure_8 } = Constants);
Constants = fn(1071);
({
  AnalyticEvents: closure_9,
  ComponentActions: closure_10,
  RPCCloseCodes: closure_11,
  RPCErrors: closure_12,
  RPCCommands: map1,
} = Constants);
const asLaunched = fn(6906).asLaunched;
let closure_15 = 10 * DurationsDefault.Millis.SECOND;
const map = new Map();
map1 = new Map();
const map2 = new Map();
function postClose(source, arg1, postMessageToRPCClient) {
  items = [RPCOpcodesDefault.CLOSE, arg1];
  postMessageToRPCClient(items, source.origin);
}
const EventEmitter = fn(568).EventEmitter;
class PostMessageTransport extends EventEmitter {
  constructor(arg0, arg1, arg2, arg3) {
    tmp4 = new PostMessageTransport(tmp3, tmp2, tmp);
    closure_0 = tmp4;
    set = new Set();
    tmp4.pendingTicketRefreshes = set;
    tmp4.disconnectSocket = function disconnectSocket(value, message, arg2) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let tmp2;
      if (!flag) {
        tmp2 = message;
      }
      closure_0.emit("disconnect", value, tmp2);
      if (!flag) {
        let str = message.message;
        if (str == null) {
          str = "Unknown";
        }
        value.close(message.code, str);
      }
      map.delete(value.source.iframeId);
    };
    tmp4.handleIFrameMount = function handleIFrameMount(arg0) {
      ({ id, data } = arg0);
      const result = map1.set(id, data);
      const result1 = map2.set(id, { contextSource: data.contextSource });
      closure_0.handshakeFailureTimeoutId = setTimeout(() => {
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        const item = Array.from(selfEmbeddedActivities.entries()).forEach((item) => {
          [tmp, tmp2] = item;
          const obj2 = { application_id: tmp, channel_id: null, guild_id: null, timeout_ms: null };
          const obj = closure_1_1(1255);
          obj2.channel_id = closure_1_0(4933).getEmbeddedActivityLocationChannelId(tmp2.location);
          const obj3 = closure_1_0(4933);
          obj2.guild_id = closure_1_0(4933).getEmbeddedActivityLocationGuildId(tmp2.location);
          obj2.timeout_ms = timeout_ms;
          obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj2);
        });
      }, closure_15);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      id = id.id;
      map1.delete(id);
      map2.delete(id);
      value = map.get(id);
      if (null != value) {
        const obj = { code: constants2.CLOSE_NORMAL, message: "iFrame gone" };
        closure_0.disconnectSocket(value, obj, true);
      }
    };
    tmp4.handleMessage = function handleMessage(arg0, iframeId, postMessageToWebView) {
      value = map.get(iframeId.iframeId);
      try {
        closure_0.routeEvent(value, iframeId, arg0, postMessageToWebView);
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
    tmp4.rejectOversizedMessage = function rejectOversizedMessage(iframeId, postMessageToWebView) {
      const logger = closure_0.logger;
      logger.warn("Closing iframe " + iframeId.iframeId + ": message over " + metroImportDefault + " characters");
      const obj2 = { code: constants2.CLOSE_UNSUPPORTED, message: "Payload too large" };
      map1.delete(iframeId.iframeId);
      value = map.get(iframeId.iframeId);
      if (null != value) {
        closure_0.disconnectSocket(value, obj2);
      } else if (typeof postClose === "function") {
        items = [RPCOpcodesDefault.CLOSE, obj2];
        postMessageToWebView(items, iframeId.origin);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    tmp4.handleFrame = function handleFrame(origin, source, arr) {
      if (origin.origin !== source.source.origin) {
        const obj2 = { closeCode: constants2.INVALID_ORIGIN };
        const tmp24 = new RPCErrorDefault(obj2, "Origin has changed");
        throw tmp24;
      } else {
        try {
          let parsed = arr;
          if (typeof arr === "string") {
            const _JSON = JSON;
            parsed = JSON.parse(arr);
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
        if (constants === 2) {
          constants = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            constants = 2;
            if (0 === c8) {
              if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                constants = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_5 = tmp4;
                closure_4 = tmp9;
                closure_132_0 = closure_0;
                closure_132_1 = closure_1;
                closure_132_2 = paths;
                closure_132_3 = undefined;
                closure_132_4 = undefined;
                let frame_id;
                closure_132_6 = undefined;
                closure_132_7 = undefined;
                closure_132_8 = undefined;
                if (null != importDefault.handshakeFailureTimeoutId) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(importDefault.handshakeFailureTimeoutId);
                }
                c8 = 1;
                constants = 1;
                const obj5 = { value: closure_0(paths[21])(paths[20], paths.paths), done: false };
                return obj5;
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                constants = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_132_3 = value.default;
                c7 = 1;
                const obj17 = closure_1(paths[22])(closure_132_3);
                const obj8 = { v: null, encoding: null, client_id: null, frame_id: null, sdk_version: null };
                const requiredResult = closure_1(paths[22])(closure_132_3).required();
                const numberResult = closure_132_3.number();
                const minResult = closure_132_3.number().min(1);
                obj8.v = closure_132_3.number().min(1).max(1).required();
                const maxResult = closure_132_3.number().min(1).max(1);
                const stringResult = closure_132_3.string();
                obj8.encoding = closure_132_3.string().equal("json").optional();
                const equalResult = closure_132_3.string().equal("json");
                obj8.client_id = closure_132_3.string().required();
                const stringResult1 = closure_132_3.string();
                obj8.frame_id = closure_132_3.string().required();
                const stringResult2 = closure_132_3.string();
                obj8.sdk_version = closure_132_3.string().optional();
                closure_132_3.assert(closure_132_1, requiredResult.keys(obj8));
                c7 = 0;
                closure_132_4 = closure_132_1;
                frame_id = closure_132_4.frame_id;
                closure_132_6 = map.get(closure_132_0.iframeId);
                if (frame_id === closure_132_0.iframeId) {
                  if (null != closure_132_6) {
                    closure_132_8 = closure_1(paths[17])(closure_132_6.contextSource);
                    if (null == closure_132_8) {
                      const logger6 = closure_133_1.logger;
                      const _HermesInternal7 = HermesInternal;
                      logger6.error("Could not resolve embedded context for iframe ID " + closure_132_0.iframeId);
                      const obj9 = { closeCode: constants2.CLOSE_UNSUPPORTED };
                      const _HermesInternal8 = HermesInternal;
                      const tmp1202 = new closure_1(paths[13])(
                        obj9,
                        "Failed to build embedded context for iframe ID " + frame_id,
                      );
                      throw tmp1202;
                    } else {
                      if (null != closure_132_4.sdk_version) {
                        const obj10 = {
                          application_id: closure_132_4.client_id,
                          sdk_version: closure_132_4.sdk_version,
                        };
                        closure_1(paths[11]).track(constants.ACTIVITY_HANDSHAKE, obj10);
                        const obj7 = closure_1(paths[11]);
                      }
                      c7 = 2;
                      const obj11 = {
                        source: closure_132_0,
                        context: closure_132_8,
                        postMessageToRPCClient: closure_132_2,
                        version: null,
                        logger: null,
                        postClose: null,
                        encoding: null,
                      };
                      const _Number = Number;
                      obj11.version = Number(closure_132_4.v);
                      obj11.logger = closure_133_1.logger;
                      obj11.postClose = postClose;
                      const encoding = closure_132_4.encoding;
                      json = encoding;
                      if (encoding == null) {
                        json = "json";
                      }
                      obj11.encoding = json;
                      closure_132_7 = closure_133_1.createPostMessageProxySocket(obj11);
                      c7 = 0;
                      const logger5 = closure_133_1.logger;
                      const _HermesInternal6 = HermesInternal;
                      logger5.info("Socket Opened: " + closure_132_7.id);
                      c7 = 3;
                      c8 = 5;
                      constants = 1;
                      const obj12 = {
                        value: closure_133_1.validateSocketClient(
                          closure_132_7,
                          closure_132_0.origin,
                          closure_132_4.client_id,
                        ),
                        done: false,
                      };
                      return obj12;
                    }
                  }
                }
                const logger7 = closure_133_1.logger;
                const _HermesInternal9 = HermesInternal;
                logger7.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + closure_132_0.iframeId);
                const obj13 = { closeCode: constants2.CLOSE_UNSUPPORTED };
                const _HermesInternal10 = HermesInternal;
                const stringResult3 = closure_132_3.string();
                const tmp1362 = new closure_1(paths[13])(obj13, "Unrecognized iframe ID " + frame_id);
                throw tmp1362;
              }
            } else if (2 === tmp9) {
              c7 = 0;
              closure_132_9 = closure_6;
              const obj14 = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const tmp80 = new closure_1(paths[13])(obj14, closure_132_9.message);
              throw tmp80;
            } else if (3 === tmp9) {
              c7 = 0;
              closure_132_10 = closure_6;
              const logger4 = closure_133_1.logger;
              const _HermesInternal5 = HermesInternal;
              logger4.error("Error opening window socket " + closure_132_10);
              throw closure_132_10;
            } else if (4 === tmp9) {
              c7 = 0;
              closure_132_11 = closure_6;
              const logger3 = closure_133_1.logger;
              const _HermesInternal4 = HermesInternal;
              logger3.info("Socket Closed: " + closure_132_7.id + ", " + closure_132_11.message);
              throw closure_132_11;
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              constants = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else if (map.has(closure_132_0.iframeId)) {
              const result = closure_1_16.set(closure_132_0.iframeId, closure_132_7);
              map.delete(closure_132_0.iframeId);
              const scopes = closure_132_7.authorization.scopes;
              scopes.add(c8);
              closure_1(paths[23])(closure_132_7);
              closure_133_1.emit("connect", closure_132_7);
              const frameLaunchTimingForIframe = closure_0(paths[14]).getFrameLaunchTimingForIframe(
                closure_132_0.iframeId,
              );
              if (frameLaunchTimingForIframe != null) {
                const obj16 = { step: closure_0(paths[15]).LaunchStep.READY };
                frameLaunchTimingForIframe.event(obj16);
              }
              const logger2 = closure_133_1.logger;
              const _HermesInternal3 = HermesInternal;
              logger2.info("Socket Validated: " + closure_132_7.id);
              c7 = 0;
              constants = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const logger = closure_133_1.logger;
              const _HermesInternal = HermesInternal;
              logger.error("Iframe ID " + closure_132_0.iframeId + " no longer exists");
              const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const _HermesInternal2 = HermesInternal;
              const tmp1511 = new closure_1(paths[13])(obj, "Unrecognized iframe ID " + closure_132_0.iframeId);
              throw tmp1511;
            }
          } catch (tmp150) {
            closure_6 = tmp150;
            if (tmp5 === c7) {
              constants = tmp3;
              throw tmp150;
            } else if (tmp2 === tmp152) {
              c8 = tmp;
            } else if (tmp === tmp152) {
              c8 = tmp3;
            } else {
              c8 = tmp6;
            }
          }
        }
      })();
    });
    tmp4.handleHandshake = function () {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj4 = { value: closure_0(paths[21])(paths[20], paths.paths), done: false };
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
              const obj6 = closure_1(paths[22])(closure_130_2);
              const obj7 = { code: null, message: null };
              const requiredResult = closure_1(paths[22])(closure_130_2).required();
              const _Object = Object;
              const numberResult = closure_130_2.number();
              obj7.code = closure_130_2.number().valid(Object.values(constants)).required();
              const validResult = closure_130_2.number().valid(Object.values(constants));
              obj7.message = closure_130_2.string().optional();
              closure_130_2.assert(closure_130_1, requiredResult.keys(obj7));
              c5 = 0;
              closure_131_1.disconnectSocket(closure_130_0, closure_130_1);
              c7 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            c5 = 0;
            closure_130_3 = closure_4;
            const obj = { closeCode: constants.CLOSE_UNSUPPORTED };
            const tmp19 = new closure_1(paths[13])(obj, closure_130_3.message);
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
    tmp4.handleClose = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    ComponentDispatch = closure_0(closure_2[10]).ComponentDispatch;
    subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_MOUNT, tmp4.handleIFrameMount);
    ComponentDispatch2 = closure_0(closure_2[10]).ComponentDispatch;
    subscription1 = ComponentDispatch2.subscribe(ComponentActions.IFRAME_UNMOUNT, tmp4.handleIFrameUnmount);
    tmp4.validateSocketClient = global;
    tmp4.logger = fn;
    tmp4.createPostMessageProxySocket = importDefault;
    tmp4.onFrameHandled = importAll;
    return tmp4;
  }
}
const prototype = PostMessageTransport.prototype;
prototype["routeEvent"] = function routeEvent(value, iframeId, arg2, postMessageToWebView) {
  const self = this;
  if (Array.isArray(arg2)) {
    [tmp6, arr] = arg2;
    if (typeof arr === "string") {
      if (arr.length > metroImportDefault) {
        return self.rejectOversizedMessage(iframeId, postMessageToWebView);
      }
    }
    if (RPCOpcodesDefault.HANDSHAKE === tmp6) {
      let sdk_version;
      if (arr != null) {
        sdk_version = arr.sdk_version;
      }
      if (sdk_version == null) {
        sdk_version = null;
      }
      const frameLaunchTimingForIframe = FrameLaunchTimingManager.getFrameLaunchTimingForIframe(iframeId.iframeId);
      if (frameLaunchTimingForIframe != null) {
        const obj2 = { step: FrameLaunchTimingTypes.LaunchStep.HANDSHAKE, sdkVersion: sdk_version };
        frameLaunchTimingForIframe.event(obj2);
      }
      if (null != value) {
        const obj3 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp43 = new RPCErrorDefault(obj3, "Already connected");
        throw tmp43;
      } else {
        return self.handleHandshake(iframeId, arr, postMessageToWebView);
      }
    } else if (RPCOpcodesDefault.FRAME === tmp6) {
      if (!self.handleFrameTicketRefresh(value, iframeId, arr, postMessageToWebView)) {
        if (null == value) {
          const obj5 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp33 = new RPCErrorDefault(obj5, "Not connected");
          throw tmp33;
        } else {
          return self.handleFrame(iframeId, value, arr);
        }
      }
    } else if (RPCOpcodesDefault.CLOSE === tmp6) {
      if (null == value) {
        const obj6 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp21 = new RPCErrorDefault(obj6, "Not connected");
        throw tmp21;
      } else {
        return self.handleClose(value, arr);
      }
    } else {
      const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
      const tmp14 = new RPCErrorDefault(obj, "Invalid opcode");
      throw tmp14;
    }
    const tmp5 = _slicedToArray(arg2, 2);
  } else {
    const logger = self.logger;
    logger.warn("Protocol error: event data should be an Array!");
  }
};
prototype["handleFrameTicketRefresh"] = function handleFrameTicketRefresh(
  context,
  iframeId,
  arr,
  postMessageToWebView,
) {
  _require = iframeId;
  importDefault = postMessageToWebView;
  function stillMounted() {
    const tmp = asLaunched(FramesStore.getFrame(closure_1_7));
    let tmp2 = map2.get(iframeId.iframeId) === value2;
    if (tmp2) {
      tmp2 = null != tmp;
    }
    if (tmp2) {
      tmp2 = tmp.applicationId === closure_1_8;
    }
    if (tmp2) {
      tmp2 = tmp.launchRequestId === closure_1_9;
    }
    if (tmp2) {
      tmp2 = tmp.data.connectedSince === connectedSince;
    }
    return tmp2;
  }
  let self = this;
  if (typeof arr === "object") {
    if (null != arr) {
      if ("cmd" in arr) {
        if (arr.cmd === constants4.REQUEST_PROXY_TICKET_REFRESH) {
          let source;
          if (context != null) {
            source = context.context.source;
          }
          if (source == null) {
            value = map2.get(iframeId.iframeId);
            let contextSource;
            if (value != null) {
              contextSource = value.contextSource;
            }
            source = contextSource;
          }
          let type;
          if (source != null) {
            type = source.type;
          }
          if (type !== require("EmbeddedAppTypes").EmbeddedContextSourceType.FRAME) {
            return false;
          } else {
            if ("nonce" in arr) {
              if (typeof arr.nonce === "string") {
                if (arr.nonce.length <= 128) {
                  if (0 !== arr.nonce.length) {
                    const tmp16 = asLaunched(nonce.getFrame(source.frameId));
                    asyncGeneratorStep = tmp16;
                    const tmp18 = require("buildEmbeddedContext")(source);
                    closure_4 = tmp18;
                    const value2 = map2.get(iframeId.iframeId);
                    if (null != tmp16) {
                      if (null != tmp18) {
                        if (null != value2) {
                          let pendingTicketRefreshes = self.pendingTicketRefreshes;
                          if (pendingTicketRefreshes.has(iframeId.iframeId)) {
                            return true;
                          } else {
                            nonce = arr.nonce;
                            ({ id: closure_7, applicationId: closure_8, launchRequestId: closure_9 } = tmp16);
                            const connectedSince = tmp16.data.connectedSince;
                            let pendingTicketRefreshes2 = self.pendingTicketRefreshes;
                            pendingTicketRefreshes2.add(iframeId.iframeId);
                            _require = asyncGeneratorStep(async () => {
                              if (c5 === 2) {
                                c5 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp7 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj2 = { value, done: true };
                                  return obj2;
                                } else {
                                  return { value: "HermesInternal", done: "HermesInternal" };
                                }
                              } else {
                                try {
                                  c5 = 2;
                                  if (0 === context) {
                                    if (arg0 === 1) {
                                      c5 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c5 = 3;
                                      const obj3 = { value, done: true };
                                      return obj3;
                                    } else {
                                      const postMessageToRPCClient = tmp4;
                                      const source = tmp8;
                                      closure_128_0 = undefined;
                                      c3 = 2;
                                      const obj6 = {
                                        source,
                                        context,
                                        postMessageToRPCClient,
                                        version: 1,
                                        encoding: "json",
                                        logger: tmp59.logger,
                                        postClose,
                                      };
                                      context = 3;
                                      c5 = 1;
                                      const obj7 = {
                                        value: tmp59.validateSocketClient(
                                          tmp59.createPostMessageProxySocket(obj6),
                                          source.origin,
                                          c3.applicationId,
                                        ),
                                        done: false,
                                      };
                                      return obj7;
                                    }
                                  } else if (1 === tmp8) {
                                    c3 = 0;
                                    const pendingTicketRefreshes5 = tmp59.pendingTicketRefreshes;
                                    pendingTicketRefreshes5.delete(source.iframeId);
                                    throw tmp59;
                                  } else {
                                    if (2 === tmp8) {
                                      c3 = 1;
                                      if (stillMounted()) {
                                        items = [postMessageToRPCClient(self[8]).FRAME];
                                        const obj8 = {
                                          cmd: constants2.REQUEST_PROXY_TICKET_REFRESH,
                                          nonce,
                                          evt: "ERROR",
                                          data: null,
                                        };
                                        const obj9 = {
                                          code: constants.UNKNOWN_ERROR,
                                          message: "Could not renew the app session",
                                        };
                                        obj8.data = obj9;
                                        items[1] = obj8;
                                        postMessageToRPCClient(items, source.origin);
                                      }
                                      c3 = 0;
                                      const pendingTicketRefreshes4 = tmp59.pendingTicketRefreshes;
                                      pendingTicketRefreshes4.delete(source.iframeId);
                                      c5 = 3;
                                    } else if (3 === tmp8) {
                                      if (arg0 === 1) {
                                        c5 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 0;
                                        const pendingTicketRefreshes3 = tmp59.pendingTicketRefreshes;
                                        pendingTicketRefreshes3.delete(source.iframeId);
                                        c5 = 3;
                                        const obj10 = { value, done: true };
                                        return obj10;
                                      } else if (stillMounted()) {
                                        const obj4 = source(self[18]);
                                        context = 4;
                                        c5 = 1;
                                        const obj11 = {
                                          value: obj4.createProxyTicket(
                                            c3.applicationId,
                                            source(self[19]).getProxyTicketChannelId(context.surface),
                                            context.surface.type,
                                          ),
                                          done: false,
                                        };
                                        return obj11;
                                      } else {
                                        c3 = 0;
                                        const pendingTicketRefreshes2 = tmp59.pendingTicketRefreshes;
                                        pendingTicketRefreshes2.delete(source.iframeId);
                                        c5 = 3;
                                        return { value: "HermesInternal", done: "HermesInternal" };
                                      }
                                    } else if (arg0 === 1) {
                                      c5 = 3;
                                      throw value;
                                    } else if (arg0 !== 2) {
                                      closure_128_0 = value;
                                      if (stillMounted()) {
                                        const items1 = [postMessageToRPCClient(self[8]).FRAME];
                                        const obj = {
                                          cmd: constants2.REQUEST_PROXY_TICKET_REFRESH,
                                          nonce,
                                          evt: null,
                                          data: null,
                                        };
                                        const obj12 = { ticket: closure_128_0 };
                                        obj.data = obj12;
                                        items1[1] = obj;
                                        postMessageToRPCClient(items1, source.origin);
                                      }
                                      c3 = 1;
                                    }
                                    c3 = 0;
                                    const pendingTicketRefreshes = tmp59.pendingTicketRefreshes;
                                    pendingTicketRefreshes.delete(source.iframeId);
                                    c5 = 3;
                                    const obj13 = { value, done: true };
                                    return obj13;
                                  }
                                } catch (tmp59) {
                                  if (tmp5 === c3) {
                                    c5 = tmp3;
                                    throw tmp59;
                                  } else if (tmp2 === tmp61) {
                                    context = tmp2;
                                  } else {
                                    context = tmp;
                                  }
                                }
                              }
                            });
                            (function refresh() {
                              self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })();
                            return true;
                          }
                        }
                      }
                    }
                    return true;
                  }
                }
              }
            }
            return true;
          }
          tmp8 = self;
        }
      }
    }
  }
  return false;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;
