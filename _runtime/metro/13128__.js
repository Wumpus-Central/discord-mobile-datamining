// === Module 13128: ? ===

// Module 13128
import extractRequestData from "extractRequestData" /* 13129 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import setupIntegration from "module_13104" /* 13104 */;

let closure_4 = ["ip", "user"];
let obj = { include: { cookies: true, data: true, headers: true, ip: false, query_string: true, url: true, user: { id: true, username: true, email: true } }, transactionNamingScheme: "methodPath" };

export const requestDataIntegration = setupIntegration.defineIntegration(() => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(obj);
  let obj3 = {};
  const merged2 = Object.assign(obj.include);
  const merged3 = Object.assign(obj.include);
  if (obj.include) {
    if (typeof obj.include.user === "boolean") {
      let user = obj.include.user;
    }
    obj3.user = user;
    obj2.include = obj3;
    const obj4 = {
      name: "RequestData",
      processEvent(sdkProcessingMetadata) {
          let prop = sdkProcessingMetadata.sdkProcessingMetadata;
          if (undefined === prop) {
            prop = {};
          }
          ({ request, normalizedRequest } = prop);
          const tmp = (function convertReqDataIntegrationOptsToAddReqDataOpts(include) {
            include = include.include;
            const user = include.user;
            const items = ["method"];
            const entries = Object.entries(closure_1_3(include, closure_1_4));
            while (tmp2 !== undefined) {
              let tmp5 = closure_1_2(tmp3, 2);
              let first = tmp5[0];
              if (tmp5[1]) {
                let arr = items.push(first);
              }
              continue;
            }
            let flag = true;
            if (undefined !== user) {
              flag = user;
              if (typeof user !== "boolean") {
                const items1 = [];
                const _Object = Object;
                const entries1 = Object.entries(user);
                flag = items1;
                for (const item10032 of entries1) {
                  let tmp11 = closure_1_2(item10032, 2);
                  let first1 = tmp11[0];
                  if (tmp11[1]) {
                    let arr2 = items1.push(first1);
                  }
                  continue;
                }
              }
            }
            const include2 = { ip: include.ip, user: flag, request: null, transaction: null };
            let tmp15;
            if (0 !== items.length) {
              tmp15 = items;
            }
            include2.request = tmp15;
            include2.transaction = include.transactionNamingScheme;
            return { include: include2 };
          })(obj2);
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
            const obj3 = extractRequestData;
            obj = { ipAddress: tmp5, user };
            const result = obj3.addNormalizedRequestDataToEvent(sdkProcessingMetadata, normalizedRequest, obj, tmp);
            return sdkProcessingMetadata;
          } else {
            let result1 = sdkProcessingMetadata;
            if (request) {
              obj2 = extractRequestData;
              result1 = obj2.addRequestDataToEvent(sdkProcessingMetadata, request, tmp);
            }
            return result1;
          }
        }
    };
    return obj4;
  }
  user = {};
  const merged4 = Object.assign(obj.include.user);
  const merged5 = Object.assign(obj.include || {}.user);
});