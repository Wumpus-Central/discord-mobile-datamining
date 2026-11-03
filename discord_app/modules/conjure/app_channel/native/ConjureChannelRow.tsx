// === Module 18420: ConjureChannelRow ===

// Module 18420 (ConjureChannelRow)
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjureNumberBadgeDefault from "ConjureNumberBadge" /* 13149 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 14068 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18421 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Routes = fn(1072).Routes;
const StaticChannelRoute = fn(4997).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = { container: { marginVertical: fn(11186).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md }, badge: null };
const obj3 = { marginVertical: fn(11186).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
obj2.badge = { paddingStart: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default function ConjureChannelRow(selected) {
  selected = selected.selected;
  const tmp = closure_8();
  const id = selected.guild.id;
  items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(id));
  if (true === selected) {
    let DEFAULT = id(14068).ChannelModes.SELECTED;
    let tmp7 = id;
  } else {
    const ChannelModes = id(14068).ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp7 = tmp6;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp7 = tmp6;
    }
  }
  const obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null };
  const tmp5 = useConjureGuildUnreadSummaryDefault(id);
  const intl = tmp7(1113).intl;
  obj.accessibilityLabel = intl.string(_modDef3995.uk6jhJ);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj.unread = hasUnread;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp7(1113).intl;
  obj2.name = intl2.string(_modDef3995.uk6jhJ);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp7(14068).BaseChannelName, { name: null, mode: null });
  const tmp3Result = BaseChannelItemDefault;
  obj.icon = jsx(tmp7(14068).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp7(12259).MagicWandIcon });
  let tmp9Result = null;
  if (badgeCount > 0) {
    const obj4 = { style: tmp.badge, children: null };
    const obj5 = { value: badgeCount };
    obj4.children = jsx(ConjureNumberBadgeDefault, { value: badgeCount });
    tmp9Result = <View style={tmp.badge}>{null}</View>;
  }
  obj.channelInfo = tmp9Result;
  return <tmp3Result onPress={callback} style={tmp.container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} unread={null} name={null} icon={null} channelInfo={null} />;
};