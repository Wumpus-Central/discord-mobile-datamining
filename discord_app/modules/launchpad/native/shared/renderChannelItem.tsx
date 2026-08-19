// discord_app/modules/launchpad/native/shared/renderChannelItem.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getRelativeTimestamp from "../../../notification_center/NotificationCenterUtils.tsx";
import computeChannelName from "../../../channel/useChannelName.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import getChannelA11yLabelDefault from "../../../channel/getChannelA11yLabel.tsx";
import FacepileGroupDMAvatarDefault from "../../../group_dm/native/GroupDMAvatar.tsx";
import getLayoutStyleDefault from "getLayoutStyles.tsx";
import renderChannelWrapperDefault from "renderChannelWrapper.tsx";
import ChannelContentDefault from "renderChannelContent.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const tmp = callback3();
  channel(589);
  const items = [closure_4];
  const obj = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id));
  const tmp2 = getLayoutStyleDefault();
  obj[1] = callback(GuildIconSizesDefault, { guild: stateFromStores, size: getLayoutStyleDefault().icon.guildBadgeIconSize });
  const items1 = [callback(View, obj), callback(channel(11366).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  obj[0] = items1;
  return callback2(closure_9, obj);
}
noopAll;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  const obj = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj[0] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

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
      let obj = getRelativeTimestamp;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStyleDefault();
  const children = [unreadBadge, , , ];
  obj = { position: "relative", borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const merged = Object.assign(tmp7.icon.margin);
  obj[0] = obj;
  if (channel.isGroupDM()) {
    obj1 = { channel: null, size: null };
    obj1[0] = channel;
    obj1[1] = tmp7.icon.avatarSize;
    let tmp11Result = callback(FacepileGroupDMAvatarDefault, obj1);
  } else {
    const obj2 = { channel: null };
    obj2[0] = channel;
    tmp11Result = callback(LaunchpadChannelIcon, obj2);
  }
  obj[1] = tmp11Result;
  children[1] = callback(View, obj);
  const tmp8 = renderChannelWrapperDefault;
  if (channelName == null) {
    channelName = computeChannelName.computeChannelName(channel, closure_6, closure_5);
  }
  children[2] = ChannelContentDefault({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  tmp11Result = null;
  if (null != end) {
    const obj3 = { style: null, children: null };
    obj3[0] = { paddingLeft: 8 };
    obj3[1] = end;
    tmp11Result = callback(View, obj3);
  }
  children[3] = tmp11Result;
  return tmp8(callback2(closure_9, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(arg0) {
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  return { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
};