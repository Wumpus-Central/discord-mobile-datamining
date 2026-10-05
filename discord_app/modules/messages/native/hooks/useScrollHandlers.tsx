// === Module 11158: useScrollHandlers ===

// Module 11158 (useScrollHandlers)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 1259 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5770 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 9989 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 9991 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10717 */;
import react from "react" /* 19 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9064 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let batchUpdatesResult, chatRef, importDefault, ref, ref2, tmp12, tmp13, tmp14, tmp2, tmp5, tmp7, tmp8;

let closure_4;
let hasOwnProperty;
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
let tmp3 = new LoggerDefault("useScrollHandlers");
let closure_6 = tmp3;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((chatRef) => {
  let chatUpdatesQueue;
  let obj = chatRef(chatUpdatesQueue[4]);
  const cResult = obj.c(49);
  chatRef = chatRef.chatRef;
  const chatManager = chatRef.chatManager;
  chatUpdatesQueue = chatRef.chatUpdatesQueue;
  const pendingUpdatesQueueRef = chatRef.pendingUpdatesQueueRef;
  const animatedRef = chatRef.animatedRef;
  const fetchMoreBefore = chatRef.fetchMoreBefore;
  const fetchMoreAfter = chatRef.fetchMoreAfter;
  let closure_7 = chatRef.handleVisibleMessagesChange;
  const applyNativeRowsUpdate = chatRef.applyNativeRowsUpdate;
  const messages = chatRef.messages;
  const channel = chatRef.channel;
  const channelId = chatRef.channelId;
  const screenIndex = chatRef.screenIndex;
  const onScroll = chatRef.onScroll;
  const useReducedMotion = chatRef.useReducedMotion;
  const isStaff = chatRef.isStaff;
  let closure_16 = chatRef.visibleMessagesWindowHandler;
  ref = pendingUpdatesQueueRef.useRef(undefined);
  const ref1 = pendingUpdatesQueueRef.useRef(false);
  ref2 = pendingUpdatesQueueRef.useRef(false);
  const ref3 = pendingUpdatesQueueRef.useRef(false);
  const ref4 = pendingUpdatesQueueRef.useRef(false);
  const ref5 = pendingUpdatesQueueRef.useRef(false);
  const ref6 = pendingUpdatesQueueRef.useRef(false);
  if (cResult[0] === animatedRef) {
    let tmp9;
    if (cResult[1] === fetchMoreBefore) {
      tmp9 = cResult[2];
    }
    let closure_24 = tmp9;
    if (cResult[3] === animatedRef) {
      let tmp10;
      if (cResult[4] === fetchMoreAfter) {
        tmp10 = cResult[5];
      }
      let closure_25 = tmp10;
      if (cResult[6] === chatRef) {
        if (cResult[7] === useReducedMotion) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === chatRef) {
          if (cResult[12] === chatManager) {
            if (cResult[15] === applyNativeRowsUpdate) {
              if (cResult[18] === channel) {
                if (cResult[19] === chatUpdatesQueue) {
                  if (cResult[20] === tmp10) {
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === messages) {
                        if (cResult[23] === onScroll) {
                          let tmp16;
                          if (cResult[24] === pendingUpdatesQueueRef) {
                            tmp16 = cResult[25];
                          }
                          let closure_26 = tmp16;
                          class W {
                            constructor(isLoadingAtTop) {
                              if (chatUpdatesQueue.isBlocking) {
                                chatUpdatesQueue.add(isLoadingAtTop);
                              } else if (!isLoadingAtTop.isLoadingAtTop) {
                                applyNativeRowsUpdate(isLoadingAtTop);
                              } else {
                                chatUpdatesQueue.add(isLoadingAtTop);
                              }
                            }
                          }
                          class X {
                            constructor(arg0) {
                              isAtBottom = chatRef.isAtBottom;
                              ({ isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible } = chatRef);
                              tmp = undefined !== isNearBottom;
                              eventTimestamp = chatRef.eventTimestamp;
                              if (tmp) {
                                tmp = isNearBottom;
                              }
                              tmp2 = undefined !== isNearTop && isNearTop;
                              tmp3 = undefined !== dragging && dragging;
                              tmp4 = undefined !== decelerating && decelerating;
                              tmp5 = undefined !== shouldShowJumpToPresent && shouldShowJumpToPresent;
                              shouldShowJumpToPresent = tmp5;
                              obj = { eventTimestamp, isAtBottom, isNearBottom: tmp, isNearTop: tmp2, dragging: tmp3, decelerating: tmp4, shouldShowJumpToPresent: tmp5, isFirstMessageVisible: null };
                              tmp7 = undefined !== isFirstMessageVisible;
                              tmp6 = closure_26;
                              if (tmp7) {
                                tmp7 = isFirstMessageVisible;
                              }
                              obj.isFirstMessageVisible = tmp7;
                              if (tmp6(obj)) {
                                tmp8 = closure_19;
                                closure_19.current = isAtBottom;
                                tmp9 = closure_20;
                                closure_20.current = tmp;
                                tmp10 = closure_21;
                                closure_21.current = tmp2;
                                tmp11 = closure_23;
                                closure_23.current = tmp3;
                                tmp12 = closure_22;
                                closure_22.current = tmp4;
                                tmp13 = chatRef;
                                tmp14 = chatUpdatesQueue;
                                obj2 = chatRef(chatUpdatesQueue[8]);
                                batchUpdatesResult = obj2.batchUpdates(() => {
                                  const hasMoreAfter = closure_1 || messages.hasMoreAfter;
                                  hasOwnProperty(channelId, screenIndex, hasMoreAfter);
                                  React3(screenIndex, isAtBottom);
                                });
                              }
                              return;
                            }
                          }
                          cResult[26] = channelId;
                          cResult[27] = tmp16;
                          cResult[28] = messages;
                          cResult[29] = screenIndex;
                          cResult[30] = X;
                        }
                      }
                    }
                  }
                }
              }
              class W {
                constructor(isLoadingAtTop) {
                  if (chatUpdatesQueue.isBlocking) {
                    chatUpdatesQueue.add(isLoadingAtTop);
                  } else if (!isLoadingAtTop.isLoadingAtTop) {
                    applyNativeRowsUpdate(isLoadingAtTop);
                  } else {
                    chatUpdatesQueue.add(isLoadingAtTop);
                  }
                }
              }
              class Q {
                constructor(arg0) {
                  let tmp = undefined === arg0 || arg0;
                  const scrollToTop = NativeChatUtilsDefault.scrollToTop;
                  const current = chatRef.current;
                  NativeChatUtilsDefault;
                  if (tmp) {
                    tmp = !useReducedMotion;
                  }
                  scrollToTop(current, tmp);
                }
              }
              cResult[18] = channel;
              cResult[19] = chatUpdatesQueue;
              cResult[20] = tmp10;
              cResult[21] = tmp9;
              cResult[22] = messages;
              cResult[23] = onScroll;
              cResult[24] = pendingUpdatesQueueRef;
              cResult[25] = tmp17;
              tmp16 = tmp17;
            }
            class W {
              constructor(isLoadingAtTop) {
                if (chatUpdatesQueue.isBlocking) {
                  chatUpdatesQueue.add(isLoadingAtTop);
                } else if (!isLoadingAtTop.isLoadingAtTop) {
                  applyNativeRowsUpdate(isLoadingAtTop);
                } else {
                  chatUpdatesQueue.add(isLoadingAtTop);
                }
              }
            }
            class Q {
              constructor(arg0) {
                let tmp = undefined === arg0 || arg0;
                const scrollToTop = NativeChatUtilsDefault.scrollToTop;
                const current = chatRef.current;
                NativeChatUtilsDefault;
                if (tmp) {
                  tmp = !useReducedMotion;
                }
                scrollToTop(current, tmp);
              }
            }
            cResult[15] = applyNativeRowsUpdate;
            cResult[16] = chatUpdatesQueue;
            cResult[17] = W;
          }
          class G {
            constructor() {
              const previousRows = chatManager.getPreviousRows();
              if (previousRows.length > 0) {
                const obj = NativeChatUtilsDefault;
                obj.scrollTo(chatRef.current, previousRows.length - 1);
              }
            }
          }
          class Q {
            constructor(arg0) {
              let tmp = undefined === arg0 || arg0;
              const scrollToTop = NativeChatUtilsDefault.scrollToTop;
              const current = chatRef.current;
              NativeChatUtilsDefault;
              if (tmp) {
                tmp = !useReducedMotion;
              }
              scrollToTop(current, tmp);
            }
          }
          cResult[12] = chatManager;
          cResult[13] = chatRef;
          cResult[14] = G;
        }
        class Q {
          constructor(arg0) {
            let tmp = undefined === arg0 || arg0;
            const scrollToTop = NativeChatUtilsDefault.scrollToTop;
            const current = chatRef.current;
            NativeChatUtilsDefault;
            if (tmp) {
              tmp = !useReducedMotion;
            }
            scrollToTop(current, tmp);
          }
        }
        cResult[9] = chatRef;
        cResult[10] = useReducedMotion;
        cResult[11] = tmp13;
      }
      class Q {
        constructor(arg0) {
          let tmp = undefined === arg0 || arg0;
          const scrollToTop = NativeChatUtilsDefault.scrollToTop;
          const current = chatRef.current;
          NativeChatUtilsDefault;
          if (tmp) {
            tmp = !useReducedMotion;
          }
          scrollToTop(current, tmp);
        }
      }
      cResult[6] = chatRef;
      cResult[7] = useReducedMotion;
      cResult[8] = Q;
      tmp11 = Q;
    }
    class E {
      constructor() {
        animatedRef.current = true;
        fetchMoreAfter();
      }
    }
    let num = 3;
    cResult[3] = animatedRef;
    cResult[4] = fetchMoreAfter;
    cResult[5] = E;
    tmp10 = E;
  }
  const fn = function c() {
    animatedRef.current = true;
    fetchMoreBefore();
  };
  cResult[0] = animatedRef;
  cResult[1] = fetchMoreBefore;
  cResult[2] = fn;
  tmp9 = fn;
}) : ((arg0) => {
  let closure_10;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_4;
  let closure_5;
  let closure_7;
  let closure_8;
  let closure_9;
  let logger;
  let previousRows;
  ({ chatRef: require, chatManager: importDefault, chatUpdatesQueue: dependencyMap, pendingUpdatesQueueRef: react, animatedRef: closure_4, fetchMoreBefore: closure_5, fetchMoreAfter: closure_6, handleVisibleMessagesChange: closure_7, applyNativeRowsUpdate: closure_8, messages: closure_9, channel: closure_10, channelId: closure_11, screenIndex: closure_12, onScroll: closure_13, useReducedMotion: closure_14, isStaff: closure_15, visibleMessagesWindowHandler: closure_16 } = arg0);
  function handleScrollCallbacks(isNearTop) {
    let eventTimestamp;
    let isAtBottom;
    let isNearBottom;
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
      useIsScreenReaderEnabled;
      let tmp6 = !closure_9.loadingMore;
      if (tmp6) {
        if (!flag2) {
          flag2 = flag3;
        }
        if (!flag2) {
          flag2 = tmp5;
        }
        tmp6 = flag2;
      }
      if (tmp6) {
        tmp6 = 0 === react.current.length;
      }
      if (!ref4.current) {
        if (flag) {
          if (closure_9.hasMoreBefore) {
            if (tmp6) {
              closure_4.current = true;
              closure_5();
            }
            const obj = { isFirstMessageVisible: flag4 };
            closure_13(obj);
            dependencyMap.tryFlush();
            return true;
          }
        }
      }
      if (!ref3.current) {
        if (isNearBottom) {
          if (closure_9.hasMoreAfter) {
            if (tmp6) {
              closure_4.current = true;
              logger();
            }
          }
        }
      }
      const current = ref2.current === isAtBottom && ref1.current;
      if (!current) {
        const id = tmp.id;
        let num = 0;
        const updateChannelDimensions = DimensionActionCreatorsDefault.updateChannelDimensions;
        if (isAtBottom) {
          num = 1;
        }
        const result = updateChannelDimensions(id, eventTimestamp, num, 1, 0);
        ref1.current = true;
      }
    }
    return false;
  }
  function handleScroll(isAtBottom) {
    isAtBottom = isAtBottom.isAtBottom;
    let isNearBottom = isAtBottom.isNearBottom;
    const eventTimestamp = isAtBottom.eventTimestamp;
    if (isNearBottom === undefined) {
      isNearBottom = false;
    }
    let isNearTop = isAtBottom.isNearTop;
    if (isNearTop === undefined) {
      isNearTop = false;
    }
    let dragging = isAtBottom.dragging;
    if (dragging === undefined) {
      dragging = false;
    }
    let decelerating = isAtBottom.decelerating;
    if (decelerating === undefined) {
      decelerating = false;
    }
    let shouldShowJumpToPresent = isAtBottom.shouldShowJumpToPresent;
    if (shouldShowJumpToPresent === undefined) {
      shouldShowJumpToPresent = false;
    }
    let isFirstMessageVisible = isAtBottom.isFirstMessageVisible;
    if (isFirstMessageVisible === undefined) {
      isFirstMessageVisible = false;
    }
    if (handleScrollCallbacks({ eventTimestamp, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible })) {
      ref2.current = isAtBottom;
      ref3.current = isNearBottom;
      ref4.current = isNearTop;
      ref6.current = dragging;
      ref5.current = decelerating;
      const obj = react_native;
      obj.batchUpdates(() => {
        hasMoreAfter = shouldShowJumpToPresent || hasMoreAfter.hasMoreAfter;
        hasOwnProperty(closure_11, closure_12, hasMoreAfter);
        React3(closure_12, isAtBottom);
      });
    }
  }
  ref = react.useRef(undefined);
  const ref1 = react.useRef(false);
  ref2 = react.useRef(false);
  const ref3 = react.useRef(false);
  const ref4 = react.useRef(false);
  const ref5 = react.useRef(false);
  const ref6 = react.useRef(false);
  let obj = {
    hasHandledScrollRef: ref1,
    isAtBottomRef: ref2,
    isNearBottomRef: ref3,
    isNearTopRef: ref4,
    deceleratingRef: ref5,
    draggingRef: ref6,
    firstIgnoredScrollEventTimestampRef: ref,
    loadMoreBefore() {
      closure_4.current = true;
      closure_5();
    },
    loadMoreAfter() {
      closure_4.current = true;
      logger();
    },
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const scrollToTop = NativeChatUtilsDefault.scrollToTop;
      const current = require.current;
      NativeChatUtilsDefault;
      if (flag) {
        flag = !closure_14;
      }
      scrollToTop(current, flag);
    },
    scrollToRelativeOffset(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
      const current = require.current;
      NativeChatUtilsDefault;
      if (flag) {
        flag = !closure_14;
      }
      const result = scrollToRelativeOffset(current, arg0, flag);
    },
    scrollToTopMessage() {
      importDefault = importDefault.getPreviousRows();
      if (importDefault.length > 0) {
        const obj = NativeChatUtilsDefault;
        obj.scrollTo(require.current, importDefault.length - 1);
      }
    },
    updateNativeRows(isLoadingAtTop) {
      if (dependencyMap.isBlocking) {
        dependencyMap.add(isLoadingAtTop);
      } else if (!isLoadingAtTop.isLoadingAtTop) {
        closure_8(isLoadingAtTop);
      } else {
        dependencyMap.add(isLoadingAtTop);
      }
    },
    handleScrollCallbacks,
    handleScroll,
    handleScrollPosition(arg0) {
      let changesetUpdateId;
      let decelerating;
      let dragging;
      let firstVisibleMessageIndex;
      let firstVisibleMessagePercentVisible;
      let isAtBottom;
      let isFirstMessageVisible;
      let isNearBottom;
      let isNearTop;
      let lastVisibleMessageIndex;
      let lastVisibleMessagePercentVisible;
      let nativeEvent;
      let shouldShowJumpToPresent;
      let timeStamp;
      ({ timeStamp, nativeEvent } = arg0);
      ({ firstVisibleMessageIndex, lastVisibleMessageIndex, changesetUpdateId } = nativeEvent);
      ({ isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible } = nativeEvent);
      const obj = ChatChangesetUpdateTracker;
      const changesetIdForChat = obj.getChangesetIdForChat(require.current);
      if (changesetUpdateId !== changesetIdForChat) {
        if (null == ref.current) {
          ref.current = timeStamp;
        }
        if (closure_15) {
          logger.log("STAFF-ACK-LOG: Ignoring outdated scroll event.", closure_11, changesetUpdateId, changesetIdForChat, timeStamp);
        }
      } else {
        const obj2 = { firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.SCROLL };
        closure_7(obj2);
        let current = ref.current;
        if (current == null) {
          current = timeStamp;
        }
        ref.current = undefined;
        const obj3 = { eventTimestamp: current, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible };
        handleScroll(obj3);
        const obj4 = { rows: importDefault._rows, firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex };
        closure_16.handleScrollPosition(obj4);
      }
    }
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default tmp4;