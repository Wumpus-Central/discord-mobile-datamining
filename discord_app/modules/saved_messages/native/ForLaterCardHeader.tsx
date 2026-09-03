// discord_app/modules/saved_messages/native/ForLaterCardHeader.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import computeChannelNameDefault from "../../channel/useChannelName.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import FacepileGroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import closure_4 from "../../../stores/GuildStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

function HeaderIcon(channel) {
  channel = channel.channel;
  let obj = channel(586);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp2(6013).GuildIconSizes.XSMALL;
    let tmp6Result = callback(GuildIconSizesDefault, obj);
    const tmp13 = GuildIconSizesDefault;
  } else {
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      obj = { channel: null, size: null };
      obj[0] = channel;
      obj[1] = tmp2(1296).AvatarSizes.XSMALL;
      tmp6Result = tmp6(FacepileGroupDMAvatarDefault, obj);
      const tmp10 = FacepileGroupDMAvatarDefault;
    } else {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.dmIcon;
      obj1[1] = tmp6(tmp2(5025).ChatIcon, { size: "xxs" });
      tmp6Result = tmp6(View, obj1);
    }
  }
  return tmp6Result;
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = channel(586);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id));
  const tmp5 = computeChannelNameDefault(channel, false);
  obj1 = channel(4982);
  const channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, stateFromStores);
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    isPrivateResult = null == channelIconComponentWithGuild;
  }
  let formatToPlainStringResult = tmp5;
  if (channel.isDM()) {
    const intl = tmp2(1233).intl;
    obj = { username: null };
    obj[0] = tmp5;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1233).t.smD7XV, obj);
  }
  obj = { style: tmp.channelNameContainer, children: null };
  let tmp12 = null;
  if (!isPrivateResult) {
    obj1 = { style: null, size: "xxs" };
    obj1[0] = tmp.channelTypeIcon;
    tmp12 = callback(channelIconComponentWithGuild, obj1);
  }
  const items1 = [
    tmp12,
    callback(channel(4474).Text, {
      style: tmp.channelName,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: formatToPlainStringResult,
    }),
  ];
  obj[1] = items1;
  return closure_6(View, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
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
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.sm,
};
obj[1] = obj;
obj[2] = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj[3] = { flexShrink: 1 };
obj[4] = { marginRight: 4 };
obj[5] = { marginVertical: -4, marginLeft: "auto" };
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = function ForLaterCardHeader(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = { style: tmp.cardHeader, children: null };
  const items = [callback(HeaderIcon, { channel }), , ,];
  let tmp4Result = null;
  if (!channel.isPrivate()) {
    tmp4Result = tmp4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
  }
  items[1] = tmp4Result;
  items[2] = callback(ChannelName, { channel });
  obj = { style: tmp.actionsContainer, children: channel.actions };
  items[3] = callback(View, obj);
  obj[1] = items;
  return closure_6(View, obj);
};
