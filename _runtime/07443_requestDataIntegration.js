// === Module 7443: requestDataIntegration ===

// Module 7443 (requestDataIntegration)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import setupIntegration from "setupIntegration";

let closure_4 = ["ip", "user"];
let closure_5 = { include: { cookies: true, data: true, headers: true, ip: false, query_string: true, url: true, user: { id: true, username: true, email: true } }, transactionNamingScheme: "methodPath" };

export const requestDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = undefined;
  obj = {};
  const merged = Object.assign(include);
  const merged1 = Object.assign(obj);
  obj = {};
  const merged2 = Object.assign(include.include);
  const merged3 = Object.assign(obj.include);
  if (obj.include) {
    if (typeof obj.include.user === "T") {
      let user = obj.include.user;
    }
    obj.user = user;
    obj.include = obj;
    const obj1 = { name: "RequestData", processEvent: null };
    obj1[1] = function processEvent(sdkProcessingMetadata) {
      let normalizedRequest;
      let request;
      let prop = sdkProcessingMetadata.sdkProcessingMetadata;
      if (undefined === prop) {
        prop = {};
      }
      ({ request, normalizedRequest } = prop);
      const tmp = (function convertReqDataIntegrationOptsToAddReqDataOpts(include) {
        include = include.include;
        const user = include.user;
        const items = ["method"];
        const entries = Object.entries(callback2(include, closure_4));
        while (tmp2 !== undefined) {
          let tmp4 = callback;
          let tmp5 = callback(tmp3, 2);
          let first = tmp5[0];
          if (tmp5[1]) {
            let tmp7 = first;
            let arr = items.push(first);
          }
          continue;
        }
        let flag = true;
        if (undefined !== user) {
          flag = user;
          if (typeof user !== "T") {
            const items1 = [];
            const _Object = Object;
            const entries1 = Object.entries(user);
            flag = items1;
            for (const item10032 of entries1) {
              let tmp10 = callback;
              let tmp11 = callback(item10032, 2);
              let first1 = tmp11[0];
              if (tmp11[1]) {
                let tmp13 = first1;
                arr = items1.push(first1);
              }
              continue;
            }
          }
        }
        include = { ip: include.ip, user: flag, request: null, transaction: null };
        let tmp15;
        if (0 !== items.length) {
          tmp15 = items;
        }
        include[2] = tmp15;
        include[3] = include.transactionNamingScheme;
        return { include };
      })(obj);
      if (normalizedRequest) {
        let tmp5;
        if (request) {
          let ip = request.ip;
          if (!ip) {
            ip = request.socket && request.socket.remoteAddress;
            const tmp6 = request.socket && request.socket.remoteAddress;
          }
          tmp5 = ip;
        }
        let user;
        if (request) {
          user = request.user;
        }
        const obj3 = obj(outer1_1[2]);
        obj = { ipAddress: null, user: null };
        obj[0] = tmp5;
        obj[1] = user;
        const result = obj3.addNormalizedRequestDataToEvent(sdkProcessingMetadata, normalizedRequest, obj, tmp);
        return sdkProcessingMetadata;
      } else {
        let result1 = sdkProcessingMetadata;
        if (request) {
          result1 = obj(outer1_1[2]).addRequestDataToEvent(sdkProcessingMetadata, request, tmp);
          const obj2 = obj(outer1_1[2]);
        }
        return result1;
      }
    };
    return obj1;
  }
  user = {};
  const merged4 = Object.assign(include.include.user);
  const merged5 = Object.assign(obj.include || {}.user);
});