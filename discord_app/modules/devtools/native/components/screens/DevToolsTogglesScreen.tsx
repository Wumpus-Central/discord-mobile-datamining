// discord_app/modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
import _slicedToArray from "_slicedToArray";
import SearchField from "SearchField";
import { ScrollView } from "Stack";
import getUserAgnosticState from "getUserAgnosticState";
import closure_7 from "getUserAgnosticState";
import { CATEGORY_LABELS } from "getUserAgnosticState";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { fuzzysearch } from "../../../../../../_runtime/05229_fuzzysearch.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";

let c10;
let c9;
const require = arg1;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp3ResultResult = fuzzysearch(formatted, str2.toLowerCase());
    if (!tmp3ResultResult) {
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = tmp3(5229)(formatted1, str3.toLowerCase());
      const tmp3Result = tmp3(5229);
    }
    tmp = tmp3ResultResult;
    tmp3 = importDefault;
    const tmp5 = fuzzysearch;
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  let onValueChange;
  let value;
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  let obj = {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      let obj = description(outer1_2[10]);
      obj = { content: description, key: toggleName };
      obj.open(obj);
    },
    trailing: null
  };
  obj[5] = callback2(toggleName(5769).FormSwitch, { value, onValueChange });
  return callback2(toggleName(5374).TableRow, obj, toggleName);
}
function DevTogglesForCategory(title) {
  let category;
  let query;
  ({ category, query } = title);
  let obj = category(589);
  const items = [closure_7];
  const items1 = [query, category];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.allByCategory(category).filter((arg0) => {
    let tmp;
    [tmp, , ] = arg0;
    return outer1_11(closure_1, tmp, tmp2);
  }), items1, category(589).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    obj = { title: null, hasIcons: false, children: null };
    obj[0] = title.title;
    obj[2] = stateFromStores.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2, ] = arg0;
      return callback(closure_13, {
        toggleName: tmp,
        description: tmp3,
        value: tmp2,
        onValueChange(arg0) {
          return outer1_0(outer1_2[14]).toggle(closure_0, arg0);
        }
      }, tmp);
    });
    tmp3 = callback2(category(5767).TableRowGroup, obj);
  }
  return tmp3;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { wrap: null, container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = createCacheKey();
  let tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  let obj = first(15040);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  let obj1 = first(589);
  const items = [getUserAgnosticState];
  const items1 = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.allWithDescriptions().filter((arg0) => {
    let str;
    let str2;
    [str, , str2] = arg0;
    let tmp = 0 === length.length;
    if (!tmp) {
      const formatted = str3.toLowerCase();
      let tmp2ResultResult = outer1_1(outer1_2[6])(formatted, str.toLowerCase());
      if (!tmp2ResultResult) {
        const formatted1 = str3.toLowerCase();
        tmp2ResultResult = tmp2(tmp3[6])(formatted1, str2.toLowerCase());
        const tmp2Result = tmp2(tmp3[6]);
      }
      tmp = tmp2ResultResult;
      tmp2 = outer1_1;
      tmp3 = outer1_2;
      const tmp4 = outer1_1(outer1_2[6]);
    }
    return tmp;
  }), items1, first(589).statesWillNeverBeEqual);
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: Themes.space.PX_16 + useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets.bottom };
  items2[1] = obj;
  obj[1] = items2;
  obj1 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    callback2(first(5374).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15041).clearAll();
        const obj = first(15041);
        first(15023).clearAll();
      },
      arrow: true
    }),

  ];
  const obj3 = { label: null };
  obj3[0] = callback2(first(5994).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] });
  items3[1] = callback2(first(5374).TableRow, obj3);
  obj1[2] = items3;
  const items4 = [callback3(first(5767).TableRowGroup, obj1), , ];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj4 = { title: "Design Toggles", hasIcons: false, children: null };
    obj4[2] = stateFromStores.map((arg0) => {
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = arg0;
      return callback(closure_13, {
        toggleName: tmp,
        description: tmp3,
        value: tmp2,
        onValueChange(arg0) {
          return outer1_0(outer1_2[18]).toggle(closure_0, arg0);
        }
      }, tmp);
    });
    tmp7Result = tmp7(first(5767).TableRowGroup, obj4);
  }
  const obj5 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return outer1_9(outer1_14, { category: parseInt(tmp), title: tmp2, query: first }, tmp);
  });
  obj5[1] = items4;
  obj[2] = callback3(first(4712).Stack, obj5);
  return callback2(ScrollView, obj);
};