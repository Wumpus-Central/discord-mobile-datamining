// === Module 11416: useRowManager ===

// Module 11416 (useRowManager)
import Client from "Client" /* 4759 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 10828 */;
import createChannelStreamDefault from "createChannelStream" /* 11417 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/messages/native/hooks/useRowManager.tsx");

export default function useRowManager(arg0) {
  ({ chatManager: require, rowGenerator: importDefault, animatingStickerMessageIdRef: dependencyMap, canAddNewReactions: closure_3, channel: closure_4, messages: closure_5, isMessagesReady: closure_6, uploads: closure_7, roleStyle: closure_8, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, gifAutoPlay: closure_16, timestampHourCycle: closure_17, currentUserId: closure_18, renderCommunicationDisabled: closure_19, selectedSummary: closure_20, selectedConversation: closure_21, enableSwipeActions: closure_22, isResourceChannel: closure_23, shouldObscureSpoiler: closure_24, shouldDisableInteractiveComponents: closure_25, unloadableContentEntryMessageIds: closure_26, containerWidth: closure_27, chatRef: closure_28, loadedRef: closure_29, animatedRef: closure_30, hasMoreMessagesAfterForLastUpdateRef: closure_31, updateNativeRows: closure_32, isLoadingAtTop: closure_33, channelLatestMessageLoadingStatsManager: closure_34, channelId: closure_35, isMessagesCached: closure_36, chatUpdatesQueue: closure_37, shouldJumpToOriginalPost: closure_38, findMessageIndex: closure_39, scrollToTopMessage: closure_40, useReducedMotion: closure_41 } = arg0);
  function scrollToMessageId(chatRef) {
    scrollToMessageId = chatRef.scrollToMessageId;
    let jumpTargetId = chatRef.jumpTargetId;
    if (jumpTargetId === undefined) {
      jumpTargetId = null;
    }
    let ANIMATED = chatRef.jumpType;
    if (ANIMATED === undefined) {
      ANIMATED = chatManager(ref[2]).JumpType.ANIMATED;
    }
    let TOP = chatRef.scrollPosition;
    if (TOP === undefined) {
      TOP = chatManager(ref[3]).ChatScrollPosition.TOP;
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
    closure_2 = undefined;
    let hasJumpedToOriginalPost;
    let tmp6 = closure_41;
    if (!closure_41) {
      tmp6 = ANIMATED === chatManager(ref[2]).JumpType.INSTANT;
    }
    closure_2 = tmp9;
    if (obj.isIOS()) {
      if (!flag2) {
        const JumpType = chatManager(ref[2]).JumpType;
        let INSTANT = tmp6 ? JumpType.INSTANT : JumpType.ANIMATED;
        closure_129_0 = scrollToMessageId;
        closure_129_1 = true;
        if (INSTANT === undefined) {
          INSTANT = chatManager(ref[2]).JumpType.INSTANT;
        }
        closure_129_2 = INSTANT;
        if (flag3 === undefined) {
          flag3 = false;
        }
        closure_129_3 = flag3;
        if (null != scrollToMessageId) {
          const _setTimeout2 = setTimeout;
          const timerId = setTimeout(() => {
            const tmp2 = closure_2_39(scrollToMessageId);
            if (null != tmp2) {
              if (null != closure_2_28.current) {
                let flag = false;
                if (jumpTargetId) {
                  const obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType, focusTargetId: scrollToMessageId, overrideScrollJumpType: Client.JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost };
                  updateRows(obj);
                  flag = true;
                }
                if (!flag) {
                  const obj3 = { animated: jumpType === Client.JumpType.ANIMATED };
                  NativeChatUtilsDefault.scrollTo(tmp15.current, tmp2, obj3);
                }
              }
            }
          }, 50);
        }
      }
    }
    const tmp15 = closure_39(scrollToMessageId);
    hasJumpedToOriginalPost = tmp15;
    if (null != tmp15) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => {
          NativeChatUtilsDefault.scrollIntoView(closure_2_28.current, closure_3, { animated, highlight: jumpTargetId === scrollToMessageId });
        }, 5);
      } else {
        let obj3 = { animated: tmp9, highlight: jumpTargetId === scrollToMessageId, position: TOP };
        require("NativeChatUtils").scrollTo(closure_28.current, tmp15, obj3);
        let obj2 = require("NativeChatUtils");
      }
    }
    obj = chatManager(ref[4]);
  }
  function updateRows() {
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
      ANIMATED = chatManager(ref[2]).JumpType.ANIMATED;
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
    if (null != closure_28.current) {
      let measureResult = null;
      if (null != closure_4) {
        measureResult = null;
        if (null != messages) {
          measureResult = null;
          if (closure_6) {
            const firstRowGenerator = require("TTITracker").firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              chatManager.setup(messages);
              closure_2_1.setOptions({ inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: ref.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents });
              const obj2 = { channel, messages, uploads, oldestUnreadMessageId, replyingMessageId, currentUserId, canAddNewReactions: closure_2_3(), selectedSummary, selectedConversation, chatManager, roleStyle, forceRender: flag, updateMessageIds, isResourceChannel, unloadableContentEntryMessageIds };
              const obj = { inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: ref.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents };
              for (const item10047 of tmp3Result) {
                let row = chatManager.createRow(closure_2_1.generate(item10047));
                continue;
              }
              return chatManager.createChangeset();
            });
          }
        }
      }
      const current = ref2.current;
      if (null != selectedSummary) {
        if (selectedSummary.startId === scrollToMessageId) {
          const MIDDLE = chatManager(ref[3]).ChatScrollPosition.MIDDLE;
        }
      }
      if (null != measureResult) {
        if (measureResult.length > 0) {
          const obj4 = { rows: flag.getPreviousRows(), scrollToMessageId, jumpTargetId, jumpType: null, shouldInitialScroll: null, animated: null, scrollPosition: null, focusTargetId: null };
          if (overrideScrollJumpType == null) {
            overrideScrollJumpType = messages.jumpType;
          }
          obj4.jumpType = overrideScrollJumpType;
          const current2 = ref2.current;
          let tmp30 = !current2;
          if (current2) {
            tmp30 = flag4;
          }
          obj4.shouldInitialScroll = tmp30;
          obj4.animated = ref3.current;
          obj4.scrollPosition = MIDDLE;
          obj4.focusTargetId = focusTargetId;
          ref2.current = true;
          const obj5 = { rows: measureResult, hasMoreMessagesAfter: messages.hasMoreAfter, isLoadingAtTop: null, scrollData: null, HACK_iOSForceAnimations: null, forceReload: null, isAnimated: null };
          const tmp27 = require("computeScrollData");
          obj5.isLoadingAtTop = closure_33(measureResult, ref4.current);
          obj5.scrollData = require("computeScrollData")(obj4);
          obj5.HACK_iOSForceAnimations = flag3;
          obj5.forceReload = forceReload;
          obj5.isAnimated = isAnimated;
          closure_32(obj5);
          if (!current) {
            const obj6 = { channelId, areMessagesCached };
            closure_34.finish(obj6);
          }
          const tmp27Result = require("computeScrollData")(obj4);
        }
        if (tmp42) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => closure_1_40(), 100);
        }
        tmp42 = ref2.current && ref2.current !== current && closure_23;
      }
      if (ref2.current) {
        if (closure_37.hasUpdates()) {
          closure_37.tryFlush();
        }
      }
      if (!ref2.current) {
        if (null != measureResult) {
          if (0 === measureResult.length) {
            require("NativeChatUtils").fadeIn(closure_28.current);
            const obj3 = require("NativeChatUtils");
          }
        }
      }
      if (null != scrollToMessageId) {
        if (!closure_38(flag7)) {
          const obj7 = { scrollToMessageId, jumpTargetId, jumpType: ANIMATED, scrollPosition: MIDDLE, minimizeScrolling: flag5, isRescrolling: flag6, hasJumpedToOriginalPost: flag7 };
          scrollToMessageId(obj7);
        }
      }
      if (null != focusTargetId) {
        const tmp47 = closure_39(focusTargetId);
        if (null != tmp47) {
          require("NativeChatUtils").focus(closure_28.current, tmp47);
          const obj8 = require("NativeChatUtils");
        }
      }
    }
  }
  return {
    createRows(arg0) {
      ({ forceRender: closure_0, updateMessageIds: closure_1, ignoreEmbedDescriptionCache: closure_2 } = arg0);
      let measureResult = null;
      if (null != closure_4) {
        measureResult = null;
        if (null != closure_5) {
          measureResult = null;
          if (closure_6) {
            const firstRowGenerator = require("TTITracker").firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              chatManager.setup(messages);
              closure_2_1.setOptions({ inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: ref.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents });
              const obj2 = { channel, messages, uploads, oldestUnreadMessageId, replyingMessageId, currentUserId, canAddNewReactions: closure_2_3(), selectedSummary, selectedConversation, chatManager, roleStyle, forceRender: flag, updateMessageIds, isResourceChannel, unloadableContentEntryMessageIds };
              const obj = { inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: ref.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents };
              for (const item10047 of tmp3Result) {
                let row = chatManager.createRow(closure_2_1.generate(item10047));
                continue;
              }
              return chatManager.createChangeset();
            });
          }
        }
      }
      return measureResult;
    },
    updateRows,
    scrollToMessageId,
    maybeRescrollToMessageId(arg0) {
      closure_0 = arg0;
      let INSTANT = arg2;
      if (arg2 === undefined) {
        INSTANT = chatManager(ref[2]).JumpType.INSTANT;
      }
      if (null != arg0) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = closure_2_39(scrollToMessageId);
          if (null != tmp2) {
            if (null != closure_2_28.current) {
              let flag = false;
              if (jumpTargetId) {
                const obj = { scrollToMessageId, jumpTargetId: scrollToMessageId, jumpType, focusTargetId: scrollToMessageId, overrideScrollJumpType: Client.JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost };
                updateRows(obj);
                flag = true;
              }
              if (!flag) {
                const obj3 = { animated: jumpType === Client.JumpType.ANIMATED };
                NativeChatUtilsDefault.scrollTo(tmp15.current, tmp2, obj3);
              }
            }
          }
        }, 50);
      }
    }
  };
};