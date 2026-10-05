// === Module 15587: DevToolsTogglesScreen ===

// Module 15587 (DevToolsTogglesScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6013 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;

require = fn;
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
const ScrollView = fn(17).ScrollView;
const CATEGORY_LABELS = fn(4889).CATEGORY_LABELS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 }, container: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.container = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((toggleName) => {
  const cResult = toggleName(576).c(11);
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  if (cResult[0] === description) {
    if (cResult[1] === toggleName) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === onValueChange) {
      if (cResult[4] === value) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === description) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === toggleName) {
              let tmp8 = cResult[10];
            }
            return tmp8;
          }
        }
      }
      const obj2 = { label: description, labelLineClamp: 1, subLabel: toggleName, subLabelLineClamp: 1, onPress: tmp4, trailing: tmp5 };
      const tmp10 = closure_9(tmp(5993).TableRow, obj2, toggleName);
      cResult[6] = description;
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = toggleName;
      cResult[10] = tmp10;
      tmp8 = tmp10;
    }
    const obj3 = { value, onValueChange };
    const tmp7 = closure_9(tmp(6699).FormSwitch, obj3);
    cResult[3] = onValueChange;
    cResult[4] = value;
    cResult[5] = tmp7;
    tmp5 = tmp7;
  }
  const fn = function t() {
    ToastActionCreatorsDefault.open({ content: description, key: toggleName });
  };
  cResult[0] = description;
  cResult[1] = toggleName;
  cResult[2] = fn;
  tmp4 = fn;
  const obj = toggleName(576);
}) : ((toggleName) => {
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  return closure_9(toggleName(5993).TableRow, {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      ToastActionCreatorsDefault.open({ content: description, key: toggleName });
    },
    trailing: closure_9(toggleName(6699).FormSwitch, { value, onValueChange })
  }, toggleName);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7, tmp(504).statesWillNeverBeEqual);
  }
  const fn = function s() {
    return DevSettingsStore.allByCategory(closure_0).filter((item) => {
      const tmp = _slicedToArray(item, 3);
      let tmp2 = 0 === closure_1_1.length;
      if (!tmp2) {
        const formatted = closure_1_1.toLowerCase();
        let tmp3ResultResult = closure_1(dependencyMap[6])(formatted, str.toLowerCase());
        if (!tmp3ResultResult) {
          const formatted1 = closure_1_1.toLowerCase();
          tmp3ResultResult = closure_1(dependencyMap[6])(formatted1, str2.toLowerCase());
          const tmp3Result = closure_1(dependencyMap[6]);
        }
        tmp2 = tmp3ResultResult;
        const tmp5 = closure_1(dependencyMap[6]);
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
  const obj = require("c");
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [DevSettingsStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStores(items, () => DevSettingsStore.allByCategory(closure_0).filter((item) => {
    [tmp, , ] = item;
    return fuzzySearchToggle(closure_1_1, tmp, tmp2);
  }), items1, require("initialize").statesWillNeverBeEqual);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  const cResult = c.c(6);
  title = title.title;
  const arr = closure_14(title.category, title.query);
  let num = 0;
  if (0 === arr.length) {
    return null;
  } else if (cResult[0] !== arr) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(arg0) {
        const tmp = closure_3(arg0, 3);
        const toggleName = tmp[0];
        return closure_9(closure_13, {
          toggleName,
          description: tmp[2].label,
          value: tmp[1],
          onValueChange(arg0) {
            return require("DevSettingsActions").toggle(first, arg0);
          }
        }, toggleName);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = arr.map(tmp6);
    cResult[num] = arr;
    num = 1;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === cResult[1]) {
      if (cResult[4] === title) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj2 = { title, hasIcons: false, children: cResult[1] };
    const tmp11 = options(TableRowGroup.TableRowGroup, obj2);
    cResult[3] = cResult[1];
    cResult[4] = title;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  }
}) : ((category) => {
  const arr = closure_14(category.category, category.query);
  let tmp = null;
  if (0 !== arr.length) {
    const obj = {
      title: category.title,
      hasIcons: false,
      children: arr.map((item) => {
          [tmp, tmp2, ] = item;
          return closure_9(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return require("DevSettingsActions").toggle(closure_1_0, arg0);
            }
          }, tmp);
        })
    };
    tmp = options(TableRowGroup.TableRowGroup, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first1(576).c(24);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = _slicedToArray(noop.useState(""), 2);
  first1 = tmp7[0];
  let obj = first1(576);
  const manaTextMigrationHighlightRestartNotice = first1(14260).useManaTextMigrationHighlightRestartNotice();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DesignTogglesStore];
    cResult[1] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== first1) {
    const fn = function f() {
      return DesignTogglesStore.allWithDescriptions().filter((item) => {
        const tmp = _slicedToArray(item, 3);
        let tmp2 = 0 === length.length;
        if (!tmp2) {
          const formatted = length.toLowerCase();
          let tmp3ResultResult = fuzzysearchDefault(formatted, str.toLowerCase());
          if (!tmp3ResultResult) {
            const formatted1 = length.toLowerCase();
            tmp3ResultResult = fuzzysearchDefault(formatted1, str2.toLowerCase());
            const tmp3Result = fuzzysearchDefault;
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
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult = first1(14260);
  const stateFromStores = first1(504).useStateFromStores(tmp10, tmp12, tmp13, tmp(504).statesWillNeverBeEqual);
  const sum = nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom;
  if (cResult[5] !== sum) {
    const obj3 = { paddingBottom: sum };
    cResult[5] = sum;
    cResult[6] = obj3;
    let tmp15 = obj3;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    if (cResult[8] === tmp15) {
      let tmp16 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = {
        label: "Clear All",
        variant: "danger",
        onPress() {
              first1(15588).clearAll();
              const obj = first1(15588);
              first1(15570).clearAll();
            },
        arrow: true
      };
      const tmp19 = closure_9(tmp(5993).TableRow, obj4);
      cResult[10] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[10];
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { title: "Actions", hasIcons: false, children: null };
      const items2 = [tmp17, ];
      const obj6 = { label: null };
      const obj7 = { size: "md", placeholder: "Search design toggles", onChange: tmp7[1] };
      obj6.label = closure_9(tmp(6547).SearchField, obj7);
      items2[1] = closure_9(tmp(5993).TableRow, obj6);
      obj5.children = items2;
      const tmp23 = closure_10(tmp(6074).TableRowGroup, obj5);
      cResult[11] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[11];
    }
    if (cResult[12] !== stateFromStores) {
      let tmp25 = null;
      if (stateFromStores.length > 0) {
        const obj8 = {
          title: "Design Toggles",
          hasIcons: false,
          children: stateFromStores.map((item) => {
                  const tmp = closure_3(item, 3);
                  const toggleName = tmp[0];
                  return closure_9(closure_13, {
                    toggleName,
                    description: tmp[2],
                    value: tmp[1],
                    onValueChange(arg0) {
                      return first1(15588).toggle(first, arg0);
                    }
                  }, toggleName);
                })
        };
        tmp25 = closure_9(tmp(6074).TableRowGroup, obj8);
      }
      cResult[12] = stateFromStores;
      cResult[13] = tmp25;
      let tmp24 = tmp25;
    } else {
      tmp24 = cResult[13];
    }
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const _Object = Object;
      const entries = Object.entries(CATEGORY_LABELS);
      cResult[14] = entries;
      let arr6 = entries;
    } else {
      arr6 = cResult[14];
    }
    if (cResult[15] !== first1) {
      const mapped = arr6.map((item) => {
        const tmp = _slicedToArray(item, 2);
        const first = tmp[0];
        return options(closure_15, { category: parseInt(first), title: tmp[1], query: first1 }, first);
      });
      cResult[15] = first1;
      cResult[16] = mapped;
      let tmp29 = mapped;
    } else {
      tmp29 = cResult[16];
    }
    if (cResult[17] === tmp24) {
      if (cResult[18] === tmp29) {
        let tmp31 = cResult[19];
      }
      if (cResult[20] === tmp4.wrap) {
        if (cResult[21] === tmp31) {
          if (cResult[22] === tmp16) {
            let tmp34 = cResult[23];
          }
          return tmp34;
        }
      }
      const obj9 = { style: tmp4.wrap, contentContainerStyle: tmp16, children: tmp31 };
      const tmp37 = closure_9(ScrollView, obj9);
      cResult[20] = tmp4.wrap;
      cResult[21] = tmp31;
      cResult[22] = tmp16;
      cResult[23] = tmp37;
      tmp34 = tmp37;
    }
    const obj10 = { spacing: 16, children: null };
    const items3 = [tmp20, tmp24, tmp29];
    obj10.children = items3;
    const tmp33 = closure_10(tmp(5593).Stack, obj10);
    cResult[17] = tmp24;
    cResult[18] = tmp29;
    cResult[19] = tmp33;
    tmp31 = tmp33;
  }
  const items4 = [tmp4.container, tmp15];
  cResult[7] = tmp4.container;
  cResult[8] = tmp15;
  cResult[9] = items4;
  tmp16 = items4;
  const tmpResult2 = first1(504);
}) : (() => {
  let tmp = closure_12();
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const query = tmp3[0];
  const manaTextMigrationHighlightRestartNotice = query(14260).useManaTextMigrationHighlightRestartNotice();
  let obj = query(14260);
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
    closure_9(query(5993).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(15588).clearAll();
        const obj = first(15588);
        first(15570).clearAll();
      },
      arrow: true
    }),

  ];
  const obj4 = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  const obj6 = {
    label: "Clear All",
    variant: "danger",
    onPress() {
      first(15588).clearAll();
      const obj = first(15588);
      first(15570).clearAll();
    },
    arrow: true
  };
  items3[1] = closure_9(query(5993).TableRow, { label: closure_9(query(6547).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] }) });
  obj5.children = items3;
  const items4 = [closure_10(query(6074).TableRowGroup, obj5), , ];
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
              return first(15588).toggle(query, arg0);
            }
          }, tmp);
        })
    };
    tmp7Result = closure_9(tmp5(6074).TableRowGroup, obj8);
  }
  const obj9 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    [tmp, tmp2] = item;
    return options(closure_15, { category: parseInt(tmp), title: tmp2, query }, tmp);
  });
  obj9.children = items4;
  obj3.children = closure_10(query(5593).Stack, obj9);
  return closure_9(ScrollView, obj3);
});