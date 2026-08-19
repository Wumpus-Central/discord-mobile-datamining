// === Module 7337: SearchField ===

// Module 7337 (SearchField)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import TextField from "TextField" /* 7338 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7351 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  const obj = { placeholder: null, returnKeyType: "search", ref: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["5h0QOP"]);
  obj[2] = arg1;
  const merged = Object.assign(arg0);
  obj.autoCorrect = false;
  obj.autoCapitalize = "none";
  obj.accessibilityRole = "search";
  obj.leadingIcon = MagnifyingGlassIcon.MagnifyingGlassIcon;
  obj.isClearable = true;
  return jsx(TextField.TextField, { placeholder: null, returnKeyType: "search", ref: null });
});
const result = require("obj132").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;