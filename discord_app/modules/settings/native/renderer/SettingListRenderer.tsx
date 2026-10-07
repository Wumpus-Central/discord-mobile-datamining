// discord_app/modules/settings/native/renderer/SettingListRenderer.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _mod8404 from "../../../../../discord_common/js/packages/flash-list/index.js";
import SettingRenderer from "SettingRenderer.tsx";
import SettingRendererUtils from "SettingRendererUtils.tsx";
import useAutoScrollToSetting from "hooks/useAutoScrollToSetting.tsx";
import useSettingSearchResults from "../search/hooks/useSettingSearchResults.tsx";
import SettingsSearchEmptyStateDefault from "../search/components/SettingsSearchEmptyState.tsx";
import SettingSearchBarDefault from "../search/SettingSearchBar.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "stores/SettingBlocklistStore.tsx";

const require = globalThis.__r;

require = fn;
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
    const obj4 = { label: item.label };
    return <closure_10 label={item.label} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    const obj5 = { subLabel: item.label };
    return <closure_11 subLabel={item.label} />;
  } else if (ListItemType.SETTING_SEARCH_RESULT === type) {
    return SettingRenderer.renderSettingSearchResultItem(item);
  } else if (ListItemType.SECTION_ROW === type) {
    return SettingRenderer.renderSettingItem(item);
  } else if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
    return SettingRenderer.renderSettingSearchResultPlaceholderItem(item);
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
  if (typeof type.label === "string") {
    label = type.label;
  }
  return "" + type.type + "-" + label;
}
const View = fn(17).View;
const ListItemType = fn(11143).ListItemType;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = {
  container: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 },
  contentContainer: { paddingHorizontal: 16 },
  searchResultsHeader: { paddingBottom: 24 },
  spacer: { paddingTop: 24 },
  subLabel: { marginTop: 8 },
};
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (label) => {
      const cResult = c.c(5);
      label = label.label;
      const tmp4 = closure_9();
      if (cResult[0] !== label) {
        let tmp6 = label;
        if (typeof label === "string") {
          const obj2 = { title: label };
          tmp6 = jsx(TableRowGroup.TableRowGroupTitle, { title: label });
        }
        cResult[0] = label;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.spacer) {
        if (cResult[3] === tmp5) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = <View style={tmp4.spacer}>{tmp5}</View>;
      cResult[2] = tmp4.spacer;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      const obj3 = { style: tmp4.spacer, children: tmp5 };
    }
  : (label) => {
      label = label.label;
      const obj = { style: closure_9().spacer, children: null };
      let tmpResult = label;
      if (typeof label === "string") {
        const obj2 = { title: label };
        tmpResult = jsx(TableRowGroup.TableRowGroupTitle, { title: label });
      }
      obj.children = tmpResult;
      return <View style={closure_9().spacer}>{null}</View>;
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (subLabel) => {
      const cResult = c.c(5);
      subLabel = subLabel.subLabel;
      const tmp4 = closure_9();
      if (cResult[0] !== subLabel) {
        if (typeof subLabel === "string") {
          const obj2 = { variant: "text-xs/normal", color: "text-muted", children: subLabel };
          let tmp7 = jsx(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: subLabel });
        } else {
          const _Array = Array;
          tmp7 = subLabel;
        }
        cResult[0] = subLabel;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.subLabel) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = <View style={tmp4.subLabel}>{tmp5}</View>;
      cResult[2] = tmp4.subLabel;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.subLabel, children: tmp5 };
    }
  : (subLabel) => {
      subLabel = subLabel.subLabel;
      const obj = { style: closure_9().subLabel, children: null };
      if (typeof subLabel === "string") {
        const obj2 = { variant: "text-xs/normal", color: "text-muted", children: subLabel };
        let tmpResult = jsx(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: subLabel });
      } else {
        const _Array = Array;
        tmpResult = subLabel;
      }
      obj.children = tmpResult;
      return <View style={closure_9().subLabel}>{null}</View>;
    };
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (node) => {
        const cResult = c.c(14);
        node = node.node;
        const tmp4 = closure_9();
        const field = SettingBlocklistStore.useField("blocklist");
        if (cResult[0] === field) {
          if (cResult[1] === node) {
            let tmp7 = cResult[2];
          }
          const ref = noop.useRef(null);
          useAutoScrollToSetting.useAutoScrollToSearchResultSetting(ref, tmp7, node.scrollTarget);
          const sum = useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16;
          if (cResult[3] === tmp4.contentContainer) {
            if (cResult[4] === sum) {
              let tmp14 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { right: 0.01 };
              cResult[6] = obj2;
              let tmp18 = obj2;
            } else {
              tmp18 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === node.ListHeaderComponent) {
                if (cResult[9] === tmp14) {
                  let tmp19 = cResult[10];
                }
                if (cResult[11] === tmp4.container) {
                  if (cResult[12] === tmp19) {
                    let tmp25 = cResult[13];
                  }
                  return tmp25;
                }
                const obj3 = { style: tmp4.container, children: tmp19 };
                const tmp28 = <View style={tmp4.container}>{tmp19}</View>;
                cResult[11] = tmp4.container;
                cResult[12] = tmp19;
                cResult[13] = tmp28;
                tmp25 = tmp28;
              }
            }
            const obj4 = {
              ref,
              ListHeaderComponent: node.ListHeaderComponent,
              contentContainerStyle: tmp14,
              scrollIndicatorInsets: tmp18,
              keyExtractor,
              renderItem,
              data: tmp7,
              getItemType,
            };
            const tmp24 = jsx(_mod8404.FlashList, {
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
          const obj5 = {};
          const merged = Object.assign(tmp4.contentContainer);
          obj5.paddingBottom = sum;
          cResult[3] = tmp4.contentContainer;
          cResult[4] = sum;
          cResult[5] = obj5;
          tmp14 = obj5;
          const tmpResult = useAutoScrollToSetting;
        }
        const toSettingListItemsResult = SettingRendererUtils.toSettingListItems(node, field);
        cResult[0] = field;
        cResult[1] = node;
        cResult[2] = toSettingListItemsResult;
        tmp7 = toSettingListItemsResult;
        const tmpResult2 = SettingRendererUtils;
      }
    : (node) => {
        node = node.node;
        const tmp = closure_9();
        const field = SettingBlocklistStore.useField("blocklist");
        const items = [field, node];
        const memo = noop.useMemo(() => SettingRendererUtils.toSettingListItems(node, field), items);
        const ref = noop.useRef(null);
        node(14523).useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
        const obj2 = { style: tmp.container, children: null };
        const obj3 = {
          ref,
          ListHeaderComponent: node.ListHeaderComponent,
          contentContainerStyle: null,
          scrollIndicatorInsets: null,
          keyExtractor: null,
          renderItem: null,
          data: null,
          getItemType: null,
        };
        const obj4 = {};
        const merged = Object.assign(tmp.contentContainer);
        obj4.paddingBottom = field(1618)().bottom + field(587).space.PX_16;
        obj3.contentContainerStyle = obj4;
        obj3.scrollIndicatorInsets = { right: 0.01 };
        obj3.keyExtractor = keyExtractor;
        obj3.renderItem = renderItem;
        obj3.data = memo;
        obj3.getItemType = getItemType;
        obj2.children = jsx(node(8404).FlashList, {
          ref,
          ListHeaderComponent: node.ListHeaderComponent,
          contentContainerStyle: null,
          scrollIndicatorInsets: null,
          keyExtractor: null,
          renderItem: null,
          data: null,
          getItemType: null,
        });
        return <View style={tmp.container}>{null}</View>;
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (node) => {
        const cResult = c.c(24);
        node = node.node;
        const tmp4 = closure_9();
        ({ settings, isLoading, placeholderCount } = useSettingSearchResults.useSettingSearchResults());
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(query) {
            return "" === query.query.trim();
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        state = UserSettingSearchStore.useState(first);
        const field = SettingBlocklistStore.useField("blocklist");
        if (cResult[1] === field) {
          if (cResult[2] === node) {
            let tmp10 = cResult[3];
          }
          if (cResult[4] === isLoading) {
            if (cResult[5] === placeholderCount) {
              if (cResult[6] === settings) {
                let arr = cResult[7];
              }
              if (state) {
                arr = tmp10;
              }
              if (cResult[8] === state) {
                if (cResult[9] === tmp4.searchResultsHeader) {
                  if (cResult[11] === arr.length) {
                    if (cResult[12] === isLoading) {
                      if (cResult[13] === state) {
                        let tmp16 = cResult[14];
                      }
                      const sum = useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16;
                      if (cResult[15] === tmp4.contentContainer) {
                        if (cResult[16] === sum) {
                          let tmp20 = cResult[17];
                        }
                        const _Symbol = Symbol;
                        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj3 = { right: 0.01 };
                          cResult[18] = obj3;
                          let tmp23 = obj3;
                        } else {
                          tmp23 = cResult[18];
                        }
                        if (cResult[19] === tmp16) {
                          if (cResult[20] === tmp13) {
                            if (cResult[21] === arr) {
                              if (cResult[22] === tmp20) {
                                let tmp24 = cResult[23];
                              }
                              return tmp24;
                            }
                          }
                        }
                        const obj4 = {
                          keyboardShouldPersistTaps: "always",
                          contentContainerStyle: tmp20,
                          ListHeaderComponentStyle: tmp13,
                          ListHeaderComponent: SettingSearchBarDefault,
                          ListEmptyComponent: tmp16,
                          onScroll: KeyboardManagerUtils.dismissGlobalKeyboard,
                          scrollIndicatorInsets: tmp23,
                          keyExtractor,
                          renderItem,
                          data: arr,
                          getItemType,
                        };
                        const tmp29 = jsx(_mod8404.FlashList, {
                          keyboardShouldPersistTaps: "always",
                          contentContainerStyle: tmp20,
                          ListHeaderComponentStyle: tmp13,
                          ListHeaderComponent: SettingSearchBarDefault,
                          ListEmptyComponent: tmp16,
                          onScroll: KeyboardManagerUtils.dismissGlobalKeyboard,
                          scrollIndicatorInsets: tmp23,
                          keyExtractor,
                          renderItem,
                          data: arr,
                          getItemType,
                        });
                        cResult[19] = tmp16;
                        cResult[20] = tmp13;
                        cResult[21] = arr;
                        cResult[22] = tmp20;
                        cResult[23] = tmp29;
                        tmp24 = tmp29;
                      }
                      const obj5 = {};
                      const merged = Object.assign(tmp4.contentContainer);
                      obj5.paddingBottom = sum;
                      cResult[15] = tmp4.contentContainer;
                      cResult[16] = sum;
                      cResult[17] = obj5;
                      tmp20 = obj5;
                    }
                  }
                  let tmp17 = null;
                  if (!state) {
                    tmp17 = null;
                    if (!isLoading) {
                      tmp17 = null;
                      if (0 === arr.length) {
                        tmp17 = jsx(SettingsSearchEmptyStateDefault, {});
                      }
                    }
                  }
                  cResult[11] = arr.length;
                  cResult[12] = isLoading;
                  cResult[13] = state;
                  cResult[14] = tmp17;
                  tmp16 = tmp17;
                }
              }
              const tmp14 = state ? {} : tmp4.searchResultsHeader;
              cResult[8] = state;
              cResult[9] = tmp4.searchResultsHeader;
              cResult[10] = tmp14;
            }
          }
          const scoredSettingListSearchResultItems = SettingRendererUtils.getScoredSettingListSearchResultItems(
            settings,
            isLoading,
            placeholderCount,
          );
          cResult[4] = isLoading;
          cResult[5] = placeholderCount;
          cResult[6] = settings;
          cResult[7] = scoredSettingListSearchResultItems;
          arr = scoredSettingListSearchResultItems;
          const tmpResult = SettingRendererUtils;
        }
        const settingSearchResults = useSettingSearchResults.useSettingSearchResults();
        const toSettingListItemsResult = SettingRendererUtils.toSettingListItems(node, field);
        cResult[1] = field;
        cResult[2] = node;
        cResult[3] = toSettingListItemsResult;
        tmp10 = toSettingListItemsResult;
        const tmpResult2 = SettingRendererUtils;
      }
    : (node) => {
        node = node.node;
        let settings;
        state = undefined;
        let field;
        let memo2;
        let tmp = memo2();
        importDefault = tmp;
        const settingSearchResults = node(settings[17]).useSettingSearchResults();
        settings = settingSearchResults.settings;
        const isLoading = settingSearchResults.isLoading;
        const placeholderCount = settingSearchResults.placeholderCount;
        state = state.useState((query) => "" === query.query.trim());
        field = field.useField("blocklist");
        const items = [field, node];
        const memo = isLoading.useMemo(() => SettingRendererUtils.toSettingListItems(node, field), items);
        const items1 = [settings, isLoading, placeholderCount];
        const memo1 = isLoading.useMemo(
          () => SettingRendererUtils.getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount),
          items1,
        );
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
          contentContainerStyle: null,
          ListHeaderComponentStyle: null,
          ListHeaderComponent: null,
          ListEmptyComponent: null,
          onScroll: null,
          scrollIndicatorInsets: null,
          keyExtractor: null,
          renderItem: null,
          data: null,
          getItemType: null,
        };
        const obj3 = {};
        const merged = Object.assign(tmp.contentContainer);
        obj3.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
        obj2.contentContainerStyle = obj3;
        obj2.ListHeaderComponentStyle = memo3;
        obj2.ListHeaderComponent = require("SettingSearchBar");
        obj2.ListEmptyComponent = memo4;
        obj2.onScroll = node(settings[20]).dismissGlobalKeyboard;
        obj2.scrollIndicatorInsets = { right: 0.01 };
        obj2.keyExtractor = keyExtractor;
        obj2.renderItem = renderItem;
        obj2.data = memo2;
        obj2.getItemType = getItemType;
        return memo1(node(settings[16]).FlashList, obj2);
      },
);
