// discord_app/modules/messages/native/hooks/useScrollHandlers.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import QuestTypes from "../../../quests/QuestTypes.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import NativeChatUtilsDefault from "../../../chat/native/NativeChatUtils.tsx";
import ChatChangesetUpdateTracker from "../../../chat/native/ChatChangesetUpdateTracker.tsx";
import DimensionActionCreatorsDefault from "../../../../actions/DimensionActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const useChatBottomManagerUIStore = fn(9100);
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
let closure_6 = new LoggerDefault("useScrollHandlers");
const ReactCompilerGating = fn(558);
let tmp3 = new LoggerDefault("useScrollHandlers");
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (chatRef) => {
      const cResult = chatRef(chatUpdatesQueue[4]).c(49);
      chatRef = chatRef.chatRef;
      const chatManager = chatRef.chatManager;
      chatUpdatesQueue = chatRef.chatUpdatesQueue;
      const pendingUpdatesQueueRef = chatRef.pendingUpdatesQueueRef;
      const animatedRef = chatRef.animatedRef;
      const fetchMoreBefore = chatRef.fetchMoreBefore;
      const fetchMoreAfter = chatRef.fetchMoreAfter;
      closure_7 = chatRef.handleVisibleMessagesChange;
      const applyNativeRowsUpdate = chatRef.applyNativeRowsUpdate;
      const messages = chatRef.messages;
      const channel = chatRef.channel;
      const channelId = chatRef.channelId;
      const screenIndex = chatRef.screenIndex;
      const onScroll = chatRef.onScroll;
      const useReducedMotion = chatRef.useReducedMotion;
      const isStaff = chatRef.isStaff;
      closure_16 = chatRef.visibleMessagesWindowHandler;
      pendingUpdatesQueueRef.useRef(undefined);
      pendingUpdatesQueueRef.useRef(false);
      pendingUpdatesQueueRef.useRef(false);
      pendingUpdatesQueueRef.useRef(false);
      pendingUpdatesQueueRef.useRef(false);
      pendingUpdatesQueueRef.useRef(false);
      pendingUpdatesQueueRef.useRef(false);
      if (cResult[0] === animatedRef) {
        if (cResult[1] === fetchMoreBefore) {
          let tmp9 = cResult[2];
        }
        closure_24 = tmp9;
        if (cResult[3] === animatedRef) {
          if (cResult[4] === fetchMoreAfter) {
            let tmp10 = cResult[5];
          }
          closure_25 = tmp10;
          if (cResult[6] === chatRef) {
            if (cResult[9] === chatRef) {
              if (cResult[12] === chatManager) {
                if (cResult[15] === applyNativeRowsUpdate) {
                  if (cResult[18] === channel) {
                    if (cResult[19] === chatUpdatesQueue) {
                      if (cResult[20] === tmp10) {
                        if (cResult[21] === tmp9) {
                          if (cResult[22] === messages) {
                            if (cResult[23] === onScroll) {
                              if (cResult[24] === pendingUpdatesQueueRef) {
                                let tmp16 = cResult[25];
                              }
                              closure_26 = tmp16;
                              class W {
                                constructor(arg0) {
                                  obj = chatUpdatesQueue;
                                  if (chatUpdatesQueue.isBlocking) {
                                    addResult = obj.add(chatRef);
                                  } else if (!chatRef.isLoadingAtTop) {
                                    tmp3 = applyNativeRowsUpdate;
                                    tmp4 = applyNativeRowsUpdate(chatRef);
                                  } else {
                                    tmp = closure_22;
                                    if (!closure_22.current) {
                                      tmp2 = closure_23;
                                    }
                                    addResult1 = obj.add(chatRef);
                                  }
                                  return;
                                }
                              }
                              class X {
                                constructor(arg0) {
                                  isAtBottom = chatRef.isAtBottom;
                                  ({
                                    isNearBottom,
                                    isNearTop,
                                    dragging,
                                    decelerating,
                                    shouldShowJumpToPresent,
                                    isFirstMessageVisible,
                                  } = chatRef);
                                  tmp = undefined !== isNearBottom;
                                  if (tmp) {
                                    tmp = isNearBottom;
                                  }
                                  tmp2 = undefined !== isNearTop && isNearTop;
                                  tmp3 = undefined !== dragging && dragging;
                                  tmp4 = undefined !== decelerating && decelerating;
                                  tmp5 = undefined !== shouldShowJumpToPresent && shouldShowJumpToPresent;
                                  shouldShowJumpToPresent = tmp5;
                                  obj = {
                                    eventTimestamp: chatRef.eventTimestamp,
                                    isAtBottom,
                                    isNearBottom: tmp,
                                    isNearTop: tmp2,
                                    dragging: tmp3,
                                    decelerating: tmp4,
                                    shouldShowJumpToPresent: tmp5,
                                    isFirstMessageVisible: null,
                                  };
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
                                      let hasMoreAfter = closure_1;
                                      if (!closure_1) {
                                        hasMoreAfter = messages.hasMoreAfter;
                                      }
                                      hasOwnProperty(channelId, screenIndex, hasMoreAfter);
                                      React4(screenIndex, isAtBottom);
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
                    constructor(arg0) {
                      obj = chatUpdatesQueue;
                      if (chatUpdatesQueue.isBlocking) {
                        addResult = obj.add(chatRef);
                      } else if (!chatRef.isLoadingAtTop) {
                        tmp3 = applyNativeRowsUpdate;
                        tmp4 = applyNativeRowsUpdate(chatRef);
                      } else {
                        tmp = closure_22;
                        if (!closure_22.current) {
                          tmp2 = closure_23;
                        }
                        addResult1 = obj.add(chatRef);
                      }
                      return;
                    }
                  }
                  class Q {
                    constructor(arg0) {
                      tmp = undefined === chatRef || chatRef;
                      obj = closure_1(closure_2[5]);
                      if (tmp) {
                        tmp2 = useReducedMotion;
                        tmp = !useReducedMotion;
                      }
                      scrollToTopResult = obj.scrollToTop(chatRef.current, tmp);
                      return;
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
                  constructor(arg0) {
                    obj = chatUpdatesQueue;
                    if (chatUpdatesQueue.isBlocking) {
                      addResult = obj.add(chatRef);
                    } else if (!chatRef.isLoadingAtTop) {
                      tmp3 = applyNativeRowsUpdate;
                      tmp4 = applyNativeRowsUpdate(chatRef);
                    } else {
                      tmp = closure_22;
                      if (!closure_22.current) {
                        tmp2 = closure_23;
                      }
                      addResult1 = obj.add(chatRef);
                    }
                    return;
                  }
                }
                class Q {
                  constructor(arg0) {
                    tmp = undefined === chatRef || chatRef;
                    obj = closure_1(closure_2[5]);
                    if (tmp) {
                      tmp2 = useReducedMotion;
                      tmp = !useReducedMotion;
                    }
                    scrollToTopResult = obj.scrollToTop(chatRef.current, tmp);
                    return;
                  }
                }
                cResult[15] = applyNativeRowsUpdate;
                cResult[16] = chatUpdatesQueue;
                cResult[17] = W;
              }
              class G {
                constructor() {
                  previousRows = chatManager.getPreviousRows();
                  if (previousRows.length > 0) {
                    tmp = closure_1;
                    tmp2 = closure_2;
                    obj = closure_1(closure_2[5]);
                    tmp3 = chatRef;
                    num = 1;
                    scrollToResult = obj.scrollTo(chatRef.current, previousRows.length - 1);
                  }
                  return;
                }
              }
              class Q {
                constructor(arg0) {
                  tmp = undefined === chatRef || chatRef;
                  obj = closure_1(closure_2[5]);
                  if (tmp) {
                    tmp2 = useReducedMotion;
                    tmp = !useReducedMotion;
                  }
                  scrollToTopResult = obj.scrollToTop(chatRef.current, tmp);
                  return;
                }
              }
              cResult[12] = chatManager;
              cResult[13] = chatRef;
              cResult[14] = G;
            }
            class Q {
              constructor(arg0) {
                tmp = undefined === chatRef || chatRef;
                obj = closure_1(closure_2[5]);
                if (tmp) {
                  tmp2 = useReducedMotion;
                  tmp = !useReducedMotion;
                }
                scrollToTopResult = obj.scrollToTop(chatRef.current, tmp);
                return;
              }
            }
            cResult[9] = chatRef;
            cResult[10] = useReducedMotion;
            cResult[11] = tmp13;
          }
          class Q {
            constructor(arg0) {
              tmp = undefined === chatRef || chatRef;
              obj = closure_1(closure_2[5]);
              if (tmp) {
                tmp2 = useReducedMotion;
                tmp = !useReducedMotion;
              }
              scrollToTopResult = obj.scrollToTop(chatRef.current, tmp);
              return;
            }
          }
          cResult[6] = chatRef;
          cResult[7] = useReducedMotion;
          cResult[8] = Q;
        }
        class E {
          constructor() {
            animatedRef.current = true;
            tmp = fetchMoreAfter();
            return;
          }
        }
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
      let obj = chatRef(chatUpdatesQueue[4]);
    }
  : (arg0) => {
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
          const loadingMore = closure_1_9.loadingMore;
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
              if (closure_1_9.hasMoreBefore) {
                if (tmp6) {
                  closure_1_4.current = true;
                  closure_1_5();
                }
                const obj2 = { isFirstMessageVisible: flag4 };
                closure_1_13(obj2);
                dependencyMap.tryFlush();
                return true;
              }
            }
          }
          if (!ref3.current) {
            if (isNearBottom) {
              if (closure_1_9.hasMoreAfter) {
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
            const obj = DimensionActionCreatorsDefault;
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
            let hasMoreAfter = shouldShowJumpToPresent;
            if (!shouldShowJumpToPresent) {
              hasMoreAfter = closure_2_9.hasMoreAfter;
            }
            hasOwnProperty(closure_2_11, closure_2_12, hasMoreAfter);
            React4(closure_2_12, isAtBottom);
          });
        }
      }
      ref = noop.useRef(undefined);
      const ref1 = noop.useRef(false);
      ref2 = noop.useRef(false);
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
            dependencyMap.add(isLoadingAtTop);
          } else if (!isLoadingAtTop.isLoadingAtTop) {
            closure_1_8(isLoadingAtTop);
          } else {
            dependencyMap.add(isLoadingAtTop);
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
          const changesetIdForChat = ChatChangesetUpdateTracker.getChangesetIdForChat(ref.current);
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
            const obj2 = {
              firstVisibleMessageRowIndex: firstVisibleMessageIndex,
              lastVisibleMessageRowIndex: lastVisibleMessageIndex,
              firstVisibleMessagePercentVisible,
              lastVisibleMessagePercentVisible,
              source: QuestTypes.QuestsVisibleMessagesChangedSource.SCROLL,
            };
            closure_1_7(obj2);
            let current = ref.current;
            if (current == null) {
              current = timeStamp;
            }
            ref.current = undefined;
            const obj3 = {
              eventTimestamp: current,
              isAtBottom,
              isNearBottom,
              isNearTop,
              dragging,
              decelerating,
              shouldShowJumpToPresent,
              isFirstMessageVisible,
            };
            handleScroll(obj3);
            const obj4 = {
              rows: previousRows._rows,
              firstVisibleMessageRowIndex: firstVisibleMessageIndex,
              lastVisibleMessageRowIndex: lastVisibleMessageIndex,
            };
            closure_1_16.handleScrollPosition(obj4);
          }
        },
      };
    };
