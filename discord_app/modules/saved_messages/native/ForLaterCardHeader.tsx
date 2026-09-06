// discord_app/modules/saved_messages/native/ForLaterCardHeader.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import GroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function HeaderIcon(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: tmp2(5584).GuildIconSizes.XSMALL };
    let tmp6Result = closure_5(GuildIconDefault, obj);
  } else {
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      obj = { channel, size: tmp2(1178).AvatarSizes.XSMALL };
      tmp6Result = tmp6(GroupDMAvatarDefault, obj);
    } else {
      const obj1 = { style: tmp.dmIcon, children: tmp6(tmp2(5071).ChatIcon, { size: "xxs" }) };
      tmp6Result = tmp6(View, obj1);
    }
  }
  return tmp6Result;
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const tmp5 = useChannelNameDefault(channel, false);
  let obj1 = channel(5028);
  const channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, stateFromStores);
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    isPrivateResult = null == channelIconComponentWithGuild;
  }
  let formatToPlainStringResult = tmp5;
  if (channel.isDM()) {
    const intl = tmp2(1114).intl;
    obj = { username: tmp5 };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.smD7XV, obj);
  }
  obj = { style: tmp.channelNameContainer, children: null };
  let tmp12 = null;
  if (!isPrivateResult) {
    obj1 = { style: tmp.channelTypeIcon, size: "xxs" };
    tmp12 = closure_5(channelIconComponentWithGuild, obj1);
  }
  const items1 = [
    tmp12,
    closure_5(channel(4556).Text, {
      style: tmp.channelName,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: formatToPlainStringResult,
    }),
  ];
  obj.children = items1;
  return closure_6(View, obj);
}
const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  dmIcon: null,
  channelNameContainer: null,
  channelName: null,
  channelTypeIcon: null,
  actionsContainer: null,
};
obj = {
  padding: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
};
obj.dmIcon = obj;
obj.channelNameContainer = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.channelName = { flexShrink: 1 };
obj.channelTypeIcon = { marginRight: 4 };
obj.actionsContainer = { marginVertical: -4, marginLeft: "auto" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = function ForLaterCardHeader(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  let obj = { style: tmp.cardHeader, children: null };
  const items = [hasOwnProperty(HeaderIcon, { channel }), , ,];
  let tmp4Result = null;
  if (!channel.isPrivate()) {
    tmp4Result = tmp4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
  }
  items[1] = tmp4Result;
  items[2] = hasOwnProperty(ChannelName, { channel });
  obj = { style: tmp.actionsContainer, children: channel.actions };
  items[3] = hasOwnProperty(View, obj);
  obj.children = items;
  return timestampProducer(View, obj);
};
