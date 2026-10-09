// discord_app/modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import AnalyticsLogStore from "../../../AnalyticsLogStore.tsx";

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { analyticsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null, searchFieldContainer: null, detailsContainer: null, commonPropertiesContainer: null, commonProperty: null, customPropertiesContainer: null, customProperty: null, customPropertyName: null, monospace: null, copyContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.searchFieldContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.detailsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.commonPropertiesContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
obj2.commonProperty = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, height: 20 };
obj2.customPropertiesContainer = { paddingHorizontal: 10, paddingVertical: 4 };
obj2.customProperty = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-start", marginVertical: 4 };
obj2.customPropertyName = { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 };
obj2.monospace = { fontFamily: Fonts.CODE_BOLD };
obj2.copyContainer = { flexDirection: "row", alignItems: "center" };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommonProperty(arg0) {
  const cResult = c.c(6);
  ({ name, children } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== name) {
    const obj2 = { variant: "text-sm/semibold", color: "text-default", children: name };
    const tmp7 = closure_1_8(Text_Text.Text, obj2);
    cResult[0] = name;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.commonProperty) {
      if (cResult[4] === tmp5) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.commonProperty, children: null };
  const items = [tmp5, children];
  obj3.children = items;
  const tmp9 = options(View, obj3);
  cResult[2] = children;
  cResult[3] = tmp4.commonProperty;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function CommonProperty(arg0) {
  ({ name, children } = arg0);
  const obj = { style: closure_10().commonProperty, children: null };
  const items = [closure_1_8(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: name }), children];
  obj.children = items;
  return options(View, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function LoggedEvent(arg0) {
  const cResult = fingerprint(576).c(22);
  ({ event, properties, timestamp, fingerprint } = arg0);
  ({ start, end } = arg0);
  let obj = fingerprint(576);
  closure_1 = closure_10();
  const tmp4 = closure_10();
  [tmp6, dependencyMap] = noop.useState(false);
  if (cResult[0] !== fingerprint) {
    const user = UserStore.getUser(fingerprint);
    cResult[0] = fingerprint;
    cResult[1] = user;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_8(fingerprint(9725).AnalyticsIcon, {});
    cResult[2] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== properties) {
    if ("name" in properties) {
      let str3 = properties.name;
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
  } else {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return closure_2(() => { ... });
        }
      }
      cResult[5] = E;
    } else {
      class E {
        constructor() {
          return closure_2(() => { ... });
        }
      }
    }
    if (cResult[6] === end) {
      class E {
        constructor() {
          return closure_2(() => { ... });
        }
      }
    }
    let obj2 = { arrow: tmp10, icon: tmp11, label: event, subLabel: cResult[4], onPress: E, start, end };
    const tmp20 = closure_8(fingerprint(6186).TableRow, obj2);
    cResult[6] = end;
    cResult[7] = event;
    cResult[8] = start;
    cResult[9] = tmp10;
    cResult[10] = cResult[4];
    cResult[11] = tmp20;
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : (function LoggedEvent(arg0) {
  ({ properties, fingerprint } = arg0);
  dependencyMap = undefined;
  ({ event, timestamp, start, end } = arg0);
  let map = closure_10();
  [tmp2, c2] = noop.useState(false);
  const user = UserStore.getUser(fingerprint);
  let CopyIcon = fingerprint;
  let tmp6Result2 = dependencyMap;
  let obj = { arrow: !tmp2, icon: closure_8(fingerprint(9725).AnalyticsIcon, {}), label: event, subLabel: null, onPress: null, start: null, end: null };
  if ("name" in properties) {
    let str2 = properties.name;
  } else {
    str2 = undefined;
    if (properties.location != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "N/A";
    }
  }
  obj.subLabel = str2;
  obj.onPress = function onPress() {
    return _undefined((arg0) => !arg0);
  };
  obj.start = start;
  obj.end = end;
  let items = [closure_8(fingerprint(6186).TableRow, obj), ];
  if (!tmp2) {
    let obj2 = { collapsable: false, children: null };
    items[1] = tmp2;
    obj2.children = items;
    return closure_9(View, obj2);
  } else {
    let obj3 = { style: map.detailsContainer, children: null };
    let obj4 = { style: map.commonPropertiesContainer, children: null };
    const obj6 = { name: "Timestamp (local)", children: null };
    const obj7 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: map(4661)(timestamp).calendar() };
    obj6.children = closure_8(CopyIcon(5087).Text, obj7);
    let items1 = [closure_8(closure_11, obj6), , ];
    let tmp6Result = null != user;
    if (tmp6Result) {
      const obj8 = { name: "User ", children: null };
      const obj9 = { user };
      obj8.children = closure_8(tmp10(8749), obj9);
      tmp6Result = closure_8(closure_11, obj8);
    }
    items1[1] = tmp6Result;
    if (null != fingerprint) {
      const obj10 = {
        style: map.copyContainer,
        onPress() {
              if (null != fingerprint) {
                ClipboardUtils.copy(tmp);
              }
            },
        children: null
      };
      const obj11 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
      const items2 = [map.monospace, { marginRight: 4 }];
      obj11.style = items2;
      obj11.children = fingerprint;
      const items3 = [closure_8(CopyIcon(5087).Text, obj11), ];
      CopyIcon = CopyIcon(5044).CopyIcon;
      tmp6Result2 = closure_8(CopyIcon, { size: "sm" });
      items3[1] = tmp6Result2;
      obj10.children = items3;
      let tmp6Result3 = closure_9(CopyIcon(6191).PressableOpacity, obj10);
    } else {
      const obj12 = { variant: "text-sm/medium", color: "text-muted", style: map.monospace, children: "null" };
      tmp6Result3 = closure_8(CopyIcon(5087).Text, obj12);
    }
    const obj13 = { name: "Fingerprint", children: tmp6Result3 };
    items1[2] = closure_8(closure_11, obj13);
    obj4.children = items1;
    const obj5 = map(4661)(timestamp);
    tmp10 = map;
    obj4 = [, ];
    obj4[0] = closure_9(View, obj4);
    const obj25 = { style: map.customPropertiesContainer, children: null };
    const _Object = Object;
    const entries = Object.entries(properties);
    map = entries.map;
    obj25.children = map((arg0) => {
      [tmp, tmp2] = arg0;
      const obj = { style: map.customProperty, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-brand", style: map.customPropertyName, children: null };
      const items = [tmp, ":"];
      obj2.children = items;
      const items1 = [options(Text_Text.Text, obj2), ];
      if (null != tmp2) {
        const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: map.monospace, children: null };
        const _JSON = JSON;
        obj3.children = JSON.stringify(tmp2);
        let obj4 = obj3;
      } else {
        obj4 = { variant: "text-sm/semibold", color: "text-muted", style: map.monospace, children: "null" };
      }
      items1[1] = closure_2_8(Text_Text.Text, obj4);
      obj.children = items1;
      return options(View, obj, tmp);
    });
    items1 = closure_8(View, obj25);
    obj4[1] = items1;
    obj3.children = obj4;
    closure_9(View, obj3);
    const tmp4Result3 = closure_9(View, obj4);
  }
  const tmp = _slicedToArray(noop.useState(false), 2);
});
ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsAnalyticsScreen() {
  const cResult = trimmed(576).c(35);
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
  const obj = trimmed(576);
  const stateFromStores = trimmed(504).useStateFromStores(tmp5, tmp6);
  const loggedEvents = AnalyticsLogStore.loggedEvents;
  let num3 = 2;
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const first = tmp9[0];
  const tmpResult = trimmed(504);
  const str = _slicedToArray(noop.useState(""), 2)[0];
  if (cResult[2] === first) {
    if (cResult[3] === str) {
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = closure_8(tmp(11793).ArrowsUpDownIcon, {});
        cResult[6] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== first) {
        const obj2 = { icon: tmp16, label: "Reverse Events", value: first, onValueChange: tmp9[1] };
        const tmp21 = closure_8(tmp(6889).TableSwitchRow, obj2);
        cResult[7] = first;
        cResult[8] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { arrow: true, variant: "danger", icon: closure_8(tmp(5048).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: tmp(15795).clearAnalyticsLog };
        const tmp24 = closure_8(tmp(6186).TableRow, obj3);
        cResult[9] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] !== tmp19) {
        const obj4 = { title: "Actions", hasIcons: true, children: null };
        const items1 = [tmp19, tmp22];
        obj4.children = items1;
        const tmp27 = closure_9(tmp(6269).TableRowGroup, obj4);
        cResult[10] = tmp19;
        cResult[11] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[11];
      }
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { placeholder: "Search by event name", onChange: tmp12 };
        const tmp30 = closure_8(tmp(6737).SearchField, obj5);
        cResult[12] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[12];
      }
      if (cResult[13] !== tmp4.searchFieldContainer) {
        const obj6 = { style: tmp4.searchFieldContainer, children: tmp28 };
        const tmp34 = closure_8(View, obj6);
        cResult[13] = tmp4.searchFieldContainer;
        cResult[14] = tmp34;
        let tmp31 = tmp34;
      } else {
        tmp31 = cResult[14];
      }
      if (cResult[15] === cResult[4]) {
        if (cResult[16] === str) {
          if (cResult[18] !== cResult[17]) {
            const obj7 = { title: "Analytics Events", hasIcons: false, children: tmp35 };
            const tmp42 = closure_8(tmp(6269).TableRowGroup, obj7);
            cResult[18] = tmp35;
            cResult[19] = tmp42;
            let tmp40 = tmp42;
          } else {
            tmp40 = cResult[19];
          }
          if (cResult[20] === tmp40) {
            if (cResult[21] === tmp25) {
              if (cResult[22] === tmp31) {
                let tmp43 = cResult[23];
              }
              if (cResult[24] !== arr4.length) {
                const fn2 = function k(arg0) {
                  ({ item, index } = arg0);
                  return closure_2_8(closure_12, { start: 0 === index, end: index === arr4.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint });
                };
                cResult[24] = arr4.length;
                cResult[25] = fn2;
                let tmp46 = fn2;
              } else {
                tmp46 = cResult[25];
              }
              if (cResult[26] === arr4) {
                if (cResult[27] === stateFromStores) {
                  if (cResult[28] === tmp4.contentContainer) {
                    if (cResult[29] === tmp43) {
                      if (cResult[30] === tmp46) {
                        let tmp47 = cResult[31];
                      }
                      if (cResult[32] === tmp4.analyticsContainer) {
                        if (cResult[33] === tmp47) {
                          let tmp50 = cResult[34];
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
              const tmp49 = closure_8(tmp(8608).FlashList, obj9);
              cResult[26] = arr4;
              cResult[27] = stateFromStores;
              cResult[28] = tmp4.contentContainer;
              cResult[29] = tmp43;
              cResult[30] = tmp46;
              cResult[31] = tmp49;
              tmp47 = tmp49;
            }
          }
          const obj10 = { spacing: 16, children: null };
          const items2 = [tmp25, tmp31, tmp40];
          obj10.children = items2;
          const tmp45 = closure_9(tmp(5374).Stack, obj10);
          cResult[20] = tmp40;
          cResult[21] = tmp25;
          cResult[22] = tmp31;
          cResult[23] = tmp45;
          tmp43 = tmp45;
        }
      }
      if (0 === loggedEvents.length) {
        let tmp36 = closure_8(tmp(6186).TableRow, { label: "No events logged." });
      } else {
        tmp36 = null;
        if (0 === arr3.length) {
          const obj11 = { label: null };
          const _HermesInternal = HermesInternal;
          obj11.label = "No events match \"" + str + "\"";
          tmp36 = closure_8(tmp(6186).TableRow, obj11);
        }
      }
      cResult[15] = cResult[4];
      cResult[16] = str;
      cResult[17] = tmp36;
    }
  }
  const tmp11 = _slicedToArray(noop.useState(""), 2);
  trimmed = str.toLowerCase().trim();
  let found = loggedEvents;
  if ("" !== trimmed) {
    found = loggedEvents.filter((event) => {
      const formatted = event.event.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items3 = [...found];
  if (first) {
    let reversed = items3.reverse();
  } else {
    reversed = items3;
  }
  cResult[num3] = first;
  cResult[3] = str;
  cResult[4] = found;
  num3 = 5;
  cResult[5] = reversed;
  const str2 = str.toLowerCase();
}) : (function DevToolsAnalyticsScreen() {
  const tmp = closure_10();
  const items = [AnalyticsLogStore];
  const loggedEvents = AnalyticsLogStore.loggedEvents;
  const stateFromStores = trimmed(504).useStateFromStores(items, () => loggedEventsVersion.loggedEventsVersion);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const first = tmp5[0];
  const obj = trimmed(504);
  [str, tmp8] = noop.useState("");
  const tmp7 = _slicedToArray(noop.useState(""), 2);
  trimmed = str.toLowerCase().trim();
  let found = loggedEvents;
  if ("" !== trimmed) {
    found = loggedEvents.filter((event) => {
      const formatted = event.event.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items1 = [...found];
  if (first) {
    let reversed = items1.reverse();
  } else {
    reversed = items1;
  }
  const obj2 = { style: tmp.analyticsContainer, children: null };
  const obj3 = { title: "Actions", hasIcons: true, children: null };
  const str2 = str.toLowerCase();
  const items2 = [closure_8(trimmed(6889).TableSwitchRow, { icon: closure_8(trimmed(11793).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp5[1] }), ];
  const obj4 = { icon: closure_8(trimmed(11793).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp5[1] };
  items2[1] = closure_8(trimmed(6186).TableRow, { arrow: true, variant: "danger", icon: closure_8(trimmed(5048).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15795).clearAnalyticsLog });
  obj3.children = items2;
  const items3 = [closure_9(trimmed(6269).TableRowGroup, obj3), , ];
  const obj5 = { arrow: true, variant: "danger", icon: closure_8(trimmed(5048).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15795).clearAnalyticsLog };
  items3[1] = closure_8(View, { style: tmp.searchFieldContainer, children: closure_8(trimmed(6737).SearchField, { placeholder: "Search by event name", onChange: tmp8 }) });
  if (0 === loggedEvents.length) {
    let tmp11Result = closure_8(tmp2(6186).TableRow, { label: "No events logged." });
  } else {
    tmp11Result = null;
    if (0 === found.length) {
      const obj7 = { label: null };
      const _HermesInternal = HermesInternal;
      obj7.label = "No events match \"" + str + "\"";
      tmp11Result = closure_8(tmp2(6186).TableRow, obj7);
    }
  }
  const obj8 = { ListHeaderComponent: null, contentContainerStyle: null, extraData: null, data: null, renderItem: null };
  const obj9 = { spacing: 16, children: null };
  items3[2] = closure_8(trimmed(6269).TableRowGroup, { title: "Analytics Events", hasIcons: false, children: tmp11Result });
  obj9.children = items3;
  obj8.ListHeaderComponent = closure_9(trimmed(5374).Stack, obj9);
  obj8.contentContainerStyle = tmp.contentContainer;
  obj8.extraData = stateFromStores;
  obj8.data = reversed;
  obj8.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    return closure_2_8(closure_12, { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint });
  };
  obj2.children = closure_8(trimmed(8608).FlashList, obj8);
  return closure_8(View, obj2);
});