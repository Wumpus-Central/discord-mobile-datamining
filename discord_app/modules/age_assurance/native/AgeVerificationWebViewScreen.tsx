// === Module 6761: AgeVerificationWebViewScreen ===

// Module 6761 (AgeVerificationWebViewScreen)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { AGE_VERIFICATION_MODAL_KEY as closure_6 } from "set";
import AGE_VERIFICATION_INCODE_PATH from "AGE_VERIFICATION_INCODE_PATH";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AgeVerificationIncodeResultStatus: error, buildIncodeFallbackSessionInjection: metroImportAll, parseIncodeWebViewMessage: c9 } = AGE_VERIFICATION_INCODE_PATH);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = new require("set")("AgeVerificationWebViewScreen");
createCacheKey = { container: null, loadingOverlay: null, webView: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
const tmp4 = new require("set")("AgeVerificationWebViewScreen");
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default function AgeVerificationWebViewScreen(injectedJavaScriptBeforeContentLoaded) {
  let c6;
  let tmp3;
  const webviewUrl = injectedJavaScriptBeforeContentLoaded.webviewUrl;
  const onComplete = injectedJavaScriptBeforeContentLoaded.onComplete;
  const onClose = injectedJavaScriptBeforeContentLoaded.onClose;
  let ref;
  let React;
  let closure_5;
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
        outer1_12.warn("WebView initial load timed out", { timeoutMs: 15000 });
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
              isAgeVerifiedResult = outer1_0(outer1_2[10]).isAgeVerified();
              const obj = outer1_0(outer1_2[10]);
            }
            if (isAgeVerifiedResult) {
              callback();
            }
          }).catch((error) => {
            logger.warn("Failed to register Incode interview from WebView", { error });
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
                callback2(obj);
              }
            }
            callback2({ error: true });
          }).catch((error) => {
            outer1_12.warn("Failed to bootstrap Incode fallback session from WebView", { error });
            callback2({ error: true });
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
      outer1_12.warn("Failed to parse WebView message", obj);
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
  const tmp15 = createCacheKey();
  obj = { style: tmp15.container, children: null };
  obj = {
    ref,
    allowsInlineMediaPlayback: true,
    mediaCapturePermissionGrantType: "grant",
    javaScriptEnabled: true,
    source: { uri: webviewUrl },
    onShouldStartLoadWithRequest: callback5,
    onMessage: callback4,
    onError(code) {
      outer1_12.warn("WebView load error", { code: code.nativeEvent.code });
      callback();
    },
    onLoadEnd() {
      callback();
    },
    injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded,
    style: tmp15.webView,
    containerStyle: tmp15.webView
  };
  const items6 = [memo(onComplete(onClose[13]), obj), ];
  if (tmp18Result) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp15.loadingOverlay;
    obj1[1] = tmp18(webviewUrl(onClose[14]).ActivityIndicator, {});
    tmp18Result = tmp18(tmp17, obj1);
  }
  items6[1] = tmp18Result;
  obj[1] = items6;
  return closure_11(closure_5, obj);
};