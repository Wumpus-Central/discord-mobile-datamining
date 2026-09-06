// discord_app/modules/messages/native/MessagesRenderer.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import discord_common_shallowEqualDefault from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import Client from "../../../flow/Client.tsx";
import CodedLink from "../../coded_links/CodedLink.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import InviteTypeUtils from "../../instant_invite/InviteTypeUtils.tsx";
import messages_MessagesUtils from "MessagesUtils.tsx";
import computeScrollData from "../../chat/native/computeScrollData.tsx";
import NativeChatUtilsDefault from "../../chat/native/NativeChatUtils.tsx";
import ChatChangesetUpdateTracker from "../../chat/native/ChatChangesetUpdateTracker.tsx";
import QuestActionCreators from "../../quests/QuestActionCreators.tsx";
import MessageImpressionAnalyticsHelpers from "MessageImpressionAnalyticsHelpers.tsx";
import openMediaModalOverlayAltTextSheetDefault from "../../media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx";
import MessagesHandlers from "MessagesHandlers.tsx";
import MessageDataSnowflakeUtils from "snowflake/MessageDataSnowflakeUtils.tsx";
import MessagesUtilsDefault from "../../../utils/native/MessagesUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

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
let closure_6 = fn(9485).updateShouldShowJumpToPresentButton;
let closure_7 = fn(2021).getUserCommunicationDisabledVersion;
const Changeset = fn(7933).Changeset;
const Constants = fn(1074);
({
  ActivityActionTypes: closure_12,
  MAX_MESSAGES_PER_CHANNEL: map1,
  MessageFlags: closure_14,
  MessageTypes: closure_15,
  Permissions: closure_16,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const forwardRefResult = noop.forwardRef((messages, arg1) => {
  _require = messages;
  function handleVisibleMessagesChange(arg0) {
    ({
      firstVisibleMessageRowIndex,
      firstVisibleMessagePercentVisible,
      lastVisibleMessageRowIndex,
      lastVisibleMessagePercentVisible,
      source,
    } = arg0);
    let obj = {
      firstVisibleMessageRowIndex,
      lastVisibleMessageRowIndex,
      firstVisibleMessagePercentVisible,
      lastVisibleMessagePercentVisible,
      chatManager: first,
      channelId: messages.channelId,
    };
    const visibleMessages = obj.getVisibleMessages(obj);
    if (visibleMessages.length > 0) {
      let tmpResult = QuestActionCreators;
      obj = { visibleMessages, source };
      const result = tmpResult.questsVisibleMobileMessagesChanged(obj);
      tmpResult = MessageImpressionAnalyticsHelpers;
      const result1 = tmpResult.handleAnnouncementMessageViewTracking(
        visibleMessages,
        messages.shouldTrackAnnouncementMessageViews,
        messages.guildId,
        messages.channel,
      );
      const tmpResult1 = MessageImpressionAnalyticsHelpers;
      const result2 = tmpResult1.handleOfficialMessageViewTracking(
        visibleMessages,
        messages.shouldTrackOfficialMessageViews,
        messages.guildId,
        messages.channel,
      );
      const tmpResult2 = MessageImpressionAnalyticsHelpers;
      const result3 = tmpResult2.handleRichPresenceInviteEmbedViewTracking(
        visibleMessages,
        messages.shouldTrackRichPresenceInviteEmbedViews,
        messages.guildId,
        messages.channel,
      );
      const tmpResult3 = MessageImpressionAnalyticsHelpers;
      const result4 = tmpResult3.handleVoiceInviteEmbedViewTracking(
        visibleMessages,
        messages.shouldTrackVoiceInviteEmbedViews,
        messages.guildId,
        messages.channel,
      );
    }
  }
  function findMessageIndex(ChatTTITracker) {
    if (null != ChatTTITracker) {
      return computeScrollData.findMessageRowIndex(first.getPreviousRows(), ChatTTITracker);
    }
  }
  closure_28 = async function _handleTapNavBar() {
    if (hasJumpedToOriginalPost === 2) {
      hasJumpedToOriginalPost = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            ({ channel, useReducedMotion } = messages);
            closure_128_0 = useReducedMotion;
            if (channel.isForumPost()) {
              if (!ref2.current) {
                let obj1 = v1(hasJumpedToOriginalPost[20]);
                if (null == callback2(obj1.castChannelIdAsMessageId(channel.id))) {
                  let tmp11Result = tmp11(tmp12[26]);
                  obj1 = { channelId: channel.id, jump: null, limit: null };
                  const obj2 = { messageId: channel.id, flash: false };
                  obj1.jump = obj2;
                  obj1.limit = limit;
                  v1 = 1;
                  hasJumpedToOriginalPost = 1;
                  const obj3 = { value: tmp11Result.fetchMessages(obj1), done: false };
                  return obj3;
                } else {
                  tmp11Result = tmp11(tmp12[20]);
                  const tmp26 = findMessageIndex(tmp11Result.castChannelIdAsMessageId(channel.id));
                  if (null == tmp26) {
                    hasJumpedToOriginalPost = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    const obj4 = { animated: !useReducedMotion };
                    tmp11(tmp12[17]).scrollTo(ref.current, tmp26, obj4);
                    const _setTimeout2 = setTimeout;
                    const timerId = setTimeout(() => closure_2_25(!closure_1_0), 10 * tmp26);
                    const tmp11Result1 = tmp11(tmp12[17]);
                  }
                }
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
        obj = { value, done: true };
        return obj;
      } catch (tmp19) {
        hasJumpedToOriginalPost = tmp;
        throw tmp19;
      }
    }
  };
  function scrollToBottom() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    closure_1_26({ eventTimestamp: Date.now(), isAtBottom: true });
    const obj = { eventTimestamp: Date.now(), isAtBottom: true };
    if (flag) {
      flag = !messages.useReducedMotion;
    }
    NativeChatUtilsDefault.scrollToBottom(ref5.current, flag);
  }
  function jumpToPresent() {
    ({ messages, channel } = closure_0);
    if (null == messages.jumpReturnTargetId) {
      if (!messages.loadingMore) {
        if (messages.hasMoreAfter) {
          let obj = { channelId: channel.id, limit, jump: { present: true } };
          messages = MessageActionCreatorsDefault.fetchMessages(obj);
        } else {
          obj = { eventTimestamp: null, isAtBottom: true };
          const _Date = Date;
          obj.eventTimestamp = Date.now();
          closure_1_26(obj);
          NativeChatUtilsDefault.scrollToBottom(ref5.current, !tmp.useReducedMotion);
        }
      }
    } else {
      obj = MessageActionCreatorsDefault;
      const obj1 = { channelId: channel.id, messageId: jumpReturnTargetId, flash: true };
      obj.jumpToMessage(obj1);
    }
  }
  function scrollToNewMessages() {
    let id = ReadStateStore.ackMessageId(messages.channel.id);
    const obj = { channelId: messages.channel.id, messageId: null, offset: 1, context: "Mark As Read" };
    if (id == null) {
      id = messages.channel.id;
    }
    obj.messageId = id;
    obj.jumpToMessage(obj);
  }
  function getChatRef() {
    return ref5;
  }
  function clearRowsState(reason) {
    ref.current = false;
    closure_1_18.current = false;
    handleTapShowAltText.current = false;
    closure_1_19.current = false;
    handleMediaPlayFinishedAnalytics.current = false;
    isLoadingAtTop.current = false;
    closure_1_23.current = false;
    ref1.current = false;
    ref2.current = [];
    ref4.current = false;
    ref3.current = null;
    const size = chatUpdatesQueue.blockers.size;
    const length2 = first.getPreviousRows().length;
    first.clear();
    chatUpdatesQueue.clear();
    let obj = NativeChatUtilsDefault;
    obj.clearRows(ref5.current);
    obj = {
      category: "chat.queue.clear",
      message: "clearRows (" + reason + "): queue=" + length + " blockers=" + size + " jsRows=" + length2,
      data: null,
    };
    obj = { reason, changesetUpdateId: null, queueLength: null, blockers: null, chatManagerRows: null };
    const obj2 = SentryUtilsDefault;
    obj.changesetUpdateId = ChatChangesetUpdateTracker.getChangesetIdForChat(ref5.current);
    obj.queueLength = chatUpdatesQueue.queue.length;
    obj.blockers = size;
    obj.chatManagerRows = length2;
    obj.data = obj;
    obj2.addBreadcrumb(obj);
  }
  function clearRows() {
    clearRowsState("channel-change");
    closure_6(messages.channelId, messages.screenIndex, false);
  }
  let first = first1(
    noop.useState(() => new first(hasJumpedToOriginalPost[15])()),
    1,
  )[0];
  [dependencyMap, asyncGeneratorStep] = first1(noop.useState(false), 2);
  let tmp3 = first1(noop.useState(false), 2);
  first1 = tmp3[0];
  noop = tmp3[1];
  const ref = noop.useRef(false);
  const ref1 = noop.useRef(false);
  let ref2 = noop.useRef([]);
  const ref3 = noop.useRef(null);
  const ref4 = noop.useRef(false);
  const ref5 = noop.useRef(null);
  const callback = noop.useCallback((rows) => {
    ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
    const tmp = isLoadingAtTop(rows.rows, ref1.current);
    NativeChatUtilsDefault.updateRows(ref5.current, {
      rows,
      isLoadingAtTop: tmp,
      scrollData,
      HACK_iOSForceAnimations,
      forceReload,
      isAnimated,
    });
    ref1.current = hasMoreMessagesAfter;
  }, []);
  let obj = require("MessagesHooks");
  const chatUpdatesQueue = obj.useChatUpdatesQueue(ref5, callback);
  let items = [,];
  ({ canChat: arr[0], channel: arr[1] } = messages);
  const items1 = [messages.messages];
  const callback1 = noop.useCallback(() => {
    let canChat = messages.canChat;
    if (canChat) {
      canChat = PermissionStore.can(constants4.ADD_REACTIONS, messages.channel);
    }
    if (!canChat) {
      const channel = messages.channel;
      canChat = channel.isPrivate();
    }
    return canChat;
  }, items);
  const callback2 = noop.useCallback((arg0) => {
    messages = arg0;
    messages = messages.messages;
    return _modDef12.find(messages.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
  }, items1);
  const items2 = [, ,];
  ({ channel: arr3[0], channelId: arr3[1] } = messages);
  items2[2] = messages.messages.jumpTargetId;
  let callback3 = noop.useCallback((arg0) => {
    const channel = messages.channel;
    let isForumPostResult = channel.isForumPost();
    if (isForumPostResult) {
      isForumPostResult =
        SnowflakeUtilsDefault.castChannelIdAsMessageId(messages.channelId) === messages.messages.jumpTargetId;
    }
    if (isForumPostResult) {
      isForumPostResult = !arg0;
    }
    return isForumPostResult;
  }, items2);
  obj = {
    channelId: messages.channelId,
    jumpTargetId: messages.messages.jumpTargetId,
    oldestUnreadMessageId: messages.oldestUnreadMessageId,
    shouldJumpToOriginalPost: callback3,
  };
  let tmp2 = first1(noop.useState(false), 2);
  ({ startOrCancelLatestMessagesLoad: closure_15, channelLatestMessageLoadingStatsManager } = first(11540)(obj));
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
        const obj = { channelId: messages.channelId, before: null, limit: null };
        const firstResult = messages.first();
        let id;
        if (firstResult != null) {
          id = firstResult.id;
        }
        obj.before = id;
        obj.limit = limit;
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
        const obj = { channelId: messages.channelId, after: null, limit: null };
        const lastResult = messages.last();
        let id;
        if (lastResult != null) {
          id = lastResult.id;
        }
        obj.after = id;
        obj.limit = limit;
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
    visibleMessagesWindowHandler: messages.visibleMessagesWindowHandler,
  };
  const tmp16 = first(11540)(obj);
  ({
    hasHandledScrollRef: closure_18,
    isAtBottomRef: closure_19,
    isNearBottomRef: handleTapShowAltText,
    isNearTopRef: handleMediaPlayFinishedAnalytics,
    deceleratingRef: isLoadingAtTop,
    draggingRef: closure_23,
    firstIgnoredScrollEventTimestampRef: closure_24,
    scrollToTop: closure_25,
    handleScrollCallbacks: closure_26,
    loadMoreBefore,
    loadMoreAfter,
    scrollToTopMessage,
    updateNativeRows,
    handleScrollPosition,
  } = first(11542)(obj));
  const ref6 = noop.useRef(null);
  ref6.current = {
    getMessage: callback2,
    chatInputRef: messages.chatInputRef,
    selectedChannelId: messages.channelId,
    revealedMessageId: messages.messages.revealedMessageId,
    uploads: messages.uploads,
    paymentsBlocked: messages.paymentsBlocked,
    loadMoreBefore,
    loadMoreAfter,
  };
  const first2 = first1(
    noop.useState(() => new MessagesHandlers.MessagesHandlers(() => ref.current)),
    1,
  )[0];
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    scrollToBottom,
    jumpToPresent,
    scrollToNewMessages,
    getChatRef,
  }));
  let tmp17 = first(11542)(obj);
  let obj1 = {
    chatManager: first,
    rowGenerator: first1(
      noop.useState(() => new first(hasJumpedToOriginalPost[16])()),
      1,
    )[0],
    animatingStickerMessageIdRef: ref3,
    canAddNewReactions: callback1,
    channel: messages.channel,
    messages: messages.messages,
    isMessagesReady: messages.isMessagesReady,
    uploads: messages.uploads,
    roleStyle: messages.roleStyle,
    oldestUnreadMessageId: messages.oldestUnreadMessageId,
    replyingMessageId: messages.replyingMessageId,
    inlineAttachmentMedia: messages.inlineAttachmentMedia,
    inlineEmbedMedia: messages.inlineEmbedMedia,
    renderEmbeds: messages.renderEmbeds,
    renderReactions: messages.renderReactions,
    animateEmoji: messages.animateEmoji,
    gifAutoPlay: messages.gifAutoPlay,
    timestampHourCycle: messages.timestampHourCycle,
    currentUserId: messages.currentUserId,
    renderCommunicationDisabled: messages.renderCommunicationDisabled,
    selectedSummary: messages.selectedSummary,
    enableSwipeActions: messages.enableSwipeActions,
    isResourceChannel: messages.isResourceChannel,
    shouldObscureSpoiler: messages.shouldObscureSpoiler,
    shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents,
    unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds,
    containerWidth: messages.containerWidth,
    chatRef: ref5,
    loadedRef: ref4,
    animatedRef: ref,
    hasMoreMessagesAfterForLastUpdateRef: ref1,
    updateNativeRows,
    isLoadingAtTop,
    channelLatestMessageLoadingStatsManager,
    channelId: messages.channelId,
    isMessagesCached: messages.isMessagesCached,
    chatUpdatesQueue,
    shouldJumpToOriginalPost: callback3,
    findMessageIndex,
    scrollToTopMessage,
    useReducedMotion: messages.useReducedMotion,
  };
  ({ updateRows: closure_33, scrollToMessageId: closure_34 } = first(11950)({
    chatManager: first,
    rowGenerator: first1(
      noop.useState(() => new first(hasJumpedToOriginalPost[16])()),
      1,
    )[0],
    animatingStickerMessageIdRef: ref3,
    canAddNewReactions: callback1,
    channel: messages.channel,
    messages: messages.messages,
    isMessagesReady: messages.isMessagesReady,
    uploads: messages.uploads,
    roleStyle: messages.roleStyle,
    oldestUnreadMessageId: messages.oldestUnreadMessageId,
    replyingMessageId: messages.replyingMessageId,
    inlineAttachmentMedia: messages.inlineAttachmentMedia,
    inlineEmbedMedia: messages.inlineEmbedMedia,
    renderEmbeds: messages.renderEmbeds,
    renderReactions: messages.renderReactions,
    animateEmoji: messages.animateEmoji,
    gifAutoPlay: messages.gifAutoPlay,
    timestampHourCycle: messages.timestampHourCycle,
    currentUserId: messages.currentUserId,
    renderCommunicationDisabled: messages.renderCommunicationDisabled,
    selectedSummary: messages.selectedSummary,
    enableSwipeActions: messages.enableSwipeActions,
    isResourceChannel: messages.isResourceChannel,
    shouldObscureSpoiler: messages.shouldObscureSpoiler,
    shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents,
    unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds,
    containerWidth: messages.containerWidth,
    chatRef: ref5,
    loadedRef: ref4,
    animatedRef: ref,
    hasMoreMessagesAfterForLastUpdateRef: ref1,
    updateNativeRows,
    isLoadingAtTop,
    channelLatestMessageLoadingStatsManager,
    channelId: messages.channelId,
    isMessagesCached: messages.isMessagesCached,
    chatUpdatesQueue,
    shouldJumpToOriginalPost: callback3,
    findMessageIndex,
    scrollToTopMessage,
    useReducedMotion: messages.useReducedMotion,
  }));
  const effect = noop.useEffect(() => {
    messages = messages.messages;
    const oldestUnreadMessageId = messages.oldestUnreadMessageId;
    if (messages.isMessagesReady) {
      let obj = {
        scrollToMessageId: null,
        jumpTargetId: null,
        jumpType: null,
        focusTargetId: null,
        hasJumpedToOriginalPost: null,
      };
      ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
      obj.jumpType = messages(hasJumpedToOriginalPost[29]).JumpType.INSTANT;
      obj.focusTargetId = messages.focusTargetId;
      obj.hasJumpedToOriginalPost = hasJumpedToOriginalPost;
      closure_33(obj);
      if (null != messages.jumpTargetId) {
        obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, hasJumpedToOriginalPost: null };
        ({ jumpTargetId: obj3.scrollToMessageId, jumpTargetId: obj3.jumpTargetId } = messages);
        obj.jumpType = tmp5(hasJumpedToOriginalPost[29]).JumpType.INSTANT;
        obj.hasJumpedToOriginalPost = hasJumpedToOriginalPost;
        closure_34(obj);
      } else if (null != oldestUnreadMessageId) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(
          () =>
            closure_2_34({
              scrollToMessageId: oldestUnreadMessageId,
              jumpTargetId: messages.jumpTargetId,
              jumpType: Client.JumpType.INSTANT,
              hasJumpedToOriginalPost,
            }),
          50,
        );
      }
      tmp5 = messages;
    } else {
      obj = { hasJumpedToOriginalPost };
      closure_33(obj);
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
  const items3 = [,];
  ({ channelId: arr4[0], screenIndex: arr4[1] } = messages);
  const effect1 = noop.useEffect(
    () => () => {
      ref(messages.channelId, messages.screenIndex, false);
    },
    items3,
  );
  ref2 = noop.useRef({ props: messages, shouldForceRender: first1 });
  const layoutEffect = noop.useLayoutEffect(() => {
    const props = ref2.current.props;
    let obj = { props, shouldForceRender };
    const tmp2 = props;
    ref2.current = obj;
    if (null != props.currentUserId) {
      const messages4 = tmp2.messages;
      const messages5 = props.messages;
      if (props.channelId !== tmp2.channelId) {
        closure_3(false);
      }
      let tmp6 = !tmp106;
      if (props.channelId === tmp2.channelId) {
        tmp6 = closure_2;
      }
      const channelId = tmp2.channelId;
      obj = {
        clearRows,
        startOrCancelChannelLatestMessagesLoad,
        hasJumpedToOriginalPost: tmp6,
        firstIgnoredScrollEventTimestampRef,
      };
      if (props.channelId !== channelId) {
        obj.clearRows();
        const result = first(hasJumpedToOriginalPost[14]).clearChannelDimensions(channelId);
        const result1 = obj.startOrCancelChannelLatestMessagesLoad(obj.hasJumpedToOriginalPost);
        obj.firstIgnoredScrollEventTimestampRef.current = undefined;
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
      obj = { isAtBottom: ref.current, hasPreviousMessages: null != previousMessages.getPreviousMessages() };
      const tmp24Result = first(hasJumpedToOriginalPost[32])(tmp2, obj, props);
      ({ jumpTargetId, focusTargetId } = tmp24Result);
      let tmp28 = props.theme !== tmp2.theme;
      ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp24Result);
      if (!tmp28) {
        tmp28 = props.saturation !== tmp2.saturation;
      }
      let tmp29 =
        props.theme !== tmp2.theme ||
        props.saturation !== tmp2.saturation ||
        props.inlineAttachmentMedia !== tmp2.inlineAttachmentMedia ||
        props.inlineEmbedMedia !== tmp2.inlineEmbedMedia ||
        props.renderEmbeds !== tmp2.renderEmbeds ||
        props.renderReactions !== tmp2.renderReactions ||
        props.animateEmoji !== tmp2.animateEmoji ||
        props.animateStickers !== tmp2.animateStickers ||
        props.gifAutoPlay !== tmp2.gifAutoPlay ||
        props.timestampHourCycle !== tmp2.timestampHourCycle ||
        props.containerWidth !== tmp2.containerWidth ||
        props.guildSystemChannelFlags !== tmp2.guildSystemChannelFlags ||
        props.userSettingsLocale !== tmp2.userSettingsLocale ||
        props.roleStyle !== tmp2.roleStyle ||
        props.officialMessageStyle !== tmp2.officialMessageStyle ||
        props.canSendMessages !== tmp2.canSendMessages ||
        props.showPushFeedback !== tmp2.showPushFeedback ||
        props.selectedSummary !== tmp2.selectedSummary ||
        props.shouldObscureSpoiler !== tmp2.shouldObscureSpoiler ||
        props.explicitMediaFalsePositiveInfo !== tmp2.explicitMediaFalsePositiveInfo ||
        props.familyCenterPendingConnection !== tmp2.familyCenterPendingConnection ||
        props.isStaff !== tmp2.isStaff ||
        props.isAgeVerified !== tmp2.isAgeVerified;
      if (!tmp29) {
        tmp29 = tmp !== tmp3 && tmp3;
        const tmp30 = tmp !== tmp3 && tmp3;
      }
      if (!tmp29) {
        tmp29 = props.displayNameStylesEnabled !== tmp2.displayNameStylesEnabled;
      }
      previousMessages = tmp31;
      const tmp34 = first(hasJumpedToOriginalPost[33])(props.interactionStates, tmp2.interactionStates);
      closure_2 = !tmp34;
      closure_3 = tmp35;
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
      const tmp46 =
        props.activityInstanceIds !== tmp2.activityInstanceIds ||
        props.activityParticipants !== tmp2.activityParticipants ||
        props.applicationAssetFetchingIds !== tmp2.applicationAssetFetchingIds ||
        props.activityInstancePresenceDetails !== tmp2.activityInstancePresenceDetails ||
        props.messagesWithActivitiesLaunching !== tmp2.messagesWithActivitiesLaunching ||
        props.invalidApplicationIds !== tmp2.invalidApplicationIds;
      startOrCancelChannelLatestMessagesLoad = tmp46;
      tmp15 = closure_18;
      tmp17 = closure_25;
      tmp18 = closure_3;
      const tmp21 = tmp2.isMessagesReady && !tmp2.isMessagesCached && props.isMessagesCached;
      const tmp24 = first(hasJumpedToOriginalPost[32]);
      const result2 = messages(hasJumpedToOriginalPost[33]).areArraysShallowEqual(
        props.activityInviteMessageIds,
        tmp2.activityInviteMessageIds,
      );
      closure_16 = !result2;
      let obj5 = messages(hasJumpedToOriginalPost[33]);
      const result3 = messages(hasJumpedToOriginalPost[33]).areArraysShallowEqual(
        props.resolvedReferralTrialOfferIds,
        tmp2.resolvedReferralTrialOfferIds,
      );
      let tmp52 = !result3;
      if (result3) {
        tmp52 = props.referralTrialOfferId !== tmp2.referralTrialOfferId;
      }
      if (!tmp52) {
        tmp52 = props.isPremiumTier2User !== tmp2.isPremiumTier2User;
      }
      closure_17 = tmp52;
      closure_18 = tmp53;
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
      let tmp47Result = tmp47(hasJumpedToOriginalPost[33]);
      const result4 = tmp47Result.areArraysShallowEqual(props.fetchingSkuIds, tmp2.fetchingSkuIds);
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
                              if (
                                props.invalidAppDirectoryEmbedApplicationIds ===
                                tmp2.invalidAppDirectoryEmbedApplicationIds
                              ) {
                                if (
                                  props.appDirectoryEmbedApplicationFetchStates ===
                                  tmp2.appDirectoryEmbedApplicationFetchStates
                                ) {
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
                                                          if (
                                                            props.isSpamMessageRequest === tmp2.isSpamMessageRequest
                                                          ) {
                                                            if (
                                                              props.currentUserCommunicationDisabled ===
                                                              tmp2.currentUserCommunicationDisabled
                                                            ) {
                                                              if (
                                                                props.userSettingsLocale === tmp2.userSettingsLocale
                                                              ) {
                                                                if (props.selectedSummary === tmp2.selectedSummary) {
                                                                  if (
                                                                    props.showPushFeedback === tmp2.showPushFeedback
                                                                  ) {
                                                                    if (
                                                                      props.cacheStoreLoaded === tmp2.cacheStoreLoaded
                                                                    ) {
                                                                      if (!tmp55) {
                                                                        if (!tmp38) {
                                                                          if (!tmp39) {
                                                                            if (!tmp40) {
                                                                              if (
                                                                                props.forwardGuildsVersion ===
                                                                                tmp2.forwardGuildsVersion
                                                                              ) {
                                                                                if (!tmp41) {
                                                                                  if (tmp34) {
                                                                                    if (!tmp37) {
                                                                                      if (!tmp42) {
                                                                                        if (null == jumpTargetId) {
                                                                                          if (null == focusTargetId) {
                                                                                            if (
                                                                                              props.androidKeyboardHeight ===
                                                                                              tmp2.androidKeyboardHeight
                                                                                            ) {
                                                                                              if (
                                                                                                props.mediaPostPreviewEmbeds ===
                                                                                                tmp2.mediaPostPreviewEmbeds
                                                                                              ) {
                                                                                                if (
                                                                                                  props.shouldObscureSpoiler ===
                                                                                                  tmp2.shouldObscureSpoiler
                                                                                                ) {
                                                                                                  if (
                                                                                                    props.shouldDisableInteractiveComponents ===
                                                                                                    tmp2.shouldDisableInteractiveComponents
                                                                                                  ) {
                                                                                                    if (!tmp35) {
                                                                                                      if (!tmp36) {
                                                                                                        if (!tmp43) {
                                                                                                          if (
                                                                                                            props.threadStartingReferenceMessage ===
                                                                                                            tmp2.threadStartingReferenceMessage
                                                                                                          ) {
                                                                                                            if (
                                                                                                              !tmp44
                                                                                                            ) {
                                                                                                              if (
                                                                                                                result2
                                                                                                              ) {
                                                                                                                if (
                                                                                                                  !tmp52
                                                                                                                ) {
                                                                                                                  if (
                                                                                                                    !tmp53
                                                                                                                  ) {
                                                                                                                    if (
                                                                                                                      props.guildEmojis ===
                                                                                                                      tmp2.guildEmojis
                                                                                                                    ) {
                                                                                                                      if (
                                                                                                                        !tmp54
                                                                                                                      ) {
                                                                                                                        if (
                                                                                                                          !tmp57
                                                                                                                        ) {
                                                                                                                          if (
                                                                                                                            !tmp58
                                                                                                                          ) {
                                                                                                                            if (
                                                                                                                              props.displayNameStylesEnabled ===
                                                                                                                              tmp2.displayNameStylesEnabled
                                                                                                                            ) {
                                                                                                                              if (
                                                                                                                                !tmp62
                                                                                                                              ) {
                                                                                                                                if (
                                                                                                                                  !tmp56
                                                                                                                                ) {
                                                                                                                                  if (
                                                                                                                                    !tmp65
                                                                                                                                  ) {
                                                                                                                                    if (
                                                                                                                                      result4
                                                                                                                                    ) {
                                                                                                                                      ({
                                                                                                                                        channelId:
                                                                                                                                          channelId2,
                                                                                                                                        messages,
                                                                                                                                      } =
                                                                                                                                        tmp2);
                                                                                                                                      let obj8 =
                                                                                                                                        first(
                                                                                                                                          hasJumpedToOriginalPost[11],
                                                                                                                                        );
                                                                                                                                      const mapped =
                                                                                                                                        messages.map(
                                                                                                                                          (
                                                                                                                                            id,
                                                                                                                                          ) =>
                                                                                                                                            id.id,
                                                                                                                                        );
                                                                                                                                      let hasFetched =
                                                                                                                                        messages.hasFetched;
                                                                                                                                      if (
                                                                                                                                        !hasFetched
                                                                                                                                      ) {
                                                                                                                                        hasFetched =
                                                                                                                                          messages.ready &&
                                                                                                                                          !messages.cached;
                                                                                                                                        const tmp69 =
                                                                                                                                          messages.ready &&
                                                                                                                                          !messages.cached;
                                                                                                                                      }
                                                                                                                                      obj8.recordMessageRender(
                                                                                                                                        channelId2,
                                                                                                                                        mapped,
                                                                                                                                        hasFetched,
                                                                                                                                        messages.hasMoreAfter,
                                                                                                                                      );
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
            tmp47Result = tmp47(hasJumpedToOriginalPost[13]);
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
              type = undefined;
              if (activity != null) {
                type = activity.type;
              }
              if (type === constants.STREAM_REQUEST) {
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
                  const repliedIds = props.repliedIds;
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
                    let invites = props.invites;
                    value = invites.get(code);
                    let tmp194 = value;
                    if (null != value) {
                      if (null != tmp194.channel) {
                        let obj2 = InviteTypeUtils;
                        if (obj2.isVoiceChannelInvite(tmp194)) {
                          let id = tmp194.channel.id;
                          if (props.voiceInviteDataByChannelId[id] !== props.voiceInviteDataByChannelId[id]) {
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
                if (null != props.guildId) {
                  const messageAuthorMemberUserIds = messages_MessagesUtils.getMessageAuthorMemberUserIds(author);
                  if (
                    messageAuthorMemberUserIds.some(
                      (item) => props.messageAuthorMembers[item] !== messageAuthorMembers.messageAuthorMembers[item],
                    )
                  ) {
                    set.add(author.id);
                  }
                }
              }
              if (closure_9) {
                if (author.author.id === props.currentUserId) {
                  set.add(author.id);
                }
              }
              if (closure_2) {
                if (props.interactionStates[author.id] !== props.interactionStates[author.id]) {
                  set.add(author.id);
                }
              }
              if (closure_5) {
                const interactionComponentStates = props.interactionComponentStates;
                const interactionComponentStates2 = props.interactionComponentStates;
                value = interactionComponentStates.get(author.id);
                if (value !== interactionComponentStates2.get(author.id)) {
                  set.add(author.id);
                }
              }
              if (closure_6) {
                if (0 !== author.components.length) {
                  set.add(author.id);
                }
              }
              if (closure_3) {
                if (props.channelPolls[author.id] !== props.channelPolls[author.id]) {
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
                  if (props.messageReferencePolls[message_id] !== props.messageReferencePolls[message_id]) {
                    set.add(author.id);
                  }
                }
              }
              if (closure_13) {
                const unloadedContentEntryMessageIds = props.unloadedContentEntryMessageIds;
                const unloadedContentEntryMessageIds2 = props.unloadedContentEntryMessageIds;
                const hasItem = unloadedContentEntryMessageIds.has(author.id);
                if (hasItem !== unloadedContentEntryMessageIds2.has(author.id)) {
                  set.add(author.id);
                }
              }
              const channel = props.channel;
              if (channel.isForumPost()) {
                if (closure_11) {
                  if (author.id === obj5.castChannelIdAsMessageId(props.channelId)) {
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
                id = undefined;
                if (author != null) {
                  id = author.id;
                }
                if (id === props.currentUserId) {
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
                        let value1 = SKUStore.get(tmp97);
                        if (null != value1) {
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
                if (!obj9.messageAuthorActivitiesChanged(author, props, props)) {
                  if (!obj6.codedLinksChanged(author, props, props)) {
                    if (!closure_1) {
                      if (!obj8.mediaPostPreviewEmbedsChanged(author, props, props)) {
                        let tmp126 = cacheStoreLoaded2;
                        if (cacheStoreLoaded2) {
                          tmp126 = author.embeds.length > 0;
                        }
                        if (tmp126) {
                          set.add(author.id);
                        }
                        let tmp130 = author.type === constants3.THREAD_STARTER_MESSAGE;
                        if (tmp130) {
                          tmp130 = props.threadStartingReferenceMessage !== props.threadStartingReferenceMessage;
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
                            const resolvedReferralTrialOfferIds = props.resolvedReferralTrialOfferIds;
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
          const obj1 = {
            forceRender: tmp29,
            forceReload: null,
            updateMessageIds: null,
            scrollToMessageId: null,
            jumpTargetId: null,
            jumpType: null,
            focusTargetId: null,
            ignoreEmbedDescriptionCache: null,
            messagesNewlyLoaded: null,
            shouldInitialScroll: null,
            minimizeScrolling: null,
            isAnimated: null,
            hasJumpedToOriginalPost: null,
          };
          if (!tmp28) {
            tmp28 = tmp106;
          }
          obj1.forceReload = tmp28;
          obj1.updateMessageIds = set;
          obj1.scrollToMessageId = scrollToMessageId;
          obj1.jumpTargetId = jumpTargetId;
          obj1.jumpType = jumpType;
          obj1.focusTargetId = focusTargetId;
          obj1.ignoreEmbedDescriptionCache = cacheStoreLoaded2;
          obj1.messagesNewlyLoaded = tmp21;
          obj1.shouldInitialScroll = shouldInitialScroll;
          obj1.minimizeScrolling = minimizeScrolling;
          obj1.isAnimated =
            props.channelId !== tmp2.channelId ||
            messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
          obj1.hasJumpedToOriginalPost = tmp6;
          cacheStoreLoaded2(obj1);
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
          const tmp92 =
            props.channelId !== tmp2.channelId ||
            messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId;
        }
      }
      let obj6 = messages(hasJumpedToOriginalPost[33]);
      tmp61 = props.voiceStatePrivateChannelId !== tmp2.voiceStatePrivateChannelId;
      const messages2 = tmp2.messages;
      const arr = first(hasJumpedToOriginalPost[19]);
      const found = arr.find(messages2.toArray().reverse(), (type) => type.type === constants.CALL);
      if (null != found) {
        set.add(found.id);
      }
      const toArrayResult = messages2.toArray();
    }
  });
  let obj3 = { children: null };
  const items4 = [
    findMessageIndex(first(11894), {
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
        closure_1_33({ forceRender: true, updateMessageIds: set });
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
        let isIOSResult = PlatformUtils.isIOS();
        if (isIOSResult) {
          isIOSResult = messages.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
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
        handleVisibleMessagesChange({
          firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex,
          lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex,
          firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible,
          lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible,
          source: QuestTypes.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT,
        });
      },
      onMediaPlayFinishedAnalytics: handleMediaPlayFinishedAnalytics,
      onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        handleVisibleMessagesChange({
          firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex,
          lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex,
          firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible,
          lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible,
          source: QuestTypes.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED,
        });
      },
    }),
    findMessageIndex(require("ChatTTITracker").ChatTTITracker, { messages: messages.messages }),
  ];
  obj3.children = items4;
  return ref(closure_18, obj3);
});
forwardRefResult.displayName = "Messages";
let size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default noop.memo(
  forwardRefResult,
  (interactionStates, interactionStates2) =>
    discord_common_shallowEqualDefault(interactionStates, interactionStates2, ["interactionStates"], {
      shouldWarnLargeObjects: false,
    }) && discord_common_shallowEqualDefault(interactionStates.interactionStates, interactionStates2.interactionStates),
);
