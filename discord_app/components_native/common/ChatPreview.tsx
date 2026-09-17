// discord_app/components_native/common/ChatPreview.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../modules/screen/useWindowDimensions.native.tsx";
import KeyboardManagerUtilsAll from "../../utils/native/KeyboardManagerUtils.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../../modules/routing/transitionToChannel.tsx";
import InteractionComponentTypes from "../../modules/interaction_components/InteractionComponentTypes.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import common_SafeAreaView from "SafeAreaView.tsx";
import ReactionActionCreators from "../../modules/reactions/ReactionActionCreators.tsx";
import RowGeneratorDefault from "../../modules/messages/native/renderer/RowGenerator.tsx";
import canAddNewReactionsDefault from "../../modules/reactions/canAddNewReactions.tsx";
import messages_MessagesUtils from "../../modules/messages/native/MessagesUtils.tsx";
import reactions_ReactionUtils from "../../modules/reactions/native/ReactionUtils.tsx";
import computeScrollDataDefault from "../../modules/chat/native/computeScrollData.tsx";
import NativeChatUtils from "../../modules/chat/native/NativeChatUtils.tsx";
import ChatManagerDefault from "../../modules/messages/native/renderer/ChatManager.tsx";
import handleMessagesTapImage from "../../modules/messages/native/handlers/handleMessagesTapImage.tsx";
import MessageDataSnowflakeUtils from "../../modules/messages/native/snowflake/MessageDataSnowflakeUtils.tsx";
import handleMessagesTapChannel from "../../modules/messages/native/handlers/handleMessagesTapChannel.tsx";
import handleMessagesLongPressChannel from "../../modules/messages/native/handlers/handleMessagesLongPressChannel.tsx";
import showLongPressURLActionSheetDefault from "../../modules/links/native/showLongPressURLActionSheet.tsx";
import handleMessagesTapLink from "../../modules/messages/native/handlers/handleMessagesTapLink.tsx";
import showLongPressMessageActionSheet from "../../modules/messages/native/long_press/showLongPressMessageActionSheet.tsx";
import ChatDefault from "../../modules/chat/native/Chat.android.tsx";
import isNewMessageGroupDefault from "../../modules/messages/isNewMessageGroup.tsx";
import GuildNSFWDefault from "../warnings/GuildNSFW.tsx";
import ChannelSpoilerDefault from "../../modules/spoiler_channels/native/ChannelSpoiler.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import ActionSheetStore from "../../modules/action_sheet/native/ActionSheetStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const NativeChatUtilsDefault = NativeChatUtils;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const RowGeneratorConstants = fn(8069);
({ Changeset: c10, RowType: closure_11, SeparatorType: closure_12 } = RowGeneratorConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  chat: { flex: 1, overflow: "hidden" },
  containerInner: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  jumpToChatButtonContainer: null,
  jumpToChatButton: null,
  jumpToChatText: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.jumpToChatButtonContainer = { flexShrink: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { flexShrink: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.jumpToChatButton = {
  height: 44,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.jumpToChatText = { textAlign: "center", flex: 1, lineHeight: 44 };
let closure_15 = createStyles.createLegacyClassComponentStyles(obj2);
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
      if (!applyArgumentsResult.didPositionInitialScroll) {
        applyArgumentsResult.didPositionInitialScroll = true;
        if (applyArgumentsResult.props.initialScrollToTop) {
          messages_MessagesUtils.scrollToTopMessage(applyArgumentsResult.chatRef, applyArgumentsResult.chatManager);
        } else {
          let tmp3 = null != applyArgumentsResult.scrollData;
          if (tmp3) {
            tmp3 = applyArgumentsResult.scrollData.type === NativeChatUtils.ChatScrollType.SCROLL;
          }
          if (tmp3) {
            const obj2 = {
              animated: applyArgumentsResult.scrollData.animate,
              highlight: applyArgumentsResult.scrollData.highlight,
              position: applyArgumentsResult.scrollData.position,
            };
            NativeChatUtilsDefault.scrollTo(
              applyArgumentsResult.chatRef.current,
              applyArgumentsResult.scrollData.index,
              obj2,
            );
          }
        }
      }
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
        let obj2 = {
          renderEmbeds: tmp6,
          inlineEmbedMedia: tmp5,
          inlineAttachmentMedia: tmp4,
          constrainedWidth: applyArgumentsResult.props.width,
        };
        rowGenerator2.setOptions(obj2);
        const chatManager5 = applyArgumentsResult.chatManager;
        chatManager5.setup(messages);
        changeType = flag ? constants.UPDATE : constants.NOOP;
        const chatManager = applyArgumentsResult.chatManager;
        const previousMessages = chatManager.getPreviousMessages();
        const _Array = Array;
        if (Array.isArray(previousMessages)) {
          const _Map = Map;
          new Map(
            previousMessages.map((id) => {
              items = [id.id, id];
              return items;
            }),
          );
        }
        items = [];
        let item = messages.forEach((item) => {
          const first = items[0];
          if (null != first) {
            if (isNewMessageGroupDefault(c0, first[first.length - 1], item)) {
              items = [item];
              arr.unshift(items);
            } else {
              first.unshift(item);
            }
          } else {
            items1 = [item];
            arr.unshift(items1);
          }
        });
        items1 = [];
        let item1 = items.forEach((arr, index) => {
          let obj5 = tmp;
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
            isSameDayResult = _undefined(changeType[16]).isSameDay(tmp.timestamp, timestamp);
            const obj = _undefined(changeType[16]);
          }
          let flag = false;
          if (!isSameDayResult) {
            messages = true;
            flag = true;
          }
          let tmp8 = items1[items1.length - 1];
          let obj2 = {
            roleStyle,
            rowType: constants.BLOCKED_GROUP,
            changeType,
            message: arr[arr.length - 1],
            isFirst: true,
            content: [],
            text: "",
            revealed: false,
          };
          if (arr[arr.length - 1].blocked) {
            if (!tmp25) {
              const obj3 = {};
              const merged = Object.assign(obj2);
              obj3.rowType = constants.BLOCKED_GROUP;
              items1.push(obj3);
              tmp8 = obj3;
            }
            obj5 = tmp8;
            const item = arr.forEach((message) => {
              const content = obj5.content;
              content.unshift({
                rowType: constants2.MESSAGE,
                changeType: constants.NOOP,
                roleStyle,
                message,
                isFirst: message === c0,
              });
            });
            tmp8.revealed = tmp.id === messages.revealedMessageId;
            tmp8.context = tmp.id;
            const intl2 = _undefined(changeType[17]).intl;
            const obj4 = { count: tmp8.content.length };
            tmp8.text = intl2.formatToPlainString(_undefined(changeType[17]).t["+FcYM/"], obj4);
            tmp25 = null != tmp8 && tmp8.rowType === constants.BLOCKED_GROUP;
          } else if (tmp.ignored) {
            let tmp14 = tmp8;
            if (!tmp13) {
              obj5 = {};
              const merged1 = Object.assign(obj2);
              obj5.rowType = constants.IGNORED_GROUP;
              items1.push(obj5);
              tmp14 = obj5;
            }
            obj5 = tmp14;
            const item1 = arr.forEach((message) => {
              const content = obj5.content;
              content.unshift({
                rowType: constants2.MESSAGE,
                changeType: constants.NOOP,
                roleStyle,
                message,
                isFirst: message === c0,
              });
            });
            tmp14.revealed = tmp.id === messages.revealedMessageId;
            tmp14.context = tmp.id;
            const intl = _undefined(changeType[17]).intl;
            const obj6 = { count: tmp14.content.length };
            tmp14.text = intl.formatToPlainString(_undefined(changeType[17]).t["VFWjc+"], obj6);
            tmp13 = null != tmp8 && tmp8.rowType === constants.IGNORED_GROUP;
          } else {
            const item2 = arr.forEach((id) => {
              if (null != map) {
                if (map.get(id.id) !== id) {
                  let UPDATE = constants.UPDATE;
                }
                const obj2 = {
                  roleStyle,
                  rowType: constants2.MESSAGE,
                  changeType: UPDATE,
                  message: id,
                  isFirst: id === obj5,
                  isEditing: false,
                  separatorBefore: null,
                };
                let tmp6 = id === obj5;
                if (tmp6) {
                  tmp6 = c1;
                }
                obj2.separatorBefore = tmp6;
                items1.push(obj2);
              }
              UPDATE = closure_3;
            });
          }
          if (flag) {
            const obj7 = {
              roleStyle,
              rowType: constants2.DAY,
              changeType,
              text: _undefined(changeType[16]).dateFormat(tmp.timestamp, "LL"),
            };
            items1.push(obj7);
            const obj8 = _undefined(changeType[16]);
          }
        });
        for (const item10042 of items1) {
          ({ chatManager: chatManager2, rowGenerator } = applyArgumentsResult);
          let row = chatManager2.createRow(rowGenerator.generate(item10042));
          continue;
        }
        const chatManager3 = applyArgumentsResult.chatManager;
        const changeset = chatManager3.createChangeset();
        const chatManager4 = applyArgumentsResult.chatManager;
        const jumpTargetId = tmp3.jumpTargetId;
        const previousRows = chatManager4.getPreviousRows();
        let obj3 = {
          rows: previousRows,
          scrollToMessageId: jumpTargetId,
          jumpTargetId,
          jumpType: "flex",
          shouldInitialScroll: "Array",
          animated: "bearded_person_tone3",
          scrollPosition: "bearded_person_medium_skin_tone",
          focusTargetId: "bearded_person_tone4",
        };
        applyArgumentsResult.scrollData = computeScrollDataDefault(obj3);
        if (!tmp7) {
          if (applyArgumentsResult.didPositionInitialScroll) {
            applyArgumentsResult.updateContent(changeset, applyArgumentsResult.scrollData);
          }
        }
        applyArgumentsResult.updateContent(changeset, undefined);
      }
    };
    applyArgumentsResult.updateContent = function updateContent(changeset, scrollData) {
      const current = applyArgumentsResult.chatRef.current;
      if (null != current) {
        const obj2 = { rows: changeset, isLoadingAtTop: false, scrollData };
        NativeChatUtilsDefault.updateRows(current, obj2);
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
          applyArgumentsResult(4651).transitionToMessage(closure_1_0, jumpTargetId, { navigationReplace: true });
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
            transitionToChannel.transitionToMessage(data.targetChannelId, data.targetMessageId, {
              navigationReplace: true,
            });
          }
        }
      }
      let obj2 = {
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
            applyArgumentsResult(4651).transitionToThread(channel, obj2);
            const obj = applyArgumentsResult(4651);
          }
        },
        message: applyArgumentsResult.getMessage(data.messageId),
        messageChannel: "asc",
        selectedChannelId: "asc",
        tapLinkData: "https://support.discord.com/hc/articles/14155060633623",
      };
      channel = applyArgumentsResult.props.channel;
      obj2.messageChannel = channel;
      obj2.tapLinkData = nativeEvent;
      const result1 = handleMessagesTapLink.handleMessagesTapLink(obj2);
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
      const nativeSyntheticEventData = MessageDataSnowflakeUtils.getNativeSyntheticEventData(nativeEvent);
      ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const props = applyArgumentsResult.props;
      channel = props.channel;
      if (!props.hasActionSheetOpen) {
        const message = applyArgumentsResult.getMessage(tmp4);
        if (null != message) {
          const user = UserStore.getUser(message.author.id);
          if (null != user) {
            const tmpResult = messages_MessagesUtils;
            const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(
              message,
              mediaIndex,
              mediaType,
              InteractionComponentTypes.asComponentId(tmp5),
              componentMediaIndex,
            );
            const tmpResult3 = InteractionComponentTypes;
            const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
            const obj3 = {
              actionSheetSource: "Preview",
              analyticsLocation: applyArgumentsResult.props.analyticsLocation,
              canAddNewReactions: null,
              channel: null,
              message: null,
              selectedMedia: null,
              user: null,
            };
            let tmp9 = true === tmp6;
            if (tmp9) {
              tmp9 = null != channel;
            }
            if (tmp9) {
              tmp9 = canAddNewReactionsDefault(channel);
            }
            obj3.canAddNewReactions = tmp9;
            obj3.channel = channel;
            obj3.message = message;
            obj3.selectedMedia = longPressSelectedMedia;
            obj3.user = user;
            const result1 = showLongPressMessageActionSheet.showLongPressMessageActionSheet(obj3);
            const tmpResult4 = showLongPressMessageActionSheet;
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
          const obj = {
            tapImageData: nativeEvent,
            allowWithinModal: true,
            message,
            messageChannel: channel,
            selectedChannelId: "HermesInternal",
            showContextName: null,
          };
          const result = handleMessagesTapImage.handleMessagesTapImage(obj);
        }
      }
    };
    applyArgumentsResult.handleTapChannel = function handleTapChannel(nativeEvent) {
      const obj = MessageDataSnowflakeUtils;
      const obj2 = handleMessagesTapChannel;
      let result = obj2.handleMessagesTapChannel({
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
        },
      });
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
      ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
      let tmp14 = map1(GuildNSFWDefault, { guildId: null, channelId: null });
      const obj3 = { guildId: null, channelId: null };
    }
    const items = [tmp.containerInner];
    let tmp24 = null != self.props.backgroundColor;
    if (tmp24) {
      const obj4 = { backgroundColor: self.props.backgroundColor };
      tmp24 = obj4;
    }
    const obj5 = { style: null, children: null };
    items[1] = tmp24;
    obj5.style = items;
    const items1 = [tmp14, tmp6Result2];
    obj5.children = items1;
    return closure_1_14(hasOwnProperty, obj5);
  }
  if (isSpoilerHidden) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    if (null != guild_id1) {
      ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
      tmp14 = map1(ChannelSpoilerDefault, { guildId: null, channelId: null });
      const obj6 = { guildId: null, channelId: null };
    }
  }
  const obj = {
    ref: self.chatRef,
    style: tmp.chat,
    inverted: true,
    onTapLink: self.handleTapLink,
    onTapChannel: self.handleTapChannel,
    onLongPressChannel: self.handleLongPressChannel,
    onLongPressLink: self.handleLongPressLink,
    onLongPressMessage: self.handleLongPressMessage,
    onLongPressReaction: self.handleLongPressReaction,
    onTapReaction: self.handleTapReaction,
    onTapImage: self.handleTapImage,
    onCompleteFirstLayout: null,
    onFirstLayout: null,
  };
  const tmp8 = ChatDefault;
  let prop;
  if (obj2.isIOS()) {
    prop = self.handleCompleteFirstLayout;
  }
  obj.onCompleteFirstLayout = prop;
  obj2 = PlatformUtils;
  let prop1;
  if (!tmp9Result.isIOS()) {
    prop1 = self.handleCompleteFirstLayout;
  }
  obj.onFirstLayout = prop1;
  tmp9Result = PlatformUtils;
  const obj9 = { bottom: true, style: tmp.jumpToChatButtonContainer, children: null };
  const obj10 = {
    accessibilityRole: "button",
    style: tmp.jumpToChatButton,
    onPress: self.handleJumpToChat,
    children: map1(Text_Text.Text, {
      style: tmp.jumpToChatText,
      variant: "text-md/medium",
      color: "interactive-text-default",
      children: self.props.jumpToChatProps.jumpToChatText,
    }),
  };
  obj9.children = map1(Pressables.PressableOpacity, obj10);
  const obj17 = {
    style: tmp.jumpToChatText,
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: self.props.jumpToChatProps.jumpToChatText,
  };
  const tmp6Result = map1(tmp8, obj);
  tmp14 = tmp6Result;
  tmp6Result2 = map1(common_SafeAreaView.SafeAreaPaddingView, obj9);
};
ChatPreviewBase.contextType = fn(4350).ThemeContext;
ChatPreviewBase.defaultProps = { withSafeArea: true };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/ChatPreview.tsx");

export const ChatPreview = function ChatPreview(channelId) {
  channelId = channelId.channelId;
  const InlineAttachmentMedia = channelId(1936).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channelId(1936).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channelId(1936).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const items = [AccessibilityStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => roleStyle.roleStyle);
  const obj = channelId(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const isChannelSpoilerGated = channelId(7443).useIsChannelSpoilerGated(stateFromStores1);
  const obj3 = channelId(7443);
  const isChannelContentGated = channelId(4851).useIsChannelContentGated(stateFromStores1);
  const obj4 = channelId(4851);
  const items2 = [ActionSheetStore];
  const obj6 = {};
  const stateFromStores2 = channelId(504).useStateFromStores(items2, () => null != content.getContent());
  const merged = Object.assign(channelId);
  obj6.inlineAttachmentMedia = setting;
  obj6.inlineEmbedMedia = setting1;
  obj6.renderEmbeds = setting2;
  obj6.roleStyle = stateFromStores;
  obj6.channel = stateFromStores1;
  obj6.width = useWindowDimensionsDefault().width;
  obj6.isSpoilerHidden = isChannelSpoilerGated;
  obj6.isNSFWHidden = isChannelContentGated;
  let tmp12 = !isChannelSpoilerGated;
  if (!isChannelSpoilerGated) {
    tmp12 = !isChannelContentGated;
  }
  obj6.canAccessChannel = tmp12;
  obj6.hasActionSheetOpen = stateFromStores2;
  return closure_13(ChatPreviewBase, obj6);
};
