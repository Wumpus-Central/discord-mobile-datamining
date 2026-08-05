// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let closure_5 = createCacheKey.createStyles(() => {
  let obj = { placeholder: null };
  obj = { backgroundColor: require("../../../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_SUBTLE };
  obj[0] = obj;
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef(function MessagesFastestList(listItemHeight, ref) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  let isRefreshEnabled;
  let scrollIndicatorInsetBottom;
  ({ data, isRefreshEnabled } = listItemHeight);
  listItemHeight = listItemHeight.listItemHeight;
  const listItemSizes = listItemHeight.listItemSizes;
  const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
  const listLeft = listItemHeight.listLeft;
  const listRefHappeningNow = listItemHeight.listRefHappeningNow;
  const listTop = listItemHeight.listTop;
  const scrollPosition = listItemHeight.scrollPosition;
  let c8;
  let channels;
  let channelFavorites;
  let friendSuggestions;
  let renderHeader;
  let renderFooter;
  let setAddedFriendSuggestions;
  ref = undefined;
  ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom } = listItemHeight);
  let tmp = listRefHappeningNow();
  c8 = tmp;
  channels = data.channels;
  channelFavorites = data.channelFavorites;
  friendSuggestions = data.friendSuggestions;
  renderHeader = data.renderHeader;
  renderFooter = data.renderFooter;
  setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ref = listItemSuggestedFriendHeight.useRef(null);
  const imperativeHandle = listItemSuggestedFriendHeight.useImperativeHandle(ref, () => ({
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
  const callback = listItemSuggestedFriendHeight.useCallback((arg0, arg1) => {
    if (isRefreshEnabled(listItemSizes[4]).MessagesDataSections.FavoriteChannels === arg0) {
      let obj = { channelId: null, placeholderHeight: null, row: null };
      obj[0] = channelFavorites[arg1].channelId;
      obj[1] = listItemHeight;
      obj[2] = arg1;
      return listLeft(tmp(tmp2[5]).MessagesItemChannelFast, obj);
    } else if (tmp(tmp2[4]).MessagesDataSections.Channels === arg0) {
      obj = { channelId: null, placeholderHeight: null, row: null };
      obj[0] = channels[arg1].channelId;
      obj[1] = listItemHeight;
      obj[2] = arg1;
      return listLeft(tmp(tmp2[5]).MessagesItemChannelFast, obj);
    } else if (tmp(tmp2[4]).MessagesDataSections.Separator === arg0) {
      return listLeft(listItemHeight(tmp2[6]), {});
    } else if (tmp(tmp2[4]).MessagesDataSections.SuggestedFriends === arg0) {
      const obj1 = { suggestedFriend: null, onAddFriendSuggestions: null };
      obj1[0] = friendSuggestions[arg1];
      obj1[1] = setAddedFriendSuggestions;
      const obj2 = { height: null };
      obj2[0] = listItemSuggestedFriendHeight;
      const merged = Object.assign(obj1);
      return listLeft(tmp(tmp2[7]).MessagesItemSuggestedFriendFast, obj2);
    } else if (tmp(tmp2[4]).MessagesDataSections.Placeholders === arg0) {
      obj = { row: null, height: null };
      obj[0] = arg1;
      obj[1] = listItemHeight;
      return listLeft(listItemHeight(tmp2[8]), obj);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  }, items);
  const memo = listItemSuggestedFriendHeight.useMemo(() => ({
    getComponent(arg0, arg1, arg2) {
      let tmp2 = null;
      if (arg0 === outer1_0(outer1_2[4]).MessagesDataSections.SuggestedFriends) {
        const obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
        obj[0] = closure_7;
        obj[1] = arg2;
        obj[2] = closure_6;
        obj[3] = closure_4;
        tmp2 = outer1_4(outer1_1(outer1_2[9]), obj);
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
  const items2 = [renderHeader, isRefreshEnabled, listRefHappeningNow];
  const memo1 = listItemSuggestedFriendHeight.useMemo(() => ({
    getComponent() {
      if (outer1_0(outer1_2[4]).MessagesDataHeader.HappeningNow === closure_12) {
        const obj = { listRef: null };
        obj[0] = closure_5;
        return outer1_4(outer1_1(tmp3[10]), obj);
      } else if (tmp2(tmp3[4]).MessagesDataHeader.EmptyState === tmp) {
        return outer1_4(outer1_1(tmp3[11]), {});
      } else {
        return null;
      }
      tmp = closure_12;
      tmp2 = outer1_0;
    },
    getSize() {
      if (outer1_0(outer1_2[4]).MessagesDataHeader.HappeningNow === closure_12) {
        return tmp2(tmp3[10]).getMessagesItemHappeningNowHeight(closure_0);
      } else if (tmp2(tmp3[4]).MessagesDataHeader.EmptyState === tmp) {
        return tmp2(tmp3[11]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      } else {
        return 0;
      }
      tmp = closure_12;
    }
  }), items2);
  const items3 = [renderFooter];
  const memo2 = listItemSuggestedFriendHeight.useMemo(() => ({
    getComponent() {
      let tmp = null;
      if (closure_13) {
        tmp = outer1_4(outer1_1(outer1_2[12]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (closure_13) {
        num = outer1_0(outer1_2[12]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
      }
      return num;
    }
  }), items3);
  const items4 = [listItemHeight, listItemSuggestedFriendHeight];
  const items5 = [channels, channelFavorites];
  const callback1 = listItemSuggestedFriendHeight.useCallback((arg0) => {
    if (isRefreshEnabled(listItemSizes[4]).MessagesDataSections.FavoriteChannels !== arg0) {
      if (tmp(tmp2[4]).MessagesDataSections.Channels !== arg0) {
        if (tmp(tmp2[4]).MessagesDataSections.Placeholders !== arg0) {
          if (tmp(tmp2[4]).MessagesDataSections.SuggestedFriends === arg0) {
            return listItemSuggestedFriendHeight;
          } else if (tmp(tmp2[4]).MessagesDataSections.Separator === arg0) {
            return tmp(tmp2[6]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
            throw error;
          }
        }
      }
    }
    return listItemHeight;
  }, items4);
  const items6 = [tmp, listItemSizes];
  const callback2 = listItemSuggestedFriendHeight.useCallback((arg0, arg1, arg2) => {
    if (listItemHeight(listItemSizes[13]).SECTION_HEADER !== arg0) {
      if (tmp(tmp2[13]).SECTION_FOOTER !== arg0) {
        if (tmp(tmp2[13]).ITEM === arg0) {
          if (isRefreshEnabled(tmp2[4]).MessagesDataSections.FavoriteChannels === arg1) {
            return channelFavorites[arg2].channelId;
          } else if (tmp5(tmp2[4]).MessagesDataSections.Channels === arg1) {
            return channels[arg2].channelId;
          }
          tmp5 = isRefreshEnabled;
        }
      }
    }
  }, items5);
  const memo3 = listItemSuggestedFriendHeight.useMemo(() => {
    let obj = { listHeader: null, sectionItem: null };
    obj = { type: isRefreshEnabled(listItemSizes[14]).FastestListPropsPlaceholderType.SHAPE, colorHex: _undefined.placeholder.backgroundColor, shape: "rect", borderRadius: listItemHeight(listItemSizes[3]).radii.lg, paddingHorizontal: listItemHeight(listItemSizes[3]).space.PX_8, paddingVertical: listItemHeight(listItemSizes[3]).space.PX_4 };
    obj[0] = obj;
    obj = { type: isRefreshEnabled(listItemSizes[14]).FastestListPropsPlaceholderType.FEED_ITEM, colorHex: _undefined.placeholder.backgroundColor, labelPadding: listItemHeight(listItemSizes[3]).space.PX_4, labelSize: listItemSizes.label, labelSecondarySize: listItemSizes.labelSecondary, padding: listItemHeight(listItemSizes[3]).space.PX_16, shape: "circle", shapeSize: listItemSizes.avatar };
    obj[1] = obj;
    return obj;
  }, items6);
  return listLeft(listItemHeight(listItemSizes[15]), { insetEnd, accessibilityLabel, estimatedListSize: "windowSize", keyExtractor: callback2, itemSize: callback1, listId: "dm-messages-list", listFooterSize: memo2.getSize, listFooterAlwaysMounted: true, listHeaderSize: memo1.getSize, listHeaderAlwaysMounted: true, placeholderConfig: memo3, ref, renderItem: callback, renderListFooter: memo2.getComponent, renderListHeader: memo1.getComponent, renderSectionHeader: memo.getComponent, scrollIndicatorInsetEnd: scrollIndicatorInsetBottom, scrollReporting: "animatedCallbacks", scrollHandlerAnimated: handleScrollAnimated, sections: data.sections, sectionHeaderSize: memo.getSize });
}));
const result = require("createCacheKey").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default memoResult;