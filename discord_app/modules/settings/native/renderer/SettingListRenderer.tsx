// discord_app/modules/settings/native/renderer/SettingListRenderer.tsx
import importAllResult from "set";
import { View } from "SettingSearchBar";
import zustandStore from "zustandStore";
import closure_6 from "zustandStore";
import { ListItemType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function SearchListSectionLabel(label) {
  label = label.label;
  let obj = { style: callback().spacer, children: null };
  let tmpResult = label;
  if (typeof label === "string") {
    obj = { title: null };
    obj[0] = label;
    tmpResult = tmp(require(5649) /* TableRowGroupTitle */.TableRowGroupTitle, obj);
  }
  obj[1] = tmpResult;
  return <View style={callback().spacer}>{null}</View>;
}
function SearchListSectionSubLabel(subLabel) {
  subLabel = subLabel.subLabel;
  let obj = { style: callback().subLabel, children: null };
  if (typeof subLabel === "string") {
    obj = { variant: "text-xs/normal", color: "text-muted", children: null };
    obj[2] = subLabel;
    let tmpResult = tmp(require(4281) /* Text */.Text, obj);
  } else {
    const _Array = Array;
    tmpResult = subLabel;
  }
  obj[1] = tmpResult;
  return <View style={callback().subLabel}>{null}</View>;
}
function getItemType(type) {
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (tmp.SECTION_FOOTER !== type) {
      if (tmp.SECTION_ROW !== type) {
        if (tmp.SETTING_SEARCH_RESULT !== type) {
          return tmp.SECTION_ROW_PLACEHOLDER === type ? type.type : undefined;
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
    let obj = { label: null };
    obj[0] = item.label;
    return <SearchListSectionLabel label={null} />;
  } else if (tmp.SECTION_FOOTER === type) {
    obj = { subLabel: null };
    obj[0] = item.label;
    return <SearchListSectionSubLabel subLabel={null} />;
  } else if (tmp.SETTING_SEARCH_RESULT === type) {
    return require(13797) /* GuildSelectDefaultIcon */.renderSettingSearchResultItem(item);
  } else if (tmp.SECTION_ROW === type) {
    return require(13797) /* GuildSelectDefaultIcon */.renderSettingItem(item);
  } else if (tmp.SECTION_ROW_PLACEHOLDER === type) {
    obj = require(13797) /* GuildSelectDefaultIcon */;
    return obj.renderSettingSearchResultPlaceholderItem(item);
  }
}
function keyExtractor(type) {
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (tmp.SECTION_FOOTER !== type) {
      if (tmp.SECTION_ROW !== type) {
        if (tmp.SETTING_SEARCH_RESULT !== type) {
          if (tmp.SECTION_ROW_PLACEHOLDER === type) {
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
let c3 = importAllResult;
let obj = { container: null, contentContainer: null, searchResultsHeader: null, spacer: null, subLabel: null };
obj = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
obj[0] = obj;
obj[1] = { paddingHorizontal: 16 };
obj[2] = { paddingBottom: 24 };
obj[3] = { paddingTop: 24 };
obj[4] = { marginTop: 8 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((node) => {
  node = node.node;
  let field;
  const tmp = callback();
  field = closure_6.useField("blocklist");
  const items = [field, node];
  const memo = importAllResult.useMemo(() => node(outer1_2[12]).toSettingListItems(node, field), items);
  const ref = importAllResult.useRef(null);
  let obj = node(14825);
  obj.useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
  obj = { style: tmp.container, children: null };
  obj = { ref, ListHeaderComponent: node.ListHeaderComponent, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, renderItem: null, data: null, getItemType: null };
  const obj1 = {};
  const merged = Object.assign(tmp.contentContainer);
  obj1.paddingBottom = field(1581)().bottom + field(712).space.PX_16;
  obj[2] = obj1;
  obj[3] = { right: 0.01 };
  obj[4] = keyExtractor;
  obj[5] = renderItem;
  obj[6] = memo;
  obj[7] = getItemType;
  obj[1] = jsx(node(7666).FlashList, { ref, ListHeaderComponent: node.ListHeaderComponent, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, renderItem: null, data: null, getItemType: null });
  return <View ref={ref} ListHeaderComponent={node.ListHeaderComponent} contentContainerStyle={null} scrollIndicatorInsets={null} keyExtractor={null} renderItem={null} data={null} getItemType={null} />;
});
const memoResult1 = importAllResult.memo((node) => {
  node = node.node;
  let importDefault;
  let settings;
  let isLoading;
  let placeholderCount;
  let state;
  let field;
  let memo;
  let memo1;
  let memo2;
  let tmp = memo2();
  importDefault = tmp;
  let obj = node(settings[15]);
  const settingSearchResults = obj.useSettingSearchResults();
  settings = settingSearchResults.settings;
  isLoading = settingSearchResults.isLoading;
  placeholderCount = settingSearchResults.placeholderCount;
  state = state.useState((query) => "" === query.query.trim());
  field = field.useField("blocklist");
  const items = [field, node];
  memo = isLoading.useMemo(() => node(settings[12]).toSettingListItems(node, field), items);
  const items1 = [settings, isLoading, placeholderCount];
  memo1 = isLoading.useMemo(() => node(settings[12]).getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount), items1);
  const items2 = [memo, memo1, state];
  memo2 = isLoading.useMemo(() => state ? memo : memo1, items2);
  const items3 = [tmp.searchResultsHeader, state];
  const items4 = [state, isLoading, memo2.length];
  const memo3 = isLoading.useMemo(() => {
    if (state) {
      let searchResultsHeader = {};
    } else {
      searchResultsHeader = _undefined.searchResultsHeader;
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
          tmp = memo1(_undefined(settings[16]), {});
        }
      }
    }
    return tmp;
  }, items4);
  obj = { keyboardShouldPersistTaps: "always", contentContainerStyle: null, ListHeaderComponentStyle: null, ListHeaderComponent: null, ListEmptyComponent: null, onScroll: null, scrollIndicatorInsets: null, keyExtractor: null, renderItem: null, data: null, getItemType: null };
  obj = {};
  const merged = Object.assign(tmp.contentContainer);
  obj.paddingBottom = importDefault(settings[11])().bottom + importDefault(settings[7]).space.PX_16;
  obj[1] = obj;
  obj[2] = memo3;
  obj[3] = importDefault(settings[17]);
  obj[4] = memo4;
  obj[5] = node(settings[18]).dismissGlobalKeyboard;
  obj[6] = { right: 0.01 };
  obj[7] = keyExtractor;
  obj[8] = renderItem;
  obj[9] = memo2;
  obj[10] = getItemType;
  return memo1(node(settings[14]).FlashList, obj);
});
const result = require("zustandStore").fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = memoResult1;