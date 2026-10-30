// discord_app/modules/toast/native/AppToastContainer.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ToastContainer from "../../../design/mana/components/Toast/ToastContainer.native.tsx";
import QuestHooks from "../../quests/native/QuestHooks.native.tsx";
import useYouBarTotalHeight from "../../main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
