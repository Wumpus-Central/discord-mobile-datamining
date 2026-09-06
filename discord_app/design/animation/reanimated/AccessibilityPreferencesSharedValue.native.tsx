// discord_app/design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx
import ReanimatedRexport from "../../../modules/reanimated/ReanimatedRexport.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const mutable = ReanimatedRexport.makeMutable({
  reduceMotion: false,
  prefersCrossfades: false,
  screenReaderEnabled: false,
});
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
