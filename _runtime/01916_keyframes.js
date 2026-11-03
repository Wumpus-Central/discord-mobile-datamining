// _runtime/01916_keyframes.js
import CSSKeyframesRuleImpl from "01879_CSSKeyframesRuleImpl.js";

require = arg1;
const dependencyMap = arg6;

export default function keyframes(animationName) {
  const cSSKeyframesRuleImpl = new CSSKeyframesRuleImpl.CSSKeyframesRuleImpl(animationName);
  return cSSKeyframesRuleImpl;
}
