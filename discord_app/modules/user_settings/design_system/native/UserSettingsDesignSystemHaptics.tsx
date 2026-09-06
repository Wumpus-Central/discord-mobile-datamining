// === Module 15801: UserSettingsDesignSystemHaptics ===

// Module 15801 (UserSettingsDesignSystemHaptics)
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import Patterns from "Patterns" /* 4530 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import Card from "Card" /* 5607 */;
import noop from "module_19" /* 19 */;

require = fn;
function HapticButton(text) {
  const type = text.type;
  return closure_3(type(4975).Button, {
    variant: "secondary",
    onPress() {
      return HapticUtils.triggerHapticFeedback(type);
    },
    text: text.label
  });
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
createStyles = { type: haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT, label: "IMPACT_LIGHT" };
let items = [createStyles, , , , , , , , ];
createStyles = { type: haptics_HapticFeedbackTypesDefault.IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
items[1] = createStyles;
items[2] = { type: haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY, label: "IMPACT_HEAVY" };
let obj1 = { type: haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY, label: "IMPACT_HEAVY" };
items[3] = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
let obj2 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
items[4] = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
let obj3 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
items[5] = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
let obj4 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
items[6] = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
let obj5 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
items[7] = { type: haptics_HapticFeedbackTypesDefault.SOFT, label: "SOFT" };
let obj6 = { type: haptics_HapticFeedbackTypesDefault.SOFT, label: "SOFT" };
items[8] = { type: haptics_HapticFeedbackTypesDefault.SELECTION, label: "SELECTION" };
let obj7 = { type: haptics_HapticFeedbackTypesDefault.SELECTION, label: "SELECTION" };
let items1 = [{ type: haptics_HapticFeedbackTypesDefault.RIGID, label: "RIGID" }, , ];
let obj8 = { type: haptics_HapticFeedbackTypesDefault.RIGID, label: "RIGID" };
items1[1] = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
let obj9 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
items1[2] = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
const obj10 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
let items2 = [{ type: haptics_HapticFeedbackTypesDefault.CONFIRM, label: "CONFIRM" }, , , , , , , ];
const obj11 = { type: haptics_HapticFeedbackTypesDefault.CONFIRM, label: "CONFIRM" };
items2[1] = { type: haptics_HapticFeedbackTypesDefault.REJECT, label: "REJECT" };
const obj12 = { type: haptics_HapticFeedbackTypesDefault.REJECT, label: "REJECT" };
items2[2] = { type: haptics_HapticFeedbackTypesDefault.GESTURE_START, label: "GESTURE_START" };
const obj13 = { type: haptics_HapticFeedbackTypesDefault.GESTURE_START, label: "GESTURE_START" };
items2[3] = { type: haptics_HapticFeedbackTypesDefault.GESTURE_END, label: "GESTURE_END" };
const obj14 = { type: haptics_HapticFeedbackTypesDefault.GESTURE_END, label: "GESTURE_END" };
items2[4] = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_TICK, label: "SEGMENT_TICK" };
const obj15 = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_TICK, label: "SEGMENT_TICK" };
items2[5] = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
const obj16 = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
items2[6] = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_ON, label: "TOGGLE_ON" };
const obj17 = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_ON, label: "TOGGLE_ON" };
items2[7] = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_OFF, label: "TOGGLE_OFF" };
const obj18 = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_OFF, label: "TOGGLE_OFF" };
let items3 = [{ type: haptics_HapticFeedbackTypesDefault.CLOCK_TICK, label: "CLOCK_TICK" }, , , , , , , , , , , , ];
const obj19 = { type: haptics_HapticFeedbackTypesDefault.CLOCK_TICK, label: "CLOCK_TICK" };
items3[1] = { type: haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" };
const obj20 = { type: haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" };
items3[2] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
const obj21 = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
items3[3] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
const obj22 = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
items3[4] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" };
const obj23 = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" };
items3[5] = { type: haptics_HapticFeedbackTypesDefault.LONG_PRESS, label: "LONG_PRESS" };
const obj24 = { type: haptics_HapticFeedbackTypesDefault.LONG_PRESS, label: "LONG_PRESS" };
items3[6] = { type: haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
const obj25 = { type: haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
items3[7] = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" };
const obj26 = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" };
items3[8] = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
const obj27 = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
items3[9] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_CLICK, label: "EFFECT_CLICK" };
const obj28 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_CLICK, label: "EFFECT_CLICK" };
items3[10] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
const obj29 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
items3[11] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
const obj30 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
items3[12] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_TICK, label: "EFFECT_TICK" };
let items4 = [{ label: "Success", description: "oO.O", pattern: "success" }, { label: "Error", description: "OO.OO", pattern: "error" }, { label: "Warning", description: "O.O", pattern: "warning" }, { label: "Heartbeat", description: "oO--oO", pattern: "heartbeat" }, { label: "Triple Click", description: "o.o.o", pattern: "tripleClick" }, { label: "Notification", description: "o-O=o", pattern: "notification" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx");

export default function UserSettingsDesignSystemHaptics() {
  let obj = { contentContainerStyle: closure_5().container, children: null };
  obj = { spacing: 24, children: null };
  obj = { children: null };
  const obj1 = { children: null };
  items = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Semantic Types" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Existing haptic types with platform-specific remapping for the best feel." }), ];
  items[2] = items.map((label) => {
    label = label.label;
    return closure_1_3(HapticButton, { type: label.type, label }, label);
  });
  obj1.children = items;
  obj.children = React4(Stack_Stack.Stack, obj1);
  items1 = [React3(Card.Card, obj), , , , ];
  const obj2 = { children: null };
  const obj3 = { children: null };
  items2 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Direct 1:1 mappings for impact and notification feedback." }),
    items1.map((label) => {
      label = label.label;
      return closure_1_3(HapticButton, { type: label.type, label }, label);
    })
  ];
  obj3.children = items2;
  obj2.children = React4(Stack_Stack.Stack, obj3);
  items1[1] = React3(Card.Card, obj2);
  const obj4 = { children: null };
  const obj5 = { children: null };
  items3 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Feedback for gestures, toggles, and UI confirmations. New in v3." }),
    items2.map((label) => {
      label = label.label;
      return closure_1_3(HapticButton, { type: label.type, label }, label);
    })
  ];
  obj5.children = items3;
  obj4.children = React4(Stack_Stack.Stack, obj5);
  items1[2] = React3(Card.Card, obj4);
  const obj6 = { children: null };
  const obj7 = { children: null };
  items4 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3." }),
    items3.map((label) => {
      label = label.label;
      return closure_1_3(HapticButton, { type: label.type, label }, label);
    })
  ];
  obj7.children = items4;
  obj6.children = React4(Stack_Stack.Stack, obj7);
  items1[3] = React3(Card.Card, obj6);
  const obj8 = { children: null };
  const obj9 = { children: null };
  const items5 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap)." }),
    items4.map((description) => {
      ({ label, pattern: closure_0 } = description);
      return closure_3(closure_0(4975).Button, {
        variant: "secondary",
        onPress() {
          return Patterns.triggerPattern(Patterns.Patterns[closure_1_0]);
        },
        text: "" + label + " (" + description.description + ")"
      }, label);
    })
  ];
  obj9.children = items5;
  obj8.children = React4(Stack_Stack.Stack, obj9);
  items1[4] = React3(Card.Card, obj8);
  obj.children = items1;
  obj.children = React4(Stack_Stack.Stack, obj);
  return React3(ScrollView, obj);
};