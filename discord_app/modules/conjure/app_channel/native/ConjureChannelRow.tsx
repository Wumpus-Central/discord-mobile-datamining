// === Module 18220: ConjureChannelRow ===

// Module 18220 (ConjureChannelRow)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import BaseChannelItem from "BaseChannelItem" /* 13887 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14669 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18221 */;
import ChannelBadgeDefault from "ChannelBadge" /* 18222 */;
import noop from "module_19" /* 19 */;

const BaseChannelItemDefault = BaseChannelItem;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { container: { marginVertical: fn(11027).CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default function ConjureChannelRow(selected) {
  selected = selected.selected;
  const tmp4 = useConjureGuildUnreadSummaryDefault(selected.guild.id);
  const hasUnread = tmp4.hasUnread;
  if (true === selected) {
    let DEFAULT = BaseChannelItem.ChannelModes.SELECTED;
    let tmp6 = require;
  } else {
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp6 = require;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp6 = require;
    }
  }
  const obj = { onPress: null, style: null, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, unread: null, name: null, icon: null, channelInfo: null };
  const tmp = closure_4();
  obj.onPress = openConjureProjectsSheetDefault;
  obj.style = tmp.container;
  const intl = tmp6(1114).intl;
  obj.accessibilityLabel = intl.string(_modDef3865.uk6jhJ);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj.unread = hasUnread;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1114).intl;
  obj2.name = intl2.string(_modDef3865.uk6jhJ);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(13887).BaseChannelName, { name: null, mode: null });
  const tmp2Result = BaseChannelItemDefault;
  obj.icon = jsx(tmp6(13887).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp6(12429).MagicWandIcon });
  obj.channelInfo = jsx(ChannelBadgeDefault, { mentionCount: tmp4.badgeCount, isNewChannel: false });
  return <tmp2Result onPress={null} style={null} accessible accessibilityLabel={null} accessibilityState={null} mode={null} unread={null} name={null} icon={null} channelInfo={null} />;
};