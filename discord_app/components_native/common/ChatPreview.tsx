// === Module 13093: ChatPreview ===

// Module 13093 (ChatPreview)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import native from "native" /* 4589 */;
import Text_Text from "Text/Text" /* 4886 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5122 */;
import Pressables from "Pressables" /* 5909 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7260 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7630 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 9855 */;
import computeScrollDataDefault from "computeScrollData" /* 9988 */;
import NativeChatUtils from "NativeChatUtils" /* 9989 */;
import ChatManagerDefault from "ChatManager" /* 11154 */;
import handleMessagesTapImage from "handleMessagesTapImage" /* 11163 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11164 */;
import handleMessagesTapChannel from "handleMessagesTapChannel" /* 11165 */;
import handleMessagesLongPressChannel from "handleMessagesLongPressChannel" /* 11200 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11201 */;
import contentHandlers2 from "contentHandlers" /* 11203 */;
import handleMessagesTapLink2 from "handleMessagesTapLink" /* 11239 */;
import showLongPressMessageActionSheet2 from "showLongPressMessageActionSheet" /* 11280 */;
import ChatDefault from "Chat" /* 11506 */;
import GuildNSFWDefault from "GuildNSFW" /* 12316 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 12318 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7592 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const NativeChatUtilsDefault = NativeChatUtils;
let channelId, map;

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet } = react_native);
({ Changeset: c10, RowType: unpackModuleId, SeparatorType: closure_12 } = RowGeneratorConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { chat: { flex: 1, overflow: "hidden" }, containerInner: obj2, jumpToChatButtonContainer: obj3, jumpToChatButton: obj4, jumpToChatText: { textAlign: "center", flex: 1, lineHeight: 44 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { flexShrink: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { height: 44, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_15 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class ChatPreviewBase extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let tmp3 = new ChatManagerDefault();
    applyArgumentsResult.chatManager = tmp3;
    const tmp4 = new RowGeneratorDefault();
    applyArgumentsResult.rowGenerator = tmp4;
    applyArgumentsResult.chatRef = react.createRef();
    applyArgumentsResult.didPositionInitialScroll = false;
    applyArgumentsResult.handleCompleteFirstLayout = function handleCompleteFirstLayout() {
      if (!require.didPositionInitialScroll) {
        require.didPositionInitialScroll = true;
        if (require.props.initialScrollToTop) {
          const obj3 = messages_MessagesUtils;
          obj3.scrollToTopMessage(require.chatRef, require.chatManager);
        } else {
          const tmp3 = null != require.scrollData && require.scrollData.type === NativeChatUtils.ChatScrollType.SCROLL;
          if (tmp3) {
            const obj2 = { animated: require.scrollData.animate, highlight: require.scrollData.highlight, position: require.scrollData.position };
            const obj = NativeChatUtilsDefault;
            obj.scrollTo(require.chatRef.current, require.scrollData.index, obj2);
          }
        }
      }
    };
    applyArgumentsResult.setup = function setup() {
      let c0;
      let chatManager2;
      let constants2;
      let messages;
      let rowGenerator;
      let tmp6;
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      c0 = undefined;
      messages = undefined;
      let closure_3;
      map = undefined;
      let items;
      let items1;
      const props = require.props;
      ({ channel: c0, messages } = props);
      const roleStyle = props.roleStyle;
      if (null != messages) {
        const rowGenerator2 = require.rowGenerator;
        let obj2 = { renderEmbeds: tmp6, inlineEmbedMedia: tmp5, inlineAttachmentMedia: tmp4, constrainedWidth: require.props.width };
        rowGenerator2.setOptions(obj2);
        const chatManager5 = require.chatManager;
        chatManager5.setup(messages);
        closure_3 = flag ? authStore.UPDATE : authStore.NOOP;
        const chatManager = require.chatManager;
        const previousMessages = chatManager.getPreviousMessages();
        const _Array = Array;
        map = null;
        if (Array.isArray(previousMessages)) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map(previousMessages.map((id) => {
            const items = [id.id, id];
            return items;
          }));
        }
        items = [];
        let item = messages.forEach((item) => {
          const first = items[0];
          if (null != first) {
            if (closure_2_1(closure_2_3[15])(c0, first[first.length - 1], item)) {
              items = [item];
              items.unshift(items);
            } else {
              first.unshift(item);
            }
          } else {
            items1 = [item];
            items.unshift(items1);
          }
        });
        items1 = [];
        let item1 = items.forEach((arr, index) => {
          let c1;
          let obj8;
          const f154888 = (message) => {
            const content = obj3.content;
            const obj = { rowType: constants2.MESSAGE, changeType: constants.NOOP, roleStyle, message, isFirst: message === closure_0 };
            content.unshift(obj);
          };
          let closure_0 = tmp;
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
            let obj = _undefined(changeType[16]);
            isSameDayResult = obj.isSameDay(tmp.timestamp, timestamp);
          }
          let flag = false;
          if (!isSameDayResult) {
            messages = true;
            flag = true;
          }
          let tmp8 = items1[items1.length - 1];
          let obj2 = { roleStyle, rowType: constants.BLOCKED_GROUP, changeType, message: tmp, isFirst: true, content: [], text: "", revealed: false };
          if (arr[arr.length - 1].blocked) {
            const tmp25 = null != tmp8 && tmp8.rowType === constants.BLOCKED_GROUP;
            if (!tmp25) {
              let obj3 = { rowType: constants.BLOCKED_GROUP };
              const merged = Object.assign(obj2);
              items1.push(obj3);
              tmp8 = obj3;
            }
            obj3 = tmp8;
            const item = arr.forEach(f154888);
            tmp8.revealed = arr[arr.length - 1].id === messages.revealedMessageId;
            tmp8.context = arr[arr.length - 1].id;
            const intl2 = _undefined(changeType[17]).intl;
            const obj4 = { count: tmp8.content.length };
            tmp8.text = intl2.formatToPlainString(_undefined(changeType[17]).t["+FcYM/"], obj4);
          } else if (arr[arr.length - 1].ignored) {
            let tmp14 = tmp8;
            const tmp13 = null != tmp8 && tmp8.rowType === constants.IGNORED_GROUP;
            if (!tmp13) {
              let obj5 = { rowType: constants.IGNORED_GROUP };
              const merged1 = Object.assign(obj2);
              items1.push(obj5);
              tmp14 = obj5;
            }
            obj5 = tmp14;
            const item1 = arr.forEach(f154888);
            tmp14.revealed = arr[arr.length - 1].id === messages.revealedMessageId;
            tmp14.context = arr[arr.length - 1].id;
            const intl = _undefined(changeType[17]).intl;
            const obj6 = { count: tmp14.content.length };
            tmp14.text = intl.formatToPlainString(_undefined(changeType[17]).t["VFWjc+"], obj6);
          } else {
            const item2 = arr.forEach((id) => {
              let tmp6;
              if (null != map) {
                let UPDATE;
                if (map.get(id.id) !== id) {
                  UPDATE = constants.UPDATE;
                }
                const obj2 = { roleStyle, rowType: constants2.MESSAGE, changeType: UPDATE, message: id, isFirst: id === closure_0, isEditing: false, separatorBefore: tmp6 };
                tmp6 = id === closure_0;
                const push = items1.push;
                if (tmp6) {
                  tmp6 = c1;
                }
                push(obj2);
              }
              UPDATE = changeType;
            });
          }
          if (flag) {
            let push = items1.push;
            const obj7 = { roleStyle, rowType: constants2.DAY, changeType, text: obj8.dateFormat(arr[arr.length - 1].timestamp, "LL") };
            obj8 = _undefined(changeType[16]);
            push(obj7);
          }
        });
        let tmp13 = items1;
        let tmp14 = items1;
        for (const item10042 of items1) {
          ({ chatManager: chatManager2, rowGenerator } = require);
          let row = chatManager2.createRow(rowGenerator.generate(item10042));
          continue;
        }
        const chatManager3 = require.chatManager;
        const changeset = chatManager3.createChangeset();
        const chatManager4 = require.chatManager;
        const jumpTargetId = tmp3.jumpTargetId;
        const previousRows = chatManager4.getPreviousRows();
        let obj3 = { rows: previousRows, scrollToMessageId: jumpTargetId, jumpTargetId, jumpType: "Symbol", shouldInitialScroll: "Array", animated: 0.301, scrollPosition: 1, focusTargetId: "hidden" };
        require.scrollData = computeScrollDataDefault(obj3);
        if (!tmp7) {
          if (require.didPositionInitialScroll) {
            require.updateContent(changeset, require.scrollData);
          }
        }
        require.updateContent(changeset, undefined);
      }
    };
    applyArgumentsResult.updateContent = function updateContent(changeset, scrollData) {
      const current = require.chatRef.current;
      if (null != current) {
        const obj2 = { rows: changeset, isLoadingAtTop: false, scrollData };
        const obj = NativeChatUtilsDefault;
        obj.updateRows(current, obj2);
      }
    };
    applyArgumentsResult.getMessage = function getMessage(arg0) {
      let closure_0 = arg0;
      const arr = _modDef12;
      return arr.find(require.props.messages, (id) => id.id === closure_0 || id.nonce === closure_0);
    };
    applyArgumentsResult.handleJumpToChat = function handleJumpToChat() {
      let closure_129_0;
      let closure_129_2;
      let jumpToChatProps;
      let onBeforeJumpToMessage;
      ({ channelId: closure_129_0, jumpToChatProps } = require.props);
      const jumpTargetId = jumpToChatProps.jumpTargetId;
      ({ onBeforeJumpToMessage, conversationId: closure_129_2 } = jumpToChatProps);
      if (onBeforeJumpToMessage != null) {
        let result = onBeforeJumpToMessage("footer_cta");
      }
      if (null != jumpTargetId) {
        const resolved = Promise.resolve();
        resolved.then(() => {
          const obj = closure_2_0(closure_2_3[20]);
          const result = obj.setSelectedConversation(closure_1_0, closure_1_2, { shouldJump: false });
          const obj2 = closure_2_0(closure_2_3[21]);
          obj2.transitionToMessage(closure_1_0, jumpTargetId, { navigationReplace: true });
        });
      }
    };
    applyArgumentsResult.handleTapLink = function handleTapLink(nativeEvent) {
      let props;
      nativeEvent = nativeEvent.nativeEvent;
      const data = nativeEvent.data;
      if ("bindJumpToMessage" === data.action) {
        if (null != data.targetChannelId) {
          if (null != data.targetMessageId) {
            let jumpToChatProps = require.props.jumpToChatProps;
            let onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
            if (onBeforeJumpToMessage != null) {
              let result = onBeforeJumpToMessage("message_link");
            }
            let obj2 = transitionToChannel;
            obj2.transitionToMessage(data.targetChannelId, data.targetMessageId, { navigationReplace: true });
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
            const obj2 = { source, navigationReplace: true };
            const obj = transitionToChannel;
            obj.transitionToThread(channel, obj2);
          }
        },
        message: require.getMessage(data.messageId),
        messageChannel: channel,
        selectedChannelId: null,
        tapLinkData: nativeEvent
      };
      const handleMessagesTapLink = handleMessagesTapLink2.handleMessagesTapLink;
      handleMessagesTapLink2;
      channel = require.props.channel;
      const result1 = handleMessagesTapLink(obj);
    };
    applyArgumentsResult.handleLongPressLink = function handleLongPressLink(nativeEvent) {
      const url = nativeEvent.nativeEvent.url;
      const hasActionSheetOpen = require.props.hasActionSheetOpen || null == url || "" === url;
      if (!hasActionSheetOpen) {
        const obj = { urlString: url };
        showLongPressURLActionSheetDefault(obj);
      }
    };
    applyArgumentsResult.handleLongPressMessage = function handleLongPressMessage(nativeEvent) {
      let componentMediaIndex;
      let mediaIndex;
      let mediaType;
      let tmp9;
      const obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const props = require.props;
      channel = props.channel;
      if (!props.hasActionSheetOpen) {
        const message = require.getMessage(tmp4);
        if (null != message) {
          const user = UserStore.getUser(message.author.id);
          if (null != user) {
            const getLongPressSelectedMedia = messages_MessagesUtils.getLongPressSelectedMedia;
            const tmpResult = messages_MessagesUtils;
            const tmpResult3 = InteractionComponentTypes;
            const longPressSelectedMedia = getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult3.asComponentId(tmp5), componentMediaIndex);
            const obj4 = KeyboardManagerUtilsAll;
            const result = obj4.dismissGlobalKeyboard();
            const obj3 = { actionSheetSource: "Preview", analyticsLocation: require.props.analyticsLocation, canAddNewReactions: tmp9, channel, message, selectedMedia: longPressSelectedMedia, user };
            tmp9 = true === tmp6;
            const showLongPressMessageActionSheet = showLongPressMessageActionSheet2.showLongPressMessageActionSheet;
            showLongPressMessageActionSheet2;
            if (tmp9) {
              tmp9 = null != channel;
            }
            if (tmp9) {
              tmp9 = canAddNewReactionsDefault(channel);
            }
            const result1 = showLongPressMessageActionSheet(obj3);
          }
        }
      }
    };
    applyArgumentsResult.handleLongPressReaction = function handleLongPressReaction(nativeEvent) {
      const obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const reaction = nativeSyntheticEventData.reaction;
      if (!require.props.hasActionSheetOpen) {
        let emoji;
        const handleViewPreviewReactions = reactions_ReactionUtils.handleViewPreviewReactions;
        reactions_ReactionUtils;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        const result = handleViewPreviewReactions(tmp4, tmp5, emoji);
      }
    };
    applyArgumentsResult.handleTapReaction = function handleTapReaction(nativeEvent) {
      let isBurst;
      let messageId;
      let reaction;
      const props = require.props;
      channel = props.channel;
      if (!props.hasActionSheetOpen) {
        if (true === tmp) {
          if (null != channel) {
            const obj2 = MessageDataSnowflakeUtils;
            const nativeSyntheticEventData = obj2.getNativeSyntheticEventData(nativeEvent);
            ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
            let tmp5 = null;
            const handleAddOrRemoveReaction = messages_MessagesUtils.handleAddOrRemoveReaction;
            if (null != reaction) {
              const obj = { emoji: reaction.emoji };
              const merged = Object.assign(reaction);
              tmp5 = obj;
            }
            let MESSAGE = nativeEvent.nativeEvent.location;
            if (MESSAGE == null) {
              MESSAGE = ReactionActionCreators.ReactionLocations.MESSAGE;
            }
            const result = handleAddOrRemoveReaction(messageId, channel, tmp5, isBurst, MESSAGE);
          }
        }
      }
    };
    applyArgumentsResult.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const message = require.getMessage(nativeEvent.id);
      if (null != message) {
        channel = ChannelStore.getChannel(message.getChannelId());
        if (null != channel) {
          const obj = { tapImageData: nativeEvent, allowWithinModal: true, message, messageChannel: channel, selectedChannelId: "IconComponent", showContextName: null };
          const obj2 = handleMessagesTapImage;
          const result = obj2.handleMessagesTapImage(obj);
        }
      }
    };
    applyArgumentsResult.handleTapChannel = function handleTapChannel(nativeEvent) {
      let props;
      const obj = MessageDataSnowflakeUtils;
      const data = obj.getNativeSyntheticEventData(nativeEvent).data;
      const obj2 = handleMessagesTapChannel;
      const obj3 = {
        data,
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
      let result = obj2.handleMessagesTapChannel(obj3);
    };
    applyArgumentsResult.handleLongPressChannel = function handleLongPressChannel(arg0) {
      MessageDataSnowflakeUtils;
      if (!require.props.hasActionSheetOpen) {
        const obj = { data: tmp4 };
        const tmpResult = handleMessagesLongPressChannel;
        const result = tmpResult.handleMessagesLongPressChannel(obj);
      }
    };
    applyArgumentsResult.handleTapAttachmentTextPreview = function handleTapAttachmentTextPreview(arg0) {
      if (!require.props.hasActionSheetOpen) {
        const contentHandlers = contentHandlers2.contentHandlers;
        const result = contentHandlers.onTapAttachmentTextPreview(arg0);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const self = this;
    const tmp = null != this.props.messages && false !== self.props.canAccessChannel;
    if (tmp) {
      self.setup();
    }
  }
  componentWillUnmount() {
    if (null != this.chatRef.current) {
      const chatManager = this.chatManager;
      chatManager.clear();
    }
  }
  componentDidUpdate(messages) {
    const self = this;
    const tmp = messages.messages === this.props.messages && messages.width === self.props.width;
    if (!tmp) {
      self.setup(messages.width !== self.props.width);
    }
    const tmp3 = messages.canAccessChannel !== self.props.canAccessChannel && null != self.props.messages;
    if (tmp3) {
      self.setup(self.props.canAccessChannel);
    }
  }
  render() {
    let PressableOpacity;
    let channel;
    let isSpoilerHidden;
    let items1;
    let obj10;
    let obj17;
    let prop;
    let prop1;
    let tmp14;
    let tmp6Result2;
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
        const obj3 = { guildId: null, channelId: null };
        ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
        tmp14 = map1(GuildNSFWDefault, obj3);
      }
      const items = [tmp.containerInner, ];
      let tmp24 = null != self.props.backgroundColor;
      if (tmp24) {
        tmp24 = { backgroundColor: self.props.backgroundColor };
        const obj4 = { backgroundColor: self.props.backgroundColor };
      }
      const obj5 = { style: items, children: items1 };
      items[1] = tmp24;
      items1 = [tmp14, tmp6Result2];
      return authStore2(hasOwnProperty, obj5);
    }
    if (isSpoilerHidden) {
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      if (null != guild_id1) {
        const obj6 = { guildId: null, channelId: null };
        ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
        tmp14 = map1(ChannelSpoilerDefault, obj6);
      }
    }
    const obj = { ref: self.chatRef, style: tmp.chat, inverted: true, onTapLink: self.handleTapLink, onTapChannel: self.handleTapChannel, onLongPressChannel: self.handleLongPressChannel, onTapAttachmentTextPreview: self.handleTapAttachmentTextPreview, onLongPressLink: self.handleLongPressLink, onLongPressMessage: self.handleLongPressMessage, onLongPressReaction: self.handleLongPressReaction, onTapReaction: self.handleTapReaction, onTapImage: self.handleTapImage, onCompleteFirstLayout: prop, onFirstLayout: prop1 };
    prop = undefined;
    const tmp8 = ChatDefault;
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      prop = self.handleCompleteFirstLayout;
    }
    prop1 = undefined;
    const tmp9Result = PlatformUtils;
    if (!tmp9Result.isIOS()) {
      prop1 = self.handleCompleteFirstLayout;
    }
    const obj9 = { bottom: true, style: tmp.jumpToChatButtonContainer, children: map1(PressableOpacity, obj10) };
    const tmp6Result = map1(tmp8, obj);
    const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    obj10 = { accessibilityRole: "button", style: tmp.jumpToChatButton, onPress: self.handleJumpToChat, children: map1(Text_Text.Text, obj17) };
    PressableOpacity = Pressables.PressableOpacity;
    tmp14 = tmp6Result;
    obj17 = { style: tmp.jumpToChatText, variant: "text-md/medium", color: "interactive-text-default", children: self.props.jumpToChatProps.jumpToChatText };
    tmp6Result2 = map1(SafeAreaPaddingView, obj9);
  }
}
const prototype = ChatPreviewBase.prototype;
ChatPreviewBase.contextType = native.ThemeContext;
ChatPreviewBase.defaultProps = { withSafeArea: true };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let content;
  let roleStyle;
  let tmp11;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp8;
  const obj = channelId(576);
  const cResult = obj.c(19);
  channelId = channelId.channelId;
  const InlineAttachmentMedia = channelId(2028).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channelId(2028).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channelId(2028).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[3] = channelId;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult5 = channelId(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp11, S);
  const width = useWindowDimensionsDefault().width;
  const tmpResult6 = channelId(6832);
  const isChannelSpoilerGated = tmpResult6.useIsChannelSpoilerGated(stateFromStores1);
  const tmpResult7 = channelId(5100);
  const isChannelContentGated = tmpResult7.useIsChannelContentGated(stateFromStores1);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items2 = [ActionSheetStore];
    class I {
      constructor() {
        return null != content.getContent();
      }
    }
    cResult[5] = items2;
    cResult[6] = I;
    tmp18 = I;
    tmp17 = items2;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    tmp18 = cResult[6];
  }
  const tmpResult8 = channelId(504);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp17, tmp18);
  if (cResult[7] === stateFromStores1) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const obj2 = { inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, roleStyle: stateFromStores, channel: stateFromStores1, width, isSpoilerHidden: isChannelSpoilerGated, isNSFWHidden: isChannelContentGated, canAccessChannel: !isChannelSpoilerGated && !isChannelContentGated, hasActionSheetOpen: stateFromStores2 };
  const merged = Object.assign(channelId);
  cResult[7] = stateFromStores1;
  cResult[8] = stateFromStores2;
  cResult[9] = setting;
  cResult[10] = setting1;
  cResult[11] = isChannelContentGated;
  cResult[12] = isChannelSpoilerGated;
  cResult[13] = channelId;
  cResult[14] = setting2;
  cResult[15] = stateFromStores;
  cResult[16] = !isChannelSpoilerGated && !isChannelContentGated;
  cResult[17] = width;
  cResult[18] = closure_13(ChatPreviewBase, obj2);
  closure_13(ChatPreviewBase, obj2);
}) : ((channelId) => {
  let content;
  let roleStyle;
  let stateFromStores2;
  channelId = channelId.channelId;
  const InlineAttachmentMedia = channelId(2028).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channelId(2028).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channelId(2028).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const items = [AccessibilityStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const items1 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const width = useWindowDimensionsDefault().width;
  const obj3 = channelId(6832);
  const isChannelSpoilerGated = obj3.useIsChannelSpoilerGated(stateFromStores1);
  const obj4 = channelId(5100);
  const isChannelContentGated = obj4.useIsChannelContentGated(stateFromStores1);
  const items2 = [ActionSheetStore];
  const obj6 = { inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, roleStyle: stateFromStores, channel: stateFromStores1, width, isSpoilerHidden: isChannelSpoilerGated, isNSFWHidden: isChannelContentGated, canAccessChannel: !isChannelSpoilerGated && !isChannelContentGated, hasActionSheetOpen: stateFromStores2 };
  const obj5 = channelId(504);
  stateFromStores2 = obj5.useStateFromStores(items2, () => null != content.getContent());
  const merged = Object.assign(channelId);
  return closure_13(ChatPreviewBase, obj6);
});
let result = size.fileFinishedImporting("components_native/common/ChatPreview.tsx");

export const ChatPreview = tmp7;