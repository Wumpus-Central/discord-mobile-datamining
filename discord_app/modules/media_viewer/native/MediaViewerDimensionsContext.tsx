// === Module 8293: MediaViewerDimensionsContext ===

// Module 8293 (MediaViewerDimensionsContext)
import _modDef38 from "module_38" /* 38 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = noop.useContext(closure_4);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};