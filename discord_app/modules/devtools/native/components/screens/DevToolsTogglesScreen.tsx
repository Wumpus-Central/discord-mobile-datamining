// discord_app/modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import fuzzysearchDefault from "../../../../../../_runtime/05517_fuzzysearch.js";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import DesignTogglesStore from "../../../design_toggles/DesignTogglesStore.tsx";
import DevSettingsStore from "../../../dev_settings/DevSettingsStore.tsx";

const require = fn;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp3ResultResult = fuzzysearchDefault(formatted, str2.toLowerCase());
    if (!tmp3ResultResult) {
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = tmp3(5517)(formatted1, str3.toLowerCase());
      const tmp3Result = tmp3(5517);
    }
    tmp = tmp3ResultResult;
    tmp3 = importDefault;
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  return closure_9(
    toggleName(5605).TableRow,
    {
      label: description,
      labelLineClamp: 1,
      subLabel: toggleName,
      subLabelLineClamp: 1,
      onPress() {
        const obj = { content: description, key: toggleName };
        obj.open(obj);
      },
      trailing: closure_9(toggleName(7202).FormSwitch, { value, onValueChange }),
    },
    toggleName,
  );
}
function DevTogglesForCategory(title) {
  ({ category, query } = title);
  let obj = category(504);
  const items = [DevSettingsStore];
  const items1 = [query, category];
  const stateFromStores = obj.useStateFromStores(
    items,
    () =>
      DevSettingsStore.allByCategory(category).filter((item) => {
        [tmp, ,] = item;
        return fuzzySearchToggle(query, tmp, tmp2);
      }),
    items1,
    category(504).statesWillNeverBeEqual,
  );
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    obj = {
      title: title.title,
      hasIcons: false,
      children: stateFromStores.map((item) => {
        [tmp, tmp2] = item;
        return closure_9(
          closure_13,
          {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return category(dependencyMap[14]).toggle(closure_1_0, arg0);
            },
          },
          tmp,
        );
      }),
    };
    tmp3 = closure_9(category(5687).TableRowGroup, obj);
  }
  return tmp3;
}
const ScrollView = fn(17).ScrollView;
const CATEGORY_LABELS = fn(4559).CATEGORY_LABELS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, container: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.wrap = createStyles;
createStyles.container = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = closure_12();
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const query = tmp3[0];
  let obj = query(15707);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  let obj1 = query(504);
  const items = [DesignTogglesStore];
  const items1 = [query];
  const stateFromStores = obj1.useStateFromStores(
    items,
    () =>
      DesignTogglesStore.allWithDescriptions().filter((item) => {
        [str, , str2] = item;
        let tmp = 0 === length.length;
        if (!tmp) {
          const formatted = str3.toLowerCase();
          let tmp2ResultResult = fuzzysearchDefault(formatted, str.toLowerCase());
          if (!tmp2ResultResult) {
            const formatted1 = str3.toLowerCase();
            tmp2ResultResult = tmp2(5517)(formatted1, str2.toLowerCase());
            const tmp2Result = tmp2(5517);
          }
          tmp = tmp2ResultResult;
          tmp2 = importDefault;
        }
        return tmp;
      }),
    items1,
    query(504).statesWillNeverBeEqual,
  );
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const items2 = [tmp.container];
  obj = {
    paddingBottom:
      nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom,
  };
  items2[1] = obj;
  obj.contentContainerStyle = items2;
  obj1 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    closure_9(query(5605).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15708).clearAll();
        const obj = first(15708);
        first(15690).clearAll();
      },
      arrow: true,
    }),
    closure_9(query(5605).TableRow, {
      label: closure_9(query(7050).SearchField, {
        size: "md",
        placeholder: "Search design toggles",
        onChange: tmp3[1],
      }),
    }),
  ];
  obj1.children = items3;
  const items4 = [closure_10(query(5687).TableRowGroup, obj1), ,];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj4 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((item) => {
        [tmp, tmp2, tmp3] = item;
        return closure_9(
          closure_13,
          {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return first(15708).toggle(query, arg0);
            },
          },
          tmp,
        );
      }),
    };
    tmp7Result = tmp7(query(5687).TableRowGroup, obj4);
  }
  const obj5 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    [tmp, tmp2] = item;
    return React7(DevTogglesForCategory, { category: parseInt(tmp), title: tmp2, query }, tmp);
  });
  obj5.children = items4;
  obj.children = closure_10(query(4973).Stack, obj5);
  return closure_9(ScrollView, obj);
}
