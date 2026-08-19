// discord_app/modules/phone/native/CountryCallingCodeSelect.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { getI18NCountryName } from "../../i18n/CountryCodeUtils.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: null, paddingTop: null, paddingBottom: null, flex: 1 };
  const space = ThemesDefault.space;
  obj[1] = arg0 ? space.PX_24 : space.PX_12;
  obj[2] = ThemesDefault.space.PX_16;
  const space2 = ThemesDefault.space;
  obj = { container: obj, searchFieldContainer: null };
  obj[3] = arg0 ? space2.PX_24 : space2.PX_16;
  obj = { paddingBottom: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default function CountryCallingCodeSelect(onCountrySelected) {
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  let first;
  let memo;
  let rows;
  let tmp3 = callback2(onClose(first[7])());
  const tmp4 = memo(rows.useState(""), 2);
  first = tmp4[0];
  memo = rows.useMemo(() => onClose(first[8]).flatMap((item, index) => {
    const alpha2 = item.alpha2;
    ({ phoneCountryCodes, name: closure_1 } = item);
    closure_2 = index;
    closure_3 = callback(alpha2);
    return phoneCountryCodes.map((item, index) => {
      { translatedName: closure_3, key: "" + closure_2 + "-" + item, country: obj };
      obj = { code: item, alpha2, name: closure_1 };
      return obj;
    });
  }), []);
  const items = [memo, first];
  const memo1 = rows.useMemo(() => {
    rows = [];
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
        let tmp8 = onClose(first[10]);
        let str3 = tmp3.country.name;
        let formatted = first.toLowerCase();
        startsWithResult = tmp8(formatted, str3.toLowerCase());
      }
      if (!startsWithResult) {
        let tmp13 = onClose(first[10]);
        let str4 = tmp3.translatedName;
        let formatted1 = first.toLowerCase();
        startsWithResult = tmp13(formatted1, str4.toLowerCase());
      }
      if (startsWithResult) {
        let arr = rows.push(tmp3);
      }
      continue;
    }
    const sections = [rows.length];
    return { rows, sections };
  }, items);
  rows = memo1.rows;
  const items1 = [onClose, onCountrySelected, rows];
  let obj = { style: tmp3.searchFieldContainer, children: null };
  const callback = rows.useCallback((arg0, arg1) => {
    const country = tmp.country;
    const obj = { variant: "text-md/semibold", children: country.code };
    obj[3] = closure_1_7(onCountrySelected(first[12]).Text, obj);
    obj[4] = function onPress() {
      country(country);
      if (onClose != null) {
        onClose();
      }
    };
    return closure_1_7(onCountrySelected(first[11]).TableRow, obj);
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
    return callback(View, obj);
  }
  tmp12Result = tmp12(tmp(tmp2[17]), { sections: memo1.sections, renderItem: callback, itemSize: onClose(first[9])(), estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
  const tmp7 = onClose(first[9])();
};