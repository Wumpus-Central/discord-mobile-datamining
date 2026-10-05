// discord_app/design/components/Navigator/native/SceneLoadingIndicator.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ActivityIndicator_ActivityIndicator from "../../ActivityIndicator/native/ActivityIndicator.native.tsx";
import NavScrim from "NavScrim.android.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let tmp10;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = _false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        const tmp9 = _false(NavScrim.NavScrim, {});
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.loadingContainer) {
        const obj2 = { style: tmp4.loadingContainer, children: items };
        items = [tmp5, tmp6];
        const tmp13 = React3(View, obj2);
        cResult[2] = tmp4.loadingContainer;
        cResult[3] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : () => {
      let items;
      const obj = { style: closure_5().loadingContainer, children: items };
      items = [_false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), _false(NavScrim.NavScrim, {})];
      return React3(View, obj);
    };
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = tmp4;
