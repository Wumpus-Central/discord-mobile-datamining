// discord_app/modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import initialize from "../../../AnalyticsLogStore.tsx";
import { Fonts } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function CommonProperty(arg0) {
  ({ name, children } = arg0);
  const obj = { style: callback4().commonProperty, children: null };
  const items = [callback2(Text.Text, { variant: "text-sm/semibold", color: "text-default", children: name }), children];
  obj[1] = items;
  return callback3(View, obj);
}
function LoggedEvent(arg0) {
  ({ properties, fingerprint } = arg0);
  dependencyMap = undefined;
  ({ event, timestamp, start, end } = arg0);
  let map = callback4();
  [tmp2, c2] = callback(React.useState(false), 2);
  user = user.getUser(fingerprint);
  let CopyIcon = fingerprint;
  let tmp6Result = dependencyMap;
  let obj = { arrow: !tmp2, icon: callback2(fingerprint(10214).AnalyticsIcon, {}), label: event, subLabel: null, onPress: null, start: null, end: null };
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
  let items = [callback2(fingerprint(6291).TableRow, obj), ];
  if (!tmp2) {
    obj = { collapsable: false, children: null };
    items[1] = tmp2;
    obj[1] = items;
    return callback(View, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = map.detailsContainer;
    obj1 = { style: null, children: null };
    obj1[0] = map.commonPropertiesContainer;
    const obj2 = { name: "Timestamp (local)", children: null };
    const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    let obj4 = map(3975)(timestamp);
    obj3[2] = obj4.calendar();
    obj2[1] = callback2(CopyIcon(4734).Text, obj3);
    let items1 = [callback2(CommonProperty, obj2), , ];
    tmp6Result = null != user;
    if (tmp6Result) {
      obj4 = { name: "User ", children: null };
      const obj5 = { user: null };
      obj5[0] = user;
      obj4[1] = callback2(tmp10(9966), obj5);
      tmp6Result = callback2(CommonProperty, obj4);
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
      const items3 = [callback2(CopyIcon(4734).Text, obj7), ];
      CopyIcon = CopyIcon(4322).CopyIcon;
      tmp6Result = callback2(CopyIcon, { size: "sm" });
      items3[1] = tmp6Result;
      obj6[2] = items3;
      let tmp6Result1 = callback(CopyIcon(5433).PressableOpacity, obj6);
    } else {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", style: null, children: "null" };
      obj8[2] = map.monospace;
      tmp6Result1 = callback2(CopyIcon(4734).Text, obj8);
    }
    const obj9 = { name: "Fingerprint", children: null };
    obj9[1] = tmp6Result1;
    items1[2] = callback2(CommonProperty, obj9);
    obj1[1] = items1;
    obj1 = [, ];
    obj1[0] = callback(View, obj1);
    const obj10 = { style: null, children: null };
    obj10[0] = map.customPropertiesContainer;
    const _Object = Object;
    const entries = Object.entries(properties);
    map = entries.map;
    obj10[1] = map((arg0) => {
      [tmp, tmp2] = arg0;
      let obj = { variant: "text-sm/semibold", color: "text-brand", style: map.customPropertyName, children: items };
      items = [tmp, ":"];
      const items1 = [closure_1_9(fingerprint(_undefined[9]).Text, obj), ];
      if (null != tmp2) {
        obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
        obj[2] = map.monospace;
        const _JSON = JSON;
        obj[3] = JSON.stringify(tmp2);
        obj1 = obj;
      } else {
        obj1 = { variant: "text-sm/semibold", color: "text-muted", style: null, children: "null" };
        obj1[2] = map.monospace;
      }
      items1[1] = closure_1_8(fingerprint(_undefined[9]).Text, obj1);
      obj[1] = items1;
      return closure_1_9(View, obj, tmp);
    });
    items1 = callback2(View, obj10);
    obj1[1] = items1;
    obj[1] = obj1;
    callback(View, obj);
    tmp10 = map;
    const tmp4Result = callback(View, obj1);
  }
  const tmp = callback(React.useState(false), 2);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 10 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, height: 20 };
createCacheKey[6] = { paddingHorizontal: 10, paddingVertical: 4 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-start", marginVertical: 4 };
createCacheKey[8] = { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 };
createCacheKey[9] = { fontFamily: Fonts.CODE_BOLD };
createCacheKey[10] = { flexDirection: "row", alignItems: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
  const tmp = callback4();
  let obj = trimmed(589);
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
    found = loggedEvents.filter((item, index) => {
      const formatted = item.event.toLowerCase();
      return formatted.includes(trimmed);
    });
  }
  const items1 = [...found];
  if (first) {
    let reversed = items1.reverse();
  } else {
    reversed = items1;
  }
  obj = { title: "Actions", hasIcons: true, children: null };
  const str2 = str.toLowerCase();
  const items2 = [callback2(trimmed(7178).TableSwitchRow, { icon: callback2(trimmed(11329).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp5[1] }), ];
  obj1 = { icon: callback2(trimmed(11329).ArrowsUpDownIcon, {}), label: "Reverse Events", value: first, onValueChange: tmp5[1] };
  items2[1] = callback2(trimmed(6291).TableRow, { arrow: true, variant: "danger", icon: callback2(trimmed(4333).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(13951).clearAnalyticsLog });
  obj[2] = items2;
  const items3 = [callback3(trimmed(6286).TableRowGroup, obj), , ];
  const obj2 = { arrow: true, variant: "danger", icon: callback2(trimmed(4333).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Analytics Log", onPress: trimmed(13951).clearAnalyticsLog };
  items3[1] = callback2(View, { style: tmp.searchFieldContainer, children: callback2(trimmed(7337).SearchField, { placeholder: "Search by event name", onChange: tmp8 }) });
  if (0 === loggedEvents.length) {
    let tmp11Result = callback2(tmp2(6291).TableRow, { label: "No events logged." });
  } else {
    tmp11Result = null;
    if (0 === found.length) {
      const obj4 = { label: null };
      const _HermesInternal = HermesInternal;
      obj4[0] = "No events match \"" + str + "\"";
      tmp11Result = callback2(tmp2(6291).TableRow, obj4);
    }
  }
  const obj5 = { ListHeaderComponent: null, contentContainerStyle: null, extraData: null, data: null, renderItem: null };
  const obj6 = { spacing: 16, children: null };
  items3[2] = callback2(trimmed(6286).TableRowGroup, { title: "Analytics Events", hasIcons: false, children: tmp11Result });
  obj6[1] = items3;
  obj5[0] = callback3(trimmed(4733).Stack, obj6);
  obj5[1] = tmp.contentContainer;
  obj5[2] = stateFromStores;
  obj5[3] = reversed;
  obj5[4] = function renderItem(arg0) {
    ({ item, index } = arg0);
    return closure_1_8(LoggedEvent, { start: 0 === index, end: index === reversed.length - 1, event: item.event, properties: item.properties, timestamp: item.timestamp, fingerprint: item.fingerprint });
  };
  obj[1] = callback2(trimmed(8029).FlashList, obj5);
  return callback2(View, obj);
};