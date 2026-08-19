// === Module 14901: items ===

// Module 14901 (items)
import keysDefault from "keys" /* 14899 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  const tmp = keysDefault();
  const _require = tmp;
  importDefault = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      closure_1_1(closure_1_2[2]);
      const obj = { buttonSize: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  dependencyMap = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      closure_1_1(closure_1_2[2]);
      const obj = { buttonScale: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  React = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      closure_1_1(closure_1_2[2]);
      const obj = { showDisabled: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      closure_1_1(closure_1_2[2]);
      const obj = { showIcon: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback2 = React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      closure_1_1(closure_1_2[2]);
      const obj = { iconPosition: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  React.useCallback((arg0) => {
    const lib = arg0;
    lib(705).batchUpdates(() => {
      closure_1_1(closure_1_2[2]);
      const obj = { enableLoadingState: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  items = [callback(_require(6949).BottomSheetTitleHeader, { title: "Button Settings" }), ];
  let obj = {
    title: "Button Size",
    accessibilityRole: "radiogroup",
    children: items.map((item, index) => {
      const value = item.value;
      const lib = value;
      const obj = {
        align: "right",
        selected: lib.buttonSize === value,
        label: item.label,
        onPress() {
          return closure_1_1(closure_0);
        }
      };
      items = [callback(lib(8083).FormRadioRow, obj), callback(lib(8083).FormDivider, {})];
      obj[0] = items;
      return callback2(React.Fragment, obj, value);
    })
  };
  items1 = [callback(_require(8083).FormSection, obj), , , , , ];
  obj1 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
  const items2 = [
    callback(_require(8083).FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((item, index) => {
      const value = item.value;
      const lib = value;
      const obj = {
        align: "right",
        selected: lib.buttonScale === value,
        label: item.label,
        onPress() {
          return closure_1_2(closure_0);
        }
      };
      items = [callback(lib(8083).FormRadioRow, obj), callback(lib(8083).FormDivider, {})];
      obj[0] = items;
      return callback2(React.Fragment, obj, value);
    })
  ];
  obj1[2] = items2;
  items1[1] = callback2(_require(8083).FormSection, obj1);
  items1[2] = callback(_require(8083).FormSection, { children: callback(_require(8083).FormSwitchRow, obj3) });
  const obj2 = { children: callback(_require(8083).FormSwitchRow, obj3) };
  items1[3] = callback(_require(8083).FormSection, { children: callback(_require(8083).FormSwitchRow, obj5) });
  const obj6 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
  const items3 = [callback(_require(8083).FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((item, index) => {
    const lib = item;
    const obj = {
      align: "right",
      selected: lib.iconPosition === item,
      label: item,
      onPress() {
        return closure_1_5(closure_0);
      }
    };
    items = [callback(lib(8083).FormRadioRow, obj), callback(lib(8083).FormDivider, {})];
    obj[0] = items;
    return callback2(React.Fragment, obj, item);
  });
  obj6[2] = items3;
  items1[4] = callback2(_require(8083).FormSection, obj6);
  const obj7 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
  const items5 = [callback(_require(8083).FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((item, index) => {
    const lib = item;
    let obj = { align: "right", selected: lib.enableLoadingState === item, label: null, onPress: null };
    let str = "Disabled";
    if (true === item) {
      str = "Enabled";
    }
    obj = { children: null };
    obj[2] = str;
    obj[3] = function onPress() {
      return closure_1_6(closure_0);
    };
    items = [callback(lib(8083).FormRadioRow, obj), callback(lib(8083).FormDivider, {})];
    obj[0] = items;
    let str2 = "disabled";
    if (true === item) {
      str2 = "enabled";
    }
    return callback2(React.Fragment, obj, str2);
  });
  obj7[2] = items5;
  items1[5] = callback2(_require(8083).FormSection, obj7);
  obj[0] = items1;
  items[1] = callback2(_require(8083).Form, obj);
  obj[0] = items;
  return callback2(_require(6950).BottomSheet, obj);
};