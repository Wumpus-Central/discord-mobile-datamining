// === Module 6177: TermsField ===

// Module 6177 (TermsField)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import TermsFieldListDefault from "TermsFieldList" /* 6178 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6181 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TermsField(arg0) {
  const cResult = c.c(11);
  ({ field, onChange, rulesChannelId } = arg0);
  const tmp4 = closure_6();
  ({ values, response } = field);
  if (response == null) {
    response = false;
  }
  if (cResult[0] === rulesChannelId) {
    if (cResult[1] === values) {
      let tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["2EXfGJ"]);
      cResult[3] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === response) {
      if (cResult[5] === onChange) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp11) {
            let tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      const obj2 = { style: tmp5, children: null };
      const items = [tmp6, tmp11];
      obj2.children = items;
      const tmp17 = hasOwnProperty(View, obj2);
      cResult[7] = tmp4.container;
      cResult[8] = tmp6;
      cResult[9] = tmp11;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj3 = { start: true, end: true, checked: response, label: tmp9, onPress: onChange };
    const tmp13 = React4(TableCheckboxRow.TableCheckboxRow, obj3);
    cResult[4] = response;
    cResult[5] = onChange;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const tmp7 = React4(TermsFieldListDefault, { rules: values, rulesChannelId });
  cResult[0] = rulesChannelId;
  cResult[1] = values;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function TermsField(field) {
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  const obj = { style: closure_6().container, children: null };
  const items = [React4(TermsFieldListDefault, { rules: field.values, rulesChannelId }), ];
  if (flag == null) {
    flag = false;
  }
  const obj2 = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["2EXfGJ"]);
  obj2.onPress = onChange;
  items[1] = React4(TableCheckboxRow.TableCheckboxRow, obj2);
  obj.children = items;
  return hasOwnProperty(View, obj);
});