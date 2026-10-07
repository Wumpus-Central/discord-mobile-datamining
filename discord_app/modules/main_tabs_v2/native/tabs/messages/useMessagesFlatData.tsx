// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx
import c from "../../../../../../_runtime/00576_c.js";
import useMessagesData from "useMessagesData.tsx";
import MessagesItemHappeningNow from "items/MessagesItemHappeningNow.tsx";
import MessagesItemEmptyState from "items/MessagesItemEmptyState.tsx";
import MessagesItemSeparator from "items/MessagesItemSeparator.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, listItemHeight) => {
      const cResult = c.c(10);
      listItemHeight = listItemHeight.listItemHeight;
      ({ channels, channelFavorites, renderHeader, sections } = arg0);
      if (cResult[0] === channelFavorites) {
        if (cResult[1] === channels) {
          if (cResult[2] === listItemHeight) {
            if (cResult[3] === renderHeader) {
              if (cResult[4] === sections) {
                let tmp4 = cResult[5];
              }
              return tmp4;
            }
          }
        }
      }
      if (cResult[6] !== renderHeader) {
        if (renderHeader === useMessagesData.MessagesDataHeader.HappeningNow) {
          let num = MessagesItemHappeningNow.getMessagesItemHappeningNowHeight();
          const tmpResult = MessagesItemHappeningNow;
        } else {
          num = 0;
          if (renderHeader === useMessagesData.MessagesDataHeader.EmptyState) {
            num = MessagesItemEmptyState.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
          }
        }
        cResult[6] = renderHeader;
        cResult[7] = num;
      } else {
        const items = [];
        const tmp7 = sections[useMessagesData.MessagesDataSections.FavoriteChannels];
        let num6 = 0;
        let sum = tmp5;
        let tmp9 = tmp5;
        if (0 < tmp7) {
          do {
            let obj2 = { kind: "favorite", channelId: channelFavorites[num6].channelId, row: num6 };
            let arr = items.push(obj2);
            sum = sum + listItemHeight;
            num6 = num6 + 1;
            tmp9 = sum;
          } while (num6 < tmp7);
        }
        const tmp13 = sections[useMessagesData.MessagesDataSections.Channels];
        let sum1 = tmp9;
        let num7 = 0;
        let tmp15 = tmp9;
        if (0 < tmp13) {
          do {
            let obj3 = { kind: "channel", channelId: channels[num7].channelId, row: num7 };
            let arr7 = items.push(obj3);
            sum1 = sum1 + listItemHeight;
            num7 = num7 + 1;
            tmp15 = sum1;
          } while (num7 < tmp13);
        }
        if (sections[useMessagesData.MessagesDataSections.Separator] <= 0) {
          const tmp24 = sections[useMessagesData.MessagesDataSections.SuggestedFriends];
          let tmp25;
          let tmp26;
          if (tmp24 > 0) {
            const _Symbol2 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { kind: "friendsHeader" };
              cResult[9] = obj4;
              let tmp28 = obj4;
            } else {
              tmp28 = cResult[9];
            }
            items.push(tmp28);
            let num10 = 0;
            tmp25 = tmp15;
            tmp26 = length;
            if (0 < tmp24) {
              do {
                let obj5 = { kind: "suggestedFriend", row: num10 };
                let arr9 = items.push(obj5);
                num10 = num10 + 1;
                tmp25 = tmp15;
                tmp26 = length;
              } while (num10 < tmp24);
            }
          }
          for (let num11 = 0; num11 < tmp33; num11 = num11 + 1) {
            let obj6 = { kind: "placeholder", row: num11 };
            let arr10 = items.push(obj6);
          }
          const obj7 = {
            listData: items,
            friendsHeaderIndex: tmp26,
            friendsHeaderOffset: tmp25,
            listHeaderHeight: tmp5,
          };
          cResult[0] = channelFavorites;
          cResult[1] = channels;
          cResult[2] = listItemHeight;
          cResult[3] = renderHeader;
          cResult[4] = sections;
          cResult[5] = obj7;
          tmp4 = obj7;
          tmp33 = sections[useMessagesData.MessagesDataSections.Placeholders];
        } else {
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { kind: "separator" };
            cResult[8] = obj8;
            let tmp21 = obj8;
          } else {
            tmp21 = cResult[8];
          }
          items.push(tmp21);
          const sum2 = tmp15 + MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
        }
      }
    }
  : (channels, listItemHeight) => {
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
        for (let num5 = 0; num5 < tmp26; num5 = num5 + 1) {
          let obj4 = { kind: "placeholder", row: num5 };
          let arr11 = listData.push(obj4);
        }
        return { listData, friendsHeaderIndex, friendsHeaderOffset, listHeaderHeight };
      }, items);
    };
