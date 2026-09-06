// === Module 16650: SearchList ===

// Module 16650 (SearchList)
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _mod8874 from "module_8874" /* 8874 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 16647 */;
import DMRowDefault from "DMRow" /* 16651 */;
import rows_GroupDMRowDefault from "rows/GroupDMRow" /* 16653 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 16654 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 16655 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 16663 */;
import MediaGridItemDefault from "MediaGridItem" /* 16664 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 16666 */;
import MediaGridDefault from "MediaGrid" /* 16668 */;
import MessageRowDefault from "MessageRow" /* 16669 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16673 */;
import LinkGridItemDefault from "LinkGridItem" /* 16674 */;
import FileGridItemDefault from "FileGridItem" /* 16677 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 16678 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 16679 */;
import GenericTextRowDefault from "GenericTextRow" /* 16680 */;
import SearchListSectionDefault from "SearchListSection" /* 16681 */;
import noop from "module_19" /* 19 */;

const pages_ErrorScreenDefault = tmp3(16638);
require = fn;
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
    return React6(DMRowDefault, obj);
  } else if (tmp.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(item.props);
    return React6(rows_GroupDMRowDefault, obj);
  } else if (tmp.SEARCH_HISTORY_ITEM === type) {
    const obj1 = {};
    const merged2 = Object.assign(item.props);
    return React6(SearchHistoryRowDefault, obj1);
  } else if (tmp.MEDIA === type) {
    const obj2 = {};
    const merged3 = Object.assign(item.props);
    return React6(MediaGridItemDefault, obj2);
  } else if (tmp.MEDIA_PLACEHOLDER === type) {
    const obj3 = {};
    const merged4 = Object.assign(item.props);
    return React6(MediaGridPlaceholderDefault, obj3);
  } else if (tmp.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(item.props);
    return React6(FileOrLinkGridPlaceholderDefault, obj4);
  } else if (tmp.MEDIA_GRID === type) {
    const obj5 = {};
    const merged6 = Object.assign(item.props);
    return React6(MediaGridDefault, obj5);
  } else if (tmp.GUILD_TEXT_CHANNEL === type) {
    const obj6 = {};
    const merged7 = Object.assign(item.props);
    return React6(GuildTextChannelRowDefault, obj6);
  } else if (tmp.GUILD_VOICE_CHANNEL === type) {
    const obj7 = {};
    const merged8 = Object.assign(item.props);
    return React6(GuildVoiceOrStageChannelRowDefault, obj7);
  } else if (tmp.MESSAGE === type) {
    const obj8 = {};
    const merged9 = Object.assign(item.props);
    return React6(MessageRowDefault, obj8);
  } else if (tmp.MESSAGE_PLACEHOLDER === type) {
    return React6(FormRowPlaceholderDefault, {});
  } else if (tmp.LINK === type) {
    const obj9 = {};
    const merged10 = Object.assign(item.props);
    return React6(LinkGridItemDefault, obj9);
  } else if (tmp.FILE === type) {
    const obj10 = {};
    const merged11 = Object.assign(item.props);
    return React6(FileGridItemDefault, obj10);
  } else if (tmp.GUILD_CHANNEL_MEMBER === type) {
    const obj11 = {};
    const merged12 = Object.assign(item.props);
    return React6(GuildChannelMemberRowDefault, obj11);
  } else if (tmp.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return React6(MemberRowPlaceholderDefault, {});
  } else if (tmp.GENERIC === type) {
    const obj12 = {};
    const merged13 = Object.assign(item.props);
    return React6(GenericTextRowDefault, obj12);
  } else if (tmp.SECTION === type) {
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
    tmp8 = React6(tmp7, obj);
    const tmp3Result = pages_ErrorScreenDefault;
  }
  const items = [tmp8, ];
  const obj1 = { ref, overrideProps: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data: null, renderItem: null, onEndReachedThreshold: null, onEndReached: null, scrollsToTop: true, contentContainerStyle: null, keyExtractor: null, getItemType: null, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, numColumns: null };
  let obj2;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj2 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj1.overrideProps = obj2;
  obj1.data = data;
  obj1.renderItem = renderItem;
  obj1.onEndReachedThreshold = num;
  obj1.onEndReached = onEndReached;
  const tmp13 = React6;
  const tmp2 = closure_10();
  const tmp6 = React7;
  const merged = Object.assign(contentContainerStyle);
  obj1.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  obj1.keyExtractor = keyExtractor;
  obj1.getItemType = getItemType;
  obj1.ListHeaderComponent = ListHeaderComponent;
  obj1.ListFooterComponent = ListFooterComponent;
  obj1.ItemSeparatorComponent = ItemSeparatorComponent;
  obj1.numColumns = numColumns;
  items[1] = tmp13(_mod8874.AnimatedFlashList, obj1);
  obj.children = items;
  return tmp6(React4, obj);
});