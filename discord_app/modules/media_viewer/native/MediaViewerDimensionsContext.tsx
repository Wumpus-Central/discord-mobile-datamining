// discord_app/modules/media_viewer/native/MediaViewerDimensionsContext.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import c from "../../../../_runtime/00576_c.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(4);
      children = children.children;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ignoreKeyboard: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp4 = useWindowDimensionsDefault(first);
      if (cResult[1] === children) {
        if (cResult[2] === tmp4) {
          let tmp5 = cResult[3];
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = tmp2;
export const useMediaViewerDimensions = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const context = noop.useContext(closure_5);
      _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
      return context;
    }
  : () => {
      const context = noop.useContext(closure_5);
      _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
      return context;
    };
