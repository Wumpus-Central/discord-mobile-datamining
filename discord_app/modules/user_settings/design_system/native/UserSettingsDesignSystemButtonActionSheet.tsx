// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx
import noop from "noop";
import jsxProd from "jsxProd";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { keys } from "useDesignSystemSettingsState.tsx";

let c4;
let c5;
let require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const result = require("keys").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  let tmp = keys();
  const require = tmp;
  importDefault = React.useCallback((arg0) => {
    arg0(705).batchUpdates(() => {
      let obj = outer1_1(outer1_2[2]);
      obj = { buttonSize: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const dependencyMap = React.useCallback((arg0) => {
    arg0(705).batchUpdates(() => {
      let obj = outer1_1(outer1_2[2]);
      obj = { buttonScale: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  React = React.useCallback((arg0) => {
    arg0(705).batchUpdates(() => {
      let obj = outer1_1(outer1_2[2]);
      obj = { showDisabled: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback = React.useCallback((arg0) => {
    arg0(705).batchUpdates(() => {
      let obj = outer1_1(outer1_2[2]);
      obj = { showIcon: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback2 = React.useCallback((arg0) => {
    arg0(705).batchUpdates(() => {
      let obj = outer1_1(outer1_2[2]);
      obj = { iconPosition: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  let items = React.useCallback((arg0) => {
    arg0(705).batchUpdates(() => {
      let obj = outer1_1(outer1_2[2]);
      obj = { enableLoadingState: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  let obj = { children: null };
  items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: "Button Settings" }), ];
  obj = { children: null };
  obj = { title: "Button Size", accessibilityRole: "radiogroup", children: null };
  obj[2] = items.map((label) => {
    const value = label.value;
    let obj = { children: null };
    obj = {
      align: "right",
      selected: tmp.buttonSize === value,
      label: label.label,
      onPress() {
        return outer1_1(closure_0);
      }
    };
    const items = [callback(value(8008).FormRadioRow, obj), callback(value(8008).FormDivider, {})];
    obj[0] = items;
    return callback2(React.Fragment, obj, value);
  });
  const items1 = [callback(Form.FormSection, obj), , , , , ];
  const obj1 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
  const items2 = [
    callback(Form.FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      const value = label.value;
      let obj = { children: null };
      obj = {
        align: "right",
        selected: tmp.buttonScale === value,
        label: label.label,
        onPress() {
          return outer1_2(closure_0);
        }
      };
      const items = [callback(value(8008).FormRadioRow, obj), callback(value(8008).FormDivider, {})];
      obj[0] = items;
      return callback2(React.Fragment, obj, value);
    })
  ];
  obj1[2] = items2;
  items1[1] = callback2(Form.FormSection, obj1);
  const obj2 = { children: null };
  obj2[0] = callback(Form.FormSwitchRow, {
    label: "Disabled",
    value: tmp.showDisabled,
    onValueChange(arg0) {
      return React(arg0);
    }
  });
  items1[2] = callback(Form.FormSection, obj2);
  const obj4 = { children: null };
  obj4[0] = callback(Form.FormSwitchRow, {
    label: "Show Icons",
    value: tmp.showIcon,
    onValueChange(arg0) {
      return callback(arg0);
    }
  });
  items1[3] = callback(Form.FormSection, obj4);
  const obj6 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
  const items3 = [callback(Form.FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    let obj = { children: null };
    obj = {
      align: "right",
      selected: tmp.iconPosition === label,
      label,
      onPress() {
        return outer1_5(closure_0);
      }
    };
    const items = [callback(label(8008).FormRadioRow, obj), callback(label(8008).FormDivider, {})];
    obj[0] = items;
    return callback2(React.Fragment, obj, label);
  });
  obj6[2] = items3;
  items1[4] = callback2(Form.FormSection, obj6);
  const obj7 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
  const items5 = [callback(Form.FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((arg0) => {
    let tmp = arg0;
    tmp = closure_5;
    let obj = { align: "right", selected: tmp.enableLoadingState === arg0, label: null, onPress: null };
    let str = "Disabled";
    if (true === arg0) {
      str = "Enabled";
    }
    obj = { children: null };
    obj[2] = str;
    obj[3] = function onPress() {
      return outer1_6(closure_0);
    };
    const items = [closure_4(tmp(8008).FormRadioRow, obj), closure_4(tmp(8008).FormDivider, {})];
    obj[0] = items;
    let str2 = "disabled";
    if (true === arg0) {
      str2 = "enabled";
    }
    return tmp(React.Fragment, obj, str2);
  });
  obj7[2] = items5;
  items1[5] = callback2(Form.FormSection, obj7);
  obj[0] = items1;
  items[1] = callback2(Form.Form, obj);
  obj[0] = items;
  return callback2(Background.BottomSheet, obj);
};