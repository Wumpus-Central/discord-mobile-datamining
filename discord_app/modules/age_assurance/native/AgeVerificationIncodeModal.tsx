// discord_app/modules/age_assurance/native/AgeVerificationIncodeModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_5 = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  let React;
  jsx = undefined;
  const tmp = callback();
  React = tmp;
  let intl = webviewUrl(onClose[6]).intl;
  const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => {
    function handleClose() {
      dependencyMap();
      let arr = callback2(4691);
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
        return handleClose(callback(6205).HeaderActionButton, obj);
      },
      render(arg0, arg1) {
        closure_0 = arg1;
        return handleClose(callback2(8655), {
          onClose: handleClose,
          trustedOrigin: origin,
          onMethodSelected(injectedJavaScriptBeforeContentLoaded) {
            return navigation.navigate(closure_1_5.VERIFY_AGE, { injectedJavaScriptBeforeContentLoaded });
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
        return handleClose(callback(6205).HeaderActionButton, obj);
      },
      render(injectedJavaScriptBeforeContentLoaded) {
        return handleClose(callback2(8662), { webviewUrl: closure_0, onComplete: callback2, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
      }
    };
    return { [closure_1_5.METHOD_SELECT]: obj, [closure_1_5.VERIFY_AGE]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[6]).intl;
  obj[2] = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
};