// discord_app/modules/main_tabs_v2/native/channel/useChannelDockHeight.tsx
import MainTabsNavigatorPanelContextDefault from "../panels/MainTabsNavigatorPanelContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelDockHeight.tsx");

export default function useChannelDockHeight() {
  let num = 0;
  if (noop.useContext(MainTabsNavigatorPanelContextDefault).isInMainTabs) {
    num = tmp;
  }
  return num;
}
