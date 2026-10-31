// === Module 19053: AppToastContainer ===

// Module 19053 (AppToastContainer)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ToastContainer from "ToastContainer" /* 15862 */;
import QuestHooks from "QuestHooks" /* 17055 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 17064 */;
import noop from "module_19" /* 19 */;

require = fn;
function ManaToastSurface(bottomInset) {
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  const items = [top, bottomInset];
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