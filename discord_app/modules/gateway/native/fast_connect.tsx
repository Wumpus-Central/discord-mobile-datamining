// === Module 15: createFastConnectSocket ===

// Module 15 (createFastConnectSocket)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import serializeDefault from "serialize" /* 9 */;
import HELLO_KEY from "HELLO_KEY" /* 499 */;
import module_16 from "module_16" /* 16 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

function createFastConnectSocket() {
  if (null != window.WebSocket) {
    obj = _require(1115);
    if (obj.isAndroid()) {
      let supportsZstd = obj(13649).getConstants().supportsZstd;
      const obj2 = obj(13649);
    } else {
      supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
    }
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
    if (!obj(13636)()) {
      const _window2 = window;
      GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    }
    const _window3 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp10}`);
    const _Date = Date;
    _require = Date.now();
    const tmp12 = obj(13633)(combined);
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
      obj = { open: false, gateway: null, identify: false, messages: null, clientState: null, userId: null };
      obj[1] = combined;
      obj[3] = [];
      tmp12.onopen = () => {
        obj = obj(closure_1_3[14]);
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        closure_1_7.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj.identify);
        obj.open = true;
      };
      const fn = () => {
        obj = obj(table[14]);
        obj.mark("\u{1F310}", "Fastconnect socket close");
        window._ws = null;
      };
      tmp12.onerror = fn;
      tmp12.onclose = fn;
      tmp12.onmessage = (arg0) => {
        obj = obj(closure_1_3[14]);
        obj.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj.messages;
        messages.push(arg0);
      };
      const _window4 = window;
      obj = { ws: null, state: null };
      obj[0] = tmp12;
      obj[1] = obj;
      window._ws = obj;
      const tmp3Result = tmp3(1115);
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
      const loadFastConnectNativeModule = callback2(table[15]).loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => callback(table[8]).getConstants());
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
            let tmpResult = tmp(tmp2[8]);
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
          obj1 = callback(tmp2[4]);
          const qosTokenFromDerivedData = obj1.buildQosTokenFromDerivedData(derivedQosData, true);
          logger.info("prepareIdentify: app state: ", closure_5.currentState, "qosTokenPresent: ", qosTokenFromDerivedData.length > 0);
          obj = { token: null, properties: null, capabilities: null, client_state: null, qos_token: null };
          obj[0] = token;
          obj = {};
          let obj4 = callback3(tmp2[5]);
          const merged = Object.assign(obj4.getSuperProperties());
          obj.client_app_state = closure_5.currentState;
          obj.is_fast_connect = true;
          let obj5 = callback3(tmp2[6]);
          obj.gateway_connect_reasons = obj5.describeConnectionReasons();
          if (null != prop) {
            obj1 = { installation_id: null };
            obj1[0] = prop;
            let obj2 = obj1;
          } else {
            obj2 = {};
          }
          const merged1 = Object.assign(obj2);
          obj[1] = obj;
          let tmp11Result = tmp11(tmp2[7]);
          const obj3 = { useChannelObfuscation: null };
          obj3[0] = flag;
          obj[2] = tmp11Result.getClientCapabilities(obj3);
          obj4 = { guild_versions: null };
          obj4[0] = {};
          obj[3] = obj4;
          obj[4] = qosTokenFromDerivedData;
          const _JSON = JSON;
          obj5 = { op: 2, d: null };
          obj5[1] = obj;
          const json = JSON.stringify(obj5);
          tmpResult = tmp(tmp2[8]);
          str = undefined;
          if (measureResult.userId != null) {
            str = str2.toString();
          }
          if (str == null) {
            str = null;
          }
          const _parseFloat = parseFloat;
          const parsed = parseFloat(_ws.ws._socketId);
          tmp11Result = tmp11(tmp2[9]);
          let tmp25;
          if (tmp11Result.isCacheEnabled()) {
            tmp25 = closure_6;
          }
          tmpResult.prepareIdentify(str, json, parsed, tmp25);
          state.identify = true;
          state.clientState = obj.client_state;
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
};