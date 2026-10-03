// === Module 16812: renderChannelItem ===

// Module 16812 (renderChannelItem)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useChannelName from "useChannelName" /* 5043 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9260 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10648 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16813 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16814 */;
import renderChannelContentDefault from "renderChannelContent" /* 16816 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function LaunchpadChannelIcon(channel) {
  if (closure_12) {
    const cResult = channel(576).c(14);
    const channel2 = channel.channel;
    closure_129_0 = channel2;
    const tmp17 = closure_11();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = getLayoutStylesDefault();
      cResult[0] = tmp21;
      let first = tmp21;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildStore];
      cResult[1] = items;
      let tmp22 = items;
    } else {
      tmp22 = cResult[1];
    }
    if (cResult[2] !== channel2.guild_id) {
      const fn = function v() {
        return GuildStore.getGuild(channel.guild_id);
      };
      cResult[2] = channel2.guild_id;
      cResult[3] = fn;
      let tmp24 = fn;
    } else {
      tmp24 = cResult[3];
    }
    const obj6 = channel(576);
    const stateFromStores = channel(504).useStateFromStores(tmp22, tmp24);
    if (cResult[4] !== stateFromStores) {
      const obj2 = { guild: stateFromStores, size: first.icon.guildBadgeIconSize };
      const tmp29 = closure_8(GuildIconDefault, obj2);
      cResult[4] = stateFromStores;
      cResult[5] = tmp29;
      let tmp26 = tmp29;
    } else {
      tmp26 = cResult[5];
    }
    if (cResult[6] === tmp17.guildBadgeIcon) {
      if (cResult[7] === tmp26) {
        let tmp30 = cResult[8];
      }
      if (cResult[9] !== channel2) {
        const obj3 = { channel: channel2, size: "sm", wrapperSize: 32 };
        const tmp36 = closure_8(tmp13(11817).ChannelIcon, obj3);
        cResult[9] = channel2;
        cResult[10] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[10];
      }
      if (cResult[11] === tmp30) {
      }
      const obj4 = { children: null };
      const items1 = [tmp30, tmp34];
      obj4.children = items1;
      const tmp40 = closure_10(closure_9, obj4);
      cResult[11] = tmp30;
      cResult[12] = tmp34;
      cResult[13] = tmp40;
    }
    const obj5 = { style: tmp17.guildBadgeIcon, children: tmp26 };
    const tmp33 = closure_8(View, obj5);
    cResult[6] = tmp17.guildBadgeIcon;
    cResult[7] = tmp26;
    cResult[8] = tmp33;
    tmp30 = tmp33;
    const tmp13Result = channel(504);
  } else {
    channel = channel.channel;
    const tmp2 = closure_11();
    const tmp5 = getLayoutStylesDefault();
    const items2 = [GuildStore];
    const obj7 = { children: null };
    const obj8 = { style: tmp2.guildBadgeIcon, children: null };
    const stateFromStores1 = channel(504).useStateFromStores(items2, () => GuildStore.getGuild(channel.guild_id));
    const obj9 = { guild: stateFromStores1, size: tmp5.icon.guildBadgeIconSize };
    obj8.children = closure_8(GuildIconDefault, obj9);
    const items3 = [closure_8(View, obj8), ];
    const obj10 = { channel, size: "sm", wrapperSize: 32 };
    items3[1] = closure_8(channel(11817).ChannelIcon, obj10);
    obj7.children = items3;
    return closure_10(closure_9, obj7);
  }
}
const View = fn(17).View;
const UnreadSetting = fn(5072).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles(() => {
  const obj = { guildBadgeIcon: null };
  const rect = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj.guildBadgeIcon = rect;
  return obj;
});
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled();
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

export default function renderChannelItem(unread) {
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
      relativeTimestamp = NotificationCenterUtils.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStylesDefault();
  const children = [unreadBadge, , , ];
  const obj2 = { style: null, children: null };
  const size = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const merged = Object.assign(tmp7.icon.margin);
  obj2.style = size;
  if (channel.isGroupDM()) {
    const obj3 = { channel, size: tmp7.icon.avatarSize };
    let tmp11Result = closure_1_8(GroupDMAvatarDefault, obj3);
  } else {
    const obj4 = { channel };
    tmp11Result = closure_1_8(LaunchpadChannelIcon, obj4);
  }
  obj2.children = tmp11Result;
  children[1] = closure_1_8(View, obj2);
  const tmp8 = renderChannelWrapperDefault;
  if (channelName == null) {
    channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  }
  children[2] = renderChannelContentDefault({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  let tmp11Result2 = null;
  if (null != end) {
    const obj5 = { style: { paddingLeft: 8 }, children: end };
    tmp11Result2 = closure_1_8(View, obj5);
  }
  children[3] = tmp11Result2;
  return tmp8(v65535(options, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  channel = channel.channel;
  const obj = { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }), accessibilityHint: null };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["9C444m"]);
  }
  obj.accessibilityHint = stringResult;
  return obj;
};