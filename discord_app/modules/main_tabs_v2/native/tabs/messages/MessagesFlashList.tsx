// === Module 16513: MessagesFlashList ===

// Module 16513 (MessagesFlashList)
import MessagesItemChannel from "MessagesItemChannel" /* 16442 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16452 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16454 */;
import useMessagesData from "useMessagesData" /* 16457 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 16470 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 16507 */;
import MessagesItemSeparatorDefault from "MessagesItemSeparator" /* 16508 */;
import MessagesItemSuggestedFriendsHeaderDefault from "MessagesItemSuggestedFriendsHeader" /* 16509 */;
import MessagesItemAddFriendsWidgetDefault from "MessagesItemAddFriendsWidget" /* 16510 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFlashList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesFlashList(listItemSuggestedFriendHeight) {
  const cResult = listItemHeight(listLeft[4]).c(45);
  ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } = listItemSuggestedFriendHeight);
  listItemSuggestedFriendHeight = listItemSuggestedFriendHeight.listItemSuggestedFriendHeight;
  listLeft = listItemSuggestedFriendHeight.listLeft;
  ({ listRefHappeningNow, listTop } = listItemSuggestedFriendHeight);
  ({ scrollIndicatorInsetBottom, scrollPosition } = listItemSuggestedFriendHeight);
  const friendSuggestions = data.friendSuggestions;
  ({ renderHeader, renderFooter, setAddedFriendSuggestions } = data);
  scrollPosition.useRef(null);
  if (cResult[0] !== listItemHeight) {
    let obj3 = { listItemHeight };
    cResult[0] = listItemHeight;
    cResult[1] = obj3;
    let tmp4 = obj3;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = listItemSuggestedFriendHeight(listLeft[5])(data, tmp4);
  const listData = tmp5.listData;
  ({ friendsHeaderIndex, friendsHeaderOffset } = tmp5);
  const listHeaderHeight = tmp5.listHeaderHeight;
  if (cResult[2] !== listHeaderHeight) {
    class A {
      constructor() {
        obj = { scrollToTop() { ... } };
        return obj;
      }
    }
    const items = [listHeaderHeight];
    cResult[2] = listHeaderHeight;
    cResult[3] = A;
    cResult[4] = items;
    let tmp7 = items;
  } else {
    class A {
      constructor() {
        obj = { scrollToTop() { ... } };
        return obj;
      }
    }
    tmp7 = cResult[4];
  }
  const imperativeHandle = scrollPosition.useImperativeHandle(listItemSuggestedFriendHeight.ref, A, tmp7);
  if (cResult[5] === friendSuggestions) {
    class A {
      constructor() {
        obj = { scrollToTop() { ... } };
        return obj;
      }
    }
  }
  class E {
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
            return jsx(closure_1(closure_2[7]), {});
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
              return jsx(closure_1(closure_2[8]), obj1);
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
                return jsx(closure_0(closure_2[9]).MessagesItemSuggestedFriendFlash, obj5);
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
                  return jsx(closure_1(closure_2[10]), obj);
                } else {
                  return;
                }
              }
            }
          }
        }
      }
      obj6 = { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row };
      return jsx(closure_0(closure_2[6]).MessagesItemChannelFlash, obj6);
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
  cResult[13] = E;
  let obj = listItemHeight(listLeft[4]);
}) : (function MessagesFlashList(listItemHeight) {
  ({ data, insetEnd } = listItemHeight);
  listItemHeight = listItemHeight.listItemHeight;
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
  ({ accessibilityLabel, handleScrollAnimated, ref } = listItemHeight);
  const ref2 = listRefHappeningNow.useRef(null);
  const tmp2 = listItemHeight(listItemSuggestedFriendHeight[5])(data, { listItemHeight });
  const data2 = tmp2.listData;
  const friendsHeaderIndex = tmp2.friendsHeaderIndex;
  const extraData = tmp2.friendsHeaderOffset;
  const listHeaderHeight = tmp2.listHeaderHeight;
  let items = [listHeaderHeight];
  const imperativeHandle = listRefHappeningNow.useImperativeHandle(ref, () => ({
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
    }
  }), items);
  const items1 = [listItemHeight, scrollPosition, extraData, listTop, listLeft, listItemSuggestedFriendHeight, friendSuggestions, setAddedFriendSuggestions];
  const renderItem = listRefHappeningNow.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("separator" === kind) {
          return jsx(MessagesItemSeparatorDefault, {});
        } else if ("friendsHeader" === kind) {
          const obj2 = { scrollPosition, stickyAt: extraData, stickyTop: listTop, stickyLeft: listLeft };
          return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: extraData, stickyTop: listTop, stickyLeft: listLeft });
        } else if ("suggestedFriend" === kind) {
          const obj3 = { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions };
          return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendFlash, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
        } else if ("placeholder" === kind) {
          const obj = { row: item.row, height: listItemHeight };
          return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: listItemHeight });
        }
      }
    }
    return jsx(MessagesItemChannel.MessagesItemChannelFlash, { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row });
  }, items1);
  const items2 = [friendSuggestions];
  const getItemType = listRefHappeningNow.useCallback((kind) => kind.kind, []);
  const items3 = [renderHeader, listRefHappeningNow];
  const keyExtractor = listRefHappeningNow.useCallback((kind) => {
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
  }, items2);
  const items4 = [renderFooter];
  const ListHeaderComponent = listRefHappeningNow.useMemo(() => {
    if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
      const obj = { listRef: listRefHappeningNow };
      return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
    } else if (useMessagesData.MessagesDataHeader.EmptyState === renderHeader) {
      return jsx(MessagesItemEmptyStateDefault, {});
    } else {
      return null;
    }
  }, items3);
  const ListFooterComponent = listRefHappeningNow.useMemo(() => {
    let tmp = null;
    if (renderFooter) {
      tmp = jsx(MessagesItemAddFriendsWidgetDefault, {});
    }
    return tmp;
  }, items4);
  const tmp9 = listLeft(listRefHappeningNow.useState(null), 2);
  const first = tmp9[0];
  closure_18 = tmp9[1];
  const items5 = [data2];
  const onCommitLayoutEffect = listRefHappeningNow.useCallback(() => closure_18(data2), items5);
  const items6 = [first, data2, friendsHeaderIndex];
  const items7 = [insetEnd];
  const stickyHeaderIndices = listRefHappeningNow.useMemo(() => {
    let tmp;
    if (first === data2) {
      if (null != friendsHeaderIndex) {
        const items = [tmp2];
        tmp = items;
      }
    }
    return tmp;
  }, items6);
  const items8 = [scrollIndicatorInsetBottom];
  const contentContainerStyle = listRefHappeningNow.useMemo(() => ({ paddingBottom: insetEnd }), items7);
  const scrollIndicatorInsets = listRefHappeningNow.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items8);
  return listTop(insetEnd(listItemSuggestedFriendHeight[15]).AnimatedFlashList, { ref: ref2, accessibilityLabel, contentContainerStyle, data: data2, extraData, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onCommitLayoutEffect, onLoad: onCommitLayoutEffect, onScroll, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));