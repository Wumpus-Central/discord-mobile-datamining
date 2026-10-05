// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, _require, closure_0, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let react = react_mod;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let items = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];
let items1 = [
  { value: 6, label: "6" },
  { value: 8, label: "8" },
];
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let arr2;
      let arr5;
      let closure_4;
      let closure_5;
      let closure_6;
      let first;
      let items2;
      let items4;
      let items5;
      let items6;
      let obj5;
      let obj7;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp20;
      let tmp32;
      let tmp36;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(37);
      const tmp4 = first(S[4])();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(buttonSize) {
          let obj = buttonSize(S[5]);
          obj.batchUpdates(() => {
            const obj = first(S[4]);
            const obj2 = { buttonSize };
            return obj.setState(obj2);
          });
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(buttonScale) {
            let obj = buttonScale(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { buttonScale };
              return obj.setState(obj2);
            });
          }
        }
        cResult[1] = S;
        tmp6 = S;
      } else {
        class S {
          constructor(buttonScale) {
            let obj = buttonScale(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { buttonScale };
              return obj.setState(obj2);
            });
          }
        }
      }
      S = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        cResult[2] = F;
        tmp7 = F;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      F = tmp7;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        cResult[3] = tmp9;
        tmp8 = tmp9;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      tmp9 = tmp8;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        cResult[4] = tmp11;
        tmp10 = tmp11;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      tmp11 = tmp10;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        cResult[5] = tmp13;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      items = tmp13;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        const tmp15 = tmp9(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Button Settings" });
        cResult[6] = tmp15;
        tmp14 = tmp15;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      if (cResult[7] !== tmp4.buttonSize) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        const mapped = items.map((label) => {
          const value = label.value;
          closure_0 = value;
          const Fragment = F.Fragment;
          const obj = { children: items };
          items = [,];
          const obj2 = {
            align: "right",
            selected: closure_0.buttonSize === value,
            label: label.label,
            onPress() {
              return first(closure_0);
            },
          };
          items[0] = tmp9(closure_0(S[7]).FormRadioRow, obj2);
          items[1] = tmp9(closure_0(S[7]).FormDivider, {});
          return tmp11(Fragment, obj, value);
        });
        cResult[7] = tmp4.buttonSize;
        cResult[8] = mapped;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      if (cResult[9] !== tmp16) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        let obj2 = { title: "Button Size", accessibilityRole: "radiogroup", children: tmp16 };
        cResult[9] = tmp16;
        cResult[10] = tmp9(require("Form").FormSection, obj2);
        const tmp19 = tmp9(require("Form").FormSection, obj2);
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        const tmp21 = tmp9(require("Form").FormHint, {
          children: "The amount in pixels that the button width will scale when pressed",
        });
        cResult[11] = tmp21;
        tmp20 = tmp21;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      if (cResult[12] !== tmp4.buttonScale) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        const mapped1 = items1.map((label) => {
          const value = label.value;
          closure_0 = value;
          const Fragment = F.Fragment;
          const obj = { children: items };
          items = [,];
          const obj2 = {
            align: "right",
            selected: closure_0.buttonScale === value,
            label: label.label,
            onPress() {
              return S(closure_0);
            },
          };
          items[0] = tmp9(closure_0(S[7]).FormRadioRow, obj2);
          items[1] = tmp9(closure_0(S[7]).FormDivider, {});
          return tmp11(Fragment, obj, value);
        });
        cResult[12] = tmp4.buttonScale;
        cResult[13] = mapped1;
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      if (cResult[14] !== tmp22) {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
        const obj3 = { title: "Button Scale", accessibilityRole: "radiogroup", children: items };
        items = [tmp20, tmp22];
        cResult[14] = tmp22;
        cResult[15] = tmp11(require("Form").FormSection, obj3);
        const tmp25 = tmp11(require("Form").FormSection, obj3);
      } else {
        class F {
          constructor(showDisabled) {
            let obj = showDisabled(S[5]);
            obj.batchUpdates(() => {
              const obj = first(S[4]);
              const obj2 = { showDisabled };
              return obj.setState(obj2);
            });
          }
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(arg0) {
            return F(arg0);
          }
        }
        cResult[16] = L;
      } else {
        class L {
          constructor(arg0) {
            return F(arg0);
          }
        }
      }
      if (cResult[17] !== tmp4.showDisabled) {
        class L {
          constructor(arg0) {
            return F(arg0);
          }
        }
        const obj4 = { children: tmp9(require("Form").FormSwitchRow, obj5) };
        const FormSection = tmp(tmp2[7]).FormSection;
        obj5 = { label: "Disabled", value: tmp4.showDisabled, onValueChange: L };
        cResult[17] = tmp4.showDisabled;
        cResult[18] = tmp9(FormSection, obj4);
        const tmp28 = tmp9(FormSection, obj4);
      } else {
        class L {
          constructor(arg0) {
            return F(arg0);
          }
        }
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        cResult[19] = H;
      } else {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
      }
      if (cResult[20] !== tmp4.showIcon) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        const obj6 = { children: tmp9(require("Form").FormSwitchRow, obj7) };
        const FormSection2 = tmp(tmp2[7]).FormSection;
        obj7 = { label: "Show Icons", value: tmp4.showIcon, onValueChange: H };
        cResult[20] = tmp4.showIcon;
        cResult[21] = tmp9(FormSection2, obj6);
        const tmp31 = tmp9(FormSection2, obj6);
      } else {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
      }
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        const tmp33 = tmp9(require("Form").FormHint, {
          children: "Whether to show the example icon on the left (default) or right.",
        });
        items1 = ["start", "end"];
        cResult[22] = tmp33;
        cResult[23] = items1;
        arr2 = items1;
        tmp32 = tmp33;
      } else {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        arr2 = cResult[23];
      }
      if (cResult[24] !== tmp4.iconPosition) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        const obj8 = { title: "Icon Position", accessibilityRole: "radiogroup", children: items2 };
        items2 = [tmp32];
        const FormSection3 = tmp(tmp2[7]).FormSection;
        items2[1] = arr2.map((label) => {
          closure_0 = label;
          const Fragment = F.Fragment;
          const obj = { children: items };
          items = [,];
          const obj2 = {
            align: "right",
            selected: closure_0.iconPosition === label,
            label,
            onPress() {
              return closure_5(label);
            },
          };
          items[0] = tmp9(closure_0(S[7]).FormRadioRow, obj2);
          items[1] = tmp9(closure_0(S[7]).FormDivider, {});
          return tmp11(Fragment, obj, label);
        });
        cResult[24] = tmp4.iconPosition;
        cResult[25] = tmp11(FormSection3, obj8);
        const tmp35 = tmp11(FormSection3, obj8);
      } else {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
      }
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        const tmp37 = tmp9(require("Form").FormHint, {
          children: "Whether or not to show a loading state when a button is pressed",
        });
        const items3 = [true, false];
        cResult[26] = tmp37;
        cResult[27] = items3;
        arr5 = items3;
        tmp36 = tmp37;
      } else {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        arr5 = cResult[27];
      }
      if (cResult[28] !== tmp4.enableLoadingState) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
        const obj9 = { title: "Loading state", accessibilityRole: "radiogroup", children: items4 };
        items4 = [tmp36];
        const FormSection4 = tmp(tmp2[7]).FormSection;
        items4[1] = arr5.map((item) => {
          let str;
          closure_0 = item;
          const Fragment = F.Fragment;
          const obj = {
            align: "right",
            selected: closure_0.enableLoadingState === item,
            label: str,
            onPress() {
              return items(item);
            },
          };
          str = "Disabled";
          const FormRadioRow = closure_0(S[7]).FormRadioRow;
          const tmp3 = closure_0;
          if (true === item) {
            str = "Enabled";
          }
          const obj2 = { children: items };
          items = [tmp9(FormRadioRow, obj), tmp9(tmp3(S[7]).FormDivider, {})];
          let str2 = "disabled";
          if (true === item) {
            str2 = "enabled";
          }
          return tmp11(Fragment, obj2, str2);
        });
        cResult[28] = tmp4.enableLoadingState;
        cResult[29] = tmp11(FormSection4, obj9);
        const tmp39 = tmp11(FormSection4, obj9);
      } else {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
      }
      if (cResult[30] === tmp24) {
        class H {
          constructor(arg0) {
            return tmp9(arg0);
          }
        }
      }
      const obj10 = { children: items5 };
      items5 = [tmp14];
      BottomSheet = tmp(tmp2[8]).BottomSheet;
      const obj11 = { children: items6 };
      items6 = [tmp18, tmp24, tmp27, tmp30, tmp34, tmp38];
      items5[1] = tmp11(require("Form").Form, obj11);
      cResult[30] = tmp24;
      cResult[31] = tmp27;
      cResult[32] = tmp30;
      cResult[33] = tmp34;
      cResult[34] = tmp38;
      cResult[35] = tmp18;
      cResult[36] = tmp11(BottomSheet, obj10);
      tmp11(BottomSheet, obj10);
    }
  : () => {
      let closure_1;
      let closure_2;
      let closure_6;
      let items2;
      let items3;
      let items5;
      let obj6;
      let obj8;
      const tmp = useDesignSystemSettingsStateDefault();
      _require = tmp;
      importDefault = react.useCallback((buttonSize) => {
        let obj = buttonSize(closure_2[5]);
        obj.batchUpdates(() => {
          const obj = closure_1(closure_2[4]);
          const obj2 = { buttonSize };
          return obj.setState(obj2);
        });
      }, []);
      dependencyMap = react.useCallback((buttonScale) => {
        let obj = buttonScale(closure_2[5]);
        obj.batchUpdates(() => {
          const obj = closure_1(closure_2[4]);
          const obj2 = { buttonScale };
          return obj.setState(obj2);
        });
      }, []);
      react = react.useCallback((showDisabled) => {
        let obj = showDisabled(closure_2[5]);
        obj.batchUpdates(() => {
          const obj = closure_1(closure_2[4]);
          const obj2 = { showDisabled };
          return obj.setState(obj2);
        });
      }, []);
      let closure_4 = react.useCallback((showIcon) => {
        let obj = showIcon(closure_2[5]);
        obj.batchUpdates(() => {
          const obj = closure_1(closure_2[4]);
          const obj2 = { showIcon };
          return obj.setState(obj2);
        });
      }, []);
      let closure_5 = react.useCallback((iconPosition) => {
        let obj = iconPosition(closure_2[5]);
        obj.batchUpdates(() => {
          const obj = closure_1(closure_2[4]);
          const obj2 = { iconPosition };
          return obj.setState(obj2);
        });
      }, []);
      items = react.useCallback((enableLoadingState) => {
        let obj = enableLoadingState(closure_2[5]);
        obj.batchUpdates(() => {
          const obj = closure_1(closure_2[4]);
          const obj2 = { enableLoadingState };
          return obj.setState(obj2);
        });
      }, []);
      let obj = { children: items };
      BottomSheet = require("Sheet/BottomSheet").BottomSheet;
      items = [closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Button Settings" })];
      let obj2 = { children: items1 };
      const Form = require("Form").Form;
      const obj3 = {
        title: "Button Size",
        accessibilityRole: "radiogroup",
        children: items.map((label) => {
          const value = label.value;
          closure_0 = value;
          const Fragment = React.Fragment;
          const obj = { children: items };
          items = [,];
          const obj2 = {
            align: "right",
            selected: closure_0.buttonSize === value,
            label: label.label,
            onPress() {
              return closure_1(closure_0);
            },
          };
          items[0] = closure_4(closure_0(closure_2[7]).FormRadioRow, obj2);
          items[1] = closure_4(closure_0(closure_2[7]).FormDivider, {});
          return closure_5(Fragment, obj, value);
        }),
      };
      const FormSection = require("Form").FormSection;
      items1 = [closure_4(FormSection, obj3), , , , ,];
      const obj4 = { title: "Button Scale", accessibilityRole: "radiogroup", children: items2 };
      const FormSection2 = require("Form").FormSection;
      items2 = [
        closure_4(require("Form").FormHint, {
          children: "The amount in pixels that the button width will scale when pressed",
        }),
        items1.map((label) => {
          const value = label.value;
          closure_0 = value;
          const Fragment = React.Fragment;
          const obj = { children: items };
          items = [,];
          const obj2 = {
            align: "right",
            selected: closure_0.buttonScale === value,
            label: label.label,
            onPress() {
              return closure_2(closure_0);
            },
          };
          items[0] = closure_4(closure_0(closure_2[7]).FormRadioRow, obj2);
          items[1] = closure_4(closure_0(closure_2[7]).FormDivider, {});
          return closure_5(Fragment, obj, value);
        }),
      ];
      items1[1] = closure_5(FormSection2, obj4);
      const obj5 = { children: closure_4(require("Form").FormSwitchRow, obj6) };
      const FormSection3 = require("Form").FormSection;
      obj6 = {
        label: "Disabled",
        value: tmp.showDisabled,
        onValueChange(arg0) {
          return React(arg0);
        },
      };
      items1[2] = closure_4(FormSection3, obj5);
      const obj7 = { children: closure_4(require("Form").FormSwitchRow, obj8) };
      const FormSection4 = require("Form").FormSection;
      obj8 = {
        label: "Show Icons",
        value: tmp.showIcon,
        onValueChange(arg0) {
          return closure_4(arg0);
        },
      };
      items1[3] = closure_4(FormSection4, obj7);
      const obj9 = { title: "Icon Position", accessibilityRole: "radiogroup", children: items3 };
      const FormSection5 = require("Form").FormSection;
      items3 = [
        closure_4(require("Form").FormHint, {
          children: "Whether to show the example icon on the left (default) or right.",
        }),
      ];
      const items4 = ["start", "end"];
      items3[1] = items4.map((label) => {
        closure_0 = label;
        const Fragment = React.Fragment;
        const obj = { children: items };
        items = [,];
        const obj2 = {
          align: "right",
          selected: closure_0.iconPosition === label,
          label,
          onPress() {
            return closure_5(label);
          },
        };
        items[0] = closure_4(closure_0(closure_2[7]).FormRadioRow, obj2);
        items[1] = closure_4(closure_0(closure_2[7]).FormDivider, {});
        return closure_5(Fragment, obj, label);
      });
      items1[4] = closure_5(FormSection5, obj9);
      const obj10 = { title: "Loading state", accessibilityRole: "radiogroup", children: items5 };
      const FormSection6 = require("Form").FormSection;
      items5 = [
        closure_4(require("Form").FormHint, {
          children: "Whether or not to show a loading state when a button is pressed",
        }),
      ];
      const items6 = [true, false];
      items5[1] = items6.map((item) => {
        let str;
        closure_0 = item;
        const Fragment = React.Fragment;
        const obj = {
          align: "right",
          selected: closure_0.enableLoadingState === item,
          label: str,
          onPress() {
            return closure_6(item);
          },
        };
        str = "Disabled";
        const FormRadioRow = closure_0(closure_2[7]).FormRadioRow;
        const tmp3 = closure_0;
        if (true === item) {
          str = "Enabled";
        }
        const obj2 = { children: items };
        items = [closure_4(FormRadioRow, obj), closure_4(tmp3(closure_2[7]).FormDivider, {})];
        let str2 = "disabled";
        if (true === item) {
          str2 = "enabled";
        }
        return closure_5(Fragment, obj2, str2);
      });
      items1[5] = closure_5(FormSection6, obj10);
      items[1] = closure_5(Form, obj2);
      return closure_5(BottomSheet, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx",
);

export default tmp3;
