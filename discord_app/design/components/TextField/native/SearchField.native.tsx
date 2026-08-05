// discord_app/design/components/TextField/native/SearchField.native.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { placeholder: null, returnKeyType: "search", ref: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5h0QOP"]);
  obj[2] = arg1;
  const merged = Object.assign(arg0);
  obj.autoCorrect = false;
  obj.autoCapitalize = "none";
  obj.accessibilityRole = "search";
  obj.leadingIcon = require("../../Icon/native/redesign/generated/MagnifyingGlassIcon.tsx") /* MagnifyingGlassIcon */.MagnifyingGlassIcon;
  obj.isClearable = true;
  return jsx(require("TextField.native.tsx") /* TextField */.TextField, { placeholder: null, returnKeyType: "search", ref: null });
});
const result = require("TextField").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;