// === Module 11561: useRowManager ===

// Module 11561 (useRowManager)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import flow_Client from "flow/Client" /* 4787 */;
import computeScrollDataDefault from "computeScrollData" /* 9988 */;
import NativeChatUtils from "NativeChatUtils" /* 9989 */;
import createChannelStreamDefault from "createChannelStream" /* 11562 */;
import createConversationHeader from "createConversationHeader" /* 11563 */;
import size from "module_2" /* 2 */;

const NativeChatUtilsDefault = NativeChatUtils;

let result = size.fileFinishedImporting("modules/messages/native/hooks/useRowManager.tsx");

export default function useRowManager(arg0) {
  let animateEmoji;
  let areMessagesCached;
  let channel;
  let channelId;
  let chatManager;
  let closure_10;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_27;
  let closure_28;
  let closure_29;
  let closure_3;
  let closure_30;
  let closure_31;
  let closure_32;
  let closure_33;
  let closure_34;
  let closure_35;
  let closure_36;
  let closure_37;
  let closure_38;
  let closure_39;
  let closure_4;
  let closure_40;
  let closure_41;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let constrainedWidth;
  let currentUserId;
  let enableSwipeActions;
  let gifAutoPlay;
  let inlineAttachmentMedia;
  let inlineEmbedMedia;
  let isResourceChannel;
  let messages;
  let oldestUnreadMessageId;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let renderCommunicationDisabled;
  let renderEmbeds;
  let renderReactions;
  let replyingMessageId;
  let roleStyle;
  let selectedConversation;
  let selectedSummary;
  let shouldDisableInteractiveComponents;
  let shouldObscureSpoiler;
  let timestampHourCycle;
  let unloadableContentEntryMessageIds;
  let uploads;
  ({ chatManager: require, rowGenerator: importDefault, animatingStickerMessageIdRef: dependencyMap, canAddNewReactions: closure_3, channel: closure_4, messages: closure_5, isMessagesReady: closure_6, uploads: closure_7, roleStyle: closure_8, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, gifAutoPlay: closure_16, timestampHourCycle: closure_17, currentUserId: closure_18, renderCommunicationDisabled: closure_19, selectedSummary: closure_20, selectedConversation: closure_21, enableSwipeActions: closure_22, isResourceChannel: closure_23, shouldObscureSpoiler: closure_24, shouldDisableInteractiveComponents: closure_25, unloadableContentEntryMessageIds: closure_26, containerWidth: closure_27, chatRef: closure_28, loadedRef: closure_29, animatedRef: closure_30, hasMoreMessagesAfterForLastUpdateRef: closure_31, updateNativeRows: closure_32, isLoadingAtTop: closure_33, channelLatestMessageLoadingStatsManager: closure_34, channelId: closure_35, isMessagesCached: closure_36, chatUpdatesQueue: closure_37, shouldJumpToOriginalPost: closure_38, findMessageIndex: closure_39, scrollToTopMessage: closure_40, useReducedMotion: closure_41 } = arg0);
  function scrollToMessageId(chatRef) {
    scrollToMessageId = chatRef.scrollToMessageId;
    let jumpTargetId = chatRef.jumpTargetId;
    if (jumpTargetId === undefined) {
      jumpTargetId = null;
    }
    let ANIMATED = chatRef.jumpType;
    if (ANIMATED === undefined) {
      ANIMATED = flow_Client.JumpType.ANIMATED;
    }
    let TOP = chatRef.scrollPosition;
    if (TOP === undefined) {
      TOP = NativeChatUtils.ChatScrollPosition.TOP;
    }
    let flag = chatRef.minimizeScrolling;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = chatRef.isRescrolling;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = chatRef.hasJumpedToOriginalPost;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let c3;
    const tmp6 = closure_41 || ANIMATED === flow_Client.JumpType.INSTANT;
    const animated = tmp9;
    let obj = PlatformUtils;
    if (obj.isIOS()) {
      if (!flag2) {
        const JumpType = flow_Client.JumpType;
        let INSTANT = tmp6 ? JumpType.INSTANT : JumpType.ANIMATED;
        let c1 = true;
        if (INSTANT === undefined) {
          INSTANT = flow_Client.JumpType.INSTANT;
        }
        if (flag3 === undefined) {
          flag3 = false;
        }
        if (null != scrollToMessageId) {
          const _setTimeout2 = setTimeout;
          const timerId = setTimeout(() => {
            const tmp2 = closure_2_39(scrollToMessageId);
            if (null != tmp2) {
              if (null != dependencyMap.current) {
                let flag = false;
                if (c1) {
                  const obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType: INSTANT, focusTargetId: scrollToMessageId, overrideScrollJumpType: flow_Client.JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost: flag3 };
                  updateRows(obj);
                  flag = true;
                }
                if (!flag) {
                  const obj2 = { animated: INSTANT === flow_Client.JumpType.ANIMATED };
                  const scrollTo = NativeChatUtilsDefault.scrollTo;
                  const current = tmp16.current;
                  NativeChatUtilsDefault;
                  scrollTo(current, tmp2, obj2);
                }
              }
            }
          }, 50);
        }
      }
    }
    let result;
    if (null != selectedConversation) {
      if (scrollToMessageId === selectedConversation.startMessageId) {
        let obj2 = createConversationHeader;
        result = obj2.findConversationHeaderRowIndex(scrollToMessageId.getPreviousRows(), selectedConversation);
      }
    }
    if (result == null) {
      result = closure_39(scrollToMessageId);
    }
    c3 = result;
    if (null != result) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => {
          const obj = NativeChatUtilsDefault;
          const obj2 = { animated, highlight: jumpTargetId === scrollToMessageId };
          obj.scrollIntoView(ref.current, c3, obj2);
        }, 5);
      } else {
        const obj4 = { animated: !tmp6, highlight: jumpTargetId === scrollToMessageId, position: TOP };
        const obj3 = NativeChatUtilsDefault;
        obj3.scrollTo(ref2.current, result, obj4);
      }
    }
  }
  function updateRows() {
    let forceReload;
    let isAnimated;
    let overrideScrollJumpType;
    let tmp30Result;
    let tmp33;
    let updateMessageIds;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.forceRender;
    if (flag === undefined) {
      flag = false;
    }
    ({ updateMessageIds, forceReload } = obj);
    if (updateMessageIds === undefined) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      updateMessageIds = new Set();
    }
    scrollToMessageId = obj.scrollToMessageId;
    if (scrollToMessageId === undefined) {
      scrollToMessageId = null;
    }
    let jumpTargetId = obj.jumpTargetId;
    if (jumpTargetId === undefined) {
      jumpTargetId = null;
    }
    let ANIMATED = obj.jumpType;
    if (ANIMATED === undefined) {
      ANIMATED = flow_Client.JumpType.ANIMATED;
    }
    let focusTargetId = obj.focusTargetId;
    if (focusTargetId === undefined) {
      focusTargetId = null;
    }
    let flag2 = obj.ignoreEmbedDescriptionCache;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = obj.messagesNewlyLoaded;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = obj.shouldInitialScroll;
    if (flag4 === undefined) {
      flag4 = false;
    }
    let flag5 = obj.minimizeScrolling;
    if (flag5 === undefined) {
      flag5 = false;
    }
    let flag6 = obj.isRescrolling;
    if (flag6 === undefined) {
      flag6 = false;
    }
    ({ overrideScrollJumpType, isAnimated } = obj);
    if (isAnimated === undefined) {
      isAnimated = true;
    }
    let flag7 = obj.hasJumpedToOriginalPost;
    if (flag7 === undefined) {
      flag7 = false;
    }
    if (null != ref2.current) {
      let MIDDLE;
      let result;
      let measureResult = null;
      if (null != channel) {
        measureResult = null;
        if (null != messages) {
          measureResult = null;
          if (closure_6) {
            const firstRowGenerator = TTITrackerDefault.firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              require.setup(messages);
              const obj = { inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: dependencyMap.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents };
              importDefault.setOptions(obj);
              const obj2 = { channel, messages, uploads, oldestUnreadMessageId, replyingMessageId, currentUserId, canAddNewReactions: closure_3(), selectedSummary, selectedConversation, chatManager: require, roleStyle, forceRender: flag, updateMessageIds, isResourceChannel, unloadableContentEntryMessageIds };
              const tmp3 = createChannelStreamDefault;
              const tmp3Result = tmp3(obj2);
              for (const item10047 of tmp3Result) {
                let row = require.createRow(importDefault.generate(item10047));
                continue;
              }
              return require.createChangeset();
            });
          }
        }
      }
      const current = ref3.current;
      if (null != selectedSummary) {
        if (selectedSummary.startId === scrollToMessageId) {
          MIDDLE = NativeChatUtils.ChatScrollPosition.MIDDLE;
        }
      }
      if (null != selectedConversation) {
        if (scrollToMessageId === selectedConversation.startMessageId) {
          let obj2 = createConversationHeader;
          result = obj2.findConversationHeaderRowIndex(flag.getPreviousRows(), selectedConversation);
        }
      }
      if (null != measureResult) {
        if (measureResult.length > 0) {
          const obj5 = { rows: flag.getPreviousRows(), scrollToMessageId, jumpTargetId, jumpType: overrideScrollJumpType, shouldInitialScroll: tmp33, animated: ref4.current, scrollPosition: MIDDLE, focusTargetId, scrollToRowIndexOverride: result };
          const tmp30 = computeScrollDataDefault;
          if (overrideScrollJumpType == null) {
            overrideScrollJumpType = messages.jumpType;
          }
          const current2 = ref3.current;
          tmp33 = !current2;
          if (current2) {
            tmp33 = flag4;
          }
          ref3.current = true;
          const obj6 = { rows: measureResult, hasMoreMessagesAfter: messages.hasMoreAfter, isLoadingAtTop: closure_33(measureResult, ref5.current), scrollData: tmp30Result, HACK_iOSForceAnimations: flag3, forceReload, isAnimated };
          tmp30Result = tmp30(obj5);
          closure_32(obj6);
          if (!current) {
            const obj7 = { channelId, areMessagesCached };
            closure_34.finish(obj7);
          }
        }
        const tmp45 = ref3.current && ref3.current !== current && isResourceChannel;
        if (tmp45) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => closure_1_40(), 100);
        }
      }
      if (ref3.current) {
        if (closure_37.hasUpdates()) {
          closure_37.tryFlush();
        }
      }
      if (!ref3.current) {
        if (null != measureResult) {
          if (0 === measureResult.length) {
            const obj4 = NativeChatUtilsDefault;
            obj4.fadeIn(ref2.current);
          }
        }
      }
      if (null != scrollToMessageId) {
        if (!closure_38(flag7)) {
          const obj8 = { scrollToMessageId, jumpTargetId, jumpType: ANIMATED, scrollPosition: MIDDLE, minimizeScrolling: flag5, isRescrolling: flag6, hasJumpedToOriginalPost: flag7 };
          scrollToMessageId(obj8);
        }
      }
      if (null != focusTargetId) {
        const tmp50 = closure_39(focusTargetId);
        if (null != tmp50) {
          const obj9 = NativeChatUtilsDefault;
          obj9.focus(ref2.current, tmp50);
        }
      }
    }
  }
  let obj = {
    createRows(arg0) {
      let closure_0;
      let closure_1;
      let closure_2;
      ({ forceRender: closure_0, updateMessageIds: closure_1, ignoreEmbedDescriptionCache: closure_2 } = arg0);
      let measureResult = null;
      if (null != closure_4) {
        measureResult = null;
        if (null != closure_5) {
          measureResult = null;
          if (closure_6) {
            const firstRowGenerator = TTITrackerDefault.firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              require.setup(messages);
              const obj = { inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: dependencyMap.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents };
              importDefault.setOptions(obj);
              const obj2 = { channel, messages, uploads, oldestUnreadMessageId, replyingMessageId, currentUserId, canAddNewReactions: closure_3(), selectedSummary, selectedConversation, chatManager: require, roleStyle, forceRender: flag, updateMessageIds, isResourceChannel, unloadableContentEntryMessageIds };
              const tmp3 = createChannelStreamDefault;
              const tmp3Result = tmp3(obj2);
              for (const item10047 of tmp3Result) {
                let row = require.createRow(importDefault.generate(item10047));
                continue;
              }
              return require.createChangeset();
            });
          }
        }
      }
      return measureResult;
    },
    updateRows,
    scrollToMessageId,
    maybeRescrollToMessageId(arg0) {
      let flag;
      let flag2;
      let closure_0 = arg0;
      let INSTANT = arg2;
      if (arg2 === undefined) {
        INSTANT = flow_Client.JumpType.INSTANT;
      }
      if (null != arg0) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = closure_2_39(scrollToMessageId);
          if (null != tmp2) {
            if (null != dependencyMap.current) {
              let flag = false;
              if (c1) {
                const obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType: INSTANT, focusTargetId: scrollToMessageId, overrideScrollJumpType: flow_Client.JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost: flag3 };
                updateRows(obj);
                flag = true;
              }
              if (!flag) {
                const obj2 = { animated: INSTANT === flow_Client.JumpType.ANIMATED };
                const scrollTo = NativeChatUtilsDefault.scrollTo;
                const current = tmp16.current;
                NativeChatUtilsDefault;
                scrollTo(current, tmp2, obj2);
              }
            }
          }
        }, 50);
      }
    }
  };
  return obj;
};