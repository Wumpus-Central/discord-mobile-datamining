// === Module 7050: SearchField ===

// Module 7050 (SearchField)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import TextField from "TextField" /* 6613 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7051 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
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
const result = require("set").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;