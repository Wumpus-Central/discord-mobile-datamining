// discord_app/modules/feedback/native/requestReviewModal.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import NativeAppRatingRequestModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppRatingRequestModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_6 = async function _showAndroidRatingRequest(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          const _HermesInternal2 = HermesInternal;
          logger.info("Requesting Android rating (module linked: " + null != NativeAppRatingRequestModuleDefault + ")");
          const obj8 = NativeAppRatingRequestModuleDefault;
          let rating;
          if (obj8 != null) {
            rating = obj8.requestRating();
          }
          c4 = 2;
          c5 = 1;
          const obj1 = { value: rating, done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const _HermesInternal = HermesInternal;
        closure_129_5.error("Failed to show Android rating request: " + closure_128_0);
        const obj2 = { ok: false, error: null };
        const _String = String;
        obj2.error = String(closure_128_0);
        c5 = 3;
        const obj3 = { value: obj2, done: true };
        return obj3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_5.info("Android rating request dispatched");
        c3 = 0;
        c5 = 3;
        obj = { value: { ok: true }, done: true };
        return obj;
      }
    } catch (tmp20) {
      closure_2 = tmp20;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp20;
      } else {
        c4 = tmp;
      }
    }
  }
};
const NativeModules = fn(17).NativeModules;
let closure_5 = new LoggerDefault("requestReviewModal");
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/native/requestReviewModal.tsx");

export default function requestReviewModal() {
  if (obj.isAndroid()) {
    let resolved = (function showAndroidRatingRequest() {
      const self = this;
      const apply = closure_1_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  } else {
    const AppStoreManager = NativeModules.AppStoreManager;
    const review = AppStoreManager.requestReview();
    resolved = Promise.resolve({ ok: true });
  }
  return resolved;
}
