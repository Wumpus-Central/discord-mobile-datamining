// === Module 15390: UserSettingsStartupTimings ===

// Module 15390 (UserSettingsStartupTimings)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5990 */;
import TableRow from "TableRow" /* 5993 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import serializeAppStartLogsDefault from "serializeAppStartLogs" /* 12533 */;
import ShareIcon from "ShareIcon" /* 12715 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import NativeTTIManagerModule from "NativeTTIManagerModule" /* 4743 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, code: { fontFamily: fn(1085).Fonts.CODE_BOLD }, border: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.border = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ children, color } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === children) {
    if (cResult[1] === color) {
      if (cResult[2] === tmp4.code) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmp6 = closure_1_8(Text_Text.Text, { variant: "text-sm/normal", color, lineClamp: 1, style: tmp4.code, children });
  cResult[0] = children;
  cResult[1] = color;
  cResult[2] = tmp4.code;
  cResult[3] = tmp6;
  tmp5 = tmp6;
  const obj2 = { variant: "text-sm/normal", color, lineClamp: 1, style: tmp4.code, children };
}) : ((arg0) => {
  ({ children, color } = arg0);
  const tmp = closure_11();
  return closure_1_8(Text_Text.Text, { variant: "text-sm/normal", color, lineClamp: 1, style: closure_11().code, children });
});
let onPress = NativeTTIManagerModule.getAppStartedTimestamp();
ReactCompilerGating = fn(558);
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(26);
  const tmp4 = closure_11();
  _require = tmp4;
  [checked, dependencyMap] = stateFromStores.useState(true);
  [first1, _slicedToArray] = stateFromStores.useState(true);
  const useResult = stateFromStores.use(onPress);
  if (cResult[0] === useResult) {
    if (cResult[1] === checked) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [DeveloperOptionsStore];
        class G {
          constructor() {
            return closure_7.alertStartupMetrics;
          }
        }
        cResult[4] = items;
        cResult[5] = G;
        let tmp15 = G;
        let tmp14 = items;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      stateFromStores = tmp(504).useStateFromStores(tmp14, tmp15);
      const diff = tmp5(9).loadIndex.start - useResult;
      View = diff;
      const diff1 = tmp5(9).loadMiniCache.end - tmp5(9).loadMiniCache.start;
      DeveloperOptionsStore = diff1 + (tmp5(9).parseStorage.end - tmp5(9).parseStorage.start);
      closure_8 = tmp5(9).loadLazyCache.end - tmp5(9).loadLazyCache.start;
      closure_9 = tmp5(9).ready.end - tmp5(9).ready.start;
      const _Math = Math;
      closure_10 = Math.ceil(tmp5(9).renderLatestMessages.importTime);
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const lastTrackedAppUiViewed2Properties = tmp(6984).getLastTrackedAppUiViewed2Properties();
        class G {
          constructor() {
            return closure_7.alertStartupMetrics;
          }
        }
        let tmp20 = lastTrackedAppUiViewed2Properties;
        const tmpResult2 = tmp(6984);
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
        closure_129_0 = first1(function*() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  dependencyMap = 1;
                  c3 = 1;
                  const obj5 = { value: tmp5(4743).getAppFirstVisibleTimestamp(), done: false };
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
                closure_128_0 = value;
                closure_128_1 = tmp5(12533)(closure_128_0);
                const obj7 = { message: closure_128_1 };
                tmp2(8038).showShareActionSheet(obj7, "Startup Timing");
                c3 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp17) {
              c3 = tmp;
              throw tmp17;
            }
          }
        });
        const fn = function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        class G {
          constructor() {
            return closure_7.alertStartupMetrics;
          }
        }
        cResult[7] = fn;
        let tmp23 = fn;
      } else {
        tmp23 = cResult[7];
      }
      onPress = tmp23;
      const _Symbol4 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
          }
        }
        cResult[8] = V;
        class G {
          constructor() {
            return closure_7.alertStartupMetrics;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
          }
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
          }
        }
        cResult[9] = tmp27;
        class G {
          constructor() {
            return closure_7.alertStartupMetrics;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
          }
        }
      }
      const sum = checked(1618)().bottom + tmp5(587).space.PX_16;
      if (cResult[10] !== sum) {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
          }
        }
        tmp30[0] = sum;
        class G {
          constructor() {
            return closure_7.alertStartupMetrics;
          }
        }
        cResult[11] = tmp30;
      } else {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
          }
        }
      }
      if (cResult[12] === stateFromStores) {
        class V {
          constructor(arg0) {
            obj = { color: "text-brand", children: null };
            result = arg0 / 1000;
            obj.children = "" + result + "s (" + Math.round(arg0 / c12 * 100) + "%)";
            return jsx(f70433, obj);
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
          obj1 = { title: "Performance testing", hasIcons: false, children: null };
          obj25 = {
            label: "Show start times at launch",
            onPress() {
                      return closure_0(1358).setDeveloperOptionSettings({ alertStartupMetrics: !stateFromStores });
                    },
            checked: closure_5
          };
          obj1.children = jsx(closure_0(closure_2[21]).TableCheckboxRow, obj25);
          items = [, , , , ];
          items[0] = jsx(closure_0(closure_2[20]).TableRowGroup, obj1);
          tmp6 = f70433;
          obj26 = { children: null };
          items1 = ["Native: "];
          items1[1] = closure_14(closure_6);
          obj26.children = items1;
          items2 = [, , , , , , , ];
          items2[0] = jsxs(f70433, obj26);
          obj27 = { children: null };
          items3 = ["JS Imports: "];
          items3[1] = closure_14(closure_10);
          obj27.children = items3;
          items2[1] = jsxs(f70433, obj27);
          obj28 = { children: null };
          items4 = ["Mini Cache: "];
          items4[1] = closure_14(closure_7);
          obj28.children = items4;
          items2[2] = jsxs(f70433, obj28);
          obj29 = { children: null };
          items5 = ["Lazy Cache: "];
          items5[1] = closure_14(closure_8);
          obj29.children = items5;
          items2[3] = jsxs(f70433, obj29);
          obj30 = { children: null };
          items6 = ["Ready: "];
          items6[1] = closure_14(closure_9);
          obj30.children = items6;
          items2[4] = jsxs(f70433, obj30);
          obj31 = { children: null };
          tmp7 = closure_15;
          items7 = ["TTI (first contentful paint): "];
          items7[1] = closure_15(c12);
          obj31.children = items7;
          items2[5] = jsxs(f70433, obj31);
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
          obj34.children = tmp5(closure_0(closure_2[23]).TableRow, obj35);
          items[1] = tmp5(closure_0(closure_2[20]).TableRowGroup, obj34);
          obj38 = { title: "Legend", hasIcons: false, children: null };
          obj39 = { label: null };
          obj40 = { children: null };
          items10 = [, , , , , ];
          items10[0] = tmp5(tmp6, { children: "\u2615 - Java / Kotlin" });
          items10[1] = tmp5(tmp6, { children: "\u{1F3A8} - React render" });
          items10[2] = tmp5(tmp6, { children: "\u{1F4BE} - CacheStore" });
          items10[3] = tmp5(tmp6, { children: "\u{1F9A5} - Slow Store Update / Handler" });
          items10[4] = tmp5(tmp6, { children: "\u{1F3C3} - Startup Event" });
          items10[5] = tmp5(tmp6, { children: "\u{1F310} - Socket Event" });
          obj40.children = items10;
          obj39.label = tmp(tmp2, obj40);
          obj38.children = tmp5(tmp3(tmp4[23]).TableRow, obj39);
          items[2] = tmp5(tmp3(tmp4[20]).TableRowGroup, obj38);
          obj41 = { title: "Detailed Times", hasIcons: false, children: null };
          obj42 = {
            label: "Hide the Noise",
            onPress() {
                      return dependencyMap(() => { ... });
                    },
            checked: closure_1
          };
          items11 = [, ];
          items11[0] = tmp5(tmp3(tmp4[21]).TableCheckboxRow, obj42);
          obj43 = {
            label: "Hide paints",
            onPress() {
                      return closure_1_4(() => { ... });
                    },
            checked: !closure_3
          };
          items11[1] = tmp5(tmp3(tmp4[21]).TableCheckboxRow, obj43);
          obj41.children = items11;
          items[3] = tmp(tmp3(tmp4[20]).TableRowGroup, obj41);
          obj44 = { title: "Share Timings", hasIcons: true, children: null };
          obj45 = { icon: tmp5(tmp3(tmp4[24]).ShareIcon, {}), label: "Copy timings to clipboard.", arrow: true, onPress: closure_13 };
          obj44.children = tmp5(tmp3(tmp4[23]).TableRow, obj45);
          items[4] = tmp5(tmp3(tmp4[20]).TableRowGroup, obj44);
          obj.children = items;
          items12 = [, ];
          items12[0] = tmp(closure_0(closure_2[19]).Stack, obj);
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
      const tmpResult = tmp(504);
    }
  }
  let obj = require("c");
  const parts = checked(12533)(useResult, !checked, first1).split("\n");
  cResult[0] = useResult;
  cResult[1] = checked;
  cResult[2] = first1;
  cResult[3] = parts;
  const str = checked(12533)(useResult, !checked, first1);
}) : (() => {
  const tmp = closure_11();
  _require = tmp;
  [checked, dependencyMap] = noop.useState(true);
  [first1, _slicedToArray] = noop.useState(true);
  const useResult = noop.use(num);
  noop = useResult;
  let items = [useResult, checked, first1];
  const memo = noop.useMemo(() => serializeAppStartLogsDefault(useResult, !first, first1).split("\n"), items);
  let items1 = [alertStartupMetrics];
  checked = require("initialize").useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  alertStartupMetrics = checked(9).loadIndex.start - useResult;
  const diff = checked(9).loadMiniCache.end - checked(9).loadMiniCache.start;
  closure_8 = diff + (checked(9).parseStorage.end - checked(9).parseStorage.start);
  closure_9 = checked(9).loadLazyCache.end - checked(9).loadLazyCache.start;
  closure_10 = checked(9).ready.end - checked(9).ready.start;
  closure_11 = Math.ceil(checked(9).renderLatestMessages.importTime);
  let obj = noop;
  let obj2 = require("initialize");
  const tmp10 = _require;
  const tmp2 = checked;
  const lastTrackedAppUiViewed2Properties = require("TTIAnalyticsUtils").getLastTrackedAppUiViewed2Properties();
  num = undefined;
  if (lastTrackedAppUiViewed2Properties != null) {
    num = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  if (num == null) {
    num = 0;
  }
  onPress = obj.useCallback(first1(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp5(4743).getAppFirstVisibleTimestamp(), done: false };
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
          closure_128_0 = value;
          closure_128_1 = tmp5(12533)(closure_128_0);
          const obj7 = { message: closure_128_1 };
          tmp2(8038).showShareActionSheet(obj7, "Startup Timing");
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  }), []);
  let obj4 = { style: tmp.wrap, children: null };
  let obj5 = { contentContainerStyle: null, ListHeaderComponent: null, data: null, renderItem: null };
  let obj3 = require("TTIAnalyticsUtils");
  obj5.contentContainerStyle = { paddingBottom: checked(1618)().bottom + tmp2(587).space.PX_16 };
  obj5.ListHeaderComponent = function ListHeaderComponent() {
    const obj = { spacing: 16, style: { padding: 16 }, children: null };
    const obj2 = {
      title: "Performance testing",
      hasIcons: false,
      children: closure_2_8(TableCheckboxRow.TableCheckboxRow, {
        label: "Show start times at launch",
        onPress() {
          return closure_0(1358).setDeveloperOptionSettings({ alertStartupMetrics: !checked });
        },
        checked
      })
    };
    const items = [closure_2_8(TableRowGroup.TableRowGroup, obj2), , , , ];
    const obj4 = { children: null };
    const obj5 = { color: "text-brand", children: null };
    const result = closure_7 / 1000;
    obj5.children = "" + result + "s (" + Math.round(closure_7 / num * 100) + "%)";
    const items1 = ["Native: ", closure_2_8(closure_12, obj5)];
    obj4.children = items1;
    const items2 = [options(closure_12, obj4), , , , , , , ];
    const obj6 = { children: null };
    const obj7 = { color: "text-brand", children: null };
    const result1 = closure_11 / 1000;
    obj7.children = "" + result1 + "s (" + Math.round(closure_11 / num * 100) + "%)";
    const items3 = ["JS Imports: ", closure_2_8(closure_12, obj7)];
    obj6.children = items3;
    items2[1] = options(closure_12, obj6);
    const obj8 = { children: null };
    const obj9 = { color: "text-brand", children: null };
    const result2 = closure_8 / 1000;
    obj9.children = "" + result2 + "s (" + Math.round(closure_8 / num * 100) + "%)";
    const items4 = ["Mini Cache: ", closure_2_8(closure_12, obj9)];
    obj8.children = items4;
    items2[2] = options(closure_12, obj8);
    const obj10 = { children: null };
    const obj11 = { color: "text-brand", children: null };
    const result3 = closure_9 / 1000;
    obj11.children = "" + result3 + "s (" + Math.round(closure_9 / num * 100) + "%)";
    const items5 = ["Lazy Cache: ", closure_2_8(closure_12, obj11)];
    obj10.children = items5;
    items2[3] = options(closure_12, obj10);
    const obj12 = { children: null };
    const obj13 = { color: "text-brand", children: null };
    const result4 = closure_10 / 1000;
    obj13.children = "" + result4 + "s (" + Math.round(closure_10 / num * 100) + "%)";
    const items6 = ["Ready: ", closure_2_8(closure_12, obj13)];
    obj12.children = items6;
    items2[4] = options(closure_12, obj12);
    let str = "";
    if (null != num) {
      str = "";
      if (tmp8 > 0) {
        str = `${tmp8 / 1000}s`;
      }
    }
    const obj14 = { children: null };
    const items7 = ["TTI (first contentful paint): ", closure_2_8(closure_12, { color: "text-brand", children: str })];
    obj14.children = items7;
    items2[5] = options(closure_12, obj14);
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
    const obj15 = { children: null };
    const items8 = ["Cached Messages Render: ", closure_2_8(closure_12, { color: "text-brand", children: str3 })];
    obj15.children = items8;
    items2[6] = options(closure_12, obj15);
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
    const obj16 = { children: null };
    const obj17 = { title: "Key Cold Start Times", hasIcons: false, children: null };
    const obj18 = { label: null };
    const obj19 = { children: null };
    const obj20 = { children: null };
    const items9 = ["Latest Messages Render: ", closure_2_8(closure_12, { color: "text-brand", children: str5 })];
    obj20.children = items9;
    items2[7] = options(closure_12, obj20);
    obj19.children = items2;
    obj18.label = options(v65535, obj19);
    obj17.children = closure_2_8(TableRow.TableRow, obj18);
    items[1] = closure_2_8(TableRowGroup.TableRowGroup, obj17);
    const obj21 = { title: "Legend", hasIcons: false, children: null };
    const obj22 = { label: null };
    const obj23 = { children: null };
    const items10 = [closure_2_8(closure_12, { children: "\u2615 - Java / Kotlin" }), closure_2_8(closure_12, { children: "\u{1F3A8} - React render" }), closure_2_8(closure_12, { children: "\u{1F4BE} - CacheStore" }), closure_2_8(closure_12, { children: "\u{1F9A5} - Slow Store Update / Handler" }), closure_2_8(closure_12, { children: "\u{1F3C3} - Startup Event" }), closure_2_8(closure_12, { children: "\u{1F310} - Socket Event" })];
    obj23.children = items10;
    obj22.label = options(v65535, obj23);
    obj21.children = closure_2_8(TableRow.TableRow, obj22);
    items[2] = closure_2_8(TableRowGroup.TableRowGroup, obj21);
    const obj24 = { title: "Detailed Times", hasIcons: false, children: null };
    const items11 = [
      closure_2_8(TableCheckboxRow.TableCheckboxRow, {
        label: "Hide the Noise",
        onPress() {
          return dependencyMap((arg0) => !arg0);
        },
        checked
      }),
      closure_2_8(TableCheckboxRow.TableCheckboxRow, {
        label: "Hide paints",
        onPress() {
          return closure_1_4((arg0) => !arg0);
        },
        checked: !first1
      })
    ];
    obj24.children = items11;
    items[3] = options(TableRowGroup.TableRowGroup, obj24);
    const obj27 = { title: "Share Timings", hasIcons: true, children: closure_2_8(TableRow.TableRow, { icon: closure_2_8(ShareIcon.ShareIcon, {}), label: "Copy timings to clipboard.", arrow: true, onPress }) };
    items[4] = closure_2_8(TableRowGroup.TableRowGroup, obj27);
    obj.children = items;
    const items12 = [options(Stack_Stack.Stack, obj), closure_2_8(View, { style: border.border })];
    obj16.children = items12;
    return options(v65535, obj16);
  };
  obj5.data = memo;
  obj5.renderItem = function renderItem(children) {
    return closure_8(lastTrackedAppUiViewed2Properties, { children: children.item });
  };
  obj4.children = closure_8(tmp10(8371).FlashList, obj5);
  return closure_8(checked, obj4);
});