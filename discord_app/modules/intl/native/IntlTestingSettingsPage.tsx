// discord_app/modules/intl/native/IntlTestingSettingsPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _mod1154 from "../../../../_runtime/metro/01154__.js";
import _modDef4348 from "../../../../_runtime/metro/04348__.js";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef15903 from "../messages/Test.messages.js";
import _modDef15935 from "../messages/SecondTest.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

const require = globalThis.__r;

require = fn;
function TestLocaleSelector() {
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
          tmp2(tmp5[11]).updateLocale(closure_129_0);
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
  [tmp4, require] = noop.useState(_modDef4348.locale);
  const items1 = [first];
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_0(_modDef4348.locale());
    }, 0);
  }, items1);
  const tmp3 = _slicedToArray(noop.useState(_modDef4348.locale), 2);
  const obj2 = _modDef4348;
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
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const setAppLocale = fn(2110).setAppLocale;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: { padding: 16 } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  const tmp = closure_12();
  const syncExternalStore = noop.useSyncExternalStore(
    require("util").intl.onLocaleChange,
    () => closure_0(1115).intl.currentLocale,
  );
  _require = _slicedToArray(noop.useState({}), 2)[1];
  const effect = noop.useEffect(() => {
    const result = _mod1154.waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      closure_1_0({});
    });
  }, []);
  let obj = { style: tmp.wrap, children: null };
  const obj2 = { spacing: 24, style: tmp.container, children: null };
  const items = [closure_10(LocaleInfo, {}), closure_10(TestLocaleSelector, {}), , , , , ,];
  const obj3 = { variant: "text-md/normal", children: null };
  const intl = require("util").intl;
  obj3.children = intl.format(_modDef15903.HMvEC5, {});
  items[2] = closure_10(require("Text/Text").Text, obj3);
  const obj4 = { variant: "text-md/normal", children: null };
  const intl2 = require("util").intl;
  obj4.children = intl2.format(_modDef15935.swfLzV, {});
  items[3] = closure_10(require("Text/Text").Text, obj4);
  const obj5 = { variant: "text-md/normal", children: null };
  const intl3 = require("util").intl;
  obj5.children = intl3.format(_modDef15903.rmps8y, {});
  items[4] = closure_10(require("Text/Text").Text, obj5);
  const obj6 = { variant: "text-md/normal", children: null };
  const intl4 = require("util").intl;
  obj6.children = intl4.format(_modDef15903.uczI4g, {
    linkTarget() {},
  });
  items[5] = closure_10(require("Text/Text").Text, obj6);
  const obj8 = { variant: "text-md/normal", children: null };
  const intl5 = require("util").intl;
  obj8.children = intl5.format(_modDef15903.rdfRyh, {});
  items[6] = closure_10(require("Text/Text").Text, obj8);
  const obj9 = { variant: "text-md/normal", children: null };
  const intl6 = require("util").intl;
  obj9.children = intl6.format(_modDef15903.XOdbAy, {
    username: "some user",
    usernameHook(children) {
      const obj = {
        style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 },
        children: closure_1_10(closure_0(4752).Text, {
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
}
