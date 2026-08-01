// === Module 915: requestDataIntegration ===

// Module 915 (requestDataIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { cookies: true, data: true, headers: true, query_string: true, url: true };

export const requestDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = undefined;
  obj = {};
  let merged = Object.assign(closure_2);
  let merged1 = Object.assign(obj.include);
  obj = {
    name: "RequestData",
    processEvent(sdkProcessingMetadata, arg1, getOptions) {
      let prop = sdkProcessingMetadata.sdkProcessingMetadata;
      if (undefined === prop) {
        prop = {};
      }
      const normalizedRequest = prop.normalizedRequest;
      let obj = {};
      const merged = Object.assign(obj2);
      let sendDefaultPii = obj2.ip;
      if (sendDefaultPii == null) {
        sendDefaultPii = getOptions.getOptions().sendDefaultPii;
      }
      obj.ip = sendDefaultPii;
      if (normalizedRequest) {
        obj = {};
        const merged1 = Object.assign(sdkProcessingMetadata.request);
        obj2 = undefined;
        const obj1 = {};
        obj2 = {};
        const merged2 = Object.assign(normalizedRequest.headers);
        if (obj.headers) {
          obj1.headers = obj2;
          if (!obj.cookies) {
            delete tmp2[tmp];
          }
          if (!obj.ip) {
            const ipHeaderNames = obj(outer1_1[1]).ipHeaderNames;
            const item = ipHeaderNames.forEach((arg0) => {
              delete tmp2[tmp];
            });
          }
        }
        obj1.method = normalizedRequest.method;
        if (obj.url) {
          obj1.url = normalizedRequest.url;
        }
        if (obj.cookies) {
          let cookies = normalizedRequest.cookies;
          if (!cookies) {
            let parseCookieResult;
            if (obj2.cookie) {
              parseCookieResult = obj(outer1_1[2]).parseCookie(obj2.cookie);
              const obj7 = obj(outer1_1[2]);
            }
            cookies = parseCookieResult;
          }
          if (!cookies) {
            cookies = {};
          }
          obj1.cookies = cookies;
        }
        if (obj.query_string) {
          obj1.query_string = normalizedRequest.query_string;
        }
        if (obj.data) {
          obj1.data = normalizedRequest.data;
        }
        const merged3 = Object.assign(obj1);
        sdkProcessingMetadata.request = obj;
        if (obj.ip) {
          let ipAddress = normalizedRequest.headers;
          if (ipAddress) {
            ipAddress = obj(outer1_1[1]).getClientIPAddress(normalizedRequest.headers);
            const obj8 = obj(outer1_1[1]);
          }
          if (!ipAddress) {
            ipAddress = prop.ipAddress;
          }
          if (ipAddress) {
            const obj3 = {};
            const merged4 = Object.assign(sdkProcessingMetadata.user);
            obj3.ip_address = ipAddress;
            sdkProcessingMetadata.user = obj3;
          }
        }
      }
      return sdkProcessingMetadata;
    }
  };
  return obj;
});