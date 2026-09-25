// === Module 10651: useLegacyNoDateText ===

// Module 10651 (useLegacyNoDateText)
import util from "util" /* 1115 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function chooseRandomLegacyNoDateText() {
  const rounded = Math.floor(Math.random() * items.length);
  const intl = util.intl;
  return intl.string(items[rounded]);
}
const items = [fn(1115).t["6zFA/T"], fn(1115).t.wzZHKl, fn(1115).t["+ED/nf"]];
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useLegacyNoDateText.tsx");

export default function useLegacyNoDateText(arg0) {
  [tmp2, tmp3] = noop.useState(chooseRandomLegacyNoDateText);
  const tmp4 = _slicedToArray(noop.useState(arg0), 2);
  if (arg0 !== tmp4[0]) {
    tmp4[1](arg0);
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(Math.random() * items.length);
    const intl = util.intl;
    tmp3(intl.string(items[rounded]));
  }
  return tmp2;
};