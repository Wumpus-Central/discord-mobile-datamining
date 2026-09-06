// === Module 7048: CountryCallingCodeSelect ===

// Module 7048 (CountryCallingCodeSelect)
import nativeDefault from "native" /* 576 */;
import fuzzysearchDefault from "fuzzysearch" /* 5517 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const getI18NCountryName = fn(4776).getI18NCountryName;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  let obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: null, paddingTop: null, paddingBottom: null, flex: 1 };
  const space = nativeDefault.space;
  obj.paddingHorizontal = arg0 ? space.PX_24 : space.PX_12;
  obj.paddingTop = nativeDefault.space.PX_16;
  const space2 = tmp(576).space;
  obj = { container: obj, searchFieldContainer: null, paddingBottom: arg0 ? space2.PX_24 : space2.PX_16 };
  obj = { paddingBottom: tmp(576).space.PX_16 };
  obj.searchFieldContainer = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default function CountryCallingCodeSelect(onCountrySelected) {
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  let first;
  let memo;
  let rows;
  let tmp3 = closure_9(onClose(first[7])());
  const tmp4 = memo(rows.useState(""), 2);
  first = tmp4[0];
  memo = rows.useMemo(() => onClose(first[8]).flatMap((alpha2, index) => {
    alpha2 = alpha2.alpha2;
    ({ phoneCountryCodes, name: closure_1 } = alpha2);
    closure_2 = index;
    const translatedName = closure_1_6(alpha2);
    return phoneCountryCodes.map((code) => {
      let obj = { translatedName, key: "" + closure_2 + "-" + code, country: null };
      obj = { code, alpha2, name };
      obj.country = obj;
      return obj;
    });
  }), []);
  let items = [memo, first];
  const memo1 = rows.useMemo(() => {
    const items = [];
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let str = first;
      let startsWithResult = 0 === first.length;
      if (!startsWithResult) {
        let str2 = tmp3.country.code;
        let replaced = str2.replace(/\+|\s/g, "");
        startsWithResult = replaced.startsWith(str.replace(/\+|\s/g, ""));
      }
      if (!startsWithResult) {
        let tmp8 = fuzzysearchDefault;
        let str3 = tmp3.country.name;
        let formatted = str.toLowerCase();
        startsWithResult = tmp8(formatted, str3.toLowerCase());
      }
      if (!startsWithResult) {
        let tmp13 = fuzzysearchDefault;
        let str4 = tmp3.translatedName;
        let formatted1 = str.toLowerCase();
        startsWithResult = tmp13(formatted1, str4.toLowerCase());
      }
      if (startsWithResult) {
        let arr = items.push(tmp3);
      }
      continue;
    }
    const obj = { rows: items, sections: null };
    const items1 = [items.length];
    obj.sections = items1;
    return obj;
  }, items);
  rows = memo1.rows;
  let items1 = [onClose, onCountrySelected, rows];
  let obj = { style: tmp3.container, children: null };
  obj = { style: tmp3.searchFieldContainer, children: null };
  const callback = rows.useCallback((arg0, arg1) => {
    const country = tmp.country;
    let obj = { start: 0 === arg1, end: arg1 === rows.length - 1, label: tmp.translatedName, trailing: null, onPress: null };
    obj = { variant: "text-md/semibold", children: country.code };
    obj.trailing = closure_1_7(onCountrySelected(first[12]).Text, obj);
    obj.onPress = function onPress() {
      onCountrySelected(country);
      if (onClose != null) {
        onClose();
      }
    };
    return closure_1_7(onCountrySelected(first[11]).TableRow, obj);
  }, items1);
  obj.children = closure_7(onCountrySelected(first[13]).SearchField, { size: "md", onChange: tmp4[1] });
  const items2 = [closure_7(View, obj), ];
  if ("" !== first) {
    if (0 === rows.length) {
      obj = { source: tmp(tmp2[15]), text: null };
      const intl = tmp13(tmp2[16]).intl;
      obj.text = intl.string(tmp13(tmp2[16]).t.wEHnxW);
      let tmp12Result = tmp12(tmp(tmp2[14]), obj);
      const tmpResult = tmp(tmp2[14]);
    }
    items2[1] = tmp12Result;
    obj.children = items2;
    return closure_8(View, obj);
  }
  tmp12Result = tmp12(tmp(tmp2[17]), { sections: memo1.sections, renderItem: callback, itemSize: onClose(first[9])(), estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
};