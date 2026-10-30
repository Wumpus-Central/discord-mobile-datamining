// discord_app/modules/main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx");

export default function useEdgeOnlySwipeExit(arg0) {
  closure_0 = arg0;
  const edgeSwipeOnly = noop.useContext(MainTabsNavigatorPanelContextDefault).edgeSwipeOnly;
  const context = noop.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let edgeSwipeOnly1;
  if (context != null) {
    edgeSwipeOnly1 = context.edgeSwipeOnly;
  }
  if (edgeSwipeOnly1 == null) {
    edgeSwipeOnly1 = null;
  }
  const items = [arg0, edgeSwipeOnly, edgeSwipeOnly1];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      let result = edgeSwipeOnly.set(true);
      if (edgeSwipeOnly1 != null) {
        let result1 = edgeSwipeOnly1.set(true);
      }
      return () => {
        const result = edgeSwipeOnly.set(false);
        if (edgeSwipeOnly1 != null) {
          const result1 = edgeSwipeOnly1.set(false);
        }
      };
    }
  }, items);
}
