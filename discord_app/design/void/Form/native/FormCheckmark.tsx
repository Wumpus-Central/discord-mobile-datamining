// discord_app/design/void/Form/native/FormCheckmark.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckmarkSmallIcon from "../../../components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = ThemesDefault.unsafe_rawColors.BRAND_500;
    tmp = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};