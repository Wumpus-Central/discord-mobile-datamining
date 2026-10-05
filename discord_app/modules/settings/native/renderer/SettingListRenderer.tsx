// discord_app/modules/settings/native/renderer/SettingListRenderer.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import defaultMVCPConfig from "../../../../../discord_common/js/packages/flash-list/index.js";
import SettingRendererConstants from "SettingRendererConstants.tsx";
import SettingRenderer from "SettingRenderer.tsx";
import SettingRendererUtils from "SettingRendererUtils.tsx";
import useAutoScrollToSetting from "hooks/useAutoScrollToSetting.tsx";
import useSettingSearchResults from "../search/hooks/useSettingSearchResults.tsx";
import SettingsSearchEmptyStateDefault from "../search/components/SettingsSearchEmptyState.tsx";
import SettingSearchBarDefault from "../search/SettingSearchBar.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "stores/SettingBlocklistStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, node, searchResultsHeader, subLabel;

let obj2;
function getItemType(type) {
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (ListItemType.SECTION_FOOTER !== type) {
      if (ListItemType.SECTION_ROW !== type) {
        if (ListItemType.SETTING_SEARCH_RESULT !== type) {
          return ListItemType.SECTION_ROW_PLACEHOLDER === type ? type.type : undefined;
        }
      }
      const _HermesInternal = HermesInternal;
      return "" + type.type + "-" + type.setting;
    }
  }
  return type.type;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (ListItemType.SECTION_HEADER === type) {
    return <closure_10 label={item.label} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    return <closure_11 subLabel={item.label} />;
  } else if (ListItemType.SETTING_SEARCH_RESULT === type) {
    const obj3 = SettingRenderer;
    return obj3.renderSettingSearchResultItem(item);
  } else if (ListItemType.SECTION_ROW === type) {
    const obj2 = SettingRenderer;
    return obj2.renderSettingItem(item);
  } else if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
    const obj = SettingRenderer;
    return obj.renderSettingSearchResultPlaceholderItem(item);
  }
}
function keyExtractor(type, arg1) {
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (ListItemType.SECTION_FOOTER !== type) {
      if (ListItemType.SECTION_ROW !== type) {
        if (ListItemType.SETTING_SEARCH_RESULT !== type) {
          if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
            const _HermesInternal = HermesInternal;
            return "" + type.type + "-" + arg1;
          }
        }
      }
      const _HermesInternal2 = HermesInternal;
      return "" + type.type + "-" + type.setting;
    }
  }
  let label = arg1;
  const type2 = type.type;
  if (typeof type.label === "string") {
    label = type.label;
  }
  return "" + type2 + "-" + label;
}
const View = react_native.View;
const ListItemType = SettingRendererConstants.ListItemType;
const jsx = Fragment.jsx;
let obj = {
  container: obj2,
  contentContainer: { paddingHorizontal: 16 },
  searchResultsHeader: { paddingBottom: 24 },
  spacer: { paddingTop: 24 },
  subLabel: { marginTop: 8 },
};
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (label) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      label = label.label;
      const tmp4 = closure_9();
      if (cResult[0] !== label) {
        let tmp6 = label;
        if (typeof label === "string") {
          tmp6 = jsx(TableRowGroup.TableRowGroupTitle, { title: label });
        }
        cResult[0] = label;
        cResult[1] = tmp6;
        tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.spacer) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = <View style={tmp4.spacer}>{tmp5}</View>;
      cResult[2] = tmp4.spacer;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (label) => {
      label = label.label;
      let tmpResult = label;
      if (typeof label === "string") {
        tmpResult = jsx(TableRowGroup.TableRowGroupTitle, { title: label });
      }
      return <View style={closure_9().spacer}>{tmpResult}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (subLabel) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      subLabel = subLabel.subLabel;
      const tmp4 = closure_9();
      if (cResult[0] !== subLabel) {
        let tmp7;
        if (typeof subLabel === "string") {
          tmp7 = jsx(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: subLabel });
        } else {
          const _Array = Array;
          tmp7 = subLabel;
        }
        cResult[0] = subLabel;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.subLabel) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = <View style={tmp4.subLabel}>{tmp5}</View>;
      cResult[2] = tmp4.subLabel;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (subLabel) => {
      let tmpResult;
      subLabel = subLabel.subLabel;
      if (typeof subLabel === "string") {
        tmpResult = jsx(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: subLabel });
      } else {
        const _Array = Array;
        tmpResult = subLabel;
      }
      return <View style={closure_9().subLabel}>{tmpResult}</View>;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let memo2 = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (node) => {
        const obj = react2;
        const cResult = obj.c(14);
        node = node.node;
        const tmp4 = closure_9();
        const bottom = useSafeAreaInsetsDefault().bottom;
        const field = SettingBlocklistStore.useField("blocklist");
        if (cResult[0] === field) {
          let tmp7;
          if (cResult[1] === node) {
            tmp7 = cResult[2];
          }
          const ref = react.useRef(null);
          const tmpResult = useAutoScrollToSetting;
          tmpResult.useAutoScrollToSearchResultSetting(ref, tmp7, node.scrollTarget);
          const sum = bottom + nativeDefault.space.PX_16;
          if (cResult[3] === tmp4.contentContainer) {
            let tmp14;
            let tmp18;
            if (cResult[4] === sum) {
              tmp14 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { right: 0.01 };
              cResult[6] = obj2;
              tmp18 = obj2;
            } else {
              tmp18 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === node.ListHeaderComponent) {
                let tmp19;
                if (cResult[9] === tmp14) {
                  tmp19 = cResult[10];
                }
                if (cResult[11] === tmp4.container) {
                  let tmp25;
                  if (cResult[12] === tmp19) {
                    tmp25 = cResult[13];
                  }
                  return tmp25;
                }
                const tmp28 = <View style={tmp4.container}>{tmp19}</View>;
                cResult[11] = tmp4.container;
                cResult[12] = tmp19;
                cResult[13] = tmp28;
                tmp25 = tmp28;
              }
            }
            const tmp24 = jsx(defaultMVCPConfig.FlashList, {
              ref,
              ListHeaderComponent: node.ListHeaderComponent,
              contentContainerStyle: tmp14,
              scrollIndicatorInsets: tmp18,
              keyExtractor,
              renderItem,
              data: tmp7,
              getItemType,
            });
            cResult[7] = tmp7;
            cResult[8] = node.ListHeaderComponent;
            cResult[9] = tmp14;
            cResult[10] = tmp24;
            tmp19 = tmp24;
          }
          const obj5 = { paddingBottom: sum };
          const merged = Object.assign(tmp4.contentContainer);
          cResult[3] = tmp4.contentContainer;
          cResult[4] = sum;
          cResult[5] = obj5;
          tmp14 = obj5;
        }
        const tmpResult2 = SettingRendererUtils;
        const toSettingListItemsResult = tmpResult2.toSettingListItems(node, field);
        cResult[0] = field;
        cResult[1] = node;
        cResult[2] = toSettingListItemsResult;
        tmp7 = toSettingListItemsResult;
      }
    : (node) => {
        node = node.node;
        let field;
        const tmp = closure_9();
        const bottom = field(1618)().bottom;
        field = SettingBlocklistStore.useField("blocklist");
        const items = [field, node];
        const memo = react.useMemo(() => {
          const obj = SettingRendererUtils;
          return obj.toSettingListItems(node, field);
        }, items);
        const ref = react.useRef(null);
        let obj = node(14507);
        obj.useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
        const obj4 = { paddingBottom: bottom + field(587).space.PX_16 };
        const FlashList = node(8371).FlashList;
        const merged = Object.assign(tmp.contentContainer);
        return <View style={tmp.container}>{null}</View>;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (node) => {
        let first;
        let isLoading;
        let placeholderCount;
        let settings;
        const obj = react2;
        const cResult = obj.c(24);
        node = node.node;
        const tmp4 = closure_9();
        const bottom = useSafeAreaInsetsDefault().bottom;
        const obj2 = useSettingSearchResults;
        ({ settings, isLoading, placeholderCount } = obj2.useSettingSearchResults());
        obj2.useSettingSearchResults();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(query) {
            const str = query.query;
            return "" === str.trim();
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        const state = UserSettingSearchStore.useState(first);
        const field = SettingBlocklistStore.useField("blocklist");
        if (cResult[1] === field) {
          let tmp10;
          if (cResult[2] === node) {
            tmp10 = cResult[3];
          }
          if (cResult[4] === isLoading) {
            if (cResult[5] === placeholderCount) {
              let arr;
              if (cResult[6] === settings) {
                arr = cResult[7];
              }
              if (state) {
                arr = tmp10;
              }
              if (cResult[8] === state) {
                let tmp13;
                if (cResult[9] === tmp4.searchResultsHeader) {
                  tmp13 = cResult[10];
                }
                if (cResult[11] === arr.length) {
                  if (cResult[12] === isLoading) {
                    let tmp15;
                    if (cResult[13] === state) {
                      tmp15 = cResult[14];
                    }
                    const sum = bottom + nativeDefault.space.PX_16;
                    if (cResult[15] === tmp4.contentContainer) {
                      let tmp19;
                      let tmp22;
                      if (cResult[16] === sum) {
                        tmp19 = cResult[17];
                      }
                      const _Symbol = Symbol;
                      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj3 = { right: 0.01 };
                        cResult[18] = obj3;
                        tmp22 = obj3;
                      } else {
                        tmp22 = cResult[18];
                      }
                      if (cResult[19] === tmp15) {
                        if (cResult[20] === tmp13) {
                          if (cResult[21] === arr) {
                            let tmp23;
                            if (cResult[22] === tmp19) {
                              tmp23 = cResult[23];
                            }
                            return tmp23;
                          }
                        }
                      }
                      const FlashList = defaultMVCPConfig.FlashList;
                      const tmp28 = (
                        <FlashList
                          keyboardShouldPersistTaps="always"
                          contentContainerStyle={tmp19}
                          ListHeaderComponentStyle={tmp13}
                          ListHeaderComponent={SettingSearchBarDefault}
                          ListEmptyComponent={tmp15}
                          onScroll={KeyboardManagerUtils.dismissGlobalKeyboard}
                          scrollIndicatorInsets={tmp22}
                          keyExtractor={keyExtractor}
                          renderItem={renderItem}
                          data={arr}
                          getItemType={getItemType}
                        />
                      );
                      cResult[19] = tmp15;
                      cResult[20] = tmp13;
                      cResult[21] = arr;
                      cResult[22] = tmp19;
                      cResult[23] = tmp28;
                      tmp23 = tmp28;
                    }
                    const obj5 = { paddingBottom: sum };
                    const merged = Object.assign(tmp4.contentContainer);
                    cResult[15] = tmp4.contentContainer;
                    cResult[16] = sum;
                    cResult[17] = obj5;
                    tmp19 = obj5;
                  }
                }
                let tmp16 = null;
                if (!state) {
                  tmp16 = null;
                  if (!isLoading) {
                    tmp16 = null;
                    if (0 === arr.length) {
                      tmp16 = jsx(SettingsSearchEmptyStateDefault, {});
                    }
                  }
                }
                cResult[11] = arr.length;
                cResult[12] = isLoading;
                cResult[13] = state;
                cResult[14] = tmp16;
                tmp15 = tmp16;
              }
              const tmp14 = state ? {} : tmp4.searchResultsHeader;
              cResult[8] = state;
              cResult[9] = tmp4.searchResultsHeader;
              cResult[10] = tmp14;
              tmp13 = tmp14;
            }
          }
          const tmpResult = SettingRendererUtils;
          const scoredSettingListSearchResultItems = tmpResult.getScoredSettingListSearchResultItems(
            settings,
            isLoading,
            placeholderCount,
          );
          cResult[4] = isLoading;
          cResult[5] = placeholderCount;
          cResult[6] = settings;
          cResult[7] = scoredSettingListSearchResultItems;
          arr = scoredSettingListSearchResultItems;
        }
        const tmpResult2 = SettingRendererUtils;
        const toSettingListItemsResult = tmpResult2.toSettingListItems(node, field);
        cResult[1] = field;
        cResult[2] = node;
        cResult[3] = toSettingListItemsResult;
        tmp10 = toSettingListItemsResult;
      }
    : (node) => {
        let obj3;
        node = node.node;
        let settings;
        let state;
        let field;
        let memo2;
        let tmp = memo2();
        importDefault = tmp;
        const bottom = require("useSafeAreaInsets")().bottom;
        let obj = node(settings[17]);
        const settingSearchResults = obj.useSettingSearchResults();
        settings = settingSearchResults.settings;
        const isLoading = settingSearchResults.isLoading;
        const placeholderCount = settingSearchResults.placeholderCount;
        state = state.useState((query) => {
          const str = query.query;
          return "" === str.trim();
        });
        field = field.useField("blocklist");
        const items = [field, node];
        const memo = isLoading.useMemo(() => {
          const obj = SettingRendererUtils;
          return obj.toSettingListItems(node, field);
        }, items);
        const items1 = [settings, isLoading, placeholderCount];
        const memo1 = isLoading.useMemo(() => {
          const obj = SettingRendererUtils;
          return obj.getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount);
        }, items1);
        const items2 = [memo, memo1, state];
        memo2 = isLoading.useMemo(() => (state ? memo : memo1), items2);
        const items3 = [tmp.searchResultsHeader, state];
        const items4 = [state, isLoading, memo2.length];
        const memo3 = isLoading.useMemo(() => {
          if (state) {
            searchResultsHeader = {};
          } else {
            searchResultsHeader = searchResultsHeader.searchResultsHeader;
          }
          return searchResultsHeader;
        }, items3);
        const memo4 = isLoading.useMemo(() => {
          let tmp = null;
          if (!state) {
            tmp = null;
            if (!isLoading) {
              tmp = null;
              if (0 === memo2.length) {
                tmp = jsx(SettingsSearchEmptyStateDefault, {});
              }
            }
          }
          return tmp;
        }, items4);
        const obj2 = {
          keyboardShouldPersistTaps: "always",
          contentContainerStyle: obj3,
          ListHeaderComponentStyle: memo3,
          ListHeaderComponent: require("SettingSearchBar"),
          ListEmptyComponent: memo4,
          onScroll: node(settings[20]).dismissGlobalKeyboard,
          scrollIndicatorInsets: { right: 0.01 },
          keyExtractor,
          renderItem,
          data: memo2,
          getItemType,
        };
        obj3 = { paddingBottom: bottom + require("native").space.PX_16 };
        const FlashList = node(settings[16]).FlashList;
        const merged = Object.assign(tmp.contentContainer);
        return memo1(FlashList, obj2);
      },
);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = memo2Result;
