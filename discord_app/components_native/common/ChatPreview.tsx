// === Module 13252: ChatPreview ===

// Module 13252 (ChatPreview)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import Text_Text from "Text/Text" /* 4556 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 4792 */;
import Pressables from "Pressables" /* 5123 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7764 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7971 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11252 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11254 */;
import computeScrollDataDefault from "computeScrollData" /* 11270 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 11271 */;
import ChatManagerDefault from "ChatManager" /* 11538 */;
import handleMessagesTapImage from "handleMessagesTapImage" /* 11546 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11547 */;
import handleMessagesTapChannel from "handleMessagesTapChannel" /* 11548 */;
import handleMessagesLongPressChannel from "handleMessagesLongPressChannel" /* 11583 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11584 */;
import handleMessagesTapLink from "handleMessagesTapLink" /* 11616 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11657 */;
import ChatDefault from "Chat" /* 11894 */;
import isNewMessageGroupDefault from "isNewMessageGroup" /* 11952 */;
import GuildNSFWDefault from "GuildNSFW" /* 12665 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 12667 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const RowGeneratorConstants = fn(7933);
({ Changeset: c10, RowType: closure_11, SeparatorType: closure_12 } = RowGeneratorConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { chat: { flex: 1, overflow: "hidden" }, containerInner: null, jumpToChatButtonContainer: null, jumpToChatButton: null, jumpToChatText: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.containerInner = createStyles;
createStyles.jumpToChatButtonContainer = { flexShrink: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { flexShrink: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.jumpToChatButton = { height: 44, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.jumpToChatText = { textAlign: "center", flex: 1, lineHeight: 44 };
let closure_15 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class ChatPreviewBase extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = new closure_1(closure_3[11])();
    applyArgumentsResult.chatManager = tmp3;
    tmp4 = new closure_1(closure_3[12])();
    applyArgumentsResult.rowGenerator = tmp4;
    applyArgumentsResult.chatRef = closure_4.createRef();
    applyArgumentsResult.didPositionInitialScroll = false;
    applyArgumentsResult.handleCompleteFirstLayout = function handleCompleteFirstLayout() {
      if (tmp2) {
        applyArgumentsResult.didPositionInitialScroll = true;
        messages_MessagesUtils.scrollToTopMessage(applyArgumentsResult.chatRef, applyArgumentsResult.chatManager);
      }
      tmp2 = applyArgumentsResult.props.initialScrollToTop && !applyArgumentsResult.didPositionInitialScroll;
    };
    applyArgumentsResult.setup = function setup() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      c0 = undefined;
      messages = undefined;
      let changeType;
      let items;
      let items1;
      const props = applyArgumentsResult.props;
      ({ channel: c0, messages } = props);
      roleStyle = props.roleStyle;
      if (null != messages) {
        const rowGenerator2 = applyArgumentsResult.rowGenerator;
        let obj = { renderEmbeds: tmp6, inlineEmbedMedia: tmp5, inlineAttachmentMedia: tmp4, constrainedWidth: applyArgumentsResult.props.width };
        rowGenerator2.setOptions(obj);
        const chatManager5 = applyArgumentsResult.chatManager;
        chatManager5.setup(messages);
        changeType = flag ? constants.UPDATE : constants.NOOP;
        const chatManager = applyArgumentsResult.chatManager;
        const previousMessages = chatManager.getPreviousMessages();
        const _Array = Array;
        if (Array.isArray(previousMessages)) {
          const _Map = Map;
          new Map(previousMessages.map((id) => {
            items = [id.id, id];
            return items;
          }));
        }
        items = [];
        let item = messages.forEach((item) => {
          let arr = items;
          const first = items[0];
          if (null != first) {
            if (isNewMessageGroupDefault(c0, first[first.length - 1], item)) {
              items = [item];
              arr = arr.unshift(items);
            } else {
              arr = first.unshift(item);
            }
          } else {
            items1 = [item];
            arr.unshift(items1);
          }
        });
        items1 = [];
        let item1 = items.forEach((arr, index) => {
          let obj2 = tmp;
          let isSameDayResult = items[items.length - 1] === arr;
          messages = false;
          let timestamp = null;
          if (!isSameDayResult) {
            timestamp = tmp2[index + 1][0].timestamp;
          }
          if (!isSameDayResult) {
            isSameDayResult = null == timestamp;
          }
          if (!isSameDayResult) {
            let obj = _undefined(changeType[15]);
            isSameDayResult = obj.isSameDay(tmp.timestamp, timestamp);
          }
          let flag = false;
          if (!isSameDayResult) {
            messages = true;
            flag = true;
          }
          arr = items1;
          let tmp8 = items1[items1.length - 1];
          obj = { roleStyle, rowType: constants.BLOCKED_GROUP, changeType, message: tmp, isFirst: true, content: [], text: "", revealed: false };
          if (arr[arr.length - 1].blocked) {
            if (!tmp25) {
              obj = {};
              const merged = Object.assign(obj);
              obj.rowType = constants.BLOCKED_GROUP;
              arr = arr.push(obj);
              tmp8 = obj;
            }
            obj2 = tmp8;
            const item = arr.forEach((message) => {
              const content = obj2.content;
              content.unshift({ rowType: constants2.MESSAGE, changeType: constants.NOOP, roleStyle, message, isFirst: message === c0 });
            });
            tmp8.revealed = tmp.id === messages.revealedMessageId;
            tmp8.context = tmp.id;
            const intl2 = _undefined(changeType[16]).intl;
            const obj1 = { count: tmp8.content.length };
            tmp8.text = intl2.formatToPlainString(_undefined(changeType[16]).t["+FcYM/"], obj1);
            tmp25 = null != tmp8 && tmp8.rowType === constants.BLOCKED_GROUP;
          } else if (tmp.ignored) {
            let tmp14 = tmp8;
            if (!tmp13) {
              obj2 = {};
              const merged1 = Object.assign(obj);
              obj2.rowType = constants.IGNORED_GROUP;
              arr = arr.push(obj2);
              tmp14 = obj2;
            }
            obj2 = tmp14;
            const item1 = arr.forEach((message) => {
              const content = obj2.content;
              content.unshift({ rowType: constants2.MESSAGE, changeType: constants.NOOP, roleStyle, message, isFirst: message === c0 });
            });
            tmp14.revealed = tmp.id === messages.revealedMessageId;
            tmp14.context = tmp.id;
            const intl = _undefined(changeType[16]).intl;
            const obj3 = { count: tmp14.content.length };
            tmp14.text = intl.formatToPlainString(_undefined(changeType[16]).t["VFWjc+"], obj3);
            tmp13 = null != tmp8 && tmp8.rowType === constants.IGNORED_GROUP;
          } else {
            const item2 = arr.forEach((id) => {
              let obj = map;
              if (null != map) {
                if (obj.get(id.id) !== id) {
                  let UPDATE = constants.UPDATE;
                }
                obj = { roleStyle, rowType: constants2.MESSAGE, changeType: UPDATE, message: id, isFirst: id === obj2, isEditing: false, separatorBefore: null };
                let tmp6 = id === obj2;
                if (tmp6) {
                  tmp6 = c1;
                }
                obj.separatorBefore = tmp6;
                items1.push(obj);
              }
              UPDATE = closure_3;
            });
          }
          if (flag) {
            const obj4 = { roleStyle, rowType: constants2.DAY, changeType, text: _undefined(changeType[15]).dateFormat(tmp.timestamp, "LL") };
            arr.push(obj4);
            const obj8 = _undefined(changeType[15]);
          }
        });
        for (const item10042 of items1) {
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
          obj = { rows: tmp22, scrollToMessageId: jumpTargetId, jumpTargetId, jumpType: "flex", shouldInitialScroll: "Array", animated: 0.999, scrollPosition: 0.999, focusTargetId: 0.793 };
          tmp23 = computeScrollDataDefault(obj);
        }
        obj.updateContent(changeset, tmp23);
      }
    };
    applyArgumentsResult.updateContent = function updateContent(changeset, scrollData) {
      const current = applyArgumentsResult.chatRef.current;
      if (null != current) {
        const obj = { rows: changeset, isLoadingAtTop: false, scrollData };
        obj.updateRows(current, obj);
      }
    };
    applyArgumentsResult.getMessage = function getMessage(arg0) {
      closure_0 = arg0;
      return _modDef12.find(applyArgumentsResult.props.messages, (id) => id.id === closure_0 || id.nonce === closure_0);
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
          applyArgumentsResult(4571).transitionToMessage(closure_1_0, jumpTargetId, { navigationReplace: true });
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
            transitionToChannel.transitionToMessage(data.targetChannelId, data.targetMessageId, { navigationReplace: true });
          }
        }
      }
      let obj = {
        allowWithinModal: true,
        chatInputRef: "a",
        handleTransitionToThread(arg0, arg1, source) {
          const jumpToChatProps = props.props.jumpToChatProps;
          const onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
          if (onBeforeJumpToMessage != null) {
            const result = onBeforeJumpToMessage("thread_link");
          }
          channel = channel.getChannel(arg1);
          if (null != channel) {
            applyArgumentsResult(4571);
            const obj = { source, navigationReplace: true };
            obj.transitionToThread(channel, obj);
          }
        },
        message: applyArgumentsResult.getMessage(data.messageId),
        messageChannel: "asc",
        selectedChannelId: "asc",
        tapLinkData: "isInRestrictedHours"
      };
      channel = applyArgumentsResult.props.channel;
      obj.messageChannel = channel;
      obj.tapLinkData = nativeEvent;
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
        const obj = { urlString: url };
        showLongPressURLActionSheetDefault(obj);
      }
    };
    applyArgumentsResult.handleLongPressMessage = function handleLongPressMessage(nativeEvent) {
      let obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const props = applyArgumentsResult.props;
      channel = props.channel;
      if (!props.hasActionSheetOpen) {
        const message = applyArgumentsResult.getMessage(tmp4);
        if (null != message) {
          const user = UserStore.getUser(message.author.id);
          if (null != user) {
            const tmpResult = InteractionComponentTypes;
            const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult.asComponentId(tmp5), componentMediaIndex);
            const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
            obj = { actionSheetSource: "Preview", analyticsLocation: applyArgumentsResult.props.analyticsLocation, canAddNewReactions: null, channel: null, message: null, selectedMedia: null, user: null };
            let tmp9 = true === tmp6;
            if (tmp9) {
              tmp9 = null != channel;
            }
            if (tmp9) {
              tmp9 = canAddNewReactionsDefault(channel);
            }
            obj.canAddNewReactions = tmp9;
            obj.channel = channel;
            obj.message = message;
            obj.selectedMedia = longPressSelectedMedia;
            obj.user = user;
            const result1 = showLongPressMessageActionSheet.showLongPressMessageActionSheet(obj);
            const tmpResult1 = showLongPressMessageActionSheet;
          }
        }
      }
    };
    applyArgumentsResult.handleLongPressReaction = function handleLongPressReaction(nativeEvent) {
      const nativeSyntheticEventData = MessageDataSnowflakeUtils.getNativeSyntheticEventData(nativeEvent);
      const reaction = nativeSyntheticEventData.reaction;
      if (!applyArgumentsResult.props.hasActionSheetOpen) {
        let emoji;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        const result = reactions_ReactionUtils.handleViewPreviewReactions(tmp4, tmp5, emoji);
        const tmpResult = reactions_ReactionUtils;
      }
    };
    applyArgumentsResult.handleTapReaction = function handleTapReaction(nativeEvent) {
      const props = applyArgumentsResult.props;
      channel = props.channel;
      if (!props.hasActionSheetOpen) {
        if (true === tmp) {
          if (null != channel) {
            const nativeSyntheticEventData = MessageDataSnowflakeUtils.getNativeSyntheticEventData(nativeEvent);
            ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
            const obj3 = messages_MessagesUtils;
            let tmp5 = null;
            if (null != reaction) {
              const obj = {};
              const merged = Object.assign(reaction);
              obj.emoji = reaction.emoji;
              tmp5 = obj;
            }
            let MESSAGE = nativeEvent.nativeEvent.location;
            if (MESSAGE == null) {
              MESSAGE = ReactionActionCreators.ReactionLocations.MESSAGE;
            }
            const result = obj3.handleAddOrRemoveReaction(messageId, channel, tmp5, isBurst, MESSAGE);
          }
        }
      }
    };
    applyArgumentsResult.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const message = applyArgumentsResult.getMessage(nativeEvent.id);
      if (null != message) {
        channel = ChannelStore.getChannel(message.getChannelId());
        if (null != channel) {
          const obj = { tapImageData: nativeEvent, allowWithinModal: true, message, messageChannel: channel, selectedChannelId: "HermesInternal", showContextName: null };
          const result = handleMessagesTapImage.handleMessagesTapImage(obj);
        }
      }
    };
    applyArgumentsResult.handleTapChannel = function handleTapChannel(nativeEvent) {
      let obj = MessageDataSnowflakeUtils;
      obj = {
        data: obj.getNativeSyntheticEventData(nativeEvent).data,
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
      let result = handleMessagesTapChannel.handleMessagesTapChannel(obj);
    };
    applyArgumentsResult.handleLongPressChannel = function handleLongPressChannel(arg0) {
      MessageDataSnowflakeUtils;
      if (!applyArgumentsResult.props.hasActionSheetOpen) {
        const obj = { data: tmp4 };
        const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel(obj);
        const tmpResult = handleMessagesLongPressChannel;
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
  const tmp = closure_15(this.context);
  const props = this.props;
  ({ channel, isSpoilerHidden } = props);
  if (props.isNSFWHidden) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null != guild_id) {
      let obj = { guildId: null, channelId: null };
      ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
      let tmp14 = map1(GuildNSFWDefault, obj);
    }
    obj = { style: tmp.containerInner, children: null };
    const items = [tmp14, tmp6Result];
    obj.children = items;
    return closure_1_14(hasOwnProperty, obj);
  }
  if (isSpoilerHidden) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    if (null != guild_id1) {
      let obj1 = { guildId: null, channelId: null };
      ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
      tmp14 = map1(ChannelSpoilerDefault, obj1);
    }
  }
  obj = { ref: self.chatRef, style: tmp.chat, inverted: true, onTapLink: self.handleTapLink, onTapChannel: self.handleTapChannel, onLongPressChannel: self.handleLongPressChannel, onLongPressLink: self.handleLongPressLink, onLongPressMessage: self.handleLongPressMessage, onLongPressReaction: self.handleLongPressReaction, onTapReaction: self.handleTapReaction, onTapImage: self.handleTapImage, onCompleteFirstLayout: null, onFirstLayout: null };
  obj1 = PlatformUtils;
  let prop;
  if (obj1.isIOS()) {
    prop = self.handleCompleteFirstLayout;
  }
  obj.onCompleteFirstLayout = prop;
  const tmp8 = ChatDefault;
  let prop1;
  if (!tmp9Result.isIOS()) {
    prop1 = self.handleCompleteFirstLayout;
  }
  obj.onFirstLayout = prop1;
  map1(tmp8, obj);
  const obj2 = { bottom: true, style: tmp.jumpToChatButtonContainer, children: null };
  const obj3 = { accessibilityRole: "button", style: tmp.jumpToChatButton, onPress: self.handleJumpToChat, children: map1(Text_Text.Text, { style: tmp.jumpToChatText, variant: "text-md/medium", color: "interactive-text-default", children: self.props.jumpToChatProps.jumpToChatText }) };
  obj2.children = map1(Pressables.PressableOpacity, obj3);
  tmp6Result = map1(common_SafeAreaView.SafeAreaPaddingView, obj2);
  tmp14 = tmp6Result;
  const obj4 = { style: tmp.jumpToChatText, variant: "text-md/medium", color: "interactive-text-default", children: self.props.jumpToChatProps.jumpToChatText };
  tmp9Result = PlatformUtils;
};
ChatPreviewBase.contextType = fn(4271).ThemeContext;
ChatPreviewBase.defaultProps = { withSafeArea: true };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/ChatPreview.tsx");

export const ChatPreview = function ChatPreview(channelId) {
  channelId = channelId.channelId;
  const InlineAttachmentMedia = channelId(1935).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channelId(1935).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channelId(1935).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  let obj = channelId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const items1 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const isChannelSpoilerGated = channelId(7329).useIsChannelSpoilerGated(stateFromStores1);
  const obj3 = channelId(7329);
  const isChannelContentGated = channelId(4771).useIsChannelContentGated(stateFromStores1);
  const obj4 = channelId(4771);
  const items2 = [ActionSheetStore];
  obj = {};
  const stateFromStores2 = channelId(504).useStateFromStores(items2, () => null != content.getContent());
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