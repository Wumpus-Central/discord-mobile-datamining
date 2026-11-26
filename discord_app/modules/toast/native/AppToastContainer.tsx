// === Module 19328: AppToastContainer ===

// Module 19328 (AppToastContainer)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ToastContainer from "ToastContainer" /* 15470 */;
import QuestHooks from "QuestHooks" /* 16674 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 16686 */;
import noop from "module_19" /* 19 */;

require = fn;
function ManaToastSurface(bottomInset) {
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  items = [top, bottomInset];
  const offset = noop.useMemo(() => {
    const rect = { top, bottom: bottomInset };
    return rect;
  }, items);
  return jsx(ToastContainer.ToastContainer, { overlay: true, offset });
}
function AppChromeToastSurface() {
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  return <ManaToastSurface bottomInset={mobileQuestDockHeight + useYouBarTotalHeight.useYouBarTotalHeight()} />;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/toast/native/AppToastContainer.tsx");

export default function AppToastContainer(appChrome) {
  let flag = appChrome.appChrome;
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    let tmpResult = <AppChromeToastSurface />;
  } else {
    tmpResult = <ManaToastSurface bottomInset={0} />;
  }
  return tmpResult;
};