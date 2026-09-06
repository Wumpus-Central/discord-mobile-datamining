// === Module 12973: MediaMessagePreview ===

// Module 12973 (MediaMessagePreview)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7764 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8126 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11252 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11547 */;
import handleMessagesTapLink from "handleMessagesTapLink" /* 11616 */;
import showMediaMessagePreviewActionSheetDefault from "showMediaMessagePreviewActionSheet" /* 12974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 7277 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8360 */;

require = fn;
function MeasureMessage(message) {
  message = message.message;
  const onMeasure = message.onMeasure;
  const onMeasureTruncated = message.onMeasureTruncated;
  const disableReactionCreates = message.disableReactionCreates;
  const tmp = closure_17();
  noop = tmp;
  let obj = message(onMeasureTruncated[13]);
  const result = 0.5 * obj.useMediaViewerDimensions().height;
  c5 = result;
  const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
  const memo = noop.useMemo(() => {
    let obj = { full: null, truncated: null };
    message = false;
    obj = {
      onLayout(nativeEvent) {
        const bound = Math.min(nativeEvent.nativeEvent.layout.height, c5);
        if (0 !== bound) {
          if (c0) {
            onMeasureTruncated(bound);
          } else {
            onMeasure(bound);
          }
        }
      },
      modifyRow(arg0) {
        arg0.canAddNewReactions = !disableReactionCreates;
        arg0.contextType = RowGeneratorTypes.MessageContextType.MEDIA_VIEWER;
        if (c0) {
          arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
        }
      },
      rowGenerator,
      message,
      style: closure_4.dummyLayout
    };
    obj.full = obj;
    closure_129_0 = true;
    obj.truncated = {
      onLayout(nativeEvent) {
        const bound = Math.min(nativeEvent.nativeEvent.layout.height, c5);
        if (0 !== bound) {
          if (c0) {
            onMeasureTruncated(bound);
          } else {
            onMeasure(bound);
          }
        }
      },
      modifyRow(arg0) {
        arg0.canAddNewReactions = !disableReactionCreates;
        arg0.contextType = RowGeneratorTypes.MessageContextType.MEDIA_VIEWER;
        if (c0) {
          arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
        }
      },
      rowGenerator,
      message,
      style: closure_4.dummyLayout
    };
    return obj;
  }, items);
  obj = { children: null };
  obj = {};
  const merged = Object.assign(memo.full);
  const items1 = [closure_13(onMeasure(onMeasureTruncated[14]), obj), ];
  const obj1 = {};
  const tmp4 = onMeasure(onMeasureTruncated[14]);
  const merged1 = Object.assign(memo.truncated);
  items1[1] = closure_13(onMeasure(onMeasureTruncated[14]), obj1);
  obj.children = items1;
  return closure_15(closure_14, obj);
}
get_ActivityIndicator = fn(17);
({ findNodeHandle: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
let ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
new RowGeneratorDefault();
let obj = { renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderEmbeds: false, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: false, renderReactions: true, renderAttachments: false, renderReplies: false, renderThreadEmbeds: false, renderPolls: false, renderForumPostActions: false, forcedTheme: ThemeTypes.DARK, forceHideSimpleEmbedContent: true };
obj.setOptions(obj);
let createStyles = fn(4560);
let closure_17 = createStyles.createStyles({ dummyLayout: { position: "absolute", top: 0, left: -9999, bottom: 0, width: "100%", opacity: 0 } });
createStyles = fn(4560);
obj = { reactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT, reactionBorderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT, reactionTextColor: nativeDefault.colors.REACTION_TEXT_DEFAULT, activeReactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT, activeReactionBorderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT, activeReactionTextColor: nativeDefault.colors.REACTION_TEXT_REACTED_DEFAULT };
let closure_19 = createStyles.createNativeStyleProperties(obj);
createStyles = fn(4560);
let closure_20 = createStyles.createNativeStyleProperties({ editedColor: nativeDefault.colors.TEXT_MUTED, seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT });
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx");

export default function MediaMessagePreview(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const onClose = channelId.onClose;
  const onTapMessage = channelId.onTapMessage;
  const full = channelId.full;
  ({ canExpand: closure_5, setScrollViewIsAtTop: closure_6, flingUpRef } = channelId);
  const flingDownRef = channelId.flingDownRef;
  const animationDriver = channelId.animationDriver;
  ThemeTypes = undefined;
  let seeMoreLabelColor;
  let stateFromStores1;
  ({ onMeasureFullHeight, onMeasureCollapsedHeight } = channelId);
  let obj = channelId(onClose[16]);
  const items = [animationDriver];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  });
  const disableReactionCreates = messageId(onClose[17])(stateFromStores).disableReactionCreates;
  [tmp6, c12] = onTapMessage(full.useState(false), 2);
  const tmp7 = onTapMessage(full.useState(false), 2);
  closure_13 = tmp7[1];
  const ref = full.useRef(null);
  const tmp9 = onTapMessage(full.useState(null), 2);
  const reactTag = tmp9[0];
  rowGenerator = tmp9[1];
  const effect = full.useEffect(() => {
    closure_16(hasOwnProperty(ref.current));
  }, []);
  const tmp12 = seeMoreLabelColor(ThemeTypes.MIDNIGHT);
  const reactionsTheme = tmp12;
  const tmp13 = stateFromStores1(ThemeTypes.MIDNIGHT);
  const editedColor = tmp13.editedColor;
  seeMoreLabelColor = tmp13.seeMoreLabelColor;
  const items1 = [reactTag, disableReactionCreates, editedColor, seeMoreLabelColor, tmp12, full, animationDriver];
  const callback = full.useCallback((message) => {
    message.canAddNewReactions = !disableReactionCreates;
    message.contextType = RowGeneratorTypes.MessageContextType.MEDIA_VIEWER;
    message.reactTag = reactTag;
    message.canAddNewReactions = !disableReactionCreates;
    message.message.feedbackColor = undefined;
    message.message.editedColor = editedColor;
    message.reactionsTheme = reactionsTheme;
    if (!full) {
      const obj = { numberOfLines: 3, expandable: true, seeMoreLabel: null, seeMoreLabelColor: null, outAnimationDuration: null, outAnimation: "fade" };
      const intl = tmp(1114).intl;
      const _HermesInternal = HermesInternal;
      obj.seeMoreLabel = " " + intl.string(tmp(1114).t["7qbp3B"]);
      obj.seeMoreLabelColor = seeMoreLabelColor;
      const _Math = Math;
      obj.outAnimationDuration = Math.min(0.25 * animationDriver.get(), 0.1);
      message.truncation = obj;
    }
  }, items1);
  let obj1 = channelId(onClose[16]);
  const items2 = [flingDownRef, stateFromStores, disableReactionCreates, flingUpRef];
  const items3 = [channelId, messageId];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    if (null != channelId) {
      if (null != messageId) {
        let message = MessageStore.getMessage(tmp, tmp2);
        if (message == null) {
          message = MessagePreviewStore.getMessage(tmp2);
        }
        if (message == null) {
          const message1 = ForumPostMessagesStore.getMessage(SnowflakeUtilsDefault.castMessageIdAsChannelId(tmp2));
          let firstMessage;
          if (message1 != null) {
            firstMessage = message1.firstMessage;
          }
          message = firstMessage;
        }
        if (message == null) {
          message = SearchMessageStore.getMessage(tmp2);
        }
        return message;
      }
    }
  }, items3);
  const tmp16 = onTapMessage(full.useState(0), 2);
  const first1 = tmp16[0];
  closure_22 = tmp16[1];
  const items4 = [full, first1];
  const callback1 = full.useCallback((arg0, arg1) => {
    closure_22(arg1);
  }, []);
  const items5 = [stateFromStores1, onClose];
  const callback2 = full.useCallback((nativeEvent) => {
    closure_13(true);
    let tmp3 = first1 > nativeEvent.nativeEvent.layout.height;
    if (tmp3) {
      tmp3 = full;
    }
    _undefined(tmp3);
  }, items4);
  const items6 = [stateFromStores1];
  const callback3 = full.useCallback((nativeEvent) => {
    const obj = { channelId: null, message: null, closeMediaModal: null };
    const tmp = showMediaMessagePreviewActionSheetDefault;
    obj.channelId = MessageDataSnowflakeUtils.getNativeSyntheticEventData(nativeEvent).channelId;
    obj.message = stateFromStores1;
    obj.closeMediaModal = onClose;
    tmp(obj);
  }, items5);
  const items7 = [channelId, stateFromStores1, messageId];
  const callback4 = full.useCallback((arg0) => {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    }
  }, items6);
  const callback5 = full.useCallback((nativeEvent) => {
    ({ reaction, isBurst } = nativeEvent.nativeEvent);
    if (null != stateFromStores1) {
      const channel = ChannelStore.getChannel(channelId);
      let tmp2 = null != channel;
      if (tmp2) {
        tmp2 = null != messageId;
      }
      if (tmp2) {
        let obj = messages_MessagesUtils;
        let tmp6 = null;
        if (null != reaction) {
          obj = {};
          const merged = Object.assign(reaction);
          obj.emoji = reaction.emoji;
          tmp6 = obj;
        }
        const result = obj.handleAddOrRemoveReaction(tmp5, channel, tmp6, isBurst, ReactionActionCreators.ReactionLocations.MOBILE_MEDIA_VIEWER);
      }
    }
  }, items7);
  const items8 = [flingDownRef, flingUpRef];
  const callback6 = full.useCallback((nativeEvent) => {
    const url = nativeEvent.nativeEvent.url;
    let tmp = null != url;
    if (tmp) {
      tmp = "" !== url;
    }
    if (tmp) {
      const obj = { urlString: url };
      messageId(onClose[24])(obj);
    }
  }, []);
  let tmp26Result = null;
  if (null != stateFromStores1) {
    tmp26Result = null;
    if (null != stateFromStores) {
      obj = { gesture: tmp24, children: null };
      obj = {
        scrollEventThrottle: 16,
        onScroll(nativeEvent) {
              nativeEvent = nativeEvent.nativeEvent;
              const velocity = nativeEvent.velocity;
              let tmp2 = 0 === nativeEvent.contentOffset.y;
              if (tmp2) {
                let num;
                if (velocity != null) {
                  num = velocity.y;
                }
                if (num == null) {
                  num = 0;
                }
                tmp2 = 0 === num;
              }
              closure_1_6(tmp2);
            },
        onLayout: callback2,
        onContentSizeChange: callback1,
        showsVerticalScrollIndicator: full,
        bounces: tmp6,
        children: null
      };
      obj1 = {
        ref,
        onLongPressLink: callback6,
        onLongPressMessage: callback3,
        onTapMessage,
        onTapReaction: callback5,
        onTapSeeMore: onTapMessage,
        onTapTag: callback4,
        onTapLink(nativeEvent) {
              if (closure_1_5) {
                if (!full) {
                  onTapMessage();
                }
              }
              let obj = {
                allowWithinModal: true,
                chatInputRef: "Boolean",
                handleTransitionToThread(arg0, arg1, source) {
                  channel = channel.getChannel(arg1);
                  if (null != channel) {
                    channelId(onClose[28]);
                    const obj = { source, navigationReplace: false };
                    obj.transitionToThread(channel, obj);
                  }
                },
                message: stateFromStores1,
                messageChannel: stateFromStores,
                selectedChannelId: channelId,
                tapLinkData: nativeEvent.nativeEvent
              };
              const result = obj.handleMessagesTapLink(obj);
            },
        inverted: false
      };
      const items9 = [closure_13(tmp4(tmp2[26]), obj1), ];
      const obj2 = { rowGenerator, modifyRow: callback, message: stateFromStores1 };
      items9[1] = closure_13(tmp4(tmp2[14]), obj2);
      obj.children = items9;
      obj.children = reactTag(closure_6, obj);
      const items10 = [closure_13(channelId(tmp2[25]).GestureDetector, obj), ];
      let tmp28Result = null;
      if (tmp7[0]) {
        const obj3 = { disableReactionCreates, message: stateFromStores1, onMeasure: onMeasureFullHeight, onMeasureTruncated: onMeasureCollapsedHeight };
        tmp28Result = tmp28(editedColor, obj3);
      }
      const obj4 = { children: null };
      items10[1] = tmp28Result;
      obj4.children = items10;
      tmp26Result = reactTag(ref, obj4);
      tmp28 = closure_13;
    }
  }
  return tmp26Result;
};