// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesFlashList.tsx
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c4 = importAllResult;
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MessagesFlashList(listItemHeight, ref) {
  ({ data, insetEnd } = listItemHeight);
  listItemHeight = listItemHeight.listItemHeight;
  const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
  const listLeft = listItemHeight.listLeft;
  const listRefHappeningNow = listItemHeight.listRefHappeningNow;
  const listTop = listItemHeight.listTop;
  const scrollIndicatorInsetBottom = listItemHeight.scrollIndicatorInsetBottom;
  const scrollPosition = listItemHeight.scrollPosition;
  let friendSuggestions;
  let renderHeader;
  let renderFooter;
  let setAddedFriendSuggestions;
  ref = undefined;
  data = undefined;
  let friendsHeaderIndex;
  let extraData;
  let listHeaderHeight;
  let first;
  closure_18 = undefined;
  friendSuggestions = data.friendSuggestions;
  renderHeader = data.renderHeader;
  renderFooter = data.renderFooter;
  setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ({ accessibilityLabel, handleScrollAnimated } = listItemHeight);
  ref = listRefHappeningNow.useRef(null);
  let tmp2 = listItemHeight(listItemSuggestedFriendHeight[3])(data, { listItemHeight });
  data = tmp2.listData;
  friendsHeaderIndex = tmp2.friendsHeaderIndex;
  extraData = tmp2.friendsHeaderOffset;
  listHeaderHeight = tmp2.listHeaderHeight;
  let items = [listHeaderHeight];
  const imperativeHandle = listRefHappeningNow.useImperativeHandle(ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const current = ref.current;
      if (current != null) {
        const obj = { offset: null, animated: null };
        obj[0] = closure_16;
        obj[1] = flag;
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
          return listTop(listItemHeight(listItemSuggestedFriendHeight[5]), {});
        } else if ("friendsHeader" === kind) {
          let obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
          obj[0] = scrollPosition;
          obj[1] = extraData;
          obj[2] = listTop;
          obj[3] = listLeft;
          return listTop(listItemHeight(listItemSuggestedFriendHeight[6]), obj);
        } else if ("suggestedFriend" === kind) {
          obj = { height: null, suggestedFriend: null, onAddFriendSuggestions: null };
          obj[0] = listItemSuggestedFriendHeight;
          obj[1] = friendSuggestions[item.row];
          obj[2] = setAddedFriendSuggestions;
          return listTop(insetEnd(listItemSuggestedFriendHeight[7]).MessagesItemSuggestedFriendFlash, obj);
        } else if ("placeholder" === kind) {
          obj = { row: null, height: null };
          obj[0] = item.row;
          obj[1] = listItemHeight;
          return listTop(listItemHeight(listItemSuggestedFriendHeight[8]), obj);
        }
      }
    }
    return listTop(insetEnd(listItemSuggestedFriendHeight[4]).MessagesItemChannelFlash, { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row });
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
    if (insetEnd(listItemSuggestedFriendHeight[9]).MessagesDataHeader.HappeningNow === renderHeader) {
      const obj = { listRef: null };
      obj[0] = listRefHappeningNow;
      return listTop(listItemHeight(tmp3[10]), obj);
    } else if (tmp2(tmp3[9]).MessagesDataHeader.EmptyState === tmp) {
      return listTop(listItemHeight(tmp3[11]), {});
    } else {
      return null;
    }
    tmp = renderHeader;
    tmp2 = insetEnd;
  }, items3);
  const ListFooterComponent = listRefHappeningNow.useMemo(() => {
    let tmp = null;
    if (renderFooter) {
      tmp = listTop(listItemHeight(listItemSuggestedFriendHeight[12]), {});
    }
    return tmp;
  }, items4);
  const tmp9 = listLeft(listRefHappeningNow.useState(null), 2);
  first = tmp9[0];
  closure_18 = tmp9[1];
  const items5 = [data];
  const onCommitLayoutEffect = listRefHappeningNow.useCallback(() => callback(data), items5);
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
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFlashList.tsx");

export default memoResult;