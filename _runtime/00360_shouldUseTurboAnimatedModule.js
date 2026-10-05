// _runtime/00360_shouldUseTurboAnimatedModule.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";

export default function shouldUseTurboAnimatedModule() {
  const obj = javaScriptFlagGetterAll;
  const result = obj.cxxNativeAnimatedEnabled();
  return false;
}
