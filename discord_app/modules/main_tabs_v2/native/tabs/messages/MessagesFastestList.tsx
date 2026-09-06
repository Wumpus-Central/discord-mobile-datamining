// === Module 16102: MessagesFastestList ===

// Module 16102 (MessagesFastestList)
import nativeDefault from "native" /* 576 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7062 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7064 */;
import MessagesItemChannel from "MessagesItemChannel" /* 16030 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16040 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16042 */;
import useMessagesData from "useMessagesData" /* 16045 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 16096 */;
import noop from "module_19" /* 19 */;

const MessagesItemSeparatorDefault = MessagesItemSeparator;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles(() => {
  let obj = { placeholder: null };
  obj = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.placeholder = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default noop.memo(noop.forwardRef(function MessagesFastestList(listItemSizes, arg1) {
  ({ data, listItemHeight } = listItemSizes);
  listItemSizes = listItemSizes.listItemSizes;
  const listItemSuggestedFriendHeight = listItemSizes.listItemSuggestedFriendHeight;
  const listLeft = listItemSizes.listLeft;
  const listRefHappeningNow = listItemSizes.listRefHappeningNow;
  const listTop = listItemSizes.listTop;
  const scrollPosition = listItemSizes.scrollPosition;
  ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom } = listItemSizes);
  let tmp = listTop();
  closure_7 = tmp;
  const channels = data.channels;
  const channelFavorites = data.channelFavorites;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  const ref = listLeft.useRef(null);
  const imperativeHandle = listLeft.useImperativeHandle(arg1, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item: 0, animated: flag };
        current.scrollToLocation(obj);
      }
    }
  }), []);
  const items = [channelFavorites, listItemHeight, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items1 = [listTop, listLeft, scrollPosition];
  const callback = listLeft.useCallback((arg0, row) => {
    if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
      let obj = { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row };
      return jsx(MessagesItemChannel.MessagesItemChannelFast, { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (useMessagesData.MessagesDataSections.Channels === arg0) {
      obj = { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row };
      return jsx(MessagesItemChannel.MessagesItemChannelFast, { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
      return jsx(MessagesItemSeparatorDefault, {});
    } else if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
      const obj1 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
      const obj2 = { height: listItemSuggestedFriendHeight };
      const merged = Object.assign(obj1);
      return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendFast, { height: listItemSuggestedFriendHeight });
    } else if (useMessagesData.MessagesDataSections.Placeholders === arg0) {
      obj = { row, height: listItemHeight };
      return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  }, items);
  const memo = listLeft.useMemo(() => ({
    getComponent(arg0, arg1, stickyAt) {
      let tmp2 = null;
      if (arg0 === listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataSections.SuggestedFriends) {
        const obj = { scrollPosition, stickyAt, stickyTop, stickyLeft };
        tmp2 = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[9]), obj);
      }
      return tmp2;
    },
    getSize(arg0) {
      let num = 0;
      if (arg0 === listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataSections.SuggestedFriends) {
        num = listItemHeight(listItemSuggestedFriendHeight[9]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
      }
      return num;
    }
  }), items1);
  const items2 = [renderHeader, listRefHappeningNow];
  const memo1 = listLeft.useMemo(() => ({
    getComponent() {
      if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.HappeningNow === renderHeader) {
        const obj = { listRef };
        return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[10]), obj);
      } else if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.EmptyState === renderHeader) {
        return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[11]), {});
      } else {
        return null;
      }
    },
    getSize() {
      if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.HappeningNow === renderHeader) {
        return listItemHeight(listItemSuggestedFriendHeight[10]).getMessagesItemHappeningNowHeight();
      } else if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.EmptyState === renderHeader) {
        return listItemHeight(listItemSuggestedFriendHeight[11]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      } else {
        return 0;
      }
    }
  }), items2);
  const items3 = [renderFooter];
  const memo2 = listLeft.useMemo(() => ({
    getComponent() {
      let tmp = null;
      if (renderFooter) {
        tmp = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[12]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (renderFooter) {
        num = listItemHeight(listItemSuggestedFriendHeight[12]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
      }
      return num;
    }
  }), items3);
  const items4 = [listItemHeight, listItemSuggestedFriendHeight];
  const items5 = [channels, channelFavorites];
  const callback1 = listLeft.useCallback((arg0) => {
    if (useMessagesData.MessagesDataSections.FavoriteChannels !== arg0) {
      if (useMessagesData.MessagesDataSections.Channels !== arg0) {
        if (useMessagesData.MessagesDataSections.Placeholders !== arg0) {
          if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
            return listItemSuggestedFriendHeight;
          } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
            return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
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
  const callback2 = listLeft.useCallback((arg0, arg1, arg2) => {
    if (FastestListItemTypeDefault.SECTION_HEADER !== arg0) {
      if (FastestListItemTypeDefault.SECTION_FOOTER !== arg0) {
        if (FastestListItemTypeDefault.ITEM === arg0) {
          if (useMessagesData.MessagesDataSections.FavoriteChannels === arg1) {
            return channelFavorites[arg2].channelId;
          } else if (useMessagesData.MessagesDataSections.Channels === arg1) {
            return channels[arg2].channelId;
          }
        }
      }
    }
  }, items5);
  const memo3 = listLeft.useMemo(() => {
    let obj = { listHeader: null, sectionItem: null };
    obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_7.placeholder.backgroundColor, shape: "rect", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
    obj.listHeader = obj;
    obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, colorHex: closure_7.placeholder.backgroundColor, labelPadding: nativeDefault.space.PX_4, labelSize: listItemSizes.label, labelSecondarySize: listItemSizes.labelSecondary, padding: nativeDefault.space.PX_16, shape: "circle", shapeSize: listItemSizes.avatar };
    obj.sectionItem = obj;
    return obj;
  }, items6);
  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[15]), { insetEnd, accessibilityLabel, estimatedListSize: "windowSize", keyExtractor: callback2, itemSize: callback1, listId: "dm-messages-list", listFooterSize: memo2.getSize, listFooterAlwaysMounted: true, listHeaderSize: memo1.getSize, listHeaderAlwaysMounted: true, placeholderConfig: memo3, ref, renderItem: callback, renderListFooter: memo2.getComponent, renderListHeader: memo1.getComponent, renderSectionHeader: memo.getComponent, scrollIndicatorInsetEnd: scrollIndicatorInsetBottom, scrollReporting: "animatedCallbacks", scrollHandlerAnimated: handleScrollAnimated, sections: data.sections, sectionHeaderSize: memo.getSize });
}));