// discord_app/components_native/common/ChatPreview.tsx
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import setOptionsDefault from "setOptions" /* 8157 */;
import getPreviousMessagesDefault from "getPreviousMessages" /* 10730 */;
import DCDChatListDefault from "DCDChatList" /* 11073 */;
import GuildNSFWDefault from "GuildNSFW" /* 11838 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11840 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_7 from "setContent" /* 4086 */;
import closure_8 from "ensureGuildLoaded" /* 1391 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import Changeset from "Changeset" /* 8158 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ Changeset: c10, RowType: unpackModuleId, SeparatorType: closure_12 } = Changeset);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { chat: { flex: 1, overflow: "hidden" }, containerInner: null, jumpToChatButtonContainer: null, jumpToChatButton: null, jumpToChatText: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexShrink: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { flexShrink: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { height: 44, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[4] = { textAlign: "center", flex: 1, lineHeight: 44 };
let closure_15 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class ChatPreviewBase extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = new require("getPreviousMessages")();
    applyArgumentsResult.chatManager = tmp3;
    tmp4 = new require("setOptions")();
    applyArgumentsResult.rowGenerator = tmp4;
    applyArgumentsResult.chatRef = closure_4.createRef();
    applyArgumentsResult.didPositionInitialScroll = false;
    applyArgumentsResult.handleCompleteFirstLayout = function handleCompleteFirstLayout() {
      if (tmp2) {
        tmp.didPositionInitialScroll = true;
        applyArgumentsResult(closure_1_3[13]).scrollToTopMessage(tmp.chatRef, tmp.chatManager);
        const obj = applyArgumentsResult(closure_1_3[13]);
      }
    };
    applyArgumentsResult.setup = function setup() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      messages = undefined;
      let roleStyle;
      closure_3 = undefined;
      let map;
      let items;
      let items1;
      const props = applyArgumentsResult.props;
      ({ channel: c0, messages } = props);
      roleStyle = props.roleStyle;
      if (null != messages) {
        const rowGenerator2 = tmp2.rowGenerator;
        let obj = { renderEmbeds: null, inlineEmbedMedia: null, inlineAttachmentMedia: null, constrainedWidth: null };
        obj[0] = tmp6;
        obj[1] = tmp5;
        obj[2] = tmp4;
        obj[3] = tmp2.props.width;
        rowGenerator2.setOptions(obj);
        const chatManager5 = tmp2.chatManager;
        chatManager5.setup(messages);
        closure_3 = flag ? tmp31.UPDATE : tmp31.NOOP;
        const chatManager = tmp2.chatManager;
        const previousMessages = chatManager.getPreviousMessages();
        const _Array = Array;
        map = null;
        if (Array.isArray(previousMessages)) {
          const _Map = Map;
          map = new Map(previousMessages.map((id) => {
            items = [id.id, id];
            return items;
          }));
        }
        items = [];
        let item = messages.forEach((props) => {
          let arr = items;
          const first = items[0];
          if (null != first) {
            if (messages(11139)(c0, first[first.length - 1], props)) {
              items = [props];
              arr = arr.unshift(items);
            } else {
              arr = first.unshift(props);
            }
          } else {
            items1 = [props];
            arr.unshift(items1);
          }
        });
        items1 = [];
        let item1 = items.forEach((arr) => {
          let obj2 = tmp;
          let isSameDayResult = items[items.length - 1] === arr;
          messages = false;
          let timestamp = null;
          if (!isSameDayResult) {
            timestamp = tmp2[arg1 + 1][0].timestamp;
          }
          if (!isSameDayResult) {
            isSameDayResult = null == timestamp;
          }
          if (!isSameDayResult) {
            let obj = _undefined(4063);
            isSameDayResult = obj.isSameDay(tmp.timestamp, timestamp);
          }
          let flag = false;
          if (!isSameDayResult) {
            messages = true;
            flag = true;
          }
          arr = items1;
          let tmp8 = items1[items1.length - 1];
          obj = { roleStyle, rowType: closure_1_11.BLOCKED_GROUP, changeType: dependencyMap, message: tmp, isFirst: true, content: [], text: "", revealed: false };
          if (arr[arr.length - 1].blocked) {
            if (!tmp25) {
              obj = {};
              const merged = Object.assign(obj);
              obj.rowType = tmp10.BLOCKED_GROUP;
              arr = arr.push(obj);
              tmp8 = obj;
            }
            obj2 = tmp8;
            const item = arr.forEach((message) => {
              const content = obj2.content;
              content.unshift({ rowType: closure_3_11.MESSAGE, changeType: closure_3_10.NOOP, roleStyle, message, isFirst: message === obj2 });
            });
            tmp8.revealed = tmp.id === messages.revealedMessageId;
            tmp8.context = tmp.id;
            const intl2 = _undefined(1236).intl;
            obj1 = { count: null };
            obj1[0] = tmp8.content.length;
            tmp8.text = intl2.formatToPlainString(_undefined(1236).t["+FcYM/"], obj1);
            tmp25 = null != tmp8 && tmp8.rowType === tmp10.BLOCKED_GROUP;
          } else if (tmp.ignored) {
            let tmp14 = tmp8;
            if (!tmp13) {
              obj2 = {};
              const merged1 = Object.assign(obj);
              obj2.rowType = tmp10.IGNORED_GROUP;
              arr = arr.push(obj2);
              tmp14 = obj2;
            }
            obj2 = tmp14;
            const item1 = arr.forEach((message) => {
              const content = obj2.content;
              content.unshift({ rowType: closure_3_11.MESSAGE, changeType: closure_3_10.NOOP, roleStyle, message, isFirst: message === obj2 });
            });
            tmp14.revealed = tmp.id === messages.revealedMessageId;
            tmp14.context = tmp.id;
            const intl = _undefined(1236).intl;
            const obj3 = { count: null };
            obj3[0] = tmp14.content.length;
            tmp14.text = intl.formatToPlainString(_undefined(1236).t["VFWjc+"], obj3);
            tmp13 = null != tmp8 && tmp8.rowType === tmp10.IGNORED_GROUP;
          } else {
            const item2 = arr.forEach((id) => {
              let obj = closure_1_4;
              if (null != closure_1_4) {
                if (obj.get(id.id) !== id) {
                  let UPDATE = closure_2_10.UPDATE;
                }
                obj = { roleStyle: null, rowType: null, changeType: null, message: null, isFirst: null, isEditing: false, separatorBefore: null };
                obj[0] = closure_1_2;
                obj[1] = closure_2_11.MESSAGE;
                obj[2] = UPDATE;
                obj[3] = id;
                obj[4] = id === obj2;
                let tmp6 = id === obj2;
                if (tmp6) {
                  tmp6 = c1;
                }
                obj[6] = tmp6;
                closure_1_6.push(obj);
              }
              UPDATE = closure_1_3;
            });
          }
          if (flag) {
            const obj4 = { roleStyle: null, rowType: null, changeType: null, text: null };
            obj4[0] = roleStyle;
            obj4[1] = closure_1_12.DAY;
            obj4[2] = dependencyMap;
            obj4[3] = _undefined(4063).dateFormat(tmp.timestamp, "LL");
            arr.push(obj4);
            const obj8 = _undefined(4063);
          }
        });
        for (const item10042 of items1) {
          let tmp17 = applyArgumentsResult;
          let tmp18 = applyArgumentsResult;
          ({ chatManager: chatManager2, rowGenerator } = applyArgumentsResult);
          let row = chatManager2.createRow(rowGenerator.generate(item10042));
          continue;
        }
        obj = applyArgumentsResult;
        const chatManager3 = applyArgumentsResult.chatManager;
        const chatManager4 = applyArgumentsResult.chatManager;
        const changeset = chatManager3.createChangeset();
        const jumpTargetId = tmp3.jumpTargetId;
        let tmp23;
        if (!tmp7) {
          obj = { rows: null, scrollToMessageId: null, jumpTargetId: null, jumpType: "PX_16", shouldInitialScroll: "Array", animated: 0, scrollPosition: 17, focusTargetId: 0 };
          obj[0] = tmp22;
          obj[1] = jumpTargetId;
          obj[2] = jumpTargetId;
          tmp23 = closure_1_1(closure_1_3[17])(obj);
        }
        obj.updateContent(changeset, tmp23);
        const tmp20 = applyArgumentsResult;
      }
    };
    applyArgumentsResult.updateContent = function updateContent(changeset, arg1) {
      const current = applyArgumentsResult.chatRef.current;
      if (null != current) {
        let obj = closure_1_1(closure_1_3[18]);
        obj = { rows: null, isLoadingAtTop: false, scrollData: null };
        obj[0] = changeset;
        obj[2] = arg1;
        obj.updateRows(current, obj);
      }
    };
    applyArgumentsResult.getMessage = function getMessage(arg0) {
      return closure_1_1(closure_1_3[19]).find(arg0.props.messages, (id) => id.id === closure_0 || id.nonce === closure_0);
    };
    applyArgumentsResult.handleJumpToChat = function handleJumpToChat() {
      ({ channelId: closure_0, jumpToChatProps } = applyArgumentsResult.props);
      const jumpTargetId = jumpToChatProps.jumpTargetId;
      const onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
      if (onBeforeJumpToMessage != null) {
        const result = onBeforeJumpToMessage("footer_cta");
      }
      if (null != jumpTargetId) {
        const resolved = Promise.resolve();
        resolved.then(() => {
          closure_1_0(closure_1_3[20]).transitionToMessage(closure_0, jumpTargetId, { navigationReplace: true });
        });
      }
    };
    applyArgumentsResult.handleTapLink = function handleTapLink(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const data = nativeEvent.data;
      if ("bindJumpToMessage" === data.action) {
        if (null != data.targetChannelId) {
          if (null != data.targetMessageId) {
            let jumpToChatProps = applyArgumentsResult.props.jumpToChatProps;
            let onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
            if (onBeforeJumpToMessage != null) {
              let result = onBeforeJumpToMessage("message_link");
            }
            applyArgumentsResult(closure_1_3[20]).transitionToMessage(data.targetChannelId, data.targetMessageId, { navigationReplace: true });
          }
        }
      }
      let obj = applyArgumentsResult(closure_1_3[21]);
      obj = { allowWithinModal: true, chatInputRef: "a", handleTransitionToThread: "Array", message: 0, messageChannel: "asc", selectedChannelId: "asc", tapLinkData: "CHANNEL_ACK" };
      obj[2] = function handleTransitionToThread(arg0, arg1, arg2) {
        const jumpToChatProps = props.props.jumpToChatProps;
        const onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
        if (onBeforeJumpToMessage != null) {
          const result = onBeforeJumpToMessage("thread_link");
        }
        const channel = closure_1_8.getChannel(arg1);
        if (null != channel) {
          let obj = closure_1_0(closure_1_3[20]);
          obj = { source: null, navigationReplace: true };
          obj[0] = arg2;
          obj.transitionToThread(channel, obj);
        }
      };
      obj[3] = applyArgumentsResult.getMessage(data.messageId);
      let channel = applyArgumentsResult.props.channel;
      obj[4] = channel;
      obj[6] = nativeEvent;
      const result1 = obj.handleMessagesTapLink(obj);
    };
    applyArgumentsResult.handleLongPressLink = function handleLongPressLink(nativeEvent) {
      const url = nativeEvent.nativeEvent.url;
      let hasActionSheetOpen = applyArgumentsResult.props.hasActionSheetOpen;
      if (!hasActionSheetOpen) {
        hasActionSheetOpen = null == url;
      }
      if (!hasActionSheetOpen) {
        hasActionSheetOpen = "" === url;
      }
      if (!hasActionSheetOpen) {
        const obj = { urlString: null };
        obj[0] = url;
        closure_1_1(closure_1_3[22])(obj);
      }
    };
    applyArgumentsResult.handleLongPressMessage = function handleLongPressMessage(closure_0) {
      let obj = applyArgumentsResult(closure_1_3[23]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const props = applyArgumentsResult.props;
      const channel = props.channel;
      if (!props.hasActionSheetOpen) {
        const message = obj2.getMessage(tmp4);
        if (null != message) {
          const user = closure_1_9.getUser(message.author.id);
          if (null != user) {
            let tmpResult = tmp(tmp2[13]);
            tmpResult = tmp(tmp2[24]);
            const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult.asComponentId(tmp5), componentMediaIndex);
            const result = closure_1_2(tmp2[25]).dismissGlobalKeyboard();
            const obj5 = closure_1_2(tmp2[25]);
            obj = { actionSheetSource: "Preview", analyticsLocation: null, canAddNewReactions: null, channel: null, message: null, selectedMedia: null, user: null };
            obj[1] = obj2.props.analyticsLocation;
            let tmp9 = true === tmp6;
            if (tmp9) {
              tmp9 = null != channel;
            }
            if (tmp9) {
              tmp9 = closure_1_1(tmp2[27])(channel);
            }
            obj[2] = tmp9;
            obj[3] = channel;
            obj[4] = message;
            obj[5] = longPressSelectedMedia;
            obj[6] = user;
            const result1 = tmp(tmp2[26]).showLongPressMessageActionSheet(obj);
            const tmpResult1 = tmp(tmp2[26]);
          }
        }
      }
    };
    applyArgumentsResult.handleLongPressReaction = function handleLongPressReaction(closure_0) {
      const nativeSyntheticEventData = applyArgumentsResult(closure_1_3[23]).getNativeSyntheticEventData(closure_0);
      const reaction = nativeSyntheticEventData.reaction;
      if (!applyArgumentsResult.props.hasActionSheetOpen) {
        let emoji;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        const result = applyArgumentsResult(closure_1_3[28]).handleViewPreviewReactions(tmp4, tmp5, emoji);
        const tmpResult = applyArgumentsResult(closure_1_3[28]);
      }
    };
    applyArgumentsResult.handleTapReaction = function handleTapReaction(nativeEvent) {
      const props = applyArgumentsResult.props;
      const channel = props.channel;
      if (!props.hasActionSheetOpen) {
        if (true === tmp) {
          if (null != channel) {
            const nativeSyntheticEventData = applyArgumentsResult(closure_1_3[23]).getNativeSyntheticEventData(nativeEvent);
            ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
            const obj3 = applyArgumentsResult(closure_1_3[13]);
            let tmp5 = null;
            if (null != reaction) {
              const obj = {};
              const merged = Object.assign(reaction);
              obj.emoji = reaction.emoji;
              tmp5 = obj;
            }
            let MESSAGE = nativeEvent.nativeEvent.location;
            if (MESSAGE == null) {
              MESSAGE = tmp15(tmp16[29]).ReactionLocations.MESSAGE;
            }
            const result = obj3.handleAddOrRemoveReaction(messageId, channel, tmp5, isBurst, MESSAGE);
            const obj2 = applyArgumentsResult(closure_1_3[23]);
            tmp15 = applyArgumentsResult;
            tmp16 = closure_1_3;
          }
        }
      }
    };
    applyArgumentsResult.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const message = applyArgumentsResult.getMessage(nativeEvent.id);
      if (null != message) {
        const channel = closure_1_8.getChannel(message.getChannelId());
        if (null != channel) {
          const obj = { tapImageData: null, allowWithinModal: true, message: null, messageChannel: null, selectedChannelId: "HermesInternal", showContextName: null };
          obj[0] = nativeEvent;
          obj[2] = message;
          obj[3] = channel;
          const result = applyArgumentsResult(closure_1_3[30]).handleMessagesTapImage(obj);
          const obj2 = applyArgumentsResult(closure_1_3[30]);
        }
      }
    };
    applyArgumentsResult.handleTapChannel = function handleTapChannel(closure_0) {
      let obj = applyArgumentsResult(closure_1_3[23]);
      obj = {
        data: obj.getNativeSyntheticEventData(closure_0).data,
        navigationReplace: true,
        onBeforeNavigate() {
          const jumpToChatProps = props.props.jumpToChatProps;
          const onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
          let result;
          if (onBeforeJumpToMessage != null) {
            result = onBeforeJumpToMessage("channel_link");
          }
          return result;
        }
      };
      let result = applyArgumentsResult(closure_1_3[31]).handleMessagesTapChannel(obj);
    };
    applyArgumentsResult.handleLongPressChannel = function handleLongPressChannel(arg0) {
      applyArgumentsResult(closure_1_3[23]);
      if (!applyArgumentsResult.props.hasActionSheetOpen) {
        const obj = { data: null };
        obj[0] = tmp4;
        const result = applyArgumentsResult(closure_1_3[32]).handleMessagesLongPressChannel(obj);
        const tmpResult = applyArgumentsResult(closure_1_3[32]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = ChatPreviewBase.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  let tmp = null != this.props.messages;
  if (tmp) {
    tmp = false !== self.props.canAccessChannel;
  }
  if (tmp) {
    self.setup();
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (null != this.chatRef.current) {
    const chatManager = this.chatManager;
    chatManager.clear();
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(messages) {
  const self = this;
  if (!tmp) {
    self.setup(messages.width !== self.props.width);
  }
  let tmp3 = messages.canAccessChannel !== self.props.canAccessChannel;
  if (tmp3) {
    tmp3 = null != self.props.messages;
  }
  if (tmp3) {
    self.setup(self.props.canAccessChannel);
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  const props = this.props;
  ({ channel, isSpoilerHidden } = props);
  if (props.isNSFWHidden) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null != guild_id) {
      let obj = { guildId: null, channelId: null };
      ({ guild_id: obj8[0], id: obj8[1] } = channel);
      let tmp14 = callback(GuildNSFWDefault, obj);
    }
    obj = { style: null, children: null };
    obj[0] = tmp.containerInner;
    const items = [tmp14, tmp6Result];
    obj[1] = items;
    return callback2(closure_5, obj);
  }
  if (isSpoilerHidden) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    if (null != guild_id1) {
      obj1 = { guildId: null, channelId: null };
      ({ guild_id: obj7[0], id: obj7[1] } = channel);
      tmp14 = callback(ChannelSpoilerDefault, obj1);
    }
  }
  obj = { ref: self.chatRef, style: tmp.chat, inverted: true, onTapLink: self.handleTapLink, onTapChannel: self.handleTapChannel, onLongPressChannel: self.handleLongPressChannel, onLongPressLink: self.handleLongPressLink, onLongPressMessage: self.handleLongPressMessage, onLongPressReaction: self.handleLongPressReaction, onTapReaction: self.handleTapReaction, onTapImage: self.handleTapImage, onCompleteFirstLayout: null, onFirstLayout: null };
  obj1 = set;
  let prop;
  if (obj1.isIOS()) {
    prop = self.handleCompleteFirstLayout;
  }
  obj[11] = prop;
  const tmp8 = DCDChatListDefault;
  let prop1;
  if (!tmp9Result.isIOS()) {
    prop1 = self.handleCompleteFirstLayout;
  }
  obj[12] = prop1;
  tmp6Result = tmp6(tmp8, obj);
  const obj2 = { bottom: true, style: tmp.jumpToChatButtonContainer, children: null };
  tmp9Result = set;
  obj2[2] = callback(PressableBase.PressableOpacity, { accessibilityRole: "button", style: tmp.jumpToChatButton, onPress: self.handleJumpToChat, children: callback(Text.Text, obj4) });
  tmp6Result = tmp6(tmp9(6803).SafeAreaPaddingView, obj2);
  tmp14 = tmp6Result;
};
ChatPreviewBase.contextType = require("ManaContext").ThemeContext;
ChatPreviewBase.defaultProps = { withSafeArea: true };
let obj2 = { height: 44, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("components_native/common/ChatPreview.tsx");

export const ChatPreview = function ChatPreview(channelId) {
  channelId = channelId.channelId;
  const InlineAttachmentMedia = channelId(4066).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channelId(4066).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channelId(4066).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  let obj = channelId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const items1 = [closure_8];
  const stateFromStores1 = channelId(589).useStateFromStores(items1, () => closure_1_8.getChannel(channelId));
  const obj2 = channelId(589);
  const isChannelSpoilerGated = channelId(5267).useIsChannelSpoilerGated(stateFromStores1);
  const obj3 = channelId(5267);
  const isChannelContentGated = channelId(5252).useIsChannelContentGated(stateFromStores1);
  const obj4 = channelId(5252);
  const items2 = [closure_7];
  obj = {};
  const stateFromStores2 = channelId(589).useStateFromStores(items2, () => null != content.getContent());
  const merged = Object.assign(channelId);
  obj.inlineAttachmentMedia = setting;
  obj.inlineEmbedMedia = setting1;
  obj.renderEmbeds = setting2;
  obj.roleStyle = stateFromStores;
  obj.channel = stateFromStores1;
  obj.width = useWindowDimensionsDefault().width;
  obj.isSpoilerHidden = isChannelSpoilerGated;
  obj.isNSFWHidden = isChannelContentGated;
  let tmp12 = !isChannelSpoilerGated;
  if (!isChannelSpoilerGated) {
    tmp12 = !isChannelContentGated;
  }
  obj.canAccessChannel = tmp12;
  obj.hasActionSheetOpen = stateFromStores2;
  return closure_13(ChatPreviewBase, obj);
};