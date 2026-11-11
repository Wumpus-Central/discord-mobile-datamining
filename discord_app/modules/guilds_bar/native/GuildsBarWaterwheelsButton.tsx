// discord_app/modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2553 from "../../waterwheels/WaterwheelsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CompassIcon from "../../../design/components/Icon/native/redesign/generated/CompassIcon.tsx";
import WaterwheelsDiscoverNavigation from "../../waterwheels/discover/native/WaterwheelsDiscoverNavigation.tsx";
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper.tsx";
import HomeDrawerShared from "../../home_drawer/native/HomeDrawerShared.tsx";
import GuildsBarSeparatorDefault from "GuildsBarSeparator.tsx";
import openWaterwheelsInterestPickerDefault from "../../waterwheels/interest/native/openWaterwheelsInterestPicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import InterestPickerSessionStore from "../../waterwheels/interest/InterestPickerSessionStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

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
  const items1 = [React5(GuildsBarSeparatorDefault, {})];
  const obj4 = {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: guildsBarAnimatedWrapperStyles,
    overState: "y",
    config: memo,
    label: null,
    expandedChildren: "body-sm/normal",
    children: "text-default",
  };
  const intl = util.intl;
  obj4.label = intl.string(_modDef2553.zFl2A4);
  obj4.expandedChildren = React5(GuildsBarWaterwheelsExpandedChildren, {});
  colors = nativeDefault.colors;
  obj4.children = React5(CompassIcon.CompassIcon, {
    size: "md",
    color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
  });
  items1[1] = React5(GuildsBarAnimatedItemWrapperDefault, obj4);
  obj3.children = items1;
  return React6(View, obj3);
});
