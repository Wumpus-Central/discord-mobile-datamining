// discord_app/modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06326_LegacyBaseButton.js";
import RowGeneratorDefault from "../../../../messages/native/renderer/RowGenerator.tsx";
import ReactionActionCreators from "../../../../reactions/ReactionActionCreators.tsx";
import RowGeneratorTypes from "../../../../messages/native/renderer/RowGeneratorTypes.tsx";
import messages_MessagesUtils from "../../../../messages/native/MessagesUtils.tsx";
import handleMessagesTapLink from "../../../../messages/native/handlers/handleMessagesTapLink.tsx";
import MessageDataSnowflakeUtils from "../../../../messages/native/snowflake/MessageDataSnowflakeUtils.tsx";
import showMediaMessagePreviewActionSheetDefault from "showMediaMessagePreviewActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ForumPostMessagesStore from "../../../../forums/ForumPostMessagesStore.tsx";
import SearchMessageStore from "../../../../search/SearchMessageStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../../stores/MessageStore.tsx";
import MessagePreviewStore from "../../../../../stores/native/MessagePreviewStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ findNodeHandle: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
let ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let obj = new RowGeneratorDefault();
obj.setOptions({
  renderCodedLinks: false,
  renderGiftCode: false,
  renderActivityInstanceEmbed: false,
  renderActivityInviteEmbed: false,
  renderComponents: false,
  renderEmbeds: false,
  ignoreMentioned: true,
  inlineAttachmentMedia: false,
  inlineEmbedMedia: false,
  renderReactions: true,
  renderAttachments: false,
  renderReplies: false,
  renderThreadEmbeds: false,
  renderPolls: false,
  renderForumPostActions: false,
  forcedTheme: ThemeTypes.DARK,
  forceHideSimpleEmbedContent: true,
});
let createStyles = fn(5090);
let closure_17 = createStyles.createStyles({
  dummyLayout: { position: "absolute", top: 0, left: -9999, width: "100%", opacity: 0 },
});
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MeasureMessage(message) {
      const cResult = message(onMeasureTruncated[14]).c(16);
      message = message.message;
      const onMeasure = message.onMeasure;
      onMeasureTruncated = message.onMeasureTruncated;
      const disableReactionCreates = message.disableReactionCreates;
      const tmp3 = closure_17();
      const dummyLayout = tmp3;
      const obj = message(onMeasureTruncated[14]);
      const result = 0.5 * message(onMeasureTruncated[15]).useMediaViewerDimensions().height;
      closure_5 = result;
      if (cResult[0] === disableReactionCreates) {
        if (cResult[1] === result) {
          if (cResult[2] === message) {
            if (cResult[3] === onMeasure) {
              if (cResult[4] === onMeasureTruncated) {
                if (cResult[5] === tmp3.dummyLayout) {
                  let tmp5 = cResult[6];
                }
                if (cResult[7] !== tmp5) {
                  const obj3 = { full: tmp5(false), truncated: tmp5(true) };
                  cResult[7] = tmp5;
                  cResult[8] = obj3;
                  let tmp6 = obj3;
                } else {
                  tmp6 = cResult[8];
                }
                if (cResult[9] !== tmp6.full) {
                  const obj4 = {};
                  const merged = Object.assign(tmp6.full);
                  const tmp13 = closure_13(onMeasure(tmp[16]), obj4);
                  cResult[9] = tmp6.full;
                  cResult[10] = tmp13;
                  let tmp7 = tmp13;
                  const tmp10 = onMeasure(tmp[16]);
                } else {
                  tmp7 = cResult[10];
                }
                if (cResult[11] !== tmp6.truncated) {
                  const obj5 = {};
                  const merged1 = Object.assign(tmp6.truncated);
                  const tmp20 = closure_13(onMeasure(tmp[16]), obj5);
                  cResult[11] = tmp6.truncated;
                  cResult[12] = tmp20;
                  let tmp14 = tmp20;
                  const tmp17 = onMeasure(tmp[16]);
                } else {
                  tmp14 = cResult[12];
                }
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp14) {
                    let tmp21 = cResult[15];
                  }
                  return tmp21;
                }
                const obj6 = { children: null };
                const items = [tmp7, tmp14];
                obj6.children = items;
                const tmp24 = closure_15(closure_14, obj6);
                cResult[13] = tmp7;
                cResult[14] = tmp14;
                cResult[15] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
        }
      }
      function generateChatItemProps(arg0) {
        message = arg0;
        return {
          onLayout(nativeEvent) {
            const bound = Math.min(nativeEvent.nativeEvent.layout.height, result);
            if (0 !== bound) {
              if (closure_0) {
                onMeasureTruncated(bound);
              } else {
                onMeasure(bound);
              }
            }
          },
          modifyRow(arg0) {
            arg0.canAddNewReactions = !disableReactionCreates;
            arg0.contextType = RowGeneratorTypes.MessageContextType.MEDIA_VIEWER;
            if (closure_0) {
              arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
            }
          },
          rowGenerator,
          message,
          style: dummyLayout.dummyLayout,
        };
      }
      cResult[0] = disableReactionCreates;
      cResult[1] = result;
      cResult[2] = message;
      cResult[3] = onMeasure;
      cResult[4] = onMeasureTruncated;
      cResult[5] = tmp3.dummyLayout;
      cResult[6] = generateChatItemProps;
      tmp5 = generateChatItemProps;
      const obj2 = message(onMeasureTruncated[15]);
    }
  : function MeasureMessage(message) {
      message = message.message;
      const onMeasure = message.onMeasure;
      const onMeasureTruncated = message.onMeasureTruncated;
      const disableReactionCreates = message.disableReactionCreates;
      const tmp = closure_17();
      noop = tmp;
      const result = 0.5 * message(onMeasureTruncated[15]).useMediaViewerDimensions().height;
      c5 = result;
      const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
      const memo = noop.useMemo(() => {
        const obj = {
          full: null,
          truncated: {
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
            style: closure_4.dummyLayout,
          },
        };
        message = false;
        obj.full = {
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
          style: closure_4.dummyLayout,
        };
        closure_129_0 = true;
        return obj;
      }, items);
      const obj2 = { children: null };
      let obj = message(onMeasureTruncated[15]);
      const obj3 = {};
      const merged = Object.assign(memo.full);
      const items1 = [closure_13(onMeasure(onMeasureTruncated[16]), obj3)];
      const obj4 = {};
      const tmp4 = onMeasure(onMeasureTruncated[16]);
      const merged1 = Object.assign(memo.truncated);
      items1[1] = closure_13(onMeasure(onMeasureTruncated[16]), obj4);
      obj2.children = items1;
      return closure_15(closure_14, obj2);
    };
createStyles = fn(5090);
let closure_19 = createStyles.createNativeStyleProperties({
  reactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT,
  reactionBorderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT,
  reactionTextColor: nativeDefault.colors.REACTION_TEXT_DEFAULT,
  activeReactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT,
  activeReactionBorderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT,
  activeReactionTextColor: nativeDefault.colors.REACTION_TEXT_REACTED_DEFAULT,
});
createStyles = fn(5090);
let obj2 = {
  renderCodedLinks: false,
  renderGiftCode: false,
  renderActivityInstanceEmbed: false,
  renderActivityInviteEmbed: false,
  renderComponents: false,
  renderEmbeds: false,
  ignoreMentioned: true,
  inlineAttachmentMedia: false,
  inlineEmbedMedia: false,
  renderReactions: true,
  renderAttachments: false,
  renderReplies: false,
  renderThreadEmbeds: false,
  renderPolls: false,
  renderForumPostActions: false,
  forcedTheme: ThemeTypes.DARK,
  forceHideSimpleEmbedContent: true,
};
let obj6 = {
  reactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT,
  reactionBorderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT,
  reactionTextColor: nativeDefault.colors.REACTION_TEXT_DEFAULT,
  activeReactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT,
  activeReactionBorderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT,
  activeReactionTextColor: nativeDefault.colors.REACTION_TEXT_REACTED_DEFAULT,
};
let closure_20 = createStyles.createNativeStyleProperties({
  editedColor: nativeDefault.colors.TEXT_MUTED,
  seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT,
});
ReactCompilerGating = fn(558);
let obj8 = { editedColor: nativeDefault.colors.TEXT_MUTED, seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaMessagePreview(channelId) {
      const cResult = channelId(onClose[14]).c(72);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      onClose = channelId.onClose;
      const onTapMessage = channelId.onTapMessage;
      ({ onMeasureFullHeight, onMeasureCollapsedHeight, full } = channelId);
      const canExpand = channelId.canExpand;
      const setScrollViewIsAtTop = channelId.setScrollViewIsAtTop;
      ({ flingUpRef, flingDownRef, animationDriver } = channelId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [disableReactionCreates];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        class R {
          constructor() {
            channel = undefined;
            if (null != channelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        cResult[1] = channelId;
        cResult[2] = R;
      } else {
        class R {
          constructor() {
            channel = undefined;
            if (null != channelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      let obj = channelId(onClose[14]);
      const stateFromStores = channelId(onClose[18]).useStateFromStores(first, R);
      disableReactionCreates = messageId(tmp2[19])(stateFromStores).disableReactionCreates;
      const tmpResult = channelId(onClose[18]);
      [r10052, MessageStore] = onTapMessage(full.useState(false), 2);
      const tmp8 = onTapMessage(full.useState(false), 2);
      [r10057, MessagePreviewStore] = onTapMessage(full.useState(false), 2);
      const ref = full.useRef(null);
      const tmp11 = onTapMessage(full.useState(null), 2);
      const first1 = tmp11[0];
      closure_14 = tmp11[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            tmp = closure_14(findNodeHandle(closure_12.current));
            return;
          }
        }
        const items1 = [];
        cResult[3] = G;
        cResult[4] = items1;
        let tmp14 = items1;
      } else {
        class G {
          constructor() {
            tmp = closure_14(findNodeHandle(closure_12.current));
            return;
          }
        }
        tmp14 = cResult[4];
      }
      const effect = full.useEffect(G, tmp14);
      const tmp16 = closure_19(ref.ONYX);
      const reactionsTheme = tmp16;
      const tmp17 = closure_20(ref.ONYX);
      const editedColor = tmp17.editedColor;
      const seeMoreLabelColor = tmp17.seeMoreLabelColor;
      if (cResult[5] === animationDriver) {
        class G {
          constructor() {
            tmp = closure_14(findNodeHandle(closure_12.current));
            return;
          }
        }
      }
      function ne(message) {
        message.canAddNewReactions = !disableReactionCreates;
        message.contextType = RowGeneratorTypes.MessageContextType.MEDIA_VIEWER;
        message.reactTag = first1;
        message.canAddNewReactions = !disableReactionCreates;
        message.message.feedbackColor = undefined;
        message.message.editedColor = editedColor;
        message.reactionsTheme = reactionsTheme;
        if (!full) {
          const obj = {
            numberOfLines: 3,
            expandable: true,
            seeMoreLabel: null,
            seeMoreLabelColor: null,
            outAnimationDuration: null,
            outAnimation: "fade",
          };
          const intl = util.intl;
          const _HermesInternal = HermesInternal;
          obj.seeMoreLabel = " " + intl.string(util.t["7qbp3B"]);
          obj.seeMoreLabelColor = seeMoreLabelColor;
          const _Math = Math;
          obj.outAnimationDuration = Math.min(0.25 * animationDriver.get(), 0.1);
          message.truncation = obj;
        }
      }
      cResult[5] = animationDriver;
      cResult[6] = first1;
      cResult[7] = disableReactionCreates;
      cResult[8] = editedColor;
      cResult[9] = full;
      cResult[10] = tmp16;
      cResult[11] = seeMoreLabelColor;
      cResult[12] = ne;
      const tmp9 = onTapMessage(full.useState(false), 2);
    }
  : function MediaMessagePreview(channelId) {
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
      const items = [animationDriver];
      const stateFromStores = channelId(onClose[18]).useStateFromStores(items, () => {
        let channel;
        if (null != channelId) {
          channel = ChannelStore.getChannel(tmp);
        }
        return channel;
      });
      const disableReactionCreates = messageId(onClose[19])(stateFromStores).disableReactionCreates;
      let obj = channelId(onClose[18]);
      let tmp = channelId;
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
      const tmp12 = seeMoreLabelColor(ThemeTypes.ONYX);
      const reactionsTheme = tmp12;
      const tmp13 = stateFromStores1(ThemeTypes.ONYX);
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
          const obj = {
            numberOfLines: 3,
            expandable: true,
            seeMoreLabel: null,
            seeMoreLabelColor: null,
            outAnimationDuration: null,
            outAnimation: "fade",
          };
          const intl = util.intl;
          const _HermesInternal = HermesInternal;
          obj.seeMoreLabel = " " + intl.string(util.t["7qbp3B"]);
          obj.seeMoreLabelColor = seeMoreLabelColor;
          const _Math = Math;
          obj.outAnimationDuration = Math.min(0.25 * animationDriver.get(), 0.1);
          message.truncation = obj;
        }
      }, items1);
      const tmp5 = onTapMessage(full.useState(false), 2);
      const items2 = [flingDownRef, stateFromStores, disableReactionCreates, flingUpRef];
      const items3 = [channelId, messageId];
      stateFromStores1 = channelId(onClose[18]).useStateFromStores(
        items2,
        () => {
          if (null != channelId) {
            if (null != messageId) {
              let message = MessageStore.getMessage(tmp, messageId);
              if (message == null) {
                message = MessagePreviewStore.getMessage(messageId);
              }
              if (message == null) {
                const message1 = ForumPostMessagesStore.getMessage(
                  SnowflakeUtilsDefault.castMessageIdAsChannelId(messageId),
                );
                let firstMessage;
                if (message1 != null) {
                  firstMessage = message1.firstMessage;
                }
                message = firstMessage;
              }
              if (message == null) {
                message = SearchMessageStore.getMessage(messageId);
              }
              return message;
            }
          }
        },
        items3,
      );
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
            const obj = messages_MessagesUtils;
            let tmp6 = null;
            if (null != reaction) {
              const obj2 = {};
              const merged = Object.assign(reaction);
              obj2.emoji = reaction.emoji;
              tmp6 = obj2;
            }
            const result = obj.handleAddOrRemoveReaction(
              messageId,
              channel,
              tmp6,
              isBurst,
              ReactionActionCreators.ReactionLocations.MOBILE_MEDIA_VIEWER,
            );
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
          messageId(onClose[28])(obj);
        }
      }, []);
      let tmp26Result = null;
      if (null != stateFromStores1) {
        tmp26Result = null;
        if (null != stateFromStores) {
          const obj3 = { gesture: tmp24, children: null };
          const obj4 = {
            scrollEventThrottle: 16,
            onScroll(nativeEvent) {
              closure_1_6(nativeEvent.nativeEvent.contentOffset.y <= 0);
            },
            onLayout: callback2,
            onContentSizeChange: callback1,
            showsVerticalScrollIndicator: full,
            bounces: tmp6,
            children: null,
          };
          const obj5 = {
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
              let obj2 = {
                allowWithinModal: true,
                chatInputRef: "Boolean",
                handleTransitionToThread(arg0, arg1, source) {
                  channel = channel.getChannel(arg1);
                  if (null != channel) {
                    const obj2 = { source, navigationReplace: false };
                    channelId(onClose[23]).transitionToThread(channel, obj2);
                    const obj = channelId(onClose[23]);
                  }
                },
                message: stateFromStores1,
                messageChannel: stateFromStores,
                selectedChannelId: channelId,
                tapLinkData: nativeEvent.nativeEvent,
              };
              const result = handleMessagesTapLink.handleMessagesTapLink(obj2);
            },
            inverted: false,
          };
          const items9 = [closure_13(tmp4(tmp2[30]), obj5)];
          const obj6 = { rowGenerator, modifyRow: callback, message: stateFromStores1 };
          items9[1] = closure_13(tmp4(tmp2[16]), obj6);
          obj4.children = items9;
          obj3.children = reactTag(closure_6, obj4);
          const items10 = [closure_13(tmp(tmp2[29]).GestureDetector, obj3)];
          let tmp28Result = null;
          if (tmp7[0]) {
            const obj7 = {
              disableReactionCreates,
              message: stateFromStores1,
              onMeasure: onMeasureFullHeight,
              onMeasureTruncated: onMeasureCollapsedHeight,
            };
            tmp28Result = tmp28(editedColor, obj7);
          }
          const obj8 = { children: null };
          items10[1] = tmp28Result;
          obj8.children = items10;
          tmp26Result = reactTag(ref, obj8);
          tmp28 = closure_13;
        }
      }
      return tmp26Result;
    };
