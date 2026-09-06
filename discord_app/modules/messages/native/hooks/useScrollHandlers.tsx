// discord_app/modules/messages/native/hooks/useScrollHandlers.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import DimensionActionCreatorsDefault from "../../../../actions/DimensionActionCreators.tsx";
import NativeChatUtilsDefault from "../../../chat/native/NativeChatUtils.tsx";
import ChatChangesetUpdateTracker from "../../../chat/native/ChatChangesetUpdateTracker.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const QuestTypes = tmp(5447);
require = fn;
const useChatBottomManagerUIStore = fn(9485);
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
let closure_6 = new LoggerDefault("useScrollHandlers");
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default function useScrollHandlers(arg0) {
  ({
    chatRef: require,
    chatManager: importDefault,
    chatUpdatesQueue: dependencyMap,
    pendingUpdatesQueueRef: noop,
    animatedRef: closure_4,
    fetchMoreBefore: closure_5,
    fetchMoreAfter: closure_6,
    handleVisibleMessagesChange: closure_7,
    applyNativeRowsUpdate: closure_8,
    messages: closure_9,
    channel: closure_10,
    channelId: closure_11,
    screenIndex: closure_12,
    onScroll: closure_13,
    useReducedMotion: closure_14,
    isStaff: closure_15,
    visibleMessagesWindowHandler: closure_16,
  } = arg0);
  function handleScrollCallbacks(isNearTop) {
    ({ eventTimestamp, isAtBottom, isNearBottom } = isNearTop);
    if (isNearBottom === undefined) {
      isNearBottom = false;
    }
    let flag = isNearTop.isNearTop;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = isNearTop.dragging;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = isNearTop.decelerating;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = isNearTop.isFirstMessageVisible;
    if (flag4 === undefined) {
      flag4 = false;
    }
    if (null != closure_1_10) {
      useIsScreenReaderEnabled;
      const loadingMore = tmp29.loadingMore;
      let tmp6 = !loadingMore;
      if (!loadingMore) {
        if (!flag2) {
          flag2 = flag3;
        }
        if (!flag2) {
          flag2 = tmp5;
        }
        tmp6 = flag2;
      }
      if (tmp6) {
        tmp6 = 0 === ref.current.length;
      }
      if (!ref4.current) {
        if (flag) {
          if (tmp29.hasMoreBefore) {
            if (tmp6) {
              closure_1_4.current = true;
              closure_1_5();
            }
            let obj = { isFirstMessageVisible: flag4 };
            closure_1_13(obj);
            dependencyMap.tryFlush();
            return true;
          }
        }
      }
      if (!ref3.current) {
        if (isNearBottom) {
          if (tmp29.hasMoreAfter) {
            if (tmp6) {
              closure_1_4.current = true;
              logger();
            }
          }
        }
      }
      let current = ref2.current === isAtBottom;
      if (current) {
        current = ref1.current;
      }
      if (!current) {
        obj = DimensionActionCreatorsDefault;
        const id = tmp.id;
        let num = 0;
        if (isAtBottom) {
          num = 1;
        }
        const result = obj.updateChannelDimensions(id, eventTimestamp, num, 1, 0);
        ref1.current = true;
      }
    }
    return false;
  }
  function handleScroll(eventTimestamp) {
    const isAtBottom = eventTimestamp.isAtBottom;
    let isNearBottom = eventTimestamp.isNearBottom;
    if (isNearBottom === undefined) {
      isNearBottom = false;
    }
    let isNearTop = eventTimestamp.isNearTop;
    if (isNearTop === undefined) {
      isNearTop = false;
    }
    let dragging = eventTimestamp.dragging;
    if (dragging === undefined) {
      dragging = false;
    }
    let decelerating = eventTimestamp.decelerating;
    if (decelerating === undefined) {
      decelerating = false;
    }
    let shouldShowJumpToPresent = eventTimestamp.shouldShowJumpToPresent;
    if (shouldShowJumpToPresent === undefined) {
      shouldShowJumpToPresent = false;
    }
    let isFirstMessageVisible = eventTimestamp.isFirstMessageVisible;
    if (isFirstMessageVisible === undefined) {
      isFirstMessageVisible = false;
    }
    if (
      handleScrollCallbacks({
        eventTimestamp: eventTimestamp.eventTimestamp,
        isAtBottom,
        isNearBottom,
        isNearTop,
        dragging,
        decelerating,
        shouldShowJumpToPresent,
        isFirstMessageVisible,
      })
    ) {
      ref2.current = isAtBottom;
      ref3.current = isNearBottom;
      ref4.current = isNearTop;
      ref6.current = dragging;
      ref5.current = decelerating;
      ReactBatchUpdates.batchUpdates(() => {
        hasMoreAfter = shouldShowJumpToPresent;
        if (!shouldShowJumpToPresent) {
          hasMoreAfter = hasMoreAfter.hasMoreAfter;
        }
        hasOwnProperty(closure_2_11, closure_2_12, hasMoreAfter);
        React4(closure_2_12, isAtBottom);
      });
    }
  }
  const ref = noop.useRef(undefined);
  const ref1 = noop.useRef(false);
  const ref2 = noop.useRef(false);
  const ref3 = noop.useRef(false);
  const ref4 = noop.useRef(false);
  const ref5 = noop.useRef(false);
  const ref6 = noop.useRef(false);
  return {
    hasHandledScrollRef: ref1,
    isAtBottomRef: ref2,
    isNearBottomRef: ref3,
    isNearTopRef: ref4,
    deceleratingRef: ref5,
    draggingRef: ref6,
    firstIgnoredScrollEventTimestampRef: ref,
    loadMoreBefore() {
      closure_1_4.current = true;
      closure_1_5();
    },
    loadMoreAfter() {
      closure_1_4.current = true;
      logger();
    },
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        flag = !closure_1_14;
      }
      NativeChatUtilsDefault.scrollToTop(require.current, flag);
    },
    scrollToRelativeOffset(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      if (flag) {
        flag = !closure_1_14;
      }
      const result = NativeChatUtilsDefault.scrollToRelativeOffset(require.current, arg0, flag);
    },
    scrollToTopMessage() {
      previousRows = previousRows.getPreviousRows();
      if (previousRows.length > 0) {
        NativeChatUtilsDefault.scrollTo(require.current, previousRows.length - 1);
      }
    },
    updateNativeRows(isLoadingAtTop) {
      if (dependencyMap.isBlocking) {
        obj.add(isLoadingAtTop);
      } else if (!isLoadingAtTop.isLoadingAtTop) {
        closure_1_8(isLoadingAtTop);
      } else {
        obj.add(isLoadingAtTop);
      }
    },
    handleScrollCallbacks,
    handleScroll,
    handleScrollPosition(arg0) {
      ({ timeStamp, nativeEvent } = arg0);
      ({ firstVisibleMessageIndex, lastVisibleMessageIndex, changesetUpdateId } = nativeEvent);
      ({
        isAtBottom,
        isNearBottom,
        isNearTop,
        dragging,
        decelerating,
        shouldShowJumpToPresent,
        isFirstMessageVisible,
        firstVisibleMessagePercentVisible,
        lastVisibleMessagePercentVisible,
      } = nativeEvent);
      let obj = ChatChangesetUpdateTracker;
      const changesetIdForChat = obj.getChangesetIdForChat(ref.current);
      if (changesetUpdateId !== changesetIdForChat) {
        if (null == ref.current) {
          ref.current = timeStamp;
        }
        if (closure_1_15) {
          logger.log(
            "STAFF-ACK-LOG: Ignoring outdated scroll event.",
            closure_1_11,
            changesetUpdateId,
            changesetIdForChat,
            timeStamp,
          );
        }
      } else {
        obj = {
          firstVisibleMessageRowIndex: firstVisibleMessageIndex,
          lastVisibleMessageRowIndex: lastVisibleMessageIndex,
          firstVisibleMessagePercentVisible,
          lastVisibleMessagePercentVisible,
          source: QuestTypes.QuestsVisibleMessagesChangedSource.SCROLL,
        };
        closure_1_7(obj);
        let current = ref.current;
        if (current == null) {
          current = timeStamp;
        }
        ref.current = undefined;
        obj = {
          eventTimestamp: current,
          isAtBottom,
          isNearBottom,
          isNearTop,
          dragging,
          decelerating,
          shouldShowJumpToPresent,
          isFirstMessageVisible,
        };
        handleScroll(obj);
        const obj1 = {
          rows: previousRows._rows,
          firstVisibleMessageRowIndex: firstVisibleMessageIndex,
          lastVisibleMessageRowIndex: lastVisibleMessageIndex,
        };
        closure_1_16.handleScrollPosition(obj1);
      }
    },
  };
}
