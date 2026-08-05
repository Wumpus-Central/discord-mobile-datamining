// discord_app/design/void/Form/native/FormCheckmark.tsx
import "noop";
import { jsx } from "jsxProd";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { CheckmarkSmallIcon } from "../../../components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";

const require = arg1;
const result = require("CheckmarkSmallIcon").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = Themes.unsafe_rawColors.BRAND_500;
    tmp = jsx(CheckmarkSmallIcon /* CheckmarkSmallIcon */.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};