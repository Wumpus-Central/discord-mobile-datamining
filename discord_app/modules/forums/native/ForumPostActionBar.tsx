// discord_app/modules/forums/native/ForumPostActionBar.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Client from "../../../flow/Client.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import messages_MessagesUtils from "../../messages/native/MessagesUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  actionBarContainer: null,
  actionRow: null,
  reactionRow: null,
  actionButton: null,
  actionButtonsContainer: null,
  lastActionButton: null,
  buttonText: null,
};
createStyles = {
  overflow: "hidden",
  paddingHorizontal: 12,
  paddingVertical: 8,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  marginBottom: -1,
};
createStyles.actionBarContainer = createStyles;
createStyles.actionRow = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
createStyles.reactionRow = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
createStyles.actionButton = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  height: 28,
  marginRight: 4,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
};
createStyles.actionButtonsContainer = { justifyContent: "flex-end" };
createStyles.lastActionButton = { marginRight: 0 };
createStyles.buttonText = { marginLeft: 8 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  channel = channel.channel;
  noop = undefined;
  const tmp = closure_12();
  let obj = channel(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
  let obj1 = channel(7304);
  const firstMessage = obj1.useFirstForumPostMessage(channel).firstMessage;
  let obj2 = channel(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(channel.id));
  dependencyMap = channel.getGuildId();
  let obj3 = channel(504);
  const items2 = [LurkingStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const width = stateFromStores1(1477)().width;
  const tmp7 = width(noop.useState(0), 2);
  noop = tmp7[1];
  const items3 = [width];
  const callback = noop.useCallback((nativeEvent) => {
    closure_4(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  let obj4 = channel(7872);
  obj = { style: null, children: null };
  const items4 = [tmp.actionBarContainer, obj4.useGradientTop()];
  obj.style = items4;
  let tmp11 = null != firstMessage;
  if (tmp11) {
    obj = { style: tmp.reactionRow, children: null };
    obj1 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp7[0] };
    obj.children = closure_10(tmp2(11414).ForumPostActionBarReactions, obj1);
    tmp11 = closure_10(tmp10, obj);
  }
  const items5 = [tmp11];
  obj2 = { style: null, onLayout: callback, children: null };
  const items6 = [,];
  ({ actionRow: arr7[0], actionButtonsContainer: arr7[1] } = tmp);
  obj2.style = items6;
  if (stateFromStores2) {
    const items7 = [tmp13, ,];
    obj3 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl4 = tmp2(1114).intl;
    obj3.accessibilityLabel = intl4.string(tmp2(1114).t.WqhZss);
    obj3.style = tmp.actionButton;
    obj3.onPress = function onPress() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        const obj = { section: AnalyticsSections.CHANNEL_HEADER };
        const result = obj.handleCopyLinkForumPost(guildId, channel.id, obj);
      }
    };
    obj3.children = closure_10(tmp2(4503).LinkIcon, { size: "xs" });
    items7[1] = closure_10(tmp2(5123).PressableOpacity, obj3);
    obj4 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl5 = tmp2(1114).intl;
    obj4.accessibilityLabel = intl5.string(tmp2(1114).t.nFP4oa);
    const items8 = [,];
    ({ actionButton: arr12[0], lastActionButton: arr12[1] } = tmp);
    obj4.style = items8;
    obj4.onPress = function onPress() {
      const obj = {
        channelId: channel.id,
        messageId: SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id),
        flash: true,
        jumpType: Client.JumpType.ANIMATED,
      };
      obj.jumpToMessage(obj);
    };
    obj4.children = closure_10(tmp2(11415).ArrowLargeUpIcon, { size: "xs" });
    items7[2] = closure_10(tmp2(5123).PressableOpacity, obj4);
    obj2.children = items7;
    items5[1] = tmp9(tmp10, obj2);
    obj.children = items5;
    return tmp9(tmp10, obj);
  } else {
    let items9 = function handleFollow() {
      const result = messages_MessagesUtils.handleToggleFollowForumPost(channel, stateFromStores1);
    };
    const obj5 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    let intl = tmp2(1114).intl;
    let Text = intl.string;
    let t = tmp2(1114).t;
    if (stateFromStores1) {
      obj5.accessibilityLabel = Text(t.G3ooHD);
      obj5.style = tmp.actionButton;
      obj5.onPress = items9;
      intl = closure_10;
      items9 = [closure_10(tmp2(4511).CheckmarkLargeIcon, { size: "xs", color: "text-brand" })];
      Text = tmp2(4556).Text;
      const obj6 = { style: null, variant: "text-sm/semibold", color: "text-brand", children: null };
      const items10 = [tmp.buttonText];
      obj6.style = items10;
      const intl3 = tmp2(1114).intl;
      obj6.children = intl3.string(tmp2(1114).t["OtF+lC"]);
      t = closure_10(Text, obj6);
      items9[1] = t;
      obj5.children = items9;
      let tmp15 = obj5;
    } else {
      obj5.accessibilityLabel = Text(t["DjZ+6E"]);
      obj5.style = tmp.actionButton;
      obj5.onPress = items9;
      const items11 = [closure_10(tmp2(9776).BellIcon, { size: "xs" })];
      const obj7 = {
        style: tmp.buttonText,
        variant: "text-sm/semibold",
        color: "interactive-text-default",
        children: null,
      };
      const intl2 = tmp2(1114).intl;
      obj7.children = intl2.string(tmp2(1114).t["0rQinA"]);
      items11[1] = closure_10(tmp2(4556).Text, obj7);
      obj5.children = items11;
      tmp15 = obj5;
    }
    tmp9(tmp2(5123).PressableOpacity, tmp15);
  }
}
