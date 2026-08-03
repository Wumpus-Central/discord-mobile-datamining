import _slicedToArray from "_slicedToArray";
import _getSystemLocale from "_getSystemLocale";
import Text from "Text";
import get_ActivityIndicator from "module_1274";
import { setAppLocale } from "_setAppLocale";
import closure_9 from "_getSystemLocale";
import jsxProd from "messagesProxy";
import createCacheKey from "createCacheKey";

let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function TestLocaleSelector() {
  let obj = { title: "Locale", hasIcons: false, defaultValue: null, onChange: null, children: null };
  obj[2] = _require(1236).intl.currentLocale;
  _require = undefined;
  _require = callback2((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
              let closure_2 = tmp5;
              let closure_1 = tmp2;
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_8(closure_0);
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
            obj = outer1_1(outer1_2[11]);
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
  const items = [callback3(_require(7659).TableRadioRow, { label: "English", value: "en-US" }), callback3(_require(7659).TableRadioRow, { label: "French", value: "fr" })];
  obj[4] = items;
  return callback4(_require(7660).TableRadioGroup, obj);
}
function LocaleInfo() {
  let require;
  let tmp4;
  let obj = require(589) /* initialize */;
  let items = [closure_9];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ locale: arr[0], systemLocale: arr[1] } = closure_9);
    return items;
  }), 2);
  const first = tmp[0];
  [tmp4, require] = callback(React.useState(importDefault(3775).locale), 2);
  const items1 = [first];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(outer1_1(outer1_2[14]).locale());
    }, 0);
  }, items1);
  let obj1 = importDefault(3775);
  obj = { label: "Active System", trailing: null };
  obj[1] = callback3(require(5224) /* TableRowInner */.TableRow.TrailingText, { text: "@discord/intl" });
  const items2 = [callback3(require(5224) /* TableRowInner */.TableRow, obj), , , , ];
  obj = { label: "App locale", trailing: null };
  obj[1] = callback3(require(5224) /* TableRowInner */.TableRow.TrailingText, { text: first });
  items2[1] = callback3(require(5224) /* TableRowInner */.TableRow, obj);
  obj1 = { label: "System locale", trailing: null };
  obj1[1] = callback3(require(5224) /* TableRowInner */.TableRow.TrailingText, { text: tmp[1] });
  items2[2] = callback3(require(5224) /* TableRowInner */.TableRow, obj1);
  const obj2 = { label: "@discord/intl locale", trailing: null };
  const obj3 = { text: null };
  obj3[0] = require(1236) /* getSystemLocale */.intl.currentLocale;
  obj2[1] = callback3(require(5224) /* TableRowInner */.TableRow.TrailingText, obj3);
  items2[3] = callback3(require(5224) /* TableRowInner */.TableRow, obj2);
  const obj4 = { label: "Moment locale", trailing: null, subLabel: null };
  obj4[1] = callback3(require(5224) /* TableRowInner */.TableRow.TrailingText, { text: tmp4 });
  let str = "Locale data does not match";
  if (tmp4 === obj1.localeData()._abbr) {
    str = "Locale data matches current locale";
  }
  const obj5 = { hasIcons: false, children: null };
  obj4[2] = str;
  items2[4] = callback3(require(5224) /* TableRowInner */.TableRow, obj4);
  obj5[1] = items2;
  return closure_11(require(5558) /* TableRowGroupTitle */.TableRowGroup, obj5);
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { wrap: null, container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("noop").fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  const tmp = createCacheKey();
  const syncExternalStore = React.useSyncExternalStore(_require(1236).intl.onLocaleChange, () => callback(1236).intl.currentLocale);
  _require = callback(React.useState({}), 2)[1];
  const effect = React.useEffect(() => {
    const result = callback(outer1_2[17]).waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      callback({});
    });
  }, []);
  let obj = { style: tmp.wrap, children: null };
  obj = { spacing: 24, style: tmp.container, children: null };
  const items = [callback3(LocaleInfo, {}), callback3(TestLocaleSelector, {}), , , , , , ];
  obj = { variant: "text-md/normal", children: null };
  const intl = _require(1236).intl;
  obj[1] = intl.format(importDefault(14740).HMvEC5, {});
  items[2] = callback3(_require(4189).Text, obj);
  const obj1 = { variant: "text-md/normal", children: null };
  const intl2 = _require(1236).intl;
  obj1[1] = intl2.format(importDefault(14772).swfLzV, {});
  items[3] = callback3(_require(4189).Text, obj1);
  const obj2 = { variant: "text-md/normal", children: null };
  const intl3 = _require(1236).intl;
  obj2[1] = intl3.format(importDefault(14740).rmps8y, {});
  items[4] = callback3(_require(4189).Text, obj2);
  const obj3 = { variant: "text-md/normal", children: null };
  const intl4 = _require(1236).intl;
  obj3[1] = intl4.format(importDefault(14740).uczI4g, {
    linkTarget() {

    }
  });
  items[5] = callback3(_require(4189).Text, obj3);
  const obj5 = { variant: "text-md/normal", children: null };
  const intl5 = _require(1236).intl;
  obj5[1] = intl5.format(importDefault(14740).rdfRyh, {});
  items[6] = callback3(_require(4189).Text, obj5);
  const obj6 = { variant: "text-md/normal", children: null };
  const intl6 = _require(1236).intl;
  obj6[1] = intl6.format(importDefault(14740).XOdbAy, {
    username: "some user",
    usernameHook(children) {
      obj = { style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 }, children: callback2(callback(4189).Text, obj) };
      obj = { variant: "text-sm/normal", color: "text-overlay-light", children };
      return callback2(closure_6, obj);
    }
  });
  items[7] = callback3(_require(4189).Text, obj6);
  obj[2] = items;
  obj[1] = callback4(_require(4602).Stack, obj);
  return callback3(closure_7, obj);
};