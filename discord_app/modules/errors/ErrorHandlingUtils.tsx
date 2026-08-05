import { SentryUtils.native } from "../../utils/SentryUtils.native.tsx";
// discord_app/modules/errors/ErrorHandlingUtils.tsx
import set from "set";

const items = [, , ];
({ UNAUTHORIZED: arr[0], EMAIL_VERIFICATION_REQUIRED: arr[1], USER_BANNED: arr[2] } = require("ME").AbortCodes);
let set = new Set([500, 502, 503, 504]);
const set1 = new Set([401, 403, 405, 409, 429]);
const result = set.fileFinishedImporting("modules/errors/ErrorHandlingUtils.tsx");

export const captureOrIgnoreApiError = function captureOrIgnoreApiError(aPIError) {
  let tmp = null == aPIError;
  if (!tmp) {
    let flag = false;
    if (null != aPIError) {
      let cause;
      if (aPIError != null) {
        cause = aPIError.cause;
      }
      let crossDomain;
      if (cause != null) {
        crossDomain = cause.crossDomain;
      }
      let tmp4 = true === crossDomain;
      if (!tmp4) {
        let tmp5 = !("status" in aPIError) || typeof aPIError.status !== "number";
        if (!tmp5) {
          let tmp6 = 0 !== aPIError.status;
          if (tmp6) {
            tmp6 = !set.has(aPIError.status);
          }
          if (tmp6) {
            tmp6 = !set1.has(aPIError.status);
          }
          tmp5 = tmp6;
        }
        let tmp9 = !tmp5;
        if (tmp5) {
          let tmp10 = !("code" in aPIError) || typeof aPIError.code !== "number";
          if (!tmp10) {
            tmp10 = !items.includes(aPIError.code);
          }
          let tmp12 = !tmp10;
          if (tmp10) {
            let hasItem = "body" in aPIError && null != aPIError.body && typeof aPIError.body === "object" && "code" in aPIError.body;
            if (hasItem) {
              const body = aPIError.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              hasItem = typeof code === "number";
            }
            if (hasItem) {
              hasItem = items.includes(aPIError.body.code);
            }
            tmp12 = hasItem;
          }
          tmp9 = tmp12;
        }
        tmp4 = tmp9;
      }
      flag = tmp4;
    }
    tmp = flag;
  }
  if (!tmp) {
    SentryUtils.native.captureException(aPIError);
    const obj = SentryUtils.native;
  }
};