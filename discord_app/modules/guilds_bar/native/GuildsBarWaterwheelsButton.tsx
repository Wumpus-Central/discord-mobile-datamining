// === Module 18976: GuildsBarWaterwheelsButton ===

// Module 18976 (GuildsBarWaterwheelsButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 5866 */;
import CompassIcon from "CompassIcon" /* 18110 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18892 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18923 */;
import HomeDrawerShared from "HomeDrawerShared" /* 18935 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 18969 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 18977 */;
import noop from "module_19" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
function GuildsBarWaterwheelsExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2553.zFl2A4);
  obj.title = React5(Text_Text.Text, obj2);
  return React5(HomeDrawerShared.HomeDrawerSharedItem, obj);
}
function handleWaterwheelsPress() {
  if (obj.selectWaterwheelsDiscoverFromGuildsBar()) {
    if (!InterestPickerSessionStore.hasSeenPicker()) {
      openWaterwheelsInterestPickerDefault();
    }
  }
  obj = WaterwheelsDiscoverNavigation;
}
const View = fn(17).View;
const WATERWHEELS = fn(1072).WATERWHEELS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let closure_10 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx");

export default noop.memo(function GuildsBarWaterwheelsButton() {
  const tmp = closure_10();
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId() === WATERWHEELS);
  const obj3 = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({ onPress }), []);
  const items1 = [React5(GuildsBarSeparatorDefault, {}), ];
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: null, expandedChildren: "body-sm/normal", children: "text-default" };
  const intl = util.intl;
  obj4.label = intl.string(_modDef2553.zFl2A4);
  obj4.expandedChildren = React5(GuildsBarWaterwheelsExpandedChildren, {});
  colors = nativeDefault.colors;
  obj4.children = React5(CompassIcon.CompassIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  items1[1] = React5(GuildsBarAnimatedItemWrapperDefault, obj4);
  obj3.children = items1;
  return React6(View, obj3);
});