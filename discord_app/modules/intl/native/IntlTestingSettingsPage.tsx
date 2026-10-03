// discord_app/modules/intl/native/IntlTestingSettingsPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _mod1165 from "../../../../_runtime/metro/01165__.js";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef15449 from "../messages/Test.messages.js";
import _modDef15481 from "../messages/SecondTest.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const setAppLocale = fn(2117).setAppLocale;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: { padding: 16 } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          title: "Locale",
          hasIcons: false,
          defaultValue: tmp(1126).intl.currentLocale,
          onChange: null,
          children: null,
        };
        _require = asyncGeneratorStep(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
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
                  closure_129_0 = closure_0;
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
                tmp2(tmp5[13]).updateLocale(closure_129_0);
                c4 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp14) {
              c4 = tmp;
              throw tmp14;
            }
          }
        });
        obj2.onChange = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        const items = [
          closure_10(tmp(6071).TableRadioRow, { label: "English", value: "en-US" }),
          closure_10(tmp(6071).TableRadioRow, { label: "French", value: "fr" }),
        ];
        obj2.children = items;
        const tmp8 = closure_11(tmp(6072).TableRadioGroup, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const obj = {
        title: "Locale",
        hasIcons: false,
        defaultValue: require("util").intl.currentLocale,
        onChange: null,
        children: null,
      };
      _require = asyncGeneratorStep(async (arg0) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
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
                closure_129_0 = closure_0;
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
              tmp2(tmp5[13]).updateLocale(closure_129_0);
              c4 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp14) {
            c4 = tmp;
            throw tmp14;
          }
        }
      });
      obj.onChange = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      const items = [
        closure_10(require("TableRadioRow").TableRadioRow, { label: "English", value: "en-US" }),
        closure_10(require("TableRadioRow").TableRadioRow, { label: "French", value: "fr" }),
      ];
      obj.children = items;
      return closure_11(require("TableRadioGroup").TableRadioGroup, obj);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(20);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [LocaleStore];
        const fn = function o() {
          const items = [,];
          ({ locale: arr[0], systemLocale: arr[1] } = LocaleStore);
          return items;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = initialize;
      [tmp8, tmp9] = initialize.useStateFromStoresArray(tmp4, tmp5);
      const tmp7 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 2);
      [tmp12, require] = noop.useState(_modDef4461.locale);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          const timerId = setTimeout(() => {
            closure_1_0(_modDef4461.locale());
          }, 0);
        };
        cResult[2] = fn2;
        let tmp13 = fn2;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== tmp8) {
        const items1 = [tmp8];
        cResult[3] = tmp8;
        cResult[4] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[4];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      const tmp11 = _slicedToArray(noop.useState(_modDef4461.locale), 2);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          label: "Active System",
          trailing: closure_10(TableRow.TableRow.TrailingText, { text: "@discord/intl" }),
        };
        const tmp18 = closure_10(TableRow.TableRow, obj2);
        cResult[5] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        const obj4 = { label: "App locale", trailing: null };
        const obj5 = { text: tmp8 };
        obj4.trailing = closure_10(TableRow.TableRow.TrailingText, obj5);
        const tmp21 = closure_10(TableRow.TableRow, obj4);
        cResult[6] = tmp8;
        cResult[7] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== tmp9) {
        const obj6 = { label: "System locale", trailing: null };
        const obj7 = { text: tmp9 };
        obj6.trailing = closure_10(TableRow.TableRow.TrailingText, obj7);
        const tmp24 = closure_10(TableRow.TableRow, obj6);
        cResult[8] = tmp9;
        cResult[9] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { label: "@discord/intl locale", trailing: null };
        const obj9 = { text: util.intl.currentLocale };
        obj8.trailing = closure_10(TableRow.TableRow.TrailingText, obj9);
        const tmp27 = closure_10(TableRow.TableRow, obj8);
        cResult[10] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== tmp12) {
        const obj10 = { text: tmp12 };
        const tmp30 = closure_10(TableRow.TableRow.TrailingText, obj10);
        cResult[11] = tmp12;
        cResult[12] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[12];
      }
      let str = "Locale data does not match";
      if (tmp12 === tmp10Result.localeData()._abbr) {
        str = "Locale data matches current locale";
      }
      if (cResult[13] === tmp28) {
        if (cResult[14] === str) {
          let tmp31 = cResult[15];
        }
        if (cResult[16] === tmp31) {
          if (cResult[17] === tmp19) {
            if (cResult[18] === tmp22) {
              let tmp33 = cResult[19];
            }
            return tmp33;
          }
        }
        const obj11 = { hasIcons: false, children: null };
        const items2 = [tmp16, tmp19, tmp22, tmp25, tmp31];
        obj11.children = items2;
        const tmp35 = closure_11(TableRowGroup.TableRowGroup, obj11);
        cResult[16] = tmp31;
        cResult[17] = tmp19;
        cResult[18] = tmp22;
        cResult[19] = tmp35;
        tmp33 = tmp35;
      }
      const tmp32 = closure_10(TableRow.TableRow, { label: "Moment locale", trailing: tmp28, subLabel: str });
      cResult[13] = tmp28;
      cResult[14] = str;
      cResult[15] = tmp32;
      tmp31 = tmp32;
      tmp10Result = _modDef4461;
    }
  : () => {
      let items = [LocaleStore];
      const tmp = _slicedToArray(
        initialize.useStateFromStoresArray(items, () => {
          const items = [,];
          ({ locale: arr[0], systemLocale: arr[1] } = LocaleStore);
          return items;
        }),
        2,
      );
      const first = tmp[0];
      [tmp4, require] = noop.useState(_modDef4461.locale);
      const items1 = [first];
      const effect = noop.useEffect(() => {
        const timerId = setTimeout(() => {
          closure_1_0(_modDef4461.locale());
        }, 0);
      }, items1);
      const tmp3 = _slicedToArray(noop.useState(_modDef4461.locale), 2);
      const obj2 = _modDef4461;
      const items2 = [
        closure_10(TableRow.TableRow, {
          label: "Active System",
          trailing: closure_10(TableRow.TableRow.TrailingText, { text: "@discord/intl" }),
        }),
        ,
        ,
        ,
      ];
      const obj3 = {
        label: "Active System",
        trailing: closure_10(TableRow.TableRow.TrailingText, { text: "@discord/intl" }),
      };
      items2[1] = closure_10(TableRow.TableRow, {
        label: "App locale",
        trailing: closure_10(TableRow.TableRow.TrailingText, { text: first }),
      });
      const obj4 = { label: "App locale", trailing: closure_10(TableRow.TableRow.TrailingText, { text: first }) };
      items2[2] = closure_10(TableRow.TableRow, {
        label: "System locale",
        trailing: closure_10(TableRow.TableRow.TrailingText, { text: tmp[1] }),
      });
      const obj6 = { label: "@discord/intl locale", trailing: null };
      const obj5 = { label: "System locale", trailing: closure_10(TableRow.TableRow.TrailingText, { text: tmp[1] }) };
      obj6.trailing = closure_10(TableRow.TableRow.TrailingText, { text: util.intl.currentLocale });
      items2[3] = closure_10(TableRow.TableRow, obj6);
      const obj8 = {
        label: "Moment locale",
        trailing: closure_10(TableRow.TableRow.TrailingText, { text: tmp4 }),
        subLabel: null,
      };
      let str = "Locale data does not match";
      if (tmp4 === obj2.localeData()._abbr) {
        str = "Locale data matches current locale";
      }
      const obj9 = { hasIcons: false, children: null };
      obj8.subLabel = str;
      items2[4] = closure_10(TableRow.TableRow, obj8);
      obj9.children = items2;
      return closure_11(TableRowGroup.TableRowGroup, obj9);
    };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(18);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          return closure_0(1126).intl.currentLocale;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const syncExternalStore = noop.useSyncExternalStore(tmp(1126).intl.onLocaleChange, first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {};
        cResult[1] = obj3;
        let tmp7 = obj3;
      } else {
        tmp7 = cResult[1];
      }
      const tmp8 = _slicedToArray(noop.useState(tmp7), 2)[1];
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
      const effect = noop.useEffect(T, tmp11);
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
        let tmp14 = tmp18;
        const tmp13 = tmp16;
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
        const obj4 = { variant: "text-md/normal", children: null };
        const intl = tmp(1126).intl;
        obj4.children = intl.format(_modDef15449.HMvEC5, {});
        const tmp21 = closure_10(tmp(4886).Text, obj4);
        cResult[7] = tmp21;
        const tmp19 = tmp21;
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
        const obj5 = { variant: "text-md/normal", children: null };
        const intl2 = tmp(1126).intl;
        obj5.children = intl2.format(_modDef15481.swfLzV, {});
        const tmp24 = closure_10(tmp(4886).Text, obj5);
        cResult[8] = tmp24;
        const tmp22 = tmp24;
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
        const obj6 = { variant: "text-md/normal", children: null };
        const intl3 = tmp(1126).intl;
        obj6.children = intl3.format(_modDef15449.rmps8y, {});
        const tmp27 = closure_10(tmp(4886).Text, obj6);
        cResult[9] = tmp27;
        const tmp25 = tmp27;
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
        const obj7 = { variant: "text-md/normal", children: null };
        const intl4 = tmp(1126).intl;
        const obj8 = {
          linkTarget() {},
        };
        obj7.children = intl4.format(_modDef15449.uczI4g, obj8);
        const tmp30 = closure_10(tmp(4886).Text, obj7);
        cResult[10] = tmp30;
        const tmp28 = tmp30;
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
        const obj9 = { variant: "text-md/normal", children: null };
        const intl5 = tmp(1126).intl;
        obj9.children = intl5.format(_modDef15449.rdfRyh, {});
        const tmp33 = closure_10(tmp(4886).Text, obj9);
        cResult[11] = tmp33;
        const tmp31 = tmp33;
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
        const obj10 = { variant: "text-md/normal", children: null };
        const intl6 = tmp(1126).intl;
        const obj11 = {
          username: "some user",
          usernameHook(children) {
            const obj = {
              style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 },
              children: closure_1_10(closure_0(4886).Text, {
                variant: "text-sm/normal",
                color: "text-overlay-light",
                children,
              }),
            };
            return closure_1_10(closure_1_6, obj);
          },
        };
        obj10.children = intl6.format(_modDef15449.XOdbAy, obj11);
        const tmp36 = closure_10(tmp(4886).Text, obj10);
        cResult[12] = tmp36;
        const tmp34 = tmp36;
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
        const obj12 = { spacing: 24, style: tmp4.container, children: null };
        const items = [tmp13, tmp14, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34];
        obj12.children = items;
        const tmp38 = closure_11(tmp(5593).Stack, obj12);
        cResult[13] = tmp4.container;
        cResult[14] = tmp38;
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
      tmp39 = closure_10(closure_7, { style: tmp4.wrap, children: tmp37 });
      cResult[15] = tmp4.wrap;
      cResult[16] = tmp37;
      cResult[17] = tmp39;
      let obj = require("c");
      const obj13 = { style: tmp4.wrap, children: tmp37 };
    }
  : () => {
      const tmp = closure_12();
      const syncExternalStore = noop.useSyncExternalStore(
        require("util").intl.onLocaleChange,
        () => closure_0(1126).intl.currentLocale,
      );
      _require = _slicedToArray(noop.useState({}), 2)[1];
      const effect = noop.useEffect(() => {
        const result = _mod1165.waitForAllDefaultIntlMessagesLoaded();
        result.then(() => {
          closure_1_0({});
        });
      }, []);
      let obj = { style: tmp.wrap, children: null };
      const obj2 = { spacing: 24, style: tmp.container, children: null };
      const items = [closure_10(closure_14, {}), closure_10(closure_13, {}), , , , , ,];
      const obj3 = { variant: "text-md/normal", children: null };
      const intl = require("util").intl;
      obj3.children = intl.format(_modDef15449.HMvEC5, {});
      items[2] = closure_10(require("Text/Text").Text, obj3);
      const obj4 = { variant: "text-md/normal", children: null };
      const intl2 = require("util").intl;
      obj4.children = intl2.format(_modDef15481.swfLzV, {});
      items[3] = closure_10(require("Text/Text").Text, obj4);
      const obj5 = { variant: "text-md/normal", children: null };
      const intl3 = require("util").intl;
      obj5.children = intl3.format(_modDef15449.rmps8y, {});
      items[4] = closure_10(require("Text/Text").Text, obj5);
      const obj6 = { variant: "text-md/normal", children: null };
      const intl4 = require("util").intl;
      obj6.children = intl4.format(_modDef15449.uczI4g, {
        linkTarget() {},
      });
      items[5] = closure_10(require("Text/Text").Text, obj6);
      const obj8 = { variant: "text-md/normal", children: null };
      const intl5 = require("util").intl;
      obj8.children = intl5.format(_modDef15449.rdfRyh, {});
      items[6] = closure_10(require("Text/Text").Text, obj8);
      const obj9 = { variant: "text-md/normal", children: null };
      const intl6 = require("util").intl;
      obj9.children = intl6.format(_modDef15449.XOdbAy, {
        username: "some user",
        usernameHook(children) {
          const obj = {
            style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 },
            children: closure_1_10(closure_0(4886).Text, {
              variant: "text-sm/normal",
              color: "text-overlay-light",
              children,
            }),
          };
          return closure_1_10(closure_1_6, obj);
        },
      });
      items[7] = closure_10(require("Text/Text").Text, obj9);
      obj2.children = items;
      obj.children = closure_11(require("Stack/Stack").Stack, obj2);
      return closure_10(closure_7, obj);
    };
