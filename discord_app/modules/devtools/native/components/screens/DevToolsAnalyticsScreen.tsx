// discord_app/modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import AnalyticsLogStore from "../../../AnalyticsLogStore.tsx";

require = fn;
function CommonProperty(arg0) {
  ({ name, children } = arg0);
  const obj = { style: closure_10().commonProperty, children: null };
  const items = [
    React6(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: name }),
    children,
  ];
  obj.children = items;
  return React7(View, obj);
}
function LoggedEvent(arg0) {
  ({ properties, fingerprint } = arg0);
  dependencyMap = undefined;
  ({ event, timestamp, start, end } = arg0);
  let map = closure_10();
  [tmp2, c2] = _slicedToArray(noop.useState(false), 2);
  const user = UserStore.getUser(fingerprint);
  let CopyIcon = fingerprint;
  let tmp6Result = dependencyMap;
  let obj = {
    arrow: !tmp2,
    icon: closure_8(fingerprint(10384).AnalyticsIcon, {}),
    label: event,
    subLabel: null,
    onPress: null,
    start: null,
    end: null,
  };
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
  let items = [closure_8(fingerprint(5605).TableRow, obj)];
  if (!tmp2) {
    obj = { collapsable: false, children: null };
    items[1] = tmp2;
    obj.children = items;
    return tmp4(tmp5, obj);
  } else {
    obj = { style: map.detailsContainer, children: null };
    let obj1 = { style: map.commonPropertiesContainer, children: null };
    const obj2 = { name: "Timestamp (local)", children: null };
    const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    let obj4 = map(4153)(timestamp);
    obj3.children = obj4.calendar();
    obj2.children = tmp6(CopyIcon(4556).Text, obj3);
    let items1 = [tmp6(CommonProperty, obj2), ,];
    tmp6Result = null != user;
    if (tmp6Result) {
      obj4 = { name: "User ", children: null };
      const obj5 = { user };
      obj4.children = tmp6(tmp10(9803), obj5);
      tmp6Result = tmp6(tmp9, obj4);
    }
    items1[1] = tmp6Result;
    if (null != fingerprint) {
      const obj6 = {
        style: map.copyContainer,
        onPress() {
          if (null != fingerprint) {
            ClipboardUtils.copy(tmp);
          }
        },
        children: null,
      };
      const obj7 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
      const items2 = [map.monospace, { marginRight: 4 }];
      obj7.style = items2;
      obj7.children = fingerprint;
      const items3 = [tmp6(CopyIcon(4556).Text, obj7)];
      CopyIcon = CopyIcon(4507).CopyIcon;
      tmp6Result = tmp6(CopyIcon, { size: "sm" });
      items3[1] = tmp6Result;
      obj6.children = items3;
      let tmp6Result1 = tmp4(CopyIcon(5123).PressableOpacity, obj6);
    } else {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", style: map.monospace, children: "null" };
      tmp6Result1 = tmp6(CopyIcon(4556).Text, obj8);
    }
    const obj9 = { name: "Fingerprint", children: tmp6Result1 };
    items1[2] = tmp6(CommonProperty, obj9);
    obj1.children = items1;
    obj1 = [,];
    obj1[0] = tmp4(tmp5, obj1);
    const obj10 = { style: map.customPropertiesContainer, children: null };
    const _Object = Object;
    const entries = Object.entries(properties);
    map = entries.map;
    obj10.children = map((arg0) => {
      [tmp, tmp2] = arg0;
      let obj = { style: map.customProperty, children: null };
      obj = { variant: "text-sm/semibold", color: "text-brand", style: map.customPropertyName, children: null };
      const items = [tmp, ":"];
      obj.children = items;
      const items1 = [React7(Text_Text.Text, obj)];
      if (null != tmp2) {
        obj = {
          variant: "text-sm/semibold",
          color: "mobile-text-heading-primary",
          style: tmp5.monospace,
          children: null,
        };
        const _JSON = JSON;
        obj.children = JSON.stringify(tmp2);
        let obj1 = obj;
      } else {
        obj1 = { variant: "text-sm/semibold", color: "text-muted", style: tmp5.monospace, children: "null" };
      }
      items1[1] = React6(Text_Text.Text, obj1);
      obj.children = items1;
      return React7(View, obj, tmp);
    });
    items1 = tmp6(tmp5, obj10);
    obj1[1] = items1;
    obj.children = obj1;
    tmp4(tmp5, obj);
    tmp10 = map;
    const tmp4Result = tmp4(tmp5, obj1);
  }
}
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  analyticsContainer: null,
  contentContainer: null,
  searchFieldContainer: null,
  detailsContainer: null,
  commonPropertiesContainer: null,
  commonProperty: null,
  customPropertiesContainer: null,
  customProperty: null,
  customPropertyName: null,
  monospace: null,
  copyContainer: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.analyticsContainer = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj1 = { padding: nativeDefault.space.PX_16 };
createStyles.searchFieldContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.detailsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.commonPropertiesContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: 10,
};
createStyles.commonProperty = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginVertical: 8,
  height: 20,
};
createStyles.customPropertiesContainer = { paddingHorizontal: 10, paddingVertical: 4 };
createStyles.customProperty = {
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  marginVertical: 4,
};
createStyles.customPropertyName = { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 };
createStyles.monospace = { fontFamily: Fonts.CODE_BOLD };
createStyles.copyContainer = { flexDirection: "row", alignItems: "center" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
  const tmp = closure_10();
  let obj = trimmed(504);
  const items = [AnalyticsLogStore];
  const loggedEvents = AnalyticsLogStore.loggedEvents;
  const stateFromStores = obj.useStateFromStores(items, () => loggedEventsVersion.loggedEventsVersion);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const first = tmp5[0];
  [str, tmp8] = _slicedToArray(noop.useState(""), 2);
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
  obj = { style: tmp.analyticsContainer, children: null };
  obj = { title: "Actions", hasIcons: true, children: null };
  const str2 = str.toLowerCase();
  const tmp12 = View;
  const tmp13 = closure_9;
  const items2 = [
    closure_8(trimmed(7201).TableSwitchRow, {
      icon: closure_8(trimmed(12151).ArrowsUpDownIcon, {}),
      label: "Reverse Events",
      value: first,
      onValueChange: tmp5[1],
    }),
  ];
  const obj1 = {
    icon: closure_8(trimmed(12151).ArrowsUpDownIcon, {}),
    label: "Reverse Events",
    value: first,
    onValueChange: tmp5[1],
  };
  items2[1] = closure_8(trimmed(5605).TableRow, {
    arrow: true,
    variant: "danger",
    icon: closure_8(trimmed(4518).TrashIcon, { color: "text-feedback-critical" }),
    label: "Clear Analytics Log",
    onPress: trimmed(15574).clearAnalyticsLog,
  });
  obj.children = items2;
  const items3 = [closure_9(trimmed(5687).TableRowGroup, obj), ,];
  const obj2 = {
    arrow: true,
    variant: "danger",
    icon: closure_8(trimmed(4518).TrashIcon, { color: "text-feedback-critical" }),
    label: "Clear Analytics Log",
    onPress: trimmed(15574).clearAnalyticsLog,
  };
  items3[1] = closure_8(View, {
    style: tmp.searchFieldContainer,
    children: closure_8(trimmed(7050).SearchField, { placeholder: "Search by event name", onChange: tmp8 }),
  });
  if (0 === loggedEvents.length) {
    let tmp11Result = tmp11(tmp2(5605).TableRow, { label: "No events logged." });
  } else {
    tmp11Result = null;
    if (0 === found.length) {
      const obj4 = { label: null };
      const _HermesInternal = HermesInternal;
      obj4.label = 'No events match "' + str + '"';
      tmp11Result = tmp11(tmp2(5605).TableRow, obj4);
    }
  }
  const obj5 = {
    ListHeaderComponent: null,
    contentContainerStyle: null,
    extraData: null,
    data: null,
    renderItem: null,
  };
  const obj6 = { spacing: 16, children: null };
  items3[2] = closure_8(trimmed(5687).TableRowGroup, {
    title: "Analytics Events",
    hasIcons: false,
    children: tmp11Result,
  });
  obj6.children = items3;
  obj5.ListHeaderComponent = tmp13(trimmed(4973).Stack, obj6);
  obj5.contentContainerStyle = tmp.contentContainer;
  obj5.extraData = stateFromStores;
  obj5.data = reversed;
  obj5.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    return React6(LoggedEvent, {
      start: 0 === index,
      end: index === reversed.length - 1,
      event: item.event,
      properties: item.properties,
      timestamp: item.timestamp,
      fingerprint: item.fingerprint,
    });
  };
  obj.children = closure_8(trimmed(8874).FlashList, obj5);
  return closure_8(tmp12, obj);
}
