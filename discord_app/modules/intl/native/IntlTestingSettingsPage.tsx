// === Module 15468: IntlTestingSettingsPage ===

// Module 15468 (IntlTestingSettingsPage)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2117 */;
import _modDef4467 from "module_4467" /* 4467 */;
import TableRow6 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import _modDef15469 from "module_15469" /* 15469 */;
import _modDef15501 from "module_15501" /* 15501 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, nextPromise;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const setAppLocale = IntlLoaderStore.setAppLocale;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { wrap: obj2, container: { padding: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {
      title: "Locale",
      hasIcons: false,
      defaultValue: tmp(1126).intl.currentLocale,
      onChange: function() {
          return closure_0(...arguments);
        },
      children: items
    };
    const TableRadioGroup = tmp(6079).TableRadioGroup;
    _require = _asyncToGenerator(async (arg0) => {
      let closure_1;
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp4;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: setAppLocale(closure_0), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj = tmp(closure_2[13]);
            obj.updateLocale(closure_0);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c4 = 3;
          throw tmp13;
        }
      }
    });
    items = [closure_10(tmp(6078).TableRadioRow, { label: "English", value: "en-US" }), closure_10(tmp(6078).TableRadioRow, { label: "French", value: "fr" })];
    const tmp8 = closure_11(TableRadioGroup, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let items;
  let obj = {
    title: "Locale",
    hasIcons: false,
    defaultValue: require("intl").intl.currentLocale,
    onChange: function() {
      return closure_0(...arguments);
    },
    children: items
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  _require = _asyncToGenerator(async (arg0) => {
    let closure_1;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp4;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: setAppLocale(closure_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj = tmp(closure_2[13]);
          obj.updateLocale(closure_0);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  items = [closure_10(require("TableRadioRow").TableRadioRow, { label: "English", value: "en-US" }), closure_10(require("TableRadioRow").TableRadioRow, { label: "French", value: "fr" })];
  return closure_11(TableRadioGroup, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TrailingText;
  let items2;
  let obj5;
  let obj7;
  let obj9;
  let require;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp19;
  let tmp22;
  let tmp25;
  let tmp28;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    const fn = function o() {
      const items = [, ];
      ({ locale: arr[0], systemLocale: arr[1] } = LocaleStore);
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  [tmp8, tmp9] = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2);
  [tmp12, require] = react.useState(_modDef4467.locale);
  _slicedToArray(react.useState(_modDef4467.locale), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      const timerId = setTimeout(() => {
        const obj = _modDef4467;
        closure_1_0(obj.locale());
      }, 0);
    };
    cResult[2] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] !== tmp8) {
    const items1 = [tmp8];
    cResult[3] = tmp8;
    cResult[4] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[4];
  }
  const effect = react.useEffect(tmp13, tmp14);
  const tmp10Result = _modDef4467;
  const _abbr = tmp10Result.localeData()._abbr;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: "Active System", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: "@discord/intl" }) };
    const TableRow = TableRow6.TableRow;
    const tmp18 = closure_10(TableRow, obj2);
    cResult[5] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== tmp8) {
    const obj4 = { label: "App locale", trailing: closure_10(TableRow6.TableRow.TrailingText, obj5) };
    const TableRow2 = TableRow6.TableRow;
    obj5 = { text: tmp8 };
    const tmp21 = closure_10(TableRow2, obj4);
    cResult[6] = tmp8;
    cResult[7] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] !== tmp9) {
    const obj6 = { label: "System locale", trailing: closure_10(TableRow6.TableRow.TrailingText, obj7) };
    const TableRow3 = TableRow6.TableRow;
    obj7 = { text: tmp9 };
    const tmp24 = closure_10(TableRow3, obj6);
    cResult[8] = tmp9;
    cResult[9] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { label: "@discord/intl locale", trailing: closure_10(TrailingText, obj9) };
    const TableRow4 = TableRow6.TableRow;
    obj9 = { text: intl7.intl.currentLocale };
    TrailingText = TableRow6.TableRow.TrailingText;
    const tmp27 = closure_10(TableRow4, obj8);
    cResult[10] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] !== tmp12) {
    const obj10 = { text: tmp12 };
    const tmp30 = closure_10(TableRow6.TableRow.TrailingText, obj10);
    cResult[11] = tmp12;
    cResult[12] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[12];
  }
  let str = "Locale data does not match";
  if (tmp12 === _abbr) {
    str = "Locale data matches current locale";
  }
  if (cResult[13] === tmp28) {
    let tmp31;
    if (cResult[14] === str) {
      tmp31 = cResult[15];
    }
    if (cResult[16] === tmp31) {
      if (cResult[17] === tmp19) {
        let tmp33;
        if (cResult[18] === tmp22) {
          tmp33 = cResult[19];
        }
        return tmp33;
      }
    }
    const obj11 = { hasIcons: false, children: items2 };
    items2 = [tmp16, tmp19, tmp22, tmp25, tmp31];
    const tmp35 = closure_11(TableRowGroup2.TableRowGroup, obj11);
    cResult[16] = tmp31;
    cResult[17] = tmp19;
    cResult[18] = tmp22;
    cResult[19] = tmp35;
    tmp33 = tmp35;
  }
  const tmp32 = closure_10(TableRow6.TableRow, { label: "Moment locale", trailing: tmp28, subLabel: str });
  cResult[13] = tmp28;
  cResult[14] = str;
  cResult[15] = tmp32;
  tmp31 = tmp32;
}) : (() => {
  let TrailingText;
  let first;
  let obj7;
  let require;
  let str;
  let tmp3;
  let tmp5;
  let obj = get_initialized;
  let items = [LocaleStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ locale: arr[0], systemLocale: arr[1] } = LocaleStore);
    return items;
  });
  [tmp5, require] = react.useState(_modDef4467.locale);
  const items1 = [first];
  _slicedToArray(react.useState(_modDef4467.locale), 2);
  const effect = react.useEffect(() => {
    const timerId = setTimeout(() => {
      const obj = _modDef4467;
      closure_1_0(obj.locale());
    }, 0);
  }, items1);
  const obj2 = _modDef4467;
  const _abbr = obj2.localeData()._abbr;
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj3 = { label: "Active System", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: "@discord/intl" }) };
  const TableRow = TableRow6.TableRow;
  const items2 = [closure_10(TableRow, obj3), , , , ];
  const obj4 = { label: "App locale", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: first }) };
  const TableRow2 = TableRow6.TableRow;
  items2[1] = closure_10(TableRow2, obj4);
  const obj5 = { label: "System locale", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: tmp3 }) };
  const TableRow3 = TableRow6.TableRow;
  items2[2] = closure_10(TableRow3, obj5);
  const obj6 = { label: "@discord/intl locale", trailing: closure_10(TrailingText, obj7) };
  const TableRow4 = TableRow6.TableRow;
  obj7 = { text: intl7.intl.currentLocale };
  TrailingText = TableRow6.TableRow.TrailingText;
  items2[3] = closure_10(TableRow4, obj6);
  const obj8 = { label: "Moment locale", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: tmp5 }), subLabel: str };
  const TableRow5 = TableRow6.TableRow;
  str = "Locale data does not match";
  if (tmp5 === _abbr) {
    str = "Locale data matches current locale";
  }
  const obj9 = { hasIcons: false, children: items2 };
  items2[4] = closure_10(TableRow5, obj8);
  return closure_11(TableRowGroup, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj11;
  let obj8;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp22;
  let tmp25;
  let tmp28;
  let tmp31;
  let tmp34;
  let tmp39;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(18);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return closure_0(dependencyMap[12]).intl.currentLocale;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const syncExternalStore = react.useSyncExternalStore(tmp(1126).intl.onLocaleChange, first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {};
    cResult[1] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  const tmp8 = _slicedToArray(react.useState(tmp7), 2)[1];
  _require = tmp8;
  if (cResult[2] !== tmp8) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    cResult[2] = tmp8;
    cResult[3] = T;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    cResult[4] = tmp11;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  const effect = react.useEffect(T, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const tmp16 = closure_10(closure_14, {});
    const tmp18 = closure_10(closure_13, {});
    cResult[5] = tmp16;
    cResult[6] = tmp18;
    tmp14 = tmp18;
    tmp13 = tmp16;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj4 = { variant: "text-md/normal", children: intl.format(_modDef15469.HMvEC5, {}) };
    const Text = tmp(4892).Text;
    intl = tmp(1126).intl;
    const tmp21 = closure_10(Text, obj4);
    cResult[7] = tmp21;
    tmp19 = tmp21;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj5 = { variant: "text-md/normal", children: intl2.format(_modDef15501.swfLzV, {}) };
    const Text2 = tmp(4892).Text;
    intl2 = tmp(1126).intl;
    const tmp24 = closure_10(Text2, obj5);
    cResult[8] = tmp24;
    tmp22 = tmp24;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj6 = { variant: "text-md/normal", children: intl3.format(_modDef15469.rmps8y, {}) };
    const Text3 = tmp(4892).Text;
    intl3 = tmp(1126).intl;
    const tmp27 = closure_10(Text3, obj6);
    cResult[9] = tmp27;
    tmp25 = tmp27;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj7 = { variant: "text-md/normal", children: intl4.format(_modDef15469.uczI4g, obj8) };
    const Text4 = tmp(4892).Text;
    intl4 = tmp(1126).intl;
    obj8 = {
      linkTarget() {

        }
    };
    const tmp30 = closure_10(Text4, obj7);
    cResult[10] = tmp30;
    tmp28 = tmp30;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj9 = { variant: "text-md/normal", children: intl5.format(_modDef15469.rdfRyh, {}) };
    const Text5 = tmp(4892).Text;
    intl5 = tmp(1126).intl;
    const tmp33 = closure_10(Text5, obj9);
    cResult[11] = tmp33;
    tmp31 = tmp33;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj10 = { variant: "text-md/normal", children: intl6.format(_modDef15469.XOdbAy, obj11) };
    const Text6 = tmp(4892).Text;
    intl6 = tmp(1126).intl;
    obj11 = {
      username: "some user",
      usernameHook(children) {
          let obj2;
          const obj = { style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 }, children: closure_1_10(closure_0(dependencyMap[20]).Text, obj2) };
          obj2 = { variant: "text-sm/normal", color: "text-overlay-light", children };
          return closure_1_10(closure_1_6, obj);
        }
    };
    const tmp36 = closure_10(Text6, obj10);
    cResult[12] = tmp36;
    tmp34 = tmp36;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[13] !== tmp4.container) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    const obj12 = { spacing: 24, style: tmp4.container, children: items };
    items = [tmp13, tmp14, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34];
    cResult[13] = tmp4.container;
    cResult[14] = closure_11(require("Stack/Stack").Stack, obj12);
    const tmp38 = closure_11(require("Stack/Stack").Stack, obj12);
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
  }
  if (cResult[15] === tmp4.wrap) {
    class T {
      constructor() {
        obj = closure_0(closure_2[19]);
        result = obj.waitForAllDefaultIntlMessagesLoaded();
        nextPromise = result.then(() => {
          closure_1_0({});
        });
        return;
      }
    }
    return tmp39;
  }
  const obj13 = { style: tmp4.wrap, children: tmp37 };
  tmp39 = closure_10(closure_7, obj13);
  cResult[15] = tmp4.wrap;
  cResult[16] = tmp37;
  cResult[17] = tmp39;
}) : (() => {
  let Stack;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj10;
  let obj2;
  let obj7;
  const tmp = closure_12();
  const syncExternalStore = react.useSyncExternalStore(require("intl").intl.onLocaleChange, () => closure_0(dependencyMap[12]).intl.currentLocale);
  _require = _slicedToArray(react.useState({}), 2)[1];
  const effect = react.useEffect(() => {
    const obj = _mod1165;
    const result = obj.waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      closure_1_0({});
    });
  }, []);
  let obj = { style: tmp.wrap, children: closure_11(Stack, obj2) };
  obj2 = { spacing: 24, style: tmp.container, children: items };
  Stack = require("Stack/Stack").Stack;
  items = [closure_10(closure_14, {}), closure_10(closure_13, {}), , , , , , ];
  const obj3 = { variant: "text-md/normal", children: intl.format(_modDef15469.HMvEC5, {}) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items[2] = closure_10(Text, obj3);
  const obj4 = { variant: "text-md/normal", children: intl2.format(_modDef15501.swfLzV, {}) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[3] = closure_10(Text2, obj4);
  const obj5 = { variant: "text-md/normal", children: intl3.format(_modDef15469.rmps8y, {}) };
  const Text3 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items[4] = closure_10(Text3, obj5);
  const obj6 = { variant: "text-md/normal", children: intl4.format(_modDef15469.uczI4g, obj7) };
  const Text4 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  obj7 = {
    linkTarget() {

    }
  };
  items[5] = closure_10(Text4, obj6);
  const obj8 = { variant: "text-md/normal", children: intl5.format(_modDef15469.rdfRyh, {}) };
  const Text5 = require("Text/Text").Text;
  intl5 = require("intl").intl;
  items[6] = closure_10(Text5, obj8);
  const obj9 = { variant: "text-md/normal", children: intl6.format(_modDef15469.XOdbAy, obj10) };
  const Text6 = require("Text/Text").Text;
  intl6 = require("intl").intl;
  obj10 = {
    username: "some user",
    usernameHook(children) {
      let obj2;
      const obj = { style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 }, children: closure_1_10(closure_0(dependencyMap[20]).Text, obj2) };
      obj2 = { variant: "text-sm/normal", color: "text-overlay-light", children };
      return closure_1_10(closure_1_6, obj);
    }
  };
  items[7] = closure_10(Text6, obj9);
  return closure_10(closure_7, obj);
});
let result = size.fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default tmp4;