// discord_app/design/components/Search/native/SearchBar.native.tsx
import util from "../../../../intl/index.native.tsx";
import TextField from "../../TextField/native/TextField.native.tsx";
import MagnifyingGlassIcon from "../../Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
