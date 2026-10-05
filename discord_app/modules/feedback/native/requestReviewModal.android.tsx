// discord_app/modules/feedback/native/requestReviewModal.android.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppRatingRequestModule.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c4, c5, closure_2;

let obj = function _requestReviewModal() {
  let logger;
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            const _HermesInternal2 = HermesInternal;
            logger.info("Requesting Android rating (module linked: " + null != react_nativeDefault + ")");
            const obj8 = react_nativeDefault;
            let rating;
            if (obj8 != null) {
              rating = obj8.requestRating();
            }
            c4 = 2;
            c5 = 1;
            const obj4 = { value: rating, done: false };
            return obj4;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const _HermesInternal = HermesInternal;
          closure_129_3.error("Failed to show Android rating request: " + closure_0);
          const obj5 = { ok: false, error: String(closure_0) };
          const _String = String;
          c5 = 3;
          const obj6 = { value: obj5, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_129_3.info("Android rating request dispatched");
          c3 = 0;
          c5 = 3;
          obj = { value: { ok: true }, done: true };
          return obj;
        }
      } catch (tmp17) {
        closure_2 = tmp17;
        if (0 === c3) {
          c5 = 3;
          throw tmp17;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = new LoggerDefault("requestReviewModal");
new LoggerDefault("requestReviewModal");
const result = size.fileFinishedImporting("modules/feedback/native/requestReviewModal.android.tsx");

export default function requestReviewModal() {
  return obj(...arguments);
}
