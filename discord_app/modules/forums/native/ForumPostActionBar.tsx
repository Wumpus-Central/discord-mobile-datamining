// === Module 12354: ForumPostActionBar ===

// Module 12354 (ForumPostActionBar)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 575 */;
import Client from "Client" /* 5543 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8660 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11864 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 5239 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5240 */;
import ChannelStore from "ChannelStore" /* 5155 */;

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1072).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { actionBarContainer: { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: -1 }, actionRow: { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 0 }, reactionRow: null, actionButton: null, actionButtonsContainer: null, lastActionButton: null, buttonText: null };
let obj3 = { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: -1 };
obj2.reactionRow = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginEnd: nativeDefault.space.PX_8 };
let obj4 = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginEnd: nativeDefault.space.PX_8 };
obj2.actionButton = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: nativeDefault.radii.xs, borderWidth: 1, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
obj2.actionButtonsContainer = { alignSelf: "flex-start", marginStart: "auto", justifyContent: "flex-end" };
obj2.lastActionButton = { marginRight: 0 };
obj2.buttonText = { marginLeft: 8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  channel = channel.channel;
  const tmp = closure_10();
  items = [ChannelStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
  let obj = channel(504);
  const firstMessage = channel(11896).useFirstForumPostMessage(channel).firstMessage;
  let obj2 = channel(11896);
  const items1 = [JoinedThreadsStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(channel.id));
  dependencyMap = channel.getGuildId();
  const obj3 = channel(504);
  const items2 = [LurkingStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const obj4 = channel(504);
  const obj6 = { style: null, children: null };
  const items3 = [tmp.actionBarContainer, channel(9060).useGradientTop()];
  obj6.style = items3;
  let tmp9 = null != firstMessage;
  if (tmp9) {
    const obj7 = { style: tmp.reactionRow, children: null };
    const obj8 = { thread: channel, parentChannel: stateFromStores, firstMessage };
    obj7.children = closure_8(tmp2(12355).ForumPostActionBarReactions, obj8);
    tmp9 = closure_8(View, obj7);
  }
  const items4 = [tmp9, ];
  const obj9 = { style: null, children: null };
  const items5 = [, ];
  ({ actionRow: arr6[0], actionButtonsContainer: arr6[1] } = tmp);
  obj9.style = items5;
  if (stateFromStores2) {
    const items6 = [tmp11, , ];
    const obj10 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl4 = tmp2(1113).intl;
    obj10.accessibilityLabel = intl4.string(tmp2(1113).t.WqhZss);
    obj10.style = tmp.actionButton;
    obj10.onPress = function handleCopyLink() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        const obj2 = { section: AnalyticsSections.CHANNEL_HEADER };
        const result = messages_MessagesUtils.handleCopyLinkForumPost(guildId, channel.id, obj2);
      }
    };
    obj10.children = closure_8(tmp2(6029).LinkIcon, { size: "xs" });
    items6[1] = closure_8(tmp2(7428).PressableOpacity, obj10);
    const obj11 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl5 = tmp2(1113).intl;
    obj11.accessibilityLabel = intl5.string(tmp2(1113).t.nFP4oa);
    const items7 = [, ];
    ({ actionButton: arr10[0], lastActionButton: arr10[1] } = tmp);
    obj11.style = items7;
    obj11.onPress = function handleJumpToTop() {
      const obj2 = { channelId: channel.id, messageId: null, flash: true, jumpType: null };
      const obj = MessageActionCreatorsDefault;
      obj2.messageId = SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id);
      obj2.jumpType = Client.JumpType.ANIMATED;
      obj.jumpToMessage(obj2);
    };
    obj11.children = closure_8(tmp2(12356).ArrowLargeUpIcon, { size: "xs" });
    items6[2] = closure_8(tmp2(7428).PressableOpacity, obj11);
    obj9.children = items6;
    items4[1] = closure_9(View, obj9);
    obj6.children = items4;
    return closure_9(View, obj6);
  } else {
    let items8 = function handleFollow() {
      const result = messages_MessagesUtils.handleToggleFollowForumPost(channel, stateFromStores1);
    };
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    let intl = tmp2(1113).intl;
    let Text = intl.string;
    let t = tmp2(1113).t;
    if (stateFromStores1) {
      obj12.accessibilityLabel = Text(t.G3ooHD);
      obj12.style = tmp.actionButton;
      obj12.onPress = items8;
      intl = closure_8;
      items8 = [closure_8(tmp2(7738).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      Text = tmp2(5929).Text;
      const obj13 = { style: tmp.buttonText, variant: "body-sm/semibold", color: "text-brand", children: null };
      const intl3 = tmp2(1113).intl;
      obj13.children = intl3.string(tmp2(1113).t["OtF+lC"]);
      t = closure_8(Text, obj13);
      items8[1] = t;
      obj12.children = items8;
      let tmp13 = obj12;
    } else {
      obj12.accessibilityLabel = Text(t["DjZ+6E"]);
      obj12.style = tmp.actionButton;
      obj12.onPress = items8;
      const items9 = [closure_8(tmp2(10996).BellIcon, { size: "xs" }), ];
      const obj14 = { style: tmp.buttonText, variant: "body-sm/semibold", color: "interactive-text-default", children: null };
      const intl2 = tmp2(1113).intl;
      obj14.children = intl2.string(tmp2(1113).t["0rQinA"]);
      items9[1] = closure_8(tmp2(5929).Text, obj14);
      obj12.children = items9;
      tmp13 = obj12;
    }
    closure_9(tmp2(7428).PressableOpacity, tmp13);
  }
  const obj5 = channel(9060);
};