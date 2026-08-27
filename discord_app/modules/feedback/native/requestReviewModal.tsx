// === Module 13263: _showAndroidRatingRequest ===

// Module 13263 (_showAndroidRatingRequest)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;

const require = arg1;
function _showAndroidRatingRequest() {
  const self = this;
  const tmp = callback(function*() {
    if (logger === 2) {
      logger = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        logger = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            c3 = 1;
            const _HermesInternal2 = HermesInternal;
            logger.info("Requesting Android rating (module linked: " + null != closure_1_1(closure_1_2[3]) + ")");
            const obj8 = closure_1_1(closure_1_2[3]);
            let rating;
            if (obj8 != null) {
              rating = obj8.requestRating();
            }
            c4 = 2;
            logger = 1;
            obj1 = { value: null, done: false };
            obj1[0] = rating;
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_0 = closure_2;
          const _HermesInternal = HermesInternal;
          logger.error("Failed to show Android rating request: " + closure_0);
          const obj2 = { ok: false, error: null };
          const _String = String;
          obj2[1] = String(closure_0);
          logger = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = obj2;
          return obj3;
        } else if (arg0 === 1) {
          logger = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          logger = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          logger.info("Android rating request dispatched");
          c3 = 0;
          logger = 3;
          obj = { value: null, done: true };
          obj[0] = { ok: true };
          return obj;
        }
      } catch (tmp20) {
        closure_2 = tmp20;
        if (tmp4 === c3) {
          logger = tmp2;
          throw tmp20;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = new timestampDefault("requestReviewModal");
const tmp2 = new timestampDefault("requestReviewModal");
const result = require("set").fileFinishedImporting("modules/feedback/native/requestReviewModal.tsx");

export default function requestReviewModal() {
  if (obj.isAndroid()) {
    let resolved = (function showAndroidRatingRequest() {
      const self = this;
      const apply = closure_6.apply;
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
};