// === Module 16102: ? ===

// Module 16102
import ThemesDefault from "Themes" /* 576 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c3 = importAllResult;
let closure_5 = createCacheKey.createStyles(() => {
  let obj = { placeholder: null };
  obj = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[0] = obj;
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MessagesFastestList(listItemSizes, ref) {
  ({ data, listItemHeight } = listItemSizes);
  listItemSizes = listItemSizes.listItemSizes;
  const listItemSuggestedFriendHeight = listItemSizes.listItemSuggestedFriendHeight;
  const listLeft = listItemSizes.listLeft;
  const listRefHappeningNow = listItemSizes.listRefHappeningNow;
  const listTop = listItemSizes.listTop;
  const scrollPosition = listItemSizes.scrollPosition;
  closure_7 = undefined;
  let channels;
  let channelFavorites;
  let friendSuggestions;
  let renderHeader;
  let renderFooter;
  let setAddedFriendSuggestions;
  ref = undefined;
  ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom } = listItemSizes);
  let tmp = listTop();
  closure_7 = tmp;
  channels = data.channels;
  channelFavorites = data.channelFavorites;
  friendSuggestions = data.friendSuggestions;
  renderHeader = data.renderHeader;
  renderFooter = data.renderFooter;
  setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ref = listLeft.useRef(null);
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item: 0, animated: null };
        obj[2] = flag;
        current.scrollToLocation(obj);
      }
    }
  }), []);
  const items = [channelFavorites, listItemHeight, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items1 = [listTop, listLeft, scrollPosition];
  const callback = listLeft.useCallback((arg0, arg1) => {
    if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataSections.FavoriteChannels === arg0) {
      let obj = { channelId: null, placeholderHeight: null, row: null };
      obj[0] = channelFavorites[arg1].channelId;
      obj[1] = listItemHeight;
      obj[2] = arg1;
      return listRefHappeningNow(tmp(tmp2[5]).MessagesItemChannelFast, obj);
    } else if (tmp(tmp2[4]).MessagesDataSections.Channels === arg0) {
      obj = { channelId: null, placeholderHeight: null, row: null };
      obj[0] = channels[arg1].channelId;
      obj[1] = listItemHeight;
      obj[2] = arg1;
      return listRefHappeningNow(tmp(tmp2[5]).MessagesItemChannelFast, obj);
    } else if (tmp(tmp2[4]).MessagesDataSections.Separator === arg0) {
      return listRefHappeningNow(listItemSizes(tmp2[6]), {});
    } else if (tmp(tmp2[4]).MessagesDataSections.SuggestedFriends === arg0) {
      obj1 = { suggestedFriend: null, onAddFriendSuggestions: null };
      obj1[0] = friendSuggestions[arg1];
      obj1[1] = setAddedFriendSuggestions;
      const obj2 = { height: null };
      obj2[0] = listItemSuggestedFriendHeight;
      const merged = Object.assign(obj1);
      return listRefHappeningNow(tmp(tmp2[7]).MessagesItemSuggestedFriendFast, obj2);
    } else if (tmp(tmp2[4]).MessagesDataSections.Placeholders === arg0) {
      obj = { row: null, height: null };
      obj[0] = arg1;
      obj[1] = listItemHeight;
      return listRefHappeningNow(listItemSizes(tmp2[8]), obj);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  }, items);
  const memo = listLeft.useMemo(() => ({
    getComponent(arg0, arg1, arg2) {
      let tmp2 = null;
      if (arg0 === closure_1_0(closure_1_2[4]).MessagesDataSections.SuggestedFriends) {
        const obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
        obj[0] = closure_6;
        obj[1] = arg2;
        obj[2] = closure_5;
        obj[3] = closure_3;
        tmp2 = closure_1_4(closure_1_1(closure_1_2[9]), obj);
      }
      return tmp2;
    },
    getSize(arg0) {
      let num = 0;
      if (arg0 === callback(table[4]).MessagesDataSections.SuggestedFriends) {
        num = callback(table[9]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
      }
      return num;
    }
  }), items1);
  const items2 = [renderHeader, listRefHappeningNow];
  const memo1 = listLeft.useMemo(() => ({
    getComponent() {
      if (closure_1_0(closure_1_2[4]).MessagesDataHeader.HappeningNow === closure_11) {
        const obj = { listRef: null };
        obj[0] = closure_4;
        return closure_1_4(closure_1_1(tmp3[10]), obj);
      } else if (tmp2(tmp3[4]).MessagesDataHeader.EmptyState === tmp) {
        return closure_1_4(closure_1_1(tmp3[11]), {});
      } else {
        return null;
      }
      tmp = closure_11;
      tmp2 = closure_1_0;
    },
    getSize() {
      if (closure_1_0(closure_1_2[4]).MessagesDataHeader.HappeningNow === closure_11) {
        return tmp2(tmp3[10]).getMessagesItemHappeningNowHeight();
      } else if (tmp2(tmp3[4]).MessagesDataHeader.EmptyState === tmp) {
        return tmp2(tmp3[11]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      } else {
        return 0;
      }
      tmp = closure_11;
    }
  }), items2);
  const items3 = [renderFooter];
  const memo2 = listLeft.useMemo(() => ({
    getComponent() {
      let tmp = null;
      if (closure_12) {
        tmp = closure_1_4(closure_1_1(closure_1_2[12]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (closure_12) {
        num = closure_1_0(closure_1_2[12]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
      }
      return num;
    }
  }), items3);
  const items4 = [listItemHeight, listItemSuggestedFriendHeight];
  const items5 = [channels, channelFavorites];
  const callback1 = listLeft.useCallback((arg0) => {
    if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataSections.FavoriteChannels !== arg0) {
      if (tmp(tmp2[4]).MessagesDataSections.Channels !== arg0) {
        if (tmp(tmp2[4]).MessagesDataSections.Placeholders !== arg0) {
          if (tmp(tmp2[4]).MessagesDataSections.SuggestedFriends === arg0) {
            return listItemSuggestedFriendHeight;
          } else if (tmp(tmp2[4]).MessagesDataSections.Separator === arg0) {
            return tmp(tmp2[6]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Invalid section " + arg0 + " in Messages renderItem");
            throw error;
          }
        }
      }
    }
    return listItemHeight;
  }, items4);
  const items6 = [tmp, listItemSizes];
  const callback2 = listLeft.useCallback((arg0, arg1, arg2) => {
    if (listItemSizes(listItemSuggestedFriendHeight[13]).SECTION_HEADER !== arg0) {
      if (tmp(tmp2[13]).SECTION_FOOTER !== arg0) {
        if (tmp(tmp2[13]).ITEM === arg0) {
          if (listItemHeight(tmp2[4]).MessagesDataSections.FavoriteChannels === arg1) {
            return channelFavorites[arg2].channelId;
          } else if (tmp5(tmp2[4]).MessagesDataSections.Channels === arg1) {
            return channels[arg2].channelId;
          }
          tmp5 = listItemHeight;
        }
      }
    }
  }, items5);
  const memo3 = listLeft.useMemo(() => {
    let obj = { listHeader: null, sectionItem: null };
    obj = { type: listItemHeight(listItemSuggestedFriendHeight[14]).FastestListPropsPlaceholderType.SHAPE, colorHex: closure_7.placeholder.backgroundColor, shape: "rect", borderRadius: listItemSizes(listItemSuggestedFriendHeight[3]).radii.lg, paddingHorizontal: listItemSizes(listItemSuggestedFriendHeight[3]).space.PX_8, paddingVertical: listItemSizes(listItemSuggestedFriendHeight[3]).space.PX_4 };
    obj[0] = obj;
    obj = { type: listItemHeight(listItemSuggestedFriendHeight[14]).FastestListPropsPlaceholderType.FEED_ITEM, colorHex: closure_7.placeholder.backgroundColor, labelPadding: listItemSizes(listItemSuggestedFriendHeight[3]).space.PX_4, labelSize: listItemSizes.label, labelSecondarySize: listItemSizes.labelSecondary, padding: listItemSizes(listItemSuggestedFriendHeight[3]).space.PX_16, shape: "circle", shapeSize: listItemSizes.avatar };
    obj[1] = obj;
    return obj;
  }, items6);
  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[15]), { insetEnd, accessibilityLabel, estimatedListSize: "windowSize", keyExtractor: callback2, itemSize: callback1, listId: "dm-messages-list", listFooterSize: memo2.getSize, listFooterAlwaysMounted: true, listHeaderSize: memo1.getSize, listHeaderAlwaysMounted: true, placeholderConfig: memo3, ref, renderItem: callback, renderListFooter: memo2.getComponent, renderListHeader: memo1.getComponent, renderSectionHeader: memo.getComponent, scrollIndicatorInsetEnd: scrollIndicatorInsetBottom, scrollReporting: "animatedCallbacks", scrollHandlerAnimated: handleScrollAnimated, sections: data.sections, sectionHeaderSize: memo.getSize });
}));
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default memoResult;