// discord_app/modules/vibegrations/native/VibegrationsSecretsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(16725);
({ sendUserMessage: closure_7, submitProjectSecrets: closure_8 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const VibegrationsSecretsSheet = "VibegrationsSecretsSheet";
const createStyles = fn(4638);
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom },
    copyRow: null,
    copyInfo: null,
  };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.copyRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
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
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (closure_12) {
                if (!first1) {
                  closure_5(true);
                  closure_6(false);
                  c3 = 2;
                  const obj4 = { secrets: null };
                  const _Object = Object;
                  obj4.secrets = Object.fromEntries(
                    found.map((item) => {
                      const items = [item, closure_1_2[item].trim()];
                      return items;
                    }),
                  );
                  v3 = 3;
                  c4 = 1;
                  const obj5 = { value: _undefined2(projectId, obj4), done: false };
                  return obj5;
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
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const intl = tmp4(tmp37[10]).intl;
              const tmp54 = v3(tmp37[11]);
              if (closure_128_13) {
                let lM98yZ = tmp54.pu8e3p;
              } else {
                lM98yZ = tmp54.lM98yZ;
              }
              _undefined(closure_128_0, intl.string(lM98yZ));
              v3(tmp37[12]).hideActionSheet(closure_1_11);
              c3 = 1;
              const obj = v3(tmp37[12]);
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
    }),
    items,
  );
  let obj = { startExpanded: true, header: null, children: null };
  let obj2 = { title: null };
  let intl = projectId(first[10]).intl;
  obj2.title = intl.string(require("../intl/VibegrationsUntranslated.messages.js").ACvhVC);
  obj.header = closure_9(projectId(first[14]).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp3.container, children: null };
  let tmp13Result = null;
  if (null != request.note) {
    tmp13Result = null;
    if ("" !== request.note) {
      let obj4 = { variant: "text-sm/normal", color: "text-default", children: request.note };
      tmp13Result = tmp13(tmp14(tmp2[15]).Text, obj4);
    }
  }
  let items1 = [tmp13Result, , , , , ,];
  let obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp14(tmp2[10]).intl;
  obj5.children = intl2.string(require("../intl/VibegrationsUntranslated.messages.js").p0Ay4J);
  items1[1] = closure_9(projectId(first[15]).Text, obj5);
  let tmp13Result3 = null;
  if (request.fields.length > 1) {
    let obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp14(tmp2[10]).intl;
    obj6.children = intl3.string(tmp(tmp2[11]).LpnmXm);
    tmp13Result3 = tmp13(tmp14(tmp2[15]).Text, obj6);
  }
  items1[2] = tmp13Result3;
  let copy_values = request.copy_values;
  if (copy_values == null) {
    copy_values = [];
  }
  items1[3] = copy_values.map((children) => {
    value = children;
    const obj = { style: closure_1.copyRow, children: null };
    const obj2 = { style: closure_1.copyInfo, children: null };
    const items = [
      closure_9(projectId(first[15]).Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: children.label,
      }),
      closure_9(projectId(first[15]).Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: children.value,
      }),
    ];
    obj2.children = items;
    const items1 = [closure_10(closure_6, obj2)];
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
      },
    });
    obj.children = items1;
    return closure_10(closure_6, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    const obj = {
      label: label.label,
      description: null,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: null,
      onChange: null,
      isDisabled: null,
    };
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
  let tmp13Result4 = null;
  if (tmp8[0]) {
    const obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp14(tmp2[10]).intl;
    obj7.children = intl4.string(tmp(tmp2[11])["4nT7Lo"]);
    tmp13Result4 = tmp13(tmp14(tmp2[15]).Text, obj7);
  }
  items1[5] = tmp13Result4;
  const obj8 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl5 = tmp14(tmp2[10]).intl;
  obj8.text = intl5.string(require("../intl/VibegrationsUntranslated.messages.js")["8SWZaW"]);
  obj8.loading = first1;
  obj8.disabled = found.length <= 0;
  obj8.onPress = callback;
  items1[6] = closure_9(projectId(first[16]).Button, obj8);
  obj3.children = items1;
  obj.children = closure_10(closure_6, obj3);
  return closure_9(projectId(first[13]).ActionSheet, obj);
}
export const VIBEGRATIONS_SECRETS_SHEET_KEY = "VibegrationsSecretsSheet";
