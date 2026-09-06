// === Module 8423: AgeVerificationWebViewScreen ===

// Module 8423 (AgeVerificationWebViewScreen)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4255 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 8417 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(8412).AGE_VERIFICATION_MODAL_KEY;
const AgeVerificationIncodeWebViewConstants = fn(8414);
({ AgeVerificationIncodeResultStatus: closure_7, buildIncodeFallbackSessionInjection: closure_8, parseIncodeWebViewMessage: closure_9 } = AgeVerificationIncodeWebViewConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = new LoggerDefault("AgeVerificationWebViewScreen");
fn(4560);
let createStyles = { container: null, loadingOverlay: null, webView: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.container = createStyles;
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.loadingOverlay = rect;
const tmp4 = new LoggerDefault("AgeVerificationWebViewScreen");
createStyles.webView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default function AgeVerificationWebViewScreen(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  noop = undefined;
  c6 = undefined;
  const ref = noop.useRef(null);
  noop = noop.useRef(false);
  const ref2 = noop.useRef(false);
  [tmp3, c6] = ref(noop.useState(true), 2);
  const callback = noop.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      _undefined(false);
    }
  }, []);
  const items = [callback];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!ref.current) {
        logger.warn("WebView initial load timed out", { timeoutMs: 15000 });
      }
      callback();
    }, 15000);
    return () => clearTimeout(closure_0);
  }, items);
  const items1 = [onComplete, onClose];
  const callback1 = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onComplete();
      onClose();
    }
  }, items1);
  const items2 = [callback1];
  const callback2 = noop.useCallback(() => {
    let isModalOpenResult = NavigationRouteUtils.isModalOpen(closure_6);
    if (isModalOpenResult) {
      isModalOpenResult = AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    if (isModalOpenResult) {
      callback1();
    }
  }, items2);
  let obj = webviewUrl(onClose[10]);
  const watchAgeVerificationStatusChange = obj.useWatchAgeVerificationStatusChange(callback2);
  const callback3 = noop.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.injectJavaScript(React6(arg0));
    }
  }, []);
  const items3 = [callback1, callback3, onClose];
  const items4 = [webviewUrl];
  const callback4 = noop.useCallback((nativeEvent) => {
    try {
      const tmp3 = React7(nativeEvent.nativeEvent.data);
      if (null != tmp3) {
        if ("capture_complete" === tmp4.kind) {
          const result = AgeVerificationURLActionCreators.registerIncodeInterview(tmp3.interviewId);
          result.then(() => {
            const current = ref.current;
            let isAgeVerifiedResult = !current;
            if (!current) {
              isAgeVerifiedResult = webviewUrl(onClose[10]).isAgeVerified();
              const obj = webviewUrl(onClose[10]);
            }
            if (isAgeVerifiedResult) {
              callback1();
            }
          }).catch((error) => {
            logger.warn("Failed to register Incode interview from WebView", { error });
            if (!ref.current) {
              tmp2.current = true;
              onClose();
            }
          });
        } else if ("fallback_request" === tmp4.kind) {
          let obj = AgeVerificationURLActionCreators;
          obj = { previousInterviewId: tmp4.previousInterviewId };
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
                ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                callback3(obj);
              }
            }
            callback3({ error: true });
          }).catch((error) => {
            logger.warn("Failed to bootstrap Incode fallback session from WebView", { error });
            callback3({ error: true });
          });
        } else if (tmp4.status === constants.COMPLETED) {
          callback1();
        } else if (!ref.current) {
          tmp8.current = true;
          onClose();
        }
      }
    } catch (tmp20) {
      obj = { error: tmp20 };
      logger.warn("Failed to parse WebView message", obj);
    }
  }, items3);
  const memo = noop.useMemo(() => {
    const uRL = new URL(webviewUrl);
    return uRL.origin;
  }, items4);
  const items5 = [memo];
  const callback5 = noop.useCallback((isTopFrame) => {
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
        LinkingDefault.openURL(isTopFrame.url);
        flag2 = false;
      }
      return flag2;
    } catch (err) {
    }
  }, items5);
  const tmp15 = closure_13();
  obj = { style: tmp15.container, children: null };
  obj = { ref, allowsInlineMediaPlayback: true, mediaCapturePermissionGrantType: "grant", javaScriptEnabled: true, source: { uri: webviewUrl }, onShouldStartLoadWithRequest: null, onMessage: null, onError: null, onLoadEnd: null, injectedJavaScriptBeforeContentLoaded: null, style: null, containerStyle: null };
  const tmp16 = closure_11;
  const tmp2 = ref(noop.useState(true), 2);
  const tmp8 = webviewUrl;
  const tmp9 = onClose;
  const tmp19 = onComplete(onClose[13]);
  let tmp20;
  if (obj4.isIOS()) {
    tmp20 = callback5;
  }
  obj.onShouldStartLoadWithRequest = tmp20;
  obj.onMessage = callback4;
  obj.onError = function onError(code) {
    logger.warn("WebView load error", { code: code.nativeEvent.code });
    callback();
  };
  obj.onLoadEnd = function onLoadEnd() {
    callback();
  };
  obj.injectedJavaScriptBeforeContentLoaded = webviewUrl.injectedJavaScriptBeforeContentLoaded;
  ({ webView: obj3.style, webView: obj3.containerStyle } = tmp15);
  const items6 = [memo(tmp19, obj), ];
  if (tmp18Result) {
    const obj1 = { style: tmp15.loadingOverlay, children: tmp18(tmp8(tmp9[15]).ActivityIndicator, {}) };
    tmp18Result = tmp18(tmp17, obj1);
  }
  items6[1] = tmp18Result;
  obj.children = items6;
  return tmp16(ref2, obj);
};