// === Module 15690: UserSettingsDesignSystemHaptics ===

// Module 15690 (UserSettingsDesignSystemHaptics)
import c from "c" /* 576 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import Patterns from "Patterns" /* 4857 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import Card from "Card" /* 5995 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = type(576).c(5);
  type = type.type;
  const label = type.label;
  if (cResult[0] !== type) {
    const fn = function l() {
      return HapticUtils.triggerHapticFeedback(type);
    };
    cResult[0] = type;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === label) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  const tmp6 = closure_3(type(5594).Button, { variant: "secondary", onPress: tmp4, text: label });
  cResult[2] = label;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
  const obj = type(576);
}) : ((text) => {
  const type = text.type;
  return closure_3(type(5594).Button, {
    variant: "secondary",
    onPress() {
      return HapticUtils.triggerHapticFeedback(type);
    },
    text: text.label
  });
});
let items = [{ type: haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT, label: "IMPACT_LIGHT" }, , , , , , , , ];
let obj3 = { type: haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT, label: "IMPACT_LIGHT" };
items[1] = { type: haptics_HapticFeedbackTypesDefault.IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
let obj4 = { type: haptics_HapticFeedbackTypesDefault.IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
items[2] = { type: haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY, label: "IMPACT_HEAVY" };
let obj5 = { type: haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY, label: "IMPACT_HEAVY" };
items[3] = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
let obj6 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
items[4] = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
let obj7 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
items[5] = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
let obj8 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
items[6] = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
let obj9 = { type: haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
items[7] = { type: haptics_HapticFeedbackTypesDefault.SOFT, label: "SOFT" };
let obj10 = { type: haptics_HapticFeedbackTypesDefault.SOFT, label: "SOFT" };
items[8] = { type: haptics_HapticFeedbackTypesDefault.SELECTION, label: "SELECTION" };
let obj11 = { type: haptics_HapticFeedbackTypesDefault.SELECTION, label: "SELECTION" };
let items1 = [{ type: haptics_HapticFeedbackTypesDefault.RIGID, label: "RIGID" }, , ];
let obj12 = { type: haptics_HapticFeedbackTypesDefault.RIGID, label: "RIGID" };
items1[1] = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
let obj13 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
items1[2] = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
const obj14 = { type: haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
let items2 = [{ type: haptics_HapticFeedbackTypesDefault.CONFIRM, label: "CONFIRM" }, , , , , , , ];
const obj15 = { type: haptics_HapticFeedbackTypesDefault.CONFIRM, label: "CONFIRM" };
items2[1] = { type: haptics_HapticFeedbackTypesDefault.REJECT, label: "REJECT" };
const obj16 = { type: haptics_HapticFeedbackTypesDefault.REJECT, label: "REJECT" };
items2[2] = { type: haptics_HapticFeedbackTypesDefault.GESTURE_START, label: "GESTURE_START" };
const obj17 = { type: haptics_HapticFeedbackTypesDefault.GESTURE_START, label: "GESTURE_START" };
items2[3] = { type: haptics_HapticFeedbackTypesDefault.GESTURE_END, label: "GESTURE_END" };
const obj18 = { type: haptics_HapticFeedbackTypesDefault.GESTURE_END, label: "GESTURE_END" };
items2[4] = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_TICK, label: "SEGMENT_TICK" };
const obj19 = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_TICK, label: "SEGMENT_TICK" };
items2[5] = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
const obj20 = { type: haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
items2[6] = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_ON, label: "TOGGLE_ON" };
const obj21 = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_ON, label: "TOGGLE_ON" };
items2[7] = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_OFF, label: "TOGGLE_OFF" };
const obj22 = { type: haptics_HapticFeedbackTypesDefault.TOGGLE_OFF, label: "TOGGLE_OFF" };
let items3 = [{ type: haptics_HapticFeedbackTypesDefault.CLOCK_TICK, label: "CLOCK_TICK" }, , , , , , , , , , , , ];
const obj23 = { type: haptics_HapticFeedbackTypesDefault.CLOCK_TICK, label: "CLOCK_TICK" };
items3[1] = { type: haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" };
const obj24 = { type: haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" };
items3[2] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
const obj25 = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
items3[3] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
const obj26 = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
items3[4] = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" };
const obj27 = { type: haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" };
items3[5] = { type: haptics_HapticFeedbackTypesDefault.LONG_PRESS, label: "LONG_PRESS" };
const obj28 = { type: haptics_HapticFeedbackTypesDefault.LONG_PRESS, label: "LONG_PRESS" };
items3[6] = { type: haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
const obj29 = { type: haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
items3[7] = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" };
const obj30 = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" };
items3[8] = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
const obj31 = { type: haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
items3[9] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_CLICK, label: "EFFECT_CLICK" };
const obj32 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_CLICK, label: "EFFECT_CLICK" };
items3[10] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
const obj33 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
items3[11] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
const obj34 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
items3[12] = { type: haptics_HapticFeedbackTypesDefault.EFFECT_TICK, label: "EFFECT_TICK" };
let items4 = [{ label: "Success", description: "oO.O", pattern: "success" }, { label: "Error", description: "OO.OO", pattern: "error" }, { label: "Warning", description: "O.O", pattern: "warning" }, { label: "Heartbeat", description: "oO--oO", pattern: "heartbeat" }, { label: "Triple Click", description: "o.o.o", pattern: "tripleClick" }, { label: "Notification", description: "o-O=o", pattern: "notification" }];
ReactCompilerGating = fn(558);
const obj35 = { type: haptics_HapticFeedbackTypesDefault.EFFECT_TICK, label: "EFFECT_TICK" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const obj3 = { children: null };
    items = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Semantic Types" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Existing haptic types with platform-specific remapping for the best feel." }), ];
    items[2] = items.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    });
    obj3.children = items;
    obj2.children = React4(Stack_Stack.Stack, obj3);
    const tmp9 = React3(Card.Card, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { children: null };
    const obj5 = { children: null };
    items1 = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Direct 1:1 mappings for impact and notification feedback." }), ];
    items1[2] = items1.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    });
    obj5.children = items1;
    obj4.children = React4(Stack_Stack.Stack, obj5);
    const tmp14 = React3(Card.Card, obj4);
    cResult[1] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { children: null };
    const obj7 = { children: null };
    items2 = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Feedback for gestures, toggles, and UI confirmations. New in v3." }), ];
    items2[2] = items2.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    });
    obj7.children = items2;
    obj6.children = React4(Stack_Stack.Stack, obj7);
    const tmp19 = React3(Card.Card, obj6);
    cResult[2] = tmp19;
    let tmp15 = tmp19;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { children: null };
    const obj9 = { children: null };
    items3 = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3." }), ];
    items3[2] = items3.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    });
    obj9.children = items3;
    obj8.children = React4(Stack_Stack.Stack, obj9);
    const tmp24 = React3(Card.Card, obj8);
    cResult[3] = tmp24;
    let tmp20 = tmp24;
  } else {
    tmp20 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { spacing: 24, children: null };
    items4 = [first, tmp10, tmp15, tmp20, ];
    const obj11 = { children: null };
    const obj12 = { children: null };
    const items5 = [
      React3(Text_Text.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
      React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap)." }),
      items4.map((description) => {
          ({ label, pattern: closure_0 } = description);
          return closure_3(closure_0(5594).Button, {
            variant: "secondary",
            onPress() {
              return Patterns.triggerPattern(Patterns.Patterns[closure_1_0]);
            },
            text: "" + label + " (" + description.description + ")"
          }, label);
        })
    ];
    obj12.children = items5;
    obj11.children = React4(Stack_Stack.Stack, obj12);
    items4[4] = React3(Card.Card, obj11);
    obj10.children = items4;
    const tmp29 = React4(Stack_Stack.Stack, obj10);
    cResult[4] = tmp29;
    let tmp25 = tmp29;
  } else {
    tmp25 = cResult[4];
  }
  if (cResult[5] !== tmp4.container) {
    const obj13 = { contentContainerStyle: tmp4.container, children: tmp25 };
    const tmp33 = React3(ScrollView, obj13);
    cResult[5] = tmp4.container;
    cResult[6] = tmp33;
    let tmp30 = tmp33;
  } else {
    tmp30 = cResult[6];
  }
  return tmp30;
}) : (() => {
  const obj = { contentContainerStyle: closure_5().container, children: null };
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const obj4 = { children: null };
  items = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Semantic Types" }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Existing haptic types with platform-specific remapping for the best feel." }), ];
  items[2] = items.map((label) => {
    label = label.label;
    return closure_1_3(closure_1_6, { type: label.type, label }, label);
  });
  obj4.children = items;
  obj3.children = React4(Stack_Stack.Stack, obj4);
  items1 = [React3(Card.Card, obj3), , , , ];
  const obj5 = { children: null };
  const obj6 = { children: null };
  items2 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Direct 1:1 mappings for impact and notification feedback." }),
    items1.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    })
  ];
  obj6.children = items2;
  obj5.children = React4(Stack_Stack.Stack, obj6);
  items1[1] = React3(Card.Card, obj5);
  const obj7 = { children: null };
  const obj8 = { children: null };
  items3 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Feedback for gestures, toggles, and UI confirmations. New in v3." }),
    items2.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    })
  ];
  obj8.children = items3;
  obj7.children = React4(Stack_Stack.Stack, obj8);
  items1[2] = React3(Card.Card, obj7);
  const obj9 = { children: null };
  const obj10 = { children: null };
  items4 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3." }),
    items3.map((label) => {
      label = label.label;
      return closure_1_3(closure_1_6, { type: label.type, label }, label);
    })
  ];
  obj10.children = items4;
  obj9.children = React4(Stack_Stack.Stack, obj10);
  items1[3] = React3(Card.Card, obj9);
  const obj11 = { children: null };
  const obj12 = { children: null };
  const items5 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap)." }),
    items4.map((description) => {
      ({ label, pattern: closure_0 } = description);
      return closure_3(closure_0(5594).Button, {
        variant: "secondary",
        onPress() {
          return Patterns.triggerPattern(Patterns.Patterns[closure_1_0]);
        },
        text: "" + label + " (" + description.description + ")"
      }, label);
    })
  ];
  obj12.children = items5;
  obj11.children = React4(Stack_Stack.Stack, obj12);
  items1[4] = React3(Card.Card, obj11);
  obj2.children = items1;
  obj.children = React4(Stack_Stack.Stack, obj2);
  return React3(ScrollView, obj);
});