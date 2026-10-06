// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import Patterns from "../../../../../_runtime/04863_Patterns.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let description;

let c3;
let closure_4;
const ScrollView = react_native.ScrollView;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      let tmp4;
      let obj = type(576);
      const cResult = obj.c(5);
      const tmp = type;
      type = type.type;
      const label = type.label;
      if (cResult[0] !== type) {
        const fn = function l() {
          const obj = HapticUtils;
          return obj.triggerHapticFeedback(type);
        };
        cResult[0] = type;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === label) {
        let tmp5;
        if (cResult[3] === tmp4) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
      const tmp6 = closure_3(tmp(5601).Button, { variant: "secondary", onPress: tmp4, text: label });
      cResult[2] = label;
      cResult[3] = tmp4;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (text) => {
      const type = text.type;
      let obj = {
        variant: "secondary",
        onPress() {
          const obj = HapticUtils;
          return obj.triggerHapticFeedback(type);
        },
        text: text.label,
      };
      return closure_3(type(5601).Button, obj);
    };
let obj = { type: haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT, label: "IMPACT_LIGHT" };
let items = [obj, , , , , , , ,];
let obj2 = { type: haptics_HapticFeedbackTypesDefault.IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
items[1] = obj2;
let obj3 = { type: haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY, label: "IMPACT_HEAVY" };
items[2] = obj3;
let obj4 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
items[3] = obj4;
let obj5 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
items[4] = obj5;
let obj6 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
items[5] = obj6;
let obj7 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
items[6] = obj7;
let obj8 = { type: haptics_HapticFeedbackTypesDefault.SOFT, label: "SOFT" };
items[7] = obj8;
let obj9 = { type: haptics_HapticFeedbackTypesDefault.SELECTION, label: "SELECTION" };
items[8] = obj9;
let obj10 = { type: haptics_HapticFeedbackTypesDefault.RIGID, label: "RIGID" };
let items1 = [obj10, ,];
let obj11 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
items1[1] = obj11;
let obj12 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
items1[2] = obj12;
let obj13 = { type: haptics_HapticFeedbackTypesDefault.CONFIRM, label: "CONFIRM" };
let items2 = [obj13, { type: haptics_HapticFeedbackTypesDefault.REJECT, label: "REJECT" }, , , , , ,];
({ type: haptics_HapticFeedbackTypesDefault.REJECT, label: "REJECT" });
items2[2] = { type: haptics_HapticFeedbackTypesDefault.GESTURE_START, label: "GESTURE_START" };
({ type: haptics_HapticFeedbackTypesDefault.GESTURE_START, label: "GESTURE_START" });
items2[3] = { type: haptics_HapticFeedbackTypesDefault.GESTURE_END, label: "GESTURE_END" };
({ type: haptics_HapticFeedbackTypesDefault.GESTURE_END, label: "GESTURE_END" });
items2[4] = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_TICK, label: "SEGMENT_TICK" };
({ type: haptics_HapticFeedbackTypesDefault.SEGMENT_TICK, label: "SEGMENT_TICK" });
items2[5] = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
({ type: haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" });
items2[6] = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_ON, label: "TOGGLE_ON" };
({ type: haptics_HapticFeedbackTypesDefault.TOGGLE_ON, label: "TOGGLE_ON" });
items2[7] = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_OFF, label: "TOGGLE_OFF" };
({ type: haptics_HapticFeedbackTypesDefault.TOGGLE_OFF, label: "TOGGLE_OFF" });
let items3 = [{ type: haptics_HapticFeedbackTypesDefault.CLOCK_TICK, label: "CLOCK_TICK" }, , , , , , , , , , , ,];
({ type: haptics_HapticFeedbackTypesDefault.CLOCK_TICK, label: "CLOCK_TICK" });
items3[1] = { type: haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" };
({ type: haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" });
items3[2] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
({ type: haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" });
items3[3] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
({ type: haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" });
items3[4] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" };
({ type: haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" });
items3[5] = { type: haptics_HapticFeedbackTypesDefault.LONG_PRESS, label: "LONG_PRESS" };
({ type: haptics_HapticFeedbackTypesDefault.LONG_PRESS, label: "LONG_PRESS" });
items3[6] = { type: haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
({ type: haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" });
items3[7] = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" };
({ type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" });
items3[8] = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
({ type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" });
items3[9] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_CLICK, label: "EFFECT_CLICK" };
({ type: haptics_HapticFeedbackTypesDefault.EFFECT_CLICK, label: "EFFECT_CLICK" });
items3[10] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
({ type: haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" });
items3[11] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
({ type: haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" });
items3[12] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_TICK, label: "EFFECT_TICK" };
let items4 = [
  { label: "Success", description: "oO.O", pattern: "success" },
  { label: "Error", description: "OO.OO", pattern: "error" },
  { label: "Warning", description: "O.O", pattern: "warning" },
  { label: "Heartbeat", description: "oO--oO", pattern: "heartbeat" },
  { label: "Triple Click", description: "o.o.o", pattern: "tripleClick" },
  { label: "Notification", description: "o-O=o", pattern: "notification" },
];
({ type: haptics_HapticFeedbackTypesDefault.EFFECT_TICK, label: "EFFECT_TICK" });
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Stack;
      let Stack2;
      let Stack3;
      let Stack4;
      let Stack6;
      let first;
      let items5;
      let obj12;
      let obj3;
      let obj5;
      let obj7;
      let obj9;
      let tmp10;
      let tmp15;
      let tmp20;
      let tmp25;
      let tmp30;
      let obj = react2;
      const cResult = obj.c(7);
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: React3(Stack, obj3) };
        const Card = Card_Card.Card;
        obj3 = { children: items };
        Stack = Stack_Stack.Stack;
        items = [
          _false(Text_Text.Text, { variant: "text-lg/bold", children: "Semantic Types" }),
          _false(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: "Existing haptic types with platform-specific remapping for the best feel.",
          }),
        ];
        items[2] = items.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        });
        const tmp9 = _false(Card, obj2);
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { children: React3(Stack2, obj5) };
        const Card2 = Card_Card.Card;
        obj5 = { children: items1 };
        Stack2 = Stack_Stack.Stack;
        items1 = [
          _false(Text_Text.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }),
          _false(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: "Direct 1:1 mappings for impact and notification feedback.",
          }),
        ];
        items1[2] = items1.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        });
        const tmp14 = _false(Card2, obj4);
        cResult[1] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { children: React3(Stack3, obj7) };
        const Card3 = Card_Card.Card;
        obj7 = { children: items2 };
        Stack3 = Stack_Stack.Stack;
        items2 = [
          _false(Text_Text.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }),
          _false(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: "Feedback for gestures, toggles, and UI confirmations. New in v3.",
          }),
        ];
        items2[2] = items2.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        });
        const tmp19 = _false(Card3, obj6);
        cResult[2] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { children: React3(Stack4, obj9) };
        const Card4 = Card_Card.Card;
        obj9 = { children: items3 };
        Stack4 = Stack_Stack.Stack;
        items3 = [
          _false(Text_Text.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }),
          _false(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3.",
          }),
        ];
        items3[2] = items3.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        });
        const tmp24 = _false(Card4, obj8);
        cResult[3] = tmp24;
        tmp20 = tmp24;
      } else {
        tmp20 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj10 = { spacing: 24, children: items4 };
        items4 = [first, tmp10, tmp15, tmp20];
        const Stack5 = Stack_Stack.Stack;
        const obj11 = { children: React3(Stack6, obj12) };
        const Card5 = Card_Card.Card;
        obj12 = { children: items5 };
        Stack6 = Stack_Stack.Stack;
        items5 = [
          _false(Text_Text.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
          _false(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children:
              "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap).",
          }),
          items4.map((description) => {
            let closure_0;
            let label;
            ({ label, pattern: closure_0 } = description);
            description = description.description;
            let obj = {
              variant: "secondary",
              onPress() {
                const obj = Patterns;
                return obj.triggerPattern(Patterns.Patterns[closure_0]);
              },
              text: "" + label + " (" + description + ")",
            };
            const Button = closure_0(closure_1[7]).Button;
            return closure_3(Button, obj, label);
          }),
        ];
        items4[4] = _false(Card5, obj11);
        const tmp29 = React3(Stack5, obj10);
        cResult[4] = tmp29;
        tmp25 = tmp29;
      } else {
        tmp25 = cResult[4];
      }
      if (cResult[5] !== tmp4.container) {
        const obj13 = { contentContainerStyle: tmp4.container, children: tmp25 };
        const tmp33 = _false(ScrollView, obj13);
        cResult[5] = tmp4.container;
        cResult[6] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[6];
      }
      return tmp30;
    }
  : () => {
      let Stack;
      let Stack2;
      let Stack3;
      let Stack4;
      let Stack5;
      let Stack6;
      let items5;
      let obj10;
      let obj12;
      let obj2;
      let obj4;
      let obj6;
      let obj8;
      let obj = { contentContainerStyle: closure_5().container, children: React3(Stack, obj2) };
      obj2 = { spacing: 24, children: items1 };
      Stack = Stack_Stack.Stack;
      const obj3 = { children: React3(Stack2, obj4) };
      const Card = Card_Card.Card;
      obj4 = { children: items };
      Stack2 = Stack_Stack.Stack;
      items = [
        _false(Text_Text.Text, { variant: "text-lg/bold", children: "Semantic Types" }),
        _false(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "Existing haptic types with platform-specific remapping for the best feel.",
        }),
      ];
      items[2] = items.map((label) => {
        label = label.label;
        const obj = { type: label.type, label };
        return closure_1_3(closure_1_6, obj, label);
      });
      items1 = [_false(Card, obj3), , , ,];
      const obj5 = { children: React3(Stack3, obj6) };
      const Card2 = Card_Card.Card;
      obj6 = { children: items2 };
      Stack3 = Stack_Stack.Stack;
      items2 = [
        _false(Text_Text.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }),
        _false(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "Direct 1:1 mappings for impact and notification feedback.",
        }),
        items1.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        }),
      ];
      items1[1] = _false(Card2, obj5);
      const obj7 = { children: React3(Stack4, obj8) };
      const Card3 = Card_Card.Card;
      obj8 = { children: items3 };
      Stack4 = Stack_Stack.Stack;
      items3 = [
        _false(Text_Text.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }),
        _false(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "Feedback for gestures, toggles, and UI confirmations. New in v3.",
        }),
        items2.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        }),
      ];
      items1[2] = _false(Card3, obj7);
      const obj9 = { children: React3(Stack5, obj10) };
      const Card4 = Card_Card.Card;
      obj10 = { children: items4 };
      Stack5 = Stack_Stack.Stack;
      items4 = [
        _false(Text_Text.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }),
        _false(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3.",
        }),
        items3.map((label) => {
          label = label.label;
          const obj = { type: label.type, label };
          return closure_1_3(closure_1_6, obj, label);
        }),
      ];
      items1[3] = _false(Card4, obj9);
      const obj11 = { children: React3(Stack6, obj12) };
      const Card5 = Card_Card.Card;
      obj12 = { children: items5 };
      Stack6 = Stack_Stack.Stack;
      items5 = [
        _false(Text_Text.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
        _false(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap).",
        }),
        items4.map((description) => {
          let closure_0;
          let label;
          ({ label, pattern: closure_0 } = description);
          description = description.description;
          let obj = {
            variant: "secondary",
            onPress() {
              const obj = Patterns;
              return obj.triggerPattern(Patterns.Patterns[closure_0]);
            },
            text: "" + label + " (" + description + ")",
          };
          const Button = closure_0(closure_1[7]).Button;
          return closure_3(Button, obj, label);
        }),
      ];
      items1[4] = _false(Card5, obj11);
      return _false(ScrollView, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx",
);

export default tmp4;
