// discord_app/modules/search/native/components/list/SearchList.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod8371 from "../../../../../../discord_common/js/packages/flash-list/index.js";
import SuggestedSearchRowDefault from "../../../../intelligence_layer/search/native/components/SuggestedSearchRow.tsx";
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
import SmartSearchRowDefault from "../../../../intelligence_layer/search/native/components/SmartSearchRow.tsx";
import SuggestedSearchSkeletonDefault from "../../../../intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
const SearchConstants = fn(7513);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: closure_7 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(21);
        ({
          contentContainerStyle,
          data,
          onEndReached,
          ItemSeparatorComponent,
          ListHeaderComponent,
          ListFooterComponent,
          numColumns,
        } = arg0);
        const tmp5 = closure_10();
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
        if (cResult[0] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
          let tmp9 = tmp7;
          if (tmp7) {
            const obj2 = { style: hasOwnProperty.absoluteFill, children: null };
            const obj3 = { text: null };
            const intl = util.intl;
            obj3.text = intl.string(util.t.V6nAfF);
            obj2.children = closure_1_8(pages_ErrorScreenDefault, obj3);
            tmp9 = closure_1_8(React4, obj2);
            const tmp6Result = pages_ErrorScreenDefault;
          }
          cResult[0] = tmp7;
          cResult[1] = tmp9;
          let tmp8 = tmp9;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
          let obj4;
          if (tmp7) {
            obj4 = { importantForAccessibility: "no", scrollEnabled: false };
          }
          cResult[2] = tmp7;
          cResult[3] = obj4;
          let tmp14 = obj4;
        } else {
          tmp14 = cResult[3];
        }
        const sum = 16 + useSafeAreaInsetsDefault().bottom;
        if (cResult[4] === contentContainerStyle) {
          if (cResult[5] === sum) {
            let tmp16 = cResult[6];
          }
          if (cResult[7] === ItemSeparatorComponent) {
            if (cResult[8] === ListFooterComponent) {
              if (cResult[9] === ListHeaderComponent) {
                if (cResult[10] === data) {
                  if (cResult[11] === numColumns) {
                    if (cResult[12] === onEndReached) {
                      if (cResult[13] === tmp14) {
                        if (cResult[14] === tmp16) {
                          if (cResult[15] === num) {
                            let tmp18 = cResult[16];
                          }
                          if (cResult[17] === tmp5.container) {
                            if (cResult[18] === tmp8) {
                              if (cResult[19] === tmp18) {
                                let tmp24 = cResult[20];
                              }
                              return tmp24;
                            }
                          }
                          const obj5 = { style: tmp5.container, children: null };
                          const items = [tmp8, tmp18];
                          obj5.children = items;
                          const tmp27 = options(React4, obj5);
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
          const obj6 = {
            ref,
            overrideProps: tmp14,
            keyboardDismissMode: "on-drag",
            keyboardShouldPersistTaps: "handled",
            data,
            renderItem,
            onEndReachedThreshold: num,
            onEndReached,
            scrollsToTop: true,
            contentContainerStyle: tmp16,
            keyExtractor,
            getItemType,
            ListHeaderComponent,
            ListFooterComponent,
            ItemSeparatorComponent,
            numColumns,
          };
          const tmp23 = closure_1_8(_mod8371.AnimatedFlashList, obj6);
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
        ref = noop.useRef(null);
      }
    : (arg0) => {
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
          const obj2 = { style: hasOwnProperty.absoluteFill, children: null };
          const obj3 = { text: null };
          const intl = util.intl;
          obj3.text = intl.string(util.t.V6nAfF);
          obj2.children = closure_1_8(pages_ErrorScreenDefault, obj3);
          tmp8 = closure_1_8(React4, obj2);
          const tmp3Result = pages_ErrorScreenDefault;
        }
        const items = [tmp8];
        const obj4 = {
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
        items[1] = closure_1_8(_mod8371.AnimatedFlashList, obj4);
        obj.children = items;
        return options(React4, obj);
      },
);
