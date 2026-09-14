// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];
let items1 = [
  { value: 6, label: "6" },
  { value: 8, label: "8" },
];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx",
);

export default function UserSettingsDesignSystemButtonActionSheet() {
  const tmp = useDesignSystemSettingsStateDefault();
  _require = tmp;
  importDefault = noop.useCallback((buttonSize) => {
    buttonSize(1247).batchUpdates(() => closure_1(closure_2[2]).setState({ buttonSize }));
  }, []);
  dependencyMap = noop.useCallback((buttonScale) => {
    buttonScale(1247).batchUpdates(() => closure_1(closure_2[2]).setState({ buttonScale }));
  }, []);
  noop = noop.useCallback((showDisabled) => {
    showDisabled(1247).batchUpdates(() => closure_1(closure_2[2]).setState({ showDisabled }));
  }, []);
  closure_4 = noop.useCallback((showIcon) => {
    showIcon(1247).batchUpdates(() => closure_1(closure_2[2]).setState({ showIcon }));
  }, []);
  closure_5 = noop.useCallback((iconPosition) => {
    iconPosition(1247).batchUpdates(() => closure_1(closure_2[2]).setState({ iconPosition }));
  }, []);
  noop.useCallback((enableLoadingState) => {
    enableLoadingState(1247).batchUpdates(() => closure_1(closure_2[2]).setState({ enableLoadingState }));
  }, []);
  let obj = { children: null };
  items = [closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Button Settings" })];
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
          closure_4(closure_0(8716).FormRadioRow, {
            align: "right",
            selected: closure_0.buttonSize === value,
            label: label.label,
            onPress() {
              return closure_1(value);
            },
          }),
          closure_4(closure_0(8716).FormDivider, {}),
        ];
        obj.children = items;
        return closure_5(React.Fragment, obj, value);
      }),
    }),
    ,
    ,
    ,
    ,
  ];
  const obj4 = { title: "Button Scale", accessibilityRole: "radiogroup", children: null };
  const items2 = [
    closure_4(require("Form").FormHint, {
      children: "The amount in pixels that the button width will scale when pressed",
    }),
    items1.map((label) => {
      value = label.value;
      closure_0 = value;
      const obj = { children: null };
      items = [
        closure_4(closure_0(8716).FormRadioRow, {
          align: "right",
          selected: closure_0.buttonScale === value,
          label: label.label,
          onPress() {
            return closure_2(value);
          },
        }),
        closure_4(closure_0(8716).FormDivider, {}),
      ];
      obj.children = items;
      return closure_5(React.Fragment, obj, value);
    }),
  ];
  obj4.children = items2;
  items1[1] = closure_5(require("Form").FormSection, obj4);
  const obj5 = {
    children: closure_4(require("Form").FormSwitchRow, {
      label: "Disabled",
      value: tmp.showDisabled,
      onValueChange(arg0) {
        return React(arg0);
      },
    }),
  };
  items1[2] = closure_4(require("Form").FormSection, obj5);
  const obj7 = {
    children: closure_4(require("Form").FormSwitchRow, {
      label: "Show Icons",
      value: tmp.showIcon,
      onValueChange(arg0) {
        return closure_4(arg0);
      },
    }),
  };
  items1[3] = closure_4(require("Form").FormSection, obj7);
  const obj9 = { title: "Icon Position", accessibilityRole: "radiogroup", children: null };
  const items3 = [
    closure_4(require("Form").FormHint, {
      children: "Whether to show the example icon on the left (default) or right.",
    }),
  ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    closure_0 = label;
    const obj = { children: null };
    items = [
      closure_4(closure_0(8716).FormRadioRow, {
        align: "right",
        selected: closure_0.iconPosition === label,
        label,
        onPress() {
          return closure_5(closure_0);
        },
      }),
      closure_4(closure_0(8716).FormDivider, {}),
    ];
    obj.children = items;
    return closure_5(React.Fragment, obj, label);
  });
  obj9.children = items3;
  items1[4] = closure_5(require("Form").FormSection, obj9);
  const obj10 = { title: "Loading state", accessibilityRole: "radiogroup", children: null };
  const items5 = [
    closure_4(require("Form").FormHint, {
      children: "Whether or not to show a loading state when a button is pressed",
    }),
  ];
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
    items = [closure_4(closure_0(8716).FormRadioRow, obj), closure_4(closure_0(8716).FormDivider, {})];
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
}
