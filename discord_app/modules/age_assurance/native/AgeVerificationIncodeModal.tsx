// === Module 8415: AgeVerificationIncodeModal ===

// Module 8415 (AgeVerificationIncodeModal)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
let jsx = fn(21).jsx;
const constants = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
fn(4560);
let createStyles = { headerStyle: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createStyles.headerStyle = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  let onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = closure_6();
  noop = tmp;
  let intl = webviewUrl(onClose[6]).intl;
  const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = noop.useMemo(() => {
    closure_2 = onClose;
    function handleClose() {
      closure_2();
      let arr = onComplete(onClose[4]);
      arr = arr.pop();
    }
    const uRL = new URL(webviewUrl);
    const origin = uRL.origin;
    let obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft() {
        const obj = { onPress: handleClose, text: null };
        const intl = webviewUrl(onClose[6]).intl;
        obj.text = intl.string(webviewUrl(onClose[6]).t.cpT0Cq);
        return handleClose(webviewUrl(onClose[5]).HeaderActionButton, obj);
      },
      render(arg0, arg1) {
        const navigation = arg1;
        return handleClose(onComplete(onClose[7]), {
          onClose: handleClose,
          trustedOrigin: origin,
          onMethodSelected(injectedJavaScriptBeforeContentLoaded) {
            return navigation.navigate(constants.VERIFY_AGE, { injectedJavaScriptBeforeContentLoaded });
          }
        });
      }
    };
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle,
      headerLeft() {
        const obj = { onPress: handleClose, text: null };
        const intl = webviewUrl(onClose[6]).intl;
        obj.text = intl.string(webviewUrl(onClose[6]).t.cpT0Cq);
        return handleClose(webviewUrl(onClose[5]).HeaderActionButton, obj);
      },
      render(injectedJavaScriptBeforeContentLoaded) {
        return handleClose(onComplete(onClose[8]), { webviewUrl, onComplete, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
      }
    };
    return { [closure_2_5.METHOD_SELECT]: obj, [closure_2_5.VERIFY_AGE]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[6]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
};