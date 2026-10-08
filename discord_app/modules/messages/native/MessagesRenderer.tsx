// === Module 11285: MessagesRenderer ===

// Module 11285 (MessagesRenderer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import Client from "Client" /* 4987 */;
import CodedLink from "CodedLink" /* 5075 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7417 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9317 */;
import computeScrollData from "computeScrollData" /* 9531 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 9532 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 9534 */;
import QuestActionCreators from "QuestActionCreators" /* 9537 */;
import MessageImpressionAnalyticsHelpers from "MessageImpressionAnalyticsHelpers" /* 9562 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 9628 */;
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet" /* 11286 */;
import MessagesHandlers from "MessagesHandlers" /* 11292 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 11514 */;
import NavigationTTIDefinition from "NavigationTTIDefinition" /* 11644 */;
import MessagesUtilsDefault from "MessagesUtils" /* 11645 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import SKUStore from "SKUStore" /* 6092 */;

require = fn;
function handleTapShowAltText(description) {
  openMediaModalOverlayAltTextSheetDefault({ description: description.nativeEvent.description });
}
function handleMediaPlayFinishedAnalytics(nativeEvent) {
  const result = messages_MessagesUtils.handleMediaPlayFinishedAnalytics(nativeEvent.nativeEvent);
}
function isLoadingAtTop(arg0, arg1) {
  if (arg1) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.changeType === Changeset.INSERT) {
        let tmp8 = nextResult.index <= 1;
        iter.return();
        return tmp8;
      }
    }
    return false;
  } else {
    return false;
  }
}
let closure_6 = fn(9318).updateShouldShowJumpToPresentButton;
let closure_7 = fn(2124).getUserCommunicationDisabledVersion;
const Changeset = fn(7720).Changeset;
const Constants = fn(1085);
({ ActivityActionTypes: closure_12, MAX_MESSAGES_PER_CHANNEL: map1, MessageFlags: closure_14, MessageTypes: closure_15, Permissions: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
class MessagesRenderer {
  constructor(arg0) {
    merged = Object.assign(global, Object.assign({ ref: 0 }));
    closure_0 = merged;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    hasHandledScrollRef = undefined;
    isAtBottomRef = undefined;
    isNearBottomRef = undefined;
    isNearTopRef = undefined;
    deceleratingRef = undefined;
    draggingRef = undefined;
    closure_24 = undefined;
    scrollToTop = undefined;
    handleScrollCallbacks = undefined;
    closure_27 = undefined;
    updateRows = undefined;
    scrollToMessageId = undefined;
    closure_37 = undefined;
    handleVisibleMessagesChange = function handleVisibleMessagesChange(arg0) {
      ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, source } = arg0);
      const visibleMessages = messages_MessagesUtils.getVisibleMessages({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: first, channelId: merged.channelId });
      if (visibleMessages.length > 0) {
        const obj3 = { visibleMessages, source };
        const result = QuestActionCreators.questsVisibleMobileMessagesChanged(obj3);
        const tmpResult5 = MessageImpressionAnalyticsHelpers;
        const result1 = tmpResult5.handleAnnouncementMessageViewTracking(visibleMessages, merged.shouldTrackAnnouncementMessageViews, merged.guildId, merged.channel);
        const tmpResult6 = MessageImpressionAnalyticsHelpers;
        const result2 = tmpResult6.handleOfficialMessageViewTracking(visibleMessages, merged.shouldTrackOfficialMessageViews, merged.guildId, merged.channel);
        const tmpResult7 = MessageImpressionAnalyticsHelpers;
        const result3 = tmpResult7.handleRichPresenceInviteEmbedViewTracking(visibleMessages, merged.shouldTrackRichPresenceInviteEmbedViews, merged.guildId, merged.channel);
        const tmpResult8 = MessageImpressionAnalyticsHelpers;
        const result4 = tmpResult8.handleVoiceInviteEmbedViewTracking(visibleMessages, merged.shouldTrackVoiceInviteEmbedViews, merged.guildId, merged.channel);
        const tmpResult = QuestActionCreators;
      }
      const obj2 = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: first, channelId: merged.channelId };
    };
    findMessageIndex = function findMessageIndex(ChatTTITracker) {
      if (null != ChatTTITracker) {
        return computeScrollData.findMessageRowIndex(first.getPreviousRows(), ChatTTITracker);
      }
    };
    closure_28 = async function _handleTapNavBar() {
      if (hasJumpedToOriginalPost === 2) {
        hasJumpedToOriginalPost = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          hasJumpedToOriginalPost = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              hasJumpedToOriginalPost = 3;
              throw value;
            } else if (arg0 === 2) {
              hasJumpedToOriginalPost = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp2;
              closure_128_0 = undefined;
              ({ channel, useReducedMotion } = merged);
              closure_128_0 = useReducedMotion;
              if (channel.isForumPost()) {
                if (!ref2.current) {
                  if (null == callback2(obj2.castChannelIdAsMessageId(channel.id))) {
                    const obj5 = { channelId: channel.id, jump: null, limit: null };
                    const obj6 = { messageId: channel.id, flash: false };
                    obj5.jump = obj6;
                    obj5.limit = limit;
                    v1 = 1;
                    hasJumpedToOriginalPost = 1;
                    const obj7 = { value: tmp11(tmp12[26]).fetchMessages(obj5), done: false };
                    return obj7;
                  } else {
                    const tmp26 = findMessageIndex(tmp11(tmp12[20]).castChannelIdAsMessageId(channel.id));
                    if (null == tmp26) {
                      hasJumpedToOriginalPost = 3;
                      return { value: "IconComponent", done: null };
                    } else {
                      const obj8 = { animated: !useReducedMotion };
                      tmp11(tmp12[17]).scrollTo(ref.current, tmp26, obj8);
                      const _setTimeout2 = setTimeout;
                      const timerId = setTimeout(() => closure_2_25(!closure_1_0), 10 * tmp26);
                      const tmp11Result4 = tmp11(tmp12[17]);
                    }
                    const tmp11Result3 = tmp11(tmp12[20]);
                  }
                  obj2 = v1(hasJumpedToOriginalPost[20]);
                }
              }
              hasJumpedToOriginalPost = 3;
            }
          } else if (arg0 === 1) {
            hasJumpedToOriginalPost = 3;
            throw value;
          } else if (arg0 !== 2) {
            const _setTimeout = setTimeout;
            const timerId1 = setTimeout(() => closure_2_25(!closure_1_0), 50);
          }
          hasJumpedToOriginalPost = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp19) {
          hasJumpedToOriginalPost = tmp;
          throw tmp19;
        }
      }
    };
    scrollToBottom = function scrollToBottom() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      _undefined3({ eventTimestamp: Date.now(), isAtBottom: true });
      const obj = { eventTimestamp: Date.now(), isAtBottom: true };
      if (flag) {
        flag = !merged.useReducedMotion;
      }
      NativeChatUtilsDefault.scrollToBottom(ref5.current, flag);
    };
    jumpToPresent = function jumpToPresent() {
      ({ messages, channel } = merged);
      if (null == messages.jumpReturnTargetId) {
        if (!messages.loadingMore) {
          if (messages.hasMoreAfter) {
            const obj2 = { channelId: channel.id, limit, jump: { present: true } };
            const messages1 = MessageActionCreatorsDefault.fetchMessages(obj2);
          } else {
            const obj3 = { eventTimestamp: null, isAtBottom: true };
            const _Date = Date;
            obj3.eventTimestamp = Date.now();
            _undefined3(obj3);
            NativeChatUtilsDefault.scrollToBottom(ref5.current, !tmp.useReducedMotion);
          }
        }
      } else {
        const obj6 = { channelId: channel.id, messageId: jumpReturnTargetId, flash: true };
        MessageActionCreatorsDefault.jumpToMessage(obj6);
      }
    };
    scrollToNewMessages = function scrollToNewMessages() {
      let id = ReadStateStore.ackMessageId(merged.channel.id);
      const obj2 = { channelId: merged.channel.id, messageId: null, offset: 1, context: "Mark As Read" };
      if (id == null) {
        id = merged.channel.id;
      }
      obj2.messageId = id;
      MessageActionCreatorsDefault.jumpToMessage(obj2);
    };
    getChatRef = function getChatRef() {
      return ref5;
    };
    clearRowsState = function clearRowsState(reason) {
      ref.current = false;
      c18.current = false;
      c20.current = false;
      c19.current = false;
      c21.current = false;
      c22.current = false;
      c23.current = false;
      ref1.current = false;
      ref2.current = [];
      ref4.current = false;
      ref3.current = null;
      const size = chatUpdatesQueue.blockers.size;
      const length2 = first.getPreviousRows().length;
      first.clear();
      chatUpdatesQueue.clear();
      const clearRowsResult = NativeChatUtilsDefault.clearRows(ref5.current);
      const obj3 = { category: "chat.queue.clear", message: "clearRows (" + reason + "): queue=" + chatUpdatesQueue.queue.length + " blockers=" + size + " jsRows=" + length2, data: null };
      const obj4 = { reason, changesetUpdateId: null, queueLength: null, blockers: null, chatManagerRows: null };
      const obj2 = SentryUtilsDefault;
      obj4.changesetUpdateId = ChatChangesetUpdateTracker.getChangesetIdForChat(ref5.current);
      obj4.queueLength = chatUpdatesQueue.queue.length;
      obj4.blockers = size;
      obj4.chatManagerRows = length2;
      obj3.data = obj4;
      obj2.addBreadcrumb(obj3);
      return clearRowsResult;
    };
    clearRows = function clearRows() {
      const tmp = clearRowsState("channel-change");
      if (null != tmp) {
        const result = NavigationSpanTrackerDefault.recordExpectedChangesetForDestination(NavigationTTIDefinition.CHANNEL_NAVIGATION_TTI, merged.channelId, tmp);
      }
      closure_6(merged.channelId, merged.screenIndex, false);
    };
    first = closure_4(closure_5.useState(() => new first(hasJumpedToOriginalPost[15])()), 1)[0];
    closure_1 = first;
    tmp3 = closure_4(closure_5.useState(false), 2);
    [closure_2, closure_3] = tmp3;
    tmp4 = closure_4(closure_5.useState(false), 2);
    first1 = tmp4[0];
    closure_4 = first1;
    closure_5 = tmp4[1];
    ref = closure_5.useRef(false);
    closure_6 = ref;
    ref1 = closure_5.useRef(false);
    closure_7 = ref1;
    ref2 = closure_5.useRef([]);
    closure_8 = ref2;
    ref3 = closure_5.useRef(null);
    closure_9 = ref3;
    ref4 = closure_5.useRef(false);
    closure_10 = ref4;
    ref5 = closure_5.useRef(null);
    closure_11 = ref5;
    callback = closure_5.useCallback((rows) => {
      ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
      const tmp = isLoadingAtTop(rows.rows, ref1.current);
      NativeChatUtilsDefault.updateRows(ref5.current, { rows, isLoadingAtTop: tmp, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated });
      ref1.current = hasMoreMessagesAfter;
    }, []);
    obj = closure_0(closure_2[18]);
    chatUpdatesQueue = obj.useChatUpdatesQueue(ref5, callback);
    closure_12 = chatUpdatesQueue;
    items = [, ];
    ({ canChat: arr[0], channel: arr[1] } = merged);
    items1 = [];
    items1[0] = merged.messages;
    callback1 = closure_5.useCallback(() => {
      let canChat = merged.canChat;
      if (canChat) {
        canChat = PermissionStore.can(constants4.ADD_REACTIONS, merged.channel);
      }
      if (!canChat) {
        const channel = merged.channel;
        canChat = channel.isPrivate();
      }
      return canChat;
    }, items);
    callback2 = closure_5.useCallback((arg0) => {
      closure_0 = arg0;
      const messages = merged.messages;
      return _modDef12.find(messages.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
    }, items1);
    closure_13 = callback2;
    items2 = [, , ];
    ({ channel: arr3[0], channelId: arr3[1] } = merged);
    items2[2] = merged.messages.jumpTargetId;
    callback3 = closure_5.useCallback((arg0) => {
      const channel = merged.channel;
      let isForumPostResult = channel.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = SnowflakeUtilsDefault.castChannelIdAsMessageId(merged.channelId) === merged.messages.jumpTargetId;
      }
      if (isForumPostResult) {
        isForumPostResult = !arg0;
      }
      return isForumPostResult;
    }, items2);
    closure_14 = callback3;
    obj1 = { channelId: merged.channelId, jumpTargetId: merged.messages.jumpTargetId, oldestUnreadMessageId: merged.oldestUnreadMessageId, shouldJumpToOriginalPost: callback3 };
    tmp17 = closure_1(closure_2[21])(obj1);
    ({ startOrCancelLatestMessagesLoad: closure_15, channelLatestMessageLoadingStatsManager } = tmp17);
    obj8 = {
      chatRef: ref5,
      chatManager: first,
      chatUpdatesQueue,
      pendingUpdatesQueueRef: ref2,
      animatedRef: ref,
      fetchMoreBefore() {
            const messages = merged.messages;
            let hasMoreBefore = messages.hasMoreBefore;
            if (hasMoreBefore) {
              hasMoreBefore = !messages.loadingMore;
            }
            if (hasMoreBefore) {
              const obj2 = { channelId: merged.channelId, before: null, limit: null };
              const firstResult = messages.first();
              let id;
              if (firstResult != null) {
                id = firstResult.id;
              }
              obj2.before = id;
              obj2.limit = limit;
              const messages1 = MessageActionCreatorsDefault.fetchMessages(obj2);
            }
          },
      fetchMoreAfter() {
            const messages = merged.messages;
            let hasMoreAfter = messages.hasMoreAfter;
            if (hasMoreAfter) {
              hasMoreAfter = !messages.loadingMore;
            }
            if (hasMoreAfter) {
              const obj2 = { channelId: merged.channelId, after: null, limit: null };
              const lastResult = messages.last();
              let id;
              if (lastResult != null) {
                id = lastResult.id;
              }
              obj2.after = id;
              obj2.limit = limit;
              const messages1 = MessageActionCreatorsDefault.fetchMessages(obj2);
            }
          },
      handleVisibleMessagesChange,
      applyNativeRowsUpdate: callback,
      messages: merged.messages,
      channel: merged.channel,
      channelId: merged.channelId,
      screenIndex: merged.screenIndex,
      onScroll: merged.onScroll,
      useReducedMotion: merged.useReducedMotion,
      isStaff: merged.isStaff,
      visibleMessagesWindowHandler: merged.visibleMessagesWindowHandler
    };
    tmp18 = closure_1(closure_2[25])(obj8);
    ({ hasHandledScrollRef, isAtBottomRef, isNearBottomRef, isNearTopRef, deceleratingRef, draggingRef, firstIgnoredScrollEventTimestampRef: closure_24, scrollToTop, handleScrollCallbacks, loadMoreBefore, loadMoreAfter, scrollToTopMessage, updateNativeRows, handleScrollPosition } = tmp18);
    ref6 = closure_5.useRef(null);
    closure_27 = ref6;
    ref6.current = { getMessage: callback2, chatInputRef: merged.chatInputRef, selectedChannelId: merged.channelId, revealedMessageId: merged.messages.revealedMessageId, uploads: merged.uploads, paymentsBlocked: merged.paymentsBlocked, loadMoreBefore, loadMoreAfter };
    first2 = closure_4(closure_5.useState(() => new MessagesHandlers.MessagesHandlers(() => ref.current)), 1)[0];
    imperativeHandle = closure_5.useImperativeHandle(global.ref, () => ({ scrollToBottom, jumpToPresent, scrollToNewMessages, getChatRef }));
    obj9 = { chatManager: first, rowGenerator: closure_4(closure_5.useState(() => new first(hasJumpedToOriginalPost[16])()), 1)[0], animatingStickerMessageIdRef: ref3, canAddNewReactions: callback1, channel: merged.channel, messages: merged.messages, isMessagesReady: merged.isMessagesReady, uploads: merged.uploads, roleStyle: merged.roleStyle, oldestUnreadMessageId: merged.oldestUnreadMessageId, replyingMessageId: merged.replyingMessageId, inlineAttachmentMedia: merged.inlineAttachmentMedia, inlineEmbedMedia: merged.inlineEmbedMedia, renderEmbeds: merged.renderEmbeds, renderReactions: merged.renderReactions, animateEmoji: merged.animateEmoji, gifAutoPlay: merged.gifAutoPlay, timestampHourCycle: merged.timestampHourCycle, currentUserId: merged.currentUserId, renderCommunicationDisabled: merged.renderCommunicationDisabled, selectedSummary: merged.selectedSummary, selectedConversation: merged.selectedConversation, enableSwipeActions: merged.enableSwipeActions, isResourceChannel: merged.isResourceChannel, shouldObscureSpoiler: merged.shouldObscureSpoiler, shouldDisableInteractiveComponents: merged.shouldDisableInteractiveComponents, unloadableContentEntryMessageIds: merged.unloadableContentEntryMessageIds, containerWidth: merged.containerWidth, chatRef: ref5, loadedRef: ref4, animatedRef: ref, hasMoreMessagesAfterForLastUpdateRef: ref1, updateNativeRows, isLoadingAtTop: deceleratingRef, channelLatestMessageLoadingStatsManager, channelId: merged.channelId, isMessagesCached: merged.isMessagesCached, chatUpdatesQueue, shouldJumpToOriginalPost: callback3, findMessageIndex, scrollToTopMessage, useReducedMotion: merged.useReducedMotion };
    tmp22 = closure_1(closure_2[28])(obj9);
    ({ updateRows, scrollToMessageId } = tmp22);
    effect = closure_5.useEffect(() => {
      messages = messages.messages;
      const oldestUnreadMessageId = messages.oldestUnreadMessageId;
      if (messages.isMessagesReady) {
        const obj5 = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, hasJumpedToOriginalPost: null };
        ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
        obj5.jumpType = merged(hasJumpedToOriginalPost[29]).JumpType.INSTANT;
        obj5.focusTargetId = messages.focusTargetId;
        obj5.hasJumpedToOriginalPost = hasJumpedToOriginalPost;
        _undefined4(obj5);
        if (null != messages.jumpTargetId) {
          const obj7 = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, hasJumpedToOriginalPost: null };
          ({ jumpTargetId: obj3.scrollToMessageId, jumpTargetId: obj3.jumpTargetId } = messages);
          obj7.jumpType = merged(hasJumpedToOriginalPost[29]).JumpType.INSTANT;
          obj7.hasJumpedToOriginalPost = hasJumpedToOriginalPost;
          _undefined5(obj7);
        } else if (null != oldestUnreadMessageId) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => c34({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: Client.JumpType.INSTANT, hasJumpedToOriginalPost }), 50);
        }
      } else {
        const obj = { hasJumpedToOriginalPost };
        _undefined4(obj);
      }
      ({ channelId, messages: messages2 } = messages);
      const mapped = messages2.map((id) => id.id);
      let hasFetched = messages2.hasFetched;
      if (!hasFetched) {
        hasFetched = messages2.ready && !messages2.cached;
        const tmp17 = messages2.ready && !messages2.cached;
      }
      first(hasJumpedToOriginalPost[11]).recordMessageRender(channelId, mapped, hasFetched, messages2.hasMoreAfter);
      ({ channelId: channelId2, messages: messages3 } = messages);
      const obj4 = first(hasJumpedToOriginalPost[11]);
      const mapped1 = messages3.map((id) => id.id);
      let hasFetched2 = messages3.hasFetched;
      if (!hasFetched2) {
        hasFetched2 = messages3.ready && !messages3.cached;
        const tmp20 = messages3.ready && !messages3.cached;
      }
      first(hasJumpedToOriginalPost[11]).recordMessageRender(channelId2, mapped1, hasFetched2, messages3.hasMoreAfter);
      return () => {
        clearRowsState("unmount");
      };
    }, []);
    items3 = [, ];
    ({ channelId: arr4[0], screenIndex: arr4[1] } = merged);
    effect1 = closure_5.useEffect(() => () => {
      ref(merged.channelId, merged.screenIndex, false);
    }, items3);
    closure_37 = closure_5.useRef({ props: merged, shouldForceRender: first1 });
    layoutEffect = closure_5.useLayoutEffect(() => {
      const props = ref.current.props;
      const tmp2 = props;
      ref.current = { props, shouldForceRender };
      if (null != props.currentUserId) {
        const messages4 = tmp2.messages;
        const messages5 = props.messages;
        if (props.channelId !== tmp2.channelId) {
          _undefined(false);
        }
        let tmp6 = !tmp106;
        if (props.channelId === tmp2.channelId) {
          tmp6 = closure_2;
        }
        const channelId = tmp2.channelId;
        let obj2 = { clearRows, startOrCancelChannelLatestMessagesLoad, hasJumpedToOriginalPost: tmp6, firstIgnoredScrollEventTimestampRef };
        if (props.channelId !== channelId) {
          obj2.clearRows();
          const result = first(hasJumpedToOriginalPost[14]).clearChannelDimensions(channelId);
          const result1 = obj2.startOrCancelChannelLatestMessagesLoad(obj2.hasJumpedToOriginalPost);
          obj2.firstIgnoredScrollEventTimestampRef.current = undefined;
          let obj3 = first(hasJumpedToOriginalPost[14]);
        }
        const isMessagesAckable = props.isMessagesAckable;
        let isMessagesAckable2 = !isMessagesAckable;
        if (!isMessagesAckable) {
          isMessagesAckable2 = tmp2.isMessagesAckable;
        }
        if (isMessagesAckable2) {
          tmp15.current = false;
        }
        if (callback3(tmp6)) {
          tmp17(false);
          if (messages5.jumpSequenceId === messages4.jumpSequenceId) {
            tmp18(true);
          }
        }
        const obj4 = { isAtBottom: _undefined2.current, hasPreviousMessages: null != previousMessages.getPreviousMessages() };
        const tmp24Result = first(hasJumpedToOriginalPost[34])(tmp2, obj4, props);
        ({ jumpTargetId, focusTargetId } = tmp24Result);
        let tmp28 = props.theme !== tmp2.theme;
        ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp24Result);
        if (!tmp28) {
          tmp28 = props.saturation !== tmp2.saturation;
        }
        let tmp29 = props.theme !== tmp2.theme || props.saturation !== tmp2.saturation || props.inlineAttachmentMedia !== tmp2.inlineAttachmentMedia || props.inlineEmbedMedia !== tmp2.inlineEmbedMedia || props.renderEmbeds !== tmp2.renderEmbeds || props.renderReactions !== tmp2.renderReactions || props.animateEmoji !== tmp2.animateEmoji || props.animateStickers !== tmp2.animateStickers || props.gifAutoPlay !== tmp2.gifAutoPlay || props.timestampHourCycle !== tmp2.timestampHourCycle || props.containerWidth !== tmp2.containerWidth || props.guildSystemChannelFlags !== tmp2.guildSystemChannelFlags || props.userSettingsLocale !== tmp2.userSettingsLocale || props.roleStyle !== tmp2.roleStyle || props.officialMessageStyle !== tmp2.officialMessageStyle || props.canSendMessages !== tmp2.canSendMessages || props.showPushFeedback !== tmp2.showPushFeedback || props.selectedSummary !== tmp2.selectedSummary || props.selectedConversation !== tmp2.selectedConversation || props.shouldObscureSpoiler !== tmp2.shouldObscureSpoiler || props.explicitMediaFalsePositiveInfo !== tmp2.explicitMediaFalsePositiveInfo || props.familyCenterPendingConnection !== tmp2.familyCenterPendingConnection || props.isStaff !== tmp2.isStaff || props.isAgeVerified !== tmp2.isAgeVerified;
        if (!tmp29) {
          tmp29 = tmp !== tmp3 && tmp3;
          const tmp30 = tmp !== tmp3 && tmp3;
        }
        if (!tmp29) {
          tmp29 = props.displayNameStylesEnabled !== tmp2.displayNameStylesEnabled;
        }
        previousMessages = tmp31;
        const tmp34 = first(hasJumpedToOriginalPost[35])(props.interactionStates, tmp2.interactionStates);
        closure_2 = !tmp34;
        _undefined = tmp35;
        shouldForceRender = tmp36;
        closure_5 = tmp37;
        closure_6 = props.shouldDisableInteractiveComponents !== tmp2.shouldDisableInteractiveComponents;
        closure_7 = tmp38;
        closure_8 = tmp39;
        closure_9 = tmp40;
        closure_10 = tmp41;
        let channel = tmp2.channel;
        const tmp42 = channel.isForumPost() && props.isFollowingForumPost !== tmp2.isFollowingForumPost;
        closure_11 = tmp42;
        closure_12 = tmp43;
        closure_13 = tmp44;
        callback3 = tmp45;
        const tmp46 = props.activityInstanceIds !== tmp2.activityInstanceIds || props.activityParticipants !== tmp2.activityParticipants || props.applicationAssetFetchingIds !== tmp2.applicationAssetFetchingIds || props.activityInstancePresenceDetails !== tmp2.activityInstancePresenceDetails || props.messagesWithActivitiesLaunching !== tmp2.messagesWithActivitiesLaunching || props.invalidApplicationIds !== tmp2.invalidApplicationIds;
        startOrCancelChannelLatestMessagesLoad = tmp46;
        tmp15 = closure_18;
        tmp17 = closure_25;
        tmp18 = _undefined;
        const tmp21 = tmp2.isMessagesReady && !tmp2.isMessagesCached && props.isMessagesCached;
        const tmp24 = first(hasJumpedToOriginalPost[34]);
        const result2 = merged(hasJumpedToOriginalPost[35]).areArraysShallowEqual(props.activityInviteMessageIds, tmp2.activityInviteMessageIds);
        closure_16 = !result2;
        let obj5 = merged(hasJumpedToOriginalPost[35]);
        const result3 = merged(hasJumpedToOriginalPost[35]).areArraysShallowEqual(props.resolvedReferralTrialOfferIds, tmp2.resolvedReferralTrialOfferIds);
        let tmp52 = !result3;
        if (result3) {
          tmp52 = props.referralTrialOfferId !== tmp2.referralTrialOfferId;
        }
        if (!tmp52) {
          tmp52 = props.isPremiumTier2User !== tmp2.isPremiumTier2User;
        }
        closure_17 = tmp52;
        closure_18 = tmp53;
        _undefined2 = tmp54;
        closure_20 = tmp55;
        closure_21 = tmp56;
        closure_22 = tmp57;
        closure_23 = tmp58;
        const currentUserDisplayNameStyles = props.currentUserDisplayNameStyles;
        let fontId;
        if (currentUserDisplayNameStyles != null) {
          fontId = currentUserDisplayNameStyles.fontId;
        }
        const currentUserDisplayNameStyles2 = tmp2.currentUserDisplayNameStyles;
        let fontId1;
        if (currentUserDisplayNameStyles2 != null) {
          fontId1 = currentUserDisplayNameStyles2.fontId;
        }
        firstIgnoredScrollEventTimestampRef = tmp62;
        let obj6 = merged(hasJumpedToOriginalPost[35]);
        const tmp61 = props.voiceStatePrivateChannelId !== tmp2.voiceStatePrivateChannelId;
        const result4 = merged(hasJumpedToOriginalPost[35]).areArraysShallowEqual(props.fetchingSkuIds, tmp2.fetchingSkuIds);
        closure_25 = !result4;
        closure_26 = tmp65;
        if (!tmp29) {
          if (!tmp31) {
            if (props.uploads === tmp2.uploads) {
              if (!tmp46) {
                if (props.messages === tmp2.messages) {
                  if (props.editingMessageId === tmp2.editingMessageId) {
                    if (props.replyingMessageId === tmp2.replyingMessageId) {
                      if (!tmp61) {
                        if (props.messageAuthorActivities === tmp2.messageAuthorActivities) {
                          if (props.oldestUnreadMessageId === tmp2.oldestUnreadMessageId) {
                            if (props.invites === tmp2.invites) {
                              if (props.appDirectoryEmbedApplications === tmp2.appDirectoryEmbedApplications) {
                                if (props.invalidAppDirectoryEmbedApplicationIds === tmp2.invalidAppDirectoryEmbedApplicationIds) {
                                  if (props.appDirectoryEmbedApplicationFetchStates === tmp2.appDirectoryEmbedApplicationFetchStates) {
                                    if (props.guildTemplates === tmp2.guildTemplates) {
                                      if (props.gameOrganizationInvites === tmp2.gameOrganizationInvites) {
                                        if (props.buildOverrides === tmp2.buildOverrides) {
                                          if (props.experimentEmbeds === tmp2.experimentEmbeds) {
                                            if (props.quests === tmp2.quests) {
                                              if (props.isFetchingCurrentQuests === tmp2.isFetchingCurrentQuests) {
                                                if (props.participantsLength === tmp2.participantsLength) {
                                                  if (props.isMessagesReady === tmp2.isMessagesReady) {
                                                    if (props.channelThreadsVersion === tmp2.channelThreadsVersion) {
                                                      if (props.rsvpVersion === tmp2.rsvpVersion) {
                                                        if (props.repliedIds === tmp2.repliedIds) {
                                                          if (props.hasLoadedExperiments === tmp2.hasLoadedExperiments) {
                                                            if (props.isMessageRequest === tmp2.isMessageRequest) {
                                                              if (props.isSpamMessageRequest === tmp2.isSpamMessageRequest) {
                                                                if (props.currentUserCommunicationDisabled === tmp2.currentUserCommunicationDisabled) {
                                                                  if (props.userSettingsLocale === tmp2.userSettingsLocale) {
                                                                    if (props.selectedSummary === tmp2.selectedSummary) {
                                                                      if (props.selectedConversation === tmp2.selectedConversation) {
                                                                        if (props.showPushFeedback === tmp2.showPushFeedback) {
                                                                          if (props.cacheStoreLoaded === tmp2.cacheStoreLoaded) {
                                                                            if (!tmp55) {
                                                                              if (!tmp38) {
                                                                                if (!tmp39) {
                                                                                  if (!tmp40) {
                                                                                    if (props.forwardGuildsVersion === tmp2.forwardGuildsVersion) {
                                                                                      if (!tmp41) {
                                                                                        if (tmp34) {
                                                                                          if (!tmp37) {
                                                                                            if (!tmp42) {
                                                                                              if (null == jumpTargetId) {
                                                                                                if (null == focusTargetId) {
                                                                                                  if (props.androidKeyboardHeight === tmp2.androidKeyboardHeight) {
                                                                                                    if (props.mediaPostPreviewEmbeds === tmp2.mediaPostPreviewEmbeds) {
                                                                                                      if (props.shouldObscureSpoiler === tmp2.shouldObscureSpoiler) {
                                                                                                        if (props.shouldDisableInteractiveComponents === tmp2.shouldDisableInteractiveComponents) {
                                                                                                          if (!tmp35) {
                                                                                                            if (!tmp36) {
                                                                                                              if (!tmp43) {
                                                                                                                if (props.threadStartingReferenceMessage === tmp2.threadStartingReferenceMessage) {
                                                                                                                  if (!tmp44) {
                                                                                                                    if (result2) {
                                                                                                                      if (!tmp52) {
                                                                                                                        if (!tmp53) {
                                                                                                                          if (props.guildEmojis === tmp2.guildEmojis) {
                                                                                                                            if (!tmp54) {
                                                                                                                              if (!tmp57) {
                                                                                                                                if (!tmp58) {
                                                                                                                                  if (props.displayNameStylesEnabled === tmp2.displayNameStylesEnabled) {
                                                                                                                                    if (!tmp62) {
                                                                                                                                      if (!tmp56) {
                                                                                                                                        if (!tmp65) {
                                                                                                                                          if (result4) {
                                                                                                                                            ({ channelId: channelId2, messages } = tmp2);
                                                                                                                                            let obj8 = first(hasJumpedToOriginalPost[11]);
                                                                                                                                            const mapped = messages.map((id) => id.id);
                                                                                                                                            let hasFetched = messages.hasFetched;
                                                                                                                                            if (!hasFetched) {
                                                                                                                                              hasFetched = messages.ready && !messages.cached;
                                                                                                                                              const tmp69 = messages.ready && !messages.cached;
                                                                                                                                            }
                                                                                                                                            obj8.recordMessageRender(channelId2, mapped, hasFetched, messages.hasMoreAfter);
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const _Set = Set;
        const set = new Set();
        if (props.editingMessageId !== tmp2.editingMessageId) {
          if (null != tmp2.editingMessageId) {
            set.add(tmp2.editingMessageId);
          }
          if (null != props.editingMessageId) {
            set.add(props.editingMessageId);
          }
        }
        if (props.replyingMessageId !== tmp2.replyingMessageId) {
          if (null != tmp2.replyingMessageId) {
            set.add(tmp2.replyingMessageId);
          }
          if (null != props.replyingMessageId) {
            set.add(props.replyingMessageId);
          }
        }
        if (props.isMessagesReady === tmp2.isMessagesReady) {
          if (props.isCallActive === tmp2.isCallActive) {
            closure_28 = props.channelThreadsVersion !== tmp2.channelThreadsVersion;
            closure_29 = props.rsvpVersion !== tmp2.rsvpVersion;
            closure_30 = props.repliedIds !== tmp2.repliedIds;
            closure_31 = props.hasLoadedExperiments !== tmp2.hasLoadedExperiments;
            let num = props.communicationDisabledVersion;
            if (num == null) {
              num = -1;
            }
            const cacheStoreLoaded = props.cacheStoreLoaded;
            let cacheStoreLoaded2 = !cacheStoreLoaded;
            if (!cacheStoreLoaded) {
              cacheStoreLoaded2 = tmp2.cacheStoreLoaded;
            }
            let voiceChannelIdChangedAuthorIds = null;
            if (tmp56) {
              let prop = props.voiceStateChannelIdSummaryForGuild;
              if (prop == null) {
                prop = null;
              }
              let prop1 = tmp2.voiceStateChannelIdSummaryForGuild;
              if (prop1 == null) {
                prop1 = null;
              }
              voiceChannelIdChangedAuthorIds = merged(hasJumpedToOriginalPost[13]).getVoiceChannelIdChangedAuthorIds(prop, prop1);
              const tmp47Result2 = merged(hasJumpedToOriginalPost[13]);
            }
            const messages1 = tmp2.messages;
            const item = messages1.forEach((author) => {
              if (closure_21) {
                if (null != voiceChannelIdChangedAuthorIds) {
                  if (null != author.author) {
                    if (voiceChannelIdChangedAuthorIds.has(author.author.id)) {
                      set.add(author.id);
                    }
                  }
                }
              }
              if (closure_20) {
                const activity = author.activity;
                let type1;
                if (activity != null) {
                  type1 = activity.type;
                }
                if (type1 === constants.STREAM_REQUEST) {
                  set.add(author.id);
                }
              }
              if (closure_31) {
                if (author.type === constants3.USER_JOIN) {
                  set.add(author.id);
                }
              }
              if (closure_30) {
                if (author.type === constants3.REPLY) {
                  const messageReference = author.messageReference;
                  if (null != messageReference) {
                    const repliedIds = merged.repliedIds;
                    if (repliedIds.has(messageReference.message_id)) {
                      set.add(author.id);
                    }
                  }
                }
              }
              if (closure_28) {
                if (author.hasFlag(constants2.HAS_THREAD)) {
                  set.add(author.id);
                }
              }
              if (closure_29) {
                if (author.codedLinks.length > 0) {
                  set.add(author.id);
                }
              }
              if (closure_26) {
                if (author.codedLinks.length > 0) {
                  const codedLinks = author.codedLinks;
                  const iter = codedLinks[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let code = nextResult.code;
                    if (nextResult.type === CodedLink.CodedLinkType.INVITE) {
                      let invites = merged.invites;
                      value = invites.get(code);
                      let tmp194 = value;
                      if (null != value) {
                        if (null != tmp194.channel) {
                          let obj2 = InviteTypeUtils;
                          if (obj2.isVoiceChannelInvite(tmp194)) {
                            let id = tmp194.channel.id;
                            if (props.voiceInviteDataByChannelId[id] !== merged.voiceInviteDataByChannelId[id]) {
                              let addResult6 = set.add(author.id);
                              iter.return();
                            }
                          }
                        }
                      }
                    }
                    continue;
                  }
                }
              }
              if (!closure_10) {
                if (closure_8) {
                  if (null != merged.guildId) {
                    const messageAuthorMemberUserIds = messages_MessagesUtils.getMessageAuthorMemberUserIds(author);
                    if (messageAuthorMemberUserIds.some((item) => props.messageAuthorMembers[item] !== messageAuthorMembers.messageAuthorMembers[item])) {
                      set.add(author.id);
                    }
                  }
                }
                if (closure_9) {
                  if (author.author.id === merged.currentUserId) {
                    set.add(author.id);
                  }
                }
                if (closure_2) {
                  if (props.interactionStates[author.id] !== merged.interactionStates[author.id]) {
                    set.add(author.id);
                  }
                }
                if (closure_5) {
                  const interactionComponentStates = props.interactionComponentStates;
                  const interactionComponentStates2 = merged.interactionComponentStates;
                  value3 = interactionComponentStates.get(author.id);
                  if (value3 !== interactionComponentStates2.get(author.id)) {
                    set.add(author.id);
                  }
                }
                if (closure_6) {
                  if (0 !== author.components.length) {
                    set.add(author.id);
                  }
                }
                if (closure_3) {
                  if (props.channelPolls[author.id] !== merged.channelPolls[author.id]) {
                    set.add(author.id);
                  }
                }
                if (closure_4) {
                  const messageReference2 = author.messageReference;
                  let message_id;
                  if (messageReference2 != null) {
                    message_id = messageReference2.message_id;
                  }
                  if (null != message_id) {
                    if (props.messageReferencePolls[message_id] !== merged.messageReferencePolls[message_id]) {
                      set.add(author.id);
                    }
                  }
                }
                if (closure_13) {
                  const unloadedContentEntryMessageIds = props.unloadedContentEntryMessageIds;
                  const unloadedContentEntryMessageIds2 = merged.unloadedContentEntryMessageIds;
                  const hasItem = unloadedContentEntryMessageIds.has(author.id);
                  if (hasItem !== unloadedContentEntryMessageIds2.has(author.id)) {
                    set.add(author.id);
                  }
                }
                const channel = merged.channel;
                if (channel.isForumPost()) {
                  if (closure_11) {
                    if (author.id === obj5.castChannelIdAsMessageId(merged.channelId)) {
                      set.add(author.id);
                    }
                    obj5 = SnowflakeUtilsDefault;
                  }
                }
                if (closure_15) {
                  if (null != author.activityInstance) {
                    set.add(author.id);
                  }
                }
                let tmp72 = closure_16;
                if (closure_16) {
                  const activity2 = author.activity;
                  let party_id;
                  if (activity2 != null) {
                    party_id = activity2.party_id;
                  }
                  tmp72 = null != party_id;
                }
                if (tmp72) {
                  set.add(author.id);
                }
                if (closure_23) {
                  if (null != author.application) {
                    set.add(author.id);
                  }
                }
                if (closure_24) {
                  author = author.author;
                  let id1;
                  if (author != null) {
                    id1 = author.id;
                  }
                  if (id1 === merged.currentUserId) {
                    set.add(author.id);
                  }
                }
                if (closure_25) {
                  if (author.codedLinks.length > 0) {
                    const codedLinks2 = author.codedLinks;
                    const iter2 = codedLinks2[Symbol.iterator]();
                    while (iter2 !== undefined) {
                      ({ type, code: code2 } = nextResult1);
                      if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                        let first = _slicedToArray(code2.split("-"), 1)[0];
                        let fetchingSkuIds = props.fetchingSkuIds;
                        let tmp97 = first;
                        if (fetchingSkuIds.includes(first)) {
                          let addResult20 = set.add(author.id);
                          iter2.return();
                        } else {
                          let value4 = SKUStore.get(tmp97);
                          if (null != value4) {
                            let invalidApplicationIds = props.invalidApplicationIds;
                            if (invalidApplicationIds.includes(tmp103.applicationId)) {
                              let addResult21 = set.add(author.id);
                              iter2.return();
                            }
                          }
                        }
                      }
                      continue;
                    }
                    nextResult1 = iter2.next();
                  }
                }
                if (null != author.author) {
                  if (!obj9.messageAuthorActivitiesChanged(author, props, merged)) {
                    if (!obj6.codedLinksChanged(author, props, merged)) {
                      if (!closure_1) {
                        if (!obj8.mediaPostPreviewEmbedsChanged(author, props, merged)) {
                          let tmp126 = cacheStoreLoaded2;
                          if (cacheStoreLoaded2) {
                            tmp126 = author.embeds.length > 0;
                          }
                          if (tmp126) {
                            set.add(author.id);
                          }
                          let tmp130 = author.type === constants3.THREAD_STARTER_MESSAGE;
                          if (tmp130) {
                            tmp130 = props.threadStartingReferenceMessage !== merged.threadStartingReferenceMessage;
                          }
                          if (tmp130) {
                            set.add(author.id);
                          }
                          let hasItem1 = closure_14;
                          if (closure_14) {
                            hasItem1 = null != author.applicationId;
                          }
                          if (hasItem1) {
                            const invalidApplicationIds2 = props.invalidApplicationIds;
                            hasItem1 = invalidApplicationIds2.includes(author.applicationId);
                          }
                          if (hasItem1) {
                            set.add(author.id);
                          }
                          if (closure_17) {
                            const referralTrialOfferId = author.referralTrialOfferId;
                            let hasItem2 = null != referralTrialOfferId;
                            if (hasItem2) {
                              const resolvedReferralTrialOfferIds = merged.resolvedReferralTrialOfferIds;
                              hasItem2 = resolvedReferralTrialOfferIds.includes(referralTrialOfferId);
                            }
                            if (hasItem2) {
                              set.add(author.id);
                            }
                          }
                          let tmp143 = closure_18;
                          if (closure_18) {
                            tmp143 = author.codedLinks.length > 0;
                          }
                          if (tmp143) {
                            set.add(author.id);
                          }
                          let tmp146 = closure_19;
                          if (!closure_19) {
                            tmp146 = closure_22;
                          }
                          if (tmp146) {
                            const activity3 = author.activity;
                            let party_id1;
                            if (activity3 != null) {
                              party_id1 = activity3.party_id;
                            }
                            tmp146 = null != party_id1;
                          }
                          if (tmp146) {
                            set.add(author.id);
                          }
                        }
                        obj8 = MessagesUtilsDefault;
                      } else {
                        MessagesUtilsDefault;
                      }
                    }
                    obj6 = MessagesUtilsDefault;
                  }
                  set.add(author.id);
                  obj9 = MessagesUtilsDefault;
                }
              }
              set.add(author.id);
            });
            const obj7 = { forceRender: tmp29, forceReload: null, updateMessageIds: null, scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, ignoreEmbedDescriptionCache: null, messagesNewlyLoaded: null, shouldInitialScroll: null, minimizeScrolling: null, isAnimated: null, hasJumpedToOriginalPost: null };
            if (!tmp28) {
              tmp28 = tmp106;
            }
            obj7.forceReload = tmp28;
            obj7.updateMessageIds = set;
            obj7.scrollToMessageId = scrollToMessageId;
            obj7.jumpTargetId = jumpTargetId;
            obj7.jumpType = jumpType;
            obj7.focusTargetId = focusTargetId;
            obj7.ignoreEmbedDescriptionCache = cacheStoreLoaded2;
            obj7.messagesNewlyLoaded = tmp21;
            obj7.shouldInitialScroll = shouldInitialScroll;
            obj7.minimizeScrolling = minimizeScrolling;
            obj7.isAnimated = props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
            obj7.hasJumpedToOriginalPost = tmp6;
            cacheStoreLoaded2(obj7);
            closure_5(false);
            ({ channelId: channelId3, messages: messages3 } = tmp2);
            const obj13 = first(hasJumpedToOriginalPost[11]);
            const mapped1 = messages3.map((id) => id.id);
            let hasFetched2 = messages3.hasFetched;
            if (!hasFetched2) {
              hasFetched2 = messages3.ready && !messages3.cached;
              const tmp100 = messages3.ready && !messages3.cached;
            }
            obj13.recordMessageRender(channelId3, mapped1, hasFetched2, messages3.hasMoreAfter);
            const tmp92 = props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
          }
        }
        const tmp47Result = merged(hasJumpedToOriginalPost[35]);
        const messages2 = tmp2.messages;
        const arr = first(hasJumpedToOriginalPost[19]);
        const found = arr.find(messages2.toArray().reverse(), (type) => type.type === constants.CALL);
        if (null != found) {
          set.add(found.id);
        }
        const toArrayResult = messages2.toArray();
      }
      const obj = { props, shouldForceRender };
    });
    obj10 = { children: null };
    obj11 = {
      ref: ref5,
      style: merged.style,
      inverted: true,
      channelId: merged.channelId,
      alwaysRespectKeyboard: merged.alwaysRespectKeyboard,
      onChatScrollPosition: handleScrollPosition,
      onTapImage: first2.handleTapImage,
      onTapChannel: first2.handleTapChannel,
      onLongPressChannel: first2.handleLongPressChannel,
      onTapAttachmentLink: first2.handleTapAttachmentLink,
      onTapAttachmentTextPreview: first2.handleTapAttachmentTextPreview,
      onLongPressAttachmentLink: first2.handleLongPressAttachmentLink,
      onTapCall: first2.handleTapCall,
      onTapMention: first2.handleTapMention,
      onTapCommandMention: first2.handleTapCommandMention,
      onLongPressCommandMention: first2.handleLongPressCommandMention,
      onTapGameMention: first2.handleTapGameMention,
      onTapLink: first2.handleTapLink,
      onLongPressLink: first2.handleLongPressLink,
      onTapReaction: first2.handleTapReaction,
      onLongPressReaction: first2.handleLongPressReaction,
      onTapAvatar: first2.handleTapAvatar,
      onTapUsername: first2.handleTapUsername,
      onLongPressUsername: first2.handleLongPressUsername,
      onTapSticker: first2.handleOpenSticker,
      onLongPressSticker: function handleLongPressSticker(nativeEvent) {
            const messageId = MessageDataSnowflakeUtils.getNativeSyntheticEventData(nativeEvent).messageId;
            const current = ref3.current;
            const items = [messageId];
            const set = new Set(items);
            if (null != current) {
              set.add(current);
            }
            let tmp3 = null;
            if (current !== messageId) {
              tmp3 = messageId;
            }
            ref3.current = tmp3;
            _undefined4({ forceRender: true, updateMessageIds: set });
          },
      onLongPressMessage: first2.handleLongPressMessage,
      onInitiateReply: first2.handleInitiateReply,
      onInitiateEdit: first2.handleInitiateEdit,
      onInitiateThread: first2.handleInitiateThread,
      onTapMessage: first2.handleTapMessage,
      onDoubleTapMessage: first2.handleDoubleTapMessage,
      onTapSeparator: first2.handleTapSeparator,
      onTapInviteEmbed: first2.handleTapInviteEmbed,
      onTapInviteEmbedAccept: first2.handleTapInviteEmbedAccept,
      onTapJoinActivity: first2.handleTapJoinActivity,
      onTapJoinRichPresence: first2.handleTapJoinRichPresence,
      onPressKey: merged.onPressKey,
      animateEmoji: merged.animateEmoji,
      onTapGiftCodeEmbed: first2.handleTapGiftCodeEmbed,
      onTapCancelUploadItem: first2.handleTapCancelUploadItem,
      onTapMessageReply: first2.handleTapReply,
      onTapSummary: first2.handleTapSummary,
      onTapSummaryJump: first2.handleTapSummaryJump,
      onTapConversationHeader: first2.handleTapConversationHeader,
      onTapGiftCodeAccept: first2.handleTapGiftCodeAccept,
      onTapReferralRedeem: first2.handleTapReferralRedeem,
      onGiftIntentCardViewed: first2.handleGiftIntentCardViewed,
      onTapGiftIntentPrimaryCta: first2.handleTapGiftIntentPrimaryCta,
      onTapGiftIntentSecondaryCta: first2.handleTapGiftIntentSecondaryCta,
      onTapThreadEmbed: first2.handleTapThreadEmbed,
      onTapEmoji: first2.handleTapEmoji,
      onTapTimestamp: first2.handleTapTimestamp,
      onTapInlineCode: first2.handleTapInlineCode,
      onTapRoleIcon: first2.handleTapRoleIcon,
      onTapVoiceChannelBadge: first2.handleTapVoiceChannelBadge,
      onTapGameIcon: first2.handleTapGameIcon,
      onTapSuppressNotificationsIcon: first2.handleTapSuppressNotificationsIcon,
      onTapConnectionsRoleTag: first2.handleTapConnectionsRoleTag,
      onTapTimeoutIcon: first2.handleTapTimeoutIcon,
      onTapButtonActionComponent: first2.handleTapButtonActionComponent,
      onTapSelectActionComponent: first2.handleTapSelectActionComponent,
      onTapWelcomeReply: first2.handleTapWelcomeReply,
      onTapInviteToSpeak: first2.handleTapInviteToSpeak,
      onTapAutoModerationActions: first2.handleTapAutoModerationActions,
      onTapAutoModerationFeedback: first2.handleTapAutoModerationFeedback,
      onTapFollowForumPost: first2.handleTapFollowForumPost,
      onTapShareForumPost: first2.handleTapShareForumPost,
      onTapReactionOverflow: first2.handleTapReactionOverflow,
      onTapNavBar: function handleTapNavBar() {
            const self = this;
            const apply = closure_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          },
      onTapCopyText: first2.handleCopyText,
      onTapOpTag: first2.handleTapOpTag,
      onTapTag: first2.handleTapTag,
      onMediaAttachmentPlaybackEnded: first2.handleMediaAttachmentPlaybackEnded,
      onMediaAttachmentPlaybackStarted: first2.handleMediaAttachmentPlaybackStarted,
      onVoiceMessagePlaybackFailed: first2.handleVoiceMessagePlaybackFailed,
      onTapShowAltText: isNearBottomRef,
      onTapPostPreviewEmbed: first2.handleTapPostPreviewEmbed,
      onTapDismissMediaPostSharePrompt: first2.handleTapDismissMediaPostSharePrompt,
      onTapObscuredMediaLearnMore: first2.handleTapObscuredMediaLearnMore,
      onTapObscuredMediaToggle: first2.onTapObscuredMediaToggle,
      onTapSafetyPolicyNoticeEmbed: first2.handleTapSafetyPolicyNoticeEmbed,
      onTapSafetySystemNotificationCta: first2.handleTapSafetySystemNotificationCta,
      onTapPollAnswer: first2.handleTapPollAnswer,
      onTapPollSubmitVote: first2.handleTapPollSubmitVote,
      onTapPollAction: first2.handleTapPollAction,
      onLongPressPollImage: first2.handleLongPressPollImage,
      onTapCtaButton: first2.handleTapCtaButton,
      onMessageAccessibilityAction: first2.handleMessageAccessibilityAction,
      onTapForwardFooter: first2.handleTapForwardFooter,
      onTapInlineForward: first2.handleTapInlineForward,
      onTapClanTagChiplet: first2.handleTapClanTagChiplet,
      onTapContentInventoryEntryEmbed: first2.handleTapContentInventoryEntryEmbed,
      onTapCheckpointCard: first2.handleTapCheckpointCard,
      onTapSoundmoji: first2.handleTapSoundmoji,
      onTapAppMessageEmbed: first2.handleTapAppMessageEmbed,
      onTapPreviewSharedClientTheme: first2.handleTapPreviewSharedClientTheme,
      onSharedClientThemeViewed: first2.handleSharedClientThemeViewed,
      children: merged.children,
      HACK_fixModalInteraction: merged.HACK_fixModalInteraction,
      onTapTableView: function handleTapTableView() {
            let isIOSResult = PlatformUtils.isIOS();
            if (isIOSResult) {
              isIOSResult = merged.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
            }
            if (isIOSResult) {
              const current = merged.chatInputRef.current;
              if (current != null) {
                current.closeCustomKeyboard();
              }
            }
          },
      onFirstLayout: function handleFirstLayout(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
          },
      onMediaPlayFinishedAnalytics: isNearTopRef,
      onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
          }
    };
    items4 = [, ];
    items4[0] = findMessageIndex(closure_1(closure_2[39]), obj11);
    obj12 = { messages: merged.messages };
    items4[1] = findMessageIndex(closure_0(closure_2[44]).ChatTTITracker, obj12);
    obj10.children = items4;
    return isAtBottomRef(hasHandledScrollRef, obj10);
  }
}
MessagesRenderer.displayName = "Messages";
let size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default noop.memo(MessagesRenderer, (interactionStates, interactionStates2) => discord_common_shallowEqualDefault(interactionStates, interactionStates2, ["interactionStates"], { shouldWarnLargeObjects: false }) && discord_common_shallowEqualDefault(interactionStates.interactionStates, interactionStates2.interactionStates));