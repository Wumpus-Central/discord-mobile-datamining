// === Module 16892: useDisallowSwipeExit ===

// Module 16892 (useDisallowSwipeExit)
import c from "c" /* 576 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 16624 */;
import noop from "module_19" /* 19 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useDisallowSwipeExit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDisallowSwipeExit(arg0) {
  closure_0 = arg0;
  const cResult = c.c(5);
  const disallowGesture = noop.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const context = noop.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let disallowGesture1;
  if (context != null) {
    disallowGesture1 = context.disallowGesture;
  }
  if (disallowGesture1 == null) {
    disallowGesture1 = null;
  }
  if (cResult[0] === arg0) {
    if (cResult[1] === disallowGesture) {
      if (cResult[2] === disallowGesture1) {
        let tmp4 = cResult[3];
        let tmp5 = cResult[4];
      }
      const effect = noop.useEffect(tmp4, tmp5);
    }
  }
  const fn = function n() {
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
  };
  const items = [arg0, disallowGesture, disallowGesture1];
  cResult[0] = arg0;
  cResult[1] = disallowGesture;
  cResult[2] = disallowGesture1;
  cResult[3] = fn;
  cResult[4] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useDisallowSwipeExit(arg0) {
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
});