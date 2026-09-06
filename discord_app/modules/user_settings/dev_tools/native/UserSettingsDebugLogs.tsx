// discord_app/modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx
import LogAggregator from "../../../debug/LogAggregator.tsx";
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import UserSettingsDebugLogsActionSheet from "UserSettingsDebugLogsActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ RefreshControl: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  wrap: null,
  searchWrap: null,
  searchField: null,
  shareButton: null,
  list: null,
  log: null,
  code: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrap = createStyles;
createStyles.searchWrap = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
createStyles.searchField = { flex: 1 };
let size = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  marginLeft: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  height: fn(6622).InputHeights.MD,
  width: fn(6622).InputHeights.MD,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.shareButton = size;
let obj1 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
createStyles.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.log = { paddingBottom: nativeDefault.space.PX_16 };
createStyles.code = { fontFamily: fn(1074).Fonts.CODE_BOLD };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default function UserSettingsDebugLogs() {
  const tmp = closure_9();
  _require = tmp;
  let obj = noop;
  [tmp6, importDefault] = sortOrder(noop.useState(0), 2);
  const onRefresh = noop.useCallback(() => {
    closure_1_1((arg0) => arg0 + 1);
    ToastActionCreatorsDefault.open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
  }, []);
  let Storage = require("Storage").Storage;
  let str = Storage.get("debug-log-sort-order", "oldest");
  if (str == null) {
    str = "oldest";
  }
  let tmp4Result = tmp4(noop.useState(str), 2);
  sortOrder = tmp4Result[0];
  noop = tmp4Result[1];
  closure_5 = obj.useCallback((arg0) => {
    closure_4(arg0);
    const Storage = Storage2.Storage;
    const result = Storage.set("debug-log-sort-order", arg0);
  }, []);
  let items = [sortOrder, tmp6];
  const memo = obj.useMemo(() => LogAggregator.getAllForDebugPanel("newest" === first), items);
  tmp4Result = tmp4(
    obj.useState(() => {
      const Storage = closure_0(callback[10]).Storage;
      let str = Storage.get("debug-log-query", "");
      if (str == null) {
        str = "";
      }
      return str;
    }),
    2,
  );
  const first1 = tmp4Result[0];
  const tmp4Result1 = sortOrder(obj.useState(memo), 2);
  closure_8 = tmp4Result1[1];
  let items1 = [memo, first1];
  const effect = obj.useEffect(() => {
    if ("" !== first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        try {
          const _RegExp = RegExp;
          const regExp = new RegExp(first1, "i");
          closure_1_8(
            memo.filter((category) => {
              let tmp2 = null != category.category.match(regExp);
              if (!tmp2) {
                tmp2 = null != category.message.match(regExp);
              }
              return tmp2;
            }),
          );
          const Storage = closure_0(callback[10]).Storage;
          const result = Storage.set("debug-log-query", first1);
        } catch (err) {}
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      closure_8(memo);
      let Storage = timeout(callback[10]).Storage;
      let result = Storage.set("debug-log-query", tmp);
    }
  }, items1);
  let items2 = [tmp];
  obj = { style: tmp.wrap, children: null };
  obj = { style: tmp.searchWrap, children: null };
  const obj1 = { style: tmp.searchField, children: null };
  const callback1 = obj.useCallback((item) => {
    item = item.item;
    let obj = { style: closure_0.log, children: null };
    obj = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
    const items = [new Date(item.time).toISOString(), " "];
    let str = item.timing;
    if (str == null) {
      str = "";
    }
    items[2] = str;
    obj.children = items;
    const items1 = [React5(Text_Text.Text, obj)];
    obj = { style: closure_0.code, variant: "text-sm/normal", children: null };
    const date = new Date(item.time);
    const items2 = [
      React6(Text_Text.Text, {
        style: closure_0.code,
        variant: "text-sm/normal",
        color: "text-brand",
        children: "[" + item.category + "]: ",
      }),
      item.message,
    ];
    obj.children = items2;
    items1[1] = React5(Text_Text.Text, obj);
    obj.children = items1;
    return React5(timestampProducer, obj, item.index);
  }, items2);
  const obj2 = {
    size: "md",
    placeholder: "Filter (regex)",
    onChange: tmp4Result[1],
    defaultValue: first1,
    trailingIcon: require("FiltersHorizontalIcon").FiltersHorizontalIcon,
    trailingPressableProps: null,
  };
  const obj3 = { accessibilityLabel: null, onPress: null };
  const intl = tmp8(tmp3[15]).intl;
  obj3.accessibilityLabel = intl.string(require("util").t["+1H47t"]);
  obj3.onPress = function onPress() {
    const obj = {
      sortOrder,
      onRefresh() {
        onRefresh();
        require("ActionSheetActionCreators").hideActionSheet();
      },
      onSortOrderChanged(arg0) {
        closure_1_5(arg0);
        require("ActionSheetActionCreators").hideActionSheet();
      },
    };
    const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj);
  };
  obj2.trailingPressableProps = obj3;
  obj1.children = closure_8(require("SearchField").SearchField, obj2);
  const items3 = [closure_8(memo, obj1)];
  const tmp5 = sortOrder(noop.useState(0), 2);
  items3[1] = closure_8(memo, { style: tmp.shareButton, children: closure_8(require("ShareLogsButton"), {}) });
  obj.children = items3;
  const items4 = [first1(memo, obj)];
  const obj5 = { contentContainerStyle: null, data: null, renderItem: null, refreshControl: null };
  const obj6 = {};
  const merged = Object.assign(tmp.list);
  obj6.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
  obj5.contentContainerStyle = obj6;
  obj5.data = tmp4Result1[0];
  obj5.renderItem = callback1;
  obj5.refreshControl = closure_8(closure_5, { refreshing: false, onRefresh });
  items4[1] = closure_8(require("../../../../../discord_common/js/packages/flash-list/index.js").FlashList, obj5);
  obj.children = items4;
  return first1(memo, obj);
}
