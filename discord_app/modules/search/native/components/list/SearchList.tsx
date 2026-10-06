// === Module 16841: SearchList ===

// Module 16841 (SearchList)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8404 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 16827 */;
import ErrorScreenDefault from "ErrorScreen" /* 16829 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 16838 */;
import DMRowDefault from "DMRow" /* 16842 */;
import rows_GroupDMRowDefault from "rows/GroupDMRow" /* 16843 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 16844 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 16845 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 16858 */;
import MediaGridItemDefault from "MediaGridItem" /* 16859 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 16861 */;
import MediaGridDefault from "MediaGrid" /* 16863 */;
import MessageRowDefault from "MessageRow" /* 16864 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16868 */;
import LinkGridItemDefault from "LinkGridItem" /* 16869 */;
import FileGridItemDefault from "FileGridItem" /* 16872 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 16873 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 16874 */;
import GenericTextRowDefault from "GenericTextRow" /* 16875 */;
import SearchListSectionDefault from "SearchListSection" /* 16876 */;
import SmartSearchRowDefault from "SmartSearchRow" /* 16877 */;
import SuggestedSearchSkeletonDefault from "SuggestedSearchSkeleton" /* 16892 */;
import smartSearchViewabilityConfig from "smartSearchViewabilityConfig" /* 16893 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function keyExtractor(type) {
  let key;
  const type2 = type.type;
  type = type.type;
  if (metroImportDefault.DM === type2) {
    const _HermesInternal12 = HermesInternal;
    key = "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER === type2) {
    const _HermesInternal11 = HermesInternal;
    key = "" + type.props.user.id + "-" + type.props.guildId;
  } else if (metroImportDefault.SEARCH_HISTORY_ITEM === type2) {
    let combined;
    const searchHistoryItem = type.props.searchHistoryItem;
    const type3 = searchHistoryItem.type;
    if (metroRequire.TEXT === type3) {
      const tags = searchHistoryItem.tags;
      let joined;
      const text = searchHistoryItem.text;
      if (tags != null) {
        const mapped = tags.map((text) => text.text);
        joined = mapped.join(" ");
      }
      const _HermesInternal10 = HermesInternal;
      combined = "" + text + " " + joined;
    } else {
      if (metroRequire.GROUP_DM !== type3) {
        if (metroRequire.GUILD_TEXT_CHANNEL !== type3) {
          if (metroRequire.GUILD_VOICE_CHANNEL !== type3) {
            if (metroRequire.DM === type3) {
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
  } else if (metroImportDefault.MEDIA_GRID === type2) {
    const media = type.props.media;
    const mapped1 = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
    key = mapped1.join("-");
  } else if (metroImportDefault.MEDIA === type2) {
    const _HermesInternal8 = HermesInternal;
    key = "" + type.props.media.messageId + "-" + type.props.media.mediaIndex;
  } else {
    if (metroImportDefault.MEDIA_PLACEHOLDER !== type2) {
      if (metroImportDefault.FILE_OR_LINK_PLACEHOLDER !== type2) {
        if (metroImportDefault.MESSAGE_PLACEHOLDER !== type2) {
          if (metroImportDefault.GUILD_CHANNEL_MEMBER_PLACEHOLDER !== type2) {
            if (metroImportDefault.GROUP_DM === type2) {
              const _HermesInternal7 = HermesInternal;
              key = "" + type.section + "-" + type.props.channel.id;
            } else {
              if (metroImportDefault.GUILD_TEXT_CHANNEL !== type2) {
                if (metroImportDefault.GUILD_VOICE_CHANNEL !== type2) {
                  if (metroImportDefault.MESSAGE === type2) {
                    const _HermesInternal5 = HermesInternal;
                    key = "" + type.props.message.id;
                  } else if (metroImportDefault.LINK === type2) {
                    const _HermesInternal4 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.linkIndex;
                  } else if (metroImportDefault.FILE === type2) {
                    const _HermesInternal3 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (metroImportDefault.GENERIC === type2) {
                    const _HermesInternal2 = HermesInternal;
                    key = "" + type.props.text;
                  } else if (metroImportDefault.SECTION === type2) {
                    const _HermesInternal = HermesInternal;
                    key = "" + type.props.title;
                  } else if (metroImportDefault.SMART_SEARCH === type2) {
                    key = type.props.smartSearchQuery.requestKey;
                  } else if (metroImportDefault.SUGGESTED_SEARCH === type2) {
                    key = type.props.suggestedSearch.suggestionId;
                  } else if (metroImportDefault.SUGGESTED_SEARCH_PLACEHOLDER === type2) {
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
  return "" + type + "-" + key;
}
function getItemType(type) {
  return type.type;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (metroImportDefault.DM === type) {
    const obj2 = {};
    const tmp111 = DMRowDefault;
    const merged = Object.assign(item.props);
    return metroImportAll(tmp111, obj2);
  } else if (metroImportDefault.GROUP_DM === type) {
    const obj3 = {};
    const tmp105 = rows_GroupDMRowDefault;
    const merged1 = Object.assign(item.props);
    return metroImportAll(tmp105, obj3);
  } else if (metroImportDefault.SEARCH_HISTORY_ITEM === type) {
    const obj4 = {};
    const tmp99 = SearchHistoryRowDefault;
    const merged2 = Object.assign(item.props);
    return metroImportAll(tmp99, obj4);
  } else if (metroImportDefault.MEDIA === type) {
    const obj5 = {};
    const tmp93 = MediaGridItemDefault;
    const merged3 = Object.assign(item.props);
    return metroImportAll(tmp93, obj5);
  } else if (metroImportDefault.MEDIA_PLACEHOLDER === type) {
    const obj6 = {};
    const tmp87 = MediaGridPlaceholderDefault;
    const merged4 = Object.assign(item.props);
    return metroImportAll(tmp87, obj6);
  } else if (metroImportDefault.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj7 = {};
    const tmp81 = FileOrLinkGridPlaceholderDefault;
    const merged5 = Object.assign(item.props);
    return metroImportAll(tmp81, obj7);
  } else if (metroImportDefault.MEDIA_GRID === type) {
    const obj8 = {};
    const tmp75 = MediaGridDefault;
    const merged6 = Object.assign(item.props);
    return metroImportAll(tmp75, obj8);
  } else if (metroImportDefault.GUILD_TEXT_CHANNEL === type) {
    const obj9 = {};
    const tmp69 = GuildTextChannelRowDefault;
    const merged7 = Object.assign(item.props);
    return metroImportAll(tmp69, obj9);
  } else if (metroImportDefault.GUILD_VOICE_CHANNEL === type) {
    const obj10 = {};
    const tmp63 = GuildVoiceOrStageChannelRowDefault;
    const merged8 = Object.assign(item.props);
    return metroImportAll(tmp63, obj10);
  } else if (metroImportDefault.MESSAGE === type) {
    const obj11 = {};
    const tmp57 = MessageRowDefault;
    const merged9 = Object.assign(item.props);
    return metroImportAll(tmp57, obj11);
  } else if (metroImportDefault.MESSAGE_PLACEHOLDER === type) {
    return metroImportAll(FormRowPlaceholderDefault, {});
  } else if (metroImportDefault.LINK === type) {
    const obj12 = {};
    const tmp48 = LinkGridItemDefault;
    const merged10 = Object.assign(item.props);
    return metroImportAll(tmp48, obj12);
  } else if (metroImportDefault.FILE === type) {
    const obj13 = {};
    const tmp42 = FileGridItemDefault;
    const merged11 = Object.assign(item.props);
    return metroImportAll(tmp42, obj13);
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER === type) {
    const obj14 = {};
    const tmp36 = GuildChannelMemberRowDefault;
    const merged12 = Object.assign(item.props);
    return metroImportAll(tmp36, obj14);
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return metroImportAll(MemberRowPlaceholderDefault, {});
  } else if (metroImportDefault.GENERIC === type) {
    const obj15 = {};
    const tmp27 = GenericTextRowDefault;
    const merged13 = Object.assign(item.props);
    return metroImportAll(tmp27, obj15);
  } else if (metroImportDefault.SECTION === type) {
    const obj16 = {};
    const tmp21 = SearchListSectionDefault;
    const merged14 = Object.assign(item.props);
    return metroImportAll(tmp21, obj16);
  } else if (metroImportDefault.SMART_SEARCH === type) {
    const obj17 = {};
    const tmp15 = SmartSearchRowDefault;
    const merged15 = Object.assign(item.props);
    return metroImportAll(tmp15, obj17);
  } else if (metroImportDefault.SUGGESTED_SEARCH === type) {
    const obj = {};
    const tmp9 = SuggestedSearchRowDefault;
    const merged16 = Object.assign(item.props);
    return metroImportAll(tmp9, obj);
  } else if (metroImportDefault.SUGGESTED_SEARCH_PLACEHOLDER === type) {
    return metroImportAll(SuggestedSearchSkeletonDefault, {});
  } else {
    return null;
  }
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: metroImportDefault } = SearchConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let intl;
  let items;
  let numColumns;
  let obj3;
  let onEndReached;
  let tmp14;
  let tmp6Result;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(21);
  ({ contentContainerStyle, data, onEndReached, ItemSeparatorComponent, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  const ref = react.useRef(null);
  const tmp5 = closure_10();
  let num = 0.5;
  const bottom = useSafeAreaInsetsDefault().bottom;
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
  if (cResult[0] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let tmp9 = tmp7;
    if (tmp9) {
      const obj2 = { style: hasOwnProperty.absoluteFill, children: metroImportAll(tmp6Result, obj3) };
      obj3 = { text: intl.string(intl2.t.V6nAfF) };
      tmp6Result = ErrorScreenDefault;
      intl = intl2.intl;
      tmp9 = metroImportAll(React3, obj2);
    }
    cResult[0] = 0 === data.length && null == ListFooterComponent && null == ListHeaderComponent;
    cResult[1] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let obj4;
    if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
      obj4 = { importantForAccessibility: "no", scrollEnabled: false };
    }
    cResult[2] = 0 === data.length && null == ListFooterComponent && null == ListHeaderComponent;
    cResult[3] = obj4;
    tmp14 = obj4;
  } else {
    tmp14 = cResult[3];
  }
  const sum = 16 + bottom;
  if (cResult[4] === contentContainerStyle) {
    let tmp16;
    if (cResult[5] === sum) {
      tmp16 = cResult[6];
    }
    if (cResult[7] === ItemSeparatorComponent) {
      if (cResult[8] === ListFooterComponent) {
        if (cResult[9] === ListHeaderComponent) {
          if (cResult[10] === data) {
            if (cResult[11] === numColumns) {
              if (cResult[12] === onEndReached) {
                if (cResult[13] === tmp14) {
                  if (cResult[14] === tmp16) {
                    let tmp18;
                    if (cResult[15] === num) {
                      tmp18 = cResult[16];
                    }
                    if (cResult[17] === tmp5.container) {
                      if (cResult[18] === tmp8) {
                        let tmp24;
                        if (cResult[19] === tmp18) {
                          tmp24 = cResult[20];
                        }
                        return tmp24;
                      }
                    }
                    const obj5 = { style: tmp5.container, children: items };
                    items = [tmp8, tmp18];
                    const tmp27 = React4(React3, obj5);
                    cResult[17] = tmp5.container;
                    cResult[18] = tmp8;
                    cResult[19] = tmp18;
                    cResult[20] = tmp27;
                    tmp24 = tmp27;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj6 = { ref, overrideProps: tmp14, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num, onEndReached, scrollsToTop: true, contentContainerStyle: tmp16, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns, viewabilityConfigCallbackPairs: smartSearchViewabilityConfig.smartSearchViewabilityConfig };
    const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
    const tmp23 = metroImportAll(AnimatedFlashList, obj6);
    cResult[7] = ItemSeparatorComponent;
    cResult[8] = ListFooterComponent;
    cResult[9] = ListHeaderComponent;
    cResult[10] = data;
    cResult[11] = numColumns;
    cResult[12] = onEndReached;
    cResult[13] = tmp14;
    cResult[14] = tmp16;
    cResult[15] = num;
    cResult[16] = tmp23;
    tmp18 = tmp23;
  }
  const obj7 = { paddingBottom: sum };
  const merged = Object.assign(contentContainerStyle);
  cResult[4] = contentContainerStyle;
  cResult[5] = sum;
  cResult[6] = obj7;
  tmp16 = obj7;
}) : ((arg0) => {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let intl;
  let items;
  let numColumns;
  let obj3;
  let obj5;
  let obj6;
  let onEndReached;
  let tmp3Result;
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  ({ onEndReached, ItemSeparatorComponent } = arg0);
  let num = 0.5;
  const ref = react.useRef(null);
  const tmp2 = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
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
  let tmp8 = tmp5;
  const obj = { style: tmp2.container, children: items };
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    const obj2 = { style: hasOwnProperty.absoluteFill, children: metroImportAll(tmp3Result, obj3) };
    obj3 = { text: intl.string(intl2.t.V6nAfF) };
    tmp3Result = ErrorScreenDefault;
    intl = intl2.intl;
    tmp8 = metroImportAll(React3, obj2);
  }
  items = [tmp8, ];
  const obj4 = { ref, overrideProps: obj5, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num, onEndReached, scrollsToTop: true, contentContainerStyle: obj6, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns, viewabilityConfigCallbackPairs: smartSearchViewabilityConfig.smartSearchViewabilityConfig };
  obj5 = undefined;
  const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj5 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj6 = { paddingBottom: 16 + bottom };
  const merged = Object.assign(contentContainerStyle);
  items[1] = metroImportAll(AnimatedFlashList, obj4);
  return React4(React3, obj);
}));
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;