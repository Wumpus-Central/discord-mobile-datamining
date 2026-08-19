// === Module 6303: AgeVerificationWebViewScreen ===

// Module 6303 (AgeVerificationWebViewScreen)
import timestampDefault from "timestamp" /* 3 */;
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AGE_VERIFICATION_MODAL_KEY as closure_6 } from "set" /* 5427 */;
import AGE_VERIFICATION_INCODE_PATH from "AGE_VERIFICATION_INCODE_PATH" /* 5429 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ AgeVerificationIncodeResultStatus: error, buildIncodeFallbackSessionInjection: closure_8, parseIncodeWebViewMessage: c9 } = AGE_VERIFICATION_INCODE_PATH);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = new timestampDefault("AgeVerificationWebViewScreen");
createCacheKey = { container: null, loadingOverlay: null, webView: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
const tmp4 = new timestampDefault("AgeVerificationWebViewScreen");
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const obj2 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default function AgeVerificationWebViewScreen(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  let ref;
  let React;
  closure_5 = undefined;
  c6 = undefined;
  let callback;
  let callback1;
  let callback3;
  let memo;
  ref = React.useRef(null);
  React = React.useRef(false);
  closure_5 = React.useRef(false);
  [tmp3, c6] = ref(React.useState(true), 2);
  callback = React.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      _undefined(false);
    }
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!ref.current) {
        closure_1_12.warn("WebView initial load timed out", { timeoutMs: 15000 });
      }
      callback();
    }, 15000);
    return () => clearTimeout(closure_0);
  }, items);
  const items1 = [onComplete, onClose];
  callback1 = React.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onComplete();
      onClose();
    }
  }, items1);
  const items2 = [callback1];
  const callback2 = React.useCallback(() => {
    let isModalOpenResult = webviewUrl(onClose[9]).isModalOpen(c6);
    if (isModalOpenResult) {
      isModalOpenResult = webviewUrl(onClose[10]).isAgeVerified();
      const tmpResult = webviewUrl(onClose[10]);
    }
    if (isModalOpenResult) {
      callback1();
    }
  }, items2);
  let obj = webviewUrl(onClose[10]);
  const watchAgeVerificationStatusChange = obj.useWatchAgeVerificationStatusChange(callback2);
  callback3 = React.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.injectJavaScript(callback1(arg0));
    }
  }, []);
  const items3 = [callback1, callback3, onClose];
  const items4 = [webviewUrl];
  const callback4 = React.useCallback((nativeEvent) => {
    try {
      const tmp3 = callback3(nativeEvent.nativeEvent.data);
      if (null != tmp3) {
        if ("capture_complete" === tmp4.kind) {
          const result = webviewUrl(onClose[11]).registerIncodeInterview(tmp3.interviewId);
          const obj3 = webviewUrl(onClose[11]);
          result.then(() => {
            const current = ref.current;
            let isAgeVerifiedResult = !current;
            if (!current) {
              isAgeVerifiedResult = closure_1_0(closure_1_2[10]).isAgeVerified();
              const obj = closure_1_0(closure_1_2[10]);
            }
            if (isAgeVerifiedResult) {
              callback2();
            }
          }).catch((error) => {
            closure_1_12.warn("Failed to register Incode interview from WebView", { error });
            if (!ref.current) {
              tmp2.current = true;
              callback();
            }
          });
        } else if ("fallback_request" === tmp4.kind) {
          let obj = webviewUrl(onClose[11]);
          obj = { previousInterviewId: null };
          obj[0] = tmp4.previousInterviewId;
          const incodeSessionBootstrap = obj.requestIncodeSessionBootstrap(obj);
          incodeSessionBootstrap.then((incode_parameters) => {
            incode_parameters = incode_parameters.incode_parameters;
            let session_token;
            if (incode_parameters != null) {
              session_token = incode_parameters.session_token;
            }
            if (null != session_token) {
              if (null != incode_parameters.interview_id) {
                const obj = { sessionToken: null, interviewId: null };
                ({ session_token: obj[0], interview_id: obj[1] } = incode_parameters);
                callback3(obj);
              }
            }
            callback3({ error: true });
          }).catch((error) => {
            closure_1_12.warn("Failed to bootstrap Incode fallback session from WebView", { error });
            callback3({ error: true });
          });
        } else if (tmp4.status === callback.COMPLETED) {
          callback1();
        } else if (!ref.current) {
          tmp8.current = true;
          onClose();
        }
      }
    } catch (tmp20) {
      obj = { error: null };
      obj[0] = tmp20;
      closure_1_12.warn("Failed to parse WebView message", obj);
    }
  }, items3);
  memo = React.useMemo(() => {
    const uRL = new URL(webviewUrl);
    return uRL.origin;
  }, items4);
  const items5 = [memo];
  const callback5 = React.useCallback((isTopFrame) => {
    if (null != isTopFrame.isTopFrame) {
      if (!isTopFrame.isTopFrame) {
        return true;
      }
    }
    try {
      const _URL = URL;
      const uRL = new URL(isTopFrame.url);
      let flag2 = uRL.origin === memo;
      if (!flag2) {
        onComplete(onClose[12]).openURL(isTopFrame.url);
        flag2 = false;
        const obj = onComplete(onClose[12]);
      }
      return flag2;
    } catch (err) {
    }
  }, items5);
  const tmp15 = callback();
  obj = { style: tmp15.container, children: null };
  obj = { ref, allowsInlineMediaPlayback: true, mediaCapturePermissionGrantType: "grant", javaScriptEnabled: true, source: { uri: webviewUrl }, onShouldStartLoadWithRequest: null, onMessage: null, onError: null, onLoadEnd: null, injectedJavaScriptBeforeContentLoaded: null, style: null, containerStyle: null };
  const tmp16 = closure_11;
  const tmp2 = ref(React.useState(true), 2);
  const tmp8 = webviewUrl;
  const tmp9 = onClose;
  const tmp19 = onComplete(onClose[13]);
  let tmp20;
  if (obj4.isIOS()) {
    tmp20 = callback5;
  }
  obj[5] = tmp20;
  obj[6] = callback4;
  obj[7] = function onError(code) {
    closure_1_12.warn("WebView load error", { code: code.nativeEvent.code });
    callback();
  };
  obj[8] = function onLoadEnd() {
    callback();
  };
  obj[9] = webviewUrl.injectedJavaScriptBeforeContentLoaded;
  ({ webView: obj3[10], webView: obj3[11] } = tmp15);
  const items6 = [memo(tmp19, obj), ];
  if (tmp18Result) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp15.loadingOverlay;
    obj1[1] = tmp18(tmp8(tmp9[15]).ActivityIndicator, {});
    tmp18Result = tmp18(tmp17, obj1);
  }
  items6[1] = tmp18Result;
  obj[1] = items6;
  return tmp16(closure_5, obj);
};