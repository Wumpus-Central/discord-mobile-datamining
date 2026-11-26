// _runtime/01918_keyframes.js
import CSSKeyframesRuleImpl from "01881_CSSKeyframesRuleImpl.js";

require = arg1;
const dependencyMap = arg6;

export default function keyframes(animationName) {
  const cSSKeyframesRuleImpl = new CSSKeyframesRuleImpl.CSSKeyframesRuleImpl(animationName);
  return cSSKeyframesRuleImpl;
}
