// discord_app/modules/ads/ios_attribution/IosAttributionSignRequest.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../../Constants.tsx";

const require = arg1;
function _fetchIosAttributionSignedPayloads() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function* (arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              c3 = tmp3;
              dependencyMap = tmp5;
              let callback;
              let callback2;
              dependencyMap = undefined;
              c3 = undefined;
              ({ metadataSealed: c0, impressionId: c1, specs: c2, signal: c3 } = callback);
              c6 = 1;
              c7 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              c5 = 1;
              const HTTP = callback(1272).HTTP;
              let obj2 = {
                url: null,
                body: null,
                failImmediatelyWhenRateLimited: true,
                rejectWithError: true,
                timeout: 5000,
                signal: null,
              };
              obj2[0] = constants.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD;
              const obj3 = { metadata_sealed: null, impression_id: null, specs: null };
              obj3[0] = callback;
              obj3[1] = callback2;
              obj3[2] = dependencyMap;
              obj2[1] = obj3;
              obj2[5] = c3;
              c6 = 3;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (2 === tmp8) {
            c5 = 0;
            obj2 = callback2(1232);
            const obj5 = { tags: null };
            obj5[0] = { app_context: "ios_attribution" };
            obj2.captureException(constants, obj5);
            c7 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            const payloads = body.body.payloads;
            callback2 = payloads;
            if (payloads == null) {
              callback2 = null;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = callback2;
            return obj;
          }
        } catch (tmp18) {
          constants = tmp18;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp18;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/ads/ios_attribution/IosAttributionSignRequest.tsx");

export const fetchIosAttributionSignedPayloads = function fetchIosAttributionSignedPayloads(arg0) {
  const self = this;
  const apply = _fetchIosAttributionSignedPayloads.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
