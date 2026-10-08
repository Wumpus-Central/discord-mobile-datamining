// === Module 6730: SearchField ===

// Module 6730 (SearchField)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import TextField from "TextField" /* 6287 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6731 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchField(ref) {
  const cResult = c.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["5h0QOP"]);
    cResult[3] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp5) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const obj2 = { placeholder: tmp9, returnKeyType: "search", ref: tmp5 };
  const merged = Object.assign(tmp4);
  obj2.autoCorrect = false;
  obj2.autoCapitalize = "none";
  obj2.accessibilityRole = "search";
  obj2.leadingIcon = MagnifyingGlassIcon.MagnifyingGlassIcon;
  obj2.clearable = true;
  const tmp13 = jsx(TextField.TextField, { placeholder: tmp9, returnKeyType: "search", ref: tmp5 });
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
}) : (function SearchField(ref) {
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
});