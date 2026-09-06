// === Module 11495: IosAttributionSignRequest ===

// Module 11495 (IosAttributionSignRequest)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _fetchIosAttributionSignedPayloads(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          ({ metadataSealed: closure_130_0, impressionId: closure_130_1, specs: closure_130_2, signal: closure_130_3 } = closure_0);
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[2]).HTTP;
          const request = { url: closure_131_4.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD, body: null, failImmediatelyWhenRateLimited: true, rejectWithError: true, timeout: 5000, signal: null };
          let obj2 = { metadata_sealed: closure_130_0, impression_id: closure_130_1, specs: closure_130_2 };
          request.body = obj2;
          request.signal = closure_130_3;
          c6 = 3;
          c7 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (2 === tmp8) {
        c5 = 0;
        closure_130_4 = closure_4;
        obj2 = closure_131_1(closure_131_2[3]);
        const obj4 = { tags: { app_context: "ios_attribution" } };
        obj2.captureException(closure_130_4, obj4);
        c7 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const payloads = value.body.payloads;
        value = payloads;
        if (payloads == null) {
          value = null;
        }
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp18) {
      closure_4 = tmp18;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp18;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionSignRequest.tsx");

export const fetchIosAttributionSignedPayloads = function fetchIosAttributionSignedPayloads() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};