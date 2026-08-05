import { AnimatedKeyboardProvider.android } from "AnimatedKeyboardProvider.android.tsx";
// discord_app/modules/keyboard/native/useAnimatedKeyboardHeight.tsx
const result = require("set").fileFinishedImporting("modules/keyboard/native/useAnimatedKeyboardHeight.tsx");

export default function useAnimatedKeyboardHeight() {
  return AnimatedKeyboardProvider.android.animatedKeyboardHeight;
};