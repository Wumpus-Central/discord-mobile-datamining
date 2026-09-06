// === Module 15579: CommonProperty ===

// Module 15579 (CommonProperty)
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import closure_7 from "initialize" /* 14398 */;
import { Fonts } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function CommonProperty(arg0) {
  ({ name, children } = arg0);
  const obj = { style: callback4().commonProperty, children: null };
  const items = [callback2(Text.Text, { variant: "text-sm/semibold", color: "text-default", children: name }), children];
  obj[1] = items;
  return callback3(View, obj);
}
function LoggedEvent(arg0) {
  ({ properties, fingerprint } = arg0);
  let map;
  dependencyMap = undefined;
  ({ event, timestamp, start, end } = arg0);
  map = callback4();
  [tmp2, c2] = callback(React.useState(false), 2);
  user = user.getUser(fingerprint);
  let CopyIcon = fingerprint;
  let tmp6Result = dependencyMap;
  let obj = { arrow: !tmp2, icon: callback2(fingerprint(10384).AnalyticsIcon, {}), label: event, subLabel: null, onPress: null, start: null, end: null };
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
  obj[3] = str2;
  obj[4] = function onPress() {
    return _undefined((arg0) => !arg0);
  };
  obj[5] = start;
  obj[6] = end;
  let items = [callback2(fingerprint(5605).TableRow, obj), ];
  if (!tmp2) {
    obj = { collapsable: false, children: null };
    items[1] = tmp2;
    obj[1] = items;
    return tmp4(tmp5, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = map.detailsContainer;
    obj1 = { style: null, children: null };
    obj1[0] = map.commonPropertiesContainer;
    const obj2 = { name: "Timestamp (local)", children: null };
    const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    let obj4 = map(4153)(timestamp);
    obj3[2] = obj4.calendar();
    obj2[1] = tmp6(CopyIcon(4556).Text, obj3);
    let items1 = [tmp6(CommonProperty, obj2), , ];
    tmp6Result = null != user;
    if (tmp6Result) {
      obj4 = { name: "User ", children: null };
      const obj5 = { user: null };
      obj5[0] = user;
      obj4[1] = tmp6(tmp10(9803), obj5);
      tmp6Result = tmp6(tmp9, obj4);
    }
    items1[1] = tmp6Result;
    if (null != fingerprint) {
      const obj6 = { style: null, onPress: null, children: null };
      obj6[0] = map.copyContainer;
      obj6[1] = function onPress() {
        if (null != fingerprint) {
          fingerprint(_undefined[15]).copy(tmp);
          const obj = fingerprint(_undefined[15]);
        }
      };
      const obj7 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
      const items2 = [map.monospace, { marginRight: 4 }];
      obj7[2] = items2;
      obj7[3] = fingerprint;
      const items3 = [tmp6(CopyIcon(4556).Text, obj7), ];
      CopyIcon = CopyIcon(4507).CopyIcon;
      tmp6Result = tmp6(CopyIcon, { size: "sm" });
      items3[1] = tmp6Result;
      obj6[2] = items3;
      let tmp6Result1 = tmp4(CopyIcon(5123).PressableOpacity, obj6);
    } else {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", style: null, children: "null" };
      obj8[2] = map.monospace;
      tmp6Result1 = tmp6(CopyIcon(4556).Text, obj8);
    }
    const obj9 = { name: "Fingerprint", children: null };
    obj9[1] = tmp6Result1;
    items1[2] = tmp6(CommonProperty, obj9);
    obj1[1] = items1;
    obj1 = [, ];
    obj1[0] = tmp4(tmp5, obj1);
    const obj10 = { style: null, children: null };
    obj10[0] = map.customPropertiesContainer;
    const _Object = Object;
    const entries = Object.entries(properties);
    map = entries.map;
    obj10[1] = map((arg0) => {
      [tmp, tmp2] = arg0;
      let obj = { style: map.customProperty, children: null };
      obj = { variant: "text-sm/semibold", color: "text-brand", style: map.customPropertyName, children: items };
      items = [tmp, ":"];
      const items1 = [closure_1_9(fingerprint(_undefined[9]).Text, obj), ];
      if (null != tmp2) {
        obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
        obj[2] = tmp5.monospace;
        const _JSON = JSON;
        obj[3] = JSON.stringify(tmp2);
        obj1 = obj;
      } else {
        obj1 = { variant: "text-sm/semibold", color: "text-muted", style: null, children: "null" };
        obj1[2] = tmp5.monospace;
      }
      items1[1] = closure_1_8(fingerprint(_undefined[9]).Text, obj1);
      obj[1] = items1;
      return closure_1_9(closure_1_5, obj, tmp);
    });
    items1 = tmp6(tmp5, obj10);
    obj1[1] = items1;
    obj[1] = obj1;
    tmp4(tmp5, obj);
    tmp10 = map;
    const tmp4Result = tmp4(tmp5, obj1);
  }
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { analyticsContainer: null, contentContainer: null, searchFieldContainer: null, detailsContainer: null, commonPropertiesContainer: null, commonProperty: null, customPropertiesContainer: null, customProperty: null, customPropertyName: null, monospace: null, copyContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let obj2 = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, height: 20 };
createCacheKey[6] = { paddingHorizontal: 10, paddingVertical: 4 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-start", marginVertical: 4 };
createCacheKey[8] = { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 };
createCacheKey[9] = { fontFamily: Fonts.CODE_BOLD };
createCacheKey[10] = { flexDirection: "row", alignItems: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
  const tmp = callback4();
  let obj = trimmed(504);
  const items = [loggedEvents];
  loggedEvents = loggedEvents.loggedEvents;
  const stateFromStores = obj.useStateFromStores(items, () => loggedEventsVersion.loggedEventsVersion);
  const tmp5 = callback(React.useState(false), 2);
  const first = tmp5[0];
  [str, tmp8] = callback(React.useState(""), 2);
  const tmp7 = callback(React.useState(""), 2);
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
  obj = { style: tmp.analyticsContainer, children: null };
  obj = { title: "Actions", hasIcons: true, children: null };
  const str2 = str.toLowerCase();
  const tmp12 = View;
  const tmp13 = callback3;
  const items2 = [callback2(trimmed(7201).TableSwitchRow, { icon: callback2(trimmed(12151).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp5[1] }), ];
  obj1 = { icon: callback2(trimmed(12151).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp5[1] };
  items2[1] = callback2(trimmed(5605).TableRow, { arrow: true, variant: "danger", icon: callback2(trimmed(4518).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15574).clearAnalyticsLog });
  obj[2] = items2;
  const items3 = [callback3(trimmed(5687).TableRowGroup, obj), , ];
  const obj2 = { arrow: true, variant: "danger", icon: callback2(trimmed(4518).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(15574).clearAnalyticsLog };
  items3[1] = callback2(View, { style: tmp.searchFieldContainer, children: callback2(trimmed(7050).SearchField, { placeholder: "Search by event name", onChange: tmp8 }) });
  if (0 === loggedEvents.length) {
    let tmp11Result = tmp11(tmp2(5605).TableRow, { label: "No events logged." });
  } else {
    tmp11Result = null;
    if (0 === found.length) {
      const obj4 = { label: null };
      const _HermesInternal = HermesInternal;
      obj4[0] = "No events match \"" + str + "\"";
      tmp11Result = tmp11(tmp2(5605).TableRow, obj4);
    }
  }
  const obj5 = { ListHeaderComponent: null, contentContainerStyle: null, extraData: null, data: null, renderItem: null };
  const obj6 = { spacing: 16, children: null };
  items3[2] = callback2(trimmed(5687).TableRowGroup, { title: "Analytics Events", hasIcons: false, children: tmp11Result });
  obj6[1] = items3;
  obj5[0] = tmp13(trimmed(4973).Stack, obj6);
  obj5[1] = tmp.contentContainer;
  obj5[2] = stateFromStores;
  obj5[3] = reversed;
  obj5[4] = function renderItem(arg0) {
    ({ item, index } = arg0);
    return closure_1_8(closure_1_12, { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint });
  };
  obj[1] = callback2(trimmed(8874).FlashList, obj5);
  return callback2(tmp12, obj);
};