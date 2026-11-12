// === Module 18971: GuildsBarWaterwheelsButton ===

// Module 18971 (GuildsBarWaterwheelsButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import useToken from "useToken" /* 5839 */;
import Text_Text from "Text/Text" /* 5866 */;
import CompassIcon from "CompassIcon" /* 18105 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18887 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18918 */;
import HomeDrawerShared from "HomeDrawerShared" /* 18930 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 18964 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 18972 */;
import noop from "module_19" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10149 */;
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
let closure_10 = createStyles.createStyles((marginBottom) => {
  const obj = { stretch: { alignSelf: "stretch", marginBottom: -marginBottom } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx");

export default noop.memo(function GuildsBarWaterwheelsButton() {
  const tmp = closure_10(useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING));
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId() === WATERWHEELS);
  const obj4 = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({ onPress }), []);
  const items1 = [React5(GuildsBarSeparatorDefault, {}), ];
  const obj5 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: null, expandedChildren: false, children: null };
  const intl = util.intl;
  obj5.label = intl.string(_modDef2553.zFl2A4);
  obj5.expandedChildren = React5(GuildsBarWaterwheelsExpandedChildren, {});
  colors = nativeDefault.colors;
  obj5.children = React5(CompassIcon.CompassIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  items1[1] = React5(GuildsBarAnimatedItemWrapperDefault, obj5);
  obj4.children = items1;
  return React6(View, obj4);
});