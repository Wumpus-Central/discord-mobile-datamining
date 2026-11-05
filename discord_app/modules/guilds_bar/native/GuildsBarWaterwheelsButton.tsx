// === Module 18708: GuildsBarWaterwheelsButton ===

// Module 18708 (GuildsBarWaterwheelsButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2537 from "module_2537" /* 2537 */;
import RootNavigationRef from "RootNavigationRef" /* 5325 */;
import Text_Text from "Text/Text" /* 5763 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import CompassIcon from "CompassIcon" /* 17873 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18654 */;
import HomeDrawerShared from "HomeDrawerShared" /* 18666 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 18701 */;
import WaterwheelsInterestPickerModal from "WaterwheelsInterestPickerModal" /* 18709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 9052 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 9071 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
function GuildsBarWaterwheelsExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2537.zFl2A4);
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
    obj.pushLazy(asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[12], paths.paths);
      return value.default;
    }), {}, WaterwheelsInterestPickerModal.WATERWHEELS_INTEREST_PICKER_MODAL_KEY);
    const tmp4 = asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[12], paths.paths);
      return value.default;
    });
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5143);
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
  const items1 = [React5(GuildsBarSeparatorDefault, {}), ];
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: "md", expandedChildren: null, children: null };
  const intl = util.intl;
  obj4.label = intl.string(_modDef2537.zFl2A4);
  obj4.expandedChildren = React5(GuildsBarWaterwheelsExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = React5(CompassIcon.CompassIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  items1[1] = React5(GuildsBarAnimatedItemWrapperDefault, obj4);
  obj3.children = items1;
  return React6(View, obj3);
});