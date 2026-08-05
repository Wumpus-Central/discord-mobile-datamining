// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx
import "noop";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
function HapticButton(text) {
  const type = text.type;
  return callback(type(4695).Button, {
    variant: "secondary",
    onPress() {
      return type(outer1_1[5]).triggerHapticFeedback(type);
    },
    text: text.label
  });
}
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { padding: 16, alignItems: "center" } });
createCacheKey = { type: require("IMPACT_LIGHT").IMPACT_LIGHT, label: "IMPACT_LIGHT" };
let items = [createCacheKey, , , , , , , , ];
createCacheKey = { type: require("IMPACT_LIGHT").IMPACT_MEDIUM, label: "IMPACT_MEDIUM" };
items[1] = createCacheKey;
items[2] = { type: require("IMPACT_LIGHT").IMPACT_HEAVY, label: "IMPACT_HEAVY" };
let obj1 = { type: require("IMPACT_LIGHT").IMPACT_HEAVY, label: "IMPACT_HEAVY" };
items[3] = { type: require("IMPACT_LIGHT").NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
let obj2 = { type: require("IMPACT_LIGHT").NOTIFICATION_ERROR, label: "NOTIFICATION_ERROR" };
items[4] = { type: require("IMPACT_LIGHT").DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
let obj3 = { type: require("IMPACT_LIGHT").DRAG_AND_DROP_START, label: "DRAG_AND_DROP_START" };
items[5] = { type: require("IMPACT_LIGHT").DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
let obj4 = { type: require("IMPACT_LIGHT").DRAG_AND_DROP_END, label: "DRAG_AND_DROP_END" };
items[6] = { type: require("IMPACT_LIGHT").DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
let obj5 = { type: require("IMPACT_LIGHT").DRAG_AND_DROP_MOVE, label: "DRAG_AND_DROP_MOVE" };
items[7] = { type: require("IMPACT_LIGHT").SOFT, label: "SOFT" };
let obj6 = { type: require("IMPACT_LIGHT").SOFT, label: "SOFT" };
items[8] = { type: require("IMPACT_LIGHT").SELECTION, label: "SELECTION" };
let obj7 = { type: require("IMPACT_LIGHT").SELECTION, label: "SELECTION" };
let items1 = [{ type: require("IMPACT_LIGHT").RIGID, label: "RIGID" }, , ];
let obj8 = { type: require("IMPACT_LIGHT").RIGID, label: "RIGID" };
items1[1] = { type: require("IMPACT_LIGHT").NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
let obj9 = { type: require("IMPACT_LIGHT").NOTIFICATION_SUCCESS, label: "NOTIFICATION_SUCCESS" };
items1[2] = { type: require("IMPACT_LIGHT").NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
const obj10 = { type: require("IMPACT_LIGHT").NOTIFICATION_WARNING, label: "NOTIFICATION_WARNING" };
let items2 = [{ type: require("IMPACT_LIGHT").CONFIRM, label: "CONFIRM" }, , , , , , , ];
const obj11 = { type: require("IMPACT_LIGHT").CONFIRM, label: "CONFIRM" };
items2[1] = { type: require("IMPACT_LIGHT").REJECT, label: "REJECT" };
const obj12 = { type: require("IMPACT_LIGHT").REJECT, label: "REJECT" };
items2[2] = { type: require("IMPACT_LIGHT").GESTURE_START, label: "GESTURE_START" };
const obj13 = { type: require("IMPACT_LIGHT").GESTURE_START, label: "GESTURE_START" };
items2[3] = { type: require("IMPACT_LIGHT").GESTURE_END, label: "GESTURE_END" };
const obj14 = { type: require("IMPACT_LIGHT").GESTURE_END, label: "GESTURE_END" };
items2[4] = { type: require("IMPACT_LIGHT").SEGMENT_TICK, label: "SEGMENT_TICK" };
const obj15 = { type: require("IMPACT_LIGHT").SEGMENT_TICK, label: "SEGMENT_TICK" };
items2[5] = { type: require("IMPACT_LIGHT").SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
const obj16 = { type: require("IMPACT_LIGHT").SEGMENT_FREQUENT_TICK, label: "SEGMENT_FREQUENT_TICK" };
items2[6] = { type: require("IMPACT_LIGHT").TOGGLE_ON, label: "TOGGLE_ON" };
const obj17 = { type: require("IMPACT_LIGHT").TOGGLE_ON, label: "TOGGLE_ON" };
items2[7] = { type: require("IMPACT_LIGHT").TOGGLE_OFF, label: "TOGGLE_OFF" };
const obj18 = { type: require("IMPACT_LIGHT").TOGGLE_OFF, label: "TOGGLE_OFF" };
let items3 = [{ type: require("IMPACT_LIGHT").CLOCK_TICK, label: "CLOCK_TICK" }, , , , , , , , , , , , ];
const obj19 = { type: require("IMPACT_LIGHT").CLOCK_TICK, label: "CLOCK_TICK" };
items3[1] = { type: require("IMPACT_LIGHT").CONTEXT_CLICK, label: "CONTEXT_CLICK" };
const obj20 = { type: require("IMPACT_LIGHT").CONTEXT_CLICK, label: "CONTEXT_CLICK" };
items3[2] = { type: require("IMPACT_LIGHT").KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
const obj21 = { type: require("IMPACT_LIGHT").KEYBOARD_PRESS, label: "KEYBOARD_PRESS" };
items3[3] = { type: require("IMPACT_LIGHT").KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
const obj22 = { type: require("IMPACT_LIGHT").KEYBOARD_RELEASE, label: "KEYBOARD_RELEASE" };
items3[4] = { type: require("IMPACT_LIGHT").KEYBOARD_TAP, label: "KEYBOARD_TAP" };
const obj23 = { type: require("IMPACT_LIGHT").KEYBOARD_TAP, label: "KEYBOARD_TAP" };
items3[5] = { type: require("IMPACT_LIGHT").LONG_PRESS, label: "LONG_PRESS" };
const obj24 = { type: require("IMPACT_LIGHT").LONG_PRESS, label: "LONG_PRESS" };
items3[6] = { type: require("IMPACT_LIGHT").TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
const obj25 = { type: require("IMPACT_LIGHT").TEXT_HANDLE_MOVE, label: "TEXT_HANDLE_MOVE" };
items3[7] = { type: require("IMPACT_LIGHT").VIRTUAL_KEY, label: "VIRTUAL_KEY" };
const obj26 = { type: require("IMPACT_LIGHT").VIRTUAL_KEY, label: "VIRTUAL_KEY" };
items3[8] = { type: require("IMPACT_LIGHT").VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
const obj27 = { type: require("IMPACT_LIGHT").VIRTUAL_KEY_RELEASE, label: "VIRTUAL_KEY_RELEASE" };
items3[9] = { type: require("IMPACT_LIGHT").EFFECT_CLICK, label: "EFFECT_CLICK" };
const obj28 = { type: require("IMPACT_LIGHT").EFFECT_CLICK, label: "EFFECT_CLICK" };
items3[10] = { type: require("IMPACT_LIGHT").EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
const obj29 = { type: require("IMPACT_LIGHT").EFFECT_DOUBLE_CLICK, label: "EFFECT_DOUBLE_CLICK" };
items3[11] = { type: require("IMPACT_LIGHT").EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
const obj30 = { type: require("IMPACT_LIGHT").EFFECT_HEAVY_CLICK, label: "EFFECT_HEAVY_CLICK" };
items3[12] = { type: require("IMPACT_LIGHT").EFFECT_TICK, label: "EFFECT_TICK" };
let items4 = [{ label: "Success", description: "oO.O", pattern: "success" }, { label: "Error", description: "OO.OO", pattern: "error" }, { label: "Warning", description: "O.O", pattern: "warning" }, { label: "Heartbeat", description: "oO--oO", pattern: "heartbeat" }, { label: "Triple Click", description: "o.o.o", pattern: "tripleClick" }, { label: "Notification", description: "o-O=o", pattern: "notification" }];
const obj31 = { type: require("IMPACT_LIGHT").EFFECT_TICK, label: "EFFECT_TICK" };
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemHaptics.tsx");

export default function UserSettingsDesignSystemHaptics() {
  let obj = { contentContainerStyle: callback3().container, children: null };
  obj = { spacing: 24, children: null };
  obj = { children: null };
  const obj1 = { children: null };
  const items = [callback(require(4281) /* Text */.Text, { variant: "text-lg/bold", children: "Semantic Types" }), callback(require(4281) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Existing haptic types with platform-specific remapping for the best feel." }), ];
  items[2] = items.map((label) => {
    label = label.label;
    return callback2(closure_6, { type: label.type, label }, label);
  });
  obj1[0] = items;
  obj[0] = callback2(require(4693) /* Stack */.Stack, obj1);
  const items1 = [callback(require(5317) /* PressableCard */.Card, obj), , , , ];
  const obj2 = { children: null };
  const obj3 = { children: null };
  const items2 = [
    callback(require(4281) /* Text */.Text, { variant: "text-lg/bold", children: "Impact / Notification Types" }),
    callback(require(4281) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Direct 1:1 mappings for impact and notification feedback." }),
    items1.map((label) => {
      label = label.label;
      return callback2(closure_6, { type: label.type, label }, label);
    })
  ];
  obj3[0] = items2;
  obj2[0] = callback2(require(4693) /* Stack */.Stack, obj3);
  items1[1] = callback(require(5317) /* PressableCard */.Card, obj2);
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items3 = [
    callback(require(4281) /* Text */.Text, { variant: "text-lg/bold", children: "Gesture / UI Types" }),
    callback(require(4281) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Feedback for gestures, toggles, and UI confirmations. New in v3." }),
    items2.map((label) => {
      label = label.label;
      return callback2(closure_6, { type: label.type, label }, label);
    })
  ];
  obj5[0] = items3;
  obj4[0] = callback2(require(4693) /* Stack */.Stack, obj5);
  items1[2] = callback(require(5317) /* PressableCard */.Card, obj4);
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items4 = [
    callback(require(4281) /* Text */.Text, { variant: "text-lg/bold", children: "Platform Haptic Types" }),
    callback(require(4281) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Native Android haptics with iOS Core Haptics approximations. Cross-platform in v3." }),
    items3.map((label) => {
      label = label.label;
      return callback2(closure_6, { type: label.type, label }, label);
    })
  ];
  obj7[0] = items4;
  obj6[0] = callback2(require(4693) /* Stack */.Stack, obj7);
  items1[3] = callback(require(5317) /* PressableCard */.Card, obj6);
  const obj8 = { children: null };
  const obj9 = { children: null };
  const items5 = [
    callback(require(4281) /* Text */.Text, { variant: "text-lg/bold", children: "Pattern Presets" }),
    callback(require(4281) /* Text */.Text, { variant: "text-md/medium", color: "text-subtle", children: "Built-in haptic sequences using triggerPattern(). Each preset uses a compact notation (o=soft, O=strong, .=short gap, -=medium gap, ==long gap)." }),
    items4.map((description) => {
      let closure_0;
      let label;
      ({ label, pattern: closure_0 } = description);
      const obj = {
        variant: "secondary",
        onPress() {
          return outer1_0(outer1_1[10]).triggerPattern(outer1_0(outer1_1[10]).Patterns[closure_0]);
        },
        text: null
      };
      obj[2] = "" + label + " (" + description.description + ")";
      return callback2(callback(table[4]).Button, obj, label);
    })
  ];
  obj9[0] = items5;
  obj8[0] = callback2(require(4693) /* Stack */.Stack, obj9);
  items1[4] = callback(require(5317) /* PressableCard */.Card, obj8);
  obj[1] = items1;
  obj[1] = callback2(require(4693) /* Stack */.Stack, obj);
  return callback(ScrollView, obj);
};