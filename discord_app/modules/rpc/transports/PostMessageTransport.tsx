// discord_app/modules/rpc/transports/PostMessageTransport.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import RPCOpcodesDefault from "../RPCOpcodes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";

const require = fn;
const RPC_EMBEDDED_APP_SCOPE = fn(6378).RPC_EMBEDDED_APP_SCOPE;
const Constants = fn(1087);
({
  AnalyticEvents: closure_8,
  ComponentActions: closure_9,
  RPCCloseCodes: c10,
  RPCErrors: closure_11,
  RPCCommands: closure_12,
} = Constants);
const asLaunched = fn(6776).asLaunched;
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
function postClose(source, arg1, postMessageToRPCClient) {
  const items = [RPCOpcodesDefault.CLOSE, arg1];
  postMessageToRPCClient(items, source.origin);
}
const EventEmitter = fn(580).EventEmitter;
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
          const obj = closure_1_1(1267);
          obj2.channel_id = closure_1_0(4892).getEmbeddedActivityLocationChannelId(tmp2.location);
          const obj3 = closure_1_0(4892);
          obj2.guild_id = closure_1_0(4892).getEmbeddedActivityLocationGuildId(tmp2.location);
          obj2.timeout_ms = timeout_ms;
          obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj2);
        });
      }, closure_14);
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
        if (c9 === 2) {
          c9 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c9 = 2;
            if (0 === constants) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
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
                let frame_id;
                closure_132_6 = undefined;
                closure_132_7 = undefined;
                closure_132_8 = undefined;
                if (null != importDefault.handshakeFailureTimeoutId) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(importDefault.handshakeFailureTimeoutId);
                }
                constants = 1;
                c9 = 1;
                const obj5 = { value: closure_0(paths[19])(paths[18], paths.paths), done: false };
                return obj5;
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_132_3 = value.default;
                c7 = 1;
                const obj14 = closure_1(paths[20])(closure_132_3);
                const obj7 = { v: null, encoding: null, client_id: null, frame_id: null, sdk_version: null };
                const requiredResult = closure_1(paths[20])(closure_132_3).required();
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
                c7 = 0;
                closure_132_4 = closure_132_1;
                frame_id = closure_132_4.frame_id;
                closure_132_6 = map.get(closure_132_0.iframeId);
                if (frame_id === closure_132_0.iframeId) {
                  if (null != closure_132_6) {
                    closure_132_8 = closure_1(paths[15])(closure_132_6.contextSource);
                    if (null == closure_132_8) {
                      const logger6 = closure_133_1.logger;
                      const _HermesInternal7 = HermesInternal;
                      logger6.error("Could not resolve embedded context for iframe ID " + closure_132_0.iframeId);
                      const obj8 = { closeCode: constants2.CLOSE_UNSUPPORTED };
                      const _HermesInternal8 = HermesInternal;
                      const tmp1112 = new closure_1(paths[13])(
                        obj8,
                        "Failed to build embedded context for iframe ID " + frame_id,
                      );
                      throw tmp1112;
                    } else {
                      if (null != closure_132_4.sdk_version) {
                        const obj9 = {
                          application_id: closure_132_4.client_id,
                          sdk_version: closure_132_4.sdk_version,
                        };
                        closure_1(paths[11]).track(constants.ACTIVITY_HANDSHAKE, obj9);
                        const obj4 = closure_1(paths[11]);
                      }
                      c7 = 2;
                      const obj10 = {
                        source: closure_132_0,
                        context: closure_132_8,
                        postMessageToRPCClient: closure_132_2,
                        version: null,
                        logger: null,
                        postClose: null,
                        encoding: null,
                      };
                      const _Number = Number;
                      obj10.version = Number(closure_132_4.v);
                      obj10.logger = closure_133_1.logger;
                      obj10.postClose = postClose;
                      const encoding = closure_132_4.encoding;
                      json = encoding;
                      if (encoding == null) {
                        json = "json";
                      }
                      obj10.encoding = json;
                      closure_132_7 = closure_133_1.createPostMessageProxySocket(obj10);
                      c7 = 0;
                      const logger5 = closure_133_1.logger;
                      const _HermesInternal6 = HermesInternal;
                      logger5.info("Socket Opened: " + closure_132_7.id);
                      c7 = 3;
                      constants = 5;
                      c9 = 1;
                      const obj11 = {
                        value: closure_133_1.validateSocketClient(
                          closure_132_7,
                          closure_132_0.origin,
                          closure_132_4.client_id,
                        ),
                        done: false,
                      };
                      return obj11;
                    }
                  }
                }
                const logger7 = closure_133_1.logger;
                const _HermesInternal9 = HermesInternal;
                logger7.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + closure_132_0.iframeId);
                const obj12 = { closeCode: constants2.CLOSE_UNSUPPORTED };
                const _HermesInternal10 = HermesInternal;
                const stringResult3 = closure_132_3.string();
                const tmp1272 = new closure_1(paths[13])(obj12, "Unrecognized iframe ID " + frame_id);
                throw tmp1272;
              }
            } else if (2 === tmp9) {
              c7 = 0;
              closure_132_9 = closure_6;
              const obj13 = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const tmp71 = new closure_1(paths[13])(obj13, closure_132_9.message);
              throw tmp71;
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
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else if (map.has(closure_132_0.iframeId)) {
              const result = closure_1_15.set(closure_132_0.iframeId, closure_132_7);
              map.delete(closure_132_0.iframeId);
              const scopes = closure_132_7.authorization.scopes;
              scopes.add(c7);
              closure_1(paths[21])(closure_132_7);
              closure_133_1.emit("connect", closure_132_7);
              const logger2 = closure_133_1.logger;
              const _HermesInternal3 = HermesInternal;
              logger2.info("Socket Validated: " + closure_132_7.id);
              c7 = 0;
              c9 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const logger = closure_133_1.logger;
              const _HermesInternal = HermesInternal;
              logger.error("Iframe ID " + closure_132_0.iframeId + " no longer exists");
              const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const _HermesInternal2 = HermesInternal;
              const tmp1511 = new closure_1(paths[13])(obj, "Unrecognized iframe ID " + closure_132_0.iframeId);
              throw tmp1511;
            }
          } catch (tmp141) {
            closure_6 = tmp141;
            if (tmp5 === c7) {
              c9 = tmp3;
              throw tmp141;
            } else if (tmp2 === tmp143) {
              constants = tmp;
            } else if (tmp === tmp143) {
              constants = tmp3;
            } else {
              constants = tmp6;
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
          return { value: "IconComponent", done: null };
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
              const obj4 = { value: closure_0(paths[19])(paths[18], paths.paths), done: false };
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
              const obj6 = closure_1(paths[20])(closure_130_2);
              const obj7 = { code: null, message: null };
              const requiredResult = closure_1(paths[20])(closure_130_2).required();
              const _Object = Object;
              const numberResult = closure_130_2.number();
              obj7.code = closure_130_2.number().valid(Object.values(constants)).required();
              const validResult = closure_130_2.number().valid(Object.values(constants));
              obj7.message = closure_130_2.string().optional();
              closure_130_2.assert(closure_130_1, requiredResult.keys(obj7));
              c5 = 0;
              closure_131_1.disconnectSocket(closure_130_0, closure_130_1);
              c7 = 3;
              return { value: "IconComponent", done: null };
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
prototype["routeEvent"] = function routeEvent(value, iframeId, arg2, arg3) {
  const self = this;
  if (Array.isArray(arg2)) {
    [tmp7, tmp8] = arg2;
    if (RPCOpcodesDefault.HANDSHAKE === tmp7) {
      if (null != value) {
        const obj2 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp41 = new RPCErrorDefault(obj2, "Already connected");
        throw tmp41;
      } else {
        return self.handleHandshake(iframeId, tmp8, arg3);
      }
    } else if (RPCOpcodesDefault.FRAME === tmp7) {
      if (!self.handleFrameTicketRefresh(value, iframeId, tmp8, arg3)) {
        if (null == value) {
          const obj3 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp34 = new RPCErrorDefault(obj3, "Not connected");
          throw tmp34;
        } else {
          return self.handleFrame(iframeId, value, tmp8);
        }
      }
    } else if (RPCOpcodesDefault.CLOSE === tmp7) {
      if (null == value) {
        const obj4 = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp22 = new RPCErrorDefault(obj4, "Not connected");
        throw tmp22;
      } else {
        return self.handleClose(value, tmp8);
      }
    } else {
      const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
      const tmp15 = new RPCErrorDefault(obj, "Invalid opcode");
      throw tmp15;
    }
    const tmp6 = _slicedToArray(arg2, 2);
  } else {
    const logger = self.logger;
    logger.warn("Protocol error: event data should be an Array!");
  }
};
prototype["handleFrameTicketRefresh"] = function handleFrameTicketRefresh(context, iframeId, cmd, arg3) {
  _require = iframeId;
  importDefault = arg3;
  function stillMounted() {
    const tmp = asLaunched(FramesStore.getFrame(RPC_EMBEDDED_APP_SCOPE));
    let tmp2 = map2.get(iframeId.iframeId) === value2;
    if (tmp2) {
      tmp2 = null != tmp;
    }
    if (tmp2) {
      tmp2 = tmp.applicationId === closure_1_8;
    }
    if (tmp2) {
      tmp2 = tmp.launchRequestId === constants;
    }
    if (tmp2) {
      tmp2 = tmp.data.connectedSince === connectedSince;
    }
    return tmp2;
  }
  let self = this;
  if (typeof cmd === "object") {
    if (null != cmd) {
      if ("cmd" in cmd) {
        if (cmd.cmd === constants4.REQUEST_PROXY_TICKET_REFRESH) {
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
            if ("nonce" in cmd) {
              if (typeof cmd.nonce === "string") {
                if (cmd.nonce.length <= 128) {
                  if (0 !== cmd.nonce.length) {
                    const tmp16 = asLaunched(nonce.getFrame(source.frameId));
                    asyncGeneratorStep = tmp16;
                    const tmp18 = require("buildEmbeddedContext")(source);
                    closure_4 = tmp18;
                    value2 = map2.get(iframeId.iframeId);
                    if (null != tmp16) {
                      if (null != tmp18) {
                        if (null != value2) {
                          let pendingTicketRefreshes = self.pendingTicketRefreshes;
                          if (pendingTicketRefreshes.has(iframeId.iframeId)) {
                            return true;
                          } else {
                            nonce = cmd.nonce;
                            ({
                              id: RPC_EMBEDDED_APP_SCOPE,
                              applicationId: closure_8,
                              launchRequestId: closure_9,
                            } = tmp16);
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
                                  return { value: "IconComponent", done: null };
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
                                      const obj5 = {
                                        source,
                                        context,
                                        postMessageToRPCClient,
                                        version: 1,
                                        encoding: "json",
                                        logger: tmp60.logger,
                                        postClose,
                                      };
                                      context = 3;
                                      c5 = 1;
                                      const obj6 = {
                                        value: tmp60.validateSocketClient(
                                          tmp60.createPostMessageProxySocket(obj5),
                                          source.origin,
                                          c3.applicationId,
                                        ),
                                        done: false,
                                      };
                                      return obj6;
                                    }
                                  } else if (1 === tmp8) {
                                    c3 = 0;
                                    const pendingTicketRefreshes5 = tmp60.pendingTicketRefreshes;
                                    pendingTicketRefreshes5.delete(source.iframeId);
                                    throw tmp60;
                                  } else {
                                    if (2 === tmp8) {
                                      c3 = 1;
                                      if (stillMounted()) {
                                        const items = [postMessageToRPCClient(self[8]).FRAME];
                                        const obj7 = {
                                          cmd: constants.REQUEST_PROXY_TICKET_REFRESH,
                                          nonce,
                                          evt: "ERROR",
                                          data: null,
                                        };
                                        const obj8 = {
                                          code: stillMounted.UNKNOWN_ERROR,
                                          message: "Could not renew the app session",
                                        };
                                        obj7.data = obj8;
                                        items[1] = obj7;
                                        postMessageToRPCClient(items, source.origin);
                                      }
                                      c3 = 0;
                                      const pendingTicketRefreshes4 = tmp60.pendingTicketRefreshes;
                                      pendingTicketRefreshes4.delete(source.iframeId);
                                      c5 = 3;
                                    } else if (3 === tmp8) {
                                      if (arg0 === 1) {
                                        c5 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 0;
                                        const pendingTicketRefreshes3 = tmp60.pendingTicketRefreshes;
                                        pendingTicketRefreshes3.delete(source.iframeId);
                                        c5 = 3;
                                        const obj9 = { value, done: true };
                                        return obj9;
                                      } else if (stillMounted()) {
                                        context = 4;
                                        c5 = 1;
                                        const obj10 = {
                                          value: source(self[16]).createProxyTicket(
                                            c3.applicationId,
                                            postMessageToRPCClient(self[17])(context.surface),
                                            context.surface.type,
                                          ),
                                          done: false,
                                        };
                                        return obj10;
                                      } else {
                                        c3 = 0;
                                        const pendingTicketRefreshes2 = tmp60.pendingTicketRefreshes;
                                        pendingTicketRefreshes2.delete(source.iframeId);
                                        c5 = 3;
                                        return { value: "IconComponent", done: null };
                                      }
                                    } else if (arg0 === 1) {
                                      c5 = 3;
                                      throw value;
                                    } else if (arg0 !== 2) {
                                      closure_128_0 = value;
                                      if (stillMounted()) {
                                        const items1 = [postMessageToRPCClient(self[8]).FRAME];
                                        const obj = {
                                          cmd: constants.REQUEST_PROXY_TICKET_REFRESH,
                                          nonce,
                                          evt: null,
                                          data: null,
                                        };
                                        const obj11 = { ticket: closure_128_0 };
                                        obj.data = obj11;
                                        items1[1] = obj;
                                        postMessageToRPCClient(items1, source.origin);
                                      }
                                      c3 = 1;
                                    }
                                    c3 = 0;
                                    const pendingTicketRefreshes = tmp60.pendingTicketRefreshes;
                                    pendingTicketRefreshes.delete(source.iframeId);
                                    c5 = 3;
                                    const obj12 = { value, done: true };
                                    return obj12;
                                  }
                                } catch (tmp60) {
                                  if (tmp5 === c3) {
                                    c5 = tmp3;
                                    throw tmp60;
                                  } else if (tmp2 === tmp62) {
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
