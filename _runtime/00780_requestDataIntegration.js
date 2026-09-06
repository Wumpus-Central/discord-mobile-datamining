// === Module 780: requestDataIntegration ===

// Module 780 (requestDataIntegration)
import _mod781 from "module_781" /* 781 */;
import _mod782 from "module_782" /* 782 */;
import setupIntegration from "setupIntegration" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = { cookies: true, data: true, headers: true, query_string: true, url: true };

export const requestDataIntegration = setupIntegration.defineIntegration((request) => {
  if (request === undefined) {
    request = {};
  }
  request = {};
  let merged = Object.assign(closure_2);
  let merged1 = Object.assign(request.include);
  request = {
    name: "RequestData",
    processEvent(sdkProcessingMetadata, arg1, getOptions) {
      let prop = sdkProcessingMetadata.sdkProcessingMetadata;
      if (undefined === prop) {
        prop = {};
      }
      const normalizedRequest = prop.normalizedRequest;
      request = {};
      const merged = Object.assign(request);
      let sendDefaultPii = request.ip;
      if (sendDefaultPii == null) {
        sendDefaultPii = getOptions.getOptions().sendDefaultPii;
      }
      request.ip = sendDefaultPii;
      if (normalizedRequest) {
        request = {};
        const merged1 = Object.assign(sdkProcessingMetadata.request);
        const obj1 = {};
        const obj2 = {};
        const merged2 = Object.assign(normalizedRequest.headers);
        if (request.headers) {
          obj1.headers = obj2;
          if (!request.cookies) {
            delete tmp2[tmp];
          }
          if (!request.ip) {
            const ipHeaderNames = _mod781.ipHeaderNames;
            const item = ipHeaderNames.forEach((item) => {
              delete tmp2[tmp];
            });
          }
        }
        obj1.method = normalizedRequest.method;
        if (request.url) {
          obj1.url = normalizedRequest.url;
        }
        if (request.cookies) {
          let cookies = normalizedRequest.cookies;
          if (!cookies) {
            let parseCookieResult;
            if (obj2.cookie) {
              parseCookieResult = _mod782.parseCookie(obj2.cookie);
            }
            cookies = parseCookieResult;
          }
          if (!cookies) {
            cookies = {};
          }
          obj1.cookies = cookies;
        }
        if (request.query_string) {
          obj1.query_string = normalizedRequest.query_string;
        }
        if (request.data) {
          obj1.data = normalizedRequest.data;
        }
        const merged3 = Object.assign(obj1);
        sdkProcessingMetadata.request = request;
        if (request.ip) {
          let ipAddress = normalizedRequest.headers;
          if (ipAddress) {
            ipAddress = _mod781.getClientIPAddress(normalizedRequest.headers);
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
  return request;
});