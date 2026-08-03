let c0 = "__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__";
let c1 = "Verification.Result";
let c2 = "Verification.CaptureComplete";
let c3 = "Verification.FallbackRequest";
let c4 = "__DISCORD_APPLY_INCODE_FALLBACK_SESSION__";
let obj = { COMPLETED: "completed", CANCELLED: "cancelled", ERROR: "error" };
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationIncodeWebViewConstants.tsx");

export const AGE_VERIFICATION_INCODE_PATH = "/age-verification/incode";
export const AGE_VERIFICATION_INCODE_PARAMS_KEY = "__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__";
export const AGE_VERIFICATION_INCODE_PARAMS_SCHEMA_VERSION = 2;
export const VERIFICATION_RESULT_EVENT_TYPE = "Verification.Result";
export const VERIFICATION_CAPTURE_COMPLETE_EVENT_TYPE = "Verification.CaptureComplete";
export const VERIFICATION_FALLBACK_REQUEST_EVENT_TYPE = "Verification.FallbackRequest";
export const INCODE_FALLBACK_SESSION_CALLBACK_KEY = "__DISCORD_APPLY_INCODE_FALLBACK_SESSION__";
export const AgeVerificationIncodeResultStatus = obj;
export const readInjectedIncodeParams = function readInjectedIncodeParams() {
  let apiUrl;
  let consentId;
  let interviewId;
  let method;
  let schemaVersion;
  let sessionToken;
  let theme;
  if (null != window[c0]) {
    if (typeof tmp !== "window") {
      ({ schemaVersion, apiUrl, sessionToken, consentId, interviewId, theme, method } = tmp);
      if (null == schemaVersion) {
        let tmp2 = null;
        if (typeof apiUrl !== "__FORMATJS_LISTFORMAT_DATA__") {
          tmp2 = null;
          if (typeof sessionToken !== "__FORMATJS_LISTFORMAT_DATA__") {
            tmp2 = null;
            if (typeof consentId !== "__FORMATJS_LISTFORMAT_DATA__") {
              tmp2 = null;
              if (typeof interviewId !== "__FORMATJS_LISTFORMAT_DATA__") {
                if (null == theme) {
                  const obj = { apiUrl: null, sessionToken: null, consentId: null, interviewId: null, theme: null, method: null };
                  obj[0] = apiUrl;
                  obj[1] = sessionToken;
                  obj[2] = consentId;
                  obj[3] = interviewId;
                  if (theme == null) {
                    theme = null;
                  }
                  obj[4] = theme;
                  if (method == null) {
                    method = null;
                  }
                  obj[5] = method;
                  tmp2 = obj;
                } else {
                  tmp2 = null;
                }
              }
            }
          }
        }
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
  }
  return null;
};
export const buildIncodeParamsInjection = function buildIncodeParamsInjection(arg0, arg1) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.schemaVersion = 2;
  const json = JSON.stringify(JSON.stringify(obj));
  return "if (window.location.origin === " + JSON.stringify(arg1) + ") { window." + c0 + " = JSON.parse(" + json + "); } true;";
};
export const parseIncodeWebViewMessage = function parseIncodeWebViewMessage(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let parsed = arg0;
    if (typeof arg0 !== "__FORMATJS_LISTFORMAT_DATA__") {
      const _JSON = JSON;
      parsed = JSON.parse(arg0);
    }
    let eventType;
    if (parsed != null) {
      eventType = parsed.eventType;
    }
    if (eventType === c2) {
      let tmp10 = null;
      if (typeof parsed.interviewId !== "__FORMATJS_LISTFORMAT_DATA__") {
        tmp10 = null;
        if (0 !== parsed.interviewId.length) {
          let obj = { kind: "capture_complete", interviewId: null };
          obj[1] = parsed.interviewId;
          tmp10 = obj;
        }
      }
      return tmp10;
    } else {
      let eventType1;
      if (parsed != null) {
        eventType1 = parsed.eventType;
      }
      if (eventType1 === c3) {
        let tmp9 = null;
        if (typeof parsed.previousInterviewId !== "__FORMATJS_LISTFORMAT_DATA__") {
          tmp9 = null;
          if (0 !== parsed.previousInterviewId.length) {
            obj = { kind: "fallback_request", previousInterviewId: null };
            obj[1] = parsed.previousInterviewId;
            tmp9 = obj;
          }
        }
        return tmp9;
      } else {
        let eventType2;
        if (parsed != null) {
          eventType2 = parsed.eventType;
        }
        if (eventType2 !== c1) {
          return null;
        } else {
          const status = parsed.status;
          if (status !== obj.COMPLETED) {
            if (status !== tmp7.CANCELLED) {
              let tmp8 = null;
            }
            return tmp8;
          }
          obj = { kind: "result", status: null };
          obj[1] = status;
          tmp8 = obj;
        }
      }
    }
  }
};
export const postIncodeResult = function postIncodeResult(arg0) {
  if (ReactNativeWebView != null) {
    ReactNativeWebView.postMessage(tmp);
  }
};
export const postIncodeCaptureComplete = function postIncodeCaptureComplete(arg0) {
  if (ReactNativeWebView != null) {
    ReactNativeWebView.postMessage(tmp);
  }
};
export const postIncodeFallbackRequest = function postIncodeFallbackRequest(arg0) {
  if (ReactNativeWebView != null) {
    ReactNativeWebView.postMessage(tmp);
  }
};
export const buildIncodeFallbackSessionInjection = function buildIncodeFallbackSessionInjection(arg0) {
  const json = JSON.stringify(JSON.stringify(arg0));
  return "(function(){var detail=JSON.parse(" + json + ");var key=" + JSON.stringify(c4) + ";var n=0;var apply=function(){var cb=window[key];if(typeof cb===\"function\"){cb(detail);return true;}return false;};if(apply()){return;}var id=setInterval(function(){n+=1;if(apply()||n>40){clearInterval(id);}},50);})();true;";
};