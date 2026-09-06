// discord_app/design/components/Navigator/native/SceneLoadingIndicator.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ActivityIndicator from "../../ActivityIndicator/native/ActivityIndicator.native.tsx";
import NavScrim from "NavScrim.android.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const result = require("set").fileFinishedImporting(
  "design/components/Navigator/native/SceneLoadingIndicator.native.tsx",
);

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: callback3().loadingContainer, children: null };
  const items = [callback(ActivityIndicator.ActivityIndicator, {}), callback(NavScrim.NavScrim, {})];
  obj[1] = items;
  return callback2(View, obj);
};
