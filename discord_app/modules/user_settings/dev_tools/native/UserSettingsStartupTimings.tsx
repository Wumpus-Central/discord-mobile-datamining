// === Module 15665: UserSettingsStartupTimings ===

// Module 15665 (UserSettingsStartupTimings)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4635 */;
import Stack_Stack from "Stack/Stack" /* 5057 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5689 */;
import TableRow from "TableRow" /* 5690 */;
import TableRowGroup from "TableRowGroup" /* 5772 */;
import ShareIcon from "ShareIcon" /* 9185 */;
import serializeAppStartLogsDefault from "serializeAppStartLogs" /* 10323 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1346 */;
import NativeTTIManagerModule from "NativeTTIManagerModule" /* 4504 */;

const require = globalThis.__r;

require = fn;
function Code(arg0) {
  ({ children, color } = arg0);
  const tmp = closure_11();
  return React6(Text_Text.Text, { variant: "text-sm/normal", color, lineClamp: 1, style: closure_11().code, children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, code: { fontFamily: fn(1074).Fonts.CODE_BOLD }, border: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.border = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let closure_11 = createStyles.createStyles(obj2);
const appStartedTimestamp = NativeTTIManagerModule.getAppStartedTimestamp();
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default function UserSettingsStartupTimings() {
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
  const onPress = obj.useCallback(first1(function*() {
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value: tmp5(4504).getAppFirstVisibleTimestamp(), done: false };
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
          closure_128_1 = tmp5(10323)(closure_128_0);
          const obj7 = { message: closure_128_1 };
          tmp2(8482).showShareActionSheet(obj7, "Startup Timing");
          c3 = 3;
          return { value: "HermesInternal", done: null };
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
  obj5.contentContainerStyle = { paddingBottom: checked(1612)().bottom + tmp2(576).space.PX_16 };
  obj5.ListHeaderComponent = function ListHeaderComponent() {
    const obj = { spacing: 16, style: { padding: 16 }, children: null };
    const obj2 = {
      title: "Performance testing",
      hasIcons: false,
      children: React6(TableCheckboxRow.TableCheckboxRow, {
        label: "Show start times at launch",
        onPress() {
          return closure_0(1347).setDeveloperOptionSettings({ alertStartupMetrics: !checked });
        },
        checked
      })
    };
    const items = [React6(TableRowGroup.TableRowGroup, obj2), , , , ];
    const obj4 = { children: null };
    const obj5 = { color: "text-brand", children: null };
    const result = closure_7 / 1000;
    obj5.children = "" + result + "s (" + Math.round(closure_7 / num * 100) + "%)";
    const items1 = ["Native: ", React6(Code, obj5)];
    obj4.children = items1;
    const items2 = [React7(Code, obj4), , , , , , , ];
    const obj6 = { children: null };
    const obj7 = { color: "text-brand", children: null };
    const result1 = closure_11 / 1000;
    obj7.children = "" + result1 + "s (" + Math.round(closure_11 / num * 100) + "%)";
    const items3 = ["JS Imports: ", React6(Code, obj7)];
    obj6.children = items3;
    items2[1] = React7(Code, obj6);
    const obj8 = { children: null };
    const obj9 = { color: "text-brand", children: null };
    const result2 = closure_8 / 1000;
    obj9.children = "" + result2 + "s (" + Math.round(closure_8 / num * 100) + "%)";
    const items4 = ["Mini Cache: ", React6(Code, obj9)];
    obj8.children = items4;
    items2[2] = React7(Code, obj8);
    const obj10 = { children: null };
    const obj11 = { color: "text-brand", children: null };
    const result3 = closure_9 / 1000;
    obj11.children = "" + result3 + "s (" + Math.round(closure_9 / num * 100) + "%)";
    const items5 = ["Lazy Cache: ", React6(Code, obj11)];
    obj10.children = items5;
    items2[3] = React7(Code, obj10);
    const obj12 = { children: null };
    const obj13 = { color: "text-brand", children: null };
    const result4 = closure_10 / 1000;
    obj13.children = "" + result4 + "s (" + Math.round(closure_10 / num * 100) + "%)";
    const items6 = ["Ready: ", React6(Code, obj13)];
    obj12.children = items6;
    items2[4] = React7(Code, obj12);
    let str = "";
    if (null != num) {
      str = "";
      if (tmp8 > 0) {
        str = `${tmp8 / 1000}s`;
      }
    }
    const obj14 = { children: null };
    const items7 = ["TTI (first contentful paint): ", React6(Code, { color: "text-brand", children: str })];
    obj14.children = items7;
    items2[5] = React7(Code, obj14);
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
    const items8 = ["Cached Messages Render: ", React6(Code, { color: "text-brand", children: str3 })];
    obj15.children = items8;
    items2[6] = React7(Code, obj15);
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
    const items9 = ["Latest Messages Render: ", React6(Code, { color: "text-brand", children: str5 })];
    obj20.children = items9;
    items2[7] = React7(Code, obj20);
    obj19.children = items2;
    obj18.label = React7(closure_2_10, obj19);
    obj17.children = React6(TableRow.TableRow, obj18);
    items[1] = React6(TableRowGroup.TableRowGroup, obj17);
    const obj21 = { title: "Legend", hasIcons: false, children: null };
    const obj22 = { label: null };
    const obj23 = { children: null };
    const items10 = [React7(Code, { children: ["\u2615", " - Java / Kotlin"] }), React7(Code, { children: ["\u{1F3A8}", " - React render"] }), React7(Code, { children: ["\u{1F4BE}", " - CacheStore"] }), React7(Code, { children: ["\u{1F9A5}", " - Slow Store Update / Handler"] }), React7(Code, { children: ["\u{1F3C3}", " - Startup Event"] }), React7(Code, { children: ["\u{1F310}", " - Socket Event"] })];
    obj23.children = items10;
    obj22.label = React7(closure_2_10, obj23);
    obj21.children = React6(TableRow.TableRow, obj22);
    items[2] = React6(TableRowGroup.TableRowGroup, obj21);
    const obj24 = { title: "Detailed Times", hasIcons: false, children: null };
    const items11 = [
      React6(TableCheckboxRow.TableCheckboxRow, {
        label: "Hide the Noise",
        onPress() {
          return dependencyMap((arg0) => !arg0);
        },
        checked
      }),
      React6(TableCheckboxRow.TableCheckboxRow, {
        label: "Hide paints",
        onPress() {
          return closure_1_4((arg0) => !arg0);
        },
        checked: !first1
      })
    ];
    obj24.children = items11;
    items[3] = React7(TableRowGroup.TableRowGroup, obj24);
    const obj27 = { title: "Share Timings", hasIcons: true, children: React6(TableRow.TableRow, { icon: React6(ShareIcon.ShareIcon, {}), label: "Copy timings to clipboard.", arrow: true, onPress }) };
    items[4] = React6(TableRowGroup.TableRowGroup, obj27);
    obj.children = items;
    const items12 = [React7(Stack_Stack.Stack, obj), React6(View, { style: border.border })];
    obj16.children = items12;
    return React7(closure_2_10, obj16);
  };
  obj5.data = memo;
  obj5.renderItem = function renderItem(children) {
    return closure_8(lastTrackedAppUiViewed2Properties, { children: children.item });
  };
  obj4.children = closure_8(tmp10(9006).FlashList, obj5);
  return closure_8(checked, obj4);
};