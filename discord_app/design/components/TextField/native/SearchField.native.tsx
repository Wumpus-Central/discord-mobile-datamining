// discord_app/design/components/TextField/native/SearchField.native.tsx
import util from "../../../../intl/index.native.tsx";
import TextField from "TextField.native.tsx";
import MagnifyingGlassIcon from "../../Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = noop.forwardRef((arg0, ref) => {
  const obj = { placeholder: null, returnKeyType: "search", ref: null };
  const intl = util.intl;
  obj.placeholder = intl.string(util.t["5h0QOP"]);
  obj.ref = ref;
  const merged = Object.assign(arg0);
  obj.autoCorrect = false;
  obj.autoCapitalize = "none";
  obj.accessibilityRole = "search";
  obj.leadingIcon = MagnifyingGlassIcon.MagnifyingGlassIcon;
  obj.isClearable = true;
  return jsx(TextField.TextField, { placeholder: null, returnKeyType: "search", ref: null });
});
