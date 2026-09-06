// discord_app/modules/search/native/components/list/SearchList.tsx
import util from "../../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod8874 from "../../../../../../discord_common/js/packages/flash-list/index.js";
import pages_ErrorScreenDefault from "../tabs/pages/ErrorScreen.tsx";
import MediaGridPlaceholderDefault from "../tabs/pages/placeholders/MediaGridPlaceholder.tsx";
import DMRowDefault from "rows/DMRow.tsx";
import rows_GroupDMRowDefault from "rows/GroupDMRow.tsx";
import SearchHistoryRowDefault from "rows/SearchHistoryRow.tsx";
import GuildVoiceOrStageChannelRowDefault from "rows/GuildVoiceOrStageChannelRow.tsx";
import GuildTextChannelRowDefault from "rows/GuildTextChannelRow.tsx";
import MediaGridItemDefault from "rows/MediaGridItem.tsx";
import FileOrLinkGridPlaceholderDefault from "../tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx";
import MediaGridDefault from "rows/MediaGrid.tsx";
import MessageRowDefault from "rows/MessageRow.tsx";
import FormRowPlaceholderDefault from "../tabs/pages/placeholders/FormRowPlaceholder.tsx";
import LinkGridItemDefault from "rows/LinkGridItem.tsx";
import FileGridItemDefault from "rows/FileGridItem.tsx";
import GuildChannelMemberRowDefault from "rows/GuildChannelMemberRow.tsx";
import MemberRowPlaceholderDefault from "../tabs/pages/placeholders/MemberRowPlaceholder.tsx";
import GenericTextRowDefault from "rows/GenericTextRow.tsx";
import SearchListSectionDefault from "SearchListSection.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function keyExtractor(type) {
  type = type.type;
  if (constants2.DM === type) {
    const _HermesInternal11 = HermesInternal;
    let key = "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants2.GUILD_CHANNEL_MEMBER === type) {
    const _HermesInternal10 = HermesInternal;
    key = "" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants2.SEARCH_HISTORY_ITEM === type) {
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
      if (constants.GROUP_DM !== type2) {
        if (constants.GUILD_TEXT_CHANNEL !== type2) {
          if (constants.GUILD_VOICE_CHANNEL !== type2) {
            if (constants.DM === type2) {
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
  } else if (constants2.MEDIA_GRID === type) {
    const media = type.props.media;
    const mapped1 = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
    key = mapped1.join("-");
  } else if (constants2.MEDIA === type) {
    const _HermesInternal7 = HermesInternal;
    key = "" + type.props.media.messageId + "-" + type.props.media.mediaIndex;
  } else {
    if (constants2.MEDIA_PLACEHOLDER !== type) {
      if (constants2.FILE_OR_LINK_PLACEHOLDER !== type) {
        if (constants2.MESSAGE_PLACEHOLDER !== type) {
          if (constants2.GUILD_CHANNEL_MEMBER_PLACEHOLDER !== type) {
            if (constants2.GROUP_DM === type) {
              const _HermesInternal6 = HermesInternal;
              key = "" + type.section + "-" + type.props.channel.id;
            } else {
              if (constants2.GUILD_TEXT_CHANNEL !== type) {
                if (constants2.GUILD_VOICE_CHANNEL !== type) {
                  if (constants2.MESSAGE === type) {
                    const _HermesInternal4 = HermesInternal;
                    key = "" + type.props.message.id;
                  } else if (constants2.LINK === type) {
                    const _HermesInternal3 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.linkIndex;
                  } else if (constants2.FILE === type) {
                    const _HermesInternal2 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (constants2.GENERIC === type) {
                    const _HermesInternal = HermesInternal;
                    key = "" + type.props.text;
                  } else if (constants2.SECTION === type) {
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
    return React6(DMRowDefault, obj);
  } else if (constants2.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(item.props);
    return React6(rows_GroupDMRowDefault, obj);
  } else if (constants2.SEARCH_HISTORY_ITEM === type) {
    const obj1 = {};
    const merged2 = Object.assign(item.props);
    return React6(SearchHistoryRowDefault, obj1);
  } else if (constants2.MEDIA === type) {
    const obj2 = {};
    const merged3 = Object.assign(item.props);
    return React6(MediaGridItemDefault, obj2);
  } else if (constants2.MEDIA_PLACEHOLDER === type) {
    const obj3 = {};
    const merged4 = Object.assign(item.props);
    return React6(MediaGridPlaceholderDefault, obj3);
  } else if (constants2.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(item.props);
    return React6(FileOrLinkGridPlaceholderDefault, obj4);
  } else if (constants2.MEDIA_GRID === type) {
    const obj5 = {};
    const merged6 = Object.assign(item.props);
    return React6(MediaGridDefault, obj5);
  } else if (constants2.GUILD_TEXT_CHANNEL === type) {
    const obj6 = {};
    const merged7 = Object.assign(item.props);
    return React6(GuildTextChannelRowDefault, obj6);
  } else if (constants2.GUILD_VOICE_CHANNEL === type) {
    const obj7 = {};
    const merged8 = Object.assign(item.props);
    return React6(GuildVoiceOrStageChannelRowDefault, obj7);
  } else if (constants2.MESSAGE === type) {
    const obj8 = {};
    const merged9 = Object.assign(item.props);
    return React6(MessageRowDefault, obj8);
  } else if (constants2.MESSAGE_PLACEHOLDER === type) {
    return React6(FormRowPlaceholderDefault, {});
  } else if (constants2.LINK === type) {
    const obj9 = {};
    const merged10 = Object.assign(item.props);
    return React6(LinkGridItemDefault, obj9);
  } else if (constants2.FILE === type) {
    const obj10 = {};
    const merged11 = Object.assign(item.props);
    return React6(FileGridItemDefault, obj10);
  } else if (constants2.GUILD_CHANNEL_MEMBER === type) {
    const obj11 = {};
    const merged12 = Object.assign(item.props);
    return React6(GuildChannelMemberRowDefault, obj11);
  } else if (constants2.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return React6(MemberRowPlaceholderDefault, {});
  } else if (constants2.GENERIC === type) {
    const obj12 = {};
    const merged13 = Object.assign(item.props);
    return React6(GenericTextRowDefault, obj12);
  } else if (constants2.SECTION === type) {
    obj = {};
    const merged14 = Object.assign(item.props);
    return React6(SearchListSectionDefault, obj);
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const SearchConstants = fn(7878);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: closure_7 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default noop.memo(function SearchList(arg0) {
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  ({ onEndReached, ItemSeparatorComponent } = arg0);
  const ref = noop.useRef(null);
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
  let obj = { style: closure_10().container, children: null };
  let tmp8 = tmp5;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj = { style: absoluteFill.absoluteFill, children: null };
    obj = { text: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.V6nAfF);
    obj.children = React6(pages_ErrorScreenDefault, obj);
    tmp8 = React6(React4, obj);
    const tmp3Result = pages_ErrorScreenDefault;
  }
  const items = [tmp8];
  const obj1 = {
    ref,
    overrideProps: null,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    data: null,
    renderItem: null,
    onEndReachedThreshold: null,
    onEndReached: null,
    scrollsToTop: true,
    contentContainerStyle: null,
    keyExtractor: null,
    getItemType: null,
    ListHeaderComponent: null,
    ListFooterComponent: null,
    ItemSeparatorComponent: null,
    numColumns: null,
  };
  let obj2;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj2 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj1.overrideProps = obj2;
  obj1.data = data;
  obj1.renderItem = renderItem;
  obj1.onEndReachedThreshold = num;
  obj1.onEndReached = onEndReached;
  const tmp2 = closure_10();
  const merged = Object.assign(contentContainerStyle);
  obj1.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  obj1.keyExtractor = keyExtractor;
  obj1.getItemType = getItemType;
  obj1.ListHeaderComponent = ListHeaderComponent;
  obj1.ListFooterComponent = ListFooterComponent;
  obj1.ItemSeparatorComponent = ItemSeparatorComponent;
  obj1.numColumns = numColumns;
  items[1] = React6(_mod8874.AnimatedFlashList, obj1);
  obj.children = items;
  return React7(React4, obj);
});
