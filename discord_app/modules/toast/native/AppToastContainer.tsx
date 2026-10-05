// === Module 17139: AppToastContainer ===

// Module 17139 (AppToastContainer)
import c from "c" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Toast_ToastContainer from "Toast/ToastContainer" /* 14265 */;
import QuestHooks from "QuestHooks" /* 14892 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 14901 */;
import ToastContainerDefault from "ToastContainer" /* 17140 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((bottomInset) => {
  const cResult = c.c(5);
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] === bottomInset) {
    if (cResult[1] === top) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { overlay: true, offset: tmp4 };
      const tmp7 = React4(Toast_ToastContainer.ToastContainer, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const rect = { top, bottom: bottomInset };
  cResult[0] = bottomInset;
  cResult[1] = top;
  cResult[2] = rect;
  tmp4 = rect;
}) : ((bottomInset) => {
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  const items = [top, bottomInset];
  const offset = noop.useMemo(() => {
    const rect = { top, bottom: bottomInset };
    return rect;
  }, items);
  return React4(Toast_ToastContainer.ToastContainer, { overlay: true, offset });
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  const sum = mobileQuestDockHeight + useYouBarTotalHeight.useYouBarTotalHeight();
  if (cResult[0] !== sum) {
    const obj4 = { bottomInset: sum };
    const tmp7 = React4(closure_7, obj4);
    cResult[0] = sum;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  return React4(closure_7, { bottomInset: mobileQuestDockHeight + useYouBarTotalHeight.useYouBarTotalHeight() });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/toast/native/AppToastContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((appChrome) => {
  const cResult = c.c(3);
  appChrome = appChrome.appChrome;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React4(ToastContainerDefault, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== (undefined === appChrome || appChrome)) {
    const items = [first, ];
    if (tmp3) {
      let tmp10Result = React4(closure_8, {});
    } else {
      tmp10Result = React4(closure_7, { bottomInset: 0 });
    }
    const obj2 = { children: null };
    items[1] = tmp10Result;
    obj2.children = items;
    const tmp8Result = timestampProducer(hasOwnProperty, obj2);
    cResult[1] = tmp3;
    cResult[2] = tmp8Result;
  } else {
    return cResult[2];
  }
}) : ((appChrome) => {
  let flag = appChrome.appChrome;
  if (flag === undefined) {
    flag = true;
  }
  const children = [React4(ToastContainerDefault, {}), ];
  if (flag) {
    let tmp3Result = React4(closure_8, {});
  } else {
    tmp3Result = React4(closure_7, { bottomInset: 0 });
  }
  children[1] = tmp3Result;
  return timestampProducer(hasOwnProperty, { children });
});