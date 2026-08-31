// === Module 12803: MeasureMessage ===

// Module 12803 (MeasureMessage)
import ThemesDefault from "Themes" /* 712 */;
import setOptionsDefault from "setOptions" /* 7809 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleLoadThreadsSuccess" /* 6092 */;
import closure_8 from "handleReaction" /* 6096 */;
import closure_9 from "ensureGuildLoaded" /* 1387 */;
import closure_10 from "reinjectEphemerals" /* 4703 */;
import closure_11 from "messages" /* 8599 */;
import { ThemeTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
function MeasureMessage(message) {
  message = message.message;
  const onMeasure = message.onMeasure;
  const onMeasureTruncated = message.onMeasureTruncated;
  const disableReactionCreates = message.disableReactionCreates;
  let React;
  c5 = undefined;
  const tmp = callback3();
  React = tmp;
  obj = message(onMeasureTruncated[13]);
  const result = 0.5 * obj.useMediaViewerDimensions().height;
  c5 = result;
  const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
  const memo = React.useMemo(() => {
    c0 = false;
    const full = {
      onLayout(nativeEvent) {
        const bound = Math.min(nativeEvent.nativeEvent.layout.height, closure_1_5);
        if (0 !== bound) {
          if (c0) {
            closure_1_2(bound);
          } else {
            closure_1_1(bound);
          }
        }
      },
      modifyRow(arg0) {
        arg0.canAddNewReactions = !closure_1_3;
        arg0.contextType = message(onMeasureTruncated[11]).MessageContextType.MEDIA_VIEWER;
        if (c0) {
          arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
        }
      },
      rowGenerator: closure_1_16,
      message: c0,
      style: closure_4.dummyLayout
    };
    c0 = true;
    const truncated = {
      onLayout(nativeEvent) {
        const bound = Math.min(nativeEvent.nativeEvent.layout.height, closure_1_5);
        if (0 !== bound) {
          if (c0) {
            closure_1_2(bound);
          } else {
            closure_1_1(bound);
          }
        }
      },
      modifyRow(arg0) {
        arg0.canAddNewReactions = !closure_1_3;
        arg0.contextType = message(onMeasureTruncated[11]).MessageContextType.MEDIA_VIEWER;
        if (c0) {
          arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
        }
      },
      rowGenerator: closure_1_16,
      message: c0,
      style: closure_4.dummyLayout
    };
    return { full, truncated };
  }, items);
  obj = { children: null };
  obj = {};
  const merged = Object.assign(memo.full);
  const items1 = [callback(onMeasure(onMeasureTruncated[14]), obj), ];
  obj1 = {};
  const tmp4 = onMeasure(onMeasureTruncated[14]);
  const merged1 = Object.assign(memo.truncated);
  items1[1] = callback(onMeasure(onMeasureTruncated[14]), obj1);
  obj[0] = items1;
  return callback2(closure_14, obj);
}
({ findNodeHandle: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let obj = new setOptionsDefault();
obj = { renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderEmbeds: false, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: false, renderReactions: true, renderAttachments: false, renderReplies: false, renderThreadEmbeds: false, renderPolls: false, renderForumPostActions: false, forcedTheme: ThemeTypes.DARK, forceHideSimpleEmbedContent: true };
obj.setOptions(obj);
let closure_17 = createCacheKey.createStyles({ dummyLayout: { position: "absolute", top: 0, left: -9999, bottom: 0, width: "100%", opacity: 0 } });
obj = { reactionBackgroundColor: ThemesDefault.colors.REACTION_BACKGROUND_DEFAULT, reactionBorderColor: ThemesDefault.colors.REACTION_BORDER_DEFAULT, reactionTextColor: ThemesDefault.colors.REACTION_TEXT_DEFAULT, activeReactionBackgroundColor: ThemesDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT, activeReactionBorderColor: ThemesDefault.colors.REACTION_BORDER_REACTED_DEFAULT, activeReactionTextColor: ThemesDefault.colors.REACTION_TEXT_REACTED_DEFAULT };
let closure_19 = createCacheKey.createNativeStyleProperties(obj);
let closure_20 = createCacheKey.createNativeStyleProperties({ editedColor: ThemesDefault.colors.TEXT_MUTED, seeMoreLabelColor: ThemesDefault.colors.TEXT_DEFAULT });
let obj1 = { editedColor: ThemesDefault.colors.TEXT_MUTED, seeMoreLabelColor: ThemesDefault.colors.TEXT_DEFAULT };
let result = require("set").fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx");

export default function MediaMessagePreview(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const onClose = channelId.onClose;
  const onTapMessage = channelId.onTapMessage;
  const full = channelId.full;
  ({ canExpand: closure_5, setScrollViewIsAtTop: closure_6, flingUpRef } = channelId);
  const flingDownRef = channelId.flingDownRef;
  const animationDriver = channelId.animationDriver;
  let stateFromStores;
  let disableReactionCreates;
  ThemeTypes = undefined;
  let callback;
  let ref;
  let first;
  closure_16 = undefined;
  closure_17 = undefined;
  let editedColor;
  let seeMoreLabelColor;
  let stateFromStores1;
  let first1;
  closure_22 = undefined;
  ({ onMeasureFullHeight, onMeasureCollapsedHeight } = channelId);
  obj = channelId(onClose[16]);
  const items = [animationDriver];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channel;
    if (null != channelId) {
      channel = animationDriver.getChannel(tmp);
    }
    return channel;
  });
  disableReactionCreates = messageId(onClose[17])(stateFromStores).disableReactionCreates;
  [tmp6, c12] = onTapMessage(full.useState(false), 2);
  const tmp7 = onTapMessage(full.useState(false), 2);
  callback = tmp7[1];
  ref = full.useRef(null);
  const tmp9 = onTapMessage(full.useState(null), 2);
  first = tmp9[0];
  closure_16 = tmp9[1];
  const effect = full.useEffect(() => {
    callback2(closure_1_5(ref.current));
  }, []);
  const tmp12 = seeMoreLabelColor(ThemeTypes.MIDNIGHT);
  closure_17 = tmp12;
  const tmp13 = stateFromStores1(ThemeTypes.MIDNIGHT);
  editedColor = tmp13.editedColor;
  seeMoreLabelColor = tmp13.seeMoreLabelColor;
  const items1 = [first, disableReactionCreates, editedColor, seeMoreLabelColor, tmp12, full, animationDriver];
  callback = full.useCallback((message) => {
    message.canAddNewReactions = !disableReactionCreates;
    message.contextType = channelId(onClose[11]).MessageContextType.MEDIA_VIEWER;
    message.reactTag = first;
    message.canAddNewReactions = !disableReactionCreates;
    message.message.feedbackColor = undefined;
    message.message.editedColor = editedColor;
    message.reactionsTheme = closure_17;
    if (!full) {
      obj = { numberOfLines: 3, expandable: true, seeMoreLabel: null, seeMoreLabelColor: null, outAnimationDuration: null, outAnimation: "fade" };
      const intl = tmp(tmp2[18]).intl;
      const _HermesInternal = HermesInternal;
      obj[2] = " " + intl.string(tmp(tmp2[18]).t["7qbp3B"]);
      obj[3] = seeMoreLabelColor;
      const _Math = Math;
      obj[4] = Math.min(0.25 * animationDriver.get(), 0.1);
      message.truncation = obj;
    }
  }, items1);
  obj1 = channelId(onClose[16]);
  const items2 = [flingDownRef, stateFromStores, disableReactionCreates, flingUpRef];
  const items3 = [channelId, messageId];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    if (null != channelId) {
      if (null != messageId) {
        let message = stateFromStores.getMessage(tmp, tmp2);
        if (message == null) {
          message = disableReactionCreates.getMessage(tmp2);
        }
        if (message == null) {
          const message1 = flingUpRef.getMessage(messageId(onClose[19]).castMessageIdAsChannelId(tmp2));
          let firstMessage;
          if (message1 != null) {
            firstMessage = message1.firstMessage;
          }
          message = firstMessage;
          obj = messageId(onClose[19]);
        }
        if (message == null) {
          message = flingDownRef.getMessage(tmp2);
        }
        return message;
      }
    }
  }, items3);
  const tmp16 = onTapMessage(full.useState(0), 2);
  first1 = tmp16[0];
  closure_22 = tmp16[1];
  const items4 = [full, first1];
  const callback1 = full.useCallback((arg0, arg1) => {
    callback3(arg1);
  }, []);
  const items5 = [stateFromStores1, onClose];
  const callback2 = full.useCallback((nativeEvent) => {
    callback(true);
    let tmp3 = first1 > nativeEvent.nativeEvent.layout.height;
    if (tmp3) {
      tmp3 = full;
    }
    c12(tmp3);
  }, items4);
  const items6 = [stateFromStores1];
  const callback3 = full.useCallback((closure_0) => {
    obj = { channelId: null, message: null, closeMediaModal: null };
    const tmp = messageId(onClose[20]);
    obj[0] = channelId(onClose[21]).getNativeSyntheticEventData(closure_0).channelId;
    obj[1] = stateFromStores1;
    obj[2] = onClose;
    tmp(obj);
  }, items5);
  const items7 = [channelId, stateFromStores1, messageId];
  const callback4 = full.useCallback((arg0) => {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    }
  }, items6);
  const callback5 = full.useCallback((nativeEvent) => {
    ({ reaction, isBurst } = nativeEvent.nativeEvent);
    if (null != stateFromStores1) {
      const channel = animationDriver.getChannel(channelId);
      let tmp2 = null != channel;
      if (tmp2) {
        tmp2 = null != messageId;
      }
      if (tmp2) {
        obj = channelId(onClose[22]);
        let tmp6 = null;
        if (null != reaction) {
          obj = {};
          const merged = Object.assign(reaction);
          obj.emoji = reaction.emoji;
          tmp6 = obj;
        }
        const result = obj.handleAddOrRemoveReaction(tmp5, channel, tmp6, isBurst, channelId(onClose[23]).ReactionLocations.MOBILE_MEDIA_VIEWER);
        const tmp3 = channelId;
        const tmp4 = onClose;
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
      obj = { urlString: null };
      obj[0] = url;
      messageId(onClose[24])(obj);
    }
  }, []);
  let tmp26Result = null;
  if (null != stateFromStores1) {
    tmp26Result = null;
    if (null != stateFromStores) {
      obj = { gesture: null, children: null };
      obj[0] = tmp24;
      obj = { scrollEventThrottle: 16, onScroll: null, onLayout: null, onContentSizeChange: null, showsVerticalScrollIndicator: null, bounces: null, children: null };
      obj[1] = function onScroll(nativeEvent) {
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
        closure_6(tmp2);
      };
      obj[2] = callback2;
      obj[3] = callback1;
      obj[4] = full;
      obj[5] = tmp6;
      obj1 = { ref: null, onLongPressLink: null, onLongPressMessage: null, onTapMessage: null, onTapReaction: null, onTapSeeMore: null, onTapTag: null, onTapLink: null, inverted: false };
      obj1[0] = ref;
      obj1[1] = callback6;
      obj1[2] = callback3;
      obj1[3] = onTapMessage;
      obj1[4] = callback5;
      obj1[5] = onTapMessage;
      obj1[6] = callback4;
      obj1[7] = function onTapLink(nativeEvent) {
        if (closure_5) {
          if (!full) {
            onTapMessage();
          }
        }
        obj = channelId(onClose[27]);
        obj = { allowWithinModal: true, chatInputRef: "Boolean", handleTransitionToThread: "artiste", message: "palette", messageChannel: "artiste", selectedChannelId: "homme", tapLinkData: "m\u00E9tier" };
        obj[2] = function handleTransitionToThread(arg0, arg1, arg2) {
          channel = channel.getChannel(arg1);
          if (null != channel) {
            obj = callback(table[28]);
            obj = { source: null, navigationReplace: false };
            obj[0] = arg2;
            obj.transitionToThread(channel, obj);
          }
        };
        obj[3] = stateFromStores1;
        obj[4] = stateFromStores;
        obj[5] = channelId;
        obj[6] = nativeEvent.nativeEvent;
        const result = obj.handleMessagesTapLink(obj);
      };
      const items9 = [callback(tmp4(tmp2[26]), obj1), ];
      const obj2 = { rowGenerator: null, modifyRow: null, message: null };
      obj2[0] = closure_16;
      obj2[1] = callback;
      obj2[2] = stateFromStores1;
      items9[1] = callback(tmp4(tmp2[14]), obj2);
      obj[6] = items9;
      obj[1] = first(closure_6, obj);
      const items10 = [callback(channelId(tmp2[25]).GestureDetector, obj), ];
      let tmp28Result = null;
      if (tmp7[0]) {
        const obj3 = { disableReactionCreates: null, message: null, onMeasure: null, onMeasureTruncated: null };
        obj3[0] = disableReactionCreates;
        obj3[1] = stateFromStores1;
        obj3[2] = onMeasureFullHeight;
        obj3[3] = onMeasureCollapsedHeight;
        tmp28Result = tmp28(editedColor, obj3);
      }
      const obj4 = { children: null };
      items10[1] = tmp28Result;
      obj4[0] = items10;
      tmp26Result = first(ref, obj4);
      const tmp26 = first;
      const tmp27 = ref;
      tmp28 = callback;
    }
  }
  return tmp26Result;
};