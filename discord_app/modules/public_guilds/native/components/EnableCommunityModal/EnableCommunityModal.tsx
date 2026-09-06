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
      const obj = { source: closure_1_1(6992), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1114).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1114).t.cpT0Cq);
      return closure_1_4(closure_1_0(7377).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft,
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_4(closure_1_1(17664), {});
      },
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_4(closure_1_1(17676), {});
      },
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_4(closure_1_1(17677), {});
      },
    };
    return {
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: obj,
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: obj,
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: obj,
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
