// discord_app/modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import getCurrentBuildOverride from "../../../../build_overrides/BuildOverrideStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c4 = importAllResult;
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
const createCacheKey = { padding: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
let items = [{ label: "Branch Name", value: "branch", icon: jsx(require("TagIcon").TagIcon, {}) }, ];
let obj2 = { label: "Branch Name", value: "branch", icon: jsx(require("TagIcon").TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(require("HashmarkIcon").HashmarkIcon, {}) };
let obj3 = { label: "Commit SHA", value: "id", icon: jsx(require("HashmarkIcon").HashmarkIcon, {}) };
const memoResult = importAllResult.memo(() => {
  let tmp = callback2();
  let obj = first(589);
  items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[first(undefined, 10968).DEVICE_FIELD];
    }
    return tmp;
  });
  const tmp5 = callback(importAllResult.useState({ type: "branch", id: "" }), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  obj = {};
  let merged = Object.assign(tmp.contentContainer);
  obj.paddingBottom = tmp.contentContainer.padding + first(5441)({ includeKeyboardHeight: true }).insets.bottom;
  obj[1] = obj;
  let tmp10Result = null;
  if (null != stateFromStores) {
    obj1 = { icon: null, label: null, subLabel: null, onPress: null };
    obj1[0] = jsx(tmp3(4322).CopyIcon, {});
    first = stateFromStores;
    const found = items.find((item, index) => item.value === first.type);
    let label;
    if (found != null) {
      label = found.label;
    }
    let obj2 = { title: "Current Override", hasIcons: true, children: null };
    obj1[1] = label;
    obj1[2] = stateFromStores.id;
    obj1[3] = function onPress() {
      first(7167).copy(first.id);
      const obj = first(7167);
      const result = first(4093).presentCopiedToClipboard();
    };
    const items1 = [jsx(tmp3(6291).TableRow, { icon: null, label: null, subLabel: null, onPress: null }), , ];
    let obj3 = { icon: null, label: "Refresh Override", onPress: null, arrow: true };
    obj3[0] = jsx(tmp3(13952).RefreshIcon, {});
    obj3[2] = tmp3(10968).refreshBuildOverride;
    items1[1] = jsx(tmp3(6291).TableRow, { icon: null, label: "Refresh Override", onPress: null, arrow: true });
    const obj4 = { icon: null, label: "Clear Override", variant: "danger", onPress: null, arrow: true };
    obj4[0] = jsx(tmp3(4333).TrashIcon, { color: "text-feedback-critical" });
    obj4[3] = tmp3(10968).clearBuildOverride;
    items1[2] = jsx(tmp3(6291).TableRow, { icon: null, label: "Clear Override", variant: "danger", onPress: null, arrow: true });
    obj2[2] = items1;
    tmp10Result = jsxs(tmp3(6286).TableRowGroup, { title: "Current Override", hasIcons: true, children: null });
  }
  const items2 = [tmp10Result, , , ];
  let str = "";
  if (null != stateFromStores) {
    str = "New";
  }
  items2[1] = jsx(first(8101).TableRadioGroup, {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((item, index) => {
      const value = item.value;
      ({ icon, label } = item);
      return callback(first(8100).TableRadioRow, { value, label, icon }, value);
    })
  });
  const found1 = items.find((item, index) => item.value === first.type);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const obj6 = { title: label1, hasIcons: true, children: null };
  const found2 = arr4.find((item, index) => item.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const obj7 = { icon, label: null };
  const found3 = arr4.find((item, index) => item.value === first.type);
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
    children: items.map((item, index) => {
      const value = item.value;
      ({ icon, label } = item);
      return callback(first(8100).TableRadioRow, { value, label, icon }, value);
    })
  };
  obj7[1] = jsx(first(8071).TextInput, {
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
  obj6[2] = jsx(first(6291).TableRow, { icon, label: null });
  items2[2] = jsx(first(6286).TableRowGroup, { title: label1, hasIcons: true, children: null });
  items2[3] = jsx(first(4745).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const result = first(10968).setBuildOverrideForBranch(first.id);
        const obj3 = first(10968);
      } else if ("id" === type) {
        const result1 = first(10968).setBuildOverrideForId(first.id);
        const obj2 = first(10968);
      } else {
        first(1370).assertNever(first.type);
        const obj = first(1370);
      }
    }
  });
  obj8[1] = items2;
  obj[2] = jsxs(first(4733).Stack, { spacing: 16, children: null });
  return <ScrollView />;
});
let result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default memoResult;