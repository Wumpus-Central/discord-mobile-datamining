// discord_app/design/components/TableRow/native/TableSwitchRow.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native from "../../../utils/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import TableRow2 from "TableRow.native.tsx";
import FormSwitch from "../../Forms/native/FormSwitch.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let value;

let metroImportAll;
let metroImportDefault;
let closure_2 = ["value", "onValueChange", "label", "subLabel", "trailing", "disabled", "accessibilityHint", "variant"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => ({
  labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 },
}));
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (value) => {
      let accessibilityHint;
      let closure_129_2;
      let disabled;
      let label;
      let subLabel;
      let tmp10;
      let tmp12;
      let tmp5;
      let tmp8;
      let trailing;
      let variant;
      const obj = react2;
      const cResult = obj.c(47);
      if (cResult[0] !== value) {
        value = value.value;
        let closure_1 = value;
        const onValueChange = value.onValueChange;
        let closure_0 = onValueChange;
        ({ label, subLabel, trailing, disabled, accessibilityHint, variant } = value);
        const tmp15 = _objectWithoutProperties(value, closure_2);
        class V {
          constructor() {
            let tmpResult;
            if (closure_0 != null) {
              tmpResult = tmp(!closure_1);
            }
            return tmpResult;
          }
        }
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
        tmp12 = variant;
        tmp10 = trailing;
        tmp8 = subLabel;
        tmp5 = label;
      } else {
        tmp5 = cResult[2];
        closure_0 = cResult[3];
        tmp8 = cResult[5];
        tmp10 = cResult[7];
        closure_1 = cResult[8];
        tmp12 = cResult[9];
      }
      const tmp16 = closure_9();
      let tmpResult = PlatformUtils;
      if (cResult[10] === tmp6) {
        let tmp26;
        if (cResult[13] !== tmp5) {
          const tmpResult3 = native;
          const nodeText = tmpResult3.getNodeText(tmp5);
          cResult[13] = tmp5;
          cResult[14] = nodeText;
        }
        if (cResult[15] !== tmp8) {
          const tmpResult4 = native;
          const nodeText1 = tmpResult4.getNodeText(tmp8);
          cResult[15] = tmp8;
          cResult[16] = nodeText1;
        }
        [r10076, closure_129_2] = react.useState(tmp11);
        _slicedToArray(react.useState(tmp11), 2);
        if (cResult[17] !== tmp11) {
          class N {
            constructor() {
              closure_1_2(closure_1);
            }
          }
          const items = [tmp11];
          cResult[17] = tmp11;
          cResult[18] = N;
          cResult[19] = items;
          tmp26 = items;
        } else {
          class N {
            constructor() {
              closure_1_2(closure_1);
            }
          }
          tmp26 = cResult[19];
        }
        const effect = react.useEffect(N, tmp26);
        if (cResult[20] === tmp6) {
          class N {
            constructor() {
              closure_1_2(closure_1);
            }
          }
          if (cResult[23] === tmp5) {
            class N {
              constructor() {
                closure_1_2(closure_1);
              }
            }
          }
          let tmp34Result = tmp5;
          if (null != tmp10) {
            class N {
              constructor() {
                closure_1_2(closure_1);
              }
            }
            tmp36[0] = tmp16.labelWithTrailing;
            let tmp32Result = tmp5;
            if (!react.isValidElement(tmp5)) {
              class N {
                constructor() {
                  closure_1_2(closure_1);
                }
              }
              const Text = Text_Text.Text;
              if ("danger" === tmp12) {
                class N {
                  constructor() {
                    closure_1_2(closure_1);
                  }
                }
              }
              const obj2 = {
                variant: "text-md/semibold",
                color: "mobile-text-heading-primary",
                includeFontPadding: true,
                children: tmp5,
              };
              tmp32Result = tmp32(Text, obj2);
            }
            const items1 = [tmp32Result, tmp10];
            tmp36[1] = items1;
            tmp34Result = metroImportAll(View, tmp36);
          }
          cResult[23] = tmp5;
          cResult[24] = tmp16;
          cResult[25] = tmp10;
          cResult[26] = tmp12;
          class V {
            constructor() {
              let tmpResult;
              if (closure_0 != null) {
                tmpResult = tmp(!closure_1);
              }
              return tmpResult;
            }
          }
          cResult[27] = tmp34Result;
        }
        const fn = function $() {
          const tmp = closure_1_2(!closure_1);
          const timerId = setTimeout(() => {
            if (closure_1_0 != null) {
              tmp(!closure_1_1);
            }
          });
        };
        class V {
          constructor() {
            let tmpResult;
            if (closure_0 != null) {
              tmpResult = tmp(!closure_1);
            }
            return tmpResult;
          }
        }
        cResult[20] = tmp6;
        cResult[21] = tmp11;
        cResult[22] = fn;
      }
      class V {
        constructor() {
          let tmpResult;
          if (closure_0 != null) {
            tmpResult = tmp(!closure_1);
          }
          return tmpResult;
        }
      }
      cResult[10] = tmp6;
      cResult[11] = tmp11;
      cResult[12] = V;
    }
  : (value) => {
      let closure_129_1;
      let disabled;
      let first;
      let handleOnPress;
      let items1;
      let label;
      let str3;
      let subLabel;
      let tmp15;
      let tmp16Result;
      let trailing;
      value = value.value;
      ({ onValueChange: closure_129_1, label, subLabel, trailing, disabled } = value);
      if (disabled === undefined) {
        disabled = false;
      }
      const variant = value.variant;
      const accessibilityHint = value.accessibilityHint;
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
      closure_2 = undefined;
      const tmp2 = closure_9();
      const obj = PlatformUtils;
      const isAndroidResult = obj.isAndroid();
      const obj2 = native;
      const nodeText = obj2.getNodeText(label);
      const obj3 = native;
      const nodeText1 = obj3.getNodeText(subLabel);
      [first, closure_2] = react.useState(value);
      const items = [value];
      const effect = react.useEffect(() => {
        closure_2(value);
      }, items);
      const obj5 = {
        variant,
        arrow: false,
        label: tmp16Result,
        subLabel,
        disabled,
        accessibilityState: { disabled, checked: first },
        accessible: true,
        accessibilityRole: "switch",
        accessibilityLabel: "" + nodeText + ", " + str3,
        accessibilityHint,
        onPress: tmp15,
        onAccessibilityTap() {
          const tmp = closure_2(!value);
          const timerId = setTimeout(() => {
            if (closure_1_1 != null) {
              tmp(!closure_1_0);
            }
          });
        },
        trailing: metroImportDefault(FormSwitch.FormSwitch, {
          "aria-hidden": true,
          value,
          onValueChange: handleOnPress,
          disabled,
        }),
      };
      const TableRow = TableRow2.TableRow;
      const merged1 = Object.assign(merged);
      tmp16Result = label;
      if (null != trailing) {
        let tmp11Result = label;
        const obj6 = { style: tmp2.labelWithTrailing, children: items1 };
        if (!react.isValidElement(label)) {
          let str = "mobile-text-heading-primary";
          const Text = Text_Text.Text;
          if ("danger" === variant) {
            str = "text-feedback-critical";
          }
          const obj7 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
          tmp11Result = metroImportDefault(Text, obj7);
        }
        items1 = [tmp11Result, trailing];
        tmp16Result = metroImportAll(View, obj6);
      }
      str3 = nodeText1;
      if (nodeText1 == null) {
        str3 = "";
      }
      handleOnPress = function handleOnPress() {
        let tmpResult;
        if (closure_1_1 != null) {
          tmpResult = tmp(!value);
        }
        return tmpResult;
      };
      tmp15 = undefined;
      if (isAndroidResult) {
        tmp15 = handleOnPress;
      }
      return metroImportDefault(TableRow, obj5);
    };
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = tmp3;
