// === Module 6455: SceneLoadingIndicator ===

// Module 6455 (SceneLoadingIndicator)
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5884 */;
import NavScrim from "NavScrim" /* 6456 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: closure_5().loadingContainer, children: null };
  const items = [React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), React3(NavScrim.NavScrim, {})];
  obj.children = items;
  return React4(View, obj);
};