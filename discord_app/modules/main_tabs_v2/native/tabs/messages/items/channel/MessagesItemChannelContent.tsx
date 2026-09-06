// === Module 16035: MessagesItemChannelContent ===

// Module 16035 (MessagesItemChannelContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef4153 from "module_4153" /* 4153 */;
import useThemeDefault from "useTheme" /* 4495 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import _modDef6969 from "module_6969" /* 6969 */;
import _modDef7930 from "module_7930" /* 7930 */;
import isChangelogChannelDefault from "isChangelogChannel" /* 8374 */;
import GuildTagDefault from "GuildTag" /* 9184 */;
import BotTagDefault from "BotTag" /* 9438 */;
import _modDef10145 from "module_10145" /* 10145 */;
import ActivityStatusDefault from "ActivityStatus" /* 10876 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10899 */;
import _modDef10954 from "module_10954" /* 10954 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 15317 */;
import usePrivateChannelWaveDefault from "usePrivateChannelWave" /* 16037 */;
import MessagesItemChannelWaveDefault from "MessagesItemChannelWave" /* 16039 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;

require = fn;
function MessagesItemChannelContentIcon(selected) {
  ({ muted, favorite, ignored, blocked } = selected);
  const tmp = closure_11(selected.selected);
  if (blocked) {
    let obj = { source: _modDef7930, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items = [, ];
    ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
    obj.style = items;
    let tmp2 = timestampProducer(native.Icon, obj);
  } else if (ignored) {
    obj = { source: _modDef6969, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items1 = [, ];
    ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
    obj.style = items1;
    tmp2 = timestampProducer(native.Icon, obj);
  } else if (muted) {
    const obj1 = { source: _modDef10145, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items2 = [, ];
    ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
    obj1.style = items2;
    tmp2 = timestampProducer(native.Icon, obj1);
  } else {
    tmp2 = null;
    if (favorite) {
      obj = { source: _modDef10954, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
      const items3 = [, ];
      ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
      obj.style = items3;
      tmp2 = timestampProducer(native.Icon, obj);
    }
  }
  return tmp2;
}
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let obj = { content: { flex: 1 }, channelIcon: { alignSelf: "center" }, channelNameAndAccessories: { flexDirection: "row", alignItems: "center", width: "100%" }, channelIcons: { flexDirection: "row", alignItems: "center" }, channelAccessoriesContainer: null, channelAccessories: null, channelNameAndBadge: null, botTag: null, contentPadded: null };
obj = { flexDirection: "row", justifyContent: "flex-end", marginLeft: nativeDefault.space.PX_4 };
obj.channelAccessoriesContainer = obj;
let createStyles = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", borderRadius: nativeDefault.radii.xs, paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1 };
obj.channelAccessories = createStyles;
obj.channelNameAndBadge = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
obj.botTag = { marginRight: nativeDefault.space.PX_4 };
let obj3 = { marginRight: nativeDefault.space.PX_4 };
obj.contentPadded = { paddingRight: nativeDefault.space.PX_40 };
let closure_9 = createStyles.createStyles(obj);
createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  if (arg2) {
    let MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.TEXT_MUTED;
    let tmp5 = importDefault;
  } else {
    if (!arg0) {
      if (!arg1) {
        MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MESSAGES_ITEM_CHANNEL_TEXT_DEFAULT;
        tmp5 = importDefault;
      }
    }
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp5 = importDefault;
  }
  let obj = { channelText: { color: MOBILE_TEXT_HEADING_PRIMARY }, channelName: { flexShrink: 1 }, timestamp: null };
  obj = { color: tmp5(576).colors.TEXT_SUBTLE };
  obj.timestamp = obj;
  return obj;
});
createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0) => {
  let obj = { channelIcon: null, channelMutedIcon: null, channelFavoriteIcon: null, channelIgnoredIcon: null };
  obj = { marginRight: nativeDefault.space.PX_4 };
  obj.channelIcon = obj;
  const colors = nativeDefault.colors;
  obj.channelMutedIcon = { tintColor: arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED };
  const colors2 = nativeDefault.colors;
  obj.channelFavoriteIcon = { tintColor: arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED };
  const colors3 = nativeDefault.colors;
  obj.channelIgnoredIcon = { tintColor: arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED };
  return obj;
});
let obj4 = { paddingRight: nativeDefault.space.PX_40 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx");

export default noop.memo(function MessagesItemChannelContent(channel) {
  channel = channel.channel;
  ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
  ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
  let obj = channel(4269);
  let tmp5 = hasUnreadMessages;
  if (hasUnreadMessages) {
    tmp5 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
  }
  let tmp7 = muted;
  if (!muted) {
    tmp7 = ignored;
  }
  if (!tmp7) {
    tmp7 = blocked;
  }
  if (tmp7) {
    tmp7 = !channelSelected;
  }
  const tmp8 = closure_9();
  const tmp9 = closure_10(channelSelected, tmp5, tmp7);
  let tmpResult = tmp(504);
  const items = [ReadStateStore];
  const stateFromStores = tmpResult.useStateFromStores(items, () => ReadStateStore.lastMessageId(channel.id));
  const tmp11 = useMessagePreviewsDefault(channel, { unread: hasUnreadMessages });
  let tmp12 = null != tmp11;
  if (tmp12) {
    let obj2 = _modDef4153();
    tmp12 = obj2.diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    const tmp13 = obj2.diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp12) {
    tmp12 = !isChangelogChannelDefault(channel.id);
  }
  tmpResult = tmp(16036);
  let tmp3Result = SnowflakeUtilsDefault;
  let id = stateFromStores;
  if (stateFromStores == null) {
    id = channel.id;
  }
  obj = { timestamp: tmp3Result.extractTimestamp(id) };
  const relativeTimestamp = tmpResult.useRelativeTimestamp(obj);
  let tmp15 = channel.isPrivate() && !channel.isMultiUserDM() && null != channel.recipients;
  if (tmp15) {
    tmp15 = channel.recipients.length > 0;
  }
  const tmp16 = useChannelNameDefault(channel);
  const tmp17 = usePrivateChannelWaveDefault(channel, stateFromStores);
  const waveShouldShow = tmp17.waveShouldShow;
  obj = { variant: null, style: null, lineClamp: 1, ellipsizeMode: "tail" };
  const isThemeLightResult = obj.isThemeLight(useThemeDefault());
  obj.variant = channel(4262).useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE);
  const items1 = [, ];
  ({ channelText: arr2[0], channelName: arr2[1] } = tmp9);
  obj.style = items1;
  const obj1 = { style: tmp8.content, children: null };
  obj2 = { style: tmp8.channelNameAndAccessories, children: null };
  const obj3 = { style: tmp8.channelNameAndBadge, children: null };
  if (channel.isDM()) {
    if (null != channel.recipients) {
      if (channel.recipients.length > 0) {
        const obj4 = { userId: channel.recipients[0], userName: tmp16, effectDisplayType: null };
        tmp3Result = UsernameWithEffectsDefault;
        const EffectDisplayType = tmp(10900).EffectDisplayType;
        obj4.effectDisplayType = channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN;
        obj = Object.assign(obj);
        closure_6(tmp3Result, obj4);
      }
    }
  }
  const obj5 = {};
  const merged = Object.assign(obj);
  obj5.children = tmp16;
  const items2 = [closure_6(channel(4556).Text, obj5), , ];
  let tmp20Result = null;
  if (tmp15) {
    const obj6 = { userId: channel.recipients[0], disabledTooltip: true };
    tmp20Result = closure_6(GuildTagDefault, obj6);
  }
  items2[1] = tmp20Result;
  tmp20Result = null;
  if (channel.isSystemDM()) {
    const obj7 = { style: tmp8.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: true };
    tmp20Result = closure_6(BotTagDefault, obj7);
    const tmp3Result1 = BotTagDefault;
  }
  items2[2] = tmp20Result;
  obj3.children = items2;
  const items3 = [closure_7(View, obj3), ];
  const items4 = [tmp8.channelAccessoriesContainer, ];
  let num4 = 0;
  if (hasNameplate) {
    num4 = 0;
    if (!waveShouldShow) {
      num4 = 40;
    }
  }
  const obj8 = { style: items4, children: null };
  items4[1] = { minWidth: num4 };
  const items5 = [tmp8.channelAccessories, , ];
  let obj9;
  if (waveShouldShow) {
    obj9 = { paddingVertical: 0 };
  }
  items5[1] = obj9;
  if (!hasNameplate) {
    const obj10 = { style: null, children: null };
    items5[2] = undefined;
    obj10.style = items5;
    const obj11 = { style: tmp8.channelIcons, children: null };
    const obj12 = { muted, favorite, ignored, blocked, selected: channelSelected };
    obj11.children = closure_6(MessagesItemChannelContentIcon, obj12);
    const items6 = [closure_6(View, obj11), ];
    let tmp20Result1 = !waveShouldShow;
    if (!waveShouldShow) {
      const obj13 = { style: null, variant: "text-xs/medium", lineClamp: 1, children: null };
      const items7 = [, ];
      ({ channelText: arr8[0], timestamp: arr8[1] } = tmp9);
      obj13.style = items7;
      obj13.children = relativeTimestamp;
      tmp20Result1 = closure_6(tmp(4556).Text, obj13);
    }
    items6[1] = tmp20Result1;
    obj10.children = items6;
    obj8.children = closure_7(View, obj10);
    items3[1] = closure_6(View, obj8);
    obj2.children = items3;
    const items8 = [closure_7(View, obj2), ];
    let contentPadded;
    if (hasNameplate) {
      if (!waveShouldShow) {
        contentPadded = tmp8.contentPadded;
      }
    }
    const obj14 = { style: contentPadded, children: null };
    if (tmp12) {
      const obj15 = { message: tmp11, channel, color: null, layout: null, muted: null };
      let str6 = "text-muted";
      let str7 = "text-muted";
      if (!tmp7) {
        if (channelSelected) {
          str6 = "mobile-text-heading-primary";
        }
        str7 = str6;
      }
      obj15.color = str7;
      obj15.layout = tmp(7879).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
      obj15.muted = muted;
      let tmp20Result2 = closure_6(tmp(10109).ChannelRowPreview, obj15);
    } else if (channel.isDM()) {
      const obj16 = { textStyle: tmp9.channelText, userId: channel.getRecipientId(), guildId: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj16.guildId = guild_id;
      tmp20Result2 = closure_6(ActivityStatusDefault, obj16);
      const tmp3Result2 = ActivityStatusDefault;
    } else {
      tmp20Result2 = null;
      if (isChangelogChannelDefault(channel.id)) {
        const obj17 = { variant: "text-xs/medium", style: tmp9.channelText, lineClamp: 1, children: null };
        const intl = tmp(1114).intl;
        obj17.children = intl.string(tmp(1114).t.FL5T01);
        tmp20Result2 = closure_6(tmp(4556).Text, obj17);
      }
    }
    obj14.children = tmp20Result2;
    items8[1] = closure_6(View, obj14);
    obj1.children = items8;
    const items9 = [closure_7(View, obj1), ];
    let tmp20Result3 = null;
    if (waveShouldShow) {
      const obj18 = { wavePressed: tmp17.wavePressed, hasNameplate };
      tmp20Result3 = closure_6(MessagesItemChannelWaveDefault, obj18);
    }
    const obj19 = { children: null };
    items9[1] = tmp20Result3;
    obj19.children = items9;
    return closure_7(closure_8, obj19);
  } else {
    if (isThemeLightResult) {
      let num6 = 0.3;
      if (channelSelected) {
        num6 = 0.6;
      }
      const _HermesInternal2 = HermesInternal;
      let combined = "rgba(255, 255, 255, " + num6 + ")";
    } else {
      let num5 = 0.25;
      if (channelSelected) {
        num5 = 0.7;
      }
      const _HermesInternal = HermesInternal;
      combined = "rgba(0, 0, 0, " + num5 + ")";
    }
    const obj20 = { backgroundColor: combined };
  }
  const tmpResult1 = channel(4262);
});