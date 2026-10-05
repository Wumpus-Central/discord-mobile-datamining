// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import NavigatorHeader from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import useNavigatorBackPressHandler from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import Navigator from "../../../../../design/components/Navigator/native/Navigator.native.tsx";
import EnableCommunityModalActionCreatorsDefault from "../../EnableCommunityModalActionCreators.tsx";
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function onModalClose() {
  EnableCommunityModalActionCreatorsDefault.close();
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerLeft = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          EnableCommunityModalActionCreatorsDefault.close();
          return true;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      useNavigatorBackPressHandler.useNavigatorBackPressHandler(first);
      if (cResult[1] !== arg0) {
        const intl = util.intl;
        const tmp8 = NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
        cResult[1] = arg0;
        cResult[2] = tmp8;
        let tmp6 = tmp8;
        const tmpResult2 = NavigatorHeader;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : (arg0) => {
      useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
        EnableCommunityModalActionCreatorsDefault.close();
        return true;
      });
      const intl = util.intl;
      return NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        function headerRight() {
          const obj = { source: closure_1_1(4809), onPress, accessibilityLabel: null };
          const intl = closure_1_0(1126).intl;
          obj.accessibilityLabel = intl.string(closure_1_0(1126).t.cpT0Cq);
          return closure_1_4(closure_1_0(6880).HeaderActionButton, obj);
        }
        const obj2 = {};
        const obj3 = {
          headerRight,
          headerLeft,
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_4(closure_1_1(17838), {});
          },
        };
        obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1] = obj3;
        const obj4 = {
          headerRight,
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_4(closure_1_1(17850), {});
          },
        };
        obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_2] = obj4;
        const obj5 = {
          headerRight,
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_4(closure_1_1(17851), {});
          },
        };
        obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_3] = obj5;
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          screens: first,
          initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1,
          headerBackTitle: null,
        };
        const intl = util.intl;
        obj6.headerBackTitle = intl.string(util.t["13/7kX"]);
        const tmp8 = jsx(Navigator.Navigator, {
          screens: first,
          initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1,
          headerBackTitle: null,
        });
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      const memo = noop.useMemo(() => {
        function headerRight() {
          const obj = { source: closure_1_1(4809), onPress, accessibilityLabel: null };
          const intl = closure_1_0(1126).intl;
          obj.accessibilityLabel = intl.string(closure_1_0(1126).t.cpT0Cq);
          return closure_1_4(closure_1_0(6880).HeaderActionButton, obj);
        }
        return {
          [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_1]: {
            headerRight,
            headerLeft,
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_4(closure_1_1(17838), {});
            },
          },
          [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_2]: {
            headerRight,
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_4(closure_1_1(17850), {});
            },
          },
          [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_3]: {
            headerRight,
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_4(closure_1_1(17851), {});
            },
          },
        };
      }, []);
      let obj = {
        screens: memo,
        initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1,
        headerBackTitle: null,
      };
      let intl = util.intl;
      obj.headerBackTitle = intl.string(util.t["13/7kX"]);
      return jsx(Navigator.Navigator, {
        screens: memo,
        initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1,
        headerBackTitle: null,
      });
    };
