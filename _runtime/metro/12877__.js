// === Module 12877: ? ===

// Module 12877
import extractRequestData from "extractRequestData" /* 12878 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import setupIntegration from "module_12853" /* 12853 */;

let closure_4 = ["ip", "user"];
let obj = { include: { cookies: true, data: true, headers: true, ip: false, query_string: true, url: true, user: { id: true, username: true, email: true } }, transactionNamingScheme: "methodPath" };

export const requestDataIntegration = setupIntegration.defineIntegration(() => {
  if (include === undefined) {
    include = {};
  }
  include = {};
  const merged = Object.assign(include);
  const merged1 = Object.assign(include);
  include = {};
  const merged2 = Object.assign(include.include);
  const merged3 = Object.assign(include.include);
  if (include.include) {
    if (typeof include.include.user === "boolean") {
      let user = include.include.user;
    }
    include.user = user;
    include.include = include;
    const obj1 = {
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
            include.request = tmp15;
            include.transaction = include.transactionNamingScheme;
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
            const obj3 = extractRequestData;
            obj = { ipAddress: tmp5, user };
            const result = obj3.addNormalizedRequestDataToEvent(sdkProcessingMetadata, normalizedRequest, obj, tmp);
            return sdkProcessingMetadata;
          } else {
            let result1 = sdkProcessingMetadata;
            if (request) {
              result1 = extractRequestData.addRequestDataToEvent(sdkProcessingMetadata, request, tmp);
            }
            return result1;
          }
        }
    };
    return obj1;
  }
  user = {};
  const merged4 = Object.assign(include.include.user);
  const merged5 = Object.assign(include.include || {}.user);
});