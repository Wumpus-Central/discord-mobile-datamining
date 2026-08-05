// discord_app/modules/user_settings/language_and_time/native/UserSettingsLocale.tsx
import jsxProd from "jsxProd";
import get_ActivityIndicator from "get ActivityIndicator";
import { setAppLocale } from "_setAppLocale";
import _getSystemLocale from "_getSystemLocale";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
let require = arg1;
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
              const table = tmp5;
              const callback = tmp2;
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_6(closure_0);
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
  const _handleLanguageChange = tmp;
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
obj = { padding: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { width: 27, height: 18 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function UserSettingsLocale() {
  const tmp = callback2();
  const require = tmp;
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [_getSystemLocale];
  obj = { contentContainerStyle: tmp.content, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj = { bottom: true, children: null };
  const obj1 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null };
  const availableLocales = require("../../../../intl/index.native.tsx") /* getSystemLocale */.getAvailableLocales();
  obj1[3] = availableLocales.map((localizedName) => {
    let name;
    let value;
    ({ name, value } = localizedName);
    let obj = { value, label: name, subLabel: null, icon: null };
    const intl = tmp(outer1_2[12]).intl;
    obj[2] = intl.string(localizedName.localizedName);
    obj = { style: tmp.flagImage, source: tmp(outer1_2[14]).flags[value] };
    obj[3] = outer1_8(outer1_4, obj);
    return outer1_8(tmp(outer1_2[13]).TableRadioRow, obj, name);
  });
  obj[1] = jsx(require("../../../../design/components/TableRow/native/TableRadioGroup.native.tsx") /* context */.TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null });
  obj[1] = jsx(require("../../../../components_native/common/SafeAreaView.tsx") /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, children: null });
  return <closure_5 bottom>{null}</closure_5>;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;