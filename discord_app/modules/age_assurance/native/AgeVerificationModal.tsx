// discord_app/modules/age_assurance/native/AgeVerificationModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
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
  items = [onComplete, onClose];
  const callback = noop.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback];
  const callback1 = noop.useCallback((nativeEvent) => {
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
      } catch (err) {}
    }
  }, items1);
  const callback2 = noop.useCallback((isTopFrame) => {
    let tmp2 = !tmp;
    if (null == isTopFrame.isTopFrame || isTopFrame.isTopFrame) {
      const tmp4 = isOwnDeepLinkUrl(isTopFrame.url);
      let flag = !tmp4;
      if (tmp4) {
        onClose(callback[2]).openURL(isTopFrame.url);
        flag = false;
        const obj = onClose(callback[2]);
      }
      tmp2 = flag;
    }
    return tmp2;
  }, []);
  let obj = {
    accessibilityLabel: null,
    allowsInlineMediaPlayback: true,
    mediaPlaybackRequiresUserAction: false,
    domStorageEnabled: true,
    javaScriptEnabled: true,
    javaScriptCanOpenWindowsAutomatically: true,
    source: null,
    onMessage: null,
    onShouldStartLoadWithRequest: null,
    injectedJavaScript:
      "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n",
    injectedJavaScriptBeforeContentLoaded:
      "\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n",
  };
  const intl = onComplete(callback[4]).intl;
  obj.accessibilityLabel = intl.string(onClose(callback[5]).eKo6mw);
  obj.source = { uri: onComplete.webviewUrl };
  obj.onMessage = callback1;
  obj.onShouldStartLoadWithRequest = callback2;
  return jsx(onClose(callback[3]), {
    accessibilityLabel: null,
    allowsInlineMediaPlayback: true,
    mediaPlaybackRequiresUserAction: false,
    domStorageEnabled: true,
    javaScriptEnabled: true,
    javaScriptCanOpenWindowsAutomatically: true,
    source: null,
    onMessage: null,
    onShouldStartLoadWithRequest: null,
    injectedJavaScript:
      "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n",
    injectedJavaScriptBeforeContentLoaded:
      "\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n",
  });
}
let jsx = fn(21).jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
const createStyles = fn(5306);
const obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_8 = createStyles.createStyles(obj2);
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
  const tmp = closure_8();
  jsx = tmp;
  let intl = webviewUrl(onClose[4]).intl;
  const stringResult = intl.string(webviewUrl(onClose[4]).t.wJVyYR);
  c5 = stringResult;
  items = [tmp, webviewUrl, onComplete, onClose, stringResult, flag];
  const memo = flag.useMemo(() => {
    closure_2 = onClose;
    const isExpressiveModalV2 = flag;
    function handleClose() {
      closure_2();
      onComplete(onClose[8]).pop();
    }
    function handleCloseAfterCompletion() {
      closure_2();
      onComplete(onClose[8]).pop();
      if (closure_3) {
        onComplete(onClose[8]).pop();
        const tmp2Result = onComplete(onClose[8]);
      }
      const arr = onComplete(onClose[8]);
    }
    return {
      [closure_2_6.VERIFY_AGE]: {
        headerStyle: headerStyle.headerStyle,
        headerTitle,
        headerLeft() {
          const obj = { onPress: handleClose, text: null };
          const intl = webviewUrl(onClose[4]).intl;
          obj.text = intl.string(webviewUrl(onClose[4]).t.cpT0Cq);
          return handleClose(webviewUrl(onClose[9]).HeaderActionButton, obj);
        },
        render() {
          return handleClose(AgeVerifyScreen, {
            webviewUrl,
            onComplete,
            onClose: handleCloseAfterCompletion,
            isExpressiveModalV2,
          });
        },
      },
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[4]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[4]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[10]).Navigator, {
    screens: memo,
    initialRouteName: constants.VERIFY_AGE,
    headerBackTitle: null,
  });
}
