// _runtime/06680_baseGestureHandlerProps.js
const items = [
  "id",
  "enabled",
  "shouldCancelWhenOutside",
  "hitSlop",
  "cancelsTouchesInView",
  "userSelect",
  "activeCursor",
  "mouseButton",
  "enableContextMenu",
  "touchAction",
];
const items1 = [
  ...items,
  "waitFor",
  "simultaneousHandlers",
  "blocksHandlers",
  "onBegan",
  "onFailed",
  "onCancelled",
  "onActivated",
  "onEnded",
  "onGestureEvent",
  "onHandlerStateChange",
];
const sum = tmp2 + 1;
const sum1 = sum + 1;
const sum2 = sum1 + 1;
const sum3 = sum2 + 1;
const sum4 = sum3 + 1;
const sum5 = sum4 + 1;
const sum6 = sum5 + 1;
const items2 = [...items, "needsPointerData", "manualActivation"];

export const baseGestureHandlerProps = items1;
export const baseGestureHandlerWithDetectorProps = items2;
export const MouseButton = {
  LEFT: 1,
  [1]: "LEFT",
  RIGHT: 2,
  [2]: "RIGHT",
  MIDDLE: 4,
  [4]: "MIDDLE",
  BUTTON_4: 8,
  [8]: "BUTTON_4",
  BUTTON_5: 16,
  [16]: "BUTTON_5",
  ALL: 31,
  [31]: "ALL",
};
