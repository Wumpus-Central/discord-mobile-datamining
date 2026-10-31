// === Module 7218: Search/SearchBar ===

// Module 7218 (Search/SearchBar)
import util from "util" /* 1113 */;
import TextField from "TextField" /* 7089 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7219 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Search/native/SearchBar.native.tsx");

export function SearchBar(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { placeholder: null, returnKeyType: "search", ref: null };
  const intl = util.intl;
  obj.placeholder = intl.string(util.t["5h0QOP"]);
  obj.ref = ref.ref;
  const merged1 = Object.assign(merged);
  obj.autoCorrect = false;
  obj.autoCapitalize = "none";
  obj.accessibilityRole = "search";
  obj.leadingIcon = MagnifyingGlassIcon.MagnifyingGlassIcon;
  obj.clearable = true;
  return jsx(TextField.TextField, { placeholder: null, returnKeyType: "search", ref: null });
}