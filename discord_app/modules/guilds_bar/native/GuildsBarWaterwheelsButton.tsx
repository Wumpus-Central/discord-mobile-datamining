// discord_app/modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2534 from "../../waterwheels/WaterwheelsUntranslated.messages.js";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import CompassIcon from "../../../design/components/Icon/native/redesign/generated/CompassIcon.tsx";
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper.tsx";
import HomeDrawerShared from "../../home_drawer/native/HomeDrawerShared.tsx";
import GuildsBarSeparatorDefault from "GuildsBarSeparator.tsx";
import WaterwheelsInterestPickerModal from "../../waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ICYMIStore from "../../icymi/ICYMIStore.tsx";
import InterestPickerSessionStore from "../../waterwheels/interest/InterestPickerSessionStore.tsx";

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
function GuildsBarWaterwheelsExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2534.zFl2A4);
  obj.title = React5(Text_Text.Text, obj2);
  return React5(HomeDrawerShared.HomeDrawerSharedItem, obj);
}
function handleWaterwheelsPress() {
  if (InterestPickerSessionStore.hasSeenPicker()) {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj3 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
      rootNavigationRef.navigate("icymi", obj3);
    }
  } else {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(
      asyncGeneratorStep(async () => {
        await require("asyncRequireImpl")(paths[12], paths.paths);
        return value.default;
      }),
      {},
      WaterwheelsInterestPickerModal.WATERWHEELS_INTEREST_PICKER_MODAL_KEY,
    );
    const tmp4 = asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[12], paths.paths);
      return value.default;
    });
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5142);
let closure_10 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx");

export default noop.memo(function GuildsBarWaterwheelsButton() {
  const tmp = closure_10();
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  items = [ICYMIStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isTabFocused.getIsTabFocused());
  const obj3 = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({ onPress }), []);
  const items1 = [React5(GuildsBarSeparatorDefault, {})];
  const obj4 = {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: guildsBarAnimatedWrapperStyles,
    overState: "y",
    config: memo,
    label: null,
    expandedChildren: false,
    children: false,
  };
  const intl = util.intl;
  obj4.label = intl.string(_modDef2534.zFl2A4);
  obj4.expandedChildren = React5(GuildsBarWaterwheelsExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = React5(CompassIcon.CompassIcon, {
    size: "md",
    color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
  });
  items1[1] = React5(GuildsBarAnimatedItemWrapperDefault, obj4);
  obj3.children = items1;
  return React6(View, obj3);
});
