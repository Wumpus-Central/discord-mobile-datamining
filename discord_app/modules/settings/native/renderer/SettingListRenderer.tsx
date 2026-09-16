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

const require = globalThis.__r;

require = fn;
function SearchListSectionLabel(label) {
  label = label.label;
  const obj = { style: closure_9().spacer, children: null };
  let tmpResult = label;
  if (typeof label === "string") {
    const obj2 = { title: label };
    tmpResult = jsx(TableRowGroup.TableRowGroupTitle, { title: label });
  }
  obj.children = tmpResult;
  return <View style={closure_9().spacer}>{null}</View>;
}
function SearchListSectionSubLabel(subLabel) {
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
    const obj4 = { label: item.label };
    return <SearchListSectionLabel label={item.label} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    const obj5 = { subLabel: item.label };
    return <SearchListSectionSubLabel subLabel={item.label} />;
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
const ListItemType = fn(11615).ListItemType;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj = {
  container: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 },
  contentContainer: { paddingHorizontal: 16 },
  searchResultsHeader: { paddingBottom: 24 },
  spacer: { paddingTop: 24 },
  subLabel: { marginTop: 8 },
};
let closure_9 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
const memoResult = noop.memo((node) => {
  node = node.node;
  const tmp = closure_9();
  const field = SettingBlocklistStore.useField("blocklist");
  const items = [field, node];
  const memo = noop.useMemo(() => SettingRendererUtils.toSettingListItems(node, field), items);
  const ref = noop.useRef(null);
  node(14810).useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
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
  obj4.paddingBottom = field(1612)().bottom + field(576).space.PX_16;
  obj3.contentContainerStyle = obj4;
  obj3.scrollIndicatorInsets = { right: 0.01 };
  obj3.keyExtractor = keyExtractor;
  obj3.renderItem = renderItem;
  obj3.data = memo;
  obj3.getItemType = getItemType;
  obj2.children = jsx(node(9017).FlashList, {
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
  const settingSearchResults = node(settings[15]).useSettingSearchResults();
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
  obj2.onScroll = node(settings[18]).dismissGlobalKeyboard;
  obj2.scrollIndicatorInsets = { right: 0.01 };
  obj2.keyExtractor = keyExtractor;
  obj2.renderItem = renderItem;
  obj2.data = memo2;
  obj2.getItemType = getItemType;
  return memo1(node(settings[14]).FlashList, obj2);
});
