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
  [tmp2, c2] = noop.useState(false);
  const user = UserStore.getUser(fingerprint);
  let CopyIcon = fingerprint;
  let tmp6Result2 = dependencyMap;
  let obj = {
    arrow: !tmp2,
    icon: closure_8(fingerprint(10513).AnalyticsIcon, {}),
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
  let items = [closure_8(fingerprint(5686).TableRow, obj)];
  if (!tmp2) {
    let obj2 = { collapsable: false, children: null };
    items[1] = tmp2;
    obj2.children = items;
    return closure_9(View, obj2);
  } else {
    let obj3 = { style: map.detailsContainer, children: null };
    let obj4 = { style: map.commonPropertiesContainer, children: null };
    const obj6 = { name: "Timestamp (local)", children: null };
    const obj7 = {
      variant: "text-sm/semibold",
      color: "mobile-text-heading-primary",
      children: map(4228)(timestamp).calendar(),
    };
    obj6.children = closure_8(CopyIcon(4632).Text, obj7);
    let items1 = [closure_8(CommonProperty, obj6), ,];
    let tmp6Result = null != user;
    if (tmp6Result) {
      const obj8 = { name: "User ", children: null };
      const obj9 = { user };
      obj8.children = closure_8(tmp10(9933), obj9);
      tmp6Result = closure_8(CommonProperty, obj8);
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
        children: null,
      };
      const obj11 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
      const items2 = [map.monospace, { marginRight: 4 }];
      obj11.style = items2;
      obj11.children = fingerprint;
      const items3 = [closure_8(CopyIcon(4632).Text, obj11)];
      CopyIcon = CopyIcon(4583).CopyIcon;
      tmp6Result2 = closure_8(CopyIcon, { size: "sm" });
      items3[1] = tmp6Result2;
      obj10.children = items3;
      let tmp6Result3 = closure_9(CopyIcon(5204).PressableOpacity, obj10);
    } else {
      const obj12 = { variant: "text-sm/medium", color: "text-muted", style: map.monospace, children: "null" };
      tmp6Result3 = closure_8(CopyIcon(4632).Text, obj12);
    }
    const obj13 = { name: "Fingerprint", children: tmp6Result3 };
    items1[2] = closure_8(CommonProperty, obj13);
    obj4.children = items1;
    const obj5 = map(4228)(timestamp);
    tmp10 = map;
    obj4 = [,];
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
      const items1 = [React7(Text_Text.Text, obj2)];
      if (null != tmp2) {
        const obj3 = {
          variant: "text-sm/semibold",
          color: "mobile-text-heading-primary",
          style: map.monospace,
          children: null,
        };
        const _JSON = JSON;
        obj3.children = JSON.stringify(tmp2);
        let obj4 = obj3;
      } else {
        obj4 = { variant: "text-sm/semibold", color: "text-muted", style: map.monospace, children: "null" };
      }
      items1[1] = React6(Text_Text.Text, obj4);
      obj.children = items1;
      return React7(View, obj, tmp);
    });
    items1 = closure_8(View, obj25);
    obj4[1] = items1;
    obj3.children = obj4;
    closure_9(View, obj3);
    const tmp4Result3 = closure_9(View, obj4);
  }
  const tmp = _slicedToArray(noop.useState(false), 2);
}
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  analyticsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
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
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.searchFieldContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.detailsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.commonPropertiesContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: 10,
};
obj2.commonProperty = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginVertical: 8,
  height: 20,
};
obj2.customPropertiesContainer = { paddingHorizontal: 10, paddingVertical: 4 };
obj2.customProperty = {
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  marginVertical: 4,
};
obj2.customPropertyName = { fontWeight: "600", fontFamily: Fonts.CODE_BOLD, marginRight: 4 };
obj2.monospace = { fontFamily: Fonts.CODE_BOLD };
obj2.copyContainer = { flexDirection: "row", alignItems: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx");

export default function DevToolsAnalyticsScreen() {
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
  const items2 = [
    closure_8(trimmed(7303).TableSwitchRow, {
      icon: closure_8(trimmed(12281).ArrowsUpDownIcon, {}),
      label: "Reverse Events",
      value: first,
      onValueChange: tmp5[1],
    }),
  ];
  const obj4 = {
    icon: closure_8(trimmed(12281).ArrowsUpDownIcon, {}),
    label: "Reverse Events",
    value: first,
    onValueChange: tmp5[1],
  };
  items2[1] = closure_8(trimmed(5686).TableRow, {
    arrow: true,
    variant: "danger",
    icon: closure_8(trimmed(4594).TrashIcon, { color: "text-feedback-critical" }),
    label: "Clear Analytics Log",
    onPress: trimmed(15663).clearAnalyticsLog,
  });
  obj3.children = items2;
  const items3 = [closure_9(trimmed(5768).TableRowGroup, obj3), ,];
  const obj5 = {
    arrow: true,
    variant: "danger",
    icon: closure_8(trimmed(4594).TrashIcon, { color: "text-feedback-critical" }),
    label: "Clear Analytics Log",
    onPress: trimmed(15663).clearAnalyticsLog,
  };
  items3[1] = closure_8(View, {
    style: tmp.searchFieldContainer,
    children: closure_8(trimmed(7153).SearchField, { placeholder: "Search by event name", onChange: tmp8 }),
  });
  if (0 === loggedEvents.length) {
    let tmp11Result = closure_8(tmp2(5686).TableRow, { label: "No events logged." });
  } else {
    tmp11Result = null;
    if (0 === found.length) {
      const obj7 = { label: null };
      const _HermesInternal = HermesInternal;
      obj7.label = 'No events match "' + str + '"';
      tmp11Result = closure_8(tmp2(5686).TableRow, obj7);
    }
  }
  const obj8 = {
    ListHeaderComponent: null,
    contentContainerStyle: null,
    extraData: null,
    data: null,
    renderItem: null,
  };
  const obj9 = { spacing: 16, children: null };
  items3[2] = closure_8(trimmed(5768).TableRowGroup, {
    title: "Analytics Events",
    hasIcons: false,
    children: tmp11Result,
  });
  obj9.children = items3;
  obj8.ListHeaderComponent = closure_9(trimmed(5054).Stack, obj9);
  obj8.contentContainerStyle = tmp.contentContainer;
  obj8.extraData = stateFromStores;
  obj8.data = reversed;
  obj8.renderItem = function renderItem(arg0) {
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
  obj2.children = closure_8(trimmed(9003).FlashList, obj8);
  return closure_8(View, obj2);
}
