// discord_app/modules/intl/native/IntlTestingSettingsPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _mod1155 from "../../../../_runtime/metro/01155__.js";
import _modDef4153 from "../../../../_runtime/metro/04153__.js";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef15623 from "../messages/Test.messages.js";
import _modDef15655 from "../messages/SecondTest.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

require = fn;
function TestLocaleSelector() {
  let obj = {
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = closure_0;
            c3 = 1;
            c4 = 1;
            const obj1 = { value: setAppLocale(closure_0), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          obj = tmp2(tmp5[11]);
          obj.updateLocale(closure_129_0);
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
}
function LocaleInfo() {
  let obj = initialize;
  let items = [LocaleStore];
  const tmp = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [,];
      ({ locale: arr[0], systemLocale: arr[1] } = LocaleStore);
      return items;
    }),
    2,
  );
  const first = tmp[0];
  [tmp4, require] = _slicedToArray(noop.useState(_modDef4153.locale), 2);
  const items1 = [first];
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_0(_modDef4153.locale());
    }, 0);
  }, items1);
  obj = { label: "Active System", trailing: closure_10(TableRow.TableRow.TrailingText, { text: "@discord/intl" }) };
  const items2 = [closure_10(TableRow.TableRow, obj), , , ,];
  obj = { label: "App locale", trailing: closure_10(TableRow.TableRow.TrailingText, { text: first }) };
  items2[1] = closure_10(TableRow.TableRow, obj);
  const obj1 = { label: "System locale", trailing: closure_10(TableRow.TableRow.TrailingText, { text: tmp[1] }) };
  items2[2] = closure_10(TableRow.TableRow, obj1);
  const obj2 = { label: "@discord/intl locale", trailing: null };
  const tmp3 = _slicedToArray(noop.useState(_modDef4153.locale), 2);
  obj2.trailing = closure_10(TableRow.TableRow.TrailingText, { text: util.intl.currentLocale });
  items2[3] = closure_10(TableRow.TableRow, obj2);
  const obj4 = {
    label: "Moment locale",
    trailing: closure_10(TableRow.TableRow.TrailingText, { text: tmp4 }),
    subLabel: null,
  };
  let str = "Locale data does not match";
  if (tmp4 === obj1.localeData()._abbr) {
    str = "Locale data matches current locale";
  }
  const obj5 = { hasIcons: false, children: null };
  obj4.subLabel = str;
  items2[4] = closure_10(TableRow.TableRow, obj4);
  obj5.children = items2;
  return closure_11(TableRowGroup.TableRowGroup, obj5);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const setAppLocale = fn(2026).setAppLocale;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.wrap = createStyles;
createStyles.container = { padding: 16 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  const tmp = closure_12();
  const syncExternalStore = noop.useSyncExternalStore(
    require("util").intl.onLocaleChange,
    () => closure_0(1114).intl.currentLocale,
  );
  _require = _slicedToArray(noop.useState({}), 2)[1];
  const effect = noop.useEffect(() => {
    const result = _mod1155.waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      closure_1_0({});
    });
  }, []);
  let obj = { style: tmp.wrap, children: null };
  obj = { spacing: 24, style: tmp.container, children: null };
  const items = [closure_10(LocaleInfo, {}), closure_10(TestLocaleSelector, {}), , , , , ,];
  obj = { variant: "text-md/normal", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(_modDef15623.HMvEC5, {});
  items[2] = closure_10(require("Text/Text").Text, obj);
  const obj1 = { variant: "text-md/normal", children: null };
  const intl2 = require("util").intl;
  obj1.children = intl2.format(_modDef15655.swfLzV, {});
  items[3] = closure_10(require("Text/Text").Text, obj1);
  const obj2 = { variant: "text-md/normal", children: null };
  const intl3 = require("util").intl;
  obj2.children = intl3.format(_modDef15623.rmps8y, {});
  items[4] = closure_10(require("Text/Text").Text, obj2);
  const obj3 = { variant: "text-md/normal", children: null };
  const intl4 = require("util").intl;
  obj3.children = intl4.format(_modDef15623.uczI4g, {
    linkTarget() {},
  });
  items[5] = closure_10(require("Text/Text").Text, obj3);
  const obj5 = { variant: "text-md/normal", children: null };
  const intl5 = require("util").intl;
  obj5.children = intl5.format(_modDef15623.rdfRyh, {});
  items[6] = closure_10(require("Text/Text").Text, obj5);
  const obj6 = { variant: "text-md/normal", children: null };
  const intl6 = require("util").intl;
  obj6.children = intl6.format(_modDef15623.XOdbAy, {
    username: "some user",
    usernameHook(children) {
      let obj = {
        style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 },
        children: null,
      };
      obj = { variant: "text-sm/normal", color: "text-overlay-light", children };
      obj.children = closure_1_10(closure_0(4556).Text, obj);
      return closure_1_10(closure_1_6, obj);
    },
  });
  items[7] = closure_10(require("Text/Text").Text, obj6);
  obj.children = items;
  obj.children = closure_11(require("Stack/Stack").Stack, obj);
  return closure_10(closure_7, obj);
}
