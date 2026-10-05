// === Module 8104: AgeVerificationModal ===

// Module 8104 (AgeVerificationModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4565 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8085 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
function isOwnDeepLinkUrl(url) {
  if (typeof url !== "string") {
    return false;
  } else {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
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
  const items = [onComplete, onClose];
  const webviewUrl = onComplete.webviewUrl;
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback, isExpressiveModalV2];
  const callback1 = callback.useCallback(() => {
    const obj = NavigationRouteUtils;
    if (obj.isModalOpen(closure_4)) {
      if (!isExpressiveModalV2) {
        callback();
      }
    }
  }, items1);
  let obj = onComplete(isExpressiveModalV2[4]);
  const watchAgeVerificationStatusChange = obj.useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback];
  const callback2 = callback.useCallback((nativeEvent) => {
    function isSafeBreakoutUrl(url) {
      if (typeof url !== "string") {
        return false;
      } else {
        try {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const uRL = new URL(url);
          return "https:" === uRL.protocol;
        } catch (err) {
          return false;
        }
      }
    }
    if (null != nativeEvent.nativeEvent.data) {
      try {
        let data;
        if (typeof nativeEvent.nativeEvent.data === "string") {
          const _JSON = JSON;
          data = JSON.parse(nativeEvent.nativeEvent.data);
        } else {
          data = nativeEvent.nativeEvent.data;
        }
        let type;
        if (data != null) {
          type = data.type;
        }
        if ("AGEKEY_BREAKOUT" === type) {
          const tmp9 = isSafeBreakoutUrl(data.url) || isOwnDeepLinkUrl(data.url);
          if (tmp9) {
            const obj = LinkingDefault;
            obj.openURL(data.url);
          }
        } else {
          let eventType;
          if (data != null) {
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
        const obj = onClose(isExpressiveModalV2[5]);
        obj.openURL(isTopFrame.url);
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, []);
  return jsx(onClose(isExpressiveModalV2[6]), { allowsInlineMediaPlayback: true, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true, source: { uri: webviewUrl }, onMessage: callback2, onShouldStartLoadWithRequest: callback3, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n", injectedJavaScriptBeforeContentLoaded: "\n  window.open = function(url) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'AGEKEY_BREAKOUT', url: url}));\n    return null;\n  };\n" });
}
let closure_4 = AgeVerificationConstants.AGE_VERIFICATION_MODAL_KEY;
let jsx = Fragment.jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let handleCloseAfterCompletion;
  let isExpressiveModalV2;
  let obj4;
  let onClose;
  let onComplete;
  let webviewUrl;
  const obj = webviewUrl(onClose[13]);
  const cResult = obj.c(10);
  ({ webviewUrl, onComplete, onClose, isExpressiveModalV2 } = arg0);
  const tmp5 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = webviewUrl(onClose[11]).intl;
    const stringResult = intl.string(webviewUrl(onClose[11]).t.wJVyYR);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== isExpressiveModalV2 && isExpressiveModalV2)) {
    if (cResult[2] === onClose) {
      if (cResult[3] === onComplete) {
        if (cResult[4] === tmp5) {
          let tmp8;
          let tmp9;
          let tmp11;
          if (cResult[5] === webviewUrl) {
            tmp8 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = webviewUrl(onClose[11]).intl;
            const stringResult1 = intl2.string(webviewUrl(onClose[11]).t["13/7kX"]);
            cResult[7] = stringResult1;
            tmp9 = stringResult1;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] !== tmp8) {
            const obj2 = { screens: tmp8, initialRouteName: constants.VERIFY_AGE, headerBackTitle: tmp9 };
            const tmp14 = handleCloseAfterCompletion(webviewUrl(onClose[14]).Navigator, obj2);
            cResult[8] = tmp8;
            cResult[9] = tmp14;
            tmp11 = tmp14;
          } else {
            tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
    }
  }
  let closure_3 = tmp4;
  function handleClose() {
    closure_2();
    const arr = onComplete(onClose[9]);
    arr.pop();
  }
  handleCloseAfterCompletion = function handleCloseAfterCompletion() {
    closure_2();
    const arr = onComplete(onClose[9]);
    arr.pop();
    if (isExpressiveModalV2) {
      const tmp2Result = onComplete(onClose[9]);
      tmp2Result.pop();
    }
  };
  const obj3 = { [closure_7.VERIFY_AGE]: obj4 };
  obj4 = {
    headerStyle: tmp5.headerStyle,
    headerTitle: first,
    headerLeft() {
      let intl;
      const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[11]).t.cpT0Cq) };
      const HeaderActionButton = webviewUrl(onClose[10]).HeaderActionButton;
      intl = webviewUrl(onClose[11]).intl;
      return headerTitle(HeaderActionButton, obj);
    },
    render() {
      const obj = { webviewUrl, onComplete, onClose: handleCloseAfterCompletion, isExpressiveModalV2 };
      return headerTitle(closure_2_8, obj);
    }
  };
  cResult[1] = undefined !== isExpressiveModalV2 && isExpressiveModalV2;
  cResult[2] = onClose;
  cResult[3] = onComplete;
  cResult[4] = tmp5;
  cResult[5] = webviewUrl;
  cResult[6] = obj3;
  tmp8 = obj3;
}) : ((webviewUrl) => {
  let headerTitle;
  webviewUrl = webviewUrl.webviewUrl;
  let onComplete = webviewUrl.onComplete;
  let onClose = webviewUrl.onClose;
  let flag = webviewUrl.isExpressiveModalV2;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const headerStyle = tmp;
  let intl = webviewUrl(onClose[11]).intl;
  const stringResult = intl.string(webviewUrl(onClose[11]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult, flag];
  const memo = flag.useMemo(() => {
    let closure_3 = flag;
    function handleClose() {
      closure_2();
      const arr = onComplete(onClose[9]);
      arr.pop();
    }
    function handleCloseAfterCompletion() {
      closure_2();
      const arr = onComplete(onClose[9]);
      arr.pop();
      if (isExpressiveModalV2) {
        const tmp2Result = onComplete(onClose[9]);
        tmp2Result.pop();
      }
    }
    let obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle,
      headerLeft() {
        let intl;
        const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[11]).t.cpT0Cq) };
        const HeaderActionButton = webviewUrl(onClose[10]).HeaderActionButton;
        intl = webviewUrl(onClose[11]).intl;
        return headerTitle(HeaderActionButton, obj);
      },
      render() {
        const obj = { webviewUrl, onComplete, onClose: handleCloseAfterCompletion, isExpressiveModalV2 };
        return headerTitle(closure_2_8, obj);
      }
    };
    return { [closure_2_7.VERIFY_AGE]: obj };
  }, items);
  const Navigator = webviewUrl(onClose[14]).Navigator;
  const intl2 = webviewUrl(onClose[11]).intl;
  return <Navigator screens={memo} initialRouteName={constants.VERIFY_AGE} headerBackTitle={intl2.string(webviewUrl(onClose[11]).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default tmp2;