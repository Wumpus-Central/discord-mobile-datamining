// === Module 12557: ForLaterCardHeader ===

// Module 12557 (ForLaterCardHeader)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import GuildIconDefault from "GuildIcon" /* 5889 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7542 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 11262 */;
import GuildStore from "GuildStore" /* 2066 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

function HeaderIcon(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, size: tmp2(5889).GuildIconSizes.XSMALL };
    let tmp6Result = closure_5(GuildIconDefault, obj2);
  } else {
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj3 = { channel, size: tmp2(1177).AvatarSizes.XSMALL };
      tmp6Result = closure_5(GroupDMAvatarDefault, obj3);
    } else {
      const obj4 = { style: tmp.dmIcon, children: closure_5(tmp2(5377).ChatIcon, { size: "xxs" }) };
      tmp6Result = closure_5(View, obj4);
    }
  }
  return tmp6Result;
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const tmp5 = useChannelNameDefault(channel, false);
  const obj = channel(504);
  const channelIconComponentWithGuild = channel(5327).getChannelIconComponentWithGuild(channel, stateFromStores);
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    isPrivateResult = null == channelIconComponentWithGuild;
  }
  let formatToPlainStringResult = tmp5;
  if (channel.isDM()) {
    const intl = tmp2(1115).intl;
    const obj3 = { username: tmp5 };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t.smD7XV, obj3);
  }
  const obj4 = { style: tmp.channelNameContainer, children: null };
  let tmp12 = null;
  if (!isPrivateResult) {
    const obj5 = { style: tmp.channelTypeIcon, size: "xxs" };
    tmp12 = closure_5(channelIconComponentWithGuild, obj5);
  }
  const items1 = [tmp12, closure_5(channel(4825).Text, { style: tmp.channelName, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: formatToPlainStringResult })];
  obj4.children = items1;
  return closure_6(View, obj4);
}
const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 }, dmIcon: { padding: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm }, channelNameContainer: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, channelName: { flexShrink: 1 }, channelTypeIcon: { marginRight: 4 }, actionsContainer: { marginVertical: -4, marginLeft: "auto" } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = function ForLaterCardHeader(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  const obj = { style: tmp.cardHeader, children: null };
  const items = [hasOwnProperty(HeaderIcon, { channel }), , , ];
  let tmp4Result = null;
  if (!channel.isPrivate()) {
    tmp4Result = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
  }
  items[1] = tmp4Result;
  items[2] = hasOwnProperty(ChannelName, { channel });
  items[3] = hasOwnProperty(View, { style: tmp.actionsContainer, children: channel.actions });
  obj.children = items;
  return timestampProducer(View, obj);
};