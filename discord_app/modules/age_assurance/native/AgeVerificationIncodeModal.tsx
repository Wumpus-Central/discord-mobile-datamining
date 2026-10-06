// === Module 8122: AgeVerificationIncodeModal ===

// Module 8122 (AgeVerificationIncodeModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
function headerTitle() {
  return null;
}
let react = react_mod;
let jsx = Fragment.jsx;
const constants = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let handleClose;
  let obj4;
  let obj5;
  let onClose;
  let onComplete;
  let webviewUrl;
  const obj = webviewUrl(onClose[10]);
  const cResult = obj.c(9);
  ({ webviewUrl, onComplete, onClose } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = webviewUrl(onClose[6]).intl;
    const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onClose) {
    if (cResult[2] === onComplete) {
      if (cResult[3] === tmp4) {
        let tmp7;
        let tmp9;
        let tmp11;
        if (cResult[4] === webviewUrl) {
          tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = webviewUrl(onClose[6]).intl;
          const stringResult1 = intl2.string(webviewUrl(onClose[6]).t["13/7kX"]);
          cResult[6] = stringResult1;
          tmp9 = stringResult1;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj2 = { screens: tmp7, initialRouteName: constants.METHOD_SELECT, headerBackTitle: tmp9 };
          const tmp14 = handleClose(webviewUrl(onClose[11]).Navigator, obj2);
          cResult[7] = tmp7;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
  }
  handleClose = function handleClose() {
    closure_2();
    const arr = onComplete(onClose[4]);
    arr.pop();
  };
  const uRL = new URL(webviewUrl);
  const origin = uRL.origin;
  const obj3 = { [closure_5.METHOD_SELECT]: obj4, [closure_5.VERIFY_AGE]: obj5 };
  obj4 = {
    headerStyle: tmp4.headerStyle,
    headerTitle,
    headerLeft() {
      let intl;
      const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[6]).t.cpT0Cq) };
      const HeaderActionButton = webviewUrl(onClose[5]).HeaderActionButton;
      intl = webviewUrl(onClose[6]).intl;
      return headerTitle(HeaderActionButton, obj);
    },
    render(arg0, arg1) {
      let closure_0 = arg1;
      let obj = {
        onClose: handleClose,
        trustedOrigin: origin,
        onMethodSelected(c2) {
          const obj = { injectedJavaScriptBeforeContentLoaded };
          return navigation.navigate(constants.VERIFY_AGE, obj);
        }
      };
      return headerTitle(onComplete(onClose[7]), obj);
    }
  };
  obj5 = {
    headerStyle: tmp4.headerStyle,
    headerTitle: first,
    headerLeft() {
      let intl;
      const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[6]).t.cpT0Cq) };
      const HeaderActionButton = webviewUrl(onClose[5]).HeaderActionButton;
      intl = webviewUrl(onClose[6]).intl;
      return headerTitle(HeaderActionButton, obj);
    },
    render(injectedJavaScriptBeforeContentLoaded) {
      const obj = { webviewUrl, onComplete, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded };
      return headerTitle(onComplete(onClose[8]), obj);
    }
  };
  cResult[1] = onClose;
  cResult[2] = onComplete;
  cResult[3] = tmp4;
  cResult[4] = webviewUrl;
  cResult[5] = obj3;
  tmp7 = obj3;
}) : ((webviewUrl) => {
  let closure_3;
  let headerTitle;
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = closure_6();
  react = tmp;
  let intl = webviewUrl(onClose[6]).intl;
  const stringResult = intl.string(webviewUrl(onClose[6]).t.wJVyYR);
  jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = react.useMemo(() => {
    function handleClose() {
      closure_2();
      const arr = onComplete(onClose[4]);
      arr.pop();
    }
    const uRL = new URL(webviewUrl);
    const origin = uRL.origin;
    let obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle,
      headerLeft() {
        let intl;
        const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[6]).t.cpT0Cq) };
        const HeaderActionButton = webviewUrl(onClose[5]).HeaderActionButton;
        intl = webviewUrl(onClose[6]).intl;
        return headerTitle(HeaderActionButton, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        let obj = {
          onClose: handleClose,
          trustedOrigin: origin,
          onMethodSelected(c2) {
            const obj = { injectedJavaScriptBeforeContentLoaded };
            return navigation.navigate(constants.VERIFY_AGE, obj);
          }
        };
        return headerTitle(onComplete(onClose[7]), obj);
      }
    };
    return {
      [closure_2_5.METHOD_SELECT]: obj,
      [closure_2_5.VERIFY_AGE]: {
        headerStyle: closure_3.headerStyle,
        headerTitle,
        headerLeft() {
          let intl;
          const obj = { onPress: handleClose, text: intl.string(webviewUrl(onClose[6]).t.cpT0Cq) };
          const HeaderActionButton = webviewUrl(onClose[5]).HeaderActionButton;
          intl = webviewUrl(onClose[6]).intl;
          return headerTitle(HeaderActionButton, obj);
        },
        render(injectedJavaScriptBeforeContentLoaded) {
          const obj = { webviewUrl, onComplete, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded };
          return headerTitle(onComplete(onClose[8]), obj);
        }
      }
    };
  }, items);
  const Navigator = webviewUrl(onClose[11]).Navigator;
  const intl2 = webviewUrl(onClose[6]).intl;
  return <Navigator screens={memo} initialRouteName={constants.METHOD_SELECT} headerBackTitle={intl2.string(webviewUrl(onClose[6]).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default tmp2;