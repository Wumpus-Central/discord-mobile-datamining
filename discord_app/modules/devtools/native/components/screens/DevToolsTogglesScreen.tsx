// === Module 15160: fuzzySearchToggle ===

// Module 15160 (fuzzySearchToggle)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5441 */;
import fuzzysearchDefault from "fuzzysearch" /* 6775 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import getUserAgnosticState from "getUserAgnosticState" /* 5294 */;
import getUserAgnosticState2 from "getUserAgnosticState" /* 4737 */;
import { CATEGORY_LABELS } from "getUserAgnosticState" /* 4737 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

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
  return callback2(toggleName(6291).TableRow, {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      description(dependencyMap[10]);
      const obj = { content: description, key: toggleName };
      obj.open(obj);
    },
    trailing: callback2(toggleName(7179).FormSwitch, { value, onValueChange })
  }, toggleName);
}
function DevTogglesForCategory(title) {
  ({ category, query } = title);
  let obj = category(589);
  const items = [closure_7];
  const items1 = [query, category];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.allByCategory(category).filter((item, index) => {
    [tmp, , ] = item;
    return closure_1_11(closure_1, tmp, tmp2);
  }), items1, category(589).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    obj = { title: null, hasIcons: false, children: null };
    obj[0] = title.title;
    obj[2] = stateFromStores.map((item, index) => {
      [tmp, tmp2, ] = item;
      return callback(closure_13, {
        toggleName: tmp,
        description: tmp3,
        value: tmp2,
        onValueChange(arg0) {
          return category(closure_1_2[14]).toggle(closure_0, arg0);
        }
      }, tmp);
    });
    tmp3 = callback2(category(6286).TableRowGroup, obj);
  }
  return tmp3;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = callback4();
  const tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  let obj = first(15161);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  obj1 = first(589);
  const items = [closure_6];
  const items1 = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.allWithDescriptions().filter((item, index) => {
    [str, , str2] = item;
    let tmp = 0 === length.length;
    if (!tmp) {
      const formatted = length.toLowerCase();
      let tmp2ResultResult = closure_1_1(closure_1_2[6])(formatted, str.toLowerCase());
      if (!tmp2ResultResult) {
        const formatted1 = length.toLowerCase();
        tmp2ResultResult = closure_1_1(closure_1_2[6])(formatted1, str2.toLowerCase());
        const tmp2Result = closure_1_1(closure_1_2[6]);
      }
      tmp = tmp2ResultResult;
      const tmp4 = closure_1_1(closure_1_2[6]);
    }
    return tmp;
  }), items1, first(589).statesWillNeverBeEqual);
  const items2 = [tmp.container, ];
  obj = { paddingBottom: ThemesDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  items2[1] = obj;
  obj[1] = items2;
  obj1 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    callback2(first(6291).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15162).clearAll();
        const obj = first(15162);
        first(15144).clearAll();
      },
      arrow: true
    }),
    callback2(first(6291).TableRow, { label: callback2(first(7337).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] }) })
  ];
  obj1[2] = items3;
  const items4 = [callback3(first(6286).TableRowGroup, obj1), , ];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj4 = { title: "Design Toggles", hasIcons: false, children: null };
    obj4[2] = stateFromStores.map((item, index) => {
      [tmp, tmp2, tmp3] = item;
      return callback(closure_13, {
        toggleName: tmp,
        description: tmp3,
        value: tmp2,
        onValueChange(arg0) {
          return first(closure_1_2[18]).toggle(closure_0, arg0);
        }
      }, tmp);
    });
    tmp7Result = callback2(first(6286).TableRowGroup, obj4);
  }
  const obj5 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item, index) => {
    [tmp, tmp2] = item;
    return closure_1_9(DevTogglesForCategory, { category: parseInt(tmp), title: tmp2, query: first }, tmp);
  });
  obj5[1] = items4;
  obj[2] = callback3(first(4733).Stack, obj5);
  return callback2(ScrollView, obj);
};