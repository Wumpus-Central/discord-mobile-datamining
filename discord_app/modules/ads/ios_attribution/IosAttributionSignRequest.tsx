// discord_app/modules/ads/ios_attribution/IosAttributionSignRequest.tsx
import Constants from "../../../Constants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c6, c7, closure_4, metadata_sealed;

let obj = function _fetchIosAttributionSignedPayloads() {
  obj = _asyncToGenerator(async (metadata_sealed) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj6;
    let tmp5;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (metadata_sealed === 1) {
        throw value;
      } else if (metadata_sealed === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let impression_id;
        let specs;
        let signal;
        c7 = 2;
        if (0 === c6) {
          if (metadata_sealed === 1) {
            c7 = 3;
            throw value;
          } else if (metadata_sealed === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp5;
            metadata_sealed = undefined;
            impression_id = undefined;
            specs = undefined;
            signal = undefined;
            ({ metadataSealed: c0, impressionId: c1, specs: c2, signal: c3 } = closure_0);
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c6) {
          if (metadata_sealed === 1) {
            c7 = 3;
            throw value;
          } else if (metadata_sealed === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 1;
            const HTTP = closure_131_0(closure_131_2[2]).HTTP;
            const request = {
              url: closure_131_4.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD,
              body: obj6,
              failImmediatelyWhenRateLimited: true,
              rejectWithError: true,
              timeout: 5000,
              signal,
            };
            obj6 = { metadata_sealed, impression_id, specs };
            c6 = 3;
            c7 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
        } else if (2 === c6) {
          c5 = 0;
          tmp5 = closure_4;
          const obj8 = { tags: { app_context: "ios_attribution" } };
          const obj3 = closure_131_1(closure_131_2[3]);
          obj3.captureException(closure_4, obj8);
          c7 = 3;
          return { value: null, done: true };
        } else if (metadata_sealed === 1) {
          c7 = 3;
          throw value;
        } else if (metadata_sealed === 2) {
          c5 = 0;
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const payloads = value.body.payloads;
          impression_id = payloads;
          if (payloads == null) {
            impression_id = null;
          }
          tmp5 = impression_id;
          c5 = 0;
          c7 = 3;
          obj = { value: tmp5, done: true };
          return obj;
        }
      } catch (tmp14) {
        closure_4 = tmp14;
        if (0 === c5) {
          c7 = 3;
          throw tmp14;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionSignRequest.tsx");

export const fetchIosAttributionSignedPayloads = function fetchIosAttributionSignedPayloads() {
  return obj(...arguments);
};
