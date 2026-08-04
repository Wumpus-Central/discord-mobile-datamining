// _runtime/00208_addListener.js
let c3 = 1;
let c4 = new require("NativeEventEmitter")(null);

export default {
  addListener(arg0, arg1, arg2) {
    return tmp2.addListener(arg0, arg1, arg2);
  },
  sendRequest(arg0, trackingName, arg2, obj) {
    const tmp3 = importDefault(210)(arg4);
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
          let tmp2 = key10009;
          let items1 = [key10009, headers[key10009]];
          let arr = items.push(items1);
          continue;
        }
        obj.headers = items;
        return obj;
      });
    }
    let closure_3 = tmp4 + 1;
    const __NETWORK_REPORTER__ = global.__NETWORK_REPORTER__;
    let devToolsRequestId;
    if (__NETWORK_REPORTER__ != null) {
      devToolsRequestId = __NETWORK_REPORTER__.createDevToolsRequestId();
    }
    let items = [];
    for (const key10028 in arg3) {
      let tmp9 = key10028;
      let items1 = [key10028, arg3[key10028]];
      let arr = items.push(items1);
      continue;
    }
    obj = {};
    let merged = Object.assign(tmp3);
    obj.trackingName = trackingName;
    obj.devToolsRequestId = devToolsRequestId;
    importDefault(213).sendRequest(arg0, arg2, +closure_3, items, obj, arg5, arg6, arg7, arg9);
    arg8(+closure_3);
  },
  abortRequest(_requestId) {
    importDefault(213).abortRequest(_requestId);
  },
  clearCookies(arg0) {
    importDefault(213).clearCookies(arg0);
  }
};