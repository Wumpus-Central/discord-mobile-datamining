// === Module 11714: useEdgeOnlySwipeExit ===

// Module 11714 (useEdgeOnlySwipeExit)
import c from "c" /* 576 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 11715 */;
import noop from "module_19" /* 19 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useEdgeOnlySwipeExit(arg0) {
  closure_0 = arg0;
  const cResult = c.c(5);
  const edgeSwipeOnly = noop.useContext(MainTabsNavigatorPanelContextDefault).edgeSwipeOnly;
  const context = noop.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  let edgeSwipeOnly1;
  if (context != null) {
    edgeSwipeOnly1 = context.edgeSwipeOnly;
  }
  if (edgeSwipeOnly1 == null) {
    edgeSwipeOnly1 = null;
  }
  if (cResult[0] === arg0) {
    if (cResult[1] === edgeSwipeOnly) {
      if (cResult[2] === edgeSwipeOnly1) {
        let tmp4 = cResult[3];
        let tmp5 = cResult[4];
      }
      const effect = noop.useEffect(tmp4, tmp5);
    }
  }
  const fn = function s() {
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
  };
  const items = [arg0, edgeSwipeOnly, edgeSwipeOnly1];
  cResult[0] = arg0;
  cResult[1] = edgeSwipeOnly;
  cResult[2] = edgeSwipeOnly1;
  cResult[3] = fn;
  cResult[4] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useEdgeOnlySwipeExit(arg0) {
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
});