// discord_app/components_native/common/ChatPreview.tsx
import importAllResult from "apply";
import get_ActivityIndicator from "computeScrollData";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import setContent from "setContent";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import Changeset from "Changeset";
import jsxProd from "handleMessagesTapURLLink";
import createCacheKey from "createCacheKey";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../design/void/Pressables/native/Pressables.tsx";
import { DCDChatList } from "../../modules/chat/native/Chat.android.tsx";
import { useWindowDimensions } from "../../modules/screen/useWindowDimensions.native.tsx";
import { ChannelSpoiler } from "../../modules/spoiler_channels/native/ChannelSpoiler.tsx";
import { set } from "../../utils/PlatformUtils.tsx";
import { GuildNSFW } from "../warnings/GuildNSFW.tsx";

let StyleSheet;
let c10;
let c5;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ Changeset: c10, RowType: unpackModuleId, SeparatorType: closure_12 } = Changeset);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { chat: { flex: 1, overflow: "hidden" }, containerInner: null, jumpToChatButtonContainer: null, jumpToChatButton: null, jumpToChatText: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexShrink: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { flexShrink: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { height: 44, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[4] = { textAlign: "center", flex: 1, lineHeight: 44 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
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
        applyArgumentsResult(outer1_3[13]).scrollToTopMessage(tmp.chatRef, tmp.chatManager);
        const obj = applyArgumentsResult(outer1_3[13]);
      }
    };
    applyArgumentsResult.setup = function setup() {
      let c0;
      let chatManager2;
      let messages;
      let rowGenerator;
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      messages = undefined;
      let roleStyle;
      let closure_3;
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
            const items = [id.id, id];
            return items;
          }));
        }
        items = [];
        let item = messages.forEach((props) => {
          let arr = items;
          const first = items[0];
          if (null != first) {
            if (messages(11277)(c0, first[first.length - 1], props)) {
              items = [props];
              arr = arr.unshift(items);
            } else {
              arr = first.unshift(props);
            }
          } else {
            const items1 = [props];
            arr.unshift(items1);
          }
        });
        items1 = [];
        let item1 = items.forEach((arr) => {
          let _undefined = tmp;
          let isSameDayResult = items[items.length - 1] === arr;
          let messages = false;
          let timestamp = null;
          if (!isSameDayResult) {
            timestamp = tmp2[arg1 + 1][0].timestamp;
          }
          if (!isSameDayResult) {
            isSameDayResult = null == timestamp;
          }
          if (!isSameDayResult) {
            let obj = _undefined(3954);
            isSameDayResult = obj.isSameDay(tmp.timestamp, timestamp);
          }
          let flag = false;
          if (!isSameDayResult) {
            messages = true;
            flag = true;
          }
          arr = items1;
          let tmp8 = items1[items1.length - 1];
          obj = { roleStyle, rowType: outer1_11.BLOCKED_GROUP, changeType: dependencyMap, message: tmp, isFirst: true, content: [], text: "", revealed: false };
          if (arr[arr.length - 1].blocked) {
            if (!tmp25) {
              obj = {};
              const merged = Object.assign(obj);
              obj.rowType = tmp10.BLOCKED_GROUP;
              arr = arr.push(obj);
              tmp8 = obj;
            }
            _undefined = tmp8;
            const item = arr.forEach((message) => {
              const content = tmp14.content;
              content.unshift({ rowType: outer3_11.MESSAGE, changeType: outer3_10.NOOP, roleStyle, message, isFirst: message === tmp14 });
            });
            tmp8.revealed = tmp.id === messages.revealedMessageId;
            tmp8.context = tmp.id;
            const intl2 = _undefined(1236).intl;
            const obj1 = { count: null };
            obj1[0] = tmp8.content.length;
            tmp8.text = intl2.formatToPlainString(_undefined(1236).t["+FcYM/"], obj1);
            tmp25 = null != tmp8 && tmp8.rowType === tmp10.BLOCKED_GROUP;
          } else if (tmp.ignored) {
            let tmp14 = tmp8;
            if (!tmp13) {
              const obj2 = {};
              const merged1 = Object.assign(obj);
              obj2.rowType = tmp10.IGNORED_GROUP;
              arr = arr.push(obj2);
              tmp14 = obj2;
            }
            _undefined = tmp14;
            const item1 = arr.forEach((message) => {
              const content = tmp14.content;
              content.unshift({ rowType: outer3_11.MESSAGE, changeType: outer3_10.NOOP, roleStyle, message, isFirst: message === tmp14 });
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
              let obj = outer1_4;
              if (null != outer1_4) {
                if (obj.get(id.id) !== id) {
                  let UPDATE = outer2_10.UPDATE;
                }
                obj = { roleStyle: null, rowType: null, changeType: null, message: null, isFirst: null, isEditing: false, separatorBefore: null };
                obj[0] = outer1_2;
                obj[1] = outer2_11.MESSAGE;
                obj[2] = UPDATE;
                obj[3] = id;
                obj[4] = id === closure_0;
                let tmp6 = id === closure_0;
                if (tmp6) {
                  tmp6 = c1;
                }
                obj[6] = tmp6;
                outer1_6.push(obj);
              }
              UPDATE = outer1_3;
            });
          }
          if (flag) {
            const obj4 = { roleStyle: null, rowType: null, changeType: null, text: null };
            obj4[0] = roleStyle;
            obj4[1] = outer1_12.DAY;
            obj4[2] = dependencyMap;
            obj4[3] = _undefined(3954).dateFormat(tmp.timestamp, "LL");
            arr.push(obj4);
            const obj8 = _undefined(3954);
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
          obj = { rows: null, scrollToMessageId: null, jumpTargetId: null, jumpType: "Path", shouldInitialScroll: "Array", animated: "4.8.0", scrollPosition: null, focusTargetId: 60 };
          obj[0] = tmp22;
          obj[1] = jumpTargetId;
          obj[2] = jumpTargetId;
          tmp23 = outer1_1(outer1_3[17])(obj);
        }
        obj.updateContent(changeset, tmp23);
        const tmp20 = applyArgumentsResult;
      }
    };
    applyArgumentsResult.updateContent = function updateContent(changeset, arg1) {
      const current = applyArgumentsResult.chatRef.current;
      if (null != current) {
        let obj = outer1_1(outer1_3[18]);
        obj = { rows: null, isLoadingAtTop: false, scrollData: null };
        obj[0] = changeset;
        obj[2] = arg1;
        obj.updateRows(current, obj);
      }
    };
    applyArgumentsResult.getMessage = function getMessage(arg0) {
      return outer1_1(outer1_3[19]).find(arg0.props.messages, (id) => id.id === closure_0 || id.nonce === closure_0);
    };
    applyArgumentsResult.handleJumpToChat = function handleJumpToChat() {
      let closure_0;
      let jumpToChatProps;
      ({ channelId: closure_0, jumpToChatProps } = applyArgumentsResult.props);
      const jumpTargetId = jumpToChatProps.jumpTargetId;
      const onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
      if (onBeforeJumpToMessage != null) {
        const result = onBeforeJumpToMessage("footer_cta");
      }
      if (null != jumpTargetId) {
        const resolved = Promise.resolve();
        resolved.then(() => {
          outer1_0(outer1_3[20]).transitionToMessage(closure_0, jumpTargetId, { navigationReplace: true });
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
            applyArgumentsResult(outer1_3[20]).transitionToMessage(data.targetChannelId, data.targetMessageId, { navigationReplace: true });
          }
        }
      }
      let obj = applyArgumentsResult(outer1_3[21]);
      obj = { allowWithinModal: true, chatInputRef: "a", handleTransitionToThread: "Array", message: 0, messageChannel: "asc", selectedChannelId: "asc", tapLinkData: "isInRestrictedHours" };
      obj[2] = function handleTransitionToThread(arg0, arg1, arg2) {
        const jumpToChatProps = props.props.jumpToChatProps;
        const onBeforeJumpToMessage = jumpToChatProps.onBeforeJumpToMessage;
        if (onBeforeJumpToMessage != null) {
          const result = onBeforeJumpToMessage("thread_link");
        }
        const channel = outer1_8.getChannel(arg1);
        if (null != channel) {
          let obj = outer1_0(outer1_3[20]);
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
        outer1_1(outer1_3[22])(obj);
      }
    };
    applyArgumentsResult.handleLongPressMessage = function handleLongPressMessage(closure_0) {
      let componentMediaIndex;
      let mediaIndex;
      let mediaType;
      let obj = applyArgumentsResult(outer1_3[23]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
      ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const props = applyArgumentsResult.props;
      const channel = props.channel;
      if (!props.hasActionSheetOpen) {
        const message = obj2.getMessage(tmp4);
        if (null != message) {
          const user = outer1_9.getUser(message.author.id);
          if (null != user) {
            let tmpResult = tmp(tmp2[13]);
            tmpResult = tmp(tmp2[24]);
            const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmpResult.asComponentId(tmp5), componentMediaIndex);
            const result = outer1_2(tmp2[25]).dismissGlobalKeyboard();
            const obj5 = outer1_2(tmp2[25]);
            obj = { actionSheetSource: "Preview", analyticsLocation: null, canAddNewReactions: null, channel: null, message: null, selectedMedia: null, user: null };
            obj[1] = obj2.props.analyticsLocation;
            let tmp9 = true === tmp6;
            if (tmp9) {
              tmp9 = null != channel;
            }
            if (tmp9) {
              tmp9 = outer1_1(tmp2[27])(channel);
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
      const nativeSyntheticEventData = applyArgumentsResult(outer1_3[23]).getNativeSyntheticEventData(closure_0);
      const reaction = nativeSyntheticEventData.reaction;
      if (!applyArgumentsResult.props.hasActionSheetOpen) {
        let emoji;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        const result = applyArgumentsResult(outer1_3[28]).handleViewPreviewReactions(tmp4, tmp5, emoji);
        const tmpResult = applyArgumentsResult(outer1_3[28]);
      }
    };
    applyArgumentsResult.handleTapReaction = function handleTapReaction(nativeEvent) {
      let isBurst;
      let messageId;
      let reaction;
      const props = applyArgumentsResult.props;
      const channel = props.channel;
      if (!props.hasActionSheetOpen) {
        if (true === tmp) {
          if (null != channel) {
            const nativeSyntheticEventData = applyArgumentsResult(outer1_3[23]).getNativeSyntheticEventData(nativeEvent);
            ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
            const obj3 = applyArgumentsResult(outer1_3[13]);
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
            const obj2 = applyArgumentsResult(outer1_3[23]);
            tmp15 = applyArgumentsResult;
            tmp16 = outer1_3;
          }
        }
      }
    };
    applyArgumentsResult.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const message = applyArgumentsResult.getMessage(nativeEvent.id);
      if (null != message) {
        const channel = outer1_8.getChannel(message.getChannelId());
        if (null != channel) {
          const obj = { tapImageData: null, allowWithinModal: true, message: null, messageChannel: null, selectedChannelId: "T", showContextName: null };
          obj[0] = nativeEvent;
          obj[2] = message;
          obj[3] = channel;
          const result = applyArgumentsResult(outer1_3[30]).handleMessagesTapImage(obj);
          const obj2 = applyArgumentsResult(outer1_3[30]);
        }
      }
    };
    applyArgumentsResult.handleTapChannel = function handleTapChannel(closure_0) {
      let obj = applyArgumentsResult(outer1_3[23]);
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
      let result = applyArgumentsResult(outer1_3[31]).handleMessagesTapChannel(obj);
    };
    applyArgumentsResult.handleLongPressChannel = function handleLongPressChannel(arg0) {
      applyArgumentsResult(outer1_3[23]);
      if (!applyArgumentsResult.props.hasActionSheetOpen) {
        const obj = { data: null };
        obj[0] = tmp4;
        const result = applyArgumentsResult(outer1_3[32]).handleMessagesLongPressChannel(obj);
        const tmpResult = applyArgumentsResult(outer1_3[32]);
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
  let channel;
  let isSpoilerHidden;
  const self = this;
  const tmp = createCacheKey(this.context);
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
      let tmp14 = callback(GuildNSFW, obj);
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
      let obj1 = { guildId: null, channelId: null };
      ({ guild_id: obj7[0], id: obj7[1] } = channel);
      tmp14 = callback(ChannelSpoiler, obj1);
    }
  }
  obj = { ref: self.chatRef, style: tmp.chat, inverted: true, onTapLink: self.handleTapLink, onTapChannel: self.handleTapChannel, onLongPressChannel: self.handleLongPressChannel, onLongPressLink: self.handleLongPressLink, onLongPressMessage: self.handleLongPressMessage, onLongPressReaction: self.handleLongPressReaction, onTapReaction: self.handleTapReaction, onTapImage: self.handleTapImage, onCompleteFirstLayout: null, onFirstLayout: null };
  obj1 = set;
  let prop;
  if (obj1.isIOS()) {
    prop = self.handleCompleteFirstLayout;
  }
  obj[11] = prop;
  const tmp8 = DCDChatList;
  let prop1;
  if (!tmp9Result.isIOS()) {
    prop1 = self.handleCompleteFirstLayout;
  }
  obj[12] = prop1;
  tmp6Result = tmp6(tmp8, obj);
  const obj2 = { bottom: true, style: tmp.jumpToChatButtonContainer, children: null };
  const obj3 = { accessibilityRole: "button", style: tmp.jumpToChatButton, onPress: self.handleJumpToChat, children: null };
  obj3[3] = callback(Text.Text, { style: tmp.jumpToChatText, variant: "text-md/medium", color: "interactive-text-default", children: self.props.jumpToChatProps.jumpToChatText });
  obj2[2] = callback(PressableBase.PressableOpacity, obj3);
  tmp6Result = tmp6(tmp9(5311).SafeAreaPaddingView, obj2);
  tmp14 = tmp6Result;
};
ChatPreviewBase.contextType = require("ManaContext").ThemeContext;
ChatPreviewBase.defaultProps = { withSafeArea: true };
let obj2 = { height: 44, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("components_native/common/ChatPreview.tsx");

export const ChatPreview = function ChatPreview(channelId) {
  channelId = channelId.channelId;
  const InlineAttachmentMedia = channelId(3957).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = channelId(3957).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = channelId(3957).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  let obj = channelId(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const items1 = [ensureGuildLoaded];
  const stateFromStores1 = channelId(589).useStateFromStores(items1, () => outer1_8.getChannel(channelId));
  const obj2 = channelId(589);
  const isChannelSpoilerGated = channelId(5865).useIsChannelSpoilerGated(stateFromStores1);
  const obj3 = channelId(5865);
  const isChannelContentGated = channelId(4498).useIsChannelContentGated(stateFromStores1);
  const obj4 = channelId(4498);
  const items2 = [setContent];
  obj = {};
  const stateFromStores2 = channelId(589).useStateFromStores(items2, () => null != content.getContent());
  const merged = Object.assign(channelId);
  obj.inlineAttachmentMedia = setting;
  obj.inlineEmbedMedia = setting1;
  obj.renderEmbeds = setting2;
  obj.roleStyle = stateFromStores;
  obj.channel = stateFromStores1;
  obj.width = useWindowDimensions().width;
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