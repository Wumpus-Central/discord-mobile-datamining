// === Module 11102: useScrollHandlers ===

// Module 11102 (useScrollHandlers)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "noop" /* 19 */;
import updateChatInputContainerHeight from "updateChatInputContainerHeight" /* 8758 */;

const require = arg1;
({ updateIsAtBottom: c4, updateShouldShowJumpToPresentButton: c5 } = updateChatInputContainerHeight);
let closure_6 = new timestampDefault("useScrollHandlers");
let tmp3 = new timestampDefault("useScrollHandlers");
let result = require("set").fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default function useScrollHandlers(arg0) {
  ({ chatRef: require, chatManager: importDefault, chatUpdatesQueue: dependencyMap, pendingUpdatesQueueRef: closure_3, animatedRef: closure_4, fetchMoreBefore: closure_5, fetchMoreAfter: closure_6, handleVisibleMessagesChange: closure_7, applyNativeRowsUpdate: closure_8, messages: closure_9, channel: closure_10, channelId: closure_11, screenIndex: closure_12, onScroll: closure_13, useReducedMotion: closure_14, isStaff: closure_15, visibleMessagesWindowHandler: closure_16 } = arg0);
  let ref;
  let ref1;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let ref6;
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
    if (null != closure_10) {
      closure_1_0(closure_1_2[3]);
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
              closure_4.current = true;
              callback();
            }
            let obj = { isFirstMessageVisible: null };
            obj[0] = flag4;
            callback5(obj);
            closure_2.tryFlush();
            return true;
          }
        }
      }
      if (!ref3.current) {
        if (isNearBottom) {
          if (tmp29.hasMoreAfter) {
            if (tmp6) {
              closure_4.current = true;
              callback2();
            }
          }
        }
      }
      let current = ref2.current === isAtBottom;
      if (current) {
        current = ref1.current;
      }
      if (!current) {
        obj = closure_1_1(tmp3[4]);
        const id = tmp.id;
        let num = 0;
        if (isAtBottom) {
          num = 1;
        }
        const result = obj.updateChannelDimensions(id, eventTimestamp, num, 1, 0);
        ref1.current = true;
      }
      tmp3 = closure_1_2;
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
    if (handleScrollCallbacks({ eventTimestamp: eventTimestamp.eventTimestamp, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible })) {
      ref2.current = isAtBottom;
      ref3.current = isNearBottom;
      ref4.current = isNearTop;
      ref6.current = dragging;
      ref5.current = decelerating;
      closure_1_0(closure_1_2[5]).batchUpdates(() => {
        let hasMoreAfter = shouldShowJumpToPresent;
        if (!shouldShowJumpToPresent) {
          hasMoreAfter = closure_1_9.hasMoreAfter;
        }
        closure_2_5(closure_1_11, closure_1_12, hasMoreAfter);
        closure_2_4(closure_1_12, isAtBottom);
      });
      const obj = closure_1_0(closure_1_2[5]);
    }
  }
  ref = React.useRef(undefined);
  ref1 = React.useRef(false);
  ref2 = React.useRef(false);
  ref3 = React.useRef(false);
  ref4 = React.useRef(false);
  ref5 = React.useRef(false);
  ref6 = React.useRef(false);
  return {
    hasHandledScrollRef: ref1,
    isAtBottomRef: ref2,
    isNearBottomRef: ref3,
    isNearTopRef: ref4,
    deceleratingRef: ref5,
    draggingRef: ref6,
    firstIgnoredScrollEventTimestampRef: ref,
    loadMoreBefore() {
      closure_4.current = true;
      callback();
    },
    loadMoreAfter() {
      closure_4.current = true;
      callback2();
    },
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        flag = !closure_14;
      }
      closure_1_1(closure_1_2[6]).scrollToTop(closure_0.current, flag);
    },
    scrollToRelativeOffset(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      if (flag) {
        flag = !closure_14;
      }
      const result = closure_1_1(closure_1_2[6]).scrollToRelativeOffset(closure_0.current, arg0, flag);
    },
    scrollToTopMessage() {
      previousRows = previousRows.getPreviousRows();
      if (previousRows.length > 0) {
        closure_1_1(closure_1_2[6]).scrollTo(closure_0.current, previousRows.length - 1);
        const obj = closure_1_1(closure_1_2[6]);
      }
    },
    updateNativeRows(isLoadingAtTop) {
      if (closure_2.isBlocking) {
        obj.add(isLoadingAtTop);
      } else if (!isLoadingAtTop.isLoadingAtTop) {
        callback4(isLoadingAtTop);
      } else {
        obj.add(isLoadingAtTop);
      }
    },
    handleScrollCallbacks,
    handleScroll,
    handleScrollPosition(arg0) {
      ({ timeStamp, nativeEvent } = arg0);
      ({ firstVisibleMessageIndex, lastVisibleMessageIndex, changesetUpdateId } = nativeEvent);
      ({ isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible } = nativeEvent);
      let obj = closure_1_0(closure_1_2[7]);
      const changesetIdForChat = obj.getChangesetIdForChat(closure_0.current);
      if (changesetUpdateId !== changesetIdForChat) {
        if (null == ref.current) {
          ref.current = timeStamp;
        }
        if (closure_15) {
          closure_1_6.log("STAFF-ACK-LOG: Ignoring outdated scroll event.", closure_11, changesetUpdateId, changesetIdForChat, timeStamp);
        }
      } else {
        obj = { firstVisibleMessageRowIndex: null, lastVisibleMessageRowIndex: null, firstVisibleMessagePercentVisible: null, lastVisibleMessagePercentVisible: null, source: null };
        obj[0] = firstVisibleMessageIndex;
        obj[1] = lastVisibleMessageIndex;
        obj[2] = firstVisibleMessagePercentVisible;
        obj[3] = lastVisibleMessagePercentVisible;
        obj[4] = tmp(tmp2[8]).QuestsVisibleMessagesChangedSource.SCROLL;
        callback3(obj);
        let current = ref.current;
        if (current == null) {
          current = timeStamp;
        }
        ref.current = undefined;
        obj = { eventTimestamp: null, isAtBottom: null, isNearBottom: null, isNearTop: null, dragging: null, decelerating: null, shouldShowJumpToPresent: null, isFirstMessageVisible: null };
        obj[0] = current;
        obj[1] = isAtBottom;
        obj[2] = isNearBottom;
        obj[3] = isNearTop;
        obj[4] = dragging;
        obj[5] = decelerating;
        obj[6] = shouldShowJumpToPresent;
        obj[7] = isFirstMessageVisible;
        handleScroll(obj);
        obj1 = { rows: null, firstVisibleMessageRowIndex: null, lastVisibleMessageRowIndex: null };
        obj1[0] = previousRows._rows;
        obj1[1] = firstVisibleMessageIndex;
        obj1[2] = lastVisibleMessageIndex;
        closure_16.handleScrollPosition(obj1);
      }
      tmp = closure_1_0;
      tmp2 = closure_1_2;
    }
  };
};