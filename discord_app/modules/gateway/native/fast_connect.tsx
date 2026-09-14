// discord_app/modules/gateway/native/fast_connect.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import AppStartPerformanceDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import KvCacheVersionConstants from "../../app_database/modules/KvCacheVersionConstants.tsx";
import discord_common_AnalyticsUtilsAll from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import RequestGatewaySocketAll from "../RequestGatewaySocket.tsx";
import NativeFastConnectModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import checkEnv from "../../../utils/checkEnv.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function createFastConnectSocket() {
  if (null != window.WebSocket) {
    let obj = require("PlatformUtils");
    if (obj.isAndroid()) {
      let supportsZstd = obj4(13739).getConstants().supportsZstd;
      const obj2 = obj4(13739);
    } else {
      supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
    }
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
    if (!obj4(13726)()) {
      const _window2 = window;
      GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    }
    const _window3 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp10}`);
    const _Date = Date;
    _require = Date.now();
    const tmp12 = obj4(13723)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp12._socketId);
    const _isNaN = isNaN;
    if (isNaN(parsed)) {
      obj3.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp12._socketId);
    } else {
      const isAndroidResult = tmp3(1363).isAndroid();
      if (supportsZstd) {
        if (isAndroidResult) {
          const result = tmp7(13739).enableZstdStreamSupport(parsed);
          const tmp7Result = tmp7(13739);
        } else {
          const DCDCompressionManager2 = closure_4.DCDCompressionManager;
          const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
        }
      } else if (isAndroidResult) {
        const result2 = tmp7(13739).enableZlibStreamSupport(parsed);
        const tmp7Result3 = tmp7(13739);
      } else {
        const DCDCompressionManager = closure_4.DCDCompressionManager;
        const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
      }
      obj4 = { open: false, gateway: combined, identify: false, messages: [], clientState: null, userId: null };
      tmp12.onopen = () => {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        obj.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj4.identify);
        obj4.open = true;
      };
      const fn = () => {
        obj4(dependencyMap[14]).mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp12.onerror = fn;
      tmp12.onclose = fn;
      tmp12.onmessage = (arg0) => {
        AppStartPerformanceDefault.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj4.messages;
        messages.push(arg0);
      };
      const _window4 = window;
      const obj5 = { ws: tmp12, state: obj4 };
      window._ws = obj5;
      const tmp3Result = tmp3(1363);
      tmp7(10).mark("\u{1F310}", "Fastconnect socket created");
      const tmp7Result4 = tmp7(10);
    }
    obj3 = obj;
    tmp3 = _require;
  } else {
    obj.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
({ NativeModules: closure_4, AppState } = get_ActivityIndicator);
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
          c8 = tmp7;
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
          const qosTokenFromDerivedData = require("QosToken").buildQosTokenFromDerivedData(derivedQosData, true);
          logger.info(
            "prepareIdentify: app state: ",
            AppState.currentState,
            "qosTokenPresent: ",
            qosTokenFromDerivedData.length > 0,
          );
          const d = { token, properties: null, capabilities: null, client_state: null, qos_token: null };
          const obj3 = {};
          const obj2 = require("QosToken");
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
          d.capabilities = require("GatewayCapabilities").getClientCapabilities(obj8);
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
          const tmp11Result = require("GatewayCapabilities");
          let tmp25;
          if (tmp11Result2.isCacheEnabled()) {
            tmp25 = closure_1_6;
          }
          tmpResult2.prepareIdentify(str1, json, parsed, tmp25);
          state.identify = true;
          state.clientState = d.client_state;
          tmp11Result2 = require("isCacheEnabled");
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
};
