// === Module 16609: VibegrationsSecretsSheet ===

// Module 16609 (VibegrationsSecretsSheet)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(16589);
({ sendUserMessage: closure_7, submitProjectSecrets: closure_8 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const VibegrationsSecretsSheet = "VibegrationsSecretsSheet";
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((paddingBottom) => {
  let obj = { container: null, copyRow: null, copyInfo: null };
  obj = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.container = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.copyRow = obj;
  obj.copyInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretsSheet.tsx");

export default function VibegrationsSecretsSheet(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  importDefault = undefined;
  let first;
  let first1;
  noop = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  const tmp3 = closure_12(require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom);
  importDefault = tmp3;
  const tmp4 = first1(noop.useState({}), 2);
  first = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  const tmp6 = first1(noop.useState(false), 2);
  first1 = tmp6[0];
  noop = tmp6[1];
  const tmp8 = first1(noop.useState(false), 2);
  closure_6 = tmp8[1];
  [c7, c8] = first1(noop.useState(null), 2);
  closure_9 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    projectId(first[9]).copy(arg0, () => c8(closure_0));
  }, []);
  closure_10 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6(false);
    closure_3((arg0) => {
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
  closure_12 = tmp10;
  closure_13 = tmp11;
  let items = [found.length > 0, found, found.length < request.fields.length, projectId, first1, first];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (closure_12) {
              if (!first1) {
                closure_5(true);
                closure_6(false);
                c3 = 2;
                const obj1 = { secrets: null };
                const _Object = Object;
                obj1.secrets = Object.fromEntries(found.map((item) => {
                  const items = [item, closure_1_2[item].trim()];
                  return items;
                }));
                v3 = 3;
                c4 = 1;
                const obj2 = { value: _undefined2(projectId, obj1), done: false };
                return obj2;
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_6(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const intl = tmp4(tmp37[10]).intl;
            const tmp54 = v3(tmp37[11]);
            if (closure_128_13) {
              let lM98yZ = tmp54.pu8e3p;
            } else {
              lM98yZ = tmp54.lM98yZ;
            }
            _undefined(closure_128_0, intl.string(lM98yZ));
            obj = v3(tmp37[12]);
            obj.hideActionSheet(closure_1_11);
            c3 = 1;
          }
          c3 = 0;
          closure_128_5(false);
        }
        c3 = 0;
        closure_128_5(false);
        throw tmp37;
      } catch (tmp37) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp37;
        } else if (tmp2 === tmp39) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, header: null, children: null };
  obj = { title: null };
  let intl = projectId(first[10]).intl;
  obj.title = intl.string(require("module_3547").ACvhVC);
  obj.header = closure_9(projectId(first[14]).BottomSheetTitleHeader, obj);
  obj = { style: tmp3.container, children: null };
  let tmp13Result = null;
  if (null != request.note) {
    tmp13Result = null;
    if ("" !== request.note) {
      let obj1 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp13Result = tmp13(tmp14(tmp2[15]).Text, obj1);
    }
  }
  let items1 = [tmp13Result, , , , , , ];
  let obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp14(tmp2[10]).intl;
  obj2.children = intl2.string(require("module_3547").p0Ay4J);
  items1[1] = closure_9(projectId(first[15]).Text, obj2);
  tmp13Result = null;
  if (request.fields.length > 1) {
    let obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp14(tmp2[10]).intl;
    obj3.children = intl3.string(tmp(tmp2[11]).LpnmXm);
    tmp13Result = tmp13(tmp14(tmp2[15]).Text, obj3);
  }
  items1[2] = tmp13Result;
  let copy_values = request.copy_values;
  if (copy_values == null) {
    copy_values = [];
  }
  items1[3] = copy_values.map((children) => {
    value = children;
    let obj = { style: closure_1.copyRow, children: null };
    obj = { style: closure_1.copyInfo, children: null };
    obj = { variant: "text-xs/semibold", color: "text-muted", children: children.label };
    const items = [closure_9(projectId(first[15]).Text, obj), closure_9(projectId(first[15]).Text, { variant: "text-xs/normal", color: "text-default", children: children.value })];
    obj.children = items;
    const items1 = [closure_10(closure_6, obj), ];
    const intl = projectId(first[10]).intl;
    if (c7 === children.value) {
      let OpuAlK = projectId(first[10]).t.t5VZ88;
    } else {
      OpuAlK = projectId(first[10]).t.OpuAlK;
    }
    items1[1] = closure_9(projectId(first[16]).Button, {
      variant: "secondary",
      size: "sm",
      text: intl.string(OpuAlK),
      onPress() {
        return closure_9(value.value);
      }
    });
    obj.children = items1;
    return closure_10(closure_6, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    const obj = { label: label.label, description: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
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
      return closure_10(label.name, arg0);
    };
    obj.isDisabled = first1;
    return closure_9(projectId(first[17]).TextInput, obj, label.name);
  });
  let tmp13Result1 = null;
  if (tmp8[0]) {
    const obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp14(tmp2[10]).intl;
    obj4.children = intl4.string(tmp(tmp2[11])["4nT7Lo"]);
    tmp13Result1 = tmp13(tmp14(tmp2[15]).Text, obj4);
  }
  items1[5] = tmp13Result1;
  const obj5 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl5 = tmp14(tmp2[10]).intl;
  obj5.text = intl5.string(require("module_3547")["8SWZaW"]);
  obj5.loading = first1;
  obj5.disabled = found.length <= 0;
  obj5.onPress = callback;
  items1[6] = closure_9(projectId(first[16]).Button, obj5);
  obj.children = items1;
  obj.children = closure_10(closure_6, obj);
  return closure_9(projectId(first[13]).ActionSheet, obj);
};
export const VIBEGRATIONS_SECRETS_SHEET_KEY = "VibegrationsSecretsSheet";