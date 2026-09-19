// === Module 16959: useVibegrationsDisallowSwipeExit ===

// Module 16959 (useVibegrationsDisallowSwipeExit)
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 16335 */;
import noop from "module_19" /* 19 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsDisallowSwipeExit.tsx");

export default function useVibegrationsDisallowSwipeExit(arg0) {
  closure_0 = arg0;
  const disallowGesture = noop.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const context = noop.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let disallowGesture1;
  if (context != null) {
    disallowGesture1 = context.disallowGesture;
  }
  if (disallowGesture1 == null) {
    disallowGesture1 = null;
  }
  const items = [arg0, disallowGesture, disallowGesture1];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      let result = disallowGesture.set(true);
      if (disallowGesture1 != null) {
        let result1 = disallowGesture1.set(true);
      }
      return () => {
        const result = disallowGesture.set(false);
        if (disallowGesture1 != null) {
          const result1 = disallowGesture1.set(false);
        }
      };
    }
  }, items);
};