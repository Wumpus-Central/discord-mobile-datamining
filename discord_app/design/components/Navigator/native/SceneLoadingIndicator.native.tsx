// discord_app/design/components/Navigator/native/SceneLoadingIndicator.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import ActivityIndicator_ActivityIndicator from "../../ActivityIndicator/native/ActivityIndicator.native.tsx";
import NavScrim from "NavScrim.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        const tmp9 = React3(NavScrim.NavScrim, {});
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.loadingContainer) {
        const obj2 = { style: tmp4.loadingContainer, children: null };
        const items = [tmp5, tmp6];
        obj2.children = items;
        const tmp13 = React4(View, obj2);
        cResult[2] = tmp4.loadingContainer;
        cResult[3] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : () => {
      const obj = { style: closure_5().loadingContainer, children: null };
      const items = [React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), React3(NavScrim.NavScrim, {})];
      obj.children = items;
      return React4(View, obj);
    };
