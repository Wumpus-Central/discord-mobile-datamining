// discord_app/modules/user_settings/language_and_time/native/UserSettingsLocale.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import flags from "../../../auth/native/images/flags.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../LocaleStore.tsx";

const require = globalThis.__r;

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
let closure_11 = async function _handleLanguageChange(arg0) {
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
          closure_2 = tmp5;
          closure_1 = tmp2;
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
        closure_130_1(closure_130_2[8]).updateLocale(closure_129_0);
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
const setAppLocale = fn(2112).setAppLocale;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = { content: { padding: nativeDefault.space.PX_16 }, flagImage: { width: 27, height: 18 } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default noop.memo(function UserSettingsLocale() {
  const tmp = closure_9();
  _require = tmp;
  const items = [LocaleStore];
  const obj2 = { contentContainerStyle: tmp.content, children: null };
  const stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const obj3 = { bottom: true, children: null };
  const obj4 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null };
  let obj = require("initialize");
  const availableLocales = require("util").getAvailableLocales();
  obj4.children = availableLocales.map((localizedName) => {
    ({ name, value } = localizedName);
    const obj = { value, label: name, subLabel: null, icon: null };
    const intl = util.intl;
    obj.subLabel = intl.string(localizedName.localizedName);
    obj.icon = <React4 style={flagImage.flagImage} source={flags.flags[value]} />;
    return jsx(TableRadioRow.TableRadioRow, { value, label: name, subLabel: null, icon: null }, name);
  });
  obj3.children = jsx(require("TableRadioGroup").TableRadioGroup, {
    defaultValue: stateFromStores,
    onChange: handleLanguageChange,
    hasIcons: true,
    children: null,
  });
  obj2.children = jsx(require("common/SafeAreaView").SafeAreaPaddingView, { bottom: true, children: null });
  return <closure_5 contentContainerStyle={tmp.content}>{null}</closure_5>;
});
