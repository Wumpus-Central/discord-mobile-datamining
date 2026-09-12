// === Module 15795: DevToolsTogglesScreen ===

// Module 15795 (DevToolsTogglesScreen)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import fuzzysearchDefault from "fuzzysearch" /* 5598 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7084 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DesignTogglesStore from "DesignTogglesStore" /* 5708 */;
import DevSettingsStore from "DevSettingsStore" /* 4635 */;

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
  return closure_9(toggleName(5686).TableRow, {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      const obj = { content: description, key: toggleName };
      obj.open(obj);
    },
    trailing: closure_9(toggleName(7304).FormSwitch, { value, onValueChange })
  }, toggleName);
}
function DevTogglesForCategory(title) {
  ({ category, query } = title);
  let obj = category(504);
  const items = [DevSettingsStore];
  const items1 = [query, category];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.allByCategory(category).filter((item) => {
    [tmp, , ] = item;
    return fuzzySearchToggle(query, tmp, tmp2);
  }), items1, category(504).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    obj = {
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
    tmp3 = closure_9(category(5768).TableRowGroup, obj);
  }
  return tmp3;
}
const ScrollView = fn(17).ScrollView;
const CATEGORY_LABELS = fn(4635).CATEGORY_LABELS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4636);
let createStyles = { wrap: null, container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.wrap = createStyles;
createStyles.container = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = closure_12();
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const query = tmp3[0];
  let obj = query(15796);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  let obj1 = query(504);
  const items = [DesignTogglesStore];
  const items1 = [query];
  const stateFromStores = obj1.useStateFromStores(items, () => DesignTogglesStore.allWithDescriptions().filter((item) => {
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
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  items2[1] = obj;
  obj.contentContainerStyle = items2;
  obj1 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    closure_9(query(5686).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15797).clearAll();
        const obj = first(15797);
        first(15779).clearAll();
      },
      arrow: true
    }),
    closure_9(query(5686).TableRow, { label: closure_9(query(7153).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] }) })
  ];
  obj1.children = items3;
  const items4 = [closure_10(query(5768).TableRowGroup, obj1), , ];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj4 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((item) => {
          [tmp, tmp2, tmp3] = item;
          return closure_9(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return first(15797).toggle(query, arg0);
            }
          }, tmp);
        })
    };
    tmp7Result = closure_9(query(5768).TableRowGroup, obj4);
  }
  const obj5 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    [tmp, tmp2] = item;
    return React7(DevTogglesForCategory, { category: parseInt(tmp), title: tmp2, query }, tmp);
  });
  obj5.children = items4;
  obj.children = closure_10(query(5054).Stack, obj5);
  return closure_9(ScrollView, obj);
};