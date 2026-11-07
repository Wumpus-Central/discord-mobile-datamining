// === Module 8062: AgeVerificationModal ===

// Module 8062 (AgeVerificationModal)
import nativeDefault from "native" /* 575 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import LinkingDefault from "Linking" /* 5834 */;
import noop from "module_19" /* 19 */;

require = fn;
function isOwnDeepLinkUrl(url) {
  if (typeof url !== "string") {
    return false;
  } else {
    try {
      const _URL = URL;
      const uRL = new URL(url);
      return "discord:" === uRL.protocol;
    } catch (err) {
      return false;
    }
  }
}
function AgeVerifyScreen(onComplete) {
  onComplete = onComplete.onComplete;
  const onClose = onComplete.onClose;
  const isExpressiveModalV2 = onComplete.isExpressiveModalV2;
  let callback;
  items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback, isExpressiveModalV2];
  const callback1 = callback.useCallback(() => {
    if (obj.isModalOpen(closure_4)) {
      if (!isExpressiveModalV2) {
        callback();
      }
    }
    obj = NavigationRouteUtils;
  }, items1);
  const watchAgeVerificationStatusChange = onComplete(isExpressiveModalV2[4]).useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback];
  const callback2 = callback.useCallback((nativeEvent) => {
    if (null != nativeEvent.nativeEvent.data) {
      try {
        if (typeof nativeEvent.nativeEvent.data === "string") {
          const _JSON = JSON;
          let data = JSON.parse(nativeEvent.nativeEvent.data);
        } else {
          data = nativeEvent.nativeEvent.data;
        }
        let type;
        if (data != null) {
          type = data.type;
        }
        if ("AGEKEY_BREAKOUT" === type) {
          let tmp9 = (function isSafeBreakoutUrl(url) {
            if (typeof url !== "string") {
              return false;
            } else {
              try {
                const _URL = URL;
                const uRL = new URL(url);
                return "https:" === uRL.protocol;
              } catch (err) {
                return false;
              }
            }
          })(tmp2.url);
          if (!tmp9) {
            tmp9 = isOwnDeepLinkUrl(tmp2.url);
          }
          if (tmp9) {
            LinkingDefault.openURL(data.url);
          }
        } else {
          let eventType;
          if (tmp2 != null) {
            eventType = tmp2.eventType;
          }
          if ("Verification.Result" === eventType) {
            callback();
          }
        }
      } catch (err) {
      }
    }
  }, items2);
  const callback3 = callback.useCallback((isTopFrame) => {
    let tmp2 = !tmp;
    if (null == isTopFrame.isTopFrame || isTopFrame.isTopFrame) {
      const tmp4 = isOwnDeepLinkUrl(isTopFrame.url);
      let flag = !tmp4;
      if (tmp4) {
        onClose(isExpressiveModalV2[5]).openURL(isTopFrame.url);
        flag = false;
        const obj = onClose(isExpressiveModalV2[5]);
      }
      tmp2 = flag;
    }
    return tmp2;
  }, []);
  const obj2 = { accessibilityLabel: null, allowsInlineMediaPlayback: true, mediaPlaybackRequiresUserAction: false, domStorageEnabled: true, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true, source: null, onMessage: null, onShouldStartLoadWithRequest: null, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n", injectedJavaScriptBeforeContentLoaded: "\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n" };
  let obj = onComplete(isExpressiveModalV2[4]);
  const intl = onComplete(isExpressiveModalV2[7]).intl;
  obj2.accessibilityLabel = intl.string(onClose(isExpressiveModalV2[8]).eKo6mw);
  obj2.source = { uri: onComplete.webviewUrl };
  obj2.onMessage = callback2;
  obj2.onShouldStartLoadWithRequest = callback3;
  return jsx(onClose(isExpressiveModalV2[6]), { accessibilityLabel: null, allowsInlineMediaPlayback: true, mediaPlaybackRequiresUserAction: false, domStorageEnabled: true, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true, source: null, onMessage: null, onShouldStartLoadWithRequest: null, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n", injectedJavaScriptBeforeContentLoaded: "\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n" });
}
let closure_4 = fn(6783).AGE_VERIFICATION_MODAL_KEY;
let jsx = fn(21).jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
const createStyles = fn(5140);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  let flag = webviewUrl.isExpressiveModalV2;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const headerStyle = tmp;
  let intl = webviewUrl(onClose[7]).intl;
  const stringResult = intl.string(webviewUrl(onClose[7]).t.wJVyYR);
  jsx = stringResult;
  items = [tmp, webviewUrl, onComplete, onClose, stringResult, flag];
  const memo = flag.useMemo(() => {
    closure_2 = onClose;
    const isExpressiveModalV2 = flag;
    function handleClose() {
      closure_2();
      onComplete(onClose[11]).pop();
    }
    function handleCloseAfterCompletion() {
      closure_2();
      onComplete(onClose[11]).pop();
      if (closure_3) {
        onComplete(onClose[11]).pop();
        const tmp2Result = onComplete(onClose[11]);
      }
      const arr = onComplete(onClose[11]);
    }
    return {
      [closure_2_7.VERIFY_AGE]: {
        headerStyle: headerStyle.headerStyle,
        headerTitle,
        headerLeft() {
          const obj = { onPress: handleClose, text: null };
          const intl = webviewUrl(onClose[7]).intl;
          obj.text = intl.string(webviewUrl(onClose[7]).t.cpT0Cq);
          return handleCloseAfterCompletion(webviewUrl(onClose[12]).HeaderActionButton, obj);
        },
        render() {
          return handleCloseAfterCompletion(AgeVerifyScreen, { webviewUrl, onComplete, onClose: handleCloseAfterCompletion, isExpressiveModalV2 });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[7]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[7]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[13]).Navigator, { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null });
};