// discord_app/modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx
import LogAggregator from "../../../debug/LogAggregator.tsx";
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import UserSettingsDebugLogsActionSheet from "UserSettingsDebugLogsActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ RefreshControl: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  searchWrap: null,
  searchField: null,
  shareButton: null,
  list: null,
  log: null,
  code: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.searchWrap = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
obj2.searchField = { flex: 1 };
let size = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  marginLeft: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  height: fn(6113).InputHeights.MD,
  width: fn(6113).InputHeights.MD,
  justifyContent: "center",
  alignItems: "center",
};
obj2.shareButton = size;
let obj4 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
obj2.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.log = { paddingBottom: nativeDefault.space.PX_16 };
obj2.code = { fontFamily: fn(1085).Fonts.CODE_BOLD };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { paddingBottom: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(41);
      const tmp4 = closure_9();
      _require = tmp4;
      const bottom = require("useSafeAreaInsets")().bottom;
      let obj = require("c");
      [r10022, importDefault] = first1(noop.useState(0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          closure_1_1((arg0) => arg0 + 1);
          ToastActionCreatorsDefault.open({ content: "Debug logs refreshed", key: "debug-logs-refreshed" });
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let Storage = tmp(tmp2[12]).Storage;
        let str3 = Storage.get("debug-log-sort-order", "oldest");
        if (str3 == null) {
          str3 = "oldest";
        }
        cResult[1] = str3;
        let tmp8 = str3;
      } else {
        tmp8 = cResult[1];
      }
      const tmp5Result = first1(noop.useState(tmp8), 2);
      first1 = tmp5Result[0];
      noop = tmp5Result[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v(arg0) {
          closure_4(arg0);
          const Storage = Storage2.Storage;
          const result = Storage.set("debug-log-sort-order", arg0);
        };
        cResult[2] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[2];
      }
      closure_5 = tmp12;
      if (cResult[3] !== ("newest" === first1)) {
        const allForDebugPanel = tmp(tmp2[13]).getAllForDebugPanel(tmp13);
        cResult[3] = tmp13;
        cResult[4] = allForDebugPanel;
        let tmp14 = allForDebugPanel;
        const tmpResult = tmp(tmp2[13]);
      } else {
        tmp14 = cResult[4];
      }
      closure_6 = tmp14;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            Storage = closure_0(closure_2[12]).Storage;
            str = Storage.get("debug-log-query", "");
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
            Storage = closure_0(closure_2[12]).Storage;
            str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
      }
      const tmp5Result3 = first1(noop.useState(B), 2);
      const first2 = tmp5Result3[0];
      const tmp6 = first1(noop.useState(0), 2);
      [r10082, closure_8] = first1(noop.useState(tmp14), 2);
      if (cResult[6] === tmp14) {
        class B {
          constructor() {
            Storage = closure_0(closure_2[12]).Storage;
            str = Storage.get("debug-log-query", "");
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        const effect = obj2.useEffect(T, items1);
        if (cResult[10] === tmp4.code) {
          class B {
            constructor() {
              Storage = closure_0(closure_2[12]).Storage;
              str = Storage.get("debug-log-query", "");
              if (str == null) {
                str = "";
              }
              return str;
            }
          }
          const _Symbol = Symbol;
          const wrap = tmp4.wrap;
          class R {
            constructor(arg0) {
              item = arg0.item;
              tmp = jsxs;
              obj = { style: closure_0.log, children: null };
              tmp3 = closure_0;
              tmp4 = closure_0;
              tmp5 = closure_2;
              tmp2 = View;
              obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
              date = new Date(item.time);
              items = [, ,];
              items[0] = date.toISOString();
              items[1] = " ";
              str = item.timing;
              if (str == null) {
                str = "";
              }
              items[2] = str;
              obj1.children = items;
              items1 = [,];
              items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
              obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
              obj7 = {
                style: tmp3.code,
                variant: "text-sm/normal",
                color: "text-brand",
                children: "[" + item.category + "]: ",
              };
              items2 = [,];
              items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
              items2[1] = item.message;
              obj6.children = items2;
              items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
              obj.children = items1;
              return tmp(tmp2, obj, arg0.index);
            }
          }
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                Storage = closure_0(closure_2[12]).Storage;
                str = Storage.get("debug-log-query", "");
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
            const stringResult = obj4.string(tmp(tmp2[15]).t["+1H47t"]);
            class R {
              constructor(arg0) {
                item = arg0.item;
                tmp = jsxs;
                obj = { style: closure_0.log, children: null };
                tmp3 = closure_0;
                tmp4 = closure_0;
                tmp5 = closure_2;
                tmp2 = View;
                obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
                date = new Date(item.time);
                items = [, ,];
                items[0] = date.toISOString();
                items[1] = " ";
                str = item.timing;
                if (str == null) {
                  str = "";
                }
                items[2] = str;
                obj1.children = items;
                items1 = [,];
                items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
                obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
                obj7 = {
                  style: tmp3.code,
                  variant: "text-sm/normal",
                  color: "text-brand",
                  children: "[" + item.category + "]: ",
                };
                items2 = [,];
                items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
                items2[1] = item.message;
                obj6.children = items2;
                items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
                obj.children = items1;
                return tmp(tmp2, obj, arg0.index);
              }
            }
            cResult[13] = stringResult;
            const tmp23 = stringResult;
          } else {
            class B {
              constructor() {
                Storage = closure_0(closure_2[12]).Storage;
                str = Storage.get("debug-log-query", "");
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
                Storage = closure_0(closure_2[12]).Storage;
                str = Storage.get("debug-log-query", "");
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
            tmp26[0] = tmp23;
            tmp26[1] = function onPress() {
              const result = UserSettingsDebugLogsActionSheet.openUserSettingsDebugLogsFiltersActionSheet({
                sortOrder: first1,
                onRefresh() {
                  closure_1_2();
                  require("ActionSheetActionCreators").hideActionSheet();
                },
                onSortOrderChanged(arg0) {
                  closure_1_5(arg0);
                  require("ActionSheetActionCreators").hideActionSheet();
                },
              });
            };
            class R {
              constructor(arg0) {
                item = arg0.item;
                tmp = jsxs;
                obj = { style: closure_0.log, children: null };
                tmp3 = closure_0;
                tmp4 = closure_0;
                tmp5 = closure_2;
                tmp2 = View;
                obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
                date = new Date(item.time);
                items = [, ,];
                items[0] = date.toISOString();
                items[1] = " ";
                str = item.timing;
                if (str == null) {
                  str = "";
                }
                items[2] = str;
                obj1.children = items;
                items1 = [,];
                items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
                obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
                obj7 = {
                  style: tmp3.code,
                  variant: "text-sm/normal",
                  color: "text-brand",
                  children: "[" + item.category + "]: ",
                };
                items2 = [,];
                items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
                items2[1] = item.message;
                obj6.children = items2;
                items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
                obj.children = items1;
                return tmp(tmp2, obj, arg0.index);
              }
            }
            cResult[14] = first1;
            cResult[15] = tmp26;
          } else {
            class B {
              constructor() {
                Storage = closure_0(closure_2[12]).Storage;
                str = Storage.get("debug-log-query", "");
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
                Storage = closure_0(closure_2[12]).Storage;
                str = Storage.get("debug-log-query", "");
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
            if (cResult[19] === tmp4.searchField) {
              class B {
                constructor() {
                  Storage = closure_0(closure_2[12]).Storage;
                  str = Storage.get("debug-log-query", "");
                  if (str == null) {
                    str = "";
                  }
                  return str;
                }
              }
              const _Symbol2 = Symbol;
              class R {
                constructor(arg0) {
                  item = arg0.item;
                  tmp = jsxs;
                  obj = { style: closure_0.log, children: null };
                  tmp3 = closure_0;
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  tmp2 = View;
                  obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
                  date = new Date(item.time);
                  items = [, ,];
                  items[0] = date.toISOString();
                  items[1] = " ";
                  str = item.timing;
                  if (str == null) {
                    str = "";
                  }
                  items[2] = str;
                  obj1.children = items;
                  items1 = [,];
                  items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
                  obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
                  obj7 = {
                    style: tmp3.code,
                    variant: "text-sm/normal",
                    color: "text-brand",
                    children: "[" + item.category + "]: ",
                  };
                  items2 = [,];
                  items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
                  items2[1] = item.message;
                  obj6.children = items2;
                  items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
                  obj.children = items1;
                  return tmp(tmp2, obj, arg0.index);
                }
              }
              if (cResult[23] !== tmp4.shareButton) {
                class B {
                  constructor() {
                    Storage = closure_0(closure_2[12]).Storage;
                    str = Storage.get("debug-log-query", "");
                    if (str == null) {
                      str = "";
                    }
                    return str;
                  }
                }
                let obj3 = { style: null, children: null };
                class R {
                  constructor(arg0) {
                    item = arg0.item;
                    tmp = jsxs;
                    obj = { style: closure_0.log, children: null };
                    tmp3 = closure_0;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    tmp2 = View;
                    obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
                    date = new Date(item.time);
                    items = [, ,];
                    items[0] = date.toISOString();
                    items[1] = " ";
                    str = item.timing;
                    if (str == null) {
                      str = "";
                    }
                    items[2] = str;
                    obj1.children = items;
                    items1 = [,];
                    items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
                    obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
                    obj7 = {
                      style: tmp3.code,
                      variant: "text-sm/normal",
                      color: "text-brand",
                      children: "[" + item.category + "]: ",
                    };
                    items2 = [,];
                    items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
                    items2[1] = item.message;
                    obj6.children = items2;
                    items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
                    obj.children = items1;
                    return tmp(tmp2, obj, arg0.index);
                  }
                }
                obj3.children = tmp34;
                const tmp37 = closure_8(closure_6, obj3);
                cResult[23] = tmp4.shareButton;
                cResult[24] = tmp37;
              } else {
                class B {
                  constructor() {
                    Storage = closure_0(closure_2[12]).Storage;
                    str = Storage.get("debug-log-query", "");
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
                    Storage = closure_0(closure_2[12]).Storage;
                    str = Storage.get("debug-log-query", "");
                    if (str == null) {
                      str = "";
                    }
                    return str;
                  }
                }
              }
              const obj5 = { style: tmp22, children: null };
              let items = [tmp30, tmp35];
              obj5.children = items;
              const tmp41 = first2(closure_6, obj5);
              cResult[25] = tmp4.searchWrap;
              cResult[26] = tmp30;
              cResult[27] = tmp35;
              cResult[28] = tmp41;
            }
            class R {
              constructor(arg0) {
                item = arg0.item;
                tmp = jsxs;
                obj = { style: closure_0.log, children: null };
                tmp3 = closure_0;
                tmp4 = closure_0;
                tmp5 = closure_2;
                tmp2 = View;
                obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
                date = new Date(item.time);
                items = [, ,];
                items[0] = date.toISOString();
                items[1] = " ";
                str = item.timing;
                if (str == null) {
                  str = "";
                }
                items[2] = str;
                obj1.children = items;
                items1 = [,];
                items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
                obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
                obj7 = {
                  style: tmp3.code,
                  variant: "text-sm/normal",
                  color: "text-brand",
                  children: "[" + item.category + "]: ",
                };
                items2 = [,];
                items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
                items2[1] = item.message;
                obj6.children = items2;
                items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
                obj.children = items1;
                return tmp(tmp2, obj, arg0.index);
              }
            }
            const obj6 = { style: tmp4.searchField, children: tmp27 };
            const tmp32 = closure_8(closure_6, obj6);
            cResult[19] = tmp4.searchField;
            cResult[20] = tmp27;
            cResult[21] = tmp32;
          }
          const obj7 = {
            size: "md",
            placeholder: "Filter (regex)",
            onChange: tmp5Result3[1],
            defaultValue: first2,
            trailingIcon: tmp(tmp2[19]).FiltersHorizontalIcon,
            trailingPressableProps: tmp26,
          };
          const tmp29 = closure_8(tmp(tmp2[18]).SearchField, obj7);
          cResult[16] = first2;
          cResult[17] = tmp26;
          cResult[18] = tmp29;
        }
        class R {
          constructor(arg0) {
            item = arg0.item;
            tmp = jsxs;
            obj = { style: closure_0.log, children: null };
            tmp3 = closure_0;
            tmp4 = closure_0;
            tmp5 = closure_2;
            tmp2 = View;
            obj1 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
            date = new Date(item.time);
            items = [, ,];
            items[0] = date.toISOString();
            items[1] = " ";
            str = item.timing;
            if (str == null) {
              str = "";
            }
            items[2] = str;
            obj1.children = items;
            items1 = [,];
            items1[0] = tmp(closure_0(closure_2[14]).Text, obj1);
            obj6 = { style: tmp3.code, variant: "text-sm/normal", children: null };
            obj7 = {
              style: tmp3.code,
              variant: "text-sm/normal",
              color: "text-brand",
              children: "[" + item.category + "]: ",
            };
            items2 = [,];
            items2[0] = jsx(tmp4(tmp5[14]).Text, obj7);
            items2[1] = item.message;
            obj6.children = items2;
            items1[1] = tmp(tmp4(tmp5[14]).Text, obj6);
            obj.children = items1;
            return tmp(tmp2, obj, arg0.index);
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
            closure_0 = setTimeout(() => {
              try {
                const _RegExp = RegExp;
                const regExp = new RegExp(first2, "i");
                closure_1_8(
                  closure_1_6.filter((category) => {
                    let tmp2 = null != category.category.match(regExp);
                    if (!tmp2) {
                      tmp2 = null != category.message.match(regExp);
                    }
                    return tmp2;
                  }),
                );
                const Storage = closure_0(first[12]).Storage;
                const result = Storage.set("debug-log-query", first2);
              } catch (err) {}
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
      const tmp5Result4 = first1(noop.useState(tmp14), 2);
    }
  : () => {
      const tmp = closure_9();
      _require = tmp;
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
      const tmp4Result = sortOrder(noop.useState(str), 2);
      sortOrder = tmp4Result[0];
      noop = tmp4Result[1];
      closure_5 = obj.useCallback((arg0) => {
        closure_4(arg0);
        const Storage = Storage2.Storage;
        const result = Storage.set("debug-log-sort-order", arg0);
      }, []);
      let items = [sortOrder, tmp6];
      const memo = obj.useMemo(() => LogAggregator.getAllForDebugPanel("newest" === first), items);
      const tmp4Result3 = sortOrder(
        noop.useState(() => {
          const Storage = closure_0(callback[12]).Storage;
          let str = Storage.get("debug-log-query", "");
          if (str == null) {
            str = "";
          }
          return str;
        }),
        2,
      );
      const first1 = tmp4Result3[0];
      const tmp4Result4 = sortOrder(noop.useState(memo), 2);
      closure_8 = tmp4Result4[1];
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
              const Storage = closure_0(callback[12]).Storage;
              const result = Storage.set("debug-log-query", first1);
            } catch (err) {}
          }, 300);
          return () => clearTimeout(closure_0);
        } else {
          closure_8(memo);
          let Storage = timeout(callback[12]).Storage;
          let result = Storage.set("debug-log-query", tmp);
        }
      }, items1);
      let items2 = [tmp];
      let obj2 = { style: tmp.wrap, children: null };
      let obj3 = { style: tmp.searchWrap, children: null };
      const obj4 = { style: tmp.searchField, children: null };
      const callback1 = obj.useCallback((item) => {
        item = item.item;
        const obj = { style: closure_0.log, children: null };
        const obj2 = { style: closure_0.code, variant: "text-xs/normal", color: "text-muted", children: null };
        const items = [new Date(item.time).toISOString(), " "];
        let str = item.timing;
        if (str == null) {
          str = "";
        }
        items[2] = str;
        obj2.children = items;
        const items1 = [React5(Text_Text.Text, obj2)];
        const obj3 = { style: closure_0.code, variant: "text-sm/normal", children: null };
        const date = new Date(item.time);
        const items2 = [
          closure_2_8(Text_Text.Text, {
            style: closure_0.code,
            variant: "text-sm/normal",
            color: "text-brand",
            children: "[" + item.category + "]: ",
          }),
          item.message,
        ];
        obj3.children = items2;
        items1[1] = React5(Text_Text.Text, obj3);
        obj.children = items1;
        return React5(timestampProducer, obj, item.index);
      }, items2);
      const obj5 = {
        size: "md",
        placeholder: "Filter (regex)",
        onChange: tmp4Result3[1],
        defaultValue: first1,
        trailingIcon: require("FiltersHorizontalIcon").FiltersHorizontalIcon,
        trailingPressableProps: null,
      };
      const obj6 = { accessibilityLabel: null, onPress: null };
      const intl = tmp8(tmp3[15]).intl;
      obj6.accessibilityLabel = intl.string(require("util").t["+1H47t"]);
      obj6.onPress = function onPress() {
        const result = UserSettingsDebugLogsActionSheet.openUserSettingsDebugLogsFiltersActionSheet({
          sortOrder,
          onRefresh() {
            onRefresh();
            require("ActionSheetActionCreators").hideActionSheet();
          },
          onSortOrderChanged(arg0) {
            closure_1_5(arg0);
            require("ActionSheetActionCreators").hideActionSheet();
          },
        });
      };
      obj5.trailingPressableProps = obj6;
      obj4.children = closure_8(require("SearchField").SearchField, obj5);
      const items3 = [closure_8(memo, obj4)];
      const tmp5 = sortOrder(noop.useState(0), 2);
      items3[1] = closure_8(memo, { style: tmp.shareButton, children: closure_8(require("ShareLogsButton"), {}) });
      obj3.children = items3;
      const items4 = [first1(memo, obj3)];
      const obj8 = { contentContainerStyle: null, data: null, renderItem: null, refreshControl: null };
      const obj9 = {};
      const merged = Object.assign(tmp.list);
      obj9.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
      obj8.contentContainerStyle = obj9;
      obj8.data = tmp4Result4[0];
      obj8.renderItem = callback1;
      obj8.refreshControl = closure_8(closure_5, { refreshing: false, onRefresh });
      items4[1] = closure_8(require("../../../../../discord_common/js/packages/flash-list/index.js").FlashList, obj8);
      obj2.children = items4;
      return first1(memo, obj2);
    };
