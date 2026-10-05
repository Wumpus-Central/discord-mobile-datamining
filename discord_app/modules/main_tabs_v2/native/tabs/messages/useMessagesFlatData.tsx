// === Module 15981: useMessagesFlatData ===

// Module 15981 (useMessagesFlatData)
import react2 from "react" /* 576 */;
import useMessagesData from "useMessagesData" /* 15972 */;
import MessagesItemHappeningNow from "MessagesItemHappeningNow" /* 15982 */;
import MessagesItemEmptyState from "MessagesItemEmptyState" /* 16019 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 16020 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, listItemHeight) => {
  let channelFavorites;
  let channels;
  let num9;
  let renderHeader;
  let sections;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(10);
  listItemHeight = listItemHeight.listItemHeight;
  ({ channels, channelFavorites, renderHeader, sections } = arg0);
  if (cResult[0] === channelFavorites) {
    if (cResult[1] === channels) {
      if (cResult[2] === listItemHeight) {
        if (cResult[3] === renderHeader) {
          let tmp4;
          if (cResult[4] === sections) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
    }
  }
  if (cResult[6] !== renderHeader) {
    let num;
    if (renderHeader === useMessagesData.MessagesDataHeader.HappeningNow) {
      const tmpResult = MessagesItemHappeningNow;
      num = tmpResult.getMessagesItemHappeningNowHeight();
    } else {
      num = 0;
      if (renderHeader === useMessagesData.MessagesDataHeader.EmptyState) {
        num = MessagesItemEmptyState.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      }
    }
    cResult[6] = renderHeader;
    cResult[7] = num;
    tmp5 = num;
  } else {
    tmp5 = cResult[7];
  }
  const items = [];
  const tmp6 = sections[useMessagesData.MessagesDataSections.FavoriteChannels];
  let num4 = 0;
  let sum = tmp5;
  let tmp8 = tmp5;
  if (0 < tmp6) {
    do {
      let obj2 = { kind: "favorite", channelId: channelFavorites[num4].channelId, row: num4 };
      let arr = items.push(obj2);
      sum = sum + listItemHeight;
      num4 = num4 + 1;
      tmp8 = sum;
    } while (num4 < tmp6);
  }
  const tmp10 = sections[useMessagesData.MessagesDataSections.Channels];
  let sum1 = tmp8;
  let num5 = 0;
  let tmp12 = tmp8;
  if (0 < tmp10) {
    do {
      let obj3 = { kind: "channel", channelId: channels[num5].channelId, row: num5 };
      let arr7 = items.push(obj3);
      sum1 = sum1 + listItemHeight;
      num5 = num5 + 1;
      tmp12 = sum1;
    } while (num5 < tmp10);
  }
  let sum2 = tmp12;
  if (sections[useMessagesData.MessagesDataSections.Separator] > 0) {
    let tmp18;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { kind: "separator" };
      cResult[8] = obj4;
      tmp18 = obj4;
    } else {
      tmp18 = cResult[8];
    }
    items.push(tmp18);
    sum2 = tmp12 + MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
  }
  const tmp20 = sections[useMessagesData.MessagesDataSections.SuggestedFriends];
  let tmp21;
  let tmp22;
  if (tmp20 > 0) {
    let tmp24;
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { kind: "friendsHeader" };
      cResult[9] = obj5;
      tmp24 = obj5;
    } else {
      tmp24 = cResult[9];
    }
    items.push(tmp24);
    let num8 = 0;
    tmp21 = sum2;
    tmp22 = length;
    if (0 < tmp20) {
      do {
        let obj6 = { kind: "suggestedFriend", row: num8 };
        let arr10 = items.push(obj6);
        num8 = num8 + 1;
        tmp21 = sum2;
        tmp22 = length;
      } while (num8 < tmp20);
    }
  }
  const tmp27 = sections[useMessagesData.MessagesDataSections.Placeholders];
  for (let num9 = 0; num9 < tmp27; num9 = num9 + 1) {
    let obj7 = { kind: "placeholder", row: num9 };
    let arr11 = items.push(obj7);
  }
  const obj8 = { listData: items, friendsHeaderIndex: tmp22, friendsHeaderOffset: tmp21, listHeaderHeight: tmp5 };
  cResult[0] = channelFavorites;
  cResult[1] = channels;
  cResult[2] = listItemHeight;
  cResult[3] = renderHeader;
  cResult[4] = sections;
  cResult[5] = obj8;
  tmp4 = obj8;
}) : ((channels, listItemHeight) => {
  listItemHeight = listItemHeight.listItemHeight;
  channels = undefined;
  channels = channels.channels;
  const channelFavorites = channels.channelFavorites;
  const renderHeader = channels.renderHeader;
  const sections = channels.sections;
  const items = [channels, channelFavorites, renderHeader, sections, listItemHeight];
  return channelFavorites.useMemo(() => {
    let listHeaderHeight;
    let num5;
    if (renderHeader === useMessagesData.MessagesDataHeader.HappeningNow) {
      const tmp2Result = MessagesItemHappeningNow;
      listHeaderHeight = tmp2Result.getMessagesItemHappeningNowHeight();
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
        let obj2 = { kind: "channel", channelId: channels[num3].channelId, row: num3 };
        let arr7 = listData.push(obj2);
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
          let obj3 = { kind: "suggestedFriend", row: num4 };
          let arr10 = listData.push(obj3);
          num4 = num4 + 1;
          friendsHeaderOffset = sum2;
          friendsHeaderIndex = length;
        } while (num4 < tmp21);
      }
    }
    const tmp26 = sections[useMessagesData.MessagesDataSections.Placeholders];
    for (let num5 = 0; num5 < tmp26; num5 = num5 + 1) {
      let obj4 = { kind: "placeholder", row: num5 };
      let arr11 = listData.push(obj4);
    }
    return { listData, friendsHeaderIndex, friendsHeaderOffset, listHeaderHeight };
  }, items);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx");

export default tmp2;