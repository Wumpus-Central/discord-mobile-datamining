// === Module 15409: DevToolsAnalyticsScreen ===

// Module 15409 (DevToolsAnalyticsScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import _modDef4461 from "module_4461" /* 4461 */;
import Text_Text from "Text/Text" /* 4886 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 14163 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { analyticsContainer: obj2, contentContainer: obj3, searchFieldContainer: obj4, detailsContainer: obj5, commonPropertiesContainer: obj6, commonProperty: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, height: 20 }, customPropertiesContainer: { paddingHorizontal: 10, paddingVertical: 4 }, customProperty: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-start", marginVertical: 4 }, customPropertyName: { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 }, monospace: { fontFamily: Fonts.CODE_BOLD }, copyContainer: { flexDirection: "row", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let name;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  ({ name, children } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== name) {
    const obj2 = { variant: "text-sm/semibold", color: "text-default", children: name };
    const tmp7 = metroImportAll(Text_Text.Text, obj2);
    cResult[0] = name;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.commonProperty) {
      let tmp8;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.commonProperty, children: items };
  items = [tmp5, children];
  const tmp9 = React4(View, obj3);
  cResult[2] = children;
  cResult[3] = tmp4.commonProperty;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let children;
  let items;
  let name;
  ({ name, children } = arg0);
  const obj = { style: closure_10().commonProperty, children: items };
  items = [metroImportAll(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: name }), children];
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let event;
  let fingerprint;
  let properties;
  let start;
  let timestamp;
  let tmp11;
  let tmp14;
  let tmp6;
  let obj = fingerprint(576);
  const cResult = obj.c(22);
  ({ event, properties, timestamp, fingerprint } = arg0);
  ({ start, end } = arg0);
  let closure_1 = closure_10();
  closure_10();
  [tmp6, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== fingerprint) {
    const user = UserStore.getUser(fingerprint);
    cResult[0] = fingerprint;
    cResult[1] = user;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_8(fingerprint(10108).AnalyticsIcon, {});
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== properties) {
    let str3;
    if ("name" in properties) {
      str3 = properties.name;
    } else {
      str3 = undefined;
      if (properties.location != null) {
        str3 = str2.toString();
      }
      if (str3 == null) {
        str3 = "N/A";
      }
    }
    cResult[3] = properties;
    cResult[4] = str3;
    tmp14 = str3;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return closure_2(() => { /* body not rendered: F144711 */ });
      }
    }
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        return closure_2(() => { /* body not rendered: F144711 */ });
      }
    }
  }
  if (cResult[6] === end) {
    class F {
      constructor() {
        return closure_2(() => { /* body not rendered: F144711 */ });
      }
    }
  }
  cResult[6] = end;
  cResult[7] = event;
  cResult[8] = start;
  cResult[9] = !tmp6;
  cResult[10] = tmp14;
  cResult[11] = closure_8(fingerprint(5993).TableRow, { arrow: !tmp6, icon: tmp11, label: event, subLabel: tmp14, onPress: F, start, end });
  closure_8(fingerprint(5993).TableRow, { arrow: !tmp6, icon: tmp11, label: event, subLabel: tmp14, onPress: F, start, end });
}) : ((arg0) => {
  let Text;
  let _undefined;
  let c2;
  let closure_1;
  let end;
  let entries;
  let event;
  let fingerprint;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj5;
  let obj6;
  let obj8;
  let properties;
  let start;
  let str2;
  let timestamp;
  let tmp3;
  let tmp5Result2;
  ({ properties, fingerprint } = arg0);
  dependencyMap = undefined;
  ({ event, timestamp, start, end } = arg0);
  const tmp = closure_10();
  importDefault = tmp;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const user = UserStore.getUser(fingerprint);
  let obj = {
    arrow: !tmp5Result2,
    icon: closure_8(fingerprint(10108).AnalyticsIcon, {}),
    label: event,
    subLabel: str2,
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    start,
    end
  };
  const TableRow = fingerprint(5993).TableRow;
  if ("name" in properties) {
    str2 = properties.name;
  } else {
    str2 = undefined;
    if (properties.location != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "N/A";
    }
  }
  const children = [closure_8(TableRow, obj), ];
  if (tmp5Result2) {
    let tmp7Result1;
    let obj2 = { style: tmp.detailsContainer, children: items4 };
    let obj3 = { style: tmp.commonPropertiesContainer, children: items1 };
    let obj4 = { name: "Timestamp (local)", children: closure_8(Text, obj5) };
    obj5 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: obj6.calendar() };
    Text = fingerprint(4886).Text;
    obj6 = _modDef4461(timestamp);
    items1 = [closure_8(closure_11, obj4), , ];
    let tmp7Result = null != user;
    const tmp12 = importDefault;
    if (tmp7Result) {
      const obj7 = { name: "User ", children: closure_8(tmp12(9296), obj8) };
      obj8 = { user };
      tmp7Result = closure_8(closure_11, obj7);
    }
    items1[1] = tmp7Result;
    if (null != fingerprint) {
      const obj9 = {
        style: tmp.copyContainer,
        onPress() {
              if (null != fingerprint) {
                const obj = ClipboardUtils;
                obj.copy(tmp);
              }
            },
        children: items3
      };
      const PressableOpacity = fingerprint(5909).PressableOpacity;
      const obj10 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: items2, children: fingerprint };
      items2 = [tmp.monospace, { marginRight: 4 }];
      items3 = [closure_8(fingerprint(4886).Text, obj10), closure_8(fingerprint(4843).CopyIcon, { size: "sm" })];
      tmp7Result1 = closure_9(PressableOpacity, obj9);
    } else {
      const obj11 = { variant: "text-sm/medium", color: "text-muted", style: tmp.monospace, children: "null" };
      tmp7Result1 = closure_8(fingerprint(4886).Text, obj11);
    }
    const obj12 = { name: "Fingerprint", children: tmp7Result1 };
    items1[2] = closure_8(closure_11, obj12);
    items4 = [closure_9(View, obj3), ];
    const _Object = Object;
    const obj13 = {
      style: tmp.customPropertiesContainer,
      children: entries.map((item) => {
          let items;
          let items1;
          let obj4;
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj2 = { variant: "text-sm/semibold", color: "text-brand", style: closure_1.customPropertyName, children: items };
          items = [tmp, ":"];
          const obj = { style: closure_1.customProperty, children: items1 };
          items1 = [React4(Text_Text.Text, obj2), ];
          const Text = Text_Text.Text;
          if (null != tmp2) {
            const _JSON = JSON;
            obj4 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: closure_1.monospace, children: JSON.stringify(tmp2) };
            const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: closure_1.monospace, children: JSON.stringify(tmp2) };
          } else {
            obj4 = { variant: "text-sm/semibold", color: "text-muted", style: closure_1.monospace, children: "null" };
          }
          items1[1] = metroImportAll(Text, obj4);
          return React4(View, obj, tmp);
        })
    };
    entries = Object.entries(properties);
    items4[1] = closure_8(View, obj13);
    tmp5Result2 = closure_9(View, obj2);
  }
  children[1] = tmp5Result2;
  return closure_9(View, { collapsable: false, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items1;
  let items2;
  let loggedEventsVersion;
  let reversed;
  let tmp11;
  let tmp5;
  let tmp6;
  let trimmed;
  let obj = trimmed(576);
  const cResult = obj.c(35);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AnalyticsLogStore];
    const fn = function s() {
      return loggedEventsVersion.loggedEventsVersion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = trimmed(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const loggedEvents = AnalyticsLogStore.loggedEvents;
  [first, tmp11] = react.useState(false);
  let str = _slicedToArray(react.useState(""), 2)[0];
  _slicedToArray(react.useState(""), 2);
  if (cResult[2] === first) {
    let arr3;
    let arr4;
    let tmp17;
    let tmp20;
    let tmp23;
    let tmp26;
    let tmp29;
    let tmp32;
    let tmp37;
    if (cResult[3] === str) {
      arr3 = cResult[4];
      arr4 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_8(trimmed(11775).ArrowsUpDownIcon, {});
      cResult[6] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] !== first) {
      const obj2 = { icon: tmp17, label: "Reverse Events", value: first, onValueChange: tmp11 };
      const tmp22 = closure_8(trimmed(6698).TableSwitchRow, obj2);
      cResult[7] = first;
      cResult[8] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { arrow: true, variant: "danger", icon: closure_8(trimmed(4847).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15404).clearAnalyticsLog };
      const TableRow = tmp(5993).TableRow;
      const tmp25 = closure_8(TableRow, obj3);
      cResult[9] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[9];
    }
    if (cResult[10] !== tmp20) {
      const obj4 = { title: "Actions", hasIcons: true, children: items1 };
      items1 = [tmp20, tmp23];
      const tmp28 = closure_9(trimmed(6074).TableRowGroup, obj4);
      cResult[10] = tmp20;
      cResult[11] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { placeholder: "Search by event name", onChange: tmp13 };
      const tmp31 = closure_8(trimmed(6547).SearchField, obj5);
      cResult[12] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[12];
    }
    if (cResult[13] !== tmp4.searchFieldContainer) {
      const obj6 = { style: tmp4.searchFieldContainer, children: tmp29 };
      const tmp35 = closure_8(View, obj6);
      cResult[13] = tmp4.searchFieldContainer;
      cResult[14] = tmp35;
      tmp32 = tmp35;
    } else {
      tmp32 = cResult[14];
    }
    if (cResult[15] === arr3) {
      let tmp36;
      let tmp40;
      if (cResult[16] === str) {
        tmp36 = cResult[17];
      }
      if (cResult[18] !== tmp36) {
        const obj7 = { title: "Analytics Events", hasIcons: false, children: tmp36 };
        const tmp42 = closure_8(trimmed(6074).TableRowGroup, obj7);
        cResult[18] = tmp36;
        cResult[19] = tmp42;
        tmp40 = tmp42;
      } else {
        tmp40 = cResult[19];
      }
      if (cResult[20] === tmp40) {
        if (cResult[21] === tmp26) {
          let tmp43;
          let tmp46;
          if (cResult[22] === tmp32) {
            tmp43 = cResult[23];
          }
          if (cResult[24] !== arr4.length) {
            const fn2 = function k(arg0) {
              let index;
              let item;
              ({ item, index } = arg0);
              const obj = { start: 0 === index, end: index === arr4.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint };
              return metroImportAll(closure_12, obj);
            };
            cResult[24] = arr4.length;
            cResult[25] = fn2;
            tmp46 = fn2;
          } else {
            tmp46 = cResult[25];
          }
          if (cResult[26] === arr4) {
            if (cResult[27] === stateFromStores) {
              if (cResult[28] === tmp4.contentContainer) {
                if (cResult[29] === tmp43) {
                  let tmp47;
                  if (cResult[30] === tmp46) {
                    tmp47 = cResult[31];
                  }
                  if (cResult[32] === tmp4.analyticsContainer) {
                    let tmp50;
                    if (cResult[33] === tmp47) {
                      tmp50 = cResult[34];
                    }
                    return tmp50;
                  }
                  const obj8 = { style: tmp4.analyticsContainer, children: tmp47 };
                  const tmp53 = closure_8(View, obj8);
                  cResult[32] = tmp4.analyticsContainer;
                  cResult[33] = tmp47;
                  cResult[34] = tmp53;
                  tmp50 = tmp53;
                }
              }
            }
          }
          const obj9 = { ListHeaderComponent: tmp43, contentContainerStyle: tmp4.contentContainer, extraData: stateFromStores, data: arr4, renderItem: tmp46 };
          const tmp49 = closure_8(trimmed(8371).FlashList, obj9);
          cResult[26] = arr4;
          cResult[27] = stateFromStores;
          cResult[28] = tmp4.contentContainer;
          cResult[29] = tmp43;
          cResult[30] = tmp46;
          cResult[31] = tmp49;
          tmp47 = tmp49;
        }
      }
      const obj10 = { spacing: 16, children: items2 };
      items2 = [tmp26, tmp32, tmp40];
      const tmp45 = closure_9(trimmed(5593).Stack, obj10);
      cResult[20] = tmp40;
      cResult[21] = tmp26;
      cResult[22] = tmp32;
      cResult[23] = tmp45;
      tmp43 = tmp45;
    }
    if (0 === loggedEvents.length) {
      tmp37 = closure_8(tmp(5993).TableRow, { label: "No events logged." });
    } else {
      tmp37 = null;
      if (0 === arr3.length) {
        const _HermesInternal = HermesInternal;
        const obj11 = { label: "No events match \"" + str + "\"" };
        const TableRow2 = tmp(5993).TableRow;
        tmp37 = closure_8(TableRow2, obj11);
      }
    }
    cResult[15] = arr3;
    cResult[16] = str;
    cResult[17] = tmp37;
    tmp36 = tmp37;
  }
  const str2 = str.toLowerCase();
  trimmed = str2.trim();
  let found = loggedEvents;
  if ("" !== trimmed) {
    found = loggedEvents.filter((event) => {
      const str = event.event;
      const formatted = str.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items3 = [...found];
  if (first) {
    reversed = items3.reverse();
  } else {
    reversed = items3;
  }
  cResult[2] = first;
  cResult[3] = str;
  cResult[4] = found;
  cResult[5] = reversed;
  arr4 = reversed;
  arr3 = found;
}) : (() => {
  let FlashList;
  let first;
  let items2;
  let loggedEventsVersion;
  let obj8;
  let obj9;
  let reversed;
  let str;
  let tmp12Result;
  let tmp7;
  let tmp9;
  let trimmed;
  const tmp = closure_10();
  let obj = trimmed(504);
  const items = [AnalyticsLogStore];
  const loggedEvents = AnalyticsLogStore.loggedEvents;
  const stateFromStores = obj.useStateFromStores(items, () => loggedEventsVersion.loggedEventsVersion);
  [first, tmp7] = react.useState(false);
  [str, tmp9] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const str2 = str.toLowerCase();
  trimmed = str2.trim();
  let found = loggedEvents;
  if ("" !== trimmed) {
    found = loggedEvents.filter((event) => {
      const str = event.event;
      const formatted = str.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items1 = [...found];
  if (first) {
    reversed = items1.reverse();
  } else {
    reversed = items1;
  }
  const obj2 = { style: tmp.analyticsContainer, children: closure_8(FlashList, obj8) };
  FlashList = tmp2(8371).FlashList;
  const Stack = tmp2(5593).Stack;
  const obj3 = { title: "Actions", hasIcons: true, children: items2 };
  const TableRowGroup = tmp2(6074).TableRowGroup;
  const obj4 = { icon: closure_8(trimmed(11775).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp7 };
  const TableSwitchRow = tmp2(6698).TableSwitchRow;
  items2 = [closure_8(TableSwitchRow, obj4), ];
  const obj5 = { arrow: true, variant: "danger", icon: closure_8(trimmed(4847).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15404).clearAnalyticsLog };
  const TableRow = tmp2(5993).TableRow;
  items2[1] = closure_8(TableRow, obj5);
  const items3 = [closure_9(TableRowGroup, obj3), , ];
  const obj6 = { style: tmp.searchFieldContainer, children: closure_8(trimmed(6547).SearchField, { placeholder: "Search by event name", onChange: tmp9 }) };
  items3[1] = closure_8(View, obj6);
  const TableRowGroup2 = tmp2(6074).TableRowGroup;
  if (0 === loggedEvents.length) {
    tmp12Result = closure_8(tmp2(5993).TableRow, { label: "No events logged." });
  } else {
    tmp12Result = null;
    if (0 === found.length) {
      const _HermesInternal = HermesInternal;
      const obj7 = { label: "No events match \"" + str + "\"" };
      const TableRow2 = tmp2(5993).TableRow;
      tmp12Result = closure_8(TableRow2, obj7);
    }
  }
  obj8 = {
    ListHeaderComponent: closure_9(Stack, obj9),
    contentContainerStyle: tmp.contentContainer,
    extraData: stateFromStores,
    data: reversed,
    renderItem(arg0) {
      let index;
      let item;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint };
      return metroImportAll(closure_12, obj);
    }
  };
  obj9 = { spacing: 16, children: items3 };
  items3[2] = closure_8(TableRowGroup2, { title: "Analytics Events", hasIcons: false, children: tmp12Result });
  return closure_8(View, obj2);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default tmp4;