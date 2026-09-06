// === Module 16101: MessagesFlashList ===

// Module 16101 (MessagesFlashList)
import MessagesItemChannel from "MessagesItemChannel" /* 16030 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16040 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16042 */;
import useMessagesData from "useMessagesData" /* 16045 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 16057 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 16095 */;
import MessagesItemSeparatorDefault from "MessagesItemSeparator" /* 16096 */;
import MessagesItemSuggestedFriendsHeaderDefault from "MessagesItemSuggestedFriendsHeader" /* 16097 */;
import MessagesItemAddFriendsWidgetDefault from "MessagesItemAddFriendsWidget" /* 16098 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFlashList.tsx");

export default noop.memo(noop.forwardRef(function MessagesFlashList(listItemHeight, arg1) {
  ({ data, insetEnd } = listItemHeight);
  listItemHeight = listItemHeight.listItemHeight;
  const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
  const listLeft = listItemHeight.listLeft;
  const listRefHappeningNow = listItemHeight.listRefHappeningNow;
  const listTop = listItemHeight.listTop;
  const scrollIndicatorInsetBottom = listItemHeight.scrollIndicatorInsetBottom;
  const scrollPosition = listItemHeight.scrollPosition;
  data = undefined;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ({ accessibilityLabel, handleScrollAnimated } = listItemHeight);
  const ref = listRefHappeningNow.useRef(null);
  const tmp2 = listItemHeight(listItemSuggestedFriendHeight[3])(data, { listItemHeight });
  data = tmp2.listData;
  const friendsHeaderIndex = tmp2.friendsHeaderIndex;
  const extraData = tmp2.friendsHeaderOffset;
  const listHeaderHeight = tmp2.listHeaderHeight;
  let items = [listHeaderHeight];
  const imperativeHandle = listRefHappeningNow.useImperativeHandle(arg1, () => ({
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
          let obj = { scrollPosition, stickyAt: extraData, stickyTop: listTop, stickyLeft: listLeft };
          return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: extraData, stickyTop: listTop, stickyLeft: listLeft });
        } else if ("suggestedFriend" === kind) {
          obj = { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions };
          return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendFlash, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
        } else if ("placeholder" === kind) {
          obj = { row: item.row, height: listItemHeight };
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
  const items5 = [data];
  const onCommitLayoutEffect = listRefHappeningNow.useCallback(() => closure_18(data), items5);
  const items6 = [first, data, friendsHeaderIndex];
  const items7 = [insetEnd];
  const stickyHeaderIndices = listRefHappeningNow.useMemo(() => {
    let tmp;
    if (first === data) {
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
  return listTop(insetEnd(listItemSuggestedFriendHeight[13]).AnimatedFlashList, { ref, accessibilityLabel, contentContainerStyle, data, extraData, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onCommitLayoutEffect, onLoad: onCommitLayoutEffect, onScroll, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));