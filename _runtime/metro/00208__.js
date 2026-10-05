// _runtime/metro/00208__.js
import _modDef209 from "00209__.js";
import convertRequestBodyDefault from "../00210_convertRequestBody.js";
import NetworkingDefault from "../00213_Networking.js";

let headers;

let closure_3 = 1;
let closure_4 = new _modDef209(null);
new _modDef209(null);

export default {
  addListener(arg0, arg1, arg2) {
    return closure_4.addListener(arg0, arg1, arg2);
  },
  sendRequest(arg0, trackingName, arg2, obj, arg4, arg5, arg6, arg7, fn, arg9) {
    const tmp3 = convertRequestBodyDefault(arg4);
    const tmp4 = tmp3 && tmp3.formData;
    if (tmp4) {
      const formData = tmp3.formData;
      tmp3.formData = formData.map((headers) => {
        let items;
        const obj = { headers: items };
        const merged = Object.assign(headers);
        headers = headers.headers;
        items = [];
        for (const key10009 in headers) {
          let items1 = [key10009, headers[key10009]];
          let arr = items.push(items1);
          continue;
        }
        return obj;
      });
    }
    closure_3 = tmp5 + 1;
    const __NETWORK_REPORTER__ = global.__NETWORK_REPORTER__;
    let devToolsRequestId;
    if (__NETWORK_REPORTER__ != null) {
      devToolsRequestId = __NETWORK_REPORTER__.createDevToolsRequestId();
    }
    let items = [];
    const sendRequest = NetworkingDefault.sendRequest;
    NetworkingDefault;
    for (const key10028 in obj) {
      let items1 = [key10028, obj[key10028]];
      let arr = items.push(items1);
      continue;
    }
    obj = { trackingName, devToolsRequestId };
    let merged = Object.assign(tmp3);
    sendRequest(arg0, arg2, +closure_3, items, obj, arg5, arg6, arg7, arg9);
    fn(+closure_3);
  },
  abortRequest(_requestId) {
    const obj = NetworkingDefault;
    obj.abortRequest(_requestId);
  },
  clearCookies(arg0) {
    const obj = NetworkingDefault;
    obj.clearCookies(arg0);
  },
};
