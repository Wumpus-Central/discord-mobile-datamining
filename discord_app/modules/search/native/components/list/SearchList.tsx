// === Module 18133: SearchList ===

// Module 18133 (SearchList)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _mod7222 from "module_7222" /* 7222 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 18119 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 18121 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 18130 */;
import DMRowDefault from "DMRow" /* 18134 */;
import rows_GroupDMRowDefault from "rows/GroupDMRow" /* 18135 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 18136 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 18137 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 18150 */;
import MediaGridItemDefault from "MediaGridItem" /* 18151 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 18153 */;
import MediaGridDefault from "MediaGrid" /* 18155 */;
import MessageRowDefault from "MessageRow" /* 18156 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 18160 */;
import LinkGridItemDefault from "LinkGridItem" /* 18161 */;
import FileGridItemDefault from "FileGridItem" /* 18164 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 18165 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 18166 */;
import GenericTextRowDefault from "GenericTextRow" /* 18167 */;
import SearchListSectionDefault from "SearchListSection" /* 18168 */;
import SmartSearchRowDefault from "SmartSearchRow" /* 18169 */;
import SuggestedSearchSkeletonDefault from "SuggestedSearchSkeleton" /* 18186 */;
import smartSearchViewabilityConfig from "smartSearchViewabilityConfig" /* 18187 */;
import noop from "module_19" /* 19 */;

require = fn;
function keyExtractor(type) {
  type = type.type;
  if (constants2.DM === type) {
    const _HermesInternal12 = HermesInternal;
    let key = "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants2.GUILD_CHANNEL_MEMBER === type) {
    const _HermesInternal11 = HermesInternal;
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
      const _HermesInternal10 = HermesInternal;
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
      const _HermesInternal9 = HermesInternal;
      combined = "" + searchHistoryItem.channelId;
    }
    key = combined;
  } else if (constants2.MEDIA_GRID === type) {
    const media = type.props.media;
    const mapped1 = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
    key = mapped1.join("-");
  } else if (constants2.MEDIA === type) {
    const _HermesInternal8 = HermesInternal;
    key = "" + type.props.media.messageId + "-" + type.props.media.mediaIndex;
  } else {
    if (constants2.MEDIA_PLACEHOLDER !== type) {
      if (constants2.FILE_OR_LINK_PLACEHOLDER !== type) {
        if (constants2.MESSAGE_PLACEHOLDER !== type) {
          if (constants2.GUILD_CHANNEL_MEMBER_PLACEHOLDER !== type) {
            if (constants2.GROUP_DM === type) {
              const _HermesInternal7 = HermesInternal;
              key = "" + type.section + "-" + type.props.channel.id;
            } else {
              if (constants2.GUILD_TEXT_CHANNEL !== type) {
                if (constants2.GUILD_VOICE_CHANNEL !== type) {
                  if (constants2.MESSAGE === type) {
                    const _HermesInternal5 = HermesInternal;
                    key = "" + type.props.message.id;
                  } else if (constants2.LINK === type) {
                    const _HermesInternal4 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.linkIndex;
                  } else if (constants2.FILE === type) {
                    const _HermesInternal3 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (constants2.GENERIC === type) {
                    const _HermesInternal2 = HermesInternal;
                    key = "" + type.props.text;
                  } else if (constants2.SECTION === type) {
                    const _HermesInternal = HermesInternal;
                    key = "" + type.props.title;
                  } else if (constants2.SMART_SEARCH === type) {
                    key = type.props.smartSearchQuery.requestKey;
                  } else if (constants2.SUGGESTED_SEARCH === type) {
                    key = type.props.suggestedSearch.suggestionId;
                  } else if (constants2.SUGGESTED_SEARCH_PLACEHOLDER === type) {
                    key = type.key;
                  }
                }
              }
              const _HermesInternal6 = HermesInternal;
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
    return closure_1_8(DMRowDefault, obj2);
  } else if (constants2.GROUP_DM === type) {
    const obj3 = {};
    const merged1 = Object.assign(item.props);
    return closure_1_8(rows_GroupDMRowDefault, obj3);
  } else if (constants2.SEARCH_HISTORY_ITEM === type) {
    const obj4 = {};
    const merged2 = Object.assign(item.props);
    return closure_1_8(SearchHistoryRowDefault, obj4);
  } else if (constants2.MEDIA === type) {
    const obj5 = {};
    const merged3 = Object.assign(item.props);
    return closure_1_8(MediaGridItemDefault, obj5);
  } else if (constants2.MEDIA_PLACEHOLDER === type) {
    const obj6 = {};
    const merged4 = Object.assign(item.props);
    return closure_1_8(MediaGridPlaceholderDefault, obj6);
  } else if (constants2.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj7 = {};
    const merged5 = Object.assign(item.props);
    return closure_1_8(FileOrLinkGridPlaceholderDefault, obj7);
  } else if (constants2.MEDIA_GRID === type) {
    const obj8 = {};
    const merged6 = Object.assign(item.props);
    return closure_1_8(MediaGridDefault, obj8);
  } else if (constants2.GUILD_TEXT_CHANNEL === type) {
    const obj9 = {};
    const merged7 = Object.assign(item.props);
    return closure_1_8(GuildTextChannelRowDefault, obj9);
  } else if (constants2.GUILD_VOICE_CHANNEL === type) {
    const obj10 = {};
    const merged8 = Object.assign(item.props);
    return closure_1_8(GuildVoiceOrStageChannelRowDefault, obj10);
  } else if (constants2.MESSAGE === type) {
    const obj11 = {};
    const merged9 = Object.assign(item.props);
    return closure_1_8(MessageRowDefault, obj11);
  } else if (constants2.MESSAGE_PLACEHOLDER === type) {
    return closure_1_8(FormRowPlaceholderDefault, {});
  } else if (constants2.LINK === type) {
    const obj12 = {};
    const merged10 = Object.assign(item.props);
    return closure_1_8(LinkGridItemDefault, obj12);
  } else if (constants2.FILE === type) {
    const obj13 = {};
    const merged11 = Object.assign(item.props);
    return closure_1_8(FileGridItemDefault, obj13);
  } else if (constants2.GUILD_CHANNEL_MEMBER === type) {
    const obj14 = {};
    const merged12 = Object.assign(item.props);
    return closure_1_8(GuildChannelMemberRowDefault, obj14);
  } else if (constants2.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return closure_1_8(MemberRowPlaceholderDefault, {});
  } else if (constants2.GENERIC === type) {
    const obj15 = {};
    const merged13 = Object.assign(item.props);
    return closure_1_8(GenericTextRowDefault, obj15);
  } else if (constants2.SECTION === type) {
    const obj16 = {};
    const merged14 = Object.assign(item.props);
    return closure_1_8(SearchListSectionDefault, obj16);
  } else if (constants2.SMART_SEARCH === type) {
    const obj17 = {};
    const merged15 = Object.assign(item.props);
    return closure_1_8(SmartSearchRowDefault, obj17);
  } else if (constants2.SUGGESTED_SEARCH === type) {
    const obj = {};
    const merged16 = Object.assign(item.props);
    return closure_1_8(SuggestedSearchRowDefault, obj);
  } else if (constants2.SUGGESTED_SEARCH_PLACEHOLDER === type) {
    return closure_1_8(SuggestedSearchSkeletonDefault, {});
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const SearchConstants = fn(9716);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: closure_7 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4972);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchList(arg0) {
  const cResult = c.c(25);
  ({ contentContainerStyle, data, onEndReached, ItemSeparatorComponent, ListHeaderComponent, ListFooterComponent, numColumns, scrollToTopKey } = arg0);
  noop.useRef(null);
  const ref = noop.useRef(scrollToTopKey);
  if (cResult[0] !== scrollToTopKey) {
    const fn = function c() {
      if (ref.current !== scrollToTopKey) {
        ref.current = scrollToTopKey;
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    };
    const items = [scrollToTopKey];
    cResult[0] = scrollToTopKey;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  const tmp8 = closure_10();
  let num4 = 0.5;
  if (null != numColumns) {
    num4 = 0.5;
    if (1 !== numColumns) {
      num4 = 0.8;
      if (2 !== numColumns) {
        if (numColumns >= 3) {
          num4 = 0.99;
        }
      }
    }
  }
  if (cResult[3] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let tmp12 = tmp10;
    if (tmp10) {
      const obj3 = { style: hasOwnProperty.absoluteFill, children: null };
      const obj4 = { text: null };
      const intl = util.intl;
      obj4.text = intl.string(util.t.V6nAfF);
      obj3.children = closure_1_8(pages_ErrorScreenDefault, obj4);
      tmp12 = closure_1_8(React4, obj3);
      const tmp9Result = pages_ErrorScreenDefault;
    }
    cResult[3] = tmp10;
    cResult[4] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let obj5;
    if (tmp10) {
      obj5 = { importantForAccessibility: "no", scrollEnabled: false };
    }
    cResult[5] = tmp10;
    cResult[6] = obj5;
    let tmp17 = obj5;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { disabled: true };
    cResult[7] = obj6;
    let tmp18 = obj6;
  } else {
    tmp18 = cResult[7];
  }
  const sum = 16 + useSafeAreaInsetsDefault().bottom;
  if (cResult[8] === contentContainerStyle) {
    if (cResult[9] === sum) {
      let tmp20 = cResult[10];
    }
    if (cResult[11] === ItemSeparatorComponent) {
      if (cResult[12] === ListFooterComponent) {
        if (cResult[13] === ListHeaderComponent) {
          if (cResult[14] === data) {
            if (cResult[15] === numColumns) {
              if (cResult[16] === onEndReached) {
                if (cResult[17] === tmp17) {
                  if (cResult[18] === tmp20) {
                    if (cResult[19] === num4) {
                      let tmp22 = cResult[20];
                    }
                    if (cResult[21] === tmp8.container) {
                      if (cResult[22] === tmp11) {
                        if (cResult[23] === tmp22) {
                          let tmp28 = cResult[24];
                        }
                        return tmp28;
                      }
                    }
                    const obj7 = { style: tmp8.container, children: null };
                    const items1 = [tmp11, tmp22];
                    obj7.children = items1;
                    const tmp31 = React6(React4, obj7);
                    cResult[21] = tmp8.container;
                    cResult[22] = tmp11;
                    cResult[23] = tmp22;
                    cResult[24] = tmp31;
                    tmp28 = tmp31;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj8 = { ref, overrideProps: tmp17, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num4, onEndReached, scrollsToTop: true, maintainVisibleContentPosition: tmp18, contentContainerStyle: tmp20, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns, viewabilityConfigCallbackPairs: smartSearchViewabilityConfig.smartSearchViewabilityConfig };
    const tmp27 = closure_1_8(_mod7222.AnimatedFlashList, obj8);
    cResult[11] = ItemSeparatorComponent;
    cResult[12] = ListFooterComponent;
    cResult[13] = ListHeaderComponent;
    cResult[14] = data;
    cResult[15] = numColumns;
    cResult[16] = onEndReached;
    cResult[17] = tmp17;
    cResult[18] = tmp20;
    cResult[19] = num4;
    cResult[20] = tmp27;
    tmp22 = tmp27;
  }
  const obj9 = { paddingBottom: sum };
  const merged = Object.assign(contentContainerStyle);
  cResult[8] = contentContainerStyle;
  cResult[9] = sum;
  cResult[10] = obj9;
  tmp20 = obj9;
}) : (function SearchList(arg0) {
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns, scrollToTopKey } = arg0);
  ({ onEndReached, ItemSeparatorComponent } = arg0);
  noop.useRef(null);
  const ref = noop.useRef(scrollToTopKey);
  const items = [scrollToTopKey];
  const effect = noop.useEffect(() => {
    if (ref.current !== scrollToTopKey) {
      ref.current = scrollToTopKey;
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  }, items);
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
  let tmp9 = tmp6;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    const obj2 = { style: hasOwnProperty.absoluteFill, children: null };
    const obj3 = { text: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.V6nAfF);
    obj2.children = closure_1_8(pages_ErrorScreenDefault, obj3);
    tmp9 = closure_1_8(React4, obj2);
    const tmp4Result = pages_ErrorScreenDefault;
  }
  const items1 = [tmp9, ];
  const obj4 = { ref, overrideProps: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data: null, renderItem: null, onEndReachedThreshold: null, onEndReached: null, scrollsToTop: true, maintainVisibleContentPosition: null, contentContainerStyle: null, keyExtractor: null, getItemType: null, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, numColumns: null, viewabilityConfigCallbackPairs: null };
  let obj5;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj5 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj4.overrideProps = obj5;
  obj4.data = data;
  obj4.renderItem = renderItem;
  obj4.onEndReachedThreshold = num;
  obj4.onEndReached = onEndReached;
  obj4.maintainVisibleContentPosition = { disabled: true };
  const tmp3 = closure_10();
  const merged = Object.assign(contentContainerStyle);
  obj4.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  obj4.keyExtractor = keyExtractor;
  obj4.getItemType = getItemType;
  obj4.ListHeaderComponent = ListHeaderComponent;
  obj4.ListFooterComponent = ListFooterComponent;
  obj4.ItemSeparatorComponent = ItemSeparatorComponent;
  obj4.numColumns = numColumns;
  obj4.viewabilityConfigCallbackPairs = smartSearchViewabilityConfig.smartSearchViewabilityConfig;
  items1[1] = closure_1_8(_mod7222.AnimatedFlashList, obj4);
  obj.children = items1;
  return React6(React4, obj);
}));