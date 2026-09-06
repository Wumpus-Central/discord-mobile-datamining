// discord_app/modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ShareIcon from "../../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx";
import serializeAppStartLogsDefault from "../../../debug/serializeAppStartLogs.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DeveloperOptionsStore from "../../../../stores/DeveloperOptionsStore.tsx";
import NativeTTIManagerModule from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";

require = fn;
function Code(arg0) {
  ({ children, color } = arg0);
  const tmp = closure_11();
  return React6(Text_Text.Text, { variant: "text-sm/normal", color, lineClamp: 1, style: closure_11().code, children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, code: null, border: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrap = createStyles;
createStyles.code = { fontFamily: fn(1074).Fonts.CODE_BOLD };
createStyles.border = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let closure_11 = createStyles.createStyles(createStyles);
const appStartedTimestamp = NativeTTIManagerModule.getAppStartedTimestamp();
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default function UserSettingsStartupTimings() {
  const tmp = closure_11();
  _require = tmp;
  let obj = noop;
  const tmp4 = _slicedToArray(noop.useState(true), 2);
  let checked = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  const first1 = tmp6[0];
  _slicedToArray = tmp6[1];
  const useResult = noop.use(num);
  noop = useResult;
  let items = [useResult, checked, first1];
  const memo = noop.useMemo(() => serializeAppStartLogsDefault(useResult, !first, first1).split("\n"), items);
  let obj1 = require("initialize");
  let items1 = [alertStartupMetrics];
  checked = obj1.useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  alertStartupMetrics = checked(9).loadIndex.start - useResult;
  const diff = checked(9).loadMiniCache.end - checked(9).loadMiniCache.start;
  closure_8 = diff + (checked(9).parseStorage.end - checked(9).parseStorage.start);
  closure_9 = checked(9).loadLazyCache.end - checked(9).loadLazyCache.start;
  closure_10 = checked(9).ready.end - checked(9).ready.start;
  closure_11 = Math.ceil(checked(9).renderLatestMessages.importTime);
  const lastTrackedAppUiViewed2Properties = require("TTIAnalyticsUtils").getLastTrackedAppUiViewed2Properties();
  num = undefined;
  if (lastTrackedAppUiViewed2Properties != null) {
    num = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  if (num == null) {
    num = 0;
  }
  const onPress = obj.useCallback(
    first1(function* () {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              let obj3 = tmp5(4424);
              dependencyMap = 1;
              c3 = 1;
              const obj1 = { value: obj3.getAppFirstVisibleTimestamp(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            closure_128_1 = tmp5(10193)(closure_128_0);
            obj = tmp2(8361);
            obj3 = { message: closure_128_1 };
            obj.showShareActionSheet(obj3, "Startup Timing");
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    }),
    [],
  );
  obj = { style: tmp.wrap, children: null };
  obj = { contentContainerStyle: null, ListHeaderComponent: null, data: null, renderItem: null };
  obj1 = { paddingBottom: checked(1611)().bottom + checked(576).space.PX_16 };
  obj.contentContainerStyle = obj1;
  obj.ListHeaderComponent = function ListHeaderComponent() {
    let obj = { spacing: 16, style: { padding: 16 }, children: null };
    obj = { title: "Performance testing", hasIcons: false, children: null };
    obj = {
      label: "Show start times at launch",
      onPress() {
        closure_0(1348);
        const obj = { alertStartupMetrics: !checked };
        return obj.setDeveloperOptionSettings(obj);
      },
      checked,
    };
    obj.children = React6(TableCheckboxRow.TableCheckboxRow, obj);
    const items = [React6(TableRowGroup.TableRowGroup, obj), , , ,];
    const obj1 = { children: null };
    const obj2 = { color: "text-brand", children: null };
    const result = closure_7 / 1000;
    obj2.children = "" + result + "s (" + Math.round((closure_7 / num) * 100) + "%)";
    const items1 = ["Native: ", React6(Code, obj2)];
    obj1.children = items1;
    const items2 = [React7(Code, obj1), , , , , , ,];
    const obj3 = { children: null };
    const obj4 = { color: "text-brand", children: null };
    const result1 = closure_11 / 1000;
    obj4.children = "" + result1 + "s (" + Math.round((closure_11 / num) * 100) + "%)";
    const items3 = ["JS Imports: ", React6(Code, obj4)];
    obj3.children = items3;
    items2[1] = React7(Code, obj3);
    const obj5 = { children: null };
    const obj6 = { color: "text-brand", children: null };
    const result2 = closure_8 / 1000;
    obj6.children = "" + result2 + "s (" + Math.round((closure_8 / num) * 100) + "%)";
    const items4 = ["Mini Cache: ", React6(Code, obj6)];
    obj5.children = items4;
    items2[2] = React7(Code, obj5);
    const obj7 = { children: null };
    const obj8 = { color: "text-brand", children: null };
    const result3 = closure_9 / 1000;
    obj8.children = "" + result3 + "s (" + Math.round((closure_9 / num) * 100) + "%)";
    const items5 = ["Lazy Cache: ", React6(Code, obj8)];
    obj7.children = items5;
    items2[3] = React7(Code, obj7);
    const obj9 = { children: null };
    const obj10 = { color: "text-brand", children: null };
    const result4 = closure_10 / 1000;
    obj10.children = "" + result4 + "s (" + Math.round((closure_10 / num) * 100) + "%)";
    const items6 = ["Ready: ", React6(Code, obj10)];
    obj9.children = items6;
    items2[4] = React7(Code, obj9);
    let str = "";
    if (null != num) {
      str = "";
      if (tmp8 > 0) {
        str = `${tmp8 / 1000}s`;
      }
    }
    const obj11 = { children: null };
    const items7 = ["TTI (first contentful paint): ", React6(Code, { color: "text-brand", children: str })];
    obj11.children = items7;
    items2[5] = React7(Code, obj11);
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
    const obj12 = { children: null };
    const items8 = ["Cached Messages Render: ", React6(Code, { color: "text-brand", children: str3 })];
    obj12.children = items8;
    items2[6] = React7(Code, obj12);
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
    const obj13 = { children: null };
    const obj14 = { title: "Key Cold Start Times", hasIcons: false, children: null };
    const obj15 = { label: null };
    const obj16 = { children: null };
    const obj17 = { children: null };
    const items9 = ["Latest Messages Render: ", React6(Code, { color: "text-brand", children: str5 })];
    obj17.children = items9;
    items2[7] = React7(Code, obj17);
    obj16.children = items2;
    obj15.label = React7(closure_2_10, obj16);
    obj14.children = React6(TableRow.TableRow, obj15);
    items[1] = React6(TableRowGroup.TableRowGroup, obj14);
    const obj18 = { title: "Legend", hasIcons: false, children: null };
    const obj19 = { label: null };
    const obj20 = { children: null };
    const items10 = [
      React7(Code, { children: ["\u2615", " - Java / Kotlin"] }),
      React7(Code, { children: ["\u{1F3A8}", " - React render"] }),
      React7(Code, { children: ["\u{1F4BE}", " - CacheStore"] }),
      React7(Code, { children: ["\u{1F9A5}", " - Slow Store Update / Handler"] }),
      React7(Code, { children: ["\u{1F3C3}", " - Startup Event"] }),
      React7(Code, { children: ["\u{1F310}", " - Socket Event"] }),
    ];
    obj20.children = items10;
    obj19.label = React7(closure_2_10, obj20);
    obj18.children = React6(TableRow.TableRow, obj19);
    items[2] = React6(TableRowGroup.TableRowGroup, obj18);
    const obj21 = { title: "Detailed Times", hasIcons: false, children: null };
    const items11 = [
      React6(TableCheckboxRow.TableCheckboxRow, {
        label: "Hide the Noise",
        onPress() {
          return dependencyMap((arg0) => !arg0);
        },
        checked,
      }),
      React6(TableCheckboxRow.TableCheckboxRow, {
        label: "Hide paints",
        onPress() {
          return closure_1_4((arg0) => !arg0);
        },
        checked: !first1,
      }),
    ];
    obj21.children = items11;
    items[3] = React7(TableRowGroup.TableRowGroup, obj21);
    const obj24 = {
      title: "Share Timings",
      hasIcons: true,
      children: React6(TableRow.TableRow, {
        icon: React6(ShareIcon.ShareIcon, {}),
        label: "Copy timings to clipboard.",
        arrow: true,
        onPress,
      }),
    };
    items[4] = React6(TableRowGroup.TableRowGroup, obj24);
    obj.children = items;
    const items12 = [React7(Stack_Stack.Stack, obj), React6(View, { style: border.border })];
    obj13.children = items12;
    return React7(closure_2_10, obj13);
  };
  obj.data = memo;
  obj.renderItem = function renderItem(children) {
    return closure_8(lastTrackedAppUiViewed2Properties, { children: children.item });
  };
  obj.children = closure_8(require("../../../../../discord_common/js/packages/flash-list/index.js").FlashList, obj);
  return closure_8(checked, obj);
}
