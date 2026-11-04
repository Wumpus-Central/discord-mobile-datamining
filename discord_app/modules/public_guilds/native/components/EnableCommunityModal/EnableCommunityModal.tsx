// === Module 20101: EnableCommunityModal ===

// Module 20101 (EnableCommunityModal)
import util from "util" /* 1113 */;
import NavigatorHeader from "NavigatorHeader" /* 7139 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7145 */;
import Navigator from "Navigator" /* 7306 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 20100 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 20102 */;
import noop from "module_19" /* 19 */;

require = fn;
function onModalClose() {
  EnableCommunityModalActionCreatorsDefault.close();
}
function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    EnableCommunityModalActionCreatorsDefault.close();
    return true;
  });
  const intl = util.intl;
  return NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(8499), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1113).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1113).t.cpT0Cq);
      return closure_1_4(closure_1_0(7698).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(20103), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(20115), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(20116), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};