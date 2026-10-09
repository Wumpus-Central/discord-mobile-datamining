// === Module 17603: AppToastContainer ===

// Module 17603 (AppToastContainer)
import c from "c" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ToastContainer from "ToastContainer" /* 14204 */;
import QuestHooks from "QuestHooks" /* 15281 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15290 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManaToastSurface(bottomInset) {
  const cResult = c.c(5);
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] === bottomInset) {
    if (cResult[1] === top) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { overlay: true, offset: tmp4 };
      const tmp7 = jsx(ToastContainer.ToastContainer, { overlay: true, offset: tmp4 });
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
}) : (function ManaToastSurface(bottomInset) {
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  const items = [top, bottomInset];
  const offset = noop.useMemo(() => {
    const rect = { top, bottom: bottomInset };
    return rect;
  }, items);
  return jsx(ToastContainer.ToastContainer, { overlay: true, offset });
});
ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChromeToastSurface() {
  const cResult = c.c(2);
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  const sum = mobileQuestDockHeight + useYouBarTotalHeight.useYouBarTotalHeight();
  if (cResult[0] !== sum) {
    const obj4 = { bottomInset: sum };
    const tmp7 = <closure_5 bottomInset={sum} />;
    cResult[0] = sum;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function AppChromeToastSurface() {
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  return <closure_5 bottomInset={mobileQuestDockHeight + useYouBarTotalHeight.useYouBarTotalHeight()} />;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/toast/native/AppToastContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppToastContainer(appChrome) {
  const cResult = c.c(2);
  appChrome = appChrome.appChrome;
  if (cResult[0] !== (undefined === appChrome || appChrome)) {
    if (tmp2) {
      let tmp3Result = <closure_6 />;
    } else {
      tmp3Result = <closure_5 bottomInset={0} />;
    }
    cResult[0] = tmp2;
    cResult[1] = tmp3Result;
  } else {
    return cResult[1];
  }
}) : (function AppToastContainer(appChrome) {
  let flag = appChrome.appChrome;
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    let tmpResult = <closure_6 />;
  } else {
    tmpResult = <closure_5 bottomInset={0} />;
  }
  return tmpResult;
});