// === Module 16055: MessagesLegendList ===

// Module 16055 (MessagesLegendList)
import MessagesItemChannel from "MessagesItemChannel" /* 16030 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16040 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16042 */;
import useMessagesData from "useMessagesData" /* 16045 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 16057 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 16095 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 16096 */;
import MessagesItemSuggestedFriendsHeader from "MessagesItemSuggestedFriendsHeader" /* 16097 */;
import MessagesItemAddFriendsWidgetDefault from "MessagesItemAddFriendsWidget" /* 16098 */;
import noop from "module_19" /* 19 */;

const MessagesItemSeparatorDefault = MessagesItemSeparator;
const MessagesItemSuggestedFriendsHeaderDefault = MessagesItemSuggestedFriendsHeader;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx");

export default noop.memo(noop.forwardRef(function MessagesLegendList(listItemHeight, ref) {
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
  ref = listLeft.useRef(null);
  data = estimatedItemSize(listItemSuggestedFriendHeight[2])(data, { listItemHeight: estimatedItemSize });
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
        const obj = { offset, animated: flag };
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
          return jsx(MessagesItemSeparatorDefault, {});
        } else if ("friendsHeader" === kind) {
          let obj = { scrollPosition, stickyAt: friendsHeaderOffset, stickyTop: listTop, stickyLeft: listLeft };
          return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: friendsHeaderOffset, stickyTop: listTop, stickyLeft: listLeft });
        } else if ("suggestedFriend" === kind) {
          obj = { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions };
          return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
        } else if ("placeholder" === kind) {
          obj = { row: item.row, height: estimatedItemSize };
          return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: estimatedItemSize });
        }
      }
    }
    return jsx(MessagesItemChannel.MessagesItemChannelLegend, { channelId: item.channelId, placeholderHeight: estimatedItemSize, row: item.row });
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
      const obj = { listRef: listRefHappeningNow };
      return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
    } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
      return jsx(MessagesItemEmptyStateDefault, {});
    } else {
      return null;
    }
    tmp = renderHeader;
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
  return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[12]).AnimatedLegendList, { ref, accessibilityLabel, contentContainerStyle, data: data.listData, estimatedHeaderSize, estimatedItemSize, getFixedItemSize, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onScroll, recycleItems, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));