// === Module 15241: UserSettingsLocale ===

// Module 15241 (UserSettingsLocale)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import flags from "flags" /* 15242 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;

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
        return { value: "IconComponent", done: "IconComponent" };
      }
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
};
get_ActivityIndicator = fn(17);
({ Image: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const setAppLocale = fn(2117).setAppLocale;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { content: { padding: nativeDefault.space.PX_16 }, flagImage: { width: 27, height: 18 } };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(10);
  const tmp4 = closure_9();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function l() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== tmp4.flagImage) {
    const availableLocales = tmp(1126).getAvailableLocales();
    const mapped = availableLocales.map((localizedName) => {
      ({ name, value } = localizedName);
      const obj = { value, label: name, subLabel: null, icon: null };
      const intl = util.intl;
      obj.subLabel = intl.string(localizedName.localizedName);
      obj.icon = <React4 style={flagImage.flagImage} source={flags.flags[value]} />;
      return jsx(TableRadioRow.TableRadioRow, { value, label: name, subLabel: null, icon: null }, name);
    });
    cResult[2] = tmp4.flagImage;
    cResult[3] = mapped;
    let tmp9 = mapped;
    const tmpResult2 = tmp(1126);
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp9) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.content) {
      if (cResult[8] === tmp11) {
        let tmp13 = cResult[9];
      }
      return tmp13;
    }
    const obj2 = { contentContainerStyle: tmp4.content, children: tmp11 };
    const tmp16 = <closure_5 contentContainerStyle={tmp4.content}>{tmp11}</closure_5>;
    cResult[7] = tmp4.content;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  }
  const obj3 = { bottom: true, children: jsx(require("TableRadioGroup").TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: tmp9 }) };
  const tmp12 = jsx(require("common/SafeAreaView").SafeAreaPaddingView, { bottom: true, children: jsx(require("TableRadioGroup").TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: tmp9 }) });
  cResult[4] = stateFromStores;
  cResult[5] = tmp9;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const obj4 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: tmp9 };
  const tmpResult = require("initialize");
}) : (() => {
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
  obj3.children = jsx(require("TableRadioGroup").TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true, children: null });
  obj2.children = jsx(require("common/SafeAreaView").SafeAreaPaddingView, { bottom: true, children: null });
  return <closure_5 contentContainerStyle={tmp.content}>{null}</closure_5>;
}));