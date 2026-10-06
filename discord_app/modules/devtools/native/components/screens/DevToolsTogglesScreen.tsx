// === Module 15601: DevToolsTogglesScreen ===

// Module 15601 (DevToolsTogglesScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DevSettingsStore2 from "DevSettingsStore" /* 4895 */;
import fuzzysearchDefault from "fuzzysearch" /* 5709 */;
import TableRowGroup3 from "TableRowGroup" /* 6081 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6020 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const DevSettingsStore = DevSettingsStore2;
let _require, title;

let c10;
let c9;
let obj2;
let obj3;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const tmp5 = fuzzysearchDefault;
    const formatted = str.toLowerCase();
    let tmp3ResultResult = tmp5(formatted, str2.toLowerCase());
    if (!tmp3ResultResult) {
      const tmp3Result = fuzzysearchDefault;
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = tmp3Result(formatted1, str3.toLowerCase());
    }
    tmp = tmp3ResultResult;
  }
  return tmp;
}
const ScrollView = react_native.ScrollView;
const CATEGORY_LABELS = DevSettingsStore2.CATEGORY_LABELS;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((toggleName) => {
  let onValueChange;
  let value;
  let obj = toggleName(576);
  const cResult = obj.c(11);
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  if (cResult[0] === description) {
    let tmp4;
    if (cResult[1] === toggleName) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === onValueChange) {
      let tmp5;
      if (cResult[4] === value) {
        tmp5 = cResult[5];
      }
      if (cResult[6] === description) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp5) {
            let tmp8;
            if (cResult[9] === toggleName) {
              tmp8 = cResult[10];
            }
            return tmp8;
          }
        }
      }
      let obj2 = { label: description, labelLineClamp: 1, subLabel: toggleName, subLabelLineClamp: 1, onPress: tmp4, trailing: tmp5 };
      const tmp10 = closure_9(toggleName(6000).TableRow, obj2, toggleName);
      cResult[6] = description;
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = toggleName;
      cResult[10] = tmp10;
      tmp8 = tmp10;
    }
    const obj3 = { value, onValueChange };
    const tmp7 = closure_9(toggleName(6706).FormSwitch, obj3);
    cResult[3] = onValueChange;
    cResult[4] = value;
    cResult[5] = tmp7;
    tmp5 = tmp7;
  }
  const fn = function t() {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { content: description, key: toggleName };
    obj.open(obj2);
  };
  cResult[0] = description;
  cResult[1] = toggleName;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((toggleName) => {
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
      const obj = ToastActionCreatorsDefault;
      const obj2 = { content: description, key: toggleName };
      obj.open(obj2);
    },
    trailing: closure_9(toggleName(6706).FormSwitch, { value, onValueChange })
  };
  const TableRow = toggleName(6000).TableRow;
  return closure_9(TableRow, obj, toggleName);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7, tmp(504).statesWillNeverBeEqual);
  }
  const fn = function s() {
    const allByCategoryResult = DevSettingsStore.allByCategory(closure_0);
    return allByCategoryResult.filter((item) => {
      const tmp = _slicedToArray(item, 3);
      let tmp2 = 0 === closure_1_1.length;
      const str = tmp[0];
      const str2 = tmp[2].label;
      if (!tmp2) {
        const tmp5 = closure_1(dependencyMap[6]);
        const formatted = closure_1_1.toLowerCase();
        let tmp3ResultResult = tmp5(formatted, str.toLowerCase());
        if (!tmp3ResultResult) {
          const tmp3Result = closure_1(dependencyMap[6]);
          const formatted1 = closure_1_1.toLowerCase();
          tmp3ResultResult = tmp3Result(formatted1, str2.toLowerCase());
        }
        tmp2 = tmp3ResultResult;
      }
      return tmp2;
    });
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [DevSettingsStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const allByCategoryResult = DevSettingsStore.allByCategory(closure_0);
    return allByCategoryResult.filter((item) => {
      let tmp;
      [tmp, , ] = item;
      return fuzzySearchToggle(closure_1_1, tmp, tmp2);
    });
  }, items1, require("get initialized").statesWillNeverBeEqual);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let obj = react2;
  const cResult = obj.c(6);
  title = title.title;
  const arr = closure_14(title.category, title.query);
  if (0 === arr.length) {
    return null;
  } else {
    let tmp4;
    if (cResult[0] !== arr) {
      let tmp6;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arg0) {
          const tmp = closure_3(arg0, 3);
          const toggleName = tmp[0];
          let obj = {
            toggleName,
            description: tmp[2].label,
            value: tmp[1],
            onValueChange(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle(first, arg0);
            }
          };
          return closure_9(closure_13, obj, toggleName);
        };
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const mapped = arr.map(tmp6);
      cResult[0] = arr;
      cResult[1] = mapped;
      tmp4 = mapped;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[3] === tmp4) {
      let tmp8;
      if (cResult[4] === title) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
    const obj2 = { title, hasIcons: false, children: tmp4 };
    const tmp10 = React4(TableRowGroup3.TableRowGroup, obj2);
    cResult[3] = tmp4;
    cResult[4] = title;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
}) : ((title) => {
  title = title.title;
  const arr = closure_14(title.category, title.query);
  let tmp = null;
  if (0 !== arr.length) {
    let obj = {
      title,
      hasIcons: false,
      children: arr.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2, ] = item;
          let obj = {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle(closure_1_0, arg0);
            }
          };
          return closure_9(closure_13, obj, tmp);
        })
    };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    tmp = React4(TableRowGroup, obj);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let first1;
  let items2;
  let items3;
  let obj7;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp9;
  let tmp = first1;
  let obj = first1(576);
  const cResult = obj.c(24);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  [first1, tmp9] = react.useState("");
  const tmpResult = tmp(14278);
  const manaTextMigrationHighlightRestartNotice = tmpResult.useManaTextMigrationHighlightRestartNotice();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DesignTogglesStore];
    cResult[1] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== first1) {
    const fn = function f() {
      let length;
      const allWithDescriptionsResult = DesignTogglesStore.allWithDescriptions();
      return allWithDescriptionsResult.filter((item) => {
        let str;
        let str2;
        [str, , str2] = item;
        let tmp2 = 0 === length.length;
        if (!tmp2) {
          const tmp5 = fuzzysearchDefault;
          const formatted = length.toLowerCase();
          let tmp3ResultResult = tmp5(formatted, str.toLowerCase());
          if (!tmp3ResultResult) {
            const tmp3Result = fuzzysearchDefault;
            const formatted1 = length.toLowerCase();
            tmp3ResultResult = tmp3Result(formatted1, str2.toLowerCase());
          }
          tmp2 = tmp3ResultResult;
        }
        return tmp2;
      });
    };
    const items1 = [first1];
    cResult[2] = first1;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[3];
    tmp14 = cResult[4];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp11, tmp13, tmp14, tmp(504).statesWillNeverBeEqual);
  const wrap = tmp4.wrap;
  const sum = nativeDefault.space.PX_16 + insets.bottom;
  if (cResult[5] !== sum) {
    const obj3 = { paddingBottom: sum };
    cResult[5] = sum;
    cResult[6] = obj3;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    let tmp17;
    let tmp18;
    let tmp21;
    let tmp25;
    let arr6;
    let tmp30;
    if (cResult[8] === tmp16) {
      tmp17 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = {
        label: "Clear All",
        variant: "danger",
        onPress() {
              const obj = first1(dependencyMap[19]);
              obj.clearAll();
              const obj2 = first1(dependencyMap[15]);
              obj2.clearAll();
            },
        arrow: true
      };
      const tmp20 = closure_9(tmp(6000).TableRow, obj4);
      cResult[10] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[10];
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { title: "Actions", hasIcons: false, children: items2 };
      items2 = [tmp18, ];
      const TableRowGroup = tmp(6081).TableRowGroup;
      const obj6 = { label: closure_9(tmp(6554).SearchField, obj7) };
      const TableRow = tmp(6000).TableRow;
      obj7 = { size: "md", placeholder: "Search design toggles", onChange: tmp9 };
      items2[1] = closure_9(TableRow, obj6);
      const tmp24 = closure_10(TableRowGroup, obj5);
      cResult[11] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[11];
    }
    if (cResult[12] !== stateFromStores) {
      let tmp26 = null;
      if (stateFromStores.length > 0) {
        const obj8 = {
          title: "Design Toggles",
          hasIcons: false,
          children: stateFromStores.map((item) => {
                  const tmp = closure_3(item, 3);
                  const toggleName = tmp[0];
                  let obj = {
                    toggleName,
                    description: tmp[2],
                    value: tmp[1],
                    onValueChange(arg0) {
                      const obj = first1(dependencyMap[19]);
                      return obj.toggle(first, arg0);
                    }
                  };
                  return closure_9(closure_13, obj, toggleName);
                })
        };
        const TableRowGroup2 = tmp(6081).TableRowGroup;
        tmp26 = closure_9(TableRowGroup2, obj8);
      }
      cResult[12] = stateFromStores;
      cResult[13] = tmp26;
      tmp25 = tmp26;
    } else {
      tmp25 = cResult[13];
    }
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const _Object = Object;
      const entries = Object.entries(CATEGORY_LABELS);
      cResult[14] = entries;
      arr6 = entries;
    } else {
      arr6 = cResult[14];
    }
    if (cResult[15] !== first1) {
      const mapped = arr6.map((item) => {
        const tmp = _slicedToArray(item, 2);
        const first = tmp[0];
        const obj = { category: parseInt(first), title: tmp[1], query: first1 };
        return React4(closure_15, obj, first);
      });
      cResult[15] = first1;
      cResult[16] = mapped;
      tmp30 = mapped;
    } else {
      tmp30 = cResult[16];
    }
    if (cResult[17] === tmp25) {
      let tmp32;
      if (cResult[18] === tmp30) {
        tmp32 = cResult[19];
      }
      if (cResult[20] === tmp4.wrap) {
        if (cResult[21] === tmp32) {
          let tmp35;
          if (cResult[22] === tmp17) {
            tmp35 = cResult[23];
          }
          return tmp35;
        }
      }
      const obj9 = { style: wrap, contentContainerStyle: tmp17, children: tmp32 };
      const tmp38 = closure_9(ScrollView, obj9);
      cResult[20] = tmp4.wrap;
      cResult[21] = tmp32;
      cResult[22] = tmp17;
      cResult[23] = tmp38;
      tmp35 = tmp38;
    }
    const obj10 = { spacing: 16, children: items3 };
    items3 = [tmp21, tmp25, tmp30];
    const tmp34 = closure_10(tmp(5600).Stack, obj10);
    cResult[17] = tmp25;
    cResult[18] = tmp30;
    cResult[19] = tmp34;
    tmp32 = tmp34;
  }
  const items4 = [tmp4.container, tmp16];
  cResult[7] = tmp4.container;
  cResult[8] = tmp16;
  cResult[9] = items4;
  tmp17 = items4;
}) : (() => {
  let Stack;
  let items2;
  let items3;
  let obj9;
  let query;
  let tmp5;
  let tmp = closure_12();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  [query, tmp5] = react.useState("");
  let obj = query(14278);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  let obj2 = query(504);
  const items = [DesignTogglesStore];
  const items1 = [query];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let length;
    const allWithDescriptionsResult = DesignTogglesStore.allWithDescriptions();
    return allWithDescriptionsResult.filter((item) => {
      let str;
      let str2;
      [str, , str2] = item;
      let tmp = 0 === length.length;
      if (!tmp) {
        const tmp4 = fuzzysearchDefault;
        const formatted = length.toLowerCase();
        let tmp2ResultResult = tmp4(formatted, str.toLowerCase());
        if (!tmp2ResultResult) {
          const tmp2Result = fuzzysearchDefault;
          const formatted1 = length.toLowerCase();
          tmp2ResultResult = tmp2Result(formatted1, str2.toLowerCase());
        }
        tmp = tmp2ResultResult;
      }
      return tmp;
    });
  }, items1, query(504).statesWillNeverBeEqual);
  const obj3 = { style: tmp.wrap, contentContainerStyle: items2, children: closure_10(Stack, obj9) };
  items2 = [tmp.container, { paddingBottom: nativeDefault.space.PX_16 + insets.bottom }];
  ({ paddingBottom: nativeDefault.space.PX_16 + insets.bottom });
  Stack = query(5600).Stack;
  const obj5 = { title: "Actions", hasIcons: false, children: items3 };
  const TableRowGroup = query(6081).TableRowGroup;
  items3 = [, ];
  const obj6 = {
    label: "Clear All",
    variant: "danger",
    onPress() {
      const obj = first(dependencyMap[19]);
      obj.clearAll();
      const obj2 = first(dependencyMap[15]);
      obj2.clearAll();
    },
    arrow: true
  };
  items3[0] = closure_9(query(6000).TableRow, obj6);
  const obj7 = { label: closure_9(query(6554).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp5 }) };
  const TableRow = query(6000).TableRow;
  items3[1] = closure_9(TableRow, obj7);
  const items4 = [closure_10(TableRowGroup, obj5), , ];
  let tmp8Result = null;
  const tmp6 = query;
  if (stateFromStores.length > 0) {
    const obj8 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((item) => {
          let tmp;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = item;
          let obj = {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              const obj = first(dependencyMap[19]);
              return obj.toggle(query, arg0);
            }
          };
          return closure_9(closure_13, obj, tmp);
        })
    };
    const TableRowGroup2 = tmp6(6081).TableRowGroup;
    tmp8Result = closure_9(TableRowGroup2, obj8);
  }
  obj9 = { spacing: 16, children: items4 };
  items4[1] = tmp8Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { category: parseInt(tmp), title: tmp2, query };
    return React4(closure_15, obj, tmp);
  });
  return closure_9(ScrollView, obj3);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default tmp4;