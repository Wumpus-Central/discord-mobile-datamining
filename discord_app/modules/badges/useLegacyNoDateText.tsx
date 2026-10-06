// === Module 10907: useLegacyNoDateText ===

// Module 10907 (useLegacyNoDateText)
import intl2 from "intl" /* 1126 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function chooseRandomLegacyNoDateText() {
  const rounded = Math.floor(Math.random() * items.length);
  const intl = intl2.intl;
  return intl.string(items[rounded]);
}
const items = [intl2.t["6zFA/T"], intl2.t.wzZHKl, intl2.t["+ED/nf"]];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(chooseRandomLegacyNoDateText);
  _slicedToArray(react.useState(chooseRandomLegacyNoDateText), 2);
  const tmp4 = _slicedToArray(react.useState(arg0), 2);
  if (arg0 !== tmp4[0]) {
    tmp4[1](arg0);
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(Math.random() * items.length);
    const intl = intl2.intl;
    tmp3(intl.string(items[rounded]));
  }
  return tmp2;
}) : ((arg0) => {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(chooseRandomLegacyNoDateText);
  _slicedToArray(react.useState(chooseRandomLegacyNoDateText), 2);
  const tmp4 = _slicedToArray(react.useState(arg0), 2);
  if (arg0 !== tmp4[0]) {
    tmp4[1](arg0);
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(Math.random() * items.length);
    const intl = intl2.intl;
    tmp3(intl.string(items[rounded]));
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/badges/useLegacyNoDateText.tsx");

export default tmp2;