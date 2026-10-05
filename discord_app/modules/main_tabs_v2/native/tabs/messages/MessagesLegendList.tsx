// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import MessagesItemChannel from "items/MessagesItemChannel.tsx";
import MessagesItemPlaceholderDefault from "items/MessagesItemPlaceholder.tsx";
import MessagesItemSuggestedFriend from "items/MessagesItemSuggestedFriend.tsx";
import useMessagesData from "useMessagesData.tsx";
import MessagesItemHappeningNowDefault from "items/MessagesItemHappeningNow.tsx";
import MessagesItemEmptyStateDefault from "items/MessagesItemEmptyState.tsx";
import MessagesItemSeparator from "items/MessagesItemSeparator.tsx";
import MessagesItemSuggestedFriendsHeader from "items/MessagesItemSuggestedFriendsHeader.tsx";
import MessagesItemAddFriendsWidgetDefault from "items/MessagesItemAddFriendsWidget.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessagesItemSeparatorDefault = MessagesItemSeparator;
const MessagesItemSuggestedFriendsHeaderDefault = MessagesItemSuggestedFriendsHeader;
let item,
  obj1,
  obj5,
  obj6,
  str,
  str2,
  str3,
  str4,
  str5,
  tmp10,
  tmp11,
  tmp12,
  tmp13,
  tmp14,
  tmp15,
  tmp16,
  tmp17,
  tmp18,
  tmp19,
  tmp20,
  tmp3,
  tmp6,
  tmp8,
  tmp9;

const jsx = Fragment.jsx;
const memoResult = react.memo(
  react.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (listItemSuggestedFriendHeight, arg1) => {
          let accessibilityLabel;
          let data;
          let friendsHeaderIndex;
          let friendsHeaderOffset;
          let handleScrollAnimated;
          let insetEnd;
          let listData;
          let listItemHeight;
          let listLeft;
          let listRefHappeningNow;
          let listTop;
          let recycleItems;
          let renderFooter;
          let renderHeader;
          let scrollIndicatorInsetBottom;
          let scrollPosition;
          let setAddedFriendSuggestions;
          let tmp4;
          let tmp7;
          let tmp = listLeft;
          let obj = listItemHeight(listLeft[3]);
          const cResult = obj.c(46);
          ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } =
            listItemSuggestedFriendHeight);
          listItemSuggestedFriendHeight = listItemSuggestedFriendHeight.listItemSuggestedFriendHeight;
          listLeft = listItemSuggestedFriendHeight.listLeft;
          ({ listRefHappeningNow, listTop } = listItemSuggestedFriendHeight);
          ({ recycleItems, scrollIndicatorInsetBottom, scrollPosition } = listItemSuggestedFriendHeight);
          const friendSuggestions = data.friendSuggestions;
          ({ renderHeader, renderFooter, setAddedFriendSuggestions } = data);
          const ref = listTop.useRef(null);
          if (cResult[0] !== listItemHeight) {
            const obj3 = { listItemHeight };
            cResult[0] = listItemHeight;
            cResult[1] = obj3;
            tmp4 = obj3;
          } else {
            tmp4 = cResult[1];
          }
          const tmp5 = listItemSuggestedFriendHeight(tmp[4])(data, tmp4);
          ({ listData, friendsHeaderIndex, friendsHeaderOffset } = tmp5);
          const listHeaderHeight = tmp5.listHeaderHeight;
          if (cResult[2] !== listHeaderHeight) {
            class L {
              constructor() {
                obj = {
                  scrollToTop() {
                    /* body not rendered: F145395 */
                  },
                };
                return obj;
              }
            }
            const items = [listHeaderHeight];
            cResult[2] = listHeaderHeight;
            cResult[3] = L;
            cResult[4] = items;
            tmp7 = items;
          } else {
            class L {
              constructor() {
                obj = {
                  scrollToTop() {
                    /* body not rendered: F145395 */
                  },
                };
                return obj;
              }
            }
            tmp7 = cResult[4];
          }
          const imperativeHandle = listTop.useImperativeHandle(arg1, L, tmp7);
          if (cResult[5] === friendSuggestions) {
            class L {
              constructor() {
                obj = {
                  scrollToTop() {
                    /* body not rendered: F145395 */
                  },
                };
                return obj;
              }
            }
          }
          class R {
            constructor(arg0) {
              item = listItemSuggestedFriendHeight.item;
              kind = item.kind;
              if ("favorite" !== kind) {
                str2 = "channel";
                if ("channel" !== kind) {
                  str3 = "separator";
                  if ("separator" === kind) {
                    tmp18 = jsx;
                    tmp19 = closure_1;
                    tmp20 = closure_2;
                    return jsx(closure_1(closure_2[6]), {});
                  } else {
                    str4 = "friendsHeader";
                    if ("friendsHeader" === kind) {
                      tmp11 = jsx;
                      tmp12 = closure_1;
                      tmp13 = closure_2;
                      obj1 = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                      tmp14 = scrollPosition;
                      obj1.scrollPosition = scrollPosition;
                      tmp15 = friendsHeaderOffset;
                      obj1.stickyAt = friendsHeaderOffset;
                      tmp16 = listTop;
                      obj1.stickyTop = listTop;
                      tmp17 = listLeft;
                      obj1.stickyLeft = listLeft;
                      return jsx(closure_1(closure_2[7]), obj1);
                    } else {
                      str5 = "suggestedFriend";
                      if ("suggestedFriend" === kind) {
                        tmp5 = jsx;
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        obj5 = { height: null, suggestedFriend: null, onAddFriendSuggestions: null };
                        tmp8 = closure_1;
                        obj5.height = closure_1;
                        tmp9 = friendSuggestions;
                        obj5.suggestedFriend = friendSuggestions[item.row];
                        tmp10 = setAddedFriendSuggestions;
                        obj5.onAddFriendSuggestions = setAddedFriendSuggestions;
                        return jsx(closure_0(closure_2[8]).MessagesItemSuggestedFriendLegend, obj5);
                      } else {
                        str = "placeholder";
                        if ("placeholder" === kind) {
                          tmp = jsx;
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          obj = { row: null, height: null };
                          obj.row = item.row;
                          tmp4 = listItemHeight;
                          obj.height = listItemHeight;
                          return jsx(closure_1(closure_2[9]), obj);
                        } else {
                          return;
                        }
                      }
                    }
                  }
                }
              }
              obj6 = { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row };
              return jsx(closure_0(closure_2[5]).MessagesItemChannelLegend, obj6);
            }
          }
          cResult[5] = friendSuggestions;
          cResult[6] = friendsHeaderOffset;
          cResult[7] = listItemHeight;
          cResult[8] = listItemSuggestedFriendHeight;
          cResult[9] = listLeft;
          cResult[10] = listTop;
          cResult[11] = scrollPosition;
          cResult[12] = setAddedFriendSuggestions;
          cResult[13] = R;
        }
      : (listItemHeight, arg1) => {
          let accessibilityLabel;
          let data;
          let handleScrollAnimated;
          let insetEnd;
          let recycleItems;
          ({ data, insetEnd } = listItemHeight);
          const estimatedItemSize = listItemHeight.listItemHeight;
          const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
          const listLeft = listItemHeight.listLeft;
          const listRefHappeningNow = listItemHeight.listRefHappeningNow;
          const listTop = listItemHeight.listTop;
          const scrollIndicatorInsetBottom = listItemHeight.scrollIndicatorInsetBottom;
          const scrollPosition = listItemHeight.scrollPosition;
          const friendSuggestions = data.friendSuggestions;
          const renderHeader = data.renderHeader;
          const renderFooter = data.renderFooter;
          const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
          ({ accessibilityLabel, handleScrollAnimated, recycleItems } = listItemHeight);
          const ref = listLeft.useRef(null);
          let tmp2 = estimatedItemSize(listItemSuggestedFriendHeight[4])(data, { listItemHeight: estimatedItemSize });
          const friendsHeaderIndex = tmp2.friendsHeaderIndex;
          const friendsHeaderOffset = tmp2.friendsHeaderOffset;
          const estimatedHeaderSize = tmp2.listHeaderHeight;
          let items = [estimatedHeaderSize];
          const data2 = tmp2.listData;
          const imperativeHandle = listLeft.useImperativeHandle(
            arg1,
            () => {
              let offset;
              let obj = {
                scrollToTop() {
                  let flag = arg0;
                  if (arg0 === undefined) {
                    flag = false;
                  }
                  const current = ref.current;
                  if (current != null) {
                    const obj = { offset, animated: flag };
                    current.scrollToOffset(obj);
                  }
                },
              };
              return obj;
            },
            items,
          );
          const items1 = [
            estimatedItemSize,
            scrollPosition,
            friendsHeaderOffset,
            listTop,
            listLeft,
            listItemSuggestedFriendHeight,
            friendSuggestions,
            setAddedFriendSuggestions,
          ];
          const renderItem = listLeft.useCallback((item) => {
            item = item.item;
            const kind = item.kind;
            if ("favorite" !== kind) {
              if ("channel" !== kind) {
                if ("separator" === kind) {
                  return jsx(MessagesItemSeparatorDefault, {});
                } else if ("friendsHeader" === kind) {
                  return jsx(MessagesItemSuggestedFriendsHeaderDefault, {
                    scrollPosition,
                    stickyAt: friendsHeaderOffset,
                    stickyTop: listTop,
                    stickyLeft: listLeft,
                  });
                } else if ("suggestedFriend" === kind) {
                  return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, {
                    height: listItemSuggestedFriendHeight,
                    suggestedFriend: friendSuggestions[item.row],
                    onAddFriendSuggestions: setAddedFriendSuggestions,
                  });
                } else if ("placeholder" === kind) {
                  return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: estimatedItemSize });
                }
              }
            }
            return jsx(MessagesItemChannel.MessagesItemChannelLegend, {
              channelId: item.channelId,
              placeholderHeight: estimatedItemSize,
              row: item.row,
            });
          }, items1);
          const items2 = [estimatedItemSize, listItemSuggestedFriendHeight];
          const getItemType = listLeft.useCallback((kind) => kind.kind, []);
          const items3 = [friendSuggestions];
          const getFixedItemSize = listLeft.useCallback((kind) => {
            kind = kind.kind;
            if ("favorite" !== kind) {
              if ("channel" !== kind) {
                if ("placeholder" !== kind) {
                  if ("separator" === kind) {
                    return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                  } else if ("friendsHeader" === kind) {
                    return MessagesItemSuggestedFriendsHeader.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                  } else if ("suggestedFriend" === kind) {
                    return listItemSuggestedFriendHeight;
                  }
                }
              }
            }
            return estimatedItemSize;
          }, items2);
          const items4 = [renderHeader, listRefHappeningNow];
          const keyExtractor = listLeft.useCallback((kind) => {
            kind = kind.kind;
            if ("favorite" === kind) {
              const _HermesInternal4 = HermesInternal;
              return "fav:" + kind.channelId;
            } else if ("channel" === kind) {
              const _HermesInternal3 = HermesInternal;
              return "ch:" + kind.channelId;
            } else if ("separator" === kind) {
              return "separator";
            } else if ("friendsHeader" === kind) {
              return "friendsHeader";
            } else if ("suggestedFriend" === kind) {
              let id;
              if (friendSuggestions[kind.row] != null) {
                id = tmp3.user.id;
              }
              if (id == null) {
                id = kind.row;
              }
              const _HermesInternal2 = HermesInternal;
              return "sf:" + id;
            } else if ("placeholder" === kind) {
              const _HermesInternal = HermesInternal;
              return "placeholder:" + kind.row;
            }
          }, items3);
          const items5 = [renderFooter];
          const ListHeaderComponent = listLeft.useMemo(() => {
            if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
              return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
            } else if (useMessagesData.MessagesDataHeader.EmptyState === renderHeader) {
              return jsx(MessagesItemEmptyStateDefault, {});
            } else {
              return null;
            }
          }, items4);
          const items6 = [friendsHeaderIndex];
          const ListFooterComponent = listLeft.useMemo(() => {
            let tmp = null;
            if (renderFooter) {
              tmp = jsx(MessagesItemAddFriendsWidgetDefault, {});
            }
            return tmp;
          }, items5);
          const items7 = [insetEnd];
          const stickyHeaderIndices = listLeft.useMemo(() => {
            let tmp2;
            if (null != friendsHeaderIndex) {
              const items = [tmp];
              tmp2 = items;
            }
            return tmp2;
          }, items6);
          const items8 = [scrollIndicatorInsetBottom];
          const contentContainerStyle = listLeft.useMemo(() => ({ paddingBottom: insetEnd }), items7);
          const scrollIndicatorInsets = listLeft.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items8);
          return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[14]).AnimatedLegendList, {
            ref,
            accessibilityLabel,
            contentContainerStyle,
            data: data2,
            estimatedHeaderSize,
            estimatedItemSize,
            getFixedItemSize,
            getItemType,
            keyExtractor,
            ListFooterComponent,
            ListHeaderComponent,
            onScroll,
            recycleItems,
            renderItem,
            scrollIndicatorInsets,
            stickyHeaderIndices,
          });
        },
  ),
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx");

export default memoResult;
