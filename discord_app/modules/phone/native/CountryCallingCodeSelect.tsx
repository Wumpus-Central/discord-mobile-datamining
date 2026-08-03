import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "module_9250";
import { getI18NCountryName } from "DEFAULT_COUNTRY_CODE_NAME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOW, paddingHorizontal: null, paddingTop: null, paddingBottom: null, flex: 1 };
  const space = importDefault(712).space;
  obj[1] = arg0 ? space.PX_24 : space.PX_12;
  obj[2] = importDefault(712).space.PX_16;
  const space2 = tmp(712).space;
  obj = { container: obj, searchFieldContainer: null };
  obj[3] = arg0 ? space2.PX_24 : space2.PX_16;
  obj = { paddingBottom: tmp(712).space.PX_16 };
  obj[1] = obj;
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default function CountryCallingCodeSelect(onCountrySelected) {
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  let first;
  let memo;
  let rows;
  let tmp3 = callback2(onClose(first[7])());
  const tmp4 = memo(rows.useState(""), 2);
  first = tmp4[0];
  memo = rows.useMemo(() => onClose(first[8]).flatMap((alpha2) => {
    let closure_1;
    let phoneCountryCodes;
    alpha2 = alpha2.alpha2;
    ({ phoneCountryCodes, name: closure_1 } = alpha2);
    let closure_2 = arg1;
    let _slicedToArray;
    _slicedToArray = callback(alpha2);
    return phoneCountryCodes.map((code) => {
      obj = { translatedName: _slicedToArray, key: "" + closure_2 + "-" + code, country: obj };
      obj = { code, alpha2, name: closure_1 };
      return obj;
    });
  }), []);
  const items = [memo, first];
  const memo1 = rows.useMemo(() => {
    const rows = [];
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let str = first;
      let startsWithResult = 0 === first.length;
      if (!startsWithResult) {
        let tmp5 = nextResult;
        let str2 = tmp3.country.code;
        let replaced = str2.replace(/\+|\s/g, "");
        startsWithResult = replaced.startsWith(str.replace(/\+|\s/g, ""));
      }
      if (!startsWithResult) {
        let tmp6 = onClose;
        let tmp7 = first;
        let tmp8 = onClose(first[10]);
        let tmp10 = nextResult;
        let str3 = tmp3.country.name;
        let formatted = str.toLowerCase();
        startsWithResult = tmp8(formatted, str3.toLowerCase());
      }
      if (!startsWithResult) {
        let tmp11 = onClose;
        let tmp12 = first;
        let tmp13 = onClose(first[10]);
        let tmp15 = nextResult;
        let str4 = tmp3.translatedName;
        let formatted1 = str.toLowerCase();
        startsWithResult = tmp13(formatted1, str4.toLowerCase());
      }
      if (startsWithResult) {
        let tmp16 = nextResult;
        let arr = rows.push(tmp3);
      }
      continue;
    }
    const sections = [rows.length];
    return { rows, sections };
  }, items);
  rows = memo1.rows;
  const items1 = [onClose, onCountrySelected, rows];
  let obj = { style: tmp3.container, children: null };
  obj = { style: tmp3.searchFieldContainer, children: null };
  const callback = rows.useCallback((arg0, arg1) => {
    const country = tmp.country;
    let obj = { start: 0 === arg1, end: arg1 === rows.length - 1, label: tmp.translatedName, trailing: null, onPress: null };
    obj = { variant: "text-md/semibold", children: country.code };
    obj[3] = outer1_7(onCountrySelected(first[12]).Text, obj);
    obj[4] = function onPress() {
      country(country);
      if (outer1_1 != null) {
        outer1_1();
      }
    };
    return outer1_7(onCountrySelected(first[11]).TableRow, obj);
  }, items1);
  obj[1] = callback(onCountrySelected(first[13]).SearchField, { size: "md", onChange: tmp4[1] });
  const items2 = [callback(View, obj), ];
  if ("" !== first) {
    if (0 === rows.length) {
      obj = { source: null, text: null };
      obj[0] = tmp(tmp2[15]);
      const intl = tmp13(tmp2[16]).intl;
      obj[1] = intl.string(tmp13(tmp2[16]).t.wEHnxW);
      let tmp12Result = tmp12(tmp(tmp2[14]), obj);
      const tmpResult = tmp(tmp2[14]);
    }
    items2[1] = tmp12Result;
    obj[1] = items2;
    return closure_8(View, obj);
  }
  tmp12Result = tmp12(tmp(tmp2[17]), { sections: memo1.sections, renderItem: callback, itemSize: onClose(first[9])(), estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
};