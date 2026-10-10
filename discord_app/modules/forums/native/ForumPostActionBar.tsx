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
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  actionBarContainer: {
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    marginBottom: -1,
  },
  actionRow: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 },
  reactionRow: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 },
  actionButton: null,
  actionButtonsContainer: null,
  lastActionButton: null,
  buttonText: null,
};
let obj3 = {
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
obj2.actionButton = {
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
obj2.actionButtonsContainer = { justifyContent: "flex-end" };
obj2.lastActionButton = { marginRight: 0 };
obj2.buttonText = { marginLeft: 8 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostActionBar(channel) {
      const cResult = channel(576).c(61);
      channel = channel.channel;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.parent_id) {
        const fn = function f() {
          return ChannelStore.getChannel(channel.parent_id);
        };
        cResult[1] = channel.parent_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      const tmpResult = channel(504);
      const firstMessage = channel(7003).useFirstForumPostMessage(channel).firstMessage;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [JoinedThreadsStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== channel.id) {
        const fn2 = function _() {
          return JoinedThreadsStore.hasJoined(channel.id);
        };
        cResult[4] = channel.id;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult5 = channel(7003);
      const stateFromStores1 = channel(504).useStateFromStores(tmp9, tmp11);
      if (cResult[6] !== channel) {
        let guildId = channel.getGuildId();
        cResult[6] = channel;
        cResult[7] = guildId;
        let tmp13 = guildId;
      } else {
        tmp13 = cResult[7];
      }
      dependencyMap = tmp13;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [LurkingStore];
        cResult[8] = items2;
        let tmp15 = items2;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== tmp13) {
        class I {
          constructor() {
            isLurkingResult = null != closure_2;
            if (isLurkingResult) {
              tmp3 = closure_6;
              isLurkingResult = closure_6.isLurking(tmp);
            }
            return isLurkingResult;
          }
        }
        cResult[9] = tmp13;
        cResult[10] = I;
      } else {
        class I {
          constructor() {
            isLurkingResult = null != closure_2;
            if (isLurkingResult) {
              tmp3 = closure_6;
              isLurkingResult = closure_6.isLurking(tmp);
            }
            return isLurkingResult;
          }
        }
      }
      const tmpResult6 = channel(504);
      const stateFromStores2 = channel(504).useStateFromStores(tmp15, I);
      const width = stateFromStores1(1497)().width;
      const tmpResult7 = channel(504);
      [tmp20, noop] = width(noop.useState(0), 2);
      if (cResult[11] !== width) {
        class S {
          constructor(arg0) {
            tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
            return;
          }
        }
        cResult[11] = width;
        cResult[12] = S;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
            return;
          }
        }
      }
      if (cResult[13] === channel) {
        class S {
          constructor(arg0) {
            tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
            return;
          }
        }
        if (cResult[16] !== channel) {
          class S {
            constructor(arg0) {
              tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
              return;
            }
          }
          cResult[16] = channel;
          cResult[17] = tmp23;
        } else {
          class S {
            constructor(arg0) {
              tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
              return;
            }
          }
        }
        if (cResult[18] !== channel.id) {
          class S {
            constructor(arg0) {
              tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
              return;
            }
          }
          cResult[18] = channel.id;
          cResult[19] = tmp25;
        } else {
          class S {
            constructor(arg0) {
              tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
              return;
            }
          }
        }
        const gradientTop = tmp(9306).useGradientTop();
        if (cResult[20] === gradientTop) {
          class S {
            constructor(arg0) {
              tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
              return;
            }
          }
          if (cResult[23] === channel) {
            class S {
              constructor(arg0) {
                tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
                return;
              }
            }
          }
          let tmp30 = null != firstMessage;
          if (tmp30) {
            class S {
              constructor(arg0) {
                tmp = closure_4(width - channel.nativeEvent.layout.width - 40);
                return;
              }
            }
            let obj2 = { style: tmp4.reactionRow, children: null };
            const obj3 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp20 };
            obj2.children = closure_10(tmp(10449).ForumPostActionBarReactions, obj3);
            tmp30 = closure_10(View, obj2);
          }
          cResult[23] = channel;
          cResult[24] = tmp20;
          cResult[25] = firstMessage;
          cResult[26] = stateFromStores;
          cResult[27] = tmp4.reactionRow;
          cResult[28] = tmp30;
        }
        const items3 = [tmp4.actionBarContainer, gradientTop];
        cResult[20] = gradientTop;
        cResult[21] = tmp4.actionBarContainer;
        cResult[22] = items3;
        const tmpResult8 = tmp(9306);
      }
      function handleFollow() {
        const result = messages_MessagesUtils.handleToggleFollowForumPost(channel, stateFromStores1);
      }
      cResult[13] = channel;
      cResult[14] = stateFromStores1;
      cResult[15] = handleFollow;
      const tmp19 = width(noop.useState(0), 2);
    }
  : function ForumPostActionBar(channel) {
      channel = channel.channel;
      noop = undefined;
      const tmp = closure_12();
      const items = [ChannelStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
      let obj = channel(504);
      const firstMessage = channel(7003).useFirstForumPostMessage(channel).firstMessage;
      let obj2 = channel(7003);
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
      const width = stateFromStores1(1497)().width;
      const tmp7 = width(noop.useState(0), 2);
      noop = tmp7[1];
      const items3 = [width];
      const callback = noop.useCallback((nativeEvent) => {
        closure_4(width - nativeEvent.nativeEvent.layout.width - 40);
      }, items3);
      const obj4 = channel(504);
      const obj6 = { style: null, children: null };
      const items4 = [tmp.actionBarContainer, channel(9306).useGradientTop()];
      obj6.style = items4;
      let tmp11 = null != firstMessage;
      if (tmp11) {
        const obj7 = { style: tmp.reactionRow, children: null };
        const obj8 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp7[0] };
        obj7.children = closure_10(tmp2(10449).ForumPostActionBarReactions, obj8);
        tmp11 = closure_10(View, obj7);
      }
      const items5 = [tmp11];
      const obj9 = { style: null, onLayout: callback, children: null };
      const items6 = [,];
      ({ actionRow: arr7[0], actionButtonsContainer: arr7[1] } = tmp);
      obj9.style = items6;
      if (stateFromStores2) {
        const items7 = [tmp13, ,];
        const obj10 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl4 = tmp2(1126).intl;
        obj10.accessibilityLabel = intl4.string(tmp2(1126).t.WqhZss);
        obj10.style = tmp.actionButton;
        obj10.onPress = function handleCopyLink() {
          const guildId = channel.getGuildId();
          if (null != guildId) {
            const obj2 = { section: AnalyticsSections.CHANNEL_HEADER };
            const result = messages_MessagesUtils.handleCopyLinkForumPost(guildId, channel.id, obj2);
          }
        };
        obj10.children = closure_10(tmp2(5038).LinkIcon, { size: "xs" });
        items7[1] = closure_10(tmp2(6184).PressableOpacity, obj10);
        const obj11 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl5 = tmp2(1126).intl;
        obj11.accessibilityLabel = intl5.string(tmp2(1126).t.nFP4oa);
        const items8 = [,];
        ({ actionButton: arr11[0], lastActionButton: arr11[1] } = tmp);
        obj11.style = items8;
        obj11.onPress = function handleJumpToTop() {
          const obj2 = { channelId: channel.id, messageId: null, flash: true, jumpType: null };
          const obj = MessageActionCreatorsDefault;
          obj2.messageId = SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id);
          obj2.jumpType = Client.JumpType.ANIMATED;
          obj.jumpToMessage(obj2);
        };
        obj11.children = closure_10(tmp2(10471).ArrowLargeUpIcon, { size: "xs" });
        items7[2] = closure_10(tmp2(6184).PressableOpacity, obj11);
        obj9.children = items7;
        items5[1] = closure_11(View, obj9);
        obj6.children = items5;
        return closure_11(View, obj6);
      } else {
        let items9 = function handleFollow() {
          const result = messages_MessagesUtils.handleToggleFollowForumPost(channel, stateFromStores1);
        };
        const obj12 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
        let intl = tmp2(1126).intl;
        let Text = intl.string;
        let t = tmp2(1126).t;
        if (stateFromStores1) {
          obj12.accessibilityLabel = Text(t.G3ooHD);
          obj12.style = tmp.actionButton;
          obj12.onPress = items9;
          intl = closure_10;
          items9 = [closure_10(tmp2(6195).CheckmarkLargeIcon, { size: "xs", color: "text-brand" })];
          Text = tmp2(5088).Text;
          const obj13 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "text-brand", children: null };
          const intl3 = tmp2(1126).intl;
          obj13.children = intl3.string(tmp2(1126).t["OtF+lC"]);
          t = closure_10(Text, obj13);
          items9[1] = t;
          obj12.children = items9;
          let tmp15 = obj12;
        } else {
          obj12.accessibilityLabel = Text(t["DjZ+6E"]);
          obj12.style = tmp.actionButton;
          obj12.onPress = items9;
          const items10 = [closure_10(tmp2(8772).BellIcon, { size: "xs" })];
          const obj14 = {
            style: tmp.buttonText,
            variant: "text-sm/semibold",
            color: "interactive-text-default",
            children: null,
          };
          const intl2 = tmp2(1126).intl;
          obj14.children = intl2.string(tmp2(1126).t["0rQinA"]);
          items10[1] = closure_10(tmp2(5088).Text, obj14);
          obj12.children = items10;
          tmp15 = obj12;
        }
        closure_11(tmp2(6184).PressableOpacity, tmp15);
      }
      const obj5 = channel(9306);
    };
