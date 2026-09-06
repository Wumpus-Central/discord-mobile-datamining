// === Module 16609: VibegrationsSecretsSheet ===

// Module 16609 (VibegrationsSecretsSheet)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import rejectPendingPublish from "rejectPendingPublish" /* 16589 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ sendUserMessage: error, submitProjectSecrets: closure_8 } = rejectPendingPublish);
({ jsx: c9, jsxs: c10 } = jsxProd);
const VibegrationsSecretsSheet = "VibegrationsSecretsSheet";
let closure_12 = createCacheKey.createStyles((paddingBottom) => {
  let obj = { container: null, copyRow: null, copyInfo: null };
  obj = { gap: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { flex: 1, gap: ThemesDefault.space.PX_4 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretsSheet.tsx");

export default function VibegrationsSecretsSheet(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  importDefault = undefined;
  let first;
  let callback;
  let first1;
  let React;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let callback2;
  closure_10 = undefined;
  let found;
  let callback3;
  closure_13 = undefined;
  const tmp3 = callback3(importDefault(first[8])({ includeKeyboardHeight: true }).insets.bottom);
  importDefault = tmp3;
  const tmp4 = first1(React.useState({}), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const tmp6 = first1(React.useState(false), 2);
  first1 = tmp6[0];
  React = tmp6[1];
  const tmp8 = first1(React.useState(false), 2);
  closure_6 = tmp8[1];
  [c7, c8] = first1(React.useState(null), 2);
  callback2 = React.useCallback((arg0) => {
    closure_0 = arg0;
    projectId(first[9]).copy(arg0, () => closure_1_8(closure_0));
  }, []);
  closure_10 = React.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    callback2(false);
    callback((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const fields = request.fields;
  const mapped = fields.map((name) => name.name);
  found = mapped.filter((arg0) => {
    let str = first[arg0];
    if (str == null) {
      str = "";
    }
    return "" !== str.trim();
  });
  callback3 = tmp10;
  closure_13 = tmp11;
  let items = [found.length > 0, found, found.length < request.fields.length, projectId, first1, first];
  callback = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            if (closure_1_12) {
              if (!c4) {
                closure_1_5(true);
                closure_1_6(false);
                c3 = 2;
                obj1 = { secrets: null };
                const _Object = Object;
                obj1[0] = Object.fromEntries(closure_1_11.map((arg0) => {
                  const items = [arg0, tmp37[arg0].trim()];
                  return items;
                }));
                v0 = 3;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_8(closure_1_0, obj1);
                return obj2;
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_1_6(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_1_5(false);
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            const intl = closure_1_0(closure_1_2[10]).intl;
            const tmp55 = v0(closure_1_2[11]);
            if (closure_13) {
              let lM98yZ = tmp55.pu8e3p;
            } else {
              lM98yZ = tmp55.lM98yZ;
            }
            closure_1_7(closure_0, intl.string(lM98yZ));
            obj = v0(closure_1_2[12]);
            obj.hideActionSheet(closure_1_11);
            c3 = 1;
            const tmp47 = closure_1_7;
            const tmp48 = closure_0;
          }
          c3 = 0;
          closure_1_5(false);
        }
        c3 = 0;
        closure_1_5(false);
        throw closure_2;
      } catch (tmp37) {
        closure_2 = tmp37;
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp37;
        } else if (tmp2 === tmp39) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, header: null, children: null };
  obj = { title: null };
  let intl = projectId(first[10]).intl;
  obj[0] = intl.string(importDefault(first[11]).ACvhVC);
  obj[1] = callback2(projectId(first[14]).BottomSheetTitleHeader, obj);
  obj = { style: tmp3.container, children: null };
  let tmp13Result = null;
  if (null != request.note) {
    tmp13Result = null;
    if ("" !== request.note) {
      obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
      obj1[2] = request.note;
      tmp13Result = tmp13(tmp14(tmp2[15]).Text, obj1);
    }
  }
  let items1 = [tmp13Result, , , , , , ];
  let obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl2 = tmp14(tmp2[10]).intl;
  obj2[2] = intl2.string(importDefault(first[11]).p0Ay4J);
  items1[1] = callback2(projectId(first[15]).Text, obj2);
  tmp13Result = null;
  if (request.fields.length > 1) {
    let obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp14(tmp2[10]).intl;
    obj3[2] = intl3.string(tmp(tmp2[11]).LpnmXm);
    tmp13Result = tmp13(tmp14(tmp2[15]).Text, obj3);
  }
  items1[2] = tmp13Result;
  let copy_values = request.copy_values;
  if (copy_values == null) {
    copy_values = [];
  }
  items1[3] = copy_values.map((children) => {
    closure_0 = children;
    let obj = { style: closure_1.copyRow, children: null };
    obj = { style: closure_1.copyInfo, children: null };
    obj = { variant: "text-xs/semibold", color: "text-muted", children: children.label };
    const items = [callback3(projectId(first[15]).Text, obj), callback3(projectId(first[15]).Text, { variant: "text-xs/normal", color: "text-default", children: children.value })];
    obj[1] = items;
    const items1 = [callback4(closure_6, obj), ];
    const intl = projectId(first[10]).intl;
    if (c7 === children.value) {
      let OpuAlK = tmp4(tmp5[10]).t.t5VZ88;
    } else {
      OpuAlK = tmp4(tmp5[10]).t.OpuAlK;
    }
    items1[1] = callback3(projectId(first[16]).Button, {
      variant: "secondary",
      size: "sm",
      text: intl.string(OpuAlK),
      onPress() {
        return closure_1_9(value.value);
      }
    });
    obj[1] = items1;
    return callback4(closure_6, obj, children.label);
  });
  const fields1 = request.fields;
  items1[4] = fields1.map((label) => {
    closure_0 = label;
    const obj = { label: label.label, description: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
    let hint;
    if (null != label.hint) {
      if ("" !== label.hint) {
        hint = label.hint;
      }
    }
    obj[1] = hint;
    let str2 = first[label.name];
    if (str2 == null) {
      str2 = "";
    }
    obj[6] = str2;
    obj[7] = function onChange(arg0) {
      return closure_1_10(label.name, arg0);
    };
    obj[8] = first1;
    return closure_9(projectId(first[17]).TextInput, obj, label.name);
  });
  let tmp13Result1 = null;
  if (tmp8[0]) {
    const obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp14(tmp2[10]).intl;
    obj4[2] = intl4.string(tmp(tmp2[11])["4nT7Lo"]);
    tmp13Result1 = tmp13(tmp14(tmp2[15]).Text, obj4);
  }
  items1[5] = tmp13Result1;
  const obj5 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl5 = tmp14(tmp2[10]).intl;
  obj5[0] = intl5.string(importDefault(first[11])["8SWZaW"]);
  obj5[2] = first1;
  obj5[3] = found.length <= 0;
  obj5[4] = callback;
  items1[6] = callback2(projectId(first[16]).Button, obj5);
  obj[1] = items1;
  obj[2] = closure_10(closure_6, obj);
  return callback2(projectId(first[13]).ActionSheet, obj);
};
export const VIBEGRATIONS_SECRETS_SHEET_KEY = "VibegrationsSecretsSheet";