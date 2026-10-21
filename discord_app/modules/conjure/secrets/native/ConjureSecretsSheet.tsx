// discord_app/modules/conjure/secrets/native/ConjureSecretsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const sendUserMessage = fn(10656).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4966);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom },
    copyRow: null,
    copyInfo: null,
    field: null,
  };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.copyRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.copyInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  const obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
  obj.field = { gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretsSheet.tsx");

export default function ConjureSecretsSheet(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  let first;
  noop = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  const tmp3 = c10(request(5575)({ includeKeyboardHeight: true }).insets.bottom);
  dependencyMap = tmp3;
  const ref = noop.useRef(null);
  const tmp5 = first(noop.useState({}), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const tmp7 = first(noop.useState(false), 2);
  const first1 = tmp7[0];
  closure_7 = tmp7[1];
  [tmp10, c8] = first(noop.useState(false), 2);
  const tmp9 = first(noop.useState(false), 2);
  [c9, c10] = first(noop.useState(null), 2);
  closure_11 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    projectId(closure_2[9]).copy(arg0, () => c10(closure_0));
  }, []);
  closure_12 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined(false);
    closure_5((arg0) => {
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
  closure_14 = tmp12;
  closure_15 = tmp13;
  let items = [found.length > 0, found, found.length < request.fields.length, projectId, , , ,];
  ({ over_mcp: arr4[4], request_id: arr4[5] } = request);
  items[6] = first1;
  items[7] = first;
  const callback = noop.useCallback(
    ref(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              projectId = tmp7;
              if (closure_14) {
                if (!first1) {
                  closure_7(true);
                  _undefined(false);
                  if (true === request.over_mcp) {
                    const result = projectId(tmp68[10]).markMcpSecretRequestSaved(request.request_id);
                    const obj3 = projectId(tmp68[10]);
                  }
                  c3 = 1;
                  let submitProjectSecretsResult = projectId;
                  const obj7 = { secrets: null };
                  const _Object = Object;
                  obj7.secrets = Object.fromEntries(
                    found.map((item) => {
                      const items = [item, closure_1_4[item].trim()];
                      return items;
                    }),
                  );
                  if (null != request.request_id) {
                    const obj8 = { request_id: request.request_id };
                    let obj9 = obj8;
                  } else {
                    obj9 = {};
                  }
                  const merged = Object.assign(obj9);
                  submitProjectSecretsResult = projectId(tmp68[11]).submitProjectSecrets(
                    submitProjectSecretsResult,
                    obj7,
                  );
                  c4 = 2;
                  c5 = 1;
                  const obj4 = projectId(tmp68[11]);
                }
              }
              c5 = 3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp68;
            const result1 = projectId(tmp68[10]).unmarkMcpSecretRequestSaved(closure_129_1.request_id);
            closure_129_7(false);
            if (closure_128_0 instanceof projectId(tmp68[11]).ConjureSecretRequestExpiredError) {
              if (true !== closure_129_1.over_mcp) {
                const intl2 = projectId(tmp68[12]).intl;
                closure_1_7(closure_129_0, intl2.string(tmp3(tmp68[13]).KVBvVy));
              }
              const current2 = closure_129_3.current;
              if (current2 != null) {
                current2.closeActionSheet();
              }
            } else {
              closure_129_8(true);
            }
            c5 = 3;
            const obj2 = projectId(tmp68[10]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
            if (true === closure_129_1.over_mcp) {
              const current = closure_129_3.current;
              if (current != null) {
                current.closeActionSheet();
              }
            } else {
              const intl = projectId(tmp68[12]).intl;
              const tmp17 = tmp3(tmp68[13]);
              if (closure_129_15) {
                let UGqnoV = tmp17.sMQt5O;
              } else {
                UGqnoV = tmp17.UGqnoV;
              }
              closure_1_7(closure_129_0, intl.string(UGqnoV));
            }
          }
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp68) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp68;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items,
  );
  let obj = { ref, startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj2 = { title: null };
  let intl = projectId(1128).intl;
  obj2.title = intl.string(request(3830).TuMGZp);
  obj.header = c8(projectId(7225).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp3.container, children: null };
  let tmp15Result = null;
  if (null != request.note) {
    tmp15Result = null;
    if ("" !== request.note) {
      let obj4 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp15Result = tmp15(tmp16(5216).Text, obj4);
    }
  }
  let items1 = [tmp15Result, , , , , ,];
  let obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
  let intl2 = tmp16(1128).intl;
  obj5.children = intl2.string(request(3830).jgDBJZ);
  items1[1] = c8(projectId(5216).Text, obj5);
  let tmp15Result3 = null;
  if (request.fields.length > 1) {
    let obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp16(1128).intl;
    obj6.children = intl3.string(tmp(3830)["La+pe4"]);
    tmp15Result3 = tmp15(tmp16(5216).Text, obj6);
  }
  items1[2] = tmp15Result3;
  let copy_values = request.copy_values;
  if (copy_values == null) {
    copy_values = [];
  }
  items1[3] = copy_values.map((children) => {
    value = children;
    const obj = { style: closure_2.copyRow, children: null };
    const obj2 = { style: closure_2.copyInfo, children: null };
    const items = [
      _undefined(projectId(closure_2[16]).Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: children.label,
      }),
      _undefined(projectId(closure_2[16]).Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: children.value,
      }),
    ];
    obj2.children = items;
    const items1 = [_undefined2(first1, obj2)];
    const intl = projectId(closure_2[12]).intl;
    if (_undefined2 === children.value) {
      let OpuAlK = projectId(closure_2[12]).t.t5VZ88;
    } else {
      OpuAlK = projectId(closure_2[12]).t.OpuAlK;
    }
    items1[1] = _undefined(projectId(closure_2[17]).Button, {
      variant: "secondary",
      size: "sm",
      text: intl.string(OpuAlK),
      onPress() {
        return closure_11(value.value);
      },
    });
    obj.children = items1;
    return _undefined2(first1, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    const obj = { style: closure_2.field, children: null };
    const obj2 = {
      label: label.label,
      description: null,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: null,
      onChange: null,
      disabled: null,
    };
    let hint;
    if (null != label.hint) {
      if ("" !== label.hint) {
        hint = label.hint;
      }
    }
    obj2.description = hint;
    let str2 = first[label.name];
    if (str2 == null) {
      str2 = "";
    }
    obj2.value = str2;
    obj2.onChange = function onChange(arg0) {
      return closure_12(label.name, arg0);
    };
    obj2.disabled = first1;
    const items = [_undefined(projectId(closure_2[18]).TextInput, obj2)];
    let hosts = label.hosts;
    if (hosts == null) {
      hosts = [];
    }
    let tmp3Result = null;
    if (hosts.length > 0) {
      const intl = projectId(closure_2[12]).intl;
      let hosts1 = label.hosts;
      if (hosts1 == null) {
        hosts1 = [];
      }
      const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const obj4 = { hosts: hosts1.join(", ") };
      obj3.children = intl.formatToPlainString(request(closure_2[13]).Ww9HFO, obj4);
      tmp3Result = _undefined(projectId(closure_2[16]).Text, obj3);
    }
    items[1] = tmp3Result;
    obj.children = items;
    return _undefined2(first1, obj, label.name);
  });
  let tmp15Result4 = null;
  if (tmp10) {
    let obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp16(1128).intl;
    obj7.children = intl4.string(tmp(3830).IrMuew);
    tmp15Result4 = tmp15(tmp16(5216).Text, obj7);
  }
  items1[5] = tmp15Result4;
  let obj8 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl5 = tmp16(1128).intl;
  obj8.text = intl5.string(request(3830).DUdtms);
  obj8.loading = first1;
  obj8.disabled = found.length <= 0;
  obj8.onPress = callback;
  items1[6] = c8(projectId(5226).Button, obj8);
  obj3.children = items1;
  obj.children = c9(first1, obj3);
  return c8(projectId(7275).ActionSheet, obj);
}
export const CONJURE_SECRETS_SHEET_KEY = "ConjureSecretsSheet";
