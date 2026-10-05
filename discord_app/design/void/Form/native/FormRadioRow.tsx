// discord_app/design/void/Form/native/FormRadioRow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react_native from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import TableRadioRow2 from "../../../components/TableRow/native/TableRadioRow.native.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import Form_FormRadioDefault from "FormRadio.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_3 = ["selected", "align", "leading", "value", "onPress", "style"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityRole;
      let accessibilityState;
      let align;
      let leading;
      let onPress;
      let selected;
      let style;
      let tmp10;
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let value;
      const obj = react2;
      const cResult = obj.c(31);
      if (cResult[0] !== arg0) {
        ({ selected, align, leading, value, onPress, style } = arg0);
        const tmp13 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = leading;
        cResult[2] = onPress;
        cResult[3] = tmp13;
        cResult[4] = selected;
        cResult[5] = style;
        cResult[6] = align;
        cResult[7] = value;
        tmp10 = value;
        tmp9 = align;
        tmp8 = style;
        tmp7 = selected;
        tmp6 = tmp13;
        tmp5 = onPress;
        tmp4 = leading;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      let str = "left";
      if (undefined !== tmp9) {
        str = tmp9;
      }
      const context = react.useContext(RedesignCompat.RedesignCompatContext);
      if (cResult[8] !== tmp7) {
        const obj2 = { selected: tmp7 };
        cResult[8] = tmp7;
        cResult[9] = obj2;
        tmp15 = obj2;
      } else {
        tmp15 = cResult[9];
      }
      const tmpResult = react_native;
      const radioA11yNative = tmpResult.useRadioA11yNative(tmp15);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      if (context) {
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp4) {
                let tmp33;
                if (cResult[14] === tmp10) {
                  tmp33 = cResult[15];
                }
                return tmp33;
              }
            }
          }
        }
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        const merged = Object.assign(tmp6);
        const tmp38 = (
          <TableRadioRow icon={tmp4} value={tmp10} legacyCompat_selected={tmp7} legacyCompat_onPress={tmp5} />
        );
        cResult[10] = tmp5;
        cResult[11] = tmp6;
        cResult[12] = tmp7;
        cResult[13] = tmp4;
        cResult[14] = tmp10;
        cResult[15] = tmp38;
        tmp33 = tmp38;
      } else {
        if (cResult[16] === str) {
          let tmp17;
          if (cResult[17] === tmp7) {
            tmp17 = cResult[18];
          }
          if (cResult[19] === str) {
            if (cResult[20] === tmp4) {
              let tmp21;
              if (cResult[21] === tmp7) {
                tmp21 = cResult[22];
              }
              if (cResult[23] === accessibilityRole) {
                if (cResult[24] === accessibilityState) {
                  if (cResult[25] === tmp5) {
                    if (cResult[26] === tmp6) {
                      if (cResult[27] === tmp8) {
                        if (cResult[28] === tmp17) {
                          let tmp25;
                          if (cResult[29] === tmp21) {
                            tmp25 = cResult[30];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                }
              }
              FormRowDefault;
              const merged1 = Object.assign(tmp6);
              const tmp32 = (
                <tmp28
                  style={tmp8}
                  onPress={tmp5}
                  accessibilityRole={accessibilityRole}
                  accessibilityState={accessibilityState}
                  trailing={tmp17}
                  leading={tmp21}
                />
              );
              cResult[23] = accessibilityRole;
              cResult[24] = accessibilityState;
              cResult[25] = tmp5;
              cResult[26] = tmp6;
              cResult[27] = tmp8;
              cResult[28] = tmp17;
              cResult[29] = tmp21;
              cResult[30] = tmp32;
              tmp25 = tmp32;
            }
          }
          let tmp22 = tmp4;
          if ("left" === str) {
            tmp22 = jsx(Form_FormRadioDefault, { selected: tmp7 });
          }
          cResult[19] = str;
          cResult[20] = tmp4;
          cResult[21] = tmp7;
          cResult[22] = tmp22;
          tmp21 = tmp22;
        }
        let tmp18 = null;
        if ("right" === str) {
          tmp18 = jsx(Form_FormRadioDefault, { selected: tmp7 });
        }
        cResult[16] = str;
        cResult[17] = tmp7;
        cResult[18] = tmp18;
        tmp17 = tmp18;
      }
    }
  : (arg0) => {
      let align;
      let leading;
      let onPress;
      let selected;
      let style;
      let tmp8Result;
      let value;
      ({ selected, align } = arg0);
      if (align === undefined) {
        align = "left";
      }
      ({ leading, onPress } = arg0);
      ({ value, style } = arg0);
      const merged = Object.assign(
        arg0,
        Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }),
      );
      const context = react.useContext(RedesignCompat.RedesignCompatContext);
      const obj = react_native;
      const radioA11yNative = obj.useRadioA11yNative({ selected });
      if (context) {
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        const merged1 = Object.assign(merged);
        tmp8Result = (
          <TableRadioRow icon={leading} value={value} legacyCompat_selected={selected} legacyCompat_onPress={onPress} />
        );
      } else {
        FormRowDefault;
        const merged2 = Object.assign(merged);
        let tmp8Result3 = null;
        if ("right" === align) {
          tmp8Result3 = jsx(Form_FormRadioDefault, { selected });
        }
        let tmp8Result4 = leading;
        if ("left" === align) {
          tmp8Result4 = jsx(Form_FormRadioDefault, { selected });
        }
        tmp8Result = (
          <tmp10
            style={style}
            onPress={onPress}
            accessibilityRole={tmp6}
            accessibilityState={tmp7}
            trailing={tmp8Result3}
            leading={tmp8Result4}
          />
        );
      }
      return tmp8Result;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default tmp2;
