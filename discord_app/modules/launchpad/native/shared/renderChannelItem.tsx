// discord_app/modules/launchpad/native/shared/renderChannelItem.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import computeChannelName from "../../../channel/useChannelName.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import getRelativeTimestamp from "../../../notification_center/NotificationCenterUtils.tsx";
import getChannelA11yLabelDefault from "../../../channel/getChannelA11yLabel.tsx";
import getLayoutStyleDefault from "getLayoutStyles.tsx";
import renderChannelWrapperDefault from "renderChannelWrapper.tsx";
import ChannelContentDefault from "renderChannelContent.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/GuildStore.tsx";
import closure_5 from "../../../../stores/RelationshipStore.tsx";
import closure_6 from "../../../../stores/UserStore.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = channel(589);
  const items = [closure_4];
  obj = { children: null };
  obj = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id));
  const tmp2 = getLayoutStyleDefault();
  obj[1] = callback(GuildIconSizesDefault, { guild: stateFromStores, size: getLayoutStyleDefault().icon.guildBadgeIconSize });
  const items1 = [callback(View, obj), callback(channel(11694).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  obj[0] = items1;
  return callback2(closure_9, obj);
}
noopAll;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = { guildBadgeIcon: null };
  obj = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

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
  obj = { style: null, children: null };
  obj = { position: "relative", borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const merged = Object.assign(tmp7.icon.margin);
  obj[0] = obj;
  if (channel.isGroupDM()) {
    obj1 = { channel: null, size: null };
    obj1[0] = channel;
    obj1[1] = tmp7.icon.avatarSize;
    let tmp11Result = tmp11(tmp5(10586), obj1);
  } else {
    const obj2 = { channel: null };
    obj2[0] = channel;
    tmp11Result = tmp11(LaunchpadChannelIcon, obj2);
  }
  obj[1] = tmp11Result;
  children[1] = closure_8(View, obj);
  const tmp10 = closure_9;
  const tmp8 = renderChannelWrapperDefault;
  const tmp9 = closure_10;
  if (channelName == null) {
    channelName = computeChannelName.computeChannelName(channel, closure_6, closure_5);
    const obj6 = computeChannelName;
  }
  children[2] = ChannelContentDefault({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  tmp11Result = null;
  if (null != end) {
    const obj3 = { style: null, children: null };
    obj3[0] = { paddingLeft: 8 };
    obj3[1] = end;
    tmp11Result = tmp11(tmp12, obj3);
  }
  children[3] = tmp11Result;
  return tmp8(tmp9(tmp10, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(arg0) {
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  return { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
};