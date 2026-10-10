// discord_app/design/components/TableRow/native/TableSwitchRow.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native from "../../../utils/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import TableRow from "TableRow.native.tsx";
import FormSwitch from "../../Forms/native/FormSwitch.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["value", "onValueChange", "label", "subLabel", "trailing", "disabled", "accessibilityHint", "variant"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles(() => ({
  labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 },
}));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = ReactCompilerGating.isReactCompilerEnabled()
  ? function TableSwitchRow(value) {
      const cResult = c.c(47);
      if (cResult[0] !== value) {
        value = value.value;
        closure_1 = value;
        const onValueChange = value.onValueChange;
        closure_0 = onValueChange;
        ({ label, subLabel, trailing, disabled, accessibilityHint, variant } = value);
        const tmp15 = _objectWithoutProperties(value, closure_2);
        cResult[0] = value;
        cResult[1] = accessibilityHint;
        cResult[2] = label;
        cResult[3] = onValueChange;
        cResult[4] = tmp15;
        cResult[5] = subLabel;
        cResult[6] = disabled;
        cResult[7] = trailing;
        cResult[8] = value;
        cResult[9] = variant;
        let tmp12 = variant;
        let tmp10 = trailing;
        let tmp8 = subLabel;
        let tmp7 = tmp15;
        let tmp5 = label;
        let tmp4 = accessibilityHint;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        closure_0 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp10 = cResult[7];
        closure_1 = cResult[8];
        tmp12 = cResult[9];
      }
      const tmp17 = closure_9();
      PlatformUtils;
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp11) {
          let tmp20 = cResult[12];
        }
        if (cResult[13] !== tmp5) {
          const nodeText = native.getNodeText(tmp5);
          cResult[13] = tmp5;
          cResult[14] = nodeText;
          let tmp21 = nodeText;
          const tmpResult3 = native;
        } else {
          tmp21 = cResult[14];
        }
        if (cResult[15] !== tmp8) {
          const nodeText1 = native.getNodeText(tmp8);
          cResult[15] = tmp8;
          cResult[16] = nodeText1;
          let str = nodeText1;
          const tmpResult4 = native;
        } else {
          str = cResult[16];
        }
        [tmp26, closure_2] = noop.useState(tmp11);
        if (cResult[17] !== tmp11) {
          const fn = function k() {
            closure_1_2(closure_1);
          };
          const items = [tmp11];
          cResult[17] = tmp11;
          cResult[18] = fn;
          cResult[19] = items;
          let tmp28 = items;
          let tmp27 = fn;
        } else {
          tmp27 = cResult[18];
          tmp28 = cResult[19];
        }
        const effect = noop.useEffect(tmp27, tmp28);
        if (cResult[20] === tmp6) {
          if (cResult[21] === tmp11) {
            let tmp30 = cResult[22];
          }
          if (cResult[23] === tmp5) {
            if (cResult[24] === tmp17) {
              if (cResult[25] === tmp10) {
                if (cResult[26] === tmp12) {
                  let tmp31 = cResult[27];
                }
                if (cResult[28] === tmp26) {
                  if (cResult[29] === tmp16) {
                    let tmp36 = cResult[30];
                  }
                  if (str == null) {
                    str = "";
                  }
                  const _HermesInternal = HermesInternal;
                  const combined = "" + tmp21 + ", " + str;
                  if (cResult[31] === tmp16) {
                    if (cResult[32] === tmp20) {
                      if (cResult[33] === tmp11) {
                        let tmp41 = cResult[34];
                      }
                      if (cResult[35] === tmp4) {
                        if (cResult[36] === tmp16) {
                          if (cResult[37] === tmp30) {
                            if (cResult[38] === tmp7) {
                              if (cResult[39] === tmp8) {
                                if (cResult[40] === combined) {
                                  if (cResult[41] === tmp40) {
                                    if (cResult[42] === tmp41) {
                                      if (cResult[43] === tmp31) {
                                        if (cResult[44] === tmp36) {
                                          if (cResult[45] === tmp12) {
                                            let tmp44 = cResult[46];
                                          }
                                          return tmp44;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj2 = {};
                      const merged = Object.assign(tmp7);
                      obj2.variant = tmp12;
                      obj2.arrow = false;
                      obj2.label = tmp31;
                      obj2.subLabel = tmp8;
                      obj2.disabled = tmp16;
                      obj2.accessibilityState = tmp36;
                      obj2.accessible = true;
                      obj2.accessibilityRole = "switch";
                      obj2.accessibilityLabel = combined;
                      obj2.accessibilityHint = tmp4;
                      obj2.onPress = tmp40;
                      obj2.onAccessibilityTap = tmp30;
                      obj2.trailing = tmp41;
                      const tmp49 = React5(TableRow.TableRow, obj2);
                      cResult[35] = tmp4;
                      cResult[36] = tmp16;
                      cResult[37] = tmp30;
                      cResult[38] = tmp7;
                      cResult[39] = tmp8;
                      cResult[40] = combined;
                      cResult[41] = tmp40;
                      cResult[42] = tmp41;
                      cResult[43] = tmp31;
                      cResult[44] = tmp36;
                      cResult[45] = tmp12;
                      cResult[46] = tmp49;
                      tmp44 = tmp49;
                    }
                  }
                  const obj3 = { "aria-hidden": true, value: tmp11, onValueChange: tmp20, disabled: tmp16 };
                  const tmp43 = React5(FormSwitch.FormSwitch, obj3);
                  cResult[31] = tmp16;
                  cResult[32] = tmp20;
                  cResult[33] = tmp11;
                  cResult[34] = tmp43;
                  tmp41 = tmp43;
                }
                const obj5 = { disabled: tmp16, checked: tmp26 };
                cResult[28] = tmp26;
                cResult[29] = tmp16;
                cResult[30] = obj5;
                tmp36 = obj5;
              }
            }
          }
          let tmp50Result = tmp5;
          if (null != tmp10) {
            const obj6 = { style: tmp17.labelWithTrailing, children: null };
            let tmp34Result = tmp5;
            if (!noop.isValidElement(tmp5)) {
              let str2 = "mobile-text-heading-primary";
              if ("danger" === tmp12) {
                str2 = "text-feedback-critical";
              }
              const obj7 = { variant: "text-md/semibold", color: str2, includeFontPadding: true, children: tmp5 };
              tmp34Result = React5(Text_Text.Text, obj7);
            }
            const items1 = [tmp34Result, tmp10];
            obj6.children = items1;
            tmp50Result = closure_1_8(View, obj6);
          }
          cResult[23] = tmp5;
          cResult[24] = tmp17;
          cResult[25] = tmp10;
          cResult[26] = tmp12;
          cResult[27] = tmp50Result;
          tmp31 = tmp50Result;
        }
        function handleAccessibilityTap() {
          closure_1_2(!closure_1);
          const timerId = setTimeout(() => {
            if (closure_1_0 != null) {
              tmp(!closure_1_1);
            }
          });
        }
        cResult[20] = tmp6;
        cResult[21] = tmp11;
        cResult[22] = handleAccessibilityTap;
        tmp30 = handleAccessibilityTap;
        const tmp25 = _slicedToArray(noop.useState(tmp11), 2);
      }
      function handleOnPress() {
        let tmpResult;
        if (closure_0 != null) {
          tmpResult = tmp(!closure_1);
        }
        return tmpResult;
      }
      cResult[10] = tmp6;
      cResult[11] = tmp11;
      cResult[12] = handleOnPress;
      tmp20 = handleOnPress;
    }
  : function TableSwitchRow(value) {
      value = value.value;
      require = value;
      ({ onValueChange: dependencyMap, label, subLabel, trailing, disabled } = value);
      if (disabled === undefined) {
        disabled = false;
      }
      const variant = value.variant;
      const merged = Object.assign(
        value,
        Object.assign({
          value: 0,
          onValueChange: 0,
          label: 0,
          subLabel: 0,
          trailing: 0,
          disabled: 0,
          accessibilityHint: 0,
          variant: 0,
        }),
      );
      const tmp2 = closure_9();
      const isAndroidResult = PlatformUtils.isAndroid();
      const nodeText = native.getNodeText(label);
      const nodeText1 = native.getNodeText(subLabel);
      const tmp8 = _slicedToArray(noop.useState(value), 2);
      closure_2 = tmp8[1];
      const items = [value];
      const effect = noop.useEffect(() => {
        closure_2(value);
      }, items);
      const obj5 = {};
      const merged1 = Object.assign(merged);
      obj5.variant = variant;
      obj5.arrow = false;
      let tmp15Result = label;
      if (null != trailing) {
        const obj6 = { style: tmp2.labelWithTrailing, children: null };
        let tmp10Result = label;
        if (!noop.isValidElement(label)) {
          let str = "mobile-text-heading-primary";
          if ("danger" === variant) {
            str = "text-feedback-critical";
          }
          const obj7 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
          tmp10Result = React5(tmp3(5088).Text, obj7);
        }
        const items1 = [tmp10Result, trailing];
        obj6.children = items1;
        tmp15Result = closure_1_8(View, obj6);
      }
      obj5.label = tmp15Result;
      obj5.subLabel = subLabel;
      obj5.disabled = disabled;
      obj5.accessibilityState = { disabled, checked: tmp8[0] };
      obj5.accessible = true;
      obj5.accessibilityRole = "switch";
      let str3 = nodeText1;
      if (nodeText1 == null) {
        str3 = "";
      }
      function handleOnPress() {
        let tmpResult;
        if (dependencyMap != null) {
          tmpResult = tmp(!value);
        }
        return tmpResult;
      }
      obj5.accessibilityLabel = "" + nodeText + ", " + str3;
      obj5.accessibilityHint = value.accessibilityHint;
      let tmp14;
      if (isAndroidResult) {
        tmp14 = handleOnPress;
      }
      obj5.onPress = tmp14;
      obj5.onAccessibilityTap = function handleAccessibilityTap() {
        closure_2(!value);
        const timerId = setTimeout(() => {
          if (closure_1_1 != null) {
            tmp(!closure_1_0);
          }
        });
      };
      obj5.trailing = React5(FormSwitch.FormSwitch, {
        "aria-hidden": true,
        value,
        onValueChange: handleOnPress,
        disabled,
      });
      return React5(TableRow.TableRow, obj5);
    };
