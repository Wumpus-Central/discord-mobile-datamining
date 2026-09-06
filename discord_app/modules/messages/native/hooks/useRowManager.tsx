// === Module 11950: useRowManager ===

// Module 11950 (useRowManager)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/native/hooks/useRowManager.tsx");

export default function useRowManager(arg0) {
  ({ chatManager: require, rowGenerator: importDefault, animatingStickerMessageIdRef: dependencyMap, canAddNewReactions: closure_3, channel: closure_4, messages: closure_5, isMessagesReady: closure_6, uploads: closure_7, roleStyle: closure_8, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, gifAutoPlay: closure_16, timestampHourCycle: closure_17, currentUserId: closure_18, renderCommunicationDisabled: closure_19, selectedSummary: closure_20, enableSwipeActions: closure_21, isResourceChannel: closure_22, shouldObscureSpoiler: closure_23, shouldDisableInteractiveComponents: closure_24, unloadableContentEntryMessageIds: closure_25, containerWidth: closure_26, chatRef: closure_27, loadedRef: closure_28, animatedRef: closure_29, hasMoreMessagesAfterForLastUpdateRef: closure_30, updateNativeRows: closure_31, isLoadingAtTop: closure_32, channelLatestMessageLoadingStatsManager: closure_33, channelId: closure_34, isMessagesCached: closure_35, chatUpdatesQueue: closure_36, shouldJumpToOriginalPost: closure_37, findMessageIndex: closure_38, scrollToTopMessage: closure_39, useReducedMotion: closure_40 } = arg0);
  function scrollToMessageId(scrollToMessageId) {
    scrollToMessageId = scrollToMessageId.scrollToMessageId;
    let jumpTargetId = scrollToMessageId.jumpTargetId;
    if (jumpTargetId === undefined) {
      jumpTargetId = null;
    }
    c1 = jumpTargetId;
    let ANIMATED = scrollToMessageId.jumpType;
    if (ANIMATED === undefined) {
      ANIMATED = closure_1_0(closure_1_2[2]).JumpType.ANIMATED;
    }
    let TOP = scrollToMessageId.scrollPosition;
    if (TOP === undefined) {
      TOP = closure_1_0(closure_1_2[3]).ChatScrollPosition.TOP;
    }
    let flag = scrollToMessageId.minimizeScrolling;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = scrollToMessageId.isRescrolling;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = scrollToMessageId.hasJumpedToOriginalPost;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let INSTANT;
    closure_3 = undefined;
    let tmp6 = closure_40;
    if (!closure_40) {
      tmp6 = ANIMATED === closure_1_0(closure_1_2[2]).JumpType.INSTANT;
    }
    INSTANT = tmp9;
    let obj = closure_1_0(closure_1_2[4]);
    if (obj.isIOS()) {
      if (!flag2) {
        const JumpType = closure_1_0(closure_1_2[2]).JumpType;
        INSTANT = tmp6 ? JumpType.INSTANT : JumpType.ANIMATED;
        c1 = true;
        if (INSTANT === undefined) {
          INSTANT = closure_1_0(closure_1_2[2]).JumpType.INSTANT;
        }
        if (flag3 === undefined) {
          flag3 = false;
        }
        closure_3 = flag3;
        if (null != scrollToMessageId) {
          const _setTimeout2 = setTimeout;
          const timerId = setTimeout(() => {
            const tmp2 = closure_1_38(scrollToMessageId);
            if (null != tmp2) {
              if (null != closure_1_27.current) {
                let flag = false;
                if (c1) {
                  let obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, overrideScrollJumpType: null, isRescrolling: true, hasJumpedToOriginalPost: null };
                  obj[0] = tmp;
                  obj[1] = tmp;
                  obj[2] = INSTANT;
                  obj[3] = tmp;
                  obj[4] = closure_2_0(closure_2_2[2]).JumpType.INSTANT;
                  obj[6] = closure_3;
                  closure_1_42(obj);
                  flag = true;
                }
                if (!flag) {
                  obj = { animated: null };
                  obj[0] = INSTANT === closure_2_0(closure_2_2[2]).JumpType.ANIMATED;
                  closure_2_1(closure_2_2[3]).scrollTo(tmp15.current, tmp2, obj);
                  const obj2 = closure_2_1(closure_2_2[3]);
                }
              }
            }
          }, 50);
        }
      }
    }
    const tmp15 = callback4(scrollToMessageId);
    closure_3 = tmp15;
    if (null != tmp15) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => {
          let obj = closure_2_1(closure_2_2[3]);
          obj = { animated: INSTANT, highlight: c1 === scrollToMessageId };
          obj.scrollIntoView(closure_1_27.current, closure_3, obj);
        }, 5);
      } else {
        obj = { animated: null, highlight: null, position: null };
        obj[0] = tmp9;
        obj[1] = jumpTargetId === scrollToMessageId;
        obj[2] = TOP;
        closure_1_1(closure_1_2[3]).scrollTo(ref.current, tmp15, obj);
        let obj2 = closure_1_1(closure_1_2[3]);
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
      ANIMATED = closure_1_0(closure_1_2[2]).JumpType.ANIMATED;
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
    if (null != ref.current) {
      let measureResult = null;
      if (null != closure_4) {
        measureResult = null;
        if (null != closure_5) {
          measureResult = null;
          if (closure_6) {
            const firstRowGenerator = closure_1_1(closure_1_2[0]).firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              flag.setup(closure_1_5);
              let obj = { inlineAttachmentMedia: closure_1_11, inlineEmbedMedia: closure_1_12, renderEmbeds: closure_1_13, renderReactions: closure_1_14, animateEmoji: closure_1_15, animatingStickerMessageId: flag2.current, constrainedWidth: closure_1_26, gifAutoPlay: closure_1_16, timestampHourCycle: closure_1_17, renderCommunicationDisabled: closure_1_19, ignoreEmbedDescriptionCache: flag2, enableSwipeActions: closure_1_21, shouldObscureSpoiler: closure_1_23, shouldDisableInteractiveComponents: closure_1_24 };
              updateMessageIds.setOptions(obj);
              obj = { channel: closure_1_4, messages: closure_1_5, uploads: closure_1_7, oldestUnreadMessageId: closure_1_9, replyingMessageId: closure_1_10, currentUserId: closure_1_18, canAddNewReactions: closure_1_3(), selectedSummary: closure_1_20, chatManager: flag, roleStyle: closure_1_8, forceRender: flag, updateMessageIds, isResourceChannel: closure_1_22, unloadableContentEntryMessageIds: closure_1_25 };
              const tmp3 = closure_2_1(closure_2_2[1]);
              for (const item10046 of tmp3Result) {
                let tmp5 = updateMessageIds;
                let tmp6 = flag;
                let row = flag.createRow(updateMessageIds.generate(item10046));
                continue;
              }
              return flag.createChangeset();
            });
          }
        }
      }
      const current = ref2.current;
      if (null != startId) {
        if (startId.startId === scrollToMessageId) {
          const MIDDLE = closure_1_0(closure_1_2[3]).ChatScrollPosition.MIDDLE;
        }
      }
      if (null != measureResult) {
        if (measureResult.length > 0) {
          obj = { rows: null, scrollToMessageId: null, jumpTargetId: null, jumpType: null, shouldInitialScroll: null, animated: null, scrollPosition: null, focusTargetId: null };
          obj[0] = flag.getPreviousRows();
          obj[1] = scrollToMessageId;
          obj[2] = jumpTargetId;
          if (overrideScrollJumpType == null) {
            overrideScrollJumpType = closure_5.jumpType;
          }
          obj[3] = overrideScrollJumpType;
          const current2 = tmp15.current;
          let tmp30 = !current2;
          if (current2) {
            tmp30 = flag4;
          }
          obj[4] = tmp30;
          obj[5] = ref3.current;
          obj[6] = MIDDLE;
          obj[7] = focusTargetId;
          tmp15.current = true;
          obj = { rows: null, hasMoreMessagesAfter: null, isLoadingAtTop: null, scrollData: null, HACK_iOSForceAnimations: null, forceReload: null, isAnimated: null };
          obj[0] = measureResult;
          obj[1] = closure_5.hasMoreAfter;
          const tmp27 = closure_1_1(closure_1_2[5]);
          obj[2] = callback2(measureResult, ref4.current);
          obj[3] = closure_1_1(closure_1_2[5])(obj);
          obj[4] = flag3;
          obj[5] = forceReload;
          obj[6] = isAnimated;
          callback(obj);
          if (!current) {
            obj1 = { channelId: null, areMessagesCached: null };
            obj1[0] = closure_34;
            obj1[1] = closure_35;
            closure_33.finish(obj1);
          }
          const tmp27Result = closure_1_1(closure_1_2[5])(obj);
        }
        if (tmp42) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => callback(), 100);
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
            let obj2 = closure_1_1(closure_1_2[3]);
            obj2.fadeIn(tmp9.current);
          }
        }
      }
      if (null != scrollToMessageId) {
        if (!callback3(flag7)) {
          obj2 = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, scrollPosition: null, minimizeScrolling: null, isRescrolling: null, hasJumpedToOriginalPost: null };
          obj2[0] = scrollToMessageId;
          obj2[1] = jumpTargetId;
          obj2[2] = ANIMATED;
          obj2[3] = MIDDLE;
          obj2[4] = flag5;
          obj2[5] = flag6;
          obj2[6] = flag7;
          scrollToMessageId(obj2);
        }
      }
      if (null != focusTargetId) {
        const tmp47 = callback4(focusTargetId);
        if (null != tmp47) {
          closure_1_1(closure_1_2[3]).focus(tmp9.current, tmp47);
          const obj8 = closure_1_1(closure_1_2[3]);
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
            const firstRowGenerator = closure_1_1(closure_1_2[0]).firstRowGenerator;
            measureResult = firstRowGenerator.measure(() => {
              flag.setup(closure_1_5);
              let obj = { inlineAttachmentMedia: closure_1_11, inlineEmbedMedia: closure_1_12, renderEmbeds: closure_1_13, renderReactions: closure_1_14, animateEmoji: closure_1_15, animatingStickerMessageId: flag2.current, constrainedWidth: closure_1_26, gifAutoPlay: closure_1_16, timestampHourCycle: closure_1_17, renderCommunicationDisabled: closure_1_19, ignoreEmbedDescriptionCache: flag2, enableSwipeActions: closure_1_21, shouldObscureSpoiler: closure_1_23, shouldDisableInteractiveComponents: closure_1_24 };
              updateMessageIds.setOptions(obj);
              obj = { channel: closure_1_4, messages: closure_1_5, uploads: closure_1_7, oldestUnreadMessageId: closure_1_9, replyingMessageId: closure_1_10, currentUserId: closure_1_18, canAddNewReactions: closure_1_3(), selectedSummary: closure_1_20, chatManager: flag, roleStyle: closure_1_8, forceRender: flag, updateMessageIds, isResourceChannel: closure_1_22, unloadableContentEntryMessageIds: closure_1_25 };
              const tmp3 = closure_2_1(closure_2_2[1]);
              for (const item10046 of tmp3Result) {
                let tmp5 = updateMessageIds;
                let tmp6 = flag;
                let row = flag.createRow(updateMessageIds.generate(item10046));
                continue;
              }
              return flag.createChangeset();
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
        INSTANT = closure_1_0(closure_1_2[2]).JumpType.INSTANT;
      }
      let flag2 = arg3;
      if (arg3 === undefined) {
        flag2 = false;
      }
      if (null != arg0) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const tmp2 = closure_1_38(scrollToMessageId);
          if (null != tmp2) {
            if (null != closure_1_27.current) {
              let flag = false;
              if (c1) {
                let obj = { scrollToMessageId: null, jumpTargetId: null, jumpType: null, focusTargetId: null, overrideScrollJumpType: null, isRescrolling: true, hasJumpedToOriginalPost: null };
                obj[0] = tmp;
                obj[1] = tmp;
                obj[2] = INSTANT;
                obj[3] = tmp;
                obj[4] = closure_2_0(closure_2_2[2]).JumpType.INSTANT;
                obj[6] = closure_3;
                closure_1_42(obj);
                flag = true;
              }
              if (!flag) {
                obj = { animated: null };
                obj[0] = INSTANT === closure_2_0(closure_2_2[2]).JumpType.ANIMATED;
                closure_2_1(closure_2_2[3]).scrollTo(tmp15.current, tmp2, obj);
                const obj2 = closure_2_1(closure_2_2[3]);
              }
            }
          }
        }, 50);
      }
    }
  };
};