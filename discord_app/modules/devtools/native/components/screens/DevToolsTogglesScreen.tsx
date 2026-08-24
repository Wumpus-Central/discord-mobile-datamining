// discord_app/modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import fuzzysearchDefault from "../../../../../../_runtime/06812_fuzzysearch.js";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../design_toggles/DesignTogglesStore.tsx";
import closure_7 from "../../../dev_settings/DevSettingsStore.tsx";
import { CATEGORY_LABELS } from "../../../dev_settings/DevSettingsStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp3ResultResult = fuzzysearchDefault(formatted, str2.toLowerCase());
    if (!tmp3ResultResult) {
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = tmp3(6812)(formatted1, str3.toLowerCase());
      const tmp3Result = tmp3(6812);
    }
    tmp = tmp3ResultResult;
    tmp3 = importDefault;
    const tmp5 = fuzzysearchDefault;
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  return callback2(toggleName(6322).TableRow, {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      let obj = description(closure_1_2[10]);
      obj = { content: description, key: toggleName };
      obj.open(obj);
    },
    trailing: callback2(toggleName(7217).FormSwitch, { value, onValueChange })
  }, toggleName);
}
function DevTogglesForCategory(title) {
  ({ category, query } = title);
  let obj = category(589);
  const items = [closure_7];
  const items1 = [query, category];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.allByCategory(category).filter((arg0) => {
    [tmp, , ] = arg0;
    return closure_1_11(closure_1, tmp, tmp2);
  }), items1, category(589).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    obj = { title: null, hasIcons: false, children: null };
    obj[0] = title.title;
    obj[2] = stateFromStores.map((arg0) => {
      [tmp, tmp2, ] = arg0;
      return callback(closure_13, {
        toggleName: tmp,
        description: tmp3,
        value: tmp2,
        onValueChange(arg0) {
          return closure_1_0(closure_1_2[14]).toggle(closure_0, arg0);
        }
      }, tmp);
    });
    tmp3 = callback2(category(6317).TableRowGroup, obj);
  }
  return tmp3;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { wrap: null, container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = callback4();
  let tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  let obj = first(15225);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  obj1 = first(589);
  const items = [closure_6];
  const items1 = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.allWithDescriptions().filter((arg0) => {
    [str, , str2] = arg0;
    let tmp = 0 === length.length;
    if (!tmp) {
      const formatted = str3.toLowerCase();
      let tmp2ResultResult = closure_1_1(closure_1_2[6])(formatted, str.toLowerCase());
      if (!tmp2ResultResult) {
        const formatted1 = str3.toLowerCase();
        tmp2ResultResult = tmp2(tmp3[6])(formatted1, str2.toLowerCase());
        const tmp2Result = tmp2(tmp3[6]);
      }
      tmp = tmp2ResultResult;
      tmp2 = closure_1_1;
      tmp3 = closure_1_2;
      const tmp4 = closure_1_1(closure_1_2[6]);
    }
    return tmp;
  }), items1, first(589).statesWillNeverBeEqual);
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: ThemesDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  items2[1] = obj;
  obj[1] = items2;
  obj1 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    callback2(first(6322).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15226).clearAll();
        const obj = first(15226);
        first(15208).clearAll();
      },
      arrow: true
    }),
    callback2(first(6322).TableRow, { label: callback2(first(7375).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] }) })
  ];
  obj1[2] = items3;
  const items4 = [callback3(first(6317).TableRowGroup, obj1), , ];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj4 = { title: "Design Toggles", hasIcons: false, children: null };
    obj4[2] = stateFromStores.map((arg0) => {
      [tmp, tmp2, tmp3] = arg0;
      return callback(closure_13, {
        toggleName: tmp,
        description: tmp3,
        value: tmp2,
        onValueChange(arg0) {
          return closure_1_0(closure_1_2[18]).toggle(closure_0, arg0);
        }
      }, tmp);
    });
    tmp7Result = tmp7(first(6317).TableRowGroup, obj4);
  }
  const obj5 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return closure_1_9(closure_1_14, { category: parseInt(tmp), title: tmp2, query: first }, tmp);
  });
  obj5[1] = items4;
  obj[2] = callback3(first(4738).Stack, obj5);
  return callback2(ScrollView, obj);
};