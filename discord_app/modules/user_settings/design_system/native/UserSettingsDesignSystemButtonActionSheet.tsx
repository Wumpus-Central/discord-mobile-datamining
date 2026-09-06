// === Module 15757: UserSettingsDesignSystemButtonActionSheet ===

// Module 15757 (UserSettingsDesignSystemButtonActionSheet)
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15755 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  const tmp = useDesignSystemSettingsStateDefault();
  _require = tmp;
  importDefault = noop.useCallback((buttonSize) => {
    buttonSize(1249).batchUpdates(() => {
      closure_1(closure_2[2]);
      const obj = { buttonSize };
      return obj.setState(obj);
    });
  }, []);
  dependencyMap = noop.useCallback((buttonScale) => {
    buttonScale(1249).batchUpdates(() => {
      closure_1(closure_2[2]);
      const obj = { buttonScale };
      return obj.setState(obj);
    });
  }, []);
  noop = noop.useCallback((showDisabled) => {
    showDisabled(1249).batchUpdates(() => {
      closure_1(closure_2[2]);
      const obj = { showDisabled };
      return obj.setState(obj);
    });
  }, []);
  closure_4 = noop.useCallback((showIcon) => {
    showIcon(1249).batchUpdates(() => {
      closure_1(closure_2[2]);
      const obj = { showIcon };
      return obj.setState(obj);
    });
  }, []);
  closure_5 = noop.useCallback((iconPosition) => {
    iconPosition(1249).batchUpdates(() => {
      closure_1(closure_2[2]);
      const obj = { iconPosition };
      return obj.setState(obj);
    });
  }, []);
  noop.useCallback((enableLoadingState) => {
    enableLoadingState(1249).batchUpdates(() => {
      closure_1(closure_2[2]);
      const obj = { enableLoadingState };
      return obj.setState(obj);
    });
  }, []);
  let obj = { children: null };
  items = [closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Button Settings" }), ];
  obj = { children: null };
  obj = {
    title: "Button Size",
    accessibilityRole: "radiogroup",
    children: items.map((label) => {
      value = label.value;
      closure_0 = value;
      let obj = { children: null };
      obj = {
        align: "right",
        selected: closure_0.buttonSize === value,
        label: label.label,
        onPress() {
          return closure_1(value);
        }
      };
      items = [closure_4(closure_0(8593).FormRadioRow, obj), closure_4(closure_0(8593).FormDivider, {})];
      obj.children = items;
      return closure_5(React.Fragment, obj, value);
    })
  };
  items1 = [closure_4(require("Form").FormSection, obj), , , , , ];
  const obj1 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
  const items2 = [
    closure_4(require("Form").FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      value = label.value;
      closure_0 = value;
      let obj = { children: null };
      obj = {
        align: "right",
        selected: closure_0.buttonScale === value,
        label: label.label,
        onPress() {
          return closure_2(value);
        }
      };
      items = [closure_4(closure_0(8593).FormRadioRow, obj), closure_4(closure_0(8593).FormDivider, {})];
      obj.children = items;
      return closure_5(React.Fragment, obj, value);
    })
  ];
  obj1.children = items2;
  items1[1] = closure_5(require("Form").FormSection, obj1);
  const obj2 = {
    children: closure_4(require("Form").FormSwitchRow, {
      label: "Disabled",
      value: tmp.showDisabled,
      onValueChange(arg0) {
        return React(arg0);
      }
    })
  };
  items1[2] = closure_4(require("Form").FormSection, obj2);
  const obj4 = {
    children: closure_4(require("Form").FormSwitchRow, {
      label: "Show Icons",
      value: tmp.showIcon,
      onValueChange(arg0) {
        return closure_4(arg0);
      }
    })
  };
  items1[3] = closure_4(require("Form").FormSection, obj4);
  const obj6 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
  const items3 = [closure_4(require("Form").FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    closure_0 = label;
    let obj = { children: null };
    obj = {
      align: "right",
      selected: closure_0.iconPosition === label,
      label,
      onPress() {
        return closure_5(closure_0);
      }
    };
    items = [closure_4(closure_0(8593).FormRadioRow, obj), closure_4(closure_0(8593).FormDivider, {})];
    obj.children = items;
    return closure_5(React.Fragment, obj, label);
  });
  obj6.children = items3;
  items1[4] = closure_5(require("Form").FormSection, obj6);
  const obj7 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
  const items5 = [closure_4(require("Form").FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((item) => {
    closure_0 = item;
    let obj = { align: "right", selected: closure_0.enableLoadingState === item, label: null, onPress: null };
    let str = "Disabled";
    if (true === item) {
      str = "Enabled";
    }
    obj = {
      children: null,
      label: str,
      onPress() {
        return closure_6(closure_0);
      }
    };
    items = [closure_4(closure_0(8593).FormRadioRow, obj), closure_4(closure_0(8593).FormDivider, {})];
    obj.children = items;
    let str2 = "disabled";
    if (true === item) {
      str2 = "enabled";
    }
    return closure_5(React.Fragment, obj, str2);
  });
  obj7.children = items5;
  items1[5] = closure_5(require("Form").FormSection, obj7);
  obj.children = items1;
  items[1] = closure_5(require("Form").Form, obj);
  obj.children = items;
  return closure_5(require("Sheet/BottomSheet").BottomSheet, obj);
};