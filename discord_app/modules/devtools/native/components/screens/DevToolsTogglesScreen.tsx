// === Module 15843: DevToolsTogglesScreen ===

// Module 15843 (DevToolsTogglesScreen)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import fuzzysearchDefault from "fuzzysearch" /* 5605 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7095 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DesignTogglesStore from "DesignTogglesStore" /* 5715 */;
import DevSettingsStore from "DevSettingsStore" /* 4639 */;

const require = fn;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp3ResultResult = fuzzysearchDefault(formatted, str2.toLowerCase());
    if (!tmp3ResultResult) {
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = fuzzysearchDefault(formatted1, str3.toLowerCase());
      const tmp3Result = fuzzysearchDefault;
    }
    tmp = tmp3ResultResult;
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  return closure_9(toggleName(5693).TableRow, {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      ToastActionCreatorsDefault.open({ content: description, key: toggleName });
    },
    trailing: closure_9(toggleName(7315).FormSwitch, { value, onValueChange })
  }, toggleName);
}
function DevTogglesForCategory(title) {
  ({ category, query } = title);
  const items = [DevSettingsStore];
  const items1 = [query, category];
  const stateFromStores = category(504).useStateFromStores(items, () => DevSettingsStore.allByCategory(category).filter((item) => {
    [tmp, , ] = item;
    return fuzzySearchToggle(query, tmp, tmp2);
  }), items1, category(504).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    const obj2 = {
      title: title.title,
      hasIcons: false,
      children: stateFromStores.map((item) => {
          [tmp, tmp2, ] = item;
          return closure_9(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return category(dependencyMap[14]).toggle(closure_1_0, arg0);
            }
          }, tmp);
        })
    };
    tmp3 = closure_9(category(5775).TableRowGroup, obj2);
  }
  return tmp3;
}
const ScrollView = fn(17).ScrollView;
const CATEGORY_LABELS = fn(4639).CATEGORY_LABELS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 }, container: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.container = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = closure_12();
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const query = tmp3[0];
  const manaTextMigrationHighlightRestartNotice = query(15844).useManaTextMigrationHighlightRestartNotice();
  let obj = query(15844);
  const tmp5 = query;
  const items = [DesignTogglesStore];
  const items1 = [query];
  const stateFromStores = query(504).useStateFromStores(items, () => DesignTogglesStore.allWithDescriptions().filter((item) => {
    [str, , str2] = item;
    let tmp = 0 === length.length;
    if (!tmp) {
      const formatted = length.toLowerCase();
      let tmp2ResultResult = fuzzysearchDefault(formatted, str.toLowerCase());
      if (!tmp2ResultResult) {
        const formatted1 = length.toLowerCase();
        tmp2ResultResult = fuzzysearchDefault(formatted1, str2.toLowerCase());
        const tmp2Result = fuzzysearchDefault;
      }
      tmp = tmp2ResultResult;
    }
    return tmp;
  }), items1, query(504).statesWillNeverBeEqual);
  const obj3 = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const items2 = [tmp.container, ];
  const obj2 = query(504);
  items2[1] = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  obj3.contentContainerStyle = items2;
  const obj5 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    closure_9(query(5693).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15845).clearAll();
        const obj = first(15845);
        first(15827).clearAll();
      },
      arrow: true
    }),

  ];
  const obj4 = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  const obj6 = {
    label: "Clear All",
    variant: "danger",
    onPress() {
      first(15845).clearAll();
      const obj = first(15845);
      first(15827).clearAll();
    },
    arrow: true
  };
  items3[1] = closure_9(query(5693).TableRow, { label: closure_9(query(7164).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] }) });
  obj5.children = items3;
  const items4 = [closure_10(query(5775).TableRowGroup, obj5), , ];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj8 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((item) => {
          [tmp, tmp2, tmp3] = item;
          return closure_9(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return first(15845).toggle(query, arg0);
            }
          }, tmp);
        })
    };
    tmp7Result = closure_9(tmp5(5775).TableRowGroup, obj8);
  }
  const obj9 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    [tmp, tmp2] = item;
    return React7(DevTogglesForCategory, { category: parseInt(tmp), title: tmp2, query }, tmp);
  });
  obj9.children = items4;
  obj3.children = closure_10(query(5060).Stack, obj9);
  return closure_9(ScrollView, obj3);
};