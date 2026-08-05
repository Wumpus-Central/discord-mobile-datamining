// discord_app/modules/keyboard/native/useAnimatedKeyboardHeight.tsx
const result = require("set").fileFinishedImporting("modules/keyboard/native/useAnimatedKeyboardHeight.tsx");

export default function useAnimatedKeyboardHeight() {
  return require("AnimatedKeyboardProvider.android.tsx").animatedKeyboardHeight;
};