// === Module 15464: TestLocaleSelector ===

// Module 15464 (TestLocaleSelector)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import hooksDefault from "hooks" /* 4074 */;
import TableRowInner from "TableRowInner" /* 5608 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6001 */;
import messagesProxyDefault from "messagesProxy" /* 15465 */;
import messagesProxyDefault2 from "messagesProxy" /* 15497 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { setAppLocale } from "_setAppLocale" /* 1996 */;
import closure_9 from "_getSystemLocale" /* 1995 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function TestLocaleSelector() {
  let obj = { title: "Locale", hasIcons: false, defaultValue: _require(1233).intl.currentLocale, onChange: null, children: null };
  _require = undefined;
  _require = callback2((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_8(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = closure_1_1(closure_1_2[11]);
            obj.updateLocale(closure_0);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c4 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  obj[3] = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items = [callback3(_require(7705).TableRadioRow, { label: "English", value: "en-US" }), callback3(_require(7705).TableRadioRow, { label: "French", value: "fr" })];
  obj[4] = items;
  return callback4(_require(7704).TableRadioGroup, obj);
}
function LocaleInfo() {
  let obj = initialize;
  let items = [closure_9];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ locale: arr[0], systemLocale: arr[1] } = closure_9);
    return items;
  }), 2);
  const first = tmp[0];
  [tmp4, require] = callback(React.useState(hooksDefault.locale), 2);
  const items1 = [first];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(closure_1_1(closure_1_2[14]).locale());
    }, 0);
  }, items1);
  obj1 = hooksDefault;
  obj = { label: "Active System", trailing: callback3(TableRowInner.TableRow.TrailingText, { text: "@discord/intl" }) };
  const items2 = [callback3(TableRowInner.TableRow, obj), , , , ];
  obj = { label: "App locale", trailing: callback3(TableRowInner.TableRow.TrailingText, { text: first }) };
  items2[1] = callback3(TableRowInner.TableRow, obj);
  obj1 = { label: "System locale", trailing: callback3(TableRowInner.TableRow.TrailingText, { text: tmp[1] }) };
  items2[2] = callback3(TableRowInner.TableRow, obj1);
  const obj2 = { label: "@discord/intl locale", trailing: null };
  const tmp3 = callback(React.useState(hooksDefault.locale), 2);
  const tmp6 = closure_11;
  const tmp7 = callback3;
  obj2[1] = callback3(TableRowInner.TableRow.TrailingText, { text: getSystemLocale.intl.currentLocale });
  items2[3] = callback3(TableRowInner.TableRow, obj2);
  const obj4 = { label: "Moment locale", trailing: callback3(TableRowInner.TableRow.TrailingText, { text: tmp4 }), subLabel: null };
  let str = "Locale data does not match";
  if (tmp4 === obj1.localeData()._abbr) {
    str = "Locale data matches current locale";
  }
  const obj5 = { hasIcons: false, children: null };
  obj4[2] = str;
  items2[4] = tmp7(TableRowInner.TableRow, obj4);
  obj5[1] = items2;
  return tmp6(TableRowGroupTitle.TableRowGroup, obj5);
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { wrap: null, container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  const tmp = callback5();
  const syncExternalStore = React.useSyncExternalStore(_require(1233).intl.onLocaleChange, () => callback(1233).intl.currentLocale);
  _require = callback(React.useState({}), 2)[1];
  const effect = React.useEffect(() => {
    const result = callback(closure_1_2[17]).waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      callback({});
    });
  }, []);
  let obj = { style: tmp.wrap, children: null };
  obj = { spacing: 24, style: tmp.container, children: null };
  const items = [callback3(LocaleInfo, {}), callback3(TestLocaleSelector, {}), , , , , , ];
  obj = { variant: "text-md/normal", children: null };
  const intl = _require(1233).intl;
  obj[1] = intl.format(messagesProxyDefault.HMvEC5, {});
  items[2] = callback3(_require(4474).Text, obj);
  obj1 = { variant: "text-md/normal", children: null };
  const intl2 = _require(1233).intl;
  obj1[1] = intl2.format(messagesProxyDefault2.swfLzV, {});
  items[3] = callback3(_require(4474).Text, obj1);
  const obj2 = { variant: "text-md/normal", children: null };
  const intl3 = _require(1233).intl;
  obj2[1] = intl3.format(messagesProxyDefault.rmps8y, {});
  items[4] = callback3(_require(4474).Text, obj2);
  const obj3 = { variant: "text-md/normal", children: null };
  const intl4 = _require(1233).intl;
  obj3[1] = intl4.format(messagesProxyDefault.uczI4g, {
    linkTarget() {

    }
  });
  items[5] = callback3(_require(4474).Text, obj3);
  const obj5 = { variant: "text-md/normal", children: null };
  const intl5 = _require(1233).intl;
  obj5[1] = intl5.format(messagesProxyDefault.rdfRyh, {});
  items[6] = callback3(_require(4474).Text, obj5);
  const obj6 = { variant: "text-md/normal", children: null };
  const intl6 = _require(1233).intl;
  obj6[1] = intl6.format(messagesProxyDefault.XOdbAy, {
    username: "some user",
    usernameHook(children) {
      obj = { style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 }, children: callback2(callback(4474).Text, obj) };
      obj = { variant: "text-sm/normal", color: "text-overlay-light", children };
      return callback2(closure_6, obj);
    }
  });
  items[7] = callback3(_require(4474).Text, obj6);
  obj[2] = items;
  obj[1] = callback4(_require(4927).Stack, obj);
  return callback3(closure_7, obj);
};