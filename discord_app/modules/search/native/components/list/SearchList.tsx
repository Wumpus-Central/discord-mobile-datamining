// === Module 16759: SearchList ===

// Module 16759 (SearchList)
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _mod9003 from "module_9003" /* 9003 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 16747 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 16756 */;
import DMRowDefault from "DMRow" /* 16760 */;
import rows_GroupDMRowDefault from "rows/GroupDMRow" /* 16762 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 16763 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 16764 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 16777 */;
import MediaGridItemDefault from "MediaGridItem" /* 16778 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 16780 */;
import MediaGridDefault from "MediaGrid" /* 16782 */;
import MessageRowDefault from "MessageRow" /* 16783 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16787 */;
import LinkGridItemDefault from "LinkGridItem" /* 16788 */;
import FileGridItemDefault from "FileGridItem" /* 16791 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 16792 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 16793 */;
import GenericTextRowDefault from "GenericTextRow" /* 16794 */;
import SearchListSectionDefault from "SearchListSection" /* 16795 */;
import noop from "module_19" /* 19 */;

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
    const obj2 = {};
    const merged = Object.assign(item.props);
    return React6(DMRowDefault, obj2);
  } else if (constants2.GROUP_DM === type) {
    const obj3 = {};
    const merged1 = Object.assign(item.props);
    return React6(rows_GroupDMRowDefault, obj3);
  } else if (constants2.SEARCH_HISTORY_ITEM === type) {
    const obj4 = {};
    const merged2 = Object.assign(item.props);
    return React6(SearchHistoryRowDefault, obj4);
  } else if (constants2.MEDIA === type) {
    const obj5 = {};
    const merged3 = Object.assign(item.props);
    return React6(MediaGridItemDefault, obj5);
  } else if (constants2.MEDIA_PLACEHOLDER === type) {
    const obj6 = {};
    const merged4 = Object.assign(item.props);
    return React6(MediaGridPlaceholderDefault, obj6);
  } else if (constants2.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj7 = {};
    const merged5 = Object.assign(item.props);
    return React6(FileOrLinkGridPlaceholderDefault, obj7);
  } else if (constants2.MEDIA_GRID === type) {
    const obj8 = {};
    const merged6 = Object.assign(item.props);
    return React6(MediaGridDefault, obj8);
  } else if (constants2.GUILD_TEXT_CHANNEL === type) {
    const obj9 = {};
    const merged7 = Object.assign(item.props);
    return React6(GuildTextChannelRowDefault, obj9);
  } else if (constants2.GUILD_VOICE_CHANNEL === type) {
    const obj10 = {};
    const merged8 = Object.assign(item.props);
    return React6(GuildVoiceOrStageChannelRowDefault, obj10);
  } else if (constants2.MESSAGE === type) {
    const obj11 = {};
    const merged9 = Object.assign(item.props);
    return React6(MessageRowDefault, obj11);
  } else if (constants2.MESSAGE_PLACEHOLDER === type) {
    return React6(FormRowPlaceholderDefault, {});
  } else if (constants2.LINK === type) {
    const obj12 = {};
    const merged10 = Object.assign(item.props);
    return React6(LinkGridItemDefault, obj12);
  } else if (constants2.FILE === type) {
    const obj13 = {};
    const merged11 = Object.assign(item.props);
    return React6(FileGridItemDefault, obj13);
  } else if (constants2.GUILD_CHANNEL_MEMBER === type) {
    const obj14 = {};
    const merged12 = Object.assign(item.props);
    return React6(GuildChannelMemberRowDefault, obj14);
  } else if (constants2.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return React6(MemberRowPlaceholderDefault, {});
  } else if (constants2.GENERIC === type) {
    const obj15 = {};
    const merged13 = Object.assign(item.props);
    return React6(GenericTextRowDefault, obj15);
  } else if (constants2.SECTION === type) {
    const obj = {};
    const merged14 = Object.assign(item.props);
    return React6(SearchListSectionDefault, obj);
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const SearchConstants = fn(7982);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: closure_7 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
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
  const obj = { style: closure_10().container, children: null };
  let tmp8 = tmp5;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    const obj2 = { style: absoluteFill.absoluteFill, children: null };
    const obj3 = { text: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.V6nAfF);
    obj2.children = React6(pages_ErrorScreenDefault, obj3);
    tmp8 = React6(React4, obj2);
    const tmp3Result = pages_ErrorScreenDefault;
  }
  const items = [tmp8, ];
  const obj4 = { ref, overrideProps: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data: null, renderItem: null, onEndReachedThreshold: null, onEndReached: null, scrollsToTop: true, contentContainerStyle: null, keyExtractor: null, getItemType: null, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, numColumns: null };
  let obj5;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj5 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj4.overrideProps = obj5;
  obj4.data = data;
  obj4.renderItem = renderItem;
  obj4.onEndReachedThreshold = num;
  obj4.onEndReached = onEndReached;
  const tmp2 = closure_10();
  const merged = Object.assign(contentContainerStyle);
  obj4.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  obj4.keyExtractor = keyExtractor;
  obj4.getItemType = getItemType;
  obj4.ListHeaderComponent = ListHeaderComponent;
  obj4.ListFooterComponent = ListFooterComponent;
  obj4.ItemSeparatorComponent = ItemSeparatorComponent;
  obj4.numColumns = numColumns;
  items[1] = React6(_mod9003.AnimatedFlashList, obj4);
  obj.children = items;
  return React7(React4, obj);
});