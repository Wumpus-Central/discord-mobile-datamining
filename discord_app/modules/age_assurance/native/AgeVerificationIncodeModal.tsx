// === Module 8762: AgeVerificationIncodeModal ===

// Module 8762 (AgeVerificationIncodeModal)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
let jsx = fn(21).jsx;
const constants = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
const createStyles = fn(4827);
const obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
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
      onComplete(onClose[4]).pop();
    }
    const uRL = new URL(webviewUrl);
    const origin = uRL.origin;
    return {
      [closure_2_5.METHOD_SELECT]: {
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
      },
      [closure_2_5.VERIFY_AGE]: {
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
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null };
  const intl2 = webviewUrl(onClose[6]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
};