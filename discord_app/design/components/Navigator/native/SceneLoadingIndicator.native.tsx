// discord_app/design/components/Navigator/native/SceneLoadingIndicator.native.tsx
import ActivityIndicator_ActivityIndicator from "../../ActivityIndicator/native/ActivityIndicator.native.tsx";
import NavScrim from "NavScrim.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: closure_5().loadingContainer, children: null };
  const items = [React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), React3(NavScrim.NavScrim, {})];
  obj.children = items;
  return React4(View, obj);
};
