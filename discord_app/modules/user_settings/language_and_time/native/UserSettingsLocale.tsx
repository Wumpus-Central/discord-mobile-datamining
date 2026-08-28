// === Module 14955: handleLanguageChange ===

// Module 14955 (handleLanguageChange)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { setAppLocale } from "_setAppLocale" /* 1998 */;
import closure_7 from "_getSystemLocale" /* 1997 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
function handleLanguageChange() {
  const self = this;
  const apply = _handleLanguageChange.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleLanguageChange() {
  const self = this;
  const tmp = callback((arg0) => {
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
              const table = tmp5;
              const callback = tmp2;
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_6(closure_0);
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
            obj = callback(table[8]);
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
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Image: c4, ScrollView: c5 } = get_ActivityIndicator);
let obj = { content: null, flagImage: null };
obj = { padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { width: 27, height: 18 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function UserSettingsLocale() {
  const tmp = callback2();
  const _require = tmp;
  let obj = _require(589);
  const items = [closure_7];
  obj = { contentContainerStyle: tmp.content, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj = { bottom: true, children: null };
  obj1 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null };
  const availableLocales = _require(1236).getAvailableLocales();
  obj1[3] = availableLocales.map((localizedName) => {
    ({ name, value } = localizedName);
    let obj = { value, label: name, subLabel: null, icon: null };
    const intl = lib(closure_1_2[12]).intl;
    obj[2] = intl.string(localizedName.localizedName);
    obj = { style: lib.flagImage, source: lib(closure_1_2[14]).flags[value] };
    obj[3] = closure_1_8(closure_1_4, obj);
    return closure_1_8(lib(closure_1_2[13]).TableRadioRow, obj, name);
  });
  obj[1] = jsx(_require(7639).TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null });
  obj[1] = jsx(_require(5518).SafeAreaPaddingView, { bottom: true, children: null });
  return <closure_5 bottom>{null}</closure_5>;
});
const result = require("set").fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;