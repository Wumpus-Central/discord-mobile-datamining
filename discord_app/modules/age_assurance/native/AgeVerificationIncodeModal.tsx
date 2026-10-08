// === Module 7503: AgeVerificationIncodeModal ===

// Module 7503 (AgeVerificationIncodeModal)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

const require = fn;
let jsx = fn(21).jsx;
const constants = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
const createStyles = fn(5090);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationIncodeModal(arg0) {
  const cResult = webviewUrl(onClose[10]).c(9);
  ({ webviewUrl, onComplete, onClose } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = webviewUrl(onClose[6]).intl;
    const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onClose) {
    if (cResult[2] === onComplete) {
      if (cResult[3] === tmp4) {
        if (cResult[4] === webviewUrl) {
          let tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = webviewUrl(onClose[6]).intl;
          const stringResult1 = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
          cResult[6] = stringResult1;
          let tmp9 = stringResult1;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj2 = { screens: tmp7, initialRouteName: constants.METHOD_SELECT, headerBackTitle: tmp9 };
          const tmp14 = handleClose(webviewUrl(onClose[11]).Navigator, obj2);
          cResult[7] = tmp7;
          cResult[8] = tmp14;
          let tmp11 = tmp14;
        } else {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
  }
  handleClose = function handleClose() {
    closure_2();
    onComplete(onClose[4]).pop();
  };
  const uRL = new URL(webviewUrl);
  const origin = uRL.origin;
  const obj3 = { [closure_5.METHOD_SELECT]: obj4, [closure_5.VERIFY_AGE]: obj5 };
  cResult[1] = onClose;
  cResult[2] = onComplete;
  cResult[3] = tmp4;
  cResult[4] = webviewUrl;
  cResult[5] = obj3;
  tmp7 = obj3;
  const obj = webviewUrl(onClose[10]);
  obj4 = {
    headerStyle: tmp4.headerStyle,
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
  obj5 = {
    headerStyle: tmp4.headerStyle,
    headerTitle: first,
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
}) : (function AgeVerificationIncodeModal(webviewUrl) {
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
  return jsx(webviewUrl(onClose[11]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT, headerBackTitle: null });
});