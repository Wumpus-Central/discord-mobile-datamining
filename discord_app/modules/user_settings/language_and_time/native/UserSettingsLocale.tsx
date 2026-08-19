// discord_app/modules/user_settings/language_and_time/native/UserSettingsLocale.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { setAppLocale } from "../../../../intl/IntlLoaderStore.tsx";
import _getSystemLocale from "../../LocaleStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
let obj = { padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { width: 27, height: 18 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function UserSettingsLocale() {
  const tmp = callback2();
  const _require = tmp;
  initialize;
  const items = [closure_7];
  let obj = { contentContainerStyle: tmp.content, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj = { bottom: true, children: null };
  obj1 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null };
  const availableLocales = require("../../../../intl/index.native.tsx").getAvailableLocales();
  obj1[3] = availableLocales.map((item, index) => {
    ({ name, value } = item);
    let obj = { value, label: name, subLabel: null, icon: null };
    const intl = lib(dependencyMap[12]).intl;
    obj[2] = intl.string(item.localizedName);
    obj = { style: lib.flagImage, source: lib(dependencyMap[14]).flags[value] };
    obj[3] = <closure_1_4 style={lib.flagImage} source={lib(dependencyMap[14]).flags[value]} />;
    return jsx(lib(dependencyMap[13]).TableRadioRow, { style: lib.flagImage, source: lib(dependencyMap[14]).flags[value] }, name);
  });
  obj[1] = jsx(require("../../../../design/components/TableRow/native/TableRadioGroup.native.tsx").TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null });
  obj[1] = jsx(require("../../../../components_native/common/SafeAreaView.tsx").SafeAreaPaddingView, { bottom: true, children: null });
  return <closure_5 bottom>{null}</closure_5>;
});
const result = require("obj132").fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;