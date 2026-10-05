// === Module 5986: TermsField ===

// Module 5986 (TermsField)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import TermsFieldListDefault from "TermsFieldList" /* 5987 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 5990 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let field;
  let items;
  let onChange;
  let response;
  let rulesChannelId;
  let values;
  const obj = react2;
  const cResult = obj.c(11);
  ({ field, onChange, rulesChannelId } = arg0);
  const tmp4 = closure_6();
  ({ values, response } = field);
  if (response == null) {
    response = false;
  }
  if (cResult[0] === rulesChannelId) {
    let tmp6;
    let tmp9;
    if (cResult[1] === values) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t["2EXfGJ"]);
      cResult[3] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === response) {
      let tmp11;
      if (cResult[5] === onChange) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        if (cResult[8] === tmp6) {
          let tmp14;
          if (cResult[9] === tmp11) {
            tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      const obj2 = { style: tmp5, children: items };
      items = [tmp6, tmp11];
      const tmp17 = hasOwnProperty(View, obj2);
      cResult[7] = tmp4.container;
      cResult[8] = tmp6;
      cResult[9] = tmp11;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj3 = { start: true, end: true, checked: response, label: tmp9, onPress: onChange };
    const tmp13 = React3(TableCheckboxRow2.TableCheckboxRow, obj3);
    cResult[4] = response;
    cResult[5] = onChange;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const tmp7 = React3(TermsFieldListDefault, { rules: values, rulesChannelId });
  cResult[0] = rulesChannelId;
  cResult[1] = values;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((field) => {
  let intl;
  let items;
  let onChange;
  let rulesChannelId;
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  const obj = { style: closure_6().container, children: items };
  items = [React3(TermsFieldListDefault, { rules: field.values, rulesChannelId }), ];
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  if (flag == null) {
    flag = false;
  }
  const obj2 = { start: true, end: true, checked: flag, label: intl.string(intl2.t["2EXfGJ"]), onPress: onChange };
  intl = intl2.intl;
  items[1] = React3(TableCheckboxRow, obj2);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default tmp4;