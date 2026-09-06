// === Module 15: fast_connect ===

// Module 15 (fast_connect)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import KvCacheVersionConstants from "KvCacheVersionConstants" /* 499 */;
import discord_common_AnalyticsUtilsAll from "discord_common/AnalyticsUtils" /* 1250 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7757 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13637 */;
import checkEnv from "checkEnv" /* 16 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

function createFastConnectSocket() {
  if (null != window.WebSocket) {
    let _ws = require("PlatformUtils");
    if (_ws.isAndroid()) {
      let supportsZstd = _ws(13649).getConstants().supportsZstd;
      const obj2 = _ws(13649);
    } else {
      supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
    }
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
    if (!_ws(13636)()) {
      const _window2 = window;
      GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    }
    const _window3 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    _ws.log(`[FAST CONNECT] ${tmp10}`);
    const _Date = Date;
    _require = Date.now();
    const tmp12 = _ws(13633)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp12._socketId);
    const _isNaN = isNaN;
    if (isNaN(parsed)) {
      obj3.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp12._socketId);
    } else {
      const isAndroidResult = tmp3(1115).isAndroid();
      if (supportsZstd) {
        if (isAndroidResult) {
          let tmp7Result = tmp7(13649);
          const result = tmp7Result.enableZstdStreamSupport(parsed);
        } else {
          const DCDCompressionManager2 = closure_4.DCDCompressionManager;
          const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
        }
      } else if (isAndroidResult) {
        tmp7Result = tmp7(13649);
        const result2 = tmp7Result.enableZlibStreamSupport(parsed);
      } else {
        const DCDCompressionManager = closure_4.DCDCompressionManager;
        const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
      }
      _ws = { open: false, gateway: combined, identify: false, messages: [], clientState: null, userId: null };
      tmp12.onopen = () => {
        obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        obj.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj.identify);
        obj.open = true;
      };
      const fn = () => {
        obj = obj(dependencyMap[14]);
        obj.mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp12.onerror = fn;
      tmp12.onclose = fn;
      tmp12.onmessage = (arg0) => {
        obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj.messages;
        messages.push(arg0);
      };
      const _window4 = window;
      _ws = { ws: tmp12, state: null };
      _ws.state = _ws;
      window._ws = _ws;
      const tmp3Result = tmp3(1115);
      tmp7(10).mark("\u{1F310}", "Fastconnect socket created");
      const tmp7Result1 = tmp7(10);
    }
    obj3 = _ws;
    tmp3 = _require;
  } else {
    _ws.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
({ NativeModules: closure_4, AppState } = get_ActivityIndicator);
let closure_6 = KvCacheVersionConstants.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
let obj = new LoggerDefault("FAST CONNECT");
obj.info("initial app state (import time)", AppState.currentState);
let c8 = null;
const fastConnectSocket = createFastConnectSocket();
let result = size.fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

export { createFastConnectSocket };
export const closeFastConnectSocket = function closeFastConnectSocket() {
  if (null != window._ws) {
    const _window = window;
    ws.close();
    const _window2 = window;
    window._ws = null;
    c8 = null;
  }
};
export function getLastFastConnectIdentifyUserId() {
  return c8;
}
export const identifyWebSocket = function identifyWebSocket() {
  if (null != window._ws) {
    const beginFastConnect = TTITrackerDefault.beginFastConnect;
    beginFastConnect.measure(() => {
      const loadFastConnectNativeModule = TTITrackerDefault.loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => closure_1_1(closure_1_3[8]).getConstants());
      let token = measureResult.token;
      if (token == null) {
        token = null;
      }
      if (null != token) {
        let str = "";
        if ("" !== token) {
          const _window = window;
          const state = _ws.state;
          let tmp7 = str2;
          if (measureResult.userId == null) {
            tmp7 = null;
          }
          c8 = tmp7;
          let tmp8 = str2;
          if (measureResult.userId == null) {
            tmp8 = null;
          }
          state.userId = tmp8;
          let derivedQosData = null;
          if (null != measureResult.userId) {
            let tmpResult = NativeFastConnectModuleDefault;
            derivedQosData = tmpResult.getDerivedQosData(str2);
          }
          let prop = measureResult.analyticsInstallation;
          if (prop == null) {
            prop = null;
          }
          let flag = measureResult.useChannelObfuscation;
          if (flag == null) {
            flag = false;
          }
          let obj1 = require("QosToken");
          const qosTokenFromDerivedData = obj1.buildQosTokenFromDerivedData(derivedQosData, true);
          logger.info("prepareIdentify: app state: ", AppState.currentState, "qosTokenPresent: ", qosTokenFromDerivedData.length > 0);
          let d = { token, properties: null, capabilities: null, client_state: null, qos_token: null };
          d = {};
          let obj4 = discord_common_AnalyticsUtilsAll;
          const merged = Object.assign(obj4.getSuperProperties());
          d.client_app_state = AppState.currentState;
          d.is_fast_connect = true;
          let obj5 = RequestGatewaySocketAll;
          d.gateway_connect_reasons = obj5.describeConnectionReasons();
          if (null != prop) {
            obj1 = { installation_id: prop };
            let obj2 = obj1;
          } else {
            obj2 = {};
          }
          const merged1 = Object.assign(obj2);
          d.properties = d;
          let tmp11Result = require("GatewayCapabilities");
          const obj3 = { useChannelObfuscation: flag };
          d.capabilities = tmp11Result.getClientCapabilities(obj3);
          obj4 = { guild_versions: {} };
          d.client_state = obj4;
          d.qos_token = qosTokenFromDerivedData;
          const _JSON = JSON;
          obj5 = { op: 2, d };
          const json = JSON.stringify(obj5);
          tmpResult = NativeFastConnectModuleDefault;
          str = undefined;
          if (measureResult.userId != null) {
            str = str2.toString();
          }
          if (str == null) {
            str = null;
          }
          const _parseFloat = parseFloat;
          const parsed = parseFloat(_ws.ws._socketId);
          tmp11Result = require("isCacheEnabled");
          let tmp25;
          if (tmp11Result.isCacheEnabled()) {
            tmp25 = closure_1_6;
          }
          tmpResult.prepareIdentify(str, json, parsed, tmp25);
          state.identify = true;
          state.clientState = d.client_state;
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
};