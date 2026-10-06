// discord_app/modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06147_LegacyBaseButton.js";
import ReactionActionCreators from "../../../../reactions/ReactionActionCreators.tsx";
import RowGeneratorDefault from "../../../../messages/native/renderer/RowGenerator.tsx";
import RowGeneratorTypes from "../../../../messages/native/renderer/RowGeneratorTypes.tsx";
import messages_MessagesUtils from "../../../../messages/native/MessagesUtils.tsx";
import MessageDataSnowflakeUtils from "../../../../messages/native/snowflake/MessageDataSnowflakeUtils.tsx";
import handleMessagesTapLink from "../../../../messages/native/handlers/handleMessagesTapLink.tsx";
import showMediaMessagePreviewActionSheetDefault from "showMediaMessagePreviewActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import ForumPostMessagesStore from "../../../../forums/ForumPostMessagesStore.tsx";
import SearchMessageStore from "../../../../search/SearchMessageStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../../stores/MessageStore.tsx";
import MessagePreviewStore from "../../../../../stores/native/MessagePreviewStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channelId, rowGenerator;

let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let react = react_mod;
({ findNodeHandle: hasOwnProperty, ScrollView: metroRequire } = react_native);
let ThemeTypes = Constants.ThemeTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let obj = new RowGeneratorDefault();
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
obj.setOptions(obj2);
let createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles({
  dummyLayout: { position: "absolute", top: 0, left: -9999, width: "100%", opacity: 0 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let items;
      let onMeasureTruncated;
      const obj = message(onMeasureTruncated[14]);
      const cResult = obj.c(16);
      message = message.message;
      const onMeasure = message.onMeasure;
      onMeasureTruncated = message.onMeasureTruncated;
      const disableReactionCreates = message.disableReactionCreates;
      const tmp3 = closure_17();
      const dummyLayout = tmp3;
      const obj2 = message(onMeasureTruncated[15]);
      const result = 0.5 * obj2.useMediaViewerDimensions().height;
      let closure_5 = result;
      if (cResult[0] === disableReactionCreates) {
        if (cResult[1] === result) {
          if (cResult[2] === message) {
            if (cResult[3] === onMeasure) {
              if (cResult[4] === onMeasureTruncated) {
                let tmp5;
                let tmp6;
                let tmp7;
                let tmp14;
                if (cResult[5] === tmp3.dummyLayout) {
                  tmp5 = cResult[6];
                }
                if (cResult[7] !== tmp5) {
                  const obj3 = { full: tmp5(false), truncated: tmp5(true) };
                  cResult[7] = tmp5;
                  cResult[8] = obj3;
                  tmp6 = obj3;
                } else {
                  tmp6 = cResult[8];
                }
                if (cResult[9] !== tmp6.full) {
                  const obj4 = {};
                  const tmp10 = onMeasure(onMeasureTruncated[16]);
                  const merged = Object.assign(tmp6.full);
                  const tmp13 = closure_13(tmp10, obj4);
                  cResult[9] = tmp6.full;
                  cResult[10] = tmp13;
                  tmp7 = tmp13;
                } else {
                  tmp7 = cResult[10];
                }
                if (cResult[11] !== tmp6.truncated) {
                  const obj5 = {};
                  const tmp17 = onMeasure(onMeasureTruncated[16]);
                  const merged1 = Object.assign(tmp6.truncated);
                  const tmp20 = closure_13(tmp17, obj5);
                  cResult[11] = tmp6.truncated;
                  cResult[12] = tmp20;
                  tmp14 = tmp20;
                } else {
                  tmp14 = cResult[12];
                }
                if (cResult[13] === tmp7) {
                  let tmp21;
                  if (cResult[14] === tmp14) {
                    tmp21 = cResult[15];
                  }
                  return tmp21;
                }
                const obj6 = { children: items };
                items = [tmp7, tmp14];
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
      const fn = function n(arg0) {
        let closure_0;
        message = arg0;
        return {
          onLayout(nativeEvent) {
            const bound = Math.min(nativeEvent.nativeEvent.layout.height, closure_5);
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
      };
      cResult[0] = disableReactionCreates;
      cResult[1] = result;
      cResult[2] = message;
      cResult[3] = onMeasure;
      cResult[4] = onMeasureTruncated;
      cResult[5] = tmp3.dummyLayout;
      cResult[6] = fn;
      tmp5 = fn;
    }
  : (message) => {
      let closure_4;
      let items1;
      message = message.message;
      const onMeasure = message.onMeasure;
      const onMeasureTruncated = message.onMeasureTruncated;
      const disableReactionCreates = message.disableReactionCreates;
      const tmp = closure_17();
      react = tmp;
      let obj = message(onMeasureTruncated[15]);
      const result = 0.5 * obj.useMediaViewerDimensions().height;
      let c5 = result;
      const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
      const memo = react.useMemo(() => {
        let c0;
        let obj2;
        function onLayout(nativeEvent) {
          const bound = Math.min(nativeEvent.nativeEvent.layout.height, closure_2_5);
          if (0 !== bound) {
            if (c0) {
              onMeasureTruncated(bound);
            } else {
              onMeasure(bound);
            }
          }
        }
        function modifyRow(arg0) {
          arg0.canAddNewReactions = !disableReactionCreates;
          arg0.contextType = message(onMeasureTruncated[11]).MessageContextType.MEDIA_VIEWER;
          if (c0) {
            arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
          }
        }
        const obj = {
          full: obj2,
          truncated: { onLayout, modifyRow, rowGenerator, message, style: closure_4.dummyLayout },
        };
        message = false;
        obj2 = { onLayout, modifyRow, rowGenerator, message, style: closure_4.dummyLayout };
        message = true;
        return obj;
      }, items);
      let obj2 = { children: items1 };
      const obj3 = {};
      const tmp4 = onMeasure(onMeasureTruncated[16]);
      const merged = Object.assign(memo.full);
      items1 = [closure_13(tmp4, obj3)];
      const obj4 = {};
      const tmp6 = onMeasure(onMeasureTruncated[16]);
      const merged1 = Object.assign(memo.truncated);
      items1[1] = closure_13(tmp6, obj4);
      return closure_15(closure_14, obj2);
    };
createStyles = createStyles_mod;
let obj3 = {
  reactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT,
  reactionBorderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT,
  reactionTextColor: nativeDefault.colors.REACTION_TEXT_DEFAULT,
  activeReactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT,
  activeReactionBorderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT,
  activeReactionTextColor: nativeDefault.colors.REACTION_TEXT_REACTED_DEFAULT,
};
let closure_19 = createStyles.createNativeStyleProperties(obj3);
createStyles = createStyles_mod;
let obj4 = { editedColor: nativeDefault.colors.TEXT_MUTED, seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_20 = createStyles.createNativeStyleProperties(obj4);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let animationDriver;
      let disableReactionCreates;
      let first;
      let flingDownRef;
      let flingUpRef;
      let full;
      let onClose;
      let onMeasureCollapsedHeight;
      let onMeasureFullHeight;
      let tmp14;
      let tmp6;
      let tmp = channelId;
      let tmp2 = onClose;
      let obj = channelId(onClose[14]);
      const cResult = obj.c(72);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      onClose = channelId.onClose;
      const onTapMessage = channelId.onTapMessage;
      ({ onMeasureFullHeight, onMeasureCollapsedHeight, full } = channelId);
      const canExpand = channelId.canExpand;
      const setScrollViewIsAtTop = channelId.setScrollViewIsAtTop;
      ({ flingUpRef, flingDownRef, animationDriver } = channelId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp5 = disableReactionCreates;
        const items = [disableReactionCreates];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function p() {
          let channel;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          return channel;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[18]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      disableReactionCreates = messageId(tmp2[19])(stateFromStores).disableReactionCreates;
      [r10052, MessageStore] = onTapMessage(full.useState(false), 2);
      const tmp8 = onTapMessage(full.useState(false), 2);
      [r10057, MessagePreviewStore] = onTapMessage(full.useState(false), 2);
      onTapMessage(full.useState(false), 2);
      const ref = full.useRef(null);
      const tmp11 = onTapMessage(full.useState(null), 2);
      const first1 = tmp11[0];
      let closure_14 = tmp11[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_14(hasOwnProperty(ref.current));
          }
        }
        const items1 = [];
        cResult[3] = P;
        cResult[4] = items1;
        tmp14 = items1;
      } else {
        class P {
          constructor() {
            closure_14(hasOwnProperty(ref.current));
          }
        }
        tmp14 = cResult[4];
      }
      const effect = full.useEffect(P, tmp14);
      const tmp16 = closure_19(ref.ONYX);
      const reactionsTheme = tmp16;
      const tmp17 = closure_20(ref.ONYX);
      const editedColor = tmp17.editedColor;
      const seeMoreLabelColor = tmp17.seeMoreLabelColor;
      if (cResult[5] === animationDriver) {
        class P {
          constructor() {
            closure_14(hasOwnProperty(ref.current));
          }
        }
      }
      function ae(message) {
        let intl;
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
            seeMoreLabel: " " + intl.string(intl2.t["7qbp3B"]),
            seeMoreLabelColor,
            outAnimationDuration: Math.min(0.25 * animationDriver.get(), 0.1),
            outAnimation: "fade",
          };
          intl = intl2.intl;
          const _HermesInternal = HermesInternal;
          const _Math = Math;
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
      cResult[12] = ae;
    }
  : (channelId) => {
      let _undefined;
      let c12;
      let closure_16;
      let closure_5;
      let closure_6;
      let flingUpRef;
      let items9;
      let obj4;
      let onMeasureCollapsedHeight;
      let onMeasureFullHeight;
      let tmp6;
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
      let tmp2 = onClose;
      ({ onMeasureFullHeight, onMeasureCollapsedHeight } = channelId);
      let tmp = channelId;
      let obj = channelId(onClose[18]);
      const items = [animationDriver];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let channel;
        if (null != channelId) {
          channel = ChannelStore.getChannel(tmp);
        }
        return channel;
      });
      const disableReactionCreates = messageId(onClose[19])(stateFromStores).disableReactionCreates;
      let tmp5 = onTapMessage(full.useState(false), 2);
      [tmp6, c12] = tmp5;
      let tmp7 = onTapMessage(full.useState(false), 2);
      let closure_13 = tmp7[1];
      const first = tmp7[0];
      const ref = full.useRef(null);
      const tmp10 = onTapMessage(full.useState(null), 2);
      const first1 = tmp10[0];
      rowGenerator = tmp10[1];
      const effect = full.useEffect(() => {
        closure_16(hasOwnProperty(ref.current));
      }, []);
      const tmp13 = seeMoreLabelColor(ThemeTypes.ONYX);
      const reactionsTheme = tmp13;
      const tmp14 = stateFromStores1(ThemeTypes.ONYX);
      const editedColor = tmp14.editedColor;
      seeMoreLabelColor = tmp14.seeMoreLabelColor;
      const items1 = [first1, disableReactionCreates, editedColor, seeMoreLabelColor, tmp13, full, animationDriver];
      const callback = full.useCallback((message) => {
        let intl;
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
            seeMoreLabel: " " + intl.string(intl2.t["7qbp3B"]),
            seeMoreLabelColor,
            outAnimationDuration: Math.min(0.25 * animationDriver.get(), 0.1),
            outAnimation: "fade",
          };
          intl = intl2.intl;
          const _HermesInternal = HermesInternal;
          const _Math = Math;
          message.truncation = obj;
        }
      }, items1);
      let obj2 = channelId(onClose[18]);
      const items2 = [flingDownRef, stateFromStores, disableReactionCreates, flingUpRef];
      const items3 = [channelId, messageId];
      stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => {
          if (null != channelId) {
            if (null != messageId) {
              let message = MessageStore.getMessage(tmp, messageId);
              if (message == null) {
                message = MessagePreviewStore.getMessage(messageId);
              }
              if (message == null) {
                const getMessage = ForumPostMessagesStore.getMessage;
                const obj = SnowflakeUtilsDefault;
                const message1 = getMessage(obj.castMessageIdAsChannelId(messageId));
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
      const tmp17 = onTapMessage(full.useState(0), 2);
      const first2 = tmp17[0];
      let closure_22 = tmp17[1];
      const items4 = [full, first2];
      const callback1 = full.useCallback((arg0, arg1) => {
        closure_22(arg1);
      }, []);
      const items5 = [stateFromStores1, onClose];
      const callback2 = full.useCallback((nativeEvent) => {
        closure_13(true);
        const tmp3 = first2 > nativeEvent.nativeEvent.layout.height && full;
        _undefined(tmp3);
      }, items4);
      const items6 = [stateFromStores1];
      const callback3 = full.useCallback((nativeEvent) => {
        let obj2;
        const obj = {
          channelId: obj2.getNativeSyntheticEventData(nativeEvent).channelId,
          message: stateFromStores1,
          closeMediaModal: onClose,
        };
        const tmp = showMediaMessagePreviewActionSheetDefault;
        obj2 = MessageDataSnowflakeUtils;
        tmp(obj);
      }, items5);
      const items7 = [channelId, stateFromStores1, messageId];
      const callback4 = full.useCallback((arg0) => {
        if (arg0 == null) {
          throw new TypeError("Cannot destructure 'undefined' or 'null'.");
        }
      }, items6);
      const callback5 = full.useCallback((nativeEvent) => {
        let isBurst;
        let reaction;
        ({ reaction, isBurst } = nativeEvent.nativeEvent);
        if (null != stateFromStores1) {
          const channel = ChannelStore.getChannel(channelId);
          const tmp2 = null != channel && null != messageId;
          if (tmp2) {
            let tmp7 = null;
            const handleAddOrRemoveReaction = messages_MessagesUtils.handleAddOrRemoveReaction;
            if (null != reaction) {
              const obj = { emoji: reaction.emoji };
              const merged = Object.assign(reaction);
              tmp7 = obj;
            }
            const result = handleAddOrRemoveReaction(
              messageId,
              channel,
              tmp7,
              isBurst,
              ReactionActionCreators.ReactionLocations.MOBILE_MEDIA_VIEWER,
            );
          }
        }
      }, items7);
      const items8 = [flingDownRef, flingUpRef];
      const callback6 = full.useCallback((nativeEvent) => {
        const url = nativeEvent.nativeEvent.url;
        const tmp = null != url && "" !== url;
        if (tmp) {
          const obj = { urlString: url };
          messageId(onClose[28])(obj);
        }
      }, []);
      let tmp27Result = null;
      if (null != stateFromStores1) {
        tmp27Result = null;
        if (null != stateFromStores) {
          const obj3 = { gesture: tmp25, children: first1(closure_6, obj4) };
          obj4 = {
            scrollEventThrottle: 16,
            onScroll(nativeEvent) {
              closure_6(nativeEvent.nativeEvent.contentOffset.y <= 0);
            },
            onLayout: callback2,
            onContentSizeChange: callback1,
            showsVerticalScrollIndicator: full,
            bounces: tmp6,
            children: items9,
          };
          const GestureDetector = tmp(tmp2[29]).GestureDetector;
          const obj5 = {
            ref,
            onLongPressLink: callback6,
            onLongPressMessage: callback3,
            onTapMessage,
            onTapReaction: callback5,
            onTapSeeMore: onTapMessage,
            onTapTag: callback4,
            onTapLink(nativeEvent) {
              if (closure_5) {
                if (!full) {
                  onTapMessage();
                }
              }
              let obj = handleMessagesTapLink;
              let obj2 = {
                allowWithinModal: true,
                chatInputRef: "Boolean",
                handleTransitionToThread(arg0, arg1, source) {
                  channel = channel.getChannel(arg1);
                  if (null != channel) {
                    const obj2 = { source, navigationReplace: false };
                    const obj = channelId(onClose[23]);
                    obj.transitionToThread(channel, obj2);
                  }
                },
                message: stateFromStores1,
                messageChannel: stateFromStores,
                selectedChannelId: channelId,
                tapLinkData: nativeEvent.nativeEvent,
              };
              const result = obj.handleMessagesTapLink(obj2);
            },
            inverted: false,
          };
          items9 = [closure_13(tmp4(tmp2[30]), obj5)];
          const obj6 = { rowGenerator, modifyRow: callback, message: stateFromStores1 };
          items9[1] = closure_13(messageId(tmp2[16]), obj6);
          const items10 = [closure_13(GestureDetector, obj3)];
          let tmp29Result = null;
          const tmp27 = first1;
          const tmp28 = ref;
          const tmp29 = closure_13;
          if (first) {
            const obj7 = {
              disableReactionCreates,
              message: stateFromStores1,
              onMeasure: onMeasureFullHeight,
              onMeasureTruncated: onMeasureCollapsedHeight,
            };
            tmp29Result = tmp29(editedColor, obj7);
          }
          const obj8 = { children: items10 };
          items10[1] = tmp29Result;
          tmp27Result = tmp27(tmp28, obj8);
        }
      }
      return tmp27Result;
    };
let result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx",
);

export default tmp5;
