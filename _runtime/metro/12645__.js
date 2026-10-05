// === Module 12645: ? ===

// Module 12645
import DEFAULT_USER_INCLUDES from "DEFAULT_USER_INCLUDES" /* 12646 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import module_12621 from "module_12621" /* 12621 */;

let closure_4 = ["ip", "user"];
let obj = { include: { cookies: true, data: true, headers: true, ip: false, query_string: true, url: true, user: { id: true, username: true, email: true } }, transactionNamingScheme: "methodPath" };

export const requestDataIntegration = module_12621.defineIntegration(() => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {};
  let tmp = obj;
  const merged = Object.assign(obj);
  const merged1 = Object.assign(obj);
  let obj3 = {};
  const merged2 = Object.assign(obj.include);
  const merged3 = Object.assign(obj.include);
  if (obj.include) {
    let user;
    if (typeof obj.include.user === "boolean") {
      user = obj.include.user;
    }
    obj3.user = user;
    obj2.include = obj3;
    return {
      name: "RequestData",
      processEvent(sdkProcessingMetadata) {
          let normalizedRequest;
          let request;
          function convertReqDataIntegrationOptsToAddReqDataOpts(include) {
            let tmp15;
            include = include.include;
            const user = include.user;
            const transactionNamingScheme = include.transactionNamingScheme;
            const ip = include.ip;
            const items = ["method"];
            const entries = Object.entries(closure_1_3(include, closure_1_4));
            const tmp2 = entries[Symbol.iterator]();
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
            const include2 = { ip, user: flag, request: tmp15, transaction: transactionNamingScheme };
            tmp15 = undefined;
            if (0 !== items.length) {
              tmp15 = items;
            }
            return { include: include2 };
          }
          let prop = sdkProcessingMetadata.sdkProcessingMetadata;
          if (undefined === prop) {
            prop = {};
          }
          ({ request, normalizedRequest } = prop);
          const tmp = convertReqDataIntegrationOptsToAddReqDataOpts(obj2);
          if (normalizedRequest) {
            let tmp5;
            if (request) {
              let ip = request.ip;
              if (!ip) {
                ip = request.socket && request.socket.remoteAddress;
              }
              tmp5 = ip;
            }
            let user;
            if (request) {
              user = request.user;
            }
            obj = { ipAddress: tmp5, user };
            let tmp11 = sdkProcessingMetadata;
            let tmp13 = obj;
            const obj3 = DEFAULT_USER_INCLUDES;
            const result = obj3.addNormalizedRequestDataToEvent(sdkProcessingMetadata, normalizedRequest, obj, tmp);
            return sdkProcessingMetadata;
          } else {
            let result1 = sdkProcessingMetadata;
            if (request) {
              obj2 = DEFAULT_USER_INCLUDES;
              result1 = obj2.addRequestDataToEvent(sdkProcessingMetadata, request, tmp);
            }
            return result1;
          }
        }
    };
  }
  user = {};
  const merged4 = Object.assign(tmp.include.user);
  let tmp7 = obj.include || {};
  const merged5 = Object.assign(tmp7.user);
});