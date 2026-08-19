// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx
import noop from "../../../../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx");

export default function useMessagesFlatData(channels, listItemHeight) {
  listItemHeight = listItemHeight.listItemHeight;
  const isRefreshEnabled = listItemHeight.isRefreshEnabled;
  channels = undefined;
  channels = channels.channels;
  const channelFavorites = channels.channelFavorites;
  const renderHeader = channels.renderHeader;
  const sections = channels.sections;
  const items = [channels, channelFavorites, renderHeader, sections, listItemHeight, isRefreshEnabled];
  return channels.useMemo(() => {
    if (renderHeader === listItemHeight(isRefreshEnabled[1]).MessagesDataHeader.HappeningNow) {
      let listHeaderHeight = listItemHeight(isRefreshEnabled[2]).getMessagesItemHappeningNowHeight(isRefreshEnabled);
      const tmp2Result = listItemHeight(isRefreshEnabled[2]);
    } else {
      listHeaderHeight = 0;
      if (renderHeader === listItemHeight(isRefreshEnabled[1]).MessagesDataHeader.EmptyState) {
        listHeaderHeight = listItemHeight(isRefreshEnabled[3]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      }
    }
    const listData = [];
    const tmp5 = sections[listItemHeight(undefined, isRefreshEnabled[1]).MessagesDataSections.FavoriteChannels];
    let num2 = 0;
    let sum = listHeaderHeight;
    let tmp7 = listHeaderHeight;
    if (0 < tmp5) {
      do {
        let obj = { kind: "favorite", channelId: null, row: null };
        obj[1] = channelFavorites[num2].channelId;
        obj[2] = num2;
        let arr = listData.push(obj);
        sum = sum + listItemHeight;
        num2 = num2 + 1;
        tmp7 = sum;
      } while (num2 < tmp5);
    }
    const tmp11 = sections[listItemHeight(undefined, isRefreshEnabled[1]).MessagesDataSections.Channels];
    let sum1 = tmp7;
    let num3 = 0;
    let tmp13 = tmp7;
    if (0 < tmp11) {
      do {
        obj = { kind: "channel", channelId: null, row: null };
        obj[1] = channels[num3].channelId;
        obj[2] = num3;
        arr = listData.push(obj);
        sum1 = sum1 + listItemHeight;
        num3 = num3 + 1;
        tmp13 = sum1;
      } while (num3 < tmp11);
    }
    let sum2 = tmp13;
    if (sections[listItemHeight(undefined, isRefreshEnabled[1]).MessagesDataSections.Separator] > 0) {
      listData.push({ kind: "separator" });
      sum2 = tmp13 + listItemHeight(isRefreshEnabled[4]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
    }
    const tmp22 = sections[listItemHeight(undefined, isRefreshEnabled[1]).MessagesDataSections.SuggestedFriends];
    let friendsHeaderOffset;
    let friendsHeaderIndex;
    if (tmp22 > 0) {
      listData.push({ kind: "friendsHeader" });
      let num4 = 0;
      friendsHeaderOffset = sum2;
      friendsHeaderIndex = length;
      if (0 < tmp22) {
        do {
          obj1 = { kind: "suggestedFriend", row: null };
          obj1[1] = num4;
          let arr3 = listData.push(obj1);
          num4 = num4 + 1;
          friendsHeaderOffset = sum2;
          friendsHeaderIndex = length;
        } while (num4 < tmp22);
      }
    }
    for (let num5 = 0; num5 < tmp27; num5 = num5 + 1) {
      let obj2 = { kind: "placeholder", row: null };
      obj2[1] = num5;
      let arr4 = listData.push(obj2);
    }
    return { listData, friendsHeaderIndex, friendsHeaderOffset, listHeaderHeight };
  }, items);
};