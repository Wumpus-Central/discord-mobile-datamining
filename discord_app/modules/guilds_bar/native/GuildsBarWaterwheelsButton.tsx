// === Module 17967: GuildsBarWaterwheelsButton ===

// Module 17967 (GuildsBarWaterwheelsButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2643 from "module_2643" /* 2643 */;
import useToken from "useToken" /* 5481 */;
import Text_Text from "Text/Text" /* 5508 */;
import CompassIcon from "CompassIcon" /* 17048 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 17866 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 17869 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 17912 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17924 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 17960 */;
import noop from "module_19" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 8783 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
function GuildsBarWaterwheelsExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2643.zFl2A4);
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
const WATERWHEELS = fn(1071).WATERWHEELS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4917);
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
  const obj5 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: null, expandedChildren: null, children: null };
  const intl = util.intl;
  obj5.label = intl.string(_modDef2643.zFl2A4);
  obj5.expandedChildren = React5(GuildsBarWaterwheelsExpandedChildren, {});
  colors = nativeDefault.colors;
  obj5.children = React5(CompassIcon.CompassIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  items1[1] = React5(GuildsBarAnimatedItemWrapperDefault, obj5);
  obj4.children = items1;
  return React6(View, obj4);
});