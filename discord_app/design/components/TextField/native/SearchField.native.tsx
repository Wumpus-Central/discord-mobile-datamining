// === Module 7102: SearchField ===

// Module 7102 (SearchField)
import util from "util" /* 1114 */;
import TextField from "TextField" /* 6663 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7103 */;
import noop from "module_19" /* 19 */;

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