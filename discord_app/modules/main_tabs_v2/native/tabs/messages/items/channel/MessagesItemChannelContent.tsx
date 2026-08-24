// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../../../design/void/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import useThemeDefault from "../../../../../../../hooks/useTheme.tsx";
import computeChannelNameDefault from "../../../../../../channel/useChannelName.tsx";
import registerAssetDefault from "../../../../../../../../_runtime/08606_registerAsset.js";
import registerAssetDefault2 from "../../../../../../../../_runtime/08942_registerAsset.js";
import registerAssetDefault3 from "../../../../../../../../_runtime/09994_registerAsset.js";
import registerAssetDefault4 from "../../../../../../../../_runtime/10086_registerAsset.js";
import useMessagePreviewDefault from "../../../../../useMessagePreviews.tsx";
import usePrivateChannelWaveDefault from "../../../../../../channel/usePrivateChannelWave.native.tsx";
import { View } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../../../../stores/ReadStateStore.tsx";
import { SUBTITLE_OPACITY_NORMAL } from "../../../../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import { UnreadSetting } from "../../../../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";

require = arg1;
function MessagesItemChannelContentIcon(selected) {
  ({ muted, favorite, ignored, blocked } = selected);
  const tmp = callback4(selected.selected);
  if (blocked) {
    let obj = { source: null, size: null, style: null };
    obj[0] = registerAssetDefault2;
    obj[1] = Button.Icon.Sizes.EXTRA_SMALL;
    const items = [, ];
    ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
    obj[2] = items;
    let tmp2 = callback(Button.Icon, obj);
  } else if (ignored) {
    obj = { source: null, size: null, style: null };
    obj[0] = registerAssetDefault;
    obj[1] = Button.Icon.Sizes.EXTRA_SMALL;
    const items1 = [, ];
    ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
    obj[2] = items1;
    tmp2 = callback(Button.Icon, obj);
  } else if (muted) {
    obj1 = { source: null, size: null, style: null };
    obj1[0] = registerAssetDefault4;
    obj1[1] = Button.Icon.Sizes.EXTRA_SMALL;
    const items2 = [, ];
    ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
    obj1[2] = items2;
    tmp2 = callback(Button.Icon, obj1);
  } else {
    tmp2 = null;
    if (favorite) {
      obj = { source: null, size: null, style: null };
      obj[0] = registerAssetDefault3;
      obj[1] = Button.Icon.Sizes.EXTRA_SMALL;
      const items3 = [, ];
      ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
      obj[2] = items3;
      tmp2 = callback(Button.Icon, obj);
    }
  }
  return tmp2;
}
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { content: { flex: 1 }, channelIcon: { alignSelf: "center" }, channelNameAndAccessories: { flexDirection: "row", alignItems: "center", width: "100%" }, channelIcons: { flexDirection: "row", alignItems: "center" }, channelAccessoriesContainer: null, channelAccessories: null, channelNameAndBadge: null, botTag: null, contentPadded: null };
obj = { flexDirection: "row", justifyContent: "flex-end", marginLeft: ThemesDefault.space.PX_4 };
obj[4] = obj;
createCacheKey = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", borderRadius: ThemesDefault.radii.xs, paddingHorizontal: ThemesDefault.space.PX_4, paddingVertical: 1 };
obj[5] = createCacheKey;
obj[6] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, flex: 1, minWidth: 0 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, flex: 1, minWidth: 0 };
obj[7] = { marginRight: ThemesDefault.space.PX_4 };
let obj3 = { marginRight: ThemesDefault.space.PX_4 };
obj[8] = { paddingRight: ThemesDefault.space.PX_40 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = createCacheKey.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  if (arg2) {
    let MOBILE_TEXT_HEADING_PRIMARY = ThemesDefault.colors.TEXT_MUTED;
    let tmp5 = importDefault;
  } else {
    if (!arg0) {
      if (!arg1) {
        MOBILE_TEXT_HEADING_PRIMARY = ThemesDefault.colors.MESSAGES_ITEM_CHANNEL_TEXT_DEFAULT;
        tmp5 = importDefault;
      }
    }
    MOBILE_TEXT_HEADING_PRIMARY = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp5 = importDefault;
  }
  let obj = { channelText: { color: MOBILE_TEXT_HEADING_PRIMARY }, channelName: { flexShrink: 1 }, timestamp: null };
  let tmp10;
  if (!arg4) {
    if (!arg2) {
      if (!arg3) {
        tmp10 = SUBTITLE_OPACITY_NORMAL;
      }
    }
  }
  obj = { opacity: tmp10 };
  if (arg4) {
    obj = { color: null };
    obj[0] = tmp5(712).colors.TEXT_SUBTLE;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj[2] = obj;
  return obj;
});
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { channelIcon: null, channelMutedIcon: null, channelFavoriteIcon: null, channelIgnoredIcon: null };
  obj = { marginRight: ThemesDefault.space.PX_4 };
  obj[0] = obj;
  const colors = ThemesDefault.colors;
  obj[1] = { tintColor: arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED };
  const colors2 = tmp(712).colors;
  obj[2] = { tintColor: arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED };
  const colors3 = tmp(712).colors;
  obj[3] = { tintColor: arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED };
  return obj;
});
let obj4 = { paddingRight: ThemesDefault.space.PX_40 };
const memoResult = importAllResult.memo(function MessagesItemChannelContent(channel) {
  channel = channel.channel;
  ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
  ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
  let obj = channel(1364);
  const isThemeLightResult = obj.isThemeLight(useThemeDefault());
  let tmp6 = hasUnreadMessages;
  if (hasUnreadMessages) {
    tmp6 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
  }
  let tmp8 = muted;
  if (!muted) {
    tmp8 = ignored;
  }
  if (!tmp8) {
    tmp8 = blocked;
  }
  if (tmp8) {
    tmp8 = !channelSelected;
  }
  const tmp9 = callback2();
  const tmp10 = callback3(channelSelected, tmp6, tmp8, hasNameplate, useIsMobileVisualRefreshExperimentEnabledDefault("MessagesItemChannelContent"));
  let tmpResult = tmp(589);
  const items = [closure_4];
  const stateFromStores = tmpResult.useStateFromStores(items, () => closure_1_4.lastMessageId(channel.id));
  const tmp12 = useMessagePreviewDefault(channel, { unread: hasUnreadMessages });
  let tmp13 = null != tmp12;
  if (tmp13) {
    let obj2 = tmp3(3975)();
    tmp13 = obj2.diff(tmp12.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    const tmp14 = obj2.diff(tmp12.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp13) {
    tmp13 = !tmp3(8779)(channel.id);
  }
  tmpResult = tmp(15301);
  let tmp3Result = tmp3(11);
  let id = stateFromStores;
  if (stateFromStores == null) {
    id = channel.id;
  }
  obj = { timestamp: tmp3Result.extractTimestamp(id) };
  const relativeTimestamp = tmpResult.useRelativeTimestamp(obj);
  let tmp16 = channel.isPrivate() && !channel.isMultiUserDM() && null != channel.recipients;
  if (tmp16) {
    tmp16 = channel.recipients.length > 0;
  }
  const tmp17 = computeChannelNameDefault(channel);
  const tmp18 = usePrivateChannelWaveDefault(channel, stateFromStores);
  const waveShouldShow = tmp18.waveShouldShow;
  obj = { variant: null, style: null, lineClamp: 1, ellipsizeMode: "tail" };
  const tmp5 = useIsMobileVisualRefreshExperimentEnabledDefault("MessagesItemChannelContent");
  obj[0] = channel(4097).useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE);
  const items1 = [, ];
  ({ channelText: arr2[0], channelName: arr2[1] } = tmp10);
  obj[1] = items1;
  obj1 = { style: tmp9.content, children: null };
  obj2 = { style: tmp9.channelNameAndAccessories, children: null };
  const obj3 = { style: tmp9.channelNameAndBadge, children: null };
  if (channel.isDM()) {
    if (null != channel.recipients) {
      if (channel.recipients.length > 0) {
        const obj4 = { userId: null, userName: null, effectDisplayType: null };
        obj4[0] = channel.recipients[0];
        obj4[1] = tmp17;
        tmp3Result = tmp3(9452);
        const EffectDisplayType = tmp(9453).EffectDisplayType;
        obj4[2] = channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN;
        obj = Object.assign(obj);
        callback(tmp3Result, obj4);
      }
    }
  }
  const obj5 = {};
  const merged = Object.assign(obj);
  obj5.children = tmp17;
  const items2 = [callback(channel(4734).Text, obj5), , ];
  let tmp21Result = null;
  if (tmp16) {
    const obj6 = { userId: null, disabledTooltip: true };
    obj6[0] = channel.recipients[0];
    tmp21Result = tmp21(tmp3(9509), obj6);
  }
  items2[1] = tmp21Result;
  tmp21Result = null;
  if (channel.isSystemDM()) {
    const obj7 = { style: null, type: null, verified: true };
    obj7[0] = tmp9.botTag;
    obj7[1] = tmp3(9462).Types.SYSTEM_DM;
    tmp21Result = tmp21(tmp3(9462), obj7);
    const tmp3Result1 = tmp3(9462);
  }
  items2[2] = tmp21Result;
  obj3[1] = items2;
  const items3 = [closure_8(View, obj3), ];
  const items4 = [tmp9.channelAccessoriesContainer, ];
  let num4 = 0;
  if (hasNameplate) {
    num4 = 0;
    if (!waveShouldShow) {
      num4 = 40;
    }
  }
  const obj8 = { style: items4, children: null };
  items4[1] = { minWidth: num4 };
  const items5 = [tmp9.channelAccessories, , ];
  let obj9;
  if (waveShouldShow) {
    obj9 = { paddingVertical: 0 };
  }
  items5[1] = obj9;
  if (!hasNameplate) {
    const obj10 = { style: null, children: null };
    items5[2] = undefined;
    obj10[0] = items5;
    const obj11 = { style: null, children: null };
    obj11[0] = tmp9.channelIcons;
    const obj12 = { muted: null, favorite: null, ignored: null, blocked: null, selected: null };
    obj12[0] = muted;
    obj12[1] = favorite;
    obj12[2] = ignored;
    obj12[3] = blocked;
    obj12[4] = channelSelected;
    obj11[1] = tmp21(MessagesItemChannelContentIcon, obj12);
    const items6 = [tmp21(tmp20, obj11), ];
    let tmp21Result1 = !waveShouldShow;
    if (!waveShouldShow) {
      const obj13 = { style: null, variant: "text-xs/medium", lineClamp: 1, children: null };
      const items7 = [, ];
      ({ channelText: arr8[0], timestamp: arr8[1] } = tmp10);
      obj13[0] = items7;
      obj13[3] = relativeTimestamp;
      tmp21Result1 = tmp21(tmp(4734).Text, obj13);
    }
    items6[1] = tmp21Result1;
    obj10[1] = items6;
    obj8[1] = tmp19(tmp20, obj10);
    items3[1] = tmp21(tmp20, obj8);
    obj2[1] = items3;
    const items8 = [tmp19(tmp20, obj2), ];
    let contentPadded;
    if (hasNameplate) {
      if (!waveShouldShow) {
        contentPadded = tmp9.contentPadded;
      }
    }
    const obj14 = { style: null, children: null };
    obj14[0] = contentPadded;
    if (tmp13) {
      const obj15 = { message: null, channel: null, color: null, layout: null, muted: null };
      obj15[0] = tmp12;
      obj15[1] = channel;
      let str6 = "text-muted";
      let str7 = "text-muted";
      if (!tmp8) {
        if (channelSelected) {
          str6 = "mobile-text-heading-primary";
        }
        str7 = str6;
      }
      obj15[2] = str7;
      obj15[3] = tmp(4071).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
      obj15[4] = muted;
      let tmp21Result2 = tmp21(tmp(10050).ChannelRowPreview, obj15);
    } else if (channel.isDM()) {
      const obj16 = { textStyle: null, userId: null, guildId: null };
      obj16[0] = tmp10.channelText;
      obj16[1] = channel.getRecipientId();
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj16[2] = guild_id;
      tmp21Result2 = tmp21(tmp3(9893), obj16);
      const tmp3Result2 = tmp3(9893);
    } else {
      tmp21Result2 = null;
      if (tmp3(8779)(channel.id)) {
        const obj17 = { variant: "text-xs/medium", style: null, lineClamp: 1, children: null };
        obj17[1] = tmp10.channelText;
        const intl = tmp(1236).intl;
        obj17[3] = intl.string(tmp(1236).t.FL5T01);
        tmp21Result2 = tmp21(tmp(4734).Text, obj17);
      }
    }
    obj14[1] = tmp21Result2;
    items8[1] = tmp21(tmp20, obj14);
    obj1[1] = items8;
    const items9 = [tmp19(tmp20, obj1), ];
    let tmp21Result3 = null;
    if (waveShouldShow) {
      const obj18 = { wavePressed: null, hasNameplate: null };
      obj18[0] = tmp18.wavePressed;
      obj18[1] = hasNameplate;
      tmp21Result3 = tmp21(tmp3(15304), obj18);
    }
    const obj19 = { children: null };
    items9[1] = tmp21Result3;
    obj19[0] = items9;
    return tmp19(closure_9, obj19);
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
    const obj20 = { backgroundColor: null };
    obj20[0] = combined;
  }
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx");

export default memoResult;