// === Module 16831: renderChannelItem ===

// Module 16831 (renderChannelItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useChannelName from "useChannelName" /* 5043 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9260 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10648 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16832 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16833 */;
import renderChannelContentDefault from "renderChannelContent" /* 16835 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
function LaunchpadChannelIcon(channel) {
  let guild;
  let items1;
  let items3;
  let obj9;
  let tmp14;
  if (closure_12) {
    let first;
    let tmp24;
    let tmp26;
    let tmp28;
    const obj6 = channel(576);
    const cResult = obj6.c(14);
    const channel2 = channel.channel;
    const tmp19 = closure_11();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp23 = getLayoutStylesDefault();
      cResult[0] = tmp23;
      first = tmp23;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildStore];
      cResult[1] = items;
      tmp24 = items;
    } else {
      tmp24 = cResult[1];
    }
    if (cResult[2] !== channel2.guild_id) {
      const fn = function v() {
        return guild.getGuild(channel2.guild_id);
      };
      cResult[2] = channel2.guild_id;
      cResult[3] = fn;
      tmp26 = fn;
    } else {
      tmp26 = cResult[3];
    }
    const tmp15Result = channel(504);
    const stateFromStores = tmp15Result.useStateFromStores(tmp24, tmp26);
    if (cResult[4] !== stateFromStores) {
      const obj2 = { guild: stateFromStores, size: first.icon.guildBadgeIconSize };
      const tmp31 = closure_8(GuildIconDefault, obj2);
      cResult[4] = stateFromStores;
      cResult[5] = tmp31;
      tmp28 = tmp31;
    } else {
      tmp28 = cResult[5];
    }
    if (cResult[6] === tmp19.guildBadgeIcon) {
      let tmp32;
      let tmp36;
      if (cResult[7] === tmp28) {
        tmp32 = cResult[8];
      }
      if (cResult[9] !== channel2) {
        const obj3 = { channel: channel2, size: "sm", wrapperSize: 32 };
        const tmp38 = closure_8(channel(11817).ChannelIcon, obj3);
        cResult[9] = channel2;
        cResult[10] = tmp38;
        tmp36 = tmp38;
      } else {
        tmp36 = cResult[10];
      }
      if (cResult[11] === tmp32) {
        let tmp39;
        if (cResult[12] === tmp36) {
          tmp39 = cResult[13];
        }
        tmp14 = tmp39;
      }
      const obj4 = { children: items1 };
      items1 = [tmp32, tmp36];
      const tmp42 = closure_10(closure_9, obj4);
      cResult[11] = tmp32;
      cResult[12] = tmp36;
      cResult[13] = tmp42;
      tmp39 = tmp42;
    }
    const obj5 = { style: tmp19.guildBadgeIcon, children: tmp28 };
    const tmp35 = closure_8(View, obj5);
    cResult[6] = tmp19.guildBadgeIcon;
    cResult[7] = tmp28;
    cResult[8] = tmp35;
    tmp32 = tmp35;
  } else {
    channel = channel.channel;
    const tmp3 = closure_11();
    const items2 = [GuildStore];
    const obj7 = { children: items3 };
    const tmp6 = getLayoutStylesDefault();
    const obj8 = { style: tmp3.guildBadgeIcon, children: closure_8(GuildIconDefault, obj9) };
    const obj = channel(504);
    const stateFromStores1 = obj.useStateFromStores(items2, () => GuildStore.getGuild(channel.guild_id));
    obj9 = { guild: stateFromStores1, size: tmp6.icon.guildBadgeIconSize };
    items3 = [closure_8(View, obj8), ];
    const obj10 = { channel, size: "sm", wrapperSize: 32 };
    items3[1] = closure_8(channel(11817).ChannelIcon, obj10);
    tmp14 = closure_10(closure_9, obj7);
  }
  return tmp14;
}
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles(() => {
  let rect;
  const obj = { guildBadgeIcon: rect };
  rect = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  return obj;
});
let closure_12 = ReactCompilerGating.isReactCompilerEnabled();
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

export default function renderChannelItem(unread) {
  let channel;
  let channelCategoryName;
  let channelName;
  let connected;
  let end;
  let fontScale;
  let isSubscriptionGated;
  let latestMessageTimestamp;
  let locked;
  let mentionBadge;
  let mentionCount;
  let subtitle;
  let tmp11Result;
  let unreadBadge;
  ({ channel, locked } = unread);
  ({ channelCategoryName, subtitle, unreadBadge, mentionBadge } = unread);
  if (locked === undefined) {
    locked = false;
  }
  let flag = unread.unread;
  if (flag === undefined) {
    flag = false;
  }
  let ONLY_MENTIONS = unread.resolvedUnreadSetting;
  if (ONLY_MENTIONS === undefined) {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  let flag2 = unread.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = unread.muted;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ latestMessageTimestamp, end, channelName, isSubscriptionGated, connected, mentionCount, fontScale } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      const obj = NotificationCenterUtils;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStylesDefault();
  const children = [unreadBadge, , , ];
  const obj2 = { style: size, children: tmp11Result };
  size = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const tmp8 = renderChannelWrapperDefault;
  const merged = Object.assign(tmp7.icon.margin);
  if (channel.isGroupDM()) {
    const obj3 = { channel, size: tmp7.icon.avatarSize };
    tmp11Result = metroImportAll(GroupDMAvatarDefault, obj3);
  } else {
    const obj4 = { channel };
    tmp11Result = metroImportAll(LaunchpadChannelIcon, obj4);
  }
  children[1] = metroImportAll(View, obj2);
  const tmp5Result = renderChannelContentDefault;
  if (channelName == null) {
    const obj6 = useChannelName;
    channelName = obj6.computeChannelName(channel, UserStore, RelationshipStore);
  }
  children[2] = tmp5Result({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  let tmp11Result2 = null;
  if (null != end) {
    const obj5 = { style: { paddingLeft: 8 }, children: end };
    tmp11Result2 = metroImportAll(View, obj5);
  }
  children[3] = tmp11Result2;
  return tmp8(authStore(React4, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  let embeddedActivitiesCount;
  let mentionCount;
  let stringResult;
  let unread;
  let voiceStates;
  channel = channel.channel;
  const obj = { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }), accessibilityHint: stringResult };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t["9C444m"]);
  }
  return obj;
};