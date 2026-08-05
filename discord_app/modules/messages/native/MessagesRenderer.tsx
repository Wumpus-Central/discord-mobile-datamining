// discord_app/modules/messages/native/MessagesRenderer.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import getMessageJumpData from "getMessageJumpData";
import importAllResult from "apply";
import { updateShouldShowJumpToPresentButton as closure_6 } from "updateChatInputContainerHeight";
import { getUserCommunicationDisabledVersion as closure_7 } from "trackCommunicationDisabled";
import closure_8 from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import addSku from "addSku";
import { Changeset } from "Changeset";
import ME from "ME";
import jsxProd from "useChannelLoading";
import { shallowEqual } from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import { ChatTTITracker } from "../../chat/native/ChatTTITracker.tsx";
import { openMediaModalOverlayAltTextSheet } from "../../media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx";
import { useMessageAuthorActivities } from "MessagesHooks.tsx";
import { getVisibleMessages } from "MessagesUtils.tsx";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
const require = arg1;
function handleTapShowAltText(description) {
  openMediaModalOverlayAltTextSheet({ description: description.nativeEvent.description });
}
function handleMediaPlayFinishedAnalytics(nativeEvent) {
  const result = getVisibleMessages.handleMediaPlayFinishedAnalytics(nativeEvent.nativeEvent);
}
function isLoadingAtTop(arg0, arg1) {
  if (arg1) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = Changeset;
      if (nextResult.changeType === Changeset.INSERT) {
        let num = 1;
        let tmp9 = iter;
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
let c5 = importAllResult;
({ ActivityActionTypes: closure_12, MAX_MESSAGES_PER_CHANNEL: map1, MessageFlags: closure_14, MessageTypes: closure_15, Permissions: closure_16 } = ME);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((messages, ref) => {
  let channelLatestMessageLoadingStatsManager;
  let closure_15;
  let closure_18;
  let closure_19;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let getUncachedChannelPermissions;
  let closure_33;
  let closure_34;
  let dependencyMap;
  let handleMediaPlayFinishedAnalytics;
  let handleScrollPosition;
  let handleTapShowAltText;
  let isLoadingAtTop;
  let loadMoreAfter;
  let loadMoreBefore;
  let scrollToTopMessage;
  let updateNativeRows;
  const _require = messages;
  function handleVisibleMessagesChange(arg0) {
    let firstVisibleMessagePercentVisible;
    let firstVisibleMessageRowIndex;
    let lastVisibleMessagePercentVisible;
    let lastVisibleMessageRowIndex;
    let source;
    ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, source } = arg0);
    let obj = messages(outer1_2[13]);
    obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: first, channelId: messages.channelId };
    const visibleMessages = obj.getVisibleMessages(obj);
    if (visibleMessages.length > 0) {
      let tmpResult = tmp(tmp2[22]);
      obj = { visibleMessages: null, source: null };
      obj[0] = visibleMessages;
      obj[1] = source;
      const result = tmpResult.questsVisibleMobileMessagesChanged(obj);
      tmpResult = tmp(tmp2[23]);
      const result1 = tmpResult.handleAnnouncementMessageViewTracking(visibleMessages, tmp3.shouldTrackAnnouncementMessageViews, tmp3.guildId, tmp3.channel);
      const tmpResult1 = tmp(tmp2[23]);
      const result2 = tmpResult1.handleOfficialMessageViewTracking(visibleMessages, tmp3.shouldTrackOfficialMessageViews, tmp3.guildId, tmp3.channel);
      const tmpResult2 = tmp(tmp2[23]);
      const result3 = tmpResult2.handleRichPresenceInviteEmbedViewTracking(visibleMessages, tmp3.shouldTrackRichPresenceInviteEmbedViews, tmp3.guildId, tmp3.channel);
      const tmpResult3 = tmp(tmp2[23]);
      const result4 = tmpResult3.handleVoiceInviteEmbedViewTracking(visibleMessages, tmp3.shouldTrackVoiceInviteEmbedViews, tmp3.guildId, tmp3.channel);
    }
  }
  function findMessageIndex(ChatTTITracker, arg1) {
    if (null != ChatTTITracker) {
      return messages(outer1_2[24]).findMessageRowIndex(first.getPreviousRows(), ChatTTITracker);
    }
  }
  function _handleTapNavBar() {
    const self = this;
    const tmp = outer1_3(function*() {
      let channel;
      let useReducedMotion;
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              useReducedMotion = tmp2;
              useReducedMotion = undefined;
              ({ channel, useReducedMotion } = outer1_0);
              if (channel.isForumPost()) {
                if (!outer1_21.current) {
                  let obj1 = v0(table[20]);
                  if (null == outer1_13(obj1.castChannelIdAsMessageId(channel.id))) {
                    let tmp11Result = tmp11(tmp12[26]);
                    obj1 = { channelId: null, jump: null, limit: null };
                    obj1[0] = channel.id;
                    const obj2 = { messageId: null, flash: false };
                    obj2[0] = channel.id;
                    obj1[1] = obj2;
                    obj1[2] = outer1_13;
                    v0 = 1;
                    table = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = tmp11Result.fetchMessages(obj1);
                    return obj3;
                  } else {
                    tmp11Result = tmp11(tmp12[20]);
                    const tmp27 = outer1_17(tmp11Result.castChannelIdAsMessageId(channel.id));
                    if (null == tmp27) {
                      table = 3;
                      return { value: "HermesInternal", done: null };
                    } else {
                      const obj4 = { animated: null };
                      obj4[0] = !useReducedMotion;
                      tmp11(tmp12[17]).scrollTo(outer1_11.current, tmp27, obj4);
                      const _setTimeout2 = setTimeout;
                      const timerId = setTimeout(() => outer1_25(!useReducedMotion), 10 * tmp27);
                      const tmp11Result1 = tmp11(tmp12[17]);
                    }
                  }
                }
              }
              table = 3;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const _setTimeout = setTimeout;
            const timerId1 = setTimeout(() => outer1_25(!useReducedMotion), 50);
          }
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp19) {
          table = tmp;
          throw tmp19;
        }
      }
    });
    const _handleTapNavBar = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function scrollToBottom() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    callback3({ eventTimestamp: Date.now(), isAtBottom: true });
    const obj = { eventTimestamp: Date.now(), isAtBottom: true };
    if (flag) {
      flag = !messages.useReducedMotion;
    }
    first(outer1_2[17]).scrollToBottom(ref5.current, flag);
  }
  function jumpToPresent() {
    let channel;
    let messages;
    ({ messages, channel } = closure_0);
    if (null == messages.jumpReturnTargetId) {
      if (!messages.loadingMore) {
        if (messages.hasMoreAfter) {
          let obj = { channelId: null, limit: null, jump: null };
          obj[0] = channel.id;
          obj[1] = callback2;
          obj[2] = { present: true };
          messages = first(outer1_2[26]).fetchMessages(obj);
          const obj5 = first(outer1_2[26]);
        } else {
          obj = { eventTimestamp: null, isAtBottom: true };
          const _Date = Date;
          obj[0] = Date.now();
          callback3(obj);
          first(outer1_2[17]).scrollToBottom(ref5.current, !tmp.useReducedMotion);
          const obj4 = first(outer1_2[17]);
        }
      }
    } else {
      obj = first(outer1_2[26]);
      const obj1 = { channelId: null, messageId: null, flash: true };
      obj1[0] = channel.id;
      obj1[1] = jumpReturnTargetId;
      obj.jumpToMessage(obj1);
    }
  }
  function scrollToNewMessages() {
    let id = ref3.ackMessageId(messages.channel.id);
    let obj = first(outer1_2[26]);
    obj = { channelId: messages.channel.id, messageId: null, offset: 1, context: "Mark As Read" };
    if (id == null) {
      id = messages.channel.id;
    }
    obj[1] = id;
    obj.jumpToMessage(obj);
  }
  function getChatRef() {
    return ref5;
  }
  function clearRowsState(reason) {
    ref.current = false;
    closure_18.current = false;
    closure_20.current = false;
    closure_19.current = false;
    closure_21.current = false;
    closure_22.current = false;
    closure_23.current = false;
    ref1.current = false;
    ref2.current = [];
    ref4.current = false;
    ref3.current = null;
    const size = chatUpdatesQueue.blockers.size;
    const length2 = first.getPreviousRows().length;
    first.clear();
    chatUpdatesQueue.clear();
    let obj = first(outer1_2[17]);
    obj.clearRows(ref5.current);
    obj = { category: "chat.queue.clear", message: "clearRows (" + reason + "): queue=" + length + " blockers=" + size + " jsRows=" + length2, data: null };
    obj = { reason, changesetUpdateId: null, queueLength: null, blockers: null, chatManagerRows: null };
    const obj2 = first(outer1_2[30]);
    obj[1] = messages(outer1_2[31]).getChangesetIdForChat(ref5.current);
    obj[2] = chatUpdatesQueue.queue.length;
    obj[3] = size;
    obj[4] = length2;
    obj[2] = obj;
    obj2.addBreadcrumb(obj);
  }
  function clearRows() {
    clearRowsState("channel-change");
    ref(messages.channelId, messages.screenIndex, false);
  }
  let first = first1(importAllResult.useState(() => new first(8418)()), 1)[0];
  [dependencyMap, getUncachedChannelPermissions] = first1(importAllResult.useState(false), 2);
  let tmp3 = first1(importAllResult.useState(false), 2);
  first1 = tmp3[0];
  ref = importAllResult.useRef(false);
  const ref1 = importAllResult.useRef(false);
  const ref2 = importAllResult.useRef([]);
  const ref3 = importAllResult.useRef(null);
  const ref4 = importAllResult.useRef(false);
  const ref5 = importAllResult.useRef(null);
  let callback = importAllResult.useCallback((rows) => {
    let HACK_iOSForceAnimations;
    let forceReload;
    let hasMoreMessagesAfter;
    let isAnimated;
    let scrollData;
    ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
    const tmp = outer1_22(rows.rows, ref1.current);
    first(outer1_2[17]).updateRows(ref5.current, { rows, isLoadingAtTop: tmp, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated });
    ref1.current = hasMoreMessagesAfter;
  }, []);
  let obj = _useMessageAuthorActivities;
  let chatUpdatesQueue = obj.useChatUpdatesQueue(ref5, callback);
  let items = [, ];
  ({ canChat: arr[0], channel: arr[1] } = messages);
  const items1 = [messages.messages];
  const callback1 = importAllResult.useCallback(() => {
    let canChat = messages.canChat;
    if (canChat) {
      canChat = ref2.can(handleVisibleMessagesChange.ADD_REACTIONS, tmp.channel);
    }
    if (!canChat) {
      const channel = tmp.channel;
      canChat = channel.isPrivate();
    }
    return canChat;
  }, items);
  let callback2 = importAllResult.useCallback((arg0) => {
    let messages = arg0;
    messages = messages.messages;
    return first(outer1_2[19]).find(messages.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
  }, items1);
  const items2 = [, , ];
  ({ channel: arr3[0], channelId: arr3[1] } = messages);
  items2[2] = messages.messages.jumpTargetId;
  let callback3 = importAllResult.useCallback((arg0) => {
    const channel = messages.channel;
    let isForumPostResult = channel.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = first(outer1_2[20]).castChannelIdAsMessageId(tmp.channelId) === tmp.messages.jumpTargetId;
      const obj = first(outer1_2[20]);
    }
    if (isForumPostResult) {
      isForumPostResult = !arg0;
    }
    return isForumPostResult;
  }, items2);
  obj = { channelId: messages.channelId, jumpTargetId: messages.messages.jumpTargetId, oldestUnreadMessageId: messages.oldestUnreadMessageId, shouldJumpToOriginalPost: callback3 };
  let tmp2 = first1(importAllResult.useState(false), 2);
  ({ startOrCancelLatestMessagesLoad: closure_15, channelLatestMessageLoadingStatsManager } = first(10926)(obj));
  obj = {
    chatRef: ref5,
    chatManager: first,
    chatUpdatesQueue,
    pendingUpdatesQueueRef: ref2,
    animatedRef: ref,
    fetchMoreBefore() {
      messages = messages.messages;
      let hasMoreBefore = messages.hasMoreBefore;
      if (hasMoreBefore) {
        hasMoreBefore = !messages.loadingMore;
      }
      if (hasMoreBefore) {
        let obj = first(outer1_2[26]);
        obj = { channelId: null, before: null, limit: null };
        obj[0] = messages.channelId;
        const firstResult = messages.first();
        let id;
        if (firstResult != null) {
          id = firstResult.id;
        }
        obj[1] = id;
        obj[2] = callback2;
        messages = obj.fetchMessages(obj);
      }
    },
    fetchMoreAfter() {
      messages = messages.messages;
      let hasMoreAfter = messages.hasMoreAfter;
      if (hasMoreAfter) {
        hasMoreAfter = !messages.loadingMore;
      }
      if (hasMoreAfter) {
        let obj = first(outer1_2[26]);
        obj = { channelId: null, after: null, limit: null };
        obj[0] = messages.channelId;
        const lastResult = messages.last();
        let id;
        if (lastResult != null) {
          id = lastResult.id;
        }
        obj[1] = id;
        obj[2] = callback2;
        messages = obj.fetchMessages(obj);
      }
    },
    handleVisibleMessagesChange,
    applyNativeRowsUpdate: callback,
    messages: messages.messages,
    channel: messages.channel,
    channelId: messages.channelId,
    screenIndex: messages.screenIndex,
    onScroll: messages.onScroll,
    useReducedMotion: messages.useReducedMotion,
    isStaff: messages.isStaff,
    visibleMessagesWindowHandler: messages.visibleMessagesWindowHandler
  };
  let tmp16 = first(10926)(obj);
  ({ hasHandledScrollRef: closure_18, isAtBottomRef: closure_19, isNearBottomRef: handleTapShowAltText, isNearTopRef: handleMediaPlayFinishedAnalytics, deceleratingRef: isLoadingAtTop, draggingRef: closure_23, firstIgnoredScrollEventTimestampRef: closure_24, scrollToTop: closure_25, handleScrollCallbacks: closure_26, loadMoreBefore, loadMoreAfter, scrollToTopMessage, updateNativeRows, handleScrollPosition } = first(10929)(obj));
  const ref6 = importAllResult.useRef(null);
  ref6.current = { getMessage: callback2, chatInputRef: messages.chatInputRef, selectedChannelId: messages.channelId, revealedMessageId: messages.messages.revealedMessageId, uploads: messages.uploads, paymentsBlocked: messages.paymentsBlocked, loadMoreBefore, loadMoreAfter };
  const first2 = first1(importAllResult.useState(() => new messages(outer1_2[27]).MessagesHandlers(() => ref.current)), 1)[0];
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({ scrollToBottom, jumpToPresent, scrollToNewMessages, getChatRef }));
  let tmp17 = first(10929)(obj);
  let obj1 = { chatManager: first, rowGenerator: first1(tmp3[1].useState(() => new first(7851)()), 1)[0], animatingStickerMessageIdRef: ref3, canAddNewReactions: callback1, channel: messages.channel, messages: messages.messages, isMessagesReady: messages.isMessagesReady, uploads: messages.uploads, roleStyle: messages.roleStyle, oldestUnreadMessageId: messages.oldestUnreadMessageId, replyingMessageId: messages.replyingMessageId, inlineAttachmentMedia: messages.inlineAttachmentMedia, inlineEmbedMedia: messages.inlineEmbedMedia, renderEmbeds: messages.renderEmbeds, renderReactions: messages.renderReactions, animateEmoji: messages.animateEmoji, gifAutoPlay: messages.gifAutoPlay, timestampHourCycle: messages.timestampHourCycle, currentUserId: messages.currentUserId, renderCommunicationDisabled: messages.renderCommunicationDisabled, selectedSummary: messages.selectedSummary, enableSwipeActions: messages.enableSwipeActions, isResourceChannel: messages.isResourceChannel, shouldObscureSpoiler: messages.shouldObscureSpoiler, shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents, unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds, containerWidth: messages.containerWidth, chatRef: ref5, loadedRef: ref4, animatedRef: ref, hasMoreMessagesAfterForLastUpdateRef: ref1, updateNativeRows, isLoadingAtTop, channelLatestMessageLoadingStatsManager, channelId: messages.channelId, isMessagesCached: messages.isMessagesCached, chatUpdatesQueue, shouldJumpToOriginalPost: callback3, findMessageIndex, scrollToTopMessage, useReducedMotion: messages.useReducedMotion };
  ({ updateRows: closure_33, scrollToMessageId: closure_34 } = first(11269)({ chatManager: first, rowGenerator: first1(tmp3[1].useState(() => new first(7851)()), 1)[0], animatingStickerMessageIdRef: ref3, canAddNewReactions: callback1, channel: messages.channel, messages: messages.messages, isMessagesReady: messages.isMessagesReady, uploads: messages.uploads, roleStyle: messages.roleStyle, oldestUnreadMessageId: messages.oldestUnreadMessageId, replyingMessageId: messages.replyingMessageId, inlineAttachmentMedia: messages.inlineAttachmentMedia, inlineEmbedMedia: messages.inlineEmbedMedia, renderEmbeds: messages.renderEmbeds, renderReactions: messages.renderReactions, animateEmoji: messages.animateEmoji, gifAutoPlay: messages.gifAutoPlay, timestampHourCycle: messages.timestampHourCycle, currentUserId: messages.currentUserId, renderCommunicationDisabled: messages.renderCommunicationDisabled, selectedSummary: messages.selectedSummary, enableSwipeActions: messages.enableSwipeActions, isResourceChannel: messages.isResourceChannel, shouldObscureSpoiler: messages.shouldObscureSpoiler, shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents, unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds, containerWidth: messages.containerWidth, chatRef: ref5, loadedRef: ref4, animatedRef: ref, hasMoreMessagesAfterForLastUpdateRef: ref1, updateNativeRows, isLoadingAtTop, channelLatestMessageLoadingStatsManager, channelId: messages.channelId, isMessagesCached: messages.isMessagesCached, chatUpdatesQueue, shouldJumpToOriginalPost: callback3, findMessageIndex, scrollToTopMessage, useReducedMotion: messages.useReducedMotion }));
  const effect = importAllResult.useEffect(() => {
    let channelId;
    let channelId2;
    let messages2;
    let messages3;
    messages = messages.messages;
    const oldestUnreadMessageId = messages.oldestUnreadMessageId;
    if (messages.isMessagesReady) {
      let obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, hasJumpedToOriginalPost: null };
      ({ jumpTargetId: obj2[0], jumpTargetId: obj2[1] } = messages);
      obj[2] = messages(outer1_2[29]).JumpType.INSTANT;
      obj[3] = messages.focusTargetId;
      obj[4] = closure_2;
      tmp2(obj);
      if (null != messages.jumpTargetId) {
        obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, hasJumpedToOriginalPost: null };
        ({ jumpTargetId: obj3[0], jumpTargetId: obj3[1] } = messages);
        obj[2] = tmp5(outer1_2[29]).JumpType.INSTANT;
        obj[3] = tmp7;
        callback5(obj);
      } else if (null != oldestUnreadMessageId) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => outer1_34({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: messages(outer2_2[29]).JumpType.INSTANT, hasJumpedToOriginalPost: outer1_2 }), 50);
      }
      tmp5 = messages;
      tmp7 = closure_2;
    } else {
      obj = { hasJumpedToOriginalPost: null };
      obj[0] = closure_2;
      tmp2(obj);
    }
    ({ channelId, messages: messages2 } = messages);
    const mapped = messages2.map((id) => id.id);
    let hasFetched = messages2.hasFetched;
    if (!hasFetched) {
      hasFetched = messages2.ready && !messages2.cached;
      const tmp17 = messages2.ready && !messages2.cached;
    }
    first(outer1_2[11]).recordMessageRender(channelId, mapped, hasFetched, messages2.hasMoreAfter);
    ({ channelId: channelId2, messages: messages3 } = messages);
    const obj4 = first(outer1_2[11]);
    const tmp15 = first;
    const mapped1 = messages3.map((id) => id.id);
    let hasFetched2 = messages3.hasFetched;
    if (!hasFetched2) {
      hasFetched2 = messages3.ready && !messages3.cached;
      const tmp20 = messages3.ready && !messages3.cached;
    }
    first(outer1_2[11]).recordMessageRender(channelId2, mapped1, hasFetched2, messages3.hasMoreAfter);
    return () => {
      callback("unmount");
    };
  }, []);
  const items3 = [, ];
  ({ channelId: arr4[0], screenIndex: arr4[1] } = messages);
  const effect1 = importAllResult.useEffect(() => () => {
    outer1_6(closure_0.channelId, closure_0.screenIndex, false);
  }, items3);
  let closure_37 = importAllResult.useRef({ props: messages, shouldForceRender: first1 });
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let channelId2;
    let channelId3;
    let focusTargetId;
    let jumpTargetId;
    let jumpType;
    let messages;
    let messages3;
    let minimizeScrolling;
    let scrollToMessageId;
    let shouldInitialScroll;
    const props = ref2.current.props;
    let obj = { props, shouldForceRender: first1 };
    const tmp2 = props;
    ref2.current = obj;
    if (null != props.currentUserId) {
      const messages4 = tmp2.messages;
      const messages5 = props.messages;
      let recordMessageRenderResult1 = props.channelId !== tmp2.channelId;
      if (recordMessageRenderResult1) {
        callback(false);
      }
      let tmp6 = !recordMessageRenderResult1;
      if (!recordMessageRenderResult1) {
        tmp6 = closure_2;
      }
      const channelId = tmp2.channelId;
      obj = { clearRows: null, startOrCancelChannelLatestMessagesLoad: null, hasJumpedToOriginalPost: null, firstIgnoredScrollEventTimestampRef: null };
      obj[0] = clearRows;
      obj[1] = closure_15;
      obj[2] = tmp6;
      obj[3] = closure_24;
      if (props.channelId !== channelId) {
        obj.clearRows();
        const result = first(outer1_2[14]).clearChannelDimensions(channelId);
        const result1 = obj.startOrCancelChannelLatestMessagesLoad(obj.hasJumpedToOriginalPost);
        obj.firstIgnoredScrollEventTimestampRef.current = undefined;
        let obj3 = first(outer1_2[14]);
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
      obj = { isAtBottom: null, hasPreviousMessages: null };
      obj[0] = ref.current;
      obj[1] = null != first.getPreviousMessages();
      const tmp24Result = first(outer1_2[32])(tmp2, obj, props);
      ({ jumpTargetId, focusTargetId } = tmp24Result);
      let tmp28 = props.theme !== tmp2.theme;
      ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp24Result);
      if (!tmp28) {
        tmp28 = props.saturation !== tmp2.saturation;
      }
      if (!tmp28) {
        tmp28 = props.isVisualRefreshEnabled !== tmp2.isVisualRefreshEnabled;
      }
      let tmp29 = props.theme !== tmp2.theme || props.saturation !== tmp2.saturation || props.isVisualRefreshEnabled !== tmp2.isVisualRefreshEnabled || props.inlineAttachmentMedia !== tmp2.inlineAttachmentMedia || props.inlineEmbedMedia !== tmp2.inlineEmbedMedia || props.renderEmbeds !== tmp2.renderEmbeds || props.renderReactions !== tmp2.renderReactions || props.animateEmoji !== tmp2.animateEmoji || props.animateStickers !== tmp2.animateStickers || props.gifAutoPlay !== tmp2.gifAutoPlay || props.timestampHourCycle !== tmp2.timestampHourCycle || props.containerWidth !== tmp2.containerWidth || props.guildSystemChannelFlags !== tmp2.guildSystemChannelFlags || props.userSettingsLocale !== tmp2.userSettingsLocale || props.roleStyle !== tmp2.roleStyle || props.officialMessageStyle !== tmp2.officialMessageStyle || props.canSendMessages !== tmp2.canSendMessages || props.showPushFeedback !== tmp2.showPushFeedback || props.selectedSummary !== tmp2.selectedSummary || props.shouldObscureSpoiler !== tmp2.shouldObscureSpoiler || props.explicitMediaFalsePositiveInfo !== tmp2.explicitMediaFalsePositiveInfo || props.familyCenterPendingConnection !== tmp2.familyCenterPendingConnection || props.isStaff !== tmp2.isStaff || props.isAgeVerified !== tmp2.isAgeVerified;
      if (!tmp29) {
        tmp29 = recordMessageRenderResult1 !== tmp3 && tmp3;
        const tmp30 = recordMessageRenderResult1 !== tmp3 && tmp3;
      }
      if (!tmp29) {
        tmp29 = props.displayNameStylesEnabled !== tmp2.displayNameStylesEnabled;
      }
      first = tmp31;
      const tmp34 = first(outer1_2[33])(props.interactionStates, tmp2.interactionStates);
      closure_2 = !tmp34;
      callback = tmp35;
      first1 = tmp36;
      let callback2 = tmp37;
      let closure_6 = props.shouldDisableInteractiveComponents !== tmp2.shouldDisableInteractiveComponents;
      let channel = tmp2.channel;
      const tmp42 = channel.isForumPost() && props.isFollowingForumPost !== tmp2.isFollowingForumPost;
      const chatUpdatesQueue = tmp43;
      callback2 = tmp44;
      callback3 = tmp45;
      const tmp46 = props.activityInstanceIds !== tmp2.activityInstanceIds || props.activityParticipants !== tmp2.activityParticipants || props.applicationAssetFetchingIds !== tmp2.applicationAssetFetchingIds || props.activityInstancePresenceDetails !== tmp2.activityInstancePresenceDetails || props.messagesWithActivitiesLaunching !== tmp2.messagesWithActivitiesLaunching || props.invalidApplicationIds !== tmp2.invalidApplicationIds;
      closure_15 = tmp46;
      tmp15 = closure_18;
      tmp17 = closure_25;
      tmp18 = callback;
      let tmp21 = tmp2.isMessagesReady && !tmp2.isMessagesCached && props.isMessagesCached;
      const tmp24 = first(outer1_2[32]);
      const result2 = messages(outer1_2[33]).areArraysShallowEqual(props.activityInviteMessageIds, tmp2.activityInviteMessageIds);
      let closure_16 = !result2;
      let obj5 = messages(outer1_2[33]);
      const result3 = messages(outer1_2[33]).areArraysShallowEqual(props.resolvedReferralTrialOfferIds, tmp2.resolvedReferralTrialOfferIds);
      let tmp52 = !result3;
      if (result3) {
        tmp52 = props.referralTrialOfferId !== tmp2.referralTrialOfferId;
      }
      if (!tmp52) {
        tmp52 = props.isPremiumTier2User !== tmp2.isPremiumTier2User;
      }
      const findMessageIndex = tmp52;
      closure_18 = tmp53;
      let closure_20 = tmp55;
      let closure_21 = tmp56;
      let closure_22 = tmp57;
      let closure_23 = tmp58;
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
      closure_24 = tmp62;
      let tmp47Result = tmp47(outer1_2[33]);
      const result4 = tmp47Result.areArraysShallowEqual(props.fetchingSkuIds, tmp2.fetchingSkuIds);
      closure_25 = !result4;
      let closure_26 = tmp65;
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
                                                                                                                                      const obj8 = first(outer1_2[11]);
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
          let closure_28 = props.channelThreadsVersion !== tmp2.channelThreadsVersion;
          let closure_29 = props.rsvpVersion !== tmp2.rsvpVersion;
          let closure_30 = props.repliedIds !== tmp2.repliedIds;
          let closure_31 = props.hasLoadedExperiments !== tmp2.hasLoadedExperiments;
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
            tmp47Result = tmp47(outer1_2[13]);
            let prop = props.voiceStateChannelIdSummaryForGuild;
            if (prop == null) {
              prop = null;
            }
            let prop1 = tmp2.voiceStateChannelIdSummaryForGuild;
            if (prop1 == null) {
              prop1 = null;
            }
            voiceChannelIdChangedAuthorIds = tmp47Result.getVoiceChannelIdChangedAuthorIds(prop, prop1);
          }
          messages = tmp2.messages;
          const item = messages.forEach((author) => {
            let code2;
            let first;
            let type;
            if (closure_21) {
              let addResult = null;
              if (null != voiceChannelIdChangedAuthorIds) {
                if (null != author.author) {
                  if (obj.has(author.author.id)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                }
              }
              obj = voiceChannelIdChangedAuthorIds;
            }
            if (closure_20) {
              const activity = author.activity;
              type = undefined;
              if (activity != null) {
                type = activity.type;
              }
              if (type === chatUpdatesQueue.STREAM_REQUEST) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_31) {
              if (author.type === outer2_15.USER_JOIN) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_30) {
              if (author.type === outer2_15.REPLY) {
                const messageReference = author.messageReference;
                if (null != messageReference) {
                  const repliedIds = props.repliedIds;
                  if (repliedIds.has(messageReference.message_id)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                }
              }
            }
            if (closure_28) {
              if (author.hasFlag(callback3.HAS_THREAD)) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_29) {
              if (author.codedLinks.length > 0) {
                addResult = set;
                addResult = set.add(author.id);
              }
            }
            if (closure_26) {
              if (author.codedLinks.length > 0) {
                const codedLinks = author.codedLinks;
                addResult = codedLinks;
                const iter = codedLinks[Symbol.iterator]();
                addResult = null;
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let code = nextResult.code;
                  let tmp13 = props;
                  let tmp14 = outer2_2;
                  if (nextResult.type === props(outer2_2[34]).CodedLinkType.INVITE) {
                    addResult = props;
                    let invites = props.invites;
                    addResult = code;
                    addResult = invites.get(code);
                    if (null != addResult) {
                      let tmp15 = addResult;
                      if (null != addResult.channel) {
                        let tmp16 = props;
                        let tmp17 = outer2_2;
                        let obj2 = props(outer2_2[35]);
                        let tmp18 = addResult;
                        if (obj2.isVoiceChannelInvite(addResult)) {
                          let tmp19 = addResult;
                          let id = addResult.channel.id;
                          let tmp20 = props;
                          let tmp21 = props;
                          let tmp22 = props;
                          if (props.voiceInviteDataByChannelId[id] !== props.voiceInviteDataByChannelId[id]) {
                            let tmp23 = set;
                            let addResult1 = set.add(author.id);
                            let tmp25 = iter;
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
            if (!addSku) {
              if (closure_8) {
                if (null != props.guildId) {
                  author = author.author;
                  id = undefined;
                  if (author != null) {
                    id = author.id;
                  }
                  if (null != id) {
                    addResult = props;
                    addResult = props;
                    addResult = props;
                    if (props.messageAuthorMembers[author.author.id] !== props.messageAuthorMembers[author.author.id]) {
                      addResult = set;
                      addResult = set.add(author.id);
                    }
                  }
                }
              }
              if (generateOldThreadCutoff) {
                if (author.author.id === props.currentUserId) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_2) {
                if (props.interactionStates[author.id] !== props.interactionStates[author.id]) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_5) {
                const interactionComponentStates = props.interactionComponentStates;
                const interactionComponentStates2 = props.interactionComponentStates;
                const value = interactionComponentStates.get(author.id);
                if (value !== interactionComponentStates2.get(author.id)) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_6) {
                if (0 !== author.components.length) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (getUncachedChannelPermissions) {
                if (props.channelPolls[author.id] !== props.channelPolls[author.id]) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (getMessageJumpData) {
                const messageReference2 = author.messageReference;
                let message_id;
                if (messageReference2 != null) {
                  message_id = messageReference2.message_id;
                }
                if (null != message_id) {
                  if (props.messageReferencePolls[message_id] !== props.messageReferencePolls[message_id]) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                }
              }
              if (closure_13) {
                const unloadedContentEntryMessageIds = props.unloadedContentEntryMessageIds;
                const unloadedContentEntryMessageIds2 = props.unloadedContentEntryMessageIds;
                const hasItem = unloadedContentEntryMessageIds.has(author.id);
                if (hasItem !== unloadedContentEntryMessageIds2.has(author.id)) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              const channel = props.channel;
              if (channel.isForumPost()) {
                if (closure_11) {
                  if (author.id === obj3.castChannelIdAsMessageId(props.channelId)) {
                    addResult = set;
                    addResult = set.add(author.id);
                  }
                  obj3 = first(outer2_2[20]);
                }
              }
              if (closure_15) {
                if (null != author.activityInstance) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              let tmp71 = closure_16;
              if (closure_16) {
                const activity2 = author.activity;
                let party_id;
                if (activity2 != null) {
                  party_id = activity2.party_id;
                }
                tmp71 = null != party_id;
              }
              if (tmp71) {
                set.add(author.id);
              }
              if (closure_23) {
                if (null != author.application) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_24) {
                const author2 = author.author;
                let id1;
                if (author2 != null) {
                  id1 = author2.id;
                }
                if (id1 === props.currentUserId) {
                  addResult = set;
                  addResult = set.add(author.id);
                }
              }
              if (closure_25) {
                if (author.codedLinks.length > 0) {
                  const codedLinks2 = author.codedLinks;
                  addResult = codedLinks2;
                  const iter2 = codedLinks2[Symbol.iterator]();
                  addResult = null;
                  while (iter2 !== undefined) {
                    ({ type, code: code2 } = nextResult1);
                    let tmp88 = props;
                    let tmp89 = outer2_2;
                    let tmp87 = type;
                    if (type === props(outer2_2[34]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                      let tmp93 = code2;
                      let tmp94 = first1;
                      first = first1(code2.split("-"), 1)[0];
                      let fetchingSkuIds = props.fetchingSkuIds;
                      let tmp96 = first;
                      let tmp97 = props;
                      let tmp98 = props;
                      if (fetchingSkuIds.includes(first)) {
                        addResult = set;
                        addResult = set.add(author.id);
                        addResult = iter2;
                        iter2.return();
                      } else {
                        let tmp99 = ref4;
                        addResult = first;
                        addResult = ref4.get(tmp96);
                        if (null != addResult) {
                          addResult = tmp97;
                          let invalidApplicationIds = tmp98.invalidApplicationIds;
                          if (invalidApplicationIds.includes(addResult.applicationId)) {
                            addResult = set;
                            addResult = set.add(author.id);
                            addResult = iter2;
                            iter2.return();
                          }
                        }
                      }
                    } else {
                      let tmp90 = type;
                      let tmp91 = props;
                      let tmp92 = outer2_2;
                    }
                    continue;
                  }
                  nextResult1 = iter2.next();
                }
              }
              addResult = null;
              if (null != author.author) {
                addResult = first;
                addResult = outer2_2;
                addResult = props;
                addResult = props;
                addResult = props;
                if (!obj7.messageAuthorActivitiesChanged(author, props, props)) {
                  addResult = first;
                  addResult = outer2_2;
                  addResult = props;
                  if (!obj4.codedLinksChanged(author, addResult, props)) {
                    addResult = closure_1;
                    if (!closure_1) {
                      addResult = first;
                      addResult = outer2_2;
                      addResult = props;
                      if (!obj6.mediaPostPreviewEmbedsChanged(author, addResult, props)) {
                        addResult = cacheStoreLoaded2;
                        if (cacheStoreLoaded2) {
                          addResult = author.embeds.length > 0;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = outer2_15;
                        addResult = author.type === outer2_15.THREAD_STARTER_MESSAGE;
                        if (addResult) {
                          addResult = props;
                          addResult = addResult.threadStartingReferenceMessage !== props.threadStartingReferenceMessage;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = closure_14;
                        if (closure_14) {
                          addResult = null != author.applicationId;
                        }
                        if (addResult) {
                          const invalidApplicationIds2 = addResult.invalidApplicationIds;
                          addResult = invalidApplicationIds2.includes(author.applicationId);
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = closure_17;
                        if (closure_17) {
                          const referralTrialOfferId = author.referralTrialOfferId;
                          addResult = null != referralTrialOfferId;
                          if (addResult) {
                            addResult = props;
                            const resolvedReferralTrialOfferIds = props.resolvedReferralTrialOfferIds;
                            addResult = resolvedReferralTrialOfferIds.includes(referralTrialOfferId);
                          }
                          if (addResult) {
                            addResult = set;
                            addResult = set.add(author.id);
                          }
                        }
                        addResult = closure_18;
                        if (closure_18) {
                          addResult = author.codedLinks.length > 0;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                        addResult = closure_19;
                        if (!closure_19) {
                          addResult = closure_22;
                        }
                        if (addResult) {
                          const activity3 = author.activity;
                          addResult = undefined;
                          if (activity3 != null) {
                            addResult = activity3.party_id;
                          }
                          addResult = null != addResult;
                        }
                        if (addResult) {
                          addResult = set;
                          addResult = set.add(author.id);
                        }
                      }
                      obj6 = first(outer2_2[36]);
                    } else {
                      addResult = first;
                      addResult = outer2_2;
                      addResult = props;
                      const obj5 = first(outer2_2[36]);
                    }
                  }
                  obj4 = first(outer2_2[36]);
                }
                addResult = set;
                addResult = set.add(author.id);
                obj7 = first(outer2_2[36]);
              }
            }
            addResult = set.add(author.id);
          });
          const obj1 = { forceRender: null, forceReload: null, updateMessageIds: null, scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, ignoreEmbedDescriptionCache: null, messagesNewlyLoaded: null, shouldInitialScroll: null, minimizeScrolling: null, isAnimated: null, hasJumpedToOriginalPost: null };
          obj1[0] = tmp29;
          if (!tmp28) {
            tmp28 = recordMessageRenderResult1;
          }
          obj1[1] = tmp28;
          obj1[2] = set;
          obj1[3] = scrollToMessageId;
          obj1[4] = jumpTargetId;
          obj1[5] = jumpType;
          obj1[6] = focusTargetId;
          obj1[7] = cacheStoreLoaded2;
          obj1[8] = tmp21;
          obj1[9] = shouldInitialScroll;
          obj1[10] = minimizeScrolling;
          obj1[11] = props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
          obj1[12] = tmp6;
          cacheStoreLoaded2(obj1);
          callback2(false);
          ({ channelId: channelId3, messages: messages3 } = tmp2);
          const obj13 = first(outer1_2[11]);
          const mapped1 = messages3.map((id) => id.id);
          let hasFetched2 = messages3.hasFetched;
          if (!hasFetched2) {
            recordMessageRenderResult1 = messages3.ready && !messages3.cached;
            hasFetched2 = recordMessageRenderResult1;
          }
          recordMessageRenderResult1 = obj13;
          recordMessageRenderResult1 = channelId3;
          recordMessageRenderResult1 = mapped1;
          recordMessageRenderResult1 = hasFetched2;
          recordMessageRenderResult1 = obj13.recordMessageRender(channelId3, mapped1, hasFetched2, messages3.hasMoreAfter);
          let tmp92 = props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
          let tmp93 = cacheStoreLoaded2;
        }
      }
      let obj6 = messages(outer1_2[33]);
      const messages2 = tmp2.messages;
      const arr = first(outer1_2[19]);
      const found = arr.find(messages2.toArray().reverse(), (type) => type.type === tmp46.CALL);
      if (null != found) {
        set.add(found.id);
      }
      const toArrayResult = messages2.toArray();
    }
  });
  let obj3 = { children: null };
  const items4 = [
    findMessageIndex(first(11205), {
      ref: ref5,
      style: messages.style,
      inverted: true,
      channelId: messages.channelId,
      alwaysRespectKeyboard: messages.alwaysRespectKeyboard,
      onChatScrollPosition: handleScrollPosition,
      onTapImage: first2.handleTapImage,
      onTapChannel: first2.handleTapChannel,
      onLongPressChannel: first2.handleLongPressChannel,
      onTapAttachmentLink: first2.handleTapAttachmentLink,
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
      onLongPressSticker: function handleLongPressSticker(closure_0) {
        const messageId = messages(outer1_2[38]).getNativeSyntheticEventData(closure_0).messageId;
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
        callback4({ forceRender: true, updateMessageIds: set });
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
      onPressKey: messages.onPressKey,
      animateEmoji: messages.animateEmoji,
      onTapGiftCodeEmbed: first2.handleTapGiftCodeEmbed,
      onTapCancelUploadItem: first2.handleTapCancelUploadItem,
      onTapMessageReply: first2.handleTapReply,
      onTapSummary: first2.handleTapSummary,
      onTapSummaryJump: first2.handleTapSummaryJump,
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
        const apply = _handleTapNavBar.apply;
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
      onTapShowAltText: handleTapShowAltText,
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
      children: messages.children,
      HACK_fixModalInteraction: messages.HACK_fixModalInteraction,
      onTapTableView: function handleTapTableView() {
        let isIOSResult = messages(outer1_2[39]).isIOS();
        if (isIOSResult) {
          isIOSResult = messages.keyboardType !== messages(outer1_2[40]).KeyboardTypes.SYSTEM;
        }
        if (isIOSResult) {
          const current = messages.chatInputRef.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      },
      onFirstLayout: function handleFirstLayout(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: messages(outer1_2[41]).QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
      },
      onMediaPlayFinishedAnalytics: handleMediaPlayFinishedAnalytics,
      onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({ firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: messages(outer1_2[41]).QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
      }
    }),
    findMessageIndex(_ChatTTITracker.ChatTTITracker, { messages: messages.messages })
  ];
  obj3[0] = items4;
  return callback(closure_18, obj3);
});
forwardRefResult.displayName = "Messages";
const memoResult = importAllResult.memo(forwardRefResult, (interactionStates, interactionStates2) => shallowEqual(interactionStates, interactionStates2, ["interactionStates"], { shouldWarnLargeObjects: false }) && shallowEqual(interactionStates.interactionStates, interactionStates2.interactionStates));
let result = require("noop").fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default memoResult;