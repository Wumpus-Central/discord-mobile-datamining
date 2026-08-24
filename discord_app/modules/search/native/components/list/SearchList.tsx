// discord_app/modules/search/native/components/list/SearchList.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../../../discord_common/js/packages/flash-list/index.js";
import _modDef15862 from "../tabs/pages/ErrorScreen.tsx";
import MediaGridPlaceholderItemDefault from "../tabs/pages/placeholders/MediaGridPlaceholder.tsx";
import FriendPresenceDefault from "rows/DMRow.tsx";
import GroupDMRowDefault from "rows/GroupDMRow.tsx";
import SearchHistoryRemoveIconDefault from "rows/SearchHistoryRow.tsx";
import GuildVoiceChannelSubtitleDefault from "rows/GuildVoiceOrStageChannelRow.tsx";
import _modDef15887 from "rows/GuildTextChannelRow.tsx";
import _modDef15888 from "rows/MediaGridItem.tsx";
import FileOrLinkGridPlaceholderItemDefault from "../tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx";
import MediaGridDefault from "rows/MediaGrid.tsx";
import GuildChannelMessageRowHeaderDefault from "rows/MessageRow.tsx";
import FormRowPlaceholderItemDefault from "../tabs/pages/placeholders/FormRowPlaceholder.tsx";
import getLinkNodeAtIndexDefault from "rows/LinkGridItem.tsx";
import _modDef15901 from "rows/FileGridItem.tsx";
import GuildChannelMemberRowDefault from "rows/GuildChannelMemberRow.tsx";
import MemberRowPlaceholderItemDefault from "../tabs/pages/placeholders/MemberRowPlaceholder.tsx";
import _modDef15904 from "rows/GenericTextRow.tsx";
import _modDef15905 from "SearchListSection.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import MessageEmbedTypes from "../../../SearchConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function keyExtractor(type) {
  type = type.type;
  if (constants2.DM === type) {
    const _HermesInternal11 = HermesInternal;
    let key = "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (tmp.GUILD_CHANNEL_MEMBER === type) {
    const _HermesInternal10 = HermesInternal;
    key = "" + type.props.user.id + "-" + type.props.guildId;
  } else if (tmp.SEARCH_HISTORY_ITEM === type) {
    const searchHistoryItem = type.props.searchHistoryItem;
    const type2 = searchHistoryItem.type;
    if (constants.TEXT === type2) {
      const tags = searchHistoryItem.tags;
      let joined;
      if (tags != null) {
        const mapped = tags.map((text) => text.text);
        joined = mapped.join(" ");
      }
      const _HermesInternal9 = HermesInternal;
      let combined = "" + searchHistoryItem.text + " " + joined;
    } else {
      if (tmp9.GROUP_DM !== type2) {
        if (tmp9.GUILD_TEXT_CHANNEL !== type2) {
          if (tmp9.GUILD_VOICE_CHANNEL !== type2) {
            if (tmp9.DM === type2) {
              const _HermesInternal13 = HermesInternal;
              combined = "" + searchHistoryItem.userId;
            }
          }
        }
      }
      const _HermesInternal8 = HermesInternal;
      combined = "" + searchHistoryItem.channelId;
    }
    key = combined;
  } else if (tmp.MEDIA_GRID === type) {
    const media = type.props.media;
    const mapped1 = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
    key = mapped1.join("-");
  } else if (tmp.MEDIA === type) {
    const _HermesInternal7 = HermesInternal;
    key = "" + type.props.media.messageId + "-" + type.props.media.mediaIndex;
  } else {
    if (tmp.MEDIA_PLACEHOLDER !== type) {
      if (tmp.FILE_OR_LINK_PLACEHOLDER !== type) {
        if (tmp.MESSAGE_PLACEHOLDER !== type) {
          if (tmp.GUILD_CHANNEL_MEMBER_PLACEHOLDER !== type) {
            if (tmp.GROUP_DM === type) {
              const _HermesInternal6 = HermesInternal;
              key = "" + type.section + "-" + type.props.channel.id;
            } else {
              if (tmp.GUILD_TEXT_CHANNEL !== type) {
                if (tmp.GUILD_VOICE_CHANNEL !== type) {
                  if (tmp.MESSAGE === type) {
                    const _HermesInternal4 = HermesInternal;
                    key = "" + type.props.message.id;
                  } else if (tmp.LINK === type) {
                    const _HermesInternal3 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.linkIndex;
                  } else if (tmp.FILE === type) {
                    const _HermesInternal2 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (tmp.GENERIC === type) {
                    const _HermesInternal = HermesInternal;
                    key = "" + type.props.text;
                  } else if (tmp.SECTION === type) {
                    const _HermesInternal12 = HermesInternal;
                    key = "" + type.props.title;
                  }
                }
              }
              const _HermesInternal5 = HermesInternal;
              key = "" + type.props.channel.id;
            }
          }
        }
      }
    }
    key = type.key;
  }
  return "" + type.type + "-" + key;
}
function getItemType(type) {
  return type.type;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants2.DM === type) {
    let obj = {};
    const merged = Object.assign(item.props);
    return callback(FriendPresenceDefault, obj);
  } else if (tmp.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(item.props);
    return callback(GroupDMRowDefault, obj);
  } else if (tmp.SEARCH_HISTORY_ITEM === type) {
    obj1 = {};
    const merged2 = Object.assign(item.props);
    return callback(SearchHistoryRemoveIconDefault, obj1);
  } else if (tmp.MEDIA === type) {
    const obj2 = {};
    const merged3 = Object.assign(item.props);
    return callback(_modDef15888, obj2);
  } else if (tmp.MEDIA_PLACEHOLDER === type) {
    const obj3 = {};
    const merged4 = Object.assign(item.props);
    return callback(MediaGridPlaceholderItemDefault, obj3);
  } else if (tmp.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(item.props);
    return callback(FileOrLinkGridPlaceholderItemDefault, obj4);
  } else if (tmp.MEDIA_GRID === type) {
    const obj5 = {};
    const merged6 = Object.assign(item.props);
    return callback(MediaGridDefault, obj5);
  } else if (tmp.GUILD_TEXT_CHANNEL === type) {
    const obj6 = {};
    const merged7 = Object.assign(item.props);
    return callback(_modDef15887, obj6);
  } else if (tmp.GUILD_VOICE_CHANNEL === type) {
    const obj7 = {};
    const merged8 = Object.assign(item.props);
    return callback(GuildVoiceChannelSubtitleDefault, obj7);
  } else if (tmp.MESSAGE === type) {
    const obj8 = {};
    const merged9 = Object.assign(item.props);
    return callback(GuildChannelMessageRowHeaderDefault, obj8);
  } else if (tmp.MESSAGE_PLACEHOLDER === type) {
    return callback(FormRowPlaceholderItemDefault, {});
  } else if (tmp.LINK === type) {
    const obj9 = {};
    const merged10 = Object.assign(item.props);
    return callback(getLinkNodeAtIndexDefault, obj9);
  } else if (tmp.FILE === type) {
    const obj10 = {};
    const merged11 = Object.assign(item.props);
    return callback(_modDef15901, obj10);
  } else if (tmp.GUILD_CHANNEL_MEMBER === type) {
    const obj11 = {};
    const merged12 = Object.assign(item.props);
    return callback(GuildChannelMemberRowDefault, obj11);
  } else if (tmp.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return callback(MemberRowPlaceholderItemDefault, {});
  } else if (tmp.GENERIC === type) {
    const obj12 = {};
    const merged13 = Object.assign(item.props);
    return callback(_modDef15904, obj12);
  } else if (tmp.SECTION === type) {
    obj = {};
    const merged14 = Object.assign(item.props);
    return callback(_modDef15905, obj);
  } else {
    return null;
  }
}
let c3 = importAllResult;
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
({ SearchHistoryItemTypes: closure_6, SearchListItemTypes: error } = MessageEmbedTypes);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { flex: 1 } });
const memoResult = importAllResult.memo(function SearchList(arg0) {
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  ({ onEndReached, ItemSeparatorComponent } = arg0);
  const ref = importAllResult.useRef(null);
  let num = 0.5;
  if (null != numColumns) {
    num = 0.5;
    if (1 !== numColumns) {
      num = 0.8;
      if (2 !== numColumns) {
        if (numColumns >= 3) {
          num = 0.99;
        }
      }
    }
  }
  let obj = { style: callback2().container, children: null };
  let tmp8 = tmp5;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj = { style: null, children: null };
    obj[0] = absoluteFill.absoluteFill;
    obj = { text: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.V6nAfF);
    obj[1] = callback(_modDef15862, obj);
    tmp8 = callback(tmp7, obj);
    const tmp3Result = _modDef15862;
  }
  const items = [tmp8, ];
  obj1 = { ref, overrideProps: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data: null, renderItem: null, onEndReachedThreshold: null, onEndReached: null, scrollsToTop: true, contentContainerStyle: null, keyExtractor: null, getItemType: null, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, numColumns: null };
  let obj2;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj2 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj1[1] = obj2;
  obj1[4] = data;
  obj1[5] = renderItem;
  obj1[6] = num;
  obj1[7] = onEndReached;
  const tmp13 = callback;
  const tmp2 = callback2();
  const tmp3 = importDefault;
  const tmp6 = closure_9;
  const merged = Object.assign(contentContainerStyle);
  obj1[9] = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  obj1[10] = keyExtractor;
  obj1[11] = getItemType;
  obj1[12] = ListHeaderComponent;
  obj1[13] = ListFooterComponent;
  obj1[14] = ItemSeparatorComponent;
  obj1[15] = numColumns;
  items[1] = tmp13(noop.AnimatedFlashList, obj1);
  obj[1] = items;
  return tmp6(closure_4, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;