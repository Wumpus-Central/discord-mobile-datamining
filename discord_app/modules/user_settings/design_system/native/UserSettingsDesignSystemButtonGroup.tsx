// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import _modDef6894 from "../../../../../_runtime/metro/06894__.js";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 64 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(15);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" });
        const tmp9 = hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "By default, stacks buttons vertically. This is best for buttons with text.",
        });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          text: "Agree",
          variant: "primary",
          onPress() {},
        };
        const tmp12 = hasOwnProperty(components_Button_Button.Button, obj2);
        cResult[2] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const obj4 = { children: null };
        const items = [tmp5, tmp6];
        const obj5 = { children: null };
        const items1 = [tmp10];
        const obj6 = {
          text: "Cancel",
          variant: "secondary",
          onPress() {},
        };
        items1[1] = hasOwnProperty(components_Button_Button.Button, obj6);
        obj5.children = items1;
        items[2] = timestampProducer(ButtonGroup.ButtonGroup, obj5);
        obj4.children = items;
        obj3.children = timestampProducer(Stack_Stack.Stack, obj4);
        const tmp17 = hasOwnProperty(React3, obj3);
        cResult[3] = tmp17;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" });
        const tmp22 = hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "For IconButtons, a horizontal layout is recommended",
        });
        cResult[4] = tmp21;
        cResult[5] = tmp22;
        let tmp19 = tmp22;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[4];
        tmp19 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = {
          accessibilityLabel: "Settings",
          variant: "secondary",
          icon: _modDef6894,
          onPress() {},
        };
        const tmp26 = hasOwnProperty(IconButton.IconButton, obj7);
        cResult[6] = tmp26;
        let tmp23 = tmp26;
      } else {
        tmp23 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { children: null };
        const obj9 = { children: null };
        const items2 = [tmp18, tmp19];
        const obj10 = { direction: "horizontal", children: null };
        const items3 = [tmp23];
        const obj11 = {
          accessibilityLabel: "Settings",
          variant: "secondary",
          icon: _modDef6894,
          onPress() {},
        };
        items3[1] = hasOwnProperty(IconButton.IconButton, obj11);
        obj10.children = items3;
        items2[2] = timestampProducer(ButtonGroup.ButtonGroup, obj10);
        obj9.children = items2;
        obj8.children = timestampProducer(Stack_Stack.Stack, obj9);
        const tmp32 = hasOwnProperty(React3, obj8);
        cResult[7] = tmp32;
        let tmp27 = tmp32;
      } else {
        tmp27 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp37 = hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" });
        const tmp38 = hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout.",
        });
        const tmp39 = hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "The Button with text must have the grow prop.",
        });
        cResult[8] = tmp39;
        cResult[9] = tmp37;
        cResult[10] = tmp38;
        let tmp35 = tmp38;
        let tmp34 = tmp37;
        let tmp33 = tmp39;
      } else {
        tmp33 = cResult[8];
        tmp34 = cResult[9];
        tmp35 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = {
          text: "Search",
          variant: "secondary",
          grow: true,
          onPress() {},
        };
        const tmp42 = hasOwnProperty(components_Button_Button.Button, obj12);
        cResult[11] = tmp42;
        let tmp40 = tmp42;
      } else {
        tmp40 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = { spacing: 24, children: null };
        const items4 = [tmp13, tmp27];
        const obj14 = { children: null };
        const obj15 = { children: null };
        const items5 = [tmp34, tmp35, tmp33, , ,];
        const obj16 = { direction: "horizontal", children: null };
        const items6 = [tmp40];
        const obj17 = {
          accessibilityLabel: "Cancel",
          variant: "secondary",
          icon: _modDef6894,
          onPress() {},
        };
        items6[1] = hasOwnProperty(IconButton.IconButton, obj17);
        obj16.children = items6;
        items5[3] = timestampProducer(ButtonGroup.ButtonGroup, obj16);
        items5[4] = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-critical",
          children: "More than one text button should not be put in a horizontal group.",
        });
        items5[5] = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children:
            "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons.",
        });
        obj15.children = items5;
        obj14.children = timestampProducer(Stack_Stack.Stack, obj15);
        items4[2] = hasOwnProperty(React3, obj14);
        obj13.children = items4;
        const tmp48 = timestampProducer(Stack_Stack.Stack, obj13);
        cResult[12] = tmp48;
        let tmp43 = tmp48;
      } else {
        tmp43 = cResult[12];
      }
      if (cResult[13] !== tmp4.container) {
        const obj18 = { children: null };
        const obj19 = { style: tmp4.container, children: tmp43 };
        obj18.children = hasOwnProperty(React3, obj19);
        const tmp53 = hasOwnProperty(React4, obj18);
        cResult[13] = tmp4.container;
        cResult[14] = tmp53;
        let tmp49 = tmp53;
      } else {
        tmp49 = cResult[14];
      }
      return tmp49;
    }
  : () => {
      const obj = { children: null };
      const obj2 = { style: closure_7().container, children: null };
      const obj3 = { spacing: 24, children: null };
      const obj4 = { children: null };
      const obj5 = { children: null };
      const items = [
        hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Text Button Example" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "By default, stacks buttons vertically. This is best for buttons with text.",
        }),
      ];
      const obj6 = { children: null };
      const items1 = [
        hasOwnProperty(components_Button_Button.Button, {
          text: "Agree",
          variant: "primary",
          onPress() {},
        }),
        hasOwnProperty(components_Button_Button.Button, {
          text: "Cancel",
          variant: "secondary",
          onPress() {},
        }),
      ];
      obj6.children = items1;
      items[2] = timestampProducer(ButtonGroup.ButtonGroup, obj6);
      obj5.children = items;
      obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
      const items2 = [hasOwnProperty(React3, obj4), ,];
      const obj9 = { children: null };
      const obj10 = { children: null };
      const items3 = [
        hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "IconButton Example" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "For IconButtons, a horizontal layout is recommended",
        }),
      ];
      const obj11 = { direction: "horizontal", children: null };
      const items4 = [
        hasOwnProperty(IconButton.IconButton, {
          accessibilityLabel: "Settings",
          variant: "secondary",
          icon: _modDef6894,
          onPress() {},
        }),
      ];
      const obj12 = {
        accessibilityLabel: "Settings",
        variant: "secondary",
        icon: _modDef6894,
        onPress() {},
      };
      const obj7 = {
        text: "Agree",
        variant: "primary",
        onPress() {},
      };
      const obj8 = {
        text: "Cancel",
        variant: "secondary",
        onPress() {},
      };
      items4[1] = hasOwnProperty(IconButton.IconButton, {
        accessibilityLabel: "Settings",
        variant: "secondary",
        icon: _modDef6894,
        onPress() {},
      });
      obj11.children = items4;
      items3[2] = timestampProducer(ButtonGroup.ButtonGroup, obj11);
      obj10.children = items3;
      obj9.children = timestampProducer(Stack_Stack.Stack, obj10);
      items2[1] = hasOwnProperty(React3, obj9);
      const obj14 = { children: null };
      const obj15 = { children: null };
      const items5 = [
        hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Mixed Buttons Example" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "A single text button can be used in a ButtonGroup with smaller IconButtons, using the horizontal layout.",
        }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "The Button with text must have the grow prop.",
        }),
        ,
        ,
      ];
      const obj16 = { direction: "horizontal", children: null };
      const items6 = [
        hasOwnProperty(components_Button_Button.Button, {
          text: "Search",
          variant: "secondary",
          grow: true,
          onPress() {},
        }),
      ];
      const obj13 = {
        accessibilityLabel: "Settings",
        variant: "secondary",
        icon: _modDef6894,
        onPress() {},
      };
      const obj17 = {
        text: "Search",
        variant: "secondary",
        grow: true,
        onPress() {},
      };
      items6[1] = hasOwnProperty(IconButton.IconButton, {
        accessibilityLabel: "Cancel",
        variant: "secondary",
        icon: _modDef6894,
        onPress() {},
      });
      obj16.children = items6;
      items5[3] = timestampProducer(ButtonGroup.ButtonGroup, obj16);
      items5[4] = hasOwnProperty(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-feedback-critical",
        children: "More than one text button should not be put in a horizontal group.",
      });
      items5[5] = hasOwnProperty(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children:
          "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons.",
      });
      obj15.children = items5;
      obj14.children = timestampProducer(Stack_Stack.Stack, obj15);
      items2[2] = hasOwnProperty(React3, obj14);
      obj3.children = items2;
      obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
      obj.children = hasOwnProperty(React3, obj2);
      return hasOwnProperty(React4, obj);
    };
