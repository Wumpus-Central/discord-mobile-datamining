// _runtime/00780_requestDataIntegration.js
import _mod781 from "metro/00781__.js";
import _mod782 from "metro/00782__.js";
import setupIntegration from "00752_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { cookies: true, data: true, headers: true, query_string: true, url: true };

export const requestDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {};
  let merged = Object.assign(closure_2);
  let merged1 = Object.assign(obj.include);
  return {
    name: "RequestData",
    processEvent(sdkProcessingMetadata, arg1, getOptions) {
      let prop = sdkProcessingMetadata.sdkProcessingMetadata;
      if (undefined === prop) {
        prop = {};
      }
      const normalizedRequest = prop.normalizedRequest;
      const obj = {};
      const merged = Object.assign(obj2);
      let sendDefaultPii = obj2.ip;
      if (sendDefaultPii == null) {
        sendDefaultPii = getOptions.getOptions().sendDefaultPii;
      }
      obj.ip = sendDefaultPii;
      if (normalizedRequest) {
        obj2 = {};
        const merged1 = Object.assign(sdkProcessingMetadata.request);
        const obj3 = {};
        const obj4 = {};
        const merged2 = Object.assign(normalizedRequest.headers);
        if (obj.headers) {
          obj3.headers = obj4;
          if (!obj.cookies) {
            delete tmp2[tmp];
          }
          if (!obj.ip) {
            const ipHeaderNames = _mod781.ipHeaderNames;
            const item = ipHeaderNames.forEach((item) => {
              delete tmp2[tmp];
            });
          }
        }
        obj3.method = normalizedRequest.method;
        if (obj.url) {
          obj3.url = normalizedRequest.url;
        }
        if (obj.cookies) {
          let cookies = normalizedRequest.cookies;
          if (!cookies) {
            let parseCookieResult;
            if (obj4.cookie) {
              parseCookieResult = _mod782.parseCookie(obj4.cookie);
            }
            cookies = parseCookieResult;
          }
          if (!cookies) {
            cookies = {};
          }
          obj3.cookies = cookies;
        }
        if (obj.query_string) {
          obj3.query_string = normalizedRequest.query_string;
        }
        if (obj.data) {
          obj3.data = normalizedRequest.data;
        }
        const merged3 = Object.assign(obj3);
        sdkProcessingMetadata.request = obj2;
        if (obj.ip) {
          let ipAddress = normalizedRequest.headers;
          if (ipAddress) {
            ipAddress = _mod781.getClientIPAddress(normalizedRequest.headers);
          }
          if (!ipAddress) {
            ipAddress = prop.ipAddress;
          }
          if (ipAddress) {
            const obj5 = {};
            const merged4 = Object.assign(sdkProcessingMetadata.user);
            obj5.ip_address = ipAddress;
            sdkProcessingMetadata.user = obj5;
          }
        }
      }
      return sdkProcessingMetadata;
    },
  };
});
