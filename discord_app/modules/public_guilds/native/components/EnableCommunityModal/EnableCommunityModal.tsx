// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx
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
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx",
);

export default function EnableCommunityModal() {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(7325), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1115).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1115).t.cpT0Cq);
      return closure_1_4(closure_1_0(7707).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18204), {});
        },
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18216), {});
        },
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18217), {});
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
}
