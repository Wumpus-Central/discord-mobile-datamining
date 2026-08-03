// === Module 7712: AgeVerificationIncodeModal ===

// Module 7712 (AgeVerificationIncodeModal)
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  let React;
  let jsx;
  const tmp = createCacheKey();
  React = tmp;
  let intl = webviewUrl(onClose[5]).intl;
  const stringResult = intl.string(webviewUrl(onClose[5]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => {
    function handleClose() {
      dependencyMap();
      let arr = callback2(4461);
      arr = arr.pop();
    }
    const uRL = new URL(closure_0);
    const origin = uRL.origin;
    let obj = {};
    obj = { headerStyle: origin.headerStyle, headerTitle: null, headerLeft: null, render: null };
    let intl = webviewUrl(onClose[5]).intl;
    obj[1] = intl.string(webviewUrl(onClose[5]).t.wJVyYR);
    obj[2] = function headerLeft() {
      const obj = { onPress: handleClose, text: null };
      const intl = callback(1236).intl;
      obj[1] = intl.string(callback(1236).t.cpT0Cq);
      return handleClose(callback(5907).HeaderActionButton, obj);
    };
    obj[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return handleClose(callback2(7713), {
        onClose: handleClose,
        trustedOrigin: origin,
        onMethodSelected(injectedJavaScriptBeforeContentLoaded) {
          return navigation.navigate(outer1_5.VERIFY_AGE, { injectedJavaScriptBeforeContentLoaded });
        }
      });
    };
    obj[outer1_5.METHOD_SELECT] = obj;
    obj[outer1_5.VERIFY_AGE] = {
      headerStyle: origin.headerStyle,
      headerTitle: handleClose,
      headerLeft() {
        const obj = { onPress: handleClose, text: null };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.cpT0Cq);
        return handleClose(callback(5907).HeaderActionButton, obj);
      },
      render(injectedJavaScriptBeforeContentLoaded) {
        return handleClose(callback2(7718), { webviewUrl: closure_0, onComplete: callback2, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
      }
    };
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[5]).intl;
  obj[2] = intl2.string(webviewUrl(onClose[5]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
};