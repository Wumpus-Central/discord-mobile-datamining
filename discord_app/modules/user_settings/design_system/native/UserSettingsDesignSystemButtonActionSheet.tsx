// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx
import keysDefault from "useDesignSystemSettingsState.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  const tmp = keysDefault();
  const _require = tmp;
  importDefault = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { buttonSize: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  dependencyMap = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { buttonScale: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  React = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { showDisabled: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { showIcon: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback2 = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { iconPosition: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  items = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { enableLoadingState: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  let obj = { children: null };
  items = [callback(require("../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx").BottomSheetTitleHeader, { title: "Button Settings" }), ];
  obj = { children: null };
  obj = {
    title: "Button Size",
    accessibilityRole: "radiogroup",
    children: items.map((label) => {
      const value = label.value;
      const lib = value;
      let obj = { children: null };
      obj = {
        align: "right",
        selected: lib.buttonSize === value,
        label: label.label,
        onPress() {
          return closure_1_1(closure_0);
        }
      };
      items = [callback(lib(8122).FormRadioRow, obj), callback(lib(8122).FormDivider, {})];
      obj[0] = items;
      return callback2(React.Fragment, obj, value);
    })
  };
  items1 = [callback(require("../../../../design/void/Form/native/index.tsx").FormSection, obj), , , , , ];
  obj1 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
  const items2 = [
    callback(require("../../../../design/void/Form/native/index.tsx").FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      const value = label.value;
      const lib = value;
      let obj = { children: null };
      obj = {
        align: "right",
        selected: lib.buttonScale === value,
        label: label.label,
        onPress() {
          return closure_1_2(closure_0);
        }
      };
      items = [callback(lib(8122).FormRadioRow, obj), callback(lib(8122).FormDivider, {})];
      obj[0] = items;
      return callback2(React.Fragment, obj, value);
    })
  ];
  obj1[2] = items2;
  items1[1] = callback2(require("../../../../design/void/Form/native/index.tsx").FormSection, obj1);
  items1[2] = callback(require("../../../../design/void/Form/native/index.tsx").FormSection, { children: callback(require("../../../../design/void/Form/native/index.tsx").FormSwitchRow, obj3) });
  const obj2 = { children: callback(require("../../../../design/void/Form/native/index.tsx").FormSwitchRow, obj3) };
  items1[3] = callback(require("../../../../design/void/Form/native/index.tsx").FormSection, { children: callback(require("../../../../design/void/Form/native/index.tsx").FormSwitchRow, obj5) });
  const obj6 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
  const items3 = [callback(require("../../../../design/void/Form/native/index.tsx").FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    const lib = label;
    let obj = { children: null };
    obj = {
      align: "right",
      selected: lib.iconPosition === label,
      label,
      onPress() {
        return closure_1_5(closure_0);
      }
    };
    items = [callback(lib(8122).FormRadioRow, obj), callback(lib(8122).FormDivider, {})];
    obj[0] = items;
    return callback2(React.Fragment, obj, label);
  });
  obj6[2] = items3;
  items1[4] = callback2(require("../../../../design/void/Form/native/index.tsx").FormSection, obj6);
  const obj7 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
  const items5 = [callback(require("../../../../design/void/Form/native/index.tsx").FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((arg0) => {
    const lib = arg0;
    let obj = { align: "right", selected: lib.enableLoadingState === arg0, label: null, onPress: null };
    let str = "Disabled";
    if (true === arg0) {
      str = "Enabled";
    }
    obj = { children: null };
    obj[2] = str;
    obj[3] = function onPress() {
      return closure_1_6(closure_0);
    };
    items = [closure_4(lib(8122).FormRadioRow, obj), closure_4(lib(8122).FormDivider, {})];
    obj[0] = items;
    let str2 = "disabled";
    if (true === arg0) {
      str2 = "enabled";
    }
    return closure_5(React.Fragment, obj, str2);
  });
  obj7[2] = items5;
  items1[5] = callback2(require("../../../../design/void/Form/native/index.tsx").FormSection, obj7);
  obj[0] = items1;
  items[1] = callback2(require("../../../../design/void/Form/native/index.tsx").Form, obj);
  obj[0] = items;
  return callback2(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx").BottomSheet, obj);
};