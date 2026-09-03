// discord_app/modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../build_overrides/BuildOverrideStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c4 = importAllResult;
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
let obj = { content: null, contentContainer: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
createCacheKey = { padding: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
let items = [{ label: "Branch Name", value: "branch", icon: jsx(require("TagIcon").TagIcon, {}) }];
let obj2 = { label: "Branch Name", value: "branch", icon: jsx(require("TagIcon").TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(require("HashmarkIcon").HashmarkIcon, {}) };
let obj3 = { label: "Commit SHA", value: "id", icon: jsx(require("HashmarkIcon").HashmarkIcon, {}) };
const memoResult = importAllResult.memo(() => {
  let tmp = callback2();
  let obj = first(586);
  items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[first(undefined, 11588).DEVICE_FIELD];
    }
    return tmp;
  });
  first = stateFromStores;
  const tmp5 = callback(importAllResult.useState({ type: "branch", id: "" }), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  obj = { style: tmp.content, contentContainerStyle: null, children: null };
  obj = {};
  let merged = Object.assign(tmp.contentContainer);
  obj.paddingBottom = tmp.contentContainer.padding + first(5603)({ includeKeyboardHeight: true }).insets.bottom;
  obj[1] = obj;
  let tmp10Result = null;
  if (null != stateFromStores) {
    obj1 = { icon: null, label: null, subLabel: null, onPress: null };
    obj1[0] = tmp7(tmp3(4425).CopyIcon, {});
    first = stateFromStores;
    const found = items.find((value) => value.value === first.type);
    let label;
    if (found != null) {
      label = found.label;
    }
    let obj2 = { title: "Current Override", hasIcons: true, children: null };
    obj1[1] = label;
    obj1[2] = stateFromStores.id;
    obj1[3] = function onPress() {
      first(5990).copy(first.id);
      const obj = first(5990);
      const result = first(4193).presentCopiedToClipboard();
    };
    const items1 = [tmp7(tmp3(5608).TableRow, obj1), ,];
    let obj3 = { icon: null, label: "Refresh Override", onPress: null, arrow: true };
    obj3[0] = tmp7(tmp3(15000).RefreshIcon, {});
    obj3[2] = tmp3(11588).refreshBuildOverride;
    items1[1] = tmp7(tmp3(5608).TableRow, obj3);
    const obj4 = { icon: null, label: "Clear Override", variant: "danger", onPress: null, arrow: true };
    obj4[0] = tmp7(tmp3(4436).TrashIcon, { color: "text-feedback-critical" });
    obj4[3] = tmp3(11588).clearBuildOverride;
    items1[2] = tmp7(tmp3(5608).TableRow, obj4);
    obj2[2] = items1;
    tmp10Result = tmp10(tmp3(6001).TableRowGroup, obj2);
  }
  const items2 = [tmp10Result, , ,];
  let str = "";
  if (null != stateFromStores) {
    str = "New";
  }
  items2[1] = jsx(first(7704).TableRadioGroup, {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return callback(first(7705).TableRadioRow, { value, label, icon }, value);
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
      return callback(first(7705).TableRadioRow, { value, label, icon }, value);
    }),
  };
  const tmp8 = ScrollView;
  obj7[1] = jsx(first(7717).TextInput, {
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
  obj6[2] = jsx(first(5608).TableRow, { icon, label: null });
  items2[2] = jsx(first(6001).TableRowGroup, { title: label1, hasIcons: true, children: null });
  items2[3] = jsx(first(4929).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const result = first(11588).setBuildOverrideForBranch(tmp.id);
        const obj3 = first(11588);
      } else if ("id" === type) {
        const result1 = first(11588).setBuildOverrideForId(tmp.id);
        const obj2 = first(11588);
      } else {
        first(1470).assertNever(tmp.type);
        const obj = first(1470);
      }
    },
  });
  obj8[1] = items2;
  obj[2] = jsxs(first(4927).Stack, { spacing: 16, children: null });
  return <tmp8 />;
});
let result = require("set").fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx",
);

export default memoResult;
