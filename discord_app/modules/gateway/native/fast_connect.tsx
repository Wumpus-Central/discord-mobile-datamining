// === Module 15: fast_connect ===

// Module 15 (fast_connect)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import KvCacheVersionConstants from "KvCacheVersionConstants" /* 499 */;
import discord_common_AnalyticsUtilsAll from "discord_common/AnalyticsUtils" /* 1260 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7266 */;
import react_nativeDefault from "react-native" /* 13975 */;
import checkEnv from "checkEnv" /* 16 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let AppState;
let closure_4;
function createFastConnectSocket() {
  let closure_0;
  let obj;
  let obj4;
  if (null != window.WebSocket) {
    let supportsZstd;
    obj = require("PlatformUtils");
    const tmp3 = _require;
    if (obj.isAndroid()) {
      const obj2 = obj4(13476);
      supportsZstd = obj2.getConstants().supportsZstd;
    } else {
      supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
    }
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    const _window2 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + window.GLOBAL_ENV.GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp8}`);
    const _Date = Date;
    _require = Date.now();
    const tmp11 = obj4(13463)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp11._socketId);
    const _isNaN = isNaN;
    const obj3 = obj;
    if (isNaN(parsed)) {
      obj3.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp11._socketId);
    } else {
      const tmp3Result = tmp3(1369);
      const isAndroidResult = tmp3Result.isAndroid();
      if (supportsZstd) {
        if (isAndroidResult) {
          const tmp10Result = obj4(13476);
          const result = tmp10Result.enableZstdStreamSupport(parsed);
        } else {
          const DCDCompressionManager2 = closure_4.DCDCompressionManager;
          const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
        }
      } else if (isAndroidResult) {
        const tmp10Result3 = obj4(13476);
        const result2 = tmp10Result3.enableZlibStreamSupport(parsed);
      } else {
        const DCDCompressionManager = closure_4.DCDCompressionManager;
        const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
      }
      obj4 = { open: false, gateway: combined, identify: false, messages: [], clientState: null, userId: null };
      tmp11.onopen = () => {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        obj.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj4.identify);
        obj4.open = true;
      };
      const fn = () => {
        const obj = obj4(dependencyMap[13]);
        obj.mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp11.onerror = fn;
      tmp11.onclose = fn;
      tmp11.onmessage = (arg0) => {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj4.messages;
        messages.push(arg0);
      };
      const _window3 = window;
      const obj5 = { ws: tmp11, state: obj4 };
      window._ws = obj5;
      const tmp10Result4 = obj4(10);
      tmp10Result4.mark("\u{1F310}", "Fastconnect socket created");
    }
  } else {
    obj.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
({ NativeModules: closure_4, AppState } = react_native);
let closure_6 = KvCacheVersionConstants.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
let d = new LoggerDefault("FAST CONNECT");
d.info("initial app state (import time)", AppState.currentState);
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
  let logger;
  let obj;
  if (null != window._ws) {
    const beginFastConnect = TTITrackerDefault.beginFastConnect;
    let measureResult = beginFastConnect.measure(() => {
      let obj3;
      let obj6;
      let obj8;
      let obj9;
      let tmp11Result;
      const loadFastConnectNativeModule = TTITrackerDefault.loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => {
        const obj = closure_1_1(closure_1_3[8]);
        return obj.getConstants();
      });
      let token = measureResult.token;
      if (token == null) {
        token = null;
      }
      if (null != token) {
        if ("" !== token) {
          let obj7;
          const _window = window;
          const state = _ws.state;
          let tmp7 = str2;
          const _socketId = _ws.ws._socketId;
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
            const tmpResult = react_nativeDefault;
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
          const obj2 = require("QosToken");
          const qosTokenFromDerivedData = obj2.buildQosTokenFromDerivedData(derivedQosData, true);
          logger.info("prepareIdentify: app state: ", AppState.currentState, "qosTokenPresent: ", qosTokenFromDerivedData.length > 0);
          const d = { token, properties: obj3, capabilities: tmp11Result.getClientCapabilities(obj8), client_state: obj9, qos_token: qosTokenFromDerivedData };
          obj3 = { client_app_state: AppState.currentState, is_fast_connect: true, gateway_connect_reasons: obj6.describeConnectionReasons() };
          const obj5 = discord_common_AnalyticsUtilsAll;
          const merged = Object.assign(obj5.getSuperProperties());
          obj6 = RequestGatewaySocketAll;
          if (null != prop) {
            obj7 = { installation_id: prop };
            const obj4 = { installation_id: prop };
          } else {
            obj7 = {};
          }
          const merged1 = Object.assign(obj7);
          obj8 = { useChannelObfuscation: flag };
          const _JSON = JSON;
          const obj10 = { op: 2, d };
          obj9 = { guild_versions: {} };
          tmp11Result = require("GatewayCapabilities");
          const json = JSON.stringify(obj10);
          let str1;
          const prepareIdentify = react_nativeDefault.prepareIdentify;
          const tmpResult2 = react_nativeDefault;
          if (measureResult.userId != null) {
            str1 = str2.toString();
          }
          if (str1 == null) {
            str1 = null;
          }
          const _parseFloat = parseFloat;
          const parsed = parseFloat(_socketId);
          let tmp26;
          const tmp11Result2 = require("isCacheEnabled");
          if (tmp11Result2.isCacheEnabled()) {
            tmp26 = closure_1_6;
          }
          prepareIdentify(str1, json, parsed, tmp26);
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