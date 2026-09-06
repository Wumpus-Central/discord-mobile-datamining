// === Module 13630: GatewaySocket ===

// Module 13630 (GatewaySocket)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ClientModDetectionUtils from "ClientModDetectionUtils" /* 1339 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4554 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import GatewayEncodingDefault from "GatewayEncoding" /* 13631 */;
import GatewaySocketOpCodes2 from "GatewaySocketOpCodes" /* 13634 */;
import AltGatewayTrackerDefault from "AltGatewayTracker" /* 13635 */;
import GatewaySocketDispatcherDefault from "GatewaySocketDispatcher" /* 13638 */;
import GatewaySocketAnalytics from "GatewaySocketAnalytics" /* 13643 */;
import ConnectionStateDefault from "ConnectionState" /* 13645 */;
import GatewayCompressionHandler from "GatewayCompressionHandler" /* 13647 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13666 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;

require = fn;
function noop() {

}
function byteSize(data) {
  if (null == data) {
    return 0;
  }
}
const Constants = fn(1074);
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = Constants);
let closure_9 = new LoggerDefault("GatewaySocket");
let tmp3 = new LoggerDefault("GatewaySocket");
let name = new GatewayEncodingDefault();
let global = null;
let c13 = 4004;
let closure_14 = 30 * DurationsDefault.Millis.SECOND;
let closure_15 = 3 * DurationsDefault.Millis.MINUTE;
const MINUTE = DurationsDefault.Millis.MINUTE;
class GatewaySocket extends tmp5 {
  constructor() {
    tmp7 = new GatewaySocket(tmp6, tmp5, tmp4, tmp3, tmp2, new.target, new.target, tmp);
    closure_0 = tmp7;
    tmp8 = new closure_1(closure_3[9])(1000, closure_16);
    tmp7.dispatchExceptionBackoff = tmp8;
    tmp7.dispatchSuccessTimer = 0;
    tmp7.didForceClearGuildHashes = false;
    tmp7.identifyUncompressedByteSize = 0;
    tmp7.identifyCompressedByteSize = 0;
    tmp7.analytics = {};
    tmp7.identifyCount = 0;
    tmp7.resumeUrl = null;
    tmp7.iosGoingAwayEventCount = 0;
    tmp9 = new closure_1(closure_3[10])();
    tmp7.altGateway = tmp9;
    tmp7.failedConnectAttempts = 0;
    tmp7.receivedHelloThisAttempt = false;
    tmp7.heartbeatQOSState = { currentPayload: null, upcomingState: null };
    tmp7.send = function send(op, d, arg2) {
      if (DeveloperOptionsStore.isLoggingGatewayEvents) {
        closure_9.verboseDangerously("~>", op, GatewaySocketOpCodes2.Opcode[op], d);
      }
      if (arg2) {
        if (!sessionEstablished.isSessionEstablished()) {
          const _HermesInternal = HermesInternal;
          closure_9.warn("Attempted to send while not being in a connected state opcode: " + op);
        }
      }
      try {
        if (null != sessionEstablished.webSocket) {
          const webSocket = sessionEstablished.webSocket;
          webSocket.send(packResult);
        }
      } catch (err) {
      }
    };
    tmp10 = new closure_1(closure_3[11])(tmp7);
    tmp7.dispatcher = tmp10;
    tmp11 = new closure_1(closure_3[9])(1000, 60000);
    tmp7.gatewayBackoff = tmp11;
    tmp7.connectionState_ = closure_1(closure_3[12]).CLOSED;
    tmp7.webSocket = null;
    tmp7.seq = 0;
    tmp7.sessionId = null;
    tmp7.token = null;
    tmp7.initialHeartbeatTimeout = null;
    tmp7.expeditedHeartbeatTimeout = null;
    tmp7.lastHeartbeatTime = null;
    tmp7.lastHeartbeatAckTime = null;
    tmp7.helloTimeout = null;
    tmp7.heartbeatInterval = null;
    tmp7.heartbeater = null;
    tmp7.heartbeatAck = true;
    tmp7.connectionStartTime = 0;
    tmp7.firstConnectAttemptStartTime = 0;
    tmp7.identifyStartTime = 0;
    tmp7.nextReconnectIsImmediate = false;
    obj = closure_0(closure_3[13]);
    tmp7.compressionHandler = obj.getCompressionHandler(closure_10);
    tmp7.hasConnectedOnce = false;
    tmp7.isFastConnect = false;
    tmp7.identifyCount = 0;
    tmp7.iosGoingAwayEventCount = 0;
    tmp7.failedConnectAttempts = 0;
    tmp7.receivedHelloThisAttempt = false;
    return tmp7;
  }
}
const prototype = GatewaySocket.prototype;
Object.defineProperty(prototype, "connectionState", {
  get: function connectionState() {
    return this.connectionState_;
  },
  set: undefined
});
Object.defineProperty(prototype, "connectionState", {
  get: undefined,
  set: function connectionState(connectionState_) {
    closure_9.verbose("Setting connection state to " + connectionState_);
    this.connectionState_ = connectionState_;
  }
});
prototype["addAnalytics"] = function addAnalytics(arg0) {
  const merged = Object.assign(this.analytics);
  const merged1 = Object.assign(arg0);
  this.analytics = {};
};
prototype["setResumeUrl"] = function setResumeUrl(resume_gateway_url) {
  let endsWithResult = null != resume_gateway_url;
  if (endsWithResult) {
    endsWithResult = resume_gateway_url.endsWith("/");
  }
  let substr = resume_gateway_url;
  if (endsWithResult) {
    substr = resume_gateway_url.substring(0, resume_gateway_url.length - 1);
  }
  if (null !== substr) {
    const _HermesInternal = HermesInternal;
    closure_9.verbose("Updating resume url to " + substr);
  }
  this.resumeUrl = substr;
};
prototype["handleActiveStateChange"] = function handleActiveStateChange(currentPayload) {
  const self = this;
  currentPayload = this.heartbeatQOSState.currentPayload;
  let active;
  if (currentPayload != null) {
    active = currentPayload.active;
  }
  let isSessionEstablishedResult = !active;
  if (null == self.heartbeatQOSState.currentPayload) {
    self.heartbeatQOSState.currentPayload = currentPayload;
  }
  const currentPayload2 = self.heartbeatQOSState.currentPayload;
  if (currentPayload.active) {
    currentPayload2.active = true;
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(currentPayload.reasons, HermesBuiltin.arraySpread(currentPayload2.reasons, 0));
    const set = new Set(items);
    const items1 = [];
    HermesBuiltin.arraySpread(set, 0);
    currentPayload2.reasons = items1.sort();
    if (!active) {
      isSessionEstablishedResult = self.isSessionEstablished();
    }
    if (isSessionEstablishedResult) {
      self._sendHeartbeat();
    }
  }
  self.heartbeatQOSState.upcomingState = currentPayload;
};
prototype["handleUpdateTimeSpentSessionId"] = function handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, clientLaunchId) {
  const self = this;
  if (this.connectionState_ === ConnectionStateDefault.SESSION_ESTABLISHED) {
    const obj = { initialization_timestamp: createdAtTimestamp, session_id: uuid, client_launch_id: clientLaunchId };
    self.send(GatewaySocketOpCodes2.Opcode.UPDATE_TIME_SPENT_SESSION_ID, obj);
    self._sendHeartbeat();
  }
};
prototype["_connect"] = function _connect() {
  const self = this;
  let identify = this;
  if (this.willReconnect()) {
    let obj = PauseGatewaySocketAll;
    if (obj.getIsPaused()) {
      logger.info("Skipping _connect because socket is paused");
    } else {
      self.connectionState = identify(13645).CONNECTING;
      self.nextReconnectIsImmediate = false;
      const algorithm = self.compressionHandler.getAlgorithm();
      name = name.getName();
      const _getGatewayUrlResult = self._getGatewayUrl();
      const _window = window;
      self.receivedHelloThisAttempt = false;
      identify(10).mark("\u{1F310}", "Socket._connect");
      let str5 = algorithm;
      if (algorithm == null) {
        str5 = "none";
      }
      let _HermesInternal = HermesInternal;
      logger.info("[CONNECT] " + _getGatewayUrlResult + ", encoding: " + name + ", version: " + window.GLOBAL_ENV.API_VERSION + ", compression: " + str5);
      if (null !== self.webSocket) {
        obj3.error("_connect called with already existing websocket");
        self._cleanup((close) => close.close(4000));
      }
      const _Date = Date;
      self.connectionStartTime = Date.now();
      if (0 === self.firstConnectAttemptStartTime) {
        self.firstConnectAttemptStartTime = self.connectionStartTime;
      }
      const _setTimeout = setTimeout;
      self.helloTimeout = setTimeout(() => {
        identify._handleClose(false, 0, "The connection timed out after " + Date.now() - identify.connectionStartTime + " ms - did not receive OP_HELLO in time.");
        identify.setResumeUrl(null);
      }, closure_14);
      const _URL = URL;
      const str11 = new URL(_getGatewayUrlResult);
      let onOpen = str11;
      const searchParams = str11.searchParams;
      searchParams.append("encoding", name);
      const searchParams2 = str11.searchParams;
      searchParams2.append("v", window.GLOBAL_ENV.API_VERSION.toString());
      if (null != algorithm) {
        const searchParams3 = str11.searchParams;
        searchParams3.append("compress", algorithm);
      }
      let str = str11.toString();
      ({ compressionHandler: compressionHandler2, _handleClose } = self);
      closure_129_0 = compressionHandler2;
      closure_129_1 = _handleClose.bind(self);
      closure_129_2 = (byteLength, compressed_byte_size) => {
        const timestamp = Date.now();
        let obj = closure_10;
        ({ op, s, t, d } = closure_10.unpack(byteLength));
        if (op !== GatewaySocketOpCodes2.Opcode.DISPATCH) {
          const _HermesInternal = HermesInternal;
          AppStartPerformanceDefault.mark("\u{1F310}", "GatewaySocket.onMessage " + op + " " + tmp3(13634).Opcode[op]);
        }
        if (DeveloperOptionsStore.isLoggingGatewayEvents) {
          const items = [op];
          if (op === tmp3(13634).Opcode.DISPATCH) {
            items.push(t);
          }
          items.push(d);
          const verboseDangerously = logger.verboseDangerously;
          const items1 = ["<~"];
          HermesBuiltin.arraySpread(items, 1);
          HermesBuiltin.apply(items1, logger);
        }
        const diff = Date.now() - timestamp;
        if ("READY" === t) {
          const parseReady = TTITrackerDefault.parseReady;
          const result = parseReady.set(timestamp, diff);
        } else if ("READY_SUPPLEMENTAL" === t) {
          const parseReadySupplemental = TTITrackerDefault.parseReadySupplemental;
          const result1 = parseReadySupplemental.set(timestamp, diff);
        } else if (diff > 10) {
          AppStartPerformanceDefault.mark("\u{1F310}", `Parse ${t}`, diff);
        }
        if (null != s) {
          identify.seq = s;
        }
        if (GatewaySocketOpCodes2.Opcode.HELLO === op) {
          identify._clearHelloTimeout();
          identify._handleHello(d);
        } else if (tmp3(13634).Opcode.RECONNECT === op) {
          identify._handleReconnect();
        } else if (tmp3(13634).Opcode.INVALID_SESSION === op) {
          const result2 = identify._handleInvalidSession(d);
        } else if (tmp3(13634).Opcode.HEARTBEAT === op) {
          const result3 = identify._handleHeartbeatReceive();
        } else if (tmp3(13634).Opcode.HEARTBEAT_ACK === op) {
          identify._handleHeartbeatAck(d);
        } else if (tmp3(13634).Opcode.DISPATCH === op) {
          let tmp29 = null;
          if (tmp18) {
            obj = { compressed_byte_size, uncompressed_byte_size: null, compression_algorithm: null, packing_algorithm: null, unpack_duration_ms: null };
            if (null == byteLength) {
              obj.uncompressed_byte_size = 0;
              obj.compression_algorithm = tmp28.compressionHandler.getAlgorithm();
              obj.packing_algorithm = obj.getName();
              obj.unpack_duration_ms = diff;
              tmp29 = obj;
              const compressionHandler = tmp28.compressionHandler;
            }
          }
          identify._handleDispatch(d, t, tmp29);
          tmp28 = identify;
        } else {
          const _HermesInternal2 = HermesInternal;
          logger.info("Unhandled op " + op);
        }
        identify._sendHeartbeatIfDue();
      };
      closure_129_3 = 0;
      compressionHandler2.dataReady((arg0) => {
        try {
          importAll(arg0, closure_3);
          closure_3 = 0;
        } catch (tmp5) {
          closure_3 = 0;
          throw tmp5;
        }
      });
      closure_129_4 = false;
      onOpen = function onOpen(arg0) {

      };
      logger.enableNativeLogger(true);
      const _window2 = window;
      identify = false;
      const _window3 = window;
      window._ws = null;
      let messages2 = null;
      let flag3 = false;
      let flag4 = false;
      let tmp32;
      if (null != _ws) {
        const ws = _ws.ws;
        const userId = _ws.state.userId;
        let tmp33 = null != userId;
        if (tmp33) {
          tmp33 = null != global;
        }
        if (tmp33) {
          tmp33 = userId !== global;
        }
        if (_ws.state.gateway !== str) {
          const _HermesInternal3 = HermesInternal;
          obj3.verbose("[FAST CONNECT] gatewayURL mismatch: " + _ws.state.gateway + " !== " + str);
          ws.close(1000);
          messages2 = null;
          flag3 = false;
          flag4 = false;
          tmp32 = null;
        } else if (tmp33) {
          let _HermesInternal2 = HermesInternal;
          obj3.log("[FAST CONNECT] refusing to adopt socket: identified user " + userId + " does not match switch target " + global);
          ws.close(1000);
          messages2 = null;
          flag3 = false;
          flag4 = false;
          tmp32 = null;
        } else {
          obj = {};
          let merged = Object.assign(_ws.state);
          if (null != obj.messages) {
            const messages = obj.messages;
            obj.messages = messages.map((data) => {
              let tmp = data;
              if (null != data.data) {
                tmp = data;
                if (typeof data.data === "string") {
                  const obj = {};
                  const merged = Object.assign(data);
                  obj.data = data.data.substring(0, 100);
                  tmp = obj;
                }
              }
              return tmp;
            });
          }
          obj = {};
          const merged1 = Object.assign(obj);
          const messages1 = obj.messages;
          let length;
          if (messages1 != null) {
            length = messages1.length;
          }
          obj.messages = length;
          obj3.log("[FAST CONNECT] successfully took over websocket, state:", obj);
          flag4 = _ws.state.open;
          identify = _ws.state.identify;
          messages2 = _ws.state.messages;
          const clientState = _ws.state.clientState;
          flag3 = identify;
          tmp32 = ws;
        }
      }
      if (null == tmp32) {
        const tmp48 = tmp5(13633)(str);
        tmp48.binaryType = "arraybuffer";
        tmp32 = tmp48;
      }
      self.webSocket = tmp32;
      self.compressionHandler.bindWebSocket(tmp32);
      if (flag4) {
        const _HermesInternal4 = HermesInternal;
        tmp5(10).mark("\u{1F310}", "GatewaySocket.onOpen " + flag3);
        const _Date2 = Date;
        let diff = Date.now() - self.connectionStartTime;
        const _HermesInternal5 = HermesInternal;
        obj3.info("[CONNECTED] " + str11.toString() + " in " + diff + " ms");
        self.isFastConnect = flag3;
        if (flag3) {
          let result = self._doFastConnectIdentify();
        } else {
          self._doResumeOrIdentify();
        }
        const tmp5Result = tmp5(10);
      }
      const fn = (data) => {
        let feedResult = data;
        data = data.data;
        if (null != data.raw_length) {
          closure_3 = closure_3 + feedResult.raw_length;
        } else {
          closure_3 = closure_3 + byteSize(data);
        }
        try {
          feedResult = onOpen.feed(data);
        } catch (tmp6) {
          if (!c4) {
            c4 = true;
            identify(false, 0, "A decompression error occurred");
          }
          throw tmp6;
        }
      };
      if (null != messages2) {
        const item = messages2.forEach(fn);
      }
      tmp32.onopen = () => {
        identify(closure_3[15]).mark("\u{1F310}", "GatewaySocket.onOpen " + identify);
        const diff = Date.now() - importDefault.connectionStartTime;
        logger.info("[CONNECTED] " + require.toString() + " in " + diff + " ms");
        importDefault.isFastConnect = identify;
        if (identify) {
          const result = obj2._doFastConnectIdentify();
        } else {
          obj2._doResumeOrIdentify();
        }
      };
      tmp32.onmessage = fn;
      tmp32.onclose = function onClose(wasClean) {
        return identify._handleClose(wasClean.wasClean, wasClean.code, wasClean.reason);
      };
      tmp32.onerror = function onError() {
        identify.setResumeUrl(null);
        CrossPlatformNativeUtilsDefault.flushDNSCache();
        identify._handleClose(false, 0, "An error with the websocket occurred");
      };
      let compressionHandler = self.compressionHandler;
      const compressionHandler3 = self.compressionHandler;
      let obj2 = identify(10);
    }
  } else {
    str = "Skipping _connect because willReconnect is false";
    logger.verbose("Skipping _connect because willReconnect is false");
  }
};
prototype["_handleHello"] = function _handleHello(d) {
  const heartbeat_interval = d.heartbeat_interval;
  this.heartbeatInterval = heartbeat_interval;
  const timestamp = Date.now();
  const diff = timestamp - this.connectionStartTime;
  let obj = GatewaySocketAnalytics;
  closure_9.verbose("[HELLO] via " + obj.getConnectionPath(d) + ", heartbeat interval: " + heartbeat_interval + ", took " + diff + " ms");
  obj = { socket: this, altGateway: this.altGateway, gatewayUrl: this._getGatewayUrl(), now: timestamp };
  GatewaySocketAnalytics.logGatewayConnected(obj);
  this.receivedHelloThisAttempt = true;
  this.failedConnectAttempts = 0;
  this.firstConnectAttemptStartTime = 0;
  this._startHeartbeater();
};
prototype["_handleReconnect"] = function _handleReconnect() {
  closure_9.verbose("[RECONNECT] gateway requested I reconnect.");
  this._cleanup((close) => close.close(4000));
  this.connectionState = ConnectionStateDefault.WILL_RECONNECT;
  this._connect();
};
prototype["_handleInvalidSession"] = function _handleInvalidSession(d) {
  let str = "";
  if (d) {
    str = " can resume)";
  }
  const self = this;
  closure_9.info(`[INVALID_SESSION]${str}`);
  if (d) {
    self._doResumeOrIdentify();
  } else {
    self._doIdentify();
  }
};
prototype["_handleDispatch"] = function _handleDispatch(d, type, compressionAnalytics) {
  const self = this;
  const diff = Date.now() - this.connectionStartTime;
  if ("READY" === type) {
    const session_id = d.session_id;
    self.sessionId = session_id;
    const connectionPath = GatewaySocketAnalytics.getConnectionPath(d);
    AppStartPerformanceDefault.setServerTrace(connectionPath);
    const _HermesInternal2 = HermesInternal;
    closure_9.info("[READY] took " + diff + "ms, as " + session_id);
    const _HermesInternal3 = HermesInternal;
    closure_9.verbose("" + connectionPath);
    self.connectionState = ConnectionStateDefault.SESSION_ESTABLISHED;
    const gatewayBackoff2 = self.gatewayBackoff;
    gatewayBackoff2.succeed();
    self.iosGoingAwayEventCount = 0;
    const altGateway2 = self.altGateway;
    altGateway2.recordSuccess();
    self.setResumeUrl(d.resume_gateway_url);
  } else if ("READY_SUPPLEMENTAL" === type) {
    const _HermesInternal = HermesInternal;
    closure_9.info("[READY_SUPPLEMENTAL] took " + diff + "ms");
    self.connectionState = ConnectionStateDefault.SESSION_ESTABLISHED;
    const gatewayBackoff = self.gatewayBackoff;
    gatewayBackoff.succeed();
    self.iosGoingAwayEventCount = 0;
    const altGateway = self.altGateway;
    altGateway.recordSuccess();
  } else if ("RESUMED" === type) {
    closure_9.verbose(GatewaySocketAnalytics.getConnectionPath(d));
    self.connectionState = ConnectionStateDefault.SESSION_ESTABLISHED;
    const gatewayBackoff3 = self.gatewayBackoff;
    gatewayBackoff3.succeed();
    self.iosGoingAwayEventCount = 0;
    const altGateway3 = self.altGateway;
    altGateway3.recordSuccess();
  }
  const dispatcher = self.dispatcher;
  dispatcher.receiveDispatch(d, type, compressionAnalytics);
};
prototype["handleResumeDispatched"] = function handleResumeDispatched() {
  closure_9.info("[RESUMED] took " + Date.now() - this.connectionStartTime + "ms, replayed " + this.dispatcher.resumeAnalytics.numEvents + " events, new seq: " + this.seq);
};
prototype["handleReadyDispatched"] = function handleReadyDispatched() {
  this.didForceClearGuildHashes = false;
  this.hasConnectedOnce = true;
};
prototype["_getGatewayUrl"] = function _getGatewayUrl() {
  const self = this;
  if (null != this.resumeUrl) {
    let resumeUrl = self.resumeUrl;
  } else {
    const altGateway = self.altGateway;
    resumeUrl = altGateway.getAltGatewayUrl();
    if (resumeUrl == null) {
      resumeUrl = GATEWAY_ENDPOINT;
    }
  }
  return resumeUrl;
};
prototype["_maybeFallBackFromAltGateway"] = function _maybeFallBackFromAltGateway() {
  const self = this;
  const altGateway = this.altGateway;
  if (altGateway.shouldUseAltGateway()) {
    const altGateway2 = self.altGateway;
    altGateway2.recordFailure();
    const altGateway3 = self.altGateway;
    const shouldUseAltGatewayResult = altGateway3.shouldUseAltGateway();
    if (!shouldUseAltGatewayResult) {
      const gatewayBackoff = self.gatewayBackoff;
      gatewayBackoff.succeed();
      self.setResumeUrl(null);
      closure_9.warn("[ALT GATEWAY] 3 consecutive failures, falling back to default URL for this session.");
    }
  }
};
prototype["_handleHeartbeatReceive"] = function _handleHeartbeatReceive() {
  const self = this;
  this._sendHeartbeat();
  if (tmp2) {
    const _clearInterval = clearInterval;
    clearInterval(self.heartbeater);
    const _setInterval = setInterval;
    const _doHeartbeatInterval = self._doHeartbeatInterval;
    self.heartbeater = setInterval(_doHeartbeatInterval.bind(self), self.heartbeatInterval);
  }
};
prototype["_handleHeartbeatAck"] = function _handleHeartbeatAck() {
  const self = this;
  this.lastHeartbeatAckTime = Date.now();
  this.heartbeatAck = true;
  if (null !== this.expeditedHeartbeatTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.expeditedHeartbeatTimeout);
    self.expeditedHeartbeatTimeout = null;
    closure_9.verbose("Expedited heartbeat succeeded");
  }
};
prototype["_handleHeartbeatTimeout"] = function _handleHeartbeatTimeout() {
  const self = this;
  this._cleanup((close) => close.close(4000));
  this.connectionState = ConnectionStateDefault.WILL_RECONNECT;
  const result = this._maybeFallBackFromAltGateway();
  const gatewayBackoff = this.gatewayBackoff;
  const result1 = gatewayBackoff.fail(() => self._connect()) / 1000;
  closure_9.warn("[ACK TIMEOUT] reconnecting in " + result1.toFixed(2) + " seconds.");
};
prototype["_handleClose"] = function _handleClose(wasClean, c13, reason) {
  const self = this;
  let flag = wasClean;
  if (!wasClean) {
    flag = false;
  }
  self._cleanup();
  self.emit("close", { code: c13, reason });
  if (c13 === c13) {
    self.connectionState = ConnectionStateDefault.CLOSED;
    closure_9.warn("[WS CLOSED] because of authentication failure, marking as closed.");
    return self._reset(flag, c13, reason);
  } else {
    const result = self._tryDetectInvalidIOSToken(c13, reason, flag);
    self.connectionState = ConnectionStateDefault.WILL_RECONNECT;
    if (!self.receivedHelloThisAttempt) {
      self.failedConnectAttempts = self.failedConnectAttempts + 1;
    }
    const result1 = self._maybeFallBackFromAltGateway();
    if (self.nextReconnectIsImmediate) {
      const _HermesInternal2 = HermesInternal;
      closure_9.info("[WS CLOSED] (" + flag.toString() + ", " + c13 + ", " + reason + ") retrying immediately.");
      self._connect();
    } else {
      const gatewayBackoff = self.gatewayBackoff;
      flag.toString();
      const result2 = gatewayBackoff.fail(() => self._connect()) / 1000;
      const _HermesInternal = HermesInternal;
      const str = " seconds.";
      closure_9.info("[WS CLOSED] (" + str + ", " + c13 + ", " + reason + ") retrying in " + result2.toFixed(2) + " seconds.");
      if (self.gatewayBackoff.fails > 4) {
        self._reset(flag, c13, reason);
      }
      const failResult = gatewayBackoff.fail(() => self._connect());
    }
  }
  const obj = { code: c13, reason };
};
prototype["_tryDetectInvalidIOSToken"] = function _tryDetectInvalidIOSToken(c13, reason, flag) {
  const self = this;
  _require = flag;
  let obj = require("PlatformUtils");
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    isIOSResult = null != self.token;
  }
  if (isIOSResult) {
    isIOSResult = 1001 === c13;
  }
  if (isIOSResult) {
    isIOSResult = "Stream end encountered" === reason;
  }
  if (isIOSResult) {
    self.iosGoingAwayEventCount = self.iosGoingAwayEventCount + 1;
    if (3 === self.iosGoingAwayEventCount) {
      const HTTP = require("HTTPUtils").HTTP;
      obj = { url: constants2.ME, headers: null, rejectWithError: false };
      obj = { authorization: self.token };
      obj.headers = obj;
      value = HTTP.get(obj);
      value.then((api_status_code) => {
        self(dependencyMap[21]).track(constants.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: api_status_code.status });
      }, (status) => {
        status = status.status;
        if (401 === status) {
          self.connectionState = ConnectionStateDefault.CLOSED;
          logger.warn("[WS CLOSED] because of manual authentication failure, marking as closed.");
          self._reset(closure_0, c13, "invalid token manually detected");
        }
        AnalyticsUtilsDefault.track(constants.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: status });
      });
    }
  }
};
prototype["_reset"] = function _reset(wasClean, code, reason) {
  this.sessionId = null;
  this.seq = 0;
  closure_9.warn("[RESET] (" + wasClean.toString() + ", " + code + ", " + reason + ")");
  this.emit("disconnect", { wasClean, code, reason });
};
prototype["_sendHeartbeatIfDue"] = function _sendHeartbeatIfDue() {
  const self = this;
  if (null != this.heartbeatInterval) {
    if (null != self.heartbeater) {
      const lastHeartbeatTime = self.lastHeartbeatTime;
      let tmp = null != lastHeartbeatTime;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() - lastHeartbeatTime > self.heartbeatInterval + 5000;
      }
      if (tmp) {
        self._sendHeartbeat();
      }
    }
  }
};
prototype["_doHeartbeatInterval"] = function _doHeartbeatInterval() {
  const self = this;
  if (this.heartbeatAck) {
    self.heartbeatAck = false;
    self._sendHeartbeat();
  } else if (null === self.expeditedHeartbeatTimeout) {
    const result = self._handleHeartbeatTimeout();
  }
};
prototype["_startHeartbeater"] = function _startHeartbeater() {
  const self = this;
  const heartbeatInterval = this.heartbeatInterval;
  _modDef38(null != heartbeatInterval, "GatewaySocket: Heartbeat interval should never null here.");
  if (null !== this.initialHeartbeatTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.initialHeartbeatTimeout);
  }
  if (null !== self.heartbeater) {
    const _clearInterval = clearInterval;
    clearInterval(self.heartbeater);
    self.heartbeater = null;
  }
  self.initialHeartbeatTimeout = setTimeout(() => {
    self.initialHeartbeatTimeout = null;
    self.heartbeatAck = true;
    const _doHeartbeatInterval = self._doHeartbeatInterval;
    self.heartbeater = setInterval(_doHeartbeatInterval.bind(self), heartbeatInterval);
    self._doHeartbeatInterval();
  }, Math.floor(Math.random() * heartbeatInterval));
};
prototype["_stopHeartbeater"] = function _stopHeartbeater() {
  const self = this;
  if (null !== this.heartbeater) {
    const _clearInterval = clearInterval;
    clearInterval(self.heartbeater);
    self.heartbeater = null;
  }
  if (null !== self.initialHeartbeatTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.initialHeartbeatTimeout);
    self.initialHeartbeatTimeout = null;
  }
  if (null !== self.expeditedHeartbeatTimeout) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(self.expeditedHeartbeatTimeout);
    self.expeditedHeartbeatTimeout = null;
  }
};
prototype["_clearHelloTimeout"] = function _clearHelloTimeout() {
  const self = this;
  if (null != this.helloTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.helloTimeout);
    self.helloTimeout = null;
  }
};
prototype["_cleanup"] = function _cleanup(fn) {
  const self = this;
  const Emitter = initializeDefault.Emitter;
  Emitter.resume();
  this._stopHeartbeater();
  this._clearHelloTimeout();
  const webSocket = this.webSocket;
  this.webSocket = null;
  if (null != webSocket) {
    webSocket.onopen = noop;
    webSocket.onmessage = noop;
    webSocket.onerror = noop;
    webSocket.onclose = noop;
    if (fn != null) {
      fn(webSocket);
    }
  }
  const gatewayBackoff = self.gatewayBackoff;
  gatewayBackoff.cancel();
  self.compressionHandler.close();
  self.compressionHandler = GatewayCompressionHandler.getCompressionHandler(closure_10);
};
prototype["_doResume"] = function _doResume() {
  const self = this;
  this.connectionState = ConnectionStateDefault.RESUMING;
  let obj = GatewaySocketAnalytics;
  this.dispatcher.resumeAnalytics = obj.createResumeAnalytics(Date.now() - this.connectionStartTime);
  let str = this.sessionId;
  if (str == null) {
    str = "";
  }
  closure_9.info("[RESUME] resuming session " + str + ", seq: " + self.seq);
  obj = { token: self.token, session_id: self.sessionId, seq: self.seq };
  self.send(GatewaySocketOpCodes2.Opcode.RESUME, obj, false);
};
prototype["_doIdentify"] = function _doIdentify() {
  const self = this;
  return (async (arg0, value) => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_5 = undefined;
            closure_128_6 = undefined;
            closure_128_7 = undefined;
            closure_128_8 = undefined;
            let token;
            let properties;
            closure_128_11 = undefined;
            let presence;
            closure_128_13 = undefined;
            closure_128_14 = undefined;
            self.seq = 0;
            self.sessionId = null;
            const handleIdentifyResult = self.handleIdentify();
            closure_128_0 = handleIdentifyResult;
            if (null !== handleIdentifyResult) {
              self.connectionState = tmp2(13645).IDENTIFYING;
              const _Date = Date;
              const timestamp = Date.now();
              closure_128_1 = timestamp;
              self.identifyStartTime = timestamp;
              if (obj10.isCacheEnabled()) {
                let committedVersions = tmp2(7653).getCommittedVersions();
                const obj12 = tmp2(7653);
              } else {
                committedVersions = {};
              }
              const items = [committedVersions, , ];
              obj10 = tmp3(7649);
              if (obj13.isCacheEnabled()) {
                let committedVersions1 = tmp2(7656).getCommittedVersions();
                const obj15 = tmp2(7656);
              } else {
                committedVersions1 = {};
              }
              items[1] = committedVersions1;
              obj13 = tmp3(7649);
              let canUseGuildVersionsResult = tmp3(7649).isCacheEnabled();
              if (canUseGuildVersionsResult) {
                canUseGuildVersionsResult = tmp2(7654).canUseGuildVersions();
                const obj17 = tmp2(7654);
              }
              items[2] = canUseGuildVersionsResult;
              v1 = 1;
              dependencyMap = 1;
              const obj1 = { value: Promise.all(items), done: false };
              return obj1;
            } else {
              self._handleClose(true, closure_1_13, "No connection info provided");
            }
          }
        } else {
          let num3 = 1;
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_2 = value;
            let tmp65;
            closure_128_3 = _slicedToArray(closure_128_2, 3);
            closure_128_4 = closure_128_3[0];
            closure_128_5 = closure_128_3[1];
            closure_128_6 = closure_128_3[2];
            closure_128_7 = tmp3(500).buildQosToken(closure_128_0.userId, closure_129_0.getIsUserActive());
            if (closure_128_6) {
              const obj3 = { guild_versions: closure_128_4, highest_last_message_id: closure_128_5.highest_last_message_id, read_state_version: closure_128_5.read_state_version, user_guild_settings_version: closure_128_5.user_guild_settings_version, user_settings_version: closure_128_5.user_settings_version, private_channels_version: closure_128_5.private_channels_version, api_code_version: closure_128_5.api_code_version, initial_guild_id: closure_128_5.initial_guild_id };
              obj = obj3;
            } else {
              obj = { guild_versions: {} };
            }
            closure_128_8 = obj;
            if (closure_129_0.connectionState !== tmp2(13645).IDENTIFYING) {
              closure_1_9.warn("Skipping identify because connectionState or identifyStartTime has changed");
            }
            token = closure_128_0.token;
            properties = closure_128_0.properties;
            if (tmp65 === properties) {
              let obj4 = {};
            } else {
              obj4 = properties;
            }
            closure_128_11 = obj4;
            presence = closure_128_0.presence;
            closure_129_0.token = token;
            closure_1_9.verbose("[IDENTIFY]");
            const obj5 = { token, capabilities: null, properties: null, presence: null, compress: null, client_state: null, qos_token: null };
            obj4 = tmp3(13667);
            let obj6 = { useChannelObfuscation: null };
            obj6 = tmp3(13668);
            obj6.useChannelObfuscation = obj6.isChannelMetadataObfuscationEnabled("GatewaySocket");
            obj5.capabilities = obj4.getClientCapabilities(obj6);
            obj5.properties = closure_128_11;
            obj5.presence = presence;
            obj5.compress = closure_129_0.compressionHandler.usesLegacyCompression();
            obj5.client_state = closure_128_8;
            obj5.qos_token = closure_128_7;
            closure_128_13 = obj5;
            const _JSON = JSON;
            closure_128_14 = JSON.stringify(closure_128_13);
            closure_129_0.identifyUncompressedByteSize = closure_128_14.length;
            const compressionHandler = closure_129_0.compressionHandler;
            const obj21 = tmp3(500);
            closure_129_0.identifyCompressedByteSize = v1(13650).deflate(closure_128_14).length;
            closure_129_0.identifyCount = closure_129_0.identifyCount + num3;
            num3 = closure_129_0;
            closure_129_0.send(tmp3(13634).Opcode.IDENTIFY, closure_128_13, false);
            tmp65 = tmp2(1242);
            tmp65.track(constants.SESSION_START_CLIENT, {});
            const obj8 = v1(13650);
          }
        }
        dependencyMap = 3;
      } catch (tmp90) {
        dependencyMap = tmp;
        throw tmp90;
      }
    }
  })();
};
prototype["_doFastConnectIdentify"] = function _doFastConnectIdentify() {
  const self = this;
  this.seq = 0;
  this.sessionId = null;
  const handleIdentifyResult = this.handleIdentify();
  if (null !== handleIdentifyResult) {
    self.token = handleIdentifyResult.token;
    self.connectionState = ConnectionStateDefault.IDENTIFYING;
    const _Date = Date;
    self.identifyStartTime = Date.now();
    self.identifyCount = self.identifyCount + 1;
    closure_9.verbose("[IDENTIFY, fast-connect]");
    const result = self._updateLastHeartbeatAckTime();
  } else {
    self._handleClose(true, c13, "No connection info provided");
  }
};
prototype["_doResumeOrIdentify"] = function _doResumeOrIdentify() {
  const self = this;
  if (null === this.sessionId) {
    self._doIdentify();
  } else {
    self._doResume();
  }
  const result = self._updateLastHeartbeatAckTime();
};
prototype["_updateLastHeartbeatAckTime"] = function _updateLastHeartbeatAckTime() {
  this.lastHeartbeatAckTime = Date.now();
};
prototype["getIsUserActive"] = function getIsUserActive() {
  ({ upcomingState, currentPayload } = this.heartbeatQOSState);
  let flag;
  if (upcomingState != null) {
    flag = upcomingState.active;
  }
  if (flag == null) {
    let active;
    if (currentPayload != null) {
      active = currentPayload.active;
    }
    flag = active;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["_consumeQOSPayload"] = function _consumeQOSPayload() {
  const self = this;
  let currentPayload = this.heartbeatQOSState.upcomingState;
  if (currentPayload == null) {
    currentPayload = self.heartbeatQOSState.currentPayload;
  }
  this.heartbeatQOSState.currentPayload = currentPayload;
  self.heartbeatQOSState.upcomingState = null;
  return this.heartbeatQOSState.currentPayload;
};
prototype["_sendHeartbeat"] = function _sendHeartbeat() {
  const _consumeQOSPayloadResult = this._consumeQOSPayload();
  this.send(GatewaySocketOpCodes2.Opcode.QOS_HEARTBEAT, { seq: this.seq, qos: this._consumeQOSPayload() }, false);
  this.lastHeartbeatTime = Date.now();
};
prototype["getLogger"] = function getLogger() {
  return closure_9;
};
prototype["willReconnect"] = function willReconnect() {
  return this.connectionState === ConnectionStateDefault.WILL_RECONNECT;
};
prototype["isClosed"] = function isClosed() {
  return this.connectionState === ConnectionStateDefault.CLOSED;
};
prototype["isSessionEstablished"] = function isSessionEstablished() {
  let tmp3 = this.connectionState === ConnectionStateDefault.SESSION_ESTABLISHED;
  if (!tmp3) {
    tmp3 = this.connectionState === ConnectionStateDefault.RESUMING;
  }
  return tmp3;
};
prototype["isConnected"] = function isConnected() {
  const self = this;
  let tmp3 = this.connectionState === ConnectionStateDefault.IDENTIFYING;
  if (!tmp3) {
    tmp3 = self.connectionState === tmp(13645).RESUMING;
  }
  if (!tmp3) {
    tmp3 = self.connectionState === tmp(13645).SESSION_ESTABLISHED;
  }
  return tmp3;
};
prototype["connect"] = function connect() {
  const self = this;
  if (this.isClosed()) {
    const altGateway = self.altGateway;
    altGateway.reset();
    closure_9.verbose(".connect() called, new state is WILL_RECONNECT");
    self.connectionState = ConnectionStateDefault.WILL_RECONNECT;
    self.firstConnectAttemptStartTime = 0;
    self._connect();
    let flag = true;
  } else {
    closure_9.error("Cannot start a new connection, connection state is not closed");
    flag = false;
  }
  return flag;
};
prototype["resetSocketAndClearCacheOnError"] = function resetSocketAndClearCacheOnError(args) {
  const self = this;
  ({ action, error, metricAction } = args);
  closure_9.error("resetSocketAndClearCacheOnError during " + action + ": " + error.message, error.stack);
  let obj1 = ClientModDetectionUtils;
  const usesClientModsResult = obj1.usesClientMods();
  let obj2 = MonitoringAgentDefault;
  let obj = { name: MetricEvents.MetricEvents.SOCKET_CRASHED, tags: null };
  if (metricAction == null) {
    metricAction = action;
  }
  const items = ["action:" + metricAction, "modded_client:" + usesClientModsResult];
  obj.tags = items;
  obj2.increment(obj, true);
  if (false !== args.sentry) {
    let tmp4Result = tmp4(1232);
    obj = { tags: null };
    obj1 = { socketCrashedAction: action };
    obj.tags = obj1;
    tmp4Result.captureException(error, obj);
  }
  tmp4Result = tmp4(1242);
  obj2 = { error_message: error.message, error_stack: error.stack, has_client_mods: usesClientModsResult, action };
  tmp4Result.track(constants.GATEWAY_SOCKET_RESET, obj2);
  self._cleanup((close) => close.close());
  self._reset(true, 1000, "Resetting socket due to error.");
  const dispatcher = self.dispatcher;
  dispatcher.clear();
  self.connectionState = ConnectionStateDefault.WILL_RECONNECT;
  let dispatchExceptionBackoff = self.dispatchExceptionBackoff;
  dispatchExceptionBackoff.cancel();
  if (0 === self.dispatchExceptionBackoff._fails) {
    obj.verbose("Triggering fast reconnect");
    const dispatchExceptionBackoff3 = self.dispatchExceptionBackoff;
    dispatchExceptionBackoff3.fail(() => {

    });
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => self._connect(), 0);
  } else {
    const dispatchExceptionBackoff2 = self.dispatchExceptionBackoff;
    dispatchExceptionBackoff2.fail(() => self._connect());
  }
  self.didForceClearGuildHashes = true;
  const tmp4Result1 = DispatcherDefault;
  tmp4Result1.dispatch({ type: "CLEAR_CACHES", reason: "Socket reset during " + action });
  const obj3 = { type: "CLEAR_CACHES", reason: "Socket reset during " + action };
  DispatcherDefault.dispatch({ type: "LIBDISCORE_RESET" });
  clearTimeout(self.dispatchSuccessTimer);
  self.dispatchSuccessTimer = setTimeout(() => {
    const dispatchExceptionBackoff = self.dispatchExceptionBackoff;
    return dispatchExceptionBackoff.succeed();
  }, 2 * MINUTE);
};
prototype["resetSocketOnDispatchError"] = function resetSocketOnDispatchError(error) {
  let tmp = null != error.error.message;
  if (tmp) {
    const message = error.error.message;
    tmp = message.indexOf("Guild data was missing from store") >= 0;
  }
  const obj = {};
  const merged = Object.assign(error);
  obj.sentry = !tmp;
  const result = this.resetSocketAndClearCacheOnError(obj);
};
prototype["close"] = function close() {
  const self = this;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (self.isClosed()) {
    obj.verbose("close() called, but socket is already closed.");
    if (!flag) {
      self.sessionId = null;
      self.token = null;
    }
  } else {
    const _HermesInternal = HermesInternal;
    obj.info("Closing connection, current state is " + self.connectionState);
    self._cleanup((close) => close.close(num));
    self.connectionState = ConnectionStateDefault.CLOSED;
    if (!flag) {
      self.sessionId = null;
      self.token = null;
      const _setImmediate = setImmediate;
      setImmediate(() => {
        self._reset(true, 1000, "Disconnect requested by user");
      });
    }
  }
};
prototype["networkStateChange"] = function networkStateChange(arg0, arg1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  this.expeditedHeartbeat(arg0, arg1, flag, false);
};
prototype["expeditedHeartbeat"] = function expeditedHeartbeat(arg0) {
  const self = this;
  let str = arg1;
  if (arg1 === undefined) {
    str = "";
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = true;
  }
  if (!self.isClosed()) {
    if (self.isConnected()) {
      let str8 = "";
      if (null != str) {
        str8 = "";
        if ("" !== str) {
          str8 = `reason: ${str}`;
        }
      }
      closure_9.verbose(`Performing an expedited heartbeat ${str8}`);
      self.heartbeatAck = false;
      self._sendHeartbeat();
      if (null !== self.expeditedHeartbeatTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.expeditedHeartbeatTimeout);
      }
      const _setTimeout = setTimeout;
      self.expeditedHeartbeatTimeout = setTimeout(() => {
        self.expeditedHeartbeatTimeout = null;
        if (false === self.heartbeatAck) {
          const result = self._handleHeartbeatTimeout();
        }
      }, arg0);
    } else if (flag) {
      self.resetBackoff(str, flag2);
    } else {
      let str3 = "";
      if (null != str) {
        str3 = "";
        if ("" !== str) {
          str3 = `reason: ${str}`;
        }
      }
      const _HermesInternal = HermesInternal;
      closure_9.verbose("Expedited heartbeat requested, but, connection state is " + self.connectionState + " and reconnectImmediately was not requested " + str3);
    }
    return tmp6;
  }
};
prototype["resetBackoff"] = function resetBackoff(reason) {
  let str = reason;
  if (reason === undefined) {
    str = "";
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let str2 = "";
  if (null != str) {
    str2 = "";
    if ("" !== str) {
      str2 = ` for reason: ${str}`;
    }
  }
  const self = this;
  closure_9.verbose(`Connection has reset backoff${str2}`);
  const gatewayBackoff = this.gatewayBackoff;
  gatewayBackoff.succeed();
  this.iosGoingAwayEventCount = 0;
  this.nextReconnectIsImmediate = true;
  if (this.willReconnect()) {
    self._connect();
  } else {
    if (flag) {
      flag = self.connectionState !== ConnectionStateDefault.SESSION_ESTABLISHED;
    }
    if (flag) {
      self._handleClose(true, 0, str);
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/gateway/GatewaySocket.tsx");

export default GatewaySocket;
export function setAccountSwitchUserId(targetUserId) {
  global = targetUserId;
}