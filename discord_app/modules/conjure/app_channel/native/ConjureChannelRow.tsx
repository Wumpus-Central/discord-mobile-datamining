// discord_app/modules/conjure/app_channel/native/ConjureChannelRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import BaseChannelItem from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import openConjureProjectsSheetDefault from "../../projects/native/openConjureProjectsSheet.tsx";
import useConjureGuildUnreadSummaryDefault from "../../chat/useConjureGuildUnreadSummary.tsx";
import ChannelBadgeDefault from "../../../guild_sidebar/native/ChannelBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const BaseChannelItemDefault = BaseChannelItem;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = {
  container: {
    marginVertical: fn(11046).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.md,
  },
};
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
  const obj = {
    onPress: null,
    style: null,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    unread: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const tmp = closure_4();
  obj.onPress = openConjureProjectsSheetDefault;
  obj.style = tmp.container;
  const intl = tmp6(1113).intl;
  obj.accessibilityLabel = intl.string(_modDef3868.uk6jhJ);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj.unread = hasUnread;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1113).intl;
  obj2.name = intl2.string(_modDef3868.uk6jhJ);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(13922).BaseChannelName, { name: null, mode: null });
  const tmp2Result = BaseChannelItemDefault;
  obj.icon = jsx(tmp6(13922).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp6(12464).MagicWandIcon });
  obj.channelInfo = jsx(ChannelBadgeDefault, { mentionCount: tmp4.badgeCount, isNewChannel: false });
  return (
    <tmp2Result
      onPress={null}
      style={null}
      accessible
      accessibilityLabel={null}
      accessibilityState={null}
      mode={null}
      unread={null}
      name={null}
      icon={null}
      channelInfo={null}
    />
  );
}
