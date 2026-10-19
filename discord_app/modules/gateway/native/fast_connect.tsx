// === Module 15: fast_connect ===

// Module 15 (fast_connect)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import _mod17 from "module_17" /* 17 */;
import KvCacheVersionConstants from "KvCacheVersionConstants" /* 499 */;
import QosToken from "QosToken" /* 500 */;
import discord_common_AnalyticsUtilsAll from "discord_common/AnalyticsUtils" /* 1275 */;
import isCacheEnabled from "isCacheEnabled" /* 7666 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 10017 */;
import GatewayCapabilities from "GatewayCapabilities" /* 14782 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15248 */;
import checkEnv from "checkEnv" /* 16 */;
import size from "module_2" /* 2 */;

function createFastConnectSocket() {
  if (null != window.WebSocket) {
    let obj = obj3(14764);
    const supportsZstd = obj.getConstants().supportsZstd;
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    const _window2 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + window.GLOBAL_ENV.GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp6}`);
    const _Date = Date;
    closure_0 = Date.now();
    const tmp8 = obj3(14751)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp8._socketId);
    const _isNaN = isNaN;
    if (isNaN(parsed)) {
      obj2.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp8._socketId);
    } else {
      const tmp3Result = tmp3(14764);
      if (supportsZstd) {
        const result = tmp3Result.enableZstdStreamSupport(parsed);
      } else {
        const result1 = tmp3Result.enableZlibStreamSupport(parsed);
      }
      obj3 = { open: false, gateway: combined, identify: false, messages: [], clientState: null, userId: null };
      tmp8.onopen = () => {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        obj.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj3.identify);
        obj3.open = true;
      };
      const fn = () => {
        obj3(dependencyMap[12]).mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp8.onerror = fn;
      tmp8.onclose = fn;
      tmp8.onmessage = (arg0) => {
        AppStartPerformanceDefault.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj3.messages;
        messages.push(arg0);
      };
      const _window3 = window;
      const obj4 = { ws: tmp8, state: obj3 };
      window._ws = obj4;
      tmp3(10).mark("\u{1F310}", "Fastconnect socket created");
      const tmp3Result2 = tmp3(10);
    }
    obj2 = obj;
  } else {
    obj.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
const AppState = _mod17.AppState;
let closure_5 = KvCacheVersionConstants.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
let d = new LoggerDefault("FAST CONNECT");
d.info("initial app state (import time)", AppState.currentState);
let c7 = null;
const fastConnectSocket = createFastConnectSocket();
let result = size.fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

export { createFastConnectSocket };
export const closeFastConnectSocket = function closeFastConnectSocket() {
  if (null != window._ws) {
    const _window = window;
    ws.close();
    const _window2 = window;
    window._ws = null;
    c7 = null;
  }
};
export function getLastFastConnectIdentifyUserId() {
  return c7;
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
        if ("" !== token) {
          const _window = window;
          const state = _ws.state;
          let tmp7 = str2;
          if (measureResult.userId == null) {
            tmp7 = null;
          }
          c7 = tmp7;
          let tmp8 = str2;
          if (measureResult.userId == null) {
            tmp8 = null;
          }
          state.userId = tmp8;
          let derivedQosData = null;
          if (null != measureResult.userId) {
            derivedQosData = NativeFastConnectModuleDefault.getDerivedQosData(str2);
            const tmpResult = NativeFastConnectModuleDefault;
          }
          let prop = measureResult.analyticsInstallation;
          if (prop == null) {
            prop = null;
          }
          let flag = measureResult.useChannelObfuscation;
          if (flag == null) {
            flag = false;
          }
          const qosTokenFromDerivedData = QosToken.buildQosTokenFromDerivedData(derivedQosData, true);
          logger.info("prepareIdentify: app state: ", AppState.currentState, "qosTokenPresent: ", qosTokenFromDerivedData.length > 0);
          const d = { token, properties: null, capabilities: null, client_state: null, qos_token: null };
          const obj3 = {};
          const merged = Object.assign(discord_common_AnalyticsUtilsAll.getSuperProperties());
          obj3.client_app_state = AppState.currentState;
          obj3.is_fast_connect = true;
          obj3.gateway_connect_reasons = RequestGatewaySocketAll.describeConnectionReasons();
          if (null != prop) {
            const obj4 = { installation_id: prop };
            let obj7 = obj4;
          } else {
            obj7 = {};
          }
          const merged1 = Object.assign(obj7);
          d.properties = obj3;
          const obj8 = { useChannelObfuscation: flag };
          d.capabilities = GatewayCapabilities.getClientCapabilities(obj8);
          const obj9 = { guild_versions: {} };
          d.client_state = obj9;
          d.qos_token = qosTokenFromDerivedData;
          const _JSON = JSON;
          const obj10 = { op: 2, d };
          const json = JSON.stringify(obj10);
          const tmpResult2 = NativeFastConnectModuleDefault;
          let str1;
          if (measureResult.userId != null) {
            str1 = str2.toString();
          }
          if (str1 == null) {
            str1 = null;
          }
          const _parseFloat = parseFloat;
          const parsed = parseFloat(_ws.ws._socketId);
          const tmp11Result = GatewayCapabilities;
          let tmp25;
          if (tmp11Result2.isCacheEnabled()) {
            tmp25 = closure_1_5;
          }
          tmpResult2.prepareIdentify(str1, json, parsed, tmp25);
          state.identify = true;
          state.clientState = d.client_state;
          tmp11Result2 = isCacheEnabled;
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
};