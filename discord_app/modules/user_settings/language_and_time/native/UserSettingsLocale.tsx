// discord_app/modules/user_settings/language_and_time/native/UserSettingsLocale.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import flags from "../../../auth/native/images/flags.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../LocaleStore.tsx";

require = fn;
function handleLanguageChange() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _handleLanguageChange(arg0, value) {
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
          closure_2 = tmp5;
          closure_1 = tmp2;
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
        obj = closure_130_1(closure_130_2[8]);
        obj.updateLocale(closure_129_0);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
};
get_ActivityIndicator = fn(17);
({ Image: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const setAppLocale = fn(2026).setAppLocale;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { content: null, flagImage: null };
obj = { padding: nativeDefault.space.PX_16 };
obj.content = obj;
obj.flagImage = { width: 27, height: 18 };
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default noop.memo(function UserSettingsLocale() {
  const tmp = closure_9();
  _require = tmp;
  require("initialize");
  const items = [LocaleStore];
  let obj = { contentContainerStyle: tmp.content, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj = { bottom: true, children: null };
  const obj1 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null };
  const availableLocales = require("util").getAvailableLocales();
  obj1.children = availableLocales.map((localizedName) => {
    ({ name, value } = localizedName);
    let obj = { value, label: name, subLabel: null, icon: null };
    const intl = util.intl;
    obj.subLabel = intl.string(localizedName.localizedName);
    obj = { style: flagImage.flagImage, source: flags.flags[value] };
    obj.icon = <React4 style={flagImage.flagImage} source={flags.flags[value]} />;
    return jsx(TableRadioRow.TableRadioRow, { style: flagImage.flagImage, source: flags.flags[value] }, name);
  });
  obj.children = jsx(require("TableRadioGroup").TableRadioGroup, {
    defaultValue: stateFromStores,
    onChange: handleLanguageChange,
    hasIcons: true,
    children: null,
  });
  obj.children = jsx(require("common/SafeAreaView").SafeAreaPaddingView, { bottom: true, children: null });
  return <closure_5 bottom>{null}</closure_5>;
});
