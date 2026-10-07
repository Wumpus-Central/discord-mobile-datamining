// === Module 15655: UserSettingsDesignSystemButtonActionSheet ===

// Module 15655 (UserSettingsDesignSystemButtonActionSheet)
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15653 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(37);
  const tmp4 = first(15653)();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(buttonSize) {
      buttonSize(1259).batchUpdates(() => first(closure_2[4]).setState({ buttonSize }));
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ buttonScale }));
        return;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ buttonScale }));
        return;
      }
    }
  }
  dependencyMap = S;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    cResult[2] = F;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  noop = F;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    cResult[3] = tmp9;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    cResult[4] = tmp11;
    const tmp10 = tmp11;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    cResult[5] = tmp13;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  items = tmp13;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    const tmp15 = tmp9(tmp(6651).BottomSheetTitleHeader, { title: "Button Settings" });
    cResult[6] = tmp15;
    const tmp14 = tmp15;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[7] !== tmp4.buttonSize) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    const mapped = items.map((label) => {
      value = label.value;
      closure_0 = value;
      const obj = { children: null };
      items = [
        tmp9(closure_0(8924).FormRadioRow, {
          align: "right",
          selected: closure_0.buttonSize === value,
          label: label.label,
          onPress() {
            return first(value);
          }
        }),
        tmp9(closure_0(8924).FormDivider, {})
      ];
      obj.children = items;
      return tmp11(React.Fragment, obj, value);
    });
    cResult[7] = tmp4.buttonSize;
    cResult[8] = mapped;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[9] !== tmp16) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    let obj2 = { title: "Button Size", accessibilityRole: "radiogroup", children: tmp16 };
    const tmp19 = tmp9(tmp(8924).FormSection, obj2);
    cResult[9] = tmp16;
    cResult[10] = tmp19;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    const tmp21 = tmp9(tmp(8924).FormHint, { children: "The amount in pixels that the button width will scale when pressed" });
    cResult[11] = tmp21;
    const tmp20 = tmp21;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[12] !== tmp4.buttonScale) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    const mapped1 = items1.map((label) => {
      value = label.value;
      closure_0 = value;
      const obj = { children: null };
      items = [
        tmp9(closure_0(8924).FormRadioRow, {
          align: "right",
          selected: closure_0.buttonScale === value,
          label: label.label,
          onPress() {
            return closure_2(value);
          }
        }),
        tmp9(closure_0(8924).FormDivider, {})
      ];
      obj.children = items;
      return tmp11(React.Fragment, obj, value);
    });
    cResult[12] = tmp4.buttonScale;
    cResult[13] = mapped1;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[14] !== tmp22) {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
    const obj3 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
    items = [tmp20, tmp22];
    obj3.children = items;
    const tmp25 = tmp11(tmp(8924).FormSection, obj3);
    cResult[14] = tmp22;
    cResult[15] = tmp25;
  } else {
    class F {
      constructor(arg0) {
        closure_0 = arg0;
        obj = closure_0(closure_2[5]);
        batchUpdatesResult = obj.batchUpdates(() => first(closure_2[4]).setState({ showDisabled }));
        return;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(arg0) {
        return closure_3(arg0);
      }
    }
    cResult[16] = L;
  } else {
    class L {
      constructor(arg0) {
        return closure_3(arg0);
      }
    }
  }
  if (cResult[17] !== tmp4.showDisabled) {
    class L {
      constructor(arg0) {
        return closure_3(arg0);
      }
    }
    const obj4 = { children: null };
    const obj5 = { label: "Disabled", value: tmp4.showDisabled, onValueChange: L };
    obj4.children = tmp9(tmp(8924).FormSwitchRow, obj5);
    const tmp28 = tmp9(tmp(8924).FormSection, obj4);
    cResult[17] = tmp4.showDisabled;
    cResult[18] = tmp28;
  } else {
    class L {
      constructor(arg0) {
        return closure_3(arg0);
      }
    }
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    cResult[19] = H;
  } else {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
  }
  if (cResult[20] !== tmp4.showIcon) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    const obj6 = { children: null };
    const obj7 = { label: "Show Icons", value: tmp4.showIcon, onValueChange: H };
    obj6.children = tmp9(tmp(8924).FormSwitchRow, obj7);
    const tmp31 = tmp9(tmp(8924).FormSection, obj6);
    cResult[20] = tmp4.showIcon;
    cResult[21] = tmp31;
  } else {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    const tmp33 = tmp9(tmp(8924).FormHint, { children: "Whether to show the example icon on the left (default) or right." });
    items1 = ["start", "end"];
    cResult[22] = tmp33;
    cResult[23] = items1;
    let arr2 = items1;
    const tmp32 = tmp33;
  } else {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    arr2 = cResult[23];
  }
  if (cResult[24] !== tmp4.iconPosition) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    const obj8 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
    const items2 = [
      tmp32,
      arr2.map((label) => {
          closure_0 = label;
          const obj = { children: null };
          items = [
            tmp9(closure_0(8924).FormRadioRow, {
              align: "right",
              selected: closure_0.iconPosition === label,
              label,
              onPress() {
                return closure_5(closure_0);
              }
            }),
            tmp9(closure_0(8924).FormDivider, {})
          ];
          obj.children = items;
          return tmp11(React.Fragment, obj, label);
        })
    ];
    obj8.children = items2;
    const tmp35 = tmp11(tmp(8924).FormSection, obj8);
    cResult[24] = tmp4.iconPosition;
    cResult[25] = tmp35;
  } else {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
  }
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    const tmp37 = tmp9(tmp(8924).FormHint, { children: "Whether or not to show a loading state when a button is pressed" });
    const items3 = [true, false];
    cResult[26] = tmp37;
    cResult[27] = items3;
    let arr5 = items3;
    const tmp36 = tmp37;
  } else {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    arr5 = cResult[27];
  }
  if (cResult[28] !== tmp4.enableLoadingState) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
    const obj9 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
    const items4 = [
      tmp36,
      arr5.map((item) => {
          closure_0 = item;
          const obj = { align: "right", selected: closure_0.enableLoadingState === item, label: null, onPress: null };
          let str = "Disabled";
          if (true === item) {
            str = "Enabled";
          }
          const obj2 = { children: null };
          obj.label = str;
          obj.onPress = function onPress() {
            return closure_6(closure_0);
          };
          items = [tmp9(closure_0(8924).FormRadioRow, obj), tmp9(closure_0(8924).FormDivider, {})];
          obj2.children = items;
          let str2 = "disabled";
          if (true === item) {
            str2 = "enabled";
          }
          return tmp11(React.Fragment, obj2, str2);
        })
    ];
    obj9.children = items4;
    const tmp39 = tmp11(tmp(8924).FormSection, obj9);
    cResult[28] = tmp4.enableLoadingState;
    cResult[29] = tmp39;
  } else {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
  }
  if (cResult[30] === tmp24) {
    class H {
      constructor(arg0) {
        return closure_4(arg0);
      }
    }
  }
  const obj10 = { children: null };
  const items5 = [tmp14, ];
  const obj11 = { children: null };
  const items6 = [tmp18, tmp24, tmp27, tmp30, tmp34, tmp38];
  obj11.children = items6;
  items5[1] = tmp10(require("Form").Form, obj11);
  obj10.children = items5;
  let obj = require("c");
  cResult[30] = tmp24;
  cResult[31] = tmp27;
  cResult[32] = tmp30;
  cResult[33] = tmp34;
  cResult[34] = tmp38;
  cResult[35] = tmp18;
  cResult[36] = tmp10(require("Sheet/BottomSheet").BottomSheet, obj10);
  const tmp40 = tmp10(require("Sheet/BottomSheet").BottomSheet, obj10);
}) : (() => {
  const tmp = useDesignSystemSettingsStateDefault();
  _require = tmp;
  importDefault = noop.useCallback((buttonSize) => {
    buttonSize(1259).batchUpdates(() => closure_1(closure_2[4]).setState({ buttonSize }));
  }, []);
  dependencyMap = noop.useCallback((buttonScale) => {
    buttonScale(1259).batchUpdates(() => closure_1(closure_2[4]).setState({ buttonScale }));
  }, []);
  noop = noop.useCallback((showDisabled) => {
    showDisabled(1259).batchUpdates(() => closure_1(closure_2[4]).setState({ showDisabled }));
  }, []);
  closure_4 = noop.useCallback((showIcon) => {
    showIcon(1259).batchUpdates(() => closure_1(closure_2[4]).setState({ showIcon }));
  }, []);
  closure_5 = noop.useCallback((iconPosition) => {
    iconPosition(1259).batchUpdates(() => closure_1(closure_2[4]).setState({ iconPosition }));
  }, []);
  noop.useCallback((enableLoadingState) => {
    enableLoadingState(1259).batchUpdates(() => closure_1(closure_2[4]).setState({ enableLoadingState }));
  }, []);
  let obj = { children: null };
  items = [closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Button Settings" }), ];
  let obj2 = { children: null };
  items1 = [
    closure_4(require("Form").FormSection, {
      title: "Button Size",
      accessibilityRole: "radiogroup",
      children: items.map((label) => {
        value = label.value;
        closure_0 = value;
        const obj = { children: null };
        items = [
          closure_4(closure_0(8924).FormRadioRow, {
            align: "right",
            selected: closure_0.buttonSize === value,
            label: label.label,
            onPress() {
              return closure_1(value);
            }
          }),
          closure_4(closure_0(8924).FormDivider, {})
        ];
        obj.children = items;
        return closure_5(React.Fragment, obj, value);
      })
    }),
  ,
  ,
  ,
  ,

  ];
  const obj4 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
  const items2 = [
    closure_4(require("Form").FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      value = label.value;
      closure_0 = value;
      const obj = { children: null };
      items = [
        closure_4(closure_0(8924).FormRadioRow, {
          align: "right",
          selected: closure_0.buttonScale === value,
          label: label.label,
          onPress() {
            return closure_2(value);
          }
        }),
        closure_4(closure_0(8924).FormDivider, {})
      ];
      obj.children = items;
      return closure_5(React.Fragment, obj, value);
    })
  ];
  obj4.children = items2;
  items1[1] = closure_5(require("Form").FormSection, obj4);
  const obj5 = {
    children: closure_4(require("Form").FormSwitchRow, {
      label: "Disabled",
      value: tmp.showDisabled,
      onValueChange(arg0) {
        return React(arg0);
      }
    })
  };
  items1[2] = closure_4(require("Form").FormSection, obj5);
  const obj7 = {
    children: closure_4(require("Form").FormSwitchRow, {
      label: "Show Icons",
      value: tmp.showIcon,
      onValueChange(arg0) {
        return closure_4(arg0);
      }
    })
  };
  items1[3] = closure_4(require("Form").FormSection, obj7);
  const obj9 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
  const items3 = [closure_4(require("Form").FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    closure_0 = label;
    const obj = { children: null };
    items = [
      closure_4(closure_0(8924).FormRadioRow, {
        align: "right",
        selected: closure_0.iconPosition === label,
        label,
        onPress() {
          return closure_5(closure_0);
        }
      }),
      closure_4(closure_0(8924).FormDivider, {})
    ];
    obj.children = items;
    return closure_5(React.Fragment, obj, label);
  });
  obj9.children = items3;
  items1[4] = closure_5(require("Form").FormSection, obj9);
  const obj10 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
  const items5 = [closure_4(require("Form").FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((item) => {
    closure_0 = item;
    const obj = { align: "right", selected: closure_0.enableLoadingState === item, label: null, onPress: null };
    let str = "Disabled";
    if (true === item) {
      str = "Enabled";
    }
    const obj2 = { children: null };
    obj.label = str;
    obj.onPress = function onPress() {
      return closure_6(closure_0);
    };
    items = [closure_4(closure_0(8924).FormRadioRow, obj), closure_4(closure_0(8924).FormDivider, {})];
    obj2.children = items;
    let str2 = "disabled";
    if (true === item) {
      str2 = "enabled";
    }
    return closure_5(React.Fragment, obj2, str2);
  });
  obj10.children = items5;
  items1[5] = closure_5(require("Form").FormSection, obj10);
  obj2.children = items1;
  items[1] = closure_5(require("Form").Form, obj2);
  obj.children = items;
  return closure_5(require("Sheet/BottomSheet").BottomSheet, obj);
});