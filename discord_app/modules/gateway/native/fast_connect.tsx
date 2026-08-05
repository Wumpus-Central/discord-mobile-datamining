// discord_app/modules/gateway/native/fast_connect.tsx
import checkEnv from "../../../utils/checkEnv.tsx";
import get_ActivityIndicator from "get ActivityIndicator";
import { VERSION_TO_FORCE_RESYNCING_ALL_DATA as closure_6 } from "HELLO_KEY";
import { set } from "../../../utils/PlatformUtils.tsx";
import { serialize } from "../../tti_analytics/TTITracker.tsx";

let AppState;
let c4;
function createFastConnectSocket() {
  if (null != window.WebSocket) {
    let obj = _set;
    if (obj.isAndroid()) {
      let supportsZstd = obj(12797).getConstants().supportsZstd;
      const obj2 = obj(12797);
    } else {
      supportsZstd = closure_4.DCDCompressionManager.supportsZstd;
    }
    let str2 = "zlib-stream";
    if (supportsZstd) {
      str2 = "zstd-stream";
    }
    const _window = window;
    let GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
    if (!obj(12786)()) {
      const _window2 = window;
      GATEWAY_ENDPOINT = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    }
    const _window3 = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + GATEWAY_ENDPOINT + "/?encoding=json&v=" + window.GLOBAL_ENV.API_VERSION + "&compress=" + str2;
    obj.log(`[FAST CONNECT] ${tmp10}`);
    const _Date = Date;
    _require = Date.now();
    const tmp12 = obj(12782)(combined);
    const _parseFloat = parseFloat;
    const parsed = parseFloat(tmp12._socketId);
    const _isNaN = isNaN;
    if (isNaN(parsed)) {
      obj3.log("[FAST CONNECT] Unable to create socketId from NaN value ", tmp12._socketId);
    } else {
      const isAndroidResult = tmp3(500).isAndroid();
      if (supportsZstd) {
        if (isAndroidResult) {
          let tmp7Result = tmp7(12797);
          const result = tmp7Result.enableZstdStreamSupport(parsed);
        } else {
          const DCDCompressionManager2 = closure_4.DCDCompressionManager;
          const result1 = DCDCompressionManager2.enableZstdStreamSupport(parsed, 0);
        }
      } else if (isAndroidResult) {
        tmp7Result = tmp7(12797);
        const result2 = tmp7Result.enableZlibStreamSupport(parsed);
      } else {
        const DCDCompressionManager = closure_4.DCDCompressionManager;
        const result3 = DCDCompressionManager.enableZlibStreamSupport(parsed);
      }
      obj = { open: false, gateway: null, identify: false, messages: null, clientState: null, userId: null };
      obj[1] = combined;
      obj[3] = [];
      tmp12.onopen = () => {
        obj = obj(outer1_3[13]);
        obj.mark("\u{1F310}", "Fastconnect socket opened");
        outer1_7.log("connected and identified in " + Date.now() - closure_0 + "ms didIdentify:" + obj.identify);
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
        obj = obj(outer1_3[13]);
        obj.mark("\u{1F310}", "Fastconnect socket message");
        const messages = obj.messages;
        messages.push(arg0);
      };
      const _window4 = window;
      obj = { ws: null, state: null };
      obj[0] = tmp12;
      obj[1] = obj;
      window._ws = obj;
      const tmp3Result = tmp3(500);
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
let obj = new require("timestamp")("FAST CONNECT");
obj.info("initial app state (import time)", AppState.currentState);
let c8 = null;
const fastConnectSocket = createFastConnectSocket();
let result = require("HELLO_KEY").fileFinishedImporting("modules/gateway/native/fast_connect.tsx");

export { createFastConnectSocket };
export const closeFastConnectSocket = function closeFastConnectSocket() {
  if (null != window._ws) {
    const _window = window;
    ws.close();
    const _window2 = window;
    window._ws = null;
    let c8 = null;
  }
};
export function getLastFastConnectIdentifyUserId() {
  return c8;
}
export const identifyWebSocket = function identifyWebSocket() {
  if (null != window._ws) {
    const beginFastConnect = serialize.beginFastConnect;
    beginFastConnect.measure(() => {
      let client_state = callback2;
      let prepareIdentifyResult = table;
      const loadFastConnectNativeModule = callback2(table[14]).loadFastConnectNativeModule;
      const measureResult = loadFastConnectNativeModule.measure(() => {
        const obj = callback(table[4]);
        if (obj.isAndroid()) {
          let token = callback2(table[5]).getConstants().token;
          if (token == null) {
            token = null;
          }
          const obj2 = callback2(table[5]);
        } else {
          token = obj.DCDFastConnectManager.token;
        }
        return token;
      });
      if (null != measureResult) {
        let str = "";
        if ("" !== measureResult) {
          let parsed = globalThis;
          const _window = window;
          const state = _ws.state;
          const _socketId = _ws.ws._socketId;
          let isCacheEnabledResult = callback;
          let obj2 = callback(prepareIdentifyResult[4]);
          if (obj2.isAndroid()) {
            let objResult = client_state(prepareIdentifyResult[5]);
            let userId = objResult.getConstants().userId;
          } else {
            userId = closure_4.DCDFastConnectManager.userId;
          }
          let tmp7 = userId;
          if (userId == null) {
            tmp7 = null;
          }
          let closure_8 = tmp7;
          let tmp8 = userId;
          if (userId == null) {
            tmp8 = null;
          }
          state.userId = tmp8;
          if (userId == null) {
            userId = null;
          }
          logger.info("prepareIdentify: app state: ", currentState.currentState);
          if (isCacheEnabledResultResult.isAndroid()) {
            objResult = client_state(prepareIdentifyResult[5]);
            let prop = objResult.getConstants().analyticsInstallation;
            if (prop == null) {
              prop = null;
            }
            let analyticsInstallation = prop;
          } else {
            analyticsInstallation = closure_4.DCDFastConnectManager.analyticsInstallation;
          }
          client_state = { token: null, properties: null, capabilities: null, client_state: null };
          client_state[0] = measureResult;
          let obj = {};
          isCacheEnabledResultResult = isCacheEnabledResult(prepareIdentifyResult[4]);
          const tmp10 = currentState;
          const merged = Object.assign(callback3(prepareIdentifyResult[6]).getSuperProperties());
          obj.client_app_state = tmp10.currentState;
          obj.is_fast_connect = true;
          const obj9 = callback3(prepareIdentifyResult[6]);
          obj.gateway_connect_reasons = callback3(prepareIdentifyResult[7]).describeConnectionReasons();
          if (null != analyticsInstallation) {
            const obj1 = { installation_id: null };
            obj1[0] = analyticsInstallation;
            obj2 = obj1;
          } else {
            obj2 = {};
          }
          const merged1 = Object.assign(obj2);
          client_state[1] = obj;
          const obj10 = callback3(prepareIdentifyResult[7]);
          const isCacheEnabledResultResult1 = isCacheEnabledResult(prepareIdentifyResult[8]);
          if (isCacheEnabledResultResult2.isAndroid()) {
            let flag3 = client_state(prepareIdentifyResult[5]).getConstants().useChannelObfuscation;
            if (flag3 == null) {
              flag3 = false;
            }
            let flag2 = flag3;
            const objResult1 = client_state(prepareIdentifyResult[5]);
          } else {
            flag2 = closure_4.DCDFastConnectManager.useChannelObfuscation;
            if (flag2 == null) {
              flag2 = false;
            }
          }
          const obj3 = { useChannelObfuscation: null };
          obj3[0] = flag2;
          client_state[2] = isCacheEnabledResultResult1.getClientCapabilities(obj3);
          const obj4 = { guild_versions: null };
          obj4[0] = {};
          client_state[3] = obj4;
          const _JSON = JSON;
          const obj5 = { op: 2, d: null };
          obj5[1] = client_state;
          const json = JSON.stringify(obj5);
          isCacheEnabledResultResult2 = isCacheEnabledResult(prepareIdentifyResult[4]);
          if (isCacheEnabledResultResult3.isAndroid()) {
            str = undefined;
            if (userId != null) {
              str = userId.toString();
            }
            if (str == null) {
              str = null;
            }
            client_state = client_state(prepareIdentifyResult[5]);
            parsed = parsed.parseFloat(_socketId);
            isCacheEnabledResult = isCacheEnabledResult(prepareIdentifyResult[9]).isCacheEnabled();
            let tmp31;
            if (isCacheEnabledResult) {
              tmp31 = closure_6;
            }
            prepareIdentifyResult = client_state.prepareIdentify(str, json, parsed, tmp31);
            const isCacheEnabledResultResult4 = isCacheEnabledResult(prepareIdentifyResult[9]);
          } else {
            const DCDFastConnectManager = closure_4.DCDFastConnectManager;
            let tmp23 = null;
            if (isCacheEnabledResultResult5.isCacheEnabled()) {
              tmp23 = closure_6;
            }
            DCDFastConnectManager.prepareIdentify(userId, json, _socketId, tmp23);
            isCacheEnabledResultResult5 = isCacheEnabledResult(prepareIdentifyResult[9]);
          }
          client_state = client_state.client_state;
          state.identify = true;
          state.clientState = client_state;
          isCacheEnabledResultResult3 = isCacheEnabledResult(prepareIdentifyResult[4]);
        }
      }
      logger.log("Skipping fast_connect because we could not find a token to connect with.");
    });
  } else {
    obj.log("Skipping identifyWebSocket because socket is null");
  }
};