// === Module 20041: EnableCommunityModal ===

// Module 20041 (EnableCommunityModal)
import util from "util" /* 1112 */;
import NavigatorHeader from "NavigatorHeader" /* 7160 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7166 */;
import Navigator from "Navigator" /* 7324 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 20040 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 20042 */;
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
      const obj = { source: closure_1_1(7718), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1112).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1112).t.cpT0Cq);
      return closure_1_4(closure_1_0(7717).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(20043), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(20055), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(20056), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};