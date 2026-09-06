// discord_app/modules/age_assurance/native/AgeVerificationModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
function AgeVerifyScreen(uri) {
  const onComplete = uri.onComplete;
  const onClose = uri.onClose;
  let isSuspendedUser;
  let callback;
  let obj = onComplete(isSuspendedUser[3]);
  isSuspendedUser = obj.useIsSuspendedUser();
  const items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const items1 = [callback];
  const callback1 = callback.useCallback(() => {
    if (obj.isModalOpen(closure_4)) {
      callback();
    }
  }, items1);
  const watchAgeVerificationStatusChange = onComplete(isSuspendedUser[5]).useWatchAgeVerificationStatusChange(
    callback1,
  );
  const items2 = [callback, isSuspendedUser];
  const callback2 = callback.useCallback((nativeEvent) => {
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
      } catch (err) {}
    }
  }, items2);
  obj = {
    allowsInlineMediaPlayback: true,
    javaScriptEnabled: true,
    source: { uri: uri.webviewUrl },
    onMessage: callback2,
    injectedJavaScript:
      "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n",
  };
  return jsx(onClose(isSuspendedUser[6]), {
    allowsInlineMediaPlayback: true,
    javaScriptEnabled: true,
    source: { uri: uri.webviewUrl },
    onMessage: callback2,
    injectedJavaScript:
      "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n",
  });
}
let closure_4 = fn(8412).AGE_VERIFICATION_MODAL_KEY;
const jsx = fn(21).jsx;
const constants = { VERIFY_AGE: "VERIFY_AGE" };
fn(4560);
let createStyles = { headerStyle: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.headerStyle = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = closure_8();
  noop = tmp;
  let intl = webviewUrl(onClose[11]).intl;
  const stringResult = intl.string(webviewUrl(onClose[11]).t.wJVyYR);
  c4 = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = noop.useMemo(() => {
    closure_2 = onClose;
    function handleClose() {
      closure_2();
      let arr = onComplete(onClose[9]);
      arr = arr.pop();
    }
    return {
      [closure_2_6.VERIFY_AGE]: {
        headerStyle: headerStyle.headerStyle,
        headerTitle,
        headerLeft() {
          const obj = { onPress: handleClose, text: null };
          const intl = webviewUrl(onClose[11]).intl;
          obj.text = intl.string(webviewUrl(onClose[11]).t.cpT0Cq);
          return jsx(webviewUrl(onClose[10]).HeaderActionButton, { onPress: handleClose, text: null });
        },
        render() {
          return <AgeVerifyScreen webviewUrl={webviewUrl} onComplete={onComplete} onClose={handleClose} />;
        },
      },
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.VERIFY_AGE, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[11]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[11]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[12]).Navigator, {
    screens: memo,
    initialRouteName: constants.VERIFY_AGE,
    headerBackTitle: null,
  });
}
