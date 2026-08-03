// === Module 14644: UserSettingsDesignSystemButtonGroup ===

// Module 14644 (UserSettingsDesignSystemButtonGroup)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default function UserSettingsDesignSystemButtonGroup() {
  let obj = { children: null };
  obj = { style: callback3().container, children: null };
  obj = { spacing: 24, children: null };
  const obj1 = { children: null };
  const obj2 = { children: null };
  const items = [callback(require(4251) /* Text */.Text, { variant: "text-lg/bold", children: "Text Button Example" }), callback(require(4251) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks buttons vertically. This is best for buttons with text." }), ];
  const obj3 = { children: null };
  const items1 = [
    callback(require(4666) /* Button */.Button, {
      text: "Agree",
      variant: "primary",
      onPress() {

      }
    }),
    callback(require(4666) /* Button */.Button, {
      text: "Cancel",
      variant: "secondary",
      onPress() {

      }
    })
  ];
  obj3[0] = items1;
  items[2] = callback2(require(5088) /* ButtonGroup */.ButtonGroup, obj3);
  obj2[0] = items;
  obj1[0] = callback2(require(4664) /* Stack */.Stack, obj2);
  const items2 = [callback(closure_3, obj1), , ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items3 = [callback(require(4251) /* Text */.Text, { variant: "text-lg/bold", children: "IconButton Example" }), callback(require(4251) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "For IconButtons, a horizontal layout is recommended" }), ];
  const obj8 = { direction: "horizontal", children: null };
  const obj9 = { accessibilityLabel: "Settings", variant: "secondary", icon: null, onPress: null };
  obj9[2] = importDefault(5911);
  obj9[3] = function onPress() {

  };
  const items4 = [callback(require(7660) /* IconButton */.IconButton, obj9), ];
  const obj10 = { accessibilityLabel: "Settings", variant: "secondary", icon: null, onPress: null };
  obj10[2] = importDefault(5911);
  obj10[3] = function onPress() {

  };
  items4[1] = callback(require(7660) /* IconButton */.IconButton, obj10);
  obj8[1] = items4;
  items3[2] = callback2(require(5088) /* ButtonGroup */.ButtonGroup, obj8);
  obj7[0] = items3;
  obj6[0] = callback2(require(4664) /* Stack */.Stack, obj7);
  items2[1] = callback(closure_3, obj6);
  const obj11 = { children: null };
  const obj12 = { children: null };
  const items5 = [callback(require(4251) /* Text */.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }), callback(require(4251) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout." }), callback(require(4251) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "The Button with text must have the grow prop." }), , , ];
  const obj13 = { direction: "horizontal", children: null };
  const items6 = [
    callback(require(4666) /* Button */.Button, {
      text: "Search",
      variant: "secondary",
      grow: true,
      onPress() {

      }
    }),

  ];
  const obj15 = { accessibilityLabel: "Cancel", variant: "secondary", icon: null, onPress: null };
  obj15[2] = importDefault(5911);
  obj15[3] = function onPress() {

  };
  items6[1] = callback(require(7660) /* IconButton */.IconButton, obj15);
  obj13[1] = items6;
  items5[3] = callback2(require(5088) /* ButtonGroup */.ButtonGroup, obj13);
  items5[4] = callback(require(4251) /* Text */.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children: "More than one text button should not be put in a horizontal group." });
  items5[5] = callback(require(4251) /* Text */.Text, { variant: "text-sm/medium", color: "text-subtle", children: "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons." });
  obj12[0] = items5;
  obj11[0] = callback2(require(4664) /* Stack */.Stack, obj12);
  items2[2] = callback(closure_3, obj11);
  obj[1] = items2;
  obj[1] = callback2(require(4664) /* Stack */.Stack, obj);
  obj[0] = callback(closure_3, obj);
  return callback(closure_4, obj);
};