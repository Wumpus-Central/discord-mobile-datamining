// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx");

export default function useMessagesFlatData(channels, listItemHeight) {
  listItemHeight = listItemHeight.listItemHeight;
  channels = undefined;
  let channelFavorites;
  let renderHeader;
  let sections;
  channels = channels.channels;
  channelFavorites = channels.channelFavorites;
  renderHeader = channels.renderHeader;
  sections = channels.sections;
  const items = [channels, channelFavorites, renderHeader, sections, listItemHeight];
  return channelFavorites.useMemo(() => {
    if (renderHeader === listItemHeight(channels[1]).MessagesDataHeader.HappeningNow) {
      let listHeaderHeight = tmp2(tmp3[2]).getMessagesItemHappeningNowHeight();
      const tmp2Result = tmp2(tmp3[2]);
    } else {
      listHeaderHeight = 0;
      if (renderHeader === tmp2(tmp3[1]).MessagesDataHeader.EmptyState) {
        listHeaderHeight = tmp2(tmp3[3]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      }
    }
    const listData = [];
    const tmp4 = sections[listItemHeight(undefined, channels[1]).MessagesDataSections.FavoriteChannels];
    let num2 = 0;
    let sum = listHeaderHeight;
    let tmp6 = listHeaderHeight;
    if (0 < tmp4) {
      do {
        let obj = { kind: "favorite", channelId: null, row: null };
        let tmp7 = channelFavorites;
        obj[1] = channelFavorites[num2].channelId;
        obj[2] = num2;
        let arr = listData.push(obj);
        let tmp9 = listItemHeight;
        sum = sum + listItemHeight;
        num2 = num2 + 1;
        tmp6 = sum;
      } while (num2 < tmp4);
    }
    const tmp10 = sections[listItemHeight(undefined, channels[1]).MessagesDataSections.Channels];
    let sum1 = tmp6;
    let num3 = 0;
    let tmp12 = tmp6;
    if (0 < tmp10) {
      do {
        obj = { kind: "channel", channelId: null, row: null };
        let tmp13 = channels;
        obj[1] = channels[num3].channelId;
        obj[2] = num3;
        arr = listData.push(obj);
        let tmp15 = listItemHeight;
        sum1 = sum1 + listItemHeight;
        num3 = num3 + 1;
        tmp12 = sum1;
      } while (num3 < tmp10);
    }
    let sum2 = tmp12;
    if (sections[listItemHeight(undefined, channels[1]).MessagesDataSections.Separator] > 0) {
      listData.push({ kind: "separator" });
      sum2 = tmp12 + tmp17(tmp18[4]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
    }
    const tmp21 = sections[listItemHeight(undefined, channels[1]).MessagesDataSections.SuggestedFriends];
    let friendsHeaderOffset;
    let friendsHeaderIndex;
    if (tmp21 > 0) {
      listData.push({ kind: "friendsHeader" });
      let num4 = 0;
      friendsHeaderOffset = sum2;
      friendsHeaderIndex = length;
      if (0 < tmp21) {
        do {
          obj1 = { kind: "suggestedFriend", row: null };
          obj1[1] = num4;
          let arr3 = listData.push(obj1);
          num4 = num4 + 1;
          friendsHeaderOffset = sum2;
          friendsHeaderIndex = length;
        } while (num4 < tmp21);
      }
    }
    for (let num5 = 0; num5 < tmp26; num5 = num5 + 1) {
      let obj2 = { kind: "placeholder", row: null };
      obj2[1] = num5;
      let arr4 = listData.push(obj2);
    }
    return { listData, friendsHeaderIndex, friendsHeaderOffset, listHeaderHeight };
  }, items);
};