// discord_app/modules/age_assurance/native/AgeVerificationIncodeModal.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
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
  let intl = webviewUrl(onClose[6]).intl;
  const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => {
    function handleClose() {
      dependencyMap();
      let arr = callback2(4549);
      arr = arr.pop();
    }
    const uRL = new URL(closure_0);
    const origin = uRL.origin;
    let obj = {
      headerStyle: origin.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft() {
        const obj = { onPress: handleClose, text: null };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.cpT0Cq);
        return handleClose(callback(6049).HeaderActionButton, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        return handleClose(callback2(7843), {
          onClose: handleClose,
          trustedOrigin: origin,
          onMethodSelected(injectedJavaScriptBeforeContentLoaded) {
            return navigation.navigate(outer1_5.VERIFY_AGE, { injectedJavaScriptBeforeContentLoaded });
          }
        });
      }
    };
    obj = {
      headerStyle: origin.headerStyle,
      headerTitle: handleClose,
      headerLeft() {
        const obj = { onPress: handleClose, text: null };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.cpT0Cq);
        return handleClose(callback(6049).HeaderActionButton, obj);
      },
      render(injectedJavaScriptBeforeContentLoaded) {
        return handleClose(callback2(7850), { webviewUrl: closure_0, onComplete: callback2, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
      }
    };
    return { [outer1_5.METHOD_SELECT]: obj, [outer1_5.VERIFY_AGE]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[6]).intl;
  obj[2] = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
};