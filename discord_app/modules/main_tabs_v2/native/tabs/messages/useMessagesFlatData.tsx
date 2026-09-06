// === Module 16056: useMessagesFlatData ===

// Module 16056 (useMessagesFlatData)
import useMessagesData from "useMessagesData" /* 16045 */;
import MessagesItemHappeningNow from "MessagesItemHappeningNow" /* 16057 */;
import MessagesItemEmptyState from "MessagesItemEmptyState" /* 16095 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 16096 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx");

export default function useMessagesFlatData(channels, listItemHeight) {
  listItemHeight = listItemHeight.listItemHeight;
  channels = undefined;
  channels = channels.channels;
  const channelFavorites = channels.channelFavorites;
  const renderHeader = channels.renderHeader;
  const sections = channels.sections;
  const items = [channels, channelFavorites, renderHeader, sections, listItemHeight];
  return channelFavorites.useMemo(() => {
    if (renderHeader === useMessagesData.MessagesDataHeader.HappeningNow) {
      let listHeaderHeight = MessagesItemHappeningNow.getMessagesItemHappeningNowHeight();
      const tmp2Result = MessagesItemHappeningNow;
    } else {
      listHeaderHeight = 0;
      if (renderHeader === useMessagesData.MessagesDataHeader.EmptyState) {
        listHeaderHeight = MessagesItemEmptyState.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      }
    }
    const listData = [];
    const tmp4 = sections[useMessagesData.MessagesDataSections.FavoriteChannels];
    let num2 = 0;
    let sum = listHeaderHeight;
    let tmp6 = listHeaderHeight;
    if (0 < tmp4) {
      do {
        let obj = { kind: "favorite", channelId: channelFavorites[num2].channelId, row: num2 };
        let arr = listData.push(obj);
        sum = sum + listItemHeight;
        num2 = num2 + 1;
        tmp6 = sum;
      } while (num2 < tmp4);
    }
    const tmp10 = sections[useMessagesData.MessagesDataSections.Channels];
    let sum1 = tmp6;
    let num3 = 0;
    let tmp12 = tmp6;
    if (0 < tmp10) {
      do {
        obj = { kind: "channel", channelId: channels[num3].channelId, row: num3 };
        arr = listData.push(obj);
        sum1 = sum1 + listItemHeight;
        num3 = num3 + 1;
        tmp12 = sum1;
      } while (num3 < tmp10);
    }
    let sum2 = tmp12;
    if (sections[useMessagesData.MessagesDataSections.Separator] > 0) {
      listData.push({ kind: "separator" });
      sum2 = tmp12 + MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
    }
    const tmp21 = sections[useMessagesData.MessagesDataSections.SuggestedFriends];
    let friendsHeaderOffset;
    let friendsHeaderIndex;
    if (tmp21 > 0) {
      listData.push({ kind: "friendsHeader" });
      let num4 = 0;
      friendsHeaderOffset = sum2;
      friendsHeaderIndex = length;
      if (0 < tmp21) {
        do {
          let obj1 = { kind: "suggestedFriend", row: num4 };
          let arr3 = listData.push(obj1);
          num4 = num4 + 1;
          friendsHeaderOffset = sum2;
          friendsHeaderIndex = length;
        } while (num4 < tmp21);
      }
    }
    for (let num5 = 0; num5 < tmp26; num5 = num5 + 1) {
      let obj2 = { kind: "placeholder", row: num5 };
      let arr4 = listData.push(obj2);
    }
    return { listData, friendsHeaderIndex, friendsHeaderOffset, listHeaderHeight };
  }, items);
};