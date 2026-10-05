// === Module 15391: UserSettingsDebugLogs ===

// Module 15391 (UserSettingsDebugLogs)
import LogAggregator from "LogAggregator" /* 7 */;
import Storage2 from "Storage" /* 510 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import Text_Text from "Text/Text" /* 4886 */;
import InputTypes from "InputTypes" /* 6106 */;
import UserSettingsDebugLogsActionSheet from "UserSettingsDebugLogsActionSheet" /* 15392 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, num, tmp3;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let react = react_mod;
({ RefreshControl: hasOwnProperty, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, searchWrap: obj3, searchField: { flex: 1 }, shareButton: size, list: obj4, log: obj5, code: { fontFamily: Fonts.CODE_BOLD } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, height: InputTypes.InputHeights.MD, width: InputTypes.InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let closure_4;
  let closure_8;
  let first;
  let first1;
  let items;
  let items1;
  let obj4;
  let tmp12;
  let tmp14;
  let tmp8;
  const tmp = _require;
  let tmp2 = first;
  let obj = require("react");
  const cResult = obj.c(41);
  const tmp4 = closure_9();
  _require = tmp4;
  let obj2 = react;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp5 = first1;
  [r10022, importDefault] = first1(react.useState(0), 2);
  first1(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      importDefault((arg0) => arg0 + 1);
      const obj = ToastActionCreatorsDefault;
      obj.open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let Storage = tmp(tmp2[12]).Storage;
    let str = "oldest";
    let str2 = "debug-log-sort-order";
    let str3 = Storage.get("debug-log-sort-order", "oldest");
    if (str3 == null) {
      str3 = "oldest";
    }
    cResult[1] = str3;
    tmp8 = str3;
  } else {
    tmp8 = cResult[1];
  }
  const tmp5Result = tmp5(obj2.useState(tmp8), 2);
  first1 = tmp5Result[0];
  react = tmp5Result[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(arg0) {
      closure_4(arg0);
      const Storage = Storage2.Storage;
      const result = Storage.set("debug-log-sort-order", arg0);
    };
    cResult[2] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
  }
  let closure_5 = tmp12;
  if (cResult[3] !== ("newest" === first1)) {
    const tmpResult = tmp(tmp2[13]);
    const allForDebugPanel = tmpResult.getAllForDebugPanel(tmp13);
    cResult[3] = "newest" === first1;
    cResult[4] = allForDebugPanel;
    tmp14 = allForDebugPanel;
  } else {
    tmp14 = cResult[4];
  }
  let closure_6 = tmp14;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        const Storage = closure_0(first[12]).Storage;
        let str = Storage.get("debug-log-query", "");
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    cResult[5] = B;
  } else {
    class B {
      constructor() {
        const Storage = closure_0(first[12]).Storage;
        let str = Storage.get("debug-log-query", "");
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
  }
  const tmp5Result3 = tmp5(obj2.useState(B), 2);
  const first2 = tmp5Result3[0];
  const tmp19 = tmp5Result3[1];
  [r10082, closure_8] = tmp5(obj2.useState(tmp14), 2);
  tmp5(obj2.useState(tmp14), 2);
  if (cResult[6] === tmp14) {
    class B {
      constructor() {
        const Storage = closure_0(first[12]).Storage;
        let str = Storage.get("debug-log-query", "");
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    const effect = obj2.useEffect(T, items1);
    if (cResult[10] === tmp4.code) {
      let tmp24;
      class B {
        constructor() {
          const Storage = closure_0(first[12]).Storage;
          let str = Storage.get("debug-log-query", "");
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
      const _Symbol = Symbol;
      const wrap = tmp4.wrap;
      class R {
        constructor(item) {
          let items;
          let items1;
          let items2;
          item = item.item;
          const index = item.index;
          const obj = { style: closure_0.log, children: items1 };
          const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
          const Text = Text_Text.Text;
          items = [, , ];
          const date = new Date(item.time);
          items[0] = date.toISOString();
          items[1] = " ";
          let str = item.timing;
          if (str == null) {
            str = "";
          }
          items[2] = str;
          items1 = [metroImportDefault(Text, obj2), ];
          const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
          const Text2 = Text_Text.Text;
          const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
          const Text3 = Text_Text.Text;
          items2 = [metroImportAll(Text3, obj4), item.message];
          items1[1] = metroImportDefault(Text2, obj3);
          return metroImportDefault(metroRequire, obj, index);
        }
      }
      const searchField = tmp4.searchField;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            const Storage = closure_0(first[12]).Storage;
            let str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        const stringResult = obj4.string(tmp(tmp2[15]).t["+1H47t"]);
        class R {
          constructor(item) {
            let items;
            let items1;
            let items2;
            item = item.item;
            const index = item.index;
            const obj = { style: closure_0.log, children: items1 };
            const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
            const Text = Text_Text.Text;
            items = [, , ];
            const date = new Date(item.time);
            items[0] = date.toISOString();
            items[1] = " ";
            let str = item.timing;
            if (str == null) {
              str = "";
            }
            items[2] = str;
            items1 = [metroImportDefault(Text, obj2), ];
            const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
            const Text2 = Text_Text.Text;
            const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
            const Text3 = Text_Text.Text;
            items2 = [metroImportAll(Text3, obj4), item.message];
            items1[1] = metroImportDefault(Text2, obj3);
            return metroImportDefault(metroRequire, obj, index);
          }
        }
        cResult[13] = stringResult;
        tmp24 = stringResult;
      } else {
        class B {
          constructor() {
            const Storage = closure_0(first[12]).Storage;
            let str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
      }
      if (cResult[14] !== first1) {
        class B {
          constructor() {
            const Storage = closure_0(first[12]).Storage;
            let str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        tmp27[0] = tmp24;
        tmp27[1] = function onPress() {
          let obj = UserSettingsDebugLogsActionSheet;
          const obj2 = {
            sortOrder: first1,
            onRefresh() {
              closure_1_2();
              const obj = require("ActionSheetActionCreators");
              obj.hideActionSheet();
            },
            onSortOrderChanged(arg0) {
              closure_1_5(arg0);
              const obj = require("ActionSheetActionCreators");
              obj.hideActionSheet();
            }
          };
          const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj2);
        };
        class R {
          constructor(item) {
            let items;
            let items1;
            let items2;
            item = item.item;
            const index = item.index;
            const obj = { style: closure_0.log, children: items1 };
            const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
            const Text = Text_Text.Text;
            items = [, , ];
            const date = new Date(item.time);
            items[0] = date.toISOString();
            items[1] = " ";
            let str = item.timing;
            if (str == null) {
              str = "";
            }
            items[2] = str;
            items1 = [metroImportDefault(Text, obj2), ];
            const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
            const Text2 = Text_Text.Text;
            const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
            const Text3 = Text_Text.Text;
            items2 = [metroImportAll(Text3, obj4), item.message];
            items1[1] = metroImportDefault(Text2, obj3);
            return metroImportDefault(metroRequire, obj, index);
          }
        }
        cResult[14] = first1;
        cResult[15] = tmp27;
      } else {
        class B {
          constructor() {
            const Storage = closure_0(first[12]).Storage;
            let str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
      }
      if (cResult[16] === first2) {
        class B {
          constructor() {
            const Storage = closure_0(first[12]).Storage;
            let str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        if (cResult[19] === tmp4.searchField) {
          class B {
            constructor() {
              const Storage = closure_0(first[12]).Storage;
              let str = Storage.get("debug-log-query", "");
              if (str == null) {
                str = "";
              }
              return str;
            }
          }
          const _Symbol2 = Symbol;
          class R {
            constructor(item) {
              let items;
              let items1;
              let items2;
              item = item.item;
              const index = item.index;
              const obj = { style: closure_0.log, children: items1 };
              const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
              const Text = Text_Text.Text;
              items = [, , ];
              const date = new Date(item.time);
              items[0] = date.toISOString();
              items[1] = " ";
              let str = item.timing;
              if (str == null) {
                str = "";
              }
              items[2] = str;
              items1 = [metroImportDefault(Text, obj2), ];
              const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
              const Text2 = Text_Text.Text;
              const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
              const Text3 = Text_Text.Text;
              items2 = [metroImportAll(Text3, obj4), item.message];
              items1[1] = metroImportDefault(Text2, obj3);
              return metroImportDefault(metroRequire, obj, index);
            }
          }
          if (cResult[23] !== tmp4.shareButton) {
            class B {
              constructor() {
                const Storage = closure_0(first[12]).Storage;
                let str = Storage.get("debug-log-query", "");
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
            let obj3 = { style: null, children: tmp35 };
            class R {
              constructor(item) {
                let items;
                let items1;
                let items2;
                item = item.item;
                const index = item.index;
                const obj = { style: closure_0.log, children: items1 };
                const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
                const Text = Text_Text.Text;
                items = [, , ];
                const date = new Date(item.time);
                items[0] = date.toISOString();
                items[1] = " ";
                let str = item.timing;
                if (str == null) {
                  str = "";
                }
                items[2] = str;
                items1 = [metroImportDefault(Text, obj2), ];
                const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
                const Text2 = Text_Text.Text;
                const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
                const Text3 = Text_Text.Text;
                items2 = [metroImportAll(Text3, obj4), item.message];
                items1[1] = metroImportDefault(Text2, obj3);
                return metroImportDefault(metroRequire, obj, index);
              }
            }
            cResult[23] = tmp4.shareButton;
            cResult[24] = closure_8(closure_6, obj3);
            const tmp38 = closure_8(closure_6, obj3);
          } else {
            class B {
              constructor() {
                const Storage = closure_0(first[12]).Storage;
                let str = Storage.get("debug-log-query", "");
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
          }
          if (cResult[25] === tmp4.searchWrap) {
            class B {
              constructor() {
                const Storage = closure_0(first[12]).Storage;
                let str = Storage.get("debug-log-query", "");
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
          }
          const obj5 = { style: tmp23, children: items };
          items = [tmp31, tmp36];
          cResult[25] = tmp4.searchWrap;
          cResult[26] = tmp31;
          cResult[27] = tmp36;
          cResult[28] = first2(closure_6, obj5);
          const tmp42 = first2(closure_6, obj5);
        }
        class R {
          constructor(item) {
            let items;
            let items1;
            let items2;
            item = item.item;
            const index = item.index;
            const obj = { style: closure_0.log, children: items1 };
            const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
            const Text = Text_Text.Text;
            items = [, , ];
            const date = new Date(item.time);
            items[0] = date.toISOString();
            items[1] = " ";
            let str = item.timing;
            if (str == null) {
              str = "";
            }
            items[2] = str;
            items1 = [metroImportDefault(Text, obj2), ];
            const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
            const Text2 = Text_Text.Text;
            const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
            const Text3 = Text_Text.Text;
            items2 = [metroImportAll(Text3, obj4), item.message];
            items1[1] = metroImportDefault(Text2, obj3);
            return metroImportDefault(metroRequire, obj, index);
          }
        }
        const obj6 = { style: searchField, children: tmp28 };
        cResult[19] = tmp4.searchField;
        cResult[20] = tmp28;
        cResult[21] = closure_8(closure_6, obj6);
        const tmp33 = closure_8(closure_6, obj6);
      }
      const obj7 = { size: "md", placeholder: "Filter (regex)", onChange: tmp19, defaultValue: first2, trailingIcon: tmp(tmp2[19]).FiltersHorizontalIcon, trailingPressableProps: tmp27 };
      const SearchField = tmp(tmp2[18]).SearchField;
      cResult[16] = first2;
      cResult[17] = tmp27;
      cResult[18] = closure_8(SearchField, obj7);
      const tmp30 = closure_8(SearchField, obj7);
    }
    class R {
      constructor(item) {
        let items;
        let items1;
        let items2;
        item = item.item;
        const index = item.index;
        const obj = { style: closure_0.log, children: items1 };
        const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
        const Text = Text_Text.Text;
        items = [, , ];
        const date = new Date(item.time);
        items[0] = date.toISOString();
        items[1] = " ";
        let str = item.timing;
        if (str == null) {
          str = "";
        }
        items[2] = str;
        items1 = [metroImportDefault(Text, obj2), ];
        const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
        const Text2 = Text_Text.Text;
        const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
        const Text3 = Text_Text.Text;
        items2 = [metroImportAll(Text3, obj4), item.message];
        items1[1] = metroImportDefault(Text2, obj3);
        return metroImportDefault(metroRequire, obj, index);
      }
    }
    cResult[10] = tmp4.code;
    cResult[11] = tmp4.log;
    cResult[12] = R;
  }
  class T {
    constructor() {
      if ("" !== closure_7) {
        tmp8 = globalThis;
        _setTimeout = setTimeout;
        num = 300;
        closure_0 = setTimeout(function() {
          try {
            const _RegExp = RegExp;
            const self = this;
            let str = "i";
            const self2 = this;
            const regExp = new RegExp(first2, "i");
            closure_1_8(closure_1_6.filter((category) => {
              const str = category.category;
              let tmp2 = null != str.match(regExp);
              if (!tmp2) {
                const str2 = category.message;
                tmp2 = null != str2.match(regExp);
              }
              return tmp2;
            }));
            const Storage = closure_0(first[12]).Storage;
            let str2 = "debug-log-query";
            const result = Storage.set("debug-log-query", first2);
          } catch (err) {
          }
        }, 300);
        return () => clearTimeout(closure_0);
      } else {
        tmp2 = closure_8;
        tmp3 = closure_6;
        tmp4 = closure_8(closure_6);
        tmp5 = closure_0;
        tmp6 = closure_2;
        Storage = closure_0(closure_2[12]).Storage;
        str = "debug-log-query";
        result = Storage.set("debug-log-query", tmp);
        return;
      }
    }
  }
  items1 = [tmp14, first2];
  cResult[6] = tmp14;
  cResult[7] = first2;
  cResult[8] = T;
  cResult[9] = items1;
}) : (() => {
  let SearchField;
  let closure_0;
  let closure_4;
  let intl;
  let items3;
  let items4;
  let obj5;
  let obj6;
  let obj9;
  let onRefresh;
  let sortOrder;
  let tmp6;
  const tmp = closure_9();
  _require = tmp;
  let obj = react;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp5 = sortOrder(react.useState(0), 2);
  [tmp6, importDefault] = tmp5;
  onRefresh = react.useCallback(() => {
    importDefault((arg0) => arg0 + 1);
    const obj = ToastActionCreatorsDefault;
    obj.open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
  }, []);
  const tmp8 = _require;
  const useState = react.useState;
  let Storage = require("Storage").Storage;
  let str = Storage.get("debug-log-sort-order", "oldest");
  if (str == null) {
    str = "oldest";
  }
  const tmp4Result = sortOrder(useState(str), 2);
  sortOrder = tmp4Result[0];
  react = tmp4Result[1];
  let closure_5 = obj.useCallback((arg0) => {
    closure_4(arg0);
    const Storage = Storage2.Storage;
    const result = Storage.set("debug-log-sort-order", arg0);
  }, []);
  let items = [sortOrder, tmp6];
  const memo = obj.useMemo(() => {
    const obj = LogAggregator;
    return obj.getAllForDebugPanel("newest" === first);
  }, items);
  const tmp4Result3 = sortOrder(obj.useState(() => {
    const Storage = closure_0(callback[12]).Storage;
    let str = Storage.get("debug-log-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  const first1 = tmp4Result3[0];
  const tmp14 = tmp4Result3[1];
  const tmp4Result4 = sortOrder(obj.useState(memo), 2);
  let closure_8 = tmp4Result4[1];
  let items1 = [memo, first1];
  const first2 = tmp4Result4[0];
  const effect = obj.useEffect(() => {
    let timeout;
    if ("" !== first1) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(function() {
        try {
          const _RegExp = RegExp;
          const self = this;
          let str = "i";
          const self2 = this;
          const regExp = new RegExp(first1, "i");
          closure_1_8(memo.filter((category) => {
            const str = category.category;
            let tmp2 = null != str.match(regExp);
            if (!tmp2) {
              const str2 = category.message;
              tmp2 = null != str2.match(regExp);
            }
            return tmp2;
          }));
          const Storage = closure_0(callback[12]).Storage;
          let str2 = "debug-log-query";
          const result = Storage.set("debug-log-query", first1);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      closure_8(memo);
      let Storage = timeout(callback[12]).Storage;
      let str = "debug-log-query";
      let result = Storage.set("debug-log-query", tmp);
    }
  }, items1);
  let items2 = [tmp];
  let obj2 = { style: tmp.wrap, children: items4 };
  let obj3 = { style: tmp.searchWrap, children: items3 };
  let obj4 = { style: tmp.searchField, children: closure_8(SearchField, obj5) };
  const callback1 = obj.useCallback((item) => {
    let items;
    let items1;
    let items2;
    item = item.item;
    const index = item.index;
    const obj = { style: closure_0.log, children: items1 };
    const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: items };
    const Text = Text_Text.Text;
    items = [, , ];
    const date = new Date(item.time);
    items[0] = date.toISOString();
    items[1] = " ";
    let str = item.timing;
    if (str == null) {
      str = "";
    }
    items[2] = str;
    items1 = [metroImportDefault(Text, obj2), ];
    const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: items2 };
    const Text2 = Text_Text.Text;
    const obj4 = { style: closure_0.code, variant: "text-sm/normal", color: "text-brand", children: "[" + item.category + "]: " };
    const Text3 = Text_Text.Text;
    items2 = [metroImportAll(Text3, obj4), item.message];
    items1[1] = metroImportDefault(Text2, obj3);
    return metroImportDefault(metroRequire, obj, index);
  }, items2);
  obj5 = { size: "md", placeholder: "Filter (regex)", onChange: tmp14, defaultValue: first1, trailingIcon: tmp8(onRefresh[19]).FiltersHorizontalIcon, trailingPressableProps: obj6 };
  SearchField = tmp8(tmp3[18]).SearchField;
  obj6 = {
    accessibilityLabel: intl.string(tmp8(onRefresh[15]).t["+1H47t"]),
    onPress() {
      let obj = UserSettingsDebugLogsActionSheet;
      const obj2 = {
        sortOrder,
        onRefresh() {
          onRefresh();
          const obj = require("ActionSheetActionCreators");
          obj.hideActionSheet();
        },
        onSortOrderChanged(arg0) {
          closure_1_5(arg0);
          const obj = require("ActionSheetActionCreators");
          obj.hideActionSheet();
        }
      };
      const result = obj.openUserSettingsDebugLogsFiltersActionSheet(obj2);
    }
  };
  intl = tmp8(tmp3[15]).intl;
  items3 = [closure_8(memo, obj4), ];
  const obj7 = { style: tmp.shareButton, children: closure_8(require("ShareLogsButton"), {}) };
  items3[1] = closure_8(memo, obj7);
  items4 = [first1(memo, obj3), ];
  const obj8 = { contentContainerStyle: obj9, data: first2, renderItem: callback1, refreshControl: closure_8(closure_5, { refreshing: false, onRefresh }) };
  obj9 = { paddingBottom: bottom + require("native").space.PX_16 };
  const FlashList = tmp8(tmp3[21]).FlashList;
  const merged = Object.assign(tmp.list);
  items4[1] = closure_8(FlashList, obj8);
  return first1(memo, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default tmp5;