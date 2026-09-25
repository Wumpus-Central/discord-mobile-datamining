// discord_app/modules/badges/useLegacyNoDateText.tsx
import util from "../../intl/index.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

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
}
