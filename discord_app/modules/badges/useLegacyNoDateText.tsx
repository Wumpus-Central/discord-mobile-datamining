// discord_app/modules/badges/useLegacyNoDateText.tsx
import intl2 from "../../intl/index.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

function chooseRandomLegacyNoDateText() {
  const rounded = Math.floor(Math.random() * items.length);
  const intl = intl2.intl;
  return intl.string(items[rounded]);
}
const items = [intl2.t["6zFA/T"], intl2.t.wzZHKl, intl2.t["+ED/nf"]];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
    };
const result = size.fileFinishedImporting("modules/badges/useLegacyNoDateText.tsx");

export default tmp2;
