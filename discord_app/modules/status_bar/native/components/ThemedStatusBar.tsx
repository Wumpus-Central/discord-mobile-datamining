// discord_app/modules/status_bar/native/components/ThemedStatusBar.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import StatusBarDefault from "StatusBar.android.tsx";
import useGlobalStatusIndicatorState from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function c() {
          return authenticated.isAuthenticated();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      const isModalOpen = NavigationRouteUtils.useIsModalOpen();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ThemeStore];
        class S {
          constructor() {
            obj = closure_1_0(closure_1_2[8]);
            return obj.isThemeDark(closure_1_3.theme);
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp10 = S;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult4 = NavigationRouteUtils;
      const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
      const tmpResult5 = initialize;
      const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
      if (!stateFromStores) {
        if (cResult[4] !== "light-content") {
          class S {
            constructor() {
              obj = closure_1_0(closure_1_2[8]);
              return obj.isThemeDark(closure_1_3.theme);
            }
          }
          const tmp18 = jsx(StatusBarDefault, { barStyle: null });
          cResult[4] = "light-content";
          cResult[5] = tmp18;
          let tmp15 = tmp18;
          const obj2 = { barStyle: null };
        } else {
          tmp15 = cResult[5];
        }
        return tmp15;
      } else if (isModalOpen) {
        let str2 = "dark-content";
        if (stateFromStores1) {
          str2 = "light-content";
        }
      } else {
        if (!globalStatusIndicatorState.isVisible) {
          let str = "dark-content";
        }
        str = "light-content";
      }
      const tmpResult6 = useGlobalStatusIndicatorState;
    }
  : () => {
      const items = [AuthenticationStore];
      const stateFromStores = initialize.useStateFromStores(items, () => authenticated.isAuthenticated());
      const isModalOpen = NavigationRouteUtils.useIsModalOpen();
      const items1 = [ThemeStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => require("shared").isThemeDark(theme.theme));
      const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
      if (!stateFromStores) {
        const obj5 = { barStyle: "light-content" };
        return jsx(StatusBarDefault, { barStyle: "light-content" });
      } else if (isModalOpen) {
        let str2 = "dark-content";
        if (stateFromStores1) {
          str2 = "light-content";
        }
      } else {
        if (!globalStatusIndicatorState.isVisible) {
          let str = "dark-content";
        }
        str = "light-content";
      }
    };
