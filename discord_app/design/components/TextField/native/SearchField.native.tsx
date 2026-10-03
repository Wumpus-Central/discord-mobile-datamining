// === Module 6547: SearchField ===

// Module 6547 (SearchField)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import TextField from "TextField" /* 6100 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6548 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["5h0QOP"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === ref) {
      let tmp6 = cResult[3];
    }
    return tmp6;
  }
  const obj2 = { placeholder: first, returnKeyType: "search", ref };
  const merged = Object.assign(arg0);
  obj2.autoCorrect = false;
  obj2.autoCapitalize = "none";
  obj2.accessibilityRole = "search";
  obj2.leadingIcon = MagnifyingGlassIcon.MagnifyingGlassIcon;
  obj2.clearable = true;
  const tmp8 = jsx(TextField.TextField, { placeholder: first, returnKeyType: "search", ref });
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : ((arg0, ref) => {
  const obj = { placeholder: null, returnKeyType: "search", ref: null };
  const intl = util.intl;
  obj.placeholder = intl.string(util.t["5h0QOP"]);
  obj.ref = ref;
  const merged = Object.assign(arg0);
  obj.autoCorrect = false;
  obj.autoCapitalize = "none";
  obj.accessibilityRole = "search";
  obj.leadingIcon = MagnifyingGlassIcon.MagnifyingGlassIcon;
  obj.clearable = true;
  return jsx(TextField.TextField, { placeholder: null, returnKeyType: "search", ref: null });
}));