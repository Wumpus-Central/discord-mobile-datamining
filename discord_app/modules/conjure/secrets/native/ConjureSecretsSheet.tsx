// === Module 17179: ConjureSecretsSheet ===

// Module 17179 (ConjureSecretsSheet)
import nativeDefault from "native" /* 587 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(13164);
({ sendUserMessage: closure_7, submitProjectSecrets: closure_8 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, copyRow: null, copyInfo: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.copyRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.copyInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSecretsSheet(projectId) {
  const cResult = projectId(ref[9]).c(56);
  projectId = projectId.projectId;
  const request = projectId.request;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = projectId(ref[9]);
  importDefault = closure_11(require("useSafeAreaInsetsKeyboardAware")(first).insets.bottom);
  ref = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    let tmp6 = obj4;
  } else {
    tmp6 = cResult[1];
  }
  [first1, _slicedToArray] = noop.useState(tmp6);
  [noop, closure_6] = noop.useState(false);
  const tmp4 = closure_11(require("useSafeAreaInsetsKeyboardAware")(first).insets.bottom);
  [r10055, closure_7] = noop.useState(false);
  [closure_8, closure_9] = noop.useState(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function j(arg0) {
      closure_0 = arg0;
      projectId(ref[11]).copy(arg0, () => closure_9(closure_0));
    };
    cResult[2] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  closure_10 = tmp12;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0, arg1) {
        closure_0 = projectId;
        closure_1 = arg1;
        tmp = closure_7(false);
        tmp2 = closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0] = closure_1;
          return obj;
        });
        return;
      }
    }
    cResult[3] = V;
  } else {
    class V {
      constructor(arg0, arg1) {
        closure_0 = projectId;
        closure_1 = arg1;
        tmp = closure_7(false);
        tmp2 = closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0] = closure_1;
          return obj;
        });
        return;
      }
    }
  }
  closure_11 = V;
  if (cResult[4] === request.fields) {
    class V {
      constructor(arg0, arg1) {
        closure_0 = projectId;
        closure_1 = arg1;
        tmp = closure_7(false);
        tmp2 = closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0] = closure_1;
          return obj;
        });
        return;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0) {
        return projectId.name;
      }
    }
    cResult[7] = X;
  } else {
    class X {
      constructor(arg0) {
        return projectId.name;
      }
    }
  }
  if (cResult[8] !== first1) {
    class J {
      constructor(arg0) {
        str = closure_3[projectId];
        if (str == null) {
          str = "";
        }
        return "" !== str.trim();
      }
    }
    cResult[8] = first1;
    cResult[9] = J;
  } else {
    class J {
      constructor(arg0) {
        str = closure_3[projectId];
        if (str == null) {
          str = "";
        }
        return "" !== str.trim();
      }
    }
  }
  const fields = request.fields;
  const mapped = fields.map(X);
  const found = mapped.filter(J);
  cResult[4] = request.fields;
  cResult[5] = first1;
  cResult[6] = found;
  const tmp10 = _slicedToArray(noop.useState(false), 2);
}) : (function ConjureSecretsSheet(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  importDefault = undefined;
  let ref;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_11 = undefined;
  const tmp3 = closure_11(require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom);
  importDefault = tmp3;
  ref = first1.useRef(null);
  [first, _slicedToArray] = first1.useState({});
  [first1, closure_6] = first1.useState(false);
  [tmp10, c7] = first1.useState(false);
  const tmp9 = _slicedToArray(first1.useState(false), 2);
  [c8, c9] = first1.useState(null);
  closure_10 = first1.useCallback((arg0) => {
    closure_0 = arg0;
    projectId(ref[11]).copy(arg0, () => c9(closure_0));
  }, []);
  closure_11 = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined(false);
    closure_4((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const fields = request.fields;
  const mapped = fields.map((name) => name.name);
  const found = mapped.filter((item) => {
    let str = first[item];
    if (str == null) {
      str = "";
    }
    return "" !== str.trim();
  });
  closure_13 = tmp12;
  closure_14 = tmp13;
  let items = [found.length > 0, found, found.length < request.fields.length, projectId, first1, first];
  const callback = first1.useCallback(first(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (closure_13) {
              if (!first1) {
                closure_6(true);
                _undefined(false);
                dependencyMap = 1;
                const obj4 = { secrets: null };
                const _Object = Object;
                obj4.secrets = Object.fromEntries(found.map((item) => {
                  const items = [item, closure_1_3[item].trim()];
                  return items;
                }));
                v2 = 2;
                c3 = 1;
                const obj5 = { value: _undefined2(projectId, obj4), done: false };
                return obj5;
              }
            }
            c3 = 3;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          closure_128_7(true);
          closure_128_6(false);
          c3 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          dependencyMap = 0;
          const intl = tmp3(1126).intl;
          const tmp41 = v2(3827);
          if (closure_128_14) {
            let UGqnoV = tmp41.sMQt5O;
          } else {
            UGqnoV = tmp41.UGqnoV;
          }
          _undefined(closure_128_0, intl.string(UGqnoV));
          const current = closure_128_2.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }
        dependencyMap = 0;
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp24) {
        if (tmp4 === dependencyMap) {
          c3 = tmp2;
          throw tmp24;
        } else {
          v2 = tmp;
        }
      }
    }
  }), items);
  let obj = { ref, startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj2 = { title: null };
  let intl = projectId(ref[12]).intl;
  obj2.title = intl.string(require("module_3827").TuMGZp);
  obj.header = c9(projectId(ref[14]).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp3.container, children: null };
  let tmp15Result = null;
  if (null != request.note) {
    tmp15Result = null;
    if ("" !== request.note) {
      let obj4 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp15Result = tmp15(tmp16(tmp2[15]).Text, obj4);
    }
  }
  let items1 = [tmp15Result, , , , , , ];
  let obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp16(tmp2[12]).intl;
  obj5.children = intl2.string(require("module_3827").jgDBJZ);
  items1[1] = c9(projectId(ref[15]).Text, obj5);
  let tmp15Result3 = null;
  if (request.fields.length > 1) {
    let obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp16(tmp2[12]).intl;
    obj6.children = intl3.string(tmp(tmp2[13])["La+pe4"]);
    tmp15Result3 = tmp15(tmp16(tmp2[15]).Text, obj6);
  }
  items1[2] = tmp15Result3;
  let copy_values = request.copy_values;
  if (copy_values == null) {
    copy_values = [];
  }
  items1[3] = copy_values.map((children) => {
    value = children;
    const obj = { style: closure_1.copyRow, children: null };
    const obj2 = { style: closure_1.copyInfo, children: null };
    const items = [_undefined2(projectId(ref[15]).Text, { variant: "text-xs/semibold", color: "text-muted", children: children.label }), _undefined2(projectId(ref[15]).Text, { variant: "text-xs/normal", color: "text-default", children: children.value })];
    obj2.children = items;
    const items1 = [closure_10(closure_6, obj2), ];
    const intl = projectId(ref[12]).intl;
    if (c8 === children.value) {
      let OpuAlK = projectId(ref[12]).t.t5VZ88;
    } else {
      OpuAlK = projectId(ref[12]).t.OpuAlK;
    }
    items1[1] = _undefined2(projectId(ref[16]).Button, {
      variant: "secondary",
      size: "sm",
      text: intl.string(OpuAlK),
      onPress() {
        return closure_10(value.value);
      }
    });
    obj.children = items1;
    return closure_10(closure_6, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    const obj = { label: label.label, description: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, disabled: null };
    let hint;
    if (null != label.hint) {
      if ("" !== label.hint) {
        hint = label.hint;
      }
    }
    obj.description = hint;
    let str2 = first[label.name];
    if (str2 == null) {
      str2 = "";
    }
    obj.value = str2;
    obj.onChange = function onChange(arg0) {
      return closure_11(label.name, arg0);
    };
    obj.disabled = first1;
    return _undefined2(projectId(ref[17]).TextInput, obj, label.name);
  });
  let tmp15Result4 = null;
  if (tmp10) {
    const obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp16(tmp2[12]).intl;
    obj7.children = intl4.string(tmp(tmp2[13]).IrMuew);
    tmp15Result4 = tmp15(tmp16(tmp2[15]).Text, obj7);
  }
  items1[5] = tmp15Result4;
  const obj8 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl5 = tmp16(tmp2[12]).intl;
  obj8.text = intl5.string(require("module_3827").DUdtms);
  obj8.loading = first1;
  obj8.disabled = found.length <= 0;
  obj8.onPress = callback;
  items1[6] = c9(projectId(ref[16]).Button, obj8);
  obj3.children = items1;
  obj.children = closure_10(closure_6, obj3);
  return c9(projectId(ref[18]).ActionSheet, obj);
});
export const CONJURE_SECRETS_SHEET_KEY = "ConjureSecretsSheet";