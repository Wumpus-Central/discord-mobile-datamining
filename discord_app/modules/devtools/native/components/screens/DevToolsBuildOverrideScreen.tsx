// discord_app/modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import build_overrides_BuildOverrideUtils from "../../../../build_overrides/native/BuildOverrideUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../../../../build_overrides/BuildOverrideStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
const createStyles = fn(4756);
let obj = { content: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { padding: nativeDefault.space.PX_16 };
let items = [{ label: "Branch Name", value: "branch", icon: jsx(fn(9140).TagIcon, {}) }];
let obj5 = { label: "Branch Name", value: "branch", icon: jsx(fn(9140).TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(fn(15855).HashmarkIcon, {}) };
let obj6 = { label: "Commit SHA", value: "id", icon: jsx(fn(15855).HashmarkIcon, {}) };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default noop.memo(() => {
  let tmp = closure_9();
  items = [BuildOverrideStore];
  const stateFromStores = first(504).useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[first(undefined, 12041).DEVICE_FIELD];
    }
    return tmp;
  });
  first = stateFromStores;
  [first, dependencyMap] = noop.useState({ type: "branch", id: "" });
  let obj2 = { style: tmp.content, contentContainerStyle: null, children: null };
  let obj3 = {};
  let merged = Object.assign(tmp.contentContainer);
  obj3.paddingBottom = tmp.contentContainer.padding + first(7221)({ includeKeyboardHeight: true }).insets.bottom;
  obj2.contentContainerStyle = obj3;
  let tmp10Result = null;
  if (null != stateFromStores) {
    const obj4 = { icon: jsx(tmp3(4702).CopyIcon, {}), label: null, subLabel: null, onPress: null };
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
    const items1 = [
      jsx(tmp3(5817).TableRow, { icon: jsx(tmp3(4702).CopyIcon, {}), label: null, subLabel: null, onPress: null }),
      ,
    ];
    const obj6 = {
      icon: jsx(tmp3(15419).RefreshIcon, {}),
      label: "Refresh Override",
      onPress: tmp3(12041).refreshBuildOverride,
      arrow: true,
    };
    items1[1] = jsx(tmp3(5817).TableRow, {
      icon: jsx(tmp3(15419).RefreshIcon, {}),
      label: "Refresh Override",
      onPress: tmp3(12041).refreshBuildOverride,
      arrow: true,
    });
    const obj7 = {
      icon: jsx(tmp3(4713).TrashIcon, { color: "text-feedback-critical" }),
      label: "Clear Override",
      variant: "danger",
      onPress: tmp3(12041).clearBuildOverride,
      arrow: true,
    };
    items1[2] = jsx(tmp3(5817).TableRow, {
      icon: jsx(tmp3(4713).TrashIcon, { color: "text-feedback-critical" }),
      label: "Clear Override",
      variant: "danger",
      onPress: tmp3(12041).clearBuildOverride,
      arrow: true,
    });
    obj5.children = items1;
    tmp10Result = jsxs(tmp3(5899).TableRowGroup, { title: "Current Override", hasIcons: true, children: null });
  }
  const items2 = [tmp10Result, , ,];
  let str = "";
  if (null != stateFromStores) {
    str = "New";
  }
  let obj = first(504);
  items2[1] = jsx(first(5897).TableRadioGroup, {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5900).TableRadioRow, { value, label, icon }, value);
    }),
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
      return jsx(first(5900).TableRadioRow, { value, label, icon }, value);
    }),
  };
  obj10.label = jsx(first(6843).TextInput, {
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
    clearable: true,
  });
  obj9.children = jsx(first(5817).TableRow, { icon, label: null });
  items2[2] = jsx(first(5899).TableRowGroup, { title: label1, hasIcons: true, children: null });
  items2[3] = jsx(first(5186).Button, {
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
    },
  });
  obj11.children = items2;
  obj2.children = jsxs(first(5184).Stack, { spacing: 16, children: null });
  return (
    <ScrollView style={tmp.content} contentContainerStyle={null}>
      {null}
    </ScrollView>
  );
});
