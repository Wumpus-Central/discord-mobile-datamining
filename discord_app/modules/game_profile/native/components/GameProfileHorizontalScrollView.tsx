// discord_app/modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx
import LegacyBaseButton from "../../../../../_runtime/05652_LegacyBaseButton.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
const result = require("set").fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileHorizontalScrollView.tsx",
);

export default forwardRefResult;
