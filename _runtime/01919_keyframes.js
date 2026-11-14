// _runtime/01919_keyframes.js
import CSSKeyframesRuleImpl from "01882_CSSKeyframesRuleImpl.js";

require = arg1;
const dependencyMap = arg6;

export default function keyframes(animationName) {
  const cSSKeyframesRuleImpl = new CSSKeyframesRuleImpl.CSSKeyframesRuleImpl(animationName);
  return cSSKeyframesRuleImpl;
}
