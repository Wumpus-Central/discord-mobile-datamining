// === Module 8534: MediaViewerDimensionsProvider ===

// Module 8534 (MediaViewerDimensionsProvider)
import _modDef38 from "module_38" /* 38 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = importAllResult.useContext(closure_4);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};