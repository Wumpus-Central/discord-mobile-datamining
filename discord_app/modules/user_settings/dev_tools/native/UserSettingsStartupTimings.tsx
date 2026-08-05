// discord_app/modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import TableRowGroupTitle from "TableRowGroupTitle";
import { View } from "noop";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import jsxProd from "setDeveloperOptionSettings";
import createCacheKey from "createCacheKey";
import importDefaultResult from "enforcing";
import { noop } from "../../../../../discord_common/js/packages/flash-list/index.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getDeviceMetadata } from "../../../tti_analytics/native/TTIAnalyticsUtils.tsx";

let c10;
let c9;
let metroImportAll;
let require = arg1;
function Code(arg0) {
  let children;
  let color;
  ({ children, color } = arg0);
  const tmp = createCacheKey();
  return callback2(Text /* Text */.Text, { variant: "text-sm/normal", color, lineClamp: 1, style: createCacheKey().code, children });
}
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = { wrap: null, code: null, border: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontFamily: require("ME").Fonts.CODE_BOLD };
createCacheKey[2] = { height: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
const appStartedTimestamp = require("enforcing").getAppStartedTimestamp();
let result = require("noop").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsStartupTimings.tsx");

export default function UserSettingsStartupTimings() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = React;
  const tmp4 = callback(React.useState(true), 2);
  const first = tmp4[0];
  let dependencyMap = tmp4[1];
  const tmp6 = callback(React.useState(true), 2);
  const first1 = tmp6[0];
  callback = tmp6[1];
  const useResult = React.use(num);
  React = useResult;
  let items = [useResult, first, first1];
  const memo = React.useMemo(() => first(9790)(TableRowGroupTitle, !first, first1).split("\n"), items);
  let obj1 = initialize /* initialize */;
  let items1 = [refreshSourceMapCookie];
  let closure_6 = obj1.useStateFromStores(items1, () => alertStartupMetrics.alertStartupMetrics);
  refreshSourceMapCookie = first(9).loadIndex.start - useResult;
  const diff = first(9).loadMiniCache.end - first(9).loadMiniCache.start;
  const callback2 = diff + (first(9).parseStorage.end - first(9).parseStorage.start);
  let closure_9 = first(9).loadLazyCache.end - first(9).loadLazyCache.start;
  let closure_10 = first(9).ready.end - first(9).ready.start;
  createCacheKey = Math.ceil(first(9).renderLatestMessages.importTime);
  const lastTrackedAppUiViewed2Properties = getDeviceMetadata /* getDeviceMetadata */.getLastTrackedAppUiViewed2Properties();
  num = undefined;
  if (lastTrackedAppUiViewed2Properties != null) {
    num = lastTrackedAppUiViewed2Properties.time_first_contentful_paint;
  }
  if (num == null) {
    num = 0;
  }
  let closure_14 = obj.useCallback(first1(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            let obj3 = outer1_1(4143);
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj3.getAppFirstVisibleTimestamp();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          closure_1 = outer1_1(9790)(closure_0);
          obj = outer1_0(8845);
          obj3 = { message: null };
          obj3[0] = closure_1;
          obj.showShareActionSheet(obj3, "Startup Timing");
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  }), []);
  obj = { style: tmp.wrap, children: null };
  obj = { contentContainerStyle: null, ListHeaderComponent: null, data: null, renderItem: null };
  obj1 = { paddingBottom: null };
  obj1[0] = first(1581)().bottom + first(712).space.PX_16;
  obj[0] = obj1;
  obj[1] = function ListHeaderComponent() {
    let obj = { spacing: 16, style: { padding: 16 }, children: null };
    obj = { title: "Performance testing", hasIcons: false, children: null };
    obj = {
      label: "Show start times at launch",
      onPress() {
        let obj = outer1_0(outer1_2[21]);
        obj = { alertStartupMetrics: !closure_6 };
        return obj.setDeveloperOptionSettings(obj);
      },
      checked: closure_6
    };
    obj[2] = callback(callback2(8259).TableCheckboxRow, obj);
    const items = [callback(callback2(5649).TableRowGroup, obj), , , , ];
    const obj1 = { children: null };
    const obj2 = { color: "text-brand", children: null };
    const result = refreshSourceMapCookie / 1000;
    obj2[1] = "" + result + "s (" + Math.round(refreshSourceMapCookie / num * 100) + "%)";
    const items1 = ["Native: ", callback(lastTrackedAppUiViewed2Properties, obj2)];
    obj1[0] = items1;
    const items2 = [callback2(lastTrackedAppUiViewed2Properties, obj1), , , , , , , ];
    const obj3 = { children: null };
    const result1 = closure_11 / 1000;
    const items3 = ["JS Imports: ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: "" + result1 + "s (" + Math.round(closure_11 / num * 100) + "%)" })];
    obj3[0] = items3;
    items2[1] = callback2(lastTrackedAppUiViewed2Properties, obj3);
    const obj5 = { children: null };
    const obj4 = { color: "text-brand", children: "" + result1 + "s (" + Math.round(closure_11 / num * 100) + "%)" };
    const result2 = callback / 1000;
    const items4 = ["Mini Cache: ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: "" + result2 + "s (" + Math.round(callback / num * 100) + "%)" })];
    obj5[0] = items4;
    items2[2] = callback2(lastTrackedAppUiViewed2Properties, obj5);
    const obj7 = { children: null };
    const obj6 = { color: "text-brand", children: "" + result2 + "s (" + Math.round(callback / num * 100) + "%)" };
    const result3 = callback2 / 1000;
    const items5 = ["Lazy Cache: ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: "" + result3 + "s (" + Math.round(callback2 / num * 100) + "%)" })];
    obj7[0] = items5;
    items2[3] = callback2(lastTrackedAppUiViewed2Properties, obj7);
    const obj9 = { children: null };
    const obj8 = { color: "text-brand", children: "" + result3 + "s (" + Math.round(callback2 / num * 100) + "%)" };
    const result4 = closure_10 / 1000;
    const items6 = ["Ready: ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: "" + result4 + "s (" + Math.round(closure_10 / num * 100) + "%)" })];
    obj9[0] = items6;
    items2[4] = callback2(lastTrackedAppUiViewed2Properties, obj9);
    let str = "";
    if (null != num) {
      str = "";
      if (tmp8 > 0) {
        str = `${tmp8 / 1000}s`;
      }
    }
    const obj11 = { children: null };
    const items7 = ["TTI (first contentful paint): ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: str })];
    obj11[0] = items7;
    items2[5] = callback2(lastTrackedAppUiViewed2Properties, obj11);
    let prop;
    if (lastTrackedAppUiViewed2Properties != null) {
      prop = tmp13.time_display_messages_with_cache_end;
    }
    let str3 = "";
    if (null != prop) {
      str3 = "";
      if (prop > 0) {
        str3 = `${tmp14 / 1000}s`;
      }
    }
    const obj12 = { children: null };
    const items8 = ["Cached Messages Render: ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: str3 })];
    obj12[0] = items8;
    items2[6] = callback2(lastTrackedAppUiViewed2Properties, obj12);
    let prop1;
    if (lastTrackedAppUiViewed2Properties != null) {
      prop1 = tmp13.time_display_latest_messages_end;
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
    const items9 = ["Latest Messages Render: ", callback(lastTrackedAppUiViewed2Properties, { color: "text-brand", children: str5 })];
    obj17[0] = items9;
    items2[7] = callback2(lastTrackedAppUiViewed2Properties, obj17);
    obj16[0] = items2;
    obj15[0] = callback2(closure_10, obj16);
    obj14[2] = callback(callback2(5315).TableRow, obj15);
    items[1] = callback(callback2(5649).TableRowGroup, obj14);
    const obj18 = { title: "Legend", hasIcons: false, children: null };
    const obj19 = { label: null };
    const obj20 = { children: null };
    const items10 = [callback2(lastTrackedAppUiViewed2Properties, { children: ["\u2615", " - Java / Kotlin"] }), callback2(lastTrackedAppUiViewed2Properties, { children: ["\u{1F3A8}", " - React render"] }), callback2(lastTrackedAppUiViewed2Properties, { children: ["\u{1F4BE}", " - CacheStore"] }), callback2(lastTrackedAppUiViewed2Properties, { children: ["\u{1F9A5}", " - Slow Store Update / Handler"] }), callback2(lastTrackedAppUiViewed2Properties, { children: ["\u{1F3C3}", " - Startup Event"] }), callback2(lastTrackedAppUiViewed2Properties, { children: ["\u{1F310}", " - Socket Event"] })];
    obj20[0] = items10;
    obj19[0] = callback2(closure_10, obj20);
    obj18[2] = callback(callback2(5315).TableRow, obj19);
    items[2] = callback(callback2(5649).TableRowGroup, obj18);
    const obj21 = { title: "Detailed Times", hasIcons: false, children: null };
    const items11 = [
      callback(callback2(8259).TableCheckboxRow, {
        label: "Hide the Noise",
        onPress() {
          return callback((arg0) => !arg0);
        },
        checked: first
      }),
      callback(callback2(8259).TableCheckboxRow, {
        label: "Hide paints",
        onPress() {
          return callback2((arg0) => !arg0);
        },
        checked: !first1
      })
    ];
    obj21[2] = items11;
    items[3] = callback2(callback2(5649).TableRowGroup, obj21);
    const obj24 = { title: "Share Timings", hasIcons: true, children: null };
    const obj25 = { icon: null, label: "Copy timings to clipboard.", arrow: true, onPress: null };
    obj25[0] = callback(callback2(12142).ShareIcon, {});
    obj25[3] = closure_14;
    obj24[2] = callback(callback2(5315).TableRow, obj25);
    items[4] = callback(callback2(5649).TableRowGroup, obj24);
    obj[2] = items;
    const items12 = [callback2(callback2(4693).Stack, obj), callback(closure_6, { style: callback2.border })];
    obj13[0] = items12;
    return callback2(closure_10, obj13);
  };
  obj[2] = memo;
  obj[3] = function renderItem(children) {
    return callback(lastTrackedAppUiViewed2Properties, { children: children.item });
  };
  obj[1] = callback2(noop /* noop */.FlashList, obj);
  return callback2(closure_6, obj);
};