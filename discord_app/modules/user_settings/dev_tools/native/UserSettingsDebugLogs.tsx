// === Module 14611: UserSettingsDebugLogs ===

// Module 14611 (UserSettingsDebugLogs)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "ACTION_SHEET_HEIGHT_HALF";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
let require = arg1;
({ RefreshControl: c5, View: closure_6 } = get_ActivityIndicator);
({ jsxs: error, jsx: metroImportAll } = jsxProd);
createCacheKey = { wrap: null, searchWrap: null, searchField: null, shareButton: null, list: null, log: null, code: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flex: 1 };
let obj1 = { padding: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
let obj2 = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { paddingHorizontal: require("Themes").space.PX_16 };
let obj3 = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[5] = { paddingBottom: require("Themes").space.PX_16 };
createCacheKey[6] = { fontFamily: require("ME").Fonts.CODE_BOLD };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { paddingBottom: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default function UserSettingsDebugLogs() {
  let importDefault;
  let tmp6;
  let tmp = createCacheKey();
  const require = tmp;
  let obj = React;
  [tmp6, importDefault] = first(React.useState(0), 2);
  let callback = React.useCallback(() => {
    callback((arg0) => arg0 + 1);
    outer1_1(callback[9]).open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
  }, []);
  let Storage = require(callback[10]).Storage;
  let str = Storage.get("debug-log-sort-order", "oldest");
  if (str == null) {
    str = "oldest";
  }
  let tmp4Result = tmp4(React.useState(str), 2);
  first = tmp4Result[0];
  React = tmp4Result[1];
  let closure_5 = obj.useCallback((arg0) => {
    const Storage = callback2(arg0)(callback[10]).Storage;
    const result = Storage.set("debug-log-sort-order", arg0);
  }, []);
  let items = [first, tmp6];
  const memo = obj.useMemo(() => tmp(callback[11]).getAllForDebugPanel("newest" === first), items);
  tmp4Result = tmp4(obj.useState(() => {
    const Storage = tmp(callback[10]).Storage;
    let str = Storage.get("debug-log-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  const first1 = tmp4Result[0];
  const tmp4Result1 = first(obj.useState(memo), 2);
  callback = tmp4Result1[1];
  let items1 = [memo, first1];
  const effect = obj.useEffect(() => {
    if ("" !== first1) {
      const _setTimeout = setTimeout;
      const tmp = setTimeout(() => {
        try {
          const _RegExp = RegExp;
          const regExp = new RegExp(closure_7, "i");
          callback2(closure_6.filter((category) => {
            let tmp2 = null != category.category.match(regExp);
            if (!tmp2) {
              tmp2 = null != category.message.match(regExp);
              const str2 = category.message;
            }
            return tmp2;
          }));
          const Storage = callback(outer1_2[10]).Storage;
          const result = Storage.set("debug-log-query", closure_7);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      callback3(memo);
      let Storage = tmp(callback[10]).Storage;
      let result = Storage.set("debug-log-query", tmp);
    }
  }, items1);
  let items2 = [tmp];
  obj = { style: tmp.wrap, children: null };
  obj = { style: tmp.searchWrap, children: null };
  let obj1 = { style: tmp.searchField, children: null };
  const callback1 = obj.useCallback((item) => {
    item = item.item;
    let obj = { style: tmp.log, children: null };
    obj = { style: tmp.code, variant: "text-xs/normal", color: "text-muted", children: null };
    const items = [new Date(item.time).toISOString(), " ", ];
    let str = item.timing;
    if (str == null) {
      str = "";
    }
    items[2] = str;
    obj[3] = items;
    const items1 = [first1(first1(callback[12]).Text, obj), ];
    obj = { style: tmp3.code, variant: "text-sm/normal", children: null };
    const obj1 = { style: first1.code, variant: "text-sm/normal", color: "text-brand", children: null };
    obj1[3] = "[" + item.category + "]: ";
    const items2 = [callback3(first1(callback[12]).Text, obj1), item.message];
    obj[2] = items2;
    items1[1] = first1(first1(callback[12]).Text, obj);
    obj[1] = items1;
    return first1(memo, obj, item.index);
  }, items2);
  const obj2 = { size: "md", placeholder: "Filter (regex)", onChange: tmp4Result[1], defaultValue: first1, trailingIcon: null, trailingPressableProps: null };
  obj2[4] = require(callback[14]).FiltersHorizontalIcon;
  const obj3 = { accessibilityLabel: null, onPress: null };
  const intl = tmp8(tmp3[15]).intl;
  obj3[0] = intl.string(require(callback[15]).t["+1H47t"]);
  obj3[1] = function onPress() {
    let obj = tmp(callback[16]);
    obj = {
      sortOrder: first,
      onRefresh() {
        callback();
        outer1_1(outer1_2[17]).hideActionSheet();
      },
      onSortOrderChanged(arg0) {
        callback2(arg0);
        outer1_1(outer1_2[17]).hideActionSheet();
      }
    };
    const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj);
  };
  obj2[5] = obj3;
  obj1[1] = callback(require(callback[13]).SearchField, obj2);
  const items3 = [callback(memo, obj1), ];
  const tmp5 = first(React.useState(0), 2);
  items3[1] = callback(memo, { style: tmp.shareButton, children: callback(importDefault(callback[18]), {}) });
  obj[1] = items3;
  const items4 = [first1(memo, obj), ];
  const obj5 = { contentContainerStyle: null, data: null, renderItem: null, refreshControl: null };
  const obj6 = {};
  const merged = Object.assign(tmp.list);
  obj6.paddingBottom = importDefault(callback[8])().bottom + importDefault(callback[6]).space.PX_16;
  obj5[0] = obj6;
  obj5[1] = tmp4Result1[0];
  obj5[2] = callback1;
  obj5[3] = callback(closure_5, { refreshing: false, onRefresh: callback });
  items4[1] = callback(require(callback[19]).FlashList, obj5);
  obj[1] = items4;
  return first1(memo, obj);
};