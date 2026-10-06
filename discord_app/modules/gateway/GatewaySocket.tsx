// discord_app/modules/gateway/GatewaySocket.tsx
import LoggerDefault from "../debug/Logger.tsx";
import AppStartPerformanceDefault from "../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ClientModDetectionUtils from "../../../discord_common/js/shared/utils/ClientModDetectionUtils.tsx";
import CrossPlatformNativeUtilsDefault from "../../utils/CrossPlatformNativeUtils.native.tsx";
import MonitoringAgentDefault from "../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import GatewayEncodingDefault from "GatewayEncoding.tsx";
import GatewaySocketOpCodes2 from "GatewaySocketOpCodes.tsx";
import GatewaySocketDispatcherDefault from "GatewaySocketDispatcher.tsx";
import GatewaySocketAnalytics from "GatewaySocketAnalytics.tsx";
import ConnectionStateDefault from "ConnectionState.tsx";
import GatewayCompressionHandler from "GatewayCompressionHandler.tsx";
import PauseGatewaySocketAll from "PauseGatewaySocket.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import DeveloperOptionsStore from "../../stores/DeveloperOptionsStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GatewaySocketOpCodes = GatewaySocketOpCodes2;
let _require, c3, name, set;

let metroImportAll;
let metroImportDefault;
function noop() {}
function byteSize(byteLength) {
  let num = 0;
  if (null != byteLength) {
    num = typeof byteLength === "string" ? byteLength.length : byteLength.byteLength;
  }
  return num;
}
({ AnalyticEvents: metroImportDefault, Endpoints: metroImportAll } = Constants);
let tmp3 = new LoggerDefault("GatewaySocket");
const React4 = tmp3;
const tmp4 = new GatewayEncodingDefault();
const authStore = tmp4;
let c11 = null;
let c13 = 4004;
let closure_14 = 30 * DurationsDefault.Millis.SECOND;
let closure_15 = 3 * DurationsDefault.Millis.MINUTE;
const MINUTE = DurationsDefault.Millis.MINUTE;
class GatewaySocket extends GatewaySocketOpCodes {
  constructor() {
    let sessionEstablished;
    const tmp7 = new GatewaySocket(tmp6, tmp5, tmp4, tmp3, tmp2, new.target, this, tmp);
    _require = tmp7;
    tmp7.dispatchExceptionBackoff = new BackoffDefault(1000, MINUTE);
    tmp7.dispatchSuccessTimer = 0;
    tmp7.didForceClearGuildHashes = false;
    tmp7.identifyUncompressedByteSize = 0;
    tmp7.identifyCompressedByteSize = 0;
    tmp7.analytics = {};
    tmp7.identifyCount = 0;
    tmp7.resumeUrl = null;
    tmp7.iosGoingAwayEventCount = 0;
    tmp7.failedConnectAttempts = 0;
    tmp7.receivedHelloThisAttempt = false;
    tmp7.heartbeatQOSState = { currentPayload: null, upcomingState: null };
    tmp7.send = function send(op, d, arg2) {
      if (DeveloperOptionsStore.isLoggingGatewayEvents) {
        closure_9.verboseDangerously("~>", op, GatewaySocketOpCodes2.Opcode[op], d);
      }
      const obj = { op, d };
      const packResult = name.pack(obj);
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
      } catch (err) {}
    };
    new BackoffDefault(1000, MINUTE);
    tmp7.dispatcher = new GatewaySocketDispatcherDefault(tmp7);
    new GatewaySocketDispatcherDefault(tmp7);
    tmp7.gatewayBackoff = new BackoffDefault(1000, 60000);
    new BackoffDefault(1000, 60000);
    tmp7.connectionState_ = ConnectionStateDefault.CLOSED;
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
    let obj = require("GatewayCompressionHandler");
    tmp7.compressionHandler = obj.getCompressionHandler(closure_10);
    tmp7.hasConnectedOnce = false;
    tmp7.isFastConnect = false;
    tmp7.identifyCount = 0;
    tmp7.iosGoingAwayEventCount = 0;
    tmp7.failedConnectAttempts = 0;
    tmp7.receivedHelloThisAttempt = false;
    return tmp7;
  }
  addAnalytics(arg0) {
    const obj = {};
    const merged = Object.assign(this.analytics);
    const merged1 = Object.assign(arg0);
    this.analytics = obj;
  }
  setResumeUrl(resume_gateway_url) {
    let substr = resume_gateway_url;
    const endsWithResult = null != resume_gateway_url && resume_gateway_url.endsWith("/");
    if (endsWithResult) {
      substr = resume_gateway_url.substring(0, resume_gateway_url.length - 1);
    }
    if (null !== substr) {
      const _HermesInternal = HermesInternal;
      closure_9.verbose("Updating resume url to " + substr);
    }
    this.resumeUrl = substr;
  }
  handleActiveStateChange(currentPayload) {
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
      HermesBuiltin.arraySpread(
        items,
        currentPayload.reasons,
        HermesBuiltin.arraySpread(items, currentPayload2.reasons, 0),
      );
      const self2 = this;
      const self3 = this;
      const items1 = [];
      set = new Set(items);
      HermesBuiltin.arraySpread(items1, set, 0);
      currentPayload2.reasons = items1.sort();
      if (!active) {
        isSessionEstablishedResult = self.isSessionEstablished();
      }
      if (isSessionEstablishedResult) {
        self._sendHeartbeat();
      }
    }
    self.heartbeatQOSState.upcomingState = currentPayload;
  }
  handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, clientLaunchId) {
    const self = this;
    if (this.connectionState_ === ConnectionStateDefault.SESSION_ESTABLISHED) {
      const obj = { initialization_timestamp: createdAtTimestamp, session_id: uuid, client_launch_id: clientLaunchId };
      self.send(GatewaySocketOpCodes2.Opcode.UPDATE_TIME_SPENT_SESSION_ID, obj);
      self._sendHeartbeat();
    }
  }
  _connect() {
    let _handleClose;
    let compressionHandler2;
    let length;
    const self = this;
    if (this.willReconnect()) {
      let obj = PauseGatewaySocketAll;
      if (obj.getIsPaused()) {
        logger.info("Skipping _connect because socket is paused");
      } else {
        const tmp5 = self;
        self.connectionState = self(13472).CONNECTING;
        self.nextReconnectIsImmediate = false;
        let compressionHandler = self.compressionHandler;
        const algorithm = compressionHandler.getAlgorithm();
        let tmp7 = name;
        name = name.getName();
        const _getGatewayUrlResult = self._getGatewayUrl();
        const _window = window;
        self.receivedHelloThisAttempt = false;
        let obj2 = self(10);
        obj2.mark("\u{1F310}", "Socket._connect");
        let str5 = algorithm;
        const info = logger.info;
        if (algorithm == null) {
          str5 = "none";
        }
        let _HermesInternal = HermesInternal;
        info(
          "[CONNECT] " +
            _getGatewayUrlResult +
            ", encoding: " +
            name +
            ", version: " +
            window.GLOBAL_ENV.API_VERSION +
            ", compression: " +
            str5,
        );
        if (null !== self.webSocket) {
          logger.error("_connect called with already existing websocket");
          self._cleanup((close) => close.close(4000));
        }
        const _Date = Date;
        self.connectionStartTime = Date.now();
        if (0 === self.firstConnectAttemptStartTime) {
          self.firstConnectAttemptStartTime = self.connectionStartTime;
        }
        const _setTimeout = setTimeout;
        self.helloTimeout = setTimeout(() => {
          self._handleClose(
            false,
            0,
            "The connection timed out after " +
              Date.now() -
              self.connectionStartTime +
              " ms - did not receive OP_HELLO in time.",
          );
          self.setResumeUrl(null);
        }, closure_14);
        const _URL = URL;
        const self2 = this;
        const self3 = this;
        const str11 = new URL(_getGatewayUrlResult);
        const searchParams = str11.searchParams;
        searchParams.append("encoding", name);
        const searchParams2 = str11.searchParams;
        searchParams2.append("v", window.GLOBAL_ENV.API_VERSION.toString());
        if (null != algorithm) {
          const searchParams3 = str11.searchParams;
          searchParams3.append("compress", algorithm);
        }
        const str1 = str11.toString();
        ({ compressionHandler: compressionHandler2, _handleClose } = self);
        let closure_1 = _handleClose.bind(self);
        const f114959 = (byteLength, compressed_byte_size) => {
          let compressionHandler;
          let d;
          let num3;
          let op;
          let s;
          let t;
          const timestamp = Date.now();
          ({ op, s, t, d } = name.unpack(byteLength));
          name.unpack(byteLength);
          if (op !== str11(dependencyMap[8]).Opcode.DISPATCH) {
            const _HermesInternal = HermesInternal;
            const obj2 = self(dependencyMap[14]);
            obj2.mark("\u{1F310}", "GatewaySocket.onMessage " + op + " " + str11(dependencyMap[8]).Opcode[op]);
          }
          if (DeveloperOptionsStore.isLoggingGatewayEvents) {
            const items = [op];
            if (op === str11(dependencyMap[8]).Opcode.DISPATCH) {
              items.push(t);
            }
            items.push(d);
            const verboseDangerously = logger.verboseDangerously;
            const items1 = ["<~"];
            HermesBuiltin.arraySpread(items1, items, 1);
            HermesBuiltin.apply(verboseDangerously, items1, logger);
          }
          const diff = Date.now() - timestamp;
          if ("READY" === t) {
            const parseReady = self(dependencyMap[15]).parseReady;
            const result = parseReady.set(timestamp, diff);
          } else if ("READY_SUPPLEMENTAL" === t) {
            const parseReadySupplemental = self(dependencyMap[15]).parseReadySupplemental;
            const result1 = parseReadySupplemental.set(timestamp, diff);
          } else if (diff > 10) {
            const obj3 = self(dependencyMap[14]);
            obj3.mark("\u{1F310}", `Parse ${t}`, diff);
          }
          if (null != s) {
            closure_1.seq = s;
          }
          if (str11(dependencyMap[8]).Opcode.HELLO === op) {
            closure_1._clearHelloTimeout();
            closure_1._handleHello(d);
          } else if (str11(dependencyMap[8]).Opcode.RECONNECT === op) {
            closure_1._handleReconnect();
          } else if (str11(dependencyMap[8]).Opcode.INVALID_SESSION === op) {
            const result2 = closure_1._handleInvalidSession(d);
          } else if (str11(dependencyMap[8]).Opcode.HEARTBEAT === op) {
            const result3 = closure_1._handleHeartbeatReceive();
          } else if (str11(dependencyMap[8]).Opcode.HEARTBEAT_ACK === op) {
            closure_1._handleHeartbeatAck(d);
          } else if (str11(dependencyMap[8]).Opcode.DISPATCH === op) {
            let tmp30 = null;
            const _handleDispatch = closure_1._handleDispatch;
            if ("READY" === t) {
              const obj4 = {
                compressed_byte_size,
                uncompressed_byte_size: num3,
                compression_algorithm: compressionHandler.getAlgorithm(),
                packing_algorithm: name.getName(),
                unpack_duration_ms: diff,
              };
              num3 = 0;
              if (null != byteLength) {
                num3 = typeof byteLength === "string" ? byteLength.length : byteLength.byteLength;
              }
              tmp30 = obj4;
              compressionHandler = closure_1.compressionHandler;
            }
            _handleDispatch(d, t, tmp30);
          } else {
            const _HermesInternal2 = HermesInternal;
            logger.info("Unhandled op " + op);
          }
          closure_1._sendHeartbeatIfDue();
        };
        let closure_3 = 0;
        compressionHandler2.dataReady((arg0) => {
          try {
            f114959(arg0, closure_3);
            closure_3 = 0;
          } catch (tmp5) {
            closure_3 = 0;
            throw tmp5;
          }
        });
        let c4 = false;
        function onOpen(arg0) {}
        logger.enableNativeLogger(true);
        const _window2 = window;
        let identify = false;
        const _window3 = window;
        window._ws = null;
        let messages2 = null;
        let flag3 = false;
        let flag4 = false;
        let tmp30;
        if (null != _ws) {
          const ws = _ws.ws;
          const userId = _ws.state.userId;
          const tmp31 = null != userId && null != c11 && userId !== c11;
          if (_ws.state.gateway !== str1) {
            const _HermesInternal3 = HermesInternal;
            logger.verbose("[FAST CONNECT] gatewayURL mismatch: " + _ws.state.gateway + " !== " + str1);
            let num3 = 1000;
            ws.close(1000);
            messages2 = null;
            flag3 = false;
            flag4 = false;
            tmp30 = null;
          } else if (tmp31) {
            let _HermesInternal2 = HermesInternal;
            logger.log(
              "[FAST CONNECT] refusing to adopt socket: identified user " +
                userId +
                " does not match switch target " +
                c11,
            );
            ws.close(1000);
            messages2 = null;
            flag3 = false;
            flag4 = false;
            tmp30 = null;
          } else {
            let obj4 = {};
            let merged = Object.assign(_ws.state);
            if (null != obj4.messages) {
              const messages = obj4.messages;
              obj4.messages = messages.map((data) => {
                let str;
                let tmp = data;
                if (null != data.data) {
                  tmp = data;
                  if (typeof data.data === "string") {
                    const obj = { data: str.substring(0, 100) };
                    const merged = Object.assign(data);
                    tmp = obj;
                    str = data.data;
                  }
                }
                return tmp;
              });
            }
            const log = logger.log;
            const obj5 = { messages: length };
            const merged1 = Object.assign(obj4);
            const messages1 = obj4.messages;
            length = undefined;
            if (messages1 != null) {
              length = messages1.length;
            }
            log("[FAST CONNECT] successfully took over websocket, state:", obj5);
            flag4 = _ws.state.open;
            identify = _ws.state.identify;
            messages2 = _ws.state.messages;
            const clientState = _ws.state.clientState;
            flag3 = identify;
            tmp30 = ws;
          }
        }
        if (null == tmp30) {
          const tmp46 = tmp5(13463)(str1);
          tmp46.binaryType = "arraybuffer";
          tmp30 = tmp46;
        }
        self.webSocket = tmp30;
        const compressionHandler3 = self.compressionHandler;
        compressionHandler3.bindWebSocket(tmp30);
        if (flag4) {
          const _HermesInternal4 = HermesInternal;
          const tmp5Result = tmp5(10);
          tmp5Result.mark("\u{1F310}", "GatewaySocket.onOpen " + flag3);
          const _Date2 = Date;
          let diff = Date.now() - self.connectionStartTime;
          const _HermesInternal5 = HermesInternal;
          logger.info("[CONNECTED] " + str11.toString() + " in " + diff + " ms");
          self.isFastConnect = flag3;
          if (flag3) {
            let result = self._doFastConnectIdentify();
          } else {
            self._doResumeOrIdentify();
          }
        }
        const fn = (data) => {
          data = data.data;
          if (null != data.raw_length) {
            closure_3 = closure_3 + data.raw_length;
          } else {
            closure_3 = closure_3 + byteSize(data);
          }
          try {
            compressionHandler2.feed(data);
          } catch (tmp6) {
            const tmp7 = c4;
            if (!tmp7) {
              c4 = true;
              closure_1(false, 0, "A decompression error occurred");
            }
            throw tmp6;
          }
        };
        if (null != messages2) {
          const item = messages2.forEach(fn);
        }
        tmp30.onopen = () => {
          const obj = identify(closure_1_3[14]);
          obj.mark("\u{1F310}", "GatewaySocket.onOpen " + identify);
          const diff = Date.now() - self.connectionStartTime;
          logger.info("[CONNECTED] " + str11.toString() + " in " + diff + " ms");
          self.isFastConnect = identify;
          if (identify) {
            const result = self._doFastConnectIdentify();
          } else {
            self._doResumeOrIdentify();
          }
        };
        tmp30.onmessage = fn;
        tmp30.onclose = function onClose(wasClean) {
          return self._handleClose(wasClean.wasClean, wasClean.code, wasClean.reason);
        };
        tmp30.onerror = function onError() {
          self.setResumeUrl(null);
          const obj = CrossPlatformNativeUtilsDefault;
          obj.flushDNSCache();
          self._handleClose(false, 0, "An error with the websocket occurred");
        };
      }
    } else {
      let str = "Skipping _connect because willReconnect is false";
      logger.verbose("Skipping _connect because willReconnect is false");
    }
  }
  _handleHello(d) {
    const heartbeat_interval = d.heartbeat_interval;
    this.heartbeatInterval = heartbeat_interval;
    const timestamp = Date.now();
    const diff = timestamp - this.connectionStartTime;
    const verbose = closure_9.verbose;
    const obj = GatewaySocketAnalytics;
    verbose(
      "[HELLO] via " +
        obj.getConnectionPath(d) +
        ", heartbeat interval: " +
        heartbeat_interval +
        ", took " +
        diff +
        " ms",
    );
    const obj2 = GatewaySocketAnalytics;
    const obj3 = { socket: this, gatewayUrl: this._getGatewayUrl(), now: timestamp };
    obj2.logGatewayConnected(obj3);
    this.receivedHelloThisAttempt = true;
    this.failedConnectAttempts = 0;
    this.firstConnectAttemptStartTime = 0;
    this._startHeartbeater();
  }
  _handleReconnect() {
    closure_9.verbose("[RECONNECT] gateway requested I reconnect.");
    this._cleanup((close) => close.close(4000));
    this.connectionState = ConnectionStateDefault.WILL_RECONNECT;
    this._connect();
  }
  _handleInvalidSession(d) {
    let str = "";
    const info = closure_9.info;
    if (d) {
      str = " can resume)";
    }
    const self = this;
    info(`[INVALID_SESSION]${str}`);
    if (d) {
      self._doResumeOrIdentify();
    } else {
      self._doIdentify();
    }
  }
  _handleDispatch(d, type, compressionAnalytics) {
    const self = this;
    const diff = Date.now() - this.connectionStartTime;
    if ("READY" === type) {
      const session_id = d.session_id;
      self.sessionId = session_id;
      const obj = GatewaySocketAnalytics;
      const connectionPath = obj.getConnectionPath(d);
      const obj2 = AppStartPerformanceDefault;
      obj2.setServerTrace(connectionPath);
      const _HermesInternal2 = HermesInternal;
      closure_9.info("[READY] took " + diff + "ms, as " + session_id);
      const _HermesInternal3 = HermesInternal;
      closure_9.verbose("" + connectionPath);
      self.connectionState = ConnectionStateDefault.SESSION_ESTABLISHED;
      const gatewayBackoff2 = self.gatewayBackoff;
      gatewayBackoff2.succeed();
      self.iosGoingAwayEventCount = 0;
      self.setResumeUrl(d.resume_gateway_url);
    } else if ("READY_SUPPLEMENTAL" === type) {
      const _HermesInternal = HermesInternal;
      closure_9.info("[READY_SUPPLEMENTAL] took " + diff + "ms");
      self.connectionState = ConnectionStateDefault.SESSION_ESTABLISHED;
      const gatewayBackoff = self.gatewayBackoff;
      gatewayBackoff.succeed();
      self.iosGoingAwayEventCount = 0;
    } else if ("RESUMED" === type) {
      const verbose = closure_9.verbose;
      const obj3 = GatewaySocketAnalytics;
      verbose(obj3.getConnectionPath(d));
      self.connectionState = ConnectionStateDefault.SESSION_ESTABLISHED;
      const gatewayBackoff3 = self.gatewayBackoff;
      gatewayBackoff3.succeed();
      self.iosGoingAwayEventCount = 0;
    }
    const dispatcher = self.dispatcher;
    dispatcher.receiveDispatch(d, type, compressionAnalytics);
  }
  handleResumeDispatched() {
    closure_9.info(
      "[RESUMED] took " +
        Date.now() -
        this.connectionStartTime +
        "ms, replayed " +
        this.dispatcher.resumeAnalytics.numEvents +
        " events, new seq: " +
        this.seq,
    );
  }
  handleReadyDispatched() {
    this.didForceClearGuildHashes = false;
    this.hasConnectedOnce = true;
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : GATEWAY_ENDPOINT;
  }
  _handleHeartbeatReceive() {
    const self = this;
    this._sendHeartbeat();
    const tmp2 = null != this.heartbeater && null != self.heartbeatInterval;
    if (tmp2) {
      const _clearInterval = clearInterval;
      clearInterval(self.heartbeater);
      const _setInterval = setInterval;
      const _doHeartbeatInterval = self._doHeartbeatInterval;
      self.heartbeater = setInterval(_doHeartbeatInterval.bind(self), self.heartbeatInterval);
    }
  }
  _handleHeartbeatAck() {
    const self = this;
    this.lastHeartbeatAckTime = Date.now();
    this.heartbeatAck = true;
    if (null !== this.expeditedHeartbeatTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.expeditedHeartbeatTimeout);
      self.expeditedHeartbeatTimeout = null;
      closure_9.verbose("Expedited heartbeat succeeded");
    }
  }
  _handleHeartbeatTimeout() {
    const self = this;
    this._cleanup((close) => close.close(4000));
    this.connectionState = ConnectionStateDefault.WILL_RECONNECT;
    const gatewayBackoff = this.gatewayBackoff;
    const result = gatewayBackoff.fail(() => self._connect()) / 1000;
    closure_9.warn("[ACK TIMEOUT] reconnecting in " + result.toFixed(2) + " seconds.");
  }
  _handleClose(wasClean, c13, reason) {
    const self = this;
    self._cleanup();
    const obj = { code, reason };
    self.emit("close", obj);
    if (code === code) {
      self.connectionState = ConnectionStateDefault.CLOSED;
      closure_9.warn("[WS CLOSED] because of authentication failure, marking as closed.");
      return self._reset(wasClean || false, code, reason);
    } else {
      const result = self._tryDetectInvalidIOSToken(code, reason, str);
      self.connectionState = ConnectionStateDefault.WILL_RECONNECT;
      if (!self.receivedHelloThisAttempt) {
        self.failedConnectAttempts = self.failedConnectAttempts + 1;
      }
      if (self.nextReconnectIsImmediate) {
        const _HermesInternal2 = HermesInternal;
        closure_9.info(
          "[WS CLOSED] (" + (wasClean || false).toString() + ", " + code + ", " + reason + ") retrying immediately.",
        );
        self._connect();
      } else {
        const gatewayBackoff = self.gatewayBackoff;
        const info = closure_9.info;
        const failResult = gatewayBackoff.fail(() => self._connect());
        const result1 = failResult / 1000;
        const _HermesInternal = HermesInternal;
        const str1 = (wasClean || false).toString();
        info(
          "[WS CLOSED] (" + str1 + ", " + code + ", " + reason + ") retrying in " + result1.toFixed(2) + " seconds.",
        );
        if (self.gatewayBackoff.fails > 4) {
          self._reset(wasClean || false, code, reason);
        }
      }
    }
  }
  _tryDetectInvalidIOSToken(c13, reason, arg2) {
    let closure_0;
    let logger;
    let obj3;
    const self = this;
    _require = arg2;
    let obj = require("PlatformUtils");
    let isIOSResult = obj.isIOS();
    const tmp = _require;
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
        const HTTP = tmp(1282).HTTP;
        const obj2 = { url: constants2.ME, headers: obj3, rejectWithError: false };
        obj3 = { authorization: self.token };
        const value = HTTP.get(obj2);
        value.then(
          (status) => {
            status = status.status;
            const obj = self(dependencyMap[20]);
            obj.track(constants.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: status });
          },
          (status) => {
            status = status.status;
            if (401 === status) {
              self.connectionState = ConnectionStateDefault.CLOSED;
              logger.warn("[WS CLOSED] because of manual authentication failure, marking as closed.");
              self._reset(closure_0, c13, "invalid token manually detected");
            }
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportDefault.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: status });
          },
        );
      }
    }
  }
  _reset(wasClean, code, reason) {
    this.sessionId = null;
    this.seq = 0;
    closure_9.warn("[RESET] (" + wasClean.toString() + ", " + code + ", " + reason + ")");
    const obj = { wasClean, code, reason };
    this.emit("disconnect", obj);
  }
  _sendHeartbeatIfDue() {
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
  }
  _doHeartbeatInterval() {
    const self = this;
    if (this.heartbeatAck) {
      self.heartbeatAck = false;
      self._sendHeartbeat();
    } else if (null === self.expeditedHeartbeatTimeout) {
      const result = self._handleHeartbeatTimeout();
    }
  }
  _startHeartbeater() {
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
    self.initialHeartbeatTimeout = setTimeout(
      () => {
        self.initialHeartbeatTimeout = null;
        self.heartbeatAck = true;
        const _doHeartbeatInterval = self._doHeartbeatInterval;
        self.heartbeater = setInterval(_doHeartbeatInterval.bind(self), heartbeatInterval);
        self._doHeartbeatInterval();
      },
      Math.floor(Math.random() * heartbeatInterval),
    );
  }
  _stopHeartbeater() {
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
  }
  _clearHelloTimeout() {
    const self = this;
    if (null != this.helloTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.helloTimeout);
      self.helloTimeout = null;
    }
  }
  _cleanup(fn) {
    const self = this;
    const Emitter = get_initializedDefault.Emitter;
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
    const compressionHandler = self.compressionHandler;
    compressionHandler.close();
    const obj = GatewayCompressionHandler;
    self.compressionHandler = obj.getCompressionHandler(name);
  }
  _doResume() {
    const self = this;
    this.connectionState = ConnectionStateDefault.RESUMING;
    const dispatcher = this.dispatcher;
    const obj = GatewaySocketAnalytics;
    dispatcher.resumeAnalytics = obj.createResumeAnalytics(Date.now() - this.connectionStartTime);
    let str = this.sessionId;
    const info = closure_9.info;
    if (str == null) {
      str = "";
    }
    info("[RESUME] resuming session " + str + ", seq: " + self.seq);
    const obj2 = { token: self.token, session_id: self.sessionId, seq: self.seq };
    self.send(GatewaySocketOpCodes2.Opcode.RESUME, obj2, false);
  }
  _doIdentify() {
    const self = this;
    return (async () => {
      let closure_0;
      let closure_1;
      let compressionHandler;
      let getClientCapabilities;
      let obj18;
      let obj6;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          let timestamp;
          let closure_2;
          let closure_3;
          let guild_versions;
          let closure_5;
          let closure_6;
          let qos_token;
          let obj;
          let token;
          let properties;
          let obj11;
          let presence;
          let obj14;
          let length;
          let tmp2;
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              timestamp = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              guild_versions = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              qos_token = undefined;
              obj = undefined;
              token = undefined;
              properties = undefined;
              obj11 = undefined;
              presence = undefined;
              obj14 = undefined;
              length = undefined;
              self.seq = 0;
              self.sessionId = null;
              const handleIdentifyResult = self.handleIdentify();
              tmp2 = handleIdentifyResult;
              if (null !== handleIdentifyResult) {
                let committedVersions;
                let committedVersions1;
                self.connectionState = tmp(c3[11]).IDENTIFYING;
                const _Date = Date;
                timestamp = Date.now();
                self.identifyStartTime = timestamp;
                const obj10 = tmp2(c3[23]);
                if (obj10.isCacheEnabled()) {
                  const obj12 = tmp(c3[24]);
                  committedVersions = obj12.getCommittedVersions();
                } else {
                  committedVersions = {};
                }
                const items = [committedVersions, ,];
                const obj13 = tmp2(c3[23]);
                if (obj13.isCacheEnabled()) {
                  const obj15 = tmp(c3[25]);
                  committedVersions1 = obj15.getCommittedVersions();
                } else {
                  committedVersions1 = {};
                }
                items[1] = committedVersions1;
                const obj16 = tmp2(c3[23]);
                let canUseGuildVersionsResult = obj16.isCacheEnabled();
                if (canUseGuildVersionsResult) {
                  const obj17 = tmp(c3[26]);
                  canUseGuildVersionsResult = obj17.canUseGuildVersions();
                }
                items[2] = canUseGuildVersionsResult;
                v1 = 1;
                c3 = 1;
                const obj4 = { value: all(items), done: false };
                return obj4;
              } else {
                self._handleClose(true, code, "No connection info provided");
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = value;
            closure_3 = guild_versions(closure_2, 3);
            guild_versions = closure_3[0];
            closure_5 = closure_3[1];
            closure_6 = closure_3[2];
            const obj21 = tmp2(c3[27]);
            qos_token = obj21.buildQosToken(tmp2.userId, closure_129_0.getIsUserActive());
            const tmp105 = closure_6;
            if (tmp105) {
              const obj9 = {
                guild_versions,
                highest_last_message_id: closure_5.highest_last_message_id,
                read_state_version: closure_5.read_state_version,
                user_guild_settings_version: closure_5.user_guild_settings_version,
                user_settings_version: closure_5.user_settings_version,
                private_channels_version: closure_5.private_channels_version,
                api_code_version: closure_5.api_code_version,
                initial_guild_id: closure_5.initial_guild_id,
              };
              obj = obj9;
            } else {
              obj = { guild_versions: {} };
            }
            if (closure_129_0.connectionState === tmp(c3[11]).IDENTIFYING) {
              if (closure_129_0.identifyStartTime === timestamp) {
                token = tmp2.token;
                properties = tmp2.properties;
                if (undefined === properties) {
                  obj11 = {};
                } else {
                  obj11 = properties;
                }
                presence = tmp2.presence;
                closure_129_0.token = token;
                closure_1_9.verbose("[IDENTIFY]");
                obj14 = {
                  token,
                  capabilities: getClientCapabilities(obj18),
                  properties: obj11,
                  presence,
                  compress: compressionHandler.usesLegacyCompression(),
                  client_state: obj,
                  qos_token,
                };
                obj18 = { useChannelObfuscation: obj6.isChannelMetadataObfuscationEnabled("GatewaySocket") };
                getClientCapabilities = tmp2(c3[28]).getClientCapabilities;
                const tmp42 = tmp2(c3[28]);
                obj6 = tmp2(c3[29]);
                compressionHandler = closure_129_0.compressionHandler;
                const _JSON = JSON;
                length = JSON.stringify(obj14);
                closure_129_0.identifyUncompressedByteSize = length.length;
                const obj7 = v1(c3[30]);
                closure_129_0.identifyCompressedByteSize = obj7.deflate(length).length;
                closure_129_0.identifyCount = closure_129_0.identifyCount + 1;
                closure_129_0.send(tmp2(c3[8]).Opcode.IDENTIFY, obj14, false);
                const obj8 = tmp(c3[20]);
                obj8.track(qos_token.SESSION_START_CLIENT, {});
              }
            }
            closure_1_9.warn("Skipping identify because connectionState or identifyStartTime has changed");
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp90) {
          c3 = 3;
          throw tmp90;
        }
      }
    })();
  }
  _doFastConnectIdentify() {
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
  }
  _doResumeOrIdentify() {
    const self = this;
    if (null === this.sessionId) {
      self._doIdentify();
    } else {
      self._doResume();
    }
    const result = self._updateLastHeartbeatAckTime();
  }
  _updateLastHeartbeatAckTime() {
    this.lastHeartbeatAckTime = Date.now();
  }
  getIsUserActive() {
    let currentPayload;
    let upcomingState;
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
  }
  _consumeQOSPayload() {
    const self = this;
    let currentPayload2 = this.heartbeatQOSState.upcomingState;
    const currentPayload = this.heartbeatQOSState.currentPayload;
    const heartbeatQOSState = this.heartbeatQOSState;
    if (currentPayload2 == null) {
      currentPayload2 = self.heartbeatQOSState.currentPayload;
    }
    heartbeatQOSState.currentPayload = currentPayload2;
    self.heartbeatQOSState.upcomingState = null;
    return currentPayload;
  }
  _sendHeartbeat() {
    const obj = { seq: this.seq, qos: this._consumeQOSPayload() };
    this.send(GatewaySocketOpCodes2.Opcode.QOS_HEARTBEAT, obj, false);
    this.lastHeartbeatTime = Date.now();
  }
  getLogger() {
    return closure_9;
  }
  willReconnect() {
    return this.connectionState === ConnectionStateDefault.WILL_RECONNECT;
  }
  isClosed() {
    return this.connectionState === ConnectionStateDefault.CLOSED;
  }
  isSessionEstablished() {
    const tmp3 =
      this.connectionState === ConnectionStateDefault.SESSION_ESTABLISHED ||
      this.connectionState === ConnectionStateDefault.RESUMING;
    return tmp3;
  }
  isConnected() {
    const self = this;
    const tmp3 =
      this.connectionState === ConnectionStateDefault.IDENTIFYING ||
      self.connectionState === ConnectionStateDefault.RESUMING ||
      self.connectionState === ConnectionStateDefault.SESSION_ESTABLISHED;
    return tmp3;
  }
  connect() {
    let flag;
    const self = this;
    if (this.isClosed()) {
      closure_9.verbose(".connect() called, new state is WILL_RECONNECT");
      self.connectionState = ConnectionStateDefault.WILL_RECONNECT;
      self.firstConnectAttemptStartTime = 0;
      self._connect();
      flag = true;
    } else {
      closure_9.error("Cannot start a new connection, connection state is not closed");
      flag = false;
    }
    return flag;
  }
  resetSocketAndClearCacheOnError(args) {
    let action;
    let error;
    let items;
    let metricAction;
    let obj5;
    const self = this;
    ({ action, error, metricAction } = args);
    closure_9.error("resetSocketAndClearCacheOnError during " + action + ": " + error.message, error.stack);
    const obj2 = ClientModDetectionUtils;
    const usesClientModsResult = obj2.usesClientMods();
    const tmp5 = MonitoringAgentDefault;
    const increment = tmp5.increment;
    const obj3 = { name: MetricEvents.MetricEvents.SOCKET_CRASHED, tags: items };
    if (metricAction == null) {
      metricAction = action;
    }
    items = ["action:" + metricAction, "modded_client:" + usesClientModsResult];
    increment(obj3, true);
    if (false !== args.sentry) {
      const obj4 = { tags: obj5 };
      obj5 = { socketCrashedAction: action };
      const tmp4Result = SentryUtilsDefault;
      tmp4Result.captureException(error, obj4);
    }
    const obj6 = {
      error_message: error.message,
      error_stack: error.stack,
      has_client_mods: usesClientModsResult,
      action,
    };
    const tmp4Result4 = AnalyticsUtilsDefault;
    tmp4Result4.track(metroImportDefault.GATEWAY_SOCKET_RESET, obj6);
    self._cleanup((close) => close.close());
    self._reset(true, 1000, "Resetting socket due to error.");
    const dispatcher = self.dispatcher;
    dispatcher.clear();
    self.connectionState = ConnectionStateDefault.WILL_RECONNECT;
    let dispatchExceptionBackoff = self.dispatchExceptionBackoff;
    dispatchExceptionBackoff.cancel();
    if (0 === self.dispatchExceptionBackoff._fails) {
      closure_9.verbose("Triggering fast reconnect");
      const dispatchExceptionBackoff3 = self.dispatchExceptionBackoff;
      dispatchExceptionBackoff3.fail(() => {});
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => self._connect(), 0);
    } else {
      const dispatchExceptionBackoff2 = self.dispatchExceptionBackoff;
      dispatchExceptionBackoff2.fail(() => self._connect());
    }
    self.didForceClearGuildHashes = true;
    const tmp4Result5 = DispatcherDefault;
    const obj7 = { type: "CLEAR_CACHES", reason: "Socket reset during " + action };
    tmp4Result5.dispatch(obj7);
    const tmp4Result6 = DispatcherDefault;
    tmp4Result6.dispatch({ type: "LIBDISCORE_RESET" });
    clearTimeout(self.dispatchSuccessTimer);
    self.dispatchSuccessTimer = setTimeout(() => {
      const dispatchExceptionBackoff = self.dispatchExceptionBackoff;
      return dispatchExceptionBackoff.succeed();
    }, 2 * MINUTE);
  }
  resetSocketOnDispatchError(error) {
    let tmp = null != error.error.message;
    if (tmp) {
      const message = error.error.message;
      tmp = message.indexOf("Guild data was missing from store") >= 0;
    }
    const resetSocketAndClearCacheOnError = this.resetSocketAndClearCacheOnError;
    const obj = { sentry: !tmp };
    const merged = Object.assign(error);
    const result = resetSocketAndClearCacheOnError(obj);
  }
  close() {
    const self = this;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let num;
    if (self.isClosed()) {
      closure_9.verbose("close() called, but socket is already closed.");
      if (!flag) {
        self.sessionId = null;
        self.token = null;
      }
    } else {
      const _HermesInternal = HermesInternal;
      closure_9.info("Closing connection, current state is " + self.connectionState);
      num = undefined;
      if (flag) {
        num = 4000;
      }
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
  }
  networkStateChange(arg0, arg1, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    this.expeditedHeartbeat(arg0, arg1, flag, false);
  }
  expeditedHeartbeat(arg0) {
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
        const verbose2 = closure_9.verbose;
        if (null != str) {
          str8 = "";
          if ("" !== str) {
            str8 = `reason: ${str}`;
          }
        }
        verbose2(`Performing an expedited heartbeat ${str8}`);
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
        const verbose = closure_9.verbose;
        const connectionState = self.connectionState;
        if (null != str) {
          str3 = "";
          if ("" !== str) {
            str3 = `reason: ${str}`;
          }
        }
        const _HermesInternal = HermesInternal;
        verbose(
          "Expedited heartbeat requested, but, connection state is " +
            connectionState +
            " and reconnectImmediately was not requested " +
            str3,
        );
      }
      return tmp6;
    }
  }
  resetBackoff() {
    let str = reason;
    if (reason === undefined) {
      str = "";
    }
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let str2 = "";
    const verbose = closure_9.verbose;
    if (null != str) {
      str2 = "";
      if ("" !== str) {
        str2 = ` for reason: ${str}`;
      }
    }
    const self = this;
    verbose(`Connection has reset backoff${str2}`);
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
  }
}
const prototype = GatewaySocket.prototype;
Object.defineProperty(prototype, "connectionState", {
  get: function connectionState() {
    return this.connectionState_;
  },
  set: undefined,
});
Object.defineProperty(prototype, "connectionState", {
  get: undefined,
  set: function connectionState(connectionState_) {
    closure_9.verbose("Setting connection state to " + connectionState_);
    this.connectionState_ = connectionState_;
  },
});
let result = size.fileFinishedImporting("modules/gateway/GatewaySocket.tsx");

export default GatewaySocket;
export function setAccountSwitchUserId(targetUserId) {
  c11 = targetUserId;
}
