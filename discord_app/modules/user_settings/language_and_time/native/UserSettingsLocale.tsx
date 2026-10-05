// === Module 15245: UserSettingsLocale ===

// Module 15245 (UserSettingsLocale)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2117 */;
import TableRadioRow2 from "TableRadioRow" /* 6071 */;
import flags from "flags" /* 15246 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, localizedName;

let closure_4;
let hasOwnProperty;
let obj2;
function handleLanguageChange() {
  return obj(...arguments);
}
let obj = function _handleLanguageChange() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
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
          obj = closure_130_1(closure_130_2[8]);
          obj.updateLocale(closure_0);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
({ Image: closure_4, ScrollView: hasOwnProperty } = react_native);
const setAppLocale = IntlLoaderStore.setAppLocale;
const jsx = Fragment.jsx;
obj = { content: obj2, flagImage: { width: 27, height: 18 } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let flagImage;
  let locale;
  let tmp5;
  let tmp6;
  let tmp9;
  obj = require("react");
  const cResult = obj.c(10);
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
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const content = tmp4.content;
  if (cResult[2] !== tmp4.flagImage) {
    const tmpResult2 = require("intl");
    const availableLocales = tmpResult2.getAvailableLocales();
    const mapped = availableLocales.map((localizedName) => {
      let name;
      let value;
      ({ name, value } = localizedName);
      localizedName = localizedName.localizedName;
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      const intl = intl2.intl;
      ({ style: flagImage.flagImage, source: flags.flags[value] });
      return <TableRadioRow key={name} value={value} label={name} subLabel={intl.string(localizedName)} icon={null} />;
    });
    cResult[2] = tmp4.flagImage;
    cResult[3] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === stateFromStores) {
    let tmp11;
    if (cResult[5] === tmp9) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.content) {
      let tmp13;
      if (cResult[8] === tmp11) {
        tmp13 = cResult[9];
      }
      return tmp13;
    }
    const tmp16 = <closure_5 contentContainerStyle={content}>{tmp11}</closure_5>;
    cResult[7] = tmp4.content;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  }
  const SafeAreaPaddingView = tmp(6619).SafeAreaPaddingView;
  const tmp12 = <SafeAreaPaddingView bottom>{null}</SafeAreaPaddingView>;
  cResult[4] = stateFromStores;
  cResult[5] = tmp9;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (() => {
  let availableLocales;
  let flagImage;
  let locale;
  const tmp = closure_9();
  _require = tmp;
  const items = [LocaleStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  ({
    defaultValue: stateFromStores,
    onChange: handleLanguageChange,
    hasIcons: true,
    children: availableLocales.map((localizedName) => {
      let name;
      let value;
      ({ name, value } = localizedName);
      localizedName = localizedName.localizedName;
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      const intl = intl2.intl;
      ({ style: flagImage.flagImage, source: flags.flags[value] });
      return <TableRadioRow key={name} value={value} label={name} subLabel={intl.string(localizedName)} icon={null} />;
    })
  });
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const obj5 = require("intl");
  availableLocales = obj5.getAvailableLocales();
  return <closure_5 contentContainerStyle={tmp.content}>{null}</closure_5>;
}));
const result = size.fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;