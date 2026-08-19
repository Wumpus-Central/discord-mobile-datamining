// === Module 15318: ? ===

// Module 15318
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MessagesLegendList(listItemHeight, ref) {
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
  ({ accessibilityLabel, handleScrollAnimated, isRefreshEnabled, recycleItems } = listItemHeight);
  ref = listLeft.useRef(null);
  data = estimatedItemSize(listItemSuggestedFriendHeight[2])(data, { listItemHeight: estimatedItemSize, isRefreshEnabled });
  const friendsHeaderIndex = data.friendsHeaderIndex;
  const friendsHeaderOffset = data.friendsHeaderOffset;
  const estimatedHeaderSize = data.listHeaderHeight;
  let items = [estimatedHeaderSize];
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const current = ref.current;
      if (current != null) {
        const obj = { offset: null, animated: null };
        obj[0] = closure_15;
        obj[1] = flag;
        current.scrollToOffset(obj);
      }
    }
  }), items);
  const items1 = [estimatedItemSize, scrollPosition, friendsHeaderOffset, listTop, listLeft, listItemSuggestedFriendHeight, friendSuggestions, setAddedFriendSuggestions];
  const renderItem = listLeft.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("separator" === kind) {
          return listRefHappeningNow(estimatedItemSize(listItemSuggestedFriendHeight[4]), {});
        } else if ("friendsHeader" === kind) {
          let obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
          obj[0] = scrollPosition;
          obj[1] = friendsHeaderOffset;
          obj[2] = listTop;
          obj[3] = listLeft;
          return listRefHappeningNow(estimatedItemSize(listItemSuggestedFriendHeight[5]), obj);
        } else if ("suggestedFriend" === kind) {
          obj = { height: null, suggestedFriend: null, onAddFriendSuggestions: null };
          obj[0] = listItemSuggestedFriendHeight;
          obj[1] = friendSuggestions[item.row];
          obj[2] = setAddedFriendSuggestions;
          return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[6]).MessagesItemSuggestedFriendLegend, obj);
        } else if ("placeholder" === kind) {
          obj = { row: null, height: null };
          obj[0] = item.row;
          obj[1] = estimatedItemSize;
          return listRefHappeningNow(estimatedItemSize(listItemSuggestedFriendHeight[7]), obj);
        }
      }
    }
    return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[3]).MessagesItemChannelLegend, { channelId: item.channelId, placeholderHeight: estimatedItemSize, row: item.row });
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
            return insetEnd(listItemSuggestedFriendHeight[4]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else if ("friendsHeader" === kind) {
            return insetEnd(listItemSuggestedFriendHeight[5]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
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
    if (insetEnd(listItemSuggestedFriendHeight[8]).MessagesDataHeader.HappeningNow === renderHeader) {
      const obj = { listRef: null };
      obj[0] = listRefHappeningNow;
      return listRefHappeningNow(estimatedItemSize(listItemSuggestedFriendHeight[9]), obj);
    } else if (insetEnd(listItemSuggestedFriendHeight[8]).MessagesDataHeader.EmptyState === renderHeader) {
      return listRefHappeningNow(estimatedItemSize(listItemSuggestedFriendHeight[10]), {});
    } else {
      return null;
    }
  }, items4);
  const items6 = [friendsHeaderIndex];
  const ListFooterComponent = listLeft.useMemo(() => {
    let tmp = null;
    if (renderFooter) {
      tmp = listRefHappeningNow(estimatedItemSize(listItemSuggestedFriendHeight[11]), {});
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
  return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[12]).AnimatedLegendList, { ref, accessibilityLabel, contentContainerStyle, data: data.listData, estimatedHeaderSize, estimatedItemSize, getFixedItemSize, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onScroll, recycleItems, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx");

export default memoResult;