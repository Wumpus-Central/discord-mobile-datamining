// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import IMPACT_LIGHTDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableCard from "../../../../design/components/Card/native/Card.native.tsx";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function HapticButton(text) {
  const type = text.type;
  return callback(type(4745).Button, {
    variant: "secondary",
    onPress() {
      return type(dependencyMap[5]).triggerHapticFeedback(type);
    },
    text: text.label
  });
}
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { padding: 16, alignItems: "center" } });
createCacheKey = { type: IMPACT_LIGHTDefault.IMPACT_LIGHT, label: "IMPACT_LIGHT" };
let items = [createCacheKey, , , , , , , , ];
createCacheKey = { type: IMPACT_LIGHTDefault.IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
items[1] = createCacheKey;
items[2] = { type: IMPACT_LIGHTDefault.IMPACT_HEAVY, label: "IMPACT_HEAVY" };
items[3] = { type: IMPACT_LIGHTDefault.NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
items[4] = { type: IMPACT_LIGHTDefault.DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
items[5] = { type: IMPACT_LIGHTDefault.DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
items[6] = { type: IMPACT_LIGHTDefault.DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
items[7] = { type: IMPACT_LIGHTDefault.SOFT, label: "SOFT" };
items[8] = { type: IMPACT_LIGHTDefault.SELECTION, label: "SELECTION" };
let items1 = [{ type: IMPACT_LIGHTDefault.RIGID, label: "RIGID" }, , ];
items1[1] = { type: IMPACT_LIGHTDefault.NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
items1[2] = { type: IMPACT_LIGHTDefault.NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
let items2 = [{ type: IMPACT_LIGHTDefault.CONFIRM, label: "CONFIRM" }, , , , , , , ];
items2[1] = { type: IMPACT_LIGHTDefault.REJECT, label: "REJECT" };
items2[2] = { type: IMPACT_LIGHTDefault.GESTURE_START, label: "GESTURE_START" };
items2[3] = { type: IMPACT_LIGHTDefault.GESTURE_END, label: "GESTURE_END" };
items2[4] = { type: IMPACT_LIGHTDefault.SEGMENT_TICK, label: "SEGMENT_TICK" };
items2[5] = { type: IMPACT_LIGHTDefault.SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
items2[6] = { type: IMPACT_LIGHTDefault.TOGGLE_ON, label: "TOGGLE_ON" };
items2[7] = { type: IMPACT_LIGHTDefault.TOGGLE_OFF, label: "TOGGLE_OFF" };
let items3 = [{ type: IMPACT_LIGHTDefault.CLOCK_TICK, label: "CLOCK_TICK" }, , , , , , , , , , , , ];
items3[1] = { type: IMPACT_LIGHTDefault.CONTEXT_CLICK, label: "CONTEXT_CLICK" };
items3[2] = { type: IMPACT_LIGHTDefault.KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
items3[3] = { type: IMPACT_LIGHTDefault.KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
items3[4] = { type: IMPACT_LIGHTDefault.KEYBOARD_TAP, label: "KEYBOARD_TAP" };
items3[5] = { type: IMPACT_LIGHTDefault.LONG_PRESS, label: "LONG_PRESS" };
items3[6] = { type: IMPACT_LIGHTDefault.TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
items3[7] = { type: IMPACT_LIGHTDefault.VIRTUAL_KEY, label: "VIRTUAL_KEY" };
items3[8] = { type: IMPACT_LIGHTDefault.VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
items3[9] = { type: IMPACT_LIGHTDefault.EFFECT_CLICK, label: "EFFECT_CLICK" };
items3[10] = { type: IMPACT_LIGHTDefault.EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
items3[11] = { type: IMPACT_LIGHTDefault.EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
items3[12] = { type: IMPACT_LIGHTDefault.EFFECT_TICK, label: "EFFECT_TICK" };
let items4 = [{ label: "Success", description: "oO.O", pattern: "success" }, { label: "Error", description: "OO.OO", pattern: "error" }, { label: "Warning", description: "O.O", pattern: "warning" }, { label: "Heartbeat", description: "oO--oO", pattern: "heartbeat" }, { label: "Triple Click", description: "o.o.o", pattern: "tripleClick" }, { label: "Notification", description: "o-O=o", pattern: "notification" }];
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx");

export default function UserSettingsDesignSystemHaptics() {
  { contentContainerStyle: callback3().container, children: null };
  const obj = { children: null };
  obj1 = { children: null };
  items = [callback(Text.Text, { variant: "text-lg/bold", children: "Semantic Types" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Existing haptic types with platform-specific remapping for the best feel." }), ];
  items[2] = items.map((item, index) => {
    const label = item.label;
    return callback2(closure_6, { type: item.type, label }, label);
  });
  obj1[0] = items;
  obj[0] = callback2(Stack.Stack, obj1);
  items1 = [callback(PressableCard.Card, obj), , , , ];
  const obj2 = { children: null };
  const obj3 = { children: null };
  items2 = [
    callback(Text.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }),
    callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Direct 1:1 mappings for impact and notification feedback." }),
    items1.map((item, index) => {
      const label = item.label;
      return callback2(closure_6, { type: item.type, label }, label);
    })
  ];
  obj3[0] = items2;
  obj2[0] = callback2(Stack.Stack, obj3);
  items1[1] = callback(PressableCard.Card, obj2);
  const obj4 = { children: null };
  const obj5 = { children: null };
  items3 = [
    callback(Text.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }),
    callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Feedback for gestures, toggles, and UI confirmations. New in v3." }),
    items2.map((item, index) => {
      const label = item.label;
      return callback2(closure_6, { type: item.type, label }, label);
    })
  ];
  obj5[0] = items3;
  obj4[0] = callback2(Stack.Stack, obj5);
  items1[2] = callback(PressableCard.Card, obj4);
  const obj6 = { children: null };
  const obj7 = { children: null };
  items4 = [
    callback(Text.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }),
    callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3." }),
    items3.map((item, index) => {
      const label = item.label;
      return callback2(closure_6, { type: item.type, label }, label);
    })
  ];
  obj7[0] = items4;
  obj6[0] = callback2(Stack.Stack, obj7);
  items1[3] = callback(PressableCard.Card, obj6);
  const obj8 = { children: null };
  const obj9 = { children: null };
  const items5 = [
    callback(Text.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
    callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap)." }),
    items4.map((item, index) => {
      ({ label, pattern: closure_0 } = item);
      return callback2(callback(table[4]).Button, {
        variant: "secondary",
        onPress() {
          return closure_1_0(closure_1_1[10]).triggerPattern(closure_1_0(closure_1_1[10]).Patterns[closure_0]);
        },
        text: "" + label + " (" + item.description + ")"
      }, label);
    })
  ];
  obj9[0] = items5;
  obj8[0] = callback2(Stack.Stack, obj9);
  items1[4] = callback(PressableCard.Card, obj8);
  obj[1] = items1;
  obj[1] = callback2(Stack.Stack, obj);
  return callback(ScrollView, obj);
};