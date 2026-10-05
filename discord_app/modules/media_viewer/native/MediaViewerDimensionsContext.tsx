// discord_app/modules/media_viewer/native/MediaViewerDimensionsContext.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import react2 from "../../../../_runtime/00576_react.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let first;
      const obj = react2;
      const cResult = obj.c(4);
      children = children.children;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ignoreKeyboard: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp4 = useWindowDimensionsDefault(first);
      if (cResult[1] === children) {
        let tmp5;
        if (cResult[2] === tmp4) {
          tmp5 = cResult[3];
        }
        return tmp5;
      }
      const tmp6 = <redux.Provider value={tmp4}>{children}</redux.Provider>;
      cResult[1] = children;
      cResult[2] = tmp4;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : (children) => (
      <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{children.children}</redux.Provider>
    );
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const context = react.useContext(redux);
      _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
      return context;
    }
  : () => {
      const context = react.useContext(redux);
      _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
      return context;
    };
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = tmp2;
export const useMediaViewerDimensions = tmp3;
