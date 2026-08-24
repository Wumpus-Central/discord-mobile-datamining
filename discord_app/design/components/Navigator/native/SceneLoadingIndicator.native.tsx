// === Module 6580: SceneLoadingIndicator ===

// Module 6580 (SceneLoadingIndicator)
import noopAll from "noop" /* 19 */;
import ActivityIndicator from "ActivityIndicator" /* 5451 */;
import NavScrim from "NavScrim" /* 6581 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const result = require("set").fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: callback3().loadingContainer, children: null };
  const items = [callback(ActivityIndicator.ActivityIndicator, {}), callback(NavScrim.NavScrim, {})];
  obj[1] = items;
  return callback2(View, obj);
};