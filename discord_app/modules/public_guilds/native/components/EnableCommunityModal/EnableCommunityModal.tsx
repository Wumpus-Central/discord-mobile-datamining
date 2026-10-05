// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl2 from "../../../../../intl/index.native.tsx";
import NavigatorHeader from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import useNavigatorBackPressHandler from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import Navigator2 from "../../../../../design/components/Navigator/native/Navigator.native.tsx";
import EnableCommunityModalActionCreatorsDefault from "../../EnableCommunityModalActionCreators.tsx";
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const headerRight2 = function headerRight() {
  let intl;
  const obj = {
    source: closure_1_1(closure_1_2[9]),
    onPress,
    accessibilityLabel: intl.string(closure_1_0(closure_1_2[7]).t.cpT0Cq),
  };
  const HeaderActionButton = closure_1_0(closure_1_2[8]).HeaderActionButton;
  intl = closure_1_0(closure_1_2[7]).intl;
  return closure_1_4(HeaderActionButton, obj);
};
function headerTitle() {
  return null;
}
function render() {
  return closure_1_4(closure_1_1(closure_1_2[11]), {});
}
const headerTitle2 = function headerTitle() {
  return null;
};
const render2 = function render() {
  return closure_1_4(closure_1_1(closure_1_2[12]), {});
};
const headerTitle3 = function headerTitle() {
  return null;
};
const render3 = function render() {
  return closure_1_4(closure_1_1(closure_1_2[13]), {});
};
function onModalClose() {
  const obj = EnableCommunityModalActionCreatorsDefault;
  obj.close();
}
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = EnableCommunityModalActionCreatorsDefault;
          obj.close();
          return true;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmpResult = useNavigatorBackPressHandler;
      tmpResult.useNavigatorBackPressHandler(first);
      if (cResult[1] !== arg0) {
        const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
        NavigatorHeader;
        const intl = intl2.intl;
        const tmp9 = getHeaderTextButton(intl.string(intl2.t["13/7kX"]), onModalClose)(arg0);
        cResult[1] = arg0;
        cResult[2] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : (arg0) => {
      let obj = useNavigatorBackPressHandler;
      obj.useNavigatorBackPressHandler(() => {
        const obj = EnableCommunityModalActionCreatorsDefault;
        obj.close();
        return true;
      });
      const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
      NavigatorHeader;
      const intl = intl2.intl;
      return getHeaderTextButton(intl.string(intl2.t["13/7kX"]), onModalClose)(arg0);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const headerRight = headerRight2;
        const obj2 = {};
        const obj3 = { headerRight, headerLeft, headerTitle, render };
        obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1] = obj3;
        const obj4 = { headerRight, headerTitle: headerTitle2, render: render2 };
        obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_2] = obj4;
        const obj5 = { headerRight, headerTitle: headerTitle3, render: render3 };
        obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_3] = obj5;
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const Navigator = Navigator2.Navigator;
        const intl = intl2.intl;
        const tmp8 = (
          <Navigator
            screens={first}
            initialRouteName={EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1}
            headerBackTitle={intl.string(intl2.t["13/7kX"])}
          />
        );
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      const memo = react.useMemo(() => {
        let onPress;
        const headerRight = headerRight2;
        let obj = { headerRight, headerLeft, headerTitle, render };
        const obj2 = { headerRight, headerTitle: headerTitle2, render: render2 };
        const obj3 = { headerRight, headerTitle: headerTitle3, render: render3 };
        return {
          [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_1]: obj,
          [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_2]: obj2,
          [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_3]: obj3,
        };
      }, []);
      const Navigator = Navigator2.Navigator;
      let intl = intl2.intl;
      return (
        <Navigator
          screens={memo}
          initialRouteName={EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1}
          headerBackTitle={intl.string(intl2.t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx",
);

export default tmp2;
