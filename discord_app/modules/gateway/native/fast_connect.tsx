// discord_app/modules/gateway/native/fast_connect.tsx
import set from "../../../../_runtime/00002_set.js";
import timestampDefault from "../../debug/Logger.tsx";
import serializeDefault from "../../tti_analytics/TTITracker.tsx";
import HELLO_KEY from "../../app_database/modules/KvCacheVersionConstants.tsx";
import checkEnv from "../../../utils/checkEnv.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { set } from "../../../utils/PlatformUtils.tsx";

function createFastConnectSocket() {
  if (null != window.WebSocket) {
    obj = set;
    if (obj.isAndroid()) {
      let supportsZstd = obj(13543).getConstants().supportsZstd;
      const obj2 = obj(13543);
    } else {
      supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
    }
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
    if (!obj(13530)()) {
      const _window2 = window;
      GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    }
    const _window3 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp10}`);
    const _Date = Date;
    _require = Date.now();
    const tmp12 = obj(13526)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp12._socketId);
    const _isNaN = isNaN;
    if (isNaN(parsed)) {
      obj3.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp12._socketId);
    } else {
      const isAndroidResult = tmp3(1234).isAndroid();
      if (supportsZstd) {
        if (isAndroidResult) {
          let tmp7Result = tmp7(13543);
          const result = tmp7Result.enableZstdStreamSupport(parsed);
        } else {
          const DCDCompressionManager2 = closure_4.DCDCompressionManager;
          const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
        }
      } else if (isAndroidResult) {
        tmp7Result = tmp7(13543);
        const result2 = tmp7Result.enableZlibStreamSupport(parsed);
      } else {
        const DCDCompressionManager = closure_4.DCDCompressionManager;
        const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
      }
      obj = { open: false, gateway: null, identify: false, messages: null, clientState: null, userId: null };
      obj[1] = combined;
      obj[3] = [];
      tmp12.onopen = () => {
        obj = obj(closure_1_3[13]);
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        closure_1_7.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj.identify);
        obj.open = true;
      };
      const fn = () => {
        obj = obj(table[13]);
        obj.mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp12.onerror = fn;
      tmp12.onclose = fn;
      tmp12.onmessage = (arg0) => {
        obj = obj(closure_1_3[13]);
        obj.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj.messages;
        messages.push(arg0);
      };
      const _window4 = window;
      obj = { ws: null, state: null };
      obj[0] = tmp12;
      obj[1] = obj;
      window._ws = obj;
      const tmp3Result = tmp3(1234);
      tmp7(10).mark("\u{1F310}", "Fastconnect socket created");
      const tmp7Result1 = tmp7(10);
    }
    obj3 = obj;
    tmp3 = _require;
  } else {
    obj.log("Skipping fast_connect because `window.WebSocket` does not exist.");
  }
}
({ NativeModules: c4, AppState } = get_ActivityIndicator);
let closure_6 = HELLO_KEY.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
let obj = new timestampDefault("FAST CONNECT");
obj.info("initial app state (import time)", AppState.currentState);
let c8 = null;
const fastConnectSocket = createFastConnectSocket();
let result = set.fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

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
    const beginFastConnect = serializeDefault.beginFastConnect;
    beginFastConnect.measure(() => {
      const loadFastConnectNativeModule = callback2(table[14]).loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => callback(table[7]).getConstants());
      let token = measureResult.token;
      if (token == null) {
        token = null;
      }
      if (null != token) {
        let str = "";
        if ("" !== token) {
          const _window = window;
          const state = _ws.state;
          let userId = measureResult.userId;
          let tmp8 = userId;
          if (userId == null) {
            tmp8 = null;
          }
          c8 = tmp8;
          let tmp9 = userId;
          if (userId == null) {
            tmp9 = null;
          }
          state.userId = tmp9;
          if (userId == null) {
            userId = null;
          }
          let prop = measureResult.analyticsInstallation;
          if (prop == null) {
            prop = null;
          }
          let flag = measureResult.useChannelObfuscation;
          if (flag == null) {
            flag = false;
          }
          logger.info("prepareIdentify: app state: ", closure_5.currentState);
          obj = { token: null, properties: null, capabilities: null, client_state: null };
          obj[0] = token;
          obj = {};
          let obj2 = callback3(tmp2[4]);
          const merged = Object.assign(obj2.getSuperProperties());
          obj.client_app_state = closure_5.currentState;
          obj.is_fast_connect = true;
          let obj3 = callback3(tmp2[5]);
          obj.gateway_connect_reasons = obj3.describeConnectionReasons();
          if (null != prop) {
            obj = { installation_id: null };
            obj[0] = prop;
            obj1 = obj;
          } else {
            obj1 = {};
          }
          const merged1 = Object.assign(obj1);
          obj[1] = obj;
          obj2 = { useChannelObfuscation: null };
          obj2[0] = flag;
          obj[2] = callback(tmp2[6]).getClientCapabilities(obj2);
          obj3 = { guild_versions: null };
          obj3[0] = {};
          obj[3] = obj3;
          const _JSON = JSON;
          const obj4 = { op: 2, d: null };
          obj4[1] = obj;
          const json = JSON.stringify(obj4);
          const tmpResult = callback2(tmp2[7]);
          str = undefined;
          if (userId != null) {
            str = userId.toString();
          }
          if (str == null) {
            str = null;
          }
          const _parseFloat = parseFloat;
          const parsed = parseFloat(_ws.ws._socketId);
          const obj7 = callback(tmp2[6]);
          const tmp20 = callback;
          let tmp24;
          if (tmp20Result.isCacheEnabled()) {
            tmp24 = closure_6;
          }
          tmpResult.prepareIdentify(str, json, parsed, tmp24);
          state.identify = true;
          state.clientState = obj.client_state;
          tmp20Result = callback(tmp2[8]);
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
};
