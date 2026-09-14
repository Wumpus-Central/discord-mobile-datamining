// === Module 15669: DevToolsBuildOverrideScreen ===

// Module 15669 (DevToolsBuildOverrideScreen)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ToastUtils from "ToastUtils" /* 4334 */;
import ClipboardUtils from "ClipboardUtils" /* 7292 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11920 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11559 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
const createStyles = fn(4636);
let obj = { content: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { padding: nativeDefault.space.PX_16 };
let items = [{ label: "Branch Name", value: "branch", icon: jsx(fn(8987).TagIcon, {}) }, ];
let obj5 = { label: "Branch Name", value: "branch", icon: jsx(fn(8987).TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(fn(15670).HashmarkIcon, {}) };
let obj6 = { label: "Commit SHA", value: "id", icon: jsx(fn(15670).HashmarkIcon, {}) };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default noop.memo(() => {
  let tmp = closure_9();
  items = [BuildOverrideStore];
  const stateFromStores = first(504).useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[first(undefined, 11920).DEVICE_FIELD];
    }
    return tmp;
  });
  first = stateFromStores;
  [first, dependencyMap] = noop.useState({ type: "branch", id: "" });
  let obj2 = { style: tmp.content, contentContainerStyle: null, children: null };
  let obj3 = {};
  let merged = Object.assign(tmp.contentContainer);
  obj3.paddingBottom = tmp.contentContainer.padding + first(7084)({ includeKeyboardHeight: true }).insets.bottom;
  obj2.contentContainerStyle = obj3;
  let tmp10Result = null;
  if (null != stateFromStores) {
    const obj4 = { icon: jsx(tmp3(4583).CopyIcon, {}), label: null, subLabel: null, onPress: null };
    first = stateFromStores;
    const found = items.find((value) => value.value === first.type);
    let label;
    if (found != null) {
      label = found.label;
    }
    const obj5 = { title: "Current Override", hasIcons: true, children: null };
    obj4.label = label;
    obj4.subLabel = stateFromStores.id;
    obj4.onPress = function onPress() {
      ClipboardUtils.copy(first.id);
      const result = ToastUtils.presentCopiedToClipboard();
    };
    const items1 = [jsx(tmp3(5686).TableRow, { icon: jsx(tmp3(4583).CopyIcon, {}), label: null, subLabel: null, onPress: null }), , ];
    const obj6 = { icon: jsx(tmp3(15239).RefreshIcon, {}), label: "Refresh Override", onPress: tmp3(11920).refreshBuildOverride, arrow: true };
    items1[1] = jsx(tmp3(5686).TableRow, { icon: jsx(tmp3(15239).RefreshIcon, {}), label: "Refresh Override", onPress: tmp3(11920).refreshBuildOverride, arrow: true });
    const obj7 = { icon: jsx(tmp3(4594).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Override", variant: "danger", onPress: tmp3(11920).clearBuildOverride, arrow: true };
    items1[2] = jsx(tmp3(5686).TableRow, { icon: jsx(tmp3(4594).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Override", variant: "danger", onPress: tmp3(11920).clearBuildOverride, arrow: true });
    obj5.children = items1;
    tmp10Result = jsxs(tmp3(5768).TableRowGroup, { title: "Current Override", hasIcons: true, children: null });
  }
  const items2 = [tmp10Result, , , ];
  let str = "";
  if (null != stateFromStores) {
    str = "New";
  }
  let obj = first(504);
  items2[1] = jsx(first(5766).TableRadioGroup, {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5769).TableRadioRow, { value, label, icon }, value);
    })
  });
  const found1 = items.find((value) => value.value === first.type);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const obj9 = { title: label1, hasIcons: true, children: null };
  const found2 = arr4.find((value) => value.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const obj10 = { icon, label: null };
  const found3 = arr4.find((value) => value.value === first.type);
  let label2;
  if (found3 != null) {
    label2 = found3.label;
  }
  const obj11 = { spacing: 16, children: null };
  const obj8 = {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5769).TableRadioRow, { value, label, icon }, value);
    })
  };
  obj10.label = jsx(first(6707).TextInput, {
    size: "md",
    placeholder: "Enter " + label2,
    onChange(id) {
      const obj = {};
      const merged = Object.assign(first);
      obj.id = id;
      dependencyMap(obj);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
    isClearable: true
  });
  obj9.children = jsx(first(5686).TableRow, { icon, label: null });
  items2[2] = jsx(first(5768).TableRowGroup, { title: label1, hasIcons: true, children: null });
  items2[3] = jsx(first(5056).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const result = build_overrides_BuildOverrideUtils.setBuildOverrideForBranch(first.id);
      } else if ("id" === type) {
        const result1 = build_overrides_BuildOverrideUtils.setBuildOverrideForId(first.id);
      } else {
        GlobalUtils.assertNever(first.type);
      }
    }
  });
  obj11.children = items2;
  obj2.children = jsxs(first(5054).Stack, { spacing: 16, children: null });
  return <ScrollView style={tmp.content} contentContainerStyle={null}>{null}</ScrollView>;
});