// === Module 208: ? ===

// Module 208
import NativeEventEmitterDefault from "NativeEventEmitter" /* 209 */;
import convertRequestBodyDefault from "convertRequestBody" /* 210 */;
import NetworkingDefault from "Networking" /* 213 */;

let closure_3 = 1;
let closure_4 = new NativeEventEmitterDefault(null);

export default {
  addListener(arg0, arg1, arg2) {
    return closure_4.addListener(arg0, arg1, arg2);
  },
  sendRequest(arg0, trackingName, arg2, obj, arg4, arg5, arg6, arg7, fn, arg9) {
    const tmp3 = convertRequestBodyDefault(arg4);
    let formData = tmp3;
    if (tmp3) {
      formData = tmp3.formData;
    }
    if (formData) {
      formData = tmp3.formData;
      tmp3.formData = formData.map((headers) => {
        const obj = {};
        const merged = Object.assign(headers);
        headers = headers.headers;
        const items = [];
        for (const key10009 in headers) {
          let items1 = [key10009, headers[key10009]];
          let arr = items.push(items1);
          continue;
        }
        obj.headers = items;
        return obj;
      });
    }
    closure_3 = tmp4 + 1;
    const __NETWORK_REPORTER__ = global.__NETWORK_REPORTER__;
    let devToolsRequestId;
    if (__NETWORK_REPORTER__ != null) {
      devToolsRequestId = __NETWORK_REPORTER__.createDevToolsRequestId();
    }
    let items = [];
    for (const key10028 in arg3) {
      let items1 = [key10028, arg3[key10028]];
      let arr = items.push(items1);
      continue;
    }
    obj = {};
    let merged = Object.assign(tmp3);
    obj.trackingName = trackingName;
    obj.devToolsRequestId = devToolsRequestId;
    NetworkingDefault.sendRequest(arg0, arg2, +closure_3, items, obj, arg5, arg6, arg7, arg9);
    fn(+closure_3);
    const tmpResult = NetworkingDefault;
  },
  abortRequest(_requestId) {
    NetworkingDefault.abortRequest(_requestId);
  },
  clearCookies(arg0) {
    NetworkingDefault.clearCookies(arg0);
  }
};