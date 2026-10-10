// discord_app/modules/messages/native/hooks/useScrollHandlers.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import QuestTypes from "../../../quests/QuestTypes.tsx";
import NativeChatUtilsDefault from "../../../chat/native/NativeChatUtils.tsx";
import ChatChangesetUpdateTracker from "../../../chat/native/ChatChangesetUpdateTracker.tsx";
import DimensionActionCreatorsDefault from "../../../../actions/DimensionActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const useChatBottomManagerUIStore = fn(9383);
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
let closure_6 = new LoggerDefault("useScrollHandlers");
const ReactCompilerGating = fn(558);
let tmp3 = new LoggerDefault("useScrollHandlers");
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useScrollHandlers(chatRef) {
      const cResult = chatRef(chatUpdatesQueue[4]).c(49);
      chatRef = chatRef.chatRef;
      const chatManager = chatRef.chatManager;
      chatUpdatesQueue = chatRef.chatUpdatesQueue;
      const pendingUpdatesQueueRef = chatRef.pendingUpdatesQueueRef;
      const animatedRef = chatRef.animatedRef;
      const fetchMoreBefore = chatRef.fetchMoreBefore;
      const fetchMoreAfter = chatRef.fetchMoreAfter;
      const handleVisibleMessagesChange = chatRef.handleVisibleMessagesChange;
      const applyNativeRowsUpdate = chatRef.applyNativeRowsUpdate;
      const messages = chatRef.messages;
      const channel = chatRef.channel;
      const channelId = chatRef.channelId;
      const screenIndex = chatRef.screenIndex;
      const onScroll = chatRef.onScroll;
      const useReducedMotion = chatRef.useReducedMotion;
      const isStaff = chatRef.isStaff;
      const visibleMessagesWindowHandler = chatRef.visibleMessagesWindowHandler;
      const ref = pendingUpdatesQueueRef.useRef(undefined);
      const ref1 = pendingUpdatesQueueRef.useRef(false);
      const ref2 = pendingUpdatesQueueRef.useRef(false);
      const ref3 = pendingUpdatesQueueRef.useRef(false);
      const ref4 = pendingUpdatesQueueRef.useRef(false);
      const ref5 = pendingUpdatesQueueRef.useRef(false);
      const ref6 = pendingUpdatesQueueRef.useRef(false);
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
            if (cResult[7] === useReducedMotion) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === chatRef) {
              if (cResult[10] === useReducedMotion) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === chatManager) {
                if (cResult[13] === chatRef) {
                  let tmp13 = cResult[14];
                }
                if (cResult[15] === applyNativeRowsUpdate) {
                  if (cResult[16] === chatUpdatesQueue) {
                    let tmp14 = cResult[17];
                  }
                  if (cResult[18] === channel) {
                    if (cResult[19] === chatUpdatesQueue) {
                      if (cResult[20] === tmp10) {
                        if (cResult[21] === tmp9) {
                          if (cResult[22] === messages) {
                            if (cResult[23] === onScroll) {
                              if (cResult[24] === pendingUpdatesQueueRef) {
                                let tmp15 = cResult[25];
                              }
                              closure_26 = tmp15;
                              if (cResult[26] === channelId) {
                                if (cResult[27] === tmp15) {
                                  if (cResult[28] === messages) {
                                    if (cResult[29] === screenIndex) {
                                      let tmp16 = cResult[30];
                                    }
                                    closure_27 = tmp16;
                                    if (cResult[31] === channelId) {
                                      if (cResult[32] === chatManager) {
                                        if (cResult[33] === chatRef) {
                                          if (cResult[34] === tmp16) {
                                            if (cResult[35] === handleVisibleMessagesChange) {
                                              if (cResult[36] === isStaff) {
                                                if (cResult[37] === visibleMessagesWindowHandler) {
                                                  let tmp17 = cResult[38];
                                                }
                                                if (cResult[39] === tmp16) {
                                                  if (cResult[40] === tmp15) {
                                                    if (cResult[41] === tmp17) {
                                                      if (cResult[42] === tmp10) {
                                                        if (cResult[43] === tmp9) {
                                                          if (cResult[44] === tmp12) {
                                                            if (cResult[45] === tmp11) {
                                                              if (cResult[46] === tmp13) {
                                                                if (cResult[47] === tmp14) {
                                                                  let tmp18 = cResult[48];
                                                                }
                                                                return tmp18;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                let obj2 = {
                                                  hasHandledScrollRef: ref1,
                                                  isAtBottomRef: ref2,
                                                  isNearBottomRef: ref3,
                                                  isNearTopRef: ref4,
                                                  deceleratingRef: ref5,
                                                  draggingRef: ref6,
                                                  firstIgnoredScrollEventTimestampRef: ref,
                                                  loadMoreBefore: tmp9,
                                                  loadMoreAfter: tmp10,
                                                  scrollToTop: tmp11,
                                                  scrollToRelativeOffset: tmp12,
                                                  scrollToTopMessage: tmp13,
                                                  updateNativeRows: tmp14,
                                                  handleScrollCallbacks: tmp15,
                                                  handleScroll: tmp16,
                                                  handleScrollPosition: tmp17,
                                                };
                                                cResult[39] = tmp16;
                                                cResult[40] = tmp15;
                                                cResult[41] = tmp17;
                                                cResult[42] = tmp10;
                                                cResult[43] = tmp9;
                                                cResult[44] = tmp12;
                                                cResult[45] = tmp11;
                                                cResult[46] = tmp13;
                                                cResult[47] = tmp14;
                                                cResult[48] = obj2;
                                                tmp18 = obj2;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    function handleScrollPosition(arg0) {
                                      ({ timeStamp, nativeEvent } = arg0);
                                      ({ firstVisibleMessageIndex, lastVisibleMessageIndex, changesetUpdateId } =
                                        nativeEvent);
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
                                      const changesetIdForChat = ChatChangesetUpdateTracker.getChangesetIdForChat(
                                        chatRef.current,
                                      );
                                      if (changesetUpdateId !== changesetIdForChat) {
                                        if (null == ref.current) {
                                          ref.current = timeStamp;
                                        }
                                        if (isStaff) {
                                          logger.log(
                                            "STAFF-ACK-LOG: Ignoring outdated scroll event.",
                                            channelId,
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
                                        handleVisibleMessagesChange(obj2);
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
                                        closure_27(obj3);
                                        const obj4 = {
                                          rows: chatManager._rows,
                                          firstVisibleMessageRowIndex: firstVisibleMessageIndex,
                                          lastVisibleMessageRowIndex: lastVisibleMessageIndex,
                                        };
                                        visibleMessagesWindowHandler.handleScrollPosition(obj4);
                                      }
                                    }
                                    cResult[31] = channelId;
                                    cResult[32] = chatManager;
                                    cResult[33] = chatRef;
                                    cResult[34] = tmp16;
                                    cResult[35] = handleVisibleMessagesChange;
                                    cResult[36] = isStaff;
                                    cResult[37] = visibleMessagesWindowHandler;
                                    cResult[38] = handleScrollPosition;
                                    tmp17 = handleScrollPosition;
                                  }
                                }
                              }
                              function handleScroll(eventTimestamp) {
                                const isAtBottom = eventTimestamp.isAtBottom;
                                ({
                                  isNearBottom,
                                  isNearTop,
                                  dragging,
                                  decelerating,
                                  shouldShowJumpToPresent,
                                  isFirstMessageVisible,
                                } = eventTimestamp);
                                let tmp = undefined !== isNearBottom;
                                if (tmp) {
                                  tmp = isNearBottom;
                                }
                                closure_1 = tmp5;
                                const obj = {
                                  eventTimestamp: eventTimestamp.eventTimestamp,
                                  isAtBottom,
                                  isNearBottom: tmp,
                                  isNearTop: undefined !== isNearTop && isNearTop,
                                  dragging: undefined !== dragging && dragging,
                                  decelerating: undefined !== decelerating && decelerating,
                                  shouldShowJumpToPresent:
                                    undefined !== shouldShowJumpToPresent && shouldShowJumpToPresent,
                                  isFirstMessageVisible: null,
                                };
                                let tmp7 = undefined !== isFirstMessageVisible;
                                if (tmp7) {
                                  tmp7 = isFirstMessageVisible;
                                }
                                obj.isFirstMessageVisible = tmp7;
                                if (closure_26(obj)) {
                                  ref2.current = isAtBottom;
                                  ref3.current = tmp;
                                  ref4.current = tmp2;
                                  ref6.current = tmp3;
                                  ref5.current = tmp4;
                                  chatRef(chatUpdatesQueue[8]).batchUpdates(() => {
                                    let hasMoreAfter = closure_1;
                                    if (!closure_1) {
                                      hasMoreAfter = messages.hasMoreAfter;
                                    }
                                    hasOwnProperty(channelId, screenIndex, hasMoreAfter);
                                    React4(screenIndex, isAtBottom);
                                  });
                                  const obj2 = chatRef(chatUpdatesQueue[8]);
                                }
                              }
                              cResult[26] = channelId;
                              cResult[27] = tmp15;
                              cResult[28] = messages;
                              cResult[29] = screenIndex;
                              cResult[30] = handleScroll;
                              tmp16 = handleScroll;
                            }
                          }
                        }
                      }
                    }
                  }
                  function handleScrollCallbacks(arg0) {
                    ({
                      eventTimestamp,
                      isAtBottom,
                      isNearBottom,
                      isNearTop,
                      dragging,
                      decelerating,
                      isFirstMessageVisible,
                    } = arg0);
                    let tmp3 = undefined !== dragging && dragging;
                    if (null != channel) {
                      useIsScreenReaderEnabled;
                      const loadingMore = messages.loadingMore;
                      let tmp11 = !loadingMore;
                      if (!loadingMore) {
                        if (!tmp3) {
                          tmp3 = tmp4;
                        }
                        if (!tmp3) {
                          tmp3 = tmp10;
                        }
                        tmp11 = tmp3;
                      }
                      if (tmp11) {
                        tmp11 = 0 === pendingUpdatesQueueRef.current.length;
                      }
                      if (!ref4.current) {
                        if (tmp2) {
                          if (messages.hasMoreBefore) {
                            if (tmp11) {
                              closure_24();
                            }
                            const obj2 = { isFirstMessageVisible: tmp5 };
                            onScroll(obj2);
                            chatUpdatesQueue.tryFlush();
                            return true;
                          }
                        }
                      }
                      if (!ref3.current) {
                        if (tmp) {
                          if (messages.hasMoreAfter) {
                            if (tmp11) {
                              closure_25();
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
                        const id = tmp6.id;
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
                  cResult[18] = channel;
                  cResult[19] = chatUpdatesQueue;
                  cResult[20] = tmp10;
                  cResult[21] = tmp9;
                  cResult[22] = messages;
                  cResult[23] = onScroll;
                  cResult[24] = pendingUpdatesQueueRef;
                  cResult[25] = handleScrollCallbacks;
                  tmp15 = handleScrollCallbacks;
                }
                function updateNativeRows(isLoadingAtTop) {
                  if (chatUpdatesQueue.isBlocking) {
                    chatUpdatesQueue.add(isLoadingAtTop);
                  } else if (!isLoadingAtTop.isLoadingAtTop) {
                    applyNativeRowsUpdate(isLoadingAtTop);
                  } else {
                    chatUpdatesQueue.add(isLoadingAtTop);
                  }
                }
                cResult[15] = applyNativeRowsUpdate;
                cResult[16] = chatUpdatesQueue;
                cResult[17] = updateNativeRows;
                tmp14 = updateNativeRows;
              }
              function scrollToTopMessage() {
                const previousRows = chatManager.getPreviousRows();
                if (previousRows.length > 0) {
                  NativeChatUtilsDefault.scrollTo(chatRef.current, previousRows.length - 1);
                }
              }
              cResult[12] = chatManager;
              cResult[13] = chatRef;
              cResult[14] = scrollToTopMessage;
              tmp13 = scrollToTopMessage;
            }
            function scrollToRelativeOffset(arg0, arg1) {
              let tmp = undefined === arg1 || arg1;
              if (tmp) {
                tmp = !useReducedMotion;
              }
              const result = NativeChatUtilsDefault.scrollToRelativeOffset(chatRef.current, arg0, tmp);
            }
            cResult[9] = chatRef;
            cResult[10] = useReducedMotion;
            cResult[11] = scrollToRelativeOffset;
            tmp12 = scrollToRelativeOffset;
          }
          function scrollToTop(arg0) {
            let tmp = undefined === arg0 || arg0;
            if (tmp) {
              tmp = !useReducedMotion;
            }
            NativeChatUtilsDefault.scrollToTop(chatRef.current, tmp);
          }
          cResult[6] = chatRef;
          cResult[7] = useReducedMotion;
          cResult[8] = scrollToTop;
          tmp11 = scrollToTop;
        }
        function loadMoreAfter() {
          animatedRef.current = true;
          fetchMoreAfter();
        }
        cResult[3] = animatedRef;
        cResult[4] = fetchMoreAfter;
        cResult[5] = loadMoreAfter;
        tmp10 = loadMoreAfter;
      }
      function loadMoreBefore() {
        animatedRef.current = true;
        fetchMoreBefore();
      }
      cResult[0] = animatedRef;
      cResult[1] = fetchMoreBefore;
      cResult[2] = loadMoreBefore;
      tmp9 = loadMoreBefore;
    }
  : function useScrollHandlers(arg0) {
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
