// === Module 5431: AgeVerificationIncodeModal ===

// Module 5431 (AgeVerificationIncodeModal)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
let closure_5 = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = callback();
  const React = tmp;
  let intl = webviewUrl(onClose[6]).intl;
  const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => {
    function handleClose() {
      dependencyMap();
      let arr = callback2(5260);
      arr = arr.pop();
    }
    const uRL = new URL(closure_0);
    const origin = uRL.origin;
    let obj = {
      headerStyle: origin.headerStyle,
      headerTitle: handleClose,
      headerLeft() {
        const obj = { onPress: handleClose, text: null };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.cpT0Cq);
        return handleClose(callback(5432).HeaderActionButton, obj);
      },
      render(injectedJavaScriptBeforeContentLoaded) {
        return handleClose(callback2(6303), { webviewUrl: closure_0, onComplete: callback2, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
      }
    };
    return { [closure_1_5.METHOD_SELECT]: obj, [closure_1_5.VERIFY_AGE]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[6]).intl;
  obj[2] = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
};