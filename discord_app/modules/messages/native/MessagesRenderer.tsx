// === Module 11163: MessagesRenderer ===

// Module 11163 (MessagesRenderer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import flow_Client from "flow/Client" /* 4793 */;
import CodedLink from "CodedLink" /* 4881 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7238 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7603 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9100 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9867 */;
import computeScrollData from "computeScrollData" /* 10001 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 10002 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 10004 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import MessageImpressionAnalyticsHelpers from "MessageImpressionAnalyticsHelpers" /* 10032 */;
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet" /* 11164 */;
import MessagesHandlers from "MessagesHandlers" /* 11172 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11177 */;
import MessagesUtilsDefault from "MessagesUtils" /* 11582 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import SKUStore from "SKUStore" /* 5702 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, author, c2, closure_2, closure_3, closure_5, constants, firstIgnoredScrollEventTimestampRef, invites, messages, set, shouldForceRender, startOrCancelChannelLatestMessagesLoad;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
function handleTapShowAltText(description) {
  openMediaModalOverlayAltTextSheetDefault({ description: description.nativeEvent.description });
}
function handleMediaPlayFinishedAnalytics(nativeEvent) {
  nativeEvent = nativeEvent.nativeEvent;
  const obj = messages_MessagesUtils;
  const result = obj.handleMediaPlayFinishedAnalytics(nativeEvent);
}
function isLoadingAtTop(arg0, arg1) {
  const tmp = arg1;
  if (tmp) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.changeType === Changeset.INSERT) {
        let tmp9 = nextResult.index <= 1;
        iter.return();
        return tmp9;
      }
    }
    return false;
  } else {
    return false;
  }
}
let react = react_mod;
let closure_6 = useChatBottomManagerUIStore.updateShouldShowJumpToPresentButton;
let closure_7 = GuildMemberStore.getUserCommunicationDisabledVersion;
const Changeset = RowGeneratorConstants.Changeset;
({ ActivityActionTypes: closure_12, MAX_MESSAGES_PER_CHANNEL: map1, MessageFlags: closure_14, MessageTypes: closure_15, Permissions: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
const forwardRefResult = react.forwardRef((messages, arg1) => {
  let channelLatestMessageLoadingStatsManager;
  let closure_15;
  let closure_18;
  let closure_19;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_33;
  let closure_34;
  let first2;
  let handleScrollPosition;
  let hasJumpedToOriginalPost;
  let items4;
  let loadMoreAfter;
  let loadMoreBefore;
  let scrollToTopMessage;
  let updateNativeRows;
  const f106760 = (id) => id.id;
  _require = messages;
  function handleVisibleMessagesChange(arg0) {
    let firstVisibleMessagePercentVisible;
    let firstVisibleMessageRowIndex;
    let lastVisibleMessagePercentVisible;
    let lastVisibleMessageRowIndex;
    let source;
    ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, source } = arg0);
    const obj = messages_MessagesUtils;
    const obj2 = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager, channelId: messages.channelId };
    const visibleMessages = obj.getVisibleMessages(obj2);
    if (visibleMessages.length > 0) {
      const obj3 = { visibleMessages, source };
      const tmpResult = QuestActionCreators;
      const result = tmpResult.questsVisibleMobileMessagesChanged(obj3);
      const tmpResult5 = MessageImpressionAnalyticsHelpers;
      const result1 = tmpResult5.handleAnnouncementMessageViewTracking(visibleMessages, messages.shouldTrackAnnouncementMessageViews, messages.guildId, messages.channel);
      const tmpResult6 = MessageImpressionAnalyticsHelpers;
      const result2 = tmpResult6.handleOfficialMessageViewTracking(visibleMessages, messages.shouldTrackOfficialMessageViews, messages.guildId, messages.channel);
      const tmpResult7 = MessageImpressionAnalyticsHelpers;
      const result3 = tmpResult7.handleRichPresenceInviteEmbedViewTracking(visibleMessages, messages.shouldTrackRichPresenceInviteEmbedViews, messages.guildId, messages.channel);
      const tmpResult8 = MessageImpressionAnalyticsHelpers;
      const result4 = tmpResult8.handleVoiceInviteEmbedViewTracking(visibleMessages, messages.shouldTrackVoiceInviteEmbedViews, messages.guildId, messages.channel);
    }
  }
  function findMessageIndex(ChatTTITracker) {
    if (null != ChatTTITracker) {
      const obj = computeScrollData;
      return obj.findMessageRowIndex(first.getPreviousRows(), ChatTTITracker);
    }
  }
  let current = function _handleTapNavBar() {
    let obj = _asyncToGenerator(async () => {
      let channel;
      let obj6;
      let useReducedMotion;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              useReducedMotion = undefined;
              ({ channel, useReducedMotion } = messages);
              if (channel.isForumPost()) {
                if (!ref2.current) {
                  const obj2 = v1(c2[20]);
                  if (null == callback2(obj2.castChannelIdAsMessageId(channel.id))) {
                    const obj5 = { channelId: channel.id, jump: obj6, limit };
                    obj6 = { messageId: channel.id, flash: false };
                    const tmp10Result = v1(c2[26]);
                    v1 = 1;
                    c2 = 1;
                    const obj7 = { value: tmp10Result.fetchMessages(obj5), done: false };
                    return obj7;
                  } else {
                    const tmp10Result3 = v1(c2[20]);
                    const tmp24 = findMessageIndex(tmp10Result3.castChannelIdAsMessageId(channel.id));
                    if (null == tmp24) {
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    } else {
                      const obj8 = { animated: !useReducedMotion };
                      const tmp10Result4 = v1(c2[17]);
                      tmp10Result4.scrollTo(ref.current, tmp24, obj8);
                      const _setTimeout2 = setTimeout;
                      const timerId = setTimeout(() => closure_2_25(!closure_1_0), 10 * tmp24);
                    }
                  }
                }
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const _setTimeout = setTimeout;
            const timerId1 = setTimeout(() => closure_2_25(!closure_1_0), 50);
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp18) {
          c2 = 3;
          throw tmp18;
        }
      }
    });
    return obj(...arguments);
  };
  function scrollToBottom() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const obj = { eventTimestamp: Date.now(), isAtBottom: true };
    closure_26(obj);
    scrollToBottom = NativeChatUtilsDefault.scrollToBottom;
    current = ref5.current;
    NativeChatUtilsDefault;
    if (flag) {
      flag = !messages.useReducedMotion;
    }
    scrollToBottom(current, flag);
  }
  function jumpToPresent() {
    let channel;
    ({ messages, channel } = closure_0);
    if (null == messages.jumpReturnTargetId) {
      if (!messages.loadingMore) {
        if (messages.hasMoreAfter) {
          const obj2 = { channelId: channel.id, limit: map1, jump: { present: true } };
          const obj5 = MessageActionCreatorsDefault;
          const messages1 = obj5.fetchMessages(obj2);
        } else {
          const _Date = Date;
          const obj3 = { eventTimestamp: Date.now(), isAtBottom: true };
          closure_26(obj3);
          const obj4 = NativeChatUtilsDefault;
          obj4.scrollToBottom(ref5.current, !tmp.useReducedMotion);
        }
      }
    } else {
      const obj6 = { channelId: channel.id, messageId: messages.jumpReturnTargetId, flash: true };
      const obj = MessageActionCreatorsDefault;
      obj.jumpToMessage(obj6);
    }
  }
  function scrollToNewMessages() {
    let id = ReadStateStore.ackMessageId(messages.channel.id);
    const obj = { channelId: messages.channel.id, messageId: id, offset: 1, context: "Mark As Read" };
    const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
    MessageActionCreatorsDefault;
    if (id == null) {
      id = messages.channel.id;
    }
    jumpToMessage(obj);
  }
  function getChatRef() {
    return ref5;
  }
  function clearRowsState(reason) {
    let obj3;
    let obj4;
    ref.current = false;
    closure_18.current = false;
    handleTapShowAltText.current = false;
    closure_19.current = false;
    handleMediaPlayFinishedAnalytics.current = false;
    isLoadingAtTop.current = false;
    closure_23.current = false;
    ref1.current = false;
    ref2.current = [];
    ref4.current = false;
    ref3.current = null;
    size = chatUpdatesQueue.blockers.size;
    const length2 = first.getPreviousRows().length;
    first.clear();
    chatUpdatesQueue.clear();
    const obj = NativeChatUtilsDefault;
    obj.clearRows(ref5.current);
    const tmp4 = SentryUtilsDefault;
    const addBreadcrumb = tmp4.addBreadcrumb;
    const obj2 = { category: "chat.queue.clear", message: "clearRows (" + reason + "): queue=" + chatUpdatesQueue.queue.length + " blockers=" + size + " jsRows=" + length2, data: obj3 };
    obj3 = { reason, changesetUpdateId: obj4.getChangesetIdForChat(ref5.current), queueLength: chatUpdatesQueue.queue.length, blockers: size, chatManagerRows: length2 };
    obj4 = ChatChangesetUpdateTracker;
    addBreadcrumb(obj2);
  }
  function clearRows() {
    clearRowsState("channel-change");
    ref(messages.channelId, messages.screenIndex, false);
  }
  const chatManager = first2(react.useState(() => {
    const tmp = new first(dependencyMap[15])();
    return tmp;
  }), 1)[0];
  const first1 = first2(react.useState(() => {
    const tmp = new first(dependencyMap[16])();
    return tmp;
  }), 1)[0];
  let tmp3 = first2(react.useState(false), 2);
  [dependencyMap, _asyncToGenerator] = tmp3;
  let tmp4 = first2(react.useState(false), 2);
  first2 = tmp4[0];
  react = tmp4[1];
  const ref = react.useRef(false);
  const ref1 = react.useRef(false);
  const ref2 = react.useRef([]);
  let ref3 = react.useRef(null);
  const ref4 = react.useRef(false);
  const ref5 = react.useRef(null);
  const callback = react.useCallback((rows) => {
    let HACK_iOSForceAnimations;
    let forceReload;
    let hasMoreMessagesAfter;
    let isAnimated;
    let scrollData;
    ({ rows, hasMoreMessagesAfter, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated } = rows);
    const tmp = isLoadingAtTop(rows.rows, ref1.current);
    const obj = NativeChatUtilsDefault;
    obj.updateRows(ref5.current, { rows, isLoadingAtTop: tmp, scrollData, HACK_iOSForceAnimations, forceReload, isAnimated });
    ref1.current = hasMoreMessagesAfter;
  }, []);
  current = require("MessagesHooks");
  const chatUpdatesQueue = current.useChatUpdatesQueue(ref5, callback);
  let items = [, ];
  ({ canChat: arr[0], channel: arr[1] } = messages);
  const items1 = [messages.messages];
  const callback1 = react.useCallback(() => {
    let canChat = messages.canChat && PermissionStore.can(handleVisibleMessagesChange.ADD_REACTIONS, messages.channel);
    if (!canChat) {
      const channel = messages.channel;
      canChat = channel.isPrivate();
    }
    return canChat;
  }, items);
  const callback2 = react.useCallback((arg0) => {
    messages = arg0;
    messages = messages.messages;
    const arr = _modDef12;
    return arr.find(messages.toArray(), (id) => id.id === closure_0 || id.nonce === closure_0);
  }, items1);
  const items2 = [, , ];
  ({ channel: arr3[0], channelId: arr3[1] } = messages);
  items2[2] = messages.messages.jumpTargetId;
  let callback3 = react.useCallback((arg0) => {
    const channel = messages.channel;
    let isForumPostResult = channel.isForumPost();
    if (isForumPostResult) {
      const obj = SnowflakeUtilsDefault;
      isForumPostResult = obj.castChannelIdAsMessageId(messages.channelId) === messages.messages.jumpTargetId;
    }
    if (isForumPostResult) {
      isForumPostResult = !arg0;
    }
    return isForumPostResult;
  }, items2);
  let obj2 = { channelId: messages.channelId, jumpTargetId: messages.messages.jumpTargetId, oldestUnreadMessageId: messages.oldestUnreadMessageId, shouldJumpToOriginalPost: callback3 };
  let tmp17 = chatManager(11169)(obj2);
  ({ startOrCancelLatestMessagesLoad: closure_15, channelLatestMessageLoadingStatsManager } = tmp17);
  let obj3 = {
    chatRef: ref5,
    chatManager,
    chatUpdatesQueue,
    pendingUpdatesQueueRef: ref2,
    animatedRef: ref,
    fetchMoreBefore() {
      let id;
      messages = messages.messages;
      let hasMoreBefore = messages.hasMoreBefore;
      const channelId = messages.channelId;
      if (hasMoreBefore) {
        hasMoreBefore = !messages.loadingMore;
      }
      if (hasMoreBefore) {
        const obj = { channelId, before: id, limit: map1 };
        const fetchMessages = MessageActionCreatorsDefault.fetchMessages;
        MessageActionCreatorsDefault;
        const firstResult = messages.first();
        id = undefined;
        if (firstResult != null) {
          id = firstResult.id;
        }
        const messages1 = fetchMessages(obj);
      }
    },
    fetchMoreAfter() {
      let id;
      messages = messages.messages;
      let hasMoreAfter = messages.hasMoreAfter;
      const channelId = messages.channelId;
      if (hasMoreAfter) {
        hasMoreAfter = !messages.loadingMore;
      }
      if (hasMoreAfter) {
        const obj = { channelId, after: id, limit: map1 };
        const fetchMessages = MessageActionCreatorsDefault.fetchMessages;
        MessageActionCreatorsDefault;
        const lastResult = messages.last();
        id = undefined;
        if (lastResult != null) {
          id = lastResult.id;
        }
        const messages1 = fetchMessages(obj);
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
  let tmp18 = chatManager(11171)(obj3);
  ({ hasHandledScrollRef: closure_18, isAtBottomRef: closure_19, isNearBottomRef: handleTapShowAltText, isNearTopRef: handleMediaPlayFinishedAnalytics, deceleratingRef: isLoadingAtTop, draggingRef: closure_23, firstIgnoredScrollEventTimestampRef: closure_24, scrollToTop: closure_25, handleScrollCallbacks: closure_26, loadMoreBefore, loadMoreAfter, scrollToTopMessage, updateNativeRows, handleScrollPosition } = tmp18);
  const ref6 = react.useRef(null);
  ref6.current = { getMessage: callback2, chatInputRef: messages.chatInputRef, selectedChannelId: messages.channelId, revealedMessageId: messages.messages.revealedMessageId, uploads: messages.uploads, paymentsBlocked: messages.paymentsBlocked, loadMoreBefore, loadMoreAfter };
  const first3 = first2(react.useState(() => {
    const messagesHandlers = new MessagesHandlers.MessagesHandlers(() => ref.current);
    return messagesHandlers;
  }), 1)[0];
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({ scrollToBottom, jumpToPresent, scrollToNewMessages, getChatRef }));
  let obj4 = { chatManager, rowGenerator: first1, animatingStickerMessageIdRef: ref3, canAddNewReactions: callback1, channel: messages.channel, messages: messages.messages, isMessagesReady: messages.isMessagesReady, uploads: messages.uploads, roleStyle: messages.roleStyle, oldestUnreadMessageId: messages.oldestUnreadMessageId, replyingMessageId: messages.replyingMessageId, inlineAttachmentMedia: messages.inlineAttachmentMedia, inlineEmbedMedia: messages.inlineEmbedMedia, renderEmbeds: messages.renderEmbeds, renderReactions: messages.renderReactions, animateEmoji: messages.animateEmoji, gifAutoPlay: messages.gifAutoPlay, timestampHourCycle: messages.timestampHourCycle, currentUserId: messages.currentUserId, renderCommunicationDisabled: messages.renderCommunicationDisabled, selectedSummary: messages.selectedSummary, selectedConversation: messages.selectedConversation, enableSwipeActions: messages.enableSwipeActions, isResourceChannel: messages.isResourceChannel, shouldObscureSpoiler: messages.shouldObscureSpoiler, shouldDisableInteractiveComponents: messages.shouldDisableInteractiveComponents, unloadableContentEntryMessageIds: messages.unloadableContentEntryMessageIds, containerWidth: messages.containerWidth, chatRef: ref5, loadedRef: ref4, animatedRef: ref, hasMoreMessagesAfterForLastUpdateRef: ref1, updateNativeRows, isLoadingAtTop, channelLatestMessageLoadingStatsManager, channelId: messages.channelId, isMessagesCached: messages.isMessagesCached, chatUpdatesQueue, shouldJumpToOriginalPost: callback3, findMessageIndex, scrollToTopMessage, useReducedMotion: messages.useReducedMotion };
  let tmp22 = chatManager(11574)(obj4);
  ({ updateRows: closure_33, scrollToMessageId: closure_34 } = tmp22);
  const effect = react.useEffect(() => {
    let channelId;
    let channelId2;
    let messages2;
    let messages3;
    messages = messages.messages;
    const oldestUnreadMessageId = messages.oldestUnreadMessageId;
    if (messages.isMessagesReady) {
      ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
      const obj5 = { scrollToMessageId: null, jumpTargetId: null, jumpType: messages(dependencyMap[29]).JumpType.INSTANT, focusTargetId: messages.focusTargetId, hasJumpedToOriginalPost: dependencyMap };
      closure_33(obj5);
      const tmp5 = messages;
      if (null != messages.jumpTargetId) {
        ({ jumpTargetId: obj3.scrollToMessageId, jumpTargetId: obj3.jumpTargetId } = messages);
        const obj6 = { scrollToMessageId: null, jumpTargetId: null, jumpType: tmp5(dependencyMap[29]).JumpType.INSTANT, hasJumpedToOriginalPost: dependencyMap };
        closure_34(obj6);
      } else if (null != oldestUnreadMessageId) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const obj = { scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: flow_Client.JumpType.INSTANT, hasJumpedToOriginalPost: dependencyMap };
          return closure_34(obj);
        }, 50);
      }
    } else {
      let obj = { hasJumpedToOriginalPost: dependencyMap };
      closure_33(obj);
    }
    ({ channelId, messages: messages2 } = messages);
    const recordMessageRender = first(dependencyMap[11]).recordMessageRender;
    first(dependencyMap[11]);
    const mapped = messages2.map(f106760);
    let hasFetched = messages2.hasFetched;
    if (!hasFetched) {
      hasFetched = messages2.ready && !messages2.cached;
    }
    recordMessageRender(channelId, mapped, hasFetched, messages2.hasMoreAfter);
    ({ channelId: channelId2, messages: messages3 } = messages);
    const recordMessageRender2 = first(dependencyMap[11]).recordMessageRender;
    first(dependencyMap[11]);
    const mapped1 = messages3.map(f106760);
    let hasFetched2 = messages3.hasFetched;
    if (!hasFetched2) {
      hasFetched2 = messages3.ready && !messages3.cached;
    }
    recordMessageRender2(channelId2, mapped1, hasFetched2, messages3.hasMoreAfter);
    return () => {
      clearRowsState("unmount");
    };
  }, []);
  const items3 = [, ];
  ({ channelId: arr4[0], screenIndex: arr4[1] } = messages);
  const effect1 = react.useEffect(() => () => {
    ref(messages.channelId, messages.screenIndex, false);
  }, items3);
  let obj5 = { props: messages, shouldForceRender: first2 };
  ref3 = react.useRef(obj5);
  const layoutEffect = react.useLayoutEffect(function() {
    let channelId2;
    let channelId3;
    let closure_1;
    let closure_19;
    let closure_24;
    let closure_4;
    let first;
    let focusTargetId;
    let jumpTargetId;
    let jumpType;
    let messages3;
    let minimizeScrolling;
    let scrollToMessageId;
    let shouldInitialScroll;
    const props = ref3.current.props;
    current = { props, shouldForceRender };
    const tmp2 = props;
    ref3.current = current;
    if (null != props.currentUserId) {
      const messages4 = tmp2.messages;
      const messages5 = props.messages;
      if (props.channelId !== tmp2.channelId) {
        closure_3(false);
      }
      const channelId = tmp2.channelId;
      let obj2 = { clearRows, startOrCancelChannelLatestMessagesLoad, hasJumpedToOriginalPost: props.channelId === tmp2.channelId && closure_2, firstIgnoredScrollEventTimestampRef };
      if (props.channelId !== channelId) {
        obj2.clearRows();
        let obj3 = first(dependencyMap[14]);
        const result = obj3.clearChannelDimensions(channelId);
        const result1 = obj2.startOrCancelChannelLatestMessagesLoad(obj2.hasJumpedToOriginalPost);
        obj2.firstIgnoredScrollEventTimestampRef.current = undefined;
      }
      const isMessagesAckable = props.isMessagesAckable;
      let isMessagesAckable2 = !isMessagesAckable;
      const tmp15 = closure_18;
      if (!isMessagesAckable) {
        isMessagesAckable2 = tmp2.isMessagesAckable;
      }
      if (isMessagesAckable2) {
        tmp15.current = false;
      }
      const tmp17 = closure_25;
      const tmp18 = closure_3;
      if (callback3(props.channelId === tmp2.channelId && closure_2)) {
        tmp17(false);
        if (messages5.jumpSequenceId === messages4.jumpSequenceId) {
          tmp18(true);
        }
      }
      let tmp22 = first;
      let tmp25 = ref2;
      let tmp26 = first;
      const obj4 = { isAtBottom: ref2.current, hasPreviousMessages: null != first.getPreviousMessages() };
      const tmp21 = tmp2.isMessagesReady && !tmp2.isMessagesCached && props.isMessagesCached;
      const tmp24 = first(dependencyMap[32]);
      const tmp24Result = tmp24(tmp2, obj4, props);
      ({ jumpTargetId, focusTargetId } = tmp24Result);
      let tmp28 = props.theme !== tmp2.theme;
      ({ scrollToMessageId, jumpType, minimizeScrolling, shouldInitialScroll } = tmp24Result);
      if (!tmp28) {
        tmp28 = props.saturation !== tmp2.saturation;
      }
      let tmp29 = props.theme !== tmp2.theme || props.saturation !== tmp2.saturation || props.inlineAttachmentMedia !== tmp2.inlineAttachmentMedia || props.inlineEmbedMedia !== tmp2.inlineEmbedMedia || props.renderEmbeds !== tmp2.renderEmbeds || props.renderReactions !== tmp2.renderReactions || props.animateEmoji !== tmp2.animateEmoji || props.animateStickers !== tmp2.animateStickers || props.gifAutoPlay !== tmp2.gifAutoPlay || props.timestampHourCycle !== tmp2.timestampHourCycle || props.containerWidth !== tmp2.containerWidth || props.guildSystemChannelFlags !== tmp2.guildSystemChannelFlags || props.userSettingsLocale !== tmp2.userSettingsLocale || props.roleStyle !== tmp2.roleStyle || props.officialMessageStyle !== tmp2.officialMessageStyle || props.canSendMessages !== tmp2.canSendMessages || props.showPushFeedback !== tmp2.showPushFeedback || props.selectedSummary !== tmp2.selectedSummary || props.selectedConversation !== tmp2.selectedConversation || props.shouldObscureSpoiler !== tmp2.shouldObscureSpoiler || props.explicitMediaFalsePositiveInfo !== tmp2.explicitMediaFalsePositiveInfo || props.familyCenterPendingConnection !== tmp2.familyCenterPendingConnection || props.isStaff !== tmp2.isStaff || props.isAgeVerified !== tmp2.isAgeVerified;
      if (!tmp29) {
        tmp29 = tmp !== shouldForceRender && shouldForceRender;
      }
      if (!tmp29) {
        tmp29 = props.displayNameStylesEnabled !== tmp2.displayNameStylesEnabled;
      }
      first = tmp31;
      let tmp32 = first;
      const uploads = props.uploads;
      const uploads2 = tmp2.uploads;
      const tmp34 = first(dependencyMap[33])(props.interactionStates, tmp2.interactionStates);
      closure_2 = !tmp34;
      closure_3 = tmp35;
      shouldForceRender = tmp36;
      closure_5 = tmp37;
      closure_6 = props.shouldDisableInteractiveComponents !== tmp2.shouldDisableInteractiveComponents;
      closure_7 = tmp38;
      let closure_8 = tmp39;
      let closure_9 = tmp40;
      let closure_10 = tmp41;
      let channel = tmp2.channel;
      const forwardGuildsVersion = props.forwardGuildsVersion;
      const forwardGuildsVersion2 = tmp2.forwardGuildsVersion;
      const tmp42 = channel.isForumPost() && props.isFollowingForumPost !== tmp2.isFollowingForumPost;
      let closure_11 = tmp42;
      constants = tmp43;
      let closure_13 = tmp44;
      callback3 = tmp45;
      const tmp46 = props.activityInstanceIds !== tmp2.activityInstanceIds || props.activityParticipants !== tmp2.activityParticipants || props.applicationAssetFetchingIds !== tmp2.applicationAssetFetchingIds || props.activityInstancePresenceDetails !== tmp2.activityInstancePresenceDetails || props.messagesWithActivitiesLaunching !== tmp2.messagesWithActivitiesLaunching || props.invalidApplicationIds !== tmp2.invalidApplicationIds;
      startOrCancelChannelLatestMessagesLoad = tmp46;
      let obj5 = messages(dependencyMap[33]);
      const result2 = obj5.areArraysShallowEqual(props.activityInviteMessageIds, tmp2.activityInviteMessageIds);
      let closure_16 = !result2;
      let obj6 = messages(dependencyMap[33]);
      const result3 = obj6.areArraysShallowEqual(props.resolvedReferralTrialOfferIds, tmp2.resolvedReferralTrialOfferIds);
      let tmp52 = !result3;
      if (result3) {
        tmp52 = props.referralTrialOfferId !== tmp2.referralTrialOfferId;
      }
      if (!tmp52) {
        tmp52 = props.isPremiumTier2User !== tmp2.isPremiumTier2User;
      }
      let closure_17 = tmp52;
      closure_18 = tmp53;
      let closure_20 = tmp55;
      let closure_21 = tmp56;
      let closure_22 = tmp57;
      let closure_23 = tmp58;
      const currentUserDisplayNameStyles = props.currentUserDisplayNameStyles;
      let fontId;
      const guildEmojis = props.guildEmojis;
      const guildEmojis2 = tmp2.guildEmojis;
      const voiceStatePrivateChannelId = props.voiceStatePrivateChannelId;
      const voiceStatePrivateChannelId2 = tmp2.voiceStatePrivateChannelId;
      const displayNameStylesEnabled = props.displayNameStylesEnabled;
      const displayNameStylesEnabled2 = tmp2.displayNameStylesEnabled;
      if (currentUserDisplayNameStyles != null) {
        fontId = currentUserDisplayNameStyles.fontId;
      }
      const currentUserDisplayNameStyles2 = tmp2.currentUserDisplayNameStyles;
      let fontId1;
      if (currentUserDisplayNameStyles2 != null) {
        fontId1 = currentUserDisplayNameStyles2.fontId;
      }
      firstIgnoredScrollEventTimestampRef = tmp62;
      const tmp61 = voiceStatePrivateChannelId !== voiceStatePrivateChannelId2;
      const tmp47Result = messages(dependencyMap[33]);
      const result4 = tmp47Result.areArraysShallowEqual(props.fetchingSkuIds, tmp2.fetchingSkuIds);
      closure_25 = !result4;
      let closure_26 = tmp65;
      if (!tmp29) {
        if (!(props.resolvingGiftCodes !== tmp2.resolvingGiftCodes || props.resolvedGiftCodes !== tmp2.resolvedGiftCodes || props.acceptingGiftCodes !== tmp2.acceptingGiftCodes)) {
          if (uploads === uploads2) {
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
                                                                          if (props.currentClientVoiceChannelId === tmp2.currentClientVoiceChannelId) {
                                                                            if (props.communicationDisabledVersion === tmp2.communicationDisabledVersion) {
                                                                              if (props.messageAuthorMembers === tmp2.messageAuthorMembers) {
                                                                                if (props.failedMessagesVersion === tmp2.failedMessagesVersion) {
                                                                                  if (forwardGuildsVersion === forwardGuildsVersion2) {
                                                                                    if (props.renderCommunicationDisabled === tmp2.renderCommunicationDisabled) {
                                                                                      if (tmp34) {
                                                                                        if (props.interactionComponentStatesVersion === tmp2.interactionComponentStatesVersion) {
                                                                                          if (!tmp42) {
                                                                                            if (null == jumpTargetId) {
                                                                                              if (null == focusTargetId) {
                                                                                                if (props.androidKeyboardHeight === tmp2.androidKeyboardHeight) {
                                                                                                  if (props.mediaPostPreviewEmbeds === tmp2.mediaPostPreviewEmbeds) {
                                                                                                    if (props.shouldObscureSpoiler === tmp2.shouldObscureSpoiler) {
                                                                                                      if (props.shouldDisableInteractiveComponents === tmp2.shouldDisableInteractiveComponents) {
                                                                                                        if (props.channelPolls === tmp2.channelPolls) {
                                                                                                          if (props.messageReferencePolls === tmp2.messageReferencePolls) {
                                                                                                            if (props.showMediaPostSharePrompt === tmp2.showMediaPostSharePrompt) {
                                                                                                              if (props.threadStartingReferenceMessage === tmp2.threadStartingReferenceMessage) {
                                                                                                                if (props.unloadedContentEntryMessageIds === tmp2.unloadedContentEntryMessageIds) {
                                                                                                                  if (result2) {
                                                                                                                    if (!tmp52) {
                                                                                                                      if (props.guildInviteColorsFetched === tmp2.guildInviteColorsFetched) {
                                                                                                                        if (guildEmojis === guildEmojis2) {
                                                                                                                          if (props.selfActivities === tmp2.selfActivities) {
                                                                                                                            if (props.activityLaunchJoinStates === tmp2.activityLaunchJoinStates) {
                                                                                                                              if (props.authorizedAppsTokens === tmp2.authorizedAppsTokens) {
                                                                                                                                if (displayNameStylesEnabled === displayNameStylesEnabled2) {
                                                                                                                                  if (fontId === fontId1) {
                                                                                                                                    if (props.voiceStateChannelIdSummaryForGuild === tmp2.voiceStateChannelIdSummaryForGuild) {
                                                                                                                                      if (props.voiceInviteDataByChannelId === tmp2.voiceInviteDataByChannelId) {
                                                                                                                                        if (result4) {
                                                                                                                                          ({ channelId: channelId2, messages } = tmp2);
                                                                                                                                          const recordMessageRender = first(dependencyMap[11]).recordMessageRender;
                                                                                                                                          const tmp68 = first(dependencyMap[11]);
                                                                                                                                          const mapped = messages.map(f106760);
                                                                                                                                          let hasFetched = messages.hasFetched;
                                                                                                                                          if (!hasFetched) {
                                                                                                                                            hasFetched = messages.ready && !messages.cached;
                                                                                                                                          }
                                                                                                                                          recordMessageRender(channelId2, mapped, hasFetched, messages.hasMoreAfter);
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
      const self = this;
      const self2 = this;
      set = new Set();
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
          let closure_33 = tmp86;
          let voiceChannelIdChangedAuthorIds = null;
          if (props.voiceStateChannelIdSummaryForGuild !== tmp2.voiceStateChannelIdSummaryForGuild) {
            let prop = props.voiceStateChannelIdSummaryForGuild;
            const getVoiceChannelIdChangedAuthorIds = messages(dependencyMap[13]).getVoiceChannelIdChangedAuthorIds;
            messages(dependencyMap[13]);
            if (prop == null) {
              prop = null;
            }
            let prop1 = tmp2.voiceStateChannelIdSummaryForGuild;
            if (prop1 == null) {
              prop1 = null;
            }
            voiceChannelIdChangedAuthorIds = getVoiceChannelIdChangedAuthorIds(prop, prop1);
          }
          const messages1 = tmp2.messages;
          const item = messages1.forEach((author) => {
            let code2;
            let messageAuthorMembers;
            let type;
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
                    invites = props.invites;
                    let value = invites.get(code);
                    let tmp202 = value;
                    if (null != value) {
                      if (null != tmp202.channel) {
                        let obj2 = InviteTypeUtils;
                        if (obj2.isVoiceChannelInvite(tmp202)) {
                          let id = tmp202.channel.id;
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
                  const obj3 = messages_MessagesUtils;
                  const messageAuthorMemberUserIds = obj3.getMessageAuthorMemberUserIds(author);
                  if (messageAuthorMemberUserIds.some((item) => props.messageAuthorMembers[item] !== messageAuthorMembers.messageAuthorMembers[item])) {
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
                const value3 = interactionComponentStates.get(author.id);
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
                  const id2 = author.id;
                  const obj5 = SnowflakeUtilsDefault;
                  if (id2 === obj5.castChannelIdAsMessageId(props.channelId)) {
                    set.add(author.id);
                  }
                }
              }
              if (constants3) {
                if (null != author.activityInstance) {
                  set.add(author.id);
                }
              }
              let tmp80 = closure_16;
              if (tmp80) {
                const activity2 = author.activity;
                let party_id;
                if (activity2 != null) {
                  party_id = activity2.party_id;
                }
                tmp80 = null != party_id;
              }
              if (tmp80) {
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
                if (id1 === props.currentUserId) {
                  set.add(author.id);
                }
              }
              if (closure_25) {
                if (author.codedLinks.length > 0) {
                  const codedLinks2 = author.codedLinks;
                  const iter2 = codedLinks2[Symbol.iterator]();
                  const nextResult1 = iter2.next();
                  while (iter2 !== undefined) {
                    ({ type, code: code2 } = nextResult1);
                    if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                      let first = _slicedToArray(code2.split("-"), 1)[0];
                      let fetchingSkuIds = props.fetchingSkuIds;
                      let tmp105 = first;
                      if (fetchingSkuIds.includes(first)) {
                        let addResult20 = set.add(author.id);
                        iter2.return();
                      } else {
                        let value4 = SKUStore.get(tmp105);
                        if (null != value4) {
                          let invalidApplicationIds = props.invalidApplicationIds;
                          if (invalidApplicationIds.includes(tmp111.applicationId)) {
                            let addResult21 = set.add(author.id);
                            iter2.return();
                          }
                        }
                      }
                    }
                    continue;
                  }
                }
              }
              if (null != author.author) {
                const obj9 = MessagesUtilsDefault;
                if (!obj9.messageAuthorActivitiesChanged(author, props, props)) {
                  const obj6 = MessagesUtilsDefault;
                  if (!obj6.codedLinksChanged(author, props, props)) {
                    if (!closure_1) {
                      const obj8 = MessagesUtilsDefault;
                      if (!obj8.mediaPostPreviewEmbedsChanged(author, props, props)) {
                        const tmp134 = closure_33 && author.embeds.length > 0;
                        if (tmp134) {
                          set.add(author.id);
                        }
                        const tmp138 = author.type === constants3.THREAD_STARTER_MESSAGE && props.threadStartingReferenceMessage !== props.threadStartingReferenceMessage;
                        if (tmp138) {
                          set.add(author.id);
                        }
                        let hasItem1 = constants2 && null != author.applicationId;
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
                        const tmp151 = closure_18 && author.codedLinks.length > 0;
                        if (tmp151) {
                          set.add(author.id);
                        }
                        let tmp154 = closure_19 || closure_22;
                        if (tmp154) {
                          const activity3 = author.activity;
                          let party_id1;
                          if (activity3 != null) {
                            party_id1 = activity3.party_id;
                          }
                          tmp154 = null != party_id1;
                        }
                        if (tmp154) {
                          set.add(author.id);
                        }
                      }
                    } else {
                      MessagesUtilsDefault;
                    }
                  }
                }
                set.add(author.id);
              }
            }
            set.add(author.id);
          });
          const obj7 = { forceRender: tmp29, forceReload: tmp28, updateMessageIds: set, scrollToMessageId, jumpTargetId, jumpType, focusTargetId, ignoreEmbedDescriptionCache: !props.cacheStoreLoaded && tmp2.cacheStoreLoaded, messagesNewlyLoaded: tmp21, shouldInitialScroll, minimizeScrolling, isAnimated: props.channelId !== tmp2.channelId || messages5.suppressRowAnimationSequenceId === messages4.suppressRowAnimationSequenceId, hasJumpedToOriginalPost: props.channelId === tmp2.channelId && closure_2 };
          const tmp94 = closure_33;
          if (!tmp28) {
            tmp28 = tmp108;
          }
          tmp94(obj7);
          closure_5(false);
          ({ channelId: channelId3, messages: messages3 } = tmp2);
          const recordMessageRender2 = first(dependencyMap[11]).recordMessageRender;
          const tmp100 = first(dependencyMap[11]);
          const mapped1 = messages3.map(f106760);
          let hasFetched2 = messages3.hasFetched;
          if (!hasFetched2) {
            hasFetched2 = messages3.ready && !messages3.cached;
          }
          let tmp105 = mapped1;
          recordMessageRender2(channelId3, mapped1, hasFetched2, messages3.hasMoreAfter);
        }
      }
      const messages2 = tmp2.messages;
      const find = first(dependencyMap[19]).find;
      first(dependencyMap[19]);
      const toArrayResult = messages2.toArray();
      const found = find(toArrayResult.reverse(), (type) => type.type === constants.CALL);
      if (null != found) {
        set.add(found.id);
      }
    }
  });
  let obj6 = { children: items4 };
  let obj7 = {
    ref: ref5,
    style: messages.style,
    inverted: true,
    channelId: messages.channelId,
    alwaysRespectKeyboard: messages.alwaysRespectKeyboard,
    onChatScrollPosition: handleScrollPosition,
    onTapImage: first3.handleTapImage,
    onTapChannel: first3.handleTapChannel,
    onLongPressChannel: first3.handleLongPressChannel,
    onTapAttachmentLink: first3.handleTapAttachmentLink,
    onTapAttachmentTextPreview: first3.handleTapAttachmentTextPreview,
    onLongPressAttachmentLink: first3.handleLongPressAttachmentLink,
    onTapCall: first3.handleTapCall,
    onTapMention: first3.handleTapMention,
    onTapCommandMention: first3.handleTapCommandMention,
    onLongPressCommandMention: first3.handleLongPressCommandMention,
    onTapGameMention: first3.handleTapGameMention,
    onTapLink: first3.handleTapLink,
    onLongPressLink: first3.handleLongPressLink,
    onTapReaction: first3.handleTapReaction,
    onLongPressReaction: first3.handleLongPressReaction,
    onTapAvatar: first3.handleTapAvatar,
    onTapUsername: first3.handleTapUsername,
    onLongPressUsername: first3.handleLongPressUsername,
    onTapSticker: first3.handleOpenSticker,
    onLongPressSticker: function handleLongPressSticker(nativeEvent) {
      const obj = MessageDataSnowflakeUtils;
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      current = ref3.current;
      const items = [messageId];
      set = new Set(items);
      if (null != current) {
        set.add(current);
      }
      let tmp3 = null;
      if (current !== messageId) {
        tmp3 = messageId;
      }
      ref3.current = tmp3;
      closure_33({ forceRender: true, updateMessageIds: set });
    },
    onLongPressMessage: first3.handleLongPressMessage,
    onInitiateReply: first3.handleInitiateReply,
    onInitiateEdit: first3.handleInitiateEdit,
    onInitiateThread: first3.handleInitiateThread,
    onTapMessage: first3.handleTapMessage,
    onDoubleTapMessage: first3.handleDoubleTapMessage,
    onTapSeparator: first3.handleTapSeparator,
    onTapInviteEmbed: first3.handleTapInviteEmbed,
    onTapInviteEmbedAccept: first3.handleTapInviteEmbedAccept,
    onTapJoinActivity: first3.handleTapJoinActivity,
    onTapJoinRichPresence: first3.handleTapJoinRichPresence,
    onPressKey: messages.onPressKey,
    animateEmoji: messages.animateEmoji,
    onTapGiftCodeEmbed: first3.handleTapGiftCodeEmbed,
    onTapCancelUploadItem: first3.handleTapCancelUploadItem,
    onTapMessageReply: first3.handleTapReply,
    onTapSummary: first3.handleTapSummary,
    onTapSummaryJump: first3.handleTapSummaryJump,
    onTapConversationHeader: first3.handleTapConversationHeader,
    onTapGiftCodeAccept: first3.handleTapGiftCodeAccept,
    onTapReferralRedeem: first3.handleTapReferralRedeem,
    onGiftIntentCardViewed: first3.handleGiftIntentCardViewed,
    onTapGiftIntentPrimaryCta: first3.handleTapGiftIntentPrimaryCta,
    onTapGiftIntentSecondaryCta: first3.handleTapGiftIntentSecondaryCta,
    onTapThreadEmbed: first3.handleTapThreadEmbed,
    onTapEmoji: first3.handleTapEmoji,
    onTapTimestamp: first3.handleTapTimestamp,
    onTapInlineCode: first3.handleTapInlineCode,
    onTapRoleIcon: first3.handleTapRoleIcon,
    onTapVoiceChannelBadge: first3.handleTapVoiceChannelBadge,
    onTapGameIcon: first3.handleTapGameIcon,
    onTapSuppressNotificationsIcon: first3.handleTapSuppressNotificationsIcon,
    onTapConnectionsRoleTag: first3.handleTapConnectionsRoleTag,
    onTapTimeoutIcon: first3.handleTapTimeoutIcon,
    onTapButtonActionComponent: first3.handleTapButtonActionComponent,
    onTapSelectActionComponent: first3.handleTapSelectActionComponent,
    onTapWelcomeReply: first3.handleTapWelcomeReply,
    onTapInviteToSpeak: first3.handleTapInviteToSpeak,
    onTapAutoModerationActions: first3.handleTapAutoModerationActions,
    onTapAutoModerationFeedback: first3.handleTapAutoModerationFeedback,
    onTapFollowForumPost: first3.handleTapFollowForumPost,
    onTapShareForumPost: first3.handleTapShareForumPost,
    onTapReactionOverflow: first3.handleTapReactionOverflow,
    onTapNavBar: function handleTapNavBar() {
      return obj(...arguments);
    },
    onTapCopyText: first3.handleCopyText,
    onTapOpTag: first3.handleTapOpTag,
    onTapTag: first3.handleTapTag,
    onMediaAttachmentPlaybackEnded: first3.handleMediaAttachmentPlaybackEnded,
    onMediaAttachmentPlaybackStarted: first3.handleMediaAttachmentPlaybackStarted,
    onVoiceMessagePlaybackFailed: first3.handleVoiceMessagePlaybackFailed,
    onTapShowAltText: handleTapShowAltText,
    onTapPostPreviewEmbed: first3.handleTapPostPreviewEmbed,
    onTapDismissMediaPostSharePrompt: first3.handleTapDismissMediaPostSharePrompt,
    onTapObscuredMediaLearnMore: first3.handleTapObscuredMediaLearnMore,
    onTapObscuredMediaToggle: first3.onTapObscuredMediaToggle,
    onTapSafetyPolicyNoticeEmbed: first3.handleTapSafetyPolicyNoticeEmbed,
    onTapSafetySystemNotificationCta: first3.handleTapSafetySystemNotificationCta,
    onTapPollAnswer: first3.handleTapPollAnswer,
    onTapPollSubmitVote: first3.handleTapPollSubmitVote,
    onTapPollAction: first3.handleTapPollAction,
    onLongPressPollImage: first3.handleLongPressPollImage,
    onTapCtaButton: first3.handleTapCtaButton,
    onMessageAccessibilityAction: first3.handleMessageAccessibilityAction,
    onTapForwardFooter: first3.handleTapForwardFooter,
    onTapInlineForward: first3.handleTapInlineForward,
    onTapClanTagChiplet: first3.handleTapClanTagChiplet,
    onTapContentInventoryEntryEmbed: first3.handleTapContentInventoryEntryEmbed,
    onTapCheckpointCard: first3.handleTapCheckpointCard,
    onTapSoundmoji: first3.handleTapSoundmoji,
    onTapAppMessageEmbed: first3.handleTapAppMessageEmbed,
    onTapPreviewSharedClientTheme: first3.handleTapPreviewSharedClientTheme,
    onSharedClientThemeViewed: first3.handleSharedClientThemeViewed,
    children: messages.children,
    HACK_fixModalInteraction: messages.HACK_fixModalInteraction,
    onTapTableView: function handleTapTableView() {
      const obj = PlatformUtils;
      const isIOSResult = obj.isIOS() && messages.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      if (isIOSResult) {
        current = messages.chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      }
    },
    onFirstLayout: function handleFirstLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const obj = { firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT };
      handleVisibleMessagesChange(obj);
    },
    onMediaPlayFinishedAnalytics: handleMediaPlayFinishedAnalytics,
    onMessageVisibilityChanged: function handleMessageVisibilityChanged(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const obj = { firstVisibleMessageRowIndex: nativeEvent.firstVisibleMessageIndex, lastVisibleMessageRowIndex: nativeEvent.lastVisibleMessageIndex, firstVisibleMessagePercentVisible: nativeEvent.firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible: nativeEvent.lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED };
      handleVisibleMessagesChange(obj);
    }
  };
  items4 = [findMessageIndex(chatManager(11519), obj7), ];
  let obj8 = { messages: messages.messages };
  items4[1] = findMessageIndex(require("ChatTTITracker").ChatTTITracker, obj8);
  return ref2(closure_18, obj6);
});
forwardRefResult.displayName = "Messages";
const memoResult = react.memo(forwardRefResult, (interactionStates, interactionStates2) => {
  const tmp3 = shallowEqualDefault(interactionStates, interactionStates2, ["interactionStates"], { shouldWarnLargeObjects: false }) && shallowEqualDefault(interactionStates.interactionStates, interactionStates2.interactionStates);
  return tmp3;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/MessagesRenderer.tsx");

export default memoResult;