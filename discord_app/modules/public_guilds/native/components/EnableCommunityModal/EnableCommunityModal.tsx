// === Module 18331: EnableCommunityModal ===

// Module 18331 (EnableCommunityModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6211 */;
import Navigator from "Navigator" /* 6686 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 18330 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 18332 */;
import noop from "module_19" /* 19 */;

require = fn;
function onModalClose() {
  EnableCommunityModalActionCreatorsDefault.close();
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderBackButton(arg0) {
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
}) : (function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    EnableCommunityModalActionCreatorsDefault.close();
    return true;
  });
  const intl = util.intl;
  return NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EnableCommunityModal() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function headerRight() {
      const obj = { source: closure_1_1(5010), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1126).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1126).t.cpT0Cq);
      return closure_1_4(closure_1_0(7082).HeaderActionButton, obj);
    }
    const obj2 = {};
    const obj3 = {
      headerRight,
      headerLeft,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18333), {});
        }
    };
    obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1] = obj3;
    const obj4 = {
      headerRight,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18345), {});
        }
    };
    obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_2] = obj4;
    const obj5 = {
      headerRight,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18346), {});
        }
    };
    obj2[EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_3] = obj5;
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { screens: first, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
    const intl = util.intl;
    obj6.headerBackTitle = intl.string(util.t["13/7kX"]);
    const tmp8 = jsx(Navigator.Navigator, { screens: first, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function EnableCommunityModal() {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(5010), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1126).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1126).t.cpT0Cq);
      return closure_1_4(closure_1_0(7082).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18333), {});
        }
      },
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18345), {});
        }
      },
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18346), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
});