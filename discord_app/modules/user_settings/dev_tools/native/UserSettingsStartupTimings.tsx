// === Module 15409: UserSettingsStartupTimings ===

// Module 15409 (UserSettingsStartupTimings)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5997 */;
import TableRow4 from "TableRow" /* 6000 */;
import TableRowGroup6 from "TableRowGroup" /* 6081 */;
import serializeAppStartLogsDefault from "serializeAppStartLogs" /* 12548 */;
import ShareIcon from "ShareIcon" /* 12730 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import DeveloperOptionsStore_mod from "DeveloperOptionsStore" /* 1357 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import react_native2 from "react-native" /* 4749 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, checked, dependencyMap, obj1, obj30, obj31, obj32, obj33, obj34, obj35, obj36, obj37, obj38, obj39, obj40, obj41, obj42, obj43, obj44, obj45, obj46, tmp7, tmp8;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let react = react_mod;
let View = react_native.View;
let DeveloperOptionsStore = DeveloperOptionsStore_mod;
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, code: { fontFamily: Fonts.CODE_BOLD }, border: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let color;
  const obj = react2;
  const cResult = obj.c(4);
  ({ children, color } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === children) {
    if (cResult[1] === color) {
      let tmp5;
      if (cResult[2] === tmp4.code) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj2 = { variant: "text-sm/normal", color, lineClamp: 1, style: tmp4.code, children };
  const tmp6 = metroImportAll(Text_Text.Text, obj2);
  cResult[0] = children;
  cResult[1] = color;
  cResult[2] = tmp4.code;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let children;
  let color;
  ({ children, color } = arg0);
  const obj = { variant: "text-sm/normal", color, lineClamp: 1, style: closure_11().code, children };
  return metroImportAll(Text_Text.Text, obj);
});
let onPress = react_native2.getAppStartedTimestamp();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let alertStartupMetrics;
  let border;
  let closure_14;
  let closure_15;
  let closure_2;
  let closure_4;
  let first1;
  let stateFromStores;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(26);
  const tmp4 = closure_11();
  _require = tmp4;
  const bottom = checked(1618)().bottom;
  [checked, dependencyMap] = stateFromStores.useState(true);
  [first1, _slicedToArray] = stateFromStores.useState(true);
  const useResult = stateFromStores.use(onPress);
  if (cResult[0] === useResult) {
    if (cResult[1] === checked) {
      let tmp15;
      let tmp14;
      let tmp20;
      let tmp23;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = DeveloperOptionsStore;
        let items = [DeveloperOptionsStore];
        class G {
          constructor() {
            return alertStartupMetrics.alertStartupMetrics;
          }
        }
        cResult[4] = items;
        cResult[5] = G;
        tmp15 = G;
        tmp14 = items;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp14, tmp15);
      const diff = tmp5(9).loadIndex.start - useResult;
      View = diff;
      const diff1 = tmp5(9).loadMiniCache.end - tmp5(9).loadMiniCache.start;
      DeveloperOptionsStore = diff1 + (tmp5(9).parseStorage.end - tmp5(9).parseStorage.start);
      let closure_8 = tmp5(9).loadLazyCache.end - tmp5(9).loadLazyCache.start;
      let closure_9 = tmp5(9).ready.end - tmp5(9).ready.start;
      const _Math = Math;
      let closure_10 = Math.ceil(tmp5(9).renderLatestMessages.importTime);
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult2 = tmp(6997);
        const lastTrackedAppUiViewed2Properties = tmpResult2.getLastTrackedAppUiViewed2Properties();
        class G {
          constructor() {
            return alertStartupMetrics.alertStartupMetrics;
          }
        }
        tmp20 = lastTrackedAppUiViewed2Properties;
      } else {
        tmp20 = cResult[6];
      }
      closure_11 = tmp20;
      let num4;
      if (tmp20 != null) {
        num4 = tmp20.time_first_contentful_paint;
      }
      if (num4 == null) {
        num4 = 0;
      }
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        _require = first1(function*() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let tmp;
              let message;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  tmp = undefined;
                  message = undefined;
                  const obj4 = message(c2[12]);
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj4.getAppFirstVisibleTimestamp(), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                tmp = value;
                message = message(c2[14])(tmp);
                const obj7 = { message };
                const obj = tmp(c2[18]);
                obj.showShareActionSheet(obj7, "Startup Timing");
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp16) {
              c3 = 3;
              throw tmp16;
            }
          }
        });
        const fn = function() {
          return closure_0(...arguments);
        };
        class G {
          constructor() {
            return alertStartupMetrics.alertStartupMetrics;
          }
        }
        cResult[7] = fn;
        tmp23 = fn;
      } else {
        tmp23 = cResult[7];
      }
      onPress = tmp23;
      const _Symbol4 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
        cResult[8] = V;
        class G {
          constructor() {
            return alertStartupMetrics.alertStartupMetrics;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
        cResult[9] = tmp27;
        class G {
          constructor() {
            return alertStartupMetrics.alertStartupMetrics;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
      }
      const sum = bottom + tmp5(587).space.PX_16;
      if (cResult[10] !== sum) {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
        tmp30[0] = sum;
        class G {
          constructor() {
            return alertStartupMetrics.alertStartupMetrics;
          }
        }
        cResult[11] = tmp30;
      } else {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
      }
      if (cResult[12] === stateFromStores) {
        class V {
          constructor(arg0) {
            let result;
            const obj = { color: "text-brand", children: "" + result + "s (" + Math.round(arg0 / num4 * 100) + "%)" };
            result = arg0 / 1000;
            return metroImportAll(closure_12, obj);
          }
        }
      }
      class X {
        constructor() {
          tmp = jsxs;
          tmp2 = Fragment;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = { spacing: 16, style: { padding: 16 }, children: null };
          tmp5 = jsx;
          Stack = closure_0(closure_2[19]).Stack;
          obj1 = { title: "Performance testing", hasIcons: false, children: null };
          TableRowGroup = closure_0(closure_2[20]).TableRowGroup;
          obj25 = {
            label: "Show start times at launch",
            onPress() {
                      const obj = border(closure_2[22]);
                      const obj2 = { alertStartupMetrics: !stateFromStores };
                      return obj.setDeveloperOptionSettings(obj2);
                    },
            checked: closure_5
          };
          obj1.children = jsx(closure_0(closure_2[21]).TableCheckboxRow, obj25);
          items = [, , , , ];
          items[0] = jsx(TableRowGroup, obj1);
          TableRowGroup2 = closure_0(closure_2[20]).TableRowGroup;
          tmp6 = f70546;
          obj26 = { children: null };
          TableRow = closure_0(closure_2[23]).TableRow;
          items1 = ["Native: "];
          items1[1] = closure_14(closure_6);
          obj26.children = items1;
          items2 = [, , , , , , , ];
          items2[0] = jsxs(f70546, obj26);
          obj27 = { children: null };
          items3 = ["JS Imports: "];
          items3[1] = closure_14(closure_10);
          obj27.children = items3;
          items2[1] = jsxs(f70546, obj27);
          obj28 = { children: null };
          items4 = ["Mini Cache: "];
          items4[1] = closure_14(closure_7);
          obj28.children = items4;
          items2[2] = jsxs(f70546, obj28);
          obj29 = { children: null };
          items5 = ["Lazy Cache: "];
          items5[1] = closure_14(closure_8);
          obj29.children = items5;
          items2[3] = jsxs(f70546, obj29);
          obj30 = { children: null };
          items6 = ["Ready: "];
          items6[1] = closure_14(closure_9);
          obj30.children = items6;
          items2[4] = jsxs(f70546, obj30);
          obj31 = { children: null };
          tmp7 = closure_15;
          items7 = ["TTI (first contentful paint): "];
          items7[1] = closure_15(c12);
          obj31.children = items7;
          items2[5] = jsxs(f70546, obj31);
          tmp8 = closure_11;
          prop = undefined;
          if (closure_11 != null) {
            prop = tmp8.time_display_messages_with_cache_end;
          }
          obj32 = { children: null };
          items8 = ["Cached Messages Render: "];
          items8[1] = tmp7(prop);
          obj32.children = items8;
          items2[6] = tmp(tmp6, obj32);
          prop1 = undefined;
          if (tmp8 != null) {
            prop1 = tmp8.time_display_latest_messages_end;
          }
          obj33 = { children: null };
          obj34 = { title: "Key Cold Start Times", hasIcons: false, children: null };
          obj35 = { label: null };
          obj36 = { children: null };
          obj37 = { children: null };
          items9 = ["Latest Messages Render: "];
          items9[1] = tmp7(prop1);
          obj37.children = items9;
          items2[7] = tmp(tmp6, obj37);
          obj36.children = items2;
          obj35.label = tmp(tmp2, obj36);
          obj34.children = tmp5(TableRow, obj35);
          items[1] = tmp5(TableRowGroup2, obj34);
          obj38 = { title: "Legend", hasIcons: false, children: null };
          TableRowGroup3 = tmp3(tmp4[20]).TableRowGroup;
          obj39 = { label: null };
          obj40 = { children: null };
          TableRow2 = tmp3(tmp4[23]).TableRow;
          items10 = [, , , , , ];
          items10[0] = tmp5(tmp6, { children: "\u2615 - Java / Kotlin" });
          items10[1] = tmp5(tmp6, { children: "\u{1F3A8} - React render" });
          items10[2] = tmp5(tmp6, { children: "\u{1F4BE} - CacheStore" });
          items10[3] = tmp5(tmp6, { children: "\u{1F9A5} - Slow Store Update / Handler" });
          items10[4] = tmp5(tmp6, { children: "\u{1F3C3} - Startup Event" });
          items10[5] = tmp5(tmp6, { children: "\u{1F310} - Socket Event" });
          obj40.children = items10;
          obj39.label = tmp(tmp2, obj40);
          obj38.children = tmp5(TableRow2, obj39);
          items[2] = tmp5(TableRowGroup3, obj38);
          obj41 = { title: "Detailed Times", hasIcons: false, children: null };
          TableRowGroup4 = tmp3(tmp4[20]).TableRowGroup;
          obj42 = {
            label: "Hide the Noise",
            onPress() {
                      return closure_1_2(() => { /* body not rendered: F153400 */ });
                    },
            checked: closure_1
          };
          items11 = [, ];
          items11[0] = tmp5(tmp3(tmp4[21]).TableCheckboxRow, obj42);
          obj43 = {
            label: "Hide paints",
            onPress() {
                      return closure_1_4(() => { /* body not rendered: F153401 */ });
                    },
            checked: !closure_3
          };
          items11[1] = tmp5(tmp3(tmp4[21]).TableCheckboxRow, obj43);
          obj41.children = items11;
          items[3] = tmp(TableRowGroup4, obj41);
          obj44 = { title: "Share Timings", hasIcons: true, children: null };
          TableRowGroup5 = tmp3(tmp4[20]).TableRowGroup;
          obj45 = { icon: null, label: "Copy timings to clipboard.", arrow: true, onPress: null };
          TableRow3 = tmp3(tmp4[23]).TableRow;
          obj45.icon = tmp5(tmp3(tmp4[24]).ShareIcon, {});
          obj45.onPress = closure_13;
          obj44.children = tmp5(TableRow3, obj45);
          items[4] = tmp5(TableRowGroup5, obj44);
          obj.children = items;
          items12 = [, ];
          items12[0] = tmp(Stack, obj);
          obj46 = { style: closure_0.border };
          items12[1] = tmp5(View, obj46);
          obj33.children = items12;
          return tmp(tmp2, obj33);
        }
      }
      cResult[12] = stateFromStores;
      cResult[13] = checked;
      cResult[14] = first1;
      cResult[15] = diff;
      cResult[16] = tmp4.border;
      cResult[17] = X;
    }
  }
  const str = checked(12548)(useResult, !checked, first1);
  const parts = str.split("\n");
  cResult[0] = useResult;
  cResult[1] = checked;
  cResult[2] = first1;
  cResult[3] = parts;
}) : (() => {
  let FlashList;
  let alertStartupMetrics;
  let border;
  let closure_2;
  let closure_4;
  let first1;
  let num;
  let obj5;
  let obj6;
  let react;
  let tmp = closure_11();
  _require = tmp;
  const tmp3 = dependencyMap;
  let obj = react;
  const bottom = checked(1618)().bottom;
  const tmp4 = _slicedToArray(react.useState(true), 2);
  const tmp2 = checked;
  checked = tmp4[0];
  dependencyMap = tmp4[1];
  [first1, _slicedToArray] = react.useState(true);
  const useResult = react.use(num);
  react = useResult;
  let items = [useResult, checked, first1];
  const memo = react.useMemo(() => {
    const str = serializeAppStartLogsDefault(react, !first, first1);
    return str.split("\n");
  }, items);
  let obj2 = require("get initialized");
  let items1 = [alertStartupMetrics];
  checked = obj2.useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  alertStartupMetrics = checked(9).loadIndex.start - useResult;
  const diff = checked(9).loadMiniCache.end - checked(9).loadMiniCache.start;
  let closure_8 = diff + (checked(9).parseStorage.end - checked(9).parseStorage.start);
  let closure_9 = checked(9).loadLazyCache.end - checked(9).loadLazyCache.start;
  let closure_10 = checked(9).ready.end - checked(9).ready.start;
  closure_11 = Math.ceil(checked(9).renderLatestMessages.importTime);
  let obj3 = require("TTIAnalyticsUtils");
  const lastTrackedAppUiViewed2Properties = obj3.getLastTrackedAppUiViewed2Properties();
  num = undefined;
  const tmp10 = _require;
  if (lastTrackedAppUiViewed2Properties != null) {
    num = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  if (num == null) {
    num = 0;
  }
  onPress = obj.useCallback(first1(function*() {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let message;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            message = undefined;
            const obj4 = message(c2[12]);
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj4.getAppFirstVisibleTimestamp(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp = value;
          message = message(c2[14])(tmp);
          const obj7 = { message };
          const obj = tmp(c2[18]);
          obj.showShareActionSheet(obj7, "Startup Timing");
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  }), []);
  let obj4 = { style: tmp.wrap, children: closure_8(FlashList, obj5) };
  obj5 = {
    contentContainerStyle: obj6,
    ListHeaderComponent() {
      let TableRow2;
      let TableRow3;
      let items;
      let items1;
      let items10;
      let items11;
      let items12;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj18;
      let obj19;
      let obj22;
      let obj23;
      let obj28;
      let obj3;
      let result;
      let result1;
      let result2;
      let result3;
      let result4;
      let obj = { spacing: 16, style: { padding: 16 }, children: items };
      const Stack = Stack_Stack.Stack;
      let obj2 = { title: "Performance testing", hasIcons: false, children: metroImportAll(TableCheckboxRow.TableCheckboxRow, obj3) };
      const TableRowGroup = TableRowGroup6.TableRowGroup;
      obj3 = {
        label: "Show start times at launch",
        onPress() {
          const obj = border(closure_2[22]);
          const obj2 = { alertStartupMetrics: !checked };
          return obj.setDeveloperOptionSettings(obj2);
        },
        checked
      };
      items = [metroImportAll(TableRowGroup, obj2), , , , ];
      const TableRowGroup2 = TableRowGroup6.TableRowGroup;
      const obj4 = { children: items1 };
      const obj5 = { color: "text-brand", children: "" + result + "s (" + Math.round(alertStartupMetrics / num * 100) + "%)" };
      result = alertStartupMetrics / 1000;
      const TableRow = TableRow4.TableRow;
      items1 = ["Native: ", metroImportAll(closure_12, obj5)];
      const items2 = [React4(closure_12, obj4), , , , , , , ];
      const obj6 = { children: items3 };
      const obj7 = { color: "text-brand", children: "" + result1 + "s (" + Math.round(closure_11 / num * 100) + "%)" };
      result1 = closure_11 / 1000;
      items3 = ["JS Imports: ", metroImportAll(closure_12, obj7)];
      items2[1] = React4(closure_12, obj6);
      const obj8 = { children: items4 };
      const obj9 = { color: "text-brand", children: "" + result2 + "s (" + Math.round(metroImportAll / num * 100) + "%)" };
      result2 = metroImportAll / 1000;
      items4 = ["Mini Cache: ", metroImportAll(closure_12, obj9)];
      items2[2] = React4(closure_12, obj8);
      const obj10 = { children: items5 };
      const obj11 = { color: "text-brand", children: "" + result3 + "s (" + Math.round(c9 / num * 100) + "%)" };
      result3 = c9 / 1000;
      items5 = ["Lazy Cache: ", metroImportAll(closure_12, obj11)];
      items2[3] = React4(closure_12, obj10);
      const obj12 = { children: items6 };
      const obj13 = { color: "text-brand", children: "" + result4 + "s (" + Math.round(c10 / num * 100) + "%)" };
      result4 = c10 / 1000;
      items6 = ["Ready: ", metroImportAll(closure_12, obj13)];
      items2[4] = React4(closure_12, obj12);
      let str = "";
      if (null != num) {
        str = "";
        if (num > 0) {
          str = `${tmp8 / 1000}s`;
        }
      }
      const obj14 = { children: items7 };
      items7 = ["TTI (first contentful paint): ", metroImportAll(closure_12, { color: "text-brand", children: str })];
      items2[5] = React4(closure_12, obj14);
      let prop;
      if (lastTrackedAppUiViewed2Properties != null) {
        prop = lastTrackedAppUiViewed2Properties.time_display_messages_with_cache_end;
      }
      let str3 = "";
      if (null != prop) {
        str3 = "";
        if (prop > 0) {
          str3 = `${tmp14 / 1000}s`;
        }
      }
      const obj15 = { children: items8 };
      items8 = ["Cached Messages Render: ", metroImportAll(closure_12, { color: "text-brand", children: str3 })];
      items2[6] = React4(closure_12, obj15);
      let prop1;
      if (lastTrackedAppUiViewed2Properties != null) {
        prop1 = lastTrackedAppUiViewed2Properties.time_display_latest_messages_end;
      }
      let str5 = "";
      if (null != prop1) {
        str5 = "";
        if (prop1 > 0) {
          str5 = `${tmp15 / 1000}s`;
        }
      }
      const obj16 = { children: items12 };
      const obj17 = { title: "Key Cold Start Times", hasIcons: false, children: metroImportAll(TableRow, obj18) };
      obj18 = { label: React4(authStore, obj19) };
      obj19 = { children: items2 };
      const obj20 = { children: items9 };
      items9 = ["Latest Messages Render: ", metroImportAll(closure_12, { color: "text-brand", children: str5 })];
      items2[7] = React4(closure_12, obj20);
      items[1] = metroImportAll(TableRowGroup2, obj17);
      const obj21 = { title: "Legend", hasIcons: false, children: metroImportAll(TableRow2, obj22) };
      const TableRowGroup3 = TableRowGroup6.TableRowGroup;
      obj22 = { label: React4(authStore, obj23) };
      obj23 = { children: items10 };
      TableRow2 = TableRow4.TableRow;
      items10 = [metroImportAll(closure_12, { children: "\u2615 - Java / Kotlin" }), metroImportAll(closure_12, { children: "\u{1F3A8} - React render" }), metroImportAll(closure_12, { children: "\u{1F4BE} - CacheStore" }), metroImportAll(closure_12, { children: "\u{1F9A5} - Slow Store Update / Handler" }), metroImportAll(closure_12, { children: "\u{1F3C3} - Startup Event" }), metroImportAll(closure_12, { children: "\u{1F310} - Socket Event" })];
      items[2] = metroImportAll(TableRowGroup3, obj21);
      const obj24 = { title: "Detailed Times", hasIcons: false, children: items11 };
      const TableRowGroup4 = TableRowGroup6.TableRowGroup;
      items11 = [, ];
      const obj25 = {
        label: "Hide the Noise",
        onPress() {
          return closure_1_2((arg0) => !arg0);
        },
        checked
      };
      items11[0] = metroImportAll(TableCheckboxRow.TableCheckboxRow, obj25);
      const obj26 = {
        label: "Hide paints",
        onPress() {
          return closure_1_4((arg0) => !arg0);
        },
        checked: !first1
      };
      items11[1] = metroImportAll(TableCheckboxRow.TableCheckboxRow, obj26);
      items[3] = React4(TableRowGroup4, obj24);
      const obj27 = { title: "Share Timings", hasIcons: true, children: metroImportAll(TableRow3, obj28) };
      const TableRowGroup5 = TableRowGroup6.TableRowGroup;
      obj28 = { icon: metroImportAll(ShareIcon.ShareIcon, {}), label: "Copy timings to clipboard.", arrow: true, onPress };
      TableRow3 = TableRow4.TableRow;
      items[4] = metroImportAll(TableRowGroup5, obj27);
      items12 = [React4(Stack, obj), ];
      const obj29 = { style: border.border };
      items12[1] = metroImportAll(View, obj29);
      return React4(authStore, obj16);
    },
    data: memo,
    renderItem(children) {
      const obj = { children: children.item };
      return closure_8(lastTrackedAppUiViewed2Properties, obj);
    }
  };
  obj6 = { paddingBottom: bottom + tmp2(587).space.PX_16 };
  FlashList = tmp10(8404).FlashList;
  return closure_8(checked, obj4);
});
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default tmp4;