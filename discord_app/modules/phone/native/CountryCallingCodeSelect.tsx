// discord_app/modules/phone/native/CountryCallingCodeSelect.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import fuzzysearchDefault from "../../../../_runtime/05598_fuzzysearch.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const getI18NCountryName = fn(4852).getI18NCountryName;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: null,
    paddingTop: null,
    paddingBottom: null,
    flex: 1,
  };
  const space = nativeDefault.space;
  obj.paddingHorizontal = arg0 ? space.PX_24 : space.PX_12;
  obj.paddingTop = nativeDefault.space.PX_16;
  const space2 = nativeDefault.space;
  const obj2 = { container: obj, searchFieldContainer: { paddingBottom: nativeDefault.space.PX_16 } };
  obj.paddingBottom = arg0 ? space2.PX_24 : space2.PX_16;
  return obj2;
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
  memo = rows.useMemo(
    () =>
      onClose(first[8]).flatMap((alpha2, index) => {
        alpha2 = alpha2.alpha2;
        ({ phoneCountryCodes, name: closure_1 } = alpha2);
        closure_2 = index;
        const translatedName = closure_1_6(alpha2);
        return phoneCountryCodes.map((code) => {
          const obj = { translatedName, key: "" + closure_2 + "-" + code, country: { code, alpha2, name } };
          return obj;
        });
      }),
    [],
  );
  let items = [memo, first];
  const memo1 = rows.useMemo(() => {
    const items = [];
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let startsWithResult = 0 === first.length;
      if (!startsWithResult) {
        let str2 = tmp3.country.code;
        let replaced = str2.replace(/\+|\s/g, "");
        startsWithResult = replaced.startsWith(first.replace(/\+|\s/g, ""));
      }
      if (!startsWithResult) {
        let tmp8 = fuzzysearchDefault;
        let str3 = tmp3.country.name;
        let formatted = first.toLowerCase();
        startsWithResult = tmp8(formatted, str3.toLowerCase());
      }
      if (!startsWithResult) {
        let tmp13 = fuzzysearchDefault;
        let str4 = tmp3.translatedName;
        let formatted1 = first.toLowerCase();
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
  const obj2 = { style: tmp3.searchFieldContainer, children: null };
  const callback = rows.useCallback((arg0, arg1) => {
    const country = tmp.country;
    const obj = {
      start: 0 === arg1,
      end: arg1 === rows.length - 1,
      label: rows[arg1].translatedName,
      trailing: closure_1_7(onCountrySelected(first[12]).Text, { variant: "text-md/semibold", children: country.code }),
      onPress() {
        onCountrySelected(country);
        if (onClose != null) {
          onClose();
        }
      },
    };
    return closure_1_7(onCountrySelected(first[11]).TableRow, obj);
  }, items1);
  obj2.children = closure_7(onCountrySelected(first[13]).SearchField, { size: "md", onChange: tmp4[1] });
  const items2 = [closure_7(View, obj2)];
  if ("" !== first) {
    if (0 === rows.length) {
      const obj3 = { source: tmp(tmp2[15]), text: null };
      const intl = tmp13(tmp2[16]).intl;
      obj3.text = intl.string(tmp13(tmp2[16]).t.wEHnxW);
      let tmp12Result = closure_7(tmp(tmp2[14]), obj3);
      const tmpResult = tmp(tmp2[14]);
    }
    items2[1] = tmp12Result;
    obj.children = items2;
    return closure_8(View, obj);
  }
  tmp12Result = closure_7(tmp(tmp2[17]), {
    sections: memo1.sections,
    renderItem: callback,
    itemSize: onClose(first[9])(),
    estimatedListSize: "windowSize",
    keyboardShouldPersistTaps: "always",
  });
  const tmp7 = onClose(first[9])();
}
