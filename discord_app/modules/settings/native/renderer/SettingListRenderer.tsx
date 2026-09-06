// discord_app/modules/settings/native/renderer/SettingListRenderer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SettingRenderer from "SettingRenderer.tsx";
import SettingRendererUtils from "SettingRendererUtils.tsx";
import SettingsSearchEmptyStateDefault from "../search/components/SettingsSearchEmptyState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "stores/SettingBlocklistStore.tsx";

require = fn;
function SearchListSectionLabel(label) {
  label = label.label;
  let obj = { style: closure_9().spacer, children: null };
  let tmpResult = label;
  if (typeof label === "string") {
    obj = { title: label };
    tmpResult = jsx(TableRowGroup.TableRowGroupTitle, { title: label });
  }
  obj.children = tmpResult;
  return <View style={closure_9().spacer}>{null}</View>;
}
function SearchListSectionSubLabel(subLabel) {
  subLabel = subLabel.subLabel;
  let obj = { style: closure_9().subLabel, children: null };
  if (typeof subLabel === "string") {
    obj = { variant: "text-xs/normal", color: "text-muted", children: subLabel };
    let tmpResult = jsx(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: subLabel });
  } else {
    const _Array = Array;
    tmpResult = subLabel;
  }
  obj.children = tmpResult;
  return <View style={closure_9().subLabel}>{null}</View>;
}
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
    let obj = { label: item.label };
    return <SearchListSectionLabel label={item.label} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    obj = { subLabel: item.label };
    return <SearchListSectionSubLabel subLabel={item.label} />;
  } else if (ListItemType.SETTING_SEARCH_RESULT === type) {
    return SettingRenderer.renderSettingSearchResultItem(item);
  } else if (ListItemType.SECTION_ROW === type) {
    return SettingRenderer.renderSettingItem(item);
  } else if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
    obj = SettingRenderer;
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
  if (typeof type.label === "string") {
    label = type.label;
  }
  return "" + type.type + "-" + label;
}
const View = fn(17).View;
const ListItemType = fn(11469).ListItemType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null, contentContainer: null, searchResultsHeader: null, spacer: null, subLabel: null };
obj = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
obj.container = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.searchResultsHeader = { paddingBottom: 24 };
obj.spacer = { paddingTop: 24 };
obj.subLabel = { marginTop: 8 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo((node) => {
  node = node.node;
  const tmp = closure_9();
  const field = SettingBlocklistStore.useField("blocklist");
  const items = [field, node];
  const memo = noop.useMemo(() => SettingRendererUtils.toSettingListItems(node, field), items);
  const ref = noop.useRef(null);
  let obj = node(14697);
  obj.useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
  obj = { style: tmp.container, children: null };
  obj = {
    ref,
    ListHeaderComponent: node.ListHeaderComponent,
    contentContainerStyle: null,
    scrollIndicatorInsets: null,
    keyExtractor: null,
    renderItem: null,
    data: null,
    getItemType: null,
  };
  const obj1 = {};
  const merged = Object.assign(tmp.contentContainer);
  obj1.paddingBottom = field(1611)().bottom + field(576).space.PX_16;
  obj.contentContainerStyle = obj1;
  obj.scrollIndicatorInsets = { right: 0.01 };
  obj.keyExtractor = keyExtractor;
  obj.renderItem = renderItem;
  obj.data = memo;
  obj.getItemType = getItemType;
  obj.children = jsx(node(8874).FlashList, {
    ref,
    ListHeaderComponent: node.ListHeaderComponent,
    contentContainerStyle: null,
    scrollIndicatorInsets: null,
    keyExtractor: null,
    renderItem: null,
    data: null,
    getItemType: null,
  });
  return (
    <View
      ref={ref}
      ListHeaderComponent={node.ListHeaderComponent}
      contentContainerStyle={null}
      scrollIndicatorInsets={null}
      keyExtractor={null}
      renderItem={null}
      data={null}
      getItemType={null}
    />
  );
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = noop.memo((node) => {
  node = node.node;
  let settings;
  let state;
  let field;
  let memo2;
  let tmp = memo2();
  importDefault = tmp;
  let obj = node(settings[15]);
  const settingSearchResults = obj.useSettingSearchResults();
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
  obj = {
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
  obj = {};
  const merged = Object.assign(tmp.contentContainer);
  obj.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
  obj.contentContainerStyle = obj;
  obj.ListHeaderComponentStyle = memo3;
  obj.ListHeaderComponent = require("SettingSearchBar");
  obj.ListEmptyComponent = memo4;
  obj.onScroll = node(settings[18]).dismissGlobalKeyboard;
  obj.scrollIndicatorInsets = { right: 0.01 };
  obj.keyExtractor = keyExtractor;
  obj.renderItem = renderItem;
  obj.data = memo2;
  obj.getItemType = getItemType;
  return memo1(node(settings[14]).FlashList, obj);
});
