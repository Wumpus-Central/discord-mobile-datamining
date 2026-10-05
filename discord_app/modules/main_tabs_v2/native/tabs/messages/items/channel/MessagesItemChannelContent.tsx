// === Module 15962: MessagesItemChannelContent ===

// Module 15962 (MessagesItemChannelContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef4461 from "module_4461" /* 4461 */;
import useThemeDefault from "useTheme" /* 4791 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import _modDef6457 from "module_6457" /* 6457 */;
import isChangelogChannelDefault from "isChangelogChannel" /* 7519 */;
import _modDef7589 from "module_7589" /* 7589 */;
import BotTagDefault from "BotTag" /* 8961 */;
import GuildTagDefault from "GuildTag" /* 9395 */;
import ActivityStatusDefault from "ActivityStatus" /* 10609 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10633 */;
import _modDef10693 from "module_10693" /* 10693 */;
import _modDef11065 from "module_11065" /* 11065 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 15137 */;
import usePrivateChannelWaveDefault from "usePrivateChannelWave" /* 15964 */;
import MessagesItemChannelWaveDefault from "MessagesItemChannelWave" /* 15966 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;

const native = channelMutedIcon(1188);
require = fn;
const View = fn(17).View;
const UnreadSetting = fn(5072).UnreadSetting;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let createStyles = fn(4890);
let obj = { content: { flex: 1 }, channelIcon: { alignSelf: "center" }, channelNameAndAccessories: { flexDirection: "row", alignItems: "center", width: "100%" }, channelIcons: { flexDirection: "row", alignItems: "center" }, channelAccessoriesContainer: { flexDirection: "row", justifyContent: "flex-end", marginLeft: nativeDefault.space.PX_4 }, channelAccessories: null, channelNameAndBadge: null, botTag: null, contentPadded: null };
let obj3 = { flexDirection: "row", justifyContent: "flex-end", marginLeft: nativeDefault.space.PX_4 };
obj.channelAccessories = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", borderRadius: nativeDefault.radii.xs, paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1 };
let obj4 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", borderRadius: nativeDefault.radii.xs, paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1 };
obj.channelNameAndBadge = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
obj.botTag = { marginRight: nativeDefault.space.PX_4 };
let obj6 = { marginRight: nativeDefault.space.PX_4 };
obj.contentPadded = { paddingRight: nativeDefault.space.PX_40 };
let closure_9 = createStyles.createStyles(obj);
createStyles = fn(4890);
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
  const obj = { channelText: { color: MOBILE_TEXT_HEADING_PRIMARY }, channelName: { flexShrink: 1 }, timestamp: { color: tmp5(587).colors.TEXT_SUBTLE } };
  return obj;
});
createStyles = fn(4890);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { channelIcon: { marginRight: nativeDefault.space.PX_4 }, channelMutedIcon: null, channelFavoriteIcon: null, channelIgnoredIcon: null };
  const colors = nativeDefault.colors;
  obj.channelMutedIcon = { tintColor: arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED };
  const colors2 = nativeDefault.colors;
  obj.channelFavoriteIcon = { tintColor: arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED };
  const colors3 = nativeDefault.colors;
  obj.channelIgnoredIcon = { tintColor: arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  channelMutedIcon = require;
  let items = dependencyMap;
  const cResult = c.c(12);
  ({ muted, favorite, ignored, blocked } = selected);
  channelMutedIcon2 = closure_11(selected.selected);
  if (blocked) {
    if (cResult[0] === channelMutedIcon2.channelIcon) {
    }
    const obj2 = { source: _modDef7589, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    items = [, ];
    ({ channelIcon: arr[0], channelMutedIcon } = channelMutedIcon2);
    items[1] = channelMutedIcon;
    obj2.style = items;
    const tmp21 = timestampProducer(native.Icon, obj2);
    ({ channelIcon: tmp[0], channelMutedIcon: channelMutedIcon2 } = channelMutedIcon2);
    cResult[1] = channelMutedIcon2;
    cResult[2] = tmp21;
  } else if (ignored) {
    if (cResult[3] === channelMutedIcon2.channelIcon) {
    }
    const obj3 = { source: _modDef6457, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items1 = [, ];
    ({ channelIcon: arr4[0], channelIgnoredIcon: arr4[1] } = channelMutedIcon2);
    obj3.style = items1;
    const tmp16 = timestampProducer(native.Icon, obj3);
    cResult[3] = channelMutedIcon2.channelIcon;
    cResult[4] = channelMutedIcon2.channelIgnoredIcon;
    cResult[5] = tmp16;
  } else if (muted) {
    if (cResult[6] === channelMutedIcon2.channelIcon) {
    }
    const obj4 = { source: _modDef11065, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items2 = [, ];
    ({ channelIcon: arr3[0], channelMutedIcon: arr3[1] } = channelMutedIcon2);
    obj4.style = items2;
    const tmp11 = timestampProducer(native.Icon, obj4);
    cResult[6] = channelMutedIcon2.channelIcon;
    cResult[7] = channelMutedIcon2.channelMutedIcon;
    cResult[8] = tmp11;
  } else if (!favorite) {
    return null;
  } else {
    if (cResult[9] === channelMutedIcon2.channelFavoriteIcon) {
    }
    const obj5 = { source: _modDef10693, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items3 = [, ];
    ({ channelIcon: arr2[0], channelFavoriteIcon: arr2[1] } = channelMutedIcon2);
    obj5.style = items3;
    const tmp6 = timestampProducer(native.Icon, obj5);
    cResult[9] = channelMutedIcon2.channelFavoriteIcon;
    cResult[10] = channelMutedIcon2.channelIcon;
    cResult[11] = tmp6;
  }
}) : ((selected) => {
  ({ muted, favorite, ignored, blocked } = selected);
  const tmp = closure_11(selected.selected);
  if (blocked) {
    const obj2 = { source: _modDef7589, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items = [, ];
    ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
    obj2.style = items;
    let tmp2 = timestampProducer(native.Icon, obj2);
  } else if (ignored) {
    const obj3 = { source: _modDef6457, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items1 = [, ];
    ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
    obj3.style = items1;
    tmp2 = timestampProducer(native.Icon, obj3);
  } else if (muted) {
    const obj4 = { source: _modDef11065, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
    const items2 = [, ];
    ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
    obj4.style = items2;
    tmp2 = timestampProducer(native.Icon, obj4);
  } else {
    tmp2 = null;
    if (favorite) {
      const obj = { source: _modDef10693, size: native.Icon.Sizes.EXTRA_SMALL, style: null };
      const items3 = [, ];
      ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
      obj.style = items3;
      tmp2 = timestampProducer(native.Icon, obj);
    }
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let obj7 = { paddingRight: nativeDefault.space.PX_40 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(104);
  channel = channel.channel;
  ({ channelSelected, favorite, muted, ignored, blocked, hasActivity, hasUnreadMessages, hasNameplate } = channel);
  const tmp5 = useThemeDefault();
  if (cResult[0] !== tmp5) {
    const isThemeLightResult = tmp(4587).isThemeLight(tmp5);
    cResult[0] = tmp5;
    cResult[1] = isThemeLightResult;
    const tmpResult = tmp(4587);
  }
  let tmp8 = hasUnreadMessages;
  if (hasUnreadMessages) {
    tmp8 = channel.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
  }
  let tmp10 = muted;
  if (!muted) {
    tmp10 = ignored;
  }
  if (!tmp10) {
    tmp10 = blocked;
  }
  if (tmp10) {
    tmp10 = !channelSelected;
  }
  closure_9();
  closure_10(channelSelected, tmp8, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[2] = items;
    let tmp13 = items;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] !== channel.id) {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
    cResult[3] = channel.id;
    cResult[4] = D;
  } else {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(tmp13, D);
  if (cResult[5] !== hasUnreadMessages) {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
    tmp18[0] = hasUnreadMessages;
    cResult[5] = hasUnreadMessages;
    cResult[6] = tmp18;
  } else {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
  }
  const tmp19 = useMessagePreviewsDefault(channel, tmp18);
  if (cResult[7] === channel.id) {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
  }
  let tmp20 = null != tmp19;
  if (tmp20) {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
    tmp20 = obj4.diff(tmp19.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    const tmp21 = obj4.diff(tmp19.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp20) {
    class D {
      constructor() {
        return closure_4.lastMessageId(channel.id);
      }
    }
  }
  cResult[7] = channel.id;
  cResult[8] = hasActivity;
  cResult[9] = hasUnreadMessages;
  cResult[10] = tmp19;
  cResult[11] = tmp20;
  const tmpResult2 = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
  ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
  let tmp5 = hasUnreadMessages;
  const obj = channel(4587);
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
  const isThemeLightResult = channel(4587).isThemeLight(useThemeDefault());
  const items = [ReadStateStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => ReadStateStore.lastMessageId(channel.id));
  const tmp11 = useMessagePreviewsDefault(channel, { unread: hasUnreadMessages });
  let tmp12 = null != tmp11;
  if (tmp12) {
    const obj3 = _modDef4461();
    tmp12 = _modDef4461().diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    const tmp13 = _modDef4461().diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp12) {
    tmp12 = !isChangelogChannelDefault(channel.id);
  }
  const tmpResult = channel(504);
  const tmpResult3 = channel(15963);
  let id = stateFromStores;
  if (stateFromStores == null) {
    id = channel.id;
  }
  const tmp3Result = SnowflakeUtilsDefault;
  const relativeTimestamp = tmpResult3.useRelativeTimestamp({ timestamp: SnowflakeUtilsDefault.extractTimestamp(id) });
  let tmp15 = channel.isPrivate() && !channel.isMultiUserDM() && null != channel.recipients;
  if (tmp15) {
    tmp15 = channel.recipients.length > 0;
  }
  const tmp16 = useChannelNameDefault(channel);
  const tmp17 = usePrivateChannelWaveDefault(channel, stateFromStores);
  const waveShouldShow = tmp17.waveShouldShow;
  let obj4 = { variant: null, style: null, lineClamp: 1, ellipsizeMode: "tail" };
  const obj2 = { timestamp: SnowflakeUtilsDefault.extractTimestamp(id) };
  obj4.variant = channel(4580).useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE);
  const items1 = [, ];
  ({ channelText: arr2[0], channelName: arr2[1] } = tmp9);
  obj4.style = items1;
  const obj5 = { style: tmp8.content, children: null };
  const obj6 = { style: tmp8.channelNameAndAccessories, children: null };
  const obj7 = { style: tmp8.channelNameAndBadge, children: null };
  if (channel.isDM()) {
    if (null != channel.recipients) {
      if (channel.recipients.length > 0) {
        const obj8 = { userId: channel.recipients[0], userName: tmp16, effectDisplayType: null };
        const EffectDisplayType = tmp(10634).EffectDisplayType;
        obj8.effectDisplayType = channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN;
        obj4 = Object.assign(obj4);
        closure_6(UsernameWithEffectsDefault, obj8);
        const tmp3Result4 = UsernameWithEffectsDefault;
      }
    }
  }
  const obj9 = {};
  const merged = Object.assign(obj4);
  obj9.children = tmp16;
  const items2 = [closure_6(channel(4886).Text, obj9), , ];
  let tmp20Result = null;
  if (tmp15) {
    const obj10 = { userId: channel.recipients[0], disabledTooltip: true };
    tmp20Result = closure_6(GuildTagDefault, obj10);
  }
  items2[1] = tmp20Result;
  let tmp20Result5 = null;
  if (channel.isSystemDM()) {
    const obj11 = { style: tmp8.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: true };
    tmp20Result5 = closure_6(BotTagDefault, obj11);
    const tmp3Result5 = BotTagDefault;
  }
  items2[2] = tmp20Result5;
  obj7.children = items2;
  const items3 = [closure_7(View, obj7), ];
  const items4 = [tmp8.channelAccessoriesContainer, ];
  let num4 = 0;
  if (hasNameplate) {
    num4 = 0;
    if (!waveShouldShow) {
      num4 = 40;
    }
  }
  const obj12 = { style: items4, children: null };
  items4[1] = { minWidth: num4 };
  const items5 = [tmp8.channelAccessories, , ];
  let obj13;
  if (waveShouldShow) {
    obj13 = { paddingVertical: 0 };
  }
  items5[1] = obj13;
  if (!hasNameplate) {
    const obj14 = { style: null, children: null };
    items5[2] = undefined;
    obj14.style = items5;
    const obj15 = { style: tmp8.channelIcons, children: null };
    const obj16 = { muted, favorite, ignored, blocked, selected: channelSelected };
    obj15.children = closure_6(closure_12, obj16);
    const items6 = [closure_6(View, obj15), ];
    let tmp20Result6 = !waveShouldShow;
    if (!waveShouldShow) {
      const obj17 = { style: null, variant: "text-xs/medium", lineClamp: 1, children: null };
      const items7 = [, ];
      ({ channelText: arr8[0], timestamp: arr8[1] } = tmp9);
      obj17.style = items7;
      obj17.children = relativeTimestamp;
      tmp20Result6 = closure_6(tmp(4886).Text, obj17);
    }
    items6[1] = tmp20Result6;
    obj14.children = items6;
    obj12.children = closure_7(View, obj14);
    items3[1] = closure_6(View, obj12);
    obj6.children = items3;
    const items8 = [closure_7(View, obj6), ];
    let contentPadded;
    if (hasNameplate) {
      if (!waveShouldShow) {
        contentPadded = tmp8.contentPadded;
      }
    }
    const obj18 = { style: contentPadded, children: null };
    if (tmp12) {
      const obj19 = { message: tmp11, channel, color: null, layout: null, muted: null };
      let str6 = "text-muted";
      let str7 = "text-muted";
      if (!tmp7) {
        if (channelSelected) {
          str6 = "mobile-text-heading-primary";
        }
        str7 = str6;
      }
      obj19.color = str7;
      obj19.layout = tmp(7514).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
      obj19.muted = muted;
      let tmp20Result7 = closure_6(tmp(12488).ChannelRowPreview, obj19);
    } else if (channel.isDM()) {
      const obj20 = { textStyle: tmp9.channelText, userId: channel.getRecipientId(), guildId: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj20.guildId = guild_id;
      tmp20Result7 = closure_6(ActivityStatusDefault, obj20);
      const tmp3Result6 = ActivityStatusDefault;
    } else {
      tmp20Result7 = null;
      if (isChangelogChannelDefault(channel.id)) {
        const obj21 = { variant: "text-xs/medium", style: tmp9.channelText, lineClamp: 1, children: null };
        const intl = tmp(1126).intl;
        obj21.children = intl.string(tmp(1126).t.FL5T01);
        tmp20Result7 = closure_6(tmp(4886).Text, obj21);
      }
    }
    obj18.children = tmp20Result7;
    items8[1] = closure_6(View, obj18);
    obj5.children = items8;
    const items9 = [closure_7(View, obj5), ];
    let tmp20Result8 = null;
    if (waveShouldShow) {
      const obj22 = { wavePressed: tmp17.wavePressed, hasNameplate };
      tmp20Result8 = closure_6(MessagesItemChannelWaveDefault, obj22);
    }
    const obj23 = { children: null };
    items9[1] = tmp20Result8;
    obj23.children = items9;
    return closure_7(closure_8, obj23);
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
    const obj24 = { backgroundColor: combined };
  }
  const tmpResult4 = channel(4580);
}));