// discord_app/modules/gateway/GatewaySocket.tsx
import set from "set";
import pack from "pack";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import ME from "ME";
import "presenceUpdate";

let error;
let metroImportAll;
let require = arg1;
function noop() {

}
function byteSize(byteLength) {
  if (null == byteLength) {
    return 0;
  }
}
({ AnalyticEvents: error, Endpoints: metroImportAll } = ME);
let c9 = new require("ME")("GatewaySocket");
let tmp3 = new require("ME")("GatewaySocket");
let c10 = new require("pack")();
let c11 = null;
let c13 = 4004;
let closure_14 = 30 * require("set").Millis.SECOND;
let closure_15 = 3 * require("set").Millis.MINUTE;
const MINUTE = require("set").Millis.MINUTE;
class GatewaySocket extends tmp5 {
  constructor() {
    tmp7 = new GatewaySocket(tmp6, tmp5, tmp4, tmp3, tmp2, new.target, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp7;
    tmp8 = new require("fails")(1000, c16);
    tmp7.dispatchExceptionBackoff = tmp8;
    tmp7.dispatchSuccessTimer = 0;
    tmp7.didForceClearGuildHashes = false;
    tmp7.identifyUncompressedByteSize = 0;
    tmp7.identifyCompressedByteSize = 0;
    tmp7.analytics = {};
    tmp7.identifyCount = 0;
    tmp7.resumeUrl = null;
    tmp7.iosGoingAwayEventCount = 0;
    tmp9 = new require("shouldUseAltGateway")();
    tmp7.altGateway = tmp9;
    tmp7.failedConnectAttempts = 0;
    tmp7.receivedHelloThisAttempt = false;
    tmp7.heartbeatQOSState = { currentPayload: null, upcomingState: null };
    tmp7.send = function send(op, d) {
      if (outer1_6.isLoggingGatewayEvents) {
        outer1_9.verboseDangerously("~>", op, tmp7(outer1_3[8]).Opcode[op], d);
      }
      if (arg2) {
        if (!tmp7.isSessionEstablished()) {
          const _HermesInternal = HermesInternal;
          outer1_9.warn("Attempted to send while not being in a connected state opcode: " + op);
        }
      }
      try {
        if (null != tmp7.webSocket) {
          const webSocket = tmp7.webSocket;
          webSocket.send(packResult);
        }
      } catch (err) {
      }
    };
    tmp10 = new require("set")(tmp7);
    tmp7.dispatcher = tmp10;
    tmp11 = new require("fails")(1000, 60000);
    tmp7.gatewayBackoff = tmp11;
    tmp7.connectionState_ = require("CLOSED").CLOSED;
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
    obj = require("items");
    tmp7.compressionHandler = obj.getCompressionHandler(Endpoints);
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
    tmp3.verbose("Setting connection state to " + connectionState_);
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
    tmp3.verbose("Updating resume url to " + substr);
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
  if (this.connectionState_ === importDefault(12725).SESSION_ESTABLISHED) {
    const obj = { initialization_timestamp: null, session_id: null, client_launch_id: null };
    obj[0] = createdAtTimestamp;
    obj[1] = uuid;
    obj[2] = clientLaunchId;
    self.send(require(12715) /* presenceUpdate */.Opcode.UPDATE_TIME_SPENT_SESSION_ID, obj);
    self._sendHeartbeat();
  }
};
prototype["_connect"] = function _connect() {
  let _handleClose;
  let compressionHandler2;
  const self = this;
  let identify = this;
  if (this.willReconnect()) {
    let obj = f90466(12746);
    if (obj.getIsPaused()) {
      tmp3.info("Skipping _connect because socket is paused");
    } else {
      self.connectionState = identify(12725).CONNECTING;
      self.nextReconnectIsImmediate = false;
      const algorithm = self.compressionHandler.getAlgorithm();
      const name = tmp4.getName();
      const _getGatewayUrlResult = self._getGatewayUrl();
      const _window = window;
      self.receivedHelloThisAttempt = false;
      identify(10).mark("\u{1F310}", "Socket._connect");
      let str5 = algorithm;
      if (algorithm == null) {
        str5 = "none";
      }
      let _HermesInternal = HermesInternal;
      tmp3.info("[CONNECT] " + _getGatewayUrlResult + ", encoding: " + name + ", version: " + window.GLOBAL_ENV.API_VERSION + ", compression: " + str5);
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
      onOpen = compressionHandler2;
      identify = _handleClose.bind(self);
      f90466 = (byteLength) => {
        let d;
        let op;
        let s;
        let t;
        const timestamp = Date.now();
        let obj = outer1_10;
        ({ op, s, t, d } = outer1_10.unpack(byteLength));
        if (op !== onOpen(12715).Opcode.DISPATCH) {
          const _HermesInternal = HermesInternal;
          identify(10).mark("\u{1F310}", "GatewaySocket.onMessage " + op + " " + tmp3(12715).Opcode[op]);
          const obj2 = identify(10);
        }
        if (outer1_6.isLoggingGatewayEvents) {
          const items = [op];
          if (op === tmp3(12715).Opcode.DISPATCH) {
            items.push(t);
          }
          items.push(d);
          const verboseDangerously = outer1_9.verboseDangerously;
          const items1 = ["<~"];
          HermesBuiltin.arraySpread(items, 1);
          HermesBuiltin.apply(items1, outer1_9);
        }
        const diff = Date.now() - timestamp;
        if ("READY" === t) {
          const parseReady = identify(9).parseReady;
          const result = parseReady.set(timestamp, diff);
        } else if ("READY_SUPPLEMENTAL" === t) {
          const parseReadySupplemental = identify(9).parseReadySupplemental;
          const result1 = parseReadySupplemental.set(timestamp, diff);
        } else if (diff > 10) {
          identify(10).mark("\u{1F310}", `Parse ${t}`, diff);
          const obj3 = identify(10);
        }
        if (null != s) {
          identify.seq = s;
        }
        if (onOpen(12715).Opcode.HELLO === op) {
          identify._clearHelloTimeout();
          identify._handleHello(d);
        } else if (tmp3(12715).Opcode.RECONNECT === op) {
          identify._handleReconnect();
        } else if (tmp3(12715).Opcode.INVALID_SESSION === op) {
          const result2 = identify._handleInvalidSession(d);
        } else if (tmp3(12715).Opcode.HEARTBEAT === op) {
          const result3 = identify._handleHeartbeatReceive();
        } else if (tmp3(12715).Opcode.HEARTBEAT_ACK === op) {
          identify._handleHeartbeatAck(d);
        } else if (tmp3(12715).Opcode.DISPATCH === op) {
          let tmp29 = null;
          if (tmp18) {
            obj = { compressed_byte_size: null, uncompressed_byte_size: null, compression_algorithm: null, packing_algorithm: null, unpack_duration_ms: null };
            obj[0] = arg1;
            if (null == byteLength) {
              obj[1] = 0;
              obj[2] = tmp28.compressionHandler.getAlgorithm();
              obj[3] = obj.getName();
              obj[4] = diff;
              tmp29 = obj;
              const compressionHandler = tmp28.compressionHandler;
            }
          }
          identify._handleDispatch(d, t, tmp29);
          tmp28 = identify;
        } else {
          const _HermesInternal2 = HermesInternal;
          outer1_9.info("Unhandled op " + op);
        }
        identify._sendHeartbeatIfDue();
      };
      let c4;
      const dependencyMap = 0;
      compressionHandler2.dataReady((arg0) => {
        try {
          f90466(arg0, c3);
          c3 = 0;
        } catch (tmp5) {
          c3 = 0;
          throw tmp5;
        }
      });
      c4 = false;
      onOpen = function onOpen(arg0) {

      };
      identify = undefined;
      tmp3.enableNativeLogger(true);
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
          tmp33 = null != c11;
        }
        if (tmp33) {
          tmp33 = userId !== c11;
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
          obj3.log("[FAST CONNECT] refusing to adopt socket: identified user " + userId + " does not match switch target " + c11);
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
                if (typeof data.data !== "__FORMATJS_LISTFORMAT_DATA__") {
                  const obj = {};
                  const merged = Object.assign(data);
                  obj.data = data.data.substring(0, 100);
                  tmp = obj;
                  const str = data.data;
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
        const tmp48 = tmp5(12714)(str);
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
          closure_3 = closure_3 + outer1_17(data);
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
        identify(10).mark("\u{1F310}", "GatewaySocket.onOpen " + identify);
        const diff = Date.now() - identify.connectionStartTime;
        outer1_9.info("[CONNECTED] " + onOpen.toString() + " in " + diff + " ms");
        identify.isFastConnect = identify;
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
        identify(4187).flushDNSCache();
        identify._handleClose(false, 0, "An error with the websocket occurred");
      };
      let compressionHandler = self.compressionHandler;
      const compressionHandler3 = self.compressionHandler;
      let obj2 = identify(10);
    }
  } else {
    str = "Skipping _connect because willReconnect is false";
    tmp3.verbose("Skipping _connect because willReconnect is false");
  }
};
prototype["_handleHello"] = function _handleHello(d) {
  const heartbeat_interval = d.heartbeat_interval;
  this.heartbeatInterval = heartbeat_interval;
  const timestamp = Date.now();
  const diff = timestamp - this.connectionStartTime;
  let obj = require(12724) /* prettyPrintTrace_ */;
  tmp3.verbose("[HELLO] via " + obj.getConnectionPath(d) + ", heartbeat interval: " + heartbeat_interval + ", took " + diff + " ms");
  obj = { socket: this, altGateway: this.altGateway, gatewayUrl: this._getGatewayUrl(), now: timestamp };
  require(12724) /* prettyPrintTrace_ */.logGatewayConnected(obj);
  this.receivedHelloThisAttempt = true;
  this.failedConnectAttempts = 0;
  this.firstConnectAttemptStartTime = 0;
  this._startHeartbeater();
};
prototype["_handleReconnect"] = function _handleReconnect() {
  tmp3.verbose("[RECONNECT] gateway requested I reconnect.");
  this._cleanup((close) => close.close(4000));
  this.connectionState = importDefault(12725).WILL_RECONNECT;
  this._connect();
};
prototype["_handleInvalidSession"] = function _handleInvalidSession(d) {
  let str = "";
  if (d) {
    str = " can resume)";
  }
  const self = this;
  tmp3.info(`[INVALID_SESSION]${str}`);
  if (d) {
    self._doResumeOrIdentify();
  } else {
    self._doIdentify();
  }
};
prototype["_handleDispatch"] = function _handleDispatch(d, type, arg2) {
  const self = this;
  const diff = Date.now() - this.connectionStartTime;
  if ("READY" === type) {
    const session_id = d.session_id;
    self.sessionId = session_id;
    const connectionPath = require(12724) /* prettyPrintTrace_ */.getConnectionPath(d);
    const obj = require(12724) /* prettyPrintTrace_ */;
    importDefault(10).setServerTrace(connectionPath);
    const _HermesInternal2 = HermesInternal;
    tmp3.info("[READY] took " + diff + "ms, as " + session_id);
    const _HermesInternal3 = HermesInternal;
    tmp3.verbose("" + connectionPath);
    self.connectionState = importDefault(12725).SESSION_ESTABLISHED;
    const gatewayBackoff2 = self.gatewayBackoff;
    gatewayBackoff2.succeed();
    self.iosGoingAwayEventCount = 0;
    const altGateway2 = self.altGateway;
    altGateway2.recordSuccess();
    self.setResumeUrl(d.resume_gateway_url);
    const obj2 = importDefault(10);
  } else if ("READY_SUPPLEMENTAL" === type) {
    const _HermesInternal = HermesInternal;
    tmp3.info("[READY_SUPPLEMENTAL] took " + diff + "ms");
    self.connectionState = importDefault(12725).SESSION_ESTABLISHED;
    const gatewayBackoff = self.gatewayBackoff;
    gatewayBackoff.succeed();
    self.iosGoingAwayEventCount = 0;
    const altGateway = self.altGateway;
    altGateway.recordSuccess();
  } else if ("RESUMED" === type) {
    tmp3.verbose(require(12724) /* prettyPrintTrace_ */.getConnectionPath(d));
    self.connectionState = importDefault(12725).SESSION_ESTABLISHED;
    const gatewayBackoff3 = self.gatewayBackoff;
    gatewayBackoff3.succeed();
    self.iosGoingAwayEventCount = 0;
    const altGateway3 = self.altGateway;
    altGateway3.recordSuccess();
    const obj3 = require(12724) /* prettyPrintTrace_ */;
  }
  const dispatcher = self.dispatcher;
  dispatcher.receiveDispatch(d, type, arg2);
};
prototype["handleResumeDispatched"] = function handleResumeDispatched() {
  tmp3.info("[RESUMED] took " + Date.now() - this.connectionStartTime + "ms, replayed " + this.dispatcher.resumeAnalytics.numEvents + " events, new seq: " + this.seq);
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
      tmp3.warn("[ALT GATEWAY] 3 consecutive failures, falling back to default URL for this session.");
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
prototype["_handleHeartbeatAck"] = function _handleHeartbeatAck(d) {
  const self = this;
  this.lastHeartbeatAckTime = Date.now();
  this.heartbeatAck = true;
  if (null !== this.expeditedHeartbeatTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.expeditedHeartbeatTimeout);
    self.expeditedHeartbeatTimeout = null;
    tmp3.verbose("Expedited heartbeat succeeded");
  }
};
prototype["_handleHeartbeatTimeout"] = function _handleHeartbeatTimeout() {
  const self = this;
  this._cleanup((close) => close.close(4000));
  this.connectionState = importDefault(12725).WILL_RECONNECT;
  const result = this._maybeFallBackFromAltGateway();
  const gatewayBackoff = this.gatewayBackoff;
  const result1 = gatewayBackoff.fail(() => self._connect()) / 1000;
  tmp3.warn("[ACK TIMEOUT] reconnecting in " + result1.toFixed(2) + " seconds.");
};
prototype["_handleClose"] = function _handleClose(wasClean, c13, reason) {
  let self = this;
  self = this;
  let flag = wasClean;
  if (!wasClean) {
    flag = false;
  }
  self._cleanup();
  self.emit("close", { code: c13, reason });
  if (c13 === c13) {
    self.connectionState = importDefault(12725).CLOSED;
    tmp3.warn("[WS CLOSED] because of authentication failure, marking as closed.");
    return self._reset(flag, c13, reason);
  } else {
    const result = self._tryDetectInvalidIOSToken(c13, reason, flag);
    self.connectionState = importDefault(12725).WILL_RECONNECT;
    if (!self.receivedHelloThisAttempt) {
      self.failedConnectAttempts = self.failedConnectAttempts + 1;
    }
    const result1 = self._maybeFallBackFromAltGateway();
    if (self.nextReconnectIsImmediate) {
      const _HermesInternal2 = HermesInternal;
      tmp3.info("[WS CLOSED] (" + flag.toString() + ", " + c13 + ", " + reason + ") retrying immediately.");
      self._connect();
    } else {
      const gatewayBackoff = self.gatewayBackoff;
      let str = flag.toString();
      const result2 = gatewayBackoff.fail(() => self._connect()) / 1000;
      const _HermesInternal = HermesInternal;
      str = " seconds.";
      tmp3.info("[WS CLOSED] (" + str + ", " + c13 + ", " + reason + ") retrying in " + result2.toFixed(2) + " seconds.");
      if (self.gatewayBackoff.fails > 4) {
        self._reset(flag, c13, reason);
      }
      const failResult = gatewayBackoff.fail(() => self._connect());
    }
  }
  const obj = { code: c13, reason };
};
prototype["_tryDetectInvalidIOSToken"] = function _tryDetectInvalidIOSToken(c13, reason, flag) {
  let self = this;
  self = this;
  const _require = flag;
  let obj = _require(500);
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
      const HTTP = _require(530).HTTP;
      obj = { url: null, headers: null, rejectWithError: false };
      obj[0] = constants2.ME;
      obj = { authorization: null };
      obj[0] = self.token;
      obj[1] = obj;
      const value = HTTP.get(obj);
      value.then((api_status_code) => {
        self(table[21]).track(constants.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: api_status_code.status });
      }, (status) => {
        status = status.status;
        if (401 === status) {
          self.connectionState = self(outer1_3[12]).CLOSED;
          outer1_9.warn("[WS CLOSED] because of manual authentication failure, marking as closed.");
          self._reset(closure_0, outer1_13, "invalid token manually detected");
        }
        self(outer1_3[21]).track(outer1_7.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: status });
      });
    }
  }
};
prototype["_reset"] = function _reset(wasClean, code, reason) {
  this.sessionId = null;
  this.seq = 0;
  tmp3.warn("[RESET] (" + wasClean.toString() + ", " + code + ", " + reason + ")");
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
  let self = this;
  self = this;
  const heartbeatInterval = this.heartbeatInterval;
  self(38)(null != heartbeatInterval, "GatewaySocket: Heartbeat interval should never null here.");
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
prototype["_cleanup"] = function _cleanup(arg0) {
  const self = this;
  const Emitter = importDefault(589).Emitter;
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
    if (arg0 != null) {
      arg0(webSocket);
    }
  }
  const gatewayBackoff = self.gatewayBackoff;
  gatewayBackoff.cancel();
  self.compressionHandler.close();
  self.compressionHandler = require(12727) /* items */.getCompressionHandler(closure_10);
};
prototype["_doResume"] = function _doResume() {
  const self = this;
  this.connectionState = importDefault(12725).RESUMING;
  let obj = require(12724) /* prettyPrintTrace_ */;
  this.dispatcher.resumeAnalytics = obj.createResumeAnalytics(Date.now() - this.connectionStartTime);
  let str = this.sessionId;
  if (str == null) {
    str = "";
  }
  tmp3.info("[RESUME] resuming session " + str + ", seq: " + self.seq);
  obj = { token: self.token, session_id: self.sessionId, seq: self.seq };
  self.send(require(12715) /* presenceUpdate */.Opcode.RESUME, obj, false);
};
prototype["_doIdentify"] = function _doIdentify() {
  const self = this;
  return callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        dependencyMap = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let timestamp = tmp2;
            let c0 = tmp3;
            c0 = undefined;
            timestamp = undefined;
            closure_2 = undefined;
            dependencyMap = undefined;
            let set;
            let pack;
            let c6;
            let c7;
            let c8;
            let c9;
            let c10;
            let c11;
            let c12;
            let handleIdentifyResult = outer1_0;
            outer1_0.seq = 0;
            handleIdentifyResult = outer1_0;
            handleIdentifyResult = null;
            outer1_0.sessionId = null;
            handleIdentifyResult = outer1_0;
            handleIdentifyResult = outer1_0.handleIdentify();
            c0 = handleIdentifyResult;
            if (null !== handleIdentifyResult) {
              outer1_0.connectionState = outer1_1(12725).IDENTIFYING;
              const _Date = Date;
              timestamp = Date.now();
              outer1_0.identifyStartTime = timestamp;
              if (obj10.isCacheEnabled()) {
                let committedVersions = outer1_1(5943).getCommittedVersions();
                const obj12 = outer1_1(5943);
              } else {
                committedVersions = {};
              }
              const items = [committedVersions, , ];
              obj10 = outer1_0(5939);
              if (obj13.isCacheEnabled()) {
                let committedVersions1 = outer1_1(5946).getCommittedVersions();
                const obj15 = outer1_1(5946);
              } else {
                committedVersions1 = {};
              }
              items[1] = committedVersions1;
              obj13 = outer1_0(5939);
              let canUseGuildVersionsResult = outer1_0(5939).isCacheEnabled();
              if (canUseGuildVersionsResult) {
                canUseGuildVersionsResult = outer1_1(5944).canUseGuildVersions();
                const obj17 = outer1_1(5944);
              }
              items[2] = canUseGuildVersionsResult;
              closure_2 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items);
              return obj1;
            } else {
              outer1_0._handleClose(true, outer1_13, "No connection info provided");
            }
          }
        } else {
          let num3 = 1;
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            let tmp64;
            dependencyMap = outer1_4(closure_2, 3);
            set = 32;
            handleIdentifyResult = dependencyMap;
            pack = 5;
            handleIdentifyResult = dependencyMap;
            if (706) {
              const obj3 = { guild_versions: null, highest_last_message_id: null, read_state_version: null, user_guild_settings_version: null, user_settings_version: null, private_channels_version: null, api_code_version: null, initial_guild_id: null };
              obj3[0] = outer1_4;
              obj3[1] = outer1_5.highest_last_message_id;
              obj3[2] = outer1_5.read_state_version;
              obj3[3] = outer1_5.user_guild_settings_version;
              obj3[4] = outer1_5.user_settings_version;
              obj3[5] = outer1_5.private_channels_version;
              obj3[6] = outer1_5.api_code_version;
              obj3[7] = outer1_5.initial_guild_id;
              obj = obj3;
            } else {
              obj = { guild_versions: null };
              obj[0] = {};
            }
            const outer1_6 = obj;
            if (c0.connectionState !== outer1_1(12725).IDENTIFYING) {
              outer1_9.warn("Skipping identify because connectionState or identifyStartTime has changed");
            }
            const outer1_7 = outer1_0.token;
            const outer1_8 = outer1_0.properties;
            if (tmp64 === outer1_8) {
              let obj4 = {};
            } else {
              obj4 = outer1_8;
            }
            outer1_9 = obj4;
            const outer1_10 = outer1_0.presence;
            c0.token = outer1_7;
            outer1_9.verbose("[IDENTIFY]");
            const obj5 = { token: null, capabilities: null, properties: null, presence: null, compress: null, client_state: null };
            obj5[0] = outer1_7;
            obj4 = outer1_0(12747);
            let obj6 = { useChannelObfuscation: null };
            obj6 = outer1_0(12748);
            obj6[0] = obj6.isChannelMetadataObfuscationEnabled("GatewaySocket");
            obj5[1] = obj4.getClientCapabilities(obj6);
            obj5[2] = outer1_9;
            obj5[3] = outer1_10;
            obj5[4] = c0.compressionHandler.usesLegacyCompression();
            obj5[5] = outer1_6;
            const outer1_11 = obj5;
            const _JSON = JSON;
            const outer1_12 = JSON.stringify(outer1_11);
            c0.identifyUncompressedByteSize = outer1_12.length;
            c0.identifyCompressedByteSize = v0(12730).deflate(outer1_12).length;
            c0.identifyCount = c0.identifyCount + num3;
            num3 = c0;
            c0.send(outer1_0(12715).Opcode.IDENTIFY, outer1_11, false);
            tmp64 = outer1_1(698);
            tmp64.track(outer1_7.SESSION_START_CLIENT, {});
            const compressionHandler = c0.compressionHandler;
            const obj8 = v0(12730);
          }
        }
        dependencyMap = 3;
      } catch (tmp89) {
        dependencyMap = handleIdentifyResult;
        throw tmp89;
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
    self.connectionState = importDefault(12725).IDENTIFYING;
    const _Date = Date;
    self.identifyStartTime = Date.now();
    self.identifyCount = self.identifyCount + 1;
    tmp3.verbose("[IDENTIFY, fast-connect]");
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
  this.send(require(12715) /* presenceUpdate */.Opcode.QOS_HEARTBEAT, { seq: this.seq, qos: this._consumeQOSPayload() }, false);
  this.lastHeartbeatTime = Date.now();
};
prototype["getLogger"] = function getLogger() {
  return closure_9;
};
prototype["willReconnect"] = function willReconnect() {
  return this.connectionState === importDefault(12725).WILL_RECONNECT;
};
prototype["isClosed"] = function isClosed() {
  return this.connectionState === importDefault(12725).CLOSED;
};
prototype["isSessionEstablished"] = function isSessionEstablished() {
  let tmp3 = this.connectionState === importDefault(12725).SESSION_ESTABLISHED;
  if (!tmp3) {
    tmp3 = this.connectionState === importDefault(12725).RESUMING;
  }
  return tmp3;
};
prototype["isConnected"] = function isConnected() {
  const self = this;
  let tmp3 = this.connectionState === importDefault(12725).IDENTIFYING;
  if (!tmp3) {
    tmp3 = self.connectionState === tmp(12725).RESUMING;
  }
  if (!tmp3) {
    tmp3 = self.connectionState === tmp(12725).SESSION_ESTABLISHED;
  }
  return tmp3;
};
prototype["connect"] = function connect() {
  const self = this;
  if (this.isClosed()) {
    const altGateway = self.altGateway;
    altGateway.reset();
    tmp3.verbose(".connect() called, new state is WILL_RECONNECT");
    self.connectionState = importDefault(12725).WILL_RECONNECT;
    self.firstConnectAttemptStartTime = 0;
    self._connect();
    let flag = true;
  } else {
    tmp3.error("Cannot start a new connection, connection state is not closed");
    flag = false;
  }
  return flag;
};
prototype["resetSocketAndClearCacheOnError"] = function resetSocketAndClearCacheOnError(args) {
  let action;
  let error;
  let metricAction;
  let self = this;
  self = this;
  ({ action, error, metricAction } = args);
  let obj = tmp3;
  tmp3.error("resetSocketAndClearCacheOnError during " + action + ": " + error.message, error.stack);
  let obj1 = self(667);
  const usesClientModsResult = obj1.usesClientMods();
  let obj2 = importDefault(5870);
  obj = { name: self(5875).MetricEvents.SOCKET_CRASHED, tags: null };
  if (metricAction == null) {
    metricAction = action;
  }
  const items = ["action:" + metricAction, "modded_client:" + usesClientModsResult];
  obj[1] = items;
  obj2.increment(obj, true);
  if (false !== args.sentry) {
    let tmp4Result = tmp4(1208);
    obj = { tags: null };
    obj1 = { socketCrashedAction: null };
    obj1[0] = action;
    obj[0] = obj1;
    tmp4Result.captureException(error, obj);
  }
  tmp4Result = tmp4(698);
  obj2 = { error_message: error.message, error_stack: error.stack, has_client_mods: usesClientModsResult, action };
  tmp4Result.track(constants.GATEWAY_SOCKET_RESET, obj2);
  self._cleanup((close) => close.close());
  self._reset(true, 1000, "Resetting socket due to error.");
  const dispatcher = self.dispatcher;
  dispatcher.clear();
  self.connectionState = importDefault(12725).WILL_RECONNECT;
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
  const tmp4Result1 = importDefault(709);
  tmp4Result1.dispatch({ type: "CLEAR_CACHES", reason: "Socket reset during " + action });
  const obj3 = { type: "CLEAR_CACHES", reason: "Socket reset during " + action };
  importDefault(709).dispatch({ type: "LIBDISCORE_RESET" });
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
  let self = this;
  self = this;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let num;
  if (self.isClosed()) {
    obj.verbose("close() called, but socket is already closed.");
    if (!flag) {
      self.sessionId = null;
      self.token = null;
    }
  } else {
    const _HermesInternal = HermesInternal;
    obj.info("Closing connection, current state is " + self.connectionState);
    num = undefined;
    if (flag) {
      num = 4000;
    }
    self._cleanup((close) => close.close(num));
    self.connectionState = self(12725).CLOSED;
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
  let self = this;
  self = this;
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
      tmp3.verbose(`Performing an expedited heartbeat ${str8}`);
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
      globalThis.verbose("Expedited heartbeat requested, but, connection state is " + self.connectionState + " and reconnectImmediately was not requested " + str3);
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
  tmp3.verbose(`Connection has reset backoff${str2}`);
  const gatewayBackoff = this.gatewayBackoff;
  gatewayBackoff.succeed();
  this.iosGoingAwayEventCount = 0;
  this.nextReconnectIsImmediate = true;
  if (this.willReconnect()) {
    self._connect();
  } else {
    if (flag) {
      flag = self.connectionState !== importDefault(12725).SESSION_ESTABLISHED;
    }
    if (flag) {
      self._handleClose(true, 0, str);
    }
  }
};
const tmp4 = new require("pack")();
let result = require("refreshSourceMapCookie").fileFinishedImporting("modules/gateway/GatewaySocket.tsx");

export default GatewaySocket;
export function setAccountSwitchUserId(targetUserId) {
  let closure_11 = targetUserId;
}