// discord_app/modules/main_tabs_v2/native/channel/useIsChannelFullyOpen.tsx
import MainTabsNavigatorPanelContextDefault from "../panels/MainTabsNavigatorPanelContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useIsChannelFullyOpen.tsx");

export default function useIsChannelFullyOpen() {
  const context = noop.useContext(MainTabsNavigatorPanelContextDefault);
  ({ isInMainTabs, translateX } = context);
  let tmp2 = !isInMainTabs;
  if (isInMainTabs) {
    tmp2 = 0 === translateX.get();
  }
  return tmp2;
}
