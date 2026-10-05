// === Module 9853: ForumPostActionBar ===

// Module 9853 (ForumPostActionBar)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import flow_Client from "flow/Client" /* 4787 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, dependencyMap;

let c10;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionBarContainer: obj2, actionRow: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, reactionRow: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, actionButton: obj3, actionButtonsContainer: { justifyContent: "flex-end" }, lastActionButton: { marginRight: 0 }, buttonText: { marginLeft: 8 } };
obj2 = { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: -1 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: nativeDefault.radii.xs, borderWidth: 1, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
let closure_12 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_2;
  let first;
  let obj3;
  let tmp14;
  let tmp18;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(61);
  channel = channel.channel;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.parent_id) {
    class B {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
    cResult[1] = channel.parent_id;
    cResult[2] = B;
  } else {
    class B {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, B);
  const tmpResult5 = tmp(6807);
  const firstMessage = tmpResult5.useFirstForumPostMessage(channel).firstMessage;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
    const items1 = [JoinedThreadsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class B {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
  }
  if (cResult[4] !== channel.id) {
    class F {
      constructor() {
        return JoinedThreadsStore.hasJoined(channel.id);
      }
    }
    cResult[4] = channel.id;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        return JoinedThreadsStore.hasJoined(channel.id);
      }
    }
  }
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, F);
  if (cResult[6] !== channel) {
    class F {
      constructor() {
        return JoinedThreadsStore.hasJoined(channel.id);
      }
    }
    cResult[6] = channel;
    cResult[7] = tmp13;
  } else {
    class F {
      constructor() {
        return JoinedThreadsStore.hasJoined(channel.id);
      }
    }
  }
  dependencyMap = tmp13;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return JoinedThreadsStore.hasJoined(channel.id);
      }
    }
    const items2 = [LurkingStore];
    cResult[8] = items2;
    tmp14 = items2;
  } else {
    class F {
      constructor() {
        return JoinedThreadsStore.hasJoined(channel.id);
      }
    }
  }
  if (cResult[9] !== tmp13) {
    class P {
      constructor() {
        const isLurkingResult = null != dependencyMap && LurkingStore.isLurking(tmp);
        return isLurkingResult;
      }
    }
    cResult[9] = tmp13;
    cResult[10] = P;
  } else {
    class P {
      constructor() {
        const isLurkingResult = null != dependencyMap && LurkingStore.isLurking(tmp);
        return isLurkingResult;
      }
    }
  }
  const tmpResult7 = tmp(504);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp14, P);
  const width = stateFromStores1(1484)().width;
  const tmp17 = width(react.useState(0), 2);
  [tmp18, react] = tmp17;
  if (cResult[11] !== width) {
    class S {
      constructor(nativeEvent) {
        react(width - nativeEvent.nativeEvent.layout.width - 40);
      }
    }
    cResult[11] = width;
    cResult[12] = S;
  } else {
    class S {
      constructor(nativeEvent) {
        react(width - nativeEvent.nativeEvent.layout.width - 40);
      }
    }
  }
  if (cResult[13] === channel) {
    class S {
      constructor(nativeEvent) {
        react(width - nativeEvent.nativeEvent.layout.width - 40);
      }
    }
    if (cResult[16] !== channel) {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
      cResult[16] = channel;
      cResult[17] = tmp21;
    } else {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
    }
    if (cResult[18] !== channel.id) {
      class U {
        constructor() {
          let obj2;
          const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
          const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
          MessageActionCreatorsDefault;
          obj2 = SnowflakeUtilsDefault;
          jumpToMessage(obj);
        }
      }
      cResult[18] = channel.id;
      cResult[19] = U;
    } else {
      class U {
        constructor() {
          let obj2;
          const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
          const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
          MessageActionCreatorsDefault;
          obj2 = SnowflakeUtilsDefault;
          jumpToMessage(obj);
        }
      }
    }
    const tmpResult8 = tmp(7507);
    const gradientTop = tmpResult8.useGradientTop();
    if (cResult[20] === gradientTop) {
      class U {
        constructor() {
          let obj2;
          const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
          const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
          MessageActionCreatorsDefault;
          obj2 = SnowflakeUtilsDefault;
          jumpToMessage(obj);
        }
      }
      if (cResult[23] === channel) {
        class U {
          constructor() {
            let obj2;
            const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
            const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
            MessageActionCreatorsDefault;
            obj2 = SnowflakeUtilsDefault;
            jumpToMessage(obj);
          }
        }
      }
      let tmp27 = null != firstMessage;
      if (tmp27) {
        class U {
          constructor() {
            let obj2;
            const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
            const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
            MessageActionCreatorsDefault;
            obj2 = SnowflakeUtilsDefault;
            jumpToMessage(obj);
          }
        }
        let obj2 = { style: tmp4.reactionRow, children: closure_10(tmp(10027).ForumPostActionBarReactions, obj3) };
        obj3 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp18 };
        tmp27 = closure_10(View, obj2);
      }
      cResult[23] = channel;
      cResult[24] = tmp18;
      cResult[25] = firstMessage;
      cResult[26] = stateFromStores;
      cResult[27] = tmp4.reactionRow;
      cResult[28] = tmp27;
    }
    const items3 = [tmp4.actionBarContainer, gradientTop];
    cResult[20] = gradientTop;
    cResult[21] = tmp4.actionBarContainer;
    cResult[22] = items3;
  }
  const fn = function j() {
    const obj = messages_MessagesUtils;
    const result = obj.handleToggleFollowForumPost(channel, stateFromStores1);
  };
  cResult[13] = channel;
  cResult[14] = stateFromStores1;
  cResult[15] = fn;
}) : ((channel) => {
  let closure_2;
  let closure_4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items8;
  let obj8;
  channel = channel.channel;
  react = undefined;
  const tmp = closure_12();
  let obj = channel(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
  let obj2 = channel(6807);
  const firstMessage = obj2.useFirstForumPostMessage(channel).firstMessage;
  const items1 = [JoinedThreadsStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(channel.id));
  dependencyMap = channel.getGuildId();
  const items2 = [LurkingStore];
  const obj4 = channel(504);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const isLurkingResult = null != closure_2 && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  });
  const width = stateFromStores1(1484)().width;
  const tmp7 = width(react.useState(0), 2);
  react = tmp7[1];
  const items3 = [width];
  const first = tmp7[0];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  const obj6 = { style: items4, children: items5 };
  items4 = [tmp.actionBarContainer, ];
  const obj5 = channel(7507);
  items4[1] = obj5.useGradientTop();
  let tmp12 = null != firstMessage;
  if (tmp12) {
    const obj7 = { style: tmp.reactionRow, children: closure_10(channel(10027).ForumPostActionBarReactions, obj8) };
    obj8 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: first };
    tmp12 = closure_10(View, obj7);
  }
  items5 = [tmp12, ];
  const obj9 = { style: items6, onLayout: callback, children: items10 };
  items6 = [, ];
  ({ actionRow: arr7[0], actionButtonsContainer: arr7[1] } = tmp);
  let tmp10Result = !stateFromStores2;
  if (tmp10Result) {
    let tmp16;
    function handleFollow() {
      const obj = messages_MessagesUtils;
      const result = obj.handleToggleFollowForumPost(channel, stateFromStores1);
    }
    const obj10 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const PressableOpacity = tmp2(5909).PressableOpacity;
    const intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (stateFromStores1) {
      obj10.accessibilityLabel = string(t.G3ooHD);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items7 = [closure_10(channel(4577).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      const obj11 = { style: items8, variant: "text-sm/semibold", color: "text-brand", children: intl3.string(channel(1126).t["OtF+lC"]) };
      items8 = [tmp.buttonText];
      const Text2 = tmp2(4886).Text;
      intl3 = tmp2(1126).intl;
      items7[1] = closure_10(Text2, obj11);
      obj10.children = items7;
      tmp16 = obj10;
    } else {
      obj10.accessibilityLabel = string(t["DjZ+6E"]);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items9 = [closure_10(channel(9266).BellIcon, { size: "xs" }), ];
      const obj12 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "interactive-text-default", children: intl2.string(channel(1126).t["0rQinA"]) };
      const Text = tmp2(4886).Text;
      intl2 = tmp2(1126).intl;
      items9[1] = closure_10(Text, obj12);
      obj10.children = items9;
      tmp16 = obj10;
    }
    tmp10Result = closure_11(PressableOpacity, tmp16);
  }
  items10 = [tmp10Result, , ];
  const obj13 = {
    accessible: true,
    accessibilityLabel: intl4.string(channel(1126).t.WqhZss),
    style: tmp.actionButton,
    onPress() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        const obj2 = { section: AnalyticsSections.CHANNEL_HEADER };
        const obj = messages_MessagesUtils;
        const result = obj.handleCopyLinkForumPost(guildId, channel.id, obj2);
      }
    },
    children: closure_10(channel(4839).LinkIcon, { size: "xs" })
  };
  const PressableOpacity2 = tmp2(5909).PressableOpacity;
  intl4 = tmp2(1126).intl;
  items10[1] = closure_10(PressableOpacity2, obj13);
  const obj14 = {
    accessible: true,
    accessibilityLabel: intl5.string(channel(1126).t.nFP4oa),
    style: items11,
    onPress() {
      let obj2;
      const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      obj2 = SnowflakeUtilsDefault;
      jumpToMessage(obj);
    },
    children: closure_10(channel(11072).ArrowLargeUpIcon, { size: "xs" })
  };
  const PressableOpacity3 = tmp2(5909).PressableOpacity;
  intl5 = tmp2(1126).intl;
  items11 = [, ];
  ({ actionButton: arr12[0], lastActionButton: arr12[1] } = tmp);
  items10[2] = closure_10(PressableOpacity3, obj14);
  items5[1] = closure_11(View, obj9);
  return closure_11(View, obj6);
});
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default tmp4;