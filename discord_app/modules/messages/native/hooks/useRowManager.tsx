// === Module 11950: useRowManager ===

// Module 11950 (useRowManager)
import Client from "Client" /* 4491 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 11271 */;
import createChannelStreamDefault from "createChannelStream" /* 11951 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/hooks/useRowManager.tsx");

export default function useRowManager(arg0) {
  ({ chatManager: require, rowGenerator: importDefault, animatingStickerMessageIdRef: dependencyMap, canAddNewReactions: closure_3, channel: closure_4, messages: closure_5, isMessagesReady: closure_6, uploads: closure_7, roleStyle: closure_8, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, gifAutoPlay: closure_16, timestampHourCycle: closure_17, currentUserId: closure_18, renderCommunicationDisabled: closure_19, selectedSummary: closure_20, enableSwipeActions: closure_21, isResourceChannel: closure_22, shouldObscureSpoiler: closure_23, shouldDisableInteractiveComponents: closure_24, unloadableContentEntryMessageIds: closure_25, containerWidth: closure_26, chatRef: closure_27, loadedRef: closure_28, animatedRef: closure_29, hasMoreMessagesAfterForLastUpdateRef: closure_30, updateNativeRows: closure_31, isLoadingAtTop: closure_32, channelLatestMessageLoadingStatsManager: closure_33, channelId: closure_34, isMessagesCached: closure_35, chatUpdatesQueue: closure_36, shouldJumpToOriginalPost: closure_37, findMessageIndex: closure_38, scrollToTopMessage: closure_39, useReducedMotion: closure_40 } = arg0);
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
    let tmp6 = closure_40;
    if (!closure_40) {
      tmp6 = ANIMATED === chatManager(ref[2]).JumpType.INSTANT;
    }
    closure_2 = tmp9;
    let obj = chatManager(ref[4]);
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
            const tmp2 = closure_2_38(scrollToMessageId);
            if (null != tmp2) {
              if (null != closure_2_27.current) {
                let flag = false;
                if (jumpTargetId) {
                  let obj = { scrollToMessageId: tmp, jumpTargetId: tmp, jumpType, focusTargetId: tmp, overrideScrollJumpType: Client.JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost };
                  updateRows(obj);
                  flag = true;
                }
                if (!flag) {
                  obj = { animated: jumpType === Client.JumpType.ANIMATED };
                  NativeChatUtilsDefault.scrollTo(tmp15.current, tmp2, obj);
                }
              }
            }
          }, 50);
        }
      }
    }
    const tmp15 = closure_38(scrollToMessageId);
    hasJumpedToOriginalPost = tmp15;
    if (null != tmp15) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => {
          const obj = { animated, highlight: jumpTargetId === scrollToMessageId };
          obj.scrollIntoView(closure_2_27.current, closure_3, obj);
        }, 5);
      } else {
        obj = { animated: tmp9, highlight: jumpTargetId === scrollToMessageId, position: TOP };
        require("NativeChatUtils").scrollTo(closure_27.current, tmp15, obj);
        let obj2 = require("NativeChatUtils");
      }
    }
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
    if (null != closure_27.current) {
      let measureResult = null;
      if (null != closure_4) {
        measureResult = null;
        if (null != messages) {
          measureResult = null;
          if (closure_6) {
            const firstRowGenerator = require("TTITracker").firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              chatManager.setup(messages);
              let obj = { inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: ref.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents };
              closure_2_1.setOptions(obj);
              obj = { channel, messages, uploads, oldestUnreadMessageId, replyingMessageId, currentUserId, canAddNewReactions: closure_2_3(), selectedSummary, chatManager, roleStyle, forceRender: flag, updateMessageIds, isResourceChannel, unloadableContentEntryMessageIds };
              for (const item10046 of tmp3Result) {
                let row = chatManager.createRow(closure_2_1.generate(item10046));
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
          obj = { rows: flag.getPreviousRows(), scrollToMessageId, jumpTargetId, jumpType: null, shouldInitialScroll: null, animated: null, scrollPosition: null, focusTargetId: null };
          if (overrideScrollJumpType == null) {
            overrideScrollJumpType = messages.jumpType;
          }
          obj.jumpType = overrideScrollJumpType;
          const current2 = tmp15.current;
          let tmp30 = !current2;
          if (current2) {
            tmp30 = flag4;
          }
          obj.shouldInitialScroll = tmp30;
          obj.animated = ref3.current;
          obj.scrollPosition = MIDDLE;
          obj.focusTargetId = focusTargetId;
          tmp15.current = true;
          obj = { rows: measureResult, hasMoreMessagesAfter: messages.hasMoreAfter, isLoadingAtTop: null, scrollData: null, HACK_iOSForceAnimations: null, forceReload: null, isAnimated: null };
          const tmp27 = require("computeScrollData");
          obj.isLoadingAtTop = closure_32(measureResult, ref4.current);
          obj.scrollData = require("computeScrollData")(obj);
          obj.HACK_iOSForceAnimations = flag3;
          obj.forceReload = forceReload;
          obj.isAnimated = isAnimated;
          closure_31(obj);
          if (!current) {
            let obj1 = { channelId, areMessagesCached };
            closure_33.finish(obj1);
          }
          const tmp27Result = require("computeScrollData")(obj);
        }
        if (tmp42) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => closure_1_39(), 100);
        }
        tmp42 = tmp15.current && tmp15.current !== current && closure_22;
      }
      if (ref2.current) {
        obj1 = closure_36;
        if (closure_36.hasUpdates()) {
          obj1.tryFlush();
        }
      }
      if (!ref2.current) {
        if (null != measureResult) {
          if (0 === measureResult.length) {
            let obj2 = require("NativeChatUtils");
            obj2.fadeIn(tmp9.current);
          }
        }
      }
      if (null != scrollToMessageId) {
        if (!closure_37(flag7)) {
          obj2 = { scrollToMessageId, jumpTargetId, jumpType: ANIMATED, scrollPosition: MIDDLE, minimizeScrolling: flag5, isRescrolling: flag6, hasJumpedToOriginalPost: flag7 };
          scrollToMessageId(obj2);
        }
      }
      if (null != focusTargetId) {
        const tmp47 = closure_38(focusTargetId);
        if (null != tmp47) {
          require("NativeChatUtils").focus(tmp9.current, tmp47);
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
              let obj = { inlineAttachmentMedia, inlineEmbedMedia, renderEmbeds, renderReactions, animateEmoji, animatingStickerMessageId: ref.current, constrainedWidth, gifAutoPlay, timestampHourCycle, renderCommunicationDisabled, ignoreEmbedDescriptionCache: flag2, enableSwipeActions, shouldObscureSpoiler, shouldDisableInteractiveComponents };
              closure_2_1.setOptions(obj);
              obj = { channel, messages, uploads, oldestUnreadMessageId, replyingMessageId, currentUserId, canAddNewReactions: closure_2_3(), selectedSummary, chatManager, roleStyle, forceRender: flag, updateMessageIds, isResourceChannel, unloadableContentEntryMessageIds };
              for (const item10046 of tmp3Result) {
                let row = chatManager.createRow(closure_2_1.generate(item10046));
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
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let INSTANT = arg2;
      if (arg2 === undefined) {
        INSTANT = chatManager(ref[2]).JumpType.INSTANT;
      }
      let flag2 = arg3;
      if (arg3 === undefined) {
        flag2 = false;
      }
      if (null != arg0) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = closure_2_38(scrollToMessageId);
          if (null != tmp2) {
            if (null != closure_2_27.current) {
              let flag = false;
              if (jumpTargetId) {
                let obj = { scrollToMessageId: tmp, jumpTargetId: tmp, jumpType, focusTargetId: tmp, overrideScrollJumpType: Client.JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost };
                updateRows(obj);
                flag = true;
              }
              if (!flag) {
                obj = { animated: jumpType === Client.JumpType.ANIMATED };
                NativeChatUtilsDefault.scrollTo(tmp15.current, tmp2, obj);
              }
            }
          }
        }, 50);
      }
    }
  };
};