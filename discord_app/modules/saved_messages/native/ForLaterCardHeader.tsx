// discord_app/modules/saved_messages/native/ForLaterCardHeader.tsx
import { View } from "get ActivityIndicator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ChevronSmallRightIcon } from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";
import { FacepileGroupDMAvatar } from "../../group_dm/native/GroupDMAvatar.tsx";
import { GuildIconSizes } from "../../guild/native/GuildIcon.tsx";

let c5;
let closure_6;
function HeaderIcon(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp2(5840).GuildIconSizes.XSMALL;
    let tmp6Result = callback(GuildIconSizes, obj);
    const tmp13 = GuildIconSizes;
  } else {
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      obj = { channel: null, size: null };
      obj[0] = channel;
      obj[1] = tmp2(1297).AvatarSizes.XSMALL;
      tmp6Result = tmp6(FacepileGroupDMAvatar, obj);
      const tmp10 = FacepileGroupDMAvatar;
    } else {
      const obj1 = { style: null, children: null };
      obj1[0] = tmp.dmIcon;
      obj1[1] = tmp6(tmp2(4863).ChatIcon, { size: "xxs" });
      tmp6Result = tmp6(View, obj1);
    }
  }
  return tmp6Result;
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  const tmp5 = computeChannelName(channel, false);
  let obj1 = channel(4827);
  const channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, stateFromStores);
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    isPrivateResult = null == channelIconComponentWithGuild;
  }
  let formatToPlainStringResult = tmp5;
  if (channel.isDM()) {
    const intl = tmp2(1236).intl;
    obj = { username: null };
    obj[0] = tmp5;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.smD7XV, obj);
  }
  obj = { style: tmp.channelNameContainer, children: null };
  let tmp12 = null;
  if (!isPrivateResult) {
    obj1 = { style: null, size: "xxs" };
    obj1[0] = tmp.channelTypeIcon;
    tmp12 = callback(channelIconComponentWithGuild, obj1);
  }
  const items1 = [tmp12, callback(channel(4338).Text, { style: tmp.channelName, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: formatToPlainStringResult })];
  obj[1] = items1;
  return closure_6(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 }, dmIcon: null, channelNameContainer: null, channelName: null, channelTypeIcon: null, actionsContainer: null };
obj = { padding: 6, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm };
obj[1] = obj;
obj[2] = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj[3] = { flexShrink: 1 };
obj[4] = { marginRight: 4 };
obj[5] = { marginVertical: -4, marginLeft: "auto" };
let closure_7 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = function ForLaterCardHeader(channel) {
  channel = channel.channel;
  const tmp = callback2();
  let obj = { style: tmp.cardHeader, children: null };
  const items = [callback(HeaderIcon, { channel }), , , ];
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