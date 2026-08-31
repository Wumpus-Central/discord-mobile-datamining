// === Module 8809: ? ===

// Module 8809
import LegacyBaseButton from "LegacyBaseButton" /* 5620 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  obj = { gesture: nativeGesture, children: null };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj.horizontal = true;
  obj.nestedScrollEnabled = true;
  obj[1] = <ScrollView ref={arg1} />;
  return jsx(LegacyBaseButton.GestureDetector, { ref });
});
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx");

export default forwardRefResult;