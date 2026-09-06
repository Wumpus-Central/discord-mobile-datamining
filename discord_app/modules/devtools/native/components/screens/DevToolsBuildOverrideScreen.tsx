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
fn(4560);
let obj = { content: null, contentContainer: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.content = obj;
const createStyles = { padding: nativeDefault.space.PX_16 };
obj.contentContainer = createStyles;
let closure_9 = createStyles.createStyles(obj);
let items = [{ label: "Branch Name", value: "branch", icon: jsx(fn(8862).TagIcon, {}) }];
let obj2 = { label: "Branch Name", value: "branch", icon: jsx(fn(8862).TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(fn(15581).HashmarkIcon, {}) };
let obj3 = { label: "Commit SHA", value: "id", icon: jsx(fn(15581).HashmarkIcon, {}) };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default noop.memo(() => {
  let tmp = closure_9();
  let obj = first(504);
  items = [BuildOverrideStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[first(undefined, 11789).DEVICE_FIELD];
    }
    return tmp;
  });
  const tmp5 = _slicedToArray(noop.useState({ type: "branch", id: "" }), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  obj = { style: tmp.content, contentContainerStyle: null, children: null };
  obj = {};
  let merged = Object.assign(tmp.contentContainer);
  obj.paddingBottom = tmp.contentContainer.padding + first(6981)({ includeKeyboardHeight: true }).insets.bottom;
  obj.contentContainerStyle = obj;
  let tmp10Result = null;
  if (null != stateFromStores) {
    const obj1 = { icon: jsx(tmp3(4507).CopyIcon, {}), label: null, subLabel: null, onPress: null };
    first = stateFromStores;
    const found = items.find((value) => value.value === first.type);
    let label;
    if (found != null) {
      label = found.label;
    }
    let obj2 = { title: "Current Override", hasIcons: true, children: null };
    obj1.label = label;
    obj1.subLabel = stateFromStores.id;
    obj1.onPress = function onPress() {
      ClipboardUtils.copy(first.id);
      const result = ToastUtils.presentCopiedToClipboard();
    };
    const items1 = [
      jsx(tmp3(5605).TableRow, { icon: jsx(tmp3(4507).CopyIcon, {}), label: null, subLabel: null, onPress: null }),
      ,
    ];
    let obj3 = {
      icon: jsx(tmp3(15158).RefreshIcon, {}),
      label: "Refresh Override",
      onPress: tmp3(11789).refreshBuildOverride,
      arrow: true,
    };
    items1[1] = jsx(tmp3(5605).TableRow, {
      icon: jsx(tmp3(15158).RefreshIcon, {}),
      label: "Refresh Override",
      onPress: tmp3(11789).refreshBuildOverride,
      arrow: true,
    });
    const obj4 = {
      icon: jsx(tmp3(4518).TrashIcon, { color: "text-feedback-critical" }),
      label: "Clear Override",
      variant: "danger",
      onPress: tmp3(11789).clearBuildOverride,
      arrow: true,
    };
    items1[2] = jsx(tmp3(5605).TableRow, {
      icon: jsx(tmp3(4518).TrashIcon, { color: "text-feedback-critical" }),
      label: "Clear Override",
      variant: "danger",
      onPress: tmp3(11789).clearBuildOverride,
      arrow: true,
    });
    obj2.children = items1;
    tmp10Result = jsxs(tmp3(5687).TableRowGroup, { title: "Current Override", hasIcons: true, children: null });
  }
  const items2 = [tmp10Result, , ,];
  let str = "";
  if (null != stateFromStores) {
    str = "New";
  }
  items2[1] = jsx(first(5685).TableRadioGroup, {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5688).TableRadioRow, { value, label, icon }, value);
    }),
  });
  const found1 = items.find((value) => value.value === first.type);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const obj6 = { title: label1, hasIcons: true, children: null };
  const found2 = arr4.find((value) => value.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const obj7 = { icon, label: null };
  const found3 = arr4.find((value) => value.value === first.type);
  let label2;
  if (found3 != null) {
    label2 = found3.label;
  }
  const obj8 = { spacing: 16, children: null };
  const obj5 = {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5688).TableRadioRow, { value, label, icon }, value);
    }),
  };
  obj7.label = jsx(first(6606).TextInput, {
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
    isClearable: true,
  });
  obj6.children = jsx(first(5605).TableRow, { icon, label: null });
  items2[2] = jsx(first(5687).TableRowGroup, { title: label1, hasIcons: true, children: null });
  items2[3] = jsx(first(4975).Button, {
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
  obj8.children = items2;
  obj.children = jsxs(first(4973).Stack, { spacing: 16, children: null });
  return <ScrollView />;
});
