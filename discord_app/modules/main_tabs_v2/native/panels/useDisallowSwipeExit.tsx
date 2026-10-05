// discord_app/modules/main_tabs_v2/native/panels/useDisallowSwipeExit.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(5);
      const disallowGesture = react.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
      const context = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
      let disallowGesture1;
      if (context != null) {
        disallowGesture1 = context.disallowGesture;
      }
      if (disallowGesture1 == null) {
        disallowGesture1 = null;
      }
      if (cResult[0] === arg0) {
        if (cResult[1] === disallowGesture) {
          let tmp4;
          let tmp5;
          if (cResult[2] === disallowGesture1) {
            tmp4 = cResult[3];
            tmp5 = cResult[4];
          }
          const effect = react.useEffect(tmp4, tmp5);
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
    }
  : (arg0) => {
      let closure_0 = arg0;
      const disallowGesture = react.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
      const context = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
      let disallowGesture1;
      if (context != null) {
        disallowGesture1 = context.disallowGesture;
      }
      if (disallowGesture1 == null) {
        disallowGesture1 = null;
      }
      const items = [arg0, disallowGesture, disallowGesture1];
      const effect = react.useEffect(() => {
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
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useDisallowSwipeExit.tsx");

export default tmp2;
