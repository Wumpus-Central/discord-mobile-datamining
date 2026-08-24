// === Module 6590: AgeVerifyScreen ===

// Module 6590 (AgeVerifyScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { AGE_VERIFICATION_MODAL_KEY as closure_4 } from "set" /* 5432 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
function AgeVerifyScreen(uri) {
  const onComplete = uri.onComplete;
  const onClose = uri.onClose;
  let isSuspendedUser;
  let callback;
  isSuspendedUser = onComplete(isSuspendedUser[3]).useIsSuspendedUser();
  const items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback];
  const callback1 = callback.useCallback(() => {
    if (obj.isModalOpen(closure_1_4)) {
      callback();
    }
  }, items1);
  const obj = onComplete(isSuspendedUser[3]);
  const watchAgeVerificationStatusChange = onComplete(isSuspendedUser[5]).useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback, isSuspendedUser];
  const onMessage = callback.useCallback((nativeEvent) => {
    if (null != nativeEvent.nativeEvent.data) {
      try {
        if (typeof nativeEvent.nativeEvent.data === "string") {
          const _JSON = JSON;
          let data = JSON.parse(nativeEvent.nativeEvent.data);
        } else {
          data = nativeEvent.nativeEvent.data;
        }
        let tmp3 = isSuspendedUser;
        if (isSuspendedUser) {
          let eventType;
          if (data != null) {
            eventType = data.eventType;
          }
          tmp3 = "Verification.Result" === eventType;
        }
        if (tmp3) {
          callback();
        }
      } catch (err) {
      }
    }
  }, items2);
  return jsx(onClose(isSuspendedUser[6]), { allowsInlineMediaPlayback: true, javaScriptEnabled: true, source: { uri: uri.webviewUrl }, onMessage, injectedJavaScript: "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n" });
}
let closure_6 = { VERIFY_AGE: "VERIFY_AGE" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  let React;
  c4 = undefined;
  const tmp = callback();
  React = tmp;
  let intl = webviewUrl(onClose[11]).intl;
  const stringResult = intl.string(webviewUrl(onClose[11]).t.wJVyYR);
  c4 = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => {
    function handleClose() {
      dependencyMap();
      let arr = callback2(5265);
      arr = arr.pop();
    }
    return {
      [closure_1_6.VERIFY_AGE]: {
        headerStyle: handleClose.headerStyle,
        headerTitle: c4,
        headerLeft() {
          const obj = { onPress: handleClose, text: null };
          const intl = callback(1236).intl;
          obj[1] = intl.string(callback(1236).t.cpT0Cq);
          return closure_1_5(callback(5437).HeaderActionButton, obj);
        },
        render() {
          return closure_1_5(closure_1_7, { webviewUrl: closure_0, onComplete: closure_1, onClose: handleClose });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[11]).intl;
  obj[2] = intl2.string(webviewUrl(onClose[11]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[12]).Navigator, { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null });
};